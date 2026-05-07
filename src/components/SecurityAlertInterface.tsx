import { auth } from '../firebase';
import React from 'react';

interface SecurityAlertInterfaceProps {
  onBack: () => void;
}

export default function SecurityAlertInterface({ onBack }: SecurityAlertInterfaceProps) {
  return (
    <div className="bg-[#f8f6f6] dark:bg-[#221010] font-['Space_Grotesk',sans-serif] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      `}</style>
      <div className="flex h-full min-h-screen w-full flex-col">
        {/* Top Navigation / App Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1a0c0c] px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
            <div className="flex items-center justify-center text-[#ec1313]">
              <span className="material-symbols-outlined text-3xl">shield_person</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">Bot de Seguridad <span className="text-neutral-500 font-normal ml-2 text-sm hidden sm:inline-block">/ Panel</span></h2>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center rounded-lg h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 transition-colors">
              <span className="material-symbols-outlined text-[20px]">settings</span>
            </button>
            <button className="flex items-center justify-center rounded-lg h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 transition-colors" onClick={onBack}>
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex justify-center py-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-[800px] flex flex-col gap-6">
            {/* Date Separator */}
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-neutral-300 dark:border-neutral-800"></div>
              <span className="flex-shrink-0 mx-4 text-neutral-400 dark:text-neutral-500 text-xs font-medium uppercase tracking-wider">Hoy, 24 de Octubre</span>
              <div className="flex-grow border-t border-neutral-300 dark:border-neutral-800"></div>
            </div>

            {/* Chat Message Container */}
            <div className="flex gap-4 group">
              {/* Bot Avatar */}
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-lg bg-[#ec1313]/10 flex items-center justify-center text-[#ec1313]">
                  <span className="material-symbols-outlined text-2xl">smart_toy</span>
                </div>
              </div>

              {/* Message Body */}
              <div className="flex flex-col flex-1 gap-1">
                {/* Message Header */}
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-base">IA Guardia de Phishing</span>
                  <span className="text-xs text-neutral-500 bg-neutral-200 dark:bg-neutral-800 px-1.5 py-0.5 rounded-[4px] font-medium tracking-wide">APP</span>
                  <span className="text-xs text-neutral-400 ml-1">10:42 AM</span>
                </div>

                {/* Slack/Teams Style Alert Card */}
                <div className="mt-1 flex border-l-4 border-[#ec1313] bg-white dark:bg-[#1f1212] rounded-r-lg shadow-sm border-y border-r border-neutral-200 dark:border-neutral-800 overflow-hidden">
                  <div className="flex flex-col w-full">
                    {/* Alert Header */}
                    <div className="px-5 py-4 border-b border-neutral-100 dark:border-neutral-800/50 flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#ec1313] text-2xl animate-pulse">warning</span>
                      <div>
                        <h3 className="text-[#ec1313] font-bold text-lg leading-tight tracking-tight">AMENAZA CRÍTICA DETECTADA</h3>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-0.5">Alerta de seguridad de alta prioridad interceptada en el endpoint del usuario.</p>
                      </div>
                    </div>

                    {/* Alert Content Grid */}
                    <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Key Value Pairs */}
                      <div className="md:col-span-2 grid grid-cols-2 gap-y-4 gap-x-2">
                        <div>
                          <p className="text-neutral-500 dark:text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-1">Usuario</p>
                          <div className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden" data-alt="User Avatar" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg')", backgroundSize: 'cover' }}></div>
                            <p className="font-medium text-sm">John Doe</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-neutral-500 dark:text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-1">Departamento</p>
                          <p className="font-medium text-sm">Finanzas</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-neutral-500 dark:text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-1">Dominio Objetivo</p>
                          <div className="flex items-center gap-2 text-[#ec1313] bg-[#ec1313]/5 dark:bg-[#ec1313]/10 px-2 py-1 rounded w-fit border border-[#ec1313]/10">
                            <span className="material-symbols-outlined text-[16px]">link_off</span>
                            <code className="text-sm font-mono">paypa1-security.com</code>
                          </div>
                        </div>
                        <div className="col-span-2 mt-1">
                          <p className="text-neutral-500 dark:text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-1">Veredicto IA</p>
                          <p className="text-sm text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800/50 p-2 rounded-md border-l-2 border-[#ec1313]">
                            <span className="font-bold">Typosquatting &amp; Falsa Urgencia detectados.</span>
                            La estructura del sitio coincide con kits de phishing conocidos (98% de confianza).
                          </p>
                        </div>
                      </div>

                      {/* Thumbnail */}
                      <div className="md:col-span-1 flex flex-col gap-2">
                        <p className="text-neutral-500 dark:text-neutral-500 text-xs font-semibold uppercase tracking-wider">Captura del Sitio</p>
                        <div className="relative aspect-video w-full rounded-md overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-sm group/image cursor-pointer">
                          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" data-alt="Screenshot of a fake login page attempting to look like a banking site" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-white">zoom_in</span>
                          </div>
                          {/* Overlay Badge */}
                          <div className="absolute bottom-1 right-1 bg-[#ec1313] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">BLOQUEADO</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="bg-neutral-50 dark:bg-[#1a0c0c] px-5 py-3 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-2">
                      <button className="flex items-center justify-center gap-2 px-4 h-9 rounded bg-white dark:bg-[#2c1616] border border-neutral-300 dark:border-[#ec1313]/30 hover:bg-neutral-50 dark:hover:bg-[#ec1313]/20 hover:border-neutral-400 dark:hover:border-[#ec1313]/50 text-sm font-medium transition-all shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">analytics</span>
                        Ver Análisis
                      </button>
                      <button className="flex items-center justify-center gap-2 px-4 h-9 rounded bg-white dark:bg-[#2c1616] border border-neutral-300 dark:border-[#ec1313]/30 hover:bg-neutral-50 dark:hover:bg-[#ec1313]/20 hover:border-neutral-400 dark:hover:border-[#ec1313]/50 text-sm font-medium transition-all shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">domain_verification</span>
                        Añadir a Lista Blanca
                      </button>
                      <button className="flex items-center justify-center gap-2 px-4 h-9 rounded bg-[#ec1313] text-white hover:bg-red-700 text-sm font-bold transition-colors shadow-sm ml-auto">
                        <span className="material-symbols-outlined text-[18px]">lock_person</span>
                        Poner Usuario en Cuarentena
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contextual Hint */}
            <div className="pl-[56px] text-xs text-neutral-400 italic">
              Esta alerta fue generada automáticamente basada en el conjunto de reglas <span className="text-neutral-300">#security-finance-strict</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
