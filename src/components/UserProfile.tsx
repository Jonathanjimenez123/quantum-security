import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

interface UserProfileProps {
  onBack: () => void;
  onLeaderboard?: () => void;
  onTraining?: () => void;
}

export default function UserProfile({ onBack, onLeaderboard, onTraining }: UserProfileProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Top Navigation Bar */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-50">
            <div className="flex items-center gap-4 text-primary cursor-pointer" onClick={onBack}>
              <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">shield</span>
              </div>
              <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">PhishGuard</h2>
            </div>
            <div className="flex flex-1 justify-end gap-4 items-center">
              <div className="flex gap-2">
                <button className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">notifications</span>
                </button>
                <button className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">settings</span>
                </button>
              </div>
              <div className="h-8 w-[1px] bg-slate-200 dark:border-slate-800"></div>
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold leading-none">{auth.currentUser?.displayName || 'Usuario'}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Security Guardian</p>
                </div>
                <div className="bg-primary/20 rounded-full size-10 border-2 border-primary overflow-hidden">
                  <img className="w-full h-full object-cover" data-alt="Professional portrait of a male user" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"}/>
                </div>
              </div>
            </div>
          </header>

          <main className="flex flex-1 flex-col lg:flex-row">
            {/* Sidebar */}
            <aside className="w-full lg:w-64 border-r border-slate-200 dark:border-slate-800 p-4 flex flex-col gap-2 bg-background-light dark:bg-background-dark">
              <div onClick={onBack} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                <span className="material-symbols-outlined">dashboard</span>
                <p className="text-sm font-medium leading-normal">Panel de Control</p>
              </div>
              <div onClick={onTraining} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                <span className="material-symbols-outlined">school</span>
                <p className="text-sm font-medium leading-normal">Training</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                <span className="material-symbols-outlined">target</span>
                <p className="text-sm font-medium leading-normal">Simulations</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>person</span>
                <p className="text-sm font-medium leading-normal">Profile</p>
              </div>
              <div onClick={onLeaderboard} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                <span className="material-symbols-outlined">group</span>
                <p className="text-sm font-medium leading-normal">Leaderboard</p>
              </div>
            </aside>

            {/* Content Area */}
            <div className="flex-1 flex flex-col p-6 lg:p-10 gap-8 max-w-6xl mx-auto w-full">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative">
                  <div className="size-32 rounded-full border-4 border-primary p-1 bg-background-dark overflow-hidden">
                    <img className="w-full h-full object-cover rounded-full" data-alt="User avatar" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"}/>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-primary text-white size-10 rounded-full flex items-center justify-center border-4 border-background-dark">
                    <span className="material-symbols-outlined text-sm">verified</span>
                  </div>
                </div>
                <div className="flex flex-col items-center md:items-start grow gap-2">
                  <div className="flex flex-col md:flex-row items-center md:items-end gap-3">
                    <h1 className="text-3xl font-bold tracking-tight">{auth.currentUser?.displayName || 'Usuario'}</h1>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1">Security Guardian</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400">Level 42 • 12,500 Total XP</p>
                  
                  {/* Growth & Level Progress */}
                  <div className="w-full max-w-md mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Next Rank: <span className="text-primary">Cybersecurity Pro</span></span>
                      <span className="text-sm font-bold text-slate-500">75%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">trending_up</span>
                      1,500 XP to level up
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-background-light dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center">
                      <span className="material-symbols-outlined">gpp_maybe</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Threats Blocked</p>
                  </div>
                  <p className="text-2xl font-bold">1,248</p>
                  <p className="text-xs text-green-500 mt-1">+12% from last month</p>
                </div>
                <div className="bg-background-light dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                      <span className="material-symbols-outlined">history_edu</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Trainings Done</p>
                  </div>
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-xs text-slate-500 mt-1">4 pending modules</p>
                </div>
                <div className="bg-background-light dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                      <span className="material-symbols-outlined">phishing</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Simulations Passed</p>
                  </div>
                  <p className="text-2xl font-bold">15/15</p>
                  <p className="text-xs text-emerald-500 mt-1">100% Success Rate</p>
                </div>
                <div className="bg-background-light dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-10 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
                      <span className="material-symbols-outlined">speed</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Detection Score</p>
                  </div>
                  <p className="text-2xl font-bold">98.2</p>
                  <p className="text-xs text-slate-500 mt-1">Top 5% of users</p>
                </div>
              </section>

              {/* Two Column Grid for Activity and Badges */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Achievements & Badges */}
                <section className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Achievements &amp; Badges</h3>
                    <button className="text-primary text-sm font-semibold hover:underline">Ver Todo</button>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="group relative flex flex-col items-center gap-3 p-4 bg-slate-100 dark:bg-slate-900/30 rounded-xl border border-transparent hover:border-primary/50 transition-all cursor-help">
                      <div className="size-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                        <span className="material-symbols-outlined text-white text-3xl">psychology</span>
                      </div>
                      <p className="text-xs font-bold text-center">NLP Expert</p>
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 p-2 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 text-center">
                        Successfully identified 50+ language-based phishing attempts.
                      </div>
                    </div>
                    <div className="group relative flex flex-col items-center gap-3 p-4 bg-slate-100 dark:bg-slate-900/30 rounded-xl border border-transparent hover:border-primary/50 transition-all cursor-help">
                      <div className="size-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                        <span className="material-symbols-outlined text-white text-3xl">terminal</span>
                      </div>
                      <p className="text-xs font-bold text-center">Zero-Day Hunter</p>
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 p-2 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 text-center">
                        Flagged a novel attack pattern before global definitions were released.
                      </div>
                    </div>
                    <div className="group relative flex flex-col items-center gap-3 p-4 bg-slate-100 dark:bg-slate-900/30 rounded-xl border border-transparent hover:border-primary/50 transition-all cursor-help">
                      <div className="size-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <span className="material-symbols-outlined text-white text-3xl">public</span>
                      </div>
                      <p className="text-xs font-bold text-center">Safe Surfer</p>
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 p-2 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 text-center">
                        Maintained 30 days of zero risky clicks while active.
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 bg-slate-100/50 dark:bg-slate-900/10 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 opacity-60">
                      <div className="size-16 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                        <span className="material-symbols-outlined text-slate-400 text-3xl">lock_open</span>
                      </div>
                      <p className="text-xs font-bold text-slate-400 text-center">Firewall Master</p>
                    </div>
                  </div>
                </section>

                {/* Recent Activity */}
                <section className="flex flex-col gap-6">
                  <h3 className="text-xl font-bold">Recent Activity</h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-800">
                      <div className="size-10 rounded-full bg-green-500/20 text-green-500 flex shrink-0 items-center justify-center">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold">Completed: Advanced Encryption Course</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Earned 500 XP • 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-800">
                      <div className="size-10 rounded-full bg-primary/20 text-primary flex shrink-0 items-center justify-center">
                        <span className="material-symbols-outlined text-sm">military_tech</span>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold">Achievement Unlocked: Zero-Day Hunter</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Rare Achievement • Yesterday</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-800">
                      <div className="size-10 rounded-full bg-orange-500/20 text-orange-500 flex shrink-0 items-center justify-center">
                        <span className="material-symbols-outlined text-sm">priority_high</span>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold">Blocked 12 malicious links in 'Urgent HR' email</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Real-time protection active • 2 days ago</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-800">
                      <div className="size-10 rounded-full bg-blue-500/20 text-blue-500 flex shrink-0 items-center justify-center">
                        <span className="material-symbols-outlined text-sm">login</span>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold">New login from Chrome on macOS - London, UK</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Security check passed • 3 days ago</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>

          {/* Bottom Stats / Footer Area */}
          <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 p-6 bg-slate-100/50 dark:bg-slate-950/50">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">creada en 2026 Jonathan Jimenez Escobar</p>
              <div className="flex gap-6">
                <Link className="text-xs text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" to="/privacy-compliance">Privacy Policy</Link>
                <Link className="text-xs text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" to='/panel'>Security FAQ</Link>
                <Link className="text-xs text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" to='/centro-ayuda'>Support</Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
