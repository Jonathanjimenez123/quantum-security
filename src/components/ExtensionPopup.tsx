import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, ShieldAlert, Settings, ExternalLink, Power, AlertTriangle, CheckCircle } from 'lucide-react';
import { collection, query, where, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../firebase';

interface ExtensionPopupProps {
  onBack?: () => void;
}

export default function ExtensionPopup({ onBack }: ExtensionPopupProps) {
  const [isSafe, setIsSafe] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [threatLevel, setThreatLevel] = useState<string>('low');
  const [confidence, setConfidence] = useState<number>(0);
  const [latestUrl, setLatestUrl] = useState<string>('');
  const [conflictingExtensions, setConflictingExtensions] = useState([
    { id: 'ext1', name: 'AdBlocker Pro', disabled: false },
    { id: 'ext2', name: 'Grammar Checker', disabled: false }
  ]);

  const handleDisableExtension = (id: string) => {
    setConflictingExtensions(prev => 
      prev.map(ext => ext.id === id ? { ...ext, disabled: true } : ext)
    );
  };

  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, 'scans'),
      where('userId', '==', auth.currentUser.uid),
      orderBy('timestamp', 'desc'),
      limit(1)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const latestScan = snapshot.docs[0].data();
        setIsSafe(!latestScan.isPhishing);
        setThreatLevel(latestScan.threatLevel || 'low');
        setConfidence(latestScan.confidence || 0);
        setLatestUrl(latestScan.url || '');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-display">
      {onBack && (
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 text-slate-400 hover:text-white flex items-center gap-2"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Volver al Portal
        </button>
      )}

      <div className="text-center mb-8 absolute top-20">
        <h2 className="text-white text-xl font-bold mb-2">Popup de Extensión (Tiempo Real)</h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Este popup está conectado a la base de datos en tiempo real. 
          Ve al "Escáner IA" en otra pestaña, escanea una URL y verás cómo este estado cambia automáticamente.
        </p>
        <button 
          onClick={() => setIsSafe(!isSafe)}
          className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm transition-colors border border-slate-700"
        >
          Forzar Estado (Demo)
        </button>
      </div>

      {/* Extension Popup Container */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="w-[360px] bg-surface-dark border border-border-dark rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
      >
        {/* Header */}
        <div className="px-4 py-3 border-b border-border-dark flex items-center justify-between bg-background-dark/50">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded bg-primary/20 flex items-center justify-center text-primary">
              <Shield size={14} />
            </div>
            <span className="font-bold text-white text-sm tracking-tight">PhishGuard AI</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-slate-400 hover:text-white transition-colors">
              <Settings size={16} />
            </button>
          </div>
        </div>

        {/* Main Status Area */}
        <div className="p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* Background glow */}
          <div className={`absolute inset-0 opacity-20 transition-colors duration-500 ${!isActive ? 'bg-slate-500' : isSafe ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ filter: 'blur(40px)' }}></div>
          
          <motion.div 
            animate={{ scale: isActive ? [1, 1.05, 1] : 1 }}
            transition={{ repeat: Infinity, duration: 2 }}
            className={`size-24 rounded-full flex items-center justify-center mb-4 relative z-10 shadow-lg ${
              !isActive ? 'bg-slate-800 text-slate-500 border-4 border-slate-700' :
              isSafe ? 'bg-emerald-500/20 text-emerald-500 border-4 border-emerald-500/30' : 'bg-red-500/20 text-red-500 border-4 border-red-500/30'
            }`}
          >
            {!isActive ? <Power size={40} /> : isSafe ? <CheckCircle size={40} /> : <AlertTriangle size={40} />}
          </motion.div>

          <h3 className={`text-xl font-bold mb-1 relative z-10 ${!isActive ? 'text-slate-400' : isSafe ? 'text-emerald-400' : 'text-red-400'}`}>
            {!isActive ? 'Protección Pausada' : isSafe ? 'Sitio Seguro' : '¡Sitio Bloqueado!'}
          </h3>
          <p className="text-slate-400 text-xs relative z-10 truncate w-full max-w-[280px]" title={latestUrl}>
            {!isActive ? 'La IA no está analizando esta página.' : 
             isSafe ? (latestUrl || 'No se detectaron amenazas en esta página.') : 
             'Se detectó un intento de recolección de credenciales.'}
          </p>
        </div>

        {/* Details / Actions */}
        <div className="px-4 pb-4 pt-2 bg-background-dark/30 flex-1 flex flex-col gap-2">
          
          {/* Conflicting Extensions Section */}
          {conflictingExtensions.some(ext => !ext.disabled) && (
            <div className="mb-2 p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <div className="flex items-center gap-2 text-orange-400 mb-2">
                <AlertTriangle size={14} />
                <span className="text-xs font-bold uppercase tracking-wider">Conflictos Detectados</span>
              </div>
              <p className="text-[10px] text-slate-400 mb-2">Las siguientes extensiones pueden interferir con PhishGuard:</p>
              <div className="space-y-2">
                {conflictingExtensions.filter(ext => !ext.disabled).map(ext => (
                  <div key={ext.id} className="flex items-center justify-between bg-background-dark/50 p-2 rounded border border-border-dark">
                    <span className="text-xs text-slate-300 truncate max-w-[120px]">{ext.name}</span>
                    <button 
                      onClick={() => handleDisableExtension(ext.id)}
                      className="text-[10px] px-2 py-1 bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 rounded transition-colors"
                    >
                      Deshabilitar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!isActive ? (
            <button 
              onClick={() => setIsActive(true)}
              className="w-full py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2"
            >
              <Power size={16} />
              Reanudar Protección
            </button>
          ) : isSafe ? (
            <>
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-dark border border-border-dark">
                <div className="flex items-center gap-2 text-slate-300">
                  <Shield size={14} className="text-emerald-500" />
                  <span className="text-xs font-medium">Análisis IA</span>
                </div>
                <span className="text-xs font-bold text-emerald-500">Completado</span>
              </div>
              <button 
                onClick={() => setIsActive(false)}
                className="w-full py-2.5 bg-surface-dark hover:bg-border-dark border border-border-dark text-slate-300 rounded-lg text-sm font-medium transition-colors"
              >
                Pausar en este sitio
              </button>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                <div className="flex items-center gap-2 text-red-400">
                  <ShieldAlert size={14} />
                  <span className="text-xs font-medium">Nivel de Riesgo</span>
                </div>
                <span className="text-xs font-bold text-red-500 uppercase">{threatLevel} ({(confidence * 100).toFixed(0)}%)</span>
              </div>
              <button className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-bold transition-colors shadow-lg shadow-red-500/20">
                Ver Informe Detallado
              </button>
              <button className="w-full py-2 text-slate-500 hover:text-slate-300 text-xs font-medium transition-colors">
                Ignorar advertencia (No recomendado)
              </button>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-background-dark border-t border-border-dark flex items-center justify-between text-[10px] text-slate-500">
          <span>Powered by Sentinel AI</span>
          <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
            Dashboard <ExternalLink size={10} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
