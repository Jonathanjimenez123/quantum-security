import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface BillingPortalProps {
  onBack: () => void;
}

export default function BillingPortal({ onBack }: BillingPortalProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/20">
      <div className="relative flex min-h-screen w-full flex-row overflow-x-hidden">
        {/* Sidebar */}
        <aside className="flex h-screen w-64 flex-col justify-between border-r border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 sticky top-0 shrink-0">
          <div className="flex flex-col gap-4">
            {/* User/Company Profile */}
            <div className="flex items-center gap-3 px-2">
              <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0 bg-slate-100 ring-1 ring-slate-200 dark:ring-slate-700" data-alt="Company Logo Abstract" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
              <div className="flex flex-col overflow-hidden">
                <h1 className="text-slate-900 text-sm font-semibold leading-tight truncate dark:text-white">SecureGuard AI</h1>
                <p className="text-slate-500 text-xs font-normal leading-tight truncate dark:text-slate-400">Enterprise Admin</p>
              </div>
            </div>
            {/* Navigation */}
            <nav className="flex flex-col gap-1 mt-4">
              <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>
                <span className="material-symbols-outlined text-[20px]">dashboard</span>
                <span className="text-sm font-medium">Panel de Control</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-400" to='/panel'>
                <span className="material-symbols-outlined text-[20px] fill-1">credit_card</span>
                <span className="text-sm font-medium">Billing &amp; Invoices</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100" to='/panel'>
                <span className="material-symbols-outlined text-[20px]">group</span>
                <span className="text-sm font-medium">Team Management</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100" to='/panel'>
                <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                <span className="text-sm font-medium">Tax Information</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100" to='/panel'>
                <span className="material-symbols-outlined text-[20px]">upgrade</span>
                <span className="text-sm font-medium">Plan Upgrades</span>
              </Link>
            </nav>
          </div>
          {/* Bottom Actions */}
          <div className="flex flex-col gap-2 border-t border-slate-200 pt-4 dark:border-slate-800">
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100" to='/ajustes'>
              <span className="material-symbols-outlined text-[20px]">settings</span>
              <span className="text-sm font-medium">Configuración</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100" to='/panel'>
              <span className="material-symbols-outlined text-[20px]">logout</span>
              <span className="text-sm font-medium">Cerrar Sesión</span>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0">
          <div className="max-w-5xl mx-auto w-full p-6 md:p-10 flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <h1 className="text-slate-900 text-3xl font-bold tracking-tight dark:text-white">Billing &amp; Invoices</h1>
              <p className="text-slate-500 text-base dark:text-slate-400">Manage your subscription, view history, and update payment details.</p>
            </div>

            {/* Top Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Current Plan Card */}
              <div className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
                <div className="flex flex-col gap-1 mb-4">
                  <div className="flex items-center justify-between">
                    <p className="text-slate-500 text-sm font-medium dark:text-slate-400">Current Plan</p>
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20">Active</span>
                  </div>
                  <p className="text-slate-900 text-2xl font-bold dark:text-white">Enterprise</p>
                </div>
                <button className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all">
                  Manage Subscription
                </button>
              </div>

              {/* Next Billing Date */}
              <div className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
                <div className="flex flex-col gap-1">
                  <p className="text-slate-500 text-sm font-medium dark:text-slate-400">Next Billing Date</p>
                  <p className="text-slate-900 text-2xl font-bold dark:text-white">Oct 1, 2026</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  <span>Auto-renewal enabled</span>
                </div>
              </div>

              {/* Amount Due */}
              <div className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
                <div className="flex flex-col gap-1">
                  <p className="text-slate-500 text-sm font-medium dark:text-slate-400">Amount Due</p>
                  <p className="text-slate-900 text-2xl font-bold dark:text-white">$0.00</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>All invoices paid</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Column (Left) */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {/* Payment Method */}
                <section className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 overflow-hidden">
                  <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-800">
                    <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">Payment Method</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-14 shrink-0 items-center justify-center rounded bg-white shadow-sm border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                          {/* Visa Icon Placeholder */}
                          <svg className="h-6 w-auto" fill="none" viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg">
                            <rect fill="#1A1F71" height="24" rx="4" width="36"></rect>
                            <path d="M14.5222 15.6888L16.4684 3.99219H13.4116L11.4654 15.6888H14.5222ZM25.0278 15.4654C25.0888 15.5688 26.6872 9.77441 27.2458 7.37109L24.5822 15.6888H27.9172L30.6388 3.99219H27.5756C26.8928 3.99219 26.3022 4.41441 26.0466 5.0933L22.2578 14.5266L23.1422 10.3688L24.8722 15.4654H25.0278ZM11.4988 3.99219H7.94002C7.50225 3.99219 7.15114 4.26775 6.98558 4.67553L4.01114 11.6444H8.22558L8.27225 11.8744L2.83558 4.38553C2.26114 4.62219 0.704468 5.2533 0.704468 5.2533L1.51114 9.07107C1.65669 9.58553 5.43225 15.6888 5.43225 15.6888H9.33002L11.4988 3.99219ZM22.5644 10.1555C22.61 9.80553 22.9511 8.35109 23.3611 6.37775C23.3767 6.33109 23.3934 6.2233 23.3934 6.2233C21.9967 5.56441 20.3756 5.34107 19.3311 5.34107C16.5911 5.34107 14.6534 6.78219 14.6211 8.87775C14.5911 10.6977 16.2256 11.6966 17.4522 12.2966C18.71 12.9122 19.1322 13.3088 19.1156 13.8833C19.0834 14.77 18.0311 15.1766 17.0722 15.1766C15.8611 15.1766 14.8811 14.8322 14.3322 14.5855L13.9111 16.5444C14.4378 16.7888 15.8689 17.0011 17.2656 17.0011C20.1411 17.0011 22.0434 15.58 22.0744 13.4333C22.0911 11.8977 20.9422 10.8655 19.4978 10.1655L22.5644 10.1555Z" fill="white"></path>
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">Visa ending in 4242</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Expires 12/25</p>
                        </div>
                      </div>
                      <button className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-colors">
                        Update
                      </button>
                    </div>
                  </div>
                </section>

                {/* Billing History */}
                <section className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-800">
                    <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">Billing History</h3>
                    <button className="text-sm text-primary hover:text-blue-700 font-medium dark:text-blue-400 dark:hover:text-blue-300">View all</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-500 dark:text-slate-400">
                      <thead className="bg-slate-50 text-xs font-semibold uppercase text-slate-500 dark:bg-slate-800/50 dark:text-slate-400">
                        <tr>
                          <th className="px-6 py-3" scope="col">Fecha</th>
                          <th className="px-6 py-3" scope="col">Invoice ID</th>
                          <th className="px-6 py-3" scope="col">Amount</th>
                          <th className="px-6 py-3 text-right" scope="col">Descargar</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                          <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-white">Oct 1, 2026</td>
                          <td className="whitespace-nowrap px-6 py-4">INV-2026-010</td>
                          <td className="whitespace-nowrap px-6 py-4">$4,500.00</td>
                          <td className="whitespace-nowrap px-6 py-4 text-right">
                            <button className="text-slate-400 hover:text-primary transition-colors">
                              <span className="material-symbols-outlined text-[20px]">download</span>
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                          <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-white">Sep 1, 2026</td>
                          <td className="whitespace-nowrap px-6 py-4">INV-2026-009</td>
                          <td className="whitespace-nowrap px-6 py-4">$4,500.00</td>
                          <td className="whitespace-nowrap px-6 py-4 text-right">
                            <button className="text-slate-400 hover:text-primary transition-colors">
                              <span className="material-symbols-outlined text-[20px]">download</span>
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                          <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-white">Aug 1, 2026</td>
                          <td className="whitespace-nowrap px-6 py-4">INV-2026-008</td>
                          <td className="whitespace-nowrap px-6 py-4">$4,500.00</td>
                          <td className="whitespace-nowrap px-6 py-4 text-right">
                            <button className="text-slate-400 hover:text-primary transition-colors">
                              <span className="material-symbols-outlined text-[20px]">download</span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>

              {/* Right Sidebar (Usage) */}
              <div className="flex flex-col gap-6">
                {/* Seat Usage */}
                <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">Usage Summary</h3>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-end">
                        <span className="text-sm text-slate-500 dark:text-slate-400">Active Seats</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-bold text-slate-900 dark:text-white">850</span>
                          <span className="text-sm text-slate-400">/ 1000</span>
                        </div>
                      </div>
                      <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800">
                        <div className="h-2.5 rounded-full bg-primary" style={{ width: '85%' }}></div>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 dark:text-slate-400">You have 150 licenses remaining.</p>
                    </div>
                    <button className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-colors">
                      Add Seats
                    </button>
                  </div>
                </section>

                {/* Contact Support Promo */}
                <div className="rounded-xl bg-gradient-to-br from-primary to-blue-700 p-6 text-white shadow-md relative overflow-hidden group">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-white/10 blur-xl group-hover:bg-white/20 transition-all duration-500"></div>
                  <div className="relative z-10 flex flex-col gap-3">
                    <div className="p-2 bg-white/20 w-fit rounded-lg backdrop-blur-sm">
                      <span className="material-symbols-outlined text-white">support_agent</span>
                    </div>
                    <h4 className="font-bold text-lg">Need custom billing?</h4>
                    <p className="text-blue-100 text-sm">Contact our enterprise sales team for custom invoicing and volume discounts.</p>
                    <button className="mt-2 w-full rounded-lg bg-white px-3 py-2 text-sm font-semibold text-primary hover:bg-blue-50 transition-colors">
                      Contact Sales
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
