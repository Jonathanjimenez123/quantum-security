# Quantum Security - AI Shield v2026

![AI Shield Banner](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200&h=400)

Quantum Security (AI Shield v2026) es una plataforma avanzada de análisis de seguridad impulsada por inteligencia artificial, diseñada para detectar y prevenir amenazas de phishing, inyección de código y sitios web maliciosos en tiempo real. 

Utilizando el poder y el razonamiento visual de Gemini AI, el sistema inspecciona de manera exhaustiva la estructura, contenido y dominios de una página para generar un informe de riesgo y confianza detallado.

## 🚀 Características Principales

- **🛡️ Análisis Inteligente de URLs:** Detecta técnicas avanzadas de ofuscación de phishing, homógrafos y anomalías en subdominios.
- **👁️ Visión Artificial Antifraude:** (Próximamente) Análisis de imágenes de páginas completas para identificar portales falsificados mediante similitud visual impulsada por IA.
- **📊 Dashboards Analíticos:** Historial completo del número de amenazas bloqueadas y sitios web limpios, categorizando niveles de riesgo mediante gráficos interactivos.
- **🔒 Integración Firebase:** Sistema robusto y seguro de autenticación (basado en Google) y base de datos NoSQL con reglas exhaustivas, ofreciendo métricas de usuario protegidas.
- **⚡ Optimizado y Moderno:** Interfaz de usuario (UI) responsiva implementada en **React 18**, con **Tailwind CSS**, tipografía selecta, y animaciones sutiles.

## 🏗️ Pila de Tecnologías (Tech Stack)

- **Frontend:** React 18, TypeScript, Vite
- **Estilos:** Tailwind CSS, Lucide React (Iconos), Recharts (Gráficos)
- **Base de Datos & Auth:** Firebase (Firestore, Authentication)
- **Cerebro AI:** Google Gemini API (`@google/genai`)
- **Animaciones:** Framer Motion (`motion/react`)

## 🛠️ Configuración Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/quantum-security.git
   cd quantum-security
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno en el archivo `.env`:
   ```bash
   # Necesitarás tu API Key de Gemini:
   VITE_GEMINI_API_KEY=tu_api_key_aqui
   ```

4. Configura Firebase en la aplicación usando tu propio `firebase-applet-config.json` si es un entorno local. Si haces deploy, la app está configurada para conectar con la red.

5. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🌐 Despliegue (Deploy) Gratuito a Vercel

Vercel es la plataforma ideal y gratuita para alojar aplicaciones creadas en Vite + React. Sigue estos pasos para desplegar tu proyecto y tener un enlace público gratuito (ej. `quantum-security.vercel.app`):

1. Sube tu código a un repositorio público (o privado) en **GitHub** con el nombre *quantum-security*.
2. Entra a [Vercel](https://vercel.com/) e inicia sesión con tu cuenta de GitHub.
3. Haz clic en **Add New -> Project**.
4. Importa el repositorio `quantum-security`.
5. En **Framework Preset**, selecciona `Vite`.
6. Despliega la pestaña **Environment Variables** y agrega `VITE_GEMINI_API_KEY` con tu llave real de la API de Gemini.
7. Haz clic en **Deploy** y espera un minuto.
8. ¡Tu aplicación estará en vivo!

## 🤝 Contribuciones

Si quieres mejorar AI Shield / Quantum Security, ¡las contribuciones son gratuitas! Fork el proyecto, crea una rama (ej. `feature/nueva-seguridad`), haz commit de tus cambios y envía un Pull Request.

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT** - eres libre de utilizar, modificar y publicar este código en tus propios proyectos.
