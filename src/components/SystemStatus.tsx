import React from 'react';
import { Link } from 'react-router-dom';

interface SystemStatusProps {
  onBack: () => void;
}

export default function SystemStatus({ onBack }: SystemStatusProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative flex flex-col w-full min-h-screen overflow-x-hidden">
        <div className="flex flex-col grow">
          <header className="border-b border-slate-200 dark:border-slate-800 px-6 lg:px-40 py-4 flex items-center justify-between sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
            <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
              <div className="text-primary size-8 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">shield_person</span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">PhishGuard <span className="font-light opacity-70">Estado</span></h2>
            </div>
            <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
              <nav className="flex items-center gap-6">
                <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
                <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" to='/panel'>Incidents</Link>
                <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" to="/apidocumentation">API Docs</Link>
              </nav>
              <button className="bg-primary text-white text-sm font-bold h-10 px-6 rounded-lg hover:brightness-110 transition-all flex items-center">
                Subscribe to Updates
              </button>
              <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-300 dark:border-slate-700">
                <span className="material-symbols-outlined text-slate-500">account_circle</span>
              </div>
            </div>
          </header>

          <main className="max-w-6xl mx-auto w-full px-6 py-10 lg:py-16">
            <section className="mb-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">All Systems Operational</h1>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">Real-time monitoring and historical uptime reports for the PhishGuard core infrastructure and security engines.</p>
                </div>
                <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-4 py-2 rounded-full border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider">Live Monitoring</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Overall Uptime</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">99.991%</p>
                  <div className="mt-2 text-xs font-bold text-emerald-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">trending_up</span> +0.002%
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Active Incidents</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">0</p>
                  <div className="mt-2 text-xs font-bold text-slate-400 flex items-center gap-1">
                    No impact detected
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Avg Latency</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">38ms</p>
                  <div className="mt-2 text-xs font-bold text-orange-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">trending_down</span> -4ms vs avg
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">API Success Rate</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">100%</p>
                  <div className="mt-2 text-xs font-bold text-slate-400 flex items-center gap-1">
                    Last 24 hours
                  </div>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                    Core Infrastructure
                  </h3>
                  <span className="text-xs text-slate-500">Refreshed: Just now</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center justify-between group hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined">psychology</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">NLP Inference Engine</h4>
                        <p className="text-xs text-slate-500">Global traffic distribution</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="hidden md:flex gap-1">
                        <div className="h-6 w-1 rounded-full bg-emerald-500 opacity-20"></div>
                        <div className="h-6 w-1 rounded-full bg-emerald-500 opacity-40"></div>
                        <div className="h-6 w-1 rounded-full bg-emerald-500"></div>
                        <div className="h-6 w-1 rounded-full bg-emerald-500"></div>
                        <div className="h-6 w-1 rounded-full bg-emerald-500"></div>
                      </div>
                      <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">Operational</span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center justify-between group hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined">database</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">Database Clusters</h4>
                        <p className="text-xs text-slate-500">Primary and Replica Sync</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="hidden md:flex gap-1">
                        <div className="h-6 w-1 rounded-full bg-emerald-500"></div>
                        <div className="h-6 w-1 rounded-full bg-emerald-500"></div>
                        <div className="h-6 w-1 rounded-full bg-emerald-500"></div>
                        <div className="h-6 w-1 rounded-full bg-emerald-500"></div>
                        <div className="h-6 w-1 rounded-full bg-emerald-500"></div>
                      </div>
                      <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">Operational</span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center justify-between group hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined">dns</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">Update Servers</h4>
                        <p className="text-xs text-slate-500">Content distribution network</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="hidden md:flex gap-1">
                        <div className="h-6 w-1 rounded-full bg-emerald-500"></div>
                        <div className="h-6 w-1 rounded-full bg-emerald-500"></div>
                        <div className="h-6 w-1 rounded-full bg-orange-400"></div>
                        <div className="h-6 w-1 rounded-full bg-emerald-500"></div>
                        <div className="h-6 w-1 rounded-full bg-emerald-500"></div>
                      </div>
                      <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">Operational</span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center justify-between group hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined">router</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">API Gateway</h4>
                        <p className="text-xs text-slate-500">Public endpoints &amp; Auth</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="hidden md:flex gap-1">
                        <div className="h-6 w-1 rounded-full bg-emerald-500"></div>
                        <div className="h-6 w-1 rounded-full bg-emerald-500"></div>
                        <div className="h-6 w-1 rounded-full bg-emerald-500"></div>
                        <div className="h-6 w-1 rounded-full bg-emerald-500"></div>
                        <div className="h-6 w-1 rounded-full bg-emerald-500"></div>
                      </div>
                      <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">Operational</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">bar_chart</span>
                    Model Performance
                  </h3>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl flex flex-col h-[356px]">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500 uppercase font-bold">Detection Speed</span>
                      <span className="text-2xl font-bold text-primary">12ms</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-500 uppercase font-bold">Confidence</span>
                      <span className="text-2xl font-bold text-emerald-500">99.8%</span>
                    </div>
                  </div>
                  <div className="flex-1 w-full flex items-end gap-1 mb-4">
                    <div className="bg-primary/20 hover:bg-primary transition-all w-full h-[60%] rounded-t" title="12ms"></div>
                    <div className="bg-primary/20 hover:bg-primary transition-all w-full h-[65%] rounded-t" title="14ms"></div>
                    <div className="bg-primary/20 hover:bg-primary transition-all w-full h-[55%] rounded-t" title="11ms"></div>
                    <div className="bg-primary/20 hover:bg-primary transition-all w-full h-[70%] rounded-t" title="15ms"></div>
                    <div className="bg-primary hover:bg-primary transition-all w-full h-[50%] rounded-t" title="10ms"></div>
                    <div className="bg-primary/20 hover:bg-primary transition-all w-full h-[62%] rounded-t" title="13ms"></div>
                    <div className="bg-primary/20 hover:bg-primary transition-all w-full h-[58%] rounded-t" title="12ms"></div>
                    <div className="bg-primary/20 hover:bg-primary transition-all w-full h-[45%] rounded-t" title="9ms"></div>
                    <div className="bg-primary/20 hover:bg-primary transition-all w-full h-[52%] rounded-t" title="11ms"></div>
                    <div className="bg-primary/20 hover:bg-primary transition-all w-full h-[55%] rounded-t" title="12ms"></div>
                    <div className="bg-primary/20 hover:bg-primary transition-all w-full h-[60%] rounded-t" title="13ms"></div>
                    <div className="bg-primary/20 hover:bg-primary transition-all w-full h-[68%] rounded-t" title="15ms"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                    <span>12:00 PM</span>
                    <span>Latest</span>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">API Health Index</span>
                      <span className="font-bold text-white">Excellent</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">history</span>
                  Incident History
                </h3>
              </div>
              <div className="space-y-6">
                <div className="relative pl-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
                  <div className="absolute left-0 top-1 size-6 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center">
                    <div className="size-2 rounded-full bg-slate-400"></div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">September 24, 2026</h4>
                  <p className="text-sm text-slate-500 mb-4">No incidents reported on this day.</p>
                </div>

                <div className="relative pl-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
                  <div className="absolute left-0 top-1 size-6 rounded-full bg-orange-100 dark:bg-orange-900/30 border-2 border-orange-500 flex items-center justify-center">
                    <span className="material-symbols-outlined text-orange-500 text-[14px]">priority_high</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">September 23, 2026</h4>
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-xl">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-bold text-orange-500 uppercase text-xs tracking-widest">Degraded Performance - Resolved</h5>
                      <span className="text-xs text-slate-500 italic">Duration: 42 minutes</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                      The NLP Inference Engine experienced increased latency due to a scheduled model transition. While detection remained active, response times were temporarily increased for 15% of European traffic.
                    </p>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="text-[10px] font-black text-slate-500 mt-1 min-w-[70px]">14:20 UTC</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400"><strong>Resolved:</strong> Model synchronization complete. All regional clusters are now operating at sub-20ms latency.</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-[10px] font-black text-slate-500 mt-1 min-w-[70px]">13:45 UTC</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400"><strong>Monitoring:</strong> Fix deployed to EU-West clusters. Latency levels returning to normal baseline.</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-[10px] font-black text-slate-500 mt-1 min-w-[70px]">13:38 UTC</div>
                        <p className="text-xs text-slate-600 dark:text-slate-400"><strong>Investigating:</strong> Reports of high latency in the core detection API.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 size-6 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center">
                    <div className="size-2 rounded-full bg-slate-400"></div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">September 22, 2026</h4>
                  <p className="text-sm text-slate-500">No incidents reported on this day.</p>
                </div>
              </div>
              <div className="mt-12 flex justify-center">
                <button className="flex items-center gap-2 text-primary font-bold hover:underline transition-all">
                  <span className="material-symbols-outlined">history_toggle_off</span>
                  View full incident history
                </button>
              </div>
            </section>
          </main>

          <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 py-12 px-6 lg:px-40">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-3 opacity-60">
                <div className="text-primary size-6 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">shield_person</span>
                </div>
                <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white uppercase">PhishGuard Security</span>
              </div>
              <div className="flex gap-8 text-sm text-slate-500 font-medium">
                <Link className="hover:text-primary transition-colors" to="/privacy-compliance">Privacy Policy</Link>
                <Link className="hover:text-primary transition-colors" to='/panel'>Security Center</Link>
                <Link className="hover:text-primary transition-colors" to="/terms-of-service">Terms of Service</Link>
              </div>
              <div className="text-sm text-slate-400">
                creada en 2026 Jonathan Jimenez Escobar</div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
