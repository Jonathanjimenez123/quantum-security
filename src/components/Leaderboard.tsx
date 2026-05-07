import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface LeaderboardProps {
  onBack: () => void;
}

export default function Leaderboard({ onBack }: LeaderboardProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-slate-900 dark:text-slate-100 antialiased">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-10 py-3 shadow-sm">
        <div className="flex items-center gap-4 text-slate-900 dark:text-white cursor-pointer" onClick={onBack}>
          <div className="size-8 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">security</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Security Shield AI</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8 items-center">
          <nav className="hidden md:flex items-center gap-6">
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
            <Link className="text-primary font-bold text-sm leading-normal" to='/panel'>Leaderboard</Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" to='/entrenamiento-interactivo'>Training</Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" to='/ajustes'>Configuración</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex h-9 cursor-pointer items-center justify-center rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900 px-4 text-sm font-bold hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors">
              <span className="mr-2 material-symbols-outlined text-lg">warning</span>
              <span className="truncate">Report Phishing</span>
            </button>
            <div className="relative group cursor-pointer">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 border-2 border-slate-200 dark:border-slate-700" data-alt="User profile avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
              <div className="absolute bottom-0 right-0 size-3 rounded-full bg-green-500 border-2 border-white dark:border-slate-900"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Leaderboard Content */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Header Section */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Security Champions</h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Recognizing our top defenders against phishing threats.</p>
          </div>

          {/* Top 3 Podium (Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end mb-4">
            {/* 2nd Place */}
            <div className="order-2 sm:order-1 flex flex-col bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden h-fit sm:h-[240px] justify-end group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-300"></div>
              <div className="absolute top-4 right-4 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold px-3 py-1 rounded-full text-xs">#2</div>
              <div className="flex flex-col items-center text-center z-10">
                <div className="relative mb-3">
                  <div className="w-20 h-20 rounded-full border-4 border-slate-300 bg-cover bg-center" data-alt="Second place winner avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                  <div className="absolute -bottom-2 -right-2 bg-slate-300 text-white rounded-full p-1 border-2 border-white dark:border-slate-800">
                    <span className="material-symbols-outlined text-sm">trophy</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Mike R.</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Finance</p>
                <div className="bg-slate-50 dark:bg-slate-900/50 px-3 py-1 rounded-lg text-slate-700 dark:text-slate-200 font-bold text-sm">2,350 XP</div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-50 dark:from-slate-900/50 to-transparent pointer-events-none"></div>
            </div>

            {/* 1st Place */}
            <div className="order-1 sm:order-2 flex flex-col bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border-2 border-primary/20 relative overflow-hidden h-fit sm:h-[280px] justify-end group hover:-translate-y-1 transition-transform duration-300 z-10">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-yellow-400"></div>
              <div className="absolute top-4 right-4 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 font-bold px-3 py-1 rounded-full text-xs">#1</div>
              <div className="flex flex-col items-center text-center z-10">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full border-4 border-yellow-400 bg-cover bg-center shadow-lg" data-alt="First place winner avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-yellow-400 drop-shadow-sm animate-bounce">
                    <span className="material-symbols-outlined text-4xl filled-icon">crown</span>
                  </div>
                </div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white">Sarah J.</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Engineering</p>
                <div className="bg-primary text-white px-4 py-1.5 rounded-lg font-bold text-base shadow-primary/30 shadow-md">2,500 XP</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 pointer-events-none"></div>
            </div>

            {/* 3rd Place */}
            <div className="order-3 flex flex-col bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden h-fit sm:h-[220px] justify-end group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-700"></div>
              <div className="absolute top-4 right-4 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400 font-bold px-3 py-1 rounded-full text-xs">#3</div>
              <div className="flex flex-col items-center text-center z-10">
                <div className="relative mb-3">
                  <div className="w-20 h-20 rounded-full border-4 border-orange-700/60 bg-cover bg-center" data-alt="Third place winner avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Emily C.</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Product</p>
                <div className="bg-slate-50 dark:bg-slate-900/50 px-3 py-1 rounded-lg text-slate-700 dark:text-slate-200 font-bold text-sm">2,100 XP</div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-50 dark:from-slate-900/50 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Leaderboard Table */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-20">Rank</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Usuario</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 hidden sm:table-cell">Department</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Shield Level</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                  {/* Row 4 */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 font-medium">04</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-cover bg-center" data-alt="User avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                        <div className="font-semibold text-slate-900 dark:text-white">Alex M.</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300 hidden sm:table-cell">IT Security</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 text-xs font-bold border border-yellow-200 dark:border-yellow-800">
                        <span className="material-symbols-outlined text-sm">verified_user</span> Gold
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white">1,950</td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 font-medium">05</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-cover bg-center" data-alt="User avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                        <div className="font-semibold text-slate-900 dark:text-white">Jessica T.</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300 hidden sm:table-cell">HR</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold border border-slate-200 dark:border-slate-600">
                        <span className="material-symbols-outlined text-sm">shield</span> Silver
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white">1,820</td>
                  </tr>
                  {/* Row 6 */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 font-medium">06</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-cover bg-center" data-alt="User avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                        <div className="font-semibold text-slate-900 dark:text-white">David L.</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300 hidden sm:table-cell">Finance</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold border border-slate-200 dark:border-slate-600">
                        <span className="material-symbols-outlined text-sm">shield</span> Silver
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white">1,750</td>
                  </tr>
                  {/* Row 7 */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 font-medium">07</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-cover bg-center" data-alt="User avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                        <div className="font-semibold text-slate-900 dark:text-white">Chris P.</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300 hidden sm:table-cell">Engineering</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 text-xs font-bold border border-orange-100 dark:border-orange-900/40">
                        <span className="material-symbols-outlined text-sm">shield_moon</span> Bronze
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white">1,600</td>
                  </tr>
                  {/* Row 8 */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 font-medium">08</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-cover bg-center" data-alt="User avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                        <div className="font-semibold text-slate-900 dark:text-white">Tom H.</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300 hidden sm:table-cell">Sales</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 text-xs font-bold border border-orange-100 dark:border-orange-900/40">
                        <span className="material-symbols-outlined text-sm">shield_moon</span> Bronze
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white">1,550</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sticky User Rank */}
          <div className="sticky bottom-4 z-30">
            <div className="bg-slate-900 dark:bg-primary rounded-xl p-4 shadow-xl flex items-center justify-between text-white border border-slate-700 dark:border-primary/50 ring-4 ring-slate-900/10 dark:ring-primary/20 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="text-slate-400 dark:text-white/80 font-bold text-lg w-8 text-center">12</div>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-cover bg-center border-2 border-white/20" data-alt="Current user avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                  <div className="flex flex-col">
                    <span className="font-bold text-white">You</span>
                    <span className="text-xs text-slate-400 dark:text-white/80">Marketing Dept.</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-xs text-slate-400 dark:text-white/70">Next Rank: #11 (50pts)</span>
                  <div className="w-32 h-1.5 bg-slate-700 dark:bg-black/20 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-green-500 w-[80%]" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="text-xl font-bold text-white">1,200 XP</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar Widgets */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Monthly Top Department */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Top Department</h3>
              <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded">October</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="size-14 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <span className="material-symbols-outlined text-3xl">engineering</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Engineering</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Leading with 12,450 XP</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">1. Engineering</span>
                <span className="font-bold text-slate-900 dark:text-white">12,450</span>
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-full rounded-full"></div>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-slate-600 dark:text-slate-300">2. Sales</span>
                <span className="font-bold text-slate-900 dark:text-white">10,200</span>
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500/60 w-[82%] rounded-full"></div>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-slate-600 dark:text-slate-300">3. Marketing</span>
                <span className="font-bold text-slate-900 dark:text-white">8,900</span>
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500/30 w-[70%] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Badges to Earn */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-white">Badges to Earn</h3>
              <Link className="text-sm text-primary font-medium hover:underline" to='/panel'>Ver Todo</Link>
            </div>
            {/* Badge 1 */}
            <div className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors cursor-pointer border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
              <div className="size-12 shrink-0 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white shadow-md shadow-rose-200 dark:shadow-none">
                <span className="material-symbols-outlined">bug_report</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Phish Hunter</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Report 5 suspicious emails this week.</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 w-[60%] rounded-full"></div>
                  </div>
                  <span className="text-[10px] font-bold text-rose-500">3/5</span>
                </div>
              </div>
            </div>
            {/* Badge 2 */}
            <div className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors cursor-pointer border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
              <div className="size-12 shrink-0 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-200 dark:shadow-none">
                <span className="material-symbols-outlined">school</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Knowledge Master</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Complete the 'Social Engineering' module.</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-slate-500">+200 XP</span>
                </div>
              </div>
            </div>
            {/* Badge 3 */}
            <div className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors cursor-pointer border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
              <div className="size-12 shrink-0 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500">
                <span className="material-symbols-outlined">lock</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-400 dark:text-slate-500 text-sm">Secure Streak</h4>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Maintain 30 days without incidents.</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] text-slate-400 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded">Locked</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Tip Card */}
          <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-6 shadow-md text-white relative overflow-hidden">
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-white/10">lightbulb</span>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2 opacity-90">
                <span className="material-symbols-outlined text-sm">tips_and_updates</span>
                <span className="text-xs font-bold uppercase tracking-wider">Daily Security Tip</span>
              </div>
              <p className="font-medium text-sm leading-relaxed">Always hover over links before clicking to see the actual URL destination. Attackers often mask malicious links.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
