import React from 'react';

interface SoarPlaybookEditorProps {
  onBack: () => void;
}

export default function SoarPlaybookEditor({ onBack }: SoarPlaybookEditorProps) {
  return (
    <div className="bg-background-dark min-h-screen font-display text-slate-200 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-border-dark bg-surface-dark shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 rounded-lg hover:bg-border-dark transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-lg font-bold text-white">Editor de Playbooks</h1>
            <p className="text-xs text-slate-400">Borrador: Contención de Phishing Avanzada</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg bg-surface-dark border border-border-dark hover:bg-border-dark text-sm font-bold">Probar</button>
          <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold">Guardar y Activar</button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Tools */}
        <div className="w-64 border-r border-border-dark bg-surface-dark p-4 overflow-y-auto">
          <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Nodos Disponibles</h3>
          <div className="space-y-2">
            <div className="p-3 rounded-lg border border-border-dark bg-background-dark flex items-center gap-3 cursor-grab hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-blue-400">webhook</span>
              <span className="text-sm font-medium">Trigger (Webhook)</span>
            </div>
            <div className="p-3 rounded-lg border border-border-dark bg-background-dark flex items-center gap-3 cursor-grab hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-orange-400">call_split</span>
              <span className="text-sm font-medium">Condición Lógica</span>
            </div>
            <div className="p-3 rounded-lg border border-border-dark bg-background-dark flex items-center gap-3 cursor-grab hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-red-400">block</span>
              <span className="text-sm font-medium">Bloquear Dominio</span>
            </div>
            <div className="p-3 rounded-lg border border-border-dark bg-background-dark flex items-center gap-3 cursor-grab hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-green-400">mail</span>
              <span className="text-sm font-medium">Enviar Email</span>
            </div>
          </div>
        </div>

        {/* Canvas Area (Mock) */}
        <div className="flex-1 bg-background-dark relative overflow-hidden" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8">
            <div className="p-4 rounded-xl border-2 border-blue-500 bg-surface-dark shadow-lg w-64 text-center">
              <span className="material-symbols-outlined text-blue-500 mb-2">warning</span>
              <h4 className="font-bold text-white">Alerta de Phishing</h4>
              <p className="text-xs text-slate-400">Confianza &gt; 90%</p>
            </div>
            <div className="w-0.5 h-8 bg-slate-600 relative">
              <div className="absolute -bottom-2 -left-1.5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-600"></div>
            </div>
            <div className="flex gap-8">
              <div className="p-4 rounded-xl border border-border-dark bg-surface-dark shadow-lg w-48 text-center">
                <span className="material-symbols-outlined text-red-400 mb-2">block</span>
                <h4 className="font-bold text-white text-sm">Bloquear en Firewall</h4>
              </div>
              <div className="p-4 rounded-xl border border-border-dark bg-surface-dark shadow-lg w-48 text-center">
                <span className="material-symbols-outlined text-green-400 mb-2">mail</span>
                <h4 className="font-bold text-white text-sm">Notificar a SecOps</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
