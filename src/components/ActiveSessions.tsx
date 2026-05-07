import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface ActiveSessionsProps {
  onBack: () => void;
}

export default function ActiveSessions({ onBack }: ActiveSessionsProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased min-h-screen flex flex-col">
      {/* Top Navigation */}
      <div className="w-full border-b border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4 cursor-pointer" onClick={onBack}>
          <div className="size-8 rounded bg-primary/20 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">security</span>
          </div>
          <h1 className="text-lg font-bold tracking-tight">Shield<span className="text-primary">Guard</span> AI</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={onBack} className="text-sm font-medium hover:text-primary transition-colors text-slate-500 dark:text-slate-400">Panel de Control</button>
          <Link className="text-sm font-medium hover:text-primary transition-colors text-slate-500 dark:text-slate-400" to='/panel'>Activity Log</Link>
          <Link className="text-sm font-medium text-primary" to='/panel'>Sessions</Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors text-slate-500 dark:text-slate-400" to='/ajustes'>Configuración</Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center border border-slate-300 dark:border-slate-600" data-alt="User profile picture" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 py-8 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Active Sessions</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
              Manage your active devices and current sessions. Revoke access to unrecognized devices to keep your account secure.
            </p>
          </div>
        </div>

        {/* KPI & Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          {/* Total Active Devices Card */}
          <div className="md:col-span-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-xl p-6 shadow-sm">
            <div className="flex flex-col h-full justify-between">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-outlined">devices</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Total Active Devices</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">3</p>
              </div>
            </div>
          </div>

          {/* Login Notifications Toggle */}
          <div className="md:col-span-4 bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-xl p-6 shadow-sm flex flex-col justify-center">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900 dark:text-white mb-1">Login Notifications</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 text-balance">Alert me via email when a new device logs in.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>

          {/* Emergency Sign Out */}
          <div className="md:col-span-5 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-xl p-6 shadow-sm flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-red-700 dark:text-red-400 mb-1">Emergency Sign Out</p>
                <p className="text-sm text-red-600/80 dark:text-red-400/70">Compromised? Log out everywhere else.</p>
              </div>
              <button className="whitespace-nowrap px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">logout</span>
                Sign Out All
              </button>
            </div>
          </div>
        </div>

        {/* Sessions List */}
        <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-border-dark flex items-center justify-between">
            <h3 className="font-semibold text-lg">Current Sessions</h3>
            <span className="text-xs font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Last updated: Just now</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 dark:border-border-dark text-xs uppercase text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50">
                  <th className="px-6 py-3 font-semibold w-1/3">Device / Browser</th>
                  <th className="px-6 py-3 font-semibold">Location</th>
                  <th className="px-6 py-3 font-semibold">IP Address</th>
                  <th className="px-6 py-3 font-semibold">Last Activity</th>
                  <th className="px-6 py-3 font-semibold text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-border-dark">
                {/* Current Session */}
                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors bg-primary/5 dark:bg-primary/5">
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined">desktop_windows</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-slate-900 dark:text-white">Chrome on Windows</p>
                          <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20">Current Session</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Chrome 122.0 • Windows 11</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">San Francisco, USA</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">California</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">
                    192.168.1.42
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </span>
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium">Active now</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-3 py-1.5 text-xs font-medium text-slate-400 dark:text-slate-500 cursor-not-allowed border border-transparent" disabled>
                      Current
                    </button>
                  </td>
                </tr>
                {/* Other Session 1 */}
                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined">laptop_mac</span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white mb-1">Safari on macOS</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Safari 17.2 • macOS Sonoma</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">New York, USA</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">New York</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">
                    104.23.11.89
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-500 dark:text-slate-400">2 hours ago</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-3 py-1.5 text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 border border-red-200 dark:border-red-900/50 rounded transition-colors">
                      Revoke
                    </button>
                  </td>
                </tr>
                {/* Other Session 2 */}
                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined">smartphone</span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white mb-1">Chrome on iPhone</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Chrome iOS • iOS 17.3</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">London, UK</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">England</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">
                    82.14.55.120
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-500 dark:text-slate-400">3 days ago</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-3 py-1.5 text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 border border-red-200 dark:border-red-900/50 rounded transition-colors">
                      Revoke
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Map Visualization Placeholder (Optional Polish) */}
          <div className="bg-slate-50 dark:bg-slate-800/50 border-t border-gray-200 dark:border-border-dark p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Session Locations</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Your account has been accessed from 3 unique locations in the last 30 days.</p>
                <button className="text-primary text-xs font-medium hover:underline flex items-center gap-1">
                  View detailed access log
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
              <div className="w-full md:w-2/3 h-32 rounded-lg bg-slate-200 dark:bg-slate-700 bg-cover bg-center overflow-hidden relative group cursor-pointer" data-alt="Map showing active session locations globally" data-location="World Map" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida/ADBb0ugdeyEUGGtf0Hf8MpAjVRFEDeIHNFR2Z8yjahzqj9-DDuCp40RJoGmFjcCcxMyqVjBxE9PU_HtIPnO_0QrmK0z38sK1dfMe73EaSv0wNbooZUrIjUz6KP5yiZMAPn0sZX7c5atgzUu1TzExQSqyKOe0JHEPseeOkZW-Z6jPWpnZWa1Xf2xXgvIRo_hKQoEp5jK1TesZOMJVWkR-4tJYl-7iPQQCbQcR8b-bC-WgAITB0nzeE8pnoCgwSgcJyUTYEoTRRLlrOhZn')"}}>
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"></div>
                {/* Map Pins (Visual only) */}
                <div className="absolute top-[30%] left-[20%] size-2 bg-primary rounded-full ring-4 ring-primary/30"></div>
                <div className="absolute top-[35%] left-[28%] size-2 bg-primary rounded-full ring-4 ring-primary/30"></div>
                <div className="absolute top-[25%] right-[45%] size-2 bg-primary rounded-full ring-4 ring-primary/30"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
