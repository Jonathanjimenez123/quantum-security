import React from 'react';
import { 
  ShieldAlert, 
  Search, 
  Bell, 
  Settings, 
  LayoutDashboard, 
  Microscope, 
  ShieldCheck, 
  History, 
  TrendingUp, 
  AlertTriangle, 
  Trash2, 
  Layers, 
  Bot, 
  Type, 
  Code, 
  Bug, 
  FileText, 
  Code2, 
  FileSpreadsheet, 
  CheckCircle, 
  SearchCode, 
  Trash 
} from 'lucide-react';

interface QuarantineDashboardProps {
  onBack?: () => void;
}

export default function QuarantineDashboard({ onBack }: QuarantineDashboardProps) {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden text-slate-900 dark:text-slate-100 font-sans">
      <div className="layout-container flex h-full grow flex-col">
        {/* Top Navigation */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-4 md:px-10 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-primary">
              <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg cursor-pointer" onClick={onBack}>
                <ShieldAlert className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">AI Shield Control</h2>
            </div>
            <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full border border-primary/20 bg-primary/5">
                <div className="text-primary flex items-center justify-center pl-4 rounded-l-xl">
                  <Search className="w-4 h-4" />
                </div>
                <input 
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-0 border-none bg-transparent placeholder:text-primary/50 px-4 rounded-l-none pl-2 text-base font-normal" 
                  placeholder="Buscar quarantine logs..." 
                  defaultValue=""
                />
              </div>
            </label>
          </div>
          <div className="flex flex-1 justify-end gap-4 md:gap-8">
            <div className="flex gap-2">
              <button className="flex items-center justify-center rounded-xl h-10 bg-primary/10 text-primary w-10 hover:bg-primary/20 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center rounded-xl h-10 bg-primary/10 text-primary w-10 hover:bg-primary/20 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary" 
              data-alt="User profile avatar of system administrator" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg")' }}
            ></div>
          </div>
        </header>

        <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
          {/* Sidebar */}
          <aside className="w-full md:w-64 border-r border-primary/10 p-4 space-y-2 bg-background-light dark:bg-background-dark overflow-y-auto">
            <div className="mb-6 px-3">
              <p className="text-primary text-xs font-bold uppercase tracking-widest">Core Protection</p>
            </div>
            <nav className="space-y-1">
              <button onClick={onBack} className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
                <LayoutDashboard className="w-5 h-5" />
                <span className="text-sm font-medium">Global Dashboard</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 bg-primary text-white rounded-xl shadow-lg shadow-primary/20">
                <ShieldAlert className="w-5 h-5" />
                <span className="text-sm font-medium">Quarantine</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
                <Microscope className="w-5 h-5" />
                <span className="text-sm font-medium">Sandbox Analysis</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-sm font-medium">Access Policies</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
                <History className="w-5 h-5" />
                <span className="text-sm font-medium">Audit Logs</span>
              </button>
            </nav>
            <div className="pt-8 mb-4 px-3">
              <p className="text-primary text-xs font-bold uppercase tracking-widest">System Status</p>
            </div>
            <div className="p-3 bg-primary/5 rounded-xl border border-primary/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500">Protection Tier</span>
                <span className="text-xs font-bold text-primary">ADVANCED</span>
              </div>
              <div className="w-full bg-primary/20 rounded-full h-1.5">
                <div className="bg-primary h-1.5 rounded-full w-4/5"></div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 flex flex-col p-4 md:p-8 gap-6 overflow-y-auto">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2 rounded-xl p-6 border border-primary/20 bg-primary/5">
                <p className="text-slate-500 text-sm font-medium uppercase tracking-tight">Active Quarantine</p>
                <div className="flex items-end justify-between">
                  <p className="text-slate-900 dark:text-slate-100 text-3xl font-bold">1,284</p>
                  <p className="text-emerald-500 text-sm font-bold flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />+12%
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-6 border border-primary/20 bg-primary/5">
                <p className="text-slate-500 text-sm font-medium uppercase tracking-tight">Critical AI Threats</p>
                <div className="flex items-end justify-between">
                  <p className="text-slate-900 dark:text-slate-100 text-3xl font-bold">42</p>
                  <p className="text-rose-500 text-sm font-bold flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" />HIGH
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-6 border border-primary/20 bg-primary/5">
                <p className="text-slate-500 text-sm font-medium uppercase tracking-tight">Auto-Resolved</p>
                <div className="flex items-end justify-between">
                  <p className="text-slate-900 dark:text-slate-100 text-3xl font-bold">945</p>
                  <p className="text-slate-500 text-sm font-bold">TODAY</p>
                </div>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold">Quarantine Vault</h2>
                <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">
                  <Trash2 className="w-4 h-4" />
                  Bulk Purge
                </button>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                <button className="flex items-center gap-2 rounded-full bg-primary text-white px-4 py-1.5 text-xs font-bold whitespace-nowrap">
                  <Layers className="w-4 h-4" /> All Threats
                </button>
                <button className="flex items-center gap-2 rounded-full border border-primary/30 text-slate-600 dark:text-slate-300 px-4 py-1.5 text-xs font-bold hover:bg-primary/5 whitespace-nowrap">
                  <Bot className="w-4 h-4" /> AI-Malware
                </button>
                <button className="flex items-center gap-2 rounded-full border border-primary/30 text-slate-600 dark:text-slate-300 px-4 py-1.5 text-xs font-bold hover:bg-primary/5 whitespace-nowrap">
                  <Type className="w-4 h-4" /> Suspicious NLP
                </button>
                <button className="flex items-center gap-2 rounded-full border border-primary/30 text-slate-600 dark:text-slate-300 px-4 py-1.5 text-xs font-bold hover:bg-primary/5 whitespace-nowrap">
                  <Code className="w-4 h-4" /> Macro-Enabled
                </button>
              </div>
            </div>

            {/* Quarantine List Table */}
            <div className="overflow-x-auto rounded-xl border border-primary/10 bg-white dark:bg-background-dark/50">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-primary/10 bg-primary/5">
                    <th className="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider">File Name & Source</th>
                    <th className="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider">Detection Category</th>
                    <th className="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider">Risk Score</th>
                    <th className="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/5">
                  {/* Row 1 */}
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900 dark:text-slate-100">invoice_internal_v4.exe</span>
                        <span className="text-xs text-slate-500">Source: user-92@company.com</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-500 border border-rose-500/20">
                        <Bug className="w-3 h-3" /> AI-Detected Malware
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-rose-500 text-[18px]" title="Critical">warning</span>
                        <div className="flex items-center gap-2">
                          <div className="w-12 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-rose-500 h-full w-[94%]"></div>
                          </div>
                          <span className="text-xs font-bold text-rose-500">94/100</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-lg" title="Permit">
                          <CheckCircle className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg" title="Deconstruct in Sandbox">
                          <SearchCode className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg" title="Delete Permanently">
                          <Trash className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Row 2 */}
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900 dark:text-slate-100">Project_Alpha_Specs.docx</span>
                        <span className="text-xs text-slate-500">Source: external-cloud-storage</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        <FileText className="w-3 h-3" /> Suspicious NLP
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-amber-500 text-[18px]" title="Medium">warning_amber</span>
                        <div className="flex items-center gap-2">
                          <div className="w-12 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-amber-500 h-full w-[67%]"></div>
                          </div>
                          <span className="text-xs font-bold text-amber-500">67/100</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-lg" title="Permit">
                          <CheckCircle className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg" title="Deconstruct in Sandbox">
                          <SearchCode className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg" title="Delete Permanently">
                          <Trash className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900 dark:text-slate-100">update_patch_8.js</span>
                        <span className="text-xs text-slate-500">Source: ftp-gateway-01</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-500 border border-rose-500/20">
                        <Code2 className="w-3 h-3" /> Polymorphic Script
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-12 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-rose-500 h-full w-[88%]"></div>
                        </div>
                        <span className="text-xs font-bold text-rose-500">88/100</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-lg" title="Permit">
                          <CheckCircle className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg" title="Deconstruct in Sandbox">
                          <SearchCode className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg" title="Delete Permanently">
                          <Trash className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="hover:bg-primary/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900 dark:text-slate-100">employee_list.xlsm</span>
                        <span className="text-xs text-slate-500">Source: HR-Portal</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-500 border border-blue-500/20">
                        <FileSpreadsheet className="w-3 h-3" /> Macro-Enabled
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-12 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-blue-500 h-full w-[42%]"></div>
                        </div>
                        <span className="text-xs font-bold text-blue-500">42/100</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-lg" title="Permit">
                          <CheckCircle className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg" title="Deconstruct in Sandbox">
                          <SearchCode className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg" title="Delete Permanently">
                          <Trash className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footer / Pagination */}
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-primary/10">
              <p className="text-xs text-slate-500">Showing 1-10 of 1,284 threats</p>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 text-xs font-bold rounded bg-primary/10 text-primary">1</button>
                <button className="px-3 py-1 text-xs font-bold rounded hover:bg-primary/10 transition-colors">2</button>
                <button className="px-3 py-1 text-xs font-bold rounded hover:bg-primary/10 transition-colors">3</button>
                <span className="text-slate-400 text-xs">...</span>
                <button className="px-3 py-1 text-xs font-bold rounded hover:bg-primary/10 transition-colors">129</button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
