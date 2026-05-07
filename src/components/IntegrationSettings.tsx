import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface IntegrationSettingsProps {
  onBack: () => void;
}

export default function IntegrationSettings({ onBack }: IntegrationSettingsProps) {
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] font-['Space_Grotesk',sans-serif] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      `}</style>
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-[#f6f7f8] dark:bg-[#111418] px-10 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-4 cursor-pointer" onClick={onBack}>
          <div className="size-8 text-[#137fec]">
            <span className="material-symbols-outlined text-3xl">shield_lock</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">PhishGuard AI</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <nav className="hidden md:flex items-center gap-9">
            <Link className="text-sm font-medium leading-normal hover:text-[#137fec] transition-colors" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
            <Link className="text-sm font-medium leading-normal hover:text-[#137fec] transition-colors" to='/panel'>Incidents</Link>
            <Link className="text-sm font-medium leading-normal text-[#137fec]" to='/panel'>Integrations</Link>
            <Link className="text-sm font-medium leading-normal hover:text-[#137fec] transition-colors" to='/ajustes'>Configuración</Link>
          </nav>
          <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-slate-700" data-alt="User profile avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
        </div>
      </header>

      <main className="flex-1 flex justify-center py-10 px-4 md:px-10 lg:px-20">
        <div className="w-full max-w-[1200px] flex flex-col gap-8">
          {/* Page Header */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-4xl text-[#137fec]">hub</span>
              <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Integrations</h1>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl">
              Connect your collaboration tools to receive real-time security alerts, SIEM logs, and training milestones directly in your workspace.
            </p>
          </div>

          {/* Integration Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Slack Integration Card */}
            <div className="flex flex-col rounded-xl bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden group hover:border-[#137fec]/50 transition-all">
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="size-14 rounded-lg bg-[#4A154B] flex items-center justify-center text-white shadow-lg">
                      {/* Slack Logo Placeholder Icon */}
                      <span className="text-2xl font-bold">Sl</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Slack</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Not Connected</p>
                    </div>
                  </div>
                  <button className="bg-[#137fec] hover:bg-[#137fec]/90 text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">link</span>
                    Connect
                  </button>
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">Triggers</p>
                  <label className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <input defaultChecked className="mt-1 rounded border-slate-300 dark:border-slate-600 text-[#137fec] focus:ring-[#137fec] bg-transparent" type="checkbox" />
                    <div>
                      <span className="block text-sm font-semibold">Critical Threat Detected</span>
                      <span className="block text-xs text-slate-500 dark:text-slate-400">Immediate alerts for high-risk phishing attempts.</span>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <input className="mt-1 rounded border-slate-300 dark:border-slate-600 text-[#137fec] focus:ring-[#137fec] bg-transparent" type="checkbox" />
                    <div>
                      <span className="block text-sm font-semibold">New SIEM Log Export</span>
                      <span className="block text-xs text-slate-500 dark:text-slate-400">Daily export summary of security logs.</span>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <input defaultChecked className="mt-1 rounded border-slate-300 dark:border-slate-600 text-[#137fec] focus:ring-[#137fec] bg-transparent" type="checkbox" />
                    <div>
                      <span className="block text-sm font-semibold">User Training Milestone</span>
                      <span className="block text-xs text-slate-500 dark:text-slate-400">Notifications when users complete security modules.</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Microsoft Teams Integration Card */}
            <div className="flex flex-col rounded-xl bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden group hover:border-[#137fec]/50 transition-all">
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="size-14 rounded-lg bg-[#5059C9] flex items-center justify-center text-white shadow-lg">
                      <span className="text-2xl font-bold">Ts</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Microsoft Teams</h3>
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-green-500"></span>
                        <p className="text-sm text-green-500 font-medium">Connected</p>
                      </div>
                    </div>
                  </div>
                  <button className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium py-2 px-6 rounded-lg transition-colors border border-slate-200 dark:border-slate-700">
                    Configure
                  </button>
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">Triggers</p>
                  <label className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <input defaultChecked className="mt-1 rounded border-slate-300 dark:border-slate-600 text-[#137fec] focus:ring-[#137fec] bg-transparent" type="checkbox" />
                    <div>
                      <span className="block text-sm font-semibold">Critical Threat Detected</span>
                      <span className="block text-xs text-slate-500 dark:text-slate-400">Immediate alerts for high-risk phishing attempts.</span>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <input defaultChecked className="mt-1 rounded border-slate-300 dark:border-slate-600 text-[#137fec] focus:ring-[#137fec] bg-transparent" type="checkbox" />
                    <div>
                      <span className="block text-sm font-semibold">New SIEM Log Export</span>
                      <span className="block text-xs text-slate-500 dark:text-slate-400">Daily export summary of security logs.</span>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <input className="mt-1 rounded border-slate-300 dark:border-slate-600 text-[#137fec] focus:ring-[#137fec] bg-transparent" type="checkbox" />
                    <div>
                      <span className="block text-sm font-semibold">User Training Milestone</span>
                      <span className="block text-xs text-slate-500 dark:text-slate-400">Notifications when users complete security modules.</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Channel Mapping Section */}
          <div className="rounded-xl bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-1">Channel Mapping</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Direct specific alert types to dedicated channels to reduce noise.</p>
              </div>
              <button className="text-[#137fec] hover:text-[#137fec]/80 font-medium text-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-base">add</span> Add New Rule
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-200">Alert Type</th>
                    <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-200">Platform</th>
                    <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-200">Channel Name</th>
                    <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-200 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-2">
                        <span className="size-2 rounded-full bg-red-500"></span>
                        Critical Threats
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400">Microsoft Teams</td>
                    <td className="px-4 py-3">
                      <div className="inline-flex items-center px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono border border-slate-200 dark:border-slate-700">
                        #security-alerts
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-slate-400 hover:text-[#137fec] transition-colors"><span className="material-symbols-outlined text-lg">edit</span></button>
                      <button className="text-slate-400 hover:text-red-500 transition-colors ml-2"><span className="material-symbols-outlined text-lg">delete</span></button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-2">
                        <span className="size-2 rounded-full bg-amber-500"></span>
                        SIEM Exports
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400">Slack</td>
                    <td className="px-4 py-3">
                      <div className="inline-flex items-center px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono border border-slate-200 dark:border-slate-700">
                        #it-logs
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-slate-400 hover:text-[#137fec] transition-colors"><span className="material-symbols-outlined text-lg">edit</span></button>
                      <button className="text-slate-400 hover:text-red-500 transition-colors ml-2"><span className="material-symbols-outlined text-lg">delete</span></button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-2">
                        <span className="size-2 rounded-full bg-blue-500"></span>
                        Training Updates
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400">Microsoft Teams</td>
                    <td className="px-4 py-3">
                      <div className="inline-flex items-center px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono border border-slate-200 dark:border-slate-700">
                        #general
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-slate-400 hover:text-[#137fec] transition-colors"><span className="material-symbols-outlined text-lg">edit</span></button>
                      <button className="text-slate-400 hover:text-red-500 transition-colors ml-2"><span className="material-symbols-outlined text-lg">delete</span></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Global Settings & Test */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Summary Reports */}
            <div className="flex-1 rounded-xl bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-[#137fec]">summarize</span>
                  <h3 className="text-lg font-bold">Summary Reports</h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Receive a consolidated report of all activities instead of real-time alerts.</p>
              </div>
              <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
                <span className="font-medium text-sm">Enable Daily Digest</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" value="" />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-[#137fec]"></div>
                </label>
              </div>
            </div>

            {/* Test Notification */}
            <div className="flex-1 rounded-xl bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-[#137fec]">notifications_active</span>
                  <h3 className="text-lg font-bold">Test Integration</h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Send a dummy notification to verify that your channel mappings are configured correctly.</p>
              </div>
              <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium py-3 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">send</span>
                Send Test Notification
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
