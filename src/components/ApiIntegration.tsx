import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface ApiIntegrationProps {
  onBack: () => void;
}

export default function ApiIntegration({ onBack }: ApiIntegrationProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-hidden">
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar */}
        <div className="flex flex-col w-72 bg-white dark:bg-[#111318] border-r border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3 p-4 border-b border-slate-200 dark:border-slate-800 cursor-pointer" onClick={onBack}>
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0" data-alt="Security Admin Avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-slate-900 dark:text-white text-base font-medium leading-normal truncate">Security Admin</h1>
              <p className="text-slate-500 dark:text-[#9da6b9] text-xs font-normal leading-normal truncate">Enterprise Plan</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 p-3 flex-1 overflow-y-auto">
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-[#1c212c] transition-colors group" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>
              <span className="material-symbols-outlined text-slate-500 dark:text-[#9da6b9] group-hover:text-primary transition-colors">dashboard</span>
              <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal">Panel de Control</p>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-[#1c212c] transition-colors group" to='/informes'>
              <span className="material-symbols-outlined text-slate-500 dark:text-[#9da6b9] group-hover:text-primary transition-colors">description</span>
              <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal">Threat Logs</p>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-[#282e39] text-primary dark:text-white" to="/apidocumentation">
              <span className="material-symbols-outlined text-primary dark:text-white fill-1">extension</span>
              <p className="text-sm font-medium leading-normal">API &amp; Integrations</p>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-[#1c212c] transition-colors group" to='/ajustes'>
              <span className="material-symbols-outlined text-slate-500 dark:text-[#9da6b9] group-hover:text-primary transition-colors">settings</span>
              <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal">Configuración</p>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-[#1c212c] transition-colors group" to='/centro-ayuda'>
              <span className="material-symbols-outlined text-slate-500 dark:text-[#9da6b9] group-hover:text-primary transition-colors">help</span>
              <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal">Support</p>
            </Link>
          </div>
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-blue-700 transition-colors">
              <span className="truncate">Upgrade Plan</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background-light dark:bg-background-dark">
          {/* Header */}
          <header className="flex items-center justify-between px-8 py-6 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#111318]/50 backdrop-blur-sm sticky top-0 z-10">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">API &amp; Webhooks</h2>
              <p className="text-slate-500 dark:text-[#9da6b9] mt-1">Configure external integrations and manage API keys for real-time threat monitoring.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1c212c] text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-[#282e39] transition-colors">
                <span className="material-symbols-outlined text-[20px]">menu_book</span>
                <span>Documentation</span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-[20px]">add</span>
                <span>Create New Webhook</span>
              </button>
            </div>
          </header>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-8 space-y-8">
            {/* Active Webhooks Section */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">webhook</span>
                  Active Webhooks
                </h3>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-[#3b4354] bg-white dark:bg-[#111318] overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-[#1c1f27] border-b border-slate-200 dark:border-[#3b4354]">
                        <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-[#9da6b9] uppercase tracking-wider w-32">Estado</th>
                        <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-[#9da6b9] uppercase tracking-wider">Endpoint URL</th>
                        <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-[#9da6b9] uppercase tracking-wider">Event Triggers</th>
                        <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-[#9da6b9] uppercase tracking-wider">Last Active</th>
                        <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-[#9da6b9] uppercase tracking-wider text-right">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-[#3b4354]">
                      <tr className="group hover:bg-slate-50 dark:hover:bg-[#1c212c] transition-colors">
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 font-mono text-sm text-slate-700 dark:text-slate-300">
                            <span className="material-symbols-outlined text-[16px] text-slate-400">link</span>
                            https://api.company.com/v1/alerts
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 rounded text-xs font-medium bg-slate-100 dark:bg-[#282e39] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">Phishing Blocked</span>
                            <span className="px-2 py-1 rounded text-xs font-medium bg-slate-100 dark:bg-[#282e39] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">Malware Detected</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500 dark:text-[#9da6b9]">
                          2 mins ago
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-[#282e39] text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="group hover:bg-slate-50 dark:hover:bg-[#1c212c] transition-colors">
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                            Inactive
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 font-mono text-sm text-slate-500 dark:text-slate-400">
                            <span className="material-symbols-outlined text-[16px] text-slate-400">link</span>
                            https://hooks.slack.com/services/T000
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded text-xs font-medium bg-slate-100 dark:bg-[#282e39] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">System Warning</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500 dark:text-[#9da6b9]">
                          2 days ago
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-[#282e39] text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* API Key Management Section */}
            <section className="grid lg:grid-cols-3 gap-8">
              {/* API Keys List */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">key</span>
                    API Keys
                  </h3>
                  <button className="text-sm font-medium text-primary hover:text-blue-400 transition-colors">Manage Scopes</button>
                </div>
                <div className="rounded-xl border border-slate-200 dark:border-[#3b4354] bg-white dark:bg-[#111318] p-6 space-y-6">
                  {/* Create Key Form (Mini) */}
                  <div className="flex gap-3 items-end pb-6 border-b border-slate-200 dark:border-[#3b4354]">
                    <div className="flex-1 space-y-1.5">
                      <label className="text-xs font-semibold text-slate-500 dark:text-[#9da6b9] uppercase">New API Key Name</label>
                      <input className="w-full h-10 px-3 rounded-lg bg-slate-50 dark:bg-[#1c212c] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-slate-400 dark:placeholder:text-slate-600" placeholder="e.g. Production Server" type="text" />
                    </div>
                    <button className="h-10 px-4 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold hover:opacity-90 transition-opacity whitespace-nowrap">
                      Generate Key
                    </button>
                  </div>

                  {/* Existing Keys */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-[#282e39] bg-slate-50 dark:bg-[#161a22]">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded bg-primary/10 text-primary">
                          <span className="material-symbols-outlined text-[20px]">terminal</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white">SIEM Integration</p>
                          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">pk_live_...94k2</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 dark:text-slate-400">Created Mar 10, 2026</span>
                        <button className="text-xs font-medium text-red-500 hover:text-red-400 px-3 py-1.5 rounded hover:bg-red-500/10 transition-colors">Revoke</button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-[#282e39] bg-slate-50 dark:bg-[#161a22]">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded bg-primary/10 text-primary">
                          <span className="material-symbols-outlined text-[20px]">terminal</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white">Development Local</p>
                          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">pk_test_...m29z</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 dark:text-slate-400">Created Jun 22, 2026</span>
                        <button className="text-xs font-medium text-red-500 hover:text-red-400 px-3 py-1.5 rounded hover:bg-red-500/10 transition-colors">Revoke</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentation / Stats Card */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">monitoring</span>
                  Usage &amp; Limits
                </h3>
                <div className="rounded-xl border border-slate-200 dark:border-[#3b4354] bg-white dark:bg-[#111318] p-6 flex-1 flex flex-col gap-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-500 dark:text-slate-400">Monthly Requests</span>
                      <span className="text-slate-900 dark:text-white font-medium">854,302 / 1M</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-[#282e39] rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[85%] rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-[#1c212c] border border-slate-200 dark:border-[#282e39]">
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Avg Latency</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white mt-1">42ms</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-[#1c212c] border border-slate-200 dark:border-[#282e39]">
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Error Rate</p>
                      <p className="text-xl font-bold text-green-500 mt-1">0.01%</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-200 dark:border-[#282e39]">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Need higher limits?</p>
                    <button className="w-full py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-[#1c212c] transition-colors">Contact Sales</button>
                  </div>
                </div>
              </div>
            </section>

            {/* Request Logs Section */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">history</span>
                  Recent Request Logs
                </h3>
                <button className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">View all logs</button>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-[#3b4354] bg-white dark:bg-[#111318] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-[#1c1f27] border-b border-slate-200 dark:border-[#3b4354]">
                        <th className="px-6 py-3 text-xs font-semibold text-slate-500 dark:text-[#9da6b9] uppercase tracking-wider w-24">Method</th>
                        <th className="px-6 py-3 text-xs font-semibold text-slate-500 dark:text-[#9da6b9] uppercase tracking-wider">Path</th>
                        <th className="px-6 py-3 text-xs font-semibold text-slate-500 dark:text-[#9da6b9] uppercase tracking-wider w-32">Status</th>
                        <th className="px-6 py-3 text-xs font-semibold text-slate-500 dark:text-[#9da6b9] uppercase tracking-wider w-32">Latency</th>
                        <th className="px-6 py-3 text-xs font-semibold text-slate-500 dark:text-[#9da6b9] uppercase tracking-wider w-48 text-right">Hora</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-[#3b4354]">
                      <tr className="hover:bg-slate-50 dark:hover:bg-[#1c212c] transition-colors">
                        <td className="px-6 py-3">
                          <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">POST</span>
                        </td>
                        <td className="px-6 py-3 font-mono text-sm text-slate-600 dark:text-slate-300">
                          /v1/scan/url
                        </td>
                        <td className="px-6 py-3">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">200 OK</span>
                        </td>
                        <td className="px-6 py-3 text-sm text-slate-500 dark:text-slate-400">
                          45ms
                        </td>
                        <td className="px-6 py-3 text-sm text-slate-500 dark:text-slate-400 text-right">
                          Oct 24, 14:32:01
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-[#1c212c] transition-colors">
                        <td className="px-6 py-3">
                          <span className="font-mono text-xs font-bold text-green-600 dark:text-green-400">GET</span>
                        </td>
                        <td className="px-6 py-3 font-mono text-sm text-slate-600 dark:text-slate-300">
                          /v1/threats/summary
                        </td>
                        <td className="px-6 py-3">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">200 OK</span>
                        </td>
                        <td className="px-6 py-3 text-sm text-slate-500 dark:text-slate-400">
                          12ms
                        </td>
                        <td className="px-6 py-3 text-sm text-slate-500 dark:text-slate-400 text-right">
                          Oct 24, 14:31:45
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-[#1c212c] transition-colors">
                        <td className="px-6 py-3">
                          <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">POST</span>
                        </td>
                        <td className="px-6 py-3 font-mono text-sm text-slate-600 dark:text-slate-300">
                          /v1/scan/file
                        </td>
                        <td className="px-6 py-3">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">429 Limit</span>
                        </td>
                        <td className="px-6 py-3 text-sm text-slate-500 dark:text-slate-400">
                          2ms
                        </td>
                        <td className="px-6 py-3 text-sm text-slate-500 dark:text-slate-400 text-right">
                          Oct 24, 14:30:12
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
