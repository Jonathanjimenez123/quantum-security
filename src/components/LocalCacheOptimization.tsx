import React, { useState } from 'react';

interface LocalCacheOptimizationProps {
  onBack: () => void;
}

export default function LocalCacheOptimization({ onBack }: LocalCacheOptimizationProps) {
  const [cacheSize, setCacheSize] = useState(50);
  const [ttl, setTtl] = useState(24);

  return (
    <div className="bg-background-dark min-h-screen font-display text-slate-200 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={onBack} className="p-2 rounded-lg bg-surface-dark border border-border-dark hover:bg-border-dark transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">Optimización de Caché Local</h1>
            <p className="text-slate-400">Gestiona el almacenamiento en el navegador para mejorar el rendimiento.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-surface-dark border border-border-dark">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-white">Tamaño Máximo de Caché (MB)</h3>
              <span className="text-primary font-bold">{cacheSize} MB</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="200" 
              value={cacheSize} 
              onChange={(e) => setCacheSize(Number(e.target.value))}
              className="w-full h-2 bg-border-dark rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <p className="text-sm text-slate-400 mt-2">Un caché más grande permite almacenar más veredictos de URLs localmente, reduciendo la latencia de red.</p>
          </div>

          <div className="p-6 rounded-xl bg-surface-dark border border-border-dark">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-white">Tiempo de Vida (TTL) de Entradas</h3>
              <span className="text-primary font-bold">{ttl} Horas</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="72" 
              value={ttl} 
              onChange={(e) => setTtl(Number(e.target.value))}
              className="w-full h-2 bg-border-dark rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <p className="text-sm text-slate-400 mt-2">Tiempo que una URL segura permanece en caché antes de requerir un nuevo análisis de la IA.</p>
          </div>

          <div className="flex justify-between items-center p-6 rounded-xl bg-surface-dark border border-border-dark">
            <div>
              <h3 className="text-lg font-bold text-white">Estado Actual del Caché</h3>
              <p className="text-sm text-slate-400">Uso: 12.4 MB / {cacheSize} MB (2,450 entradas)</p>
            </div>
            <button className="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/50 rounded-lg font-bold hover:bg-red-500/30 transition-colors">
              Limpiar Caché
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
