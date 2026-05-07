import React, { useState } from 'react';

interface SoarPlaybookImportProps {
  onBack: () => void;
}

export default function SoarPlaybookImport({ onBack }: SoarPlaybookImportProps) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="bg-background-dark min-h-screen font-display text-slate-200 p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={onBack} className="p-2 rounded-lg bg-surface-dark border border-border-dark hover:bg-border-dark transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">Importar Playbook</h1>
            <p className="text-slate-400">Sube un archivo JSON o YAML con la definición del playbook.</p>
          </div>
        </div>

        <div 
          className={`border-2 border-dashed rounded-2xl p-12 text-center transition-colors ${
            isDragging ? 'border-primary bg-primary/5' : 'border-border-dark bg-surface-dark hover:border-slate-500'
          }`}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => { e.preventDefault(); setIsDragging(false); }}
        >
          <div className="w-20 h-20 bg-background-dark rounded-full flex items-center justify-center mx-auto mb-6 border border-border-dark">
            <span className="material-symbols-outlined text-4xl text-slate-400">upload_file</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Arrastra tu archivo aquí</h3>
          <p className="text-slate-400 mb-6">Soporta formatos .json y .yaml exportados desde otros sistemas SOAR.</p>
          <button className="px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors">
            Seleccionar Archivo
          </button>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 flex gap-4">
          <span className="material-symbols-outlined text-blue-400">info</span>
          <p className="text-sm text-blue-200">El sistema validará automáticamente la sintaxis y las dependencias de integración antes de guardar el playbook.</p>
        </div>
      </div>
    </div>
  );
}
