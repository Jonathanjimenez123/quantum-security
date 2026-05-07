import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';

interface TrainingChallengeProps {
  onBack: () => void;
  onComplete?: () => void;
}

export default function TrainingChallenge({ onBack, onComplete }: TrainingChallengeProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!auth.currentUser) {
      console.error("User not authenticated");
      if (onComplete) onComplete();
      return;
    }

    setIsSubmitting(true);
    try {
      const progressId = `${auth.currentUser.uid}_module_social_engineering_${Date.now()}`;
      const progressRef = doc(db, 'training_progress', progressId);
      
      await setDoc(progressRef, {
        userId: auth.currentUser.uid,
        moduleId: 'module_social_engineering',
        status: 'completed',
        score: 100,
        completedAt: new Date()
      });
      
      if (onComplete) onComplete();
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'training_progress');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4 bg-white dark:bg-background-dark/50 backdrop-blur-md z-10">
        <div className="flex items-center gap-4 cursor-pointer" onClick={onBack}>
          <div className="flex items-center justify-center size-10 rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined">shield_lock</span>
          </div>
          <div>
            <h2 className="text-lg font-bold leading-tight tracking-tight">Escudo de Seguridad</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest">Simulador de Entrenamiento</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 uppercase">Progreso del Desafío</span>
              <span className="text-sm font-bold text-primary">2 de 5</span>
            </div>
            <div className="w-48 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full mt-1 overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{width: '40%'}}></div>
            </div>
          </div>
          <div className="h-10 w-px bg-slate-200 dark:border-slate-800"></div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center justify-center bg-slate-100 dark:bg-surface-dark px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-400 font-bold uppercase">Temporizador</span>
              <span className="text-lg font-mono font-bold text-accent-red">08:45</span>
            </div>
          </div>
          <button className="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-surface-dark text-slate-600 dark:text-slate-300">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        <div className="flex flex-col flex-1 p-6 gap-6 overflow-y-auto">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold tracking-tight">Desafío de Entrenamiento: Detecta la Amenaza</h1>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined text-sm">folder_open</span>
              <span className="text-sm font-medium">Módulo: Ingeniería Social y Phishing</span>
            </div>
          </div>

          <div className="flex-1 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-background-dark shadow-2xl overflow-hidden flex flex-col relative group">
            <div className="h-10 bg-slate-100 dark:bg-slate-800 border-b border-slate-300 dark:border-slate-700 flex items-center px-4 gap-4">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-500/30"></div>
                <div className="size-3 rounded-full bg-yellow-500/30"></div>
                <div className="size-3 rounded-full bg-green-500/30"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-700 w-full max-w-md group/url relative">
                  <span className="material-symbols-outlined text-sm text-slate-400">lock</span>
                  <span className="text-xs font-mono text-slate-500 truncate italic">https://<span className="text-accent-red font-bold underline">company-portal-secure.net</span>/login?auth_id=9821</span>
                  <div className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-red opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-accent-red border-2 border-white dark:border-slate-900 cursor-pointer"></span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-slate-400 text-sm">refresh</span>
                <span className="material-symbols-outlined text-slate-400 text-sm">menu</span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950 p-8 flex flex-col items-center">
              <div className="w-full max-w-lg space-y-6">
                <div className="relative bg-accent-red/10 border-l-4 border-accent-red p-4 rounded-r-lg group/banner">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-accent-red">warning</span>
                    <div>
                      <h4 className="text-sm font-bold text-accent-red uppercase tracking-wide">Acción Crítica Requerida</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">Su cuenta será suspendida en <span className="font-bold underline">2 horas</span> si no verifica su identidad ahora.</p>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-red opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-accent-red border-2 border-white dark:border-slate-900 cursor-pointer"></span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm space-y-6 relative group/form">
                  <div className="flex flex-col items-center gap-2 mb-4">
                    <div className="size-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <span className="material-symbols-outlined text-slate-400 text-3xl">corporate_fare</span>
                    </div>
                    <h3 className="text-xl font-bold">Inicio de Sesión del Portal Interno</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase">ID de Empleado</label>
                      <input className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary h-11 px-4" placeholder="ej. EMP-12345" type="text"/>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase">Contraseña Corporativa</label>
                      <input className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary h-11 px-4" placeholder="••••••••" type="password"/>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 space-y-3">
                      <label className="text-xs font-bold text-primary uppercase">Verificación: Número de Seguro Social</label>
                      <input className="w-full bg-white dark:bg-slate-800 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary h-11 px-4 text-sm" placeholder="XXX-XX-XXXX" type="text"/>
                      <p className="text-[10px] text-slate-400">Requerido para la validación de identidad multifactorial durante bloqueos de emergencia.</p>
                    </div>
                  </div>
                  <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-lg transition-colors">
                    Iniciar Sesión de Forma Segura
                  </button>
                  <div className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-red opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-accent-red border-2 border-white dark:border-slate-900 cursor-pointer"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none border-[3px] border-primary/20 rounded-xl"></div>
          </div>

          <footer className="flex items-center justify-between gap-4 py-2">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-5 h-11 bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                <span className="material-symbols-outlined text-lg">lightbulb</span>
                Solicitar Pista
              </button>
              <button className="flex items-center gap-2 px-5 h-11 bg-accent-red/10 text-accent-red border border-accent-red/30 rounded-lg text-sm font-bold hover:bg-accent-red/20 transition-all">
                <span className="material-symbols-outlined text-lg">flag</span>
                Marcar como Phishing
              </button>
            </div>
            <button 
              onClick={onComplete}
              className="flex items-center gap-2 px-8 h-11 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Enviar Análisis
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </footer>
        </div>

        <aside className="w-80 border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark/30 p-6 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined">smart_toy</span>
            <h3 className="font-bold text-lg">Asistente de IA</h3>
          </div>
          <div className="flex-1 space-y-6 overflow-y-auto pr-1">
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Puntuación de Urgencia PNL</span>
                <span className="text-xs font-bold text-accent-red">95% CRÍTICO</span>
              </div>
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="bg-accent-red h-full rounded-full" style={{width: '95%'}}></div>
              </div>
              <p className="text-sm mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                <span className="font-bold text-accent-red">Señal:</span> Alto factor de miedo detectado en el texto del banner. Los portales profesionales rara vez utilizan ultimátums agresivos como "suspendida en 2 horas".
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm">database</span>
                <span className="text-xs font-bold text-slate-500 uppercase">Señales Técnicas</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-accent-red text-base mt-0.5">error</span>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    <span className="font-bold">Discrepancia de Dominio:</span> La URL utiliza <span className="font-mono text-accent-red">.net</span> en lugar del estándar corporativo <span className="font-mono text-primary">.com</span>.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-accent-red text-base mt-0.5">error</span>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    <span className="font-bold">Violación de Privacidad:</span> Solicitar el SSN en una página de inicio de sesión estándar es una gran señal de alerta para la recolección de datos.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-auto p-4 rounded-xl bg-primary/10 border border-primary/20">
              <h4 className="text-sm font-bold text-primary mb-2">Tarea:</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal">
                Identifique los <span className="font-bold">3 puntos críticos de riesgo</span> en la página para completar este módulo. Haga clic en los puntos rojos para analizar.
              </p>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center text-xs text-slate-400 font-medium">
              <span>Pistas usadas: 0/3</span>
              <span>Confianza: 82%</span>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
