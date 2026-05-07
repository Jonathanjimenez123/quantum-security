import { auth, db } from '../firebase';
import React, { useState, useEffect } from 'react';
import ReportFalsePositive from './ReportFalsePositive';
import { motion } from 'motion/react';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';

interface WarningScreenProps {
  onBack: () => void;
}

export default function WarningScreen({ onBack }: WarningScreenProps) {
  const [showReportModal, setShowReportModal] = useState(false);
  const [threatData, setThreatData] = useState<any>(null);

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
      }
    };
    fetchLatestThreat();
  }, []);

  const domain = threatData ? new URL(threatData.url).hostname : "example-site.com";
  const confidence = threatData ? (threatData.confidence * 100).toFixed(0) : "98";
  const threatLevel = threatData ? threatData.threatLevel.toUpperCase() : "ALTO";

  return (
    <div className="fixed inset-0 z-[100] bg-background-light dark:bg-background-dark font-display flex flex-col min-h-screen overflow-hidden relative">
      {showReportModal && (
        <ReportFalsePositive 
          onClose={() => setShowReportModal(false)} 
          domain={domain} 
        />
      )}
      {/* Simulated Desktop Environment Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-40" 
          data-alt="Abstract dark desktop wallpaper background" 
          style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}
        ></div>
        {/* Simulated Browser Window Behind */}
        <div className="absolute top-10 left-10 right-10 bottom-20 bg-[#1e1e1e] rounded-lg shadow-2xl border border-white/5 flex flex-col opacity-30">
          <div className="h-10 bg-[#2d2d2d] rounded-t-lg flex items-center px-4 gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 flex-1 h-6 bg-[#1a1a1a] rounded text-xs text-gray-500 flex items-center px-3">{threatData ? threatData.url : 'https://example-site.com/login'}</div>
          </div>
          <div className="flex-1 p-8">
            <div className="w-1/3 h-4 bg-white/10 rounded mb-4"></div>
            <div className="w-2/3 h-4 bg-white/5 rounded mb-2"></div>
            <div className="w-1/2 h-4 bg-white/5 rounded mb-2"></div>
            <div className="w-3/4 h-4 bg-white/5 rounded mb-2"></div>
          </div>
        </div>
      </div>

      {/* Notification Container */}
      <div className="relative z-50 flex flex-col items-end justify-start p-6 pointer-events-none h-screen w-full">
        {/* Toast Notification Component */}
        <motion.div 
          initial={{ opacity: 0, x: 100, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="pointer-events-auto w-full max-w-[420px] bg-[#221010]/85 backdrop-blur-md border border-[#f20d0d]/20 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          <div className="flex flex-row items-stretch">
            {/* Accent Bar */}
            <div className="w-1.5 bg-[#f20d0d] shadow-[0_0_15px_rgba(242,13,13,0.6)]"></div>
            <div className="flex-1 p-5">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[#f20d0d]">
                  <span className="material-symbols-outlined text-[20px] animate-pulse">gpp_maybe</span>
                  <span className="text-sm font-bold tracking-wider uppercase">Alerta de Seguridad IA</span>
                </div>
                <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
              
              {/* Content */}
              <div className="mb-5">
                <h3 className="text-slate-100 text-lg font-bold leading-tight mb-1">
                  Intento de Phishing Bloqueado
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Nuestra IA detectó una recolección de credenciales sospechosa en <span className="text-slate-200 font-medium">{domain}</span>. La conexión fue terminada.
                </p>
              </div>
              
              {/* Analysis Card (Mini) */}
              <div className="bg-black/40 rounded-lg p-3 mb-4 border border-white/5 flex items-start gap-3">
                <div className="w-10 h-10 rounded bg-[#f20d0d]/20 flex items-center justify-center shrink-0 text-[#f20d0d]">
                  <span className="material-symbols-outlined text-[20px]">troubleshoot</span>
                </div>
                <div className="flex-1">
                  <p className="text-slate-200 text-xs font-semibold">Nivel de Amenaza: {threatLevel}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${confidence}%` }}
                        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                        className="h-full bg-[#f20d0d] rounded-full"
                      ></motion.div>
                    </div>
                    <span className="text-[10px] text-[#f20d0d] font-bold ml-1">{confidence}% de Riesgo</span>
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={onBack}
                    className="flex-1 h-9 bg-[#f20d0d] hover:bg-red-600 active:bg-red-700 text-white text-xs font-bold uppercase tracking-wide rounded-lg transition-all shadow-[0_0_10px_rgba(242,13,13,0.25)] flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">security</span>
                    Ver Análisis
                  </button>
                  <button 
                    onClick={onBack}
                    className="flex-1 h-9 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wide rounded-lg transition-all border border-white/10 flex items-center justify-center"
                  >
                    Descartar
                  </button>
                </div>
                <button 
                  onClick={() => setShowReportModal(true)}
                  className="text-slate-400 hover:text-white text-xs font-medium transition-colors text-center w-full"
                >
                  ¿Crees que es un error? Reportar Falso Positivo
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Secondary stacked notification */}
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 0.6, y: 0, scale: 0.95 }}
          transition={{ delay: 0.2, type: 'spring', damping: 25, stiffness: 300 }}
          className="pointer-events-auto mt-4 w-full max-w-[420px] bg-[#221010]/85 backdrop-blur-md border border-[#f20d0d]/20 rounded-xl shadow-lg origin-top-right border-l-4 !border-l-yellow-500 hidden sm:block"
        >
          <div className="p-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-yellow-500">warning</span>
            <div>
              <p className="text-slate-200 text-sm font-bold">Actualización de Navegador Requerida</p>
              <p className="text-slate-500 text-xs">Parche de seguridad disponible.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
