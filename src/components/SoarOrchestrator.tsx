import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SoarOrchestratorProps {
  onBack?: () => void;
}

export default function SoarOrchestrator({ onBack }: SoarOrchestratorProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface font-body overflow-hidden h-screen flex flex-col">
      {/* TopNavBar (Shared Component) */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-slate-950/80 backdrop-blur-xl rounded-none border-b border-white/5 shadow-[0_10px_30px_rgba(0,242,255,0.03)] transition-all duration-300">
        <div className="flex items-center gap-6">
          <span className="font-mono font-bold text-cyan-400 tracking-widest text-lg">QUANTUM SECURITY ARCHITECTURE</span>
          <nav className="hidden md:flex gap-8 ml-8">
            <a className="font-['Space_Grotesk'] tracking-tight text-slate-500 hover:text-slate-300 hover:bg-cyan-400/10 transition-all duration-300 px-3 py-1" href="#">Network</a>
            <a className="font-['Space_Grotesk'] tracking-tight text-cyan-400 border-b-2 border-cyan-400 pb-1 hover:bg-cyan-400/10 transition-all duration-300 px-3 py-1" href="#">Algorithms</a>
            <a className="font-['Space_Grotesk'] tracking-tight text-slate-500 hover:text-slate-300 hover:bg-cyan-400/10 transition-all duration-300 px-3 py-1" href="#">Vault</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center justify-center p-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="bg-primary-container text-on-primary-container font-mono text-sm uppercase px-4 py-2 hover:shadow-[0_0_15px_rgba(153,247,255,0.5)] transition-shadow">
            SYSTEM AUTHORIZE
          </button>
          <div className="flex gap-3 text-cyan-400">
            <button className="hover:bg-cyan-400/10 p-2 transition-all duration-300"><span className="material-symbols-outlined">security</span></button>
            <button className="hover:bg-cyan-400/10 p-2 transition-all duration-300"><span className="material-symbols-outlined">terminal</span></button>
            <button onClick={() => onBack ? onBack() : navigate(-1)} className="hover:bg-cyan-400/10 p-2 transition-all duration-300"><span className="material-symbols-outlined">close</span></button>
          </div>
          <div className="h-8 w-8 bg-surface-container-high overflow-hidden border border-outline-variant/30">
            <img alt="Jonathan Jimenez Escobar - Scientific Lead" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg" />
          </div>
        </div>
      </header>

      <div className="flex flex-1 mt-16 h-[calc(100vh-64px)] overflow-hidden">
        {/* SideNavBar (Shared Component) */}
        <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 flex flex-col justify-between py-6 bg-slate-950 rounded-none border-r border-white/5 z-40">
          <div>
            <div className="px-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <img alt="Jonathan Jimenez Escobar Lead Profile" className="w-10 h-10 border border-white/10" src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg" />
                <div>
                  <div className="font-headline text-sm font-bold text-on-surface tracking-wide">LEAD ARCHITECT</div>
                  <div className="font-mono text-xs text-on-surface-variant">J. Jimenez Escobar</div>
                </div>
              </div>
            </div>
            <nav className="flex flex-col">
              <a className="font-mono text-xs uppercase tracking-widest text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300 transition-colors duration-150 ease-in-out" href="#">
                <span className="material-symbols-outlined">insights</span>
                Entropy Monitor
              </a>
              <a className="font-mono text-xs uppercase tracking-widest text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300 transition-colors duration-150 ease-in-out" href="#">
                <span className="material-symbols-outlined">verified</span>
                Hybrid Certs
              </a>
              <a className="font-mono text-xs uppercase tracking-widest bg-slate-900 text-cyan-400 border-r-2 border-cyan-400 flex items-center gap-4 px-6 py-4 transition-colors duration-150 ease-in-out" href="#">
                <span className="material-symbols-outlined">hub</span>
                PQC Algorithms
              </a>
              <a className="font-mono text-xs uppercase tracking-widest text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300 transition-colors duration-150 ease-in-out" href="#">
                <span className="material-symbols-outlined">vpn_key</span>
                Key Management
              </a>
              <a className="font-mono text-xs uppercase tracking-widest text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300 transition-colors duration-150 ease-in-out" href="#">
                <span className="material-symbols-outlined">settings_ethernet</span>
                System Logs
              </a>
            </nav>
          </div>
          <div className="px-6 flex flex-col gap-4">
            <button className="w-full bg-transparent border border-outline-variant/30 text-tertiary font-mono text-xs uppercase py-3 hover:shadow-[0_0_15px_rgba(255,159,77,0.3)] transition-all">
              INITIATE OVERRIDE
            </button>
            <nav className="flex flex-col mt-4">
              <a className="font-mono text-xs uppercase tracking-widest text-slate-500 flex items-center gap-4 py-2 hover:text-cyan-300 transition-colors duration-150 ease-in-out" href="#">
                <span className="material-symbols-outlined text-sm">biotech</span>
                Diagnostics
              </a>
              <a className="font-mono text-xs uppercase tracking-widest text-slate-500 flex items-center gap-4 py-2 hover:text-cyan-300 transition-colors duration-150 ease-in-out" href="#">
                <span className="material-symbols-outlined text-sm">support_agent</span>
                Help
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="ml-64 flex-1 flex h-full overflow-hidden bg-surface">
          {/* Code Editor Workspace */}
          <div className="flex-1 flex flex-col bg-surface-container-lowest relative">
            {/* Editor Tab Bar */}
            <div className="h-10 bg-surface-container-low flex items-center border-b border-surface-container-highest">
              <div className="px-4 py-2 bg-surface-container-lowest border-t-2 border-primary text-primary font-mono text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">data_object</span>
                <span>soar_orchestrator.js</span>
                <button className="ml-2 hover:text-primary-dim"><span className="material-symbols-outlined text-[14px]">close</span></button>
              </div>
              <div className="px-4 py-2 text-on-surface-variant font-mono text-sm flex items-center gap-2 hover:bg-surface-container-highest transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-[16px]">html</span>
                <span>incident_response.html</span>
              </div>
              <div className="ml-auto px-4 flex gap-3 text-on-surface-variant">
                <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">play_arrow</span></button>
                <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">save</span></button>
                <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
              </div>
            </div>

            {/* Actual Editor Area */}
            <div className="flex-1 flex overflow-hidden">
              {/* Line Numbers */}
              <div className="w-12 bg-surface-container-lowest flex flex-col items-end py-4 pr-2 font-mono text-xs text-outline-variant border-r border-white/5 overflow-hidden custom-scrollbar">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className={`py-[2px] ${i+1 === 9 ? 'text-primary' : ''}`}>{i+1}</div>
                ))}
              </div>

              {/* Code Content */}
              <div className="flex-1 overflow-auto bg-surface-container-lowest p-4 font-mono text-sm leading-relaxed text-on-surface whitespace-pre custom-scrollbar">
<span className="text-[#a9abb0] italic">{"/**\n * AI Shield 2026 - Visual Playbook Editor SOAR Logic\n * Module: Threat Orchestration & Automated Response\n * Author: J. Jimenez Escobar\n */"}</span><br/>
<span className="text-[#99f7ff]">{"import"}</span> {"{ QuantumThreatAnalyzer }"} <span className="text-[#99f7ff]">{"from"}</span> <span className="text-[#ac89ff]">{"'@aishield/core/analysis'"}</span>;<br/>
<span className="text-[#99f7ff]">{"import"}</span> {"{ ContainmentProtocol }"} <span className="text-[#99f7ff]">{"from"}</span> <span className="text-[#ac89ff]">{"'@aishield/response/containment'"}</span>;<br/>
<br/>
<span className="text-[#99f7ff]">{"class"}</span> {"Orchestrator"} <span className="text-[#99f7ff]">{"extends"}</span> {"PlaybookNode {"}<br/>
    <span className="text-[#99f7ff]">{"constructor"}</span>{"(config) {"}<br/>
        <span className="text-[#99f7ff]">{"super"}</span>{"(config);"}<br/>
        <span className="text-[#99f7ff]">{"this"}</span>{".complexityIndex = config.complexity ||"} <span className="text-[#ac89ff]">{"'High'"}</span>;<br/>
        <span className="text-[#99f7ff]">{"this"}</span>{".automationModules = config.modules ||"} <span className="text-[#00f1fe]">{"12"}</span>;<br/>
    {"}"}<br/>
<br/>
    <span className="text-[#99f7ff]">{"async"}</span> <span className="text-[#ff9f4d]">{"executeWorkflow"}</span>{"(incidentData) {"}<br/>
        <span className="text-[#ff9f4d]">{"console"}</span>{"."}<span className="text-[#ff9f4d]">{"log"}</span>{"("}<span className="text-[#ac89ff]">{"`[AI Shield] Initiating workflow for incident ${incidentData.id}`"}</span>{");"}<br/>
        <br/>
        <span className="text-[#a9abb0] italic">{"// Initialize Quantum Analysis"}</span><br/>
<span className="text-[#99f7ff]">{"const"}</span> {"analyzer ="} <span className="text-[#99f7ff]">{"new"}</span> <span className="text-[#ff9f4d]">{"QuantumThreatAnalyzer"}</span>{"();"}<br/>
        <span className="text-[#99f7ff]">{"const"}</span> {"threatScore ="} <span className="text-[#99f7ff]">{"await"}</span> {"analyzer."}<span className="text-[#ff9f4d]">{"evaluate"}</span>{"(incidentData.payload);"}<br/>
<br/>
        <span className="text-[#99f7ff]">{"if"}</span> {"(threatScore >"} <span className="text-[#00f1fe]">{"0.85"}</span>{") {"}<br/>
            <span className="text-[#a9abb0] italic">{"// High complexity threat detected, trigger auto-containment"}</span><br/>
<span className="text-[#99f7ff]">{"await"}</span> {"ContainmentProtocol."}<span className="text-[#ff9f4d]">{"isolateNetwork"}</span>{"(incidentData.sourceIp);"}<br/>
            <span className="text-[#99f7ff]">{"this"}</span>{"."}<span className="text-[#ff9f4d]">{"emit"}</span>{"("}<span className="text-[#ac89ff]">{"'statusUpdate'"}</span>{", { status:"} <span className="text-[#ac89ff]">{"'CONTAINED'"}</span>{", severity:"} <span className="text-[#ac89ff]">{"'CRITICAL'"}</span> {"});"}<br/>
        {"} "} <span className="text-[#99f7ff]">{"else"}</span> {"{"}<br/>
            <span className="text-[#99f7ff]">{"this"}</span>{"."}<span className="text-[#ff9f4d]">{"routeToAnalyst"}</span>{"(incidentData);"}<br/>
        {"}"}<br/>
    {"}"}<br/>
{"}"}
              </div>
            </div>

            {/* Editor Footer Status Bar */}
            <div className="h-8 bg-surface-container-high border-t border-surface-container-highest flex items-center px-4 font-mono text-[11px] text-on-surface-variant justify-between">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-primary">check_circle</span> System Active</span>
                <span>UTF-8</span>
                <span>JavaScript React</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Ln 9, Col 14</span>
                <span className="flex items-center gap-1 text-tertiary"><span className="material-symbols-outlined text-[14px]">warning</span> 2 Warnings</span>
              </div>
            </div>
          </div>

          {/* Project Metadata Side Panel */}
          <div className="w-80 bg-surface-container-low border-l border-surface-container-highest flex flex-col h-full overflow-y-auto custom-scrollbar">
            <div className="p-4 border-b border-surface-container-highest">
              <h2 className="font-headline font-bold text-on-surface uppercase tracking-wider text-sm mb-1">Project Details</h2>
              <p className="font-mono text-xs text-primary">AI Shield SOAR Core</p>
            </div>
            <div className="p-4 flex-1 flex flex-col gap-6">
              {/* Metadata Stats */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center pb-2 border-b border-surface-container-highest">
                  <span className="font-mono text-xs text-on-surface-variant">Complexity Index</span>
                  <span className="font-mono text-xs text-tertiary">High</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-surface-container-highest">
                  <span className="font-mono text-xs text-on-surface-variant">Automation Modules</span>
                  <span className="font-mono text-xs text-primary-dim">12</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-surface-container-highest">
                  <span className="font-mono text-xs text-on-surface-variant">Last Compiled</span>
                  <span className="font-mono text-xs text-on-surface">14:02:45 UTC</span>
                </div>
              </div>

              {/* Visualization Box */}
              <div className="bg-surface-container p-3 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#99f7ff 1px, transparent 1px), linear-gradient(90deg, #99f7ff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <h3 className="font-mono text-xs text-secondary mb-3 uppercase tracking-widest relative z-10">Logic Map Preview</h3>
                <div className="h-32 w-full bg-surface-container-lowest border border-outline-variant/20 relative z-10 p-2 flex items-center justify-center overflow-hidden">
                  <img alt="Abstract node connection visualization" className="w-full h-full object-cover opacity-60 transition-all duration-500 hover:scale-105 hover:opacity-100" src="https://lh3.googleusercontent.com/aida/ADBb0uhfVeMr7Xm6HfLOqJXuZyxdH6OOUZs6tMKlV_wa0gntgQi8g54izGMqzRbCa-T7I0wlxD33obbSx7SCsrG0svzSM-mzcPigBPL4yiEstajx0Bip_rFS74fUumLijBsk42B4SIcoGJepOEw2Jyiz6OOAGd-QxnHVLIhDBQ1cMd9v-KpDROn_mGkyNuQYLCRsrvD2cxkwFAhGR-C4rXfuJlMKufby43IlB74SApbKQtR5LKvc0ni3woscMrQoU0CC5VW08lT1NO89uw" />
                </div>
              </div>

              {/* Dependent Modules */}
              <div>
                <h3 className="font-mono text-[10px] text-on-surface-variant mb-2 uppercase tracking-widest">Active Dependencies</h3>
                <div className="flex flex-col gap-2">
                  <div className="bg-surface-container-highest p-2 flex items-center justify-between">
                    <span className="font-mono text-xs text-on-surface">@aishield/core</span>
                    <span className="material-symbols-outlined text-[14px] text-primary">check</span>
                  </div>
                  <div className="bg-surface-container-highest p-2 flex items-center justify-between">
                    <span className="font-mono text-xs text-on-surface">@aishield/response</span>
                    <span className="material-symbols-outlined text-[14px] text-primary">check</span>
                  </div>
                  <div className="bg-surface-container-highest p-2 flex items-center justify-between border-l-2 border-tertiary">
                    <span className="font-mono text-xs text-tertiary">@legacy/auth-v1</span>
                    <span className="material-symbols-outlined text-[14px] text-tertiary">warning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #46484c;
        }
      `}</style>
    </div>
  );
}
