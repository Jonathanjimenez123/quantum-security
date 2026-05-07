import React, { useState } from 'react';

interface ConflictingExtensionsAlertsProps {
  onBack: () => void;
}

export default function ConflictingExtensionsAlerts({ onBack }: ConflictingExtensionsAlertsProps) {
  const [extensions, setExtensions] = useState([
    { id: '1', name: 'AdBlocker Pro', status: 'conflict', risk: 'High', description: 'Interferes with DOM scanning.' },
    { id: '2', name: 'Grammar Checker', status: 'warning', risk: 'Medium', description: 'May cause high CPU usage when running alongside PhishGuard.' },
    { id: '3', name: 'Password Manager', status: 'safe', risk: 'Low', description: 'Fully compatible.' },
  ]);

  return (
    <div className="bg-background-dark min-h-screen font-display text-slate-200 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={onBack} className="p-2 rounded-lg bg-surface-dark border border-border-dark hover:bg-border-dark transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">Alertas de Extensiones Conflictivas</h1>
            <p className="text-slate-400">Monitorea y gestiona extensiones que pueden interferir con PhishGuard.</p>
          </div>
        </div>

        <div className="space-y-4">
          {extensions.map(ext => (
            <div key={ext.id} className="p-4 rounded-xl bg-surface-dark border border-border-dark flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${
                  ext.status === 'conflict' ? 'bg-red-500/20 text-red-400' :
                  ext.status === 'warning' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  <span className="material-symbols-outlined">
                    {ext.status === 'conflict' ? 'error' : ext.status === 'warning' ? 'warning' : 'check_circle'}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{ext.name}</h3>
                  <p className="text-sm text-slate-400">{ext.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  ext.risk === 'High' ? 'bg-red-500/20 text-red-400' :
                  ext.risk === 'Medium' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  Riesgo: {ext.risk}
                </span>
                {ext.status !== 'safe' && (
                  <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">
                    Resolver
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
