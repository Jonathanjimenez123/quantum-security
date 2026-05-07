// content.js
// Escucha mensajes del background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "extract_content") {
    // Extraer el texto visible de la página (limitado a 5000 caracteres para no saturar la API)
    const pageText = document.body.innerText || "";
    sendResponse({ content: pageText.substring(0, 5000) });
  }

  if (request.action === "show_warning") {
    showPhishingWarning(request.data);
  }
});

function showPhishingWarning(data) {
  // Crear un banner de advertencia inyectado en la página
  const banner = document.createElement("div");
  banner.style.position = "fixed";
  banner.style.top = "0";
  banner.style.left = "0";
  banner.style.width = "100%";
  banner.style.backgroundColor = "#ef4444"; // Rojo de alerta
  banner.style.color = "white";
  banner.style.zIndex = "9999999";
  banner.style.padding = "16px";
  banner.style.fontFamily = "system-ui, sans-serif";
  banner.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
  banner.style.display = "flex";
  banner.style.justifyContent = "space-between";
  banner.style.alignItems = "center";

  banner.innerHTML = `
    <div style="display: flex; align-items: center; gap: 12px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
        <path d="M12 9v4"></path>
        <path d="M12 17h.01"></path>
      </svg>
      <div>
        <h3 style="margin: 0; font-size: 16px; font-weight: bold;">¡Advertencia de Phishing!</h3>
        <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.9;">${data.explanation}</p>
      </div>
    </div>
    <div style="display: flex; gap: 8px;">
      <button id="ai-shield-ignore" style="background: transparent; border: 1px solid white; color: white; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Ignorar</button>
      <button id="ai-shield-back" style="background: white; border: none; color: #ef4444; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold;">Volver a seguridad</button>
    </div>
  `;

  document.body.appendChild(banner);

  document.getElementById("ai-shield-ignore").addEventListener("click", () => {
    banner.remove();
  });

  document.getElementById("ai-shield-back").addEventListener("click", () => {
    window.history.back();
  });
}
