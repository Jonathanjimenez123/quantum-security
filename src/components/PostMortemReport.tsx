import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface PostMortemReportProps {
  onBack: () => void;
}

export default function PostMortemReport({ onBack }: PostMortemReportProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* Header Section */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#151b2b] px-10 py-3 shadow-sm">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-primary cursor-pointer" onClick={onBack}>
              <div className="size-8 flex items-center justify-center rounded bg-primary/10">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>security</span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">PhishGuard AI</h2>
            </div>
            <nav className="hidden md:flex items-center gap-9">
              <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
              <Link className="text-slate-900 dark:text-white text-sm font-medium leading-normal border-b-2 border-primary pb-0.5" to='/panel'>Incidents</Link>
              <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors" to='/reporte-incidente'>Reports</Link>
              <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors" to='/ajustes'>Configuración</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:flex w-64 items-center rounded-lg bg-slate-100 dark:bg-slate-800">
              <div className="absolute left-3 flex items-center justify-center text-slate-400">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
              </div>
              <input className="h-10 w-full rounded-lg border-none bg-transparent pl-10 pr-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50" placeholder="Buscar incidents..." />
            </div>
            <button className="hidden sm:flex h-10 items-center justify-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-800 px-4 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>print</span>
              <span>PDF</span>
            </button>
            <div className="size-10 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-slate-800" data-alt="User profile avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
          </div>
        </header>

        <main className="flex-1 px-4 md:px-10 py-6 md:py-8">
          <div className="mx-auto max-w-[1200px] flex flex-col gap-6">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm">
              <Link className="text-slate-500 hover:text-primary transition-colors" to='/panel'>Incidents</Link>
              <span className="text-slate-400">/</span>
              <Link className="text-slate-500 hover:text-primary transition-colors" to='/panel'>Resolved</Link>
              <span className="text-slate-400">/</span>
              <span className="font-medium text-slate-900 dark:text-white">Post-Mortem #40291</span>
            </div>

            {/* Header Content */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="space-y-1">
                <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Post-Mortem Analysis</h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Incident #40291 • Resolved Oct 24, 2026</p>
              </div>
              <div className="flex gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-xs font-bold text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                  <span className="size-2 rounded-full bg-green-500"></span>
                  Resolved
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary border border-primary/20">
                  <span className="material-symbols-outlined text-[14px]">psychology</span>
                  AI Reinforced
                </span>
              </div>
            </div>

            {/* Summary Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Metric Card 1 */}
              <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-[#151b2b] p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="absolute right-4 top-4 text-slate-200 dark:text-slate-700 group-hover:text-primary/20 transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>timer</span>
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Duration</p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white tracking-tight">14m 20s</p>
                <div className="mt-2 h-1 w-full rounded-full bg-slate-100 dark:bg-slate-800">
                  <div className="h-1 w-[20%] rounded-full bg-green-500"></div>
                </div>
              </div>

              {/* Metric Card 2 */}
              <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-[#151b2b] p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="absolute right-4 top-4 text-slate-200 dark:text-slate-700 group-hover:text-red-500/20 transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>warning</span>
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Impact Level</p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white tracking-tight text-red-600 dark:text-red-400">High</p>
                <div className="mt-2 flex gap-1">
                  <div className="h-1 flex-1 rounded-full bg-red-500"></div>
                  <div className="h-1 flex-1 rounded-full bg-red-500"></div>
                  <div className="h-1 flex-1 rounded-full bg-red-500"></div>
                  <div className="h-1 flex-1 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                </div>
              </div>

              {/* Metric Card 3 */}
              <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-[#151b2b] p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="absolute right-4 top-4 text-slate-200 dark:text-slate-700 group-hover:text-primary/20 transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>shield_lock</span>
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Containment</p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white tracking-tight text-primary">100%</p>
                <p className="text-xs text-slate-400 mt-1">0 Data Exfiltrated</p>
              </div>

              {/* Metric Card 4 */}
              <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-[#151b2b] p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="absolute right-4 top-4 text-slate-200 dark:text-slate-700 group-hover:text-primary/20 transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>radar</span>
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Threat Score</p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white tracking-tight">98<span className="text-xl text-slate-400 font-normal">/100</span></p>
                <p className="text-xs text-slate-400 mt-1">Spear Phishing Class A</p>
              </div>
            </div>

            {/* Main Content Split */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column: Timeline */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {/* Timeline Card */}
                <div className="rounded-xl bg-white dark:bg-[#151b2b] p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                  <h3 className="mb-6 text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">history</span>
                    Timeline of Events
                  </h3>
                  <div className="relative pl-4 border-l-2 border-slate-100 dark:border-slate-700 space-y-8">
                    {/* Event 1 */}
                    <div className="relative">
                      <div className="absolute -left-[25px] top-1 size-4 rounded-full border-2 border-white dark:border-[#151b2b] bg-red-500 shadow-sm"></div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white">Email Received &amp; Opened</p>
                          <p className="text-xs text-slate-500 mt-1">Subject: "Urgent: Payroll Discrepancy Action Required"</p>
                        </div>
                        <span className="text-xs font-mono text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded">10:42:01 AM</span>
                      </div>
                    </div>

                    {/* Event 2 (AI Detection) */}
                    <div className="relative">
                      <div className="absolute -left-[25px] top-1 size-4 rounded-full border-2 border-white dark:border-[#151b2b] bg-primary shadow-sm ring-4 ring-primary/10"></div>
                      <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-3 -ml-2 sm:ml-0 mt-2 sm:mt-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                          <div>
                            <p className="text-sm font-bold text-primary flex items-center gap-2">
                              <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                              Initial NLP Detection
                            </p>
                            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">PhishGuard NLP identified semantic mismatch in sender domain vs. content urgency.</p>
                          </div>
                          <span className="text-xs font-mono text-primary bg-white dark:bg-[#151b2b] px-2 py-1 rounded border border-primary/20">10:42:03 AM</span>
                        </div>
                      </div>
                    </div>

                    {/* Event 3 */}
                    <div className="relative">
                      <div className="absolute -left-[25px] top-1 size-4 rounded-full border-2 border-white dark:border-[#151b2b] bg-orange-400 shadow-sm"></div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white">User Click Attempt Blocked</p>
                          <p className="text-xs text-slate-500 mt-1">Extension intercepted navigation to malicious domain `pay-roll-support-hr.com`.</p>
                        </div>
                        <span className="text-xs font-mono text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded">10:42:15 AM</span>
                      </div>
                    </div>

                    {/* Event 4 */}
                    <div className="relative">
                      <div className="absolute -left-[25px] top-1 size-4 rounded-full border-2 border-white dark:border-[#151b2b] bg-green-500 shadow-sm"></div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white">Admin Intervention &amp; Global Block</p>
                          <p className="text-xs text-slate-500 mt-1">Incident confirmed by SOC. Domain added to global blacklist.</p>
                        </div>
                        <span className="text-xs font-mono text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded">10:56:21 AM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Learnings & Updates */}
                <div className="rounded-xl bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10 border border-primary/20 p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white dark:bg-[#151b2b] rounded-lg shadow-sm border border-primary/10">
                      <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">AI Model Adaptation</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        Following this incident, the detection model has been retrained on the specific syntax pattern used in the subject line (homograph attack vectors). The confidence threshold for "Payroll" related keywords from external domains has been increased by 15%.
                      </p>
                      <div className="flex gap-2">
                        <span className="inline-flex items-center px-2 py-1 rounded bg-white dark:bg-[#151b2b] border border-primary/20 text-xs font-medium text-primary shadow-sm">
                          v2.4.1 Updated
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded bg-white dark:bg-[#151b2b] border border-primary/20 text-xs font-medium text-primary shadow-sm">
                          +150 New Vectors
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="rounded-xl bg-white dark:bg-[#151b2b] p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                  <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-slate-500">checklist</span>
                    Actionable Recommendations
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                        <span className="material-symbols-outlined text-[16px]">priority_high</span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">Review DMARC Policy</span>
                        <p className="text-xs text-slate-500">Upgrade enforcement policy from 'none' to 'quarantine' for lookalike domains.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                        <span className="material-symbols-outlined text-[16px]">school</span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">Targeted Training</span>
                        <p className="text-xs text-slate-500">Enroll Finance department users in "Spear Phishing Advanced" module.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined text-[16px]">settings</span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">Browser Extension Policy</span>
                        <p className="text-xs text-slate-500">Ensure auto-update is forced enabled for all endpoints to receive model patch v2.4.1.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Visuals & Details */}
              <div className="flex flex-col gap-6">
                {/* Root Cause Diagram */}
                <div className="rounded-xl bg-white dark:bg-[#151b2b] p-6 shadow-sm border border-slate-200 dark:border-slate-800 h-fit">
                  <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-slate-500">hub</span>
                    Root Cause Analysis
                  </h3>
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center">
                    {/* Abstract representation of a root cause diagram using CSS/HTML shapes */}
                    <div className="absolute inset-0 p-4 flex flex-col items-center justify-center gap-2 opacity-80">
                      <div className="w-full flex justify-center">
                        <div className="px-3 py-1 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-xs font-bold rounded border border-red-200 dark:border-red-800">Compromised Vendor</div>
                      </div>
                      <div className="h-4 w-px bg-slate-300 dark:bg-slate-600"></div>
                      <div className="w-full flex justify-center">
                        <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded border border-slate-200 dark:border-slate-700">Spoofed Domain Registration</div>
                      </div>
                      <div className="h-4 w-px bg-slate-300 dark:bg-slate-600"></div>
                      <div className="w-full flex justify-center gap-4">
                        <div className="px-2 py-1 bg-white dark:bg-[#151b2b] text-slate-600 dark:text-slate-400 text-[10px] rounded shadow-sm border border-slate-200 dark:border-slate-700">Email Filter Bypass</div>
                        <div className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded shadow-sm border border-primary/20">Targeted Employee</div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <button className="text-xs text-primary hover:underline font-medium">View Full Graph</button>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-slate-500 leading-normal">
                    The attack originated from a compromised vendor account which allowed the attacker to gather intel on internal payroll cycles.
                  </p>
                </div>

                {/* Affected Assets */}
                <div className="rounded-xl bg-white dark:bg-[#151b2b] p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-500">devices</span>
                      Scope
                    </h3>
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded text-xs font-bold">1 User</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                    <div className="size-10 rounded-full bg-cover bg-center" data-alt="Portrait of Sarah Jenkins, Finance Manager" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 dark:text-white truncate">Sarah Jenkins</p>
                      <p className="text-xs text-slate-500 truncate">Finance Manager • Macintosh 14"</p>
                    </div>
                    <div className="text-green-500">
                      <span className="material-symbols-outlined text-lg">check_circle</span>
                    </div>
                  </div>
                </div>

                {/* Incident Metadata */}
                <div className="rounded-xl bg-white dark:bg-[#151b2b] p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Metadata</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Detected By</span>
                      <span className="font-medium text-slate-900 dark:text-white">Auto-Sensor (NLP)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Attack Type</span>
                      <span className="font-medium text-slate-900 dark:text-white">Spear Phishing</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Vector</span>
                      <span className="font-medium text-slate-900 dark:text-white">Email Link</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">SOC Analyst</span>
                      <span className="font-medium text-slate-900 dark:text-white">M. Thompson</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">
                    <button className="w-full py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                      Export JSON Logs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
