import { auth } from '../firebase';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function QuantumShieldDashboard({ onBack }: { onBack?: () => void }) {
  const [timeRange, setTimeRange] = useState('30 Days');
  const [threatFilter, setThreatFilter] = useState('All Threats');
  const [searchQuery, setSearchQuery] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const chartData = [
    { date: 'Oct 01', threats: 45 },
    { date: 'Oct 05', threats: 52 },
    { date: 'Oct 10', threats: 48 },
    { date: 'Oct 15', threats: 70 },
    { date: 'Oct 20', threats: 61 },
    { date: 'Oct 25', threats: 85 },
    { date: 'Today', threats: 72 },
  ];

  const filteredChartData = timeRange === '7 Days' ? chartData.slice(-3) : 
                           timeRange === '24 Hours' ? chartData.slice(-1) : 
                           chartData;

  const handleUpdate = () => {
    setIsUpdating(true);
    setTimeout(() => setIsUpdating(false), 1500);
  };

  const alerts = [
    { id: 1, domain: 'login-secure-update.com', time: '2m ago', reason: 'Deepfake Auth Request', risk: 'Critical Risk (9.8)', icon: 'phishing', color: 'red' },
    { id: 2, domain: 'urgent-invoice-Q4.pdf.exe', time: '15m ago', reason: 'LLM Social Engineering', risk: 'High Risk (7.5)', icon: 'psychology_alt', color: 'orange' },
    { id: 3, domain: 'suspicious-redirect.net', time: '1h ago', reason: 'Synthetic Identity', risk: 'Medium Risk (5.2)', icon: 'warning', color: 'yellow' },
    { id: 4, domain: 'admin-portal-verify.io', time: '3h ago', reason: 'Quantum Brute Force', risk: 'Critical Risk (9.2)', icon: 'bug_report', color: 'red' },
  ];

  const threats = [
    { id: 1, target: 'google-drive-security-check.com', type: 'Phishing', score: 95, action: 'Blocked', date: 'Oct 24, 2026 10:42 AM', initial: 'G', color: 'red' },
    { id: 2, target: 'amazon-returns-portal.net', type: 'Brand Impersonation', score: 82, action: 'Blocked', date: 'Oct 24, 2026 09:15 AM', initial: 'A', color: 'orange' },
    { id: 3, target: 'paypal-verification-req.xyz', type: 'Credential Theft', score: 99, action: 'Blocked', date: 'Oct 23, 2026 04:20 PM', initial: 'P', color: 'red' },
  ];

  const filteredThreats = threats.filter(t => {
    const matchesSearch = t.target.toLowerCase().includes(searchQuery.toLowerCase()) || t.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = threatFilter === 'All Threats' || t.type.includes(threatFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 overflow-hidden font-display h-screen w-full">
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #282e39; border-radius: 10px; }
        `}
      </style>
      <div className="relative flex h-full w-full flex-row overflow-hidden">
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`fixed lg:static inset-y-0 left-0 z-50 flex h-full w-64 flex-col justify-between border-r border-border-dark bg-background-dark p-4 shrink-0 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center px-2 py-1 justify-between lg:justify-start">
              <div className="flex items-center gap-3">
                {onBack && (
                  <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                  </button>
                )}
                <div className="flex items-center justify-center bg-primary/20 text-primary rounded-lg h-10 w-10">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white text-base font-bold leading-normal">AI Sentinel</h1>
                  <p className="text-slate-400 text-xs font-normal leading-normal">Enterprise Security</p>
                </div>
              </div>
              <button 
                className="lg:hidden text-slate-400 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-border-dark cursor-pointer transition-colors">
                <span className="material-symbols-outlined text-white filled-icon">dashboard</span>
                <p className="text-white text-sm font-medium leading-normal">Resumen</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-border-dark/50 cursor-pointer transition-colors group">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-white">history</span>
                <p className="text-slate-400 group-hover:text-white text-sm font-medium leading-normal">Threat History</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-border-dark/50 cursor-pointer transition-colors group">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-white">verified_user</span>
                <p className="text-slate-400 group-hover:text-white text-sm font-medium leading-normal">Trusted Sites</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-border-dark/50 cursor-pointer transition-colors group">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-white">psychology</span>
                <p className="text-slate-400 group-hover:text-white text-sm font-medium leading-normal">AI Model Settings</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-t border-border-dark pt-4">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-border-dark/50 cursor-pointer transition-colors group">
              <span className="material-symbols-outlined text-slate-400 group-hover:text-white">settings</span>
              <p className="text-slate-400 group-hover:text-white text-sm font-medium leading-normal">Configuración</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-border-dark/50 cursor-pointer transition-colors group">
              <span className="material-symbols-outlined text-slate-400 group-hover:text-white">logout</span>
              <p className="text-slate-400 group-hover:text-white text-sm font-medium leading-normal">Cerrar Sesión</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col h-full overflow-hidden bg-background-dark w-full">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-border-dark px-4 md:px-8 py-4 shrink-0 bg-background-dark/95 backdrop-blur z-10 gap-4 md:gap-0">
            <div className="flex items-center gap-3">
              <button 
                className="lg:hidden text-slate-400 hover:text-white flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <h2 className="text-white text-lg md:text-xl font-bold leading-tight tracking-tight">Quantum Shield Dashboard</h2>
                  <span className="text-primary text-[10px] font-mono py-0.5 px-2 bg-primary/10 rounded border border-primary/20 hidden sm:inline-block">v2026.4.0</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  <p className="text-slate-400 text-xs font-medium">Expert Lead: <span className="text-white">Jonathan Jimenez Escobar</span></p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <div className="relative w-full md:w-64 shrink-0">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input 
                  className="bg-surface-dark border border-border-dark text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 placeholder-slate-500" 
                  placeholder="Buscar logs, IPs, or domains..." 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="hidden md:block h-6 w-px bg-border-dark shrink-0"></div>
              <div className="flex items-center gap-3 shrink-0">
                <button 
                  onClick={handleUpdate}
                  disabled={isUpdating}
                  className="flex items-center justify-center gap-2 rounded-lg h-10 px-3 md:px-4 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold shadow-lg shadow-primary/20 disabled:opacity-50 whitespace-nowrap"
                >
                  <span className={`material-symbols-outlined text-[18px] ${isUpdating ? 'animate-spin' : ''}`}>update</span>
                  <span className="hidden sm:inline">{isUpdating ? 'Updating...' : 'Check for Updates'}</span>
                </button>
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="h-10 w-10 shrink-0 rounded-full bg-border-dark flex items-center justify-center text-slate-400 hover:text-white transition-colors relative"
                >
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-background-dark"></span>
                </button>
                
                {showNotifications && (
                  <div className="absolute top-12 right-0 md:right-12 w-72 md:w-80 bg-surface-dark border border-border-dark rounded-xl shadow-2xl z-50 overflow-hidden">
                    <div className="p-4 border-b border-border-dark flex justify-between items-center">
                      <h3 className="text-white font-bold">Notifications</h3>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">4 New</span>
                    </div>
                    <div className="max-h-96 overflow-y-auto custom-scrollbar">
                      {alerts.map(alert => (
                        <div key={alert.id} className="p-4 border-b border-border-dark hover:bg-border-dark/30 transition-colors cursor-pointer">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-sm font-medium text-white truncate pr-2">{alert.domain}</span>
                            <span className="text-xs text-slate-500 shrink-0">{alert.time}</span>
                          </div>
                          <p className="text-xs text-slate-400">{alert.reason}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 text-center border-t border-border-dark">
                      <button className="text-sm text-primary hover:text-primary/80 font-medium">Mark all as read</button>
                    </div>
                  </div>
                )}

                <div className="h-10 w-10 shrink-0 rounded-full bg-cover bg-center border border-border-dark" data-alt="Professional user profile picture" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
              </div>
            </div>
          </header>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
            {/* KPI Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Health Score Gauge */}
              <div className="col-span-1 lg:col-span-1 bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Security Health</p>
                  <span className="material-symbols-outlined text-green-500">health_and_safety</span>
                </div>
                <div className="flex items-end gap-2">
                  <h3 className="text-5xl font-bold text-white tracking-tighter">98<span className="text-2xl text-slate-500 font-medium">/100</span></h3>
                </div>
                <div className="w-full bg-border-dark rounded-full h-2 mt-4">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
                <p className="text-green-500 text-sm font-medium mt-3 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  +2% from last week
                </p>
              </div>

              {/* Active Protections */}
              <div className="bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Active Modules</p>
                  <span className="material-symbols-outlined text-primary">shield</span>
                </div>
                <div className="flex items-end gap-2">
                  <h3 className="text-3xl font-bold text-white">24/7</h3>
                </div>
                <p className="text-slate-400 text-sm mt-2">Autonomous neural scanning active across all mesh nodes.</p>
              </div>

              {/* Threats Blocked */}
              <div className="bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Threats Blocked</p>
                  <span className="material-symbols-outlined text-red-500">block</span>
                </div>
                <div className="flex items-end gap-2">
                  <h3 className="text-3xl font-bold text-white">145</h3>
                </div>
                <p className="text-green-500 text-sm font-medium mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  +12% increase (30d)
                </p>
              </div>

              {/* Trusted Sites */}
              <div className="bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Trusted Sites</p>
                  <span className="material-symbols-outlined text-blue-400">verified</span>
                </div>
                <div className="flex items-end gap-2">
                  <h3 className="text-3xl font-bold text-white">1,204</h3>
                </div>
                <p className="text-slate-400 text-sm mt-2">Zero-trust verified domains in organization registry.</p>
              </div>
            </div>

            {/* Main Grid: Chart & Table */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
              {/* Chart Section */}
              <div className="xl:col-span-2 bg-surface-dark border border-border-dark rounded-xl p-4 md:p-6 flex flex-col">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4 sm:gap-0">
                  <div>
                    <h3 className="text-white text-lg font-bold">Threat Activity</h3>
                    <p className="text-slate-400 text-sm">Neutralized attempts over the last 30 days</p>
                  </div>
                  <div className="flex bg-border-dark rounded-lg p-1 overflow-x-auto shrink-0">
                    {['30 Days', '7 Days', '24 Hours'].map(range => (
                      <button 
                        key={range}
                        onClick={() => setTimeRange(range)}
                        className={`px-3 py-1 text-xs font-medium rounded shadow-sm transition-colors whitespace-nowrap ${timeRange === range ? 'text-white bg-primary' : 'text-slate-400 hover:text-white'}`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex-1 min-h-[300px] w-full relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={filteredChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#135bec" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#135bec" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#282e39" vertical={false} />
                      <XAxis dataKey="date" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1a1d24', borderColor: '#282e39', color: '#f8fafc' }}
                        itemStyle={{ color: '#135bec' }}
                      />
                      <Area type="monotone" dataKey="threats" stroke="#135bec" strokeWidth={3} fillOpacity={1} fill="url(#colorThreats)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Recent Alerts / Feed */}
              <div className="xl:col-span-1 bg-surface-dark border border-border-dark rounded-xl flex flex-col overflow-hidden">
                <div className="p-6 border-b border-border-dark flex justify-between items-center bg-surface-dark">
                  <h3 className="text-white text-lg font-bold">Live Neural Alerts</h3>
                  <Link className="text-primary text-sm font-medium hover:text-primary/80" to='/panel'>Ver Todo</Link>
                </div>
                <div className="flex-1 overflow-y-auto p-0">
                  {alerts.map(alert => (
                    <div key={alert.id} className="flex items-start gap-4 p-4 border-b border-border-dark hover:bg-border-dark/30 transition-colors">
                      <div className={`h-10 w-10 rounded bg-${alert.color}-500/10 flex items-center justify-center shrink-0 text-${alert.color}-500`}>
                        <span className="material-symbols-outlined">{alert.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h4 className="text-white text-sm font-bold truncate">{alert.domain}</h4>
                          <span className="text-xs text-slate-500 whitespace-nowrap">{alert.time}</span>
                        </div>
                        <p className="text-slate-400 text-xs mt-1">Blocked due to <span className={`text-${alert.color}-400 font-medium`}>{alert.reason}</span></p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`bg-${alert.color}-500/20 text-${alert.color}-400 text-[10px] font-bold px-2 py-0.5 rounded`}>{alert.risk}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Table Section */}
            <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden">
              <div className="p-6 border-b border-border-dark flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-white text-lg font-bold">Archive Threat Log</h3>
                <div className="flex gap-2">
                  <div className="relative">
                    <select 
                      className="appearance-none bg-background-dark border border-border-dark text-slate-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 pr-8"
                      value={threatFilter}
                      onChange={(e) => setThreatFilter(e.target.value)}
                    >
                      <option>All Threats</option>
                      <option>Phishing</option>
                      <option>Brand Impersonation</option>
                      <option>Credential Theft</option>
                      <option>Malware</option>
                      <option>Social Engineering</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                      <span className="material-symbols-outlined text-sm">expand_more</span>
                    </div>
                  </div>
                  <button className="bg-border-dark hover:bg-border-dark/80 text-white text-sm font-medium rounded-lg px-4 py-2 flex items-center gap-2 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Export Ledger
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-400">
                  <thead className="text-xs text-slate-500 uppercase bg-background-dark/50 border-b border-border-dark">
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
                    {filteredThreats.length > 0 ? (
                      filteredThreats.map(threat => (
                        <tr key={threat.id} className="bg-surface-dark border-b border-border-dark hover:bg-background-dark/50 transition-colors">
                          <td className="px-6 py-4 font-medium text-white flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white">{threat.initial}</div>
                            <span>{threat.target}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-1.5 py-1 px-2 rounded-full text-xs font-medium bg-${threat.color}-500/10 text-${threat.color}-400 border border-${threat.color}-500/20`}>
                              {threat.type}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="w-full bg-border-dark rounded-full h-1.5 w-24 mb-1">
                              <div className={`bg-${threat.color}-500 h-1.5 rounded-full`} style={{ width: `${threat.score}%` }}></div>
                            </div>
                            <span className="text-xs">{threat.score}/100</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-slate-300 flex items-center gap-1">
                              <span className="material-symbols-outlined text-red-500 text-[16px]">block</span>
                              {threat.action}
                            </span>
                          </td>
                          <td className="px-6 py-4">{threat.date}</td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-slate-500 hover:text-white transition-colors">
                              <span className="material-symbols-outlined">more_vert</span>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                          No threats found matching your criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-slate-500">
              <p>creada en 2026 Jonathan Jimenez Escobar System v6.8.4-Quantum</p>
              <p className="mt-1 opacity-50">Authorized Expert Lead: Jonathan Jimenez Escobar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
