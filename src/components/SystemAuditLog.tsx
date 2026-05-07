import { auth } from '../firebase';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface SystemAuditLogProps {
  onBack: () => void;
}

export default function SystemAuditLog({ onBack }: SystemAuditLogProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="bg-[#f6f7f8] dark:bg-[#111418] font-['Inter',sans-serif] text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden min-h-screen flex flex-col">
      <style>{`
        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #111418; 
        }
        ::-webkit-scrollbar-thumb {
            background: #283039; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #3b4754; 
        }
      `}</style>
      <div className="relative flex min-h-screen w-full flex-col">
        {/* Main Layout */}
        <div className="flex h-full grow flex-col">
          {/* Header Section */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#283039] bg-[#1c2127] px-10 py-3 sticky top-0 z-50">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4 text-white cursor-pointer" onClick={onBack}>
                <div className="size-8 flex items-center justify-center text-[#137fec]">
                  <span className="material-symbols-outlined text-3xl">shield_lock</span>
                </div>
                <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Anti-Phishing Admin</h2>
              </div>
              <nav className="hidden md:flex items-center gap-9">
                <Link className="text-[#9dabb9] hover:text-[#137fec] transition-colors text-sm font-medium leading-normal" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
                <Link className="text-[#9dabb9] hover:text-[#137fec] transition-colors text-sm font-medium leading-normal" to='/informes'>Threats</Link>
                <Link className="text-[#9dabb9] hover:text-[#137fec] transition-colors text-sm font-medium leading-normal" to="/policy-manager">Policy Config</Link>
                <Link className="text-white text-sm font-medium leading-normal border-b-2 border-[#137fec] py-4" to='/panel'>Audit Logs</Link>
                <Link className="text-[#9dabb9] hover:text-[#137fec] transition-colors text-sm font-medium leading-normal" to='/ajustes'>Configuración</Link>
              </nav>
            </div>
            <div className="flex flex-1 justify-end gap-8 items-center">
              <label className="hidden lg:flex flex-col min-w-40 !h-10 max-w-64">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full ring-1 ring-[#283039] focus-within:ring-[#137fec] bg-[#111418]">
                  <div className="text-[#9dabb9] flex border-none bg-transparent items-center justify-center pl-4 rounded-l-lg border-r-0">
                    <span className="material-symbols-outlined text-[20px]">search</span>
                  </div>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-[#9dabb9] px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Buscar logs..." />
                </div>
              </label>
              <div className="flex items-center gap-3">
                <button className="relative text-[#9dabb9] hover:text-white">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border-2 border-[#1c2127]"></span>
                </button>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-[#283039]" data-alt="Admin user profile avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <div className="flex flex-1 justify-center py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col max-w-[1400px] flex-1 gap-6">
              {/* Page Title & Actions */}
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="flex min-w-72 flex-col gap-2">
                  <h1 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">System Audit Log</h1>
                  <p className="text-slate-500 dark:text-[#9dabb9] text-base font-normal leading-normal">Track, monitor, and audit all administrative actions and system changes in real-time.</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-[#283039] text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-[#283039] transition-colors text-sm font-medium">
                    <span className="material-symbols-outlined text-[20px]">file_download</span>
                    <span>Export CSV</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-[#137fec] text-white hover:bg-blue-600 transition-colors text-sm font-bold shadow-lg shadow-blue-900/20">
                    <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                    <span>Export Report</span>
                  </button>
                </div>
              </div>

              {/* Stats Widgets */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Stat Card 1 */}
                <div className="flex flex-col gap-1 rounded-xl p-5 border border-slate-200 dark:border-[#283039] bg-white dark:bg-[#1c2127] relative overflow-hidden group">
                  <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-[#137fec]">history</span>
                  </div>
                  <p className="text-slate-500 dark:text-[#9dabb9] text-sm font-medium uppercase tracking-wider">Total Actions (24h)</p>
                  <div className="flex items-end gap-2 mt-1">
                    <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">1,245</p>
                    <span className="text-green-600 dark:text-green-500 text-sm font-medium flex items-center bg-green-100 dark:bg-green-500/10 px-1.5 py-0.5 rounded">
                      <span className="material-symbols-outlined text-sm mr-0.5">trending_up</span>
                      +15%
                    </span>
                  </div>
                </div>
                {/* Stat Card 2 */}
                <div className="flex flex-col gap-1 rounded-xl p-5 border border-slate-200 dark:border-[#283039] bg-white dark:bg-[#1c2127] relative overflow-hidden group">
                  <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-orange-500">warning</span>
                  </div>
                  <p className="text-slate-500 dark:text-[#9dabb9] text-sm font-medium uppercase tracking-wider">Flagged Suspicious Activity</p>
                  <div className="flex items-end gap-2 mt-1">
                    <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">12</p>
                    <span className="text-orange-600 dark:text-orange-500 text-sm font-medium flex items-center bg-orange-100 dark:bg-orange-500/10 px-1.5 py-0.5 rounded">
                      <span className="material-symbols-outlined text-sm mr-0.5">trending_up</span>
                      +2%
                    </span>
                  </div>
                </div>
                {/* Stat Card 3 */}
                <div className="flex flex-col gap-1 rounded-xl p-5 border border-slate-200 dark:border-[#283039] bg-white dark:bg-[#1c2127] relative overflow-hidden group">
                  <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-blue-500">policy</span>
                  </div>
                  <p className="text-slate-500 dark:text-[#9dabb9] text-sm font-medium uppercase tracking-wider">Policy Updates</p>
                  <div className="flex items-end gap-2 mt-1">
                    <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">56</p>
                    <span className="text-slate-500 dark:text-[#9dabb9] text-sm font-medium flex items-center bg-slate-100 dark:bg-white/5 px-1.5 py-0.5 rounded">
                      <span className="material-symbols-outlined text-sm mr-0.5">trending_flat</span>
                      0%
                    </span>
                  </div>
                </div>
                {/* Stat Card 4 */}
                <div className="flex flex-col gap-1 rounded-xl p-5 border border-slate-200 dark:border-[#283039] bg-white dark:bg-[#1c2127] relative overflow-hidden group">
                  <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-purple-500">admin_panel_settings</span>
                  </div>
                  <p className="text-slate-500 dark:text-[#9dabb9] text-sm font-medium uppercase tracking-wider">Active Admins</p>
                  <div className="flex items-end gap-2 mt-1">
                    <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">8</p>
                    <span className="text-slate-500 dark:text-[#9dabb9] text-sm font-medium flex items-center bg-slate-100 dark:bg-white/5 px-1.5 py-0.5 rounded">
                      <span className="material-symbols-outlined text-sm mr-0.5">group</span>
                      8/10
                    </span>
                  </div>
                </div>
              </div>

              {/* Filters Toolbar */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 p-4 bg-white dark:bg-[#1c2127] rounded-xl border border-slate-200 dark:border-[#283039] items-center justify-between">
                <div className="flex flex-wrap gap-3 w-full lg:w-auto">
                  {/* Date Filter */}
                  <button className="group flex h-9 items-center justify-between gap-x-2 rounded-lg bg-slate-50 dark:bg-[#111418] border border-slate-200 dark:border-[#283039] hover:border-[#137fec] dark:hover:border-[#137fec] px-3 transition-all min-w-[200px]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-500 dark:text-[#9dabb9] text-[20px]">calendar_today</span>
                      <span className="text-slate-900 dark:text-white text-sm font-medium">Last 7 Days</span>
                    </div>
                    <span className="material-symbols-outlined text-slate-500 dark:text-[#9dabb9] group-hover:text-slate-900 dark:group-hover:text-white text-[20px]">arrow_drop_down</span>
                  </button>
                  {/* Admin Filter */}
                  <button className="group flex h-9 items-center justify-between gap-x-2 rounded-lg bg-slate-50 dark:bg-[#111418] border border-slate-200 dark:border-[#283039] hover:border-[#137fec] dark:hover:border-[#137fec] px-3 transition-all min-w-[160px]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-500 dark:text-[#9dabb9] text-[20px]">person</span>
                      <span className="text-slate-900 dark:text-white text-sm font-medium">Admin: All</span>
                    </div>
                    <span className="material-symbols-outlined text-slate-500 dark:text-[#9dabb9] group-hover:text-slate-900 dark:group-hover:text-white text-[20px]">arrow_drop_down</span>
                  </button>
                  {/* Action Type Filter */}
                  <button className="group flex h-9 items-center justify-between gap-x-2 rounded-lg bg-slate-50 dark:bg-[#111418] border border-slate-200 dark:border-[#283039] hover:border-[#137fec] dark:hover:border-[#137fec] px-3 transition-all min-w-[160px]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-500 dark:text-[#9dabb9] text-[20px]">category</span>
                      <span className="text-slate-900 dark:text-white text-sm font-medium">Type: All</span>
                    </div>
                    <span className="material-symbols-outlined text-slate-500 dark:text-[#9dabb9] group-hover:text-slate-900 dark:group-hover:text-white text-[20px]">arrow_drop_down</span>
                  </button>
                  {/* Severity Filter */}
                  <button className="group flex h-9 items-center justify-between gap-x-2 rounded-lg bg-slate-50 dark:bg-[#111418] border border-slate-200 dark:border-[#283039] hover:border-[#137fec] dark:hover:border-[#137fec] px-3 transition-all min-w-[160px]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-500 dark:text-[#9dabb9] text-[20px]">warning</span>
                      <span className="text-slate-900 dark:text-white text-sm font-medium">Severity: Critical</span>
                    </div>
                    <span className="material-symbols-outlined text-slate-500 dark:text-[#9dabb9] group-hover:text-slate-900 dark:group-hover:text-white text-[20px]">arrow_drop_down</span>
                  </button>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                  <span className="text-slate-500 dark:text-[#9dabb9] text-sm">Showing 1-10 of 1,245</span>
                  <div className="flex gap-1">
                    <button className="size-8 flex items-center justify-center rounded bg-slate-50 dark:bg-[#111418] border border-slate-200 dark:border-[#283039] text-slate-500 dark:text-[#9dabb9] hover:text-slate-900 dark:hover:text-white hover:border-[#137fec] dark:hover:border-[#137fec]">
                      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                    </button>
                    <button className="size-8 flex items-center justify-center rounded bg-slate-50 dark:bg-[#111418] border border-slate-200 dark:border-[#283039] text-slate-500 dark:text-[#9dabb9] hover:text-slate-900 dark:hover:text-white hover:border-[#137fec] dark:hover:border-[#137fec]">
                      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Data Table */}
              <div className="w-full @container">
                <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-[#283039] bg-white dark:bg-[#1c2127] shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-slate-50 dark:bg-[#232931] border-b border-slate-200 dark:border-[#283039]">
                        <tr>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-[#9dabb9] uppercase tracking-wider">Timestamp</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-[#9dabb9] uppercase tracking-wider">User/Actor</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-[#9dabb9] uppercase tracking-wider">Acción</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-[#9dabb9] uppercase tracking-wider">Target/Object</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-[#9dabb9] uppercase tracking-wider hidden md:table-cell">IP Address</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-[#9dabb9] uppercase tracking-wider text-center">Severity</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-[#9dabb9] uppercase tracking-wider text-right">Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-[#283039]">
                        {/* Row 1 */}
                        <tr className="group hover:bg-slate-50 dark:hover:bg-[#111418]/50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex flex-col">
                              <span className="text-slate-900 dark:text-white text-sm font-medium">Oct 27, 2026</span>
                              <span className="text-slate-500 dark:text-[#9dabb9] text-xs">14:32:01</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <div className="size-8 rounded-full bg-pink-100 dark:bg-pink-500/20 text-pink-600 dark:text-pink-500 flex items-center justify-center text-xs font-bold">AS</div>
                              <span className="text-slate-900 dark:text-white text-sm">Admin_Sarah</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 ring-1 ring-inset ring-blue-500/20">Changed Sensitivity</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-slate-500 dark:text-[#9dabb9] text-sm">AI Engine Config</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                            <span className="text-slate-500 dark:text-[#9dabb9] text-sm font-mono">192.168.1.45</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <div className="size-2 rounded-full bg-red-500"></div>
                              <span className="text-red-600 dark:text-red-400 text-sm font-medium">High</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <button onClick={() => setIsDrawerOpen(true)} className="text-[#137fec] hover:text-blue-600 dark:hover:text-blue-300 text-sm font-medium flex items-center justify-end gap-1 w-full">
                              <span className="material-symbols-outlined text-lg">difference</span>
                              View Diff
                            </button>
                          </td>
                        </tr>
                        {/* Row 2 */}
                        <tr className="group hover:bg-slate-50 dark:hover:bg-[#111418]/50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex flex-col">
                              <span className="text-slate-900 dark:text-white text-sm font-medium">Oct 27, 2026</span>
                              <span className="text-slate-500 dark:text-[#9dabb9] text-xs">13:15:22</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <div className="size-8 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-500 flex items-center justify-center text-xs font-bold">
                                <span className="material-symbols-outlined text-sm">smart_toy</span>
                              </div>
                              <span className="text-slate-900 dark:text-white text-sm">System_Auto</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center rounded-md bg-red-50 dark:bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-600 dark:text-red-400 ring-1 ring-inset ring-red-500/20">Blocked Domain</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-slate-500 dark:text-[#9dabb9] text-sm">Global Blacklist</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                            <span className="text-slate-500 dark:text-[#9dabb9] text-sm font-mono">10.0.0.12</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <div className="size-2 rounded-full bg-yellow-500"></div>
                              <span className="text-yellow-600 dark:text-yellow-400 text-sm font-medium">Medium</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <button className="text-slate-500 dark:text-[#9dabb9] hover:text-slate-900 dark:hover:text-white text-sm font-medium flex items-center justify-end gap-1 w-full">
                              <span className="material-symbols-outlined text-lg">visibility</span>
                              Details
                            </button>
                          </td>
                        </tr>
                        {/* Row 3 */}
                        <tr className="group hover:bg-slate-50 dark:hover:bg-[#111418]/50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex flex-col">
                              <span className="text-slate-900 dark:text-white text-sm font-medium">Oct 27, 2026</span>
                              <span className="text-slate-500 dark:text-[#9dabb9] text-xs">11:45:00</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <div className="size-8 rounded-full bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-500 flex items-center justify-center text-xs font-bold">AM</div>
                              <span className="text-slate-900 dark:text-white text-sm">Admin_Mike</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-600 dark:text-green-400 ring-1 ring-inset ring-green-500/20">Modified Whitelist</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-slate-500 dark:text-[#9dabb9] text-sm">Trusted Domains</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                            <span className="text-slate-500 dark:text-[#9dabb9] text-sm font-mono">192.168.1.22</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <div className="size-2 rounded-full bg-green-500"></div>
                              <span className="text-green-600 dark:text-green-400 text-sm font-medium">Low</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <button className="text-[#137fec] hover:text-blue-600 dark:hover:text-blue-300 text-sm font-medium flex items-center justify-end gap-1 w-full">
                              <span className="material-symbols-outlined text-lg">difference</span>
                              View Diff
                            </button>
                          </td>
                        </tr>
                        {/* Row 4 */}
                        <tr className="group hover:bg-slate-50 dark:hover:bg-[#111418]/50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex flex-col">
                              <span className="text-slate-900 dark:text-white text-sm font-medium">Oct 27, 2026</span>
                              <span className="text-slate-500 dark:text-[#9dabb9] text-xs">09:30:15</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <div className="size-8 rounded-full bg-pink-100 dark:bg-pink-500/20 text-pink-600 dark:text-pink-500 flex items-center justify-center text-xs font-bold">AS</div>
                              <span className="text-slate-900 dark:text-white text-sm">Admin_Sarah</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center rounded-md bg-orange-50 dark:bg-orange-500/10 px-2.5 py-1 text-xs font-medium text-orange-600 dark:text-orange-400 ring-1 ring-inset ring-orange-500/20">User Role Update</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-slate-500 dark:text-[#9dabb9] text-sm">RBAC Settings</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                            <span className="text-slate-500 dark:text-[#9dabb9] text-sm font-mono">192.168.1.45</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <div className="size-2 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.6)]"></div>
                              <span className="text-red-600 dark:text-red-500 text-sm font-bold">Critical</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <button className="text-slate-500 dark:text-[#9dabb9] hover:text-slate-900 dark:hover:text-white text-sm font-medium flex items-center justify-end gap-1 w-full">
                              <span className="material-symbols-outlined text-lg">visibility</span>
                              Details
                            </button>
                          </td>
                        </tr>
                        {/* Row 5 */}
                        <tr className="group hover:bg-slate-50 dark:hover:bg-[#111418]/50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex flex-col">
                              <span className="text-slate-900 dark:text-white text-sm font-medium">Oct 27, 2026</span>
                              <span className="text-slate-500 dark:text-[#9dabb9] text-xs">08:12:44</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-500 flex items-center justify-center text-xs font-bold">AJ</div>
                              <span className="text-slate-900 dark:text-white text-sm">Admin_John</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-gray-700/50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-gray-300 ring-1 ring-inset ring-slate-200 dark:ring-gray-600">Exported Logs</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-slate-500 dark:text-[#9dabb9] text-sm">Audit History</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                            <span className="text-slate-500 dark:text-[#9dabb9] text-sm font-mono">192.168.1.10</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <div className="size-2 rounded-full bg-green-500"></div>
                              <span className="text-green-600 dark:text-green-400 text-sm font-medium">Low</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <button className="text-slate-500 dark:text-[#9dabb9] hover:text-slate-900 dark:hover:text-white text-sm font-medium flex items-center justify-end gap-1 w-full">
                              <span className="material-symbols-outlined text-lg">download</span>
                              Download
                            </button>
                          </td>
                        </tr>
                        {/* Row 6 */}
                        <tr className="group hover:bg-slate-50 dark:hover:bg-[#111418]/50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex flex-col">
                              <span className="text-slate-900 dark:text-white text-sm font-medium">Oct 26, 2026</span>
                              <span className="text-slate-500 dark:text-[#9dabb9] text-xs">22:05:11</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <div className="size-8 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-500 flex items-center justify-center text-xs font-bold">
                                <span className="material-symbols-outlined text-sm">smart_toy</span>
                              </div>
                              <span className="text-slate-900 dark:text-white text-sm">System_Auto</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center rounded-md bg-yellow-50 dark:bg-yellow-500/10 px-2.5 py-1 text-xs font-medium text-yellow-600 dark:text-yellow-400 ring-1 ring-inset ring-yellow-500/20">Flagged Phishing</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-slate-500 dark:text-[#9dabb9] text-sm">Real-time Scanner</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                            <span className="text-slate-500 dark:text-[#9dabb9] text-sm font-mono">45.22.19.112</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <div className="size-2 rounded-full bg-red-500"></div>
                              <span className="text-red-600 dark:text-red-400 text-sm font-medium">High</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <button className="text-slate-500 dark:text-[#9dabb9] hover:text-slate-900 dark:hover:text-white text-sm font-medium flex items-center justify-end gap-1 w-full">
                              <span className="material-symbols-outlined text-lg">visibility</span>
                              Investigate
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Pagination Footer */}
                  <div className="flex items-center justify-between border-t border-slate-200 dark:border-[#283039] bg-white dark:bg-[#1c2127] px-4 py-3 sm:px-6">
                    <div className="flex flex-1 justify-between sm:hidden">
                      <Link className="relative inline-flex items-center rounded-md border border-slate-200 dark:border-[#283039] bg-white dark:bg-[#111418] px-4 py-2 text-sm font-medium text-slate-700 dark:text-[#9dabb9] hover:bg-slate-50 dark:hover:bg-gray-800" to='/panel'>Anterior</Link>
                      <Link className="relative ml-3 inline-flex items-center rounded-md border border-slate-200 dark:border-[#283039] bg-white dark:bg-[#111418] px-4 py-2 text-sm font-medium text-slate-700 dark:text-[#9dabb9] hover:bg-slate-50 dark:hover:bg-gray-800" to='/panel'>Siguiente</Link>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-slate-500 dark:text-[#9dabb9]">
                          Showing
                          <span className="font-medium text-slate-900 dark:text-white mx-1">1</span>
                          to
                          <span className="font-medium text-slate-900 dark:text-white mx-1">6</span>
                          of
                          <span className="font-medium text-slate-900 dark:text-white mx-1">1,245</span>
                          results
                        </p>
                      </div>
                      <div>
                        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                          <Link className="relative inline-flex items-center rounded-l-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-200 dark:ring-[#283039] hover:bg-slate-50 dark:hover:bg-[#111418] focus:z-20 focus:outline-offset-0" to='/panel'>
                            <span className="sr-only">Previous</span>
                            <span className="material-symbols-outlined text-sm">chevron_left</span>
                          </Link>
                          <Link aria-current="page" className="relative z-10 inline-flex items-center bg-[#137fec] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" to='/panel'>1</Link>
                          <Link className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-700 dark:text-[#9dabb9] ring-1 ring-inset ring-slate-200 dark:ring-[#283039] hover:bg-slate-50 dark:hover:bg-[#111418] focus:z-20 focus:outline-offset-0" to='/panel'>2</Link>
                          <Link className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-700 dark:text-[#9dabb9] ring-1 ring-inset ring-slate-200 dark:ring-[#283039] hover:bg-slate-50 dark:hover:bg-[#111418] focus:z-20 focus:outline-offset-0" to='/panel'>3</Link>
                          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-400 ring-1 ring-inset ring-slate-200 dark:ring-[#283039] focus:outline-offset-0">...</span>
                          <Link className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-700 dark:text-[#9dabb9] ring-1 ring-inset ring-slate-200 dark:ring-[#283039] hover:bg-slate-50 dark:hover:bg-[#111418] focus:z-20 focus:outline-offset-0" to='/panel'>12</Link>
                          <Link className="relative inline-flex items-center rounded-r-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-200 dark:ring-[#283039] hover:bg-slate-50 dark:hover:bg-[#111418] focus:z-20 focus:outline-offset-0" to='/panel'>
                            <span className="sr-only">Next</span>
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                          </Link>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Drawer (Simulated) */}
        <div className={`hidden lg:flex flex-col w-[360px] border-l border-slate-200 dark:border-[#283039] bg-white dark:bg-[#1c2127] fixed right-0 top-[65px] bottom-0 z-40 transform transition-transform duration-300 shadow-2xl ${isDrawerOpen ? 'translate-x-0' : 'translate-x-[360px]'}`}>
          <div onClick={() => setIsDrawerOpen(!isDrawerOpen)} className="absolute -left-10 top-6 bg-white dark:bg-[#1c2127] p-2 rounded-l-lg border-l border-y border-slate-200 dark:border-[#283039] text-slate-500 dark:text-[#9dabb9] cursor-pointer shadow-lg">
            <span className="material-symbols-outlined">compare_arrows</span>
          </div>
          <div className="flex flex-col h-full">
            <div className="p-5 border-b border-slate-200 dark:border-[#283039]">
              <h3 className="text-slate-900 dark:text-white font-bold text-lg">Change Comparison</h3>
              <p className="text-slate-500 dark:text-[#9dabb9] text-sm">Before vs. After View</p>
            </div>
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-6">
              {/* Change Event Item */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 dark:text-[#9dabb9] uppercase font-bold tracking-wider">Config ID</span>
                    <span className="text-slate-900 dark:text-white text-sm">AI-MOD-8821</span>
                  </div>
                  <span className="bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs px-2 py-0.5 rounded">Modified</span>
                </div>
                {/* Before State */}
                <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-500/20 rounded-lg p-3">
                  <p className="text-red-600 dark:text-red-400 text-xs font-bold mb-2 uppercase">Before (Oct 27, 14:00)</p>
                  <div className="font-mono text-xs text-slate-600 dark:text-[#9dabb9]">
                    "sensitivity_threshold": <span className="text-slate-900 dark:text-white">0.75</span>,<br />
                    "auto_block": <span className="text-slate-900 dark:text-white">false</span>
                  </div>
                </div>
                {/* Arrow */}
                <div className="flex justify-center -my-2 relative z-10">
                  <div className="bg-white dark:bg-[#1c2127] rounded-full p-1 border border-slate-200 dark:border-[#283039]">
                    <span className="material-symbols-outlined text-slate-500 dark:text-[#9dabb9] text-sm">arrow_downward</span>
                  </div>
                </div>
                {/* After State */}
                <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-500/20 rounded-lg p-3">
                  <p className="text-green-600 dark:text-green-400 text-xs font-bold mb-2 uppercase">After (Oct 27, 14:32)</p>
                  <div className="font-mono text-xs text-slate-600 dark:text-[#9dabb9]">
                    "sensitivity_threshold": <span className="text-slate-900 dark:text-white">0.92</span>,<br />
                    "auto_block": <span className="text-slate-900 dark:text-white">true</span>
                  </div>
                </div>
              </div>
              <hr className="border-slate-200 dark:border-[#283039]" />
              <div className="flex flex-col gap-2">
                <p className="text-slate-900 dark:text-white text-sm font-medium">Modified By</p>
                <div className="flex items-center gap-3 bg-slate-50 dark:bg-[#111418] p-2 rounded-lg">
                  <div className="size-8 rounded-full bg-pink-100 dark:bg-pink-500/20 text-pink-600 dark:text-pink-500 flex items-center justify-center text-xs font-bold">AS</div>
                  <div className="flex flex-col">
                    <span className="text-slate-900 dark:text-white text-sm">Admin_Sarah</span>
                    <span className="text-slate-500 dark:text-[#9dabb9] text-xs">Principal Security Engineer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 border-t border-slate-200 dark:border-[#283039] bg-slate-50 dark:bg-[#111418]">
              <button className="w-full bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-[#283039] text-slate-900 dark:text-white rounded-lg py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-[#283039] transition-colors">
                Revert Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
