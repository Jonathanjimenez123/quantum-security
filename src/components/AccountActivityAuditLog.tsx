import React from 'react';
import { Link } from 'react-router-dom';

interface AccountActivityAuditLogProps {
  onBack?: () => void;
}

export default function AccountActivityAuditLog({ onBack }: AccountActivityAuditLogProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main font-display antialiased min-h-screen flex flex-col">
      {/* Header / TopNavBar */}
      <header className="sticky top-0 z-50 w-full bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark px-6 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3 text-text-main dark:text-white cursor-pointer" onClick={onBack}>
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-2xl">shield_lock</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">SecurityGuard AI</h1>
          </div>
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors" to='/panel' onClick={(e) => { e.preventDefault(); onBack?.(); }}>Panel de Control</Link>
            <Link className="text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors" to='/informes'>Threats</Link>
            <Link className="text-primary font-semibold text-sm transition-colors relative after:absolute after:-bottom-5 after:left-0 after:h-0.5 after:w-full after:bg-primary" to='/panel'>Activity Log</Link>
            <Link className="text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors" to='/ajustes'>Configuración</Link>
          </nav>
          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-background-light hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-text-main dark:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-background-light hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-text-main dark:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">account_circle</span>
            </button>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Page Title & Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-black tracking-tight text-text-main dark:text-white">Account Activity &amp; Audit Log</h2>
            <p className="text-text-muted dark:text-gray-400 max-w-2xl">Monitor your recent login history and security events to ensure your account remains secure. Review flagged attempts immediately.</p>
          </div>
          <button className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 font-bold shadow-sm transition-all focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
            <span className="material-symbols-outlined text-[20px]">lock_reset</span>
            <span>Secure My Account</span>
          </button>
        </div>
        {/* Filters & Controls */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <div className="flex items-center rounded-lg bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark p-1 shadow-sm">
            <button className="rounded px-3 py-1.5 text-sm font-semibold bg-primary/10 text-primary dark:text-blue-400">All Events</button>
            <button className="rounded px-3 py-1.5 text-sm font-medium text-text-muted hover:text-text-main dark:text-gray-400 dark:hover:text-white transition-colors">Failed</button>
            <button className="rounded px-3 py-1.5 text-sm font-medium text-text-muted hover:text-text-main dark:text-gray-400 dark:hover:text-white transition-colors">Successful</button>
            <button className="rounded px-3 py-1.5 text-sm font-medium text-text-muted hover:text-text-main dark:text-gray-400 dark:hover:text-white transition-colors">Suspicious</button>
          </div>
          <div className="h-8 w-px bg-border-light dark:bg-border-dark mx-1 hidden sm:block"></div>
          <button className="flex items-center gap-2 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark px-3 py-2 text-sm font-medium text-text-main dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            <span>Last 30 Days</span>
            <span className="material-symbols-outlined text-[18px] text-text-muted">arrow_drop_down</span>
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark px-3 py-2 text-sm font-medium text-text-main dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ml-auto">
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Export CSV</span>
          </button>
        </div>
        {/* Data Table */}
        <div className="w-full overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-border-light dark:border-border-dark">
                <tr>
                  <th className="px-6 py-4 font-semibold text-text-main dark:text-gray-200">Timestamp</th>
                  <th className="px-6 py-4 font-semibold text-text-main dark:text-gray-200">Event Type</th>
                  <th className="px-6 py-4 font-semibold text-text-main dark:text-gray-200">Device &amp; Browser</th>
                  <th className="px-6 py-4 font-semibold text-text-main dark:text-gray-200">IP Address</th>
                  <th className="px-6 py-4 font-semibold text-text-main dark:text-gray-200">Location</th>
                  <th className="px-6 py-4 font-semibold text-text-main dark:text-gray-200 text-right">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light dark:divide-border-dark">
                {/* Row 1: Success */}
                <tr className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="font-medium text-text-main dark:text-white">Oct 24, 2026</span>
                      <span className="text-xs">10:42 AM</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                      <span className="font-medium text-text-main dark:text-white">Login Success</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">laptop_mac</span>
                      Chrome on MacOS
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-text-muted dark:text-gray-400">192.168.1.1</td>
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400">New York, USA</td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:text-emerald-400">
                      Verified
                    </span>
                  </td>
                </tr>
                {/* Row 2: Failed/Warning */}
                <tr className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-amber-50/50 dark:bg-amber-900/10">
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="font-medium text-text-main dark:text-white">Oct 24, 2026</span>
                      <span className="text-xs">08:15 AM</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                      <span className="font-medium text-text-main dark:text-white">Failed Attempt</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">desktop_windows</span>
                      Firefox on Windows
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-text-muted dark:text-gray-400">45.22.19.12</td>
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400">
                    <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                      <span className="material-symbols-outlined text-[16px]">warning</span>
                      Unknown Location
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center rounded-full bg-amber-100 dark:bg-amber-900/30 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:text-amber-400">
                      Risk Detected
                    </span>
                  </td>
                </tr>
                {/* Row 3: 2FA Verified */}
                <tr className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="font-medium text-text-main dark:text-white">Oct 23, 2026</span>
                      <span className="text-xs">11:20 PM</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="font-medium text-text-main dark:text-white">2FA Verified</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">smartphone</span>
                      Safari on iPhone 14
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-text-muted dark:text-gray-400">10.0.0.5</td>
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400">New York, USA</td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-400">
                      Authorized
                    </span>
                  </td>
                </tr>
                {/* Row 4: Success */}
                <tr className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="font-medium text-text-main dark:text-white">Oct 23, 2026</span>
                      <span className="text-xs">09:00 AM</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                      <span className="font-medium text-text-main dark:text-white">Login Success</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">laptop_mac</span>
                      Chrome on MacOS
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-text-muted dark:text-gray-400">192.168.1.1</td>
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400">New York, USA</td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:text-emerald-400">
                      Verified
                    </span>
                  </td>
                </tr>
                {/* Row 5: Password Change */}
                <tr className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="font-medium text-text-main dark:text-white">Oct 22, 2026</span>
                      <span className="text-xs">03:45 PM</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      <span className="font-medium text-text-main dark:text-white">Password Change</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">laptop_mac</span>
                      Chrome on MacOS
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-text-muted dark:text-gray-400">192.168.1.1</td>
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400">New York, USA</td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:text-purple-400">
                      Security Event
                    </span>
                  </td>
                </tr>
                {/* Row 6: Suspicious */}
                <tr className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-red-50/50 dark:bg-red-900/10">
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="font-medium text-text-main dark:text-white">Oct 21, 2026</span>
                      <span className="text-xs">02:11 AM</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <span className="font-medium text-text-main dark:text-white">Blocked Login</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">public</span>
                      Tor Browser
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-text-muted dark:text-gray-400">185.220.101.5</td>
                  <td className="px-6 py-4 text-text-muted dark:text-gray-400">
                    <div className="flex items-center gap-1 text-red-600 dark:text-red-400">
                      <span className="material-symbols-outlined text-[16px]">location_off</span>
                      Moscow, RU
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center rounded-full bg-red-100 dark:bg-red-900/30 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:text-red-400">
                      High Risk
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-border-light dark:border-border-dark bg-white dark:bg-surface-dark px-6 py-3">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-text-muted dark:text-gray-400">
                  Showing <span className="font-medium text-text-main dark:text-white">1</span> to <span className="font-medium text-text-main dark:text-white">6</span> of <span className="font-medium text-text-main dark:text-white">97</span> results
                </p>
              </div>
              <div>
                <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                  <Link className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:ring-gray-700 dark:hover:bg-gray-800" to='/panel'>
                    <span className="sr-only">Anterior</span>
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </Link>
                  <Link aria-current="page" className="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" to='/panel'>1</Link>
                  <Link className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-text-main dark:text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:ring-gray-700 dark:hover:bg-gray-800" to='/panel'>2</Link>
                  <Link className="relative hidden items-center px-4 py-2 text-sm font-semibold text-text-main dark:text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex dark:ring-gray-700 dark:hover:bg-gray-800" to='/panel'>3</Link>
                  <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-400 ring-1 ring-inset ring-gray-300 focus:outline-offset-0 dark:ring-gray-700">...</span>
                  <Link className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:ring-gray-700 dark:hover:bg-gray-800" to='/panel'>
                    <span className="sr-only">Siguiente</span>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Security Insights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-6 shadow-sm flex flex-col items-start gap-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
              <span className="material-symbols-outlined">gpp_good</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-main dark:text-white">Account Status: Secure</h3>
              <p className="text-sm text-text-muted dark:text-gray-400 mt-1">Your account has 2FA enabled and no unverified high-risk events.</p>
            </div>
          </div>
          <div className="rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-6 shadow-sm flex flex-col items-start gap-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <span className="material-symbols-outlined">devices</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-main dark:text-white">Active Sessions</h3>
              <p className="text-sm text-text-muted dark:text-gray-400 mt-1">You are currently logged in on 2 devices. <Link className="text-primary hover:underline" to='/panel'>Manage sessions</Link></p>
            </div>
          </div>
          <div className="rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-6 shadow-sm flex flex-col items-start gap-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              <span className="material-symbols-outlined">vpn_key</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-main dark:text-white">Password Health</h3>
              <p className="text-sm text-text-muted dark:text-gray-400 mt-1">Last changed 2 days ago. Your password strength is excellent.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
