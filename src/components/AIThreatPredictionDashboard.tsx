import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { collection, query, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { motion, AnimatePresence } from 'motion/react';

const mockTrendData = [
  { date: 'Mon', phishing: 120, malware: 80, ransomware: 20 },
  { date: 'Tue', phishing: 132, malware: 90, ransomware: 25 },
  { date: 'Wed', phishing: 101, malware: 85, ransomware: 30 },
  { date: 'Thu', phishing: 145, malware: 110, ransomware: 22 },
  { date: 'Fri', phishing: 190, malware: 130, ransomware: 40 },
  { date: 'Sat', phishing: 210, malware: 140, ransomware: 45 },
  { date: 'Sun', phishing: 250, malware: 160, ransomware: 55 },
];

export default function AIThreatPredictionDashboard({ onBack }: { onBack?: () => void }) {
  const [activeTab, setActiveTab] = useState<'predictions' | 'trends' | 'map'>('predictions');
  const [trendData, setTrendData] = useState(mockTrendData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrendData = async () => {
      try {
        const q = query(collection(db, 'incidents'), orderBy('reportedAt', 'asc'));
        const snapshot = await getDocs(q);
        
        if (!snapshot.empty) {
          // Process real data into daily buckets
          const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          const counts: Record<string, { phishing: number, malware: number, ransomware: number }> = {};
          
          // Initialize last 7 days
          for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            counts[days[d.getDay()]] = { phishing: 0, malware: 0, ransomware: 0 };
          }

          snapshot.forEach(doc => {
            const data = doc.data();
            if (data.reportedAt) {
              const date = data.reportedAt.toDate ? data.reportedAt.toDate() : new Date(data.reportedAt);
              const dayStr = days[date.getDay()];
              if (counts[dayStr]) {
                const type = (data.type || '').toLowerCase();
                if (type.includes('phish')) counts[dayStr].phishing++;
                else if (type.includes('malware') || type.includes('virus')) counts[dayStr].malware++;
                else if (type.includes('ransom')) counts[dayStr].ransomware++;
                else counts[dayStr].phishing++; // default bucket
              }
            }
          });

          const formattedData = Object.keys(counts).map(day => ({
            date: day,
            ...counts[day]
          }));
          
          // Only use real data if we actually found some categorized incidents
          const hasData = formattedData.some(d => d.phishing > 0 || d.malware > 0 || d.ransomware > 0);
          if (hasData) {
            setTrendData(formattedData);
          }
        }
      } catch (error) {
        console.error("Error fetching trend data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendData();
  }, []);

  return (
    <div className="flex flex-col gap-6 pb-10">
      
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
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold mb-3 uppercase tracking-widest shadow-[0_0_10px_-2px_rgba(168,85,247,0.3)]"
            >
              <span className="material-symbols-outlined text-[14px]">online_prediction</span>
              Neural Engine Online
            </motion.div>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              Motor Predictivo
            </h2>
            <p className="text-sm text-slate-400 mt-1">Análisis probabilístico de futuras brechas de seguridad.</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 shrink-0 lg:w-64 custom-scrollbar">
          {[
            { id: 'predictions', label: 'Proyecciones Activas', icon: 'visibility' },
            { id: 'trends', label: 'Vectores Emergentes', icon: 'trending_up' },
            { id: 'map', label: 'Topología Predictiva', icon: 'radar' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-3 px-4 py-4 rounded-xl font-bold transition-all whitespace-nowrap lg:whitespace-normal text-left ${
                activeTab === tab.id 
                  ? 'bg-purple-500/10 border border-purple-500/30 text-purple-400 shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)]' 
                  : 'bg-[#151B2B] border border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="material-symbols-outlined">{tab.icon}</span>
              <span className="text-xs uppercase tracking-widest">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            {activeTab === 'predictions' && (
              <motion.div 
                key="predictions"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {/* Prediction Card 1 */}
                  <div className="bg-gradient-to-br from-[#151B2B] to-[#0F1423] p-6 rounded-2xl border border-white/5 relative overflow-hidden shadow-xl hover:border-red-500/30 transition-all group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] pointer-events-none"></div>
                    <div className="absolute top-0 right-0 bg-red-500/10 text-red-400 text-[10px] font-bold px-3 py-1.5 rounded-bl-xl border-b border-l border-red-500/20 uppercase tracking-widest flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                       Alta Certeza (92%)
                    </div>
                    <div className="size-10 flex items-center justify-center rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 mb-4 shadow-inner">
                      <span className="material-symbols-outlined text-[20px]">warning</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Campaña "Reembolso Impuestos"</h3>
                    <p className="text-xs text-slate-400 mb-6 leading-relaxed">Aumento proyectado en phishing suplantando entidades fiscales debido al inminente cierre del año fiscal. Se han detectado 142 variaciones de dominio.</p>
                    
                    <div className="space-y-3 mb-6 bg-[#060910] p-4 rounded-xl border border-white/5 shadow-inner">
                      <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                        <span className="text-slate-500">Vector Primario</span>
                        <span className="text-slate-300">Spear-phishing Email</span>
                      </div>
                      <div className="w-full h-px bg-white/5"></div>
                      <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                        <span className="text-slate-500">Severidad IA</span>
                        <span className="text-red-400 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]">Crítica Nivel 4</span>
                      </div>
                      <div className="w-full h-px bg-white/5"></div>
                      <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                        <span className="text-slate-500">Estimación de Impacto</span>
                        <span className="text-slate-300">T-minus 72 hrs</span>
                      </div>
                    </div>
                    <button className="w-full py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors flex justify-center items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">visibility</span>
                      Extraer IoCs Previstos
                    </button>
                  </div>

                  {/* Prediction Card 2 */}
                  <div className="bg-gradient-to-br from-[#151B2B] to-[#0F1423] p-6 rounded-2xl border border-white/5 relative overflow-hidden shadow-xl hover:border-orange-500/30 transition-all group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[40px] pointer-events-none"></div>
                    <div className="absolute top-0 right-0 bg-orange-500/10 text-orange-400 text-[10px] font-bold px-3 py-1.5 rounded-bl-xl border-b border-l border-orange-500/20 uppercase tracking-widest flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                       Prob. Moderada (78%)
                    </div>
                    <div className="size-10 flex items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-4 shadow-inner">
                      <span className="material-symbols-outlined text-[20px]">groups</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Clonación de Portales RRHH</h3>
                    <p className="text-xs text-slate-400 mb-6 leading-relaxed">El modelo identificó registros pasivos de DNS que emulan infraestructuras como Workday y BambooHR apuntando a IPs en listas grises.</p>
                    
                    <div className="space-y-3 mb-6 bg-[#060910] p-4 rounded-xl border border-white/5 shadow-inner">
                      <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                        <span className="text-slate-500">Vector Primario</span>
                        <span className="text-slate-300">Robo Credenciales SSO</span>
                      </div>
                      <div className="w-full h-px bg-white/5"></div>
                      <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                        <span className="text-slate-500">Severidad IA</span>
                        <span className="text-orange-400">Elevada Nivel 3</span>
                      </div>
                      <div className="w-full h-px bg-white/5"></div>
                      <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                        <span className="text-slate-500">Estimación de Impacto</span>
                        <span className="text-slate-300">Continuo - 30D</span>
                      </div>
                    </div>
                    <button className="w-full py-2.5 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-400 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors flex justify-center items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">visibility</span>
                      Extraer IoCs Previstos
                    </button>
                  </div>
                </div>

                <div className="bg-[#151B2B] p-6 rounded-2xl border border-white/5 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-purple-400">assistant</span>
                    <h3 className="text-sm font-bold text-white uppercase tracking-widest">Recomendaciones Estratégicas SOC</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-[#060910] rounded-xl border border-white/5">
                      <div className="size-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                        <span className="material-symbols-outlined text-[16px]">rule</span>
                      </div>
                      <div>
                        <div className="font-bold text-white text-xs uppercase tracking-widest mb-1.5">Actualizar Gateway MX</div>
                        <div className="text-xs text-slate-400 leading-relaxed font-mono">Implementar cuarentena estricta para adjuntos macro-habilitados provenientes de dominios de baja reputación identificados en la predicción #1.</div>
                      </div>
                      <button className="ml-auto shrink-0 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded border border-white/10 text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-1">
                        Desplegar Regla
                      </button>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-[#060910] rounded-xl border border-white/5">
                      <div className="size-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                        <span className="material-symbols-outlined text-[16px]">model_training</span>
                      </div>
                      <div>
                        <div className="font-bold text-white text-xs uppercase tracking-widest mb-1.5">Desplegar Micro-Campaña Phishing</div>
                        <div className="text-xs text-slate-400 leading-relaxed font-mono">Lanzar simulación tipo RRHH (Workday clonado) al departamento de Finanzas y Mkt para evaluar resiliencia basada en la predicción #2.</div>
                      </div>
                      <button className="ml-auto shrink-0 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded border border-white/10 text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-1">
                        Crear Simulación
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'trends' && (
              <motion.div 
                key="trends"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="bg-[#0F1423] p-6 lg:p-8 rounded-2xl border border-white/5 shadow-2xl flex flex-col h-[600px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 relative z-10">
                  <div>
                    <h2 className="text-xl font-bold text-white">Análisis Telemétrico</h2>
                    <p className="text-slate-400 text-xs font-mono mt-1">Volumen modelado de ataques (T-Minus 7 días)</p>
                  </div>
                  <div className="flex flex-wrap gap-4 bg-[#151B2B] p-2 rounded-lg border border-white/5">
                    <div className="flex items-center gap-2 px-3 py-1 bg-[#060910] rounded border border-white/5 shadow-inner">
                      <span className="size-2 rounded-full bg-blue-400 shadow-[0_0_5px_currentColor]"></span>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-slate-300">Phishing</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-[#060910] rounded border border-white/5 shadow-inner">
                      <span className="size-2 rounded-full bg-purple-400 shadow-[0_0_5px_currentColor]"></span>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-slate-300">Malware</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-[#060910] rounded border border-white/5 shadow-inner">
                      <span className="size-2 rounded-full bg-red-400 shadow-[0_0_5px_currentColor]"></span>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-slate-300">Ransomware</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 w-full relative z-10 bg-[#060910] rounded-xl border border-white/5 p-4 shadow-inner">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorPhishing" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorMalware" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#c084fc" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#c084fc" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorRansomware" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f87171" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#f87171" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="date" stroke="#475569" tick={{fill: '#64748b', fontSize: 10, fontFamily: 'monospace'}} axisLine={{ stroke: '#334155' }} tickLine={false} />
                      <YAxis stroke="#475569" tick={{fill: '#64748b', fontSize: 10, fontFamily: 'monospace'}} axisLine={false} tickLine={false} />
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0F1423', borderColor: '#334155', color: '#f8fafc', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)' }}
                        itemStyle={{ fontWeight: 'bold', fontSize: '12px' }}
                        labelStyle={{ color: '#94a3b8', marginBottom: '8px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                      />
                      <Area type="monotone" dataKey="phishing" stackId="1" stroke="#60a5fa" fillOpacity={1} fill="url(#colorPhishing)" strokeWidth={2} activeDot={{ r: 6, fill: '#60a5fa', stroke: '#0F1423', strokeWidth: 3 }} />
                      <Area type="monotone" dataKey="malware" stackId="1" stroke="#c084fc" fillOpacity={1} fill="url(#colorMalware)" strokeWidth={2} activeDot={{ r: 6, fill: '#c084fc', stroke: '#0F1423', strokeWidth: 3 }} />
                      <Area type="monotone" dataKey="ransomware" stackId="1" stroke="#f87171" fillOpacity={1} fill="url(#colorRansomware)" strokeWidth={2} activeDot={{ r: 6, fill: '#f87171', stroke: '#0F1423', strokeWidth: 3 }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            )}

            {activeTab === 'map' && (
              <motion.div 
                key="map"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="bg-[#0F1423] p-12 rounded-2xl border border-white/5 shadow-2xl flex flex-col items-center justify-center text-center h-[600px] relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNjgsIDg1LCAyNDcsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')" }}></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="size-24 rounded-3xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 shadow-2xl relative z-10">
                   <div className="absolute inset-0 rounded-3xl border-2 border-transparent border-t-purple-500/50 animate-[spin_4s_linear_infinite]"></div>
                  <span className="material-symbols-outlined text-[48px] animate-pulse">public</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 tracking-tight relative z-10">Topología Global Requerida</h2>
                <p className="text-sm text-slate-400 max-w-md mb-8 leading-relaxed relative z-10">El mapa predictivo 3D requiere habilitación del módulo WEBGL en la infraestructura cliente para renderizar tensores globales de amenazas.</p>
                <button className="px-8 py-3 bg-purple-500/10 text-purple-400 rounded-xl font-bold uppercase tracking-widest text-xs border border-purple-500/30 hover:bg-purple-500/20 transition-all flex items-center gap-3 relative z-10 shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)]">
                  <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                  Inicializar WebGL Engine
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
