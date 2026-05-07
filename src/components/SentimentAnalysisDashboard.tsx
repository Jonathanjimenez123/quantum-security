import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface SentimentAnalysisDashboardProps {
  onBack: () => void;
}

export default function SentimentAnalysisDashboard({ onBack }: SentimentAnalysisDashboardProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <header className="flex items-center justify-between border-b border-slate-200 dark:border-primary/20 px-10 py-4 bg-white dark:bg-background-dark sticky top-0 z-50">
          <div className="flex items-center gap-4 text-primary cursor-pointer" onClick={onBack}>
            <div className="size-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">shield_lock</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">PhishGuard AI</h2>
          </div>
          <div className="flex flex-1 justify-end gap-6 items-center">
            <label className="flex flex-col min-w-64 h-10">
              <div className="flex w-full flex-1 items-stretch rounded-lg bg-slate-100 dark:bg-primary/10 border border-slate-200 dark:border-primary/30">
                <div className="flex items-center justify-center pl-4 text-slate-500 dark:text-primary/60">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input className="w-full bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-primary/40 text-sm" placeholder="Scan URL or Message..." />
              </div>
            </label>
            <div className="flex gap-3">
              <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-primary/10 text-slate-700 dark:text-primary border border-slate-200 dark:border-primary/20">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
              </button>
              <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-primary/10 text-slate-700 dark:text-primary border border-slate-200 dark:border-primary/20">
                <span className="material-symbols-outlined text-[20px]">settings</span>
              </button>
              <div className="h-10 w-10 rounded-full border-2 border-primary overflow-hidden">
                <img className="w-full h-full object-cover" alt="User profile avatar with futuristic glow" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-1">
          <aside className="w-64 border-r border-slate-200 dark:border-primary/20 bg-white dark:bg-background-dark hidden lg:flex flex-col p-6 gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold text-slate-400 dark:text-primary/40 uppercase tracking-widest px-3">Engine Status</p>
              <div className="flex items-center gap-3 px-3 py-2 text-primary">
                <span className="material-symbols-outlined">psychology</span>
                <p className="text-sm font-semibold">NLP Engine v4.2</p>
              </div>
            </div>
            <nav className="flex flex-col gap-2">
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-primary/10 transition-all" to='/panel'>
                <span className="material-symbols-outlined">dashboard</span>
                <span className="text-sm font-medium">Resumen</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-white shadow-lg shadow-primary/20" to='/panel'>
                <span className="material-symbols-outlined">analytics</span>
                <span className="text-sm font-medium">Sentiment Radar</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-primary/10 transition-all" to='/informes'>
                <span className="material-symbols-outlined">history</span>
                <span className="text-sm font-medium">Scan History</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-primary/10 transition-all" to='/panel'>
                <span className="material-symbols-outlined">gavel</span>
                <span className="text-sm font-medium">Trigger Library</span>
              </Link>
            </nav>
            <div className="mt-auto bg-primary/10 rounded-xl p-4 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                <p className="text-xs font-bold text-primary">SECURITY MODE</p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Active monitoring for social engineering patterns is currently enabled.</p>
            </div>
          </aside>
          <main className="flex-1 p-8 overflow-y-auto">
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                  <h1 className="text-3xl font-bold dark:text-white tracking-tight">Sentiment Analysis Dashboard</h1>
                  <p className="text-slate-500 dark:text-primary/60 mt-1">Deep-scan results for: <span className="text-primary underline">https://portal-secure-verify.net/auth</span></p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-slate-200 dark:bg-primary/10 text-slate-700 dark:text-primary rounded-lg text-sm font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">download</span> Export Report
                  </button>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">refresh</span> Re-scan Content
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-primary/5 rounded-xl p-6 border border-slate-200 dark:border-primary/20 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <p className="text-slate-500 dark:text-primary/60 font-medium">Manipulation Score</p>
                    <span className="bg-red-500/20 text-red-500 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Critical</span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <p className="text-4xl font-bold dark:text-white">84<span className="text-xl text-slate-400">/100</span></p>
                    <span className="text-red-500 text-sm font-bold flex items-center"><span className="material-symbols-outlined text-sm">trending_up</span> +12%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-2 rounded-full mt-4 overflow-hidden">
                    <div className="bg-red-500 h-full rounded-full" style={{ width: '84%' }}></div>
                  </div>
                </div>
                <div className="bg-white dark:bg-primary/5 rounded-xl p-6 border border-slate-200 dark:border-primary/20 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <p className="text-slate-500 dark:text-primary/60 font-medium">NLP Confidence</p>
                    <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">High</span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <p className="text-4xl font-bold dark:text-white">98.2<span className="text-xl text-slate-400">%</span></p>
                    <span className="text-primary text-sm font-bold flex items-center"><span className="material-symbols-outlined text-sm">trending_up</span> +0.5%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-2 rounded-full mt-4 overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                <div className="bg-white dark:bg-primary/5 rounded-xl p-6 border border-slate-200 dark:border-primary/20 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <p className="text-slate-500 dark:text-primary/60 font-medium">Risk Factor</p>
                    <span className="bg-orange-500/20 text-orange-500 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Warning</span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <p className="text-4xl font-bold dark:text-white">High</p>
                  </div>
                  <p className="text-xs text-slate-400 mt-4 italic">Social engineering triggers identified in paragraph 2 &amp; 4.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-primary/5 rounded-xl p-6 border border-slate-200 dark:border-primary/20">
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">radar</span>
                    Psychological Trigger Radar
                  </h3>
                  <div className="relative h-64 rounded-lg flex items-center justify-center border border-primary/5" style={{ backgroundImage: 'radial-gradient(circle, #0b95da22 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 border border-primary/20 rounded-full"></div>
                      <div className="absolute w-32 h-32 border border-primary/30 rounded-full"></div>
                      <div className="absolute w-16 h-16 border border-primary/40 rounded-full"></div>
                    </div>
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary/60 uppercase">Urgency (92%)</div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary/60 uppercase">Fear (45%)</div>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-primary/60 uppercase -rotate-90">Authority (78%)</div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-primary/60 uppercase rotate-90">Scarcity (31%)</div>
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      <polygon fill="rgba(11, 149, 218, 0.3)" points="50,10 80,50 50,75 20,50" stroke="#0b95da" strokeWidth="1"></polygon>
                      <circle cx="50" cy="10" fill="#0b95da" r="1.5"></circle>
                      <circle cx="80" cy="50" fill="#0b95da" r="1.5"></circle>
                      <circle cx="50" cy="75" fill="#0b95da" r="1.5"></circle>
                      <circle cx="20" cy="50" fill="#0b95da" r="1.5"></circle>
                    </svg>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <span className="text-slate-500">Urgency: Malicious intent detected</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-slate-500">Authority: Spoofed corporate tone</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-primary/5 rounded-xl p-6 border border-slate-200 dark:border-primary/20">
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">timeline</span>
                    Real-time Sentiment Timeline
                  </h3>
                  <div className="relative h-64 w-full flex items-end justify-between gap-1 px-2">
                    <div className="w-full bg-primary/20 h-24 rounded-t-sm relative group cursor-help"><div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-background-dark text-[8px] px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">Neutral</div></div>
                    <div className="w-full bg-primary/20 h-32 rounded-t-sm"></div>
                    <div className="w-full bg-primary/20 h-28 rounded-t-sm"></div>
                    <div className="w-full bg-red-500/40 h-48 rounded-t-sm border-t-2 border-red-500"></div>
                    <div className="w-full bg-red-500/60 h-56 rounded-t-sm border-t-2 border-red-500"></div>
                    <div className="w-full bg-red-500/40 h-44 rounded-t-sm border-t-2 border-red-500"></div>
                    <div className="w-full bg-primary/20 h-32 rounded-t-sm"></div>
                    <div className="w-full bg-primary/30 h-36 rounded-t-sm"></div>
                    <div className="w-full bg-primary/20 h-24 rounded-t-sm"></div>
                    <div className="w-full bg-red-500/80 h-60 rounded-t-sm border-t-2 border-red-500"></div>
                    <div className="w-full bg-red-500/40 h-52 rounded-t-sm border-t-2 border-red-500"></div>
                    <div className="w-full bg-primary/20 h-20 rounded-t-sm"></div>
                  </div>
                  <div className="flex justify-between mt-4 text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                    <span>0s</span>
                    <span>Scanning Progress</span>
                    <span>Live</span>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-primary/5 rounded-xl border border-slate-200 dark:border-primary/20 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-primary/10 flex justify-between items-center">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">format_quote</span>
                    Manipulative Phrase Breakdown
                  </h3>
                  <span className="text-xs font-medium text-slate-500">7 Phrases Detected</span>
                </div>
                <div className="divide-y divide-slate-200 dark:divide-primary/20">
                  <div className="p-4 hover:bg-slate-50 dark:hover:bg-primary/10 transition-colors flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-sm dark:text-slate-100 font-medium italic">"Your account will be suspended in 24 hours if no action is taken."</p>
                      <div className="flex gap-2 mt-2">
                        <span className="bg-red-500/10 text-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded border border-red-500/20 uppercase">Urgency</span>
                        <span className="bg-orange-500/10 text-orange-500 text-[10px] font-bold px-1.5 py-0.5 rounded border border-orange-500/20 uppercase">Coercion</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 mb-1">Impact</p>
                      <div className="flex gap-0.5 justify-end">
                        <div className="w-1.5 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-1.5 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-1.5 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-1.5 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-1.5 h-3 bg-slate-300 dark:bg-white/10 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-slate-50 dark:hover:bg-primary/10 transition-colors flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-sm dark:text-slate-100 font-medium italic">"Click here to verify your identity through our secure portal."</p>
                      <div className="flex gap-2 mt-2">
                        <span className="bg-blue-500/10 text-blue-500 text-[10px] font-bold px-1.5 py-0.5 rounded border border-blue-500/20 uppercase">Authority</span>
                        <span className="bg-primary/10 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded border border-primary/20 uppercase">Deceptive Link</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 mb-1">Impact</p>
                      <div className="flex gap-0.5 justify-end">
                        <div className="w-1.5 h-3 bg-orange-500 rounded-full"></div>
                        <div className="w-1.5 h-3 bg-orange-500 rounded-full"></div>
                        <div className="w-1.5 h-3 bg-orange-500 rounded-full"></div>
                        <div className="w-1.5 h-3 bg-slate-300 dark:bg-white/10 rounded-full"></div>
                        <div className="w-1.5 h-3 bg-slate-300 dark:bg-white/10 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-slate-50 dark:hover:bg-primary/10 transition-colors flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-sm dark:text-slate-100 font-medium italic">"Final notice: failure to update will result in legal action."</p>
                      <div className="flex gap-2 mt-2">
                        <span className="bg-red-500/10 text-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded border border-red-500/20 uppercase">Fear</span>
                        <span className="bg-red-500/10 text-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded border border-red-500/20 uppercase">Aggression</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 mb-1">Impact</p>
                      <div className="flex gap-0.5 justify-end">
                        <div className="w-1.5 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-1.5 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-1.5 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-1.5 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-1.5 h-3 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-primary/5 text-center">
                  <button className="text-primary text-sm font-bold hover:underline">View All Detected Triggers</button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
