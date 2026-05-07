import React from 'react';
import { Link } from 'react-router-dom';

interface TermsOfServiceProps {
  onBack: () => void;
}

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] font-['Newsreader',serif] antialiased min-h-screen flex flex-col transition-colors duration-200">
      <style>{`
        /* Custom scrollbar for sidebar */
        .sidebar-scroll::-webkit-scrollbar {
            width: 6px;
        }
        .sidebar-scroll::-webkit-scrollbar-track {
            background: transparent;
        }
        .sidebar-scroll::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 20px;
        }
      `}</style>
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-[#15202b] px-6 lg:px-10 py-3 shadow-sm">
        <div className="flex items-center gap-4 text-[#0f172a] dark:text-[#f1f5f9] cursor-pointer" onClick={onBack}>
          <div className="size-8 text-[#137fec]">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C19.5817 4 16 7.58172 16 12V36C16 40.4183 19.5817 44 24 44C28.4183 44 32 40.4183 32 36V12C32 7.58172 28.4183 4 24 4Z" fill="currentColor" fillOpacity="0.2"></path>
              <path d="M24 8C21.7909 8 20 9.79086 20 12V36C20 38.2091 21.7909 40 24 40C26.2091 40 28 38.2091 28 36V12C28 9.79086 26.2091 8 24 8Z" fill="currentColor"></path>
              <path clipRule="evenodd" d="M10 24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24C38 31.732 31.732 38 24 38C16.268 38 10 31.732 10 24ZM14 24C14 29.5228 18.4772 34 24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-lg lg:text-xl font-bold leading-tight tracking-tight font-['Noto_Sans',sans-serif]">Anti-Phishing Guard</h2>
        </div>
        <div className="hidden lg:flex items-center gap-8 font-['Noto_Sans',sans-serif]">
          <div className="flex items-center gap-6">
            <Link className="text-[#475569] dark:text-[#94a3b8] hover:text-[#137fec] dark:hover:text-[#137fec] text-sm font-medium leading-normal transition-colors" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Home</Link>
            <Link className="text-[#475569] dark:text-[#94a3b8] hover:text-[#137fec] dark:hover:text-[#137fec] text-sm font-medium leading-normal transition-colors" to='/inicio'>Features</Link>
            <Link className="text-[#475569] dark:text-[#94a3b8] hover:text-[#137fec] dark:hover:text-[#137fec] text-sm font-medium leading-normal transition-colors" to='/precios'>Pricing</Link>
          </div>
          <button className="flex items-center justify-center overflow-hidden rounded-lg h-9 px-5 bg-[#137fec] hover:bg-blue-600 text-white text-sm font-bold leading-normal transition-colors shadow-sm">
            <span className="truncate">Get Extension</span>
          </button>
        </div>
        <button className="lg:hidden text-[#0f172a] dark:text-[#f1f5f9]">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      <main className="flex-grow flex justify-center w-full px-4 lg:px-8 py-8 lg:py-12 font-['Noto_Sans',sans-serif]">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10">
          {/* Sidebar Navigation (Sticky) */}
          <aside className="hidden lg:flex w-64 flex-col flex-shrink-0 h-[calc(100vh-120px)] sticky top-24">
            <div className="flex flex-col gap-1 mb-6">
              <h1 className="text-[#0f172a] dark:text-[#f1f5f9] text-lg font-bold">Table of Contents</h1>
              <p className="text-[#475569] dark:text-[#94a3b8] text-sm">Jump to section</p>
            </div>
            <nav className="flex flex-col gap-1 overflow-y-auto sidebar-scroll pr-2">
              <a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-[#137fec] dark:text-blue-400 font-medium transition-colors" href="#scope">
                <span className="material-symbols-outlined text-[20px]">description</span>
                <span className="text-sm">1. Scope of Use</span>
              </a>
              <a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] transition-colors" href="#processing">
                <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                <span className="text-sm">2. AI Data Processing</span>
              </a>
              <a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] transition-colors" href="#obligations">
                <span className="material-symbols-outlined text-[20px]">person</span>
                <span className="text-sm">3. User Obligations</span>
              </a>
              <a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] transition-colors" href="#liability">
                <span className="material-symbols-outlined text-[20px]">gavel</span>
                <span className="text-sm">4. Liability</span>
              </a>
              <a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] transition-colors" href="#termination">
                <span className="material-symbols-outlined text-[20px]">cancel</span>
                <span className="text-sm">5. Termination</span>
              </a>
              <a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] transition-colors" href="#privacy">
                <span className="material-symbols-outlined text-[20px]">lock</span>
                <span className="text-sm">6. Privacy Policy</span>
              </a>
              <a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[#475569] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f1f5f9] transition-colors" href="#updates">
                <span className="material-symbols-outlined text-[20px]">update</span>
                <span className="text-sm">7. Updates to Terms</span>
              </a>
            </nav>
            <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
              <p className="text-xs text-[#475569] dark:text-[#94a3b8]">Need help with legal inquiries?</p>
              <Link className="text-sm font-semibold text-[#137fec] hover:underline mt-1 block" to='/panel'>Contact Legal Team</Link>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 max-w-4xl">
            {/* Title & Meta */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 pb-8 border-b border-slate-200 dark:border-slate-700">
              <div className="flex flex-col gap-3 max-w-2xl">
                <h1 className="text-[#0f172a] dark:text-[#f1f5f9] text-4xl lg:text-5xl font-bold leading-tight tracking-tight font-['Newsreader',serif]">Terms of Service &amp; EULA Agreement</h1>
                <p className="text-[#475569] dark:text-[#94a3b8] text-lg">Please read these terms carefully before using our AI-powered security extension.</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="material-symbols-outlined text-[#475569] dark:text-[#94a3b8] text-[18px]">calendar_today</span>
                  <p className="text-[#475569] dark:text-[#94a3b8] text-sm font-medium">Last Updated: October 24, 2026</p>
                </div>
              </div>
              <button className="flex-shrink-0 flex items-center justify-center gap-2 rounded-lg h-10 px-5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-[#0f172a] dark:text-[#f1f5f9] text-sm font-bold transition-colors border border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined text-[20px]">download</span>
                <span>Download PDF</span>
              </button>
            </div>

            {/* Key Changes Summary Box */}
            <div className="mb-12 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-900/10 p-6 flex flex-col md:flex-row gap-6 items-start">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-[#137fec] shrink-0">
                <span className="material-symbols-outlined text-[24px]">info</span>
              </div>
              <div className="flex-1">
                <h3 className="text-[#0f172a] dark:text-[#f1f5f9] text-lg font-bold mb-2">Summary of Key Changes</h3>
                <p className="text-[#475569] dark:text-[#94a3b8] mb-4 leading-relaxed">
                  We have updated section 2 regarding <span className="font-semibold text-[#0f172a] dark:text-[#f1f5f9]">AI Data Processing</span> to clarify how we handle URL scanning anonymously. We have also added new clauses regarding liability for beta features.
                </p>
                <Link className="inline-flex items-center gap-1 text-[#137fec] font-bold text-sm hover:underline" to='/panel'>
                  Read full changelog
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Document Body */}
            <article className="prose prose-slate prose-lg dark:prose-invert max-w-none font-['Noto_Sans',sans-serif]">
              <section className="mb-12 scroll-mt-28" id="scope">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-[#0f172a] dark:text-[#f1f5f9] font-bold text-sm">1</span>
                  <h2 className="text-2xl font-bold text-[#0f172a] dark:text-[#f1f5f9] m-0 font-['Newsreader',serif]">Scope of Use</h2>
                </div>
                <p className="text-[#475569] dark:text-[#94a3b8] leading-7">
                  Anti-Phishing Guard grants you a revocable, non-exclusive, non-transferable, limited license to download, install, and use the browser extension strictly in accordance with the terms of this Agreement. You may use the extension solely for personal, non-commercial purposes unless you have purchased a specialized Enterprise License.
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-[#475569] dark:text-[#94a3b8] marker:text-slate-400">
                  <li>You agree not to modify, reverse engineer, or decompile the software.</li>
                  <li>You agree not to use the software for any illegal activities.</li>
                  <li>The license is effective until terminated by you or Anti-Phishing Guard.</li>
                </ul>
              </section>

              <section className="mb-12 scroll-mt-28" id="processing">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-[#0f172a] dark:text-[#f1f5f9] font-bold text-sm">2</span>
                  <h2 className="text-2xl font-bold text-[#0f172a] dark:text-[#f1f5f9] m-0 font-['Newsreader',serif]">AI Data Processing</h2>
                </div>
                <p className="text-[#475569] dark:text-[#94a3b8] leading-7 mb-4">
                  Our real-time protection relies on advanced machine learning algorithms that analyze website structures, URL patterns, and content to detect phishing attempts. To function effectively, the extension processes the following data:
                </p>
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold text-[#0f172a] dark:text-[#f1f5f9] mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#137fec] text-[20px]">link</span>
                      URL Metadata
                    </h4>
                    <p className="text-sm text-[#475569] dark:text-[#94a3b8]">We analyze the URL string for known malicious patterns. This data is anonymized before processing.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold text-[#0f172a] dark:text-[#f1f5f9] mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#137fec] text-[20px]">code</span>
                      DOM Structure
                    </h4>
                    <p className="text-sm text-[#475569] dark:text-[#94a3b8]">The extension scans the page layout locally to identify deceptive visual elements.</p>
                  </div>
                </div>
                <p className="text-[#475569] dark:text-[#94a3b8] leading-7">
                  <strong>Crucially:</strong> We do NOT store browsing history, keystrokes, or personal form data. All analysis is performed locally on your device whenever possible, with only hashed fingerprints sent to our cloud for threat verification.
                </p>
              </section>

              <section className="mb-12 scroll-mt-28" id="obligations">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-[#0f172a] dark:text-[#f1f5f9] font-bold text-sm">3</span>
                  <h2 className="text-2xl font-bold text-[#0f172a] dark:text-[#f1f5f9] m-0 font-['Newsreader',serif]">User Obligations</h2>
                </div>
                <p className="text-[#475569] dark:text-[#94a3b8] leading-7">
                  By installing the extension, you agree to keep your browser and the extension updated to the latest version to ensure optimal security. You are responsible for maintaining the confidentiality of any account credentials used to access premium features. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </section>

              <section className="mb-12 scroll-mt-28" id="liability">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-[#0f172a] dark:text-[#f1f5f9] font-bold text-sm">4</span>
                  <h2 className="text-2xl font-bold text-[#0f172a] dark:text-[#f1f5f9] m-0 font-['Newsreader',serif]">Liability &amp; Disclaimers</h2>
                </div>
                <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-4 mb-4">
                  <p className="text-red-800 dark:text-red-200 text-sm font-medium italic">
                    "The software is provided 'AS IS', without warranty of any kind, express or implied."
                  </p>
                </div>
                <p className="text-[#475569] dark:text-[#94a3b8] leading-7">
                  While Anti-Phishing Guard strives to detect all phishing threats, no security solution is 100% detecting. We are not liable for any damages arising from the use or inability to use the extension, including but not limited to direct, indirect, incidental, or consequential damages. You acknowledge that you use the internet at your own risk.
                </p>
              </section>

              <section className="mb-12 scroll-mt-28" id="termination">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-[#0f172a] dark:text-[#f1f5f9] font-bold text-sm">5</span>
                  <h2 className="text-2xl font-bold text-[#0f172a] dark:text-[#f1f5f9] m-0 font-['Newsreader',serif]">Termination</h2>
                </div>
                <p className="text-[#475569] dark:text-[#94a3b8] leading-7">
                  We reserve the right to suspend or terminate your access to the Service at any time, without notice, for conduct that we believe violates this Agreement or is harmful to other users of the Service, us, or third parties, or for any other reason.
                </p>
              </section>

              <section className="mb-12 scroll-mt-28" id="privacy">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-[#0f172a] dark:text-[#f1f5f9] font-bold text-sm">6</span>
                  <h2 className="text-2xl font-bold text-[#0f172a] dark:text-[#f1f5f9] m-0 font-['Newsreader',serif]">Privacy Policy Link</h2>
                </div>
                <p className="text-[#475569] dark:text-[#94a3b8] leading-7">
                  Your privacy is paramount. This Agreement incorporates by reference our Privacy Policy, which describes how we handle your information. By using the Service, you consent to the collection and use of information as discussed in the <Link className="text-[#137fec] hover:underline font-medium" to="/privacy-compliance">Privacy Policy</Link>.
                </p>
              </section>
            </article>

            {/* Footer Agreement Action */}
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-[#475569] dark:text-[#94a3b8] text-sm">By using the extension, you acknowledge that you have read and understood this Agreement.</p>
              <div className="flex gap-4">
                <button className="px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[#0f172a] dark:text-[#f1f5f9] font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Decline</button>
                <button className="px-6 py-2.5 rounded-lg bg-[#137fec] hover:bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/30 transition-all">I Agree</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white dark:bg-[#15202b] border-t border-slate-200 dark:border-slate-800 py-8 px-6 lg:px-10 font-['Noto_Sans',sans-serif]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#475569] dark:text-[#94a3b8]">creada en 2026 Jonathan Jimenez Escobar</p>
          <div className="flex gap-6">
            <Link className="text-sm text-[#475569] dark:text-[#94a3b8] hover:text-[#137fec] transition-colors" to="/privacy-compliance">Privacy</Link>
            <Link className="text-sm text-[#475569] dark:text-[#94a3b8] hover:text-[#137fec] transition-colors" to="/terms-of-service">Terms</Link>
            <Link className="text-sm text-[#475569] dark:text-[#94a3b8] hover:text-[#137fec] transition-colors" to='/panel'>Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
