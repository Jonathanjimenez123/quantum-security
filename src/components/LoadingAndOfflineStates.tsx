import React, { useState, useEffect } from 'react';

interface LoadingAndOfflineStatesProps {
  onBack: () => void;
}

export default function LoadingAndOfflineStates({ onBack }: LoadingAndOfflineStatesProps) {
  const [isOffline, setIsOffline] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background-dark min-h-screen font-display text-slate-200 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 rounded-lg bg-surface-dark border border-border-dark hover:bg-border-dark transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white">Estados de Carga y Offline</h1>
              <p className="text-slate-400">Demostración de Skeleton Screens y Protección Offline.</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOffline(!isOffline)}
            className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${isOffline ? 'bg-red-500/20 text-red-400 border border-red-500/50' : 'bg-green-500/20 text-green-400 border border-green-500/50'}`}
          >
            {isOffline ? 'Simular Online' : 'Simular Offline'}
          </button>
        </div>

        {isOffline ? (
          <div className="p-8 rounded-xl bg-red-500/10 border border-red-500/30 text-center">
            <span className="material-symbols-outlined text-6xl text-red-400 mb-4">wifi_off</span>
            <h2 className="text-2xl font-bold text-white mb-2">Conexión Perdida</h2>
            <p className="text-slate-400 mb-6">PhishGuard está utilizando el modelo local ligero para mantenerte protegido.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-dark border border-border-dark">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300">Protección Local Activa</span>
            </div>
          </div>
        ) : isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-4 rounded-xl bg-surface-dark border border-border-dark flex items-center gap-4 animate-pulse">
                <div className="w-12 h-12 rounded-lg bg-border-dark"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-border-dark rounded w-1/4"></div>
                  <div className="h-3 bg-border-dark rounded w-1/2"></div>
                </div>
                <div className="w-20 h-8 rounded-lg bg-border-dark"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-xl bg-surface-dark border border-border-dark text-center">
            <span className="material-symbols-outlined text-6xl text-primary mb-4">check_circle</span>
            <h2 className="text-2xl font-bold text-white mb-2">Análisis Completado</h2>
            <p className="text-slate-400">Todos los sistemas están en línea y funcionando correctamente.</p>
            <button onClick={() => setIsLoading(true)} className="mt-6 px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors">
              Recargar Datos
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
