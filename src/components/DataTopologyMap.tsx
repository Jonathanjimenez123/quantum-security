import React from 'react';
import { motion } from 'motion/react';

interface DataTopologyMapProps {
  onBack?: () => void;
}

export default function DataTopologyMap({ onBack }: DataTopologyMapProps) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      
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
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold mb-3 uppercase tracking-widest shadow-[0_0_10px_-2px_rgba(59,130,246,0.3)]"
            >
              <span className="material-symbols-outlined text-[14px]">device_hub</span>
              Topología Activa
            </motion.div>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              Mapeo de Datos SOC
            </h2>
            <p className="text-sm text-slate-400 mt-1 uppercase tracking-widest font-mono">Visualización en tiempo real de flujos telemétricos</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center gap-2 rounded-xl h-10 px-5 bg-[#151B2B] hover:bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest transition-colors">
            <span className="material-symbols-outlined text-[18px]">refresh</span>
            Sincronizar
          </button>
          <button className="flex items-center justify-center gap-2 rounded-xl h-10 px-5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)] transition-colors">
            <span className="material-symbols-outlined text-[18px]">add_link</span>
            Nuevo Nodo
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col gap-3 rounded-2xl p-6 bg-[#0F1423] border border-white/5 hover:border-emerald-500/30 transition-all shadow-xl group">
          <div className="flex items-center justify-between">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Tráfico Egress</p>
             <div className="size-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
              <span className="material-symbols-outlined text-[20px]">cloud_upload</span>
            </div>
          </div>
          <p className="text-white text-3xl font-bold tracking-tight">1.2 <span className="text-sm text-slate-500">GB/hr</span></p>
          <div className="flex items-center gap-1 mt-auto">
            <span className="text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">trending_up</span> +12%
            </span>
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col gap-3 rounded-2xl p-6 bg-[#0F1423] border border-white/5 hover:border-blue-500/30 transition-all shadow-xl group">
          <div className="flex items-center justify-between">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Latencia P99</p>
             <div className="size-10 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
              <span className="material-symbols-outlined text-[20px]">speed</span>
            </div>
          </div>
          <p className="text-white text-3xl font-bold tracking-tight">45<span className="text-sm text-slate-500">ms</span></p>
          <div className="flex items-center gap-1 mt-auto">
            <span className="text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">trending_down</span> -2%
            </span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col gap-3 rounded-2xl p-6 bg-[#0F1423] border border-white/5 hover:border-purple-500/30 transition-all shadow-xl group">
          <div className="flex items-center justify-between">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Nodos Activos</p>
             <div className="size-10 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
              <span className="material-symbols-outlined text-[20px]">hub</span>
            </div>
          </div>
          <p className="text-white text-3xl font-bold tracking-tight">5<span className="text-slate-500 text-lg">/5</span></p>
          <div className="flex items-center gap-2 mt-auto text-[10px] font-bold uppercase tracking-widest text-slate-400">
             <span className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]"></span>
             Sincronizados
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col gap-3 rounded-2xl p-6 bg-[#0F1423] border border-white/5 hover:border-emerald-500/30 transition-all shadow-xl group">
          <div className="flex items-center justify-between">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Salud Red</p>
             <div className="size-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
              <span className="material-symbols-outlined text-[20px]">monitor_heart</span>
            </div>
          </div>
          <p className="text-emerald-400 text-3xl font-bold tracking-tight drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">Óptimo</p>
          <div className="flex items-center gap-1 mt-auto">
            <span className="text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
              99.99% UPTIME
            </span>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 mt-2 h-auto xl:h-[600px] min-h-[500px]">
        {/* Map Container */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="flex-1 rounded-3xl border border-white/5 bg-[#0F1423] overflow-hidden relative shadow-2xl group min-h-[500px]">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#60a5fa 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Map Controls */}
          <div className="absolute top-6 right-6 flex flex-col gap-2 z-10">
            <button className="bg-[#151B2B] p-2 rounded-xl shadow-lg border border-white/10 hover:bg-white/5 text-slate-300 transition-colors">
              <span className="material-symbols-outlined text-[20px]">add</span>
            </button>
            <button className="bg-[#151B2B] p-2 rounded-xl shadow-lg border border-white/10 hover:bg-white/5 text-slate-300 transition-colors">
              <span className="material-symbols-outlined text-[20px]">remove</span>
            </button>
            <button className="bg-[#151B2B] p-2 rounded-xl shadow-lg border border-white/10 hover:bg-white/5 text-slate-300 transition-colors">
              <span className="material-symbols-outlined text-[20px]">center_focus_strong</span>
            </button>
          </div>

          {/* Canvas/Visual Area */}
          <div className="w-full h-full relative flex items-center justify-center">
            {/* Central Node: AI Shield Engine */}
            <div className="absolute z-20 flex flex-col items-center gap-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-b from-blue-600 to-blue-900 shadow-[0_0_40px_rgba(37,99,235,0.6)] flex items-center justify-center relative border-4 border-[#0F1423]">
                <span className="material-symbols-outlined text-white text-[40px] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">admin_panel_settings</span>
                {/* Pulse Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
              </div>
              <div className="bg-[#060910]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-500/30 text-center shadow-lg">
                <p className="text-white text-[10px] font-bold uppercase tracking-widest">Quantum Core</p>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                   <span className="size-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                   <p className="text-blue-400 text-[9px] font-mono">ENLAZADO</p>
                </div>
              </div>
            </div>

            {/* SVG Connections for better rendering */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
               {/* Splunk to Core */}
               <path d="M 30% 30% L 50% 50%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" fill="none" />
               <path d="M 30% 30% L 50% 50%" stroke="#10b981" strokeWidth="2" fill="none" strokeDasharray="50, 200" strokeDashoffset="0">
                  <animate attributeName="stroke-dashoffset" values="250;0" dur="2s" repeatCount="indefinite" />
               </path>

               {/* AWS to Core */}
               <path d="M 70% 30% L 50% 50%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" fill="none" />
               <path d="M 70% 30% L 50% 50%" stroke="#f97316" strokeWidth="2" fill="none" strokeDasharray="50, 200" strokeDashoffset="0">
                  <animate attributeName="stroke-dashoffset" values="250;0" dur="2.5s" repeatCount="indefinite" />
               </path>

               {/* Slack to Core */}
               <path d="M 30% 70% L 50% 50%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" fill="none" />
               {/* No animated pulses, idle */}

               {/* Okta to Core */}
               <path d="M 70% 70% L 50% 50%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" fill="none" />
               <path d="M 70% 70% L 50% 50%" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="50, 200" strokeDashoffset="0">
                  <animate attributeName="stroke-dashoffset" values="250;0" dur="1.8s" repeatCount="indefinite" />
               </path>
            </svg>

            {/* Peripheral Node: Splunk (Top Left) */}
            <div className="absolute top-[30%] left-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 group/node cursor-pointer z-20">
              <div className="w-16 h-16 rounded-2xl bg-[#151B2B] border border-white/10 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-white text-[32px]">analytics</span>
              </div>
              <div className="bg-[#060910]/80 backdrop-blur px-3 py-1.5 rounded border border-white/5 text-center">
                <p className="text-white text-[10px] font-bold uppercase tracking-widest">Splunk SIEM</p>
                <p className="text-emerald-400 text-[9px] font-mono">120 ev/min</p>
              </div>
            </div>

            {/* Peripheral Node: AWS (Top Right) */}
            <div className="absolute top-[30%] right-[30%] translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 group/node cursor-pointer z-20">
              <div className="w-16 h-16 rounded-2xl bg-[#151B2B] border border-white/10 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-white text-[32px]">dns</span>
              </div>
              <div className="bg-[#060910]/80 backdrop-blur px-3 py-1.5 rounded border border-white/5 text-center">
                <p className="text-white text-[10px] font-bold uppercase tracking-widest">AWS S3</p>
                <p className="text-orange-400 text-[9px] font-mono">SYNCED</p>
              </div>
            </div>

            {/* Peripheral Node: Slack (Bottom Left) */}
            <div className="absolute bottom-[30%] left-[30%] -translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-3 group/node cursor-pointer z-20">
              <div className="w-16 h-16 rounded-2xl bg-[#151B2B] border border-white/10 hover:border-slate-500 hover:shadow-[0_0_20px_rgba(100,116,139,0.3)] flex items-center justify-center transition-all opacity-50 hover:opacity-100">
                <span className="material-symbols-outlined text-white text-[32px]">forum</span>
              </div>
              <div className="bg-[#060910]/80 backdrop-blur px-3 py-1.5 rounded border border-white/5 text-center">
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Slack Ops</p>
                <p className="text-slate-500 text-[9px] font-mono">IDLE</p>
              </div>
            </div>

            {/* Peripheral Node: Okta (Bottom Right) */}
            <div className="absolute bottom-[30%] right-[30%] translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-3 group/node cursor-pointer z-20">
              <div className="w-16 h-16 rounded-2xl bg-[#151B2B] border border-white/10 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-white text-[32px]">passkey</span>
              </div>
              <div className="bg-[#060910]/80 backdrop-blur px-3 py-1.5 rounded border border-white/5 text-center">
                <p className="text-white text-[10px] font-bold uppercase tracking-widest">Okta Auth</p>
                <p className="text-blue-400 text-[9px] font-mono">ACTIVE</p>
              </div>
            </div>
          </div>

          {/* Floating Legend */}
          <div className="absolute bottom-6 left-6 bg-[#060910]/80 backdrop-blur-md p-4 rounded-xl border border-white/10 text-xs z-10 shadow-2xl">
            <p className="text-slate-400 font-bold mb-3 uppercase tracking-widest text-[9px]">Estado de Enlaces</p>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_5px_currentColor]"></span>
                <span className="text-slate-300 text-[10px] font-mono">Transferencia Activa</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_5px_currentColor]"></span>
                <span className="text-slate-300 text-[10px] font-mono">Latencia Crítica</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                <span className="text-slate-500 text-[10px] font-mono">Nodo Inactivo</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Side Panel Details */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="w-full xl:w-96 flex flex-col gap-4">
          <div className="flex-1 rounded-3xl border border-white/5 bg-[#0F1423] p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[40px] pointer-events-none"></div>

            <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5 relative z-10">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-emerald-400 text-[24px]">analytics</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Splunk SIEM</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_5px_currentColor]"></span>
                    <span className="text-emerald-400 text-[9px] font-mono font-bold uppercase tracking-widest">Enlazado Seg</span>
                  </div>
                </div>
              </div>
              <button className="size-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-slate-400 transition-colors">
                <span className="material-symbols-outlined text-[20px]">more_vert</span>
              </button>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="bg-[#151B2B] p-4 rounded-xl border border-white/5">
                <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest mb-4">Métricas de Carga</p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Eventos / Minuto</span>
                      <span className="text-white font-mono text-xs">120</span>
                    </div>
                    <div className="w-full bg-[#060910] rounded-full h-1 border border-white/5 shadow-inner">
                      <div className="bg-emerald-500 h-full rounded-full shadow-[0_0_5px_#10b981]" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-t border-white/5 pt-3">
                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Volumen</span>
                    <span className="text-white font-mono text-xs">45 MB/s</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-white/5 pt-3">
                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Latencia Vía</span>
                    <span className="text-emerald-400 font-mono text-xs">12ms</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#151B2B] p-4 rounded-xl border border-white/5">
                <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest mb-3">Configuración de Nodo</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Protocolo</span>
                    <span className="text-[9px] text-purple-400 font-mono bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded shadow-inner">HTTPS/TLS 1.3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Estructura</span>
                    <span className="text-[9px] text-blue-400 font-mono bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded shadow-inner">JSON Lines</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Hash</span>
                    <span className="text-[9px] text-slate-500 font-mono truncate max-w-[120px]">0x9f8c...3a2b</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <button className="flex items-center justify-center gap-2 rounded-xl h-10 w-full bg-[#151B2B] hover:bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest transition-colors">
                  <span className="material-symbols-outlined text-[16px]">data_object</span>
                  Examinar Esquema
                </button>
                <button className="flex items-center justify-center gap-2 rounded-xl h-10 w-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest shadow-[0_0_10px_-2px_rgba(16,185,129,0.3)] transition-colors">
                  <span className="material-symbols-outlined text-[16px]">bolt</span>
                  Probar Conexión
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
