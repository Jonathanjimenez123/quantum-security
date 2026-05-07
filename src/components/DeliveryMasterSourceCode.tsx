import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DeliveryMasterSourceCodeProps {
  onBack?: () => void;
}

export default function DeliveryMasterSourceCode({ onBack }: DeliveryMasterSourceCodeProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body antialiased flex flex-col h-screen overflow-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-slate-950/80 backdrop-blur-xl rounded-none border-b border-white/5 shadow-[0_10px_30px_rgba(0,242,255,0.03)] font-['Space_Grotesk'] tracking-tight">
        <div className="flex items-center gap-6">
          <span className="font-mono font-bold text-cyan-400 tracking-widest text-lg">QUANTUM SECURITY ARCHITECTURE</span>
          <div className="h-6 w-px bg-outline-variant/50 mx-2"></div>
          <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
            <span className="hover:text-primary cursor-pointer transition-colors">Project</span>
            <span className="material-symbols-outlined text-[16px] text-outline-variant">chevron_right</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Docs</span>
            <span className="material-symbols-outlined text-[16px] text-outline-variant">chevron_right</span>
            <span className="text-primary bg-primary/10 px-2 py-0.5 rounded-none border border-primary/20">delivery_master.md</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <span className="text-slate-500 hover:text-slate-300 cursor-pointer scale-95 active:opacity-80 transition-all duration-300">Network</span>
            <span className="text-slate-500 hover:text-slate-300 cursor-pointer scale-95 active:opacity-80 transition-all duration-300">Algorithms</span>
            <span className="text-slate-500 hover:text-slate-300 cursor-pointer scale-95 active:opacity-80 transition-all duration-300">Vault</span>
          </div>
          <div className="flex gap-3 text-on-surface-variant">
            <button className="hover:bg-cyan-400/10 transition-all duration-300 p-2 rounded-none flex items-center justify-center scale-95 active:opacity-80">
              <span className="material-symbols-outlined">security</span>
            </button>
            <button className="hover:bg-cyan-400/10 transition-all duration-300 p-2 rounded-none flex items-center justify-center scale-95 active:opacity-80">
              <span className="material-symbols-outlined">terminal</span>
            </button>
            <button onClick={() => onBack ? onBack() : navigate(-1)} className="hover:bg-cyan-400/10 transition-all duration-300 p-2 rounded-none flex items-center justify-center scale-95 active:opacity-80">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <button className="bg-primary-container text-on-primary-container font-mono text-sm font-bold px-6 py-2 rounded-none hover:shadow-[0_0_15px_rgba(153,247,255,0.4)] transition-all duration-300 uppercase tracking-widest flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            SYSTEM AUTHORIZE
          </button>
          <img alt="Jonathan Jimenez Escobar - Scientific Lead" className="w-8 h-8 rounded-none border border-outline-variant object-cover ml-2" src="https://lh3.googleusercontent.com/aida/ADBb0uhfVeMr7Xm6HfLOqJXuZyxdH6OOUZs6tMKlV_wa0gntgQi8g54izGMqzRbCa-T7I0wlxD33obbSx7SCsrG0svzSM-mzcPigBPL4yiEstajx0Bip_rFS74fUumLijBsk42B4SIcoGJepOEw2Jyiz6OOAGd-QxnHVLIhDBQ1cMd9v-KpDROn_mGkyNuQYLCRsrvD2cxkwFAhGR-C4rXfuJlMKufby43IlB74SApbKQtR5LKvc0ni3woscMrQoU0CC5VW08lT1NO89uw"/>
        </div>
      </nav>

      <div className="flex flex-1 mt-16 h-[calc(100vh-64px)] overflow-hidden">
        {/* SideNavBar */}
        <aside className="w-64 bg-slate-950 flex flex-col justify-between py-6 rounded-none border-r border-white/5 font-mono text-xs uppercase tracking-widest shrink-0 overflow-y-auto">
          {/* File Explorer Structure */}
          <div className="px-6 mb-6">
            <div className="text-on-surface-variant text-[10px] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">folder_open</span>
              <span>PROJECT EXPLORER</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 py-2 text-slate-500 hover:bg-slate-900/50 hover:text-cyan-300 cursor-pointer transition-colors duration-150 ease-in-out">
                <span className="material-symbols-outlined text-[16px]">folder</span>
                <span>metadata/</span>
              </div>
              <div className="flex items-center gap-2 py-2 text-slate-500 hover:bg-slate-900/50 hover:text-cyan-300 cursor-pointer transition-colors duration-150 ease-in-out">
                <span className="material-symbols-outlined text-[16px]">folder</span>
                <span>pillars/</span>
              </div>
              <div className="flex items-center gap-2 py-2 text-slate-500 hover:bg-slate-900/50 hover:text-cyan-300 cursor-pointer transition-colors duration-150 ease-in-out">
                <span className="material-symbols-outlined text-[16px]">folder</span>
                <span>inventory/</span>
              </div>
              <div className="flex items-center gap-2 py-2 text-slate-500 hover:bg-slate-900/50 hover:text-cyan-300 cursor-pointer transition-colors duration-150 ease-in-out">
                <span className="material-symbols-outlined text-[16px]">folder</span>
                <span>guidelines/</span>
              </div>
              <div className="bg-slate-900 text-cyan-400 border-r-2 border-cyan-400 flex items-center gap-2 py-2 px-2 -ml-2 cursor-pointer mt-2">
                <span className="material-symbols-outlined text-[16px]">markdown</span>
                <span>delivery_master.md</span>
              </div>
            </div>
          </div>

          {/* Validation Status */}
          <div className="px-6 mt-auto mb-8">
            <div className="bg-surface-container-high border border-outline-variant/30 p-4 rounded-none flex flex-col gap-2">
               <div className="flex items-center gap-2 text-primary">
                 <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                 <span className="font-bold">VALIDATED FOR JURY</span>
               </div>
               <div className="text-on-surface-variant text-[10px] leading-tight">
                  Signature Hash: 0x9f8a...3b2c<br/>
                  Timestamp: 2026-05-14T09:41:00Z
               </div>
            </div>
          </div>

          {/* Architect Header */}
          <div className="px-6 flex items-center gap-3 border-t border-white/5 pt-6">
            <img alt="Jonathan Jimenez Escobar Lead Profile" className="w-10 h-10 rounded-none border border-primary/30" src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"/>
            <div>
              <div className="text-primary font-bold text-[10px] leading-none mb-1">LEAD ARCHITECT</div>
              <div className="text-on-surface-variant text-[9px]">J. Jimenez Escobar</div>
            </div>
          </div>
          <div className="px-6 mt-4">
            <button className="w-full bg-transparent border border-tertiary text-tertiary font-mono text-[10px] font-bold py-2 rounded-none hover:bg-tertiary/10 transition-colors uppercase tracking-widest text-center">
              INITIATE OVERRIDE
            </button>
          </div>
        </aside>

        {/* Main Content Canvas (Code Editor Interface) */}
        <main className="flex-1 bg-surface-container-low flex flex-col min-w-0 relative">
          {/* Editor Tabs */}
          <div className="h-10 bg-surface-container-highest border-b border-surface flex">
            <div className="flex items-center gap-2 px-4 bg-surface-container-low text-primary border-t-2 border-primary cursor-pointer min-w-[200px]">
              <span className="material-symbols-outlined text-[16px]">markdown</span>
              <span className="font-mono text-xs">delivery_master.md</span>
              <span className="material-symbols-outlined text-[14px] ml-auto text-outline hover:text-on-surface transition-colors flex items-center justify-center">close</span>
            </div>
            <div className="flex items-center gap-2 px-4 text-on-surface-variant border-t-2 border-transparent hover:bg-surface-container/50 cursor-pointer">
              <span className="material-symbols-outlined text-[16px]">code</span>
              <span className="font-mono text-xs">architecture.config</span>
            </div>
          </div>

          {/* Code Area */}
          <div className="flex-1 overflow-auto p-6 font-mono text-sm leading-relaxed text-on-surface flex custom-scrollbar">
            {/* Line Numbers */}
            <div className="text-outline-variant pr-4 text-right select-none flex flex-col min-h-full border-r border-white/5 mr-4 w-12">
               {[...Array(35)].map((_, i) => <div key={i}>{i + 1}</div>)}
            </div>

            {/* Markdown Content */}
            <div className="flex-1 pb-20 max-w-4xl">
              <pre><code>
<span className="text-outline-variant"># </span><span className="text-primary">Documento Maestro de Entrega: AI Shield v2026</span><br/><br/>
<span className="text-on-surface-variant">&gt; **CONFIDENTIALITY LEVEL: OMEGA**</span><br/>
<span className="text-on-surface-variant">&gt; All contents herein are restricted to authorized jury members and lead architects.</span><br/><br/>
<span className="text-outline-variant">##</span> <span className="text-primary">1. Overview &amp; Creative North Star</span><br/>
The <span className="text-secondary">**AI Shield v2026**</span> architecture represents a paradigm shift in defensive quantum computing. Moving away from reactive protocols, this system employs a <span className="text-tertiary">predictive heuristic model</span> to neutralize threats before instantiation within the primary vector space.<br/><br/>
<span className="text-outline-variant">##</span> <span className="text-primary">2. Technical Pillars</span><br/><br/>
<span className="text-outline-variant">*</span> <span className="text-secondary">**Quantum Entropy Generation:**</span> <br/>
  Utilizing specialized hardware to generate true random nonces for key encapsulation mechanisms.<br/>
<span className="text-outline-variant">*</span> <span className="text-secondary">**Post-Quantum Cryptography (PQC):**</span><br/>
  Implementation of CRYSTALS-Kyber and Dilithium algorithms, superseding legacy RSA/ECC structures.<br/>
<span className="text-outline-variant">*</span> <span className="text-secondary">**Asymmetric Vaulting:**</span><br/>
  Zero-knowledge proofs applied to distributed cold storage nodes.<br/><br/>
<span className="text-outline-variant">##</span> <span className="text-primary">3. Sustentation Guide</span><br/><br/>
The following links direct to the core presentation modules required for the final defense:<br/><br/>
<span className="text-outline-variant">[</span><span className="text-secondary">Module A: Threat Landscape Analysis</span><span className="text-outline-variant">]</span><span className="text-outline-variant">(</span><span className="text-secondary">/docs/pillars/threat_landscape.md</span><span className="text-outline-variant">)</span><br/>
<span className="text-outline-variant">[</span><span className="text-secondary">Module B: PQC Algorithm Benchmarks</span><span className="text-outline-variant">]</span><span className="text-outline-variant">(</span><span className="text-secondary">/docs/pillars/pqc_benchmarks.md</span><span className="text-outline-variant">)</span><br/>
<span className="text-outline-variant">[</span><span className="text-secondary">Module C: Live Penetration Test Logs</span><span className="text-outline-variant">]</span><span className="text-outline-variant">(</span><span className="text-secondary">/docs/inventory/pen_test_results.log</span><span className="text-outline-variant">)</span><br/><br/>
<span className="text-outline-variant">---</span><br/>
<span className="text-on-surface-variant">&lt;!-- Architecture Diagram Injection Point --&gt;</span><br/>
<span className="text-outline-variant">![</span><span className="text-secondary">System Topology</span><span className="text-outline-variant">]</span><span className="text-outline-variant">(</span><span className="text-secondary">assets/topology_render_v4.png</span><span className="text-outline-variant">)</span><br/><br/>
<span className="text-outline-variant">##</span> <span className="text-primary">4. Deployment Readiness</span><br/><br/>
All nodes report <span className="text-tertiary">GREEN</span> status. The synchronization matrix is stable across 4 regions.<br/>
Awaiting final authorization signal from Lead Architect.
              </code></pre>
            </div>
          </div>

          {/* Editor Footer / Status Bar */}
          <div className="h-8 bg-surface-container-highest border-t border-surface flex items-center justify-between px-4 font-mono text-[10px] text-on-surface-variant w-full shrink-0">
            <div className="flex items-center gap-4">
               <span className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-[12px]">done</span>
                  Document Loaded
               </span>
               <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">error</span>
                  0 Errors, 0 Warnings
               </span>
            </div>
            <div className="flex items-center gap-4">
              <span>Ln 1, Col 1</span>
              <span>UTF-8</span>
              <span>Markdown</span>
              <span className="text-primary font-bold">Lead Architect: Jonathan Jimenez Escobar</span>
            </div>
          </div>
        </main>

        {/* Right Panel: Document Metadata */}
        <aside className="w-72 bg-surface flex flex-col border-l border-white/5 shrink-0 overflow-y-auto">
          <div className="p-6 border-b border-white/5">
             <h3 className="font-headline font-bold text-lg text-on-surface mb-1 uppercase tracking-tight">Document Metadata</h3>
             <p className="font-mono text-xs text-on-surface-variant">Properties & Signatures</p>
          </div>
          <div className="p-6 flex flex-col gap-6">
            {/* Data Blocks */}
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Version Status</span>
              <span className="font-mono text-sm text-primary font-bold">2026.FINAL</span>
            </div>
            <div className="flex flex-col gap-1">
               <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Author</span>
               <div className="flex items-center gap-3 mt-1">
                  <img alt="Author Avatar" className="w-8 h-8 rounded-none border border-outline-variant/50" src="https://lh3.googleusercontent.com/aida/ADBb0ujWZRAQqHDmr8VYa4BnNeClS-eWDRibZlBe6cUU5_6vzZi64CGNQeLos4bU7h3yzxwJoj4UP-DOgFvsrkyyPmQA7PhKqqKuB2ZibLzktKFc_IgZU7a9vbC5kNAbwIUdpc98yG48Yy7UdOfnUY0fXb8zobxREQb_1hdY_s8uvynhrPLADJttKAuY_Rvd2lkRwu3qnLgvqSYKEN_jvsYzV3IFHId-QWVz2iXy-fJA2wRimHkfe0X87EbRLX11xUKfwL2XvGgyKyw9kw"/>
                  <span className="font-body text-sm font-medium">Jonathan Jimenez Escobar</span>
               </div>
            </div>
            <div className="flex flex-col gap-1">
               <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Institution</span>
               <span className="font-body text-sm text-secondary-fixed">Ingeniería en Sistemas</span>
            </div>
            <div className="w-full h-px bg-white/5 my-2"></div>

            {/* Badge */}
            <div className="bg-surface-container-high border-l-2 border-tertiary p-3 flex items-start gap-3">
               <span className="material-symbols-outlined text-tertiary mt-0.5">warning</span>
               <div>
                  <div className="font-mono text-xs text-tertiary font-bold mb-1">CODE COMPLEXITY: HIGH</div>
                  <div className="font-body text-xs text-on-surface-variant leading-tight">This document contains sensitive quantum cryptographic configurations. Handle with extreme care.</div>
               </div>
            </div>

            {/* Particle Strip Visual (Abstract Data) */}
            <div className="mt-4">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest block mb-2">Entropy Noise Signature</span>
              <div className="flex items-end gap-[1px] h-12 w-full opacity-60">
                 <div className="w-1 bg-secondary-dim h-full"></div>
                 <div className="w-1 bg-secondary-dim h-[80%]"></div>
                 <div className="w-1 bg-secondary-dim h-[40%]"></div>
                 <div className="w-1 bg-secondary-dim h-[90%]"></div>
                 <div className="w-1 bg-secondary-dim h-[20%]"></div>
                 <div className="w-1 bg-secondary-dim h-[60%]"></div>
                 <div className="w-1 bg-secondary-dim h-[100%]"></div>
                 <div className="w-1 bg-secondary-dim h-[30%]"></div>
                 <div className="w-1 bg-secondary-dim h-[70%]"></div>
                 <div className="w-1 bg-secondary-dim h-[50%]"></div>
                 <div className="w-1 bg-secondary-dim h-[85%]"></div>
                 <div className="w-1 bg-secondary-dim h-[15%]"></div>
                 <div className="w-1 bg-secondary-dim h-[65%]"></div>
                 <div className="w-1 bg-secondary-dim h-[95%]"></div>
                 <div className="w-1 bg-secondary-dim h-[45%]"></div>
                 <div className="w-1 bg-secondary-dim h-[25%]"></div>
                 <div className="w-1 bg-secondary-dim h-[75%]"></div>
                 <div className="w-1 bg-secondary-dim h-[55%]"></div>
                 <div className="w-1 bg-secondary-dim h-[10%]"></div>
              </div>
            </div>

            {/* Rendered Preview Thumbnail */}
            <div className="mt-auto pt-6">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest block mb-2">Topology Preview Render</span>
              <div className="relative w-full aspect-video border border-outline-variant/30 group cursor-pointer overflow-hidden bg-surface-container-lowest">
                 <img alt="Topology Preview Render" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-300 mix-blend-screen" src="https://lh3.googleusercontent.com/aida/ADBb0ugdeyEUGGtf0Hf8MpAjVRFEDeIHNFR2Z8yjahzqj9-DDuCp40RJoGmFjcCcxMyqVjBxE9PU_HtIPnO_0QrmK0z38sK1dfMe73EaSv0wNbooZUrIjUz6KP5yiZMAPn0sZX7c5atgzUu1TzExQSqyKOe0JHEPseeOkZW-Z6jPWpnZWa1Xf2xXgvIRo_hKQoEp5jK1TesZOMJVWkR-4tJYl-7iPQQCbQcR8b-bC-WgAITB0nzeE8pnoCgwSgcJyUTYEoTRRLlrOhZn"/>
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-surface/50 backdrop-blur-sm">
                   <span className="material-symbols-outlined text-primary text-3xl">open_in_full</span>
                 </div>
              </div>
            </div>
          </div>
        </aside>
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
