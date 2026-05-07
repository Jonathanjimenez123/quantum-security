import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface AlertSchedulesProps {
  onBack: () => void;
}

export default function AlertSchedules({ onBack }: AlertSchedulesProps) {
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#111418] font-['Inter',sans-serif] text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#283039] bg-white dark:bg-[#1d232a] px-6 py-3 sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-slate-900 dark:text-white cursor-pointer" onClick={onBack}>
              <div className="size-8 rounded bg-[#137fec] flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl">shield_lock</span>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">PhishGuard Admin</h2>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link className="text-slate-500 hover:text-[#137fec] dark:text-[#9dabb9] dark:hover:text-white text-sm font-medium leading-normal transition-colors" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
              <Link className="text-slate-500 hover:text-[#137fec] dark:text-[#9dabb9] dark:hover:text-white text-sm font-medium leading-normal transition-colors" to="/security-alert-interface">Alerts</Link>
              <Link className="text-[#137fec] dark:text-white text-sm font-medium leading-normal" to='/ajustes'>Configuración</Link>
              <Link className="text-slate-500 hover:text-[#137fec] dark:text-[#9dabb9] dark:hover:text-white text-sm font-medium leading-normal transition-colors" to='/panel'>Usuarios</Link>
            </div>
          </div>
          <div className="flex flex-1 justify-end gap-4 items-center">
            <label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100 dark:bg-[#283039]">
                <div className="text-slate-400 dark:text-[#9dabb9] flex border-none items-center justify-center pl-3">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input className="w-full bg-transparent border-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#9dabb9] text-sm px-3 focus:ring-0" placeholder="Buscar settings..." />
              </div>
            </label>
            <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-[#137fec] hover:bg-[#0f6ac6] text-white text-sm font-bold transition-colors">
              Logout
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-[#283039]" data-alt="User profile photo" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
          </div>
        </header>

        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="hidden lg:flex w-64 flex-col border-r border-slate-200 dark:border-[#283039] bg-white dark:bg-[#111418] pt-6 px-4 pb-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 px-2">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shadow-lg" data-alt="Settings icon abstract" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                <div className="flex flex-col">
                  <h1 className="text-slate-900 dark:text-white text-base font-bold">Configuration</h1>
                  <p className="text-slate-500 dark:text-[#9dabb9] text-xs">System Admin</p>
                </div>
              </div>
              <nav className="flex flex-col gap-1">
                <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-[#9dabb9] hover:bg-slate-100 dark:hover:bg-[#1d232a] hover:text-[#137fec] dark:hover:text-white transition-all group" to='/ajustes'>
                  <span className="material-symbols-outlined group-hover:text-[#137fec] dark:group-hover:text-white">settings</span>
                  <span className="text-sm font-medium">General</span>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-[#9dabb9] hover:bg-slate-100 dark:hover:bg-[#1d232a] hover:text-[#137fec] dark:hover:text-white transition-all group" to="/security-alert-interface">
                  <span className="material-symbols-outlined group-hover:text-[#137fec] dark:group-hover:text-white">warning</span>
                  <span className="text-sm font-medium">Alerts &amp; Rules</span>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#137fec]/10 text-[#137fec] dark:bg-[#1d232a] dark:text-white" to='/panel'>
                  <span className="material-symbols-outlined text-[#137fec] dark:text-white fill-current">calendar_month</span>
                  <span className="text-sm font-medium">Schedules</span>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-[#9dabb9] hover:bg-slate-100 dark:hover:bg-[#1d232a] hover:text-[#137fec] dark:hover:text-white transition-all group" to='/panel'>
                  <span className="material-symbols-outlined group-hover:text-[#137fec] dark:group-hover:text-white">extension</span>
                  <span className="text-sm font-medium">Integrations</span>
                </Link>
                <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-[#9dabb9] hover:bg-slate-100 dark:hover:bg-[#1d232a] hover:text-[#137fec] dark:hover:text-white transition-all group" to='/panel'>
                  <span className="material-symbols-outlined group-hover:text-[#137fec] dark:group-hover:text-white">group</span>
                  <span className="text-sm font-medium">Team Access</span>
                </Link>
              </nav>
              <div className="mt-auto pt-6 border-t border-slate-200 dark:border-[#283039]">
                <div className="px-3 py-2 rounded-lg bg-gradient-to-br from-[#137fec]/20 to-transparent border border-[#137fec]/20">
                  <h4 className="text-[#137fec] dark:text-white text-xs font-bold uppercase tracking-wider mb-2">System Status</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-[#9dabb9] mb-1">
                    <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span>Engine Active</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-[#9dabb9]">
                    <span className="size-2 rounded-full bg-emerald-500"></span>
                    <span>Updates: Latest</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 flex flex-col min-w-0 bg-slate-50 dark:bg-[#111418] p-6 md:p-8 lg:p-10 overflow-y-auto h-[calc(100vh-65px)]">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 mb-6 text-sm">
              <Link className="text-slate-400 hover:text-[#137fec] dark:text-[#9dabb9] dark:hover:text-white transition-colors" to='/ajustes'>Settings</Link>
              <span className="text-slate-300 dark:text-[#283039]">/</span>
              <Link className="text-slate-400 hover:text-[#137fec] dark:text-[#9dabb9] dark:hover:text-white transition-colors" to='/panel'>Notifications</Link>
              <span className="text-slate-300 dark:text-[#283039]">/</span>
              <span className="text-slate-900 dark:text-white font-medium">Schedules</span>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-8">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Alert Schedules &amp; Quiet Hours</h1>
                <p className="text-slate-500 dark:text-[#9dabb9] text-lg">Configure when non-critical alerts should be silenced to reduce fatigue. Critical security events will always notify admins.</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-[#283039] bg-white dark:bg-[#1d232a] text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-[#283039] transition-colors text-sm font-medium">
                  <span className="material-symbols-outlined text-[18px]">history</span>
                  View Logs
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#137fec] hover:bg-[#0f6ac6] text-white transition-colors text-sm font-medium shadow-lg shadow-[#137fec]/20">
                  <span className="material-symbols-outlined text-[18px]">save</span>
                  Guardar Cambios
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Left Column: Settings Toggles */}
              <div className="flex flex-col gap-6 xl:col-span-1">
                {/* Global Controls Card */}
                <div className="rounded-xl border border-slate-200 dark:border-[#283039] bg-white dark:bg-[#1d232a] p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#137fec]">tune</span> Global Controls
                  </h3>
                  {/* Toggle 1 */}
                  <div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-[#283039]/50">
                    <div className="flex flex-col gap-1 pr-4">
                      <span className="text-sm font-medium text-slate-900 dark:text-white">Do Not Disturb Mode</span>
                      <span className="text-xs text-slate-500 dark:text-[#9dabb9]">Silences all but Level 1 Critical alerts immediately.</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox" value="" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-[#283039] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#137fec]"></div>
                    </label>
                  </div>
                  {/* Toggle 2 */}
                  <div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-[#283039]/50">
                    <div className="flex flex-col gap-1 pr-4">
                      <span className="text-sm font-medium text-slate-900 dark:text-white">Weekend Silence</span>
                      <span className="text-xs text-slate-500 dark:text-[#9dabb9]">Auto-silence Friday 6PM to Monday 8AM.</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-[#283039] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#137fec]"></div>
                    </label>
                  </div>
                  {/* Toggle 3 */}
                  <div className="flex items-center justify-between py-3">
                    <div className="flex flex-col gap-1 pr-4">
                      <span className="text-sm font-medium text-slate-900 dark:text-white">Time Zone Sync</span>
                      <span className="text-xs text-slate-500 dark:text-[#9dabb9]">Adjust quiet hours based on user location.</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-[#283039] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#137fec]"></div>
                    </label>
                  </div>
                </div>

                {/* Critical Override Card */}
                <div className="rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined">notification_important</span> Critical Alert Override
                  </h3>
                  <p className="text-sm text-red-600 dark:text-red-300 mb-4 leading-relaxed">
                    High-risk phishing outbreaks and confirmed breaches will bypass all quiet hour settings.
                  </p>
                  <div className="bg-white dark:bg-[#111418] rounded-lg p-3 border border-red-100 dark:border-red-900/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase text-slate-500 dark:text-[#9dabb9]">Override Level</span>
                      <span className="text-xs font-bold text-red-600 dark:text-red-400">Level 1 &amp; 2 Only</span>
                    </div>
                    <input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-[#283039] accent-red-500" max="3" min="1" type="range" defaultValue="2" />
                    <div className="flex justify-between text-[10px] text-slate-400 dark:text-[#9dabb9] mt-1">
                      <span>All Critical</span>
                      <span>High Risk Only</span>
                      <span>Breach Only</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Schedule */}
              <div className="xl:col-span-2 flex flex-col gap-6">
                <div className="rounded-xl border border-slate-200 dark:border-[#283039] bg-white dark:bg-[#1d232a] p-6 shadow-sm h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#137fec]">calendar_clock</span> Weekly Schedule
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-[#9dabb9] mt-1">Drag to select quiet periods (white blocks are active alert times).</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#283039] text-slate-600 dark:text-[#9dabb9] border border-slate-200 dark:border-slate-700">
                        <div className="size-2.5 rounded-sm bg-slate-300 dark:bg-slate-600"></div>
                        Quiet
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#137fec]/10 text-[#137fec] border border-[#137fec]/20">
                        <div className="size-2.5 rounded-sm bg-[#137fec]"></div>
                        Active
                      </div>
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="flex-1 overflow-x-auto pb-2">
                    <div className="min-w-[600px] flex flex-col gap-2">
                      {/* Time Header */}
                      <div className="grid grid-cols-[80px_1fr] gap-2 mb-2">
                        <div className="text-xs text-slate-400 dark:text-[#9dabb9] font-medium self-end pb-1">Day / Time</div>
                        <div className="grid grid-cols-4 text-xs text-slate-400 dark:text-[#9dabb9] font-medium text-center">
                          <div>00:00 - 06:00</div>
                          <div>06:00 - 12:00</div>
                          <div>12:00 - 18:00</div>
                          <div>18:00 - 24:00</div>
                        </div>
                      </div>

                      {/* Mon */}
                      <div className="grid grid-cols-[80px_1fr] gap-2 items-center group">
                        <div className="text-sm font-medium text-slate-700 dark:text-white">Monday</div>
                        <div className="h-10 bg-slate-100 dark:bg-[#283039] rounded-lg overflow-hidden flex relative ring-1 ring-inset ring-slate-200 dark:ring-slate-700/50">
                          {/* Quiet Block 0-8am */}
                          <div className="h-full bg-slate-200/50 dark:bg-slate-700/50 border-r border-dashed border-slate-300 dark:border-slate-600 w-[33%] flex items-center justify-center text-[10px] text-slate-400 dark:text-slate-500">Quiet</div>
                          {/* Active Block 8am-6pm */}
                          <div className="h-full bg-[#137fec]/10 dark:bg-[#137fec]/20 w-[42%] flex items-center justify-center relative group/slot cursor-pointer hover:bg-[#137fec]/20 dark:hover:bg-[#137fec]/30 transition-colors">
                            <span className="text-xs font-bold text-[#137fec] opacity-0 group-hover/slot:opacity-100">08:00 - 18:00</span>
                          </div>
                          {/* Quiet Block 6pm-12am */}
                          <div className="h-full bg-slate-200/50 dark:bg-slate-700/50 border-l border-dashed border-slate-300 dark:border-slate-600 flex-1 flex items-center justify-center text-[10px] text-slate-400 dark:text-slate-500">Quiet</div>
                        </div>
                      </div>

                      {/* Tue */}
                      <div className="grid grid-cols-[80px_1fr] gap-2 items-center group">
                        <div className="text-sm font-medium text-slate-700 dark:text-white">Tuesday</div>
                        <div className="h-10 bg-slate-100 dark:bg-[#283039] rounded-lg overflow-hidden flex relative ring-1 ring-inset ring-slate-200 dark:ring-slate-700/50">
                          <div className="h-full bg-slate-200/50 dark:bg-slate-700/50 border-r border-dashed border-slate-300 dark:border-slate-600 w-[33%]"></div>
                          <div className="h-full bg-[#137fec]/10 dark:bg-[#137fec]/20 w-[42%] cursor-pointer hover:bg-[#137fec]/20 dark:hover:bg-[#137fec]/30 transition-colors"></div>
                          <div className="h-full bg-slate-200/50 dark:bg-slate-700/50 border-l border-dashed border-slate-300 dark:border-slate-600 flex-1"></div>
                        </div>
                      </div>

                      {/* Wed */}
                      <div className="grid grid-cols-[80px_1fr] gap-2 items-center group">
                        <div className="text-sm font-medium text-slate-700 dark:text-white">Wednesday</div>
                        <div className="h-10 bg-slate-100 dark:bg-[#283039] rounded-lg overflow-hidden flex relative ring-1 ring-inset ring-slate-200 dark:ring-slate-700/50">
                          <div className="h-full bg-slate-200/50 dark:bg-slate-700/50 border-r border-dashed border-slate-300 dark:border-slate-600 w-[33%]"></div>
                          <div className="h-full bg-[#137fec]/10 dark:bg-[#137fec]/20 w-[42%] cursor-pointer hover:bg-[#137fec]/20 dark:hover:bg-[#137fec]/30 transition-colors"></div>
                          <div className="h-full bg-slate-200/50 dark:bg-slate-700/50 border-l border-dashed border-slate-300 dark:border-slate-600 flex-1"></div>
                        </div>
                      </div>

                      {/* Thu */}
                      <div className="grid grid-cols-[80px_1fr] gap-2 items-center group">
                        <div className="text-sm font-medium text-slate-700 dark:text-white">Thursday</div>
                        <div className="h-10 bg-slate-100 dark:bg-[#283039] rounded-lg overflow-hidden flex relative ring-1 ring-inset ring-slate-200 dark:ring-slate-700/50">
                          <div className="h-full bg-slate-200/50 dark:bg-slate-700/50 border-r border-dashed border-slate-300 dark:border-slate-600 w-[33%]"></div>
                          <div className="h-full bg-[#137fec]/10 dark:bg-[#137fec]/20 w-[42%] cursor-pointer hover:bg-[#137fec]/20 dark:hover:bg-[#137fec]/30 transition-colors"></div>
                          <div className="h-full bg-slate-200/50 dark:bg-slate-700/50 border-l border-dashed border-slate-300 dark:border-slate-600 flex-1"></div>
                        </div>
                      </div>

                      {/* Fri */}
                      <div className="grid grid-cols-[80px_1fr] gap-2 items-center group">
                        <div className="text-sm font-medium text-slate-700 dark:text-white">Friday</div>
                        <div className="h-10 bg-slate-100 dark:bg-[#283039] rounded-lg overflow-hidden flex relative ring-1 ring-inset ring-slate-200 dark:ring-slate-700/50">
                          <div className="h-full bg-slate-200/50 dark:bg-slate-700/50 border-r border-dashed border-slate-300 dark:border-slate-600 w-[33%]"></div>
                          <div className="h-full bg-[#137fec]/10 dark:bg-[#137fec]/20 w-[42%] cursor-pointer hover:bg-[#137fec]/20 dark:hover:bg-[#137fec]/30 transition-colors"></div>
                          <div className="h-full bg-slate-200/50 dark:bg-slate-700/50 border-l border-dashed border-slate-300 dark:border-slate-600 flex-1 flex items-center justify-center">
                            <span className="text-[10px] text-[#137fec] font-bold px-2 py-0.5 rounded bg-white dark:bg-[#1d232a] shadow-sm z-10">Weekend Start</span>
                          </div>
                        </div>
                      </div>

                      {/* Sat */}
                      <div className="grid grid-cols-[80px_1fr] gap-2 items-center group opacity-75">
                        <div className="text-sm font-medium text-slate-500 dark:text-[#9dabb9]">Saturday</div>
                        <div className="h-10 bg-slate-200/50 dark:bg-slate-800/50 rounded-lg overflow-hidden flex relative border border-dashed border-slate-300 dark:border-slate-700">
                          <div className="w-full h-full flex items-center justify-center text-xs text-slate-400 dark:text-slate-600 font-medium">
                            Weekend Silence Active
                          </div>
                        </div>
                      </div>

                      {/* Sun */}
                      <div className="grid grid-cols-[80px_1fr] gap-2 items-center group opacity-75">
                        <div className="text-sm font-medium text-slate-500 dark:text-[#9dabb9]">Sunday</div>
                        <div className="h-10 bg-slate-200/50 dark:bg-slate-800/50 rounded-lg overflow-hidden flex relative border border-dashed border-slate-300 dark:border-slate-700">
                          <div className="w-full h-full flex items-center justify-center text-xs text-slate-400 dark:text-slate-600 font-medium">
                            Weekend Silence Active
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Section: Exceptions */}
            <div className="mt-8">
              <div className="rounded-xl border border-slate-200 dark:border-[#283039] bg-white dark:bg-[#1d232a] p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#137fec]">rule</span> Specific Exceptions
                  </h3>
                  <button className="text-sm text-[#137fec] hover:text-[#0f6ac6] font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">add</span> Add Rule
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-100 dark:border-[#283039]/50 text-xs uppercase tracking-wider text-slate-500 dark:text-[#9dabb9]">
                        <th className="py-3 px-2 font-medium">Rule Name</th>
                        <th className="py-3 px-2 font-medium">Condition</th>
                        <th className="py-3 px-2 font-medium">Acción</th>
                        <th className="py-3 px-2 font-medium text-right">Active</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-slate-50 dark:border-[#283039]/30 hover:bg-slate-50 dark:hover:bg-[#283039]/20 transition-colors">
                        <td className="py-3 px-2 text-slate-900 dark:text-white font-medium">Finance Team Launch</td>
                        <td className="py-3 px-2 text-slate-600 dark:text-[#9dabb9]">Group: Finance • Severity &gt; Low</td>
                        <td className="py-3 px-2">
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Allow Notification</span>
                        </td>
                        <td className="py-3 px-2 text-right">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                            <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-[#283039] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#137fec]"></div>
                          </label>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-50 dark:border-[#283039]/30 hover:bg-slate-50 dark:hover:bg-[#283039]/20 transition-colors">
                        <td className="py-3 px-2 text-slate-900 dark:text-white font-medium">Monthly Maintenance</td>
                        <td className="py-3 px-2 text-slate-600 dark:text-[#9dabb9]">Last Sunday of Month • All Alerts</td>
                        <td className="py-3 px-2">
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">Force Silence</span>
                        </td>
                        <td className="py-3 px-2 text-right">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input className="sr-only peer" type="checkbox" value="" />
                            <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-[#283039] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#137fec]"></div>
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
