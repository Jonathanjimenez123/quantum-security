import { auth, db } from '../firebase';
import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import { motion, AnimatePresence } from 'motion/react';

interface SocMonitoringWallProps {
  onBack?: () => void;
}

export default function SocMonitoringWall({ onBack }: SocMonitoringWallProps) {
  const [liveAlerts, setLiveAlerts] = useState<any[]>([]);
  const [activeThreatsCount, setActiveThreatsCount] = useState(12);
  const [blockedPhishing, setBlockedPhishing] = useState(4502);
  const [riskScore, setRiskScore] = useState<'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'>('CRITICAL');

  const handleResolve = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    try {
      const incidentRef = doc(db, 'incidents', id);
      await updateDoc(incidentRef, {
        status: 'resolved',
        resolvedAt: new Date()
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `incidents/${id}`);
    }
  };

  useEffect(() => {
    const q = query(collection(db, 'incidents'), orderBy('reportedAt', 'desc'), limit(50));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const alerts: any[] = [];
      let activeCount = 0;
      let phishingCount = 4502; // Base count
      
      snapshot.forEach((doc) => {
        const data = doc.data();
        alerts.push({ id: doc.id, ...data });
        if (data.status === 'open' || data.status === 'investigating') {
          activeCount++;
        }
        if (data.type === 'phishing' && data.status === 'resolved') {
          phishingCount++;
        }
      });
      
      if (alerts.length > 0) {
        setLiveAlerts(alerts.slice(0, 10)); // Only show top 10 in feed
        setActiveThreatsCount(activeCount);
        setBlockedPhishing(phishingCount);
        
        if (activeCount > 20) setRiskScore('CRITICAL');
        else if (activeCount > 10) setRiskScore('HIGH');
        else if (activeCount > 5) setRiskScore('MEDIUM');
        else setRiskScore('LOW');
      } else {
        // Fallback data if empty
        setLiveAlerts([
          {
            id: '1',
            title: 'Targeted Whale Attack',
            description: 'CEO Impersonation • Finance Dept',
            severity: 'critical',
            reportedAt: new Date(),
            tags: ['SPF Fail', 'New Domain']
          },
          {
            id: '2',
            title: 'Credential Harvesting',
            description: 'Fake Microsoft 365 Login',
            severity: 'high',
            reportedAt: new Date(Date.now() - 60000),
            tags: ['Typosquatting']
          },
          {
            id: '3',
            title: 'Ransomware Payload',
            description: 'ZIP Attachment Detected',
            severity: 'critical',
            reportedAt: new Date(Date.now() - 120000),
            tags: ['Malware', 'Blocked']
          }
        ]);
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'incidents');
    });

    return () => unsubscribe();
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return '#ef4444'; // red-500
      case 'high': return '#f97316'; // orange-500
      case 'medium': return '#eab308'; // yellow-500
      case 'low': return '#3b82f6'; // blue-500
      default: return '#64748b'; // slate-500
    }
  };

  const getScore = (severity: string) => {
    switch (severity) {
      case 'critical': return '99/100';
      case 'high': return '78/100';
      case 'medium': return '55/100';
      case 'low': return '25/100';
      default: return '45/100';
    }
  };

  const getRiskScoreColor = () => {
    switch (riskScore) {
      case 'CRITICAL': return 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]';
      case 'HIGH': return 'text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]';
      case 'MEDIUM': return 'text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]';
      case 'LOW': return 'text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]';
      default: return 'text-slate-400';
    }
  };

  const getRiskScoreBg = () => {
    switch (riskScore) {
      case 'CRITICAL': return 'bg-red-500/10 border-red-500/30';
      case 'HIGH': return 'bg-orange-500/10 border-orange-500/30';
      case 'MEDIUM': return 'bg-yellow-500/10 border-yellow-500/30';
      case 'LOW': return 'bg-blue-500/10 border-blue-500/30';
      default: return 'bg-white/5 border-white/10';
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 min-h-screen">
      <style>{`
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
      `}</style>
      
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
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold mb-3 uppercase tracking-widest shadow-[0_0_10px_-2px_rgba(239,68,68,0.3)] animate-pulse"
            >
              <span className="material-symbols-outlined text-[14px]">warning</span>
              Vigilancia Activa
            </motion.div>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              Muro SOC
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-slate-400 uppercase tracking-widest font-mono">Alertas críticas</span>
              <span className="text-slate-600 text-xs">•</span>
              <span className="text-slate-400 font-mono text-[10px]">UTC {new Date().toLocaleTimeString('en-US', { timeZone: 'UTC', hour12: false })}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
           <button className="flex items-center justify-center gap-2 rounded-xl h-10 px-5 bg-red-500 hover:bg-red-600 text-white border border-red-400 text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_-3px_rgba(239,68,68,0.5)] transition-colors">
            <span className="material-symbols-outlined text-[18px]">lock_person</span>
            AISLAR RED
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 flex-1">
        
        {/* Left Column: Critical Alerts Stream (3 cols) */}
        <motion.section initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="xl:col-span-3 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 uppercase tracking-widest">
              <span className="material-symbols-outlined text-[#ef4444] text-[18px]">gpp_bad</span>
              Flujo Crítico
            </h3>
            <span className="px-2 py-0.5 bg-red-500/20 text-red-500 text-[9px] font-bold rounded border border-red-500/30 animate-pulse">LIVE</span>
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-3 pr-2 h-[600px] custom-scrollbar">
            <AnimatePresence>
              {liveAlerts.map((alert, index) => {
                const color = getSeverityColor(alert.severity);
                const score = getScore(alert.severity);
                const timeString = alert.reportedAt?.toDate ? alert.reportedAt.toDate().toLocaleTimeString() : new Date(alert.reportedAt).toLocaleTimeString();
                
                return (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: index * 0.05 }}
                    key={alert.id} 
                    className="bg-[#151B2B] border-l-4 p-4 rounded-r-xl rounded-l-sm hover:bg-[#1A2234] transition-colors group cursor-pointer relative overflow-hidden border border-y-white/5 border-r-white/5" 
                    style={{ borderLeftColor: color }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex justify-between items-start mb-3 relative z-10">
                      <span className="text-[10px] font-mono text-slate-400 bg-[#060910] px-1.5 py-0.5 rounded border border-white/5">{timeString}</span>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={(e) => handleResolve(e, alert.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white border border-emerald-500/20"
                          title="Resolver Incidente"
                        >
                          <span className="material-symbols-outlined text-[14px]">check</span>
                        </button>
                        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded border" style={{ backgroundColor: `${color}10`, borderColor: `${color}30` }}>
                          <span className="font-bold text-[10px]" style={{ color }}>{score}</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-white font-bold text-sm mb-1.5 relative z-10 leading-tight">{alert.title}</h4>
                    <p className="text-slate-400 text-xs mb-3 relative z-10 leading-relaxed">{alert.description || 'Sin descripción'}</p>
                    <div className="flex gap-2 relative z-10 flex-wrap">
                      {alert.tags ? alert.tags.map((tag: string, idx: number) => (
                        <span key={idx} className="text-[9px] font-bold tracking-widest bg-[#060910] border border-white/5 px-1.5 py-0.5 rounded text-slate-300 uppercase">{tag}</span>
                      )) : (
                        <span className="text-[9px] font-bold tracking-widest bg-[#060910] border border-white/5 px-1.5 py-0.5 rounded text-slate-300 uppercase">{alert.type || 'Alerta'}</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Center Column: Live Threat Pulse (6 cols) */}
        <section className="xl:col-span-6 flex flex-col gap-6">
          {/* Top Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="bg-[#0F1423] border border-white/5 p-5 rounded-2xl flex flex-col items-center justify-center shadow-lg relative overflow-hidden group hover:border-red-500/30 transition-all">
              <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-2 relative z-10">Amenazas Activas</span>
              <span className="text-4xl font-bold text-white relative z-10 tracking-tight">{activeThreatsCount}</span>
              <span className="text-red-500 text-xs flex items-center mt-2 font-bold relative z-10 px-2 py-0.5 bg-red-500/10 rounded border border-red-500/20">
                <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span> +15%
              </span>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="bg-[#0F1423] border border-white/5 p-5 rounded-2xl flex flex-col items-center justify-center shadow-lg relative overflow-hidden group hover:border-emerald-500/30 transition-all">
               <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-2 relative z-10">Phishing Bloqueados</span>
              <span className="text-4xl font-bold text-white relative z-10 tracking-tight">{blockedPhishing.toLocaleString()}</span>
              <span className="text-emerald-400 text-xs flex items-center mt-2 font-bold relative z-10 px-2 py-0.5 bg-emerald-500/10 rounded border border-emerald-500/20">
                <span className="material-symbols-outlined text-[14px] mr-1">shield</span> Resuelto Auto
              </span>
            </motion.div>

             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className={`border p-5 rounded-2xl flex flex-col items-center justify-center shadow-lg relative overflow-hidden ${getRiskScoreBg()}`}>
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-2 relative z-10">Score de Riesgo</span>
              <span className={`text-4xl font-bold relative z-10 tracking-tight ${getRiskScoreColor()}`}>{riskScore}</span>
              <span className={`text-xs flex items-center mt-2 font-bold relative z-10 tracking-widest uppercase ${riskScore === 'CRITICAL' ? 'text-red-500' : riskScore === 'HIGH' ? 'text-orange-500' : riskScore === 'MEDIUM' ? 'text-yellow-500' : 'text-blue-500'}`}>
                NIVEL {riskScore === 'CRITICAL' ? 5 : riskScore === 'HIGH' ? 4 : riskScore === 'MEDIUM' ? 3 : 1}
              </span>
            </motion.div>
          </div>

          {/* Visualization Area */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex-1 bg-[#0F1423] border border-white/5 rounded-3xl relative overflow-hidden flex flex-col shadow-2xl min-h-[400px]">
             {/* Background Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1423] via-[#0F1423]/50 to-transparent z-0"></div>

            {/* Overlay UI */}
            <div className="relative z-10 p-8 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] mb-1 uppercase tracking-wider">Latido de Amenazas</h1>
                  <p className="text-slate-400 text-xs font-mono">Análisis de vectores en tiempo real</p>
                </div>
                <div className="bg-[#060910]/80 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 text-[10px] font-mono text-blue-400 shadow-inner">
                  NODOS_ESCANEAR: <span className="text-white font-bold">14,204</span>
                </div>
              </div>

               {/* Center Shield/Pulse Graphic */}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative size-72 flex items-center justify-center">
                  {/* Outer Rings */}
                  <div className="absolute inset-0 border border-red-500/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-4 border border-dashed border-red-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute inset-12 border border-red-500/30 rounded-full"></div>
                  {/* Core */}
                  <div className={`size-32 bg-red-500/10 rounded-full border border-red-500/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_60px_rgba(239,68,68,0.3)] ${riskScore === 'CRITICAL' ? 'animate-pulse' : ''}`}>
                    <span className="material-symbols-outlined text-6xl text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">admin_panel_settings</span>
                  </div>
                   {/* Particles (Simulated) */}
                   <div className="absolute top-0 right-10 size-2 bg-white rounded-full animate-ping shadow-[0_0_10px_white]"></div>
                  <div className="absolute bottom-10 left-4 size-1.5 bg-orange-500 rounded-full animate-ping shadow-[0_0_10px_#f97316]" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-10 left-10 size-1.5 bg-red-500 rounded-full animate-ping shadow-[0_0_10px_#ef4444]" style={{ animationDelay: '1.2s' }}></div>
                </div>
              </div>

              {/* Bottom Graph Overlay */}
              <div className="w-full h-40 mt-auto relative">
                <div className="absolute bottom-0 left-0 right-0 h-full flex items-end gap-1.5 px-4 opacity-80 mix-blend-screen">
                  {/* Fake Bars representing stream density */}
                  {[20,40,30,50,80,60,45,30,50,70,90,40,20].map((h, i) => (
                      <div key={i} className={`w-full max-w-[8px] bg-red-500/40 border-t border-red-500/80 rounded-t-sm transition-all duration-1000 ${h > 70 ? 'shadow-[0_0_15px_rgba(239,68,68,0.8)] bg-red-500/60' : ''}`} style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Right Column: Stats & Departments (3 cols) */}
        <motion.section initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="xl:col-span-3 flex flex-col gap-6">
           <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 uppercase tracking-widest">
              <span className="material-symbols-outlined text-orange-500 text-[18px]">target</span>
              Velocidad Objetivo
            </h3>
          </div>

          <div className="flex flex-col gap-4 bg-[#0F1423] p-5 rounded-2xl border border-white/5 shadow-xl">
             {/* Dept Chart 1 */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <span className="text-sm font-bold text-slate-200">Finanzas</span>
                <span className="text-[10px] text-red-500 font-bold bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">+124%</span>
              </div>
              <div className="w-full bg-[#060910] rounded-full h-1.5 border border-white/5 shadow-inner">
                <div className="bg-red-500 h-full rounded-full shadow-[0_0_5px_#ef4444]" style={{ width: '85%' }}></div>
              </div>
               <div className="text-right text-[9px] font-bold uppercase tracking-widest text-slate-500">Severidad Alta</div>
            </div>

            {/* Dept Chart 2 */}
            <div className="flex flex-col gap-2 pt-3 border-t border-white/5">
              <div className="flex justify-between items-end">
                <span className="text-sm font-bold text-slate-200">RRHH (Reclu.)</span>
                <span className="text-[10px] text-orange-400 font-bold bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20">+62%</span>
              </div>
              <div className="w-full bg-[#060910] rounded-full h-1.5 border border-white/5 shadow-inner">
                <div className="bg-orange-500 h-full rounded-full shadow-[0_0_5px_#f97316]" style={{ width: '65%' }}></div>
              </div>
               <div className="text-right text-[9px] font-bold uppercase tracking-widest text-slate-500">Severidad Media</div>
            </div>

             {/* Dept Chart 3 */}
             <div className="flex flex-col gap-2 pt-3 border-t border-white/5">
              <div className="flex justify-between items-end">
                <span className="text-sm font-bold text-slate-200">Ingeniería</span>
                <span className="text-[10px] text-slate-400 font-bold bg-slate-800 px-1.5 py-0.5 rounded border border-white/10">+12%</span>
              </div>
              <div className="w-full bg-[#060910] rounded-full h-1.5 border border-white/5 shadow-inner">
                <div className="bg-slate-500 h-full rounded-full" style={{ width: '30%' }}></div>
              </div>
               <div className="text-right text-[9px] font-bold uppercase tracking-widest text-slate-500">Severidad Baja</div>
            </div>
          </div>

          {/* System Status Box */}
          <div className="mt-auto bg-[#0F1423] border border-white/5 p-5 rounded-2xl shadow-xl hover:border-emerald-500/20 transition-colors">
            <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">memory</span>
              Estado Motor IA
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-[#060910] px-3 py-2 rounded-lg border border-white/5">
                <span className="text-slate-300 text-xs font-medium">Heurística Avanzada</span>
                <span className="text-emerald-400 font-mono text-[10px] font-bold flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]"></span>
                  ACTIVO
                </span>
              </div>
              <div className="flex justify-between items-center bg-[#060910] px-3 py-2 rounded-lg border border-white/5">
                <span className="text-slate-300 text-xs font-medium">Reputación Dominio</span>
                <span className="text-emerald-400 font-mono text-[10px] font-bold flex items-center gap-1.5">
                   <span className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]"></span>
                  ACTIVO
                </span>
              </div>
              <div className="flex justify-between items-center bg-[#060910] px-3 py-2 rounded-lg border border-white/5">
                <span className="text-slate-300 text-xs font-medium">Visión Computacional</span>
                <span className="text-yellow-400 font-mono text-[10px] font-bold flex items-center gap-1.5">
                   <span className="size-1.5 rounded-full bg-yellow-500 shadow-[0_0_5px_#eab308] animate-pulse"></span>
                  RE-ENTRENA
                </span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer Ticker */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="bg-red-500/5 border border-red-500/20 rounded-xl h-10 overflow-hidden relative flex items-center shadow-lg w-full mt-4">
        <div className="absolute left-0 top-0 bottom-0 bg-red-500 px-4 flex items-center z-10 font-bold text-white text-[10px] uppercase tracking-widest shadow-[5px_0_15px_-3px_rgba(239,68,68,0.5)]">
          Feed Global de Bloqueo
        </div>
        <div className="whitespace-nowrap animate-[scroll_40s_linear_infinite] flex items-center gap-10 pl-48 text-[11px] font-mono text-red-300/80">
          <span className="flex items-center gap-2"><span className="text-red-500 material-symbols-outlined text-[14px]">block</span> account-verify-paypal-secure.com</span>
          <span className="flex items-center gap-2"><span className="text-red-500 material-symbols-outlined text-[14px]">block</span> login-microsoft-365-update.net</span>
          <span className="flex items-center gap-2"><span className="text-red-500 material-symbols-outlined text-[14px]">block</span> secure-banking-alert-citi.org</span>
          <span className="flex items-center gap-2"><span className="text-red-500 material-symbols-outlined text-[14px]">block</span> hr-payroll-update-adp.com</span>
          <span className="flex items-center gap-2"><span className="text-red-500 material-symbols-outlined text-[14px]">block</span> docusign-signature-required-urgent.net</span>
          <span className="flex items-center gap-2"><span className="text-red-500 material-symbols-outlined text-[14px]">block</span> apple-id-locked-verify.io</span>
          <span className="flex items-center gap-2"><span className="text-red-500 material-symbols-outlined text-[14px]">block</span> fedex-tracking-delivery-fail.com</span>
          <span className="flex items-center gap-2"><span className="text-red-500 material-symbols-outlined text-[14px]">block</span> support-zoom-meeting-invite.com</span>
          <span className="flex items-center gap-2"><span className="text-red-500 material-symbols-outlined text-[14px]">block</span> account-verify-paypal-secure.com</span>
          <span className="flex items-center gap-2"><span className="text-red-500 material-symbols-outlined text-[14px]">block</span> login-microsoft-365-update.net</span>
        </div>
      </motion.div>
    </div>
  );
}
