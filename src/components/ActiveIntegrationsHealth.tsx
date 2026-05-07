import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface ActiveIntegrationsHealthProps {
  onBack: () => void;
}

export default function ActiveIntegrationsHealth({ onBack }: ActiveIntegrationsHealthProps) {
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] text-slate-900 dark:text-slate-100 font-['Inter',sans-serif] antialiased overflow-hidden min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #2a3642;
            border-radius: 20px;
        }
        @keyframes loading {
            0% { left: -30%; width: 30%; }
            50% { width: 60%; }
            100% { left: 100%; width: 30%; }
        }
      `}</style>
      <div className="flex h-screen w-full">
        {/* Side Navigation */}
        <div className="hidden md:flex flex-col w-64 bg-[#1a242f] border-r border-[#2a3642] h-full">
          <div className="p-4 border-b border-[#2a3642]">
            <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#137fec] to-blue-600 flex items-center justify-center text-white shadow-lg shadow-[#137fec]/20">
                <span className="material-symbols-outlined text-xl">shield_lock</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-sm font-bold leading-tight">SecureGuard AI</h1>
                <p className="text-slate-400 text-xs font-medium">Admin Console</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-1 p-3 overflow-y-auto">
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-medium">Panel de Control</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white bg-[#137fec]/10 border border-[#137fec]/20" to='/panel'>
              <span className="material-symbols-outlined text-[#137fec]">hub</span>
              <span className="text-sm font-medium">Integrations</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors" to="/apidocumentation">
              <span className="material-symbols-outlined">description</span>
              <span className="text-sm font-medium">API Logs</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors" to='/ajustes'>
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-medium">Configuración</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors" to='/centro-ayuda'>
              <span className="material-symbols-outlined">support_agent</span>
              <span className="text-sm font-medium">Support</span>
            </Link>
          </div>
          <div className="p-4 border-t border-[#2a3642]">
            <button className="w-full flex items-center justify-center gap-2 bg-[#137fec] hover:bg-blue-600 text-white text-sm font-bold py-2.5 px-4 rounded-lg transition-colors shadow-lg shadow-[#137fec]/20">
              <span className="material-symbols-outlined text-lg">add</span>
              <span>New Integration</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden h-full">
          {/* Header */}
          <header className="h-16 flex items-center justify-between px-6 border-b border-[#2a3642] bg-[#101922]/50 backdrop-blur-sm z-10">
            <div className="flex items-center gap-4">
              <button className="md:hidden text-slate-400 hover:text-white">
                <span className="material-symbols-outlined">menu</span>
              </button>
              <h2 className="text-lg font-bold text-white tracking-tight">Integrations Health</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-medium text-emerald-500">System Operational</span>
              </div>
              <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border border-[#101922]"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-slate-700 overflow-hidden ring-2 ring-[#2a3642]" data-alt="User avatar placeholder">
                <img alt="User Profile" className="w-full h-full object-cover" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
              </div>
            </div>
          </header>

          {/* Scrollable Content */}
          <main className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Top Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Stat Card 1 */}
              <div className="bg-[#1a242f] rounded-xl p-5 border border-[#2a3642] relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl text-emerald-500">security</span>
                </div>
                <div className="flex flex-col h-full justify-between relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-slate-400 text-sm font-medium">SIEM Pipeline</h3>
                    <span className="material-symbols-outlined text-emerald-500">check_circle</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white mb-1">Operational</p>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-500 text-sm font-medium">99.9% Uptime</span>
                      <span className="text-slate-600 text-xs">•</span>
                      <span className="text-slate-500 text-sm">24h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-[#1a242f] rounded-xl p-5 border border-[#2a3642] relative overflow-hidden group hover:border-amber-500/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl text-amber-500">forum</span>
                </div>
                <div className="flex flex-col h-full justify-between relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-slate-400 text-sm font-medium">Collaboration Bots</h3>
                    <span className="material-symbols-outlined text-amber-500">warning</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white mb-1">Degraded</p>
                    <div className="flex items-center gap-2">
                      <span className="text-amber-500 text-sm font-medium">-5% Latency</span>
                      <span className="text-slate-600 text-xs">•</span>
                      <span className="text-slate-500 text-sm">Slack API</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-[#1a242f] rounded-xl p-5 border border-[#2a3642] relative overflow-hidden group hover:border-[#137fec]/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl text-[#137fec]">badge</span>
                </div>
                <div className="flex flex-col h-full justify-between relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-slate-400 text-sm font-medium">Identity Providers</h3>
                    <span className="material-symbols-outlined text-blue-400">sync</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white mb-1">Operational</p>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 text-sm font-medium">100% Uptime</span>
                      <span className="text-slate-600 text-xs">•</span>
                      <span className="text-slate-500 text-sm">Okta / Azure AD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-[#1a242f] rounded-xl border border-[#2a3642] p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-white text-lg font-bold">Data Flow Health</h3>
                    <p className="text-slate-400 text-sm">Webhook delivery success vs failure rate (24h)</p>
                  </div>
                  <div className="flex items-center gap-2 bg-[#101922] rounded-lg p-1 border border-[#2a3642]">
                    <button className="px-3 py-1 text-xs font-medium text-white bg-[#137fec] rounded shadow-sm">24h</button>
                    <button className="px-3 py-1 text-xs font-medium text-slate-400 hover:text-white transition-colors">7d</button>
                    <button className="px-3 py-1 text-xs font-medium text-slate-400 hover:text-white transition-colors">30d</button>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="relative h-64 w-full">
                  {/* Y-Axis Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-600 pointer-events-none">
                    <div className="border-b border-[#2a3642]/50 w-full h-0"></div>
                    <div className="border-b border-[#2a3642]/50 w-full h-0"></div>
                    <div className="border-b border-[#2a3642]/50 w-full h-0"></div>
                    <div className="border-b border-[#2a3642]/50 w-full h-0"></div>
                    <div className="border-b border-[#2a3642]/50 w-full h-0"></div>
                  </div>
                  {/* Simple SVG Chart Representation */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradientSuccess" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#137fec', stopOpacity: 0.2 }}></stop>
                        <stop offset="100%" style={{ stopColor: '#137fec', stopOpacity: 0 }}></stop>
                      </linearGradient>
                    </defs>
                    <path d="M0,200 Q150,150 300,180 T600,120 T900,140 T1200,80 V256 H0 Z" fill="url(#gradientSuccess)"></path>
                    <path d="M0,200 Q150,150 300,180 T600,120 T900,140 T1200,80" fill="none" stroke="#137fec" strokeLinecap="round" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
                    {/* Error Spikes */}
                    <path d="M200,250 L205,220 L210,250 M700,250 L705,230 L710,250" fill="none" stroke="#f43f5e" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                  </svg>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-2 px-1">
                  <span>00:00</span>
                  <span>04:00</span>
                  <span>08:00</span>
                  <span>12:00</span>
                  <span>16:00</span>
                  <span>20:00</span>
                  <span>Now</span>
                </div>
              </div>

              {/* Quick Actions / Mini List */}
              <div className="lg:col-span-1 flex flex-col gap-4">
                <div className="bg-[#1a242f] rounded-xl border border-[#2a3642] p-6 flex-1 flex flex-col">
                  <h3 className="text-white text-base font-bold mb-4">Recent Alerts</h3>
                  <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                    <div className="flex gap-3 items-start p-3 rounded-lg bg-[#101922] border border-[#2a3642]">
                      <span className="material-symbols-outlined text-amber-500 text-sm mt-0.5">warning</span>
                      <div>
                        <p className="text-slate-200 text-sm font-medium">Slack API Rate Limit</p>
                        <p className="text-slate-500 text-xs mt-1">Warning threshold reached (85%)</p>
                        <p className="text-slate-600 text-[10px] mt-2">12 mins ago</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start p-3 rounded-lg bg-[#101922] border border-[#2a3642]">
                      <span className="material-symbols-outlined text-red-500 text-sm mt-0.5">error</span>
                      <div>
                        <p className="text-slate-200 text-sm font-medium">Splunk Auth Failure</p>
                        <p className="text-slate-500 text-xs mt-1">Token expired during refresh</p>
                        <p className="text-slate-600 text-[10px] mt-2">1 hour ago</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start p-3 rounded-lg bg-[#101922] border border-[#2a3642]">
                      <span className="material-symbols-outlined text-blue-500 text-sm mt-0.5">info</span>
                      <div>
                        <p className="text-slate-200 text-sm font-medium">New Node Connected</p>
                        <p className="text-slate-500 text-xs mt-1">US-East-2 region came online</p>
                        <p className="text-slate-600 text-[10px] mt-2">3 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-4 text-xs font-medium text-slate-400 hover:text-white py-2 border border-dashed border-[#2a3642] rounded hover:bg-white/5 transition-colors">
                    View All Alerts
                  </button>
                </div>
              </div>
            </div>

            {/* Connected Services Grid */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-lg font-bold">Connected Services</h3>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">search</span>
                    <input className="bg-[#1a242f] border border-[#2a3642] rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#137fec] w-64" placeholder="Buscar services..." type="text" />
                  </div>
                  <button className="flex items-center gap-2 px-3 py-2 bg-[#1a242f] border border-[#2a3642] rounded-lg text-slate-400 hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-lg">filter_list</span>
                    <span className="text-sm font-medium">Filtrar</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {/* Service Card 1 */}
                <div className="bg-[#1a242f] rounded-xl p-5 border border-[#2a3642] hover:border-[#2a3642]/80 transition-all shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center p-2">
                        {/* Placeholder logo for Splunk */}
                        <span className="text-slate-900 font-bold text-xs">SPL</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">Splunk Enterprise</h4>
                        <p className="text-slate-500 text-xs">Log Aggregation</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Active</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Last Sync</p>
                      <p className="text-slate-300 text-sm font-medium">2 mins ago</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Throughput</p>
                      <p className="text-slate-300 text-sm font-medium">2.4 GB/hr</p>
                    </div>
                  </div>
                  <div className="w-full bg-[#101922] rounded-full h-1.5 mb-2 overflow-hidden">
                    <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Health Score</span>
                    <span className="text-emerald-500 font-medium">98/100</span>
                  </div>
                </div>

                {/* Service Card 2 */}
                <div className="bg-[#1a242f] rounded-xl p-5 border border-[#2a3642] hover:border-[#2a3642]/80 transition-all shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#4A154B] flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-xl">forum</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">Slack Enterprise</h4>
                        <p className="text-slate-500 text-xs">Notifications</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">Degraded</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Last Sync</p>
                      <p className="text-slate-300 text-sm font-medium">45 secs ago</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Throughput</p>
                      <p className="text-slate-300 text-sm font-medium">450 req/min</p>
                    </div>
                  </div>
                  <div className="w-full bg-[#101922] rounded-full h-1.5 mb-2 overflow-hidden">
                    <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Rate Limit</span>
                    <span className="text-amber-500 font-medium">High Load</span>
                  </div>
                </div>

                {/* Service Card 3 */}
                <div className="bg-[#1a242f] rounded-xl p-5 border border-[#2a3642] hover:border-[#2a3642]/80 transition-all shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0078D4] flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-xl">grid_view</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">Azure AD</h4>
                        <p className="text-slate-500 text-xs">SSO / Identity</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Active</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Last Sync</p>
                      <p className="text-slate-300 text-sm font-medium">5 mins ago</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Throughput</p>
                      <p className="text-slate-300 text-sm font-medium">1.2k Auth/hr</p>
                    </div>
                  </div>
                  <div className="w-full bg-[#101922] rounded-full h-1.5 mb-2 overflow-hidden">
                    <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Latency</span>
                    <span className="text-emerald-500 font-medium">24ms</span>
                  </div>
                </div>

                {/* Service Card 4 */}
                <div className="bg-[#1a242f] rounded-xl p-5 border border-[#2a3642] hover:border-[#2a3642]/80 transition-all shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-xl">webhook</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">Custom Webhooks</h4>
                        <p className="text-slate-500 text-xs">Event Streaming</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-red-500/10 text-red-500 border border-red-500/20">Error</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Last Sync</p>
                      <p className="text-slate-300 text-sm font-medium">1 hour ago</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Throughput</p>
                      <p className="text-slate-300 text-sm font-medium">0 B/hr</p>
                    </div>
                  </div>
                  <div className="w-full bg-[#101922] rounded-full h-1.5 mb-2 overflow-hidden">
                    <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Estado</span>
                    <span className="text-red-500 font-medium">Endpoint Unreachable</span>
                  </div>
                </div>

                {/* Service Card 5 */}
                <div className="bg-[#1a242f] rounded-xl p-5 border border-[#2a3642] hover:border-[#2a3642]/80 transition-all shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#F24E1E] flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-xl">code</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">Figma Dev Mode</h4>
                        <p className="text-slate-500 text-xs">Design Sync</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20">Syncing</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Last Sync</p>
                      <p className="text-slate-300 text-sm font-medium">Now</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Throughput</p>
                      <p className="text-slate-300 text-sm font-medium">Uploading...</p>
                    </div>
                  </div>
                  <div className="w-full bg-[#101922] rounded-full h-1.5 mb-2 overflow-hidden relative">
                    <div className="bg-blue-500 h-1.5 rounded-full absolute top-0 left-0 w-1/3 animate-[loading_1.5s_ease-in-out_infinite]"></div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Process</span>
                    <span className="text-blue-500 font-medium">Asset extraction</span>
                  </div>
                </div>

                {/* Service Card 6 */}
                <div className="bg-[#1a242f] rounded-xl p-5 border border-[#2a3642] hover:border-[#2a3642]/80 transition-all shadow-sm flex flex-col items-center justify-center text-center cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-[#101922] border border-dashed border-slate-600 flex items-center justify-center mb-3 group-hover:border-[#137fec] group-hover:text-[#137fec] transition-colors">
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-[#137fec]">add</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">Add New Service</h4>
                  <p className="text-slate-500 text-xs px-8">Connect a new external platform to the SecureGuard network.</p>
                </div>
              </div>
            </div>

            <footer className="pt-6 pb-2 text-center">
              <p className="text-slate-600 text-xs">creada en 2026 Jonathan Jimenez Escobar All systems operational. v2.4.1</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
