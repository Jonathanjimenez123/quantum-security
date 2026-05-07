import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface NotificationPreferencesProps {
  onBack: () => void;
}

export default function NotificationPreferences({ onBack }: NotificationPreferencesProps) {
  return (
    <div className="bg-[#f6f7f8] text-slate-900 font-['Inter',sans-serif] antialiased min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-slate-900 cursor-pointer" onClick={onBack}>
              <div className="size-8 text-[#137fec]">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
                </svg>
              </div>
              <h1 className="text-xl font-bold tracking-tight">PhishGuard AI</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link className="text-slate-600 hover:text-[#137fec] text-sm font-medium transition-colors" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
              <Link className="text-slate-600 hover:text-[#137fec] text-sm font-medium transition-colors" to='/informes'>Threat Log</Link>
              <Link className="text-[#137fec] text-sm font-medium transition-colors" to='/ajustes'>Configuración</Link>
              <Link className="text-slate-600 hover:text-[#137fec] text-sm font-medium transition-colors" to='/centro-ayuda'>Help</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
              <input className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-[#137fec]/20 w-64 placeholder:text-slate-400 text-slate-800" placeholder="Buscar settings..." type="text" />
            </div>
            <div className="relative">
              <div className="size-9 rounded-full bg-slate-200 overflow-hidden cursor-pointer border border-slate-300">
                <img alt="User Profile" className="w-full h-full object-cover" data-alt="Professional man avatar in suit" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
              </div>
              <span className="absolute bottom-0 right-0 size-2.5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-5xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Notification Preferences</h2>
          <p className="text-slate-500 text-lg max-w-2xl">Manage how and when you receive alerts about security threats, account updates, and system maintenance.</p>
        </div>

        {/* Global Toggle */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8 shadow-sm flex items-center justify-between group hover:border-[#137fec]/30 transition-colors">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-[#137fec]/10 flex items-center justify-center text-[#137fec] group-hover:bg-[#137fec] group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-[28px]">notifications_active</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Global Notifications</h3>
              <p className="text-slate-500 text-sm">Pause all notifications temporarily or disable them entirely.</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input defaultChecked className="sr-only peer" type="checkbox" value="" />
            <div className="w-14 h-7 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#137fec]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#137fec]"></div>
          </label>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Channel Settings (Table) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Channels Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-semibold text-slate-900 text-lg">Delivery Channels</h3>
                <button className="text-sm text-[#137fec] font-medium hover:text-[#0e6ac7]">Reset to Default</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 text-slate-500 text-xs uppercase tracking-wider font-semibold">
                      <th className="px-6 py-4">Event Type</th>
                      <th className="px-4 py-4 text-center w-24">Correo</th>
                      <th className="px-4 py-4 text-center w-24">Browser</th>
                      <th className="px-4 py-4 text-center w-24">SMS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {/* Row 1 */}
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                            <span className="material-symbols-outlined text-[20px]">security</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">Critical Threat Detected</p>
                            <p className="text-xs text-slate-500">Phishing attempts, malware blocks</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <input defaultChecked className="size-5 rounded border-slate-300 text-[#137fec] focus:ring-[#137fec]/20 cursor-pointer" type="checkbox" />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <input defaultChecked className="size-5 rounded border-slate-300 text-[#137fec] focus:ring-[#137fec]/20 cursor-pointer" type="checkbox" />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <input defaultChecked className="size-5 rounded border-slate-300 text-[#137fec] focus:ring-[#137fec]/20 cursor-pointer" type="checkbox" />
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                            <span className="material-symbols-outlined text-[20px]">school</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">Training Milestones</p>
                            <p className="text-xs text-slate-500">Course completions, new assignments</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <input defaultChecked className="size-5 rounded border-slate-300 text-[#137fec] focus:ring-[#137fec]/20 cursor-pointer" type="checkbox" />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <input className="size-5 rounded border-slate-300 text-[#137fec] focus:ring-[#137fec]/20 cursor-pointer" type="checkbox" />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <input className="size-5 rounded border-slate-300 text-[#137fec] focus:ring-[#137fec]/20 cursor-pointer" disabled type="checkbox" />
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                            <span className="material-symbols-outlined text-[20px]">summarize</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">Weekly Security Summary</p>
                            <p className="text-xs text-slate-500">Digest of weekly activity</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <input defaultChecked className="size-5 rounded border-slate-300 text-[#137fec] focus:ring-[#137fec]/20 cursor-pointer" type="checkbox" />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <input className="size-5 rounded border-slate-300 text-[#137fec] focus:ring-[#137fec]/20 cursor-pointer" type="checkbox" />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <input className="size-5 rounded border-slate-300 text-[#137fec] focus:ring-[#137fec]/20 cursor-pointer" type="checkbox" />
                      </td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                            <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">Billing Alerts</p>
                            <p className="text-xs text-slate-500">Invoices, payment failures</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <input defaultChecked className="size-5 rounded border-slate-300 text-[#137fec] focus:ring-[#137fec]/20 cursor-pointer" type="checkbox" />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <input defaultChecked className="size-5 rounded border-slate-300 text-[#137fec] focus:ring-[#137fec]/20 cursor-pointer" type="checkbox" />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <input className="size-5 rounded border-slate-300 text-[#137fec] focus:ring-[#137fec]/20 cursor-pointer" type="checkbox" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Frequency Settings */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-semibold text-slate-900 text-lg mb-4">Delivery Frequency</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="cursor-pointer">
                  <input defaultChecked className="peer sr-only" name="frequency" type="radio" />
                  <div className="h-full rounded-lg border border-slate-200 p-4 hover:border-[#137fec]/50 peer-checked:border-[#137fec] peer-checked:bg-[#137fec]/5 peer-checked:ring-1 peer-checked:ring-[#137fec] transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-slate-900">Immediate</span>
                      <span className="material-symbols-outlined text-[#137fec] text-[20px] opacity-0 peer-checked:opacity-100">check_circle</span>
                    </div>
                    <p className="text-xs text-slate-500">Receive notifications as soon as events occur. Recommended for security alerts.</p>
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input className="peer sr-only" name="frequency" type="radio" />
                  <div className="h-full rounded-lg border border-slate-200 p-4 hover:border-[#137fec]/50 peer-checked:border-[#137fec] peer-checked:bg-[#137fec]/5 peer-checked:ring-1 peer-checked:ring-[#137fec] transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-slate-900">Hourly Digest</span>
                      <span className="material-symbols-outlined text-[#137fec] text-[20px] opacity-0 peer-checked:opacity-100">check_circle</span>
                    </div>
                    <p className="text-xs text-slate-500">A summary of non-critical events sent once every hour.</p>
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input className="peer sr-only" name="frequency" type="radio" />
                  <div className="h-full rounded-lg border border-slate-200 p-4 hover:border-[#137fec]/50 peer-checked:border-[#137fec] peer-checked:bg-[#137fec]/5 peer-checked:ring-1 peer-checked:ring-[#137fec] transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-slate-900">Daily Summary</span>
                      <span className="material-symbols-outlined text-[#137fec] text-[20px] opacity-0 peer-checked:opacity-100">check_circle</span>
                    </div>
                    <p className="text-xs text-slate-500">One comprehensive email sent at 9:00 AM daily.</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Verification & Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Methods */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-semibold text-slate-900 text-lg mb-6">Contact Methods</h3>
              {/* Email */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Primary Email</label>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-1 relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">mail</span>
                    <input className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 focus:ring-[#137fec] focus:border-[#137fec]" readOnly type="email" value="alex.j@company.com" />
                  </div>
                  <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Verified
                  </span>
                </div>
                <button className="text-xs text-[#137fec] hover:underline font-medium">Change email address</button>
              </div>
              {/* Secondary Email */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Secondary Email</label>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-1 relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">alternate_email</span>
                    <input className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:ring-[#137fec] focus:border-[#137fec] placeholder:text-slate-400" placeholder="Add backup email" type="email" />
                  </div>
                </div>
              </div>
              {/* Phone */}
              <div className="mb-2">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Mobile Number (SMS)</label>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-1 relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">smartphone</span>
                    <input className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:ring-[#137fec] focus:border-[#137fec]" type="tel" defaultValue="+1 (555) 019-2834" />
                  </div>
                  <button className="shrink-0 p-2 text-slate-400 hover:text-[#137fec] transition-colors">
                    <span className="material-symbols-outlined text-[20px]">edit</span>
                  </button>
                </div>
                <div className="flex items-center gap-2 text-amber-600 bg-amber-50 p-3 rounded-lg text-xs">
                  <span className="material-symbols-outlined text-[16px]">warning</span>
                  <span>Pending Verification</span>
                  <button className="ml-auto font-bold underline hover:text-amber-700">Resend Code</button>
                </div>
              </div>
            </div>

            {/* Quick Help */}
            <div className="bg-[#137fec]/5 rounded-xl border border-[#137fec]/10 p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg shadow-sm text-[#137fec] shrink-0">
                  <span className="material-symbols-outlined text-[24px]">support_agent</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Need assistance?</h4>
                  <p className="text-xs text-slate-600 mb-3">Our support team is available 24/7 to help you configure your alert settings.</p>
                  <Link className="text-sm font-medium text-[#137fec] hover:text-[#0e6ac7] flex items-center gap-1 group" to='/centro-ayuda'>
                    Contact Support
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-end gap-4 border-t border-slate-200 pt-6">
          <button className="px-6 py-2.5 rounded-lg border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors">Cancelar</button>
          <button className="px-6 py-2.5 rounded-lg bg-[#137fec] text-white font-medium hover:bg-[#0e6ac7] shadow-sm shadow-[#137fec]/30 transition-all hover:-translate-y-0.5">Guardar Cambios</button>
        </div>
      </main>
    </div>
  );
}
