import { auth } from '../firebase';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import { motion } from 'motion/react';

interface ExecutiveDashboardProps {
  onBack?: () => void;
}

export default function ExecutiveDashboard({ onBack }: ExecutiveDashboardProps) {
  const [activeRisks, setActiveRisks] = useState(12);
  const [criticalRisks, setCriticalRisks] = useState(4);
  const [monitoredRisks, setMonitoredRisks] = useState(8);
  const [recentIncidents, setRecentIncidents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setIsLoading(true);
      try {
        const incidentsRef = collection(db, 'incidents');
        const incidentsSnapshot = await getDocs(query(incidentsRef, orderBy('reportedAt', 'desc'), limit(10)));
        
        let active = 0;
        let critical = 0;
        let monitored = 0;
        const incidents: any[] = [];
        
        incidentsSnapshot.forEach((doc) => {
          const data = doc.data();
          incidents.push({ id: doc.id, ...data });
          
          if (data.status === 'open' || data.status === 'investigating') {
            active++;
            if (data.severity === 'high' || data.severity === 'critical') {
              critical++;
            } else {
              monitored++;
            }
          }
        });
        
        if (incidentsSnapshot.size > 0) {
          setActiveRisks(active);
          setCriticalRisks(critical);
          setMonitoredRisks(monitored);
          setRecentIncidents(incidents);
        } else {
          setActiveRisks(12);
          setCriticalRisks(4);
          setMonitoredRisks(8);
          setRecentIncidents(placeholderIncidents);
        }
      } catch (error) {
        setActiveRisks(12);
        setCriticalRisks(4);
        setMonitoredRisks(8);
        setRecentIncidents(placeholderIncidents);
        handleFirestoreError(error, OperationType.GET, 'incidents');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const placeholderIncidents = [
    {
      id: '1',
      title: 'Mitigación DDoS Activada',
      description: 'El sistema neutralizó con éxito un aumento de 4.2Tbps dirigido a nodos de América del Norte.',
      severity: 'critical',
      type: 'Crítico',
      timeAgo: 'hace 02m'
    },
    {
      id: '2',
      title: 'Alerta de Relleno de Credenciales',
      description: 'AI Shield identificó y bloqueó 2,400 intentos de inicio de sesión anómalos en el endpoint E-99.',
      severity: 'warning',
      type: 'Advertencia',
      timeAgo: 'hace 14m'
    },
    {
      id: '3',
      title: 'Éxito en Optimización de Costos',
      description: 'Los recursos del servidor autoescalados ahorraron $12.4k en las últimas 24 horas de tráfico pico.',
      severity: 'info',
      type: 'Evento de ROI',
      timeAgo: 'hace 1h'
    },
    {
      id: '4',
      title: 'Parche Cuántico V2.6',
      description: 'Claves de encriptación rotadas en todas las bóvedas globales. Cero tiempo de inactividad registrado.',
      severity: 'low',
      type: 'Mantenimiento',
      timeAgo: 'hace 3h'
    }
  ];

  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case 'critical':
      case 'high': return { color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' };
      case 'warning':
      case 'medium': return { color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' };
      case 'info': return { color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' };
      default: return { color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' };
    }
  };

  return (
    <div className="flex flex-col gap-6 pb-10 w-full relative z-10 w-full max-w-[1440px] mx-auto">
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
              <span className="material-symbols-outlined text-[14px]">stars</span>
              Panel Ejecutivo C-Level
            </motion.div>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              AI Shield 2026
            </h2>
            <p className="text-sm text-slate-400 mt-1 uppercase tracking-widest">Líder Experto: Jonathan Jimenez Escobar</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
           {/* Actions or secondary buttons for executives */}
           <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
             <span className="material-symbols-outlined text-sm">description</span>
             <span className="text-xs font-bold tracking-wider uppercase">Generar Reporte C-Level</span>
           </button>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 bg-[#0F1423] rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full -mr-32 -mt-32 blur-[80px] pointer-events-none transition-all group-hover:bg-purple-500/20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -ml-32 -mb-32 blur-[80px] pointer-events-none transition-all group-hover:bg-blue-500/20"></div>
        
        <div className="flex items-center gap-6 relative z-10">
          <div className="relative shrink-0">
            <div className="bg-center bg-no-repeat aspect-square bg-cover size-24 md:size-32 shadow-2xl ring-2 ring-purple-500/30 rounded-2xl border border-white/10" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
            <div className="absolute -bottom-3 -right-3 bg-[#151B2B] text-purple-400 p-2 rounded-xl shadow-xl border border-purple-500/30">
              <span className="material-symbols-outlined text-[20px] drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">verified_user</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="bg-purple-500/10 text-purple-400 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-purple-500/30 shadow-[0_0_10px_-2px_rgba(168,85,247,0.3)]">Líder Ejecutivo</span>
              <span className="bg-blue-500/10 text-blue-400 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-blue-500/30 shadow-[0_0_10px_-2px_rgba(59,130,246,0.3)]">Clase 2026</span>
            </div>
            <h1 className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-1">Jonathan Jimenez Escobar</h1>
            <p className="text-slate-400 text-sm font-medium tracking-wide">Estratega Global de Operaciones SOC & ROI</p>
            <div className="flex items-center flex-wrap gap-4 mt-4 text-slate-500 text-xs font-mono uppercase tracking-widest">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_currentColor]"></span> Nivel Detección: Max</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_currentColor]"></span> AI Shield Active</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Metric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Metric 1 */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col gap-4 rounded-3xl p-6 bg-[#0F1423] border border-white/5 hover:border-emerald-500/30 transition-all shadow-xl group">
          <div className="flex items-center justify-between">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Puntuación Salud</p>
            <div className="size-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
              <span className="material-symbols-outlined text-[20px]">health_and_safety</span>
            </div>
          </div>
          <div className="flex items-baseline gap-3">
            <p className="text-white text-4xl font-bold tracking-tight">98.4</p>
            <span className="text-emerald-400 text-xs font-bold flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20 shadow-[0_0_10px_-2px_rgba(16,185,129,0.3)]">
              <span className="material-symbols-outlined text-[14px]">trending_up</span> 2.5%
            </span>
          </div>
          <div className="w-full bg-[#060910] border border-white/5 h-1.5 rounded-full mt-auto overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" style={{ width: '98.4%' }}></div>
          </div>
        </motion.div>

        {/* Metric 2 */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col gap-4 rounded-3xl p-6 bg-[#0F1423] border border-white/5 hover:border-blue-500/30 transition-all shadow-xl group">
          <div className="flex items-center justify-between">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">ROI Global</p>
             <div className="size-10 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
              <span className="material-symbols-outlined text-[20px]">payments</span>
            </div>
          </div>
          <div className="flex items-baseline gap-3">
            <p className="text-white text-4xl font-bold tracking-tight">$2.4M</p>
            <span className="text-blue-400 text-xs font-bold flex items-center gap-1 bg-blue-500/10 px-2 py-1 rounded-md border border-blue-500/20 shadow-[0_0_10px_-2px_rgba(59,130,246,0.3)]">
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 15%
            </span>
          </div>
          <div className="mt-auto flex gap-1">
            <div className="h-1.5 flex-1 rounded-full bg-blue-500/80 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <div className="h-1.5 flex-1 rounded-full bg-blue-500/80 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <div className="h-1.5 flex-1 rounded-full bg-blue-500/30"></div>
          </div>
        </motion.div>

        {/* Metric 3 */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col gap-4 rounded-3xl p-6 bg-[#0F1423] border border-white/5 hover:border-red-500/30 transition-all shadow-xl group">
          <div className="flex items-center justify-between">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Vectores de Riesgo</p>
             <div className="size-10 bg-red-500/10 text-red-400 rounded-xl flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
              <span className="material-symbols-outlined text-[20px]">warning</span>
            </div>
          </div>
          <div className="flex items-baseline gap-3">
            <p className="text-white text-4xl font-bold tracking-tight">{isLoading ? '...' : activeRisks}</p>
            <span className="text-red-400 text-xs font-bold flex items-center gap-1 bg-red-500/10 px-2 py-1 rounded-md border border-red-500/20 shadow-[0_0_10px_-2px_rgba(239,68,68,0.3)]">
              <span className="material-symbols-outlined text-[14px]">trending_down</span> 8%
            </span>
          </div>
          <p className="text-slate-500 text-[10px] font-mono tracking-widest uppercase mt-auto">{isLoading ? 'Cargando...' : `${criticalRisks} Críticos, ${monitoredRisks} Analizados`}</p>
        </motion.div>

        {/* Metric 4 */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col gap-4 rounded-3xl p-6 bg-[#0F1423] border border-white/5 hover:border-purple-500/30 transition-all shadow-xl group">
          <div className="flex items-center justify-between">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Latencia IA</p>
             <div className="size-10 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
              <span className="material-symbols-outlined text-[20px]">speed</span>
            </div>
          </div>
          <div className="flex items-baseline gap-3">
            <p className="text-white text-4xl font-bold tracking-tight">0.4s</p>
            <span className="text-purple-400 text-[9px] font-bold uppercase tracking-widest border border-purple-500/30 rounded px-1.5 py-0.5 bg-purple-500/10 shadow-[0_0_10px_-2px_rgba(168,85,247,0.3)]">EN VIVO</span>
          </div>
          <div className="flex gap-1.5 mt-auto items-end h-8">
            <div className="w-1.5 bg-purple-500/60 rounded-sm animate-[pulse_1s_ease-in-out_infinite]" style={{ height: '50%' }}></div>
            <div className="w-1.5 bg-purple-500/80 rounded-sm animate-[pulse_1.2s_ease-in-out_infinite]" style={{ height: '80%' }}></div>
            <div className="w-1.5 bg-purple-500/40 rounded-sm animate-[pulse_0.8s_ease-in-out_infinite]" style={{ height: '40%' }}></div>
            <div className="w-1.5 bg-purple-500/90 rounded-sm animate-[pulse_1.5s_ease-in-out_infinite]" style={{ height: '90%' }}></div>
            <div className="w-1.5 bg-purple-500/50 rounded-sm animate-[pulse_1.1s_ease-in-out_infinite]" style={{ height: '60%' }}></div>
            <div className="w-1.5 bg-purple-500/100 rounded-sm animate-[pulse_1.3s_ease-in-out_infinite] shadow-[0_0_8px_rgba(168,85,247,0.8)]" style={{ height: '100%' }}></div>
            <div className="w-1.5 bg-purple-500/30 rounded-sm animate-[pulse_0.9s_ease-in-out_infinite]" style={{ height: '30%' }}></div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Trends & Map */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* ROI & Threat Intelligence Chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-[#0F1423] border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 relative z-10 gap-4">
              <div>
                <h3 className="text-white text-xl font-bold tracking-tight">Tendencia de Eficiencia Detección/ROI</h3>
                <p className="text-slate-400 text-xs font-mono uppercase tracking-widest mt-2">Proyecciones para el 4to Trimestre 2026</p>
              </div>
              <div className="bg-[#151B2B] p-1 rounded-lg border border-white/5 flex gap-1">
                <button className="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 text-[10px] font-bold uppercase tracking-widest shadow-[0_0_10px_-2px_rgba(59,130,246,0.3)]">Q4 2026</button>
                <button className="px-4 py-1.5 text-slate-500 hover:text-slate-300 rounded text-[10px] font-bold uppercase tracking-widest transition-colors">Q3 2026</button>
              </div>
            </div>

            {/* Visual Chart Component */}
            <div className="relative h-[280px] w-full flex items-end justify-between gap-3 px-2 pb-8 border-b border-white/5">
              <div className="absolute inset-0 flex flex-col justify-between py-8 pointer-events-none opacity-20">
                <div className="border-t border-dashed border-slate-600 w-full"></div>
                <div className="border-t border-dashed border-slate-600 w-full"></div>
                <div className="border-t border-dashed border-slate-600 w-full"></div>
                <div className="border-t border-dashed border-slate-600 w-full"></div>
              </div>
              {/* Bar chart */}
              <div className="relative group flex-1 h-[45%] bg-[#151B2B] border border-white/5 rounded-t-lg hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"></div>
              <div className="relative group flex-1 h-[65%] bg-[#151B2B] border border-white/5 rounded-t-lg hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"></div>
              <div className="relative group flex-1 h-[55%] bg-[#151B2B] border border-white/5 rounded-t-lg hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"></div>
              <div className="relative group flex-1 h-[85%] bg-blue-500/50 border border-blue-400 rounded-t-lg hover:bg-blue-500/60 transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
              <div className="relative group flex-1 h-[75%] bg-[#151B2B] border border-white/5 rounded-t-lg hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"></div>
              <div className="relative group flex-1 h-[95%] bg-gradient-to-t from-blue-600 to-purple-500 border border-purple-400 rounded-t-lg transition-all shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
              <div className="relative group flex-1 h-[80%] bg-[#151B2B] border border-white/5 rounded-t-lg hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"></div>
              <div className="relative group flex-1 h-[60%] bg-[#151B2B] border border-white/5 rounded-t-lg hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"></div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase mt-4 tracking-widest px-2 font-mono">
              <span>Nov 01</span>
              <span>Nov 10</span>
              <span>Nov 20</span>
              <span>Nov 30</span>
            </div>
          </motion.div>

          {/* Global Monitoring Map */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-[#0F1423] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-[#151B2B]/50">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-purple-400 animate-pulse">radar</span>
                <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase">Monitoreo Global Operaciones</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[9px] text-emerald-400 font-mono font-bold tracking-widest uppercase">Live: 14:02:41 UTC</span>
              </div>
            </div>
            <div className="relative h-[320px] bg-[#060910] overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida/ADBb0ugdeyEUGGtf0Hf8MpAjVRFEDeIHNFR2Z8yjahzqj9-DDuCp40RJoGmFjcCcxMyqVjBxE9PU_HtIPnO_0QrmK0z38sK1dfMe73EaSv0wNbooZUrIjUz6KP5yiZMAPn0sZX7c5atgzUu1TzExQSqyKOe0JHEPseeOkZW-Z6jPWpnZWa1Xf2xXgvIRo_hKQoEp5jK1TesZOMJVWkR-4tJYl-7iPQQCbQcR8b-bC-WgAITB0nzeE8pnoCgwSgcJyUTYEoTRRLlrOhZn')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'invert(1) sepia(1) hue-rotate(180deg) saturate(3) brightness(0.5)' }}></div>
              <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay"></div>
              
              {/* Pulse markers */}
              <div className="absolute top-1/4 left-1/3 size-3 bg-red-500 rounded-full animate-ping opacity-75"></div>
              <div className="absolute top-1/4 left-1/3 size-1.5 bg-red-500 rounded-full shadow-[0_0_10px_#ef4444]"></div>
              
              <div className="absolute top-1/2 right-1/4 size-3 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              <div className="absolute top-1/2 right-1/4 size-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
              
              <div className="absolute bottom-1/3 left-1/2 size-1.5 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]"></div>

              <div className="absolute bottom-4 left-4 bg-[#151B2B]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-xs shadow-2xl">
                <p className="text-slate-400 font-bold uppercase tracking-widest mb-3 text-[9px]">Análisis de Amenazas</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-red-500 shadow-[0_0_5px_#ef4444]"></span>
                      <span className="text-white font-medium text-[10px] uppercase tracking-wider">Mitigación Crítica</span>
                    </div>
                    <span className="text-red-400 font-bold font-mono">4</span>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-orange-500 shadow-[0_0_5px_#f97316]"></span>
                      <span className="text-white font-medium text-[10px] uppercase tracking-wider">Alertas</span>
                    </div>
                    <span className="text-orange-400 font-bold font-mono">8</span>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]"></span>
                      <span className="text-white font-medium text-[10px] uppercase tracking-wider">Nodos Seguros</span>
                    </div>
                    <span className="text-emerald-400 font-bold font-mono">142</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Incident Logs */}
        <div className="flex flex-col h-full">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="bg-[#0F1423] border border-white/5 rounded-3xl flex flex-col h-full shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#151B2B]/50 relative z-10">
              <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase">Auditoría Ejecutiva</h3>
              <button className="text-purple-400 bg-purple-500/10 px-2 py-1 rounded text-[9px] border border-purple-500/20 font-bold hover:bg-purple-500/20 transition-all uppercase tracking-widest">
                Exportar CSV
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar relative z-10">
              {isLoading ? (
                <div className="flex flex-col justify-center items-center h-48 gap-3">
                  <div className="size-8 rounded-full border-2 border-slate-800 border-t-purple-500 animate-spin"></div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Cargando Audit...</span>
                </div>
              ) : recentIncidents.length > 0 ? (
                recentIncidents.map((incident, i) => {
                  const styles = getSeverityStyle(incident.severity);
                  return (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + (i * 0.05) }}
                      key={incident.id} 
                      className={`p-4 rounded-xl bg-[#060910] border ${styles.border} group hover:bg-[#151B2B] transition-all cursor-pointer`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className={`${styles.bg} ${styles.color} text-[9px] font-bold px-2 py-0.5 rounded border ${styles.border} uppercase tracking-widest shadow-inner`}>
                          {incident.type}
                        </span>
                        <span className="text-[9px] text-slate-500 font-mono tracking-wider">{incident.timeAgo || 'Reciente'}</span>
                      </div>
                      <h4 className="text-white text-sm font-bold mb-1.5">{incident.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{incident.description}</p>
                    </motion.div>
                  );
                })
              ) : (
                <div className="flex flex-col items-center justify-center h-48 text-slate-500">
                  <span className="material-symbols-outlined text-4xl mb-2 opacity-50">check_circle</span>
                  <p className="text-[10px] font-bold uppercase tracking-widest">Estabilidad Completa</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
