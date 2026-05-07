import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PqcAnomalyDetectorProps {
  onBack?: () => void;
}

export default function PqcAnomalyDetector({ onBack }: PqcAnomalyDetectorProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface font-body overflow-hidden h-screen flex flex-col">
      {/* TopNavBar Shell */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-slate-950/80 backdrop-blur-xl rounded-none border-b border-white/5 shadow-[0_10px_30px_rgba(0,242,255,0.03)] text-cyan-400 font-['Space_Grotesk'] tracking-tight">
        <div className="flex items-center gap-8">
          <span className="font-mono font-bold text-cyan-400 tracking-widest text-lg">QUANTUM SECURITY ARCHITECTURE</span>
          <div className="hidden md:flex gap-6">
            <a className="text-slate-500 hover:text-slate-300 hover:bg-cyan-400/10 transition-all duration-300 scale-95 active:opacity-80 py-2 px-3" href="#">Network</a>
            <a className="text-cyan-400 border-b-2 border-cyan-400 pb-1 hover:bg-cyan-400/10 transition-all duration-300 scale-95 active:opacity-80 py-2 px-3" href="#">Algorithms</a>
            <a className="text-slate-500 hover:text-slate-300 hover:bg-cyan-400/10 transition-all duration-300 scale-95 active:opacity-80 py-2 px-3" href="#">Vault</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 bg-surface-container-high py-1 px-4 border-b-2 border-outline-variant">
            <input className="bg-transparent border-none text-on-surface focus:ring-0 font-mono text-sm placeholder:text-on-surface-variant w-48" placeholder="Search parameters..." type="text" />
            <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 scale-95 active:opacity-80 p-2"><span className="material-symbols-outlined">security</span></button>
            <button className="text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 scale-95 active:opacity-80 p-2"><span className="material-symbols-outlined">terminal</span></button>
          </div>
          <button className="bg-primary-container text-on-primary-container font-mono font-bold px-4 py-2 hover:shadow-[0_0_15px_rgba(153,247,255,0.5)] transition-shadow">SYSTEM AUTHORIZE</button>
          
          <button onClick={() => onBack ? onBack() : navigate(-1)} className="text-on-surface-variant hover:text-primary transition-colors h-8 w-8 flex justify-center items-center">
            <span className="material-symbols-outlined">close</span>
          </button>
          <img alt="Jonathan Jimenez Escobar - Scientific Lead" className="w-10 h-10 object-cover border border-outline-variant" src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg" />
        </div>
      </nav>

      {/* SideNavBar Shell */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 flex flex-col justify-between py-6 bg-slate-950 font-mono text-xs uppercase tracking-widest rounded-none border-r border-white/5 transition-colors duration-150 ease-in-out z-40">
        <div>
          <div className="px-6 pb-8 border-b border-white/5 mb-4">
            <h3 className="text-primary-dim font-bold tracking-[0.1em] mb-1">LEAD ARCHITECT</h3>
            <p className="text-on-surface-variant">J. Jimenez Escobar</p>
            <img alt="Jonathan Jimenez Escobar Lead Profile" className="w-12 h-12 mt-4 object-cover border border-outline-variant hidden" src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg" />
          </div>
          <nav className="flex flex-col">
            <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300" href="#">
              <span className="material-symbols-outlined text-lg">insights</span>
              <span>Entropy Monitor</span>
            </a>
            <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300" href="#">
              <span className="material-symbols-outlined text-lg">verified</span>
              <span>Hybrid Certs</span>
            </a>
            <a className="bg-slate-900 text-cyan-400 border-r-2 border-cyan-400 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300" href="#">
              <span className="material-symbols-outlined text-lg">hub</span>
              <span>PQC Algorithms</span>
            </a>
            <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300" href="#">
              <span className="material-symbols-outlined text-lg">vpn_key</span>
              <span>Key Management</span>
            </a>
            <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300" href="#">
              <span className="material-symbols-outlined text-lg">settings_ethernet</span>
              <span>System Logs</span>
            </a>
          </nav>
        </div>
        <div>
          <nav className="flex flex-col border-t border-white/5 pt-4">
            <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300" href="#">
              <span className="material-symbols-outlined text-lg">biotech</span>
              <span>Diagnostics</span>
            </a>
            <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300" href="#">
              <span className="material-symbols-outlined text-lg">support_agent</span>
              <span>Help</span>
            </a>
          </nav>
          <div className="px-6 mt-4">
            <button className="w-full bg-transparent border border-tertiary text-tertiary font-bold py-3 hover:bg-tertiary/10 transition-colors">INITIATE OVERRIDE</button>
          </div>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="ml-64 mt-16 flex-1 bg-surface-container-low flex h-[calc(100vh-64px)]">
        {/* Code Editor Area */}
        <section className="flex-1 flex flex-col bg-surface border-r border-surface-container-highest">
          {/* IDE Header */}
          <div className="h-12 bg-surface-container-highest flex items-center px-4 border-b border-surface-container-lowest justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-sm">code</span>
              <span className="font-mono text-sm text-on-surface">pqc_anomaly_detector.rs</span>
              <span className="text-on-surface-variant mx-2">|</span>
              <span className="font-mono text-xs text-on-surface-variant">AI Shield 2026</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-primary-dim bg-primary-dim/10 px-2 py-1">LIVE FEED</span>
              <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-sm">play_arrow</span></button>
            </div>
          </div>
          {/* Code Content */}
          <div className="flex-1 overflow-auto p-4 font-mono text-sm leading-relaxed bg-surface-container-lowest shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] custom-scrollbar">
            <pre><code>
              <span className="line-number">1</span><span className="text-[#ac89ff]">use</span> std::sync::{"{"}Arc, Mutex{"}"};<br />
              <span className="line-number">2</span><span className="text-[#ac89ff]">use</span> quantum_core::monitor::AnomalyLevel;<br />
              <span className="line-number">3</span><br />
              <span className="line-number">4</span><span className="text-[#a9abb0] italic">// Initialize the Kyber-1024 quantum-resistant grid monitor</span><br />
              <span className="line-number">5</span><span className="text-[#ac89ff]">pub fn</span> <span className="text-[#ff9f4d]">init_threat_detection_grid</span>(active_nodes: usize) -{">"} Result{"<"}Grid, Error{">"} {"{"}<br />
              <span className="line-number">6</span>    <span className="text-[#ac89ff]">let</span> grid = Grid::new(active_nodes);<br />
              <span className="line-number">7</span>    <br />
              <span className="line-number">8</span>    <span className="text-[#ac89ff]">for</span> node <span className="text-[#ac89ff]">in</span> grid.nodes() {"{"}<br />
              <span className="line-number">9</span>        <span className="text-[#ac89ff]">if</span> node.entropy_level() {">"} <span className="text-[#00f1fe]">0.85</span> {"{"}<br />
              <span className="line-number">10</span>            <span className="text-[#ff9f4d]">trigger_alert</span>(AnomalyLevel::Critical, <span className="text-[#99f7ff]">"High entropy detected in sector 7G"</span>);<br />
              <span className="line-number">11</span>        {"}"}<br />
              <span className="line-number">12</span>    {"}"}<br />
              <span className="line-number">13</span>    <br />
              <span className="line-number">14</span>    <span className="text-[#ac89ff]">Ok</span>(grid)<br />
              <span className="line-number">15</span>{"}"}<br />
              <span className="line-number">16</span><br />
              <span className="line-number">17</span><span className="text-[#a9abb0] italic">/* HTML Rendering Module */</span><br />
              <span className="line-number">18</span><span className="text-[#ac89ff]">fn</span> <span className="text-[#ff9f4d]">render_alert_panel</span>(level: AnomalyLevel) -{">"} String {"{"}<br />
              <span className="line-number">19</span>    <span className="text-[#ac89ff]">let</span> color_class = <span className="text-[#ac89ff]">match</span> level {"{"}<br />
              <span className="line-number">20</span>        AnomalyLevel::Critical ={"{>"} <span className="text-[#99f7ff]">"bg-error-container text-on-error-container"</span>,<br />
              <span className="line-number">21</span>        AnomalyLevel::Warning ={"{>"} <span className="text-[#99f7ff]">"bg-tertiary-container text-on-tertiary-container"</span>,<br />
              <span className="line-number">22</span>        _ ={"{>"} <span className="text-[#99f7ff]">"bg-surface-container-high text-on-surface"</span>,<br />
              <span className="line-number">23</span>    {"}"};<br />
              <span className="line-number">24</span><br />
              <span className="line-number">25</span>    <span className="text-[#ff9f4d]">format!</span>(<br />
              <span className="line-number">26</span>        <span className="text-[#99f7ff]">"&lt;<span className="text-[#00f1fe]">div</span> <span className="text-[#ef8100]">class</span>=\"alert-box {"{}"}\"&gt;\n"</span>,<br />
              <span className="line-number">27</span>        color_class<br />
              <span className="line-number">28</span>    ) +<br />
              <span className="line-number">29</span>    <span className="text-[#99f7ff]">"    &lt;<span className="text-[#00f1fe]">span</span> <span className="text-[#ef8100]">class</span>=\"material-symbols-outlined\"&gt;warning&lt;/<span className="text-[#00f1fe]">span</span>&gt;\n"</span> +<br />
              <span className="line-number">30</span>    <span className="text-[#99f7ff]">"    &lt;<span className="text-[#00f1fe]">p</span>&gt;Threat Level Escalated&lt;/<span className="text-[#00f1fe]">p</span>&gt;\n"</span> +<br />
              <span className="line-number">31</span>    <span className="text-[#99f7ff]">"&lt;/<span className="text-[#00f1fe]">div</span>&gt;"</span><br />
              <span className="line-number">32</span>{"}"}
            </code></pre>
          </div>
          {/* Terminal Output */}
          <div className="h-48 bg-surface-container-low border-t border-surface-container-highest p-4 font-mono text-xs custom-scrollbar overflow-y-auto">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-on-surface-variant">TERMINAL</span>
              <span className="text-on-surface-variant mx-2">|</span>
              <span className="text-secondary-dim">build_runner</span>
            </div>
            <div className="text-on-surface opacity-80">
              <p>&gt; cargo build --release --target=quantum-os</p>
              <p className="text-primary-dim mt-1">Compiling quantum_core v2.1.0</p>
              <p className="text-primary-dim">Compiling ai_shield_2026 v1.0.4</p>
              <p className="text-tertiary mt-1">Warning: Entropy threshold near limits on Node 4.</p>
              <p className="text-primary mt-2">Finished release [optimized] target(s) in 1.42s</p>
              <p className="mt-2 text-on-surface-variant">root@obsidian-lab:~/pqc_engine$ <span className="animate-pulse">_</span></p>
            </div>
          </div>
        </section>

        {/* Technical Metadata Panel */}
        <aside className="w-80 bg-surface-container-low p-6 flex flex-col gap-8 overflow-y-auto custom-scrollbar">
          <div className="bg-surface-container-highest p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h4 className="font-headline text-sm text-primary uppercase tracking-widest mb-4 border-b-2 border-outline-variant pb-2 inline-block">Module Stats</h4>
            <div className="flex flex-col gap-3 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Lines of Code:</span>
                <span className="text-primary-dim">2,150</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Active Assets:</span>
                <span className="text-secondary">18</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Build Date:</span>
                <span className="text-on-surface">2026-04-12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Target Arch:</span>
                <span className="text-on-surface">Q-Bit x128</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-highest p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h4 className="font-headline text-sm text-secondary uppercase tracking-widest mb-4 border-b-2 border-outline-variant pb-2 inline-block">Threat Grid</h4>
            <div className="grid grid-cols-4 gap-1">
              <div className="h-6 bg-surface-container-low border border-outline-variant flex items-center justify-center text-[8px] text-on-surface-variant">01</div>
              <div className="h-6 bg-primary-container/20 border border-primary-dim flex items-center justify-center text-[8px] text-primary-dim shadow-[0_0_5px_rgba(0,226,238,0.3)]">02</div>
              <div className="h-6 bg-surface-container-low border border-outline-variant flex items-center justify-center text-[8px] text-on-surface-variant">03</div>
              <div className="h-6 bg-tertiary-container/30 border border-tertiary flex items-center justify-center text-[8px] text-tertiary shadow-[0_0_5px_rgba(255,159,77,0.3)]">04</div>
              <div className="h-6 bg-surface-container-low border border-outline-variant flex items-center justify-center text-[8px] text-on-surface-variant">05</div>
              <div className="h-6 bg-surface-container-low border border-outline-variant flex items-center justify-center text-[8px] text-on-surface-variant">06</div>
              <div className="h-6 bg-surface-container-low border border-outline-variant flex items-center justify-center text-[8px] text-on-surface-variant">07</div>
              <div className="h-6 bg-error-container/40 border border-error flex items-center justify-center text-[8px] text-error shadow-[0_0_8px_rgba(255,113,108,0.5)]">08</div>
            </div>
          </div>

          <div className="bg-surface-container-highest p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex-1">
            <h4 className="font-headline text-sm text-on-surface uppercase tracking-widest mb-4 border-b-2 border-outline-variant pb-2 inline-block">Live Entropy Map</h4>
            <div className="w-full h-32 relative bg-surface-container-lowest overflow-hidden border border-outline-variant">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
              {/* Notice no grayscale on this image either per request to keep images colored */}
              <img alt="Entropy Map Visualization" className="w-full h-full object-cover opacity-60 mix-blend-screen" src="https://lh3.googleusercontent.com/aida/ADBb0uhfVeMr7Xm6HfLOqJXuZyxdH6OOUZs6tMKlV_wa0gntgQi8g54izGMqzRbCa-T7I0wlxD33obbSx7SCsrG0svzSM-mzcPigBPL4yiEstajx0Bip_rFS74fUumLijBsk42B4SIcoGJepOEw2Jyiz6OOAGd-QxnHVLIhDBQ1cMd9v-KpDROn_mGkyNuQYLCRsrvD2cxkwFAhGR-C4rXfuJlMKufby43IlB74SApbKQtR5LKvc0ni3woscMrQoU0CC5VW08lT1NO89uw" />
              <div className="absolute bottom-2 left-2 right-2 flex justify-between z-20 font-mono text-[10px] text-primary-dim">
                <span>SEC-A</span>
                <span>98.2% STABLE</span>
              </div>
            </div>
          </div>
        </aside>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #0c0e12;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #1c2025;
            border-radius: 0px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #282c32;
        }
        .line-number { color: #535559; text-align: right; user-select: none; padding-right: 1rem; border-right: 1px solid #22262b; margin-right: 1rem; display: inline-block; width: 3rem; }
      `}</style>
    </div>
  );
}
