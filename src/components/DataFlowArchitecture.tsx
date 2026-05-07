import React from 'react';

interface DataFlowArchitectureProps {
  onBack?: () => void;
}

export default function DataFlowArchitecture({ onBack }: DataFlowArchitectureProps) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      {/* Header with back button */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-white"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          )}
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600">security</span>
            <span className="font-bold text-lg text-white">AI Shield</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <header className="mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">End-to-End Data Flow Architecture</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technical visualization of the AI Shield security pipeline, from edge collection to threat intelligence and enterprise integration.
          </p>
        </header>

        <section className="relative" data-purpose="architecture-diagram">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes dash {
              to {
                stroke-dashoffset: -1000;
              }
            }
            .flow-line-active {
              stroke-dasharray: 8;
              animation: dash 20s linear infinite;
            }
          `}} />
          <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <marker id="arrowhead" markerHeight="7" markerWidth="10" orient="auto" refX="0" refY="3.5">
                <polygon fill="#2563eb" points="0 0, 10 3.5, 0 7"></polygon>
              </marker>
            </defs>
            <path className="flow-line-active" d="M 220 200 L 350 200" fill="none" markerEnd="url(#arrowhead)" stroke="#2563eb" strokeWidth="2"></path>
            <path className="flow-line-active" d="M 550 200 L 680 200" fill="none" markerEnd="url(#arrowhead)" stroke="#2563eb" strokeWidth="2"></path>
            <path d="M 880 180 Q 980 180 980 350" fill="none" markerEnd="url(#arrowhead)" stroke="#334155" strokeWidth="2"></path>
            <path className="flow-line-active" d="M 780 280 L 780 450" fill="none" markerEnd="url(#arrowhead)" stroke="#2563eb" strokeWidth="2"></path>
            <path d="M 680 500 L 550 500" fill="none" markerEnd="url(#arrowhead)" stroke="#2563eb" strokeWidth="2"></path>
            <path d="M 350 500 L 220 500" fill="none" markerEnd="url(#arrowhead)" stroke="#2563eb" strokeWidth="2"></path>
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-x-24 lg:gap-y-32 relative z-10">
            <div className="bg-slate-800/70 backdrop-blur-md border border-white/10 p-6 rounded-lg flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-4 ring-1 ring-blue-600/50">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">1. Browser Extension</h3>
              <p className="text-slate-400 text-sm mb-4">Edge Data Collection</p>
              <ul className="text-xs text-slate-500 space-y-1 text-left w-full border-t border-slate-700 pt-3">
                <li>• URL &amp; Metadata scraping</li>
                <li>• DOM Structure Analysis</li>
                <li>• SSL Certificate verification</li>
              </ul>
            </div>

            <div className="bg-slate-800/70 backdrop-blur-md border border-white/10 p-6 rounded-lg flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-4 ring-1 ring-blue-600/50">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">2. Secure API Gateway</h3>
              <p className="text-slate-400 text-sm mb-4">Encrypted Transport</p>
              <ul className="text-xs text-slate-500 space-y-1 text-left w-full border-t border-slate-700 pt-3">
                <li>• AES-256 Data Encryption</li>
                <li>• Token Authentication</li>
                <li>• Rate Limiting / DoS Protection</li>
              </ul>
            </div>

            <div className="bg-slate-800/70 backdrop-blur-md border border-blue-600/40 p-6 rounded-lg flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">3. AI Analysis Engine</h3>
              <p className="text-slate-400 text-sm mb-4">NLP &amp; Heuristics</p>
              <ul className="text-xs text-slate-500 space-y-1 text-left w-full border-t border-slate-700 pt-3">
                <li>• Semantic Pattern Matching</li>
                <li>• Visual Phishing Detection</li>
                <li>• Behavioral Analysis Models</li>
              </ul>
            </div>

            <div className="lg:order-last bg-slate-800/70 backdrop-blur-md border border-white/10 p-6 rounded-lg flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mb-4 ring-1 ring-slate-600">
                <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">7. External Integrations</h3>
              <p className="text-slate-400 text-sm mb-4">SIEM / Slack / Webhooks</p>
              <ul className="text-xs text-slate-500 space-y-1 text-left w-full border-t border-slate-700 pt-3">
                <li>• Splunk/Sentinel Log Forwarding</li>
                <li>• Real-time Slack Alerts</li>
                <li>• Incident Response Webhooks</li>
              </ul>
            </div>

            <div className="lg:order-last bg-slate-800/70 backdrop-blur-md border border-white/10 p-6 rounded-lg flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mb-4 ring-1 ring-slate-600">
                <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">6. Admin Dashboard</h3>
              <p className="text-slate-400 text-sm mb-4">Centralized Control</p>
              <ul className="text-xs text-slate-500 space-y-1 text-left w-full border-t border-slate-700 pt-3">
                <li>• Policy Configuration</li>
                <li>• User Activity Auditing</li>
                <li>• Threat Landscape Analytics</li>
              </ul>
            </div>

            <div className="lg:order-last bg-slate-800/70 backdrop-blur-md border border-white/10 p-6 rounded-lg flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 ring-1 ring-emerald-500/50">
                <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">5. Verdict Delivery</h3>
              <p className="text-slate-400 text-sm mb-4">Block / Allow / Warn</p>
              <ul className="text-xs text-slate-500 space-y-1 text-left w-full border-t border-slate-700 pt-3">
                <li>• Millisecond Latency Response</li>
                <li>• Dynamic UI Interstitial</li>
                <li>• User Feedback Loop</li>
              </ul>
            </div>
          </div>

          <div className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 bg-slate-800/70 backdrop-blur-md border border-white/10 p-4 rounded-lg flex-col items-center text-center w-56">
            <div className="w-12 h-12 bg-slate-800 rounded flex items-center justify-center mb-2 border border-slate-600">
              <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <h4 className="text-white font-medium text-sm">4. Threat Intelligence</h4>
            <p className="text-[10px] text-slate-500 mt-2 italic">Real-time sync with global malware &amp; phishing feeds</p>
          </div>
        </section>

        <footer className="mt-20 pt-8 border-t border-slate-800">
          <div className="flex flex-wrap gap-8 justify-center text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-0.5 bg-blue-600 block"></span>
              <span>Primary Data Path</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-0.5 bg-slate-600 block"></span>
              <span>Internal Metadata / Sync</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 block"></span>
              <span>End User Impact</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
