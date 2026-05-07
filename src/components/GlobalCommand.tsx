import React from 'react';
import { Link } from 'react-router-dom';

interface GlobalCommandProps {
  onBack: () => void;
}

export default function GlobalCommand({ onBack }: GlobalCommandProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col">
      <header className="flex items-center justify-between border-b border-primary/20 bg-background-light dark:bg-background-dark/80 backdrop-blur-md px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-primary cursor-pointer" onClick={onBack}>
            <span className="material-symbols-outlined text-3xl fill-1">shield_with_heart</span>
            <h1 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight">PhishGuard <span className="text-primary font-light">Global Command</span></h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link className="text-sm font-medium text-primary border-b-2 border-primary pb-1" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
            <Link className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" to='/informes'>Threat Intel</Link>
            <Link className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" to='/panel'>Branch Analytics</Link>
            <Link className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" to='/panel'>AI Insights</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input className="bg-primary/5 border border-primary/20 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none w-64 text-slate-100" placeholder="Buscar infrastructure..." type="text"/>
          </div>
          <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background-dark"></span>
          </button>
          <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white border-2 border-primary/20" data-alt="User profile avatar placeholder">
            JD
          </div>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        <aside className="w-72 border-r border-primary/10 bg-background-light dark:bg-background-dark/50 hidden xl:flex flex-col p-6 gap-8 overflow-y-auto custom-scrollbar">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">High-Risk Regions</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-red-500">public</span>
                  <div>
                    <p className="text-sm font-semibold">East Asia</p>
                    <p className="text-[10px] text-red-400">Critical Threat Level</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-red-500">89%</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-orange-500">public</span>
                  <div>
                    <p className="text-sm font-semibold">Eastern Europe</p>
                    <p className="text-[10px] text-orange-400">High Elevated</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-orange-500">64%</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-yellow-500">public</span>
                  <div>
                    <p className="text-sm font-semibold">North America</p>
                    <p className="text-[10px] text-yellow-400">Active Monitoring</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-yellow-500">42%</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Recent Global Alerts</h3>
            <div className="space-y-3">
              <div className="p-3 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <p className="text-xs font-bold">14:22:05 - Singapore</p>
                <p className="text-[11px] text-slate-400 mt-1">Massive credential harvesting attempt blocked at regional HQ.</p>
              </div>
              <div className="p-3 border-l-4 border-red-500 bg-red-500/5 rounded-r-lg">
                <p className="text-xs font-bold">14:18:12 - London</p>
                <p className="text-[11px] text-slate-400 mt-1">CEO impersonation spear-phishing detected. AI-Isolated.</p>
              </div>
              <div className="p-3 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <p className="text-xs font-bold">13:55:30 - São Paulo</p>
                <p className="text-[11px] text-slate-400 mt-1">New phishing domain fingerprint matched and blacklisted globally.</p>
              </div>
              <div className="p-3 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <p className="text-xs font-bold">13:40:01 - Tokyo</p>
                <p className="text-[11px] text-slate-400 mt-1">Multi-vector campaign neutralized. Originating IP: 185.x.x.x</p>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-blue-700 text-white">
              <p className="text-xs font-medium opacity-80">AI Security Score</p>
              <p className="text-2xl font-bold mt-1">98.4</p>
              <div className="w-full bg-white/20 h-1 rounded-full mt-3">
                <div className="bg-white h-full rounded-full w-[98%]"></div>
              </div>
              <p className="text-[10px] mt-2 italic">Optimal protection status confirmed by Sentinel AI.</p>
            </div>
          </div>
        </aside>

        <section className="flex-1 flex flex-col p-6 gap-6 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark border border-primary/10 shadow-sm flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-8xl">verified_user</span>
              </div>
              <p className="text-slate-500 text-sm font-medium">Total Global Threats Neutralized</p>
              <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">1,284,502</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="flex items-center text-emerald-500 text-sm font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                  <span className="material-symbols-outlined text-sm">trending_up</span> 12.4%
                </span>
                <span className="text-slate-500 text-xs">vs last 24h</span>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark border border-primary/10 shadow-sm flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-8xl">timer</span>
              </div>
              <p className="text-slate-500 text-sm font-medium">Average Mitigation Time</p>
              <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">14.2s</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="flex items-center text-emerald-500 text-sm font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                  <span className="material-symbols-outlined text-sm">trending_down</span> 4.1%
                </span>
                <span className="text-slate-500 text-xs">Faster than average</span>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-background-light dark:bg-background-dark border border-primary/10 shadow-sm flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-8xl">psychology</span>
              </div>
              <p className="text-slate-500 text-sm font-medium">AI Predictive Accuracy</p>
              <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">99.8%</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="flex items-center text-primary text-sm font-bold bg-primary/10 px-2 py-0.5 rounded">
                  <span className="material-symbols-outlined text-sm">check_circle</span> Verified
                </span>
                <span className="text-slate-500 text-xs">Continuous learning active</span>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-[500px] rounded-2xl bg-background-light dark:bg-background-dark border border-primary/20 relative overflow-hidden shadow-2xl flex flex-col">
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #135bec 0%, transparent 70%)' }}></div>
            <div className="p-6 flex items-center justify-between relative z-10 bg-background-dark/40 backdrop-blur-sm border-b border-primary/10">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">public</span>
                <div>
                  <h2 className="text-lg font-bold">Global Threat Map</h2>
                  <p className="text-xs text-slate-400">Live visualization of cross-border attack vectors</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-background-dark border border-primary/20 p-1 rounded-lg">
                <button className="px-3 py-1.5 text-xs font-bold rounded bg-primary text-white">Live Feed</button>
                <button className="px-3 py-1.5 text-xs font-bold text-slate-400 hover:text-slate-200">Historical</button>
              </div>
            </div>
            <div className="flex-1 relative bg-[#0a0f1a]" data-alt="Stylized dark world map with neon attack lines connecting global points" data-location="Global">
              <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1000 500">
                <path className="animate-pulse" d="M150,100 Q400,50 600,150" fill="none" stroke="#135bec" strokeDasharray="5,5" strokeWidth="2"></path>
                <path d="M800,200 Q600,300 300,400" fill="none" stroke="#ef4444" strokeDasharray="3,3" strokeWidth="1"></path>
                <path d="M100,350 Q300,200 850,120" fill="none" stroke="#135bec" strokeWidth="1.5"></path>
                <circle cx="150" cy="100" fill="#135bec" r="4"></circle>
                <circle cx="600" cy="150" fill="#135bec" r="4"></circle>
                <circle cx="800" cy="200" fill="#ef4444" r="5">
                  <animate attributeName="r" dur="2s" repeatCount="indefinite" values="3;7;3"></animate>
                </circle>
                <circle cx="300" cy="400" fill="#135bec" r="4"></circle>
                <circle cx="100" cy="350" fill="#135bec" r="4"></circle>
                <circle cx="850" cy="120" fill="#135bec" r="4"></circle>
              </svg>
              <div className="absolute left-10 bottom-10 space-y-4">
                <div className="bg-background-dark/90 backdrop-blur border border-primary/30 p-4 rounded-xl shadow-xl w-64">
                  <p className="text-xs font-bold uppercase text-slate-500 mb-2 tracking-widest">Active Nodes</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> London Hub</span>
                      <span className="text-slate-400">92ms</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> New York Hub</span>
                      <span className="text-slate-400">45ms</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span> Singapore Hub</span>
                      <span className="text-slate-400 text-red-400">Under Attack</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-10 top-10 flex flex-col gap-2">
                <button className="w-10 h-10 bg-background-dark/80 backdrop-blur border border-primary/20 flex items-center justify-center rounded-lg text-slate-400 hover:text-white transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
                <button className="w-10 h-10 bg-background-dark/80 backdrop-blur border border-primary/20 flex items-center justify-center rounded-lg text-slate-400 hover:text-white transition-colors">
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <button className="w-10 h-10 bg-background-dark/80 backdrop-blur border border-primary/20 flex items-center justify-center rounded-lg text-primary mt-2">
                  <span className="material-symbols-outlined">my_location</span>
                </button>
              </div>
            </div>
            <div className="p-4 bg-background-dark/60 backdrop-blur-sm border-t border-primary/10 flex items-center justify-between text-[11px] text-slate-500 z-10">
              <div className="flex gap-6">
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Secured Inbound</span>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Blocked Threats</span>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Targeted Branch</span>
              </div>
              <p className="italic">System status: All services operational. AI Sentinel Core v4.2.0 active.</p>
            </div>
          </div>
        </section>

        <aside className="w-80 border-l border-primary/10 bg-background-light dark:bg-background-dark/50 hidden 2xl:flex flex-col p-6 gap-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Branch Health Index</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span>New York Office</span>
                <span className="text-emerald-500">Normal</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[95%]"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span>London HQ</span>
                <span className="text-emerald-500">Normal</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[98%]"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span>Singapore Regional</span>
                <span className="text-red-500">High Activity</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-red-500 h-full w-[42%]"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span>Tokyo Branch</span>
                <span className="text-yellow-500">Elevated</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-yellow-500 h-full w-[75%]"></div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-primary/10 pt-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Threat Vectors Distribution</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin-slow"></div>
                <div>
                  <p className="text-sm font-bold">Email Phishing</p>
                  <p className="text-[10px] text-slate-400">72% of total threats</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-4 border-emerald-500 border-r-transparent"></div>
                <div>
                  <p className="text-sm font-bold">SMS Spoofing</p>
                  <p className="text-[10px] text-slate-400">18% of total threats</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-4 border-slate-700 border-b-transparent"></div>
                <div>
                  <p className="text-sm font-bold">Voice/Vishing</p>
                  <p className="text-[10px] text-slate-400">10% of total threats</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto p-4 rounded-xl border border-primary/20 bg-primary/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
              <span className="text-xs font-bold">Sentinel AI Insight</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Analyzing pattern shift in APAC region. Recommending immediate update to SMS filtering protocols for Singapore branch. 
            </p>
            <button className="w-full mt-3 py-2 bg-primary hover:bg-primary/90 text-white text-[11px] font-bold rounded-lg transition-colors">
              Apply Recommended Defense
            </button>
          </div>
        </aside>
      </main>

      <footer className="border-t border-primary/10 bg-background-light dark:bg-background-dark/80 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            System Secured
          </span>
          <span>•</span>
          <span>Last Sync: 12 seconds ago</span>
          <span>•</span>
          <span className="font-mono">Node: PG-GLOBAL-01</span>
        </div>
        <div className="flex items-center gap-6">
          <Link className="text-[11px] text-slate-500 hover:text-primary" to="/privacy-compliance">Privacy Policy</Link>
          <Link className="text-[11px] text-slate-500 hover:text-primary" to='/panel'>System Logs</Link>
          <Link className="text-[11px] text-slate-500 hover:text-primary" to='/centro-ayuda'>Support Center</Link>
        </div>
      </footer>
    </div>
  );
}
