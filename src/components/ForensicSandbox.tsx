import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

interface ForensicSandboxProps {
  onBack?: () => void;
}

export default function ForensicSandbox({ onBack }: ForensicSandboxProps) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 min-h-screen">
      {/* Top Action Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-4 gap-4">
        <div className="flex items-center gap-4">
          {onBack && (
            <button onClick={onBack} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors border border-white/5">
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
          )}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold mb-3 uppercase tracking-widest shadow-[0_0_10px_-2px_rgba(249,115,22,0.3)]"
            >
              <span className="material-symbols-outlined text-[14px]">science</span>
              Entorno Aislado
            </motion.div>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              Sandbox Forense
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-slate-400 uppercase tracking-widest font-mono">ID: #FS-2026-8942</span>
              <span className="text-slate-600 text-xs">•</span>
              <span className="text-red-400 font-bold bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20 text-[10px] uppercase tracking-widest">Riesgo Alto</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <label className="hidden md:flex flex-col min-w-[320px] h-10">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-[#151B2B] border border-white/10 overflow-hidden group focus-within:border-blue-500/50 focus-within:shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)] transition-all">
              <div className="text-slate-500 flex items-center justify-center pl-3">
                <span className="material-symbols-outlined text-[18px]">search</span>
              </div>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden bg-transparent text-white focus:outline-0 focus:ring-0 border-none h-full placeholder:text-slate-500 px-3 text-sm font-mono leading-normal" placeholder="URL Sospechosa..." defaultValue="suspicious-login.com/secure" />
              <button className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 px-4 text-[10px] font-bold uppercase tracking-widest transition-colors border-l border-white/5">Analizar</button>
            </div>
          </label>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4">
         <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#151B2B] hover:bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest transition-colors shadow-lg">
              <span className="material-symbols-outlined text-[18px]">bug_report</span>
              Escaneo Profundo
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#151B2B] hover:bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest transition-colors shadow-lg shadow-black/50">
              <span className="material-symbols-outlined text-[18px]">screenshot_monitor</span>
              Capturar Evidencia
            </button>
          </div>
          <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-[0_0_15px_-3px_rgba(249,115,22,0.5)] transition-colors border border-orange-400">
            <span className="material-symbols-outlined text-[18px]">gpp_maybe</span>
            Reportar a DB Threat
          </button>
      </div>

      {/* KPI Cards */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Safety Verdict */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col gap-4 rounded-2xl p-6 bg-[#0F1423] border border-white/5 hover:border-red-500/30 transition-all shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-red-500/20 transition-all"></div>
            <div className="flex items-center justify-between relative z-10">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Veredicto Seguridad</p>
              <div className="size-8 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center border border-red-500/20">
                <span className="material-symbols-outlined text-[18px]">health_and_safety</span>
              </div>
            </div>
            <div className="flex items-baseline gap-3 relative z-10">
              <p className="text-red-400 text-3xl font-bold tracking-tight drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">Crítico</p>
            </div>
            <div className="flex items-center justify-between relative z-10 mt-auto">
               <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Score de Riesgo</span>
              <span className="text-red-400 font-bold bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20 text-xs shadow-[0_0_5px_currentColor]">98/100</span>
            </div>
            <div className="w-full bg-[#060910] border border-white/5 h-1.5 rounded-full mt-2 overflow-hidden relative z-10">
              <div className="bg-red-500 h-full shadow-[0_0_8px_#ef4444]" style={{ width: '98%' }}></div>
            </div>
          </motion.div>

          {/* AI Probability */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col gap-4 rounded-2xl p-6 bg-[#0F1423] border border-white/5 hover:border-blue-500/30 transition-all shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-blue-500/20 transition-all"></div>
            <div className="flex items-center justify-between relative z-10">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Probabilidad IA</p>
               <div className="size-8 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/20">
                <span className="material-symbols-outlined text-[18px]">psychology</span>
              </div>
            </div>
            <div className="flex items-baseline gap-3 relative z-10">
              <p className="text-white text-3xl font-bold tracking-tight">98.4%</p>
            </div>
            <div className="flex items-center gap-2 relative z-10 mt-auto text-[10px]">
              <span className="text-emerald-400 font-bold flex items-center bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                <span className="material-symbols-outlined text-[12px] mr-1">trending_up</span> MATCH ALTO
              </span>
            </div>
             <p className="text-[9px] text-slate-500 font-mono tracking-widest uppercase relative z-10 mt-1">Basado en NLP & Visual</p>
          </motion.div>

          {/* Domain Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col gap-4 rounded-2xl p-6 bg-[#0F1423] border border-white/5 hover:border-orange-500/30 transition-all shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-orange-500/20 transition-all"></div>
            <div className="flex items-center justify-between relative z-10">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Edad de Dominio</p>
               <div className="size-8 bg-orange-500/10 text-orange-400 rounded-xl flex items-center justify-center border border-orange-500/20">
                <span className="material-symbols-outlined text-[18px]">dns</span>
              </div>
            </div>
            <div className="flex items-baseline gap-3 relative z-10">
              <p className="text-white text-3xl font-bold tracking-tight">2 Días</p>
            </div>
            <div className="flex items-center gap-2 relative z-10 mt-auto text-[10px]">
               <span className="text-orange-400 font-bold bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20 uppercase tracking-widest drop-shadow-[0_0_5px_currentColor]">Sospechoso</span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-[9px] font-mono text-slate-400 uppercase tracking-widest relative z-10">
              <span className="material-symbols-outlined text-[12px]">public</span> Host: Rusia (RU)
            </div>
          </motion.div>

          {/* SSL Status */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col gap-4 rounded-2xl p-6 bg-[#0F1423] border border-white/5 hover:border-slate-500/30 transition-all shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-slate-500/20 transition-all"></div>
            <div className="flex items-center justify-between relative z-10">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Certificado SSL</p>
               <div className="size-8 bg-slate-800 text-slate-400 rounded-xl flex items-center justify-center border border-white/10">
                <span className="material-symbols-outlined text-[18px]">lock_open</span>
              </div>
            </div>
            <div className="flex items-baseline gap-3 relative z-10">
              <p className="text-white text-3xl font-bold tracking-tight">Inválido</p>
            </div>
            <div className="flex items-center gap-2 relative z-10 mt-auto text-[10px]">
               <span className="text-red-400 font-bold bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20 uppercase tracking-widest shadow-[0_0_5px_currentColor]">Auto-firmado</span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-[9px] font-mono text-slate-400 uppercase tracking-widest relative z-10">
               Issuer: Entidad no verificada
            </div>
          </motion.div>
        </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-auto xl:h-[700px] min-h-[600px]">
        {/* Left Column: Sandbox Preview */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="xl:col-span-2 flex flex-col gap-6 h-full">
          {/* Sandbox Container */}
          <div className="flex-1 bg-[#0F1423] rounded-3xl border border-white/5 shadow-2xl overflow-hidden flex flex-col relative">
            <div className="absolute inset-0 bg-blue-500/5 blur-[100px] pointer-events-none"></div>

            <div className="bg-[#060910] border-b border-white/5 px-6 py-4 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <span className="size-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]"></span>
                <span className="text-white text-sm font-bold uppercase tracking-widest">Vista Previa Aislada</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase bg-[#151B2B] border border-white/5 px-2 py-1 rounded">Entorno: Ubuntu 22.04 / Chrome 114</span>
            </div>
            
            <div className="relative flex-1 bg-[#0a0d14] w-full h-full flex items-center justify-center overflow-hidden p-6">
               {/* Background Grid Pattern */}
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              
              {/* Simulated Browser Window */}
              <div className="w-full max-w-4xl h-full max-h-[500px] bg-slate-900 rounded-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col border border-white/10 relative z-10">
                {/* Fake Browser Bar */}
                <div className="bg-[#151B2B] border-b border-white/5 px-4 py-3 flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="size-3 rounded-full bg-red-500/80"></div>
                    <div className="size-3 rounded-full bg-yellow-500/80"></div>
                    <div className="size-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="flex-1 bg-[#060910] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-400 font-mono truncate shadow-inner flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px] text-red-500">lock_open</span>
                    https://suspicious-login.com/secure/login.php
                  </div>
                </div>
                {/* Website Content Mockup */}
                <div className="flex-1 bg-[#f8fafc] relative flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida/ADBb0uiELWDjP-klfJqGxXR2f1t1FI_iK2D7U6FppKf7pV91p8Ql5U6R3r-pO3c6DnrkPRCs581s7MgfHIX9m5IClKkdgX55wojik0fJqEDEAOyCnosJj9w_fZlmOeKb_Ctjwrrx25vKJJwzFYUEz1kyfbWyKUVanJ2psDSW4F7yXdFKuqCIbNF__FMVJ43T0qNV7QaAj25BouwykItkwVvzT64iNYQt_UVJYBhP0sNvDDA4eo6yJO19cQKrjLWwAtclVgB7V-mtyxek3g')] bg-cover bg-center opacity-30 mix-blend-multiply"></div>
                  
                   <div className="w-full max-w-sm bg-white rounded-xl shadow-2xl p-8 relative z-10 border border-slate-200">
                      <div className="h-8 w-24 bg-blue-600 rounded mb-6 opacity-80"></div>
                      <div className="h-6 w-3/4 bg-slate-200 rounded mb-6"></div>
                      <div className="h-10 w-full bg-slate-100 border border-slate-300 rounded mb-4"></div>
                      <div className="h-10 w-full bg-slate-100 border border-slate-300 rounded mb-6"></div>
                      <div className="h-10 w-full bg-blue-600 rounded"></div>
                   </div>

                  {/* Overlay for suspense */}
                  <div className="absolute inset-0 bg-red-900/10 pointer-events-none mix-blend-color-burn"></div>
                  
                  {/* Hotspots for suspicious elements */}
                  <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 size-12 rounded-full border border-red-500 bg-red-500/20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform group shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-pulse" title="Suspicious Input Field">
                    <div className="size-3 bg-red-500 rounded-full shadow-[0_0_10px_#ef4444]"></div>
                    <div className="absolute left-full ml-4 bg-[#0F1423] border border-red-500/50 text-red-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl">Keylogger Detectado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Panel: Network & Timeline */}
          <div className="h-64 bg-[#0F1423] rounded-3xl border border-white/5 p-6 flex flex-col gap-4 shadow-2xl relative overflow-hidden">
             <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none"></div>

            <div className="flex items-center justify-between relative z-10">
              <h3 className="text-white font-bold text-sm flex items-center gap-2 uppercase tracking-widest">
                <span className="material-symbols-outlined text-blue-400 text-lg">timeline</span>
                Actividad de Red
              </h3>
              <div className="flex gap-2">
                <span className="text-[10px] uppercase font-mono font-bold px-2 py-1 rounded bg-[#151B2B] text-slate-400 border border-white/5 shadow-inner">HTTP: 12</span>
                <span className="text-[10px] uppercase font-mono font-bold px-2 py-1 rounded bg-[#151B2B] text-slate-400 border border-white/5 shadow-inner">DNS: 4</span>
                <span className="text-[10px] uppercase font-mono font-bold px-2 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/30 shadow-inner">Bloqueados: 2</span>
              </div>
            </div>

            <div className="flex-1 w-full relative z-10 mt-2 bg-[#060910] p-4 rounded-xl border border-white/5 shadow-inner">
               <div className="absolute inset-0 flex items-end justify-between gap-1.5 px-4 pb-8">
                {/* Bars */}
                <div className="w-full max-w-[20px] bg-blue-500/30 rounded-t relative group h-[20%] border-t border-blue-500/50 hover:bg-blue-500/50 transition-colors"></div>
                <div className="w-full max-w-[20px] bg-blue-500/40 rounded-t relative group h-[45%] border-t border-blue-500/60 hover:bg-blue-500/60 transition-colors"></div>
                <div className="w-full max-w-[20px] bg-blue-500/50 rounded-t relative group h-[30%] border-t border-blue-500/70 hover:bg-blue-500/70 transition-colors"></div>
                <div className="w-full max-w-[20px] bg-red-500/80 rounded-t relative group h-[85%] border-t-2 border-red-400 hover:bg-red-500 transition-colors shadow-[0_0_15px_rgba(239,68,68,0.6)]">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0F1423] border border-red-500 text-red-400 text-[9px] uppercase tracking-widest font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 shadow-xl">Redirección Maliciosa</div>
                </div>
                <div className="w-full max-w-[20px] bg-blue-500/40 rounded-t relative group h-[40%] border-t border-blue-500/60 hover:bg-blue-500/60 transition-colors"></div>
                <div className="w-full max-w-[20px] bg-blue-500/30 rounded-t relative group h-[25%] border-t border-blue-500/50 hover:bg-blue-500/50 transition-colors"></div>
                <div className="w-full max-w-[20px] bg-blue-500/60 rounded-t relative group h-[60%] border-t border-blue-500/80 hover:bg-blue-500/80 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
                <div className="w-full max-w-[20px] bg-blue-500/40 rounded-t relative group h-[35%] border-t border-blue-500/60 hover:bg-blue-500/60 transition-colors"></div>
                <div className="w-full max-w-[20px] bg-blue-500/30 rounded-t relative group h-[15%] border-t border-blue-500/50 hover:bg-blue-500/50 transition-colors"></div>
                <div className="w-full max-w-[20px] bg-blue-500/20 rounded-t relative group h-[10%] border-t border-blue-500/40 hover:bg-blue-500/40 transition-colors"></div>
              </div>
              {/* X-Axis Labels */}
              <div className="absolute bottom-2 inset-x-4 flex justify-between text-[9px] font-bold tracking-widest uppercase font-mono text-slate-500 pt-2 border-t border-white/10">
                <span>0s</span>
                <span>2s</span>
                <span>4s</span>
                <span>6s</span>
                <span>8s</span>
                <span>10s</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Analysis Details */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex flex-col gap-6 h-full">
          {/* Tab Headers */}
          <div className="flex bg-[#0F1423] p-1.5 rounded-2xl border border-white/5 shrink-0 shadow-lg relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
            <button className="flex-1 py-2 text-[10px] font-bold uppercase tracking-widest text-white bg-[#151B2B] rounded-xl shadow-md border border-white/10 relative z-10 transition-colors">Motor IA NLP</button>
            <button className="flex-1 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 hover:bg-white/5 rounded-xl transition-colors relative z-10">Inspector DOM</button>
            <button className="flex-1 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 hover:bg-white/5 rounded-xl transition-colors relative z-10">Cabeceras</button>
          </div>

          {/* AI NLP Engine Raw Output */}
          <div className="flex-1 bg-[#0F1423] rounded-3xl border border-white/5 shadow-2xl overflow-hidden flex flex-col relative group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] pointer-events-none transition-all group-hover:bg-purple-500/20"></div>

            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between relative z-10 bg-[#060910]/50 backdrop-blur-md">
              <h3 className="text-white font-bold text-sm flex items-center gap-2 uppercase tracking-widest">
                <span className="material-symbols-outlined text-purple-400 text-[18px]">smart_toy</span>
                Output Analista IA
              </h3>
              <span className="text-[9px] font-bold tracking-widest uppercase font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 shadow-[0_0_5px_rgba(16,185,129,0.3)]">MODEL v4.2</span>
            </div>

            <div className="p-6 overflow-y-auto flex-1 font-mono text-xs space-y-4 custom-scrollbar relative z-10">
              <div className="p-4 rounded-xl bg-[#060910] border border-white/5 border-l-2 border-l-red-500 shadow-inner">
                <p className="text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-3">Clasificación de Texto</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Intención Phishing</span>
                    <span className="text-red-400 font-bold bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20 text-[10px]">98.4%</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/5">
                    <span className="text-slate-300">Urgencia / Escasez</span>
                    <span className="text-orange-400 font-bold bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20 text-[10px]">87.2%</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#060910] border border-white/5 border-l-2 border-l-orange-500 shadow-inner">
                <p className="text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-3">Suplantación Marca</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Marca Detectada</span>
                    <span className="text-white font-bold text-sm drop-shadow-[0_0_5px_currentColor]">PayPal Inc.</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/5">
                    <span className="text-slate-300">Match Logotipo</span>
                    <span className="text-orange-400 font-bold bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20 text-[10px]">92.1% (Fuzzy)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#060910] border border-white/5 border-l-2 border-l-blue-500 shadow-inner">
                 <p className="text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-3">Sintaxis y Gramática</p>
                <div className="text-slate-400 text-xs leading-relaxed space-y-2">
                  <p className="text-emerald-400/80">&gt; Análisis detectó 4 errores gramaticales típicos de campañas de phishing no nativas.</p>
                  <p className="text-red-400/80 bg-red-500/5 px-2 py-1 rounded inline-block">&gt; "Dear Customer verify quick" - Saludo no estándar.</p>
                </div>
              </div>
            </div>
          </div>

          {/* DOM Inspector summary (shrunk for space) */}
          <div className="bg-[#0F1423] rounded-2xl border border-white/5 p-4 shadow-lg flex items-center justify-between group hover:border-orange-500/30 transition-colors cursor-pointer relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center gap-3 relative z-10">
               <div className="size-10 bg-orange-500/10 text-orange-400 rounded-xl flex items-center justify-center border border-orange-500/20 shadow-inner">
                <span className="material-symbols-outlined text-[20px]">code</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-widest">Inspector DOM</h4>
                <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Elementos sospechosos</p>
              </div>
            </div>
            <div className="flex items-center gap-3 relative z-10">
              <span className="text-orange-400 font-bold bg-orange-500/10 border border-orange-500/20 px-2 py-1 rounded-lg text-[10px] uppercase tracking-widest shadow-[0_0_10px_rgba(249,115,22,0.3)] animate-pulse">3 Alertas</span>
              <span className="material-symbols-outlined text-slate-500 group-hover:text-white transition-colors">chevron_right</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
