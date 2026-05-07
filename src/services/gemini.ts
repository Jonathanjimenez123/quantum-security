import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

export interface PhishingIndicator {
  flag: string;
  explanation: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface PhishingAnalysis {
  isPhishing: boolean;
  confidence: number;
  threatLevel: 'low' | 'medium' | 'high' | 'critical';
  indicators: PhishingIndicator[];
  explanation: string;
  recommendation: string;
}

export interface AiSettings {
  modelName: string;
  strictnessLevel: 'low' | 'medium' | 'high';
  language: 'es' | 'en';
  autoBlock: boolean;
}

export async function analyzeContent(url: string, content: string, settings?: AiSettings): Promise<PhishingAnalysis> {
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const modelToUse = settings?.modelName || "gemini-3-flash-preview";
  const language = settings?.language === 'en' ? 'English' : 'Spanish';
  
  let strictnessPrompt = '';
  if (settings?.strictnessLevel === 'high') {
    strictnessPrompt = 'Be extremely strict. Flag even slightly suspicious elements as high risk.';
  } else if (settings?.strictnessLevel === 'low') {
    strictnessPrompt = 'Be lenient. Only flag obvious and critical phishing attempts.';
  } else {
    strictnessPrompt = 'Maintain a balanced and objective analysis.';
  }

  const prompt = `Analyze the following URL and webpage content to detect potential phishing attempts.
    Language for the report: ${language}.
    Strictness level: ${strictnessPrompt}
    
    Look for:
    1. False urgency or threats.
    2. Unusual requests for credentials or sensitive data.
    3. Suspicious domains or typosquatting (e.g., g00gle.com instead of google.com).
    4. Inconsistencies in design or language.

    URL: ${url}
    Content: ${content.substring(0, 5000)}`;

  const response = await ai.models.generateContent({
    model: modelToUse,
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
            items: { 
              type: Type.OBJECT,
              properties: {
                flag: { type: Type.STRING, description: "The specific red flag found" },
                explanation: { type: Type.STRING, description: "Detailed explanation of why this is suspicious" },
                severity: { type: Type.STRING, enum: ["low", "medium", "high", "critical"] }
              },
              required: ["flag", "explanation", "severity"]
            },
            description: "List of specific red flags found with explanations"
          },
          explanation: { type: Type.STRING },
          recommendation: { type: Type.STRING }
        },
        required: ["isPhishing", "confidence", "threatLevel", "indicators", "explanation", "recommendation"]
      }
    }
  });

  try {
    return JSON.parse(response.text || "{}");
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    throw new Error("Error al analizar el contenido");
  }
}
