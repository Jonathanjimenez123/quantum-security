import { auth } from '../firebase';
import React from 'react';

interface SecurityAwarenessProps {
  onDashboard: () => void;
  onSettings: () => void;
  onReviewIncidents: () => void;
  onStartTraining: () => void;
  onStartSimulation: () => void;
}

export default function SecurityAwareness({ onDashboard, onSettings, onReviewIncidents, onStartTraining, onStartSimulation }: SecurityAwarenessProps) {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        {/* Navbar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111318] px-10 py-3 sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <div className="size-8 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">security</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Escudo de Seguridad</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex gap-2">
              <button 
                onClick={onDashboard}
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold leading-normal transition-colors"
              >
                <span className="truncate">Panel</span>
              </button>
              <button 
                onClick={onSettings}
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold leading-normal transition-colors"
              >
                <span className="truncate">Ajustes</span>
              </button>
            </div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200 dark:border-slate-700" data-alt="User profile avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
          </div>
        </header>

        <main className="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-8">
            {/* Hero Section */}
            <section className="flex flex-col items-center text-center gap-2 pt-6">
              <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary">
                <span className="material-symbols-outlined text-4xl">verified_user</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">Hito de Concienciación en Seguridad</h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
                Has encontrado <span className="text-primary font-semibold">5 amenazas</span> este mes. Vamos a perfeccionar tus habilidades para mantenerte a salvo.
              </p>
            </section>

            {/* Score Card */}
            <div className="w-full max-w-2xl mx-auto">
              <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-end mb-2">
                      <p className="text-base font-medium">Puntuación de Seguridad Actual</p>
                      <p className="text-2xl font-bold text-primary">72<span className="text-sm text-slate-400 font-normal">/100</span></p>
                    </div>
                    <div className="w-full rounded-full bg-slate-100 dark:bg-slate-700 h-3 overflow-hidden">
                      <div className="h-full rounded-full bg-primary transition-all duration-500 ease-out" style={{width: '72%'}}></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Top 30% de usuarios</p>
                      <p className="text-green-500 text-sm font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">trending_up</span> +5pts esta semana
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block w-px h-16 bg-slate-200 dark:bg-slate-700"></div>
                  <div className="flex gap-4 w-full sm:w-auto justify-center sm:justify-end min-w-max">
                    <div className="text-center">
                      <div className="text-xl font-bold text-slate-900 dark:text-white">5</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Amenazas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-slate-900 dark:text-white">12</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Días Limpios</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Training Modules */}
            <section className="flex flex-col gap-6 max-w-3xl mx-auto w-full mt-4">
              <div className="flex items-center gap-2 px-1">
                <span className="material-symbols-outlined text-primary">school</span>
                <h2 className="text-xl font-bold">Módulos de Entrenamiento Rápido</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Module 1 */}
                <div onClick={onStartTraining} className="group relative flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a202c] p-5 hover:border-primary/50 transition-all cursor-pointer shadow-sm hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                        <span className="material-symbols-outlined">spellcheck</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-primary uppercase tracking-wide">2 min</p>
                        <h3 className="font-bold text-lg">Detectando Typosquatting</h3>
                      </div>
                    </div>
                    <div className="rounded-full border border-slate-200 dark:border-slate-700 p-1 text-slate-400 group-hover:text-primary group-hover:border-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">play_arrow</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Aprende a identificar URLs falsas que parecen sitios web legítimos.</p>
                  <div className="mt-auto pt-2">
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5">
                      <div className="bg-blue-500 h-1.5 rounded-full w-0 group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </div>
                </div>

                {/* Module 2 */}
                <div onClick={onStartTraining} className="group relative flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a202c] p-5 hover:border-primary/50 transition-all cursor-pointer shadow-sm hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
                        <span className="material-symbols-outlined">psychology</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-primary uppercase tracking-wide">2 min</p>
                        <h3 className="font-bold text-lg">La Psicología de la Urgencia</h3>
                      </div>
                    </div>
                    <div className="rounded-full border border-slate-200 dark:border-slate-700 p-1 text-slate-400 group-hover:text-primary group-hover:border-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">play_arrow</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Entiende cómo los atacantes manipulan las emociones para eludir tu lógica.</p>
                  <div className="mt-auto pt-2">
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5">
                      <div className="bg-emerald-500 h-1.5 rounded-full w-0 group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
              <button onClick={onStartTraining} className="flex min-w-[200px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-6 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/25 transition-all transform active:scale-95">
                <span className="material-symbols-outlined text-[20px]">play_circle</span>
                <span className="truncate">Iniciar Entrenamiento Rápido</span>
              </button>
              <button 
                onClick={onStartSimulation}
                className="flex min-w-[200px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-6 bg-transparent border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-base font-bold leading-normal tracking-[0.015em] transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">history</span>
                <span className="truncate">Revisar Incidentes Recientes</span>
              </button>
            </div>
          </div>
        </main>

        <footer className="mt-auto py-6 text-center text-sm text-slate-500 dark:text-slate-600">
          <p>creada en 2026 Jonathan Jimenez Escobar</p>
        </footer>
      </div>
    </div>
  );
}
