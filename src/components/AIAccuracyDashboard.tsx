import { auth, db } from '../firebase';
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { collection, query, getDocs, orderBy, limit } from 'firebase/firestore';
import { motion, AnimatePresence } from 'motion/react';

interface AIAccuracyDashboardProps {
  onBack?: () => void;
}

export default function AIAccuracyDashboard({ onBack }: AIAccuracyDashboardProps) {
  const [dateRange, setDateRange] = useState('30d');
  const [metrics, setMetrics] = useState<any>({
    truePositives: 14205,
    falsePositives: 124,
    trueNegatives: 85932,
    falseNegatives: 45,
    chartData: [
      { date: '03/01', precision: 98.5, recall: 99.1 },
      { date: '03/05', precision: 98.7, recall: 99.2 },
      { date: '03/10', precision: 98.6, recall: 99.4 },
      { date: '03/15', precision: 98.9, recall: 99.5 },
      { date: '03/20', precision: 99.0, recall: 99.7 },
      { date: '03/25', precision: 99.1, recall: 99.8 },
      { date: '03/30', precision: 99.1, recall: 99.8 },
    ]
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const q = query(collection(db, 'ai_metrics'), orderBy('date', 'desc'), limit(30));
        const snapshot = await getDocs(q);
        
        if (!snapshot.empty) {
          const fetchedData: any[] = [];
          let tp = 0, fp = 0, tn = 0, fn = 0;
          
          snapshot.forEach(doc => {
            const data = doc.data();
            fetchedData.push({
              date: data.date,
              precision: data.precision,
              recall: data.recall
            });
            tp += data.truePositives || 0;
            fp += data.falsePositives || 0;
            tn += data.trueNegatives || 0;
            fn += data.falseNegatives || 0;
          });
          
          setMetrics({
            truePositives: tp > 0 ? tp : 14205,
            falsePositives: fp > 0 ? fp : 124,
            trueNegatives: tn > 0 ? tn : 85932,
            falseNegatives: fn > 0 ? fn : 45,
            chartData: fetchedData.reverse()
          });
        }
      } catch (error) {
        console.error("Error fetching AI metrics:", error);
      }
    };

    fetchMetrics();
  }, []);

  const filteredData = dateRange === '7d' ? metrics.chartData.slice(-7) : metrics.chartData;

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
              <span className="material-symbols-outlined text-[14px]">psychology</span>
              Performance Core
            </motion.div>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              Rendimiento Modelo IA
            </h2>
            <p className="text-sm text-slate-400 mt-1 uppercase tracking-widest font-mono">Evaluando {(metrics.truePositives + metrics.trueNegatives + metrics.falsePositives + metrics.falseNegatives).toLocaleString()} escaneos</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center gap-2 rounded-xl h-10 px-5 bg-[#151B2B] hover:bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest transition-colors">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Exportar Matriz
          </button>
        </div>
      </div>

      {/* Main Charts Section */}
      <div className="flex flex-col gap-8">
        
        {/* Matrix Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* True Positives */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col gap-4 rounded-2xl p-6 bg-[#0F1423] border border-white/5 hover:border-emerald-500/30 transition-all shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-emerald-500/20 transition-all"></div>
            <div className="flex items-center justify-between relative z-10">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Verdaderos Positivos</p>
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-bold px-2 py-0.5 rounded shadow-[0_0_10px_-2px_rgba(16,185,129,0.3)]">CORRECTO</span>
            </div>
            <div className="flex items-baseline gap-3 relative z-10">
              <p className="text-white text-4xl font-bold tracking-tight">{metrics.truePositives.toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-2 relative z-10 text-[10px]">
              <span className="text-emerald-400 font-bold flex items-center bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                <span className="material-symbols-outlined text-[12px] mr-1">trending_up</span> +2.4%
              </span>
              <span className="text-slate-500">Detección Efectiva</span>
            </div>
            <div className="w-full bg-[#060910] border border-white/5 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-emerald-500 h-full shadow-[0_0_8px_#10b981]" style={{ width: '92%' }}></div>
            </div>
          </motion.div>

          {/* False Positives */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col gap-4 rounded-2xl p-6 bg-[#0F1423] border border-white/5 hover:border-orange-500/30 transition-all shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-orange-500/20 transition-all"></div>
            <div className="flex items-center justify-between relative z-10">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Falsos Positivos</p>
              <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[9px] font-bold px-2 py-0.5 rounded shadow-[0_0_10px_-2px_rgba(249,115,22,0.3)]">MARCADO ERROR</span>
            </div>
            <div className="flex items-baseline gap-3 relative z-10">
              <p className="text-white text-4xl font-bold tracking-tight">{metrics.falsePositives.toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-2 relative z-10 text-[10px]">
              <span className="text-emerald-400 font-bold flex items-center bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                <span className="material-symbols-outlined text-[12px] mr-1">trending_down</span> -12%
              </span>
              <span className="text-slate-500">Precisión Ajustada</span>
            </div>
            <div className="w-full bg-[#060910] border border-white/5 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-orange-500 h-full shadow-[0_0_8px_#f97316]" style={{ width: '15%' }}></div>
            </div>
          </motion.div>

          {/* True Negatives */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col gap-4 rounded-2xl p-6 bg-[#0F1423] border border-white/5 hover:border-blue-500/30 transition-all shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-blue-500/20 transition-all"></div>
            <div className="flex items-center justify-between relative z-10">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Verdaderos Negativos</p>
              <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[9px] font-bold px-2 py-0.5 rounded shadow-[0_0_10px_-2px_rgba(59,130,246,0.3)]">CORRECTO</span>
            </div>
            <div className="flex items-baseline gap-3 relative z-10">
              <p className="text-white text-4xl font-bold tracking-tight">{metrics.trueNegatives.toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-2 relative z-10 text-[10px]">
              <span className="text-emerald-400 font-bold flex items-center bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                <span className="material-symbols-outlined text-[12px] mr-1">trending_up</span> +5.1%
              </span>
              <span className="text-slate-500">Ruido Evitado</span>
            </div>
            <div className="w-full bg-[#060910] border border-white/5 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-blue-500 h-full shadow-[0_0_8px_#3b82f6]" style={{ width: '88%' }}></div>
            </div>
          </motion.div>

          {/* False Negatives */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col gap-4 rounded-2xl p-6 bg-[#0F1423] border border-white/5 hover:border-red-500/30 transition-all shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-red-500/20 transition-all"></div>
            <div className="flex items-center justify-between relative z-10">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Falsos Negativos</p>
              <span className="bg-red-500/10 text-red-500 border border-red-500/20 text-[9px] font-bold px-2 py-0.5 rounded shadow-[0_0_10px_-2px_rgba(239,68,68,0.3)] animate-pulse">CRÍTICO</span>
            </div>
            <div className="flex items-baseline gap-3 relative z-10">
              <p className="text-white text-4xl font-bold tracking-tight">{metrics.falseNegatives.toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-2 relative z-10 text-[10px]">
              <span className="text-emerald-400 font-bold flex items-center bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                <span className="material-symbols-outlined text-[12px] mr-1">trending_down</span> -0.5%
              </span>
              <span className="text-slate-500">Fugas de Seguridad</span>
            </div>
            <div className="w-full bg-[#060910] border border-white/5 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-red-500 h-full shadow-[0_0_8px_#ef4444]" style={{ width: '5%' }}></div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Precision & Recall Trends */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-[#0F1423] border border-white/5 rounded-3xl p-6 lg:p-8 shadow-2xl flex flex-col gap-6 lg:col-span-2 relative overflow-hidden">
             <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Curva de Aprendizaje - Precisión vs. Recall</h3>
                <p className="text-slate-400 text-xs mt-1 font-mono uppercase tracking-widest">Métricas ajustadas del modelo Core</p>
              </div>
              <div className="flex items-center gap-4">
                <select 
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="bg-[#151B2B] border border-white/10 text-slate-300 text-[10px] font-bold uppercase tracking-widest rounded-lg focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 block p-2 outline-none"
                >
                  <option value="7d">ÚLTIMOS 7 DÍAS</option>
                  <option value="30d">ÚLTIMOS 30 DÍAS</option>
                  <option value="90d">ÚLTIMOS 90 DÍAS</option>
                </select>
                <div className="hidden sm:flex gap-4">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Precisión</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-purple-400 shadow-[0_0_5px_#c084fc]"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Recall</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="h-[300px] w-full relative z-10 bg-[#060910] p-4 rounded-xl border border-white/5 shadow-inner">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={filteredData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPrecision" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.5}/>
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorRecall" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#c084fc" stopOpacity={0.5}/>
                      <stop offset="95%" stopColor="#c084fc" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" stroke="#475569" tick={{fill: '#64748b', fontSize: 10, fontFamily: 'monospace'}} axisLine={{ stroke: '#1e293b' }} tickLine={false} />
                  <YAxis domain={['dataMin - 1', 'dataMax + 0.5']} stroke="#475569" tick={{fill: '#64748b', fontSize: 10, fontFamily: 'monospace'}} axisLine={false} tickLine={false} />
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0F1423', borderColor: '#334155', color: '#f8fafc', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)' }}
                    itemStyle={{ fontWeight: 'bold' }}
                    labelStyle={{ color: '#94a3b8', marginBottom: '8px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                  />
                  <Area type="monotone" dataKey="precision" stroke="#22d3ee" fillOpacity={1} fill="url(#colorPrecision)" strokeWidth={3} activeDot={{ r: 6, fill: '#22d3ee', stroke: '#0F1423', strokeWidth: 3 }} />
                  <Area type="monotone" dataKey="recall" stroke="#c084fc" fillOpacity={1} fill="url(#colorRecall)" strokeWidth={3} activeDot={{ r: 6, fill: '#c084fc', stroke: '#0F1423', strokeWidth: 3 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {/* Top False Positive Categories */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="bg-[#0F1423] border border-white/5 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl relative overflow-hidden">
               <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-orange-500/10 rounded-full blur-[50px] pointer-events-none"></div>
              <div className="flex justify-between items-center relative z-10">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest text-[10px]">Factores Falsos Positivos</h3>
              </div>
              <p className="text-slate-400 text-xs font-mono mb-2 relative z-10">Mapeo de clasificación errónea</p>
              
              <div className="flex flex-col gap-5 mt-2 relative z-10 bg-[#060910] p-4 border border-white/5 rounded-xl shadow-inner">
                {/* Item 1 */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-bold text-slate-300">
                    <span>Mkt & Analítica</span>
                    <span className="text-cyan-400">42%</span>
                  </div>
                  <div className="w-full bg-[#151B2B] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full w-[42%] shadow-[0_0_5px_#22d3ee]"></div>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-bold text-slate-300">
                    <span>Entornos de Desarrollo</span>
                    <span className="text-blue-400">28%</span>
                  </div>
                  <div className="w-full bg-[#151B2B] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full w-[28%] shadow-[0_0_5px_#60a5fa]"></div>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-bold text-slate-300">
                    <span>Storage / Share</span>
                    <span className="text-purple-400">18%</span>
                  </div>
                  <div className="w-full bg-[#151B2B] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-purple-400 h-full w-[18%] shadow-[0_0_5px_#c084fc]"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Confidence Distribution */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="bg-[#0F1423] border border-white/5 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl relative overflow-hidden flex-1">
               <div className="absolute -top-20 -left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none"></div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest text-[10px] relative z-10">Certeza de Veredicto</h3>
              <p className="text-slate-400 text-xs font-mono relative z-10 mb-2">Distribución de score</p>
              
              <div className="flex items-end justify-between h-[120px] gap-2 mt-auto px-2 relative z-10 bg-[#060910] p-4 rounded-xl border border-white/5 shadow-inner">
                {/* Bars */}
                {[
                  {h: '10%', v: '10%'}, {h: '15%', v: '15%'}, {h: '12%', v: '12%'}, 
                  {h: '20%', v: '20%'}, {h: '35%', v: '35%', c: 'bg-blue-500/40 border-blue-500/50'}, 
                  {h: '50%', v: '50%', c: 'bg-blue-500/60 border-blue-500/70'}, 
                  {h: '75%', v: '75%', c: 'bg-blue-500/80 border-blue-500/90'}, 
                  {h: '90%', v: '90%', c: 'bg-blue-500 border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.6)]'}
                ].map((bar, i) => (
                  <div key={i} className={`w-full ${bar.c || 'bg-[#151B2B] border-[#1e293b]'} border-t rounded-t-sm relative group transition-all hover:brightness-125`} style={{ height: bar.h }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] uppercase font-bold tracking-widest bg-[#0F1423] border border-white/10 px-2 py-1 rounded text-white transition-opacity z-20 shadow-xl">{bar.v}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-4 relative z-10">
                <div className="bg-[#151B2B] border border-white/5 rounded-xl px-4 py-2.5 shadow-inner">
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mr-2">Promedio Ponderado:</span>
                  <span className="text-blue-400 font-bold text-sm drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">94.2%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
