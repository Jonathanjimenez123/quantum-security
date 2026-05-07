// background.js
// Escucha cuando el usuario navega a una nueva página
chrome.webNavigation.onCompleted.addListener((details) => {
  // Solo analizar el frame principal
  if (details.frameId === 0) {
    const url = details.url;
    
    // Ignorar páginas internas del navegador
    if (url.startsWith('chrome://') || url.startsWith('edge://')) return;

    // Pedir al content script que extraiga el texto de la página
    chrome.tabs.sendMessage(details.tabId, { action: "extract_content" }, (response) => {
      if (chrome.runtime.lastError || !response) {
        console.log("No se pudo extraer el contenido:", chrome.runtime.lastError);
        return;
      }

      const content = response.content;
      analyzeWithBackend(url, content, details.tabId);
    });
  }
});

async function analyzeWithBackend(url, content, tabId) {
  try {
    // En producción, esta URL debe ser la de tu backend/Vercel (ej. https://tu-app.vercel.app/api/analyze)
    // Por seguridad, la extensión NO debe tener la API Key de Gemini, debe enviarlo a tu backend.
    const BACKEND_URL = "https://ais-dev-xfvp7vgehsqw477kknfyjc-138698933305.us-east1.run.app/api/analyze"; 
    
    console.log(`Analizando URL: ${url}`);
    
    const res = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, content: content.substring(0, 5000) })
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const analysis = await res.json();

    if (analysis.isPhishing) {
      // Cambiar el badge a rojo
      chrome.action.setBadgeText({ text: "!", tabId });
      chrome.action.setBadgeBackgroundColor({ color: "#ef4444", tabId });
      
      // Mostrar alerta en la página
      chrome.tabs.sendMessage(tabId, { 
        action: "show_warning", 
        data: {
          threatLevel: analysis.threatLevel,
          explanation: analysis.explanation
        } 
      });
    } else {
      // Limpiar el badge
      chrome.action.setBadgeText({ text: "", tabId });
    }

  } catch (error) {
    console.error("Error en el análisis:", error);
  }
}
