import { auth } from '../firebase';
import React from 'react';

interface TrainingFeedbackProps {
  onNext: () => void;
  onExit: () => void;
}

export default function TrainingFeedback({ onNext, onExit }: TrainingFeedbackProps) {
  return (
    <div className="bg-[#f6f8f6] dark:bg-[#102216] text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#28392e] bg-white dark:bg-[#102216] px-6 py-4 z-20 relative">
        <div className="flex items-center gap-4">
          <div className="size-8 text-[#13ec5b]">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
              <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Entrenamiento PhishGuard</h2>
          <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-[#28392e] text-xs font-medium dark:text-gray-300 ml-2">Escenario 4/10</div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#13ec5b]">verified</span>
            <span className="text-sm font-semibold dark:text-white">Puntuación: 850</span>
            <span className="text-xs text-[#13ec5b] font-bold">(+50)</span>
          </div>
          <button 
            onClick={onExit}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-slate-200 dark:bg-[#28392e] hover:bg-slate-300 dark:hover:bg-[#3b5443] text-slate-900 dark:text-white text-sm font-bold transition-colors"
          >
            <span className="truncate">Salir</span>
          </button>
          <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-[#13ec5b]" data-alt="User profile picture" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
        </div>
      </header>

      {/* Main Content Area: Split View */}
      <main className="flex-1 flex overflow-hidden">
        {/* Left Panel: The Simulation (Interactive Preview) */}
        <section className="flex-1 relative bg-slate-50 dark:bg-[#0a160e] flex flex-col overflow-y-auto custom-scrollbar">
          {/* Simulated Browser Header */}
          <div className="bg-slate-200 dark:bg-[#15231a] px-4 py-2 flex items-center gap-3 border-b border-slate-300 dark:border-[#28392e] sticky top-0 z-10">
            <div className="flex gap-1.5">
              <div className="size-3 rounded-full bg-red-500"></div>
              <div className="size-3 rounded-full bg-yellow-500"></div>
              <div className="size-3 rounded-full bg-green-500"></div>
            </div>
            {/* Highlighted URL Bar */}
            <div className="flex-1 bg-white dark:bg-[#0a160e] rounded-md px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center justify-between border-2 border-red-500/50 relative group cursor-help">
              <div className="flex items-center gap-2 w-full">
                <span className="material-symbols-outlined text-base">lock</span>
                <span>https://www.paypa1.com/secure-login/verify-account</span>
              </div>
              {/* Tooltip for URL */}
              <div className="absolute top-full left-0 mt-2 bg-red-900/90 text-white text-xs p-2 rounded w-64 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 backdrop-blur-sm border border-red-500/30">
                <div className="font-bold mb-1">¡Mira de cerca!</div>
                "paypa1.com" usa el número '1' en lugar de la letra 'l'.
              </div>
            </div>
          </div>

          {/* Simulated Webpage Content */}
          <div className="p-8 max-w-3xl mx-auto w-full relative">
            {/* Mock Page Header */}
            <div className="flex justify-center mb-8 opacity-70">
              <div className="h-10 w-32 bg-slate-300 dark:bg-white/10 rounded"></div>
            </div>

            {/* Mock Login Card */}
            <div className="bg-white dark:bg-[#1c2e21] rounded-lg shadow-xl border border-slate-200 dark:border-[#28392e] p-8 max-w-md mx-auto relative">
              {/* Suspicious Alert Banner */}
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 text-red-800 dark:text-red-200 px-4 py-3 rounded mb-6 text-sm relative group cursor-help">
                <div className="font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined">warning</span>
                  Acción Requerida Inmediatamente
                </div>
                <p className="mt-1">Su cuenta ha sido marcada. Verifique dentro de 1 hora para evitar la suspensión permanente.</p>
                {/* Highlighter Circle */}
                <div className="absolute -right-3 -top-3 size-6 bg-red-500 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -right-3 -top-3 size-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold z-10">!</div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Dirección de correo electrónico</label>
                  <input className="w-full bg-slate-100 dark:bg-black/20 border border-slate-300 dark:border-[#28392e] rounded px-3 py-2 text-sm" disabled type="text" value="user@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Contraseña</label>
                  <input className="w-full bg-slate-100 dark:bg-black/20 border border-slate-300 dark:border-[#28392e] rounded px-3 py-2 text-sm" disabled type="password" value="password123" />
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded font-medium opacity-50 cursor-not-allowed" disabled>Iniciar Sesión</button>
              </div>

              <div className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500">
                <p>creada en 2026 Jonathan Jimenez Escobar</p>
              </div>

              {/* Overlay for "Suspicious Sender" */}
              <div className="absolute -top-24 left-0 right-0 bg-white dark:bg-[#1c2e21] p-3 rounded shadow-lg border border-slate-200 dark:border-[#28392e] flex items-start gap-3 group cursor-help ring-2 ring-red-500/50">
                <div className="size-8 rounded-full bg-slate-200 dark:bg-[#28392e] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-slate-500">person</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-500 dark:text-slate-400">De:</div>
                  <div className="text-sm font-bold dark:text-white truncate">Soporte de Seguridad &lt;support@security-alert-center.net&gt;</div>
                  <div className="text-xs text-red-500 font-medium mt-1">Discrepancia de dominio detectada</div>
                </div>
                <div className="absolute -right-2 -top-2 size-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold z-10">!</div>
              </div>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500 via-transparent to-transparent"></div>
        </section>

        {/* Right Panel: Feedback & Insights */}
        <aside className="w-[450px] bg-white dark:bg-[#1c2e21] border-l border-slate-200 dark:border-[#28392e] flex flex-col z-30 shadow-2xl">
          {/* Header Result */}
          <div className="p-8 border-b border-slate-100 dark:border-[#28392e] bg-gradient-to-br from-green-500/10 to-transparent">
            <div className="flex items-start gap-4 mb-4">
              <div className="size-12 rounded-full bg-[#13ec5b] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(19,236,91,0.4)]">
                <span className="material-symbols-outlined text-[#102216] text-3xl font-bold">check</span>
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">¡Identificado Correctamente!</h1>
                <p className="text-slate-600 dark:text-gray-400 mt-1 leading-snug">Detectaste el intento de phishing. Esta página simulada contenía 3 señales de alerta críticas.</p>
              </div>
            </div>
          </div>

          {/* Insights List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-500 mb-2">Señales de Phishing Detectadas</h3>
            
            {/* Insight Card 1 */}
            <div className="group relative pl-6 pb-6 border-l-2 border-slate-200 dark:border-[#28392e] last:border-0 last:pb-0">
              <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-slate-200 dark:bg-[#28392e] border-2 border-white dark:border-[#1c2e21] group-hover:bg-[#13ec5b] transition-colors"></div>
              <div className="bg-slate-50 dark:bg-[#102216] rounded-xl p-4 border border-slate-100 dark:border-[#28392e] group-hover:border-[#13ec5b]/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-red-500">link_off</span>
                  <h4 className="font-bold text-slate-900 dark:text-white">Dominio Mal Escrito</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-gray-400 mb-2">
                  La URL usa <code className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-1 rounded">paypa1.com</code> en lugar de <code className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-1 rounded">paypal.com</code>. Esta es una táctica común llamada "typosquatting".
                </p>
              </div>
            </div>

            {/* Insight Card 2 */}
            <div className="group relative pl-6 pb-6 border-l-2 border-slate-200 dark:border-[#28392e] last:border-0 last:pb-0">
              <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-slate-200 dark:bg-[#28392e] border-2 border-white dark:border-[#1c2e21] group-hover:bg-[#13ec5b] transition-colors"></div>
              <div className="bg-slate-50 dark:bg-[#102216] rounded-xl p-4 border border-slate-100 dark:border-[#28392e] group-hover:border-[#13ec5b]/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-red-500">mark_email_unread</span>
                  <h4 className="font-bold text-slate-900 dark:text-white">Remitente Sospechoso</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-gray-400 mb-2">
                  Las empresas legítimas rara vez envían alertas de seguridad desde dominios genéricos como <code className="text-xs break-all">security-alert-center.net</code>.
                </p>
              </div>
            </div>

            {/* Insight Card 3 */}
            <div className="group relative pl-6 pb-6 border-l-2 border-slate-200 dark:border-[#28392e] last:border-0 last:pb-0">
              <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-slate-200 dark:bg-[#28392e] border-2 border-white dark:border-[#1c2e21] group-hover:bg-[#13ec5b] transition-colors"></div>
              <div className="bg-slate-50 dark:bg-[#102216] rounded-xl p-4 border border-slate-100 dark:border-[#28392e] group-hover:border-[#13ec5b]/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-red-500">timer</span>
                  <h4 className="font-bold text-slate-900 dark:text-white">Alta Urgencia</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-gray-400 mb-2">
                  Amenazas como "Cuenta Suspendida Inmediatamente" están diseñadas para eludir su pensamiento crítico y hacer que actúe precipitadamente.
                </p>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-6 border-t border-slate-200 dark:border-[#28392e] bg-slate-50 dark:bg-[#15231a]">
            <button 
              onClick={onNext}
              className="w-full flex items-center justify-center gap-2 bg-[#13ec5b] hover:bg-[#0fd650] text-[#102216] text-lg font-bold py-3.5 px-6 rounded-lg transition-all shadow-lg shadow-green-500/20 active:scale-[0.98]"
            >
              <span>Continuar al Siguiente Desafío</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
