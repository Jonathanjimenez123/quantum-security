import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

interface SourceCodeHubProps {
  onBack?: () => void;
}

export default function SourceCodeHub({ onBack }: SourceCodeHubProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface font-body min-h-screen overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container flex flex-col">
      {/* Top Navigation Anchor */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,242,255,0.03)] tonal transitions via slate-900 surfaces">
        <div className="flex items-center gap-8">
          <div className="font-mono font-bold text-cyan-400 tracking-widest text-lg">
            QUANTUM SECURITY ARCHITECTURE
          </div>
          <div className="hidden md:flex gap-6">
            <a className="text-slate-500 hover:text-slate-300 transition-all duration-300 font-['Space_Grotesk'] tracking-tight text-sm flex items-center gap-2" href="#">
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 0" }}>hub</span>
              Network
            </a>
            <a className="text-slate-500 hover:text-slate-300 transition-all duration-300 font-['Space_Grotesk'] tracking-tight text-sm flex items-center gap-2" href="#">
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 0" }}>memory</span>
              Algorithms
            </a>
            <a className="text-slate-500 hover:text-slate-300 transition-all duration-300 font-['Space_Grotesk'] tracking-tight text-sm flex items-center gap-2" href="#">
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 0" }}>vpn_key</span>
              Vault
            </a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <button className="text-slate-500 hover:text-cyan-400 transition-colors p-1">
              <span className="material-symbols-outlined">security</span>
            </button>
            <button className="text-slate-500 hover:text-cyan-400 transition-colors p-1">
              <span className="material-symbols-outlined">terminal</span>
            </button>
          </div>
          <button className="bg-primary/10 text-cyan-400 font-mono text-xs uppercase px-4 py-2 border border-cyan-400/30 hover:bg-cyan-400/20 transition-all">
            SYSTEM AUTHORIZE
          </button>
          <img alt="Jonathan Jimenez Escobar - Scientific Lead" className="w-8 h-8 opacity-80" data-alt="A small, stylized profile portrait of a male lead architect, bathed in cool cyan and deep black lighting, fitting a high-tech cybersecurity interface." src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg" />
        </div>
      </nav>

      {/* Side Navigation Anchor */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 flex flex-col justify-between py-6 bg-slate-950 border-r border-white/5 z-40 hidden md:flex">
        <div className="px-6 mb-8 flex items-center gap-3">
          <img alt="Jonathan Jimenez Escobar Lead Profile" className="w-10 h-10 border border-primary/20" data-alt="A small, stylized profile portrait of a male lead architect, bathed in cool cyan and deep black lighting, fitting a high-tech cybersecurity interface." src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg" />
          <div>
            <div className="font-mono text-[10px] text-cyan-400/70 uppercase tracking-widest">LEAD ARCHITECT</div>
            <div className="font-headline text-sm font-semibold text-slate-200">J. Jimenez Escobar</div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300 font-mono text-xs uppercase tracking-widest transition-colors duration-150 ease-in-out" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>insights</span>
            Entropy Monitor
          </a>
          <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300 font-mono text-xs uppercase tracking-widest transition-colors duration-150 ease-in-out" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>verified</span>
            Hybrid Certs
          </a>
          <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300 font-mono text-xs uppercase tracking-widest transition-colors duration-150 ease-in-out" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>hub</span>
            PQC Algorithms
          </a>
          <a className="bg-slate-900 text-cyan-400 border-r-2 border-cyan-400 flex items-center gap-4 px-6 py-4 font-mono text-xs uppercase tracking-widest" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>vpn_key</span>
            Key Management
          </a>
          <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300 font-mono text-xs uppercase tracking-widest transition-colors duration-150 ease-in-out" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings_ethernet</span>
            System Logs
          </a>
        </nav>

        <div className="mt-auto px-6 pt-4 border-t border-white/5 space-y-2">
          <button className="w-full bg-tertiary/10 text-tertiary border border-tertiary/30 font-mono text-xs py-3 uppercase tracking-widest hover:bg-tertiary/20 transition-colors">
            INITIATE OVERRIDE
          </button>
          <div className="flex gap-2 mt-4 text-slate-500">
            <a className="flex-1 flex justify-center py-2 hover:text-cyan-300 transition-colors" href="#"><span className="material-symbols-outlined text-sm">biotech</span></a>
            <a className="flex-1 flex justify-center py-2 hover:text-cyan-300 transition-colors" href="#"><span className="material-symbols-outlined text-sm">support_agent</span></a>
          </div>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="flex-1 mt-16 md:ml-64 p-6 flex gap-6 overflow-hidden max-h-[calc(100vh-64px)]">
        {/* File Explorer Sidebar (Inner) */}
        <div className="w-64 flex flex-col bg-surface-container-low border-r border-surface-container-high overflow-y-auto">
          <div className="p-4 border-b border-surface-container-high bg-surface-container flex items-center justify-between">
            <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">Project Files</span>
            <span className="material-symbols-outlined text-on-surface-variant text-sm">folder_open</span>
          </div>

          <div className="p-2 space-y-1">
            {/* Directory Structure */}
            <div className="text-sm">
              <div className="flex items-center gap-2 px-2 py-1.5 text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-base">folder</span>
                <span className="font-mono text-xs">src</span>
              </div>
              <div className="pl-4 border-l border-outline-variant/30 ml-3">
                <div className="flex items-center gap-2 px-2 py-1.5 bg-surface-container text-primary border-l-2 border-primary -ml-[1px]">
                  <span className="material-symbols-outlined text-base text-primary">html</span>
                  <span className="font-mono text-xs">index.html</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-base">css</span>
                  <span className="font-mono text-xs">styles.css</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-base">javascript</span>
                  <span className="font-mono text-xs">layout.js</span>
                </div>
              </div>
            </div>
            <div className="text-sm mt-2">
              <div className="flex items-center gap-2 px-2 py-1.5 text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-base">folder</span>
                <span className="font-mono text-xs">assets</span>
              </div>
            </div>
          </div>
        </div>

        {/* Central Code Editor Area */}
        <div className="flex-1 flex flex-col bg-surface-container-highest relative group">
          {/* Header Bar */}
          <div className="h-12 bg-surface flex items-center justify-between px-4 border-b border-surface-container-highest">
            <div className="flex items-center gap-4">
              <div className="font-headline text-sm font-semibold tracking-wide text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">terminal</span>
                SOURCE CODE: PROTOTYPE HUB
              </div>
              <div className="px-2 py-0.5 bg-surface-container-low text-on-surface-variant font-mono text-[10px] uppercase border border-outline-variant/50">
                AI SHIELD 2026
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-on-surface-variant hover:text-primary transition-colors p-1" title="Format Document">
                <span className="material-symbols-outlined text-[18px]">format_align_left</span>
              </button>
              <button className="text-on-surface-variant hover:text-primary transition-colors p-1" title="Search">
                <span className="material-symbols-outlined text-[18px]">search</span>
              </button>
            </div>
          </div>

          {/* Code Content */}
          <div className="flex-1 overflow-auto bg-surface-container-lowest p-6 code-block font-mono text-sm leading-relaxed whitespace-pre font-light">
            <code className="block"><span className="text-secondary">{"<!"}</span><span className="text-secondary">{"DOCTYPE"}</span> <span className="text-primary">{"html"}</span><span className="text-secondary">{">"}</span></code>
            <code className="block"><span className="text-secondary">{"<"}</span><span className="text-secondary">{"html"}</span> <span className="text-primary">{"lang"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"en"'}</span> <span className="text-primary">{"class"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"dark"'}</span><span className="text-secondary">{">"}</span></code>
            <code className="block"><span className="text-secondary">{"<"}</span><span className="text-secondary">{"head"}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">  <span className="text-secondary">{"<"}</span><span className="text-secondary">{"meta"}</span> <span className="text-primary">{"charset"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"UTF-8"'}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">  <span className="text-secondary">{"<"}</span><span className="text-secondary">{"meta"}</span> <span className="text-primary">{"name"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"viewport"'}</span> <span className="text-primary">{"content"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"width=device-width, initial-scale=1.0"'}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">  <span className="text-secondary">{"<"}</span><span className="text-secondary">{"title"}</span><span className="text-secondary">{">"}</span>Hub de Prototipo de Alta Complejidad<span className="text-secondary">{"</"}</span><span className="text-secondary">{"title"}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">  <span className="text-secondary">{"<"}</span><span className="text-secondary">{"link"}</span> <span className="text-primary">{"rel"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"stylesheet"'}</span> <span className="text-primary">{"href"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"styles.css"'}</span><span className="text-secondary">{">"}</span></code>
            <code className="block"><span className="text-secondary">{"</"}</span><span className="text-secondary">{"head"}</span><span className="text-secondary">{">"}</span></code>
            <code className="block"><span className="text-secondary">{"<"}</span><span className="text-secondary">{"body"}</span> <span className="text-primary">{"class"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"bg-surface text-on-surface"'}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">  <span className="text-secondary">{"<"}</span><span className="text-secondary">{"div"}</span> <span className="text-primary">{"id"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"app-container"'}</span> <span className="text-primary">{"class"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"flex flex-col min-h-screen"'}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">    <span className="text-outline">{"<!--"}</span> System Core Initialization <span className="text-outline">{"-->"}</span></code>
            <code className="block">    <span className="text-secondary">{"<"}</span><span className="text-secondary">{"header"}</span> <span className="text-primary">{"class"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"border-b border-surface-container-high p-4"'}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">      <span className="text-secondary">{"<"}</span><span className="text-secondary">{"h1"}</span> <span className="text-primary">{"class"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"font-headline text-2xl text-primary"'}</span><span className="text-secondary">{">"}</span>AI SHIELD 2026<span className="text-secondary">{"</"}</span><span className="text-secondary">{"h1"}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">      <span className="text-secondary">{"<"}</span><span className="text-secondary">{"p"}</span> <span className="text-primary">{"class"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"font-mono text-sm text-secondary"'}</span><span className="text-secondary">{">"}</span>System Status: ACTIVE<span className="text-secondary">{"</"}</span><span className="text-secondary">{"p"}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">    <span className="text-secondary">{"</"}</span><span className="text-secondary">{"header"}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">    </code>
            <code className="block">    <span className="text-secondary">{"<"}</span><span className="text-secondary">{"main"}</span> <span className="text-primary">{"class"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"flex-1 grid grid-cols-12 gap-4 p-6"'}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">      <span className="text-secondary">{"<"}</span><span className="text-secondary">{"section"}</span> <span className="text-primary">{"class"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"col-span-8 bg-surface-container-low p-6"'}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">        <span className="text-outline">{"<!--"}</span> Data Visualization Stream <span className="text-outline">{"-->"}</span></code>
            <code className="block">        <span className="text-secondary">{"<"}</span><span className="text-secondary">{"div"}</span> <span className="text-primary">{"class"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"h-64 border-l-2 border-secondary-dim flex items-end gap-1 px-4"'}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">          <span className="text-secondary">{"<"}</span><span className="text-secondary">{"div"}</span> <span className="text-primary">{"class"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"w-2 bg-primary h-[40%] opacity-80"'}</span><span className="text-secondary">{">"}</span><span className="text-secondary">{"</"}</span><span className="text-secondary">{"div"}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">          <span className="text-secondary">{"<"}</span><span className="text-secondary">{"div"}</span> <span className="text-primary">{"class"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"w-2 bg-primary h-[70%] opacity-60"'}</span><span className="text-secondary">{">"}</span><span className="text-secondary">{"</"}</span><span className="text-secondary">{"div"}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">          <span className="text-secondary">{"<"}</span><span className="text-secondary">{"div"}</span> <span className="text-primary">{"class"}</span><span className="text-outline">{"="}</span><span className="text-tertiary">{'"w-2 bg-tertiary h-[90%] opacity-90"'}</span><span className="text-secondary">{">"}</span><span className="text-secondary">{"</"}</span><span className="text-secondary">{"div"}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">        <span className="text-secondary">{"</"}</span><span className="text-secondary">{"div"}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">      <span className="text-secondary">{"</"}</span><span className="text-secondary">{"section"}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">    <span className="text-secondary">{"</"}</span><span className="text-secondary">{"main"}</span><span className="text-secondary">{">"}</span></code>
            <code className="block">  <span className="text-secondary">{"</"}</span><span className="text-secondary">{"div"}</span><span className="text-secondary">{">"}</span></code>
            <code className="block"><span className="text-secondary">{"</"}</span><span className="text-secondary">{"body"}</span><span className="text-secondary">{">"}</span></code>
            <code className="block"><span className="text-secondary">{"</"}</span><span className="text-secondary">{"html"}</span><span className="text-secondary">{">"}</span></code>
          </div>

          {/* Floating Action Bar at bottom of code editor */}
          <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-surface-bright/80 backdrop-blur-md text-on-surface hover:text-primary px-4 py-2 flex items-center gap-2 border border-outline-variant/30 font-mono text-xs uppercase tracking-wide">
              <span className="material-symbols-outlined text-[18px]">content_copy</span>
              Copy Code
            </button>
          </div>
        </div>

        {/* Metadata & Actions Sidebar (Right) */}
        <div className="w-80 flex flex-col gap-6 overflow-y-auto">
          {/* Actions Card */}
          <div className="bg-surface-container-low p-6 flex flex-col gap-4">
            <button className="w-full bg-primary-container text-on-primary-container font-mono text-sm uppercase tracking-wider py-3 flex items-center justify-center gap-2 hover:bg-primary-fixed transition-colors shadow-[0_0_15px_rgba(153,247,255,0.4)]">
              <span className="material-symbols-outlined">download</span>
              Download Assets
            </button>
            <button 
              onClick={() => onBack ? onBack() : navigate(-1)}
              className="w-full bg-transparent border border-outline-variant text-on-surface-variant font-mono text-sm uppercase tracking-wider py-3 flex items-center justify-center gap-2 hover:bg-surface-container-high hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined">keyboard_return</span>
              Return to Hub
            </button>
          </div>

          {/* Metadata Bento Box */}
          <div className="bg-surface-container-low p-6">
            <h3 className="font-headline text-sm text-on-surface-variant uppercase tracking-widest mb-6 border-b border-surface-container-high pb-2">Artifact Metadata</h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-on-surface-variant uppercase">Version</span>
                <span className="font-mono text-sm text-primary">2026.1.0</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-on-surface-variant uppercase">Complexity</span>
                <span className="font-mono text-sm text-tertiary flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">warning</span> High
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-on-surface-variant uppercase">Components</span>
                <span className="font-mono text-sm text-on-surface">42 Units</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-on-surface-variant uppercase">Lines of Code</span>
                <span className="font-mono text-sm text-on-surface">1,450</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-container-high">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase block mb-2">Security Hash</span>
              <div className="bg-surface p-2 font-mono text-xs text-secondary break-all border border-outline-variant/30">
                0x7F8B...9A2C_QKD_VERIFIED
              </div>
            </div>
          </div>

          {/* Architect Signature Card */}
          <div className="bg-surface-container-low p-4 relative overflow-hidden flex items-center gap-4">
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
 <img alt="Architect Signature Background" className="w-12 h-12 opacity-50 border border-outline-variant/50 object-cover" data-alt="A macro shot of a complex circuit board illuminated by intense cyan lasers, emphasizing the deep black substrate and angular metallic pathways, creating an atmosphere of raw computational power." src="https://lh3.googleusercontent.com/aida/ADBb0ujWZRAQqHDmr8VYa4BnNeClS-eWDRibZlBe6cUU5_6vzZi64CGNQeLos4bU7h3yzxwJoj4UP-DOgFvsrkyyPmQA7PhKqqKuB2ZibLzktKFc_IgZU7a9vbC5kNAbwIUdpc98yG48Yy7UdOfnUY0fXb8zobxREQb_1hdY_s8uvynhrPLADJttKAuY_Rvd2lkRwu3qnLgvqSYKEN_jvsYzV3IFHId-QWVz2iXy-fJA2wRimHkfe0X87EbRLX11xUKfwL2XvGgyKyw9kw" />
            <div className="z-10">
              <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Approved By</div>
              <div className="font-headline text-sm font-semibold text-on-surface">JONATHAN JIMENEZ ESCOBAR</div>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        .code-block {
          counter-reset: line;
        }
        .code-block code {
          counter-increment: line;
        }
        .code-block code::before {
          content: counter(line);
          display: inline-block;
          width: 3rem;
          margin-right: 1.5rem;
          color: #46484c; /* outline-variant */
          text-align: right;
        }
      `}</style>
    </div>
  );
}
