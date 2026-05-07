import React from 'react';
import { Link } from 'react-router-dom';

interface AiAnalysisApiPayloadSchemaProps {
  onBack: () => void;
}

export default function AiAnalysisApiPayloadSchema({ onBack }: AiAnalysisApiPayloadSchemaProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-white">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden">
        {/* Header */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-10 py-3">
          <div className="flex items-center gap-8">
            <div 
              className="flex items-center gap-3 text-slate-900 dark:text-white cursor-pointer"
              onClick={onBack}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-[24px]">shield</span>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">AI Shield Docs</h2>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link className="text-slate-600 dark:text-text-secondary text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors" to='/panel'>Guide</Link>
              <Link className="text-primary text-sm font-medium" to="/apidocumentation">API Reference</Link>
              <Link className="text-slate-600 dark:text-text-secondary text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors" to='/centro-ayuda'>Support</Link>
            </nav>
          </div>
          <div className="flex flex-1 justify-end gap-6 items-center">
            <label className="hidden sm:flex flex-col min-w-40 h-10 w-full max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-slate-700 focus-within:border-primary transition-colors group">
                <div className="text-slate-400 dark:text-text-secondary flex items-center justify-center pl-3">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input className="flex w-full min-w-0 flex-1 bg-transparent border-none text-sm font-normal text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:ring-0" placeholder="Buscar documentation..." />
                <div className="flex items-center pr-2">
                  <span className="text-[10px] font-mono bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-600">⌘K</span>
                </div>
              </div>
            </label>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>
            <Link className="text-slate-600 dark:text-text-secondary hover:text-primary transition-colors flex items-center" to='/panel'>
              <span className="material-symbols-outlined text-[24px]">dark_mode</span>
            </Link>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold shadow-lg shadow-primary/20">
              <span className="truncate">Log In</span>
            </button>
          </div>
        </header>
        <div className="flex flex-1">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:flex w-64 flex-col gap-2 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-background-dark py-8 pl-8 pr-4 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto custom-scrollbar">
            <div className="flex flex-col gap-1 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Getting Started</span>
              <Link className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 dark:text-text-secondary hover:bg-slate-200 dark:hover:bg-surface-dark hover:text-primary transition-colors" to='/panel'>Introduction</Link>
              <Link className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 dark:text-text-secondary hover:bg-slate-200 dark:hover:bg-surface-dark hover:text-primary transition-colors" to='/panel'>Authentication</Link>
            </div>
            <div className="flex flex-col gap-1 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Analysis API</span>
              <Link className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-primary bg-primary/10 dark:bg-primary/5" to='/panel'>
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Payload Schema
              </Link>
              <Link className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 dark:text-text-secondary hover:bg-slate-200 dark:hover:bg-surface-dark hover:text-primary transition-colors" to='/panel'>Rate Limits</Link>
              <Link className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 dark:text-text-secondary hover:bg-slate-200 dark:hover:bg-surface-dark hover:text-primary transition-colors" to='/panel'>Error Codes</Link>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Resources</span>
              <Link className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 dark:text-text-secondary hover:bg-slate-200 dark:hover:bg-surface-dark hover:text-primary transition-colors" to='/panel'>SDKs &amp; Libraries</Link>
              <Link className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 dark:text-text-secondary hover:bg-slate-200 dark:hover:bg-surface-dark hover:text-primary transition-colors" to='/panel'>Community</Link>
            </div>
          </aside>
          {/* Main Content */}
          <main className="flex-1 flex justify-center p-4 md:p-10 lg:p-12">
            <div className="flex flex-col max-w-4xl w-full">
              {/* Breadcrumbs */}
              <div className="flex flex-wrap items-center gap-2 text-sm mb-6">
                <button onClick={onBack} className="text-slate-500 dark:text-text-secondary hover:text-primary transition-colors">Home</button>
                <span className="text-slate-400 dark:text-slate-600">/</span>
                <Link className="text-slate-500 dark:text-text-secondary hover:text-primary transition-colors" to="/apidocumentation">API Reference</Link>
                <span className="text-slate-400 dark:text-slate-600">/</span>
                <span className="text-slate-900 dark:text-text-primary font-medium">Payload Schema</span>
              </div>
              {/* Title Section */}
              <div className="mb-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">AI Analysis API Payload Schema</h1>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-500 ring-1 ring-inset ring-green-500/20">v2.1.0</span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">Stable</span>
                  </div>
                </div>
                <p className="text-lg text-slate-600 dark:text-text-secondary leading-relaxed max-w-3xl">
                  Specification for the JSON payload exchange between the AI Shield browser extension and the FastAPI analysis backend. This document outlines the required fields for DOM snapshot submission and the structure of the threat intelligence response.
                </p>
              </div>
              {/* Introduction Box */}
              <div className="mb-12 rounded-xl border border-blue-200 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-900/10 p-6">
                <div className="flex gap-4">
                  <div className="text-primary mt-1">
                    <span className="material-symbols-outlined">info</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-blue-100 mb-1">Context Awareness</h3>
                    <p className="text-slate-600 dark:text-blue-200/70 text-sm leading-relaxed">
                      The browser extension captures DOM snapshots and SSL metadata, sending them to the backend for real-time analysis. The backend responds with a phishing probability score (0.0 - 1.0) and NLP-derived urgency metrics to determine if a warning should be displayed to the user.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-12"></div>
              {/* Request Payload Section */}
              <section className="mb-16 scroll-mt-24" id="request-payload">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-500">
                      <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
                    </span>
                    Request Payload
                  </h2>
                  <button className="group flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-xs font-medium text-slate-600 dark:text-text-secondary hover:border-primary hover:text-primary transition-all">
                    <span className="material-symbols-outlined text-[16px]">content_copy</span>
                    Copy Schema
                  </button>
                </div>
                <p className="text-slate-600 dark:text-text-secondary mb-6">
                  The request should be sent as a <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-surface-highlight text-primary font-mono text-sm">POST</code> to <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-surface-highlight font-mono text-sm text-slate-800 dark:text-slate-200">/api/v2/analyze</code>.
                </p>
                {/* Code Block Request */}
                <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl shadow-black/20 bg-code-bg">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-[#0d1117]">
                    <span className="text-xs font-mono text-slate-500">application/json</span>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    </div>
                  </div>
                  <div className="p-6 overflow-x-auto custom-scrollbar">
                    <pre className="font-mono text-sm leading-6"><code className="language-json">
<span className="text-slate-500">{`// POST /api/v2/analyze`}</span>
<span className="text-slate-400">{`{`}</span>
  <span className="text-sky-400">{`"url"`}</span><span className="text-slate-400">{`:`}</span> <span className="text-emerald-400">{`"https://secure-login-update.com/verify"`}</span><span className="text-slate-400">{`,`}</span>
  <span className="text-sky-400">{`"timestamp"`}</span><span className="text-slate-400">{`:`}</span> <span className="text-orange-400">{`1698245600`}</span><span className="text-slate-400">{`,`}</span>
  <span className="text-sky-400">{`"session_id"`}</span><span className="text-slate-400">{`:`}</span> <span className="text-emerald-400">{`"uuid-v4-generated-string"`}</span><span className="text-slate-400">{`,`}</span>
  
  <span className="text-slate-500">{`// Cryptographic hash of the DOM structure for caching`}</span>
  <span className="text-sky-400">{`"partial_dom_hash"`}</span><span className="text-slate-400">{`:`}</span> <span className="text-emerald-400">{`"a1b2c3d4e5f6..."`}</span><span className="text-slate-400">{`,`}</span>

  <span className="text-sky-400">{`"ssl_metadata"`}</span><span className="text-slate-400">{`: {`}</span>
    <span className="text-sky-400">{`"issuer"`}</span><span className="text-slate-400">{`:`}</span> <span className="text-emerald-400">{`"Let's Encrypt"`}</span><span className="text-slate-400">{`,`}</span>
    <span className="text-sky-400">{`"valid_from"`}</span><span className="text-slate-400">{`:`}</span> <span className="text-emerald-400">{`"2026-10-01T00:00:00Z"`}</span><span className="text-slate-400">{`,`}</span>
    <span className="text-sky-400">{`"is_ev"`}</span><span className="text-slate-400">{`:`}</span> <span className="text-pink-400">{`false`}</span>
  <span className="text-slate-400">{`},`}</span>

  <span className="text-slate-500">{`// Key text elements extracted from visible viewport`}</span>
  <span className="text-sky-400">{`"captured_text_snippets"`}</span><span className="text-slate-400">{`: [`}</span>
    <span className="text-emerald-400">{`"Urgent: Your account will be suspended"`}</span><span className="text-slate-400">{`,`}</span>
    <span className="text-emerald-400">{`"Verify your password immediately"`}</span>
  <span className="text-slate-400">{`],`}</span>

  <span className="text-sky-400">{`"input_fields"`}</span><span className="text-slate-400">{`: [`}</span>
    <span className="text-slate-400">{`{`}</span> <span className="text-sky-400">{`"type"`}</span><span className="text-slate-400">{`:`}</span> <span className="text-emerald-400">{`"password"`}</span><span className="text-slate-400">{`,`}</span> <span className="text-sky-400">{`"id"`}</span><span className="text-slate-400">{`:`}</span> <span className="text-emerald-400">{`"pass_input"`}</span> <span className="text-slate-400">{`}`}</span>
  <span className="text-slate-400">{`]`}</span>
<span className="text-slate-400">{`}`}</span>
</code></pre>
                  </div>
                </div>
              </section>
              {/* Response Payload Section */}
              <section className="mb-16 scroll-mt-24" id="response-payload">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-500">
                      <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
                    </span>
                    Response Payload
                  </h2>
                  <button className="group flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-xs font-medium text-slate-600 dark:text-text-secondary hover:border-primary hover:text-primary transition-all">
                    <span className="material-symbols-outlined text-[16px]">content_copy</span>
                    Copy Schema
                  </button>
                </div>
                <p className="text-slate-600 dark:text-text-secondary mb-6">
                  The API returns a detailed risk assessment object. The extension should primarily use <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-surface-highlight font-mono text-sm text-slate-800 dark:text-slate-200">recommended_action</code> to decide UI behavior.
                </p>
                {/* Code Block Response */}
                <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl shadow-black/20 bg-code-bg">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-[#0d1117]">
                    <span className="text-xs font-mono text-slate-500">application/json</span>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    </div>
                  </div>
                  <div className="p-6 overflow-x-auto custom-scrollbar">
                    <pre className="font-mono text-sm leading-6"><code className="language-json">
<span className="text-slate-400">{`{`}</span>
  <span className="text-slate-500">{`// 0.0 to 1.0 (Safe to Malicious)`}</span>
  <span className="text-sky-400">{`"phishing_score"`}</span><span className="text-slate-400">{`:`}</span> <span className="text-orange-400">{`0.98`}</span><span className="text-slate-400">{`,`}</span>
  
  <span className="text-sky-400">{`"analysis_id"`}</span><span className="text-slate-400">{`:`}</span> <span className="text-emerald-400">{`"ana_8f9e2d1c"`}</span><span className="text-slate-400">{`,`}</span>
  
  <span className="text-slate-500">{`// NLP derived urgency factor (low, medium, high, critical)`}</span>
  <span className="text-sky-400">{`"urgency_level"`}</span><span className="text-slate-400">{`:`}</span> <span className="text-emerald-400">{`"critical"`}</span><span className="text-slate-400">{`,`}</span>
  
  <span className="text-sky-400">{`"reason_codes"`}</span><span className="text-slate-400">{`: [`}</span>
    <span className="text-emerald-400">{`"URGENCY_KEYWORDS_DETECTED"`}</span><span className="text-slate-400">{`,`}</span>
    <span className="text-emerald-400">{`"DOMAIN_HOMOGLYPH"`}</span><span className="text-slate-400">{`,`}</span>
    <span className="text-emerald-400">{`"SSL_MISMATCH"`}</span>
  <span className="text-slate-400">{`],`}</span>

  <span className="text-slate-500">{`// UI directive for the extension`}</span>
  <span className="text-sky-400">{`"recommended_action"`}</span><span className="text-slate-400">{`:`}</span> <span className="text-emerald-400">{`"BLOCK_ACCESS"`}</span><span className="text-slate-400">{`,`}</span>

  <span className="text-sky-400">{`"details"`}</span><span className="text-slate-400">{`: {`}</span>
    <span className="text-sky-400">{`"detected_brand"`}</span><span className="text-slate-400">{`:`}</span> <span className="text-emerald-400">{`"PayPal"`}</span><span className="text-slate-400">{`,`}</span>
    <span className="text-sky-400">{`"confidence"`}</span><span className="text-slate-400">{`:`}</span> <span className="text-orange-400">{`0.95`}</span>
  <span className="text-slate-400">{`}`}</span>
<span className="text-slate-400">{`}`}</span>
</code></pre>
                  </div>
                </div>
                {/* Params Table */}
                <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 dark:bg-surface-highlight text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">
                      <tr>
                        <th className="px-6 py-3 font-semibold">Field</th>
                        <th className="px-6 py-3 font-semibold">Type</th>
                        <th className="px-6 py-3 font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <tr className="hover:bg-slate-50 dark:hover:bg-surface-highlight/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-primary">phishing_score</td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">float</td>
                        <td className="px-6 py-4 text-slate-600 dark:text-text-secondary">A normalized score between 0 and 1 indicating probability of malicious intent.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-surface-highlight/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-primary">urgency_level</td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">string</td>
                        <td className="px-6 py-4 text-slate-600 dark:text-text-secondary">Categorical assessment of language urgency (low, medium, high, critical).</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-surface-highlight/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-primary">recommended_action</td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">enum</td>
                        <td className="px-6 py-4 text-slate-600 dark:text-text-secondary">Suggests UI behavior: <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">ALLOW</code>, <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">WARN</code>, or <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">BLOCK_ACCESS</code>.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              {/* Feedback Section */}
              <div className="mt-4 mb-20 flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-surface-dark/50 p-8 text-center">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Was this page helpful?</h3>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 rounded-lg bg-white dark:bg-surface-highlight border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium text-slate-700 dark:text-text-secondary hover:border-primary hover:text-primary transition-all">
                    <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                    Yes
                  </button>
                  <button className="flex items-center gap-2 rounded-lg bg-white dark:bg-surface-highlight border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium text-slate-700 dark:text-text-secondary hover:border-red-500 hover:text-red-500 transition-all">
                    <span className="material-symbols-outlined text-[18px]">thumb_down</span>
                    No
                  </button>
                </div>
              </div>
            </div>
          </main>
          {/* Right TOC (Hidden on small screens) */}
          <aside className="hidden xl:block w-64 py-10 px-6 sticky top-16 h-[calc(100vh-64px)]">
            <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-4">On this page</h5>
            <ul className="flex flex-col gap-3 text-sm border-l border-slate-200 dark:border-slate-800">
              <li>
                <a className="block pl-4 text-slate-500 dark:text-text-secondary hover:text-primary hover:border-l hover:-ml-px hover:border-primary transition-all" href="#request-payload">Request Payload</a>
              </li>
              <li>
                <a className="block pl-4 text-primary font-medium border-l -ml-px border-primary transition-all" href="#response-payload">Response Payload</a>
              </li>
              <li>
                <Link className="block pl-4 text-slate-500 dark:text-text-secondary hover:text-primary hover:border-l hover:-ml-px hover:border-primary transition-all" to='/panel'>Error Handling</Link>
              </li>
              <li>
                <Link className="block pl-4 text-slate-500 dark:text-text-secondary hover:text-primary hover:border-l hover:-ml-px hover:border-primary transition-all" to='/panel'>Examples</Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
