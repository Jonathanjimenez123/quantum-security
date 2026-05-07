import React from 'react';

interface OnboardingStep2Props {
  onNext: () => void;
  onSkip: () => void;
}

export default function OnboardingStep2({ onNext, onSkip }: OnboardingStep2Props) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center p-4 sm:p-8">
      {/* Main Container */}
      <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1 justify-center">
        <div className="flex flex-col md:flex-row bg-white dark:bg-[#1a2e21] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/5 min-h-[600px]">
          
          {/* Left: Visual/Illustration Area */}
          <div className="relative w-full md:w-1/2 bg-gradient-to-br from-[#1a2e21] to-[#111f15] p-8 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#13ec5b_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            {/* Browser Mockup */}
            <div className="relative w-full max-w-[320px] aspect-[4/3] bg-slate-800 rounded-lg shadow-lg border border-slate-700 flex flex-col overflow-hidden group">
              {/* Browser Header */}
              <div className="h-8 bg-slate-900 flex items-center px-3 gap-2 border-b border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 bg-slate-800 h-5 rounded mx-2"></div>
                {/* Toolbar Icons */}
                <div className="flex gap-2 items-center">
                  <span className="material-symbols-outlined text-slate-400 text-xs">extension</span>
                  <div className="relative">
                    <span className="material-symbols-outlined text-primary text-xs animate-pulse">verified_user</span>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
              
              {/* Browser Body */}
              <div className="flex-1 bg-slate-800 p-4 flex items-center justify-center relative">
                {/* Puzzle Menu Popover Mockup */}
                <div className="absolute top-2 right-2 w-48 bg-slate-700 rounded shadow-xl p-2 border border-slate-600 flex flex-col gap-2 z-10">
                  <div className="flex items-center justify-between p-1.5 bg-slate-600 rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px]">AI</div>
                      <div className="w-16 h-2 bg-slate-500 rounded"></div>
                    </div>
                    <span className="material-symbols-outlined text-primary text-sm">push_pin</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 opacity-50">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-slate-500"></div>
                      <div className="w-16 h-2 bg-slate-500 rounded"></div>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 text-sm">push_pin</span>
                  </div>
                </div>
                
                {/* Page Content Mockup */}
                <div className="w-full h-full flex flex-col gap-2 opacity-20">
                  <div className="w-1/3 h-4 bg-slate-500 rounded"></div>
                  <div className="w-full h-24 bg-slate-600 rounded"></div>
                  <div className="w-2/3 h-4 bg-slate-500 rounded"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <p className="text-primary/80 text-sm font-medium uppercase tracking-wider">Step 2: Pin Extension</p>
            </div>
          </div>
          
          {/* Right: Content Area */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="hidden md:block mb-6">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-primary/20">Step 2 of 3</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
                Pin for instant protection
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                Keep the shield visible in your toolbar to monitor real-time security status as you browse.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white font-bold border border-slate-200 dark:border-slate-700">1</div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Click the puzzle piece</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Locate the extensions icon in your browser toolbar.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white font-bold border border-slate-200 dark:border-slate-700">2</div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Find our extension</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Look for the shield icon in the list.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30">3</div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Click the pin icon</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Turn the pin blue/active to keep it visible.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={onNext}
                  className="flex-1 bg-primary hover:bg-green-400 text-slate-900 font-bold py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 group"
                >
                  <span>Next Step</span>
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
                <button 
                  onClick={onSkip}
                  className="sm:flex-none text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium py-3.5 px-6 transition-colors"
                >
                  Skip for now
                </button>
              </div>
              
              {/* Pagination Indicators */}
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <div aria-label="Step 1" className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors"></div>
                <div aria-label="Step 2 (Current)" className="w-8 h-2.5 rounded-full bg-primary transition-all"></div>
                <div aria-label="Step 3" className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
