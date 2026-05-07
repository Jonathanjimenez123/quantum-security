import { auth } from '../firebase';
import React from 'react';

export default function Compliance({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main antialiased min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light bg-surface-light px-10 py-3 shadow-sm">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-text-main">
            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">shield_lock</span>
            </div>
            <h2 className="text-text-main text-lg font-bold leading-tight tracking-[-0.015em]">Security Admin Console</h2>
          </div>
          <nav className="hidden md:flex items-center gap-9">
            <button onClick={onBack} className="text-text-sub hover:text-primary transition-colors text-sm font-medium leading-normal">Panel de Control</button>
            <button className="text-text-sub hover:text-primary transition-colors text-sm font-medium leading-normal">Devices</button>
            <button className="text-primary text-sm font-bold leading-normal">Compliance</button>
            <button className="text-text-sub hover:text-primary transition-colors text-sm font-medium leading-normal">OSS Licenses</button>
            <button className="text-text-sub hover:text-primary transition-colors text-sm font-medium leading-normal">Configuración</button>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
          <label className="hidden lg:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full border border-border-light bg-background-light overflow-hidden group focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <div className="text-text-sub flex bg-transparent items-center justify-center pl-3">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input className="w-full min-w-0 flex-1 resize-none overflow-hidden bg-transparent text-text-main focus:outline-0 border-none h-full placeholder:text-text-sub px-3 text-sm font-normal leading-normal" placeholder="Buscar devices or users" />
            </div>
          </label>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-background-light text-text-sub transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-status-critical rounded-full border border-surface-light"></span>
            </button>
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-border-light cursor-pointer" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Main Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8">
          {/* Page Header */}
          <div className="flex flex-wrap justify-between items-end gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-text-sub mb-1">
                <button onClick={onBack} className="hover:text-primary transition-colors">Dashboard</button>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                <span className="text-primary font-medium">Software Compliance</span>
              </div>
              <h1 className="text-text-main text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Software Version Compliance</h1>
              <p className="text-text-sub text-base font-normal max-w-2xl">Real-time monitoring of outdated software and vulnerability alerts across the organization.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-surface-light border border-border-light text-text-main hover:bg-background-light transition-colors text-sm font-bold shadow-sm">
                <span className="material-symbols-outlined text-[20px]">download</span>
                <span>Export List</span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-primary-content hover:bg-primary/90 transition-colors text-sm font-bold shadow-md shadow-primary/20">
                <span className="material-symbols-outlined text-[20px]">campaign</span>
                <span>Force Update All</span>
              </button>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-3 rounded-xl p-6 bg-surface-light border border-border-light shadow-sm">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-status-critical/10 rounded-lg text-status-critical">
                  <span className="material-symbols-outlined">warning</span>
                </div>
                <span className="text-status-critical text-sm font-medium bg-status-critical/10 px-2 py-0.5 rounded">+2% this week</span>
              </div>
              <div>
                <p className="text-text-sub text-sm font-medium">Devices at Risk</p>
                <p className="text-text-main text-3xl font-bold mt-1">12</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 rounded-xl p-6 bg-surface-light border border-border-light shadow-sm">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-status-high/10 rounded-lg text-status-high">
                  <span className="material-symbols-outlined">update</span>
                </div>
                <span className="text-status-high text-sm font-medium bg-status-high/10 px-2 py-0.5 rounded">+1% this week</span>
              </div>
              <div>
                <p className="text-text-sub text-sm font-medium">Pending Critical Updates</p>
                <p className="text-text-main text-3xl font-bold mt-1">5</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 rounded-xl p-6 bg-surface-light border border-border-light shadow-sm">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-status-success/10 rounded-lg text-status-success">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <span className="text-status-success text-sm font-medium bg-status-success/10 px-2 py-0.5 rounded">98% compliant</span>
              </div>
              <div>
                <p className="text-text-sub text-sm font-medium">Fully Compliant Devices</p>
                <p className="text-text-main text-3xl font-bold mt-1">482</p>
              </div>
            </div>
          </div>

          {/* Main Table */}
          <div className="bg-surface-light rounded-xl border border-border-light shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-border-light flex justify-between items-center">
              <h3 className="text-lg font-bold text-text-main">Vulnerable Devices</h3>
              <div className="flex gap-2">
                <button className="p-1.5 text-text-sub hover:text-primary rounded hover:bg-background-light">
                  <span className="material-symbols-outlined text-[20px]">filter_list</span>
                </button>
                <button className="p-1.5 text-text-sub hover:text-primary rounded hover:bg-background-light">
                  <span className="material-symbols-outlined text-[20px]">sort</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-background-light/50 border-b border-border-light text-xs uppercase text-text-sub font-semibold tracking-wide">
                    <th className="px-6 py-4 w-1/6">Usuario</th>
                    <th className="px-6 py-4 w-1/6">Device Name</th>
                    <th className="px-6 py-4 w-1/6">Outdated Software</th>
                    <th className="px-6 py-4 w-1/6">Vulnerability Level</th>
                    <th className="px-6 py-4 w-1/6">Action Taken</th>
                    <th className="px-6 py-4 w-1/6 text-right">Manage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light">
                  {/* Row 1 */}
                  <tr className="hover:bg-background-light/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">AM</div>
                        <span className="text-text-main font-medium text-sm">Alice M.</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-text-sub text-sm">MacBook Pro 16</td>
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-background-light text-text-main text-sm font-medium border border-border-light">
                        <img alt="Chrome" className="w-4 h-4" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
                        Chrome v110
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-status-critical/10 text-status-critical text-xs font-bold border border-status-critical/20">
                        <span className="size-1.5 rounded-full bg-status-critical animate-pulse"></span>
                        Critical
                      </span>
                    </td>
                    <td className="px-6 py-4 text-text-sub text-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-primary">send</span>
                      Notification Sent
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary hover:text-primary/80 font-bold text-sm tracking-wide">Force Update</button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-background-light/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-bold">BS</div>
                        <span className="text-text-main font-medium text-sm">Bob S.</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-text-sub text-sm">Dell XPS 15</td>
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-background-light text-text-main text-sm font-medium border border-border-light">
                        <span className="material-symbols-outlined text-[16px] text-blue-600">window</span>
                        Win 10 v2004
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-status-high/10 text-status-high text-xs font-bold border border-status-high/20">
                        <span className="size-1.5 rounded-full bg-status-high"></span>
                        High
                      </span>
                    </td>
                    <td className="px-6 py-4 text-text-sub text-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-text-sub">pending</span>
                      Pending
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary hover:text-primary/80 font-bold text-sm tracking-wide">Force Update</button>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-background-light/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">CD</div>
                        <span className="text-text-main font-medium text-sm">Charlie D.</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-text-sub text-sm">Lenovo ThinkPad</td>
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-background-light text-text-main text-sm font-medium border border-border-light">
                        <span className="material-symbols-outlined text-[16px] text-red-600">picture_as_pdf</span>
                        Adobe Reader
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-status-medium/10 text-status-medium text-xs font-bold border border-status-medium/20">
                        <span className="size-1.5 rounded-full bg-status-medium"></span>
                        Medium
                      </span>
                    </td>
                    <td className="px-6 py-4 text-text-sub text-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-status-success">check_circle</span>
                      Auto-patched
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-text-sub hover:text-text-main font-bold text-sm tracking-wide">View Log</button>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-background-light/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 text-xs font-bold">DW</div>
                        <span className="text-text-main font-medium text-sm">Dana W.</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-text-sub text-sm">MacBook Air</td>
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-background-light text-text-main text-sm font-medium border border-border-light">
                        <span className="material-symbols-outlined text-[16px] text-blue-400">videocam</span>
                        Zoom v5.10
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-status-high/10 text-status-high text-xs font-bold border border-status-high/20">
                        <span className="size-1.5 rounded-full bg-status-high"></span>
                        High
                      </span>
                    </td>
                    <td className="px-6 py-4 text-text-sub text-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-primary">send</span>
                      Notification Sent
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary hover:text-primary/80 font-bold text-sm tracking-wide">Force Update</button>
                    </td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="hover:bg-background-light/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-xs font-bold">EG</div>
                        <span className="text-text-main font-medium text-sm">Evan G.</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-text-sub text-sm">HP EliteBook</td>
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-background-light text-text-main text-sm font-medium border border-border-light">
                        <span className="material-symbols-outlined text-[16px] text-orange-500">public</span>
                        Firefox v98
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-status-critical/10 text-status-critical text-xs font-bold border border-status-critical/20">
                        <span className="size-1.5 rounded-full bg-status-critical animate-pulse"></span>
                        Critical
                      </span>
                    </td>
                    <td className="px-6 py-4 text-text-sub text-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-status-critical">error</span>
                      Failed
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary hover:text-primary/80 font-bold text-sm tracking-wide">Force Update</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3 border-t border-border-light bg-background-light/20 flex justify-between items-center">
              <p className="text-xs text-text-sub">Showing 5 of 12 at-risk devices</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs font-medium text-text-sub hover:text-text-main border border-border-light rounded bg-surface-light">Anterior</button>
                <button className="px-3 py-1 text-xs font-medium text-text-sub hover:text-text-main border border-border-light rounded bg-surface-light">Siguiente</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar (Vulnerability Feed) */}
        <aside className="w-full md:w-80 lg:w-96 border-l border-border-light bg-surface-light flex flex-col h-full overflow-hidden">
          <div className="p-5 border-b border-border-light bg-background-light/30">
            <h3 className="font-bold text-text-main text-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-status-critical">rss_feed</span>
              Vulnerability Feed
            </h3>
            <p className="text-sm text-text-sub mt-1">Live CVEs affecting your inventory</p>
          </div>
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {/* Feed Item 1 */}
            <div className="group relative flex gap-3 pb-4 border-b border-dashed border-border-light last:border-0">
              <div className="mt-1 min-w-[4px] w-[4px] rounded-full bg-status-critical self-stretch"></div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-bold tracking-wider text-text-sub uppercase">CVE-2023-4863</span>
                  <span className="text-[10px] text-text-sub bg-background-light px-1.5 py-0.5 rounded border border-border-light">Just now</span>
                </div>
                <h4 className="text-sm font-bold text-text-main leading-tight mb-1 group-hover:text-primary transition-colors cursor-pointer">Heap buffer overflow in WebP</h4>
                <p className="text-xs text-text-sub line-clamp-2 mb-2">Critical vulnerability in libwebp affecting Chrome, Firefox, and other tools utilizing WebP image rendering.</p>
                <div className="flex gap-2">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">Chrome</span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-orange-50 text-orange-700 border border-orange-100">Firefox</span>
                </div>
              </div>
            </div>
            {/* Feed Item 2 */}
            <div className="group relative flex gap-3 pb-4 border-b border-dashed border-border-light last:border-0">
              <div className="mt-1 min-w-[4px] w-[4px] rounded-full bg-status-high self-stretch"></div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-bold tracking-wider text-text-sub uppercase">CVE-2023-41064</span>
                  <span className="text-[10px] text-text-sub bg-background-light px-1.5 py-0.5 rounded border border-border-light">2h ago</span>
                </div>
                <h4 className="text-sm font-bold text-text-main leading-tight mb-1 group-hover:text-primary transition-colors cursor-pointer">ImageIO Buffer Overflow</h4>
                <p className="text-xs text-text-sub line-clamp-2 mb-2">A buffer overflow issue was addressed with improved memory handling. This issue is fixed in macOS Ventura 13.5.2.</p>
                <div className="flex gap-2">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200">macOS</span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200">iOS</span>
                </div>
              </div>
            </div>
            {/* Feed Item 3 */}
            <div className="group relative flex gap-3 pb-4 border-b border-dashed border-border-light last:border-0">
              <div className="mt-1 min-w-[4px] w-[4px] rounded-full bg-status-medium self-stretch"></div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-bold tracking-wider text-text-sub uppercase">CVE-2023-38180</span>
                  <span className="text-[10px] text-text-sub bg-background-light px-1.5 py-0.5 rounded border border-border-light">5h ago</span>
                </div>
                <h4 className="text-sm font-bold text-text-main leading-tight mb-1 group-hover:text-primary transition-colors cursor-pointer">.NET Denial of Service</h4>
                <p className="text-xs text-text-sub line-clamp-2 mb-2">Visual Studio 2022 version 17.6 needs update. Denial of Service vulnerability in Kestrel.</p>
                <div className="flex gap-2">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-100">.NET</span>
                </div>
              </div>
            </div>
            {/* Feed Item 4 */}
            <div className="group relative flex gap-3 pb-4 border-b border-dashed border-border-light last:border-0">
              <div className="mt-1 min-w-[4px] w-[4px] rounded-full bg-status-high self-stretch"></div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-bold tracking-wider text-text-sub uppercase">CVE-2023-23397</span>
                  <span className="text-[10px] text-text-sub bg-background-light px-1.5 py-0.5 rounded border border-border-light">1d ago</span>
                </div>
                <h4 className="text-sm font-bold text-text-main leading-tight mb-1 group-hover:text-primary transition-colors cursor-pointer">Outlook Elevation of Privilege</h4>
                <p className="text-xs text-text-sub line-clamp-2 mb-2">Microsoft Outlook Elevation of Privilege Vulnerability allowing NTLM credential theft.</p>
                <div className="flex gap-2">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">Outlook</span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">Office</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-border-light bg-background-light/30">
            <button className="w-full py-2 px-4 rounded-lg border border-border-light bg-surface-light text-text-sub text-sm font-bold hover:text-primary hover:bg-background-light transition-colors flex items-center justify-center gap-2">
              <span>View All CVEs</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
