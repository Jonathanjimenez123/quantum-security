import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SoarAutomationModuleProps {
  onBack?: () => void;
}

export default function SoarAutomationModule({ onBack }: SoarAutomationModuleProps) {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col font-body antialiased overflow-hidden selection:bg-primary-container/30 selection:text-primary bg-background text-on-background">
      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,242,255,0.03)] font-['Space_Grotesk'] tracking-tight">
        <div className="flex items-center gap-8">
          <div className="font-mono font-bold text-cyan-400 tracking-widest text-lg">QUANTUM SECURITY ARCHITECTURE</div>
          <div className="hidden md:flex gap-6">
            <a className="text-slate-500 hover:text-slate-300 hover:bg-cyan-400/10 transition-all duration-300 py-1 scale-95 active:opacity-80" href="#">Network</a>
            <a className="text-cyan-400 border-b-2 border-cyan-400 pb-1 hover:bg-cyan-400/10 transition-all duration-300 scale-95 active:opacity-80" href="#">Algorithms</a>
            <a className="text-slate-500 hover:text-slate-300 hover:bg-cyan-400/10 transition-all duration-300 py-1 scale-95 active:opacity-80" href="#">Vault</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 p-2 scale-95 active:opacity-80 flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">security</span>
          </button>
          <button className="text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 p-2 scale-95 active:opacity-80 flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">terminal</span>
          </button>
          <button onClick={() => onBack ? onBack() : navigate(-1)} className="text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 p-2 scale-95 active:opacity-80 flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          <button className="bg-primary-container text-on-primary-container font-mono text-sm px-4 py-2 hover:shadow-[0_0_15px_rgba(0,242,255,0.5)] transition-all uppercase scale-95 active:opacity-80 font-bold">SYSTEM AUTHORIZE</button>
        </div>
      </nav>

      {/* Main Layout Container */}
      <div className="flex flex-1 mt-16 h-[calc(100vh-64px)] overflow-hidden">
        {/* SideNavBar */}
        <aside className="w-64 bg-slate-950 border-r border-white/5 flex flex-col justify-between py-6 flex-shrink-0 z-40 transition-colors duration-150 ease-in-out font-mono text-xs uppercase tracking-widest">
          <div className="px-6 mb-8 flex flex-col gap-3">
            <img alt="Jonathan Jimenez Escobar Lead Profile" className="w-12 h-12 object-cover border border-outline-variant opacity-80" src="https://lh3.googleusercontent.com/aida/ADBb0uhfVeMr7Xm6HfLOqJXuZyxdH6OOUZs6tMKlV_wa0gntgQi8g54izGMqzRbCa-T7I0wlxD33obbSx7SCsrG0svzSM-mzcPigBPL4yiEstajx0Bip_rFS74fUumLijBsk42B4SIcoGJepOEw2Jyiz6OOAGd-QxnHVLIhDBQ1cMd9v-KpDROn_mGkyNuQYLCRsrvD2cxkwFAhGR-C4rXfuJlMKufby43IlB74SApbKQtR5LKvc0ni3woscMrQoU0CC5VW08lT1NO89uw"/>
            <div>
              <div className="text-slate-500 text-[10px]">LEAD ARCHITECT</div>
              <div className="text-cyan-400 font-bold">J. Jimenez Escobar</div>
            </div>
            <button className="mt-2 w-full border border-tertiary text-tertiary px-3 py-1.5 hover:bg-tertiary/10 transition-colors">INITIATE OVERRIDE</button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300" href="#">
              <span className="material-symbols-outlined text-[18px]">insights</span>
              Entropy Monitor
            </a>
            <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300" href="#">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              Hybrid Certs
            </a>
            <a className="bg-slate-900 text-cyan-400 border-r-2 border-cyan-400 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300" href="#">
              <span className="material-symbols-outlined text-[18px]">hub</span>
              PQC Algorithms
            </a>
            <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300" href="#">
              <span className="material-symbols-outlined text-[18px]">vpn_key</span>
              Key Management
            </a>
            <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300" href="#">
              <span className="material-symbols-outlined text-[18px]">settings_ethernet</span>
              System Logs
            </a>
          </div>

          <div className="mt-auto border-t border-white/5 pt-4">
            <a className="text-slate-500 flex items-center gap-4 px-6 py-3 hover:bg-slate-900/50 hover:text-cyan-300" href="#">
              <span className="material-symbols-outlined text-[18px]">biotech</span>
              Diagnostics
            </a>
            <a className="text-slate-500 flex items-center gap-4 px-6 py-3 hover:bg-slate-900/50 hover:text-cyan-300" href="#">
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              Help
            </a>
          </div>
        </aside>

        {/* Main Content Area (IDE) */}
        <main className="flex-1 flex flex-col bg-surface-container-low overflow-hidden relative">
          {/* File Tabs Bar */}
          <div className="h-10 bg-surface-container flex items-center border-b border-surface-container-highest shrink-0 overflow-x-auto px-2">
             <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low border-t-2 border-primary text-primary font-mono text-xs cursor-pointer shadow-[0_10px_20px_rgba(0,242,255,0.02)]">
                <span className="material-symbols-outlined text-[14px] text-secondary">code</span>
                soar_playbook_final.py
                <span className="material-symbols-outlined text-[14px] text-on-surface-variant hover:text-error cursor-pointer ml-2 flex items-center justify-center">close</span>
             </div>
             <div className="flex items-center gap-2 px-4 py-2 text-on-surface-variant font-mono text-xs cursor-pointer hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined text-[14px]">description</span>
                threat_model_v2.md
             </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
             {/* Code Editor Canvas */}
             <div className="flex-1 bg-surface flex flex-col font-mono text-sm overflow-auto relative p-4 custom-scrollbar">
                {/* Line Numbers & Code Grid */}
                <div className="flex min-w-max">
                   {/* Line Numbers */}
                   <div className="w-12 shrink-0 text-on-surface-variant/50 text-right pr-4 select-none leading-relaxed border-r border-surface-container-highest pt-2">
                       {[...Array(20)].map((_, i) => <div key={i}>{i + 1}</div>)}
                   </div>
                   
                   {/* The Code */}
                   <div className="flex-1 pl-4 pt-2 leading-relaxed whitespace-pre font-mono">
<span className="text-on-surface-variant italic"># AI Shield 2026 - SOAR Engine Architecture</span><br/>
<span className="text-on-surface-variant italic"># Author: Jonathan Jimenez Escobar</span><br/>
<span className="text-on-surface-variant italic"># Status: 2026.FINAL | Complexity: Mission Critical</span><br/>
<span className="text-secondary">def</span> <span className="text-primary-dim">evaluate_quantum_threat</span>(node_data):<br/>
    <span className="text-on-surface-variant italic">"""Analyzes incoming quantum telemetry for anomaly signatures."""</span><br/>
    threat_level = engine.predict_anomaly(node_data.stream)<br/>
    <br/>
    <span className="text-secondary">if</span> threat_level &gt; <span className="text-tertiary">0.85</span>:<br/>
        <span className="text-on-surface-variant italic"># Critical threshold breached</span><br/>
        logger.warn(<span className="text-primary">f"CRITICAL: Threat level {"{"}threat_level{"}"} detected."</span>)<br/>
        <br/>
        <span className="text-secondary">try</span>:<br/>
            <span className="text-primary-dim">isolate_node</span>(node_data.id, protocol=<span className="text-primary">'Q-LOCK-ALPHA'</span>)<br/>
            <span className="text-primary-dim">notify_admin</span>(priority=<span className="text-primary">'URGENT'</span>, payload=node_data.signature)<br/>
            <br/>
            <span className="text-secondary">return</span> {"{"}<br/>
                <span className="text-primary">"status"</span>: <span className="text-primary">"ISOLATED"</span>,<br/>
                <span className="text-primary">"confidence"</span>: threat_level,<br/>
                <span className="text-primary">"action_taken"</span>: <span className="text-primary">True</span><br/>
            {"}"}<br/>
        <span className="text-secondary">except</span> QuarantineException <span className="text-secondary">as</span> e:<br/>
            <span className="text-primary-dim">initiate_fallback_containment</span>()<br/>
            <br/>
    <span className="text-secondary">return</span> {"{"}<span className="text-primary">"status"</span>: <span className="text-primary">"NOMINAL"</span>, <span className="text-primary">"confidence"</span>: threat_level{"}"}<br/>
                   </div>
                </div>
                {/* Ambient Glow Effect overlay */}
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
             </div>

             {/* Right Metadata Panel (Bento/Glassmorphism style) */}
             <aside className="w-80 bg-surface-container-low border-l border-surface-container-highest flex flex-col shrink-0 overflow-y-auto">
                {/* Panel Header */}
                <div className="p-6 border-b border-surface-container-highest">
                   <h2 className="font-headline font-bold text-on-surface text-lg uppercase tracking-wider mb-1">SOAR ENGINE ARCHITECTURE</h2>
                   <div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant uppercase tracking-widest">
                       <span className="w-2 h-2 bg-primary rounded-none shadow-[0_0_8px_rgba(0,242,255,0.6)]"></span>
                       Live Telemetry Active
                   </div>
                </div>

                <div className="p-6 flex flex-col gap-6">
                   {/* Author Module */}
                   <div className="bg-surface border border-outline-variant/30 p-4 relative overflow-hidden group hover:border-outline-variant transition-colors">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 blur-xl"></div>
                      <div className="text-xs font-mono text-on-surface-variant mb-3 uppercase tracking-widest">Author Identity</div>
                      <div className="flex items-center gap-4">
                         <img alt="Author Avatar" className="w-12 h-12 object-cover opacity-90 border border-outline-variant group-hover:border-primary transition-colors" src="https://lh3.googleusercontent.com/aida/ADBb0uhfVeMr7Xm6HfLOqJXuZyxdH6OOUZs6tMKlV_wa0gntgQi8g54izGMqzRbCa-T7I0wlxD33obbSx7SCsrG0svzSM-mzcPigBPL4yiEstajx0Bip_rFS74fUumLijBsk42B4SIcoGJepOEw2Jyiz6OOAGd-QxnHVLIhDBQ1cMd9v-KpDROn_mGkyNuQYLCRsrvD2cxkwFAhGR-C4rXfuJlMKufby43IlB74SApbKQtR5LKvc0ni3woscMrQoU0CC5VW08lT1NO89uw"/>
                         <div>
                            <div className="font-bold text-on-surface text-sm">Jonathan Jimenez Escobar</div>
                            <div className="text-xs text-primary font-mono mt-1">ID: Q-8832-OP</div>
                         </div>
                      </div>
                   </div>

                   {/* Status Metrics */}
                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-surface p-4 border border-outline-variant/30 hover:border-outline-variant transition-colors">
                         <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest mb-2">Build Status</div>
                         <div className="font-mono text-primary font-bold">2026.FINAL</div>
                      </div>
                      <div className="bg-surface p-4 border border-outline-variant/30 hover:border-outline-variant transition-colors">
                         <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest mb-2">Complexity</div>
                         <div className="font-mono text-tertiary font-bold text-sm leading-tight">MISSION<br/>CRITICAL</div>
                      </div>
                   </div>

                   {/* Visual Data Strip */}
                   <div className="bg-surface p-4 border border-outline-variant/30 relative overflow-hidden">
                      <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest mb-4">Execution Pathway</div>
                      <div className="flex h-12 items-end gap-1 px-1">
                         <div className="w-full bg-secondary-dim/20 h-[20%] transition-all duration-500 hover:bg-secondary-dim/50 hover:h-[40%]"></div>
                         <div className="w-full bg-secondary-dim/30 h-[40%] transition-all duration-500 hover:bg-secondary-dim/60 hover:h-[50%]"></div>
                         <div className="w-full bg-secondary-dim/40 h-[70%] transition-all duration-500 hover:bg-secondary-dim/80 hover:h-[85%]"></div>
                         <div className="w-full bg-tertiary/60 h-[95%] border-t border-tertiary shadow-[0_0_10px_rgba(255,159,77,0.5)] transition-all duration-500"></div>
                         <div className="w-full bg-secondary-dim/50 h-[60%] transition-all duration-500 hover:bg-secondary-dim/70 hover:h-[75%]"></div>
                         <div className="w-full bg-secondary-dim/30 h-[30%] transition-all duration-500 hover:bg-secondary-dim/50 hover:h-[45%]"></div>
                         <div className="w-full bg-primary/40 h-[80%] border-t border-primary shadow-[0_0_10px_rgba(153,247,255,0.4)] transition-all duration-500"></div>
                         <div className="w-full bg-secondary-dim/20 h-[15%] transition-all duration-500 hover:bg-secondary-dim/40 hover:h-[25%]"></div>
                      </div>
                      <div className="flex justify-between mt-2 text-[9px] font-mono text-on-surface-variant opacity-50">
                         <span>T-0</span>
                         <span>ANOMALY</span>
                         <span>T-N</span>
                      </div>
                   </div>
                </div>
             </aside>
          </div>

          {/* Bottom Status Bar */}
          <footer className="h-8 bg-surface-container flex items-center justify-between px-4 border-t border-surface-container-highest shrink-0 font-mono text-[10px] text-on-surface-variant tracking-wider">
             <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 hover:text-on-surface cursor-pointer"><span className="material-symbols-outlined text-[12px]">rebase</span> main</span>
                <span className="flex items-center gap-1 hover:text-on-surface cursor-pointer"><span className="material-symbols-outlined text-[12px]">sync</span> sync</span>
                <span className="flex items-center gap-1 text-error hover:text-error-dim cursor-pointer"><span className="material-symbols-outlined text-[12px]">error</span> 0</span>
                <span className="flex items-center gap-1 text-tertiary hover:text-tertiary-dim cursor-pointer"><span className="material-symbols-outlined text-[12px]">warning</span> 2</span>
             </div>
             <div className="flex items-center gap-4">
                <span className="hover:text-on-surface cursor-pointer">Ln 14, Col 32</span>
                <span className="hover:text-on-surface cursor-pointer">Spaces: 4</span>
                <span className="hover:text-on-surface cursor-pointer">UTF-8</span>
                <span className="hover:text-on-surface cursor-pointer">Python (Quantum Core)</span>
             </div>
          </footer>
        </main>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0c0e12; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #22262b; 
          border-radius: 0;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #46484c; 
        }
      `}</style>
    </div>
  );
}
