import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface GeographicAccessAlertsProps {
  onBack: () => void;
}

export default function GeographicAccessAlerts({ onBack }: GeographicAccessAlertsProps) {
  return (
    <div className="bg-[#f8f6f6] dark:bg-[#181111] text-slate-900 dark:text-slate-100 font-['Space_Grotesk',sans-serif] min-h-screen flex flex-col overflow-hidden">
      <style>{`
        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #181111; 
        }
        ::-webkit-scrollbar-thumb {
            background: #392828; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #4a3535; 
        }
        
        /* Map pulse animation simulation */
        .pulse-ring {
            position: absolute;
            border-radius: 50%;
            animation: pulse 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
        @keyframes pulse {
            0% { transform: scale(0.5); opacity: 0; box-shadow: 0 0 0 0 rgba(236, 19, 19, 0.7); }
            50% { opacity: 1; box-shadow: 0 0 0 10px rgba(236, 19, 19, 0); }
            100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#392828] px-8 py-4 bg-[#251a1a]/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-white cursor-pointer" onClick={onBack}>
            <div className="size-8 flex items-center justify-center bg-[#ec1313]/20 rounded-lg text-[#ec1313]">
              <span className="material-symbols-outlined">security</span>
            </div>
            <h2 className="text-white text-xl font-bold tracking-tight">Sentin<span className="text-[#ec1313]">AI</span></h2>
          </div>
          <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#251a1a] border border-[#392828] overflow-hidden focus-within:border-[#ec1313]/50 transition-colors">
              <div className="text-[#b99d9d] flex items-center justify-center pl-3">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none bg-transparent border-none text-white focus:outline-0 focus:ring-0 placeholder:text-[#b99d9d] px-3 text-sm" placeholder="Buscar logs, IPs, users..." />
            </div>
          </label>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
          <nav className="hidden lg:flex items-center gap-6">
            <Link className="text-[#b99d9d] hover:text-white text-sm font-medium transition-colors" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
            <Link className="text-white text-sm font-medium transition-colors" to='/informes'>Threats</Link>
            <Link className="text-[#b99d9d] hover:text-white text-sm font-medium transition-colors" to='/panel'>Access Logs</Link>
            <Link className="text-[#b99d9d] hover:text-white text-sm font-medium transition-colors" to='/ajustes'>Configuración</Link>
          </nav>
          <div className="h-6 w-px bg-[#392828] hidden lg:block"></div>
          <button className="relative p-2 text-[#b99d9d] hover:text-white transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-[#ec1313] rounded-full"></span>
          </button>
          <div className="bg-center bg-no-repeat bg-cover rounded-full size-9 ring-2 ring-[#392828]" data-alt="User profile picture" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* Map Visualization Area */}
        <div className="flex-1 relative bg-[#181111] flex flex-col min-h-[500px]">
          {/* Map Background Placeholder */}
          <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity" data-alt="Dark stylized world map background with data connections" data-location="Global" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida/ADBb0ugdeyEUGGtf0Hf8MpAjVRFEDeIHNFR2Z8yjahzqj9-DDuCp40RJoGmFjcCcxMyqVjBxE9PU_HtIPnO_0QrmK0z38sK1dfMe73EaSv0wNbooZUrIjUz6KP5yiZMAPn0sZX7c5atgzUu1TzExQSqyKOe0JHEPseeOkZW-Z6jPWpnZWa1Xf2xXgvIRo_hKQoEp5jK1TesZOMJVWkR-4tJYl-7iPQQCbQcR8b-bC-WgAITB0nzeE8pnoCgwSgcJyUTYEoTRRLlrOhZn")' }}></div>
          {/* Map Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181111] via-[#181111]/80 to-transparent pointer-events-none"></div>
          
          {/* Header over map */}
          <div className="relative z-10 p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">Global Threat Map</h1>
              <p className="text-[#b99d9d] text-sm max-w-md">Real-time visualization of access anomalies. Red indicators denote high-risk login attempts deviating from user baselines.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#251a1a] border border-[#392828] hover:bg-[#392828] rounded-lg text-white text-sm font-medium transition-colors">
                <span className="material-symbols-outlined text-[18px]">layers</span>
                Risk Heatmap
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#251a1a] border border-[#392828] hover:bg-[#392828] rounded-lg text-white text-sm font-medium transition-colors">
                <span className="material-symbols-outlined text-[18px]">tune</span>
                Filters
              </button>
            </div>
          </div>

          {/* Simulated Data Points on Map */}
          <div className="absolute top-1/3 left-1/4 group cursor-pointer z-10">
            <div className="relative flex items-center justify-center size-4">
              <div className="absolute size-full rounded-full bg-[#ec1313] animate-ping opacity-75"></div>
              <div className="relative size-3 rounded-full bg-[#ec1313] border-2 border-white"></div>
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#251a1a] border border-[#392828] p-3 rounded-lg shadow-xl w-64 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#ec1313] uppercase tracking-wider">Critical Alert</span>
                <span className="text-[10px] text-[#b99d9d]">Just now</span>
              </div>
              <p className="text-white text-sm font-medium">Unusual Login: Lagos, NG</p>
              <p className="text-[#b99d9d] text-xs">Distance: 8,432km from baseline</p>
            </div>
          </div>
          
          <div className="absolute top-1/2 right-1/3 group cursor-pointer z-10">
            <div className="relative flex items-center justify-center size-4">
              <div className="absolute size-full rounded-full bg-orange-500 animate-ping opacity-75" style={{ animationDuration: '3s' }}></div>
              <div className="relative size-3 rounded-full bg-orange-500 border-2 border-white"></div>
            </div>
          </div>
          
          <div className="absolute top-[40%] left-[20%] group cursor-pointer z-10">
            <div className="size-2 rounded-full bg-blue-400 opacity-60"></div>
          </div>

          {/* Connection Line SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 0 }}></stop>
                <stop offset="50%" style={{ stopColor: 'rgb(236, 19, 19)', stopOpacity: 1 }}></stop>
                <stop offset="100%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 0 }}></stop>
              </linearGradient>
            </defs>
            <path d="M 350 250 Q 550 150 800 350" fill="none" stroke="url(#grad1)" strokeDasharray="5,5" strokeWidth="2"></path>
          </svg>

          {/* Bottom Map Controls */}
          <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between pointer-events-none">
            <div className="bg-[#251a1a]/90 backdrop-blur-sm border border-[#392828] rounded-lg p-3 pointer-events-auto">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#ec1313]"></span>
                  <span className="text-xs text-[#b99d9d]">Critical</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-orange-500"></span>
                  <span className="text-xs text-[#b99d9d]">Suspicious</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-400"></span>
                  <span className="text-xs text-[#b99d9d]">Safe</span>
                </div>
              </div>
            </div>
            <div className="bg-[#251a1a]/90 backdrop-blur-sm border border-[#392828] rounded-lg p-4 max-w-sm w-full pointer-events-auto">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-sm font-semibold">Automated Response</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                  <div className="w-9 h-5 bg-[#392828] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#ec1313]"></div>
                </label>
              </div>
              <p className="text-xs text-[#b99d9d]">Automatically block logins from non-whitelisted countries exceeding risk score of 85.</p>
            </div>
          </div>
        </div>

        {/* Right Side Panel */}
        <aside className="w-full lg:w-[420px] bg-[#251a1a] border-l border-[#392828] flex flex-col z-20 shadow-2xl">
          {/* Panel Header */}
          <div className="p-5 border-b border-[#392828] flex items-center justify-between bg-[#251a1a] sticky top-0">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#ec1313]/10 rounded-lg text-[#ec1313]">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <div>
                <h2 className="text-white text-lg font-bold">High-Risk Attempts</h2>
                <div className="flex items-center gap-2">
                  <span className="flex size-2 rounded-full bg-[#ec1313] animate-pulse"></span>
                  <span className="text-xs text-[#ec1313] font-medium">3 Active Anomalies</span>
                </div>
              </div>
            </div>
            <button className="text-[#b99d9d] hover:text-white transition-colors">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>

          {/* List of Anomalies */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Card 1 (Active/Critical) */}
            <div className="bg-gradient-to-br from-[#392828]/50 to-[#251a1a] border border-[#ec1313]/50 rounded-xl p-4 shadow-lg shadow-[#ec1313]/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#ec1313]/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
              <div className="flex justify-between items-start mb-3 relative">
                <div className="flex items-center gap-3">
                  <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-[#ec1313]/30" data-alt="Employee portrait" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Marcus Chen</h3>
                    <p className="text-xs text-[#b99d9d]">Finance Dept • Admin</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-[#ec1313]/20 text-[#ec1313] text-[10px] font-bold uppercase tracking-wider rounded border border-[#ec1313]/20">Critical</span>
              </div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-4 text-xs">
                <div className="space-y-1">
                  <span className="text-[#b99d9d] block">Location Detected</span>
                  <div className="flex items-center gap-1 text-white font-medium">
                    <span className="material-symbols-outlined text-[14px] text-[#ec1313]">location_on</span>
                    Lagos, Nigeria
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[#b99d9d] block">IP Address</span>
                  <div className="flex items-center gap-1 text-white font-medium">
                    <span className="material-symbols-outlined text-[14px]">dns</span>
                    197.210.23.4
                  </div>
                </div>
                <div className="space-y-1 col-span-2">
                  <span className="text-[#b99d9d] block">Anomaly Analysis</span>
                  <div className="flex items-center gap-1 text-orange-400 font-medium">
                    <span className="material-symbols-outlined text-[14px]">compare_arrows</span>
                    8,432 km deviation from San Francisco (Typical)
                  </div>
                </div>
              </div>
              <div className="flex gap-2 relative">
                <button className="flex-1 bg-[#392828] hover:bg-[#4a3535] text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors">
                  Ignore
                </button>
                <button className="flex-[2] bg-[#ec1313] hover:bg-red-600 text-white text-xs font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-[#ec1313]/20 transition-all hover:shadow-[#ec1313]/40">
                  <span className="material-symbols-outlined text-[16px]">block</span>
                  Block &amp; Flag
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#392828]/30 border border-[#392828] rounded-xl p-4 hover:border-[#392828]/80 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
 <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 opacity-70" data-alt="Employee portrait" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Sarah Jenkins</h3>
                    <p className="text-xs text-[#b99d9d]">HR • Standard User</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-wider rounded border border-orange-500/20">Suspicious</span>
              </div>
              <div className="grid grid-cols-2 gap-y-2 gap-x-2 mb-4 text-xs">
                <div className="space-y-1">
                  <span className="text-[#b99d9d] block">Location Detected</span>
                  <div className="flex items-center gap-1 text-white font-medium">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    Moscow, Russia
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[#b99d9d] block">Device</span>
                  <div className="flex items-center gap-1 text-white font-medium">
                    <span className="material-symbols-outlined text-[14px]">smartphone</span>
                    Unrecognized
                  </div>
                </div>
              </div>
              <button className="w-full border border-[#392828] hover:bg-[#392828] text-[#b99d9d] hover:text-white text-xs font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                Review Details
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#392828]/30 border border-[#392828] rounded-xl p-4 hover:border-[#392828]/80 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
 <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 opacity-70" data-alt="Employee portrait" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                  <div>
                    <h3 className="text-white font-bold text-sm">David Kim</h3>
                    <p className="text-xs text-[#b99d9d]">DevOps • Admin</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-wider rounded border border-orange-500/20">Suspicious</span>
              </div>
              <div className="grid grid-cols-2 gap-y-2 gap-x-2 mb-4 text-xs">
                <div className="space-y-1">
                  <span className="text-[#b99d9d] block">Location Detected</span>
                  <div className="flex items-center gap-1 text-white font-medium">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    Beijing, China
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[#b99d9d] block">Connection</span>
                  <div className="flex items-center gap-1 text-white font-medium">
                    <span className="material-symbols-outlined text-[14px]">vpn_lock</span>
                    Datacenter Proxy
                  </div>
                </div>
              </div>
              <button className="w-full border border-[#392828] hover:bg-[#392828] text-[#b99d9d] hover:text-white text-xs font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                Review Details
              </button>
            </div>
          </div>

          {/* Bulk Action Footer */}
          <div className="p-5 border-t border-[#392828] bg-[#251a1a] sticky bottom-0">
            <button className="w-full group relative flex items-center justify-center overflow-hidden rounded-xl bg-[#ec1313] px-6 py-4 text-white shadow-lg shadow-[#ec1313]/25 transition-all hover:bg-red-600 hover:shadow-red-600/30">
              <div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] duration-[1500ms]"></div>
              <div className="flex items-center gap-3 relative z-10">
                <span className="material-symbols-outlined font-bold">lock_reset</span>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold leading-none">Forzar Cierre de Sesión y Requerir 2FA</span>
                  <span className="text-[10px] font-normal opacity-80 mt-1">Apply to all 3 flagged sessions</span>
                </div>
              </div>
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
