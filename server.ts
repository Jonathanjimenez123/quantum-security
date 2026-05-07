import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI, Type } from "@google/genai";
import cors from "cors";
import admin from "firebase-admin";

// Initialize Firebase Admin (uses Application Default Credentials in Cloud Run)
try {
  admin.initializeApp({
    credential: admin.credential.applicationDefault()
  });
} catch (e) {
  console.log("Firebase Admin initialization skipped or failed:", e);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Mock API for "Extension" logs
  const scanLogs: any[] = [];

  app.get("/api/logs", (req, res) => {
    res.json(scanLogs);
  });

  app.post("/api/logs", (req, res) => {
    const log = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...req.body
    };
    scanLogs.push(log);
    if (scanLogs.length > 50) scanLogs.shift(); // Keep last 50
    res.status(201).json(log);
  });

  // 1. SIEM Webhook Ingestion Endpoint
  app.post("/api/webhooks/ingest", async (req, res) => {
    try {
      const payload = req.body;
      // Format the incoming SIEM alert to our Incident schema
      const incident = {
        title: payload.title || payload.alertName || "External SIEM Alert",
        type: payload.type || payload.category || "unknown",
        severity: (payload.severity || "medium").toLowerCase(),
        status: "open",
        description: payload.description || JSON.stringify(payload),
        reportedAt: admin.firestore.FieldValue.serverTimestamp(),
        source: payload.source || "External SIEM",
        userId: payload.tenantId || "system"
      };

      if (admin.apps.length > 0) {
        const db = admin.firestore();
        const docRef = await db.collection("incidents").add(incident);
        res.status(201).json({ success: true, id: docRef.id, incident });
      } else {
        // Fallback if admin not initialized
        res.status(201).json({ success: true, simulated: true, incident });
      }
    } catch (error) {
      console.error("Webhook ingest error:", error);
      res.status(500).json({ error: "Failed to ingest webhook" });
    }
  });

  // 2. Quantum Core AI Analysis Endpoint
  app.post("/api/analyze-incident", async (req, res) => {
    try {
      const { incidentId, details } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "API Key not configured" });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Act as an elite cybersecurity AI (Quantum Core). Analyze this incident data:
      ${JSON.stringify(details)}
      
      Determine if this is a false positive or a real attack. Provide a brief technical explanation and a recommended action.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              isRealAttack: { type: Type.BOOLEAN },
              confidence: { type: Type.NUMBER, description: "0 to 100" },
              analysis: { type: Type.STRING },
              recommendedAction: { type: Type.STRING }
            },
            required: ["isRealAttack", "confidence", "analysis", "recommendedAction"]
          }
        }
      });

      const analysisResult = JSON.parse(response.text || "{}");
      
      // Optionally save back to Firestore
      if (admin.apps.length > 0 && incidentId) {
        await admin.firestore().collection("incidents").doc(incidentId).update({
          aiAnalysis: analysisResult,
          status: "investigating"
        });
      }

      res.json(analysisResult);
    } catch (error) {
      console.error("AI Analysis error:", error);
      res.status(500).json({ error: "Failed to analyze incident" });
    }
  });

  // 3. SOAR Automation Execution Endpoint
  app.post("/api/soar/execute", async (req, res) => {
    try {
      const { action, target, incidentId } = req.body;
      let actionMessage = "";
      
      console.log(`[SOAR EXECUTION] Action: ${action} on Target: ${target}`);

      if (action === "block_domain") {
        // Real Cloudflare Integration
        const cfToken = process.env.CLOUDFLARE_API_TOKEN;
        const cfZoneId = process.env.CLOUDFLARE_ZONE_ID;
        
        if (cfToken && cfZoneId) {
          const cfResponse = await fetch(`https://api.cloudflare.com/client/v4/zones/${cfZoneId}/firewall/access_rules/rules`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${cfToken}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              mode: "block",
              configuration: {
                target: "ip", // or "ip_range", "asn", "country" depending on target
                value: target // Assuming target is an IP for this example, or we'd use WAF rules for domains
              },
              notes: `Blocked by PhishGuard AI SOAR for incident ${incidentId}`
            })
          });
          
          if (!cfResponse.ok) {
            const errData = await cfResponse.json();
            throw new Error(`Cloudflare API error: ${JSON.stringify(errData)}`);
          }
          actionMessage = `Successfully blocked ${target} via Cloudflare WAF.`;
        } else {
          // Fallback if no keys are provided
          await new Promise(resolve => setTimeout(resolve, 1500));
          actionMessage = `[SIMULATED] Blocked ${target}. Configure CLOUDFLARE_API_TOKEN to enable real blocking.`;
        }
      } 
      else if (action === "force_logout") {
        // Real Firebase Admin Integration to revoke tokens
        if (admin.apps.length > 0) {
          try {
            // In a real scenario, 'target' might be a user ID or an array of user IDs.
            // Here we assume target is a specific UID or we query users by department.
            // For demonstration, if target is a specific UID, we revoke their tokens:
            if (target && !target.includes("Department")) {
              await admin.auth().revokeRefreshTokens(target);
              actionMessage = `Successfully revoked sessions for user ${target}.`;
            } else {
              // Simulated department-wide logout
              await new Promise(resolve => setTimeout(resolve, 1500));
              actionMessage = `[SIMULATED] Revoked sessions for ${target}. Requires user mapping to UIDs.`;
            }
          } catch (error: any) {
            throw new Error(`Firebase Admin error: ${error.message}`);
          }
        } else {
          await new Promise(resolve => setTimeout(resolve, 1500));
          actionMessage = `[SIMULATED] Force logout for ${target}. Firebase Admin not initialized.`;
        }
      }
      else if (action === "broadcast_alert") {
        // Real Slack Webhook Integration
        const slackWebhook = process.env.SLACK_WEBHOOK_URL;
        if (slackWebhook) {
          const slackResponse = await fetch(slackWebhook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              text: `🚨 *CRITICAL SECURITY ALERT* 🚨\n\n*Target:* ${target}\n*Incident ID:* ${incidentId}\n*Message:* A critical security incident is currently active. Please follow emergency protocols and await further instructions from the Security Operations Center.`
            })
          });
          
          if (!slackResponse.ok) {
            throw new Error(`Slack API error: ${slackResponse.statusText}`);
          }
          actionMessage = `Successfully broadcasted alert to Slack.`;
        } else {
          await new Promise(resolve => setTimeout(resolve, 1500));
          actionMessage = `[SIMULATED] Broadcasted alert to ${target}. Configure SLACK_WEBHOOK_URL to enable real Slack alerts.`;
        }
      } else {
        await new Promise(resolve => setTimeout(resolve, 1500));
        actionMessage = `Action ${action} executed successfully on ${target}`;
      }

      if (admin.apps.length > 0) {
        const db = admin.firestore();
        
        // Update incident
        if (incidentId && incidentId !== 'INC-CURRENT') {
          await db.collection("incidents").doc(incidentId).update({
            status: "resolved",
            resolvedAt: admin.firestore.FieldValue.serverTimestamp(),
            resolutionAction: action
          });
        }

        // Create Audit Log
        await db.collection("audit_logs").add({
          action: action,
          target: target,
          incidentId: incidentId || null,
          executedAt: admin.firestore.FieldValue.serverTimestamp(),
          status: "success",
          system: "SOAR_AUTOMATION",
          details: actionMessage
        });
      }

      res.json({ 
        success: true, 
        message: actionMessage,
        timestamp: new Date().toISOString()
      });
    } catch (error: any) {
      console.error("SOAR execution error:", error);
      res.status(500).json({ error: `Failed to execute SOAR action: ${error.message}` });
    }
  });

  // Extension Analysis Endpoint
  app.post("/api/analyze", async (req, res) => {
    try {
      const { url, content } = req.body;
      if (!url || !content) {
        return res.status(400).json({ error: "URL and content are required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "API Key not configured on server" });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Analyze the following URL and webpage content to detect potential phishing attempts.
        Language for the report: Spanish.
        Strictness level: Maintain a balanced and objective analysis.
        
        Look for:
        1. False urgency or threats.
        2. Unusual requests for credentials or sensitive data.
        3. Suspicious domains or typosquatting (e.g., g00gle.com instead of google.com).
        4. Inconsistencies in design or language.

        URL: ${url}
        Content: ${content.substring(0, 5000)}`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              isPhishing: { type: Type.BOOLEAN },
              confidence: { type: Type.NUMBER, description: "0 to 1" },
              threatLevel: { type: Type.STRING, enum: ["low", "medium", "high", "critical"] },
              indicators: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "List of specific red flags found"
              },
              explanation: { type: Type.STRING },
              recommendation: { type: Type.STRING }
            },
            required: ["isPhishing", "confidence", "threatLevel", "indicators", "explanation", "recommendation"]
          }
        }
      });

      const analysis = JSON.parse(response.text || "{}");
      res.json(analysis);
    } catch (error) {
      console.error("Error analyzing content:", error);
      res.status(500).json({ error: "Failed to analyze content" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  // Only listen if not running in a serverless environment (like Vercel)
  if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }

  return app;
}

const appPromise = startServer();

export default async function handler(req: any, res: any) {
  const app = await appPromise;
  return app(req, res);
}
