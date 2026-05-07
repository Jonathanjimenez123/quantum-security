import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Search, LayoutTemplate, Rocket, Network, Key, ShieldCheck, Webhook, Terminal, Bug, Activity, MessageSquare, Users, Database, ChevronRight } from 'lucide-react';

interface TechnicalManualProps {
  onBack: () => void;
}

export default function TechnicalManual({ onBack }: TechnicalManualProps) {
  return (
    <div className="bg-[#f8f6f6] dark:bg-[#0f172a] font-sans text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-[#f8f6f6]/80 dark:bg-[#0f172a]/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-[#0ea5e9]">
              <button onClick={onBack} className="mr-2 hover:bg-slate-200 dark:hover:bg-slate-800 p-2 rounded-full transition-colors">
                <ArrowLeft size={24} />
              </button>
              <Shield size={32} />
              <h1 className="text-xl font-bold tracking-tight">AI SHIELD <span className="text-slate-500 dark:text-slate-400 font-medium">DOCS</span></h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link className="text-sm font-semibold text-[#0ea5e9]" to='/panel'>Technical Manual</Link>
              <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#0ea5e9] transition-colors" to="/apidocumentation">API Reference</Link>
              <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#0ea5e9] transition-colors" to='/panel'>SDKs</Link>
              <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#0ea5e9] transition-colors" to='/centro-ayuda'>Support</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input className="bg-slate-100 dark:bg-slate-900 border-none rounded-lg py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-[#0ea5e9]/50 transition-all" placeholder="Buscar documentation..." type="text" />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 border border-slate-300 dark:border-slate-700 rounded px-1.5 py-0.5 text-[10px] text-slate-400">
                <span>CMD</span><span>K</span>
              </div>
            </div>
            <button className="bg-[#0ea5e9] text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#0ea5e9]/90 transition-colors">
              Console
            </button>
          </div>
        </div>
      </header>
      <div className="max-w-[1440px] mx-auto flex flex-1 w-full">
        {/* Sidebar Navigation */}
        <aside className="w-72 hidden lg:block sticky top-16 h-[calc(100vh-4rem)] border-r border-slate-200 dark:border-slate-800 overflow-y-auto p-6">
          <div className="mb-8">
            <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Introduction</h3>
            <ul className="space-y-2">
              <li><Link className="flex items-center gap-3 text-sm font-medium text-[#0ea5e9] bg-[#0ea5e9]/10 px-3 py-2 rounded-lg" to='/panel'><LayoutTemplate size={16} />Manual Overview</Link></li>
              <li><Link className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" to='/panel'><Rocket size={16} />Quick Start</Link></li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Architecture &amp; Security</h3>
            <ul className="space-y-2">
              <li><a className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#system-architecture"><Network size={16} />System Architecture</a></li>
              <li><a className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#authentication"><Key size={16} />Authentication Flow</a></li>
              <li><a className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#privacy"><ShieldCheck size={16} />Privacy Standards</a></li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Integrations</h3>
            <ul className="space-y-2">
              <li><a className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#webhooks"><Webhook size={16} />Webhook Config</a></li>
              <li><Link className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" to='/panel'><Terminal size={16} />SIEM Export</Link></li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Maintenance</h3>
            <ul className="space-y-2">
              <li><a className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#troubleshooting"><Bug size={16} />Troubleshooting</a></li>
              <li><Link className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" to='/panel'><Activity size={16} />Health Checks</Link></li>
            </ul>
          </div>
        </aside>
        {/* Main Content Area */}
        <main className="flex-1 min-w-0 p-6 lg:p-12 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
                <Link className="hover:text-[#0ea5e9]" to="/apidocumentation">Docs</Link>
                <ChevronRight size={12} />
                <span className="text-slate-900 dark:text-slate-100 font-medium">Technical Manual v2.1.0</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight mb-6">Technical Integration Manual</h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                A comprehensive guide for security engineers to integrate, secure, and scale AI Shield within enterprise environments.
                This manual details the bridge between client-side monitoring and back-end threat detection.
              </p>
            </div>
            {/* Section 1: Architecture */}
            <section className="mb-16 scroll-mt-24" id="system-architecture">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                <Network className="text-[#0ea5e9]" size={32} />
                1. System Architecture Overview
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                The AI Shield architecture is designed for high-throughput, low-latency threat inspection. The stack transitions from a browser extension (Client) to a FastAPI-based inspection engine (Backend).
              </p>
              <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 mb-8 aspect-video flex flex-col items-center justify-center gap-4 text-center">
                <Network className="text-slate-400/50" size={64} />
                <div>
                  <p className="font-bold text-slate-700 dark:text-slate-300">Technical Diagram: Flow Architecture</p>
                  <p className="text-sm text-slate-500">[Extension Proxy] → [FastAPI Gateway] → [ML Analysis Cluster] → [Redis Cache] → [SIEM Webhooks]</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-[#0ea5e9] mb-2">Browser Extension</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 italic">Manifest V3, Rust-WASM for local scrubbing. Intercepts fetch/XHR events before transmission.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <h4 className="font-bold text-[#0ea5e9] mb-2">FastAPI Backend</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 italic">Asynchronous endpoint handling. Gzip compression, Pydantic validation for incoming telemetry.</p>
                </div>
              </div>
            </section>
            {/* Section 2: Authentication */}
            <section className="mb-16 scroll-mt-24" id="authentication">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                <Key className="text-[#0ea5e9]" size={32} />
                2. Authentication Flow
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                AI Shield supports secure API Key rotation and OAuth2 for enterprise SSO. All requests must contain a valid <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded text-[#0ea5e9]">X-Shield-Auth</code> header.
              </p>
              <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-800">
                  <span className="text-xs font-mono text-slate-400">Request Header Example</span>
                  <span className="text-xs font-mono text-slate-500">JSON</span>
                </div>
                <pre className="p-6 overflow-x-auto"><code className="text-sm font-mono text-slate-300 line-clamp-10">
{`GET /v2/telemetry/stats HTTP/1.1
Host: api.aishield.io
X-Shield-Auth: Bearer sk_live_51Mv3L2E9...
Content-Type: application/json

{
  "client_id": "corp-dev-01",
  "scope": "read:alerts",
  "timestamp": 1694503200
}`}</code></pre>
              </div>
            </section>
            {/* Section 3: Webhooks */}
            <section className="mb-16 scroll-mt-24" id="webhooks">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                <Webhook className="text-[#0ea5e9]" size={32} />
                3. Webhook Configuration
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Automate incident response by routing alerts to Slack, Microsoft Teams, or custom SIEM endpoints. Configure payloads in the Management Console.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                  <MessageSquare className="text-[#0ea5e9] mb-3" size={24} />
                  <h4 className="font-bold mb-1">Slack</h4>
                  <p className="text-xs text-slate-500">Incoming Webhooks App</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                  <Users className="text-[#0ea5e9] mb-3" size={24} />
                  <h4 className="font-bold mb-1">MS Teams</h4>
                  <p className="text-xs text-slate-500">Connectors API</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                  <Database className="text-[#0ea5e9] mb-3" size={24} />
                  <h4 className="font-bold mb-1">SIEM</h4>
                  <p className="text-xs text-slate-500">Splunk / Elastic / Sentinel</p>
                </div>
              </div>
              <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-800">
                  <span className="text-xs font-mono text-slate-400">Slack Payload Example</span>
                </div>
                <pre className="p-6 overflow-x-auto"><code className="text-sm font-mono text-slate-300">
{`{
  "text": "🚨 *AI Shield Threat Alert*",
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Security Incident Detected*\\nUser: j.doe@corp.com\\nThreat Level: High"
      }
    }
  ]
}`}</code></pre>
              </div>
            </section>
            {/* Section 4: Privacy */}
            <section className="mb-16 scroll-mt-24" id="privacy">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                <ShieldCheck className="text-[#0ea5e9]" size={32} />
                4. Data Retention &amp; Privacy
              </h2>
              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4">
                <p>AI Shield adheres to SOC2 Type II and GDPR standards. We utilize <strong>differential privacy</strong> techniques to ensure telemetry cannot be de-anonymized.</p>
                <div className="bg-[#0ea5e9]/5 border-l-4 border-[#0ea5e9] p-6 rounded-r-xl">
                  <h5 className="text-[#0ea5e9] font-bold mb-2">Zero-Storage Policy (PII)</h5>
                  <p className="text-sm italic">All Personally Identifiable Information is hashed locally in the browser extension using SHA-256 before reaching our ingestion layer. AI Shield never stores raw password or payment data.</p>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Hot Storage:</strong> 14 days (Full Telemetry)</li>
                  <li><strong>Cold Storage:</strong> 365 days (Aggregated Metrics)</li>
                  <li><strong>Encryption:</strong> AES-256-GCM at rest, TLS 1.3 in transit.</li>
                </ul>
              </div>
            </section>
            {/* Section 5: Troubleshooting */}
            <section className="mb-16 scroll-mt-24" id="troubleshooting">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                <Bug className="text-[#0ea5e9]" size={32} />
                5. Troubleshooting &amp; Debugging
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Access system logs via the CLI or the local debugging console within the extension (Ctrl+Shift+L).
              </p>
              <div className="bg-[#0f172a] border border-slate-700 rounded-lg p-4 font-mono text-sm">
                <div className="flex gap-2 mb-2">
                  <span className="text-slate-500">[2026-10-24 14:22:01]</span>
                  <span className="text-green-500">INFO</span>
                  <span className="text-slate-300">Handshake protocol version 2.1 negotiated.</span>
                </div>
                <div className="flex gap-2 mb-2">
                  <span className="text-slate-500">[2026-10-24 14:23:45]</span>
                  <span className="text-yellow-500">WARN</span>
                  <span className="text-slate-300">Rate limit approaching (85/100 req/s) for tenant_id:99.</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-slate-500">[2026-10-24 14:25:12]</span>
                  <span className="text-red-500">ERR</span>
                  <span className="text-slate-300">Webhook timeout: Destination "slack-prd-01" unreachable.</span>
                </div>
              </div>
            </section>
            {/* Footer Help */}
            <footer className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                creada en 2026 Jonathan Jimenez Escobar
              </div>
              <div className="flex gap-6">
                <Link className="text-sm font-medium hover:text-[#0ea5e9] transition-colors" to="/privacy-compliance">Privacy Policy</Link>
                <Link className="text-sm font-medium hover:text-[#0ea5e9] transition-colors" to="/system-status">Status Page</Link>
                <Link className="text-sm font-medium hover:text-[#0ea5e9] transition-colors" to='/panel'>Security Portal</Link>
              </div>
            </footer>
          </div>
        </main>
        {/* Right Side On-Page Nav */}
        <aside className="w-64 hidden xl:block sticky top-16 h-[calc(100vh-4rem)] p-8 overflow-y-auto">
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">On this page</h4>
          <nav className="space-y-3">
            <a className="block text-sm text-slate-500 hover:text-[#0ea5e9] transition-colors" href="#system-architecture">1. System Architecture</a>
            <a className="block text-sm text-slate-500 hover:text-[#0ea5e9] transition-colors" href="#authentication">2. Authentication Flow</a>
            <a className="block text-sm text-slate-500 hover:text-[#0ea5e9] transition-colors" href="#webhooks">3. Webhook Configuration</a>
            <a className="block text-sm text-slate-500 hover:text-[#0ea5e9] transition-colors" href="#privacy">4. Data Retention</a>
            <a className="block text-sm text-slate-500 hover:text-[#0ea5e9] transition-colors" href="#troubleshooting">5. Troubleshooting</a>
          </nav>
          <div className="mt-12 p-4 bg-[#0ea5e9]/5 border border-[#0ea5e9]/20 rounded-xl">
            <p className="text-xs text-[#0ea5e9] font-bold uppercase mb-2">Need help?</p>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">Schedule a technical deep-dive with our integration engineers.</p>
            <button className="w-full py-2 bg-[#0ea5e9] text-white text-xs font-bold rounded-lg">Book a Call</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
