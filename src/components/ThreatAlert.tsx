import { auth, db } from '../firebase';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';

interface ThreatAlertProps {
  onDismiss: () => void;
}

export default function ThreatAlert({ onDismiss }: ThreatAlertProps) {
  const [threatData, setThreatData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestThreat = async () => {
      if (!auth.currentUser) return;
      try {
        const q = query(
          collection(db, 'scans'),
          where('userId', '==', auth.currentUser.uid),
          where('isPhishing', '==', true),
          orderBy('timestamp', 'desc'),
          limit(1)
        );
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          setThreatData(snapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Error fetching threat data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLatestThreat();
  }, []);

  const title = threatData ? `Amenaza Detectada: ${new URL(threatData.url).hostname}` : "Critical: Zero-Day Threat Detected";
  const description = threatData ? threatData.explanation : "A massive credential harvesting campaign is targeting enterprise O365 logins via forged security update notifications.";
  const indicators = threatData ? threatData.indicators : [
    "Vector: Highly-personalized spear phishing emails",
    "URL Pattern: Obfuscated punycode domains (e.g., mіcrosoft-update.com)",
    "Payload: Session token theft via AitM (Adversary-in-the-Middle)"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100"
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Navigation Bar */}
        <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4 bg-white dark:bg-background-dark sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <div className="text-primary size-8 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">shield_with_heart</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">ThreatShield Global</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button 
                onClick={onDismiss}
                className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-alert-red/10 text-alert-red border border-alert-red/20">
                <span className="material-symbols-outlined">warning</span>
              </button>
            </div>
            <div 
              className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-primary/20 bg-cover bg-center" 
              style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}
            ></div>
          </div>
        </header>

        <main className="flex-1 max-w-6xl mx-auto w-full p-6">
          {/* Urgent Header Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-alert-red/10 text-alert-red text-xs font-bold uppercase tracking-widest mb-4 border border-alert-red/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-alert-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-alert-red"></span>
              </span>
              Emergency Protocol Active
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 uppercase italic">
              {title}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              {description}
            </p>
          </motion.div>

          {/* Main Threat Anatomy Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xl">
                <div className="aspect-video w-full bg-slate-100 dark:bg-slate-800 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 z-10">
                    <h3 className="text-white text-2xl font-bold mb-1">
                      {threatData ? `Análisis de: ${threatData.url}` : 'New Microsoft 365 Spoof Campaign'}
                    </h3>
                    <p className="text-slate-300">
                      {threatData ? `Nivel de amenaza: ${threatData.threatLevel.toUpperCase()} | Confianza: ${(threatData.confidence * 100).toFixed(0)}%` : 'Sophisticated login portal forgery detected across 42 regions.'}
                    </p>
                  </div>
                  <div 
                    className="w-full h-full bg-cover bg-center absolute inset-0 mix-blend-overlay opacity-50" 
                    style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}
                  ></div>
                  <div className="absolute inset-0 bg-slate-900/40"></div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-6 items-start justify-between">
                    <div className="flex-1 min-w-[300px]">
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Anatomía de la Amenaza</h4>
                      <ul className="space-y-3">
                        {indicators.map((ind: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                            <span className="material-symbols-outlined text-alert-red mt-0.5">warning</span>
                            <span>{ind}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-3 shrink-0">
                      <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">bolt</span>
                        Aplicar Filtro de Emergencia
                      </button>
                      <button className="bg-alert-red hover:bg-alert-red/90 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">security_update</span>
                        Desplegar Parche Global
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Metrics Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex flex-col gap-6"
            >
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-lg">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center justify-between">
                  Métricas de Infección
                  <span className="text-alert-red">En Vivo</span>
                </h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-end justify-between mb-2">
                      <span className="text-3xl font-bold">1.2M+</span>
                      <span className="text-alert-red text-sm font-bold flex items-center">
                        <span className="material-symbols-outlined text-sm">trending_up</span> 14% / hr
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm">Intentos Globales Totales</p>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '78%' }}
                        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                        className="bg-alert-red h-full rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                      <p className="text-xs text-slate-500 uppercase font-bold mb-1">Comprometidos</p>
                      <p className="text-xl font-bold">4,120</p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                      <p className="text-xs text-slate-500 uppercase font-bold mb-1">Bloqueados</p>
                      <p className="text-xl font-bold text-primary">842K</p>
                    </div>
                  </div>
                  <div className="h-32 w-full bg-slate-100 dark:bg-slate-800 rounded-lg relative overflow-hidden">
                    <div 
                      className="absolute inset-0 opacity-20 bg-cover bg-center" 
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida/ADBb0ugdeyEUGGtf0Hf8MpAjVRFEDeIHNFR2Z8yjahzqj9-DDuCp40RJoGmFjcCcxMyqVjBxE9PU_HtIPnO_0QrmK0z38sK1dfMe73EaSv0wNbooZUrIjUz6KP5yiZMAPn0sZX7c5atgzUu1TzExQSqyKOe0JHEPseeOkZW-Z6jPWpnZWa1Xf2xXgvIRo_hKQoEp5jK1TesZOMJVWkR-4tJYl-7iPQQCbQcR8b-bC-WgAITB0nzeE8pnoCgwSgcJyUTYEoTRRLlrOhZn')" }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-slate-400 uppercase">Distribución Geoespacial</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h4 className="text-primary font-bold mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined">info</span>
                  Briefing de Analista
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {threatData ? threatData.recommendation : 'Our SOC recommends immediate disabling of basic authentication and enabling "Strict" phishing policies globally until the outbreak is contained.'}
                </p>
                <button className="mt-4 text-primary font-bold text-sm hover:underline flex items-center gap-1">
                  Leer Análisis Técnico Profundo
                  <span className="material-symbols-outlined text-xs">arrow_forward_ios</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Incident Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-lg mb-8"
          >
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Línea de Tiempo del Incidente (UTC)</h4>
            <div className="relative space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-alert-red flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
                  <span className="material-symbols-outlined text-white text-xs">priority_high</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <h5 className="font-bold text-slate-900 dark:text-white">Nivel de Amenaza Escalado a CRÍTICO</h5>
                  <span className="text-xs font-mono text-slate-500">
                    {threatData ? new Date(threatData.timestamp).toLocaleTimeString() : '14:32:05'}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-1">Tasa de infección global superó 5,000 peticiones por minuto.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
                  <span className="material-symbols-outlined text-white text-xs">search</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <h5 className="font-bold text-slate-900 dark:text-white">Firma de Patrón Identificada</h5>
                  <span className="text-xs font-mono text-slate-500">
                    {threatData ? new Date(new Date(threatData.timestamp).getTime() - 15 * 60000).toLocaleTimeString() : '14:15:22'}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-1">Arquitectura confirmada usando infraestructura de Proxy Inverso.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-400 flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
                  <span className="material-symbols-outlined text-white text-xs">radio_button_checked</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <h5 className="font-bold text-slate-900 dark:text-white">Detección Inicial</h5>
                  <span className="text-xs font-mono text-slate-500">
                    {threatData ? new Date(new Date(threatData.timestamp).getTime() - 30 * 60000).toLocaleTimeString() : '13:58:11'}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-1">Alertas heurísticas disparadas por tráfico anómalo.</p>
              </div>
            </div>
          </motion.div>
        </main>

        {/* Sticky Footer for Quick Action */}
        <motion.footer 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 sticky bottom-0 z-50"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-alert-red animate-pulse">emergency</span>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Modo de Emergencia Activo</p>
                <p className="text-xs text-slate-500">Los filtros globales están actualmente en estado de monitoreo 'Pasivo'.</p>
              </div>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button 
                onClick={onDismiss}
                className="flex-1 md:flex-initial bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                Descartar Advertencia
              </button>
              <button className="flex-1 md:flex-initial bg-primary hover:bg-primary/90 text-white font-bold py-2 px-8 rounded-lg transition-all shadow-lg shadow-primary/20">
                Ejecutar Contramedidas
              </button>
            </div>
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
}
