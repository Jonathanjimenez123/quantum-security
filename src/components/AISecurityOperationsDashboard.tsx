import { auth } from '../firebase';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AISecurityOperationsDashboard({ onClose }: { onClose: () => void }) {
  const [threatDateRange, setThreatDateRange] = useState('30d');

  const threatData = [
    { date: 'Nov 1', attempts: 120 },
    { date: 'Nov 5', attempts: 150 },
    { date: 'Nov 10', attempts: 130 },
    { date: 'Nov 15', attempts: 180 },
    { date: 'Nov 20', attempts: 140 },
    { date: 'Nov 25', attempts: 220 },
    { date: 'Today', attempts: 190 },
  ];

  const filteredThreatData = threatDateRange === '7d' ? threatData.slice(-2) : threatData;

  return (
    <div className="relative flex h-screen w-full flex-row overflow-hidden bg-[#111318] text-slate-100 font-['Manrope',sans-serif]">
      {/* Sidebar */}
      <div className="flex h-full w-64 flex-col justify-between border-r border-[#282e39] bg-[#111318] p-4 shrink-0">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center px-2 py-1">
            <div className="flex items-center justify-center bg-[#135bec]/20 text-[#135bec] rounded-lg size-10">
              <span className="material-symbols-outlined">security</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-base font-bold leading-normal">AI Sentinel</h1>
              <p className="text-slate-400 text-xs font-normal leading-normal">Enterprise Security</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#282e39] cursor-pointer transition-colors">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
              <p className="text-white text-sm font-medium leading-normal">Resumen</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#282e39]/50 cursor-pointer transition-colors group">
              <span className="material-symbols-outlined text-slate-400 group-hover:text-white">history</span>
              <p className="text-slate-400 group-hover:text-white text-sm font-medium leading-normal">Threat History</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#282e39]/50 cursor-pointer transition-colors group">
              <span className="material-symbols-outlined text-slate-400 group-hover:text-white">verified_user</span>
              <p className="text-slate-400 group-hover:text-white text-sm font-medium leading-normal">Trusted Sites</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#282e39]/50 cursor-pointer transition-colors group">
              <span className="material-symbols-outlined text-slate-400 group-hover:text-white">psychology</span>
              <p className="text-slate-400 group-hover:text-white text-sm font-medium leading-normal">AI Model Settings</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-[#282e39] pt-4">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#282e39]/50 cursor-pointer transition-colors group">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-white">settings</span>
            <p className="text-slate-400 group-hover:text-white text-sm font-medium leading-normal">Configuración</p>
          </div>
          <div 
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#282e39]/50 cursor-pointer transition-colors group"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-slate-400 group-hover:text-white">logout</span>
            <p className="text-slate-400 group-hover:text-white text-sm font-medium leading-normal">Volver al Inicio</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col h-full overflow-hidden bg-[#111318]">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#282e39] px-8 py-4 shrink-0 bg-[#111318]/95 backdrop-blur z-10">
          <div className="flex items-center gap-4">
            <h2 className="text-white text-xl font-bold leading-tight">Dashboard Overview</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative w-64">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input 
                className="bg-[#1a1d24] border border-[#282e39] text-white text-sm rounded-lg focus:ring-[#135bec] focus:border-[#135bec] block w-full pl-10 p-2.5 placeholder-slate-500 outline-none" 
                placeholder="Buscar logs, IPs, or domains..." 
                type="text"
              />
            </div>
            <div className="h-6 w-px bg-[#282e39]"></div>
            <div className="flex items-center gap-3">
              <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-[#135bec] hover:bg-[#135bec]/90 transition-colors text-white text-sm font-bold shadow-lg shadow-[#135bec]/20">
                <span className="material-symbols-outlined text-[18px]">update</span>
                <span>Check for Updates</span>
              </button>
              
              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center gap-2 h-10 px-3 rounded-lg bg-[#282e39] hover:bg-[#282e39]/80 text-slate-300 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[18px]">language</span>
                  <span className="text-xs font-bold">EN</span>
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
                <div className="absolute right-0 mt-2 w-32 bg-[#1a1d24] border border-[#282e39] rounded-xl shadow-2xl hidden group-hover:block z-50 overflow-hidden">
                  <div className="flex flex-col">
                    <button className="px-4 py-2 text-sm text-white bg-[#135bec]/20 flex items-center gap-2 hover:bg-[#135bec]/30 transition-colors text-left">
                      <span>🇺🇸</span> EN
                    </button>
                    <button className="px-4 py-2 text-sm text-slate-400 flex items-center gap-2 hover:bg-[#282e39]/50 hover:text-white transition-colors text-left">
                      <span>🇪🇸</span> ES
                    </button>
                    <button className="px-4 py-2 text-sm text-slate-400 flex items-center gap-2 hover:bg-[#282e39]/50 hover:text-white transition-colors text-left">
                      <span>🇫🇷</span> FR
                    </button>
                    <button className="px-4 py-2 text-sm text-slate-400 flex items-center gap-2 hover:bg-[#282e39]/50 hover:text-white transition-colors text-left">
                      <span>🇩🇪</span> DE
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Theme Toggle */}
              <button className="size-10 rounded-lg bg-[#282e39] flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <span className="material-symbols-outlined">dark_mode</span>
              </button>
              
              <button className="size-10 rounded-full bg-[#282e39] flex items-center justify-center text-slate-400 hover:text-white transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-[#111318]"></span>
              </button>
              
              <div 
                className="size-10 rounded-full bg-cover bg-center border border-[#282e39]" 
                style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}
              ></div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {/* KPI Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Health Score Gauge */}
            <div className="col-span-1 lg:col-span-1 bg-[#1a1d24] border border-[#282e39] rounded-xl p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Security Health</p>
                <span className="material-symbols-outlined text-green-500">health_and_safety</span>
              </div>
              <div className="flex items-end gap-2">
                <h3 className="text-5xl font-bold text-white tracking-tighter">98<span className="text-2xl text-slate-500 font-medium">/100</span></h3>
              </div>
              <div className="w-full bg-[#282e39] rounded-full h-2 mt-4">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
              </div>
              <p className="text-green-500 text-sm font-medium mt-3 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                +2% from last week
              </p>
            </div>
            
            {/* Phishing Detection */}
            <div className="bg-[#1a1d24] border border-[#282e39] rounded-xl p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Phishing</p>
                <span className="material-symbols-outlined text-red-500">phishing</span>
              </div>
              <div className="flex items-end gap-2">
                <h3 className="text-3xl font-bold text-white">842</h3>
              </div>
              <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">warning</span>
                Active campaigns detected
              </p>
            </div>
            
            {/* Malware Detection */}
            <div className="bg-[#1a1d24] border border-[#282e39] rounded-xl p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Malware</p>
                <span className="material-symbols-outlined text-orange-500">bug_report</span>
              </div>
              <div className="flex items-end gap-2">
                <h3 className="text-3xl font-bold text-white">156</h3>
              </div>
              <p className="text-orange-500 text-sm font-medium mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                +5% increase (24h)
              </p>
            </div>
            
            {/* Social Engineering */}
            <div className="bg-[#1a1d24] border border-[#282e39] rounded-xl p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Social Eng.</p>
                <span className="material-symbols-outlined text-purple-500">psychology_alt</span>
              </div>
              <div className="flex items-end gap-2">
                <h3 className="text-3xl font-bold text-white">39</h3>
              </div>
              <p className="text-slate-400 text-sm mt-2">Deepfake & NLP threats blocked.</p>
            </div>
          </div>

          {/* Main Grid: Chart & Table */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
            {/* Chart Section */}
            <div className="xl:col-span-2 bg-[#1a1d24] border border-[#282e39] rounded-xl p-6 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-white text-lg font-bold">Threat Activity</h3>
                  <p className="text-slate-400 text-sm">Blocked attempts over the selected period</p>
                </div>
                <div className="flex bg-[#282e39] rounded-lg p-1">
                  <button 
                    onClick={() => setThreatDateRange('30d')}
                    className={`px-3 py-1 text-xs font-medium rounded shadow-sm transition-colors ${threatDateRange === '30d' ? 'text-white bg-[#135bec]' : 'text-slate-400 hover:text-white'}`}
                  >
                    30 Days
                  </button>
                  <button 
                    onClick={() => setThreatDateRange('7d')}
                    className={`px-3 py-1 text-xs font-medium rounded shadow-sm transition-colors ${threatDateRange === '7d' ? 'text-white bg-[#135bec]' : 'text-slate-400 hover:text-white'}`}
                  >
                    7 Days
                  </button>
                  <button 
                    onClick={() => setThreatDateRange('24h')}
                    className={`px-3 py-1 text-xs font-medium rounded shadow-sm transition-colors ${threatDateRange === '24h' ? 'text-white bg-[#135bec]' : 'text-slate-400 hover:text-white'}`}
                  >
                    24 Hours
                  </button>
                </div>
              </div>
              <div className="flex-1 min-h-[300px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={filteredThreatData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#135bec" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#135bec" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" stroke="#475569" tick={{fill: '#94a3b8', fontSize: 12}} />
                    <YAxis stroke="#475569" tick={{fill: '#94a3b8', fontSize: 12}} />
                    <CartesianGrid strokeDasharray="3 3" stroke="#282e39" vertical={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1d24', borderColor: '#282e39', color: '#f8fafc' }}
                      itemStyle={{ color: '#e2e8f0' }}
                    />
                    <Area type="monotone" dataKey="attempts" stroke="#135bec" fillOpacity={1} fill="url(#chartGradient)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Alerts / Feed */}
            <div className="xl:col-span-1 bg-[#1a1d24] border border-[#282e39] rounded-xl flex flex-col overflow-hidden">
              <div className="p-6 border-b border-[#282e39] flex justify-between items-center bg-[#1a1d24]">
                <h3 className="text-white text-lg font-bold">Recent Alerts</h3>
                <Link className="text-[#135bec] text-sm font-medium hover:text-[#135bec]/80" to='/ai-threat-analysis'>Ver Todo</Link>
              </div>
              <div className="flex-1 overflow-y-auto p-0">
                {/* Alert Item 1 */}
                <div className="flex items-start gap-4 p-4 border-b border-[#282e39] hover:bg-[#282e39]/30 transition-colors">
                  <div className="size-10 rounded bg-red-500/10 flex items-center justify-center shrink-0 text-red-500">
                    <span className="material-symbols-outlined">phishing</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="text-white text-sm font-bold truncate">login-secure-update.com</h4>
                      <span className="text-xs text-slate-500 whitespace-nowrap">2m ago</span>
                    </div>
                    <p className="text-slate-400 text-xs mt-1">Blocked due to <span className="text-red-400 font-medium">Typosquatting</span></p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded">Critical Risk (9.8)</span>
                    </div>
                  </div>
                </div>
                
                {/* Alert Item 2 */}
                <div className="flex items-start gap-4 p-4 border-b border-[#282e39] hover:bg-[#282e39]/30 transition-colors">
                  <div className="size-10 rounded bg-orange-500/10 flex items-center justify-center shrink-0 text-orange-500">
                    <span className="material-symbols-outlined">psychology_alt</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="text-white text-sm font-bold truncate">urgent-invoice-Q4.pdf.exe</h4>
                      <span className="text-xs text-slate-500 whitespace-nowrap">15m ago</span>
                    </div>
                    <p className="text-slate-400 text-xs mt-1">Blocked due to <span className="text-orange-400 font-medium">NLP Urgency</span></p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded">High Risk (7.5)</span>
                    </div>
                  </div>
                </div>
                
                {/* Alert Item 3 */}
                <div className="flex items-start gap-4 p-4 border-b border-[#282e39] hover:bg-[#282e39]/30 transition-colors">
                  <div className="size-10 rounded bg-yellow-500/10 flex items-center justify-center shrink-0 text-yellow-500">
                    <span className="material-symbols-outlined">warning</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="text-white text-sm font-bold truncate">suspicious-redirect.net</h4>
                      <span className="text-xs text-slate-500 whitespace-nowrap">1h ago</span>
                    </div>
                    <p className="text-slate-400 text-xs mt-1">Blocked due to <span className="text-yellow-400 font-medium">Unknown Issuer</span></p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="bg-yellow-500/20 text-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded">Medium Risk (5.2)</span>
                    </div>
                  </div>
                </div>
                
                {/* Alert Item 4 */}
                <div className="flex items-start gap-4 p-4 hover:bg-[#282e39]/30 transition-colors">
                  <div className="size-10 rounded bg-red-500/10 flex items-center justify-center shrink-0 text-red-500">
                    <span className="material-symbols-outlined">bug_report</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="text-white text-sm font-bold truncate">admin-portal-verify.io</h4>
                      <span className="text-xs text-slate-500 whitespace-nowrap">3h ago</span>
                    </div>
                    <p className="text-slate-400 text-xs mt-1">Blocked due to <span className="text-red-400 font-medium">Credential Harvesting</span></p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded">Critical Risk (9.2)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Table Section */}
          <div className="bg-[#1a1d24] border border-[#282e39] rounded-xl overflow-hidden">
            <div className="p-6 border-b border-[#282e39] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-white text-lg font-bold">Threat History</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <select className="appearance-none bg-[#111318] border border-[#282e39] text-slate-300 text-sm rounded-lg focus:ring-[#135bec] focus:border-[#135bec] block w-full p-2.5 pr-8 outline-none">
                    <option>All Threats</option>
                    <option>Phishing</option>
                    <option>Malware</option>
                    <option>Social Engineering</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                    <span className="material-symbols-outlined text-sm">expand_more</span>
                  </div>
                </div>
                <button className="bg-[#282e39] hover:bg-[#282e39]/80 text-white text-sm font-medium rounded-lg px-4 py-2 flex items-center gap-2 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Export CSV
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-slate-400">
                <thead className="text-xs text-slate-500 uppercase bg-[#111318]/50 border-b border-[#282e39]">
                  <tr>
                    <th className="px-6 py-4 font-medium" scope="col">Target URL</th>
                    <th className="px-6 py-4 font-medium" scope="col">Detection Type</th>
                    <th className="px-6 py-4 font-medium" scope="col">Risk Score</th>
                    <th className="px-6 py-4 font-medium" scope="col">Acción</th>
                    <th className="px-6 py-4 font-medium" scope="col">Fecha</th>
                    <th className="px-6 py-4 font-medium" scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#1a1d24] border-b border-[#282e39] hover:bg-[#111318]/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-white flex items-center gap-3">
                      <div className="size-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white">G</div>
                      <span>google-drive-security-check.com</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                        Phishing
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-red-500 text-[18px]" title="Critical">warning</span>
                        <div>
                          <div className="w-full bg-[#282e39] rounded-full h-1.5 w-24 mb-1">
                            <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                          <span className="text-xs">95/100</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-slate-300 flex items-center gap-1">
                        <span className="material-symbols-outlined text-red-500 text-[16px]">block</span>
                        Blocked
                      </span>
                    </td>
                    <td className="px-6 py-4">Oct 24, 2026 10:42 AM</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-500 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  
                  <tr className="bg-[#1a1d24] border-b border-[#282e39] hover:bg-[#111318]/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-white flex items-center gap-3">
                      <div className="size-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white">A</div>
                      <span>amazon-returns-portal.net</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
                        Brand Impersonation
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-orange-500 text-[18px]" title="High">error</span>
                        <div>
                          <div className="w-full bg-[#282e39] rounded-full h-1.5 w-24 mb-1">
                            <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '82%' }}></div>
                          </div>
                          <span className="text-xs">82/100</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-slate-300 flex items-center gap-1">
                        <span className="material-symbols-outlined text-red-500 text-[16px]">block</span>
                        Blocked
                      </span>
                    </td>
                    <td className="px-6 py-4">Oct 24, 2026 09:15 AM</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-500 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  
                  <tr className="bg-[#1a1d24] hover:bg-[#111318]/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-white flex items-center gap-3">
                      <div className="size-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white">P</div>
                      <span>paypal-verification-req.xyz</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                        Credential Theft
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-red-500 text-[18px]" title="Critical">warning</span>
                        <div>
                          <div className="w-full bg-[#282e39] rounded-full h-1.5 w-24 mb-1">
                            <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '99%' }}></div>
                          </div>
                          <span className="text-xs">99/100</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-slate-300 flex items-center gap-1">
                        <span className="material-symbols-outlined text-red-500 text-[16px]">block</span>
                        Blocked
                      </span>
                    </td>
                    <td className="px-6 py-4">Oct 23, 2026 04:20 PM</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-500 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>

                  <tr className="bg-[#1a1d24] hover:bg-[#111318]/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-white flex items-center gap-3">
                      <div className="size-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white">M</div>
                      <span>microsoft-update-patch.com</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                        Suspicious Link
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-yellow-500 text-[18px]" title="Medium">warning_amber</span>
                        <div>
                          <div className="w-full bg-[#282e39] rounded-full h-1.5 w-24 mb-1">
                            <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                          <span className="text-xs">65/100</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-slate-300 flex items-center gap-1">
                        <span className="material-symbols-outlined text-yellow-500 text-[16px]">warning</span>
                        Flagged
                      </span>
                    </td>
                    <td className="px-6 py-4">Oct 22, 2026 11:30 AM</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-500 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            <p>creada en 2026 Jonathan Jimenez Escobar System v4.2.1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
