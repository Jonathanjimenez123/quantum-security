import { auth } from '../firebase';
import React from 'react';

interface AdminAnalyticsProps {
  onBack: () => void;
}

export default function AdminAnalytics({ onBack }: AdminAnalyticsProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased overflow-hidden">
      <div className="flex h-screen w-full overflow-hidden">
        <div className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-[#111318] flex flex-col justify-between p-4">
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 items-center px-2 cursor-pointer" onClick={onBack}>
              <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-slate-700" data-alt="Admin user profile picture" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
              <div className="flex flex-col">
                <h1 className="text-slate-900 dark:text-white text-base font-bold leading-normal">Security Admin</h1>
                <p className="text-slate-500 dark:text-[#9da6b9] text-xs font-normal leading-normal">Enterprise Console</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary text-white cursor-pointer" onClick={onBack}>
                <span className="material-symbols-outlined">dashboard</span>
                <p className="text-sm font-medium leading-normal">Panel de Control</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-[#9da6b9] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
                <span className="material-symbols-outlined">security</span>
                <p className="text-sm font-medium leading-normal">Threat Logs</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-[#9da6b9] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
                <span className="material-symbols-outlined">group</span>
                <p className="text-sm font-medium leading-normal">User Management</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-[#9da6b9] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
                <span className="material-symbols-outlined">description</span>
                <p className="text-sm font-medium leading-normal">Policies</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-[#9da6b9] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
                <span className="material-symbols-outlined">settings</span>
                <p className="text-sm font-medium leading-normal">Configuración</p>
              </div>
            </div>
          </div>
          <div className="px-2 pb-2">
            <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                <span className="text-xs font-medium dark:text-slate-300">System Healthy</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '98%' }}></div>
              </div>
              <p className="text-[10px] mt-1 text-slate-500 text-right">99.9% Uptime</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col h-full overflow-y-auto bg-background-light dark:bg-background-dark">
          <header className="flex flex-col gap-4 px-8 pt-8 pb-4">
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Security Overview</h2>
                <p className="text-slate-500 dark:text-[#9da6b9] text-sm">Real-time phishing threat analysis and protection metrics.</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <span className="material-symbols-outlined text-lg">download</span>
                  Export Report
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors">
                  <span className="material-symbols-outlined text-lg">refresh</span>
                  Refresh Data
                </button>
              </div>
            </div>
          </header>
          <div className="px-8 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
                <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl text-primary">shield_person</span>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-[#9da6b9] text-sm font-medium">Total Users Protected</p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">12,450</h3>
                </div>
                <div className="flex items-center gap-1 text-green-500 text-sm font-medium">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  <span>+15% vs last week</span>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
                <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl text-primary">block</span>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-[#9da6b9] text-sm font-medium">Threats Blocked (24h)</p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">843</h3>
                </div>
                <div className="flex items-center gap-1 text-green-500 text-sm font-medium">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  <span>+23% vs last week</span>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
                <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl text-primary">psychology</span>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-[#9da6b9] text-sm font-medium">Avg AI Confidence</p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">96.4%</h3>
                </div>
                <div className="flex items-center gap-1 text-orange-500 text-sm font-medium">
                  <span className="material-symbols-outlined text-sm">trending_down</span>
                  <span>-0.2% vs last week</span>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
                <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl text-primary">warning</span>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-[#9da6b9] text-sm font-medium">Critical Alerts</p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">12</h3>
                </div>
                <div className="flex items-center gap-1 text-orange-500 text-sm font-medium">
                  <span className="material-symbols-outlined text-sm">trending_down</span>
                  <span>-5% vs last week</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row flex-1 px-8 pb-8 gap-6 min-h-0">
            <div className="flex flex-col flex-1 gap-6 min-w-0">
              <div className="flex-1 min-h-[400px] rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col">
                <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center z-10 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white">Global Threat Origin Map</h3>
                  <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 px-2">search</span>
                    <input className="bg-transparent border-none text-sm focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-400 w-32 md:w-48" placeholder="Buscar region..." type="text" />
                  </div>
                </div>
                <div className="relative w-full h-full bg-slate-900">
                  <div className="absolute inset-0 bg-cover bg-center opacity-60" data-alt="Dark blue abstract world map with glowing nodes showing data connections" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                  <div className="absolute inset-0 p-8">
                    <div className="absolute top-[30%] left-[25%] group cursor-pointer">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute"></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full relative border-2 border-white dark:border-slate-900"></div>
                      <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20">
                        High activity: North America
                      </div>
                    </div>
                    <div className="absolute top-[45%] left-[55%] group cursor-pointer">
                      <div className="w-4 h-4 bg-orange-500 rounded-full absolute opacity-50"></div>
                      <div className="w-2 h-2 bg-orange-500 rounded-full relative border border-white dark:border-slate-900 top-1 left-1"></div>
                      <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20">
                        Medium activity: Europe
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                      <button className="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 rounded-lg shadow-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                        <span className="material-symbols-outlined text-lg">add</span>
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-800 rounded-lg shadow-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                        <span className="material-symbols-outlined text-lg">remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-64">
                <div className="rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm p-5 flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-slate-900 dark:text-white">Top Targeted Departments</h3>
                    <span className="text-xs text-slate-500 dark:text-[#9da6b9]">Last 30 Days</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-3">
                    <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                      <span className="text-xs font-medium text-slate-500 dark:text-[#9da6b9] text-right">Finance</span>
                      <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                      <span className="text-xs font-medium text-slate-500 dark:text-[#9da6b9] text-right">HR</span>
                      <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full opacity-80" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                      <span className="text-xs font-medium text-slate-500 dark:text-[#9da6b9] text-right">Engineering</span>
                      <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full opacity-60" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                      <span className="text-xs font-medium text-slate-500 dark:text-[#9da6b9] text-right">Sales</span>
                      <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full opacity-40" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm p-5 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-slate-900 dark:text-white">Threat Categories</h3>
                    <span className="text-xs text-slate-500 dark:text-[#9da6b9]">Distribution</span>
                  </div>
                  <div className="flex flex-1 items-center justify-center gap-6">
                    <div className="relative w-32 h-32 rounded-full border-[12px] border-slate-100 dark:border-slate-800 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-[12px] border-primary border-t-transparent border-r-transparent -rotate-45" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
                      <div className="absolute inset-0 rounded-full border-[12px] border-purple-500 border-l-transparent border-b-transparent rotate-45 opacity-70" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}></div>
                      <div className="text-center">
                        <span className="block text-2xl font-bold text-slate-900 dark:text-white">843</span>
                        <span className="text-[10px] text-slate-500 dark:text-[#9da6b9]">Total</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-xs text-slate-600 dark:text-[#9da6b9]">NLP Urgency (55%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <span className="text-xs text-slate-600 dark:text-[#9da6b9]">Typosquatting (25%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                        <span className="text-xs text-slate-600 dark:text-[#9da6b9]">Others (20%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm p-5">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">SIEM Integration &amp; Log Export</h3>
                    <p className="text-xs text-slate-500 dark:text-[#9da6b9] mt-1">Configure external log streaming and manual export formats.</p>
                  </div>
                  <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-3 py-1.5 rounded-full border border-green-200 dark:border-green-800">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-green-700 dark:text-green-400">Stream Healthy</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">cloud_download</span>
                      Export Logs
                    </h4>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                      <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">Select Format</label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <select className="w-full bg-white dark:bg-surface-dark border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5">
                            <option value="json">JSON (JavaScript Object Notation)</option>
                            <option value="cef">CEF (Common Event Format)</option>
                            <option value="syslog">Syslog (RFC 5424)</option>
                          </select>
                        </div>
                        <button className="px-4 py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
                          Export
                        </button>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-2">Export includes data from the last 24 hours unless filtered otherwise.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">hub</span>
                      Connector Configuration
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center gap-2 text-center hover:border-primary/50 cursor-pointer transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm text-slate-700 dark:text-slate-300 group-hover:text-primary">
                          <span className="material-symbols-outlined text-lg">data_object</span>
                        </div>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-200">Splunk</span>
                        <span className="text-[10px] text-green-600 dark:text-green-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Active
                        </span>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center gap-2 text-center hover:border-primary/50 cursor-pointer transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm text-slate-700 dark:text-slate-300 group-hover:text-primary">
                          <span className="material-symbols-outlined text-lg">security</span>
                        </div>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-200">Sentinel</span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500">Configure</span>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center gap-2 text-center hover:border-primary/50 cursor-pointer transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm text-slate-700 dark:text-slate-300 group-hover:text-primary">
                          <span className="material-symbols-outlined text-lg">search</span>
                        </div>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-200">Elastic</span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500">Configure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-4">
              <div className="rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-full overflow-hidden">
                <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-800/30">
                  <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    Live Threat Feed
                  </h3>
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-lg">filter_list</span>
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-2 space-y-2">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 transition-all cursor-pointer group">
                    <div className="flex justify-between items-start mb-1">
                      <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">Critical</span>
                      <span className="text-[10px] text-slate-400">Just now</span>
                    </div>
                    <p className="text-xs text-slate-800 dark:text-slate-200 font-medium mb-1">Phishing Attempt Blocked</p>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined text-[12px]">person</span>
                      <span>user@finance.corp</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 transition-all cursor-pointer group">
                    <div className="flex justify-between items-start mb-1">
                      <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">High</span>
                      <span className="text-[10px] text-slate-400">2m ago</span>
                    </div>
                    <p className="text-xs text-slate-800 dark:text-slate-200 font-medium mb-1">Suspicious Login Pattern</p>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined text-[12px]">public</span>
                      <span>IP: 192.168.1.45 (RU)</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 transition-all cursor-pointer group">
                    <div className="flex justify-between items-start mb-1">
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">Info</span>
                      <span className="text-[10px] text-slate-400">15m ago</span>
                    </div>
                    <p className="text-xs text-slate-800 dark:text-slate-200 font-medium mb-1">Policy Update Applied</p>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined text-[12px]">system_update</span>
                      <span>Global Policy v2.4</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 transition-all cursor-pointer group">
                    <div className="flex justify-between items-start mb-1">
                      <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">Medium</span>
                      <span className="text-[10px] text-slate-400">24m ago</span>
                    </div>
                    <p className="text-xs text-slate-800 dark:text-slate-200 font-medium mb-1">Typosquatting Domain</p>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined text-[12px]">link_off</span>
                      <span>goggle-auth.com</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 transition-all cursor-pointer group">
                    <div className="flex justify-between items-start mb-1">
                      <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">Critical</span>
                      <span className="text-[10px] text-slate-400">32m ago</span>
                    </div>
                    <p className="text-xs text-slate-800 dark:text-slate-200 font-medium mb-1">Mass Phishing Campaign</p>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined text-[12px]">group_off</span>
                      <span>Target: HR Department</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30 text-center">
                  <button className="text-xs font-medium text-primary hover:text-blue-400 transition-colors w-full">View All Logs</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
