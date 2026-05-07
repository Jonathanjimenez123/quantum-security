import { auth } from '../firebase';
import React, { useState } from 'react';
import { useToast } from '../contexts/ToastContext';
import { motion } from 'motion/react';

interface SecurityIncidentWarRoomProps {
  onBack?: () => void;
}

export default function SecurityIncidentWarRoom({ onBack }: SecurityIncidentWarRoomProps) {
  const [executingAction, setExecutingAction] = useState<string | null>(null);
  const [actionResult, setActionResult] = useState<{success: boolean, message: string} | null>(null);
  const { addToast } = useToast();

  const executeSoarAction = async (action: string, target: string) => {
    setExecutingAction(action);
    setActionResult(null);
    try {
      // Simulate API call for now
      setTimeout(() => {
        setActionResult({ success: true, message: 'Acción ejecutada correctamente en la zona de cuarentena.' });
        addToast('Acción defensiva completada', 'success');
        setExecutingAction(null);
      }, 1500);
    } catch (error) {
      setActionResult({ success: false, message: 'Error de despliegue' });
      addToast('Fallo en acción', 'error');
      setExecutingAction(null);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 min-h-[calc(100vh-[100px])]">
      {/* Top Navigation Bar / Breadcrumbs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-red-500/20 pb-4 gap-4">
         <div className="flex items-center gap-4">
          {onBack && (
            <button onClick={onBack} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors border border-white/5">
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
          )}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 text-[10px] font-bold mb-3 uppercase tracking-widest shadow-[0_0_15px_-3px_rgba(239,68,68,0.5)] animate-pulse"
            >
              <span className="material-symbols-outlined text-[14px]">e911_emergency</span>
              Protocolo Zero-Trust Activo
            </motion.div>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              War Room
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-slate-400 uppercase tracking-widest font-mono">INC-2026-CRIT</span>
              <span className="text-slate-600 text-xs">•</span>
              <span className="text-red-400 font-bold bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20 text-[10px] uppercase tracking-widest shadow-[0_0_5px_currentColor]">DEFCON 2</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-white uppercase tracking-widest">Cmdr. Sarah J.</p>
              <p className="text-[9px] font-mono text-slate-500 uppercase">Respondedor L3</p>
            </div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-10 border border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.3)]" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[700px]">
        {/* Left Sidebar: Critical Impact & Actions */}
        <motion.aside initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="w-full lg:w-80 flex flex-col gap-6 shrink-0 h-full">
           <div className="bg-[#0F1423] border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.1)] rounded-3xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-red-500/20 transition-all"></div>
              <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2 relative z-10">
                <span className="material-symbols-outlined text-[14px]">timer</span>
                Temporizador Despliegue
              </h3>
              <div className="flex gap-2 justify-between relative z-10">
                <div className="flex flex-col items-center">
                  <div className="bg-[#060910] text-red-500 w-12 h-12 rounded-xl flex items-center justify-center border border-red-500/30 mb-2 shadow-inner">
                    <span className="text-xl font-bold font-mono">00</span>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Días</span>
                </div>
                 <div className="text-red-500 text-lg font-bold mt-2">:</div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#060910] text-red-500 w-12 h-12 rounded-xl flex items-center justify-center border border-red-500/30 mb-2 shadow-inner">
                    <span className="text-xl font-bold font-mono">01</span>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Hrs</span>
                </div>
                <div className="text-red-500 text-lg font-bold mt-2">:</div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#060910] text-white w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 mb-2 shadow-inner">
                    <span className="text-xl font-bold font-mono">14</span>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Min</span>
                </div>
              </div>
           </div>

           <div className="bg-[#0F1423] border border-white/5 rounded-3xl p-6 flex flex-col gap-4 relative overflow-hidden flex-1">
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-[40px] pointer-events-none"></div>

             <h3 className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2 relative z-10 drop-shadow-[0_0_5px_currentColor]">
                <span className="material-symbols-outlined text-[14px]">warning</span>
                Defensa Activa
              </h3>
              
              <div className="space-y-3 relative z-10 overflow-y-auto custom-scrollbar flex-1 pr-2">
                 {actionResult && (
                  <div className={`p-3 rounded-xl border text-[10px] font-bold uppercase tracking-widest mb-4 ${actionResult.success ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-red-500/10 text-red-400 border-red-500/30'}`}>
                    {actionResult.message}
                  </div>
                 )}

                 <button onClick={() => executeSoarAction('block_domain', 'isolate')} disabled={executingAction !== null} className="w-full text-left px-4 py-3 bg-[#151B2B] border border-red-500/30 hover:border-red-500 hover:bg-white/5 transition-all rounded-xl group disabled:opacity-50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center gap-3 relative z-10">
                       <div className="p-2 bg-red-500/10 rounded-lg text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors border border-red-500/20">
                          <span className="material-symbols-outlined text-[18px]">{executingAction === 'block_domain' ? 'hourglass_empty' : 'block'}</span>
                       </div>
                       <div>
                          <h4 className="text-white text-xs font-bold uppercase tracking-widest">Aislamiento DNS</h4>
                          <p className="text-[9px] text-slate-500 font-mono mt-0.5">Blacklist global inmediato</p>
                       </div>
                    </div>
                 </button>

                 <button onClick={() => executeSoarAction('force_logout', 'all')} disabled={executingAction !== null} className="w-full text-left px-4 py-3 bg-[#151B2B] border border-orange-500/30 hover:border-orange-500 hover:bg-white/5 transition-all rounded-xl group disabled:opacity-50 relative overflow-hidden">
                     <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center gap-3 relative z-10">
                       <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors border border-orange-500/20">
                          <span className="material-symbols-outlined text-[18px]">{executingAction === 'force_logout' ? 'hourglass_empty' : 'logout'}</span>
                       </div>
                       <div>
                          <h4 className="text-white text-xs font-bold uppercase tracking-widest">Purga de Sesiones</h4>
                          <p className="text-[9px] text-slate-500 font-mono mt-0.5">Forzar re-auth RRHH/Finanzas</p>
                       </div>
                    </div>
                 </button>
                 
                  <button onClick={() => executeSoarAction('lockdown', 'endpoints')} disabled={executingAction !== null} className="w-full text-left px-4 py-3 bg-[#151B2B] border border-purple-500/30 hover:border-purple-500 hover:bg-white/5 transition-all rounded-xl group disabled:opacity-50 relative overflow-hidden">
                     <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center gap-3 relative z-10">
                       <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors border border-purple-500/20">
                          <span className="material-symbols-outlined text-[18px]">{executingAction === 'lockdown' ? 'hourglass_empty' : 'lock_person'}</span>
                       </div>
                       <div>
                          <h4 className="text-white text-xs font-bold uppercase tracking-widest">Lockdown Perimetral</h4>
                          <p className="text-[9px] text-slate-500 font-mono mt-0.5">Congelar endpoints 1A</p>
                       </div>
                    </div>
                 </button>
              </div>
           </div>
        </motion.aside>

        {/* Center: Map/Intel Visualization */}
        <motion.section initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="flex-1 flex flex-col relative bg-[#0F1423] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          {/* Map Controls */}
          <div className="absolute top-6 left-6 z-10 flex gap-2">
            <div className="flex items-center bg-[#060910]/80 backdrop-blur-md border border-white/10 rounded-xl p-1 shadow-lg">
              <button className="p-2 hover:bg-white/5 rounded-lg text-slate-300">
                <span className="material-symbols-outlined text-[18px]">zoom_in</span>
              </button>
              <button className="p-2 hover:bg-white/5 rounded-lg text-slate-300">
                <span className="material-symbols-outlined text-[18px]">zoom_out</span>
              </button>
            </div>
            <div className="bg-[#060910]/80 backdrop-blur-md border border-red-500/30 rounded-xl px-4 py-2 flex items-center gap-3 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              <span className="block w-2 h-2 rounded-full bg-red-500 animate-ping shadow-[0_0_8px_#ef4444]"></span>
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest drop-shadow-[0_0_5px_currentColor]">Vector de Infección</span>
            </div>
          </div>

          <div className="w-full h-full bg-[#0a0d14] relative">
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
 <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida/ADBb0uiELWDjP-klfJqGxXR2f1t1FI_iK2D7U6FppKf7pV91p8Ql5U6R3r-pO3c6DnrkPRCs581s7MgfHIX9m5IClKkdgX55wojik0fJqEDEAOyCnosJj9w_fZlmOeKb_Ctjwrrx25vKJJwzFYUEz1kyfbWyKUVanJ2psDSW4F7yXdFKuqCIbNF__FMVJ43T0qNV7QaAj25BouwykItkwVvzT64iNYQt_UVJYBhP0sNvDDA4eo6yJO19cQKrjLWwAtclVgB7V-mtyxek3g')] bg-cover bg-center opacity-10 mix-blend-screen mix-blend-lighten "></div>
            
             {/* Simulated infection nodes */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-red-500/10 blur-[50px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-500 border-4 border-[#0F1423] shadow-[0_0_30px_rgba(239,68,68,1)] z-10 animate-pulse"></div>
            
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
               <path d="M 33% 50% Q 50% 20% 70% 40%" stroke="rgba(239,68,68,0.3)" strokeWidth="2" fill="none" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" values="400;0" dur="2s" repeatCount="indefinite" />
               </path>
               <path d="M 33% 50% Q 40% 70% 60% 80%" stroke="rgba(239,68,68,0.2)" strokeWidth="1" fill="none" strokeDasharray="4,4">
                 <animate attributeName="stroke-dashoffset" values="300;0" dur="3s" repeatCount="indefinite" />
               </path>
            </svg>

            <div className="absolute top-[40%] left-[70%] w-32 h-32 rounded-full bg-orange-500/10 blur-[40px] pointer-events-none"></div>
            <div className="absolute top-[40%] left-[70%] w-3 h-3 rounded-full bg-orange-500 border-2 border-[#0F1423] z-10 shadow-[0_0_15px_#f97316]"></div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex gap-4">
               <div className="bg-[#060910]/80 backdrop-blur-md border border-red-500/20 p-4 rounded-2xl flex-1 flex items-center gap-4 shadow-xl">
                 <div className="size-10 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center border border-red-500/20 shadow-inner">
                   <span className="material-symbols-outlined text-[20px]">bug_report</span>
                 </div>
                 <div>
                   <p className="text-[9px] font-bold tracking-widest uppercase text-slate-500 mb-1">Impacto Critico</p>
                   <p className="text-xl font-bold text-white">1,248 <span className="text-[10px] text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">+12/m</span></p>
                 </div>
               </div>

               <div className="bg-[#060910]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex-1 flex items-center gap-4 shadow-xl">
                 <div className="size-10 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/20 shadow-inner">
                   <span className="material-symbols-outlined text-[20px]">security</span>
                 </div>
                 <div>
                   <p className="text-[9px] font-bold tracking-widest uppercase text-slate-500 mb-1">Contención Automática</p>
                   <p className="text-xl font-bold text-white">892 <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">71%</span></p>
                 </div>
               </div>

               <div className="bg-[#060910]/80 backdrop-blur-md border border-orange-500/20 p-4 rounded-2xl flex-1 flex items-center gap-4 shadow-xl">
                 <div className="size-10 bg-orange-500/10 text-orange-400 rounded-xl flex items-center justify-center border border-orange-500/20 shadow-inner">
                   <span className="material-symbols-outlined text-[20px]">group_off</span>
                 </div>
                 <div>
                   <p className="text-[9px] font-bold tracking-widest uppercase text-slate-500 mb-1">Identidades Expuestas</p>
                   <p className="text-xl font-bold text-white">43</p>
                 </div>
               </div>
          </div>
        </motion.section>

        {/* Right Sidebar: Collaboration */}
        <motion.aside initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="w-full lg:w-96 flex flex-col bg-[#0F1423] border border-white/5 rounded-3xl shrink-0 h-full overflow-hidden shadow-2xl">
          <div className="p-5 border-b border-white/5 flex justify-between items-center bg-[#060910]">
             <h3 className="text-white text-sm font-bold flex items-center gap-2 uppercase tracking-widest">
               <span className="relative flex size-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500"></span>
               </span>
               Chat Coordinación
             </h3>
             <span className="text-[9px] font-bold tracking-widest uppercase bg-[#151B2B] border border-white/10 text-slate-400 px-2 py-1 rounded">12 Online</span>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-5 custom-scrollbar relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] pointer-events-none"></div>

            {/* Message Item */}
            <div className="flex gap-4 relative z-10">
              <div className="size-8 rounded-full bg-[#151B2B] border border-white/10 flex items-center justify-center text-[10px] font-bold text-white shrink-0 shadow-inner">MJ</div>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Mike Jenkins</span>
                  <span className="text-[9px] font-mono text-slate-500">10:42 AM</span>
                </div>
                <div className="text-[11px] text-slate-300 bg-[#151B2B] p-3 rounded-2xl rounded-tl-none border border-white/5 leading-relaxed">
                  Aislado el payload inicial apuntando a las VLANs financieras.
                </div>
              </div>
            </div>

            {/* System Message */}
            <div className="flex justify-center my-4 relative z-10">
              <span className="bg-orange-500/10 text-orange-400 text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border border-orange-500/20 flex items-center gap-1 shadow-[0_0_10px_rgba(249,115,22,0.2)]">
                <span className="material-symbols-outlined text-[12px]">warning</span>
                Alerta: Nodo Secundario Comprometido
              </span>
            </div>

            {/* Message Item (Self) */}
            <div className="flex gap-4 flex-row-reverse relative z-10">
               <div className="size-8 rounded-full bg-red-500 border border-red-400 flex items-center justify-center text-[10px] font-bold text-white shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.5)]">SJ</div>
              <div className="flex flex-col gap-1 w-full items-end">
                <div className="flex items-baseline justify-between flex-row-reverse w-full mb-1">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Sarah J.</span>
                  <span className="text-[9px] font-mono text-slate-500">10:44 AM</span>
                </div>
                <div className="text-[11px] text-white bg-red-500/20 p-3 rounded-2xl rounded-tr-none border border-red-500/30 text-right leading-relaxed shadow-inner">
                  Confirmando contención VECTOR-3. Iniciando purga de sesiones AD.
                </div>
              </div>
            </div>
            
            {/* Message Item */}
            <div className="flex gap-4 relative z-10">
              <div className="size-8 rounded-full bg-[#151B2B] border border-white/10 flex items-center justify-center text-[10px] font-bold text-white shrink-0 shadow-inner">DK</div>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">David Kim</span>
                  <span className="text-[9px] font-mono text-slate-500">10:45 AM</span>
                </div>
                <div className="text-[11px] text-slate-300 bg-[#151B2B] p-3 rounded-2xl rounded-tl-none border border-white/5 leading-relaxed">
                  Recibido Comandante. Scripts SOAR acoplados. Subiendo logs DUMP.
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="px-2 py-1.5 bg-[#060910] rounded-lg text-[9px] font-mono text-slate-400 flex items-center gap-1.5 border border-white/5 hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-[14px]">attachment</span> dump_442_F.txt
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 border-t border-white/5 bg-[#060910]">
             <div className="relative">
              <input className="w-full bg-[#0F1423] border border-white/10 rounded-xl pl-4 pr-12 py-3.5 text-xs text-white focus:outline-none focus:border-red-500/50 focus:bg-[#151B2B] transition-all placeholder-slate-500" placeholder="Orden al equipo táctico..." type="text" />
              <button className="absolute right-2 top-1.5 p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
            <div className="flex gap-3 mt-4">
              <button className="flex-1 py-2.5 bg-[#151B2B] hover:bg-white/5 border border-white/5 rounded-xl text-[9px] uppercase font-bold text-slate-400 hover:text-white transition-colors flex justify-center items-center gap-2">
                 <span className="material-symbols-outlined text-[14px]">attachment</span>
                Evidencia
              </button>
              <button className="flex-1 py-2.5 bg-[#151B2B] hover:bg-white/5 border border-white/5 rounded-xl text-[9px] uppercase font-bold text-slate-400 hover:text-white transition-colors gap-2 flex justify-center items-center">
                 <span className="material-symbols-outlined text-[14px]">person_add</span>
                Apoyo
              </button>
            </div>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
