// popup.js
document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({active: true, currentWindow: true}, async (tabs) => {
    const currentUrl = tabs[0].url;
    
    const statusBox = document.getElementById('status-box');
    const statusText = statusBox.querySelector('.status-text');
    const statusIcon = statusBox.querySelector('svg');
    const description = document.querySelector('p');

    statusText.textContent = 'Analizando...';
    
    try {
      // Execute script to get content
      const results = await chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => document.documentElement.innerText
      });
      
      const content = results[0]?.result || "";
      
      const BACKEND_URL = "https://ais-dev-xfvp7vgehsqw477kknfyjc-138698933305.us-east1.run.app/api/analyze"; 
      const res = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: currentUrl, content: content.substring(0, 5000) })
      });
      
      if (!res.ok) throw new Error('Error de red');
      
      const analysis = await res.json();

      if (analysis.isPhishing) {
        statusBox.className = 'status danger';
        statusText.textContent = 'Página Peligrosa';
        statusText.style.color = '#ef4444';
        statusIcon.setAttribute('stroke', '#ef4444');
        statusIcon.innerHTML = '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>';
        description.textContent = analysis.explanation || 'Esta página ha sido marcada como potencialmente peligrosa. Recomendamos no ingresar credenciales.';
      } else {
        statusBox.className = 'status safe';
        statusText.textContent = 'Página Segura';
        statusText.style.color = '#10b981';
        statusIcon.setAttribute('stroke', '#10b981');
        statusIcon.innerHTML = '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>';
        description.textContent = 'Esta página parece segura. No se detectaron indicadores de phishing.';
      }
    } catch (err) {
      statusText.textContent = 'Error al analizar';
      description.textContent = 'No se pudo completar el análisis de la página.';
    }
  });
});
