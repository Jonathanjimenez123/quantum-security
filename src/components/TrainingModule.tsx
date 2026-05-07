import React from 'react';
import { auth } from '../firebase';

interface TrainingModuleProps {
  onBack: () => void;
  onNext?: () => void;
}

export default function TrainingModule({ onBack, onNext }: TrainingModuleProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden">
      {/* Top Navigation */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4 bg-background-light dark:bg-background-dark sticky top-0 z-50">
        <div className="flex items-center gap-4 cursor-pointer" onClick={onBack}>
          <div className="text-primary">
            <span className="material-symbols-outlined text-3xl">shield_person</span>
          </div>
          <h2 className="text-lg font-bold tracking-tight">Escudo de Seguridad</h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-200 dark:bg-slate-800 hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-xl">notifications</span>
            </button>
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-200 dark:bg-slate-800 hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-xl">person</span>
            </button>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary/30 border-2 border-primary overflow-hidden">
            {auth.currentUser?.photoURL ? (
              <img src={auth.currentUser.photoURL} alt="User" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full" style={{backgroundImage: 'linear-gradient(135deg, #135bec 0%, #00d4ff 100%)'}}></div>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-72 border-r border-slate-200 dark:border-slate-800 flex-col bg-background-light dark:bg-background-dark/50 hidden lg:flex">
          <div className="p-6">
            <div className="flex flex-col gap-1 mb-6">
              <h1 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Progreso del Entrenamiento</h1>
              <p className="text-lg font-bold">Suplantación de Identidad</p>
              <p className="text-xs text-slate-400">Módulo 1.2</p>
            </div>
            <div className="flex flex-col gap-2">
              <div onClick={onBack} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-all cursor-pointer group">
                <span className="material-symbols-outlined text-xl">dashboard</span>
                <span className="text-sm font-medium">Panel Principal</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary transition-all cursor-pointer">
                <span className="material-symbols-outlined text-xl">school</span>
                <span className="text-sm font-medium">Entrenamiento Actual</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-all cursor-pointer">
                <span className="material-symbols-outlined text-xl">warning</span>
                <span className="text-sm font-medium">Reportes de Amenazas</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-all cursor-pointer">
                <span className="material-symbols-outlined text-xl">settings</span>
                <span className="text-sm font-medium">Ajustes</span>
              </div>
            </div>
          </div>
          <div className="mt-auto p-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-bold uppercase text-slate-500">Completado</span>
              <span className="text-sm font-bold text-primary">65%</span>
            </div>
            <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{width: '65%'}}></div>
            </div>
            <button className="w-full mt-6 py-2.5 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
              <span>Continuar</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col bg-slate-50 dark:bg-background-dark/30 p-4 md:p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto w-full">
            <div className="mb-6">
              <nav className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                <span>Entrenamiento</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-primary font-medium">Módulo 1.2: Suplantación de Identidad</span>
              </nav>
              <h2 className="text-3xl font-bold">Desafío: Detecta el Phishing</h2>
              <p className="text-slate-500 mt-1">Analiza la ventana del navegador a continuación. Busca señales de alerta y decide si este sitio es seguro.</p>
            </div>

            {/* Simulation Browser Window */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col min-h-[600px] relative">
              {/* Browser Header */}
              <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="flex-1 flex items-center bg-white dark:bg-slate-900 rounded-lg px-3 py-1.5 border border-slate-200 dark:border-slate-700 gap-2 group cursor-help relative">
                  <span className="material-symbols-outlined text-slate-400 text-sm">lock</span>
                  <span className="text-sm text-slate-600 dark:text-slate-300 font-mono tracking-tight flex-1">
                    https://login.micros<span className="text-rose-500 font-bold underline decoration-rose-500/30">0</span>ft.com/secure/auth_v2/urgent
                  </span>
                  <span className="material-symbols-outlined text-slate-400 text-sm">star</span>
                  {/* Hover Card for URL */}
                  <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900 text-white p-4 rounded-xl border border-slate-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none">
                    <div className="flex items-center gap-2 mb-2 text-rose-400">
                      <span className="material-symbols-outlined">analytics</span>
                      <span className="font-bold text-xs uppercase">Análisis de IA: URL</span>
                    </div>
                    <p className="text-sm text-slate-300">El dominio usa '0' (cero) en lugar de 'o'. Esta es una técnica común de <span className="text-rose-400 font-semibold">Typosquatting</span> (suplantación tipográfica).</p>
                  </div>
                </div>
                <div className="flex gap-2 text-slate-500">
                  <span className="material-symbols-outlined text-lg">refresh</span>
                  <span className="material-symbols-outlined text-lg">more_vert</span>
                </div>
              </div>

              {/* Browser Content (The Fake Login) */}
              <div className="flex-1 bg-white relative flex flex-col">
                {/* Urgent Banner */}
                <div className="bg-rose-50 dark:bg-rose-950/20 border-b border-rose-100 dark:border-rose-900/50 px-6 py-3 flex items-center gap-3 group relative cursor-help">
                  <span className="material-symbols-outlined text-rose-500">report</span>
                  <p className="text-rose-700 dark:text-rose-400 text-sm font-medium">Acción Urgente Requerida: Intento de inicio de sesión inusual detectado. Verifica tu identidad inmediatamente.</p>
                  {/* Hover Card for Banner */}
                  <div className="absolute top-full left-10 mt-2 w-72 bg-slate-900 text-white p-4 rounded-xl border border-slate-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none">
                    <div className="flex items-center gap-2 mb-2 text-amber-400">
                      <span className="material-symbols-outlined">psychology</span>
                      <span className="font-bold text-xs uppercase">Análisis PNL</span>
                    </div>
                    <p className="text-sm text-slate-300">El lenguaje utiliza <span className="text-amber-400 font-semibold">Urgencia Artificial</span> para inducir pánico y eludir el razonamiento lógico.</p>
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="w-full max-w-sm flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-2 group relative cursor-help">
                      <div className="size-12 bg-slate-100 rounded flex items-center justify-center p-2" data-alt="Distorted tech logo">
                        <div className="grid grid-cols-2 gap-0.5">
                          <div className="size-3 bg-red-400/80"></div>
                          <div className="size-3 bg-green-400/80"></div>
                          <div className="size-3 bg-blue-400/80"></div>
                          <div className="size-3 bg-yellow-400/80"></div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-800">Iniciar sesión</h3>
                      <p className="text-sm text-slate-600">para continuar a los Servicios de Microsoft</p>
                      {/* Hover Card for Logo */}
                      <div className="absolute top-0 right-full mr-4 w-64 bg-slate-900 text-white p-4 rounded-xl border border-slate-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none">
                        <div className="flex items-center gap-2 mb-2 text-blue-400">
                          <span className="material-symbols-outlined">image_search</span>
                          <span className="font-bold text-xs uppercase">Revisión Visual</span>
                        </div>
                        <p className="text-sm text-slate-300">Los colores y dimensiones del logotipo están ligeramente desviados de la marca oficial (aprox. 5% de variación).</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-4">
                      <input className="w-full border-b-2 border-slate-300 px-0 py-2 focus:border-primary outline-none text-slate-900 placeholder-slate-400 text-lg" placeholder="Correo, teléfono o Skype" type="text"/>
                      <div className="flex flex-col gap-3">
                        <p className="text-xs text-slate-500">¿No tienes cuenta? <span className="text-primary cursor-pointer">¡Crea una!</span></p>
                        <p className="text-xs text-slate-500">¿No puedes acceder a tu cuenta?</p>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <button className="bg-primary px-8 py-2 text-white font-medium hover:bg-primary/90 transition-colors">Siguiente</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Actions Overlaid on Bottom */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-40 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl">
                <button className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-bold flex items-center gap-2 transition-all hover:scale-105">
                  <span className="material-symbols-outlined">gpp_maybe</span>
                  Reportar como Phishing
                </button>
                <div className="h-8 w-px bg-slate-300 dark:bg-slate-700 mx-2"></div>
                <button className="px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold flex items-center gap-2 transition-all">
                  <span className="material-symbols-outlined">verified_user</span>
                  Marcar como Seguro
                </button>
              </div>
            </div>

            {/* Module Controls */}
            <div className="mt-8 flex items-center justify-between">
              <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium">
                <span className="material-symbols-outlined">arrow_back</span>
                Desafío Anterior
              </button>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Desafío 4 de 8</span>
              </div>
              <button 
                onClick={onNext}
                className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Siguiente Desafío
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

