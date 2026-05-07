import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

export default function TechnicalFAQ({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link className="flex items-center gap-3 text-primary" to='/panel'>
              <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">shield_lock</span>
              </div>
              <h2 className="text-text-main-light dark:text-text-main-dark text-xl font-bold leading-tight tracking-tight">PhishGuard AI</h2>
            </Link>
            {/* Desktop Search */}
            <div className="hidden md:flex items-center ml-8 w-80">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-text-sub-light dark:text-text-sub-dark text-xl">search</span>
                </div>
                <input className="block w-full pl-10 pr-3 py-2 border border-border-light dark:border-border-dark rounded-lg leading-5 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark placeholder-text-sub-light dark:placeholder-text-sub-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm" placeholder="Buscar documentation..." type="text"/>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-6">
              <button onClick={onBack} className="text-text-sub-light dark:text-text-sub-dark hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Panel de Control</button>
              <Link className="text-text-sub-light dark:text-text-sub-dark hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" to="/security-alert-interface">Alerts</Link>
              <Link className="text-text-sub-light dark:text-text-sub-dark hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" to='/ajustes'>Configuración</Link>
              <Link className="text-text-sub-light dark:text-text-sub-dark hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" to='/centro-ayuda'>Support</Link>
            </nav>
            <div className="flex items-center gap-3 border-l border-border-light dark:border-border-dark pl-6">
              <button className="relative p-1 rounded-full text-text-sub-light dark:text-text-sub-dark hover:text-primary dark:hover:text-primary focus:outline-none">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-surface-dark"></span>
              </button>
              <div className="h-8 w-8 rounded-full bg-primary/20 bg-cover bg-center border border-border-light dark:border-border-dark" data-alt="User profile picture" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
            </div>
          </div>
        </div>
      </header>
      {/* Main Layout */}
      <main className="flex-grow flex flex-col md:flex-row max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 gap-8">
        {/* Left Content (FAQs) */}
        <div className="flex-1 min-w-0">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-black text-text-main-light dark:text-text-main-dark tracking-tight">Technical FAQ &amp; Troubleshooting</h1>
              <p className="text-text-sub-light dark:text-text-sub-dark text-lg max-w-2xl">
                Comprehensive guide for administrators on AI engine internals, integration, and common issues.
              </p>
            </div>
            <button className="shrink-0 inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-bold rounded-lg shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all">
              <span className="material-symbols-outlined mr-2 text-lg">description</span>
              Technical Documentation
            </button>
          </div>
          {/* Categories & Accordions */}
          <div className="space-y-10">
            {/* Category 1: AI Engine Internals */}
            <section>
              <div className="flex items-center gap-3 mb-4 border-b border-border-light dark:border-border-dark pb-2">
                <span className="material-symbols-outlined text-primary text-2xl">neurology</span>
                <h2 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">AI Engine Internals</h2>
              </div>
              <div className="space-y-3">
                <details className="group bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden transition-all duration-200 hover:shadow-sm open:shadow-md">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 select-none">
                    <h3 className="text-base font-semibold text-text-main-light dark:text-text-main-dark pr-4">How does the NLP model handle encrypted traffic (TLS/SSL)?</h3>
                    <span className="material-symbols-outlined text-text-sub-light dark:text-text-sub-dark transition-transform duration-200 group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-text-sub-light dark:text-text-sub-dark text-sm leading-relaxed border-t border-transparent group-open:border-border-light dark:group-open:border-border-dark group-open:pt-4">
                    The extension operates at the browser rendering layer. It analyzes the DOM structure and visual rendering <em>after</em> the browser has decrypted the content. This ensures end-to-end encryption is fully respected (we never see the raw network packets) while still providing real-time analysis of the content the user actually sees.
                  </div>
                </details>
                <details className="group bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden transition-all duration-200 hover:shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 select-none">
                    <h3 className="text-base font-semibold text-text-main-light dark:text-text-main-dark pr-4">What is the latency impact on page load times?</h3>
                    <span className="material-symbols-outlined text-text-sub-light dark:text-text-sub-dark transition-transform duration-200 group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-text-sub-light dark:text-text-sub-dark text-sm leading-relaxed border-t border-transparent group-open:border-border-light dark:group-open:border-border-dark group-open:pt-4">
                    Our lightweight inference engine runs locally in the browser via WebAssembly. The average latency introduced is less than 50ms for initial DOM analysis. Heavy NLP tasks are asynchronous and do not block the main rendering thread, ensuring a seamless user experience.
                  </div>
                </details>
                <details className="group bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden transition-all duration-200 hover:shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 select-none">
                    <h3 className="text-base font-semibold text-text-main-light dark:text-text-main-dark pr-4">How often are the phishing detection models updated?</h3>
                    <span className="material-symbols-outlined text-text-sub-light dark:text-text-sub-dark transition-transform duration-200 group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-text-sub-light dark:text-text-sub-dark text-sm leading-relaxed border-t border-transparent group-open:border-border-light dark:group-open:border-border-dark group-open:pt-4">
                    Global heuristic models are updated weekly. However, real-time threat signatures and known malicious URL databases are synced every 15 minutes to all active endpoints to protect against zero-hour campaigns.
                  </div>
                </details>
              </div>
            </section>
            {/* Category 2: Integration & SIEM */}
            <section>
              <div className="flex items-center gap-3 mb-4 border-b border-border-light dark:border-border-dark pb-2">
                <span className="material-symbols-outlined text-primary text-2xl">hub</span>
                <h2 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">Integration &amp; SIEM</h2>
              </div>
              <div className="space-y-3">
                <details className="group bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden transition-all duration-200 hover:shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 select-none">
                    <h3 className="text-base font-semibold text-text-main-light dark:text-text-main-dark pr-4">Can we forward alerts to Splunk or Datadog?</h3>
                    <span className="material-symbols-outlined text-text-sub-light dark:text-text-sub-dark transition-transform duration-200 group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-text-sub-light dark:text-text-sub-dark text-sm leading-relaxed border-t border-transparent group-open:border-border-light dark:group-open:border-border-dark group-open:pt-4">
                    Yes. We support standard Syslog forwarding (TCP/UDP) and HTTP Event Collector (HEC) integration. You can configure the API endpoints in the Admin Dashboard under 'Integrations'. We provide pre-built parsing rules for Splunk, Datadog, and ELK Stack.
                  </div>
                </details>
                <details className="group bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden transition-all duration-200 hover:shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 select-none">
                    <h3 className="text-base font-semibold text-text-main-light dark:text-text-main-dark pr-4">What authentication methods are supported for the API?</h3>
                    <span className="material-symbols-outlined text-text-sub-light dark:text-text-sub-dark transition-transform duration-200 group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-text-sub-light dark:text-text-sub-dark text-sm leading-relaxed border-t border-transparent group-open:border-border-light dark:group-open:border-border-dark group-open:pt-4">
                    The API supports Bearer Token authentication (OAuth 2.0). API keys can be generated and rotated within the Settings panel. We also support SAML 2.0 for administrative access to the dashboard.
                  </div>
                </details>
              </div>
            </section>
            {/* Category 3: Privacy & Data Anonymization */}
            <section>
              <div className="flex items-center gap-3 mb-4 border-b border-border-light dark:border-border-dark pb-2">
                <span className="material-symbols-outlined text-primary text-2xl">visibility_off</span>
                <h2 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">Privacy &amp; Data Anonymization</h2>
              </div>
              <div className="space-y-3">
                <details className="group bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden transition-all duration-200 hover:shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 select-none">
                    <h3 className="text-base font-semibold text-text-main-light dark:text-text-main-dark pr-4">Is PII redacted before being sent to the cloud analysis?</h3>
                    <span className="material-symbols-outlined text-text-sub-light dark:text-text-sub-dark transition-transform duration-200 group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-text-sub-light dark:text-text-sub-dark text-sm leading-relaxed border-t border-transparent group-open:border-border-light dark:group-open:border-border-dark group-open:pt-4">
                    Absolutely. The local inference engine identifies and redacts strings resembling emails, credit card numbers, and SSNs before any metadata leaves the client machine. Only anonymized structural data and non-PII text snippets are sent for secondary cloud verification if local confidence is low.
                  </div>
                </details>
              </div>
            </section>
            {/* Category 4: Troubleshooting */}
            <section>
              <div className="flex items-center gap-3 mb-4 border-b border-border-light dark:border-border-dark pb-2">
                <span className="material-symbols-outlined text-primary text-2xl">build</span>
                <h2 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">Troubleshooting</h2>
              </div>
              <div className="space-y-3">
                <details className="group bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden transition-all duration-200 hover:shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 select-none">
                    <h3 className="text-base font-semibold text-text-main-light dark:text-text-main-dark pr-4">Extension icon is grayed out on internal sites.</h3>
                    <span className="material-symbols-outlined text-text-sub-light dark:text-text-sub-dark transition-transform duration-200 group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-text-sub-light dark:text-text-sub-dark text-sm leading-relaxed border-t border-transparent group-open:border-border-light dark:group-open:border-border-dark group-open:pt-4">
                    By default, PhishGuard ignores private IP ranges (10.x.x.x, 192.168.x.x) to reduce noise. You can adjust the "Intranet Monitoring" policy in the admin dashboard if you wish to scan internal tools.
                  </div>
                </details>
              </div>
            </section>
          </div>
          {/* Footer CTA */}
          <div className="mt-12 p-8 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl text-center">
            <p className="text-text-main-light dark:text-text-main-dark font-bold text-lg mb-2">Still need help?</p>
            <p className="text-text-sub-light dark:text-text-sub-dark text-sm mb-6">Our dedicated support team is available 24/7 for enterprise customers.</p>
            <div className="flex justify-center gap-4">
              <button className="px-5 py-2.5 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-semibold rounded-lg border border-border-light dark:border-border-dark hover:bg-border-light dark:hover:bg-border-dark transition-colors">
                Visit Community Forum
              </button>
              <button className="px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                Open Support Ticket
              </button>
            </div>
          </div>
        </div>
        {/* Right Sidebar (Common Issues) */}
        <aside className="w-full md:w-80 shrink-0">
          <div className="sticky top-28 space-y-6">
            {/* Search for Mobile (visible only on small screens if we wanted, but keeping structure clean for desktop focus) */}
            {/* Quick Fix Card */}
            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-5 shadow-sm">
              <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">handyman</span>
                Common Issues
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link className="group block" to='/panel'>
                    <span className="text-sm font-semibold text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors block mb-1">Extension Connectivity</span>
                    <p className="text-xs text-text-sub-light dark:text-text-sub-dark">Troubleshoot WebSocket connection failures.</p>
                  </Link>
                </li>
                <li className="border-t border-border-light dark:border-border-dark pt-4">
                  <Link className="group block" to='/panel'>
                    <span className="text-sm font-semibold text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors block mb-1">Browser Compatibility</span>
                    <p className="text-xs text-text-sub-light dark:text-text-sub-dark">Issues with Chrome v110+ manifest V3.</p>
                  </Link>
                </li>
                <li className="border-t border-border-light dark:border-border-dark pt-4">
                  <Link className="group block" to='/panel'>
                    <span className="text-sm font-semibold text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors block mb-1">False Positives</span>
                    <p className="text-xs text-text-sub-light dark:text-text-sub-dark">How to whitelist internal domains.</p>
                  </Link>
                </li>
                <li className="border-t border-border-light dark:border-border-dark pt-4">
                  <Link className="group block" to="/apidocumentation">
                    <span className="text-sm font-semibold text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors block mb-1">API Rate Limits</span>
                    <p className="text-xs text-text-sub-light dark:text-text-sub-dark">Understanding quota usage &amp; upgrades.</p>
                  </Link>
                </li>
              </ul>
              <Link className="mt-6 inline-flex items-center text-xs font-bold text-primary hover:underline" to='/panel'>
                View all guides
                <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </Link>
            </div>
            {/* Status Card */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
              <h3 className="text-sm font-bold text-text-main-light dark:text-text-main-dark mb-3 uppercase tracking-wider">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-sub-light dark:text-text-sub-dark">API Services</span>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full">
                    <span className="size-1.5 rounded-full bg-green-500"></span>
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-sub-light dark:text-text-sub-dark">Threat Database</span>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full">
                    <span className="size-1.5 rounded-full bg-green-500"></span>
                    Updated
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-sub-light dark:text-text-sub-dark">Dashboard</span>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400 px-2 py-0.5 rounded-full">
                    <span className="size-1.5 rounded-full bg-yellow-500"></span>
                    Maintenance
                  </span>
                </div>
              </div>
            </div>
            {/* Contact Mini Card */}
            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-5 shadow-sm flex flex-col items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <div>
                <p className="text-sm font-bold text-text-main-light dark:text-text-main-dark">Priority Support</p>
                <p className="text-xs text-text-sub-light dark:text-text-sub-dark mt-1">Enterprise plans include dedicated engineering support.</p>
              </div>
              <button className="w-full mt-1 text-center py-2 text-xs font-bold text-primary border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors">Contact Sales</button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
