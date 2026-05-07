import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface RoiAnalyticsProps {
  onBack: () => void;
}

export default function RoiAnalytics({ onBack }: RoiAnalyticsProps) {
  return (
    <div className="bg-[#f6f6f8] dark:bg-[#101622] font-['Inter',sans-serif] text-slate-900 dark:text-[#e2e8f0] min-h-screen flex flex-col">
      <style>{`
        /* Custom scrollbar for data-dense look */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #101622; 
        }
        ::-webkit-scrollbar-thumb {
            background: #283042; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #3b465c; 
        }
      `}</style>
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden">
        {/* Header / Top Navigation */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#283042] bg-white dark:bg-[#101622] px-10 py-4 sticky top-0 z-50">
          <div className="flex items-center gap-4 cursor-pointer" onClick={onBack}>
            <div className="size-8 text-[#135bec] flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">shield_lock</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">AntiPhish AI</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8 items-center">
            <nav className="hidden md:flex items-center gap-8">
              <Link className="text-slate-600 dark:text-[#94a3b8] hover:text-[#135bec] dark:hover:text-white text-sm font-medium transition-colors" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
              <Link className="text-slate-600 dark:text-[#94a3b8] hover:text-[#135bec] dark:hover:text-white text-sm font-medium transition-colors" to='/informes'>Threat Intel</Link>
              <Link className="text-[#135bec] dark:text-white text-sm font-medium" to="/roi-analytics">ROI Analytics</Link>
              <Link className="text-slate-600 dark:text-[#94a3b8] hover:text-[#135bec] dark:hover:text-white text-sm font-medium transition-colors" to='/ajustes'>Configuración</Link>
            </nav>
            <div className="h-6 w-px bg-slate-200 dark:bg-[#283042]"></div>
            <button className="hidden sm:flex items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-[#135bec] hover:bg-[#0e45b5] text-white text-sm font-bold shadow-lg shadow-[#135bec]/20 transition-all">
              <span className="truncate">Download Report</span>
            </button>
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-slate-200 dark:border-[#283042]" data-alt="User profile picture" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col items-center py-8 px-6 lg:px-12">
          <div className="w-full max-w-7xl flex flex-col gap-8">
            {/* Page Title & Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-200 dark:border-[#283042] pb-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-semibold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-lg">monetization_on</span>
                  Financial Overview
                </div>
                <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">ROI &amp; Cost-Saving Analytics</h1>
                <p className="text-slate-500 dark:text-[#94a3b8] text-lg max-w-2xl">Real-time financial impact analysis of your security posture across the organization.</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-[#1c2333] border border-slate-200 dark:border-[#283042] hover:bg-slate-50 dark:hover:bg-[#283042] text-slate-700 dark:text-[#e2e8f0] text-sm font-medium transition-colors">
                  <span className="material-symbols-outlined text-lg">calendar_month</span>
                  <span>Year to Date</span>
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-slate-800 dark:bg-[#1c2333] border border-transparent hover:bg-slate-700 dark:hover:bg-[#283042] text-white text-sm font-medium transition-colors">
                  <span className="material-symbols-outlined text-lg">file_download</span>
                  <span>Export PDF</span>
                </button>
              </div>
            </div>

            {/* Hero Stats Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Main KPI Card */}
              <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl p-8 bg-gradient-to-br from-[#135bec]/90 to-blue-900 dark:from-blue-900 dark:to-[#101622] border border-blue-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-32 bg-[#135bec]/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="relative z-10 flex flex-col gap-1">
                  <span className="text-blue-100 font-medium">Total Estimated Savings (YTD)</span>
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-white text-5xl font-bold tracking-tight">$1.25M</h2>
                    <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-sm font-bold border border-emerald-500/30 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">trending_up</span>
                      15.4%
                    </span>
                  </div>
                </div>
                <div className="relative z-10 mt-8 space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-blue-700/50 pb-2">
                    <span className="text-blue-200">Prevented Breaches Value</span>
                    <span className="text-white font-semibold">$850k</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-blue-700/50 pb-2">
                    <span className="text-blue-200">IT Labor Saved</span>
                    <span className="text-white font-semibold">$355k</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-blue-200">Training Costs Avoided</span>
                    <span className="text-white font-semibold">$45k</span>
                  </div>
                </div>
                <div className="relative z-10 mt-6 pt-4 border-t border-blue-700/50">
                  <div className="flex items-center gap-2 text-blue-200 text-xs">
                    <span className="material-symbols-outlined text-sm">info</span>
                    Based on industry avg. cost per breach ($4.45M)
                  </div>
                </div>
              </div>

              {/* Secondary Metric Cards */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="flex flex-col rounded-2xl border border-slate-200 dark:border-[#283042] bg-white dark:bg-[#1c2333] p-6 shadow-sm relative overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-[#135bec] dark:text-blue-400">
                      <span className="material-symbols-outlined">schedule</span>
                    </div>
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold flex items-center bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">
                      +12% <span className="material-symbols-outlined text-sm ml-1">arrow_upward</span>
                    </span>
                  </div>
                  <h3 className="text-slate-500 dark:text-[#94a3b8] text-sm font-medium">Phishing Remediation</h3>
                  <div className="mt-2 mb-1">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">1,450</span>
                    <span className="text-lg text-slate-500 dark:text-[#94a3b8] font-medium ml-1">hours</span>
                  </div>
                  <p className="text-slate-400 dark:text-slate-500 text-xs mt-auto">Equivalent to 0.7 FTE annually</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#135bec] to-transparent opacity-50"></div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col rounded-2xl border border-slate-200 dark:border-[#283042] bg-white dark:bg-[#1c2333] p-6 shadow-sm relative overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-[#D4AF37]">
                      <span className="material-symbols-outlined">gpp_maybe</span>
                    </div>
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold flex items-center bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">
                      +5% <span className="material-symbols-outlined text-sm ml-1">arrow_upward</span>
                    </span>
                  </div>
                  <h3 className="text-slate-500 dark:text-[#94a3b8] text-sm font-medium">Risk Exposure Reduced</h3>
                  <div className="mt-2 mb-1">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">$850k</span>
                  </div>
                  <p className="text-slate-400 dark:text-slate-500 text-xs mt-auto">Potential breach cost avoided</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent opacity-50"></div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col rounded-2xl border border-slate-200 dark:border-[#283042] bg-white dark:bg-[#1c2333] p-6 shadow-sm relative overflow-hidden">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                      <span className="material-symbols-outlined">school</span>
                    </div>
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold flex items-center bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">
                      +20% <span className="material-symbols-outlined text-sm ml-1">arrow_upward</span>
                    </span>
                  </div>
                  <h3 className="text-slate-500 dark:text-[#94a3b8] text-sm font-medium">Training Efficiency</h3>
                  <div className="mt-2 mb-1">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">$45k</span>
                  </div>
                  <p className="text-slate-400 dark:text-slate-500 text-xs mt-auto">Saved in seminar costs</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-transparent opacity-50"></div>
                </div>
              </div>
            </div>

            {/* Detailed Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Chart Area */}
              <div className="rounded-2xl border border-slate-200 dark:border-[#283042] bg-white dark:bg-[#1c2333] p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Security Spend vs. Potential Loss</h3>
                    <p className="text-sm text-slate-500 dark:text-[#94a3b8]">Quarterly comparison of ROI</p>
                  </div>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-[#283042] rounded-lg transition-colors text-slate-400 dark:text-slate-500">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>

                {/* Pseudo Chart (CSS Implementation) */}
                <div className="h-64 flex items-end gap-4 sm:gap-8 justify-center pb-4 border-b border-slate-200 dark:border-[#283042]/50">
                  {/* Q1 */}
                  <div className="flex flex-col items-center gap-2 group w-full">
                    <div className="relative w-full max-w-[60px] flex items-end justify-center h-full gap-1">
                      <div className="w-1/2 bg-slate-300 dark:bg-[#283042] rounded-t-sm h-[30%] group-hover:bg-slate-400 dark:group-hover:bg-slate-600 transition-all relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-slate-800 text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$12k Spend</div>
                      </div>
                      <div className="w-1/2 bg-[#D4AF37] rounded-t-sm h-[55%] group-hover:bg-yellow-400 transition-all relative shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-slate-800 text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$45k Saved</div>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-[#94a3b8] font-medium">Q1</span>
                  </div>

                  {/* Q2 */}
                  <div className="flex flex-col items-center gap-2 group w-full">
                    <div className="relative w-full max-w-[60px] flex items-end justify-center h-full gap-1">
                      <div className="w-1/2 bg-slate-300 dark:bg-[#283042] rounded-t-sm h-[35%] group-hover:bg-slate-400 dark:group-hover:bg-slate-600 transition-all relative"></div>
                      <div className="w-1/2 bg-[#D4AF37] rounded-t-sm h-[68%] group-hover:bg-yellow-400 transition-all relative shadow-[0_0_15px_rgba(212,175,55,0.3)]"></div>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-[#94a3b8] font-medium">Q2</span>
                  </div>

                  {/* Q3 */}
                  <div className="flex flex-col items-center gap-2 group w-full">
                    <div className="relative w-full max-w-[60px] flex items-end justify-center h-full gap-1">
                      <div className="w-1/2 bg-slate-300 dark:bg-[#283042] rounded-t-sm h-[32%] group-hover:bg-slate-400 dark:group-hover:bg-slate-600 transition-all relative"></div>
                      <div className="w-1/2 bg-[#D4AF37] rounded-t-sm h-[75%] group-hover:bg-yellow-400 transition-all relative shadow-[0_0_15px_rgba(212,175,55,0.3)]"></div>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-[#94a3b8] font-medium">Q3</span>
                  </div>

                  {/* Q4 (Current) */}
                  <div className="flex flex-col items-center gap-2 group w-full">
                    <div className="relative w-full max-w-[60px] flex items-end justify-center h-full gap-1">
                      <div className="w-1/2 bg-slate-300 dark:bg-[#283042] rounded-t-sm h-[38%] group-hover:bg-slate-400 dark:group-hover:bg-slate-600 transition-all relative"></div>
                      <div className="w-1/2 bg-[#135bec] rounded-t-sm h-[88%] group-hover:bg-blue-500 transition-all relative shadow-[0_0_15px_rgba(19,91,236,0.5)]">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold px-2 py-1 rounded shadow border border-slate-200 dark:border-slate-700 whitespace-nowrap z-10">Current</div>
                      </div>
                    </div>
                    <span className="text-xs text-slate-900 dark:text-white font-bold">Q4</span>
                  </div>
                </div>

                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-[#283042]"></div>
                    <span className="text-xs text-slate-500 dark:text-[#94a3b8]">Security Spend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#D4AF37] shadow-[0_0_5px_rgba(212,175,55,0.5)]"></div>
                    <span className="text-xs text-slate-500 dark:text-[#94a3b8]">Potential Loss Avoided</span>
                  </div>
                </div>
              </div>

              {/* Cost per Attack & Breakdown */}
              <div className="flex flex-col gap-6">
                {/* Cost Per Attack Metric */}
                <div className="rounded-2xl border border-slate-200 dark:border-[#283042] bg-white dark:bg-[#1c2333] p-6 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute right-0 top-0 p-16 bg-gradient-to-br from-[#135bec]/10 to-transparent rounded-bl-full pointer-events-none"></div>
                  <h3 className="text-slate-500 dark:text-[#94a3b8] text-sm font-medium mb-1 z-10">Average Cost per Attack Prevented</h3>
                  <div className="flex items-end gap-3 z-10">
                    <span className="text-4xl font-black text-slate-900 dark:text-white">$4,250</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 mb-1.5">vs $5,100 Industry Avg.</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-[#283042] h-2 rounded-full mt-4 overflow-hidden z-10">
                    <div className="bg-[#135bec] h-full rounded-full" style={{ width: '82%' }}></div>
                  </div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 z-10">Your efficiency is in the top 15% of your sector.</p>
                </div>

                {/* Categorized Savings List */}
                <div className="flex-1 rounded-2xl border border-slate-200 dark:border-[#283042] bg-white dark:bg-[#1c2333] p-6 overflow-hidden flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Savings by Department</h3>
                  <div className="space-y-4 overflow-y-auto pr-2 max-h-[220px]">
                    {/* Row 1 */}
                    <div className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 dark:hover:bg-[#283042]/50 p-2 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-[#135bec] dark:text-blue-400">
                          <span className="material-symbols-outlined text-xl">finance</span>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-slate-200">Finance</div>
                          <div className="text-xs text-slate-500 dark:text-[#94a3b8]">High Value Targets</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900 dark:text-white">$450k</div>
                        <div className="text-xs text-emerald-500">32 incidents blocked</div>
                      </div>
                    </div>
                    {/* Row 2 */}
                    <div className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 dark:hover:bg-[#283042]/50 p-2 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                          <span className="material-symbols-outlined text-xl">engineering</span>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-slate-200">Engineering</div>
                          <div className="text-xs text-slate-500 dark:text-[#94a3b8]">IP Protection</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900 dark:text-white">$320k</div>
                        <div className="text-xs text-emerald-500">145 incidents blocked</div>
                      </div>
                    </div>
                    {/* Row 3 */}
                    <div className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 dark:hover:bg-[#283042]/50 p-2 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
                          <span className="material-symbols-outlined text-xl">support_agent</span>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-slate-200">Customer Support</div>
                          <div className="text-xs text-slate-500 dark:text-[#94a3b8]">Data Entry</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900 dark:text-white">$180k</div>
                        <div className="text-xs text-emerald-500">210 incidents blocked</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Indication */}
            <div className="text-center pb-8 pt-4">
              <p className="text-xs text-slate-400 dark:text-slate-600">
                Data updated in real-time. Last sync: 14 mins ago. <br />
                ROI calculations based on <Link className="underline hover:text-[#135bec] transition-colors" to='/panel'>Forrester TEI methodology</Link>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
