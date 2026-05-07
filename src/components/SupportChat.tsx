import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface SupportChatProps {
  onBack: () => void;
}

export default function SupportChat({ onBack }: SupportChatProps) {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 overflow-hidden h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 h-16 shrink-0 z-20">
        <div className="flex items-center gap-4 text-slate-900 dark:text-white cursor-pointer" onClick={onBack}>
          <div className="size-8 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">shield_lock</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Shield Security Dashboard</h2>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Resumen</Link>
            <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" to='/informes'>Threat Log</Link>
            <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" to='/ajustes'>Configuración</Link>
            <Link className="text-primary font-bold text-sm" to='/centro-ayuda'>Support</Link>
          </nav>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
          <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary hover:bg-primary-hover text-white text-sm font-bold transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[18px] mr-2">radar</span>
            <span className="truncate">Scan Now</span>
          </button>
          <div className="bg-center bg-no-repeat bg-cover rounded-full size-9 ring-2 ring-slate-100 dark:ring-slate-800 cursor-pointer" data-alt="User profile avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:flex flex-col w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shrink-0 h-full overflow-y-auto">
          <div className="p-4 flex flex-col gap-6">
            {/* User/System Info */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
              <div className="bg-primary/10 text-primary flex items-center justify-center rounded-full size-10 shrink-0">
                <span className="material-symbols-outlined">security</span>
              </div>
              <div className="flex flex-col overflow-hidden">
                <h1 className="text-slate-900 dark:text-white text-sm font-bold truncate">Shield Secure</h1>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">v4.2.0 active</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-1">
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors group" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">home</span>
                <span className="text-sm font-medium">Home</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors group" to='/informes'>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">history</span>
                <span className="text-sm font-medium">Activity</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors group" to='/panel'>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">verified_user</span>
                <span className="text-sm font-medium">Protection</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors group" to='/panel'>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">public</span>
                <span className="text-sm font-medium">Network</span>
              </Link>
            </nav>

            <div className="h-px bg-slate-200 dark:bg-slate-800 my-2"></div>

            <nav className="flex flex-col gap-1">
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary-light dark:bg-primary/10 text-primary font-medium" to='/centro-ayuda'>
                <span className="material-symbols-outlined text-primary fill-current">support_agent</span>
                <span className="text-sm">Support Center</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors group" to='/ajustes'>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">settings</span>
                <span className="text-sm font-medium">Settings</span>
              </Link>
            </nav>
          </div>

          <div className="mt-auto p-4">
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl p-4 text-white shadow-lg shadow-blue-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Pro Plan</span>
                <span className="material-symbols-outlined text-sm">star</span>
              </div>
              <p className="text-sm font-medium mb-3">Your system is fully protected.</p>
              <button className="w-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold py-2 rounded transition-colors">View Report</button>
            </div>
          </div>
        </aside>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-950/50 relative">
          {/* Chat Header */}
          <div className="px-6 py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-10">
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">chat</span>
                Live Support
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Ticket #8294 - False Positive Report</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Agent Active
              </span>
              <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
            {/* Date Separator */}
            <div className="flex justify-center">
              <span className="text-xs font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Today, 10:23 AM</span>
            </div>

            {/* Bot Message */}
            <div className="flex gap-4 max-w-3xl">
              <div className="flex-shrink-0 size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-[20px]">smart_toy</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">Shield AI Agent</span>
                  <span className="text-xs text-slate-400">10:23 AM</span>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl rounded-tl-none p-4 shadow-sm text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  <p>Hello! I'm your automated security assistant. I noticed you're trying to report a blocked site. How can I help you today?</p>
                </div>
              </div>
            </div>

            {/* User Message */}
            <div className="flex flex-row-reverse gap-4 max-w-3xl ml-auto">
              <div className="flex-shrink-0 size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <img alt="User" className="w-full h-full object-cover" data-alt="User Avatar" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
              </div>
              <div className="flex flex-col gap-1.5 items-end">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-slate-400">10:24 AM</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">You</span>
                </div>
                <div className="bg-primary text-white rounded-2xl rounded-tr-none p-4 shadow-md shadow-blue-500/10 text-sm leading-relaxed">
                  <p>Hi, the extension blocked <span className="font-mono bg-white/20 px-1 py-0.5 rounded text-xs">legitimate-site.com</span> but I need to access it for work. Is this a false positive?</p>
                </div>
              </div>
            </div>

            {/* Bot Message with Action */}
            <div className="flex gap-4 max-w-3xl">
              <div className="flex-shrink-0 size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-[20px]">smart_toy</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">Shield AI Agent</span>
                  <span className="text-xs text-slate-400">10:24 AM</span>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl rounded-tl-none p-4 shadow-sm text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  <p className="mb-3">I can help with that. I can perform a deep scan of that URL right now to check for hidden phishing scripts or malware signatures that might have triggered the block.</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-primary/10 hover:text-primary hover:border-primary/30 border border-slate-200 dark:border-slate-700 rounded-lg transition-all text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-sm">search_check</span>
                      Analyze legitimate-site.com
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-red-50 hover:text-red-600 hover:border-red-200 border border-slate-200 dark:border-slate-700 rounded-lg transition-all text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-sm">block</span>
                      Keep Blocked
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Loading Indicator (Simulated) */}
            <div className="flex gap-4 max-w-3xl animate-pulse opacity-60">
              <div className="flex-shrink-0 size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-[20px]">smart_toy</span>
              </div>
              <div className="flex items-center gap-1 mt-3">
                <div className="size-2 bg-slate-400 rounded-full"></div>
                <div className="size-2 bg-slate-400 rounded-full"></div>
                <div className="size-2 bg-slate-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Chat Input Area */}
          <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-3 max-w-5xl mx-auto">
              {/* Input Wrapper */}
              <div className="relative flex items-end gap-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                <button className="p-2 text-slate-400 hover:text-primary transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700" title="Add attachment">
                  <span className="material-symbols-outlined text-[20px]">attach_file</span>
                </button>
                <textarea className="w-full bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white placeholder-slate-400 text-sm resize-none max-h-32 py-2.5" placeholder="Type your message..." rows={1}></textarea>
                <button className="p-2 text-slate-400 hover:text-amber-500 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700" title="Add emoji">
                  <span className="material-symbols-outlined text-[20px]">sentiment_satisfied</span>
                </button>
                <button className="p-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors shadow-sm mb-[1px]">
                  <span className="material-symbols-outlined text-[20px] block">send</span>
                </button>
              </div>
              <div className="flex justify-between items-center px-1">
                <p className="text-xs text-slate-400">Shift + Enter for new line</p>
                <button className="text-xs font-medium text-slate-500 hover:text-primary flex items-center gap-1 transition-colors">
                  Escalate to Human Agent
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar (Context) */}
        <aside className="hidden xl:flex flex-col w-80 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shrink-0 h-full overflow-y-auto">
          <div className="p-6 flex flex-col gap-6">
            {/* System Status */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">System Status</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="size-2 rounded-full bg-emerald-500"></div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Extension</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Active</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="size-2 rounded-full bg-emerald-500"></div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Phishing DB</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Updated</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="size-2 rounded-full bg-amber-500"></div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Network</span>
                  </div>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400">Checking...</span>
                </div>
              </div>
            </div>

            <hr className="border-slate-100 dark:border-slate-800" />

            {/* Common Solutions */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Common Solutions</h3>
              <div className="flex flex-col gap-2">
                <button className="text-left p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:bg-primary-light/50 dark:hover:bg-primary/5 transition-all group">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-primary mb-1">Whitelist a URL</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">How to add a trusted site to your exception list.</p>
                </button>
                <button className="text-left p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:bg-primary-light/50 dark:hover:bg-primary/5 transition-all group">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-primary mb-1">Report False Positive</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Steps to submit an incorrectly blocked site.</p>
                </button>
                <button className="text-left p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:bg-primary-light/50 dark:hover:bg-primary/5 transition-all group">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-primary mb-1">Update Definitions</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Manually trigger a database update.</p>
                </button>
              </div>
            </div>

            {/* Agent Profile Card (Small) */}
            <div className="mt-auto bg-primary/5 border border-primary/10 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white dark:bg-slate-800 p-1.5 rounded-lg shadow-sm">
                  <span className="material-symbols-outlined text-primary text-xl">support_agent</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Premium Support</p>
                  <p className="text-[10px] text-slate-500">24/7 Priority Access</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Wait time is currently less than 1 minute.</p>
              <button className="w-full py-1.5 bg-white dark:bg-slate-800 text-primary border border-slate-200 dark:border-slate-700 text-xs font-bold rounded shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Call Support</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
