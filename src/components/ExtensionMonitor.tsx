import React from 'react';

interface ExtensionMonitorProps {
  onBack: () => void;
}

export default function ExtensionMonitor({ onBack }: ExtensionMonitorProps) {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      {/* Sidebar */}
      <div className="w-full lg:w-64 flex-none bg-white dark:bg-[#111318] border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between">
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center gap-3 px-2">
            <div className="bg-primary/20 flex items-center justify-center rounded-lg size-10 text-primary">
              <span className="material-symbols-outlined">security</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 dark:text-white text-base font-bold leading-normal">AI Shield Admin</h1>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-normal">Enterprise Security</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <div 
              onClick={onBack}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              <p className="text-sm font-medium">Panel de Control</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-[20px] fill-1">extension</span>
              <p className="text-sm font-medium">Extension Monitor</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">warning</span>
              <p className="text-sm font-medium">Threat Log</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">policy</span>
              <p className="text-sm font-medium">Policy Settings</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">monitor_heart</span>
              <p className="text-sm font-medium">System Health</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Recommended Actions</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-500 text-sm">block</span>
                  <span className="text-xs font-medium text-orange-400">Suggest Disabling</span>
                </div>
                <span className="text-xs font-bold text-white bg-orange-600 px-1.5 py-0.5 rounded">12</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-sm">verified_user</span>
                  <span className="text-xs font-medium text-green-400">Whitelist Conflict</span>
                </div>
                <span className="text-xs font-bold text-white bg-green-600 px-1.5 py-0.5 rounded">3</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg" alt="Admin User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-medium text-slate-900 dark:text-white">Admin User</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Security Ops</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-background-light dark:bg-background-dark">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 p-6 lg:p-8">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Extension Compatibility Monitor</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm lg:text-base">Detect and manage browser extensions conflicting with AI Shield protocols.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined text-[18px]">history</span>
              <span>Log History</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
              <span className="material-symbols-outlined text-[18px]">radar</span>
              <span>Scan Now</span>
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 lg:px-8 mb-6">
          {/* Card 1 */}
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-[#1e2330] border border-slate-200 dark:border-slate-700/50 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Conflicts</p>
              <span className="material-symbols-outlined text-slate-400 dark:text-slate-500">bug_report</span>
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <p className="text-3xl font-bold text-slate-900 dark:text-white">142</p>
              <span className="text-xs font-medium text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded">+12%</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-[#1e2330] border border-red-500/20 dark:border-red-500/30 shadow-sm relative overflow-hidden group">
            <div className="absolute right-0 top-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-red-500">warning</span>
            </div>
            <div className="flex items-center justify-between relative z-10">
              <p className="text-red-600 dark:text-red-400 text-sm font-bold">Potentially Compromised</p>
              <span className="material-symbols-outlined text-red-500">gpp_bad</span>
            </div>
            <div className="flex items-baseline gap-2 mt-1 relative z-10">
              <p className="text-3xl font-bold text-slate-900 dark:text-white">28</p>
              <span className="text-xs font-medium text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded">+5%</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-[#1e2330] border border-slate-200 dark:border-slate-700/50 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">High Impact</p>
              <span className="material-symbols-outlined text-orange-500">priority_high</span>
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <p className="text-3xl font-bold text-slate-900 dark:text-white">15</p>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">No change</span>
            </div>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-[#1e2330] border border-slate-200 dark:border-slate-700/50 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Clean Environments</p>
              <span className="material-symbols-outlined text-green-500">check_circle</span>
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <p className="text-3xl font-bold text-slate-900 dark:text-white">85%</p>
              <span className="text-xs font-medium text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded">+2%</span>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="px-6 lg:px-8 mb-6">
          <div className="rounded-xl p-6 bg-white dark:bg-[#1e2330] border border-slate-200 dark:border-slate-700/50 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">Compatibility Trend</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Percentage of devices with clean environments (Last 30 days)</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-400 ring-1 ring-inset ring-slate-500/10">Daily</span>
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">Weekly</span>
              </div>
            </div>
            <div className="relative w-full h-48">
              {/* Simplified SVG Chart */}
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
                <defs>
                  <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#195de6" stopOpacity="0.2"></stop>
                    <stop offset="100%" stopColor="#195de6" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <line opacity="0.3" stroke="#334155" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="1000" y1="150" y2="150"></line>
                <line opacity="0.3" stroke="#334155" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="1000" y1="100" y2="100"></line>
                <line opacity="0.3" stroke="#334155" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="1000" y1="50" y2="50"></line>
                {/* Area */}
                <path d="M0,120 C100,100 200,140 300,110 S500,60 600,80 S800,40 1000,50 V200 H0 Z" fill="url(#gradient)"></path>
                {/* Line */}
                <path d="M0,120 C100,100 200,140 300,110 S500,60 600,80 S800,40 1000,50" fill="none" stroke="#195de6" strokeLinecap="round" strokeWidth="3"></path>
              </svg>
              {/* X-Axis Labels (Simulated) */}
              <div className="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="flex-1 px-6 lg:px-8 pb-8">
          <div className="rounded-xl border border-slate-200 dark:border-slate-700/50 overflow-hidden bg-white dark:bg-[#1e2330] shadow-sm">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700/50 flex items-center justify-between">
              <h3 className="font-semibold text-slate-900 dark:text-white">Active Conflicts</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-2.5 top-2 text-slate-400 text-[18px]">search</span>
                  <input className="pl-8 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-none rounded-md text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:ring-1 focus:ring-primary w-48" placeholder="Buscar users..." type="text" />
                </div>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                  <span className="material-symbols-outlined text-[18px]">filter_list</span>
                  Filter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700/50">
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Usuario</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Conflicting Extension</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Conflict Type</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Impact</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700/50">
                  {/* Row 1 */}
                  <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <img src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg" alt="John Doe" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-white">John Doe</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">DevOps</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400">extension</span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">AdBlocker Plus</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-500/10 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-500/20">
                        Script Injection
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">High</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Active</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button className="text-primary hover:text-primary/80 font-medium text-sm">Resolve</button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <img src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg" alt="Alice Smith" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-white">Alice Smith</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Marketing</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400">vpn_key</span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">VPN Master</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-500/10 text-orange-800 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20">
                        Request Interception
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-orange-500"></div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Medium</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Active</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button className="text-primary hover:text-primary/80 font-medium text-sm">Resolve</button>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <img src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg" alt="Robert Jones" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-white">Robert Jones</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Sales</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400">shopping_cart</span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Honey</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-500/10 text-yellow-800 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-500/20">
                        DOM Manipulation
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Low</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-slate-400 dark:text-slate-500 italic">Ignored</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 font-medium text-sm">Review</button>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <img src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg" alt="Maria Kim" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-white">Maria Kim</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Engineering</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400">visibility_off</span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Ghostery</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-500/10 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-500/20">
                        Script Blocking
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">High</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-green-600 dark:text-green-400">Resolved</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 font-medium text-sm">View</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700/50 flex items-center justify-between">
              <span className="text-sm text-slate-500 dark:text-slate-400">Showing 1-4 of 142 items</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50" disabled>Anterior</button>
                <button className="px-3 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">Siguiente</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
