import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface AccessRequestApprovalProps {
  onBack: () => void;
}

export default function AccessRequestApproval({ onBack }: AccessRequestApprovalProps) {
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] font-['Inter',sans-serif] text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden min-h-screen">
      <style>{`
        /* Custom Scrollbar for cleaner look in dark mode */
        .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #101922; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #2b3644; 
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #3b4754; 
        }
      `}</style>
      <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a232d] px-6 py-3 sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100 cursor-pointer" onClick={onBack}>
              <div className="size-8 bg-[#137fec]/20 rounded-lg flex items-center justify-center text-[#137fec]">
                <span className="material-symbols-outlined text-2xl">shield_lock</span>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Security Shield Admin</h2>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              <Link className="text-slate-500 dark:text-slate-400 hover:text-[#137fec] dark:hover:text-[#137fec] px-3 py-2 rounded-lg text-sm font-medium leading-normal transition-colors" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
              <Link className="bg-[#137fec]/10 text-[#137fec] px-3 py-2 rounded-lg text-sm font-medium leading-normal" to='/panel'>Access Requests</Link>
              <Link className="text-slate-500 dark:text-slate-400 hover:text-[#137fec] dark:hover:text-[#137fec] px-3 py-2 rounded-lg text-sm font-medium leading-normal transition-colors" to='/panel'>Audit Log</Link>
              <Link className="text-slate-500 dark:text-slate-400 hover:text-[#137fec] dark:hover:text-[#137fec] px-3 py-2 rounded-lg text-sm font-medium leading-normal transition-colors" to='/ajustes'>Configuración</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center w-64 h-10 bg-slate-100 dark:bg-[#2b3644] rounded-lg border border-transparent focus-within:border-[#137fec]/50 transition-colors">
              <div className="pl-3 text-slate-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input className="w-full bg-transparent border-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0 px-2" placeholder="Buscar requests..." />
            </div>
            <button className="relative p-2 text-slate-500 dark:text-slate-400 hover:text-[#137fec] dark:hover:text-[#137fec] transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white dark:border-[#1a232d]"></span>
            </button>
            <div className="h-9 w-9 bg-center bg-no-repeat bg-cover rounded-full ring-2 ring-slate-200 dark:ring-slate-700" data-alt="User Avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
          </div>
        </header>

        <div className="flex-1 flex flex-col md:flex-row max-w-[1600px] w-full mx-auto p-4 md:p-8 gap-6">
          {/* Left Column: Submit Request Form */}
          <section className="flex flex-col w-full md:w-1/3 min-w-[320px] gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Access Management</h1>
              <p className="text-slate-500 dark:text-slate-400">Request permission for restricted resources or review team requests.</p>
            </div>

            {/* Tab Switcher */}
            <div className="flex p-1 bg-slate-200 dark:bg-slate-800 rounded-lg w-full">
              <button className="flex-1 py-2 px-4 rounded shadow bg-white dark:bg-[#2b3644] text-[#137fec] font-bold text-sm transition-all text-center">
                New Request
              </button>
              <button className="flex-1 py-2 px-4 rounded text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 font-medium text-sm transition-all text-center">
                My History
              </button>
            </div>

            {/* Request Form Card */}
            <div className="bg-white dark:bg-[#1a232d] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex-1">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#137fec]">add_moderator</span>
                  Submit New Request
                </h3>
              </div>
              <div className="p-6 flex flex-col gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Target Resource</span>
                  <div className="relative">
                    <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-sm focus:border-[#137fec] focus:ring-1 focus:ring-[#137fec] outline-none transition-all placeholder:text-slate-400 dark:text-white pl-10" placeholder="e.g. restricted-site.com or Admin Role" />
                    <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-[20px]">link</span>
                  </div>
                  <span className="text-xs text-slate-500">Enter the URL or the internal role ID you need access to.</span>
                </label>

                <div className="grid grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Duration</span>
                    <div className="relative">
                      <select className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-sm focus:border-[#137fec] focus:ring-1 focus:ring-[#137fec] outline-none transition-all dark:text-white">
                        <option>1 Hour</option>
                        <option>4 Hours</option>
                        <option>24 Hours</option>
                        <option>Custom...</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-3 text-slate-400 pointer-events-none text-[20px]">expand_more</span>
                    </div>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Urgency</span>
                    <div className="relative">
                      <select className="w-full appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-sm focus:border-[#137fec] focus:ring-1 focus:ring-[#137fec] outline-none transition-all dark:text-white">
                        <option>Normal</option>
                        <option>High</option>
                        <option>Critical</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-3 text-slate-400 pointer-events-none text-[20px]">expand_more</span>
                    </div>
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Justification</span>
                  <textarea className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-sm focus:border-[#137fec] focus:ring-1 focus:ring-[#137fec] outline-none transition-all placeholder:text-slate-400 min-h-[120px] resize-none dark:text-white" placeholder="Please describe why you need elevated permissions..."></textarea>
                </label>

                <div className="pt-2">
                  <button className="w-full bg-[#137fec] hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-lg shadow-lg shadow-[#137fec]/20 transition-all flex items-center justify-center gap-2">
                    <span>Submit Request</span>
                    <span className="material-symbols-outlined text-[20px]">send</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: Admin Approval Queue */}
          <section className="flex flex-col flex-1 w-full gap-4">
            {/* Queue Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mt-2 md:mt-0">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Approval Queue</h2>
                <span className="bg-[#137fec] text-white text-xs font-bold px-2 py-1 rounded-full">3 Pending</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors">
                  <span className="material-symbols-outlined text-[18px]">filter_list</span>
                  Filter
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors">
                  <span className="material-symbols-outlined text-[18px]">sort</span>
                  Sort
                </button>
              </div>
            </div>

            {/* Queue Items Container */}
            <div className="flex flex-col gap-4">
              {/* Item 1: Pending */}
              <div className="bg-white dark:bg-[#1a232d] rounded-xl border-l-4 border-l-yellow-500 border-y border-r border-slate-200 dark:border-slate-800 shadow-sm p-5 flex flex-col lg:flex-row gap-6 relative group hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                {/* User & Request Info */}
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-cover bg-center ring-2 ring-slate-100 dark:ring-slate-700" data-alt="Requester Avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white leading-tight">Sarah Jenkins</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">DevOps Engineer • Marketing Dept</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-2 py-1 rounded text-xs font-bold border border-yellow-500/20">
                      <span className="material-symbols-outlined text-[14px]">hourglass_top</span>
                      Pending
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-sm">
                    <div className="flex flex-col">
                      <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Requested Access</span>
                      <span className="font-medium text-[#137fec] break-all">analytics-dashboard.internal.net</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Duration</span>
                      <span className="font-medium text-slate-700 dark:text-slate-200">24 Hours</span>
                    </div>
                    <div className="flex flex-col sm:col-span-2 mt-2">
                      <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Justification</span>
                      <p className="text-slate-700 dark:text-slate-300 mt-1 italic border-l-2 border-slate-200 dark:border-slate-700 pl-3">"Need to verify the Q3 marketing campaign data integrity before the stakeholder meeting tomorrow morning."</p>
                    </div>
                  </div>
                </div>

                {/* Risk & Actions */}
                <div className="flex flex-col w-full lg:w-72 gap-4 lg:border-l lg:border-slate-100 dark:lg:border-slate-800 lg:pl-6">
                  {/* AI Risk Score */}
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-500 uppercase">AI Risk Assessment</span>
                      <span className="text-xs font-bold text-green-500">Safe</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: '15%' }}></div>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1.5 leading-tight">Domain is internal and verified. No phishing patterns detected.</p>
                  </div>
                  {/* Actions */}
                  <div className="flex flex-col gap-2 mt-auto">
                    <div className="flex gap-2">
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-2 rounded shadow-sm transition-colors flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">check</span> Approve
                      </button>
                      <button className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 rounded shadow-sm transition-colors flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">block</span> Deny
                      </button>
                    </div>
                    <input className="w-full bg-slate-50 dark:bg-slate-900 border border-transparent focus:border-[#137fec] rounded px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 focus:outline-none" placeholder="Add comment (optional)..." />
                  </div>
                </div>
              </div>

              {/* Item 2: Pending (High Risk) */}
              <div className="bg-white dark:bg-[#1a232d] rounded-xl border-l-4 border-l-red-500 border-y border-r border-slate-200 dark:border-slate-800 shadow-sm p-5 flex flex-col lg:flex-row gap-6 relative group hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-cover bg-center ring-2 ring-slate-100 dark:ring-slate-700" data-alt="Requester Avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white leading-tight">Mike Ross</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Junior Analyst • Sales</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-2 py-1 rounded text-xs font-bold border border-yellow-500/20">
                      <span className="material-symbols-outlined text-[14px]">hourglass_top</span>
                      Pending
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-sm">
                    <div className="flex flex-col">
                      <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Requested Access</span>
                      <span className="font-medium text-[#137fec] break-all">external-vendor-portal.com</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Duration</span>
                      <span className="font-medium text-slate-700 dark:text-slate-200">4 Hours</span>
                    </div>
                    <div className="flex flex-col sm:col-span-2 mt-2">
                      <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Justification</span>
                      <p className="text-slate-700 dark:text-slate-300 mt-1 italic border-l-2 border-slate-200 dark:border-slate-700 pl-3">"Need to download invoices for the quarter close."</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full lg:w-72 gap-4 lg:border-l lg:border-slate-100 dark:lg:border-slate-800 lg:pl-6">
                  {/* AI Risk Score (High) */}
                  <div className="bg-red-50 dark:bg-red-900/10 rounded-lg p-3 border border-red-200 dark:border-red-900/30">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-500 uppercase">AI Risk Assessment</span>
                      <span className="text-xs font-bold text-red-500">Critical</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <p className="text-[10px] text-red-600 dark:text-red-400 mt-1.5 leading-tight font-medium">Domain registered recently. Flagged for potential spoofing.</p>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    <div className="flex gap-2">
                      <button className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-green-600 hover:text-white text-slate-600 dark:text-slate-300 text-sm font-bold py-2 rounded shadow-sm transition-colors flex items-center justify-center gap-1 group/btn">
                        <span className="material-symbols-outlined text-[18px]">check</span> Approve
                      </button>
                      <button className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-red-600 hover:text-white text-slate-600 dark:text-slate-300 text-sm font-bold py-2 rounded shadow-sm transition-colors flex items-center justify-center gap-1 group/btn">
                        <span className="material-symbols-outlined text-[18px]">block</span> Deny
                      </button>
                    </div>
                    <input className="w-full bg-slate-50 dark:bg-slate-900 border border-transparent focus:border-[#137fec] rounded px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 focus:outline-none" placeholder="Add comment (optional)..." />
                  </div>
                </div>
              </div>

              {/* Item 3: Approved (History) */}
              <div className="bg-white dark:bg-[#1a232d] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 flex flex-col lg:flex-row gap-6 opacity-75 hover:opacity-100 transition-opacity">
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-cover bg-center ring-2 ring-slate-100 dark:ring-slate-700" data-alt="Requester Avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white leading-tight">Eleanor Rigby</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Security Lead • IT</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-1 rounded text-xs font-bold border border-green-500/20">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span>
                      Approved
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-sm">
                    <div className="flex flex-col">
                      <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Requested Access</span>
                      <span className="font-medium text-slate-400">admin-console-v2</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Duration</span>
                      <span className="font-medium text-slate-400">1 Hour</span>
                    </div>
                    <div className="flex flex-col sm:col-span-2 mt-2">
                      <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Admin Comment</span>
                      <p className="text-slate-500 dark:text-slate-400 mt-1">"Approved for scheduled maintenance window."</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full lg:w-72 justify-center items-center lg:border-l lg:border-slate-100 dark:lg:border-slate-800 lg:pl-6">
                  <p className="text-xs text-slate-400 text-center">Request processed on<br />Oct 24, 2026 at 14:30 PM</p>
                  <button className="mt-3 text-[#137fec] text-xs font-bold hover:underline">View Details</button>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-slate-500 dark:text-slate-400">Showing 1-3 of 12 requests</span>
              <div className="flex items-center gap-1">
                <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 disabled:opacity-50">
                  <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                </button>
                <button className="px-3 py-1 rounded-lg bg-[#137fec] text-white text-sm font-bold">1</button>
                <button className="px-3 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium">2</button>
                <button className="px-3 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium">3</button>
                <span className="text-slate-400 px-1">...</span>
                <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
