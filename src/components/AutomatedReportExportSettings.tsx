import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface AutomatedReportExportSettingsProps {
  onBack: () => void;
}

export default function AutomatedReportExportSettings({ onBack }: AutomatedReportExportSettingsProps) {
  return (
    <div className="bg-[#f5f7f8] text-slate-900 font-sans min-h-screen w-full flex flex-col overflow-x-hidden">
      <div className="flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 bg-white px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-slate-900 cursor-pointer" onClick={onBack}>
              <div className="size-8 text-[#0b95da]">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">Security Dashboard</h2>
            </div>
            <nav className="hidden md:flex items-center gap-9">
              <button onClick={onBack} className="text-slate-500 hover:text-[#0b95da] transition-colors text-sm font-medium leading-normal">Panel de Control</button>
              <Link className="text-slate-500 hover:text-[#0b95da] transition-colors text-sm font-medium leading-normal" to='/panel'>Incidents</Link>
              <Link className="text-[#0b95da] text-sm font-bold leading-normal" to='/reporte-incidente'>Reports</Link>
              <Link className="text-slate-500 hover:text-[#0b95da] transition-colors text-sm font-medium leading-normal" to='/ajustes'>Configuración</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex w-64 items-center rounded-lg bg-slate-100 px-3 py-2">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
              <input className="ml-2 w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none" placeholder="Buscar reports..." />
            </div>
            <button aria-label="User Profile" className="flex items-center justify-center rounded-full size-10 bg-slate-200 overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
            </button>
          </div>
        </header>

        <main className="flex flex-1 justify-center py-8 px-6 lg:px-40">
          <div className="flex flex-col max-w-[1200px] w-full gap-8">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-slate-900 text-3xl md:text-4xl font-black leading-tight tracking-tight">Automated Report Exports</h1>
                <p className="text-slate-500 text-base font-normal max-w-2xl">Manage your automated security data distribution. Schedule threat summaries, ROI reports, and audit logs to be sent to Email, Slack, or S3.</p>
              </div>
              <button className="flex items-center justify-center gap-2 rounded-lg bg-[#0b95da] px-5 py-2.5 text-white hover:bg-sky-600 transition-colors shadow-sm shadow-sky-200">
                <span className="material-symbols-outlined text-[20px]">add</span>
                <span className="text-sm font-bold">Create New Automation</span>
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-medium mb-1">Active Schedules</p>
                  <p className="text-slate-900 text-2xl font-bold">12</p>
                </div>
                <div className="size-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-medium mb-1">Reports Sent (30d)</p>
                  <p className="text-slate-900 text-2xl font-bold">148</p>
                </div>
                <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0b95da]">
                  <span className="material-symbols-outlined">send</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-medium mb-1">Failed Exports</p>
                  <p className="text-slate-900 text-2xl font-bold">0</p>
                </div>
                <div className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600">
                  <span className="material-symbols-outlined">error_outline</span>
                </div>
              </div>
            </div>

            {/* Active Automations Table */}
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/50">
                <h3 className="text-slate-900 font-bold text-lg">Active Schedules</h3>
                <button className="text-[#0b95da] text-sm font-semibold hover:text-sky-700">View All History</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Report Type</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Frequency</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Destination</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Run</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Estado</th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {/* Row 1 */}
                    <tr className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="size-8 rounded bg-blue-100 flex items-center justify-center mr-3 text-[#0b95da]">
                            <span className="material-symbols-outlined text-[20px]">security</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">Threat Summary</div>
                            <div className="text-xs text-slate-500">Global phishing attempts</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                        <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">Daily</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-slate-600 gap-2">
                          <span className="material-symbols-outlined text-[18px] text-slate-400">mail</span>
                          sec-ops@company.com
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        Today, 8:00 AM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-slate-400 hover:text-[#0b95da]" title="Run Now">
                            <span className="material-symbols-outlined text-[20px]">play_arrow</span>
                          </button>
                          <button className="text-slate-400 hover:text-[#0b95da]" title="Edit">
                            <span className="material-symbols-outlined text-[20px]">edit</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="size-8 rounded bg-purple-100 flex items-center justify-center mr-3 text-purple-600">
                            <span className="material-symbols-outlined text-[20px]">monitoring</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">Executive ROI</div>
                            <div className="text-xs text-slate-500">Prevention metrics</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                        <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">Monthly</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-slate-600 gap-2">
                          <span className="material-symbols-outlined text-[18px] text-slate-400">chat</span>
                          #c-suite-reports
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        Oct 1, 9:00 AM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-slate-400 hover:text-[#0b95da]" title="Run Now">
                            <span className="material-symbols-outlined text-[20px]">play_arrow</span>
                          </button>
                          <button className="text-slate-400 hover:text-[#0b95da]" title="Edit">
                            <span className="material-symbols-outlined text-[20px]">edit</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="size-8 rounded bg-orange-100 flex items-center justify-center mr-3 text-orange-600">
                            <span className="material-symbols-outlined text-[20px]">history</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">Audit Log</div>
                            <div className="text-xs text-slate-500">System access logs</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                        <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">Weekly</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-slate-600 gap-2">
                          <span className="material-symbols-outlined text-[18px] text-slate-400">cloud</span>
                          s3://security-logs-prod
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        Oct 15, 12:00 AM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">Paused</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-slate-400 hover:text-[#0b95da]" title="Run Now">
                            <span className="material-symbols-outlined text-[20px]">play_arrow</span>
                          </button>
                          <button className="text-slate-400 hover:text-[#0b95da]" title="Edit">
                            <span className="material-symbols-outlined text-[20px]">edit</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="size-8 rounded bg-red-100 flex items-center justify-center mr-3 text-red-600">
                            <span className="material-symbols-outlined text-[20px]">phishing</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">Phishing Attempts</div>
                            <div className="text-xs text-slate-500">Real-time alerts</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                        <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">Instant</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-slate-600 gap-2">
                          <span className="material-symbols-outlined text-[18px] text-slate-400">webhook</span>
                          Webhook: SOAR Platform
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        2 mins ago
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-slate-400 hover:text-[#0b95da]" title="Run Now">
                            <span className="material-symbols-outlined text-[20px]">play_arrow</span>
                          </button>
                          <button className="text-slate-400 hover:text-[#0b95da]" title="Edit">
                            <span className="material-symbols-outlined text-[20px]">edit</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Configuration Section (Report Builder) */}
            <div className="flex flex-col gap-6 pt-6">
              <div className="flex items-center justify-between">
                <h2 className="text-slate-900 text-xl font-bold leading-tight">Configuration Playground</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50">Reset Defaults</button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-lg hover:bg-slate-700">Save as Template</button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Settings */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#0b95da]">tune</span> Report Builder
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Data Source</label>
                        <select className="w-full rounded-lg border-slate-300 bg-slate-50 py-2.5 text-sm text-slate-900 focus:border-[#0b95da] focus:ring-[#0b95da]">
                          <option>All Security Events</option>
                          <option>Phishing Only</option>
                          <option>Malware Blocks</option>
                          <option>User Behavior</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Time Range</label>
                        <select className="w-full rounded-lg border-slate-300 bg-slate-50 py-2.5 text-sm text-slate-900 focus:border-[#0b95da] focus:ring-[#0b95da]">
                          <option>Last 24 Hours</option>
                          <option>Last 7 Days</option>
                          <option>Last 30 Days</option>
                          <option>Custom Range</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-slate-700 mb-3">Include Widgets</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50 has-[:checked]:border-[#0b95da] has-[:checked]:bg-blue-50/50">
                          <input defaultChecked className="mt-1 size-4 rounded border-slate-300 text-[#0b95da] focus:ring-[#0b95da]" type="checkbox" />
                          <div>
                            <span className="block text-sm font-medium text-slate-900">Incident Trends</span>
                            <span className="block text-xs text-slate-500">Line chart of blocks</span>
                          </div>
                        </label>
                        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50 has-[:checked]:border-[#0b95da] has-[:checked]:bg-blue-50/50">
                          <input defaultChecked className="mt-1 size-4 rounded border-slate-300 text-[#0b95da] focus:ring-[#0b95da]" type="checkbox" />
                          <div>
                            <span className="block text-sm font-medium text-slate-900">Top Targets</span>
                            <span className="block text-xs text-slate-500">Most attacked users</span>
                          </div>
                        </label>
                        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50 has-[:checked]:border-[#0b95da] has-[:checked]:bg-blue-50/50">
                          <input className="mt-1 size-4 rounded border-slate-300 text-[#0b95da] focus:ring-[#0b95da]" type="checkbox" />
                          <div>
                            <span className="block text-sm font-medium text-slate-900">Geo Map</span>
                            <span className="block text-xs text-slate-500">Attack origin map</span>
                          </div>
                        </label>
                        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50 has-[:checked]:border-[#0b95da] has-[:checked]:bg-blue-50/50">
                          <input defaultChecked className="mt-1 size-4 rounded border-slate-300 text-[#0b95da] focus:ring-[#0b95da]" type="checkbox" />
                          <div>
                            <span className="block text-sm font-medium text-slate-900">Risk Score</span>
                            <span className="block text-xs text-slate-500">Org health metric</span>
                          </div>
                        </label>
                        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50 has-[:checked]:border-[#0b95da] has-[:checked]:bg-blue-50/50">
                          <input className="mt-1 size-4 rounded border-slate-300 text-[#0b95da] focus:ring-[#0b95da]" type="checkbox" />
                          <div>
                            <span className="block text-sm font-medium text-slate-900">False Positives</span>
                            <span className="block text-xs text-slate-500">User reported</span>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Export Format</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input defaultChecked className="size-4 border-slate-300 text-[#0b95da] focus:ring-[#0b95da]" name="format" type="radio" />
                          <span className="text-sm text-slate-700">PDF Document</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input className="size-4 border-slate-300 text-[#0b95da] focus:ring-[#0b95da]" name="format" type="radio" />
                          <span className="text-sm text-slate-700">CSV Data</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input className="size-4 border-slate-300 text-[#0b95da] focus:ring-[#0b95da]" name="format" type="radio" />
                          <span className="text-sm text-slate-700">JSON</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Delivery & Test */}
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#0b95da]">send</span> Delivery Settings
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Recipients</label>
                        <input className="w-full rounded-lg border-slate-300 bg-slate-50 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0b95da] focus:ring-[#0b95da]" placeholder="Enter emails or channels..." type="text" />
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                            security-team@org.com
                            <button className="text-slate-400 hover:text-red-500"><span className="material-symbols-outlined text-[14px]">close</span></button>
                          </span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Schedule</label>
                        <div className="flex items-center gap-2">
                          <select className="flex-1 rounded-lg border-slate-300 bg-slate-50 py-2.5 text-sm text-slate-900 focus:border-[#0b95da] focus:ring-[#0b95da]">
                            <option>Weekly on Monday</option>
                            <option>Daily</option>
                            <option>Monthly</option>
                          </select>
                          <input className="w-32 rounded-lg border-slate-300 bg-slate-50 py-2.5 text-sm text-slate-900 focus:border-[#0b95da] focus:ring-[#0b95da]" type="time" defaultValue="09:00" />
                        </div>
                      </div>
                      <div className="pt-4 mt-4 border-t border-slate-100">
                        <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-white border border-[#0b95da] text-[#0b95da] px-4 py-2.5 hover:bg-blue-50 transition-colors font-bold text-sm mb-3">
                          <span className="material-symbols-outlined text-[18px]">play_circle</span>
                          Run Test Export
                        </button>
                        <button className="w-full rounded-lg bg-[#0b95da] text-white px-4 py-2.5 hover:bg-sky-600 transition-colors font-bold text-sm shadow-sm shadow-sky-200">
                          Activate Automation
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mini Help Card */}
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-sm p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <span className="material-symbols-outlined text-[100px]">support</span>
                    </div>
                    <h3 className="text-base font-bold mb-2 relative z-10">Need Custom Integrations?</h3>
                    <p className="text-sm text-slate-300 mb-4 relative z-10">Connect your SIEM or custom webhook endpoints using our API documentation.</p>
                    <Link className="text-sm font-medium text-sky-400 hover:text-sky-300 flex items-center gap-1 relative z-10" to="/apidocumentation">
                      View API Docs <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
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
