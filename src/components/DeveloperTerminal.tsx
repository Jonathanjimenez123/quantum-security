import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

export default function DeveloperTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ type: 'input' | 'output' | 'error', text: string }[]>([
    { type: 'output', text: 'AI Shield Terminal v4.2.1' },
    { type: 'output', text: 'Type "help" for a list of available commands.' },
    { type: 'output', text: 'Connected to secure server: ais-dev-xfvp7vgehsqw477kknfyjc-138698933305.us-east1.run.app' },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: 'input' as const, text: input }];

    switch (cmd) {
      case 'help':
        newHistory.push({ type: 'output', text: 'Available commands:' });
        newHistory.push({ type: 'output', text: '  status    - Check system status' });
        newHistory.push({ type: 'output', text: '  scan      - Run deep system scan' });
        newHistory.push({ type: 'output', text: '  clear     - Clear terminal output' });
        newHistory.push({ type: 'output', text: '  whoami    - Display current user info' });
        newHistory.push({ type: 'output', text: '  ping      - Ping AI core' });
        break;
      case 'status':
        newHistory.push({ type: 'output', text: 'System Status: ONLINE' });
        newHistory.push({ type: 'output', text: 'AI Core: ACTIVE' });
        newHistory.push({ type: 'output', text: 'Threat Level: LOW' });
        break;
      case 'scan':
        newHistory.push({ type: 'output', text: 'Initiating deep scan...' });
        newHistory.push({ type: 'output', text: '[OK] Network interfaces' });
        newHistory.push({ type: 'output', text: '[OK] Firewall rules' });
        newHistory.push({ type: 'output', text: '[OK] Active sessions' });
        newHistory.push({ type: 'output', text: 'Scan complete. No anomalies detected.' });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'whoami':
        newHistory.push({ type: 'output', text: `User: ${auth.currentUser?.displayName || 'Admin'}` });
        newHistory.push({ type: 'output', text: `Email: ${auth.currentUser?.email || 'N/A'}` });
        newHistory.push({ type: 'output', text: 'Role: Security Guardian' });
        newHistory.push({ type: 'output', text: 'Clearance: Level 5' });
        break;
      case 'ping':
        newHistory.push({ type: 'output', text: 'Pinging AI core...' });
        newHistory.push({ type: 'output', text: 'Reply from AI core: bytes=32 time=12ms TTL=119' });
        break;
      default:
        newHistory.push({ type: 'error', text: `Command not found: ${cmd}` });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-mono">
      <div className="flex items-center justify-between p-4 border-b border-border-dark bg-surface-dark">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">terminal</span>
          <h1 className="text-xl font-bold">Terminal de Desarrollador</h1>
        </div>
        <Link to="/panel" className="text-slate-400 hover:text-white transition-colors">
          <span className="material-symbols-outlined">close</span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-black text-green-400">
        {history.map((line, i) => (
          <div key={i} className={`mb-1 ${line.type === 'error' ? 'text-red-500' : line.type === 'input' ? 'text-white' : 'text-green-400'}`}>
            {line.type === 'input' ? <span className="text-blue-400 mr-2">admin@ai-shield:~$</span> : null}
            {line.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleCommand} className="p-4 bg-black border-t border-slate-800 flex items-center">
        <span className="text-blue-400 mr-2">admin@ai-shield:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-white font-mono"
          autoFocus
        />
      </form>
    </div>
  );
}
