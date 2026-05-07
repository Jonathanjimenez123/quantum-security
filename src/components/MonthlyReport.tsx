import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface MonthlyReportProps {
  onBack: () => void;
}

export default function MonthlyReport({ onBack }: MonthlyReportProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased min-h-screen">
      <div className="max-w-[800px] mx-auto bg-white dark:bg-slate-900 min-h-screen shadow-lg flex flex-col">
        {/* Header Section */}
        <div className="px-10 pt-10 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">shield_lock</span>
              </div>
              <span className="text-slate-900 dark:text-white font-bold text-xl tracking-tight">SecureGuard AI</span>
            </div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              June 1, 2026 - June 30, 2026
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight">June 2026 Security Summary</h1>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Monthly Security Posture Report for Executive Management</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-10 flex flex-col gap-8 flex-1">
          {/* Hero Stat */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 border border-slate-100 dark:border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-slate-500 dark:text-slate-400 font-medium uppercase text-xs tracking-wider">Executive Summary</span>
                <div className="flex items-baseline gap-3">
                  <h2 className="text-slate-900 dark:text-white text-5xl font-bold tracking-tight">1,240</h2>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <span className="material-symbols-outlined text-base mr-1">trending_up</span>
                    +12% vs May
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-lg font-medium mt-1">Total Threats Successfully Blocked</p>
              </div>
              <div className="hidden sm:block">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-primary">gpp_good</span>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout: Landscape & Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Threat Landscape Breakdown */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
              <div className="mb-5">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold">Threat Landscape Breakdown</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Most detected attack vectors this month</p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-400 text-sm">psychology</span>
                      <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Urgency (NLP Detected)</span>
                    </div>
                    <span className="text-slate-900 dark:text-white font-bold text-sm">45%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-400 text-sm">link_off</span>
                      <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Typosquatting Domains</span>
                    </div>
                    <span className="text-slate-900 dark:text-white font-bold text-sm">30%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-400 text-sm">password</span>
                      <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Fake Login Pages</span>
                    </div>
                    <span className="text-slate-900 dark:text-white font-bold text-sm">25%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-300 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* KPIs / Risk Reduction */}
            <div className="flex flex-col gap-6">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
                    <span className="material-symbols-outlined">security_update_good</span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 font-medium text-sm">Risk Reduction</span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">15%</span>
                  <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">+5% MoM</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-2">Overall organizational risk score improvement.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <span className="material-symbols-outlined">fact_check</span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 font-medium text-sm">Security Score</span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">85/100</span>
                  <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">+5 pts</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-2">Based on employee browsing behavior.</p>
              </div>
            </div>
          </div>

          {/* Critical Save of the Month */}
          <div className="relative overflow-hidden rounded-xl bg-slate-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img alt="Abstract digital network security visualization with blue lights" className="w-full h-full object-cover opacity-40" data-alt="Abstract cybersecurity network background" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"}/>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
            </div>
            <div className="relative z-10 p-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              <div className="max-w-lg">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-200 text-xs font-bold uppercase tracking-wider mb-4">
                  <span className="material-symbols-outlined text-sm">warning</span>
                  Critical Save
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">Executive Phishing Attempt Blocked</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  On June 12th, the system intercepted a sophisticated "Spear Phishing" attack targeting the CFO's credentials on a clone of the Microsoft 365 login portal. The site was blocked 0.4s before page load.
                </p>
              </div>
              <div className="shrink-0">
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium py-2 px-4 rounded-lg text-sm transition-colors flex items-center gap-2 backdrop-blur-sm">
                  View Analysis
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Table Preview */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
            <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <h3 className="font-bold text-slate-900 dark:text-white">Recent High-Risk Blocks</h3>
              <Link className="text-primary text-sm font-medium hover:underline" to='/panel'>Ver Todo</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                  <tr>
                    <th className="px-6 py-3 font-medium">Fecha</th>
                    <th className="px-6 py-3 font-medium">Threat Type</th>
                    <th className="px-6 py-3 font-medium">User Group</th>
                    <th className="px-6 py-3 font-medium text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                  <tr>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Jun 28, 09:14 AM</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300">
                        Malware
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Engineering</td>
                    <td className="px-6 py-4 text-right text-slate-500">Blocked</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Jun 25, 14:22 PM</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300">
                        Phishing
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Finance</td>
                    <td className="px-6 py-4 text-right text-slate-500">Blocked</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Jun 22, 11:05 AM</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300">
                        Credential Theft
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">HR</td>
                    <td className="px-6 py-4 text-right text-slate-500">Blocked</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Call to Action */}
        <div className="px-10 py-10 bg-slate-50 dark:bg-slate-800/50 mt-auto border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <p className="text-slate-600 dark:text-slate-300 max-w-lg">
              This is an automated monthly summary. For detailed logs, user management, and advanced policy configuration, please visit the dashboard.
            </p>
            <button 
              onClick={onBack}
              className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              View Full Admin Dashboard
              <span className="material-symbols-outlined text-lg">open_in_new</span>
            </button>
            <div className="h-px w-24 bg-slate-200 dark:bg-slate-700 my-2"></div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Alex Chen</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Chief Information Security Officer</p>
              <a className="text-primary text-sm hover:underline mt-1" href="mailto:ciso@company.com">ciso@company.com</a>
            </div>
            <div className="text-xs text-slate-400 dark:text-slate-500 mt-4">
              creada en 2026 Jonathan Jimenez Escobar <br/>
              123 Security Way, Tech District, CA 94000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
