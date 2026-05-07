import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface OfflineRecoveryTokensManagementProps {
  onBack?: () => void;
}

export default function OfflineRecoveryTokensManagement({ onBack }: OfflineRecoveryTokensManagementProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Top Navigation */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-10 py-3 sticky top-0 z-50">
            <div className="flex items-center gap-4 text-slate-900 dark:text-white">
              <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined text-2xl">shield_lock</span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Security Dashboard</h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <div className="hidden md:flex items-center gap-9">
                <button onClick={onBack} className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal">Panel de Control</button>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" to='/panel'>Protection</Link>
                <Link className="text-primary text-sm font-medium leading-normal" to='/panel'>Recovery</Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" to='/ajustes'>Configuración</Link>
              </div>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-slate-100 dark:ring-slate-800" data-alt="User profile picture" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
            </div>
          </header>
          <main className="flex flex-1 justify-center py-10 px-4 sm:px-10">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-8">
              {/* Header Section */}
              <div className="flex flex-wrap justify-between gap-4 items-end">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <h1 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">Offline Recovery Tokens</h1>
                  <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed">
                    Manage your emergency access codes. These single-use tokens are the only way to recover your account if you lose your 2FA device.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium transition-all">
                    <span className="material-symbols-outlined text-[20px]">print</span>
                    <span className="hidden sm:inline">Print Codes</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium transition-all">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    <span className="hidden sm:inline">Download PDF</span>
                  </button>
                </div>
              </div>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="material-symbols-outlined text-primary text-xl">token</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Remaining Tokens</p>
                  </div>
                  <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">10 <span className="text-lg text-slate-400 font-normal">/ 12</span></p>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mt-2">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="material-symbols-outlined text-primary text-xl">history</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Last Generated</p>
                  </div>
                  <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">Oct 24, 2026</p>
                  <p className="text-slate-400 text-xs mt-2">10:42 AM via Chrome Extension</p>
                </div>
              </div>
              {/* Warning Banner */}
              <div className="flex items-start gap-4 rounded-lg bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 p-4">
                <span className="material-symbols-outlined text-orange-600 dark:text-orange-400 mt-0.5">warning</span>
                <div>
                  <p className="text-orange-900 dark:text-orange-200 font-semibold text-sm">Security Warning</p>
                  <p className="text-orange-800 dark:text-orange-300 text-sm mt-1">
                    Keep these codes offline. Do not store them in your email or cloud storage. If you suspect your codes have been compromised, generate a new set immediately.
                  </p>
                </div>
              </div>
              {/* Codes Grid */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-slate-900 dark:text-white text-xl font-bold">Active Recovery Codes</h2>
                  <span className="text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-1 rounded">Set ID: #8293-A</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {/* Code Item 1 (Used) */}
                  <div className="relative group flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 opacity-60">
                    <code className="font-mono text-slate-400 dark:text-slate-600 text-lg line-through decoration-slate-400/50 select-none">XK92-M4P1</code>
                    <span className="material-symbols-outlined text-slate-300 text-sm">check_circle</span>
                  </div>
                  {/* Code Item 2 (Used) */}
                  <div className="relative group flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 opacity-60">
                    <code className="font-mono text-slate-400 dark:text-slate-600 text-lg line-through decoration-slate-400/50 select-none">B7L3-Q9Z2</code>
                    <span className="material-symbols-outlined text-slate-300 text-sm">check_circle</span>
                  </div>
                  {/* Code Item 3 */}
                  <div className="relative group flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors cursor-pointer" onClick={() => navigator.clipboard.writeText('H4N2-V8X5')}>
                    <code className="font-mono text-slate-700 dark:text-slate-200 text-lg font-semibold tracking-wide">H4N2-V8X5</code>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors text-sm opacity-0 group-hover:opacity-100">content_copy</span>
                  </div>
                  {/* Code Item 4 */}
                  <div className="relative group flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors cursor-pointer" onClick={() => navigator.clipboard.writeText('P9K1-J3R7')}>
                    <code className="font-mono text-slate-700 dark:text-slate-200 text-lg font-semibold tracking-wide">P9K1-J3R7</code>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors text-sm opacity-0 group-hover:opacity-100">content_copy</span>
                  </div>
                  {/* Code Item 5 */}
                  <div className="relative group flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors cursor-pointer" onClick={() => navigator.clipboard.writeText('L5M8-C2W9')}>
                    <code className="font-mono text-slate-700 dark:text-slate-200 text-lg font-semibold tracking-wide">L5M8-C2W9</code>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors text-sm opacity-0 group-hover:opacity-100">content_copy</span>
                  </div>
                  {/* Code Item 6 */}
                  <div className="relative group flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors cursor-pointer" onClick={() => navigator.clipboard.writeText('R3T6-Y1U4')}>
                    <code className="font-mono text-slate-700 dark:text-slate-200 text-lg font-semibold tracking-wide">R3T6-Y1U4</code>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors text-sm opacity-0 group-hover:opacity-100">content_copy</span>
                  </div>
                  {/* Code Item 7 */}
                  <div className="relative group flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors cursor-pointer" onClick={() => navigator.clipboard.writeText('X8B4-N7M2')}>
                    <code className="font-mono text-slate-700 dark:text-slate-200 text-lg font-semibold tracking-wide">X8B4-N7M2</code>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors text-sm opacity-0 group-hover:opacity-100">content_copy</span>
                  </div>
                  {/* Code Item 8 */}
                  <div className="relative group flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors cursor-pointer" onClick={() => navigator.clipboard.writeText('Q2W9-E5R1')}>
                    <code className="font-mono text-slate-700 dark:text-slate-200 text-lg font-semibold tracking-wide">Q2W9-E5R1</code>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors text-sm opacity-0 group-hover:opacity-100">content_copy</span>
                  </div>
                  {/* Code Item 9 */}
                  <div className="relative group flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors cursor-pointer" onClick={() => navigator.clipboard.writeText('T7Y3-U8I4')}>
                    <code className="font-mono text-slate-700 dark:text-slate-200 text-lg font-semibold tracking-wide">T7Y3-U8I4</code>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors text-sm opacity-0 group-hover:opacity-100">content_copy</span>
                  </div>
                  {/* Code Item 10 */}
                  <div className="relative group flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors cursor-pointer" onClick={() => navigator.clipboard.writeText('O5P1-A6S9')}>
                    <code className="font-mono text-slate-700 dark:text-slate-200 text-lg font-semibold tracking-wide">O5P1-A6S9</code>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors text-sm opacity-0 group-hover:opacity-100">content_copy</span>
                  </div>
                  {/* Code Item 11 */}
                  <div className="relative group flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors cursor-pointer" onClick={() => navigator.clipboard.writeText('D4F8-G2H7')}>
                    <code className="font-mono text-slate-700 dark:text-slate-200 text-lg font-semibold tracking-wide">D4F8-G2H7</code>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors text-sm opacity-0 group-hover:opacity-100">content_copy</span>
                  </div>
                  {/* Code Item 12 */}
                  <div className="relative group flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors cursor-pointer" onClick={() => navigator.clipboard.writeText('J3K9-L5Z1')}>
                    <code className="font-mono text-slate-700 dark:text-slate-200 text-lg font-semibold tracking-wide">J3K9-L5Z1</code>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors text-sm opacity-0 group-hover:opacity-100">content_copy</span>
                  </div>
                </div>
              </div>
              {/* Generate New Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6 mt-4">
                <div className="flex flex-col gap-2 max-w-lg">
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Generate New Tokens</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                    Generating new tokens will <span className="font-semibold text-slate-700 dark:text-slate-300">immediately invalidate</span> any previously generated codes shown above. Ensure you save the new set immediately after generation.
                  </p>
                </div>
                <button className="flex shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-700 dark:hover:bg-blue-600 text-white text-sm font-bold leading-normal transition-all shadow-md shadow-blue-500/20">
                  <span className="material-symbols-outlined text-[20px]">refresh</span>
                  <span className="truncate">Generate New Tokens</span>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
