import React from 'react';
import { Link } from 'react-router-dom';

interface IAMSettingsProps {
  onBack: () => void;
}

export default function IAMSettings({ onBack }: IAMSettingsProps) {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden font-display text-slate-900 dark:text-slate-100 antialiased">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 px-6 py-4 bg-background-light dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-white hover:bg-primary/20 transition-colors mr-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">shield_lock</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">
            PhishGuard <span className="text-primary">IAM</span>
          </h2>
        </div>
        <div className="flex gap-4">
          <div className="hidden md:flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">Enterprise Secure</span>
          </div>
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-white hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-white hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 gap-8">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-64 shrink-0">
          <nav className="flex flex-col gap-2">
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/20" to='/ajustes'>
              <span className="material-symbols-outlined filled-icon">settings_accessibility</span>
              <span className="font-medium text-sm">Security Policy</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all" to='/panel'>
              <span className="material-symbols-outlined">group</span>
              <span className="font-medium text-sm">User Directory</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all" to='/informes'>
              <span className="material-symbols-outlined">history</span>
              <span className="font-medium text-sm">Audit Logs</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all" to='/panel'>
              <span className="material-symbols-outlined">security</span>
              <span className="font-medium text-sm">Compliance</span>
            </Link>

            <div className="h-px bg-slate-200 dark:border-slate-800 my-4"></div>

            <div className="px-4 py-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Admin Stats</p>
              <div className="mt-4 space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-slate-500">Security Score</span>
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[92%]"></div>
                  </div>
                  <span className="text-[10px] text-right text-green-500 font-bold">92%</span>
                </div>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 space-y-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Identity & Access Management</h1>
            <p className="text-slate-500 dark:text-slate-400">Configure global authentication standards and high-security access controls for PhishGuard infrastructure.</p>
          </div>

          {/* Security Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Biometric Authentication Card */}
            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">fingerprint</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">Biometric Login</h3>
                  <p className="text-xs text-slate-500">WebAuthn / FIDO2 Standards</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <div>
                    <p className="text-sm font-semibold dark:text-white">FaceID / TouchID</p>
                    <p className="text-[11px] text-slate-500">Allow users to log in with device biometrics</p>
                  </div>
                  <label className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-300 dark:bg-slate-700 has-[:checked]:bg-primary transition-colors">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="h-4 w-4 translate-x-1 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-6"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 opacity-60">
                  <div>
                    <p className="text-sm font-semibold dark:text-white">Fallback to Password</p>
                    <p className="text-[11px] text-slate-500">Allow password if biometrics fail</p>
                  </div>
                  <label className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-300 dark:bg-slate-700 has-[:checked]:bg-primary transition-colors">
                    <input className="sr-only peer" type="checkbox" />
                    <div className="h-4 w-4 translate-x-1 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-6"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* MFA & Hardware Keys Card */}
            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">key</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">Hardware MFA</h3>
                  <p className="text-xs text-slate-500">Physical Security Tokens</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl hover:border-primary/50 cursor-pointer transition-colors">
                  <span className="material-symbols-outlined text-slate-400">add_circle</span>
                  <span className="text-sm font-medium text-slate-500">Register new YubiKey / Titan Key</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">usb</span>
                    <div>
                      <p className="text-sm font-semibold dark:text-white">Admin Key #1 (YubiKey 5C)</p>
                      <p className="text-[11px] text-slate-500">Last used: 2 hours ago</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 text-sm cursor-pointer hover:text-red-500">delete</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Session Management */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">public</span>
                Active Session Management
              </h2>
              <button className="text-xs font-bold text-primary hover:underline">Revoke All Sessions</button>
            </div>

            <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                      <th className="px-6 py-4">Device / Browser</th>
                      <th className="px-6 py-4">Location</th>
                      <th className="px-6 py-4">Estado</th>
                      <th className="px-6 py-4 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-slate-400">laptop_mac</span>
                          <div>
                            <p className="font-semibold dark:text-white">MacBook Pro 16"</p>
                            <p className="text-xs text-slate-500">Chrome v121.0.1</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-4 bg-slate-200 dark:bg-slate-700 rounded-sm overflow-hidden flex items-center justify-center">
                            <span className="text-[8px] font-bold">US</span>
                          </div>
                          <span className="text-slate-600 dark:text-slate-300">San Francisco, USA</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase">
                          <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                          Current
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="material-symbols-outlined text-slate-400 hover:text-red-500">logout</button>
                      </td>
                    </tr>
                    <tr className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-slate-400">smartphone</span>
                          <div>
                            <p className="font-semibold dark:text-white">iPhone 15 Pro</p>
                            <p className="text-xs text-slate-500">Safari Mobile</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-4 bg-slate-200 dark:bg-slate-700 rounded-sm overflow-hidden flex items-center justify-center">
                            <span className="text-[8px] font-bold">UK</span>
                          </div>
                          <span className="text-slate-600 dark:text-slate-300">London, UK</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-500/10 text-slate-500 text-[10px] font-bold uppercase">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="material-symbols-outlined text-slate-400 hover:text-red-500">logout</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Role-Based Access Control (RBAC) */}
          <section className="space-y-4 pb-12">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">admin_panel_settings</span>
                Role-Based Access Control
              </h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg text-white text-sm font-semibold hover:bg-primary/90 transition-all">
                <span className="material-symbols-outlined text-sm">add</span>
                New Role
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Role: Super Admin */}
              <div className="bg-white dark:bg-slate-900/50 p-5 rounded-2xl border-2 border-primary/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2">
                  <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold">SYSTEM</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Super Admin</h4>
                <p className="text-xs text-slate-500 mb-4 line-clamp-2">Full access to all security modules, policy editing, and user management.</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="text-[9px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-500">IAM_FULL</span>
                  <span className="text-[9px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-500">AUDIT_RW</span>
                  <span className="text-[9px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-500">+12 more</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500">3 Users Assigned</span>
                  <button className="material-symbols-outlined text-slate-400 hover:text-primary">edit</button>
                </div>
              </div>

              {/* Role: Security Analyst */}
              <div className="bg-white dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/30 transition-all group">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Security Analyst</h4>
                <p className="text-xs text-slate-500 mb-4 line-clamp-2">Read-only access to audit logs and system activity monitoring.</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="text-[9px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-500">AUDIT_RO</span>
                  <span className="text-[9px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-500">LOG_STREAM</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500">8 Users Assigned</span>
                  <button className="material-symbols-outlined text-slate-400 hover:text-primary">edit</button>
                </div>
              </div>

              {/* Role: Support Desk */}
              <div className="bg-white dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/30 transition-all group">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Support Desk</h4>
                <p className="text-xs text-slate-500 mb-4 line-clamp-2">Limited user profile access for password resets and MFA clearing.</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="text-[9px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-500">USER_MNG</span>
                  <span className="text-[9px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-500">MFA_RESET</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500">14 Users Assigned</span>
                  <button className="material-symbols-outlined text-slate-400 hover:text-primary">edit</button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
