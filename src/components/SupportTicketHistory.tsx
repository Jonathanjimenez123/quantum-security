import { auth } from '../firebase';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface SupportTicketHistoryProps {
  onBack: () => void;
  onNewTicket?: () => void;
}

export default function SupportTicketHistory({ onBack, onNewTicket }: SupportTicketHistoryProps) {
  const [expandedTicket, setExpandedTicket] = useState<string | null>('10150');

  const toggleTicket = (id: string) => {
    if (expandedTicket === id) {
      setExpandedTicket(null);
    } else {
      setExpandedTicket(id);
    }
  };

  return (
    <div className="bg-[#f5f7f8] dark:bg-[#101c22] font-sans text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0b95da]/10 text-[#0b95da]">
              <span className="material-symbols-outlined text-[24px]">shield</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Security Shield AI</span>
          </div>
          <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
            <button onClick={onBack} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#0b95da] dark:hover:text-[#0b95da] transition-colors">Panel de Control</button>
            <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#0b95da] dark:hover:text-[#0b95da] transition-colors" to="/security-alert-interface">Alerts</Link>
            <Link className="text-sm font-medium text-[#0b95da] dark:text-[#0b95da]" to='/centro-ayuda'>Support</Link>
            <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#0b95da] dark:hover:text-[#0b95da] transition-colors" to='/ajustes'>Configuración</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="relative flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined text-[24px]">notifications</span>
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900"></span>
            </button>
            <div className="h-9 w-9 rounded-full bg-cover bg-center ring-2 ring-slate-100 dark:ring-slate-800" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8 bg-[#f5f7f8] dark:bg-[#101c22]">
        <div className="mx-auto max-w-[1200px]">
          {/* Page Header */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Support Tickets</h1>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Track, manage, and respond to your security inquiries.</p>
            </div>
            <button 
              onClick={onNewTicket}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b95da] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0870a3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b95da] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              New Ticket
            </button>
          </div>

          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <span className="material-symbols-outlined">confirmation_number</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Tickets</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">24</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                  <span className="material-symbols-outlined">pending</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Pending Action</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">3</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Resolved</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">18</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Avg. Response</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">2h 15m</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="mb-6 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input className="block w-full rounded-lg border-0 bg-slate-50 py-2.5 pl-10 pr-4 text-slate-900 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#0b95da] dark:bg-slate-800 dark:text-white dark:ring-slate-700 dark:placeholder:text-slate-500 sm:text-sm sm:leading-6" placeholder="Buscar by ticket ID or subject..." type="text" />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <select className="appearance-none block w-full rounded-lg border-0 bg-slate-50 py-2.5 pl-4 pr-10 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-[#0b95da] dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700 cursor-pointer">
                  <option>Status: All</option>
                  <option>Open</option>
                  <option>Pending</option>
                  <option>Resolved</option>
                  <option>Closed</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500">
                  <span className="material-symbols-outlined text-[20px]">expand_more</span>
                </div>
              </div>
              <div className="relative">
                <select className="appearance-none block w-full rounded-lg border-0 bg-slate-50 py-2.5 pl-4 pr-10 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-[#0b95da] dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700 cursor-pointer">
                  <option>Category: All</option>
                  <option>Technical</option>
                  <option>Billing</option>
                  <option>Feature Request</option>
                  <option>Security Alert</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500">
                  <span className="material-symbols-outlined text-[20px]">expand_more</span>
                </div>
              </div>
              <button className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                <span className="material-symbols-outlined text-[20px]">filter_list</span>
              </button>
            </div>
          </div>

          {/* Tickets Table */}
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                <thead className="bg-slate-50 dark:bg-slate-800/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400" scope="col">Ticket ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-1/3" scope="col">Subject</th>
                    <th className="hidden px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:table-cell" scope="col">Created</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400" scope="col">Last Update</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400" scope="col">Estado</th>
                    <th className="hidden px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 lg:table-cell" scope="col">Priority</th>
                    <th className="relative px-6 py-4" scope="col">
                      <span className="sr-only">Acciones</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-900">
                  {/* Row 1 */}
                  <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                      <span className="font-mono text-slate-500 dark:text-slate-400">#</span>10245
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#0b95da] transition-colors">Suspicious Login Attempt Detected</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">I received an alert about a login from an unknown device in...</span>
                      </div>
                    </td>
                    <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-400 sm:table-cell">
                      Oct 24, 2026
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-green-500">fiber_manual_record</span>
                        Just now
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-900/30 dark:text-blue-400">Open</span>
                    </td>
                    <td className="hidden whitespace-nowrap px-6 py-4 lg:table-cell">
                      <span className="inline-flex items-center gap-1 rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 dark:bg-red-900/20 dark:text-red-400">
                        <span className="material-symbols-outlined text-[14px]">priority_high</span> High
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <button className="text-slate-400 hover:text-[#0b95da] dark:text-slate-500 dark:hover:text-[#0b95da]">
                        <span className="material-symbols-outlined">chevron_right</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                      <span className="font-mono text-slate-500 dark:text-slate-400">#</span>10238
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#0b95da] transition-colors">Extension not syncing with cloud</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">My settings are not persisting across different browsers when I...</span>
                      </div>
                    </td>
                    <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-400 sm:table-cell">
                      Oct 23, 2026
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                      4 hours ago
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 dark:bg-orange-900/30 dark:text-orange-400">Pending</span>
                    </td>
                    <td className="hidden whitespace-nowrap px-6 py-4 lg:table-cell">
                      <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10 dark:bg-slate-800 dark:text-slate-400">
                        <span className="material-symbols-outlined text-[14px]">remove</span> Medium
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <button className="text-slate-400 hover:text-[#0b95da] dark:text-slate-500 dark:hover:text-[#0b95da]">
                        <span className="material-symbols-outlined">chevron_right</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                      <span className="font-mono text-slate-500 dark:text-slate-400">#</span>10212
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#0b95da] transition-colors">Billing Clarification - October</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">I noticed a double charge on my statement for the pro plan...</span>
                      </div>
                    </td>
                    <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-400 sm:table-cell">
                      Oct 20, 2026
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                      1 day ago
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/30 dark:text-green-400">Resolved</span>
                    </td>
                    <td className="hidden whitespace-nowrap px-6 py-4 lg:table-cell">
                      <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10 dark:bg-slate-800 dark:text-slate-400">
                        <span className="material-symbols-outlined text-[14px]">arrow_downward</span> Low
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <button className="text-slate-400 hover:text-[#0b95da] dark:text-slate-500 dark:hover:text-[#0b95da]">
                        <span className="material-symbols-outlined">chevron_right</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                      <span className="font-mono text-slate-500 dark:text-slate-400">#</span>10199
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#0b95da] transition-colors">False Positive Report - google.com</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">The shield is blocking my internal company dashboard...</span>
                      </div>
                    </td>
                    <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-400 sm:table-cell">
                      Oct 18, 2026
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                      3 days ago
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10 dark:bg-slate-800 dark:text-slate-400">Closed</span>
                    </td>
                    <td className="hidden whitespace-nowrap px-6 py-4 lg:table-cell">
                      <span className="inline-flex items-center gap-1 rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 dark:bg-red-900/20 dark:text-red-400">
                        <span className="material-symbols-outlined text-[14px]">priority_high</span> High
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <button className="text-slate-400 hover:text-[#0b95da] dark:text-slate-500 dark:hover:text-[#0b95da]">
                        <span className="material-symbols-outlined">chevron_right</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 5 - Expanded Style (Simulated View) */}
                  <tr className="bg-[#0b95da]/5 dark:bg-slate-800/80 border-l-4 border-l-[#0b95da]">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white align-top">
                      <span className="font-mono text-slate-500 dark:text-slate-400">#</span>10150
                    </td>
                    <td className="px-6 py-4" colSpan={6}>
                      <div className="flex flex-col gap-4">
                        {/* Header of Expanded Item */}
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-base font-bold text-[#0b95da] dark:text-[#0b95da]">How do I whitelist a domain?</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Feature Inquiry • Created Oct 15, 2026</p>
                          </div>
                          <div className="flex gap-2">
                            <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/30 dark:text-green-400">Resolved</span>
                            <button className="text-slate-400 hover:text-[#0b95da] dark:text-slate-500">
                              <span className="material-symbols-outlined">expand_less</span>
                            </button>
                          </div>
                        </div>

                        {/* Message History */}
                        <div className="mt-2 space-y-4 border-t border-slate-200 pt-4 dark:border-slate-700">
                          {/* Agent Message */}
                          <div className="flex gap-3">
                            <div className="flex-shrink-0">
                              <div className="h-8 w-8 rounded-full bg-[#0b95da] flex items-center justify-center text-white text-xs font-bold">SA</div>
                            </div>
                            <div className="flex flex-col gap-1 max-w-[80%]">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-slate-900 dark:text-white">Support Agent</span>
                                <span className="text-xs text-slate-500">Oct 16, 10:30 AM</span>
                              </div>
                              <div className="rounded-lg rounded-tl-none bg-white p-3 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">
                                <p>Hello! You can whitelist a domain by going to Settings &gt; Safe List and clicking the "Add New Domain" button. Let me know if that helps!</p>
                              </div>
                            </div>
                          </div>

                          {/* User Message */}
                          <div className="flex flex-row-reverse gap-3">
                            <div className="flex-shrink-0">
                              <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 text-xs font-bold">ME</div>
                            </div>
                            <div className="flex flex-col gap-1 items-end max-w-[80%]">
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-500">Oct 16, 10:45 AM</span>
                                <span className="text-xs font-bold text-slate-900 dark:text-white">You</span>
                              </div>
                              <div className="rounded-lg rounded-tr-none bg-[#0b95da] p-3 text-sm text-white shadow-sm">
                                <p>Perfect, found it. Thanks for the quick help!</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Quick Action Footer for expanded item */}
                        <div className="mt-2 flex gap-3">
                          <input className="flex-1 rounded-lg border-0 bg-white py-2 px-4 text-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-[#0b95da] dark:bg-slate-900 dark:ring-slate-700 dark:text-white" placeholder="Type a reply..." type="text" />
                          <button className="inline-flex items-center justify-center rounded-lg bg-[#0b95da] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0870a3]">
                            Reply
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900 sm:px-6">
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-700 dark:text-slate-400">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">24</span> results
                  </p>
                </div>
                <div>
                  <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                    <Link className="relative inline-flex items-center rounded-l-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0 dark:ring-slate-700 dark:hover:bg-slate-800" to='/panel'>
                      <span className="sr-only">Anterior</span>
                      <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                    </Link>
                    <Link aria-current="page" className="relative z-10 inline-flex items-center bg-[#0b95da] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b95da]" to='/panel'>1</Link>
                    <Link className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0 dark:text-white dark:ring-slate-700 dark:hover:bg-slate-800" to='/panel'>2</Link>
                    <Link className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0 dark:text-white dark:ring-slate-700 dark:hover:bg-slate-800" to='/panel'>3</Link>
                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-inset ring-slate-300 focus:outline-offset-0 dark:text-slate-400 dark:ring-slate-700">...</span>
                    <Link className="relative inline-flex items-center rounded-r-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0 dark:ring-slate-700 dark:hover:bg-slate-800" to='/panel'>
                      <span className="sr-only">Siguiente</span>
                      <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Help Section (Bottom) */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-2 rounded-lg p-4 hover:bg-white hover:shadow-sm dark:hover:bg-slate-900 transition-all cursor-pointer group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-[#0b95da]/10 group-hover:text-[#0b95da] transition-colors">
                <span className="material-symbols-outlined">menu_book</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">Knowledge Base</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Browse articles and tutorials to find answers quickly.</p>
            </div>
            <div className="flex flex-col gap-2 rounded-lg p-4 hover:bg-white hover:shadow-sm dark:hover:bg-slate-900 transition-all cursor-pointer group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-[#0b95da]/10 group-hover:text-[#0b95da] transition-colors">
                <span className="material-symbols-outlined">forum</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">Community Forum</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Connect with other users and share security tips.</p>
            </div>
            <div className="flex flex-col gap-2 rounded-lg p-4 hover:bg-white hover:shadow-sm dark:hover:bg-slate-900 transition-all cursor-pointer group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-[#0b95da]/10 group-hover:text-[#0b95da] transition-colors">
                <span className="material-symbols-outlined">live_help</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">Live Chat</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Chat with our security experts in real-time.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
