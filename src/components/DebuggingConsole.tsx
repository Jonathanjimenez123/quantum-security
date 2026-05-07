import React, { useState, useEffect } from 'react';

interface DebuggingConsoleProps {
  onBack: () => void;
}

export default function DebuggingConsole({ onBack }: DebuggingConsoleProps) {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const actions = ['Analyzing DOM...', 'Checking URL reputation...', 'NLP Model Inference...', 'Cache hit for domain.', 'Awaiting response from AI backend...'];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      setLogs(prev => [`[${new Date().toISOString().split('T')[1].split('.')[0]}] [INFO] ${randomAction}`, ...prev].slice(0, 50));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background-dark min-h-screen font-mono text-slate-300 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4 shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 rounded-lg bg-surface-dark border border-border-dark hover:bg-border-dark transition-colors font-display">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold text-white font-display">Consola de Debugging (Tiempo Real)</h1>
        </div>
        <div className="flex gap-2 font-display">
          <button onClick={() => setLogs([])} className="px-4 py-2 rounded-lg bg-surface-dark border border-border-dark hover:bg-border-dark text-sm">Clear</button>
          <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold">Export Logs</button>
        </div>
      </div>

      <div className="flex-1 bg-black rounded-xl border border-border-dark p-4 overflow-y-auto custom-scrollbar">
        {logs.map((log, index) => (
          <div key={index} className="text-sm mb-1">
            <span className="text-green-400">{log.split('] ')[0]}]</span>
            <span className="text-blue-400">{log.split('] ')[1]}]</span>
            <span className="text-slate-300">{log.split('] ')[2]}</span>
          </div>
        ))}
        {logs.length === 0 && <div className="text-slate-500 italic">Esperando eventos del sistema...</div>}
      </div>
    </div>
  );
}
