import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface PrivacyComplianceProps {
  onBack: () => void;
}

export default function PrivacyCompliance({ onBack }: PrivacyComplianceProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden" style={{ '--checkbox-tick-svg': "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(255,255,255)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')" } as React.CSSProperties}>
        {/* Navigation Placeholder (Simulated) */}
        <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-[#1a202c] border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">security</span>
            </div>
            <span className="font-bold text-lg">ShieldAI</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-slate-500 cursor-pointer">notifications</span>
            <span className="material-symbols-outlined text-slate-500 cursor-pointer">settings</span>
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden relative">
              <img alt="User avatar" className="w-full h-full object-cover" data-alt="User profile picture" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
            </div>
          </div>
        </nav>

        <div className="flex flex-1">
          {/* Sidebar (Simulated) */}
          <aside className="hidden lg:flex flex-col w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a202c] p-4 gap-2">
            <Link className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg" to='/informes'>
              <span className="material-symbols-outlined">bug_report</span>
              Threat Log
            </Link>
            <div className="h-px bg-slate-200 dark:bg-slate-800 my-2"></div>
            <Link className="flex items-center gap-3 px-3 py-2 text-primary font-medium bg-primary/10 rounded-lg" to='/panel'>
              <span className="material-symbols-outlined">gavel</span>
              Compliance
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg" to='/panel'>
              <span className="material-symbols-outlined">person</span>
              Account
            </Link>
          </aside>

          {/* Main Content */}
          <main className="flex-1 flex justify-center py-8 px-4 sm:px-8 bg-background-light dark:bg-background-dark">
            <div className="flex flex-col max-w-[960px] flex-1 gap-6">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">Privacy &amp; GDPR Compliance</h1>
                  <p className="text-slate-500 dark:text-slate-400 text-base font-normal max-w-xl">Manage how we handle your data, control privacy preferences, and view compliance documentation.</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    Export Data
                  </button>
                </div>
              </div>

              {/* Status Card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col justify-between rounded-xl p-6 bg-white dark:bg-[#1a202c] border border-slate-200 dark:border-slate-800 shadow-sm col-span-1 md:col-span-2 relative overflow-hidden">
                  <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none"></div>
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Compliance Status</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="material-symbols-outlined text-emerald-500 text-3xl">verified_user</span>
                        <p className="text-emerald-600 dark:text-emerald-400 text-2xl font-bold leading-tight">GDPR Compliant</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-[18px]">history</span>
                    Last audited: October 24, 2026
                  </div>
                </div>
                <div className="flex flex-col justify-center rounded-xl p-6 bg-primary text-white shadow-sm col-span-1">
                  <p className="text-blue-100 text-sm font-medium mb-1">DPO Contact</p>
                  <p className="text-lg font-bold mb-3">Need privacy help?</p>
                  <button className="bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg text-sm font-medium w-fit transition-colors">
                    Contact Officer
                  </button>
                </div>
              </div>

              {/* Main Settings Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Data Collection */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Data Collection Section */}
                  <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">analytics</span>
                        Data Collection
                      </h2>
                      <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded">Auto-saved</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                      Control what data is shared with our AI engine. All telemetry is anonymized before leaving your device.
                    </p>
                    <div className="space-y-4">
                      <label className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                        <div className="relative flex items-center mt-1">
                          <input defaultChecked className="h-5 w-5 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/20 bg-transparent cursor-pointer" type="checkbox" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="text-slate-900 dark:text-slate-200 font-medium text-sm">Threat Telemetry</p>
                            <div className="group/tooltip relative">
                              <span className="material-symbols-outlined text-slate-400 text-[16px] cursor-help">info</span>
                            </div>
                          </div>
                          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-1">Share anonymized URL patterns to improve global AI phishing detection accuracy.</p>
                        </div>
                      </label>
                      <div className="h-px bg-slate-100 dark:bg-slate-800"></div>
                      <label className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                        <div className="relative flex items-center mt-1">
                          <input className="h-5 w-5 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/20 bg-transparent cursor-pointer" type="checkbox" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="text-slate-900 dark:text-slate-200 font-medium text-sm">Performance Analytics &amp; Crash Reports</p>
                          </div>
                          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-1">Allow us to collect technical data about extension performance and crashes.</p>
                        </div>
                      </label>
                      <div className="h-px bg-slate-100 dark:bg-slate-800"></div>
                      <label className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                        <div className="relative flex items-center mt-1">
                          <input defaultChecked className="h-5 w-5 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/20 bg-transparent cursor-pointer" type="checkbox" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="text-slate-900 dark:text-slate-200 font-medium text-sm">Community Phishing Reports</p>
                          </div>
                          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-1">Participate in the community network by manually reporting suspicious sites.</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Privacy Audits Log */}
                  <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                      <span className="material-symbols-outlined text-primary">fact_check</span>
                      Privacy Audit Log
                    </h2>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50 dark:bg-slate-800/50">
                          <tr>
                            <th className="px-4 py-3 rounded-l-lg">Event</th>
                            <th className="px-4 py-3">Fecha</th>
                            <th className="px-4 py-3 rounded-r-lg text-right">Estado</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                          <tr>
                            <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-200">Consent Updated</td>
                            <td className="px-4 py-3 text-slate-500">Oct 24, 2026</td>
                            <td className="px-4 py-3 text-right text-emerald-600 dark:text-emerald-400 font-medium">Verified</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-200">Data Export Request</td>
                            <td className="px-4 py-3 text-slate-500">Sep 12, 2026</td>
                            <td className="px-4 py-3 text-right text-emerald-600 dark:text-emerald-400 font-medium">Completed</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-200">External Security Audit</td>
                            <td className="px-4 py-3 text-slate-500">Aug 01, 2026</td>
                            <td className="px-4 py-3 text-right text-emerald-600 dark:text-emerald-400 font-medium">Passed</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <button className="mt-4 text-primary text-sm font-medium hover:text-blue-700 dark:hover:text-blue-400 flex items-center gap-1">
                      View Full History
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Regional & Legal */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Regional Data Residency */}
                  <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Regional Data Residency</h2>
                    <p className="text-xs text-slate-500 mb-4">Select where your encrypted data is processed and stored.</p>
                    <div className="space-y-3">
                      <label className="flex items-center justify-between p-3 border border-primary bg-primary/5 rounded-lg cursor-pointer">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">🇪🇺</span>
                          <span className="text-sm font-medium text-slate-900 dark:text-white">European Union</span>
                        </div>
                        <div className="h-4 w-4 rounded-full border border-primary flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                      </label>
                      <label className="flex items-center justify-between p-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer opacity-70">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">🇺🇸</span>
                          <span className="text-sm font-medium text-slate-900 dark:text-white">United States</span>
                        </div>
                        <div className="h-4 w-4 rounded-full border border-slate-300 dark:border-slate-600"></div>
                      </label>
                      <label className="flex items-center justify-between p-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer opacity-70">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">🇸🇬</span>
                          <span className="text-sm font-medium text-slate-900 dark:text-white">Asia Pacific (SG)</span>
                        </div>
                        <div className="h-4 w-4 rounded-full border border-slate-300 dark:border-slate-600"></div>
                      </label>
                    </div>
                  </div>

                  {/* Legal Documents */}
                  <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Legal Documents</h2>
                    <ul className="space-y-3">
                      <li>
                        <Link className="flex items-center justify-between p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group" to="/terms-of-service">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500">
                              <span className="material-symbols-outlined text-[20px]">description</span>
                            </div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Terms of Service</span>
                          </div>
                          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">open_in_new</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="flex items-center justify-between p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group" to='/panel'>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500">
                              <span className="material-symbols-outlined text-[20px]">shield</span>
                            </div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">DPA Agreement</span>
                          </div>
                          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">open_in_new</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="flex items-center justify-between p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group" to="/privacy-compliance">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500">
                              <span className="material-symbols-outlined text-[20px]">policy</span>
                            </div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Privacy Policy</span>
                          </div>
                          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">open_in_new</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Danger Zone */}
                  <div className="bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30 p-6 shadow-sm">
                    <h2 className="text-lg font-bold text-red-700 dark:text-red-400 mb-2">Right to be Forgotten</h2>
                    <p className="text-xs text-red-600/80 dark:text-red-300/80 mb-4">
                      Permanently delete all your personal data associated with this account from our servers.
                    </p>
                    <button className="w-full py-2 px-4 bg-white dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg text-sm font-semibold hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors">
                      Request Deletion
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
