import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceTerminationProps {
  onBack: () => void;
}

export default function ServiceTermination({ onBack }: ServiceTerminationProps) {
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] font-['Manrope',sans-serif] text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden">
      <style>{`
        /* Custom radio button styles for better theme integration */
        input[type="radio"]:checked {
            background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23137fec' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
            border-color: #137fec;
        }
      `}</style>
      <div className="relative flex min-h-screen flex-col w-full">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-10 py-4 sticky top-0 z-50">
          <div className="flex items-center gap-4 cursor-pointer" onClick={onBack}>
            <div className="size-8 text-[#137fec]">
              <span className="material-symbols-outlined text-3xl">shield_lock</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">AI Shield</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <nav className="flex items-center gap-9 hidden md:flex">
              <Link className="text-slate-600 dark:text-slate-300 hover:text-[#137fec] dark:hover:text-[#137fec] text-sm font-medium leading-normal transition-colors" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
              <Link className="text-slate-600 dark:text-slate-300 hover:text-[#137fec] dark:hover:text-[#137fec] text-sm font-medium leading-normal transition-colors" to='/ajustes'>Configuración</Link>
              <Link className="text-slate-600 dark:text-slate-300 hover:text-[#137fec] dark:hover:text-[#137fec] text-sm font-medium leading-normal transition-colors" to='/centro-ayuda'>Help</Link>
            </nav>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200 dark:border-slate-700" data-alt="User profile avatar placeholder" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex justify-center py-10 px-4 sm:px-10">
          <div className="w-full max-w-[960px] flex flex-col gap-10">
            {/* Page Header */}
            <div className="flex flex-col gap-3">
              <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">We're sorry to see you go</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-normal leading-normal max-w-2xl">
                Before you leave, please help us understand why and decide how you want to handle your data.
              </p>
            </div>

            {/* Step 1: Reason for Leaving */}
            <section className="flex flex-col gap-6 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#137fec]/10 text-[#137fec] font-bold text-sm">1</div>
                <h2 className="text-slate-900 dark:text-white text-xl font-bold">Reason for Leaving</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="group flex items-center gap-4 rounded-lg border border-solid border-slate-200 dark:border-slate-700 p-4 cursor-pointer hover:border-[#137fec]/50 dark:hover:border-[#137fec]/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  <input defaultChecked className="h-5 w-5 border-2 border-slate-300 dark:border-slate-600 bg-transparent text-[#137fec] focus:ring-[#137fec] focus:ring-offset-0" name="reason" type="radio" />
                  <div className="flex grow flex-col">
                    <p className="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal">Found a better alternative</p>
                  </div>
                </label>
                <label className="group flex items-center gap-4 rounded-lg border border-solid border-slate-200 dark:border-slate-700 p-4 cursor-pointer hover:border-[#137fec]/50 dark:hover:border-[#137fec]/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  <input className="h-5 w-5 border-2 border-slate-300 dark:border-slate-600 bg-transparent text-[#137fec] focus:ring-[#137fec] focus:ring-offset-0" name="reason" type="radio" />
                  <div className="flex grow flex-col">
                    <p className="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal">Too expensive</p>
                  </div>
                </label>
                <label className="group flex items-center gap-4 rounded-lg border border-solid border-slate-200 dark:border-slate-700 p-4 cursor-pointer hover:border-[#137fec]/50 dark:hover:border-[#137fec]/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  <input className="h-5 w-5 border-2 border-slate-300 dark:border-slate-600 bg-transparent text-[#137fec] focus:ring-[#137fec] focus:ring-offset-0" name="reason" type="radio" />
                  <div className="flex grow flex-col">
                    <p className="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal">Technical issues</p>
                  </div>
                </label>
                <label className="group flex items-center gap-4 rounded-lg border border-solid border-slate-200 dark:border-slate-700 p-4 cursor-pointer hover:border-[#137fec]/50 dark:hover:border-[#137fec]/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  <input className="h-5 w-5 border-2 border-slate-300 dark:border-slate-600 bg-transparent text-[#137fec] focus:ring-[#137fec] focus:ring-offset-0" name="reason" type="radio" />
                  <div className="flex grow flex-col">
                    <p className="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal">Not using it enough</p>
                  </div>
                </label>
              </div>
              <div className="mt-2">
                <label className="flex flex-col w-full">
                  <p className="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal pb-2">Other reason (optional)</p>
                  <textarea className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-[#137fec] focus:ring-1 focus:ring-[#137fec] min-h-[120px] placeholder:text-slate-400 p-4 text-sm font-normal leading-normal" placeholder="Please describe your experience..."></textarea>
                </label>
              </div>
            </section>

            {/* Step 2: Data Management */}
            <section className="flex flex-col gap-6 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#137fec]/10 text-[#137fec] font-bold text-sm">2</div>
                  <h2 className="text-slate-900 dark:text-white text-xl font-bold">Data Management</h2>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium transition-colors">
                  <span className="material-symbols-outlined text-[20px]">download</span>
                  Export All Security Logs
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-slate-600 dark:text-slate-400 text-sm">Choose how you would like us to handle your existing threat detection data and browsing history logs.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Retention Option */}
                  <label className="relative flex flex-col gap-2 rounded-xl border-2 border-slate-200 dark:border-slate-700 p-5 cursor-pointer hover:border-[#137fec]/50 dark:hover:border-[#137fec]/50 transition-all has-[:checked]:border-[#137fec] has-[:checked]:bg-[#137fec]/5">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#137fec]">history</span>
                        <h3 className="font-bold text-slate-900 dark:text-white">30-Day Retention</h3>
                      </div>
                      <input defaultChecked className="h-5 w-5 text-[#137fec] border-slate-300 dark:border-slate-600 focus:ring-[#137fec]" name="data_handling" type="radio" />
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 pl-[36px]">We will keep your logs for 30 days in case you decide to reactivate. After that, they will be permanently purged.</p>
                  </label>
                  {/* Deletion Option */}
                  <label className="relative flex flex-col gap-2 rounded-xl border-2 border-slate-200 dark:border-slate-700 p-5 cursor-pointer hover:border-red-500/50 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all has-[:checked]:border-red-500 has-[:checked]:bg-red-50 dark:has-[:checked]:bg-red-900/10">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-red-600 dark:text-red-400">delete_forever</span>
                        <h3 className="font-bold text-slate-900 dark:text-white">Permanent Deletion</h3>
                      </div>
                      <input className="h-5 w-5 text-red-600 border-slate-300 dark:border-slate-600 focus:ring-red-500" name="data_handling" type="radio" />
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 pl-[36px]">Immediately purge all data associated with your account. This action cannot be undone.</p>
                  </label>
                </div>
              </div>
            </section>

            {/* Step 3: Confirmation */}
            <section className="mt-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex gap-4 items-start max-w-xl">
                <div className="rounded-full bg-red-100 dark:bg-red-900/30 p-3 shrink-0 text-red-600 dark:text-red-400">
                  <span className="material-symbols-outlined text-2xl">gpp_bad</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Final Warning</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    By proceeding, your browser will no longer be protected by AI Shield. Phishing attempts and malicious scripts will not be blocked automatically.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button className="px-6 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-white font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors w-full sm:w-auto" onClick={onBack}>
                  Cancel
                </button>
                <button className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-sm transition-colors w-full sm:w-auto whitespace-nowrap">
                  Confirm Deactivation
                </button>
              </div>
            </section>

            <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-2">
              Need help? <Link className="text-[#137fec] hover:underline" to='/centro-ayuda'>Contact Support</Link> before you go.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
