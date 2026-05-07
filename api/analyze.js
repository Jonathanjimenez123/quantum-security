import { GoogleGenAI, Type } from "@google/genai";

export default async function handler(req, res) {
  // Solo permitir solicitudes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { url, content } = req.body;

  if (!url || !content) {
    return res.status(400).json({ message: 'URL and content are required' });
  }

  try {
    // En Vercel, la clave se lee de las variables de entorno de forma segura
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return res.status(500).json({ message: 'API Key not configured' });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analiza la siguiente URL y contenido de una página web para detectar posibles intentos de phishing. 
      Busca:
      1. Urgencia falsa o amenazas.
      2. Peticiones inusuales de credenciales o datos sensibles.
      3. Dominios sospechosos o typosquatting.
      4. Incoherencias en el diseño o lenguaje.

      URL: ${url}
      Contenido: ${content.substring(0, 5000)}`,
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
              items: { type: Type.STRING }
            },
            explanation: { type: Type.STRING },
            recommendation: { type: Type.STRING }
          },
          required: ["isPhishing", "confidence", "threatLevel", "indicators", "explanation", "recommendation"]
        }
      }
    });

    const analysis = JSON.parse(response.text || "{}");
    return res.status(200).json(analysis);

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
