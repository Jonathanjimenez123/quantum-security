import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface UserMonthlyProtectionSummaryProps {
  onBack: () => void;
}

export default function UserMonthlyProtectionSummary({ onBack }: UserMonthlyProtectionSummaryProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-200 min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-10 py-4 bg-white dark:bg-[#111318]">
        <div className="flex items-center gap-4">
          <div className="size-8 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">shield_lock</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Anti-Phishing Guard</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8 items-center">
          <nav className="hidden md:flex items-center gap-9">
            <button onClick={onBack} className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white text-sm font-medium leading-normal transition-colors">Panel de Control</button>
            <Link className="text-slate-900 dark:text-white text-sm font-medium leading-normal" to='/reporte-incidente'>Reports</Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white text-sm font-medium leading-normal transition-colors" to='/ajustes'>Configuración</Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white text-sm font-medium leading-normal transition-colors" to='/centro-ayuda'>Help</Link>
          </nav>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary hover:bg-blue-700 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-blue-500/20">
            <span className="truncate">Upgrade</span>
          </button>
          <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-slate-200 dark:border-slate-700" data-alt="User profile picture" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-10 py-8 flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-col gap-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Monthly Protection Summary</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base">Your personal security performance for October</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300">
                <span className="material-symbols-outlined text-[20px]">download</span>
                Export PDF
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300">
                <span className="material-symbols-outlined text-[20px]">share</span>
                Share
              </button>
            </div>
          </div>
          {/* Top Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Protection Score Card */}
            <div className="relative overflow-hidden rounded-xl bg-white dark:bg-[#1c212c] p-6 shadow-sm border border-slate-200 dark:border-slate-800 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full -mr-8 -mt-8"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Protection Score</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-slate-900 dark:text-white">94</span>
                    <span className="text-xl text-slate-400 dark:text-slate-500 font-medium">/100</span>
                  </div>
                </div>
                <div className="size-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mb-3">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
              <p className="flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="material-symbols-outlined text-base">trending_up</span>
                <span>+5% from last month</span>
              </p>
            </div>
            {/* Threats Blocked Card */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-blue-600 p-6 shadow-lg shadow-blue-600/20 text-white">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl translate-x-12 translate-y-12"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <p className="text-blue-100 text-sm font-medium uppercase tracking-wider">Total Threats Blocked</p>
                  <span className="material-symbols-outlined text-white/80 text-3xl">block</span>
                </div>
                <div>
                  <span className="text-5xl font-black tracking-tight">1,248</span>
                  <div className="mt-2 flex items-center gap-2 text-blue-100">
                    <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-semibold">+124 this week</span>
                    <span className="text-xs opacity-80">Automated defense active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Secondary Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Safe Browsing Streak */}
            <div className="group relative rounded-xl bg-white dark:bg-[#1c212c] p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                  <span className="material-symbols-outlined">local_fire_department</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Safe Streak</h3>
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">14</span>
                <span className="text-base text-slate-500 dark:text-slate-400 mb-1 font-medium">days</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                You haven't encountered a threat in two weeks. Keep it up!
              </p>
              <div className="mt-4 flex gap-1">
                {/* Visual representation of streak */}
                <div className="h-1.5 w-full rounded-full bg-orange-500"></div>
                <div className="h-1.5 w-full rounded-full bg-orange-500"></div>
                <div className="h-1.5 w-full rounded-full bg-orange-500"></div>
                <div className="h-1.5 w-full rounded-full bg-orange-500"></div>
                <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700"></div>
              </div>
            </div>
            {/* Learning Progress */}
            <div className="group relative rounded-xl bg-white dark:bg-[#1c212c] p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Learning</h3>
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-black text-slate-900 dark:text-white group-hover:text-purple-500 transition-colors">3<span className="text-xl text-slate-400 font-medium">/4</span></span>
                <span className="text-base text-slate-500 dark:text-slate-400 mb-1 font-medium">modules</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                You're becoming a security expert. Only 1 module left for the 'Guardian' badge.
              </p>
              <button className="mt-4 w-full py-2 rounded-lg border border-purple-500/30 text-purple-600 dark:text-purple-400 text-sm font-bold hover:bg-purple-500/10 transition-colors">
                Continue Training
              </button>
            </div>
            {/* Community Contribution */}
            <div className="group relative rounded-xl bg-white dark:bg-[#1c212c] p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-500">
                  <span className="material-symbols-outlined">volunteer_activism</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Community</h3>
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-black text-slate-900 dark:text-white group-hover:text-teal-500 transition-colors">8</span>
                <span className="text-base text-slate-500 dark:text-slate-400 mb-1 font-medium">reports verified</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Your reports helped protect <span className="text-slate-900 dark:text-white font-bold">450+</span> other users this month.
              </p>
              <div className="mt-4 flex -space-x-2 overflow-hidden">
                <img alt="User 1" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#1c212c]" data-alt="Community member avatar" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
                <img alt="User 2" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#1c212c]" data-alt="Community member avatar" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
                <img alt="User 3" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#1c212c]" data-alt="Community member avatar" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 ring-2 ring-white dark:ring-[#1c212c] text-xs font-bold text-slate-500 dark:text-slate-300">+40</div>
              </div>
            </div>
          </div>
          {/* Activity Chart Section */}
          <div className="rounded-xl bg-white dark:bg-[#1c212c] p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Daily Protection Activity</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Attempts blocked vs. Safe sites visited</p>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 dark:bg-[#151921] p-1 rounded-lg border border-slate-200 dark:border-slate-800">
                <button className="px-3 py-1.5 rounded-md bg-white dark:bg-slate-700 shadow-sm text-xs font-bold text-slate-900 dark:text-white">Week</button>
                <button className="px-3 py-1.5 rounded-md text-slate-500 dark:text-slate-400 text-xs font-medium hover:text-slate-900 dark:hover:text-white transition-colors">Month</button>
                <button className="px-3 py-1.5 rounded-md text-slate-500 dark:text-slate-400 text-xs font-medium hover:text-slate-900 dark:hover:text-white transition-colors">Year</button>
              </div>
            </div>
            {/* Mock Chart Area - Replacing Canvas/JS with CSS/HTML Representation */}
            <div className="relative w-full h-64 md:h-80 flex items-end gap-2 md:gap-4 px-2">
              {/* Y-Axis Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
                <div className="w-full border-t border-dashed border-slate-200 dark:border-slate-700/50 h-0"></div>
                <div className="w-full border-t border-dashed border-slate-200 dark:border-slate-700/50 h-0"></div>
                <div className="w-full border-t border-dashed border-slate-200 dark:border-slate-700/50 h-0"></div>
                <div className="w-full border-t border-dashed border-slate-200 dark:border-slate-700/50 h-0"></div>
                <div className="w-full border-t border-slate-200 dark:border-slate-700 h-0"></div>
              </div>
              {/* Bars (representing daily activity) */}
              {/* Used bars for reliability without JS chart libraries, styled to look like a modern histogram */}
              <div className="flex-1 flex items-end justify-between h-full z-10 pb-6 pl-6">
                {/* Day 1 */}
                <div className="group flex flex-col items-center gap-2 w-full h-full justify-end">
                  <div className="w-2 md:w-6 bg-blue-500/20 rounded-t-sm h-[40%] relative group-hover:bg-blue-500/40 transition-all">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm h-[30%]"></div>
                  </div>
                  <span className="text-xs text-slate-400 dark:text-slate-500">Mon</span>
                </div>
                {/* Day 2 */}
                <div className="group flex flex-col items-center gap-2 w-full h-full justify-end">
                  <div className="w-2 md:w-6 bg-blue-500/20 rounded-t-sm h-[65%] relative group-hover:bg-blue-500/40 transition-all">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm h-[15%]"></div>
                  </div>
                  <span className="text-xs text-slate-400 dark:text-slate-500">Tue</span>
                </div>
                {/* Day 3 */}
                <div className="group flex flex-col items-center gap-2 w-full h-full justify-end">
                  <div className="w-2 md:w-6 bg-blue-500/20 rounded-t-sm h-[50%] relative group-hover:bg-blue-500/40 transition-all">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm h-[45%]"></div>
                    {/* Tooltip Mockup */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 shadow-xl">
                      45 Threats
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 dark:text-slate-500">Wed</span>
                </div>
                {/* Day 4 */}
                <div className="group flex flex-col items-center gap-2 w-full h-full justify-end">
                  <div className="w-2 md:w-6 bg-blue-500/20 rounded-t-sm h-[30%] relative group-hover:bg-blue-500/40 transition-all">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm h-[10%]"></div>
                  </div>
                  <span className="text-xs text-slate-400 dark:text-slate-500">Thu</span>
                </div>
                {/* Day 5 */}
                <div className="group flex flex-col items-center gap-2 w-full h-full justify-end">
                  <div className="w-2 md:w-6 bg-blue-500/20 rounded-t-sm h-[80%] relative group-hover:bg-blue-500/40 transition-all">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm h-[25%]"></div>
                  </div>
                  <span className="text-xs text-slate-400 dark:text-slate-500">Fri</span>
                </div>
                {/* Day 6 */}
                <div className="group flex flex-col items-center gap-2 w-full h-full justify-end">
                  <div className="w-2 md:w-6 bg-blue-500/20 rounded-t-sm h-[45%] relative group-hover:bg-blue-500/40 transition-all">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm h-[5%]"></div>
                  </div>
                  <span className="text-xs text-slate-400 dark:text-slate-500">Sat</span>
                </div>
                {/* Day 7 */}
                <div className="group flex flex-col items-center gap-2 w-full h-full justify-end">
                  <div className="w-2 md:w-6 bg-blue-500/20 rounded-t-sm h-[60%] relative group-hover:bg-blue-500/40 transition-all">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm h-[20%]"></div>
                  </div>
                  <span className="text-xs text-slate-400 dark:text-slate-500">Sun</span>
                </div>
              </div>
              {/* Y-Axis Labels */}
              <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-slate-400 dark:text-slate-500 pr-2 border-r border-slate-200 dark:border-slate-700 h-[calc(100%-24px)]">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-sm"></div>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Threats Blocked</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500/20 rounded-sm"></div>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Safe Sites Scanned</span>
              </div>
            </div>
          </div>
          {/* Promotion / Upgrade Banner */}
          <div className="rounded-xl overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 dark:from-[#151921] dark:to-[#0f1218] p-1 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
              <div className="flex flex-col gap-2 max-w-xl">
                <h2 className="text-xl md:text-2xl font-bold text-white">Unlock Advanced Family Protection</h2>
                <p className="text-slate-300 text-sm md:text-base">Extend your 94/100 protection score to 5 family devices. Includes mobile protection and dedicated support.</p>
              </div>
              <button className="shrink-0 px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors shadow-lg">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
