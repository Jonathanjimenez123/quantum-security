import React from 'react';

export default function MasterDashboardStructure() {
  return (
    <div className="text-slate-200 font-sans min-h-screen p-8" style={{ backgroundColor: '#0A0E14', backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 82, 255, 0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      <style>
        {`
          @keyframes pulse-glow {
            0%, 100% { filter: drop-shadow(0 0 5px rgba(0, 82, 255, 0.6)); }
            50% { filter: drop-shadow(0 0 15px rgba(0, 82, 255, 0.9)); }
          }
          .glow-line {
            box-shadow: 0 0 10px rgba(0, 82, 255, 0.5);
          }
          .node-card:hover {
            border-color: #00D1FF;
            transform: translateY(-2px);
            transition: all 0.3s ease;
          }
          .connector-v {
            width: 2px;
            height: 40px;
            background: linear-gradient(to bottom, #0052FF, #00D1FF);
          }
        `}
      </style>

      {/* BEGIN: MainHeader */}
      <header className="max-w-6xl mx-auto mb-12 flex justify-between items-end border-b border-[#0052FF]/30 pb-6">
        <div data-purpose="title-section">
          <h1 className="text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            <span className="w-8 h-8 bg-[#0052FF] rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </span>
            AI SHIELD <span className="text-[#0052FF] font-light">MASTER DASHBOARD STRUCTURE</span>
          </h1>
          <p className="text-slate-400 mt-2 uppercase tracking-widest text-xs font-semibold">SOC Architecture | Project Map v1.0 (Updated 2026)</p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-[10px] text-[#0052FF] font-mono">STATUS: OPERATIONAL</p>
          <p className="text-[10px] text-slate-500 font-mono">ID: AIS-SOC-STRUC-2026</p>
        </div>
      </header>
      {/* END: MainHeader */}

      {/* BEGIN: ArchitectureDiagram */}
      <main className="max-w-4xl mx-auto relative">
        {/* LEVEL 1: EXECUTIVE OVERVIEW */}
        <section className="flex flex-col items-center">
          <div className="node-card w-full max-w-2xl bg-slate-900/50 border border-[#0052FF]/40 p-6 rounded-lg backdrop-blur-sm relative overflow-hidden" data-purpose="card-level-1">
            <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-[#00D1FF] bg-[#0052FF]/20">SCREEN_14, SCREEN_6</div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded bg-[#0052FF]/20 flex items-center justify-center text-[#0052FF] border border-[#0052FF]/30">
                <span className="text-xl font-bold">01</span>
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-white uppercase tracking-wide">Executive Overview</h2>
                <p className="text-slate-400 text-sm mt-1">High-level visibility for stakeholders and decision makers.</p>
                <div className="mt-4 flex gap-4">
                  <div className="bg-slate-800/80 p-2 rounded border border-slate-700 flex-1">
                    <p className="text-[10px] text-slate-500 uppercase">Top Metric</p>
                    <p className="text-sm font-semibold text-[#00D1FF]">Aggregated Risk Score (8.2/10)</p>
                  </div>
                  <div className="bg-slate-800/80 p-2 rounded border border-slate-700 flex-1">
                    <p className="text-[10px] text-slate-500 uppercase">Focus Area</p>
                    <p className="text-sm font-semibold text-white">Projected Security ROI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="connector-v glow-line"></div>
        </section>

        {/* LEVEL 2: REAL-TIME OPERATIONS */}
        <section className="flex flex-col items-center">
          <div className="node-card w-full max-w-2xl bg-slate-900/50 border border-[#0052FF]/40 p-6 rounded-lg backdrop-blur-sm relative" data-purpose="card-level-2">
            <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-[#00D1FF] bg-[#0052FF]/20">SCREEN_91, SCREEN_121</div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded bg-[#0052FF]/20 flex items-center justify-center text-[#0052FF] border border-[#0052FF]/30">
                <span className="text-xl font-bold">02</span>
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-white uppercase tracking-wide">Real-Time Operations</h2>
                <p className="text-slate-400 text-sm mt-1">Live monitoring and response orchestration (SOC Command).</p>
                <div className="mt-4 flex gap-4">
                  <div className="bg-slate-800/80 p-2 rounded border border-slate-700 flex-1">
                    <p className="text-[10px] text-slate-500 uppercase">Top Metric</p>
                    <p className="text-sm font-semibold text-[#00D1FF]">Live Alert Frequency (324/hr)</p>
                  </div>
                  <div className="bg-slate-800/80 p-2 rounded border border-slate-700 flex-1">
                    <p className="text-[10px] text-slate-500 uppercase">Primary View</p>
                    <p className="text-sm font-semibold text-white">Global Threat Map</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="connector-v glow-line"></div>
        </section>

        {/* LEVEL 3: DEEP FORENSICS */}
        <section className="flex flex-col items-center">
          <div className="node-card w-full max-w-2xl bg-slate-900/50 border border-[#0052FF]/40 p-6 rounded-lg backdrop-blur-sm relative" data-purpose="card-level-3">
            <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-[#00D1FF] bg-[#0052FF]/20">SCREEN_112, SCREEN_73</div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded bg-[#0052FF]/20 flex items-center justify-center text-[#0052FF] border border-[#0052FF]/30">
                <span className="text-xl font-bold">03</span>
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-white uppercase tracking-wide">Deep Forensics</h2>
                <p className="text-slate-400 text-sm mt-1">Detailed analysis of sandbox environments and incident data.</p>
                <div className="mt-4 flex gap-4">
                  <div className="bg-slate-800/80 p-2 rounded border border-slate-700 flex-1">
                    <p className="text-[10px] text-slate-500 uppercase">Top Metric</p>
                    <p className="text-sm font-semibold text-[#00D1FF]">URL Sandbox Detonation Rate</p>
                  </div>
                  <div className="bg-slate-800/80 p-2 rounded border border-slate-700 flex-1">
                    <p className="text-[10px] text-slate-500 uppercase">Advanced Tooling</p>
                    <p className="text-sm font-semibold text-white">NLP Sentiment Analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="connector-v glow-line"></div>
        </section>

        {/* LEVEL 4: HUMAN FACTOR */}
        <section className="flex flex-col items-center">
          <div className="node-card w-full max-w-2xl bg-slate-900/50 border border-[#0052FF]/40 p-6 rounded-lg backdrop-blur-sm relative" data-purpose="card-level-4">
            <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-[#00D1FF] bg-[#0052FF]/20">SCREEN_51, SCREEN_15</div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded bg-[#0052FF]/20 flex items-center justify-center text-[#0052FF] border border-[#0052FF]/30">
                <span className="text-xl font-bold">04</span>
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-white uppercase tracking-wide">Human Factor</h2>
                <p className="text-slate-400 text-sm mt-1">Employee awareness training and behavioral risk profiling.</p>
                <div className="mt-4 flex gap-4">
                  <div className="bg-slate-800/80 p-2 rounded border border-slate-700 flex-1">
                    <p className="text-[10px] text-slate-500 uppercase">Top Metric</p>
                    <p className="text-sm font-semibold text-[#00D1FF]">94% Training Completion</p>
                  </div>
                  <div className="bg-slate-800/80 p-2 rounded border border-slate-700 flex-1">
                    <p className="text-[10px] text-slate-500 uppercase">User Rank</p>
                    <p className="text-sm font-semibold text-white">Employee Risk Leaderboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="connector-v glow-line"></div>
        </section>

        {/* LEVEL 5: INFRASTRUCTURE & HEALTH */}
        <section className="flex flex-col items-center">
          <div className="node-card w-full max-w-2xl bg-slate-900/50 border border-[#0052FF]/40 p-6 rounded-lg backdrop-blur-sm relative" data-purpose="card-level-5">
            <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-[#00D1FF] bg-[#0052FF]/20">SCREEN_33, SCREEN_86</div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded bg-[#0052FF]/20 flex items-center justify-center text-[#0052FF] border border-[#0052FF]/30">
                <span className="text-xl font-bold">05</span>
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-white uppercase tracking-wide">Infrastructure &amp; Health</h2>
                <p className="text-slate-400 text-sm mt-1">Backend monitoring of the AI Shield engine and API health.</p>
                <div className="mt-4 flex gap-4">
                  <div className="bg-slate-800/80 p-2 rounded border border-slate-700 flex-1">
                    <p className="text-[10px] text-slate-500 uppercase">Top Metric</p>
                    <p className="text-sm font-semibold text-[#00D1FF]">99.98% API Uptime</p>
                  </div>
                  <div className="bg-slate-800/80 p-2 rounded border border-slate-700 flex-1">
                    <p className="text-[10px] text-slate-500 uppercase">Model Stats</p>
                    <p className="text-sm font-semibold text-white">AI Inference Latency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="connector-v glow-line"></div>
        </section>

        {/* LEVEL 6: COMPLIANCE & LEGAL */}
        <section className="flex flex-col items-center">
          <div className="node-card w-full max-w-2xl bg-slate-900/50 border border-[#0052FF]/40 p-6 rounded-lg backdrop-blur-sm relative" data-purpose="card-level-6">
            <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-[#00D1FF] bg-[#0052FF]/20">SCREEN_123, SCREEN_12</div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded bg-[#0052FF]/20 flex items-center justify-center text-[#0052FF] border border-[#0052FF]/30">
                <span className="text-xl font-bold">06</span>
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-white uppercase tracking-wide">Compliance &amp; Legal</h2>
                <p className="text-slate-400 text-sm mt-1">Regulatory adherence and long-term audit logs.</p>
                <div className="mt-4 flex gap-4">
                  <div className="bg-slate-800/80 p-2 rounded border border-slate-700 flex-1">
                    <p className="text-[10px] text-slate-500 uppercase">Top Metric</p>
                    <p className="text-sm font-semibold text-[#00D1FF]">GDPR Compliance Score (100%)</p>
                  </div>
                  <div className="bg-slate-800/80 p-2 rounded border border-slate-700 flex-1">
                    <p className="text-[10px] text-slate-500 uppercase">Legal Rep</p>
                    <p className="text-sm font-semibold text-white">Full Audit Trail History</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 flex flex-col items-center opacity-60">
          <div className="connector-v glow-line h-8 mb-4"></div>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00D1FF]">Directed by Jonathan Jimenez Escobar</p>
        </section>
      </main>
      {/* END: ArchitectureDiagram */}

      {/* BEGIN: Footer */}
      <footer className="max-w-6xl mx-auto mt-16 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-slate-500 uppercase tracking-widest gap-4">
        <div className="flex flex-col gap-1">
          <div>Generated for Looker Studio Implementation | 2026 Archive</div>
          <div className="text-[#00D1FF] font-bold">Lead Expert: Jonathan Jimenez Escobar</div>
        </div>
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> System Ready</span>
          <span>Encrypted Transmission</span>
        </div>
      </footer>
      {/* END: Footer */}
    </div>
  );
}
