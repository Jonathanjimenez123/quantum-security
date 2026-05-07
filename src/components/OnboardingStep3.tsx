import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface OnboardingStep3Props {
  onComplete: () => void;
}

export default function OnboardingStep3({ onComplete }: OnboardingStep3Props) {
  const [protectionEnabled, setProtectionEnabled] = useState(true);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col justify-center items-center py-10 px-4 relative overflow-x-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/2"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-[520px] bg-white dark:bg-[#151c2b] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
        {/* Header Section */}
        <div className="p-8 pb-4 text-center space-y-3">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 ring-4 ring-primary/5">
            <span className="material-symbols-outlined text-primary text-4xl">verified_user</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">You are now protected</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Your browser is fully secured against phishing attacks and malicious sites.</p>
        </div>

        {/* Visual Preview Section */}
        <div className="px-8 py-4">
          <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-[#1a2130] group">
            {/* Split View Container */}
            <div className="absolute inset-0 grid grid-cols-2 gap-px bg-slate-200 dark:bg-slate-700">
              {/* Left: Safe Site */}
              <div className="relative bg-white dark:bg-[#1a2130] p-3 flex flex-col gap-2 overflow-hidden">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  <div className="h-4 flex-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center px-2">
                    <span className="material-symbols-outlined text-green-500 text-[10px] mr-1">lock</span>
                    <div className="h-1 w-1/2 bg-slate-200 dark:bg-slate-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1 rounded bg-slate-50 dark:bg-slate-800/50 p-2 flex flex-col gap-2 relative overflow-hidden">
                  {/* Abstract Content */}
                  <div className="h-2 w-3/4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                  <div className="h-2 w-1/2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                  <div className="mt-auto h-20 w-full bg-emerald-500/10 rounded border border-emerald-500/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-emerald-500 text-2xl">check_circle</span>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">SAFE</div>
              </div>

              {/* Right: Blocked Site */}
              <div className="relative bg-white dark:bg-[#1a2130] p-3 flex flex-col gap-2 overflow-hidden">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  <div className="h-4 flex-1 rounded-full bg-red-500/10 border border-red-500/20 flex items-center px-2">
                    <span className="material-symbols-outlined text-red-500 text-[10px] mr-1">warning</span>
                    <div className="h-1 w-1/2 bg-red-500/20 rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1 rounded bg-red-500/5 p-2 flex flex-col items-center justify-center gap-2 text-center relative overflow-hidden backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mb-1">
                    <span className="material-symbols-outlined text-red-500">block</span>
                  </div>
                  <div className="h-1.5 w-16 bg-red-500/20 rounded"></div>
                  <div className="h-1.5 w-10 bg-red-500/20 rounded"></div>
                </div>
                <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">BLOCKED</div>
              </div>
            </div>
          </div>
          {/* Comparison Legend */}
          <div className="flex justify-between items-center px-2 pt-2 text-xs text-slate-500 dark:text-slate-400">
            <span>Safe browsing enabled</span>
            <span>Threats automatically blocked</span>
          </div>
        </div>

        {/* Action Section */}
        <div className="mt-2 p-6 pt-2 bg-slate-50 dark:bg-[#1a2130]/50 border-t border-slate-100 dark:border-slate-800">
          {/* Toggle Control */}
          <div className="flex items-center justify-between bg-white dark:bg-[#1a2130] p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm mb-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 w-10 h-10">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900 dark:text-white">Real-time Protection</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Block threats instantly</span>
              </div>
            </div>
            <div className="shrink-0">
              <label className="relative flex h-[28px] w-[48px] cursor-pointer items-center rounded-full border-none bg-slate-300 dark:bg-slate-700 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary transition-colors duration-200">
                <div className="h-[24px] w-[24px] rounded-full bg-white shadow-md transition-all duration-200"></div>
                <input 
                  type="checkbox" 
                  className="peer sr-only" 
                  checked={protectionEnabled}
                  onChange={(e) => setProtectionEnabled(e.target.checked)}
                />
              </label>
            </div>
          </div>

          {/* Primary Action */}
          <button 
            onClick={onComplete}
            className="w-full flex items-center justify-center gap-2 rounded-xl h-14 bg-primary hover:bg-primary/90 text-white text-lg font-bold shadow-lg shadow-primary/25 transition-all active:scale-[0.98]"
          >
            <span>Finish &amp; Open Dashboard</span>
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </button>
          <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-4">
            By clicking Finish, you agree to our <Link className="underline hover:text-primary" to="/terms-of-service">Terms of Service</Link>.
          </p>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="mt-8 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary/30"></div>
        <div className="w-2 h-2 rounded-full bg-primary/30"></div>
        <div className="w-8 h-2 rounded-full bg-primary"></div>
      </div>
    </div>
  );
}
