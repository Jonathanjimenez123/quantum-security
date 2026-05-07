import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface SummaryReportProps {
  onBack: () => void;
}

export default function SummaryReport({ onBack }: SummaryReportProps) {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header / TopNavBar */}
        <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4 bg-background-light dark:bg-background-dark sticky top-0 z-50">
          <div className="flex items-center gap-4 cursor-pointer" onClick={onBack}>
            <div className="size-8 text-primary flex items-center justify-center bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined">shield_with_heart</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">Security Shield</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
            <div className="h-8 w-[1px] bg-slate-200 dark:border-slate-800"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-medium text-slate-500">Administrator</p>
                <p className="text-sm font-bold">Alex Rivera</p>
              </div>
              <div className="size-10 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center overflow-hidden">
                <img className="object-cover w-full h-full" data-alt="Professional corporate headshot for user profile" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"}/>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto w-full p-6 space-y-8 flex-1">
          {/* Title and Export Actions */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Security Incident Summary Report</h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg">Executive overview and exportable data for management review.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg text-sm font-bold transition-all border border-slate-300 dark:border-slate-700">
                <span className="material-symbols-outlined text-[20px]">description</span>
                Excel
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg text-sm font-bold transition-all border border-slate-300 dark:border-slate-700">
                <span className="material-symbols-outlined text-[20px]">csv</span>
                CSV
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                Export PDF
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 p-1 bg-slate-200/50 dark:bg-slate-800/50 rounded-xl w-fit">
            <button className="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-slate-700 shadow-sm text-primary">Last 7 Days</button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/50 dark:hover:bg-slate-700/50">Last 30 Days</button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/50 dark:hover:bg-slate-700/50">Last 90 Days</button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/50 dark:hover:bg-slate-700/50 flex items-center gap-2">
              Custom Range
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            </button>
          </div>

          {/* Executive Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Threats Blocked</p>
                <span className="material-symbols-outlined text-primary">block</span>
              </div>
              <p className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">12,482</p>
              <div className="flex items-center gap-1 text-emerald-500 text-sm font-bold">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                +12.5%
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Critical Incidents</p>
                <span className="material-symbols-outlined text-rose-500">warning</span>
              </div>
              <p className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">42</p>
              <div className="flex items-center gap-1 text-rose-500 text-sm font-bold">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                +5.2%
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">User Compliance Score</p>
                <span className="material-symbols-outlined text-amber-500">verified_user</span>
              </div>
              <p className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">88.4%</p>
              <div className="flex items-center gap-1 text-rose-500 text-sm font-bold">
                <span className="material-symbols-outlined text-[16px]">trending_down</span>
                -2.1%
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Estimated Risk Mitigated</p>
                <span className="material-symbols-outlined text-emerald-500">health_and_safety</span>
              </div>
              <p className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">94.0%</p>
              <div className="flex items-center gap-1 text-emerald-500 text-sm font-bold">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                +8.3%
              </div>
            </div>
          </div>

          {/* Visualization and Stats Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Top Threat Categories */}
            <div className="lg:col-span-1 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-6">Top Threat Categories</h3>
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Phishing Attacks</span>
                    <span className="text-slate-500">4,210 (34%)</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[34%] rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Typosquatting</span>
                    <span className="text-slate-500">3,120 (25%)</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary/70 w-[25%] rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Social Engineering</span>
                    <span className="text-slate-500">2,845 (23%)</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary/50 w-[23%] rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Malware Injection</span>
                    <span className="text-slate-500">1,452 (12%)</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary/30 w-[12%] rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">DDoS Attempts</span>
                    <span className="text-slate-500">855 (6%)</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary/10 w-[6%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Incident Distribution Chart Placeholder */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Daily Incident Distribution</h3>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-primary"></span>
                    <span className="text-slate-500">Blocked</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-rose-500"></span>
                    <span className="text-slate-500">Critical</span>
                  </div>
                </div>
              </div>
              <div className="relative h-64 w-full bg-slate-50/50 dark:bg-slate-900/20 rounded-lg flex items-end justify-between px-4 pb-2">
                {/* Bar chart simulation */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-8 bg-primary/20 rounded-t h-20 group-hover:bg-primary/40 transition-colors"></div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Mon</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-8 bg-primary/30 rounded-t h-32 group-hover:bg-primary/50 transition-colors"></div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Tue</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-8 bg-primary/60 rounded-t h-44 group-hover:bg-primary/80 transition-colors"></div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Wed</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-8 bg-primary/80 rounded-t h-28 group-hover:bg-primary transition-colors"></div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Thu</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-8 bg-primary rounded-t h-52 group-hover:brightness-110 transition-colors"></div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Fri</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-8 bg-primary/40 rounded-t h-12 group-hover:bg-primary/60 transition-colors"></div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Sat</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-8 bg-primary/20 rounded-t h-8 group-hover:bg-primary/40 transition-colors"></div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Sun</span>
                </div>
                {/* Decorative grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-10">
                  <div className="border-t border-slate-400"></div>
                  <div className="border-t border-slate-400"></div>
                  <div className="border-t border-slate-400"></div>
                  <div className="border-t border-slate-400"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Critical Incidents Table */}
          <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <h3 className="text-lg font-bold">Recent Critical Incidents</h3>
              <button className="text-primary text-sm font-bold hover:underline">View All Records</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-900/40 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-6 py-4">Date &amp; Time</th>
                    <th className="px-6 py-4">Target User</th>
                    <th className="px-6 py-4">Threat Type</th>
                    <th className="px-6 py-4">IA Risk Score</th>
                    <th className="px-6 py-4">Action Taken</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/20 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Oct 24, 2026 - 14:22</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <img className="w-full h-full object-cover" data-alt="Avatar for target user Sarah Jenkins" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"}/>
                        </div>
                        <span className="font-medium">Sarah Jenkins (Finance)</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/10 text-rose-500 border border-rose-500/20">
                        Spear Phishing
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-rose-500 text-[18px]" title="Critical">warning</span>
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full">
                            <div className="h-full bg-rose-500 w-[94%] rounded-full"></div>
                          </div>
                          <span className="font-bold text-rose-500">94</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-emerald-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">verified</span>
                        Automated Isolation
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/20 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Oct 24, 2026 - 11:05</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <img className="w-full h-full object-cover" data-alt="Avatar for target user Michael Chen" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"}/>
                        </div>
                        <span className="font-medium">Michael Chen (DevOps)</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        Credential Harvest
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-amber-500 text-[18px]" title="High">error</span>
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full">
                            <div className="h-full bg-amber-500 w-[72%] rounded-full"></div>
                          </div>
                          <span className="font-bold text-amber-500">72</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-amber-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">lock</span>
                        Account Suspended
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/20 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm">Oct 23, 2026 - 16:58</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <img className="w-full h-full object-cover" data-alt="Avatar for target user Robert Wilson" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"}/>
                        </div>
                        <span className="font-medium">Robert Wilson (Sales)</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/10 text-rose-500 border border-rose-500/20">
                        Malware Dropper
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-rose-500 text-[18px]" title="Critical">warning</span>
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full">
                            <div className="h-full bg-rose-500 w-[88%] rounded-full"></div>
                          </div>
                          <span className="font-bold text-rose-500">88</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-emerald-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">verified</span>
                        Endpoint Blocked
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Management Recommendations / Key Findings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <span className="material-symbols-outlined">lightbulb</span>
                <h3 className="text-lg font-bold">Key Findings</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">check_circle</span>
                  <span>A 22% increase in targeted spear-phishing was observed on Tuesdays and Wednesdays, coinciding with peak external communication hours.</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">check_circle</span>
                  <span>The AI-driven response system successfully neutralized 98.2% of critical threats without requiring human intervention.</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-rose-500 text-[18px] shrink-0">info</span>
                  <span>Finance and HR departments remain the primary targets for credential harvesting attempts.</span>
                </li>
              </ul>
            </div>
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4 text-emerald-500">
                <span className="material-symbols-outlined">assignment</span>
                <h3 className="text-lg font-bold">Management Recommendations</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-500 shrink-0">01.</span>
                  <span>Conduct mandatory simulated phishing training for the Finance department by end of Q4.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-500 shrink-0">02.</span>
                  <span>Implement stricter hardware token MFA for administrative accounts on cloud infrastructure.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-500 shrink-0">03.</span>
                  <span>Update the Incident Response Plan to include automated forensic snapshots for critical score events (&gt;90).</span>
                </li>
              </ul>
            </div>
          </div>
        </main>

        <footer className="border-t border-slate-200 dark:border-slate-800 px-6 py-8 mt-12 bg-slate-50 dark:bg-slate-900/40">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 opacity-50">
              <div className="size-6 text-slate-500 flex items-center justify-center border border-slate-500 rounded">
                <span className="material-symbols-outlined text-[16px]">shield</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">Security Shield Enterprise</span>
            </div>
            <p className="text-slate-500 text-xs">creada en 2026 Jonathan Jimenez Escobar</p>
            <div className="flex gap-6 text-xs font-medium text-slate-500">
              <Link className="hover:text-primary transition-colors" to="/privacy-compliance">Privacy Policy</Link>
              <Link className="hover:text-primary transition-colors" to="/system-status">Compliance Status</Link>
              <Link className="hover:text-primary transition-colors" to='/centro-ayuda'>Contact Support</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
