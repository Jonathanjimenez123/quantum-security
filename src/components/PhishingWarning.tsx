import { auth, db } from '../firebase';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';

interface PhishingWarningProps {
  onBack?: () => void;
}

export default function PhishingWarning({ onBack }: PhishingWarningProps) {
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

  const domain = threatData ? new URL(threatData.url).hostname : "unauthorized-endpoint.net";
  const explanation = threatData ? threatData.explanation : "El motor cuántico de IA Shield ha bloqueado el acceso debido a patrones criptográficos y léxicos maliciosos.";
  const confidence = threatData ? (threatData.confidence * 100).toFixed(0) : "99";

  return (
    <div className="bg-[#590C0C] min-h-screen text-white font-sans selection:bg-red-500/30 overflow-hidden relative flex flex-col">
      {/* Intense Red Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#d32f2f] mix-blend-multiply opacity-50"></div>
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-red-600/30 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-orange-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
        {/* Warning Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
      </div>

      {/* Top Banner */}
      <div className="w-full bg-[#1A0505] p-4 border-b border-red-500/30 relative z-10 hidden md:flex items-center justify-between">
         <div className="text-red-400 font-mono text-xs tracking-widest flex items-center gap-4">
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> SYSTEM INTERVENTION</span>
            <span>|</span>
            <span>NODE: SOC-PRIMARY-01</span>
         </div>
         <div className="text-red-500/50 font-mono text-xs">
            REF ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}-AI
         </div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
          className="max-w-4xl w-full bg-[#1A0505]/90 backdrop-blur-xl border border-red-500/30 rounded-xl overflow-hidden shadow-2xl shadow-red-900/50"
        >
          {/* Header Warning */}
          <div className="bg-red-600 p-8 flex flex-col items-center text-center">
            <motion.span 
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="material-symbols-outlined text-8xl text-white mb-4"
            >
              gpp_bad
            </motion.span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Acceso Restringido por Seguridad</h1>
            <p className="text-red-100 text-lg md:text-xl font-medium max-w-2xl">
              El sitio web <span className="font-mono bg-red-900/50 px-2 py-0.5 rounded mx-1">{domain}</span> contiene software malicioso o intentó engañarlo.
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-red-400">
                <span className="material-symbols-outlined">psychology</span>
                Reporte Forense de AI Shield
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                {explanation}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="bg-[#2A0808] border border-red-500/20 p-4 rounded-lg flex flex-col">
                <span className="text-xs font-mono text-red-400 mb-1">PROBABILIDAD IA</span>
                <span className="text-3xl font-bold text-white tracking-tighter">{confidence}%</span>
              </div>
              <div className="bg-[#2A0808] border border-red-500/20 p-4 rounded-lg flex flex-col">
                <span className="text-xs font-mono text-red-400 mb-1">VECTOR DE ATAQUE</span>
                <span className="text-xl font-bold text-white tracking-tighter mt-1">Typosquatting</span>
              </div>
              <div className="bg-[#2A0808] border border-red-500/20 p-4 rounded-lg flex flex-col">
                <span className="text-xs font-mono text-red-400 mb-1">INTENCIÓN DETECTADA</span>
                <span className="text-xl font-bold text-white tracking-tighter mt-1">Robo Credenciales</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={onBack}
                className="w-full sm:w-auto px-8 py-4 bg-white text-red-900 hover:bg-slate-200 font-bold rounded-lg text-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                Volver a Zona Segura (Recomendado)
              </button>
              <button 
                className="w-full sm:w-auto px-6 py-4 bg-transparent border border-red-500/30 text-red-200 hover:bg-red-500/10 font-medium rounded-lg transition-colors text-sm"
              >
                Ignorar advertencia (Bajo tu riesgo)
              </button>
            </div>
          </div>
          
          <div className="bg-[#110303] px-8 py-4 border-t border-red-500/20 flex justify-between items-center text-xs font-mono text-red-500/50">
             <span>SISTEMA DE PREVENCIÓN: ACTIVO</span>
             <span>PROTEGIDO POR AI SHIELD QUANTUM CORE</span>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
