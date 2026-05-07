import { auth } from '../firebase';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface SupportTicketProps {
  onBack: () => void;
}

export default function SupportTicket({ onBack }: SupportTicketProps) {
  const [category, setCategory] = useState('false-positive');
  const [priority, setPriority] = useState('medium');

  return (
    <div className="bg-[#f5f7f8] text-[#111618] font-sans antialiased min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e3e8eb] bg-white px-10 py-3 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-[#111618]">
            <div className="size-8 text-[#0b95da]">
              <span className="material-symbols-outlined text-3xl">shield_lock</span>
            </div>
            <h2 className="text-[#111618] text-lg font-bold leading-tight tracking-[-0.015em]">Security Support</h2>
          </div>
          <div className="hidden lg:flex items-center gap-9">
            <button onClick={onBack} className="text-[#607c8a] hover:text-[#0b95da] transition-colors text-sm font-medium leading-normal">Panel de Control</button>
            <Link className="text-[#111618] text-sm font-medium leading-normal border-b-2 border-[#0b95da] pb-0.5" to='/panel'>My Tickets</Link>
            <Link className="text-[#607c8a] hover:text-[#0b95da] transition-colors text-sm font-medium leading-normal" to='/panel'>Knowledge Base</Link>
            <Link className="text-[#607c8a] hover:text-[#0b95da] transition-colors text-sm font-medium leading-normal" to='/ajustes'>Configuración</Link>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
          <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full ring-1 ring-[#cdd6da] focus-within:ring-[#0b95da] focus-within:ring-2 transition-shadow">
              <div className="text-[#607c8a] flex border-none bg-[#f5f7f8] items-center justify-center pl-3 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111618] focus:outline-none border-none bg-[#f5f7f8] placeholder:text-[#607c8a] px-3 rounded-l-none text-sm font-normal leading-normal" placeholder="Buscar knowledge base..." value="" />
            </div>
          </label>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-[#607c8a] hover:bg-[#e3e8eb] rounded-full transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-[#cdd6da] shadow-sm" data-alt="User profile picture" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-10 py-8 max-w-7xl mx-auto w-full">
        {/* Breadcrumbs & Header */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex flex-wrap gap-2 items-center text-sm">
            <button onClick={onBack} className="text-[#607c8a] hover:text-[#0b95da] transition-colors font-medium">Home</button>
            <span className="text-[#cdd6da] font-medium">/</span>
            <Link className="text-[#607c8a] hover:text-[#0b95da] transition-colors font-medium" to='/centro-ayuda'>Support</Link>
            <span className="text-[#cdd6da] font-medium">/</span>
            <span className="text-[#111618] font-medium">New Ticket</span>
          </div>
          <div className="flex flex-wrap justify-between items-end gap-4 mt-2">
            <div>
              <h1 className="text-[#111618] text-3xl font-black leading-tight tracking-[-0.033em]">Submit a Support Request</h1>
              <p className="text-[#607c8a] mt-2 max-w-2xl">Describe the issue you're experiencing with the Anti-phishing Extension. Our AI-powered system will suggest immediate solutions.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Step 1: Issue Categorization */}
            <section className="bg-white rounded-xl shadow-sm border border-[#e3e8eb] overflow-hidden">
              <div className="px-6 py-4 border-b border-[#e3e8eb] bg-gray-50/50 flex items-center justify-between">
                <h2 className="text-[#111618] text-lg font-bold flex items-center gap-2">
                  <span className="bg-[#0b95da] text-white text-xs rounded-full size-6 flex items-center justify-center font-bold">1</span>
                  Issue Categorization
                </h2>
                <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Selected
                </span>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Option 1 */}
                  <label className="cursor-pointer group">
                    <input 
                      className="peer sr-only" 
                      name="category" 
                      type="radio" 
                      checked={category === 'crash'}
                      onChange={() => setCategory('crash')}
                    />
                    <div className="h-full p-4 rounded-lg border border-[#cdd6da] hover:border-[#0b95da] peer-checked:border-[#0b95da] peer-checked:bg-blue-50/50 transition-all flex flex-col items-center text-center gap-3">
                      <div className="size-10 rounded-full bg-blue-100 text-[#0b95da] flex items-center justify-center group-hover:bg-[#0b95da] group-hover:text-white transition-colors peer-checked:bg-[#0b95da] peer-checked:text-white">
                        <span className="material-symbols-outlined">extension</span>
                      </div>
                      <span className="font-semibold text-sm text-[#111618]">Extension Crash</span>
                    </div>
                  </label>

                  {/* Option 2 */}
                  <label className="cursor-pointer group">
                    <input 
                      className="peer sr-only" 
                      name="category" 
                      type="radio" 
                      checked={category === 'false-positive'}
                      onChange={() => setCategory('false-positive')}
                    />
                    <div className="h-full p-4 rounded-lg border-2 border-[#0b95da] bg-blue-50/50 flex flex-col items-center text-center gap-3">
                      <div className="size-10 rounded-full bg-[#0b95da] text-white flex items-center justify-center">
                        <span className="material-symbols-outlined">gpp_bad</span>
                      </div>
                      <span className="font-semibold text-sm text-[#111618]">False Positive</span>
                    </div>
                  </label>

                  {/* Option 3 */}
                  <label className="cursor-pointer group">
                    <input 
                      className="peer sr-only" 
                      name="category" 
                      type="radio" 
                      checked={category === 'access'}
                      onChange={() => setCategory('access')}
                    />
                    <div className="h-full p-4 rounded-lg border border-[#cdd6da] hover:border-[#0b95da] peer-checked:border-[#0b95da] peer-checked:bg-blue-50/50 transition-all flex flex-col items-center text-center gap-3">
                      <div className="size-10 rounded-full bg-blue-100 text-[#0b95da] flex items-center justify-center group-hover:bg-[#0b95da] group-hover:text-white transition-colors peer-checked:bg-[#0b95da] peer-checked:text-white">
                        <span className="material-symbols-outlined">manage_accounts</span>
                      </div>
                      <span className="font-semibold text-sm text-[#111618]">Account Access</span>
                    </div>
                  </label>
                </div>
              </div>
            </section>

            {/* Step 2: Detailed Information */}
            <section className="bg-white rounded-xl shadow-sm border border-[#e3e8eb] overflow-hidden">
              <div className="px-6 py-4 border-b border-[#e3e8eb] bg-gray-50/50">
                <h2 className="text-[#111618] text-lg font-bold flex items-center gap-2">
                  <span className="bg-[#0b95da] text-white text-xs rounded-full size-6 flex items-center justify-center font-bold">2</span>
                  Detailed Information
                </h2>
              </div>
              <div className="p-6 flex flex-col gap-6">
                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#111618]">Subject</label>
                  <input className="w-full rounded-lg border-[#cdd6da] focus:border-[#0b95da] focus:ring-[#0b95da] text-sm p-2.5" placeholder="e.g. Site blocked incorrectly as phishing" type="text" />
                </div>

                {/* Rich Text Editor (Mock) */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#111618]">Description</label>
                  <div className="border border-[#cdd6da] rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-[#0b95da] focus-within:border-[#0b95da]">
                    <div className="bg-gray-50 border-b border-[#cdd6da] px-3 py-2 flex gap-2">
                      <button className="p-1 hover:bg-[#e3e8eb] rounded text-[#607c8a]"><span className="material-symbols-outlined text-[18px]">format_bold</span></button>
                      <button className="p-1 hover:bg-[#e3e8eb] rounded text-[#607c8a]"><span className="material-symbols-outlined text-[18px]">format_italic</span></button>
                      <button className="p-1 hover:bg-[#e3e8eb] rounded text-[#607c8a]"><span className="material-symbols-outlined text-[18px]">format_list_bulleted</span></button>
                      <button className="p-1 hover:bg-[#e3e8eb] rounded text-[#607c8a]"><span className="material-symbols-outlined text-[18px]">link</span></button>
                    </div>
                    <textarea className="w-full border-none focus:ring-0 p-3 text-sm min-h-[160px] resize-y" placeholder="Please describe the issue in detail..."></textarea>
                  </div>
                </div>

                {/* Auto-Attached Info */}
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#0b95da] mt-0.5">info</span>
                  <div className="text-sm">
                    <p className="font-semibold text-[#111618]">System Information will be automatically attached:</p>
                    <ul className="list-disc list-inside text-[#607c8a] mt-1 space-y-0.5">
                      <li>Browser: Chrome 124.0.6367</li>
                      <li>Extension Version: v2.4.1</li>
                      <li>OS: Windows 11 Pro</li>
                    </ul>
                  </div>
                </div>

                {/* File Upload */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#111618]">Attachments (Screenshots or Logs)</label>
                  <div className="border-2 border-dashed border-[#cdd6da] rounded-lg p-8 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="size-12 rounded-full bg-[#e3e8eb] flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                      <span className="material-symbols-outlined text-[#607c8a] group-hover:text-[#0b95da]">cloud_upload</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-[#0b95da]">Click to upload or drag and drop</p>
                      <p className="text-xs text-[#607c8a] mt-1">SVG, PNG, JPG or GIF (max. 10MB)</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 3: Priority */}
            <section className="bg-white rounded-xl shadow-sm border border-[#e3e8eb] overflow-hidden">
              <div className="px-6 py-4 border-b border-[#e3e8eb] bg-gray-50/50">
                <h2 className="text-[#111618] text-lg font-bold flex items-center gap-2">
                  <span className="bg-[#0b95da] text-white text-xs rounded-full size-6 flex items-center justify-center font-bold">3</span>
                  Priority Level
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  {/* Low */}
                  <label className="cursor-pointer">
                    <input 
                      className="peer sr-only" 
                      name="priority" 
                      type="radio" 
                      checked={priority === 'low'}
                      onChange={() => setPriority('low')}
                    />
                    <div className="px-4 py-3 rounded-lg border border-[#cdd6da] text-center hover:bg-gray-50 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-700 transition-all">
                      <div className="w-full flex justify-center mb-1"><div className="h-1 w-8 bg-green-300 rounded-full"></div></div>
                      <span className="text-sm font-semibold">Low</span>
                    </div>
                  </label>

                  {/* Medium */}
                  <label className="cursor-pointer">
                    <input 
                      className="peer sr-only" 
                      name="priority" 
                      type="radio" 
                      checked={priority === 'medium'}
                      onChange={() => setPriority('medium')}
                    />
                    <div className="px-4 py-3 rounded-lg border-2 border-[#0b95da] text-center bg-blue-50 text-[#0b95da] transition-all shadow-sm">
                      <div className="w-full flex justify-center mb-1"><div className="h-1 w-8 bg-[#0b95da] rounded-full"></div></div>
                      <span className="text-sm font-semibold">Medium</span>
                    </div>
                  </label>

                  {/* High */}
                  <label className="cursor-pointer">
                    <input 
                      className="peer sr-only" 
                      name="priority" 
                      type="radio" 
                      checked={priority === 'high'}
                      onChange={() => setPriority('high')}
                    />
                    <div className="px-4 py-3 rounded-lg border border-[#cdd6da] text-center hover:bg-gray-50 peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:text-orange-700 transition-all">
                      <div className="w-full flex justify-center mb-1"><div className="h-1 w-8 bg-orange-300 rounded-full"></div></div>
                      <span className="text-sm font-semibold">High</span>
                    </div>
                  </label>

                  {/* Critical */}
                  <label className="cursor-pointer">
                    <input 
                      className="peer sr-only" 
                      name="priority" 
                      type="radio" 
                      checked={priority === 'critical'}
                      onChange={() => setPriority('critical')}
                    />
                    <div className="px-4 py-3 rounded-lg border border-[#cdd6da] text-center hover:bg-gray-50 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-700 transition-all">
                      <div className="w-full flex justify-center mb-1"><div className="h-1 w-8 bg-red-300 rounded-full"></div></div>
                      <span className="text-sm font-semibold">Critical</span>
                    </div>
                  </label>
                </div>
              </div>
            </section>

            <div className="flex justify-end pt-4 gap-4">
              <button onClick={onBack} className="px-6 py-2.5 rounded-lg border border-[#cdd6da] text-[#607c8a] font-medium hover:bg-neutral-50 transition-colors">Cancelar</button>
              <button className="px-6 py-2.5 rounded-lg bg-[#0b95da] text-white font-medium hover:bg-[#0b95da]/90 transition-colors shadow-lg shadow-blue-500/30 flex items-center gap-2">
                <span>Submit Ticket</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
          </div>

          {/* Right Column: Sidebar (Suggestions) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-white rounded-xl shadow-sm border border-[#e3e8eb] p-6 sticky top-24">
              <div className="flex flex-col gap-1 mb-6">
                <h2 className="text-[#111618] text-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
                  Suggested Solutions
                </h2>
                <p className="text-[#607c8a] text-sm">Based on your category selection</p>
              </div>

              <div className="flex flex-col gap-3">
                {/* Suggestion Item 1 */}
                <Link className="group block p-4 rounded-lg bg-[#f5f7f8] hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100" to='/panel'>
                  <div className="flex items-start gap-3">
                    <div className="text-[#0b95da] mt-0.5">
                      <span className="material-symbols-outlined text-[20px]">description</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#111618] group-hover:text-[#0b95da] mb-1">How to whitelist a URL?</h3>
                      <p className="text-xs text-[#607c8a] leading-relaxed">Learn how to manually add safe domains to your allowlist to prevent false positives.</p>
                    </div>
                  </div>
                </Link>

                {/* Suggestion Item 2 */}
                <Link className="group block p-4 rounded-lg bg-[#f5f7f8] hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100" to='/reporte-incidente'>
                  <div className="flex items-start gap-3">
                    <div className="text-[#0b95da] mt-0.5">
                      <span className="material-symbols-outlined text-[20px]">description</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#111618] group-hover:text-[#0b95da] mb-1">Reporting incorrect blocks</h3>
                      <p className="text-xs text-[#607c8a] leading-relaxed">Step-by-step guide on submitting URLs for rapid re-evaluation by our AI engine.</p>
                    </div>
                  </div>
                </Link>

                {/* Suggestion Item 3 */}
                <Link className="group block p-4 rounded-lg bg-[#f5f7f8] hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100" to='/panel'>
                  <div className="flex items-start gap-3">
                    <div className="text-[#0b95da] mt-0.5">
                      <span className="material-symbols-outlined text-[20px]">videocam</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#111618] group-hover:text-[#0b95da] mb-1">Video: Configuring Sensitivity</h3>
                      <p className="text-xs text-[#607c8a] leading-relaxed">Adjusting the AI detection threshold to reduce interruptions.</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-[#e3e8eb]">
                <div className="bg-gradient-to-br from-[#0b95da]/10 to-blue-100/50 rounded-lg p-4 text-center">
                  <h4 className="font-semibold text-[#0b95da] text-sm mb-2">Need immediate help?</h4>
                  <p className="text-xs text-[#607c8a] mb-3">Our live chat agents are available 24/7.</p>
                  <button className="w-full py-2 bg-white border border-[#0b95da]/20 text-[#0b95da] text-sm font-medium rounded shadow-sm hover:bg-blue-50 transition-colors">Start Live Chat</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
