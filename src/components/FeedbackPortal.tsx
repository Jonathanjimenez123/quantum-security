import React from 'react';
import { Link } from 'react-router-dom';

interface FeedbackPortalProps {
  onBack?: () => void;
}

export default function FeedbackPortal({ onBack }: FeedbackPortalProps) {
  return (
    <div className="bg-[#f5f7f8] dark:bg-[#101c22] font-sans text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="bg-white dark:bg-[#1a2c35] border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="px-6 md:px-10 py-3 flex items-center justify-between mx-auto max-w-[1440px] w-full">
          <div className="flex items-center gap-3">
            {onBack && (
              <button onClick={onBack} className="mr-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
                <span className="material-symbols-outlined text-xl">arrow_back</span>
              </button>
            )}
            <div className="size-8 text-[#25aff4] flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">shield_lock</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">SecureBrowse AI</h2>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-6">
              <Link className="text-slate-600 dark:text-slate-300 hover:text-[#25aff4] dark:hover:text-[#25aff4] text-sm font-medium transition-colors" to='/panel'>Home</Link>
              <Link className="text-slate-600 dark:text-slate-300 hover:text-[#25aff4] dark:hover:text-[#25aff4] text-sm font-medium transition-colors" to='/inicio'>Features</Link>
              <Link className="text-[#25aff4] font-semibold text-sm leading-normal" to='/panel'>Roadmap</Link>
              <Link className="text-slate-600 dark:text-slate-300 hover:text-[#25aff4] dark:hover:text-[#25aff4] text-sm font-medium transition-colors" to='/centro-ayuda'>Support</Link>
            </nav>
            <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-[#25aff4] hover:bg-sky-400 text-white text-sm font-bold shadow-sm transition-colors">
              Install Extension
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-[1200px] mx-auto px-6 py-10 flex flex-col gap-10">
        {/* Hero Section */}
        <section className="flex flex-col gap-3 max-w-2xl">
          <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight">Help us build a safer web together</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">Your feedback drives our security improvements. Suggest features, report bugs, or propose design changes to make the web safer for everyone.</p>
        </section>

        {/* Category Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group bg-white dark:bg-[#1a2c35] rounded-xl p-5 shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-800 transition-all cursor-pointer flex flex-col">
            <div className="w-full h-32 bg-sky-50 dark:bg-sky-900/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-100/50 to-transparent dark:from-sky-900/30"></div>
              <span className="material-symbols-outlined text-5xl text-[#25aff4] z-10">lightbulb</span>
            </div>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1 group-hover:text-[#25aff4] transition-colors">Suggest a Feature</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 flex-grow">Have an idea for a new security tool or capability?</p>
            <button className="w-full h-9 rounded-lg border border-[#25aff4] text-[#25aff4] hover:bg-[#25aff4] hover:text-white text-sm font-medium transition-colors">Make a Suggestion</button>
          </div>
          {/* Card 2 */}
          <div className="group bg-white dark:bg-[#1a2c35] rounded-xl p-5 shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-800 transition-all cursor-pointer flex flex-col">
            <div className="w-full h-32 bg-sky-50 dark:bg-sky-900/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-100/50 to-transparent dark:from-sky-900/30"></div>
              <span className="material-symbols-outlined text-5xl text-red-400 z-10">bug_report</span>
            </div>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1 group-hover:text-[#25aff4] transition-colors">Report a Bug</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 flex-grow">Something not working right? Let us know.</p>
            <button className="w-full h-9 rounded-lg border border-[#25aff4] text-[#25aff4] hover:bg-[#25aff4] hover:text-white text-sm font-medium transition-colors">Report Issue</button>
          </div>
          {/* Card 3 */}
          <div className="group bg-white dark:bg-[#1a2c35] rounded-xl p-5 shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-800 transition-all cursor-pointer flex flex-col">
            <div className="w-full h-32 bg-sky-50 dark:bg-sky-900/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-100/50 to-transparent dark:from-sky-900/30"></div>
              <span className="material-symbols-outlined text-5xl text-purple-400 z-10">palette</span>
            </div>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1 group-hover:text-[#25aff4] transition-colors">UI/UX Improvement</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 flex-grow">How can we make the interface better and easier to use?</p>
            <button className="w-full h-9 rounded-lg border border-[#25aff4] text-[#25aff4] hover:bg-[#25aff4] hover:text-white text-sm font-medium transition-colors">Suggest Improvement</button>
          </div>
        </section>

        {/* Main Content Area: Form & Roadmap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
          {/* Feedback Form */}
          <div className="lg:col-span-8 bg-white dark:bg-[#1a2c35] rounded-xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#25aff4]">edit_note</span>
                Submit Feedback
              </h3>
            </div>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="subject">Subject</label>
                  <input className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#25aff4] focus:border-transparent outline-none" id="subject" placeholder="Brief summary of your feedback" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="priority">Priority</label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-lg border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#25aff4] focus:border-transparent outline-none" id="priority">
                      <option>Low - Nice to have</option>
                      <option>Medium - Important</option>
                      <option>High - Critical</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-lg">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="description">Detailed Description</label>
                <textarea className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#25aff4] focus:border-transparent outline-none resize-none" id="description" placeholder="Please provide as much detail as possible..." rows={5}></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Attachments</label>
                <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#25aff4]/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <span className="material-symbols-outlined text-slate-400 text-3xl mb-2">cloud_upload</span>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-400 mt-1">Screenshots or logs (Max 10MB)</p>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button className="bg-[#25aff4] hover:bg-sky-400 text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors shadow-sm flex items-center gap-2" type="button">
                  <span>Submit Feedback</span>
                  <span className="material-symbols-outlined text-lg">send</span>
                </button>
              </div>
            </form>
          </div>

          {/* Product Roadmap Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white dark:bg-[#1a2c35] rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Product Roadmap</h3>
                <Link className="text-xs font-semibold text-[#25aff4] hover:underline" to='/panel'>Ver Todo</Link>
              </div>
              <div className="flex flex-col gap-6">
                {/* Planned Section */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Planned</span>
                  </div>
                  <div className="group p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-sky-50 dark:hover:bg-sky-900/10 border border-transparent hover:border-sky-100 dark:hover:border-sky-900 transition-all cursor-pointer">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#25aff4] transition-colors">Phishing Simulation Mode</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">Test your employees with safe simulations.</p>
                      </div>
                      <div className="flex flex-col items-center gap-1 min-w-[32px]">
                        <button className="text-slate-400 hover:text-[#25aff4] transition-colors">
                          <span className="material-symbols-outlined text-lg">expand_less</span>
                        </button>
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300">128</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* In Progress Section */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#25aff4] animate-pulse"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#25aff4]">In Progress</span>
                  </div>
                  <div className="group p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-sky-50 dark:hover:bg-sky-900/10 border border-transparent hover:border-sky-100 dark:hover:border-sky-900 transition-all cursor-pointer">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#25aff4] transition-colors">Dark Mode for Extension</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">Full dark theme support for popup and settings.</p>
                      </div>
                      <div className="flex flex-col items-center gap-1 min-w-[32px]">
                        <button className="text-slate-400 hover:text-[#25aff4] transition-colors">
                          <span className="material-symbols-outlined text-lg">expand_less</span>
                        </button>
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300">342</span>
                      </div>
                    </div>
                  </div>
                  <div className="group p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-sky-50 dark:hover:bg-sky-900/10 border border-transparent hover:border-sky-100 dark:hover:border-sky-900 transition-all cursor-pointer">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#25aff4] transition-colors">Enhanced PDF Scanning</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">Scan downloaded PDFs for malicious links.</p>
                      </div>
                      <div className="flex flex-col items-center gap-1 min-w-[32px]">
                        <button className="text-slate-400 hover:text-[#25aff4] transition-colors">
                          <span className="material-symbols-outlined text-lg">expand_less</span>
                        </button>
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300">215</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Completed Section */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400">Completed</span>
                  </div>
                  <div className="group p-3 rounded-lg bg-green-50/50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20 transition-all">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">Real-time URL Check</h4>
                          <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">Instant verification against global blacklists.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="bg-[#25aff4]/10 rounded-lg p-4">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Community Guidelines</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Be respectful and constructive. Before posting, please search to see if your idea has already been suggested.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-[#1a2c35] border-t border-slate-200 dark:border-slate-800 mt-auto">
        <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
            <span>creada en 2026 Jonathan Jimenez Escobar</span>
          </div>
          <div className="flex gap-6">
            <Link className="text-slate-500 hover:text-[#25aff4] dark:text-slate-400 dark:hover:text-[#25aff4] transition-colors" to='/panel'>
              <span className="sr-only">Twitter</span>
              <svg aria-hidden="true" className="h-5 w-5 fill-current" data-alt="Twitter social icon" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </Link>
            <Link className="text-slate-500 hover:text-[#25aff4] dark:text-slate-400 dark:hover:text-[#25aff4] transition-colors" to='/panel'>
              <span className="sr-only">GitHub</span>
              <svg aria-hidden="true" className="h-5 w-5 fill-current" data-alt="GitHub social icon" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
