import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface APIDocumentationProps {
  onBack: () => void;
}

export default function APIDocumentation({ onBack }: APIDocumentationProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased font-display min-h-screen">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-primary cursor-pointer" onClick={onBack}>
              <span className="material-symbols-outlined text-3xl font-bold">shield_person</span>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">PhishGuard <span className="text-primary">API</span></h2>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" to='/panel'>Guides</Link>
              <Link className="text-primary text-sm font-semibold border-b-2 border-primary py-5" to='/panel'>Reference</Link>
              <Link className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" to='/panel'>Changelog</Link>
              <Link className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" to='/centro-ayuda'>Support</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input className="w-64 bg-slate-100 dark:bg-slate-800 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary" placeholder="Buscar documentation..." type="text" />
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm">Log In</button>
            <div className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
              <img className="w-full h-full object-cover" alt="User avatar icon placeholder" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-[1440px] mx-auto flex min-h-[calc(100vh-64px)]">
        {/* Sidebar Navigation */}
        <aside className="w-72 border-r border-slate-200 dark:border-slate-800 p-6 hidden lg:block sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
          <div className="space-y-8">
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Getting Started</h5>
              <ul className="space-y-1">
                <li><Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to='/panel'><span className="material-symbols-outlined text-lg">info</span>Introduction</Link></li>
                <li><Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800" to='/panel'><span className="material-symbols-outlined text-lg">lock</span>Authentication</Link></li>
                <li><Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to='/panel'><span className="material-symbols-outlined text-lg">error</span>Errors</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Endpoints</h5>
              <ul className="space-y-1">
                <li><Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-primary bg-primary/10 transition-colors" to='/panel'><span className="material-symbols-outlined text-lg">globe</span>URL Scan</Link></li>
                <li><Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to='/panel'><span className="material-symbols-outlined text-lg">domain_verification</span>Domain Lookup</Link></li>
                <li><Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to='/informes'><span className="material-symbols-outlined text-lg">history</span>Recent Scans</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Advanced</h5>
              <ul className="space-y-1">
                <li><Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to='/panel'><span className="material-symbols-outlined text-lg">webhook</span>Webhooks</Link></li>
                <li><Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to='/panel'><span className="material-symbols-outlined text-lg">code</span>SDKs</Link></li>
                <li><Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to='/panel'><span className="material-symbols-outlined text-lg">speed</span>Rate Limits</Link></li>
              </ul>
            </div>
          </div>
        </aside>
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col lg:flex-row">
          {/* Documentation Column */}
          <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
            <nav className="flex gap-2 text-sm text-slate-500 mb-6">
              <Link className="hover:text-primary transition-colors" to="/apidocumentation">Docs</Link>
              <span>/</span>
              <Link className="hover:text-primary transition-colors" to='/panel'>Endpoints</Link>
              <span>/</span>
              <span className="text-slate-900 dark:text-slate-100 font-medium">URL Scan</span>
            </nav>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-md text-sm font-bold">POST</span>
                <code className="text-lg font-mono text-slate-700 dark:text-slate-300">/v2/url/scan</code>
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Analyze URL</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Detect phishing threats and malicious patterns in real-time. Our scanning engine performs behavioral analysis, brand impersonation detection, and visual verification.
              </p>
              <h3 className="text-xl font-bold mb-4">Request Body</h3>
              <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden mb-8">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Field</th>
                      <th className="px-4 py-3 font-semibold">Type</th>
                      <th className="px-4 py-3 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    <tr>
                      <td className="px-4 py-3 font-mono text-primary">url</td>
                      <td className="px-4 py-3 text-slate-500">string</td>
                      <td className="px-4 py-3">The full URL to be analyzed (required).</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-primary">visibility</td>
                      <td className="px-4 py-3 text-slate-500">string</td>
                      <td className="px-4 py-3">Scan visibility: <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">public</code> or <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">private</code>.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-primary">tags</td>
                      <td className="px-4 py-3 text-slate-500">array</td>
                      <td className="px-4 py-3">Custom tags for tracking.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 className="text-xl font-bold mb-4">Response Object</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Returns a scan result object containing threat score and categorization.</p>
            </div>
          </div>
          {/* Interactive Console & Code Column */}
          <div className="w-full lg:w-[480px] bg-slate-900 text-slate-300 p-8 flex flex-col gap-8 lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] overflow-y-auto">
            {/* Try it out section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Interactive Console</h4>
                <span className="text-[10px] bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded">BETA</span>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <label className="block text-xs font-semibold text-slate-400 mb-2">TARGET URL</label>
                <input className="w-full bg-slate-900 border-slate-700 rounded-md text-sm text-white focus:ring-primary focus:border-primary mb-4" type="text" defaultValue="https://secure-login-phish.net" />
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-md transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-lg">play_arrow</span>
                  Run Request
                </button>
              </div>
            </div>
            {/* Code Samples section */}
            <div className="space-y-4 flex-1 flex flex-col">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Example Request</h4>
                <div className="flex gap-2">
                  <button className="text-xs font-bold text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded">cURL</button>
                  <button className="text-xs font-bold text-white px-2 py-1 bg-slate-700 rounded">Node.js</button>
                  <button className="text-xs font-bold text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded">Python</button>
                </div>
              </div>
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm leading-relaxed overflow-hidden flex-1 relative border border-slate-800 shadow-inner overflow-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#334155 transparent' }}>
                <button className="absolute top-2 right-2 text-slate-500 hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg">content_copy</span>
                </button>
                <div className="text-slate-400">
                  <span className="text-blue-400">const</span> phishguard = <span className="text-yellow-300">require</span>(<span className="text-green-400">'phishguard-sdk'</span>);<br /><br />
                  <span className="text-blue-400">const</span> client = <span className="text-blue-400">new</span> phishguard.<span className="text-yellow-300">Client</span>({'{'}<br />
                  &nbsp;&nbsp;apiKey: <span className="text-green-400">'YOUR_API_KEY'</span><br />
                  {'}'});<br /><br />
                  <span className="text-blue-400">async</span> <span className="text-blue-400">function</span> <span className="text-yellow-300">scanUrl</span>() {'{'}<br />
                  &nbsp;&nbsp;<span className="text-blue-400">const</span> result = <span className="text-blue-400">await</span> client.<span className="text-yellow-300">scan</span>({'{'}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;url: <span className="text-green-400">'https://secure-login-phish.net'</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;visibility: <span className="text-green-400">'private'</span><br />
                  &nbsp;&nbsp;{'}'});<br /><br />
                  &nbsp;&nbsp;console.<span className="text-yellow-300">log</span>(result.threat_score);<br />
                  {'}'}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Response</h4>
                <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm border border-slate-800 text-green-400/90">
                  {'{'}<br />
                  &nbsp;&nbsp;<span className="text-slate-400">"status":</span> "success",<br />
                  &nbsp;&nbsp;<span className="text-slate-400">"threat_score":</span> 98,<br />
                  &nbsp;&nbsp;<span className="text-slate-400">"category":</span> "phishing",<br />
                  &nbsp;&nbsp;<span className="text-slate-400">"scan_id":</span> "scn_49201x"<br />
                  {'}'}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Footer Banner */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to secure your application?</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-8">Join over 5,000 developers who use PhishGuard to protect their users from credential theft and malware.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary text-white font-bold px-8 py-3 rounded-xl hover:shadow-lg transition-all">Get Started for Free</button>
            <button className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold px-8 py-3 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">Contact Enterprise Sales</button>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>creada en 2026 Jonathan Jimenez Escobar</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link className="hover:text-primary" to="/system-status">Estado</Link>
              <Link className="hover:text-primary" to="/privacy-compliance">Privacy Policy</Link>
              <Link className="hover:text-primary" to="/terms-of-service">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
