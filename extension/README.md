# AI Phishing Shield - Extensión de Chrome

Esta es la extensión real que se comunica con tu Dashboard.

## Cómo instalarla en tu navegador para probarla:

1. Abre Google Chrome o Microsoft Edge.
2. Ve a la página de extensiones:
   - En Chrome: `chrome://extensions/`
   - En Edge: `edge://extensions/`
3. Activa el **"Modo de desarrollador"** (Developer mode) en la esquina superior derecha.
4. Haz clic en el botón **"Cargar descomprimida"** (Load unpacked).
5. Selecciona esta carpeta (`extension`).

## Cómo conectarla a tu Dashboard en producción

Una vez que despliegues tu código en Vercel, debes actualizar el archivo `background.js` de esta extensión:

1. Abre `background.js`.
2. Busca la variable `BACKEND_URL`.
3. Cambia `"https://tu-app-en-vercel.com/api/analyze"` por la URL real de tu proyecto en Vercel.

¡Listo! Ahora la extensión analizará las páginas que visites y enviará los datos a tu dashboard.
