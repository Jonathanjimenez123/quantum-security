import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { collection, query, getDocs, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { motion } from 'motion/react';

interface AIGlobalStatusProps {
  onBack?: () => void;
}

const performanceData = [
  { time: '00:00', latency: 42 },
  { time: '04:00', latency: 45 },
  { time: '08:00', latency: 55 },
  { time: '12:00', latency: 48 },
  { time: '16:00', latency: 60 },
  { time: '20:00', latency: 50 },
  { time: 'Now', latency: 45 },
];

export default function AIGlobalStatus({ onBack }: AIGlobalStatusProps) {
  const [pastIncidents, setPastIncidents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [threatLevel, setThreatLevel] = useState<'Normal' | 'Elevated' | 'High' | 'Critical'>('Normal');
  const [activePhishing, setActivePhishing] = useState(0);
  const [activeMalware, setActiveMalware] = useState(0);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const q = query(collection(db, 'incidents'), orderBy('reportedAt', 'desc'), limit(3));
        const snapshot = await getDocs(q);
        
        if (!snapshot.empty) {
          const incidents: any[] = [];
          snapshot.forEach(doc => {
            incidents.push({ id: doc.id, ...doc.data() });
          });
          setPastIncidents(incidents);
        } else {
          // Fallback
          setPastIncidents([
            { id: '1', title: 'Picos de Latencia en Firewall EU', status: 'resolved', description: 'Tráfico inusual detectado y mitigado en el cluster EU-West. Sin impacto a clientes core.', reportedAt: new Date('2026-10-24T14:30:00Z') },
            { id: '2', title: 'Retraso de Sincronización Edge', status: 'resolved', description: 'Mantenimiento del core NLP causó un micro-retraso de 5 min en nodos perimetrales.', reportedAt: new Date('2026-10-18T09:15:00Z') },
            { id: '3', title: 'API Gateway Intermitente', status: 'resolved', description: 'Degradación de milisegundos en peticiones de login. Rutas críticas estables.', reportedAt: new Date('2026-10-02T11:45:00Z') }
          ]);
        }
      } catch (error) {
        setPastIncidents([
            { id: '1', title: 'Picos de Latencia en Firewall EU', status: 'resolved', description: 'Tráfico inusual detectado y mitigado en el cluster EU-West. Sin impacto a clientes core.', reportedAt: new Date('2026-10-24T14:30:00Z') },
            { id: '2', title: 'Retraso de Sincronización Edge', status: 'resolved', description: 'Mantenimiento del core NLP causó un micro-retraso de 5 min en nodos perimetrales.', reportedAt: new Date('2026-10-18T09:15:00Z') },
            { id: '3', title: 'API Gateway Intermitente', status: 'resolved', description: 'Degradación de milisegundos en peticiones de login. Rutas críticas estables.', reportedAt: new Date('2026-10-02T11:45:00Z') }
          ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIncidents();
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'incidents'), orderBy('reportedAt', 'desc'), limit(50));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let activeCount = 0;
      let phishingCount = 0;
      let malwareCount = 0;

      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.status === 'open' || data.status === 'investigating') {
          activeCount++;
          const type = (data.type || '').toLowerCase();
          if (type.includes('phish')) phishingCount++;
          if (type.includes('malware') || type.includes('virus')) malwareCount++;
        }
      });

      setActivePhishing(phishingCount);
      setActiveMalware(malwareCount);

      if (activeCount > 20) setThreatLevel('Critical');
      else if (activeCount > 10) setThreatLevel('High');
      else if (activeCount > 5) setThreatLevel('Elevated');
      else setThreatLevel('Normal');
    }, () => {
         // Fallback if permission denied
        setThreatLevel('Normal');
    });

    return () => unsubscribe();
  }, []);

  const getThreatColors = () => {
    switch(threatLevel) {
      case 'Critical': return { text: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/30', shadow: 'shadow-[0_0_15px_rgba(239,68,68,0.5)]' };
      case 'High': return { text: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/30', shadow: 'shadow-[0_0_15px_rgba(249,115,22,0.5)]' };
      case 'Elevated': return { text: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', shadow: 'shadow-[0_0_15px_rgba(234,179,8,0.5)]' };
      default: return { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', shadow: 'shadow-[0_0_15px_rgba(16,185,129,0.5)]' };
    }
  };

  const threatStyle = getThreatColors();

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 min-h-screen">
      {/* Top Action Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-4 gap-4">
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
              <span className="material-symbols-outlined text-[14px]">public</span>
              Monitoreo Global AI Shield
            </motion.div>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              Estado del Sistema Core
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-slate-400 uppercase tracking-widest font-mono">Infraestructura 2026</span>
              <span className="text-slate-600 text-xs">•</span>
              <span className={`font-bold px-1.5 py-0.5 rounded border text-[10px] uppercase tracking-widest flex items-center gap-1 ${threatStyle.bg} ${threatStyle.text} ${threatStyle.border} ${threatStyle.shadow}`}>
                 <span className={`size-1.5 rounded-full animate-ping bg-current`}></span> {threatLevel === 'Normal' ? '100% Operacional' : threatLevel}
              </span>
            </div>
          </div>
        </div>
      </div>

       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-8">
             {/* Core Services Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-2xl bg-[#0F1423] border border-white/5 p-6 shadow-xl relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[40px] pointer-events-none transition-all group-hover:bg-emerald-500/10"></div>
                  <div className="flex items-center justify-between relative z-10 mb-2">
                     <span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-emerald-400 transition-colors">psychology</span>
                     <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
                  </div>
                  <div className="relative z-10">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Motor NLP Cuántico</p>
                     <p className="text-xl font-bold text-white">99.99% Uptime</p>
                  </div>
                </motion.div>

                 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-2xl bg-[#0F1423] border border-white/5 p-6 shadow-xl relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] pointer-events-none transition-all group-hover:bg-blue-500/10"></div>
                  <div className="flex items-center justify-between relative z-10 mb-2">
                     <span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-blue-400 transition-colors">database</span>
                     <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]"></span>
                  </div>
                  <div className="relative z-10">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Memoria de Amenazas DB</p>
                     <p className="text-xl font-bold text-white">Sincronizado</p>
                  </div>
                </motion.div>

                 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="rounded-2xl bg-[#0F1423] border border-white/5 p-6 shadow-xl relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[40px] pointer-events-none transition-all group-hover:bg-emerald-500/10"></div>
                  <div className="flex items-center justify-between relative z-10 mb-2">
                     <span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-emerald-400 transition-colors">api</span>
                     <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                  </div>
                  <div className="relative z-10">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Gateway API Zero-Trust</p>
                     <p className="text-xl font-bold text-white">Óptimo</p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="rounded-2xl bg-[#0F1423] border border-white/5 p-6 shadow-xl relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[40px] pointer-events-none transition-all group-hover:bg-emerald-500/10"></div>
                  <div className="flex items-center justify-between relative z-10 mb-2">
                     <span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-emerald-400 transition-colors">dashboard</span>
                     <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                  </div>
                  <div className="relative z-10">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Servicios de Dashboard</p>
                     <p className="text-xl font-bold text-white">Operacional</p>
                  </div>
                </motion.div>
             </div>

             {/* Performance Chart */}
             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="rounded-3xl bg-[#0F1423] border border-white/5 p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none"></div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 relative z-10">
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Latencia Global (ms)</h3>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Tiempo respuesta inferencia</p>
                  </div>
                  <div className="flex items-center gap-2 bg-[#060910] border border-white/10 rounded-xl p-1 shadow-inner">
                    <button className="px-3 py-1.5 rounded-lg text-[9px] font-bold bg-emerald-500/20 text-emerald-400 shadow-sm border border-emerald-500/30">GLOBAL</button>
                    <button className="px-3 py-1.5 rounded-lg text-[9px] font-bold text-slate-500 hover:text-white transition-colors">US-EAST</button>
                    <button className="px-3 py-1.5 rounded-lg text-[9px] font-bold text-slate-500 hover:text-white transition-colors">EU-WEST</button>
                  </div>
                </div>
                
                <div className="flex items-baseline gap-3 mb-6 relative z-10">
                  <p className="text-4xl font-bold text-white tracking-tight">45ms</p>
                  <div className="flex items-center bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded shadow-[0_0_5px_rgba(16,185,129,0.3)]">
                    <span className="material-symbols-outlined text-[14px] mr-1">trending_down</span>
                    -2.4%
                  </div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase ml-auto">Últimas 24H</p>
                </div>
                
                {/* Chart Area */}
                <div className="relative w-full h-64 z-10">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorLatencyStatus" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#34d399" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#34d399" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="time" stroke="#475569" tick={{fill: '#64748b', fontSize: 10, fontFamily: 'monospace'}} axisLine={false} tickLine={false} />
                      <YAxis stroke="#475569" tick={{fill: '#64748b', fontSize: 10, fontFamily: 'monospace'}} axisLine={false} tickLine={false} />
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#060910', borderColor: '#1e293b', color: '#f8fafc', borderRadius: '12px', fontSize: '12px' }}
                        itemStyle={{ color: '#34d399', fontWeight: 'bold' }}
                        labelStyle={{ color: '#64748b', marginBottom: '4px', textTransform: 'uppercase', fontSize: '10px' }}
                        formatter={(value: number) => [`${value} ms`, 'Latencia']}
                      />
                      <Area type="monotone" dataKey="latency" stroke="#34d399" fillOpacity={1} fill="url(#colorLatencyStatus)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
             </motion.div>
             
             {/* Past Incidents */}
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="rounded-3xl bg-[#0F1423] border border-white/5 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-500/5 rounded-full blur-[40px] pointer-events-none"></div>
                <div className="px-6 py-5 border-b border-white/5 relative z-10 bg-[#060910]/50 backdrop-blur-md">
                   <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-slate-400">history</span>
                      Incidentes de Plataforma Resolvidos
                   </h3>
                </div>
                <div className="divide-y divide-white/5 relative z-10">
                   {isLoading ? (
                      <div className="p-8 text-center text-slate-500 flex justify-center"><span className="material-symbols-outlined text-[24px] animate-spin">refresh</span></div>
                   ) : (
                      pastIncidents.map((incident) => {
                         const dateStr = incident.reportedAt?.toDate ? incident.reportedAt.toDate().toLocaleString() : new Date(incident.reportedAt).toLocaleString();
                         return (
                            <div key={incident.id} className="p-6 bg-[#060910]/30 hover:bg-white/5 transition-colors group">
                               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                  <h4 className="font-bold text-white text-sm tracking-wide">{incident.title}</h4>
                                  <span className={`inline-flex items-center rounded border px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest shadow-sm ${incident.status === 'resolved' ? 'bg-[#151B2B] text-slate-300 border-white/10' : 'bg-red-500/10 text-red-400 border-red-500/30 shadow-[0_0_5px_rgba(239,68,68,0.3)]'}`}>
                                     {incident.status === 'resolved' ? 'Resuelto' : 'Activo'}
                                  </span>
                               </div>
                               <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                                  {incident.description || 'Sin descripción detallada.'}
                               </p>
                               <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">{dateStr}</p>
                            </div>
                         );
                      })
                   )}
                </div>
             </motion.div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
             {/* Global Threat Level */}
             <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="rounded-3xl bg-[#0F1423] border border-white/5 p-6 shadow-2xl relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] pointer-events-none ${threatStyle.bg}`}></div>
                <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest relative z-10 flex items-center gap-2">
                   <span className={`material-symbols-outlined text-[18px] ${threatStyle.text}`}>radar</span>
                   Nivel de Alerta Global
                </h3>
                
                <div className={`flex flex-col items-center justify-center py-8 rounded-2xl border mb-6 relative z-10 bg-[#060910]/50 backdrop-blur-md shadow-inner ${threatStyle.border} ${threatStyle.bg}`}>
                   <div className={`h-24 w-24 rounded-full border-4 flex items-center justify-center relative mb-4 border-transparent ${threatStyle.border}`}>
                      <div className={`absolute inset-0 rounded-full border-4 border-r-transparent border-b-transparent border-l-transparent animate-spin ${threatStyle.border}`}></div>
                      <span className={`material-symbols-outlined text-4xl ${threatStyle.text} drop-shadow-[0_0_10px_currentColor]`}>{threatLevel === 'Normal' ? 'security' : 'warning'}</span>
                   </div>
                   <h4 className={`text-2xl font-bold uppercase tracking-widest drop-shadow-[0_0_8px_currentColor] ${threatStyle.text}`}>{threatLevel}</h4>
                   <p className="text-[9px] font-mono mt-2 text-slate-400 uppercase tracking-widest text-center px-4">Basado en telemetría en tiempo real</p>
                </div>

                <div className="space-y-5 relative z-10">
                   <div className="flex items-center gap-4">
                      <div className="size-10 flex items-center justify-center rounded-xl bg-[#151B2B] text-slate-400 border border-white/5 shadow-inner">
                         <span className="material-symbols-outlined text-[20px]">public</span>
                      </div>
                      <div className="flex-1">
                         <div className="flex justify-between items-center mb-1.5">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Actividad Phishing</span>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${activePhishing > 5 ? 'text-red-400' : activePhishing > 0 ? 'text-yellow-400' : 'text-emerald-400'}`}>{activePhishing > 5 ? 'Alta' : activePhishing > 0 ? 'Elevada' : 'Normal'}</span>
                         </div>
                         <div className="h-1.5 w-full bg-[#151B2B] rounded-full overflow-hidden border border-white/5">
                            <div className={`h-full rounded-full ${activePhishing > 5 ? 'bg-red-500 w-[85%] shadow-[0_0_5px_#ef4444]' : activePhishing > 0 ? 'bg-yellow-500 w-[50%] shadow-[0_0_5px_#eab308]' : 'bg-emerald-500 w-[15%] shadow-[0_0_5px_#10b981]'}`}></div>
                         </div>
                      </div>
                   </div>

                   <div className="flex items-center gap-4">
                      <div className="size-10 flex items-center justify-center rounded-xl bg-[#151B2B] text-slate-400 border border-white/5 shadow-inner">
                         <span className="material-symbols-outlined text-[20px]">bug_report</span>
                      </div>
                      <div className="flex-1">
                         <div className="flex justify-between items-center mb-1.5">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Nuevas Firmas</span>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${activeMalware > 5 ? 'text-red-400' : activeMalware > 0 ? 'text-yellow-400' : 'text-emerald-400'}`}>{activeMalware > 5 ? 'Alta' : activeMalware > 0 ? 'Elevada' : 'Normal'}</span>
                         </div>
                         <div className="h-1.5 w-full bg-[#151B2B] rounded-full overflow-hidden border border-white/5">
                            <div className={`h-full rounded-full ${activeMalware > 5 ? 'bg-red-500 w-[85%] shadow-[0_0_5px_#ef4444]' : activeMalware > 0 ? 'bg-yellow-500 w-[50%] shadow-[0_0_5px_#eab308]' : 'bg-emerald-500 w-[15%] shadow-[0_0_5px_#10b981]'}`}></div>
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>

             {/* Maintenance Schedule */}
             <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="rounded-3xl bg-[#0F1423] border border-white/5 p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] pointer-events-none"></div>
                <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest relative z-10 flex items-center gap-2">
                   <span className="material-symbols-outlined text-[18px] text-blue-400">build</span>
                   Mantenimiento Programado
                </h3>
                <div className="space-y-5 relative z-10">
                   <div className="relative pl-4 border-l-2 border-slate-700">
                      <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_5px_#60a5fa]"></div>
                      <p className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">Nov 12, 02:00 UTC</p>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wide">Core Engine Upgrade v2.4</h4>
                      <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">Impacto: Ninguno (Rolling update cluster)</p>
                   </div>
                   <div className="relative pl-4 border-l-2 border-slate-700">
                      <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-slate-500"></div>
                      <p className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">Nov 28, 04:00 UTC</p>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wide">Desfragmentación DB</h4>
                      <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">Impacto: Latencia esperada ~50ms subida</p>
                   </div>
                </div>
             </motion.div>
          </div>
       </div>
    </div>
  );
}
