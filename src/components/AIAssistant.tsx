import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface AIAssistantProps {
  onBack: () => void;
}

export default function AIAssistant({ onBack }: AIAssistantProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#28392e] bg-white dark:bg-background-dark px-6 py-3 h-16 shrink-0 z-20">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-slate-900 dark:text-white cursor-pointer" onClick={onBack}>
            <div className="size-8 text-primary">
              <span className="material-symbols-outlined text-[32px]">shield_lock</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">PhishGuard Admin</h2>
          </div>
          {/* Search Bar */}
          <div className="hidden md:flex flex-col min-w-64 h-10">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-[#28392e] focus-within:border-primary/50 transition-colors">
              <div className="text-slate-400 flex items-center justify-center pl-3 pr-2">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input className="w-full bg-transparent border-none text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0 text-sm h-full" placeholder="Buscar logs, users, threats..." />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-6">
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
            <Link className="text-primary text-sm font-medium" to='/panel'>Logs</Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium" to='/panel'>Incidents</Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium" to='/ajustes'>Configuración</Link>
          </nav>
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-lg size-10 hover:bg-slate-100 dark:hover:bg-surface-dark text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="flex items-center justify-center rounded-lg size-10 hover:bg-slate-100 dark:hover:bg-surface-dark text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ml-2 border-2 border-slate-200 dark:border-surface-dark" data-alt="User avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="hidden md:flex w-64 flex-col bg-white dark:bg-background-dark border-r border-slate-200 dark:border-[#28392e] shrink-0">
          <div className="flex flex-col gap-2 p-4">
            <div className="flex flex-col gap-1">
              <Link className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-surface-dark rounded-lg transition-colors" to='/panel'>
                <span className="material-symbols-outlined">dashboard</span>
                <span className="text-sm font-medium">Resumen</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg transition-colors" to='/panel'>
                <span className="material-symbols-outlined fill-current">description</span>
                <span className="text-sm font-medium">Live Logs</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-surface-dark rounded-lg transition-colors" to='/informes'>
                <span className="material-symbols-outlined">security</span>
                <span className="text-sm font-medium">Threat Analysis</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-surface-dark rounded-lg transition-colors" to='/panel'>
                <span className="material-symbols-outlined">group</span>
                <span className="text-sm font-medium">Usuarios</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-surface-dark rounded-lg transition-colors" to='/panel'>
                <span className="material-symbols-outlined">tune</span>
                <span className="text-sm font-medium">Configuration</span>
              </Link>
            </div>
            <div className="mt-8">
              <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Saved Filters</h3>
              <div className="flex flex-col gap-1">
                <Link className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-surface-dark rounded-lg transition-colors" to='/panel'>
                  <span className="material-symbols-outlined text-[18px]">bookmark</span>
                  <span className="text-sm">Finance Phishing</span>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-surface-dark rounded-lg transition-colors" to='/panel'>
                  <span className="material-symbols-outlined text-[18px]">bookmark</span>
                  <span className="text-sm">Critical Anomalies</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-auto p-4 border-t border-slate-200 dark:border-[#28392e]">
            <div className="bg-slate-50 dark:bg-surface-dark rounded-xl p-3 flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5">auto_awesome</span>
              <div>
                <p className="text-xs text-slate-900 dark:text-white font-medium mb-1">Shield Assistant is active</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">Monitoring real-time logs for anomalies.</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area: Logs & Chat */}
        <main className="flex-1 flex overflow-hidden relative">
          {/* Log View (Background Layer) */}
          <div className="flex-1 flex flex-col bg-white dark:bg-background-dark min-w-0">
            {/* Toolbar */}
            <div className="h-14 border-b border-slate-200 dark:border-[#28392e] flex items-center justify-between px-6 bg-white dark:bg-background-dark">
              <h1 className="text-slate-900 dark:text-white font-semibold">Security Logs <span className="text-slate-500 font-normal ml-2">Last 24 Hours</span></h1>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-50 dark:bg-surface-dark hover:bg-slate-100 dark:hover:bg-[#23382b] text-xs text-slate-700 dark:text-white border border-slate-200 dark:border-[#28392e] transition-colors">
                  <span className="material-symbols-outlined text-[16px]">filter_list</span> Filter
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-50 dark:bg-surface-dark hover:bg-slate-100 dark:hover:bg-[#23382b] text-xs text-slate-700 dark:text-white border border-slate-200 dark:border-[#28392e] transition-colors">
                  <span className="material-symbols-outlined text-[16px]">download</span> Export
                </button>
              </div>
            </div>

            {/* Log Table */}
            <div className="flex-1 overflow-auto p-6">
              <div className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                <div className="grid grid-cols-12 gap-4 pb-2 border-b border-slate-200 dark:border-[#28392e] font-medium uppercase tracking-wider text-xs">
                  <div className="col-span-2">Timestamp</div>
                  <div className="col-span-1">Level</div>
                  <div className="col-span-2">Source IP</div>
                  <div className="col-span-2">Usuario</div>
                  <div className="col-span-5">Message</div>
                </div>

                {/* Log Row 1 */}
                <div className="grid grid-cols-12 gap-4 py-3 border-b border-slate-100 dark:border-[#28392e]/50 items-center hover:bg-slate-50 dark:hover:bg-surface-dark/50 transition-colors cursor-pointer group">
                  <div className="col-span-2 text-slate-700 dark:text-slate-300">Oct 24, 10:42:15</div>
                  <div className="col-span-1"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400">CRITICAL</span></div>
                  <div className="col-span-2 font-mono text-slate-600 dark:text-slate-300">192.168.1.105</div>
                  <div className="col-span-2 text-slate-900 dark:text-white">j.smith@finance</div>
                  <div className="col-span-5 text-slate-700 dark:text-slate-300 truncate group-hover:text-primary transition-colors">Typosquatting detected: 'paypa1.com' link click attempt</div>
                </div>

                {/* Log Row 2 */}
                <div className="grid grid-cols-12 gap-4 py-3 border-b border-slate-100 dark:border-[#28392e]/50 items-center hover:bg-slate-50 dark:hover:bg-surface-dark/50 transition-colors cursor-pointer group">
                  <div className="col-span-2 text-slate-700 dark:text-slate-300">Oct 24, 10:41:03</div>
                  <div className="col-span-1"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-100 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400">WARN</span></div>
                  <div className="col-span-2 font-mono text-slate-600 dark:text-slate-300">45.22.19.112</div>
                  <div className="col-span-2 text-slate-900 dark:text-white">system-daemon</div>
                  <div className="col-span-5 text-slate-700 dark:text-slate-300 truncate group-hover:text-primary transition-colors">Unusual outbound traffic volume detected</div>
                </div>

                {/* Log Row 3 */}
                <div className="grid grid-cols-12 gap-4 py-3 border-b border-slate-100 dark:border-[#28392e]/50 items-center hover:bg-slate-50 dark:hover:bg-surface-dark/50 transition-colors cursor-pointer group">
                  <div className="col-span-2 text-slate-700 dark:text-slate-300">Oct 24, 10:38:55</div>
                  <div className="col-span-1"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">INFO</span></div>
                  <div className="col-span-2 font-mono text-slate-600 dark:text-slate-300">10.0.0.55</div>
                  <div className="col-span-2 text-slate-900 dark:text-white">m.doe@hr</div>
                  <div className="col-span-5 text-slate-700 dark:text-slate-300 truncate group-hover:text-primary transition-colors">User login successful (MFA verified)</div>
                </div>

                {/* Log Row 4 */}
                <div className="grid grid-cols-12 gap-4 py-3 border-b border-slate-100 dark:border-[#28392e]/50 items-center hover:bg-slate-50 dark:hover:bg-surface-dark/50 transition-colors cursor-pointer group">
                  <div className="col-span-2 text-slate-700 dark:text-slate-300">Oct 24, 10:35:12</div>
                  <div className="col-span-1"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400">CRITICAL</span></div>
                  <div className="col-span-2 font-mono text-slate-600 dark:text-slate-300">192.168.1.108</div>
                  <div className="col-span-2 text-slate-900 dark:text-white">k.lee@finance</div>
                  <div className="col-span-5 text-slate-700 dark:text-slate-300 truncate group-hover:text-primary transition-colors">Typosquatting detected: 'bancofamerica.net' link click</div>
                </div>

                {/* Faded rows to imply more content behind chat */}
                <div className="opacity-50 pointer-events-none">
                  <div className="grid grid-cols-12 gap-4 py-3 border-b border-slate-100 dark:border-[#28392e]/50 items-center">
                    <div className="col-span-2 text-slate-700 dark:text-slate-300">Oct 24, 10:30:00</div>
                    <div className="col-span-1"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">INFO</span></div>
                    <div className="col-span-2 font-mono text-slate-600 dark:text-slate-300">10.0.0.12</div>
                    <div className="col-span-2 text-slate-900 dark:text-white">admin</div>
                    <div className="col-span-5 text-slate-700 dark:text-slate-300 truncate">Scheduled scan completed</div>
                  </div>
                  <div className="grid grid-cols-12 gap-4 py-3 border-b border-slate-100 dark:border-[#28392e]/50 items-center">
                    <div className="col-span-2 text-slate-700 dark:text-slate-300">Oct 24, 10:28:44</div>
                    <div className="col-span-1"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">INFO</span></div>
                    <div className="col-span-2 font-mono text-slate-600 dark:text-slate-300">10.0.0.12</div>
                    <div className="col-span-2 text-slate-900 dark:text-white">system</div>
                    <div className="col-span-5 text-slate-700 dark:text-slate-300 truncate">Database backup initiated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Overlay / Panel */}
          <div className="w-full md:w-[450px] bg-slate-50 dark:bg-surface-dark border-l border-slate-200 dark:border-[#28392e] flex flex-col shadow-2xl relative z-10">
            {/* Chat Header */}
            <div className="h-14 border-b border-slate-200 dark:border-[#28392e] flex items-center justify-between px-4 bg-slate-50 dark:bg-surface-dark shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-1.5 rounded-lg text-primary">
                  <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                </div>
                <div>
                  <h2 className="text-slate-900 dark:text-white font-semibold text-sm">Shield Assistant</h2>
                  <div className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">Online</span>
                  </div>
                </div>
              </div>
              <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6 custom-scrollbar">
              {/* Welcome Message */}
              <div className="flex gap-3">
                <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-primary text-[18px]">smart_toy</span>
                </div>
                <div className="flex flex-col gap-2 max-w-[90%]">
                  <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-[#28392e] rounded-xl rounded-tl-none p-3 text-sm text-slate-700 dark:text-slate-200 shadow-sm">
                    <p>Hello Administrator. I'm monitoring your security logs in real-time. How can I help you investigate today?</p>
                  </div>
                </div>
              </div>

              {/* User Query */}
              <div className="flex gap-3 flex-row-reverse">
                <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0 mt-1 border border-slate-300 dark:border-[#28392e]" data-alt="User Avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg")', backgroundSize: 'cover' }}></div>
                <div className="flex flex-col gap-2 max-w-[85%] items-end">
                  <div className="bg-primary rounded-xl rounded-tr-none p-3 text-sm text-background-dark font-medium shadow-sm">
                    <p>Show me all phishing attempts from the last 24 hours targeting the Finance department that used typosquatting.</p>
                  </div>
                  <span className="text-[10px] text-slate-500">10:43 AM</span>
                </div>
              </div>

              {/* AI Response with Data */}
              <div className="flex gap-3">
                <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-primary text-[18px]">smart_toy</span>
                </div>
                <div className="flex flex-col gap-3 max-w-[95%]">
                  <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-[#28392e] rounded-xl rounded-tl-none p-4 text-sm text-slate-700 dark:text-slate-200 shadow-sm flex flex-col gap-3">
                    <p>I found <strong className="text-slate-900 dark:text-white">12 incidents</strong> matching your criteria in the last 24 hours.</p>

                    {/* Mini Data Table Card */}
                    <div className="bg-slate-50 dark:bg-surface-dark rounded border border-slate-200 dark:border-[#28392e] overflow-hidden">
                      <div className="px-3 py-2 bg-slate-100 dark:bg-[#1c3826] border-b border-slate-200 dark:border-[#28392e] flex justify-between items-center">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Filtered Results</span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">Top 3 shown</span>
                      </div>
                      <table className="w-full text-left text-xs text-slate-600 dark:text-slate-400">
                        <thead className="bg-slate-200/50 dark:bg-black/20 text-slate-500">
                          <tr>
                            <th className="px-3 py-2 font-medium">Hora</th>
                            <th className="px-3 py-2 font-medium">Target</th>
                            <th className="px-3 py-2 font-medium">Threat Domain</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-[#28392e]">
                          <tr>
                            <td className="px-3 py-2 text-slate-700 dark:text-slate-300">10:42 AM</td>
                            <td className="px-3 py-2">j.smith@...</td>
                            <td className="px-3 py-2 text-red-500 dark:text-red-400 font-mono">paypa1.com</td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 text-slate-700 dark:text-slate-300">10:35 AM</td>
                            <td className="px-3 py-2">k.lee@fi...</td>
                            <td className="px-3 py-2 text-red-500 dark:text-red-400 font-mono">bancof...net</td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 text-slate-700 dark:text-slate-300">09:12 AM</td>
                            <td className="px-3 py-2">r.wils@...</td>
                            <td className="px-3 py-2 text-red-500 dark:text-red-400 font-mono">wellsf...co</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="px-3 py-2 bg-slate-100/50 dark:bg-black/20 text-center">
                        <button className="text-primary text-xs hover:underline">View all 12 records in Main Log</button>
                      </div>
                    </div>

                    <p>The majority of these attacks originated from the same subnet range <code className="bg-slate-100 dark:bg-black/30 px-1 py-0.5 rounded text-primary font-mono text-xs">192.168.1.0/24</code>.</p>

                    <div className="flex gap-2 mt-1">
                      <button className="flex items-center gap-2 px-3 py-2 bg-primary text-background-dark rounded hover:bg-[#0ea841] transition-colors text-xs font-bold">
                        <span className="material-symbols-outlined text-[16px]">file_download</span> Export Filtered View
                      </button>
                      <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-[#28392e] text-slate-900 dark:text-white rounded hover:bg-slate-50 dark:hover:bg-[#23382b] transition-colors text-xs font-medium">
                        <span className="material-symbols-outlined text-[16px]">block</span> Block Subnet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggested Chips */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar mask-gradient">
              <button className="whitespace-nowrap px-3 py-1.5 rounded-full border border-slate-200 dark:border-[#28392e] bg-white dark:bg-background-dark hover:bg-slate-50 dark:hover:bg-surface-dark text-xs text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1.5 shrink-0">
                <span className="material-symbols-outlined text-[14px] text-primary">trending_up</span> Analyze risk trends
              </button>
              <button className="whitespace-nowrap px-3 py-1.5 rounded-full border border-slate-200 dark:border-[#28392e] bg-white dark:bg-background-dark hover:bg-slate-50 dark:hover:bg-surface-dark text-xs text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1.5 shrink-0">
                <span className="material-symbols-outlined text-[14px] text-primary">person_search</span> Identify repeat offenders
              </button>
              <button className="whitespace-nowrap px-3 py-1.5 rounded-full border border-slate-200 dark:border-[#28392e] bg-white dark:bg-background-dark hover:bg-slate-50 dark:hover:bg-surface-dark text-xs text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1.5 shrink-0">
                <span className="material-symbols-outlined text-[14px] text-primary">domain_verification</span> Check domain rep
              </button>
            </div>

            {/* Chat Input Area */}
            <div className="p-4 border-t border-slate-200 dark:border-[#28392e] bg-slate-50 dark:bg-surface-dark">
              <div className="relative">
                <textarea className="w-full bg-white dark:bg-background-dark border border-slate-200 dark:border-[#28392e] rounded-lg pl-4 pr-12 py-3 text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none" placeholder="Ask Shield Assistant..." rows={1}></textarea>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-primary rounded text-background-dark hover:bg-[#0ea841] transition-colors">
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>
              <div className="mt-2 flex justify-between items-center text-[10px] text-slate-500">
                <span>AI can make mistakes. Verify critical logs.</span>
                <div className="flex gap-2">
                  <button className="hover:text-primary transition-colors">Clear Chat</button>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-[10px] text-slate-500">creada en 2026 Jonathan Jimenez Escobar</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
