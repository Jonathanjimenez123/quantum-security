import { auth, db } from '../firebase';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import { motion } from 'motion/react';

interface SoarAutomationDashboardProps {
  onBack?: () => void;
}

export default function SoarAutomationDashboard({ onBack }: SoarAutomationDashboardProps) {
  const [automatedMitigations, setAutomatedMitigations] = useState(1420);
  const [threatsBlocked, setThreatsBlocked] = useState(45200);
  const [executionLogs, setExecutionLogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setIsLoading(true);
      try {
        const incidentsRef = collection(db, 'incidents');
        const incidentsSnapshot = await getDocs(query(incidentsRef, orderBy('reportedAt', 'desc'), limit(10)));
        
        let mitigations = 0;
        let blocked = 0;
        const logs: any[] = [];
        
        incidentsSnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.status === 'resolved' || data.status === 'closed') {
            mitigations++;
            blocked += Math.floor(Math.random() * 10) + 1;
          }
          logs.push({
            id: doc.id,
            timestamp: data.reportedAt ? new Date(data.reportedAt.seconds * 1000).toLocaleString() : new Date().toLocaleString(),
            playbookName: data.title || 'Auto-Isolation Protocol',
            triggeredBy: data.reporterId || 'AI Anomaly Detector',
            status: data.status === 'open' ? 'Running' : 'Completed',
            duration: data.status === 'open' ? '--' : `${(Math.random() * 2).toFixed(1)}s`
          });
        });
        
        if (incidentsSnapshot.size > 0) {
          setAutomatedMitigations(1420 + mitigations);
          setThreatsBlocked(45200 + blocked);
          setExecutionLogs(logs);
        } else {
          useFallbackData();
        }
      } catch (error) {
        useFallbackData();
        handleFirestoreError(error, OperationType.GET, 'incidents');
      } finally {
        setIsLoading(false);
      }
    };

    const useFallbackData = () => {
        setAutomatedMitigations(1420);
        setThreatsBlocked(45200);
        setExecutionLogs([
            { id: '1', timestamp: '2026-10-14 14:22:11', playbookName: 'Auto-Isolation Protocol X-9', triggeredBy: 'Endpoint Agent #442', status: 'Completed', duration: '1.2s' },
            { id: '2', timestamp: '2026-10-14 14:21:05', playbookName: 'Log4j Zero-Day Patching', triggeredBy: 'Vulnerability Scanner', status: 'Running', duration: '--' },
            { id: '3', timestamp: '2026-10-14 14:15:22', playbookName: 'Lateral Movement Block', triggeredBy: 'AI Anomaly Detector', status: 'Completed', duration: '0.4s' },
            { id: '4', timestamp: '2026-10-14 14:10:01', playbookName: 'Malware Quarantine', triggeredBy: 'Email Gateway', status: 'Failed', duration: '5.1s' }
        ]);
    };

    fetchDashboardData();
  }, []);

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
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold mb-3 uppercase tracking-widest shadow-[0_0_10px_-2px_rgba(16,185,129,0.3)]"
            >
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
              Core Automatizado
            </motion.div>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              SOAR Automation
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-slate-400 uppercase tracking-widest font-mono">Engine: SOAR-V4</span>
              <span className="text-slate-600 text-xs">•</span>
              <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 text-[10px] uppercase tracking-widest flex items-center gap-1 shadow-[0_0_5px_currentColor]"><span className="size-1.5 bg-emerald-400 rounded-full animate-ping"></span> Activo</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Link to="/playbooks" className="flex items-center justify-center gap-2 rounded-xl h-10 px-5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-widest shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)] transition-colors">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Nuevo Playbook
          </Link>
        </div>
      </div>

       {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col gap-4 rounded-2xl p-6 bg-[#0F1423] border border-white/5 shadow-xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-blue-500/20 transition-all"></div>
           <div className="flex items-center justify-between relative z-10">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Playbooks Activos</p>
              <div className="size-8 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/20">
                <span className="material-symbols-outlined text-[18px]">account_tree</span>
              </div>
           </div>
           <div className="flex items-center gap-3 relative z-10">
             <p className="text-white text-3xl font-bold tracking-tight">128</p>
             <span className="text-emerald-400 text-xs font-bold flex items-center bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
               <span className="material-symbols-outlined text-[14px]">trending_up</span> +12%
             </span>
           </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col gap-4 rounded-2xl p-6 bg-[#0F1423] border border-white/5 shadow-xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-purple-500/20 transition-all"></div>
           <div className="flex items-center justify-between relative z-10">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Mitigaciones Automáticas</p>
              <div className="size-8 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center border border-purple-500/20">
                <span className="material-symbols-outlined text-[18px]">gpp_good</span>
              </div>
           </div>
           <div className="flex items-center gap-3 relative z-10">
             <p className="text-white text-3xl font-bold tracking-tight">{isLoading ? '...' : automatedMitigations.toLocaleString()}</p>
             <span className="text-emerald-400 text-xs font-bold flex items-center bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
               <span className="material-symbols-outlined text-[14px]">trending_up</span> +8%
             </span>
           </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col gap-4 rounded-2xl p-6 bg-[#0F1423] border border-white/5 shadow-xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-orange-500/20 transition-all"></div>
           <div className="flex items-center justify-between relative z-10">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Tiempo de Respuesta</p>
               <div className="size-8 bg-orange-500/10 text-orange-400 rounded-xl flex items-center justify-center border border-orange-500/20">
                <span className="material-symbols-outlined text-[18px]">timer</span>
              </div>
           </div>
           <div className="flex items-center gap-3 relative z-10">
             <p className="text-white text-3xl font-bold tracking-tight">12ms</p>
             <span className="text-orange-400 text-[10px] font-bold uppercase tracking-widest flex items-center bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20 shadow-[0_0_5px_currentColor]">Instantáneo</span>
           </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col gap-4 rounded-2xl p-6 bg-[#0F1423] border border-white/5 shadow-xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-emerald-500/20 transition-all"></div>
           <div className="flex items-center justify-between relative z-10">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Amenazas Bloqueadas</p>
               <div className="size-8 bg-slate-800 text-slate-400 rounded-xl flex items-center justify-center border border-white/10">
                <span className="material-symbols-outlined text-[18px]">block</span>
              </div>
           </div>
           <div className="flex items-center gap-3 relative z-10">
             <p className="text-emerald-400 text-3xl font-bold tracking-tight drop-shadow-[0_0_8px_currentColor]">{isLoading ? '...' : `${(threatsBlocked / 1000).toFixed(1)}k`}</p>
             <span className="text-emerald-400 text-xs font-bold flex items-center bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
               <span className="material-symbols-outlined text-[14px]">trending_up</span> +22%
             </span>
           </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto min-h-[500px]">
        {/* Visual Playbook Editor Preview */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="lg:col-span-8 flex flex-col gap-4 h-full">
           <div className="flex items-center justify-between">
              <h3 className="text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-400 text-[18px]">account_tree</span>
                Editor Visual (Preview)
              </h3>
              <Link to="/playbooks" className="text-slate-400 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Abrir Editor Completo</Link>
           </div>
           
           <div className="relative bg-[#0F1423] rounded-3xl border border-white/5 h-full min-h-[400px] overflow-hidden group shadow-2xl flex flex-col">
              <div className="absolute inset-0 bg-blue-500/5 blur-[50px] pointer-events-none"></div>
              {/* Grid Pattern */}
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

              {/* Canvas Simulation */}
              <div className="relative flex-1 flex flex-col items-center justify-center p-8 z-10">
                 <div className="flex flex-col items-center gap-8 scale-90 sm:scale-100">
                    {/* Node 1: Trigger */}
                    <div className="p-4 rounded-2xl bg-[#060910] border border-purple-500/30 w-52 text-center relative shadow-[0_0_15px_rgba(168,85,247,0.15)] z-20 hover:border-purple-500/60 transition-colors">
                       <p className="text-[9px] text-purple-400 font-bold mb-1.5 uppercase tracking-widest">TRIGGER</p>
                       <p className="text-sm font-bold text-white">Detección DDoS</p>
                       <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-purple-500/30"></div>
                    </div>
                    {/* Node 2: Condition */}
                    <div className="p-4 rounded-2xl bg-[#060910] border border-blue-500/30 w-60 text-center relative shadow-[0_0_15px_rgba(59,130,246,0.15)] z-20 hover:border-blue-500/60 transition-colors">
                       <p className="text-[9px] text-blue-400 font-bold mb-1.5 uppercase tracking-widest">CONDICIÓN</p>
                       <p className="text-sm font-bold text-white font-mono">Trafico &gt; 50Gbps</p>
                       {/* Connections */}
                       <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-blue-500/30"></div>
                       <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-0.5 bg-blue-500/30"></div>
                     </div>
                     {/* Actions Row */}
                     <div className="flex gap-12 z-20">
                        <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/50 w-48 text-center shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                           <p className="text-[9px] text-red-500 font-bold mb-1.5 uppercase tracking-widest drop-shadow-[0_0_5px_currentColor]">ACCIÓN</p>
                           <p className="text-sm font-bold text-red-100">Blacklist IP INMEDIATO</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-[#060910] border border-slate-600 w-48 text-center hover:border-slate-400 transition-colors">
                           <p className="text-[9px] text-slate-400 font-bold mb-1.5 uppercase tracking-widest">NOTIFICAR</p>
                           <p className="text-sm font-bold text-white">Slack a Admin</p>
                        </div>
                     </div>
                 </div>
              </div>

              <div className="absolute bottom-6 left-6 flex gap-2 z-30">
                 <button className="bg-[#151B2B] p-2 rounded-xl text-slate-300 hover:text-white border border-white/10 hover:bg-white/5 transition-all shadow-lg">
                    <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                 </button>
                 <button className="bg-[#151B2B] p-2 rounded-xl text-slate-300 hover:text-white border border-white/10 hover:bg-white/5 transition-all shadow-lg">
                    <span className="material-symbols-outlined text-[18px]">zoom_out</span>
                 </button>
              </div>
           </div>
        </motion.div>

        {/* Template Library */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="lg:col-span-4 flex flex-col gap-4">
           <div className="flex items-center justify-between">
              <h3 className="text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-400 text-[18px]">library_books</span>
                Librería Templates
              </h3>
              <button className="text-slate-400 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Ver Todo</button>
           </div>
           
           <div className="flex flex-col gap-4 flex-1">
              <div className="p-5 rounded-3xl bg-[#0F1423] border border-white/5 hover:border-red-500/30 transition-all cursor-pointer group shadow-xl relative overflow-hidden">
                 <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/5 transition-colors pointer-events-none"></div>
                 <div className="flex items-center gap-3 mb-3 relative z-10">
                    <div className="size-8 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center border border-red-500/20">
                      <span className="material-symbols-outlined text-[18px]">security</span>
                    </div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest">Aislamiento Ransomware</h4>
                 </div>
                 <p className="text-xs text-slate-400 mb-4 leading-relaxed relative z-10">Segmenta instantáneamente los hosts infectados y revoca las API keys tras la detección.</p>
                 <div className="flex justify-between items-center relative z-10">
                    <span className="text-[9px] bg-red-500/10 text-red-400 px-2 py-1 rounded border border-red-500/20 uppercase font-bold tracking-widest shadow-[0_0_5px_currentColor]">CRÍTICO ALTO</span>
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-red-400 transition-colors">arrow_forward</span>
                 </div>
              </div>

               <div className="p-5 rounded-3xl bg-[#0F1423] border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer group shadow-xl relative overflow-hidden">
                 <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors pointer-events-none"></div>
                 <div className="flex items-center gap-3 mb-3 relative z-10">
                    <div className="size-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                      <span className="material-symbols-outlined text-[18px]">cloud_sync</span>
                    </div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest">Reparador Drift Cloud</h4>
                 </div>
                 <p className="text-xs text-slate-400 mb-4 leading-relaxed relative z-10">Revierte cambios no autorizados en políticas de S3 a estados conocidos y seguros.</p>
                 <div className="flex justify-between items-center relative z-10">
                    <span className="text-[9px] bg-[#151B2B] border border-white/10 text-slate-300 px-2 py-1 rounded uppercase font-bold tracking-widest">Compliance</span>
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-blue-400 transition-colors">arrow_forward</span>
                 </div>
              </div>

               <div className="p-5 rounded-3xl bg-[#0F1423] border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer group shadow-xl relative overflow-hidden">
                 <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors pointer-events-none"></div>
                 <div className="flex items-center gap-3 mb-3 relative z-10">
                    <div className="size-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
                      <span className="material-symbols-outlined text-[18px]">mark_email_unread</span>
                    </div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest">Triage de Phishing</h4>
                 </div>
                 <p className="text-xs text-slate-400 mb-4 leading-relaxed relative z-10">Auto-analiza correos reportados y purga duplicados en toda la organización M365/Google.</p>
                 <div className="flex justify-between items-center relative z-10">
                    <span className="text-[9px] bg-[#151B2B] border border-white/10 text-slate-300 px-2 py-1 rounded uppercase font-bold tracking-widest">Utilidad</span>
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-purple-400 transition-colors">arrow_forward</span>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>

       {/* Execution Logs Table */}
       <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center justify-between">
             <h3 className="text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2">
               <span className="material-symbols-outlined text-emerald-400 text-[18px]">checklist</span>
               Logs de Ejecución SOAR
             </h3>
             <div className="flex gap-2">
               <button className="bg-[#151B2B] text-slate-300 hover:text-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-white/10 hover:border-white/20 transition-colors shadow-lg">Export CSV</button>
             </div>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/5 bg-[#0F1423] shadow-2xl relative">
             <div className="absolute top-0 right-1/4 w-96 h-32 bg-emerald-500/5 rounded-full blur-[50px] pointer-events-none"></div>
             <table className="w-full text-left border-collapse relative z-10">
                <thead>
                   <tr className="bg-[#060910] text-slate-500 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                      <th className="px-6 py-4 border-b border-white/5">Timestamp</th>
                      <th className="px-6 py-4 border-b border-white/5">Playbook</th>
                      <th className="px-6 py-4 border-b border-white/5">Trigger</th>
                      <th className="px-6 py-4 border-b border-white/5">Estado</th>
                      <th className="px-6 py-4 border-b border-white/5 text-right">Duración</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                   {isLoading ? (
                      <tr>
                         <td colSpan={5} className="px-6 py-8 text-center text-slate-400">
                            <span className="material-symbols-outlined animate-spin text-emerald-400 text-3xl">refresh</span>
                         </td>
                      </tr>
                   ) : executionLogs.length > 0 ? (
                      executionLogs.map((log) => (
                         <tr key={log.id} className="hover:bg-white/5 transition-colors cursor-pointer group">
                            <td className="px-6 py-4 text-slate-400 text-xs font-mono">{log.timestamp}</td>
                            <td className="px-6 py-4 text-white text-sm font-bold group-hover:text-emerald-400 transition-colors">{log.playbookName}</td>
                            <td className="px-6 py-4 text-slate-400 text-xs">{log.triggeredBy}</td>
                            <td className="px-6 py-4">
                               <span className={`inline-flex items-center gap-1.5 font-bold text-[9px] uppercase tracking-widest py-1 px-2.5 rounded border ${
                                  log.status === 'Completed' ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' : 
                                  log.status === 'Running' ? 'text-blue-400 bg-blue-500/10 border-blue-500/20' : 
                                  'text-red-400 bg-red-400/10 border-red-500/20'
                               }`}>
                                  <span className={`size-1.5 rounded-full ${
                                     log.status === 'Completed' ? 'bg-emerald-400 shadow-[0_0_5px_#34d399]' : 
                                     log.status === 'Running' ? 'bg-blue-400 animate-pulse shadow-[0_0_5px_#60a5fa]' : 
                                     'bg-red-400 shadow-[0_0_5px_#f87171]'
                                  }`}></span> {log.status}
                               </span>
                            </td>
                            <td className="px-6 py-4 text-slate-400 text-xs text-right font-mono">{log.duration}</td>
                         </tr>
                      ))
                   ) : (
                      <tr>
                         <td colSpan={5} className="px-6 py-8 text-center text-slate-400 text-sm">
                            Sin registros de ejecución.
                         </td>
                      </tr>
                   )}
                </tbody>
             </table>
          </div>
       </div>
    </div>
  );
}
