import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface ForensicAuditProps {
  onBack: () => void;
}

export default function ForensicAudit({ onBack }: ForensicAuditProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      <div className="flex flex-col h-screen">
        {/* Top Navigation */}
        <header className="flex items-center justify-between border-b border-primary/20 bg-background-light dark:bg-background-dark px-6 py-3 shrink-0">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-primary cursor-pointer" onClick={onBack}>
              <span className="material-symbols-outlined text-3xl">shield_person</span>
              <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold tracking-tight">PhishGuard <span className="text-primary font-normal">Forensic</span></h2>
            </div>
            <div className="hidden lg:flex items-center gap-1">
              <label className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-slate-400 text-sm">search</span>
                <input className="bg-primary/5 border border-primary/20 rounded-lg pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary w-64 text-slate-100" placeholder="Buscar Indicators (IP, Hash, URL)..." />
              </label>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <Link className="text-primary text-sm font-semibold border-b-2 border-primary pb-1" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Forensics</Link>
              <Link className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" to='/panel'>Incidents</Link>
              <Link className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" to='/panel'>Infrastructure</Link>
              <Link className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" to='/ajustes'>Configuración</Link>
            </nav>
            <div className="flex items-center gap-3 border-l border-primary/20 pl-6">
              <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-xl">notifications</span>
              </button>
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold text-slate-100 leading-none">Sarah Jenkins</p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold">Senior SOC Lead</p>
                </div>
                <div className="size-9 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center overflow-hidden">
                  <img className="object-cover size-full" data-alt="Analyst profile picture" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex flex-1 overflow-hidden">
          {/* Sidebar (Shortcuts) */}
          <aside className="w-16 border-r border-primary/20 flex flex-col items-center py-6 gap-6 shrink-0 bg-background-light dark:bg-background-dark">
            <button className="group relative flex items-center justify-center p-2 rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">analytics</span>
            </button>
            <button className="group relative flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-primary hover:bg-primary/10 transition-all">
              <span className="material-symbols-outlined">timeline</span>
            </button>
            <button className="group relative flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-primary hover:bg-primary/10 transition-all">
              <span className="material-symbols-outlined">terminal</span>
            </button>
            <button className="group relative flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-primary hover:bg-primary/10 transition-all">
              <span className="material-symbols-outlined">storage</span>
            </button>
            <div className="mt-auto flex flex-col items-center gap-4">
              <button className="p-2 rounded-lg text-slate-500 hover:text-primary transition-all">
                <span className="material-symbols-outlined">help</span>
              </button>
            </div>
          </aside>

          {/* Forensic View Scrollable Area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar bg-slate-50 dark:bg-[#0c111b] p-6">
            {/* Incident Summary Header */}
            <div className="bg-white dark:bg-background-dark border border-primary/10 rounded-xl p-6 shadow-sm mb-6">
              <div className="flex flex-wrap justify-between items-start gap-6">
                <div className="flex-1 min-w-[300px]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-red-500/10 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded border border-red-500/20 uppercase tracking-widest">Critical Alert</span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-mono tracking-tighter">#INC-88294</span>
                  </div>
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Forensic Audit: Data Exfiltration Attempt</h1>
                  <p className="text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">Suspicious PowerShell script execution followed by outbound connection to high-entropy domain.</p>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex flex-col items-end pr-4 border-r border-primary/10">
                    <span className="text-[10px] uppercase font-bold text-slate-500 mb-1">Incident Timestamp</span>
                    <span className="text-sm font-mono text-slate-200">2026-10-27 14:22:05 UTC</span>
                  </div>
                  <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md shadow-primary/20 hover:bg-primary/90 transition-all">
                    <span className="material-symbols-outlined text-lg">download</span>
                    Export Forensic Package
                  </button>
                  <button className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary border border-primary/20">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Forensic Grid Layout */}
            <div className="grid grid-cols-12 gap-6">
              {/* Left Column: Timeline & Heuristics */}
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                {/* Evidence Timeline */}
                <div className="bg-white dark:bg-background-dark border border-primary/10 rounded-xl p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">reorder</span>
                    Evidence Timeline
                  </h3>
                  <div className="relative space-y-0 pb-2">
                    {/* Timeline Line */}
                    <div className="absolute left-4 top-2 bottom-4 w-0.5 bg-primary/20"></div>
                    {/* Step 1 */}
                    <div className="relative pl-10 pb-8">
                      <div className="absolute left-2.5 top-1 size-3.5 rounded-full bg-primary border-2 border-background-dark z-10"></div>
                      <p className="text-xs text-slate-500 font-mono mb-1">14:22:01</p>
                      <h4 className="text-sm font-bold text-slate-200">Initial Request Detected</h4>
                      <p className="text-xs text-slate-400 mt-1">GET /login-portal?id=8829 HTTP/1.1 from 192.168.1.45</p>
                    </div>
                    {/* Step 2 */}
                    <div className="relative pl-10 pb-8">
                      <div className="absolute left-2.5 top-1 size-3.5 rounded-full bg-primary border-2 border-background-dark z-10"></div>
                      <p className="text-xs text-slate-500 font-mono mb-1">14:22:03</p>
                      <h4 className="text-sm font-bold text-slate-200">DNS Resolution</h4>
                      <p className="text-xs text-slate-400 mt-1">Resolved: <span className="text-red-400">cdn-verify-api.ru</span> (Blacklisted)</p>
                    </div>
                    {/* Step 3 */}
                    <div className="relative pl-10 pb-8">
                      <div className="absolute left-2.5 top-1 size-3.5 rounded-full bg-red-500 border-2 border-background-dark z-10 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                      <p className="text-xs text-slate-500 font-mono mb-1">14:22:04</p>
                      <h4 className="text-sm font-bold text-red-500">Script Execution</h4>
                      <div className="mt-1.5 p-2 bg-red-500/5 border border-red-500/10 rounded font-mono text-[10px] text-red-200 overflow-x-auto">
                        powershell -enc JABzAD0ATgBlAHcALQBPAA...
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="relative pl-10">
                      <div className="absolute left-2.5 top-1 size-3.5 rounded-full bg-slate-700 border-2 border-background-dark z-10"></div>
                      <p className="text-xs text-slate-500 font-mono mb-1">14:22:05</p>
                      <h4 className="text-sm font-bold text-slate-400">Exfiltration Blocked</h4>
                      <p className="text-xs text-slate-500 mt-1">IPS terminated 14.5MB packet stream to 91.202.x.x</p>
                    </div>
                  </div>
                </div>

                {/* Heuristic Engine Breakdown */}
                <div className="bg-white dark:bg-background-dark border border-primary/10 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">psychology</span>
                      Heuristic Engine
                    </h3>
                    <div className="text-2xl font-black text-primary">94.8<span className="text-xs font-normal text-slate-500 ml-1">Score</span></div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-300">Text Sentiment / LLM Phish Analysis</span>
                        <span className="text-primary font-bold">92% Weight</span>
                      </div>
                      <div className="h-1.5 bg-primary/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-300">DOM Structure Anomaly</span>
                        <span className="text-primary font-bold">85% Weight</span>
                      </div>
                      <div className="h-1.5 bg-primary/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-300">SSL Cert Lifetime/Auth</span>
                        <span className="text-red-400 font-bold">100% Critical</span>
                      </div>
                      <div className="h-1.5 bg-red-500/10 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-3 bg-primary/5 rounded-lg border border-primary/10 text-[11px] text-slate-400 leading-relaxed italic">
                    AI Conclusion: "High correlation with known North Korean APT campaign patterns. Domestic spoofing of Outlook Login detected."
                  </div>
                </div>
              </div>

              {/* Right Column: Traffic & Sandbox */}
              <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
                {/* Network Traffic Inspector */}
                <div className="bg-white dark:bg-background-dark border border-primary/10 rounded-xl overflow-hidden flex flex-col">
                  <div className="px-5 py-4 border-b border-primary/10 flex items-center justify-between">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">swap_horiz</span>
                      Traffic Inspector
                    </h3>
                    <div className="flex gap-2">
                      <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded font-bold">HTTP/2</span>
                      <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded font-bold">TLS 1.3</span>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-slate-50 dark:bg-primary/5 border-b border-primary/10">
                        <tr>
                          <th className="p-3 text-[10px] uppercase tracking-wider text-slate-500 font-bold">Method</th>
                          <th className="p-3 text-[10px] uppercase tracking-wider text-slate-500 font-bold">Host / Path</th>
                          <th className="p-3 text-[10px] uppercase tracking-wider text-slate-500 font-bold">Estado</th>
                          <th className="p-3 text-[10px] uppercase tracking-wider text-slate-500 font-bold">Payload</th>
                          <th className="p-3 text-[10px] uppercase tracking-wider text-slate-500 font-bold">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-primary/5">
                        <tr className="hover:bg-primary/5 transition-colors cursor-pointer">
                          <td className="p-3 text-xs font-mono text-primary font-bold">GET</td>
                          <td className="p-3 text-xs font-mono text-slate-300">/auth/saml/sso</td>
                          <td className="p-3 text-xs"><span className="text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded">200</span></td>
                          <td className="p-3 text-xs text-slate-400">1.2 KB</td>
                          <td className="p-3 text-xs text-slate-400">12ms</td>
                        </tr>
                        <tr className="bg-red-500/5 hover:bg-red-500/10 transition-colors cursor-pointer">
                          <td className="p-3 text-xs font-mono text-red-500 font-bold">POST</td>
                          <td className="p-3 text-xs font-mono text-red-300">/v1/telemetry/push</td>
                          <td className="p-3 text-xs"><span className="text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded">403</span></td>
                          <td className="p-3 text-xs text-red-400">14.5 MB</td>
                          <td className="p-3 text-xs text-red-400">145ms</td>
                        </tr>
                        <tr className="hover:bg-primary/5 transition-colors cursor-pointer">
                          <td className="p-3 text-xs font-mono text-primary font-bold">GET</td>
                          <td className="p-3 text-xs font-mono text-slate-300">/static/js/main.chunk.js</td>
                          <td className="p-3 text-xs"><span className="text-slate-400 bg-slate-400/10 px-1.5 py-0.5 rounded">304</span></td>
                          <td className="p-3 text-xs text-slate-400">0 B</td>
                          <td className="p-3 text-xs text-slate-400">4ms</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Behavioral Sandboxing & Notes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Sandbox Visualizer */}
                  <div className="bg-white dark:bg-background-dark border border-primary/10 rounded-xl p-5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">science</span>
                      Behavioral Sandbox
                    </h3>
                    <div className="bg-slate-900 rounded-lg p-4 border border-primary/10 aspect-video flex items-center justify-center relative overflow-hidden">
                      {/* Visual graph representation placeholder */}
                      <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-40 bg-primary rounded-full blur-3xl"></div>
                        <div className="absolute top-1/4 left-1/3 size-20 bg-red-500 rounded-full blur-2xl"></div>
                      </div>
                      <div className="z-10 flex flex-col items-center gap-3">
                        <div className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="size-12 rounded bg-primary/20 border border-primary/40 flex items-center justify-center mb-1">
                              <span className="material-symbols-outlined text-primary">description</span>
                            </div>
                            <span className="text-[9px] text-slate-500">Files (12)</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="size-12 rounded bg-red-500/20 border border-red-500/40 flex items-center justify-center mb-1">
                              <span className="material-symbols-outlined text-red-400">memory</span>
                            </div>
                            <span className="text-[9px] text-slate-500">Registry (4)</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="size-12 rounded bg-green-500/20 border border-green-500/40 flex items-center justify-center mb-1">
                              <span className="material-symbols-outlined text-green-400">hub</span>
                            </div>
                            <span className="text-[9px] text-slate-500">Network (1)</span>
                          </div>
                        </div>
                        <p className="text-[10px] text-slate-400 font-mono">Process Tree: svchost.exe &gt; cmd.exe &gt; powershell.exe</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-[10px]">
                        <span className="text-red-400 material-symbols-outlined text-xs">warning</span>
                        <span className="text-slate-300">Attempted shadow copy deletion</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px]">
                        <span className="text-orange-400 material-symbols-outlined text-xs">edit_note</span>
                        <span className="text-slate-300">Persistence via RunOnce registry key</span>
                      </div>
                    </div>
                  </div>

                  {/* Analyst Collaboration Notes */}
                  <div className="bg-white dark:bg-background-dark border border-primary/10 rounded-xl p-5 flex flex-col">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">forum</span>
                      Analyst Notes
                    </h3>
                    <div className="flex-1 space-y-4 mb-4 overflow-y-auto max-h-[160px] custom-scrollbar pr-2">
                      <div className="flex gap-2">
                        <div className="size-6 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-[10px] font-bold">SJ</div>
                        <div className="bg-slate-800 p-2 rounded text-[11px] leading-snug">
                          <span className="font-bold text-primary block mb-0.5">S. Jenkins (14:25)</span>
                          IP 91.202.x.x matches Lazarus Group infrastructure. Initiating lockout for infected workstation.
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="size-6 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center text-[10px] font-bold">AI</div>
                        <div className="bg-primary/10 border border-primary/20 p-2 rounded text-[11px] leading-snug italic">
                          <span className="font-bold text-slate-200 block mb-0.5">PhishGuard AI (14:26)</span>
                          Similar incident observed in Frankfurt node 2 hours ago. Correlation link attached.
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <textarea className="w-full bg-primary/5 border border-primary/20 rounded-lg p-2 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-primary min-h-[60px] resize-none" placeholder="Add comment..."></textarea>
                      <button className="absolute bottom-2 right-2 p-1.5 bg-primary text-white rounded shadow-md">
                        <span className="material-symbols-outlined text-sm">send</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Tooltip-like Footer for system status */}
        <footer className="h-8 border-t border-primary/20 bg-background-light dark:bg-background-dark px-6 flex items-center justify-between shrink-0">
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">System Operational</span>
            </div>
            <div className="flex items-center gap-2 border-l border-primary/20 pl-4">
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Cluster: Node-Alpha-7</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-primary">Load: 0.22 | Mem: 4.2GB / 32GB</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
