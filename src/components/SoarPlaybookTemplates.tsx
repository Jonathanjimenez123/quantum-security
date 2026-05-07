import React from 'react';

interface SoarPlaybookTemplatesProps {
  onBack: () => void;
}

export default function SoarPlaybookTemplates({ onBack }: SoarPlaybookTemplatesProps) {
  const templates = [
    { id: 1, name: 'Contención Básica de Phishing', desc: 'Bloquea el dominio y notifica al usuario.', uses: 1240, icon: 'phishing' },
    { id: 2, name: 'Respuesta a Ransomware', desc: 'Aísla el host de la red inmediatamente.', uses: 850, icon: 'coronavirus' },
    { id: 3, name: 'Investigación de IP Sospechosa', desc: 'Enriquece datos de IP con VirusTotal.', uses: 2100, icon: 'travel_explore' },
    { id: 4, name: 'Revocación de Credenciales', desc: 'Fuerza cierre de sesión y reseteo de password.', uses: 1560, icon: 'key_off' },
  ];

  return (
    <div className="bg-background-dark min-h-screen font-display text-slate-200 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 rounded-lg bg-surface-dark border border-border-dark hover:bg-border-dark transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white">Biblioteca de Plantillas</h1>
              <p className="text-slate-400">Playbooks preconfigurados por expertos en seguridad.</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-surface-dark border border-border-dark text-white rounded-lg font-bold hover:bg-border-dark transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined">upload</span>
            Importar Personalizado
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map(tpl => (
            <div key={tpl.id} className="p-6 rounded-xl bg-surface-dark border border-border-dark hover:border-primary/50 transition-colors group cursor-pointer flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">{tpl.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{tpl.name}</h3>
              <p className="text-sm text-slate-400 mb-6 flex-1">{tpl.desc}</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-dark">
                <span className="text-xs text-slate-500">{tpl.uses} usos globales</span>
                <button className="text-primary font-bold text-sm hover:underline">Usar Plantilla</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
