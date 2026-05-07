import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface InteractiveChallengeProps {
  onBack: () => void;
  onComplete?: () => void;
}

export default function InteractiveChallenge({ onBack, onComplete }: InteractiveChallengeProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col overflow-hidden">
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-surface-border bg-background-dark px-6 py-3 shrink-0">
        <div className="flex items-center gap-4 cursor-pointer" onClick={onBack}>
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined text-3xl">shield_lock</span>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">PhishGuard Academy</h2>
        </div>
        <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-6">
            <Link className="text-text-secondary hover:text-white text-sm font-medium transition-colors" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
            <Link className="text-white text-sm font-medium" to='/entrenamiento-interactivo'>Training Modules</Link>
            <Link className="text-text-secondary hover:text-white text-sm font-medium transition-colors" to='/panel'>Leaderboard</Link>
          </div>
          <div className="h-6 w-px bg-surface-border"></div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-white">Alex Morgan</span>
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-8 bg-surface-dark border border-surface-border" data-alt="User profile avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Challenge Context & Tools */}
        <aside className="w-full md:w-[400px] lg:w-[450px] flex flex-col border-r border-surface-border bg-background-dark overflow-y-auto shrink-0 z-10 shadow-xl">
          {/* Progress Header */}
          <div className="p-6 border-b border-surface-border">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white text-sm font-bold uppercase tracking-wider">Level 1: Detection</span>
              <span className="text-primary text-sm font-bold">Question 3 of 10</span>
            </div>
            <div className="h-2 w-full bg-surface-dark rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-500 ease-out" style={{ width: '30%' }}></div>
            </div>
          </div>

          {/* Challenge Description */}
          <div className="p-6 flex-1 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold border border-red-500/20 mb-4">
                <span className="material-symbols-outlined text-sm">warning</span>
                Urgent Action Required
              </div>
              <h1 className="text-2xl font-bold text-white mb-3">Microsoft Login Attempt</h1>
              <p className="text-text-secondary leading-relaxed">
                Analyze the simulated page on the right. This page claims your account has been compromised. Look closely at the URL, the logo quality, and the overall layout.
              </p>
            </div>

            {/* AI Hints / Tools */}
            <div className="flex flex-col gap-4 mt-2">
              <h3 className="text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">smart_toy</span>
                AI Inspection Tools
              </h3>
              <button className="group flex items-start gap-4 p-4 rounded-xl bg-surface-dark border border-surface-border hover:border-primary/50 hover:bg-surface-border/50 transition-all text-left">
                <div className="p-2 rounded-lg bg-background-dark text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">link</span>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">Check URL Domain</h4>
                  <p className="text-text-secondary text-xs">Analyze the domain structure for subtle typos or mismatches.</p>
                </div>
              </button>
              <button className="group flex items-start gap-4 p-4 rounded-xl bg-surface-dark border border-surface-border hover:border-primary/50 hover:bg-surface-border/50 transition-all text-left">
                <div className="p-2 rounded-lg bg-background-dark text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">Verify SSL Certificate</h4>
                  <p className="text-text-secondary text-xs">Inspect the security certificate validity and issuer.</p>
                </div>
              </button>
              <button className="group flex items-start gap-4 p-4 rounded-xl bg-surface-dark border border-surface-border hover:border-primary/50 hover:bg-surface-border/50 transition-all text-left">
                <div className="p-2 rounded-lg bg-background-dark text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">image_search</span>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">Image Analysis</h4>
                  <p className="text-text-secondary text-xs">Scan logos and assets for pixelation or inconsistencies.</p>
                </div>
              </button>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-surface-border bg-surface-dark/30 backdrop-blur-sm sticky bottom-0">
            <button className="w-full flex items-center justify-center gap-2 text-primary font-bold text-sm hover:underline mb-4">
              <span className="material-symbols-outlined text-sm">lightbulb</span>
              Need a hint?
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={onComplete}
                className="col-span-1 py-3 px-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 font-bold hover:bg-red-500/20 hover:border-red-500/40 transition-all"
              >
                Phishing
              </button>
              <button 
                onClick={onComplete}
                className="col-span-1 py-3 px-4 rounded-lg bg-primary/10 border border-primary/20 text-primary font-bold hover:bg-primary/20 hover:border-primary/40 transition-all"
              >
                Safe
              </button>
              <button 
                onClick={onComplete}
                className="col-span-2 py-3 px-4 rounded-lg bg-surface-border text-white font-medium hover:bg-surface-border/80 transition-all"
              >
                Not Sure
              </button>
            </div>
          </div>
        </aside>

        {/* Right Side: Simulation Area */}
        <section className="flex-1 bg-neutral-900 relative overflow-hidden flex flex-col">
          {/* Browser Chrome Simulation */}
          <div className="bg-gray-800 p-2 flex items-center gap-3 border-b border-gray-700 shadow-md z-10">
            <div className="flex gap-1.5 ml-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 bg-gray-900 rounded-md flex items-center px-3 py-1.5 mx-4 border border-gray-700 group relative">
              <span className="material-symbols-outlined text-gray-500 text-sm mr-2">lock</span>
              <span className="text-gray-300 text-sm font-mono truncate">https://login.micros0ft-security-update.com/auth/login</span>
              {/* Tooltip for URL (Simulated interaction) */}
              <div className="absolute top-full left-0 mt-2 w-64 p-3 bg-surface-dark border border-primary/50 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-red-400 text-sm mt-0.5">error</span>
                  <div>
                    <p className="text-white text-xs font-bold">Suspicious Domain</p>
                    <p className="text-text-secondary text-[10px] mt-1">"micros0ft" contains a zero instead of the letter 'o'. This is a common homograph attack.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mr-2">
              <span className="material-symbols-outlined text-gray-400">menu</span>
            </div>
          </div>

          {/* Fake Website Content (Iframe simulation) */}
          <div className="flex-1 overflow-y-auto bg-white relative">
            {/* Background Pattern for Context */}
            <div className="absolute inset-0 z-0 bg-slate-50 flex items-center justify-center opacity-30">
              <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>
            <div className="relative z-10 w-full max-w-md mx-auto mt-20 p-12 bg-white shadow-2xl rounded-none sm:rounded-lg border border-gray-100">
              {/* Microsoft Logo Fake */}
              <div className="flex items-center gap-2 mb-6 group relative cursor-help">
                <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
                  <div className="bg-[#f25022]"></div>
                  <div className="bg-[#7fba00]"></div>
                  <div className="bg-[#00a4ef]"></div>
                  <div className="bg-[#ffb900]"></div>
                </div>
                <span className="text-gray-500 text-xl font-semibold">Microsoft</span>
                {/* Tooltip for Logo */}
                <div className="absolute -top-2 left-full ml-4 w-56 p-3 bg-surface-dark border border-primary/50 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    <div>
                      <p className="text-white text-xs font-bold">Logo Analysis</p>
                      <p className="text-text-secondary text-[10px] mt-1">The logo appears consistent with official branding. However, phishers often copy exact images.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="text-2xl font-semibold text-gray-800 mb-2">Sign in</h1>
              <p className="text-gray-600 mb-6 text-sm">to access your Outlook account</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1 relative group">
                  <input className="w-full px-3 py-2 border-b border-gray-600 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors bg-transparent" placeholder="Email, phone, or Skype" type="email" />
                  {/* Tooltip for Input */}
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full ml-4 w-56 p-3 bg-surface-dark border border-primary/50 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-sm mt-0.5">info</span>
                      <div>
                        <p className="text-white text-xs font-bold">Input Field</p>
                        <p className="text-text-secondary text-[10px] mt-1">Standard HTML input. No immediate scripts detected on focus.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 text-sm text-gray-500 pt-2">
                  <span>No account?</span>
                  <Link className="text-blue-600 hover:underline" to='/panel'>Create one!</Link>
                </div>
                <div className="text-sm text-blue-600 hover:underline cursor-pointer">
                  <Link to='/panel'>Sign in with a security key</Link>
                </div>
                <div className="pt-6 flex justify-end">
                  <button className="bg-[#0067b8] hover:bg-[#005da6] text-white px-8 py-2 min-w-[100px] font-semibold text-sm transition-colors shadow-sm">
                    Next
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-8 flex justify-center gap-6 text-xs text-gray-500 relative z-10">
              <span className="cursor-pointer hover:underline">Terms of use</span>
              <span className="cursor-pointer hover:underline">Privacy &amp; cookies</span>
              <span className="cursor-pointer hover:underline">...</span>
            </div>
          </div>

          {/* Overlay for "Learning Mode" indicator */}
          <div className="absolute top-4 right-4 bg-background-dark/90 text-white text-xs px-3 py-1.5 rounded-full border border-surface-border backdrop-blur-md shadow-lg flex items-center gap-2 pointer-events-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Live Simulation
          </div>
        </section>
      </main>
    </div>
  );
}
