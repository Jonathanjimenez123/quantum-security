import React from 'react';
import { motion } from 'motion/react';

interface GlobalThreatIntelDashboardProps {
  onBack?: () => void;
}

export default function GlobalThreatIntelDashboard({ onBack }: GlobalThreatIntelDashboardProps) {
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
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold mb-3 uppercase tracking-widest shadow-[0_0_10px_-2px_rgba(99,102,241,0.3)]"
            >
              <span className="material-symbols-outlined text-[14px]">radar</span>
              Inteligencia Global
            </motion.div>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              Threat Intel Global
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-slate-400 uppercase tracking-widest font-mono">APT & Zero-Days</span>
              <span className="text-slate-600 text-xs">•</span>
              <span className="text-indigo-400 font-bold bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20 text-[10px] uppercase tracking-widest shadow-[0_0_5px_currentColor]">Sync Real-Time</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center gap-2 rounded-xl h-10 px-5 bg-[#151B2B] hover:bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold uppercase tracking-widest transition-colors shadow-lg">
             <span className="material-symbols-outlined text-[18px]">filter_list</span>
             Filtros Correlación
          </button>
          <button className="flex items-center justify-center gap-2 rounded-xl h-10 px-5 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-[10px] font-bold uppercase tracking-widest shadow-[0_0_15px_-3px_rgba(99,102,241,0.4)] transition-colors">
            <span className="material-symbols-outlined text-[18px]">publish</span>
            Compartir IoC
          </button>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col gap-4 rounded-2xl p-6 bg-[#0F1423] border border-white/5 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-indigo-500/20 transition-all"></div>
          <div className="flex items-center justify-between relative z-10">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Nuevos Dominios</p>
            <div className="size-8 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center border border-indigo-500/20">
              <span className="material-symbols-outlined text-[18px]">public</span>
            </div>
          </div>
           <p className="text-white text-3xl font-bold tracking-tight relative z-10 mt-2">1,204 <span className="text-sm text-slate-500">24h</span></p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col gap-4 rounded-2xl p-6 bg-[#0F1423] border border-white/5 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-red-500/20 transition-all"></div>
          <div className="flex items-center justify-between relative z-10">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Campañas Activas</p>
            <div className="size-8 bg-red-500/10 text-red-400 rounded-xl flex items-center justify-center border border-red-500/20">
              <span className="material-symbols-outlined text-[18px]">campaign</span>
            </div>
          </div>
           <p className="text-white text-3xl font-bold tracking-tight relative z-10 mt-2">14 <span className="text-red-400 text-sm drop-shadow-[0_0_5px_currentColor]">CRÍTICAS</span></p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col gap-4 rounded-2xl p-6 bg-[#0F1423] border border-white/5 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-orange-500/20 transition-all"></div>
          <div className="flex items-center justify-between relative z-10">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">IoC Recolectados</p>
            <div className="size-8 bg-orange-500/10 text-orange-400 rounded-xl flex items-center justify-center border border-orange-500/20">
              <span className="material-symbols-outlined text-[18px]">fingerprint</span>
            </div>
          </div>
           <p className="text-white text-3xl font-bold tracking-tight relative z-10 mt-2">89.2k</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col gap-4 rounded-2xl p-6 bg-[#0F1423] border border-white/5 shadow-xl relative overflow-hidden group hover:border-indigo-500/30 transition-all cursor-pointer">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-indigo-500/20 transition-all"></div>
          <div className="flex items-center justify-between relative z-10">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Red Dark Web</p>
            <div className="size-8 bg-slate-800 text-slate-400 rounded-xl flex items-center justify-center border border-white/10">
              <span className="material-symbols-outlined text-[18px]">travel_explore</span>
            </div>
          </div>
           <p className="text-indigo-400 text-sm font-bold tracking-widest uppercase relative z-10 mt-auto flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">visibility</span> Monitor Activo</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[700px] min-h-[600px]">
        {/* Main Map Area */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="lg:col-span-2 bg-[#0F1423] border border-white/5 rounded-3xl relative overflow-hidden flex flex-col shadow-2xl">
          <div className="absolute inset-0 bg-blue-500/5 blur-[50px] pointer-events-none"></div>
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between relative z-10 bg-[#060910]/50 backdrop-blur-md">
            <h3 className="text-white font-bold text-sm flex items-center gap-2 uppercase tracking-widest">
              <span className="material-symbols-outlined text-blue-400 text-[18px]">public</span>
              Mapa Global de Propagación
            </h3>
            <span className="text-[10px] font-bold tracking-widest uppercase font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 flex items-center gap-1"><span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span> LIVE</span>
          </div>

          <div className="flex-1 relative bg-[#0a0d14] flex justify-center items-center overflow-hidden z-10">
            {/* Dots background resembling map */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
            
            {/* Custom stylized map overlay representation */}
            <div className="w-[90%] h-[90%] relative">
 <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida/ADBb0uiELWDjP-klfJqGxXR2f1t1FI_iK2D7U6FppKf7pV91p8Ql5U6R3r-pO3c6DnrkPRCs581s7MgfHIX9m5IClKkdgX55wojik0fJqEDEAOyCnosJj9w_fZlmOeKb_Ctjwrrx25vKJJwzFYUEz1kyfbWyKUVanJ2psDSW4F7yXdFKuqCIbNF__FMVJ43T0qNV7QaAj25BouwykItkwVvzT64iNYQt_UVJYBhP0sNvDDA4eo6yJO19cQKrjLWwAtclVgB7V-mtyxek3g')] bg-cover bg-center opacity-20 mix-blend-screen mix-blend-lighten "></div>
               {/* Simulated threat lines */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                  <path d="M 20% 30% Q 40% 10% 60% 40%" stroke="rgba(239,68,68,0.5)" strokeWidth="2" fill="none" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="200;0" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M 80% 20% Q 60% 30% 30% 60%" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" fill="none" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="200;0" dur="3s" repeatCount="indefinite" />
                  </path>
                  <path d="M 50% 80% Q 70% 60% 80% 40%" stroke="rgba(239,68,68,0.5)" strokeWidth="2" fill="none" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="200;0" dur="2.5s" repeatCount="indefinite" />
                  </path>
               </svg>

               {/* Origin and Target nodes */}
               <div className="absolute top-[30%] left-[20%] size-2 bg-red-500 rounded-full shadow-[0_0_15px_#ef4444] animate-ping"></div>
               <div className="absolute top-[30%] left-[20%] size-2 bg-red-500 rounded-full"></div>
               
               <div className="absolute top-[40%] left-[60%] size-1 bg-red-400 rounded-full shadow-[0_0_10px_#f87171] animate-pulse"></div>
               
               <div className="absolute top-[20%] right-[20%] size-3 bg-orange-500 rounded-full shadow-[0_0_15px_#f97316] animate-ping"></div>
               <div className="absolute top-[20%] right-[20%] size-3 bg-orange-500 rounded-full"></div>
            </div>

            <div className="absolute bottom-6 right-6 bg-[#060910]/80 backdrop-blur-md p-4 rounded-xl border border-white/10 text-xs shadow-2xl max-w-xs">
              <p className="text-slate-400 font-bold mb-3 uppercase tracking-widest text-[9px]">Flujos Dominantes</p>
              <div className="space-y-3">
                 <div>
                    <div className="flex justify-between items-center text-[10px] text-white font-mono mb-1">
                      <span>RU &rarr; US Elevado</span>
                      <span className="text-red-400 font-bold">12k req/s</span>
                    </div>
                    <div className="w-full bg-[#151B2B] h-1 rounded-full"><div className="bg-red-500 h-full w-[80%] shadow-[0_0_5px_#ef4444]"></div></div>
                 </div>
                 <div>
                    <div className="flex justify-between items-center text-[10px] text-white font-mono mb-1">
                      <span>CN &rarr; EU Finanzas</span>
                      <span className="text-orange-400 font-bold">8.5k req/s</span>
                    </div>
                    <div className="w-full bg-[#151B2B] h-1 rounded-full"><div className="bg-orange-500 h-full w-[60%] shadow-[0_0_5px_#f97316]"></div></div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Columns */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex flex-col gap-6">
          <div className="bg-[#0F1423] p-6 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] pointer-events-none"></div>
             <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest relative z-10 flex items-center gap-2">
               <span className="material-symbols-outlined text-purple-400 text-[18px]">target</span>
               Sectores Bajo Asalto (24H)
             </h3>
             <ul className="space-y-4 relative z-10">
               <li className="bg-[#060910] p-3 rounded-xl border border-white/5">
                 <div className="flex justify-between items-center mb-1.5">
                   <span className="text-white text-xs font-bold tracking-wide">Finanzas / Banca</span>
                   <span className="text-red-400 text-[10px] font-bold bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">42%</span>
                 </div>
                 <div className="w-full bg-[#151B2B] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full shadow-[0_0_5px_#ef4444]" style={{ width: '42%' }}></div>
                 </div>
               </li>
               <li className="bg-[#060910] p-3 rounded-xl border border-white/5">
                 <div className="flex justify-between items-center mb-1.5">
                   <span className="text-white text-xs font-bold tracking-wide">Criptomonedas</span>
                   <span className="text-orange-400 text-[10px] font-bold bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20">28%</span>
                 </div>
                 <div className="w-full bg-[#151B2B] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full shadow-[0_0_5px_#f97316]" style={{ width: '28%' }}></div>
                 </div>
               </li>
               <li className="bg-[#060910] p-3 rounded-xl border border-white/5">
                 <div className="flex justify-between items-center mb-1.5">
                   <span className="text-white text-xs font-bold tracking-wide">SaaS / E-commerce</span>
                   <span className="text-blue-400 text-[10px] font-bold bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">15%</span>
                 </div>
                 <div className="w-full bg-[#151B2B] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full shadow-[0_0_5px_#3b82f6]" style={{ width: '15%' }}></div>
                 </div>
               </li>
             </ul>
          </div>

          <div className="flex-1 bg-[#0F1423] p-6 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden flex flex-col">
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] pointer-events-none"></div>
             <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest relative z-10 flex items-center gap-2">
               <span className="material-symbols-outlined text-red-500 text-[18px]">bug_report</span>
               Nuevas Familias Detectadas
             </h3>
             <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar relative z-10 pr-2">
               <div className="p-4 bg-[#060910] border border-white/5 border-l-2 border-l-red-500 rounded-xl shadow-inner">
                 <h4 className="text-red-400 text-xs font-bold tracking-widest uppercase mb-1 drop-shadow-[0_0_5px_currentColor]">EvilGinx3 (AiTM)</h4>
                 <p className="text-slate-400 text-[10px] leading-relaxed">Framework de Adversary-in-the-Middle detectado inyectando proxies en 500+ dominios nuevos. Bypass de MFA activo.</p>
               </div>
               <div className="p-4 bg-[#060910] border border-white/5 border-l-2 border-l-orange-500 rounded-xl shadow-inner">
                 <h4 className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-1 drop-shadow-[0_0_5px_currentColor]">FakeUpdates.js</h4>
                 <p className="text-slate-400 text-[10px] leading-relaxed">Campaña de ingeniería social activa explotando sitios WordPress vulnerables para descargar payloads RAT cifrados.</p>
               </div>
               <div className="p-4 bg-[#060910] border border-white/5 border-l-2 border-l-purple-500 rounded-xl shadow-inner">
                 <h4 className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-1 drop-shadow-[0_0_5px_currentColor]">Qakbot Resurgence</h4>
                 <p className="text-slate-400 text-[10px] leading-relaxed">Nuevas variantes utilizando OneNote malicioso y evasión en memoria. Sector gubernamental objetivo primario.</p>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
