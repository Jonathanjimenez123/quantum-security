import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Home, Terminal, Shield, Bell, AlertCircle, Copy } from 'lucide-react';

interface IntegrationExamplesProps {
  onBack?: () => void;
}

export default function IntegrationExamples({ onBack }: IntegrationExamplesProps) {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-[#f8f6f6] dark:bg-[#221610] text-slate-900 dark:text-slate-100 font-['Public_Sans',sans-serif] transition-colors duration-200">
      <div className="layout-container flex h-full grow flex-col">
        {/* Navigation Bar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#ec5b13]/20 px-6 md:px-10 py-3 bg-[#f8f6f6] dark:bg-[#221610] sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-[#ec5b13]">
              <div className="size-6">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">AI Shield</h2>
            </div>
            <nav className="hidden md:flex items-center gap-9">
              <Link className="text-slate-600 dark:text-slate-400 hover:text-[#ec5b13] dark:hover:text-[#ec5b13] text-sm font-medium transition-colors" to="/apidocumentation">Docs</Link>
              <Link className="text-slate-600 dark:text-slate-400 hover:text-[#ec5b13] dark:hover:text-[#ec5b13] text-sm font-medium transition-colors" to="/apidocumentation">API Reference</Link>
              <Link className="text-slate-600 dark:text-slate-400 hover:text-[#ec5b13] dark:hover:text-[#ec5b13] text-sm font-medium transition-colors" to='/panel'>Showcase</Link>
              <Link className="text-slate-600 dark:text-slate-400 hover:text-[#ec5b13] dark:hover:text-[#ec5b13] text-sm font-medium transition-colors" to='/centro-ayuda'>Support</Link>
            </nav>
          </div>
          <div className="flex flex-1 justify-end gap-4 items-center">
            <label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full border border-slate-200 dark:border-[#ec5b13]/30">
                <div className="text-slate-400 flex items-center justify-center pl-4 bg-transparent">
                  <Search className="w-5 h-5" />
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 h-full placeholder:text-slate-400 px-4 text-sm" placeholder="Buscar docs..." />
              </div>
            </label>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-xl h-10 px-4 bg-[#ec5b13] text-white text-sm font-bold transition-transform active:scale-95">
              <span className="truncate">Console</span>
            </button>
          </div>
        </header>

        <main className="flex-1 flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="w-full md:w-64 border-r border-slate-200 dark:border-[#ec5b13]/10 p-6 flex flex-col gap-6 bg-slate-50 dark:bg-[#221610]/50">
            {onBack && (
              <button 
                onClick={onBack}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-[#ec5b13] dark:hover:text-[#ec5b13] transition-colors mb-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Volver al Panel de Control</span>
              </button>
            )}
            <div className="flex flex-col gap-1">
              <h1 className="text-slate-900 dark:text-slate-100 text-base font-bold">Developer Hub</h1>
              <p className="text-[#ec5b13] text-xs font-medium bg-[#ec5b13]/10 px-2 py-0.5 rounded-full self-start">v1.2.0-stable</p>
            </div>
            <nav className="flex flex-col gap-1">
              <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#ec5b13]/10 transition-colors" to='/panel'>
                <Home className="w-5 h-5" />
                <p className="text-sm font-medium">Getting Started</p>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#ec5b13]/10 text-[#ec5b13]" to='/panel'>
                <Terminal className="w-5 h-5" />
                <p className="text-sm font-bold">Integration Guides</p>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#ec5b13]/10 transition-colors" to='/panel'>
                <Shield className="w-5 h-5" />
                <p className="text-sm font-medium">URL Scanning</p>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#ec5b13]/10 transition-colors" to='/panel'>
                <Bell className="w-5 h-5" />
                <p className="text-sm font-medium">Webhooks</p>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#ec5b13]/10 transition-colors" to="/security-alert-interface">
                <AlertCircle className="w-5 h-5" />
                <p className="text-sm font-medium">Error Codes</p>
              </Link>
            </nav>
            <div className="mt-auto pt-6 border-t border-slate-200 dark:border-[#ec5b13]/10">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-[#ec5b13]/20 flex items-center justify-center overflow-hidden">
                  <img className="w-full h-full object-cover" alt="User avatar icon" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold">Dev Account</p>
                  <p className="text-[10px] text-slate-500">Tier: Enterprise</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <section className="flex-1 p-6 md:p-12 max-w-5xl mx-auto w-full">
            <div className="flex flex-col gap-4 mb-12">
              <div className="flex items-center gap-2 text-[#ec5b13] font-bold text-sm uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                SDK Documentation
              </div>
              <h1 className="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                AI Shield Developer <br /><span className="text-[#ec5b13]">Integration Examples</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
                Step-by-step guides to integrate AI Shield's security layers into your Python and Node.js applications. Our API provides real-time threat detection for URLs, files, and incoming webhooks.
              </p>
            </div>

            {/* Section 1: Authentication */}
            <div className="mb-16 scroll-mt-24" id="auth">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center size-8 rounded-lg bg-[#ec5b13] text-white font-bold">1</span>
                <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">API Authentication</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                All API requests must include your API Key in the <code className="bg-[#ec5b13]/10 text-[#ec5b13] px-1.5 py-0.5 rounded font-mono text-sm">X-Shield-Key</code> header. 
                Keep your keys secure and never expose them in client-side code or public repositories.
              </p>
              {/* Code Tabs Integration */}
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-[#ec5b13]/20 shadow-xl">
                <div className="flex items-center justify-between bg-slate-100 dark:bg-[#221610]/80 px-4 py-2 border-b border-slate-200 dark:border-[#ec5b13]/10">
                  <div className="flex gap-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Python (requests)</span>
                  </div>
                  <button className="text-[#ec5b13] hover:bg-[#ec5b13]/10 p-1.5 rounded-lg flex items-center gap-1 transition-all">
                    <Copy className="w-4 h-4" />
                    <span className="text-xs font-bold">Copy</span>
                  </button>
                </div>
                <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-slate-300 bg-[#1a110c]">
                  <span className="text-[#ec5b13]">import</span> requests{'\n\n'}
                  url = <span className="text-[#a3be8c]">"https://api.aishield.io/v1/auth/verify"</span>{'\n'}
                  headers = {'{\n'}
                  {'    '}<span className="text-[#a3be8c]">"X-Shield-Key"</span>: <span className="text-[#a3be8c]">"YOUR_API_KEY_HERE"</span>,{'\n'}
                  {'    '}<span className="text-[#a3be8c]">"Content-Type"</span>: <span className="text-[#a3be8c]">"application/json"</span>{'\n'}
                  {'}'}{'\n\n'}
                  response = requests.<span className="text-[#88c0d0]">get</span>(url, headers=headers){'\n'}
                  <span className="text-[#ec5b13]">print</span>(response.<span className="text-[#88c0d0]">json</span>())
                </pre>
              </div>
            </div>

            {/* Section 2: URL Analysis */}
            <div className="mb-16 scroll-mt-24" id="analysis">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center size-8 rounded-lg bg-[#ec5b13] text-white font-bold">2</span>
                <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">URL Analysis Request</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Submit a URL for a comprehensive safety scan. Our AI models will analyze the destination for phishing, malware, and social engineering patterns.
              </p>
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-[#ec5b13]/20 shadow-xl">
                <div className="flex items-center justify-between bg-slate-100 dark:bg-[#221610]/80 px-4 py-2 border-b border-slate-200 dark:border-[#ec5b13]/10">
                  <div className="flex gap-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Node.js (Axios)</span>
                  </div>
                  <button className="text-[#ec5b13] hover:bg-[#ec5b13]/10 p-1.5 rounded-lg flex items-center gap-1 transition-all">
                    <Copy className="w-4 h-4" />
                    <span className="text-xs font-bold">Copy</span>
                  </button>
                </div>
                <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-slate-300 bg-[#1a110c]">
                  <span className="text-[#ec5b13]">const</span> axios = <span className="text-[#88c0d0]">require</span>(<span className="text-[#a3be8c]">'axios'</span>);{'\n\n'}
                  <span className="text-[#ec5b13]">const</span> scanUrl = <span className="text-[#ec5b13]">async</span> () =&gt; {'{\n'}
                  {'  '}<span className="text-[#ec5b13]">const</span> data = {'{'} <span className="text-[#a3be8c]">url</span>: <span className="text-[#a3be8c]">'https://suspicious-site.net'</span> {'}'};{'\n  \n'}
                  {'  '}<span className="text-[#ec5b13]">try</span> {'{\n'}
                  {'    '}<span className="text-[#ec5b13]">const</span> res = <span className="text-[#ec5b13]">await</span> axios.<span className="text-[#88c0d0]">post</span>(<span className="text-[#a3be8c]">'https://api.aishield.io/v1/scan'</span>, data, {'{\n'}
                  {'      '}headers: {'{'} <span className="text-[#a3be8c]">'X-Shield-Key'</span>: <span className="text-[#a3be8c]">'YOUR_API_KEY'</span> {'}\n'}
                  {'    }'});{'\n'}
                  {'    '}console.<span className="text-[#88c0d0]">log</span>(res.data.scan_id); <span className="text-[#634d42]">// Returns unique scan ID</span>{'\n'}
                  {'  }'} <span className="text-[#ec5b13]">catch</span> (err) {'{\n'}
                  {'    '}console.<span className="text-[#88c0d0]">error</span>(err);{'\n'}
                  {'  }\n'}
                  {'}'};
                </pre>
              </div>
            </div>

            {/* Section 3: Webhook Listener */}
            <div className="mb-16 scroll-mt-24" id="webhooks">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center size-8 rounded-lg bg-[#ec5b13] text-white font-bold">3</span>
                <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">Webhook Listener</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Configure a webhook to receive real-time alerts when a scan completes. We'll POST a JSON payload to your server with the results.
              </p>
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-[#ec5b13]/20 shadow-xl">
                <div className="flex items-center justify-between bg-slate-100 dark:bg-[#221610]/80 px-4 py-2 border-b border-slate-200 dark:border-[#ec5b13]/10">
                  <div className="flex gap-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Python (Flask)</span>
                  </div>
                  <button className="text-[#ec5b13] hover:bg-[#ec5b13]/10 p-1.5 rounded-lg flex items-center gap-1 transition-all">
                    <Copy className="w-4 h-4" />
                    <span className="text-xs font-bold">Copy</span>
                  </button>
                </div>
                <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-slate-300 bg-[#1a110c]">
                  <span className="text-[#ec5b13]">from</span> flask <span className="text-[#ec5b13]">import</span> Flask, request, jsonify{'\n\n'}
                  app = <span className="text-[#88c0d0]">Flask</span>(__name__){'\n\n'}
                  <span className="text-[#88c0d0]">@app.route</span>(<span className="text-[#a3be8c]">'/webhooks/aishield'</span>, methods=[<span className="text-[#a3be8c]">'POST'</span>]){'\n'}
                  <span className="text-[#ec5b13]">def</span> <span className="text-[#88c0d0]">handle_webhook</span>():{'\n'}
                  {'    '}data = request.json{'\n    \n'}
                  {'    '}<span className="text-[#ec5b13]">if</span> data[<span className="text-[#a3be8c]">'risk_score'</span>] &gt; <span className="text-[#a3be8c]">75</span>:{'\n'}
                  {'        '}<span className="text-[#88c0d0]">block_access</span>(data[<span className="text-[#a3be8c]">'target_url'</span>]){'\n        \n'}
                  {'    '}<span className="text-[#ec5b13]">return</span> <span className="text-[#88c0d0]">jsonify</span>({'{'}<span className="text-[#a3be8c]">"status"</span>: <span className="text-[#a3be8c]">"received"</span>{'}'}), <span className="text-[#a3be8c]">200</span>{'\n\n'}
                  <span className="text-[#ec5b13]">if</span> __name__ == <span className="text-[#a3be8c]">'__main__'</span>:{'\n'}
                  {'    '}app.<span className="text-[#88c0d0]">run</span>(port=<span className="text-[#a3be8c]">5000</span>)
                </pre>
              </div>
            </div>

            {/* Section 4: Go Implementation */}
            <div className="mb-16 scroll-mt-24" id="go-impl">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center size-8 rounded-lg bg-[#ec5b13] text-white font-bold">4</span>
                <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">Go Implementation</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Using Go's standard <code className="bg-[#ec5b13]/10 text-[#ec5b13] px-1.5 py-0.5 rounded font-mono text-sm">net/http</code> package to perform a secure URL analysis request.
              </p>
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-[#ec5b13]/20 shadow-xl">
                <div className="flex items-center justify-between bg-slate-100 dark:bg-[#221610]/80 px-4 py-2 border-b border-slate-200 dark:border-[#ec5b13]/10">
                  <div className="flex gap-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Go (net/http)</span>
                  </div>
                  <button className="text-[#ec5b13] hover:bg-[#ec5b13]/10 p-1.5 rounded-lg flex items-center gap-1 transition-all">
                    <Copy className="w-4 h-4" />
                    <span className="text-xs font-bold">Copy</span>
                  </button>
                </div>
                <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-slate-300 bg-[#1a110c]">
                  <span className="text-[#ec5b13]">package</span> main{'\n\n'}
                  <span className="text-[#ec5b13]">import</span> ({'\n'}
                  {'    '}<span className="text-[#a3be8c]">"bytes"</span>{'\n'}
                  {'    '}<span className="text-[#a3be8c]">"encoding/json"</span>{'\n'}
                  {'    '}<span className="text-[#a3be8c]">"net/http"</span>{'\n'}
                  ){'\n\n'}
                  <span className="text-[#ec5b13]">type</span> AnalysisRequest <span className="text-[#ec5b13]">struct</span> {'{\n'}
                  {'    '}URL <span className="text-[#a3be8c]">string</span> `json:"url"`{'\n'}
                  {'}\n\n'}
                  <span className="text-[#ec5b13]">func</span> <span className="text-[#88c0d0]">main</span>() {'{\n'}
                  {'    '}data := AnalysisRequest{'{'}URL: <span className="text-[#a3be8c]">"https://suspicious-site.net"</span>{'}'}{'\n'}
                  {'    '}payload, _ := json.<span className="text-[#88c0d0]">Marshal</span>(data){'\n\n'}
                  {'    '}req, _ := http.<span className="text-[#88c0d0]">NewRequest</span>(<span className="text-[#a3be8c]">"POST"</span>, <span className="text-[#a3be8c]">"https://api.aishield.io/v1/scan"</span>, bytes.<span className="text-[#88c0d0]">NewBuffer</span>(payload)){'\n'}
                  {'    '}req.Header.<span className="text-[#88c0d0]">Set</span>(<span className="text-[#a3be8c]">"X-Shield-Key"</span>, <span className="text-[#a3be8c]">"YOUR_API_KEY"</span>){'\n'}
                  {'    '}req.Header.<span className="text-[#88c0d0]">Set</span>(<span className="text-[#a3be8c]">"Content-Type"</span>, <span className="text-[#a3be8c]">"application/json"</span>){'\n\n'}
                  {'    '}client := &amp;http.Client{'{}{}\n'}
                  {'    '}resp, _ := client.<span className="text-[#88c0d0]">Do</span>(req){'\n'}
                  {'    '}<span className="text-[#ec5b13]">defer</span> resp.Body.<span className="text-[#88c0d0]">Close</span>(){'\n'}
                  {'}'}
                </pre>
              </div>
            </div>

            {/* Section 5: PHP Implementation */}
            <div className="mb-16 scroll-mt-24" id="php-impl">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center size-8 rounded-lg bg-[#ec5b13] text-white font-bold">5</span>
                <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">PHP Implementation</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                A standard PHP implementation using <code className="bg-[#ec5b13]/10 text-[#ec5b13] px-1.5 py-0.5 rounded font-mono text-sm">cURL</code> to interact with the AI Shield API.
              </p>
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-[#ec5b13]/20 shadow-xl">
                <div className="flex items-center justify-between bg-slate-100 dark:bg-[#221610]/80 px-4 py-2 border-b border-slate-200 dark:border-[#ec5b13]/10">
                  <div className="flex gap-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">PHP (cURL)</span>
                  </div>
                  <button className="text-[#ec5b13] hover:bg-[#ec5b13]/10 p-1.5 rounded-lg flex items-center gap-1 transition-all">
                    <Copy className="w-4 h-4" />
                    <span className="text-xs font-bold">Copy</span>
                  </button>
                </div>
                <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-slate-300 bg-[#1a110c]">
                  <span className="text-[#634d42]">&lt;?php</span>{'\n\n'}
                  <span className="text-[#ec5b13]">$data</span> = [<span className="text-[#a3be8c]">'url'</span> =&gt; <span className="text-[#a3be8c]">'https://suspicious-site.net'</span>];{'\n'}
                  <span className="text-[#ec5b13]">$payload</span> = <span className="text-[#88c0d0]">json_encode</span>(<span className="text-[#ec5b13]">$data</span>);{'\n\n'}
                  <span className="text-[#ec5b13]">$ch</span> = <span className="text-[#88c0d0]">curl_init</span>(<span className="text-[#a3be8c]">'https://api.aishield.io/v1/scan'</span>);{'\n'}
                  <span className="text-[#88c0d0]">curl_setopt</span>(<span className="text-[#ec5b13]">$ch</span>, CURLOPT_RETURNTRANSFER, <span className="text-[#ec5b13]">true</span>);{'\n'}
                  <span className="text-[#88c0d0]">curl_setopt</span>(<span className="text-[#ec5b13]">$ch</span>, CURLOPT_POST, <span className="text-[#ec5b13]">true</span>);{'\n'}
                  <span className="text-[#88c0d0]">curl_setopt</span>(<span className="text-[#ec5b13]">$ch</span>, CURLOPT_POSTFIELDS, <span className="text-[#ec5b13]">$payload</span>);{'\n'}
                  <span className="text-[#88c0d0]">curl_setopt</span>(<span className="text-[#ec5b13]">$ch</span>, CURLOPT_HTTPHEADER, [{'\n'}
                  {'    '}<span className="text-[#a3be8c]">'X-Shield-Key: YOUR_API_KEY'</span>,{'\n'}
                  {'    '}<span className="text-[#a3be8c]">'Content-Type: application/json'</span>{'\n'}
                  ]);{'\n\n'}
                  <span className="text-[#ec5b13]">$response</span> = <span className="text-[#88c0d0]">curl_exec</span>(<span className="text-[#ec5b13]">$ch</span>);{'\n'}
                  <span className="text-[#ec5b13]">$result</span> = <span className="text-[#88c0d0]">json_decode</span>(<span className="text-[#ec5b13]">$response</span>, <span className="text-[#ec5b13]">true</span>);{'\n\n'}
                  <span className="text-[#88c0d0]">curl_close</span>(<span className="text-[#ec5b13]">$ch</span>);{'\n'}
                  <span className="text-[#ec5b13]">print_r</span>(<span className="text-[#ec5b13]">$result</span>);
                </pre>
              </div>
            </div>

            {/* Section 6: Ruby Implementation */}
            <div className="mb-16 scroll-mt-24" id="ruby-impl">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center size-8 rounded-lg bg-[#ec5b13] text-white font-bold">6</span>
                <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">Ruby Implementation</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                A clean Ruby implementation using the built-in <code className="bg-[#ec5b13]/10 text-[#ec5b13] px-1.5 py-0.5 rounded font-mono text-sm">net/http</code> and <code className="bg-[#ec5b13]/10 text-[#ec5b13] px-1.5 py-0.5 rounded font-mono text-sm">uri</code> libraries.
              </p>
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-[#ec5b13]/20 shadow-xl">
                <div className="flex items-center justify-between bg-slate-100 dark:bg-[#221610]/80 px-4 py-2 border-b border-slate-200 dark:border-[#ec5b13]/10">
                  <div className="flex gap-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Ruby (net/http)</span>
                  </div>
                  <button className="text-[#ec5b13] hover:bg-[#ec5b13]/10 p-1.5 rounded-lg flex items-center gap-1 transition-all">
                    <Copy className="w-4 h-4" />
                    <span className="text-xs font-bold">Copy</span>
                  </button>
                </div>
                <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-slate-300 bg-[#1a110c]">
                  <span className="text-[#ec5b13]">require</span> <span className="text-[#a3be8c]">'net/http'</span>{'\n'}
                  <span className="text-[#ec5b13]">require</span> <span className="text-[#a3be8c]">'uri'</span>{'\n'}
                  <span className="text-[#ec5b13]">require</span> <span className="text-[#a3be8c]">'json'</span>{'\n\n'}
                  uri = URI.<span className="text-[#88c0d0]">parse</span>(<span className="text-[#a3be8c]">"https://api.aishield.io/v1/scan"</span>){'\n'}
                  header = {'{'}<span className="text-[#a3be8c]">'Content-Type'</span>: <span className="text-[#a3be8c]">'application/json'</span>, <span className="text-[#a3be8c]">'X-Shield-Key'</span>: <span className="text-[#a3be8c]">'YOUR_API_KEY'</span>{'}'}{'\n'}
                  data = {'{'}<span className="text-[#a3be8c]">url</span>: <span className="text-[#a3be8c]">'https://suspicious-site.net'</span>{'}'}{'\n\n'}
                  http = Net::HTTP.<span className="text-[#88c0d0]">new</span>(uri.host, uri.port){'\n'}
                  http.use_ssl = <span className="text-[#ec5b13]">true</span>{'\n'}
                  request = Net::HTTP::Post.<span className="text-[#88c0d0]">new</span>(uri.request_uri, header){'\n'}
                  request.body = data.<span className="text-[#88c0d0]">to_json</span>{'\n\n'}
                  response = http.<span className="text-[#88c0d0]">request</span>(request){'\n'}
                  puts response.body
                </pre>
              </div>
            </div>

            {/* Section 7: Java Implementation */}
            <div className="mb-16 scroll-mt-24" id="java-impl">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center size-8 rounded-lg bg-[#ec5b13] text-white font-bold">7</span>
                <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">Java Implementation</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Using Java 11's <code className="bg-[#ec5b13]/10 text-[#ec5b13] px-1.5 py-0.5 rounded font-mono text-sm">java.net.http.HttpClient</code> for a modern, asynchronous-capable API interaction.
              </p>
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-[#ec5b13]/20 shadow-xl">
                <div className="flex items-center justify-between bg-slate-100 dark:bg-[#221610]/80 px-4 py-2 border-b border-slate-200 dark:border-[#ec5b13]/10">
                  <div className="flex gap-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Java (HttpClient)</span>
                  </div>
                  <button className="text-[#ec5b13] hover:bg-[#ec5b13]/10 p-1.5 rounded-lg flex items-center gap-1 transition-all">
                    <Copy className="w-4 h-4" />
                    <span className="text-xs font-bold">Copy</span>
                  </button>
                </div>
                <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-slate-300 bg-[#1a110c]">
                  <span className="text-[#ec5b13]">import</span> java.net.URI;{'\n'}
                  <span className="text-[#ec5b13]">import</span> java.net.http.HttpClient;{'\n'}
                  <span className="text-[#ec5b13]">import</span> java.net.http.HttpRequest;{'\n'}
                  <span className="text-[#ec5b13]">import</span> java.net.http.HttpResponse;{'\n\n'}
                  <span className="text-[#ec5b13]">public class</span> Main {'{\n'}
                  {'    '}<span className="text-[#ec5b13]">public static void</span> <span className="text-[#88c0d0]">main</span>(String[] args) <span className="text-[#ec5b13]">throws</span> Exception {'{\n'}
                  {'        '}HttpClient client = HttpClient.<span className="text-[#88c0d0]">newHttpClient</span>();{'\n'}
                  {'        '}String json = <span className="text-[#a3be8c]">{'"{\\"url\\": \\"https://suspicious-site.net\\"}"'}</span>;{'\n\n'}
                  {'        '}HttpRequest request = HttpRequest.<span className="text-[#88c0d0]">newBuilder</span>(){'\n'}
                  {'            '}.<span className="text-[#88c0d0]">uri</span>(URI.<span className="text-[#88c0d0]">create</span>(<span className="text-[#a3be8c]">"https://api.aishield.io/v1/scan"</span>)){'\n'}
                  {'            '}.<span className="text-[#88c0d0]">header</span>(<span className="text-[#a3be8c]">"Content-Type"</span>, <span className="text-[#a3be8c]">"application/json"</span>){'\n'}
                  {'            '}.<span className="text-[#88c0d0]">header</span>(<span className="text-[#a3be8c]">"X-Shield-Key"</span>, <span className="text-[#a3be8c]">"YOUR_API_KEY"</span>){'\n'}
                  {'            '}.<span className="text-[#88c0d0]">POST</span>(HttpRequest.BodyPublishers.<span className="text-[#88c0d0]">ofString</span>(json)){'\n'}
                  {'            '}.<span className="text-[#88c0d0]">build</span>();{'\n\n'}
                  {'        '}HttpResponse&lt;String&gt; response = client.<span className="text-[#88c0d0]">send</span>(request, {'\n'}
                  {'            '}HttpResponse.BodyHandlers.<span className="text-[#88c0d0]">ofString</span>());{'\n'}
                  {'        \n'}
                  {'        '}System.out.<span className="text-[#88c0d0]">println</span>(response.<span className="text-[#88c0d0]">body</span>());{'\n'}
                  {'    }\n'}
                  {'}'}
                </pre>
              </div>
            </div>

            {/* Section 8: C# Implementation */}
            <div className="mb-16 scroll-mt-24" id="csharp-impl">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center size-8 rounded-lg bg-[#ec5b13] text-white font-bold">8</span>
                <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">C# (.NET) Implementation</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Using .NET's modern <code className="bg-[#ec5b13]/10 text-[#ec5b13] px-1.5 py-0.5 rounded font-mono text-sm">HttpClient</code> and <code className="bg-[#ec5b13]/10 text-[#ec5b13] px-1.5 py-0.5 rounded font-mono text-sm">System.Text.Json</code> for a robust asynchronous integration.
              </p>
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-[#ec5b13]/20 shadow-xl">
                <div className="flex items-center justify-between bg-slate-100 dark:bg-[#221610]/80 px-4 py-2 border-b border-slate-200 dark:border-[#ec5b13]/10">
                  <div className="flex gap-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">C# (HttpClient)</span>
                  </div>
                  <button className="text-[#ec5b13] hover:bg-[#ec5b13]/10 p-1.5 rounded-lg flex items-center gap-1 transition-all">
                    <Copy className="w-4 h-4" />
                    <span className="text-xs font-bold">Copy</span>
                  </button>
                </div>
                <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-slate-300 bg-[#1a110c]">
                  <span className="text-[#ec5b13]">using</span> System.Net.Http;{'\n'}
                  <span className="text-[#ec5b13]">using</span> System.Text;{'\n'}
                  <span className="text-[#ec5b13]">using</span> System.Text.Json;{'\n'}
                  <span className="text-[#ec5b13]">using</span> System.Threading.Tasks;{'\n\n'}
                  <span className="text-[#ec5b13]">public class</span> AIShieldService{'\n'}
                  {'{'}{'\n'}
                  {'    '}<span className="text-[#ec5b13]">private static readonly</span> HttpClient client = <span className="text-[#ec5b13]">new</span> <span className="text-[#88c0d0]">HttpClient</span>();{'\n\n'}
                  {'    '}<span className="text-[#ec5b13]">public async</span> Task <span className="text-[#88c0d0]">PostUrlForAnalysis</span>(<span className="text-[#ec5b13]">string</span> targetUrl){'\n'}
                  {'    {'}{'\n'}
                  {'        '}<span className="text-[#ec5b13]">var</span> payload = <span className="text-[#ec5b13]">new</span> {'{'} url = targetUrl {'}'};{'\n'}
                  {'        '}<span className="text-[#ec5b13]">var</span> json = JsonSerializer.<span className="text-[#88c0d0]">Serialize</span>(payload);{'\n'}
                  {'        '}<span className="text-[#ec5b13]">var</span> content = <span className="text-[#ec5b13]">new</span> <span className="text-[#88c0d0]">StringContent</span>(json, Encoding.UTF8, <span className="text-[#a3be8c]">"application/json"</span>);{'\n\n'}
                  {'        '}client.DefaultRequestHeaders.<span className="text-[#88c0d0]">Clear</span>();{'\n'}
                  {'        '}client.DefaultRequestHeaders.<span className="text-[#88c0d0]">Add</span>(<span className="text-[#a3be8c]">"X-Shield-Key"</span>, <span className="text-[#a3be8c]">"YOUR_API_KEY"</span>);{'\n\n'}
                  {'        '}<span className="text-[#ec5b13]">var</span> response = <span className="text-[#ec5b13]">await</span> client.<span className="text-[#88c0d0]">PostAsync</span>(<span className="text-[#a3be8c]">"https://api.aishield.io/v1/scan"</span>, content);{'\n'}
                  {'        '}<span className="text-[#ec5b13]">var</span> responseString = <span className="text-[#ec5b13]">await</span> response.Content.<span className="text-[#88c0d0]">ReadAsStringAsync</span>();{'\n\n'}
                  {'        '}System.Console.<span className="text-[#88c0d0]">WriteLine</span>(responseString);{'\n'}
                  {'    }'}{'\n'}
                  {'}'}
                </pre>
              </div>
            </div>

            {/* Footer Card */}
            <div className="bg-[#ec5b13]/5 rounded-2xl p-8 border border-[#ec5b13]/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-2">
                <h4 className="text-slate-900 dark:text-slate-100 text-xl font-bold">Need help with your integration?</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Join our developer community on Discord or contact our engineering support.</p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-2.5 rounded-xl border-2 border-[#ec5b13] text-[#ec5b13] font-bold hover:bg-[#ec5b13] hover:text-white transition-all">View API Docs</button>
                <button className="px-6 py-2.5 rounded-xl bg-[#ec5b13] text-white font-bold shadow-lg shadow-[#ec5b13]/25 hover:brightness-110 transition-all">Contact Support</button>
              </div>
            </div>
          </section>
        </main>

        {/* Global Progress Footer */}
        <footer className="border-t border-slate-200 dark:border-[#ec5b13]/10 py-6 px-10 bg-slate-50 dark:bg-[#221610]/80">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="size-4 bg-[#ec5b13] rounded-sm"></div>
              <p className="text-xs text-slate-500 font-medium">creada en 2026 Jonathan Jimenez Escobar</p>
            </div>
            <div className="flex gap-6">
              <Link className="text-xs text-slate-500 hover:text-[#ec5b13] transition-colors" to="/privacy-compliance">Privacy Policy</Link>
              <Link className="text-xs text-slate-500 hover:text-[#ec5b13] transition-colors" to="/terms-of-service">Terms of Service</Link>
              <Link className="text-xs text-slate-500 hover:text-[#ec5b13] transition-colors" to="/policy-manager">Cookie Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
