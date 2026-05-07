import { auth } from '../firebase';
import React from 'react';
import { usePreferences } from '../contexts/PreferencesContext';
import { useNavigate } from 'react-router-dom';

interface MobileDashboardProps {
  onBack: () => void;
}

export default function MobileDashboard({ onBack }: MobileDashboardProps) {
  const { setViewMode } = usePreferences();
  const navigate = useNavigate();

  const switchToDesktop = () => {
    setViewMode('desktop');
    navigate('/panel');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-4 py-3">
        <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
            </svg>
          </div>
          <h1 className="text-lg font-bold leading-tight tracking-tight">Security<span className="text-primary">Guard</span></h1>
        </div>
        <div className="flex gap-2">
          <button onClick={switchToDesktop} className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors" aria-label="Cambiar a vista de PC">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300" style={{ fontSize: '20px' }}>desktop_windows</span>
          </button>
          <button className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300" style={{ fontSize: '20px' }}>notifications</span>
          </button>
          <button className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300" style={{ fontSize: '20px' }}>account_circle</span>
          </button>
        </div>
      </header>

      {/* Main Content (Scrollable) */}
      <main className="flex-1 overflow-y-auto pb-24 px-4 pt-4">
        {/* User Welcome */}
        <div className="flex items-center gap-3 mb-6">
          <div className="size-12 rounded-full bg-cover bg-center border-2 border-primary/20" data-alt="Portrait of a user" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
          <div className="flex flex-col">
            <h2 className="text-base font-medium leading-tight">Admin Console</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Enterprise Security</p>
          </div>
        </div>

        {/* Security Health Card */}
        <div className="mb-6 rounded-xl bg-slate-200 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 p-5 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Security Health Score</p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">98</span>
                <span className="text-lg font-medium text-slate-400 dark:text-slate-500 mb-1">/100</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-bold text-primary">
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>trending_up</span>
                +2%
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">vs last week</span>
            </div>
          </div>
          {/* Simplified Trend Sparkline */}
          <div className="h-16 w-full relative">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 20">
              <defs>
                <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#13ec5b', stopOpacity: 0.2 }}></stop>
                  <stop offset="100%" style={{ stopColor: '#13ec5b', stopOpacity: 0 }}></stop>
                </linearGradient>
              </defs>
              <path d="M0 15 Q 10 18, 20 10 T 40 12 T 60 5 T 80 8 T 100 2 V 20 H 0 Z" fill="url(#gradient)"></path>
              <path d="M0 15 Q 10 18, 20 10 T 40 12 T 60 5 T 80 8 T 100 2" fill="none" stroke="#13ec5b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </div>
          <div className="flex justify-between mt-2 px-1">
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Mon</span>
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Wed</span>
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Fri</span>
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Sun</span>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <div className="size-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
              <span className="material-symbols-outlined">shield</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">142</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Sites Scanned</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <div className="size-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">3</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Threats Blocked</p>
            </div>
          </div>
        </div>

        {/* Recent Threats Section */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Activity</h3>
          <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">Ver Todo</button>
        </div>
        <div className="flex flex-col gap-3">
          {/* Threat Card 1 */}
          <div className="group flex items-center gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-pointer">
            <div className="relative">
              <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                <img alt="PayPal Logo" className="size-6 object-contain" onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/24?text=P'; }} src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
              </div>
              <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-red-500 border-2 border-white dark:border-slate-900 flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '10px' }}>close</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Login Attempt Blocked</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">paypal-secure-verify.com</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/10 text-red-500 uppercase tracking-wide">High</span>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200" style={{ fontSize: '20px' }}>chevron_right</span>
            </div>
          </div>

          {/* Threat Card 2 */}
          <div className="group flex items-center gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-pointer">
            <div className="relative">
              <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-slate-400">language</span>
              </div>
              <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-yellow-500 border-2 border-white dark:border-slate-900 flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '10px' }}>priority_high</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Suspicious Redirect</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">bit.ly/claim-prize-now</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-500/10 text-yellow-500 uppercase tracking-wide">Med</span>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200" style={{ fontSize: '20px' }}>chevron_right</span>
            </div>
          </div>

          {/* Safe Site Card */}
          <div className="group flex items-center gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-pointer opacity-75">
            <div className="relative">
              <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                <img alt="Google Logo" className="size-6 object-contain" onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/24?text=G'; }} src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
              </div>
              <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-green-500 border-2 border-white dark:border-slate-900 flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '10px' }}>check</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Safe Browsing</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">google.com</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/10 text-green-500 uppercase tracking-wide">Safe</span>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200" style={{ fontSize: '20px' }}>chevron_right</span>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-4 text-center">
          <p className="text-[10px] text-slate-500 dark:text-slate-400">creada en 2026 Jonathan Jimenez Escobar</p>
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 px-6 py-3 pb-safe-area flex justify-between items-center z-50" style={{ paddingBottom: 'env(safe-area-inset-bottom, 20px)' }}>
        <button className="flex flex-col items-center gap-1 group">
          <div className="p-1.5 rounded-full bg-primary/20 text-primary transition-colors">
            <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          </div>
          <span className="text-[10px] font-medium text-primary">Resumen</span>
        </button>
        <button className="flex flex-col items-center gap-1 group">
          <div className="p-1.5 rounded-full text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[24px]">shield</span>
          </div>
          <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">Threats</span>
        </button>
        <button className="flex flex-col items-center gap-1 group">
          <div className="p-1.5 rounded-full text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[24px]">settings</span>
          </div>
          <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">Configuración</span>
        </button>
        <button className="flex flex-col items-center gap-1 group">
          <div className="p-1.5 rounded-full text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[24px]">support_agent</span>
          </div>
          <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">Support</span>
        </button>
      </nav>
    </div>
  );
}
