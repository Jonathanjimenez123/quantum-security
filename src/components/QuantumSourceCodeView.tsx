import React from 'react';
import { useNavigate } from 'react-router-dom';

interface QuantumSourceCodeViewProps {
  onBack?: () => void;
}

export default function QuantumSourceCodeView({ onBack }: QuantumSourceCodeViewProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex flex-col antialiased selection:bg-primary-container selection:text-on-primary-container overflow-hidden">
      {/* TopNavBar */}
      <header className="bg-[#0c0e12] dark:bg-[#0c0e12] flex justify-between items-center w-full px-6 py-3 h-16 border-b-2 border-[#1c2025] shadow-[0_0_20px_rgba(0,242,255,0.05)] z-50 shrink-0">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold tracking-tighter text-[#99f7ff] font-headline uppercase whitespace-nowrap">QUANTUM INTELLIGENCE CORE</h1>
          <nav className="hidden md:flex items-center gap-6">
            <a className="font-['Space_Grotesk'] tracking-widest text-sm uppercase text-slate-500 hover:text-[#99f7ff] transition-colors pb-2 hover:bg-[#1c2025] hover:shadow-[0_0_10px_rgba(0,242,255,0.2)]" href="#">SYSTEM</a>
            <a className="font-['Space_Grotesk'] tracking-widest text-sm uppercase text-slate-500 hover:text-[#99f7ff] transition-colors pb-2 hover:bg-[#1c2025] hover:shadow-[0_0_10px_rgba(0,242,255,0.2)]" href="#">ENCRYPTION</a>
            <a className="font-['Space_Grotesk'] tracking-widest text-sm uppercase text-[#99f7ff] border-b-2 border-[#99f7ff] pb-2 scale-95 transition-transform" href="#">AI</a>
            <a className="font-['Space_Grotesk'] tracking-widest text-sm uppercase text-slate-500 hover:text-[#99f7ff] transition-colors pb-2 hover:bg-[#1c2025] hover:shadow-[0_0_10px_rgba(0,242,255,0.2)]" href="#">NODES</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-surface-container-high px-3 py-1.5 border border-outline-variant/30 focus-within:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
            <input className="bg-transparent border-none text-sm font-mono text-primary placeholder:text-on-surface-variant focus:ring-0 p-0 w-48" placeholder="Search parameters..." type="text" />
          </div>
          <button className="bg-primary-container text-on-primary-container font-mono text-xs uppercase font-bold px-4 py-2 hover:shadow-[0_0_15px_rgba(0,242,255,0.4)] transition-all">
            AUTHORIZE
          </button>
          <div className="flex items-center gap-3">
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <button onClick={() => onBack ? onBack() : navigate(-1)} className="text-on-surface-variant hover:text-primary transition-colors h-8 w-8 flex justify-center items-center">
              <span className="material-symbols-outlined">close</span>
            </button>
            <img alt="Lead Expert Jonathan Jimenez Escobar" className="w-8 h-8 object-cover border border-primary/30" src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg" />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* SideNavBar */}
        <nav className="bg-[#111417] dark:bg-[#111417] hidden md:flex flex-col z-40 left-0 h-full w-64 border-r border-[#1c2025] shrink-0 overflow-y-auto">
          <div className="p-6 border-b border-surface-container-highest flex items-center gap-4">
 <img alt="Jonathan Jimenez Escobar" className="w-12 h-12 object-cover opacity-80 border border-secondary/40" src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg" />
            <div>
              <div className="font-headline text-sm font-bold text-primary uppercase">Lead Scientist</div>
              <div className="font-mono text-[10px] text-on-surface-variant tracking-wider">J. Jimenez Escobar</div>
            </div>
          </div>
          <div className="py-4 flex-1">
            <a className="flex items-center px-6 py-3 font-mono text-xs uppercase tracking-widest text-slate-400 opacity-70 hover:opacity-100 hover:bg-[#1c2025] transition-all duration-150 hover:translate-x-1" href="#">
              <span className="material-symbols-outlined mr-3 text-base">hub</span>
              Quantum Core
            </a>
            <a className="flex items-center px-6 py-3 font-mono text-xs uppercase tracking-widest text-slate-400 opacity-70 hover:opacity-100 hover:bg-[#1c2025] transition-all duration-150 hover:translate-x-1" href="#">
              <span className="material-symbols-outlined mr-3 text-base">security</span>
              QKD Center
            </a>
            <a className="flex items-center px-6 py-3 font-mono text-xs uppercase tracking-widest text-slate-400 opacity-70 hover:opacity-100 hover:bg-[#1c2025] transition-all duration-150 hover:translate-x-1" href="#">
              <span className="material-symbols-outlined mr-3 text-base">speed</span>
              RSA Stress Test
            </a>
            <a className="flex items-center px-6 py-3 font-mono text-xs uppercase tracking-widest bg-[#1c2025] text-[#99f7ff] border-l-4 border-[#99f7ff]" href="#">
              <span className="material-symbols-outlined mr-3 text-base fill-current">psychology</span>
              Quantum AI
            </a>
            <a className="flex items-center px-6 py-3 font-mono text-xs uppercase tracking-widest text-slate-400 opacity-70 hover:opacity-100 hover:bg-[#1c2025] transition-all duration-150 hover:translate-x-1" href="#">
              <span className="material-symbols-outlined mr-3 text-base">settings_input_component</span>
              Infrastructure
            </a>
          </div>
          <div className="mt-auto border-t border-surface-container-highest">
            <div className="px-6 py-4">
              <button className="w-full border border-tertiary/50 text-tertiary font-mono text-xs py-2 hover:bg-tertiary/10 transition-colors uppercase tracking-widest">
                EMERGENCY OVERRIDE
              </button>
            </div>
            <div className="flex">
              <a className="flex-1 flex flex-col items-center justify-center py-3 text-slate-400 hover:text-primary transition-colors border-r border-surface-container-highest" href="#">
                <span className="material-symbols-outlined mb-1">analytics</span>
                <span className="font-mono text-[9px] uppercase tracking-widest">Diagnostics</span>
              </a>
              <a className="flex-1 flex flex-col items-center justify-center py-3 text-slate-400 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined mb-1">terminal</span>
                <span className="font-margin text-[9px] uppercase tracking-widest">Terminal</span>
              </a>
            </div>
          </div>
        </nav>

        {/* Main IDE Layout */}
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-surface-container-lowest">
          {/* File Context Header */}
          <div className="h-10 bg-surface-container-low border-b border-surface-container-high flex items-center shrink-0">
            <div className="flex h-full">
              <div className="px-4 flex items-center bg-surface-container-high border-t-2 border-t-primary text-primary font-mono text-xs cursor-pointer">
                <span className="material-symbols-outlined text-[14px] mr-2 text-secondary">html</span>
                quantum-core.html
                <span className="material-symbols-outlined text-[14px] ml-4 text-on-surface-variant hover:text-on-surface">close</span>
              </div>
              <div className="px-4 flex items-center border-t-2 border-t-transparent text-on-surface-variant font-mono text-xs cursor-pointer hover:bg-surface-container-highest">
                <span className="material-symbols-outlined text-[14px] mr-2 text-tertiary">css</span>
                encryption-styles.css
              </div>
              <div className="px-4 flex items-center border-t-2 border-t-transparent text-on-surface-variant font-mono text-xs cursor-pointer hover:bg-surface-container-highest">
                <span className="material-symbols-outlined text-[14px] mr-2 text-primary">javascript</span>
                shor-algo.js
              </div>
            </div>
            <div className="ml-auto px-4 flex items-center gap-4 text-xs font-mono text-on-surface-variant">
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(0,242,255,0.8)]"></span> AI Shield 2026 Active</span>
              <span className="text-secondary">Ln 42, Col 18</span>
              <span>UTF-8</span>
            </div>
          </div>

          {/* Editor Grid Layout */}
          <div className="flex-1 flex overflow-hidden">
            {/* File Explorer Sidebar */}
            <div className="w-56 bg-surface-container-low border-r border-surface-container-high flex flex-col shrink-0 overflow-y-auto">
              <div className="px-4 py-2 font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant border-b border-surface-container-highest">
                Explorer
              </div>
              <div className="p-2 flex-1 font-mono text-xs">
                {/* Folders */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center py-1 px-2 hover:bg-surface-container-highest cursor-pointer text-on-surface">
                    <span className="material-symbols-outlined text-[16px] mr-1">folder_open</span>
                    <span>quantum-src</span>
                  </div>
                  {/* Inside Folder */}
                  <div className="pl-4 flex flex-col gap-1">
                    <div className="flex items-center py-1 px-2 hover:bg-surface-container-highest cursor-pointer text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px] mr-1 text-secondary">folder</span>
                      <span>components</span>
                    </div>
                    <div className="flex items-center py-1 px-2 hover:bg-surface-container-highest cursor-pointer text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px] mr-1 text-secondary">folder</span>
                      <span>algorithms</span>
                    </div>
                    <div className="flex items-center py-1 px-2 bg-surface-container-highest cursor-pointer text-primary border-l border-primary">
                      <span className="material-symbols-outlined text-[16px] mr-1 text-secondary">html</span>
                      <span>quantum-core.html</span>
                    </div>
                    <div className="flex items-center py-1 px-2 hover:bg-surface-container-highest cursor-pointer text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px] mr-1 text-tertiary">css</span>
                      <span>encryption-styles.css</span>
                    </div>
                    <div className="flex items-center py-1 px-2 hover:bg-surface-container-highest cursor-pointer text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px] mr-1 text-primary">javascript</span>
                      <span>shor-algo.js</span>
                    </div>
                    <div className="flex items-center py-1 px-2 hover:bg-surface-container-highest cursor-pointer text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px] mr-1 text-secondary">javascript</span>
                      <span>neural-net.js</span>
                    </div>
                  </div>
                  <div className="flex items-center py-1 px-2 hover:bg-surface-container-highest cursor-pointer text-on-surface-variant mt-2">
                    <span className="material-symbols-outlined text-[16px] mr-1">folder</span>
                    <span>assets</span>
                  </div>
                  <div className="flex items-center py-1 px-2 hover:bg-surface-container-highest cursor-pointer text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] mr-1">folder</span>
                    <span>config</span>
                  </div>
                </div>
              </div>

              {/* Metadata Panel */}
              <div className="border-t border-surface-container-highest bg-surface-dim">
                <div className="px-4 py-2 font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant border-b border-surface-container-highest flex justify-between items-center">
                  Metadata
                  <span className="material-symbols-outlined text-[14px]">info</span>
                </div>
                <div className="p-4 font-mono text-xs flex flex-col gap-3">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Target Build:</span>
                    <span className="text-primary">2026.04.12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Security Level:</span>
                    <span className="text-tertiary">QKD-Sigma</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Components:</span>
                    <span className="text-secondary">42 Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Codebase Size:</span>
                    <span>1,450 LOC</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-surface-container-highest">
                    <span className="text-on-surface-variant block mb-1">Author / Lead Arch:</span>
                    <span className="text-primary font-bold">J. Jimenez Escobar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Editor Area */}
            <div className="flex-1 flex bg-[#0c0e12] overflow-auto relative custom-scrollbar">
              {/* Line Numbers */}
              <div className="w-12 bg-surface-container-low border-r border-surface-container-high flex flex-col text-right pr-3 py-4 font-mono text-[13px] text-on-surface-variant/50 select-none shrink-0">
                {[...Array(40)].map((_, i) => <span key={i}>{i+1}</span>)}
                <span className="text-primary font-bold">41</span>
                <span className="text-primary font-bold bg-primary/10">42</span>
                <span className="text-primary font-bold">43</span>
                <span>44</span><span>45</span>
              </div>
              
              {/* Code Content */}
              <div className="flex-1 p-4 font-mono text-[13px] leading-relaxed whitespace-pre font-medium text-[#f8f9fe]">
<span className="text-[#a9abb0] italic">{"<!-- \n  QUANTUM INTELLIGENCE CORE 2026\n  Lead Architect: Jonathan Jimenez Escobar\n  Module: SHOR_ALGORITHM_VISUALIZER\n  Security: AI Shield 2026 Active\n-->"}</span><br/>
<span className="text-[#ff9f4d]">{"<div"}</span> <span className="text-[#dac9ff]">{"id"}</span>=<span className="text-[#99f7ff]">{"\"quantum-encryption-matrix\""}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"absolute inset-0 bg-surface-container-lowest overflow-hidden z-0\""}</span><span className="text-[#ff9f4d]">{">"}</span><br/>
<span className="text-[#a9abb0] italic">{"<!-- Neural Network Data Stream Layer -->"}</span><br/>
<span className="text-[#ff9f4d]">{"<canvas"}</span> <span className="text-[#dac9ff]">{"id"}</span>=<span className="text-[#99f7ff]">{"\"qkd-stream\""}</span> <span className="text-[#dac9ff]">{"data-encryption-level"}</span>=<span className="text-[#99f7ff]">{"\"sigma\""}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"w-full h-full opacity-40 mix-blend-screen\""}</span><span className="text-[#ff9f4d]">{"></canvas>"}</span><br/>
<span className="text-[#a9abb0] italic">{"<!-- Core Visualization Component -->"}</span><br/>
<span className="text-[#ff9f4d]">{"<section"}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"relative z-10 flex items-center justify-center h-full w-full\""}</span><span className="text-[#ff9f4d]">{">"}</span><br/>
<span className="text-[#ff9f4d]">{"<div"}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"q-panel bg-surface-container-high/80 backdrop-blur-xl border-l-2 border-primary p-8 min-w-[600px]\""}</span><span className="text-[#ff9f4d]">{">"}</span><br/>
<span className="text-[#ff9f4d]">{"<header"}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"flex justify-between items-start mb-8\""}</span><span className="text-[#ff9f4d]">{">"}</span><br/>
<span className="text-[#ff9f4d]">{"<h2"}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"font-headline text-2xl text-primary uppercase tracking-widest\""}</span><span className="text-[#ff9f4d]">{">"}</span><br/>
          Shor's Algorithm Processing<br/>
        <span className="text-[#ff9f4d]">{"</h2>"}</span><br/>
<span className="text-[#ff9f4d]">{"<div"}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"flex gap-2\""}</span><span className="text-[#ff9f4d]">{">"}</span><br/>
<span className="text-[#ff9f4d]">{"<span"}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"status-indicator live animate-pulse text-tertiary\""}</span><span className="text-[#ff9f4d]">{">"}</span>LIVE DECRYPTION<span className="text-[#ff9f4d]">{"</span>"}</span><br/>
<span className="text-[#ff9f4d]">{"</div>"}</span><br/>
<span className="text-[#ff9f4d]">{"</header>"}</span><br/>
<span className="text-[#ff9f4d]">{"<div"}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"data-grid grid grid-cols-2 gap-4 font-mono text-sm\""}</span><span className="text-[#ff9f4d]">{">"}</span><br/>
<span className="text-[#a9abb0] italic">{"<!-- Input State Vector -->"}</span><br/>
<span className="text-[#ff9f4d]">{"<div"}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"data-cell bg-surface-container-lowest p-4\""}</span><span className="text-[#ff9f4d]">{">"}</span><br/>
<span className="text-[#ff9f4d]">{"<span"}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"text-on-surface-variant text-xs block mb-2 uppercase\""}</span><span className="text-[#ff9f4d]">{">"}</span>Qubit Register A<span className="text-[#ff9f4d]">{"</span>"}</span><br/>
<span className="text-[#ff9f4d]">{"<div"}</span> <span className="text-[#dac9ff]">{"id"}</span>=<span className="text-[#99f7ff]">{"\"reg-a-val\""}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"text-secondary syntax-glow text-lg bg-primary/10 w-full block\""}</span><span className="text-[#ff9f4d]">{">"}</span><br/>
            |ψ⟩ = (1/√N) ∑ |x⟩|f(x)⟩<br/>
          <span className="text-[#ff9f4d]">{"</div>"}</span><br/>
<span className="text-[#ff9f4d]">{"</div>"}</span><br/>
<span className="text-[#a9abb0] italic">{"<!-- Target Modulus -->"}</span><br/>
<span className="text-[#ff9f4d]">{"<div"}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"data-cell bg-surface-container-lowest p-4\""}</span><span className="text-[#ff9f4d]">{">"}</span><br/>
<span className="text-[#ff9f4d]">{"<span"}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"text-on-surface-variant text-xs block mb-2 uppercase\""}</span><span className="text-[#ff9f4d]">{">"}</span>RSA Target Modulus (N)<span className="text-[#ff9f4d]">{"</span>"}</span><br/>
<span className="text-[#ff9f4d]">{"<div"}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"text-tertiary font-bold\""}</span><span className="text-[#ff9f4d]">{">"}</span><br/>
            1522605027922533360535618378132637429...<br/>
          <span className="text-[#ff9f4d]">{"</div>"}</span><br/>
<span className="text-[#ff9f4d]">{"</div>"}</span><br/>
<span className="text-[#ff9f4d]">{"</div>"}</span><br/>
<span className="text-[#ff9f4d]">{"</div>"}</span><br/>
<span className="text-[#a9abb0] italic">{"<!-- AI Shield Overlay Container -->"}</span><br/>
<span className="text-[#ff9f4d]">{"<div"}</span> <span className="text-[#dac9ff]">{"id"}</span>=<span className="text-[#99f7ff]">{"\"ai-shield-overlay\""}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"absolute bottom-8 right-8 z-50 flex items-center gap-3 bg-surface-bright/90 backdrop-blur-md p-3 border-l-4 border-primary shadow-[0_10px_30px_rgba(0,242,255,0.1)]\""}</span><span className="text-[#ff9f4d]">{">"}</span><br/>
<span className="text-[#ff9f4d]">{"<img"}</span> <span className="text-[#dac9ff]">{"src"}</span>=<span className="text-[#99f7ff]">{"\"https://lh3.googleusercontent.com/aida/ADBb0uhfVeMr7Xm6HfLOqJXuZyxdH6OOUZs6tMKlV_wa0gntgQi8g54izGMqzRbCa-T7I0wlxD33obbSx7SCsrG0svzSM-mzcPigBPL4yiEstajx0Bip_rFS74fUumLijBsk42B4SIcoGJepOEw2Jyiz6OOAGd-QxnHVLIhDBQ1cMd9v-KpDROn_mGkyNuQYLCRsrvD2cxkwFAhGR-C4rXfuJlMKufby43IlB74SApbKQtR5LKvc0ni3woscMrQoU0CC5VW08lT1NO89uw\""}</span> <span className="text-[#dac9ff]">{"alt"}</span>=<span className="text-[#99f7ff]">{"\"AI Shield Active\""}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"w-8 h-8 opacity-80\""}</span><span className="text-[#ff9f4d]">{">"}</span><br/>
<span className="text-[#ff9f4d]">{"<div"}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"flex flex-col\""}</span><span className="text-[#ff9f4d]">{">"}</span><br/>
<span className="text-[#ff9f4d]">{"<span"}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"font-headline text-xs font-bold text-primary uppercase\""}</span><span className="text-[#ff9f4d]">{">"}</span>AI Shield 2026<span className="text-[#ff9f4d]">{"</span>"}</span><br/>
<span className="text-[#ff9f4d]">{"<span"}</span> <span className="text-[#dac9ff]">{"class"}</span>=<span className="text-[#99f7ff]">{"\"font-mono text-[10px] text-on-surface-variant\""}</span><span className="text-[#ff9f4d]">{">"}</span>Active Protection<span className="text-[#ff9f4d]">{"</span>"}</span><br/>
<span className="text-[#ff9f4d]">{"</div>"}</span><br/>
<span className="text-[#ff9f4d]">{"</div>"}</span><br/>
<span className="text-[#ff9f4d]">{"</section>"}</span><br/>
<span className="text-[#ff9f4d]">{"</div>"}</span><br/>
<span className="text-[#ff9f4d]">{"<script"}</span> <span className="text-[#dac9ff]">{"type"}</span>=<span className="text-[#99f7ff]">{"\"module\""}</span><span className="text-[#ff9f4d]">{">"}</span><br/>
<span className="text-[#ac89ff]">{"import"}</span> {"{ "} <span className="text-[#99f7ff] font-bold">{"QuantumStateProcessor"}</span> {" }"} <span className="text-[#ac89ff]">{"from"}</span> <span className="text-[#99f7ff]">{"'@core/ai/quantum-processor'"}</span>;<br/>
  <br/>
  <span className="text-[#ac89ff]">{"const"}</span> {"coreProcessor ="} <span className="text-[#ac89ff]">{"new"}</span> <span className="text-[#99f7ff] font-bold">{"QuantumStateProcessor"}</span>{"({"}<br/>
    {"encryptionTarget:"} <span className="text-[#99f7ff]">{"'RSA-4096'"}</span>{","}<br/>
    {"algorithm:"} <span className="text-[#99f7ff]">{"'Shor'"}</span>{","}<br/>
    {"securityProtocol:"} <span className="text-[#99f7ff]">{"'AI Shield 2026'"}</span><br/>
  {"});"}<br/>
<br/>
  <span className="text-[#99f7ff] font-bold">{"coreProcessor.initializeMatrix"}</span>{"()."}<span className="text-[#99f7ff] font-bold">{"then"}</span>{"(()"} <span className="text-[#ac89ff]">{"=>"}</span> {"{"}<br/>
    <span className="text-[#dac9ff]">{"console"}</span>{"."}<span className="text-[#99f7ff] font-bold">{"log"}</span>{"("}<span className="text-[#99f7ff]">{"\"Core logic stabilized. Ready for computation.\""}</span>{");"}<br/>
  {"});"}<br/>
<span className="text-[#ff9f4d]">{"</script>"}</span>
              </div>
              
              {/* Terminal Window (Bottom Right) */}
              <div className="absolute bottom-0 right-0 w-[50%] h-64 bg-surface-container-lowest border-t border-l border-surface-container-high flex flex-col z-20 shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)]">
                <div className="h-8 bg-surface-container-low flex justify-between items-center px-4 border-b border-surface-container-highest shrink-0">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">Quantum Terminal Output</span>
                  <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>
                    <span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>
                    <span className="w-2 h-2 rounded-full bg-primary/50"></span>
                  </div>
                </div>
                <div className="p-4 font-mono text-xs overflow-y-auto flex-1 custom-scrollbar">
                  <div className="text-on-surface-variant mb-1">&gt; Initiating QKD Link... [OK]</div>
                  <div className="text-on-surface-variant mb-1">&gt; Loading AI Shield 2026 heuristics... [OK]</div>
                  <div className="text-primary mb-1">&gt; Analyzing RSA Modulus...</div>
                  <div className="text-secondary mb-1">  - State vector superposition engaged.</div>
                  <div className="text-secondary mb-1">  - Applying Quantum Fourier Transform (QFT).</div>
                  <div className="text-tertiary mb-2">&gt; WARNING: High decoherence detected in Node 7. Compensating...</div>
                  <div className="text-primary font-bold animate-pulse">&gt; _</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[#0c0e12] dark:bg-[#0c0e12] flex justify-between items-center px-8 py-2 w-full text-xs border-t border-[#1c2025] z-50 shrink-0 transition-opacity duration-300">
        <div className="font-mono text-[10px] tracking-tighter opacity-50 text-[#ac89ff] dark:text-[#ac89ff]">
          © 2026 QUANTUM ARCHITECTURE | LEAD EXPERT: JONATHAN JIMENEZ ESCOBAR
        </div>
        <div className="flex items-center gap-6">
          <a className="font-mono text-[10px] tracking-tighter opacity-50 text-slate-600 hover:text-[#99f7ff] transition-colors" href="#">PRIVACY_PROTOCOLS</a>
          <a className="font-mono text-[10px] tracking-tighter opacity-50 text-slate-600 hover:text-[#99f7ff] transition-colors" href="#">LEGAL_ENCRYPTION</a>
        </div>
      </footer>

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
        .syntax-glow {
            text-shadow: 0 0 10px rgba(153, 247, 255, 0.3);
        }
      `}</style>
    </div>
  );
}
