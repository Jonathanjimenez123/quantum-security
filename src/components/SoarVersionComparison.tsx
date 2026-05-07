import React from 'react';

interface SoarVersionComparisonProps {
  onBack: () => void;
}

export default function SoarVersionComparison({ onBack }: SoarVersionComparisonProps) {
  return (
    <div className="bg-background-dark min-h-screen font-display text-slate-200 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 rounded-lg bg-surface-dark border border-border-dark hover:bg-border-dark transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white">Comparación de Versiones</h1>
              <p className="text-slate-400">Playbook: Contención de Phishing</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <select className="bg-surface-dark border border-border-dark text-white text-sm rounded-lg p-2 outline-none">
              <option>v2.1 (Actual)</option>
              <option>v2.0</option>
            </select>
            <span className="text-slate-500">vs</span>
            <select className="bg-surface-dark border border-border-dark text-white text-sm rounded-lg p-2 outline-none">
              <option>v2.0</option>
              <option>v1.5</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border-dark rounded-xl overflow-hidden border border-border-dark">
          {/* Version A */}
          <div className="bg-surface-dark p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-between">
              Versión 2.1 (Actual)
              <span className="text-xs font-normal text-slate-400">Modificado hace 2 días</span>
            </h3>
            <div className="font-mono text-sm space-y-2">
              <div className="text-slate-300">name: "Phishing Containment"</div>
              <div className="text-slate-300">trigger: "High Confidence Alert"</div>
              <div className="text-slate-300">actions:</div>
              <div className="pl-4 text-slate-300">- type: "block_domain"</div>
              <div className="pl-4 text-slate-300">- type: "notify_user"</div>
              <div className="pl-4 bg-green-500/20 text-green-400 p-1 rounded">- type: "force_password_reset" <span className="text-xs ml-2 opacity-70">// Añadido</span></div>
            </div>
          </div>

          {/* Version B */}
          <div className="bg-surface-dark p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-between">
              Versión 2.0
              <span className="text-xs font-normal text-slate-400">Modificado hace 1 mes</span>
            </h3>
            <div className="font-mono text-sm space-y-2">
              <div className="text-slate-300">name: "Phishing Containment"</div>
              <div className="text-slate-300">trigger: "High Confidence Alert"</div>
              <div className="text-slate-300">actions:</div>
              <div className="pl-4 text-slate-300">- type: "block_domain"</div>
              <div className="pl-4 text-slate-300">- type: "notify_user"</div>
              <div className="pl-4 bg-red-500/20 text-red-400 p-1 rounded">- type: "log_only" <span className="text-xs ml-2 opacity-70">// Eliminado</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
