import React, { useEffect, useState, useRef } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import jsPDF from 'jspdf';
import { toPng } from 'html-to-image';

interface ChallengeResultsProps {
  onBack: () => void;
  onRetake?: () => void;
  onNextModule?: () => void;
  onLeaderboard?: () => void;
}

export default function ChallengeResults({ onBack, onRetake, onNextModule, onLeaderboard }: ChallengeResultsProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saveCompletion = async () => {
      if (!auth.currentUser || isSaved) return;

      try {
        await addDoc(collection(db, 'training_progress'), {
          userId: auth.currentUser.uid,
          moduleId: 'phishing-simulation-104',
          status: 'completed',
          score: 85,
          completedAt: serverTimestamp()
        });
        setIsSaved(true);
      } catch (error) {
        handleFirestoreError(error, OperationType.CREATE, 'training_progress');
      }
    };

    saveCompletion();
  }, [isSaved]);

  const downloadCertificate = async () => {
    if (!certificateRef.current) return;
    setIsDownloading(true);
    
    try {
      const imgData = await toPng(certificateRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: '#ffffff'
      });
      
      const width = certificateRef.current.offsetWidth * 2;
      const height = certificateRef.current.offsetHeight * 2;

      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [width, height]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save('Certificado_Seguridad_AI.pdf');
    } catch (error) {
      console.error('Error generating certificate:', error);
      alert('Hubo un error al generar el certificado.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      
      {/* Hidden Certificate Template */}
      <div 
        ref={certificateRef} 
        style={{ position: 'absolute', left: '-9999px', top: '-9999px', width: '1056px', height: '816px' }} 
        className="bg-white p-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 border-[16px] border-primary/10 pointer-events-none"></div>
        <div className="absolute inset-4 border-2 border-primary/20 pointer-events-none"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-tl-full"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <div className="mb-8 text-primary">
            <span className="material-symbols-outlined" style={{ fontSize: '80px' }}>shield_with_heart</span>
          </div>
          
          <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-2 uppercase">Certificado de Finalización</h1>
          <p className="text-xl text-slate-500 font-medium tracking-widest uppercase mb-12">Academia de Seguridad AI</p>
          
          <p className="text-lg text-slate-600 mb-4">Se certifica que</p>
          <h2 className="text-4xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 px-12 inline-block">
            {auth.currentUser?.displayName || auth.currentUser?.email || 'Estudiante de Seguridad'}
          </h2>
          
          <p className="text-lg text-slate-600 mb-8 max-w-2xl">
            Ha completado con éxito el módulo de entrenamiento interactivo
            <br/>
            <strong className="text-slate-900 mt-2 block text-2xl">"Simulación de Phishing y Detección de Amenazas"</strong>
          </p>
          
          <div className="flex items-center gap-12 mt-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">85%</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Puntuación</p>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <p className="text-xl font-bold text-slate-900">{new Date().toLocaleDateString()}</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Fecha</p>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center flex flex-col items-center">
              <span className="material-symbols-outlined text-emerald-500 text-4xl mb-1">verified</span>
              <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">Verificado</p>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-12 text-left">
            <p className="text-sm font-bold text-slate-900">ID de Certificado</p>
            <p className="text-xs text-slate-500 font-mono">CERT-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>
          
          <div className="absolute bottom-12 right-12 text-right">
            <p className="text-sm font-bold text-slate-900">AI Phishing Guard</p>
            <p className="text-xs text-slate-500">Plataforma de Seguridad Empresarial</p>
          </div>
        </div>
      </div>

      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-6 py-3 bg-background-light dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
            <div className="flex items-center gap-4 text-primary cursor-pointer" onClick={onBack}>
              <div className="size-8">
                <span className="material-symbols-outlined text-4xl">shield_with_heart</span>
              </div>
              <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">Escudo de Seguridad</h2>
            </div>
            <div className="flex gap-3">
              <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined">account_circle</span>
              </button>
            </div>
          </header>

          <main className="flex flex-1 justify-center py-10 px-4 md:px-0">
            <div className="layout-content-container flex flex-col max-w-[800px] flex-1">
              <div className="flex flex-col items-center text-center mb-10">
                <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-500 border border-green-500/30">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Éxito</span>
                </div>
                <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-4xl font-extrabold leading-tight mb-8">Resultados del Desafío</h1>

                <div className="relative flex items-center justify-center mb-8">
                  <div className="w-48 h-48 rounded-full border-8 border-primary/10 flex items-center justify-center relative">
                    <svg className="absolute w-full h-full -rotate-90">
                      <circle className="text-primary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.92" strokeDashoffset="82.93" strokeWidth="8"></circle>
                    </svg>
                    <div className="flex flex-col items-center">
                      <span className="text-5xl font-bold text-slate-900 dark:text-slate-100">85%</span>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Puntuación Final</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 w-full max-w-md">
                  <div className="flex-1 min-w-[140px] flex flex-col gap-1 rounded-xl bg-primary/5 dark:bg-primary/10 p-4 border border-primary/20">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase">Tiempo Invertido</p>
                    <p className="text-slate-900 dark:text-slate-100 text-xl font-bold">12m 40s</p>
                  </div>
                  <div className="flex-1 min-w-[140px] flex flex-col gap-1 rounded-xl bg-primary/5 dark:bg-primary/10 p-4 border border-primary/20">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase">Puntos Ganados</p>
                    <p className="text-primary text-xl font-bold">450 XP</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-3 text-green-500">
                    <span className="material-symbols-outlined">verified</span>
                    <h3 className="font-bold">Fortalezas</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">•</span>
                      Excelente detección de direcciones de remitente falsificadas.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">•</span>
                      Rápida identificación de lenguaje urgente/amenazante.
                    </li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-3 text-primary">
                    <span className="material-symbols-outlined">trending_up</span>
                    <h3 className="font-bold">Áreas de Mejora</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      Mejorar la inspección de URLs en busca de conjuntos de caracteres ocultos.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      Verificar la validez del certificado SSL de manera más consistente.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-background-light dark:bg-background-dark/30 rounded-2xl border border-primary/10 overflow-hidden mb-10">
                <div className="px-6 py-4 border-b border-primary/10 flex items-center justify-between">
                  <h2 className="text-xl font-bold">Desglose Detallado</h2>
                  <span className="text-xs font-medium text-slate-500">Simulación de Phishing #104</span>
                </div>
                <div className="divide-y divide-primary/10">
                  <div className="p-6 flex items-center justify-between group hover:bg-primary/5 transition-colors">
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-slate-900 dark:text-slate-100">Typosquatting de Dominio</p>
                      <p className="text-xs text-slate-500">Identificado 'micros0ft.com' como fraudulento.</p>
                    </div>
                    <div className="flex items-center gap-2 text-green-500">
                      <span className="text-xs font-bold uppercase">Detectado</span>
                      <span className="material-symbols-outlined">task_alt</span>
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between group hover:bg-primary/5 transition-colors">
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-slate-900 dark:text-slate-100">Lenguaje Urgente</p>
                      <p className="text-xs text-slate-500">Detectada táctica de presión 'Acción inmediata requerida'.</p>
                    </div>
                    <div className="flex items-center gap-2 text-green-500">
                      <span className="text-xs font-bold uppercase">Detectado</span>
                      <span className="material-symbols-outlined">task_alt</span>
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between group hover:bg-primary/5 transition-colors">
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-slate-900 dark:text-slate-100">URL Sospechosa</p>
                      <p className="text-xs text-slate-500">Se pasó por alto el píxel de seguimiento incrustado en el pie de página.</p>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <span className="text-xs font-bold uppercase">Omitido</span>
                      <span className="material-symbols-outlined">error</span>
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between group hover:bg-primary/5 transition-colors">
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-slate-900 dark:text-slate-100">Análisis de Archivos Adjuntos</p>
                      <p className="text-xs text-slate-500">Marcado 'invoice.pdf.exe' como de alto riesgo.</p>
                    </div>
                    <div className="flex items-center gap-2 text-green-500">
                      <span className="text-xs font-bold uppercase">Detectado</span>
                      <span className="material-symbols-outlined">task_alt</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button 
                  onClick={onNextModule}
                  className="flex-1 h-12 flex items-center justify-center gap-2 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
                >
                  <span className="material-symbols-outlined">arrow_forward</span>
                  Continuar al Siguiente Módulo
                </button>
                <button 
                  onClick={onRetake}
                  className="flex-1 h-12 flex items-center justify-center gap-2 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="material-symbols-outlined">replay</span>
                  Rehacer Desafío
                </button>
                <button 
                  onClick={onLeaderboard}
                  className="flex-1 h-12 flex items-center justify-center gap-2 bg-transparent border-2 border-primary/20 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-primary/5 transition-colors"
                >
                  <span className="material-symbols-outlined">leaderboard</span>
                  Tabla de Clasificación
                </button>
              </div>

              <div className="mt-6">
                <button 
                  className="w-full h-12 flex items-center justify-center gap-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-bold rounded-xl hover:bg-emerald-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={downloadCertificate}
                  disabled={isDownloading}
                >
                  <span className="material-symbols-outlined">
                    {isDownloading ? 'hourglass_empty' : 'workspace_premium'}
                  </span>
                  {isDownloading ? 'Generando PDF...' : 'Descargar Certificado de Finalización'}
                </button>
              </div>

              <div className="mt-12 pt-8 border-t border-primary/10 text-center">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Ruta de Entrenamiento Certificada</p>
                <div className="flex justify-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center opacity-50">
                    <span className="material-symbols-outlined text-sm">workspace_premium</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center opacity-50">
                    <span className="material-symbols-outlined text-sm">security</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center opacity-50">
                    <span className="material-symbols-outlined text-sm">lock</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
