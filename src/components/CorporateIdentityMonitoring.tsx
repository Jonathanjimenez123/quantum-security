import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface CorporateIdentityMonitoringProps {
  onBack?: () => void;
}

export default function CorporateIdentityMonitoring({ onBack }: CorporateIdentityMonitoringProps) {
  return (
    <div className="bg-[#f5f7f8] dark:bg-[#111618] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#283339] bg-[#1b2327]/95 backdrop-blur px-6 py-3 w-full">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-white">
            {onBack && (
              <button onClick={onBack} className="mr-2 flex items-center justify-center text-[#9cb0ba] hover:text-white transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
            )}
            <div className="size-8 flex items-center justify-center bg-[#0b95da]/20 rounded-lg text-[#0b95da]">
              <span className="material-symbols-outlined">shield_lock</span>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-tight">BrandGuard AI</h2>
          </div>
          <div className="hidden lg:flex w-full max-w-sm">
            <div className="relative w-full text-[#9cb0ba] focus-within:text-white">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input className="block w-full rounded-lg border-none bg-[#111618] py-2 pl-10 pr-4 text-sm text-white placeholder-[#9cb0ba] focus:ring-1 focus:ring-[#0b95da]" placeholder="Buscar domains, threats, IPs..." type="text" />
            </div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link className="text-white text-sm font-medium hover:text-[#0b95da] transition-colors" to='/panel'>Panel de Control</Link>
          <Link className="text-[#0b95da] text-sm font-medium border-b-2 border-[#0b95da] pb-0.5" to='/panel'>Identity Monitoring</Link>
          <Link className="text-[#9cb0ba] hover:text-white text-sm font-medium transition-colors" to='/informes'>Threat Intel</Link>
          <Link className="text-[#9cb0ba] hover:text-white text-sm font-medium transition-colors" to='/panel'>Takedowns</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 rounded-lg bg-[#0b95da] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-[#0b95da]/20 hover:bg-[#0870a3] transition-colors">
            <span className="material-symbols-outlined text-[18px]">add_alert</span>
            <span>Report Threat</span>
          </button>
          <button className="flex items-center justify-center size-9 rounded-lg bg-[#111618] text-[#9cb0ba] hover:text-white hover:bg-[#283339] transition-colors relative">
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-[#111618]"></span>
            <span className="material-symbols-outlined text-[20px]">notifications</span>
          </button>
          <button className="flex items-center justify-center size-9 rounded-lg bg-[#111618] text-[#9cb0ba] hover:text-white hover:bg-[#283339] transition-colors">
            <span className="material-symbols-outlined text-[20px]">settings</span>
          </button>
          <div className="ml-2 size-9 rounded-full bg-gradient-to-br from-[#0b95da] to-blue-600 p-[2px] cursor-pointer" data-alt="User profile avatar gradient">
            <div className="size-full rounded-full bg-[#1b2327] flex items-center justify-center overflow-hidden">
              <img alt="Profile" className="size-full object-cover opacity-90 hover:opacity-100 transition-opacity" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">Corporate Identity Monitoring</h1>
            <p className="text-[#9cb0ba] text-base max-w-2xl">Real-time tracking of impersonation attempts, phishing domains, and unauthorized asset usage across the clear, deep, and dark web.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#9cb0ba] bg-[#1b2327] px-3 py-1.5 rounded-lg border border-[#283339]">
            <span className="material-symbols-outlined text-green-500 text-[16px]">check_circle</span>
            <span>System Operational</span>
            <span className="mx-1 opacity-20">|</span>
            <span>Last scan: 2 mins ago</span>
          </div>
        </div>
        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Active Threats */}
          <div className="group p-5 rounded-xl bg-[#1b2327] border border-[#283339] hover:border-[#0b95da]/50 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-4xl text-[#0b95da]">warning</span>
            </div>
            <p className="text-[#9cb0ba] text-sm font-medium mb-1">Active Impersonations</p>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold text-white">14</span>
              <div className="flex items-center text-xs font-bold text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded mb-1">
                <span className="material-symbols-outlined text-[14px] mr-0.5">trending_up</span>
                +3 new
              </div>
            </div>
            <div className="w-full bg-[#111618] h-1 mt-4 rounded-full overflow-hidden">
              <div className="bg-red-500 h-full w-[65%]"></div>
            </div>
          </div>
          {/* Takedowns */}
          <div className="group p-5 rounded-xl bg-[#1b2327] border border-[#283339] hover:border-[#0b95da]/50 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-4xl text-[#0b95da]">gavel</span>
            </div>
            <p className="text-[#9cb0ba] text-sm font-medium mb-1">Takedowns In Progress</p>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold text-white">8</span>
              <div className="flex items-center text-xs font-bold text-[#0b95da] bg-[#0b95da]/10 px-1.5 py-0.5 rounded mb-1">
                <span className="material-symbols-outlined text-[14px] mr-0.5">hourglass_top</span>
                Avg 24h
              </div>
            </div>
            <div className="w-full bg-[#111618] h-1 mt-4 rounded-full overflow-hidden">
              <div className="bg-[#0b95da] h-full w-[40%]"></div>
            </div>
          </div>
          {/* Assets Monitored */}
          <div className="group p-5 rounded-xl bg-[#1b2327] border border-[#283339] hover:border-[#0b95da]/50 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-4xl text-[#0b95da]">visibility</span>
            </div>
            <p className="text-[#9cb0ba] text-sm font-medium mb-1">Assets Monitored</p>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold text-white">52</span>
              <div className="flex items-center text-xs font-bold text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded mb-1">
                <span className="material-symbols-outlined text-[14px] mr-0.5">verified_user</span>
                100% Secure
              </div>
            </div>
            <div className="w-full bg-[#111618] h-1 mt-4 rounded-full overflow-hidden">
              <div className="bg-green-500 h-full w-full"></div>
            </div>
          </div>
          {/* Protected Domains */}
          <div className="group p-5 rounded-xl bg-[#1b2327] border border-[#283339] hover:border-[#0b95da]/50 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-4xl text-[#0b95da]">domain_verification</span>
            </div>
            <p className="text-[#9cb0ba] text-sm font-medium mb-1">Protected Domains</p>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold text-white">12</span>
              <span className="text-xs text-[#9cb0ba] mb-1">across 4 registrars</span>
            </div>
            <div className="w-full bg-[#111618] h-1 mt-4 rounded-full overflow-hidden">
              <div className="bg-purple-500 h-full w-[85%]"></div>
            </div>
          </div>
        </div>
        {/* Split View: Map & Status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Global Heatmap */}
          <div className="lg:col-span-2 rounded-xl border border-[#283339] bg-[#1b2327] flex flex-col overflow-hidden min-h-[400px]">
            <div className="p-5 border-b border-[#283339] flex justify-between items-center">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0b95da]">public</span>
                Unauthorized Asset Usage Map
              </h3>
              <div className="flex gap-2">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-xs text-[#9cb0ba] font-medium">Live Detection</span>
              </div>
            </div>
            <div className="relative flex-1 bg-[#111618] w-full h-full min-h-[300px]" data-alt="World map showing unauthorized asset usage hotspots" style={{ backgroundImage: 'radial-gradient(#283339 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
              {/* Abstract representation of a map */}
              <div className="absolute inset-0 opacity-30" style={{ background: 'url("https://lh3.googleusercontent.com/aida/ADBb0ugdeyEUGGtf0Hf8MpAjVRFEDeIHNFR2Z8yjahzqj9-DDuCp40RJoGmFjcCcxMyqVjBxE9PU_HtIPnO_0QrmK0z38sK1dfMe73EaSv0wNbooZUrIjUz6KP5yiZMAPn0sZX7c5atgzUu1TzExQSqyKOe0JHEPseeOkZW-Z6jPWpnZWa1Xf2xXgvIRo_hKQoEp5jK1TesZOMJVWkR-4tJYl-7iPQQCbQcR8b-bC-WgAITB0nzeE8pnoCgwSgcJyUTYEoTRRLlrOhZn") no-repeat center center', backgroundSize: 'contain', filter: 'invert(1)' }}></div>
              {/* Hotspots */}
              <div className="absolute top-[30%] left-[25%] group cursor-pointer" data-location="North America">
                <div className="relative flex items-center justify-center">
                  <div className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-red-500/40"></div>
                  <div className="relative inline-flex rounded-full h-3 w-3 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                  <div className="absolute left-4 top-4 bg-[#1b2327] border border-[#283339] p-2 rounded shadow-xl hidden group-hover:block z-10 w-48">
                    <p className="text-xs text-white font-bold">New York, USA</p>
                    <p className="text-[10px] text-[#9cb0ba]">3 phishing kits detected</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-[25%] right-[25%] group cursor-pointer" data-location="Eastern Europe">
                <div className="relative flex items-center justify-center">
                  <div className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-orange-500/40"></div>
                  <div className="relative inline-flex rounded-full h-4 w-4 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
                  <div className="absolute left-4 top-4 bg-[#1b2327] border border-[#283339] p-2 rounded shadow-xl hidden group-hover:block z-10 w-48">
                    <p className="text-xs text-white font-bold">Moscow, RU</p>
                    <p className="text-[10px] text-[#9cb0ba]">High volume WHOIS queries</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[30%] right-[15%] group cursor-pointer" data-location="Southeast Asia">
                <div className="relative flex items-center justify-center">
                  <div className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-yellow-500/40"></div>
                  <div className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Takedown Status Panel */}
          <div className="rounded-xl border border-[#283339] bg-[#1b2327] flex flex-col h-full">
            <div className="p-5 border-b border-[#283339]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0b95da]">gavel</span>
                Takedown Status
              </h3>
            </div>
            <div className="p-5 flex flex-col gap-4 flex-1 overflow-y-auto max-h-[400px]">
              {/* Item 1 */}
              <div className="flex gap-3 items-start">
                <div className="flex flex-col items-center gap-1 mt-1">
                  <div className="size-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                  <div className="w-px h-full bg-[#283339] min-h-[40px]"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-bold text-white">login-verify-update.com</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 border border-green-500/20">SUCCESS</span>
                  </div>
                  <p className="text-xs text-[#9cb0ba]">Domain suspended by registrar. Content removed.</p>
                  <p className="text-[10px] text-[#9cb0ba] mt-1">Today, 10:30 AM</p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex gap-3 items-start">
                <div className="flex flex-col items-center gap-1 mt-1">
                  <div className="size-2.5 rounded-full bg-yellow-500 animate-pulse"></div>
                  <div className="w-px h-full bg-[#283339] min-h-[40px]"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-bold text-white">secure-portal-app.net</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">PENDING</span>
                  </div>
                  <p className="text-xs text-[#9cb0ba]">Legal notice sent to hosting provider. Awaiting response.</p>
                  <p className="text-[10px] text-[#9cb0ba] mt-1">Yesterday, 14:15 PM</p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex gap-3 items-start">
                <div className="flex flex-col items-center gap-1 mt-1">
                  <div className="size-2.5 rounded-full bg-blue-500"></div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-bold text-white">account-support-live.org</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">INITIATED</span>
                  </div>
                  <p className="text-xs text-[#9cb0ba]">Evidence package generated. API submission queued.</p>
                  <p className="text-[10px] text-[#9cb0ba] mt-1">Oct 24, 2026</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-[#283339] bg-[#111618]/50 rounded-b-xl">
              <button className="w-full py-2 text-sm text-[#0b95da] font-medium hover:text-white transition-colors flex items-center justify-center gap-1">
                View All Requests <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        {/* Threats Table Section */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 px-1">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-red-500">error</span>
              Impersonation Threats
            </h2>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#283339] bg-[#1b2327] text-sm text-[#9cb0ba] hover:text-white hover:border-[#9cb0ba] transition-colors">
                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                Filter
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#283339] bg-[#1b2327] text-sm text-[#9cb0ba] hover:text-white hover:border-[#9cb0ba] transition-colors">
                <span className="material-symbols-outlined text-[18px]">download</span>
                Export
              </button>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#283339] bg-[#1b2327] shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#283339] bg-[#1b2327]/50">
                    <th className="p-4 text-xs font-semibold uppercase tracking-wider text-[#9cb0ba] w-[30%]">Detected Domain / URL</th>
                    <th className="p-4 text-xs font-semibold uppercase tracking-wider text-[#9cb0ba]">Similarity</th>
                    <th className="p-4 text-xs font-semibold uppercase tracking-wider text-[#9cb0ba]">Risk Level</th>
                    <th className="p-4 text-xs font-semibold uppercase tracking-wider text-[#9cb0ba]">DNS / Hosting</th>
                    <th className="p-4 text-xs font-semibold uppercase tracking-wider text-[#9cb0ba] text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#283339]">
                  {/* Row 1 */}
                  <tr className="group hover:bg-[#111618]/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded bg-white p-0.5 shrink-0 overflow-hidden border border-[#283339]">
                          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-400 font-bold" data-alt="Screenshot of phishing site">
                            <span className="material-symbols-outlined">image</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-white group-hover:text-[#0b95da] transition-colors cursor-pointer">secure-login-company.com</p>
                          <p className="text-xs text-[#9cb0ba]">Detected: Today, 09:42 AM</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-[#111618] rounded-full h-1.5 overflow-hidden">
                          <div className="bg-red-500 h-full w-[98%]"></div>
                        </div>
                        <span className="text-sm font-bold text-red-400">98%</span>
                      </div>
                      <p className="text-[10px] text-[#9cb0ba] mt-0.5">Exact Login Match</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-400/20">
                        CRITICAL
                      </span>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-white">Cloudflare, Inc.</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="material-symbols-outlined text-[12px] text-[#9cb0ba]">flag</span>
                        <p className="text-xs text-[#9cb0ba]">US (United States)</p>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <button className="inline-flex items-center gap-1.5 rounded-lg bg-[#0b95da] px-3 py-1.5 text-xs font-bold text-white hover:bg-[#0870a3] transition-colors shadow-lg shadow-[#0b95da]/20">
                        <span className="material-symbols-outlined text-[14px]">bolt</span>
                        Takedown
                      </button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="group hover:bg-[#111618]/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded bg-white p-0.5 shrink-0 overflow-hidden border border-[#283339]">
                          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-400 font-bold" data-alt="Screenshot of phishing site">
                            <span className="material-symbols-outlined">image</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-white group-hover:text-[#0b95da] transition-colors cursor-pointer">support-portal-verify.net</p>
                          <p className="text-xs text-[#9cb0ba]">Detected: Yesterday, 14:15 PM</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-[#111618] rounded-full h-1.5 overflow-hidden">
                          <div className="bg-orange-500 h-full w-[85%]"></div>
                        </div>
                        <span className="text-sm font-bold text-orange-400">85%</span>
                      </div>
                      <p className="text-[10px] text-[#9cb0ba] mt-0.5">Logo Usage</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 rounded-md bg-orange-400/10 px-2 py-1 text-xs font-medium text-orange-400 ring-1 ring-inset ring-orange-400/20">
                        HIGH
                      </span>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-white">NameCheap, Inc.</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="material-symbols-outlined text-[12px] text-[#9cb0ba]">flag</span>
                        <p className="text-xs text-[#9cb0ba]">PA (Panama)</p>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="inline-flex items-center justify-center size-8 rounded-lg bg-[#111618] border border-[#283339] text-[#9cb0ba] hover:text-white hover:border-[#9cb0ba] transition-colors">
                          <span className="material-symbols-outlined text-[16px]">visibility</span>
                        </button>
                        <button className="inline-flex items-center gap-1.5 rounded-lg bg-[#1b2327] border border-[#283339] px-3 py-1.5 text-xs font-bold text-white hover:bg-[#111618] transition-colors">
                          Review
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="group hover:bg-[#111618]/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded bg-white p-0.5 shrink-0 overflow-hidden border border-[#283339]">
                          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-400 font-bold" data-alt="Screenshot of phishing site">
                            <span className="material-symbols-outlined">image</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-white group-hover:text-[#0b95da] transition-colors cursor-pointer">promo-limited-offer.biz</p>
                          <p className="text-xs text-[#9cb0ba]">Detected: Oct 23, 2026</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-[#111618] rounded-full h-1.5 overflow-hidden">
                          <div className="bg-yellow-500 h-full w-[45%]"></div>
                        </div>
                        <span className="text-sm font-bold text-yellow-400">45%</span>
                      </div>
                      <p className="text-[10px] text-[#9cb0ba] mt-0.5">Text Content</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-400 ring-1 ring-inset ring-yellow-400/20">
                        MEDIUM
                      </span>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-white">GoDaddy.com, LLC</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="material-symbols-outlined text-[12px] text-[#9cb0ba]">flag</span>
                        <p className="text-xs text-[#9cb0ba]">US (United States)</p>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="inline-flex items-center justify-center size-8 rounded-lg bg-[#111618] border border-[#283339] text-[#9cb0ba] hover:text-white hover:border-[#9cb0ba] transition-colors">
                          <span className="material-symbols-outlined text-[16px]">visibility</span>
                        </button>
                        <button className="inline-flex items-center gap-1.5 rounded-lg bg-[#1b2327] border border-[#283339] px-3 py-1.5 text-xs font-bold text-white hover:bg-[#111618] transition-colors">
                          Monitor
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-[#283339] px-4 py-3 bg-[#1b2327]/50">
              <div className="text-xs text-[#9cb0ba]">
                Showing <span className="font-medium text-white">1</span> to <span className="font-medium text-white">3</span> of <span className="font-medium text-white">14</span> results
              </div>
              <div className="flex gap-2">
                <button className="rounded-lg border border-[#283339] bg-[#111618] px-3 py-1 text-xs font-medium text-[#9cb0ba] hover:bg-[#283339] hover:text-white disabled:opacity-50">Anterior</button>
                <button className="rounded-lg border border-[#283339] bg-[#111618] px-3 py-1 text-xs font-medium text-[#9cb0ba] hover:bg-[#283339] hover:text-white">Siguiente</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
