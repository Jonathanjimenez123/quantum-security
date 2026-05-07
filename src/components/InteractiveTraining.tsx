import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

interface InteractiveTrainingProps {
  onBack: () => void;
  onNext?: () => void;
}

export default function InteractiveTraining({ onBack, onNext }: InteractiveTrainingProps) {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/5 dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <span className="material-symbols-outlined text-2xl">shield_person</span>
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">Escudo de Seguridad</h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Academia de Phishing</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <Link className="text-sm font-medium text-primary border-b-2 border-primary py-5" to='/entrenamiento-interactivo'>Entrenamiento</Link>
              <Link className="text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors py-5" to='/panel'>Simulaciones</Link>
              <Link className="text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors py-5" to='/panel'>Recursos</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:border-slate-800"></div>
            <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800/50 p-1 pr-3 rounded-full">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white overflow-hidden">
                {auth.currentUser?.photoURL ? (
                  <img src={auth.currentUser.photoURL} alt="User" className="w-full h-full object-cover" />
                ) : (
                  auth.currentUser?.displayName?.charAt(0).toUpperCase() || 'U'
                )}
              </div>
              <span className="text-xs font-semibold">{auth.currentUser?.displayName || 'Usuario'}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 w-full flex-1">
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Progreso del Curso</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Módulo 1.2: Suplantación de Identidad</span>
              <span className="text-sm font-bold text-primary">65%</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden mb-6">
              <div className="bg-primary h-full w-[65%]" role="progressbar"></div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-500">
                <span className="material-symbols-outlined text-accent-success">check_circle</span>
                <span className="text-sm">¿Qué es el Phishing?</span>
              </div>
              <div className="flex items-center gap-3 text-slate-100 bg-primary/10 p-2 rounded-lg -mx-2 border-l-4 border-primary">
                <span className="material-symbols-outlined text-primary">play_circle</span>
                <span className="text-sm font-semibold">Simulación Activa</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <span className="material-symbols-outlined">radio_button_unchecked</span>
                <span className="text-sm">Técnicas de Suplantación</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <span className="material-symbols-outlined">lock</span>
                <span className="text-sm">Evaluación Final</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Puntos Clave de Aprendizaje</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="mt-1 size-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[14px]">lightbulb</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Verifica las <strong className="text-slate-900 dark:text-slate-200">discrepancias de dominio</strong> en las direcciones del remitente.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 size-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[14px]">lightbulb</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Los phishers usan la <strong className="text-slate-900 dark:text-slate-200">urgencia</strong> para eludir el pensamiento crítico.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 size-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[14px]">lightbulb</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Siempre <strong className="text-slate-900 dark:text-slate-200">pasa el cursor sobre los enlaces</strong> antes de hacer clic.
                </p>
              </li>
            </ul>
          </div>
        </aside>

        <section className="lg:col-span-9 flex flex-col gap-6">
          <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">Simulación Interactiva</h2>
                <p className="text-slate-500 text-sm">Encuentra las 4 amenazas de seguridad en este correo</p>
              </div>
              <div className="flex items-center gap-4 bg-background-light dark:bg-background-dark px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="text-sm font-medium text-slate-500 uppercase tracking-tighter">Amenazas Encontradas</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-primary">2</span>
                  <span className="text-slate-500">/</span>
                  <span className="text-xl font-bold text-slate-500">4</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-50 dark:bg-black/20 min-h-[500px] flex items-center justify-center">
              <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <div className="bg-slate-100 dark:bg-slate-800 p-4 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto text-xs text-slate-500 font-mono">Mail Explorer v4.2</div>
                </div>
                <div className="p-6">
                  <div className="flex flex-col gap-1 border-b border-slate-200 dark:border-slate-800 pb-4 mb-6 relative">
                    <div className="flex items-center justify-between">
                      <p className="text-sm"><span className="text-slate-500">De:</span> Seguridad de Microsoft <span className="text-primary font-medium hover:underline cursor-pointer group relative">
                        &lt;no-reply@microsoft-verification.com&gt;
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                      </span></p>
                      <span className="text-xs text-slate-500">Hoy, 10:42 AM</span>
                    </div>
                    <p className="text-sm"><span className="text-slate-500">Para:</span> john.doe@corp-secure.com</p>
                    <h2 className="text-lg font-bold mt-4 text-slate-900 dark:text-white">ACCIÓN REQUERIDA: Intento de inicio de sesión no autorizado detectado en su cuenta</h2>
                  </div>
                  <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <p>Estimado Usuario,</p>
                    <p>Notamos un inicio de sesión en su cuenta desde un dispositivo no reconocido en <strong>Moscú, Rusia</strong>. Si no fue usted, tome medidas inmediatas para asegurar sus datos.</p>
                    <div className="p-4 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 text-red-900 dark:text-red-200 text-sm relative">
                      <p className="font-bold">URGENTE: Su cuenta será bloqueada en 2 horas si no verifica su identidad.</p>
                      <span className="absolute -top-2 -right-2 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                      </span>
                    </div>
                    <p>Haga clic en el botón de abajo para revisar su actividad reciente y restablecer su contraseña si es necesario.</p>
                    <div className="py-6 text-center">
                      <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded transition-all shadow-lg group relative">
                        Verificar Cuenta Ahora
                        <div className="absolute inset-0 border-2 border-primary rounded group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all"></div>
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-8 border-t border-slate-100 dark:border-slate-800 pt-4">
                      Este es un mensaje de sistema automatizado. Por favor, no responda directamente a este correo. Para obtener ayuda, visite <span className="hover:text-primary cursor-pointer underline">secure-microsoft-portal.net/support</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-black/10 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 p-4 bg-white dark:bg-surface-dark rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="size-10 rounded-full bg-accent-success/20 flex items-center justify-center text-accent-success shrink-0">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Explicación de IA: Verificación de Dominio</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">El remitente usa <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">microsoft-verification.com</code>. El dominio legítimo de Microsoft es <code className="bg-slate-100 dark:bg-slate-700 px-1 rounded">microsoft.com</code>. Esta es una táctica común de suplantación.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-white dark:bg-surface-dark rounded-lg border border-slate-200 dark:border-slate-800 border-l-4 border-l-primary/50">
                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Explicación de IA: Urgencia</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">"Bloqueada en 2 horas" crea miedo. Los atacantes usan lenguaje de alta presión para hacerte actuar rápido sin verificar la autenticidad.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Anterior
            </button>
            <div className="flex items-center gap-4">
              <button 
                onClick={onNext}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Siguiente Desafío
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <button 
                onClick={onBack}
                className="px-6 py-2.5 rounded-lg bg-accent-success text-white font-bold hover:opacity-90 transition-all"
              >
                Finalizar Lección
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 py-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="material-symbols-outlined text-sm">copyright</span>
            <span className="text-xs font-medium">2026 Phishing Shield Extension. Todos los derechos reservados.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link className="text-xs text-slate-400 hover:text-primary transition-colors" to="/privacy-compliance">Política de Privacidad</Link>
            <Link className="text-xs text-slate-400 hover:text-primary transition-colors" to="/terms-of-service">Términos de Servicio</Link>
            <Link className="text-xs text-slate-400 hover:text-primary transition-colors" to='/centro-ayuda'>Contactar Soporte</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
