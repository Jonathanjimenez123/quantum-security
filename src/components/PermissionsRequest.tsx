import React, { useState } from 'react';

interface PermissionsRequestProps {
  onBack: () => void;
}

export default function PermissionsRequest({ onBack }: PermissionsRequestProps) {
  const [permissions, setPermissions] = useState([
    { id: 'tabs', name: 'Leer historial de navegación', description: 'Necesario para analizar las URLs que visitas en tiempo real.', granted: false, icon: 'history' },
    { id: 'webRequest', name: 'Interceptar peticiones web', description: 'Permite bloquear sitios maliciosos antes de que carguen.', granted: false, icon: 'block' },
    { id: 'storage', name: 'Almacenamiento local', description: 'Guarda configuraciones y modelos de IA ligeros para protección offline.', granted: true, icon: 'storage' }
  ]);

  const togglePermission = (id: string) => {
    setPermissions(permissions.map(p => p.id === id ? { ...p, granted: !p.granted } : p));
  };

  return (
    <div className="bg-background-dark min-h-screen font-display text-slate-200 p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-3xl">security</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Permisos Requeridos</h1>
          <p className="text-slate-400">PhishGuard necesita estos permisos para protegerte eficazmente (Manifest V3).</p>
        </div>

        <div className="space-y-4 mb-8">
          {permissions.map(perm => (
            <div key={perm.id} className="p-4 rounded-xl bg-surface-dark border border-border-dark flex items-start gap-4">
              <div className="p-2 bg-border-dark rounded-lg text-slate-300 mt-1">
                <span className="material-symbols-outlined">{perm.icon}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">{perm.name}</h3>
                <p className="text-sm text-slate-400 mb-3">{perm.description}</p>
                <button 
                  onClick={() => togglePermission(perm.id)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-colors ${
                    perm.granted ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  {perm.granted ? 'Permitido' : 'Conceder Permiso'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <button onClick={onBack} className="px-6 py-2 rounded-lg text-slate-400 hover:text-white transition-colors">
            Volver
          </button>
          <button className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={!permissions.every(p => p.granted)}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
