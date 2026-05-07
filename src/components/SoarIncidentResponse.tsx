import React, { useState } from 'react';

interface SoarIncidentResponseProps {
  onBack: () => void;
}

export default function SoarIncidentResponse({ onBack }: SoarIncidentResponseProps) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="bg-background-dark min-h-screen font-display text-slate-200 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={onBack} className="p-2 rounded-lg bg-surface-dark border border-border-dark hover:bg-border-dark transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">Respuesta a Incidentes (SOAR)</h1>
            <p className="text-slate-400">Flujo de trabajo automatizado para el incidente #INC-8492</p>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Timeline */}
          <div className="w-64 shrink-0">
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-dark before:to-transparent">
              {[
                { step: 1, title: 'Detección', status: 'completed' },
                { step: 2, title: 'Enriquecimiento de Datos', status: 'completed' },
                { step: 3, title: 'Contención Automática', status: 'active' },
                { step: 4, title: 'Notificación a Usuarios', status: 'pending' },
                { step: 5, title: 'Cierre de Incidente', status: 'pending' },
              ].map((item) => (
                <div key={item.step} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-background-dark shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow ${
                    item.status === 'completed' ? 'bg-green-500 text-white' :
                    item.status === 'active' ? 'bg-primary text-white animate-pulse' :
                    'bg-surface-dark text-slate-500'
                  }`}>
                    <span className="material-symbols-outlined text-sm">
                      {item.status === 'completed' ? 'check' : item.step}
                    </span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border-dark bg-surface-dark shadow">
                    <h3 className={`font-bold ${item.status === 'active' ? 'text-primary' : 'text-slate-300'}`}>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          <div className="flex-1 p-6 rounded-xl bg-surface-dark border border-border-dark">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">lock</span>
              Contención Automática en Progreso
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-background-dark rounded-lg border border-border-dark flex items-center justify-between">
                <div>
                  <p className="font-bold text-white">Bloqueo de Dominio en Firewall</p>
                  <p className="text-sm text-slate-400">Añadiendo evil-login-site.com a la lista negra global.</p>
                </div>
                <span className="material-symbols-outlined text-green-400">check_circle</span>
              </div>
              <div className="p-4 bg-background-dark rounded-lg border border-border-dark flex items-center justify-between">
                <div>
                  <p className="font-bold text-white">Revocación de Sesión de Usuario</p>
                  <p className="text-sm text-slate-400">Cerrando sesiones activas para j.doe@company.com.</p>
                </div>
                <span className="material-symbols-outlined text-primary animate-spin">sync</span>
              </div>
            </div>
            <div className="mt-8 flex justify-end gap-4">
              <button className="px-4 py-2 rounded-lg bg-red-500/20 text-red-400 font-bold hover:bg-red-500/30">Abortar Playbook</button>
              <button className="px-4 py-2 rounded-lg bg-primary text-white font-bold hover:bg-primary/90">Forzar Siguiente Paso</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
