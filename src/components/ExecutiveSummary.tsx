import React from 'react';

interface ExecutiveSummaryProps {
  onBack: () => void;
}

export default function ExecutiveSummary({ onBack }: ExecutiveSummaryProps) {
  return (
    <div className="bg-background-dark min-h-screen font-display text-slate-200 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 rounded-lg bg-surface-dark border border-border-dark hover:bg-border-dark transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="text-2xl font-bold text-white">Resumen Ejecutivo Técnico</h1>
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-lg font-bold flex items-center gap-2">
            <span className="material-symbols-outlined">download</span>
            Exportar PDF
          </button>
        </div>

        <div className="bg-surface-dark border border-border-dark rounded-xl p-8 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-b border-border-dark pb-2">1. Visión General del Proyecto</h2>
            <p className="text-slate-400 leading-relaxed">
              PhishGuard es una solución de ciberseguridad de próxima generación que utiliza modelos de Inteligencia Artificial (NLP y Visión Computacional) para detectar y neutralizar ataques de phishing en tiempo real, directamente en el navegador del usuario.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-b border-border-dark pb-2">2. Arquitectura del Sistema</h2>
            <ul className="list-disc list-inside text-slate-400 space-y-2">
              <li><strong>Extensión de Navegador (Manifest V3):</strong> Intercepta peticiones y analiza el DOM localmente.</li>
              <li><strong>Motor de Inferencia Local:</strong> Modelos ligeros (TensorFlow.js) para detección offline y baja latencia.</li>
              <li><strong>Backend Cloud (API REST/GraphQL):</strong> Análisis profundo, sandboxing y actualización de modelos.</li>
              <li><strong>Dashboard de Gestión:</strong> Interfaz React para administración, reportes y configuración de políticas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 border-b border-border-dark pb-2">3. Capacidades Clave de IA</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-background-dark rounded-lg border border-border-dark">
                <h3 className="font-bold text-primary mb-2">Análisis de Sentimiento</h3>
                <p className="text-sm text-slate-400">Detecta lenguaje de urgencia, coerción o autoridad falsa en el contenido de la página.</p>
              </div>
              <div className="p-4 bg-background-dark rounded-lg border border-border-dark">
                <h3 className="font-bold text-primary mb-2">Detección de Typosquatting</h3>
                <p className="text-sm text-slate-400">Algoritmos de distancia de Levenshtein optimizados para identificar dominios visualmente similares a marcas legítimas.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
