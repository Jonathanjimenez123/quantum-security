import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface PricingProps {
  onBack: () => void;
}

export default function Pricing({ onBack }: PricingProps) {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-slate-900 dark:text-slate-100">
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        {/* Header */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-10 py-3">
          <div className="flex items-center gap-4 text-slate-900 dark:text-white cursor-pointer" onClick={onBack}>
            <div className="size-8 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">shield_lock</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">AI Shield</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="hidden md:flex items-center gap-9">
              <Link className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" to='/inicio' onClick={(e) => { e.preventDefault(); onBack(); }}>Features</Link>
              <Link className="text-primary font-bold text-sm leading-normal" to='/precios'>Pricing</Link>
              <Link className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" to='/panel'>Enterprise</Link>
              <Link className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" to='/panel'>About</Link>
              <Link className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" to="/login">Login</Link>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Comenzar</span>
            </button>
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center py-10 px-4 md:px-10">
          <div className="max-w-7xl w-full flex flex-col gap-10">
            {/* Hero Text */}
            <div className="flex flex-col items-center text-center gap-4 pt-10">
              <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                Simple, transparent pricing
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-normal max-w-2xl">
                Secure your browser against phishing with real-time AI. Choose the plan that fits your needs, from individual protection to enterprise-grade security.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex justify-center w-full">
              <div className="flex flex-col sm:flex-row items-center gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 pr-6 shadow-sm">
                <div className="px-4 py-2">
                  <span className="text-slate-900 dark:text-white font-bold">Monthly</span>
                </div>
                <label className="relative flex h-[32px] w-[56px] cursor-pointer items-center rounded-full border-none bg-slate-200 dark:bg-slate-700 p-1 transition-colors has-[:checked]:bg-primary">
                  <div className={`h-6 w-6 rounded-full bg-white shadow-sm transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
                  <input 
                    checked={isYearly} 
                    onChange={() => setIsYearly(!isYearly)} 
                    className="peer invisible absolute" 
                    type="checkbox" 
                  />
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-2 px-2">
                  <span className="text-slate-900 dark:text-white font-bold">Yearly</span>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full uppercase tracking-wide">Save 20%</span>
                </div>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-6">
              {/* Personal Plan */}
              <div className="flex flex-col gap-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Personal</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Essential protection for individuals.</p>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-slate-900 dark:text-white text-5xl font-black tracking-tight">Free</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">/forever</span>
                  </div>
                </div>
                <button className="w-full cursor-pointer items-center justify-center rounded-lg h-12 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold transition-colors">
                  Add to Browser
                </button>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="text-sm font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    Real-time NLP Shield
                  </div>
                  <div className="text-sm font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    1 Device
                  </div>
                  <div className="text-sm font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    Community Support
                  </div>
                  <div className="text-sm font-medium flex gap-3 text-slate-400 dark:text-slate-600 line-through">
                    <span className="material-symbols-outlined text-slate-300 dark:text-slate-700 text-[20px]">cancel</span>
                    Admin Dashboard
                  </div>
                </div>
              </div>

              {/* Professional Plan (Highlighted) */}
              <div className="flex flex-col gap-6 rounded-xl border-2 border-primary bg-white dark:bg-slate-900 p-8 shadow-xl relative scale-105 z-10">
                <div className="absolute top-0 right-0 left-0 bg-primary h-1.5 w-full"></div>
                <div className="absolute top-4 right-4">
                  <span className="text-primary-dark bg-blue-100 dark:bg-blue-900/30 dark:text-blue-200 text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight text-primary">Professional</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Advanced security for growing teams.</p>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-slate-900 dark:text-white text-5xl font-black tracking-tight">{isYearly ? '$12' : '$15'}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">/user/mo</span>
                  </div>
                  <p className="text-xs text-slate-400 dark:text-slate-500">Billed {isYearly ? 'annually' : 'monthly'}</p>
                </div>
                <button className="w-full cursor-pointer items-center justify-center rounded-lg h-12 px-4 bg-primary hover:bg-primary-dark text-white text-sm font-bold shadow-lg shadow-primary/25 transition-all transform active:scale-95">
                  Start Free Trial
                </button>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="text-sm font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    Real-time NLP Shield
                  </div>
                  <div className="text-sm font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    Admin Dashboard
                  </div>
                  <div className="text-sm font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    Priority Support
                  </div>
                  <div className="text-sm font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    Up to 5 Devices per User
                  </div>
                  <div className="text-sm font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    Basic Reporting
                  </div>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col gap-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Enterprise</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Full control &amp; security for organizations.</p>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-slate-900 dark:text-white text-5xl font-black tracking-tight">{isYearly ? '$49' : '$59'}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">/user/mo</span>
                  </div>
                </div>
                <button className="w-full cursor-pointer items-center justify-center rounded-lg h-12 px-4 bg-white dark:bg-transparent border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold transition-colors">
                  Contact Sales
                </button>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="text-sm font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    Everything in Professional
                  </div>
                  <div className="text-sm font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    SIEM Integration
                  </div>
                  <div className="text-sm font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    Dedicated Success Manager
                  </div>
                  <div className="text-sm font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    Unlimited Devices
                  </div>
                  <div className="text-sm font-medium flex gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    SSO / SAML
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Comparison Table */}
            <div className="py-12 w-full">
              <h2 className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight text-center mb-10">Feature Comparison</h2>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                      <th className="p-4 pl-6 text-sm font-semibold text-slate-900 dark:text-white w-1/4">Features</th>
                      <th className="p-4 text-sm font-semibold text-slate-900 dark:text-white w-1/4 text-center">Personal</th>
                      <th className="p-4 text-sm font-semibold text-primary w-1/4 text-center">Professional</th>
                      <th className="p-4 text-sm font-semibold text-slate-900 dark:text-white w-1/4 text-center">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {/* Core Security */}
                    <tr>
                      <td className="p-4 pl-6 text-sm font-medium text-slate-900 dark:text-white">Real-time Phishing Detection</td>
                      <td className="p-4 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
                      <td className="p-4 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
                      <td className="p-4 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
                    </tr>
                    <tr>
                      <td className="p-4 pl-6 text-sm font-medium text-slate-900 dark:text-white">Image-based Analysis</td>
                      <td className="p-4 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
                      <td className="p-4 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
                      <td className="p-4 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
                    </tr>
                    {/* Management */}
                    <tr>
                      <td className="p-4 pl-6 text-sm font-medium text-slate-900 dark:text-white">Central Admin Dashboard</td>
                      <td className="p-4 text-center"><span className="material-symbols-outlined text-slate-300 dark:text-slate-700">remove</span></td>
                      <td className="p-4 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
                      <td className="p-4 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
                    </tr>
                    <tr>
                      <td className="p-4 pl-6 text-sm font-medium text-slate-900 dark:text-white">User Management</td>
                      <td className="p-4 text-center"><span className="material-symbols-outlined text-slate-300 dark:text-slate-700">remove</span></td>
                      <td className="p-4 text-center"><span className="text-sm text-slate-600 dark:text-slate-400">Up to 50 users</span></td>
                      <td className="p-4 text-center"><span className="text-sm text-slate-600 dark:text-slate-400">Unlimited</span></td>
                    </tr>
                    <tr>
                      <td className="p-4 pl-6 text-sm font-medium text-slate-900 dark:text-white">SSO / SAML Login</td>
                      <td className="p-4 text-center"><span className="material-symbols-outlined text-slate-300 dark:text-slate-700">remove</span></td>
                      <td className="p-4 text-center"><span className="material-symbols-outlined text-slate-300 dark:text-slate-700">remove</span></td>
                      <td className="p-4 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
                    </tr>
                    {/* Advanced */}
                    <tr>
                      <td className="p-4 pl-6 text-sm font-medium text-slate-900 dark:text-white">SIEM Integration (Splunk, etc.)</td>
                      <td className="p-4 text-center"><span className="material-symbols-outlined text-slate-300 dark:text-slate-700">remove</span></td>
                      <td className="p-4 text-center"><span className="material-symbols-outlined text-slate-300 dark:text-slate-700">remove</span></td>
                      <td className="p-4 text-center"><span className="material-symbols-outlined text-primary">check</span></td>
                    </tr>
                    <tr>
                      <td className="p-4 pl-6 text-sm font-medium text-slate-900 dark:text-white">API Access</td>
                      <td className="p-4 text-center"><span className="material-symbols-outlined text-slate-300 dark:text-slate-700">remove</span></td>
                      <td className="p-4 text-center"><span className="text-sm text-slate-600 dark:text-slate-400">Read-only</span></td>
                      <td className="p-4 text-center"><span className="text-sm text-slate-600 dark:text-slate-400">Full Access</span></td>
                    </tr>
                    {/* Support */}
                    <tr>
                      <td className="p-4 pl-6 text-sm font-medium text-slate-900 dark:text-white">Support SLA</td>
                      <td className="p-4 text-center"><span className="text-sm text-slate-600 dark:text-slate-400">Community</span></td>
                      <td className="p-4 text-center"><span className="text-sm text-slate-600 dark:text-slate-400">24h Email</span></td>
                      <td className="p-4 text-center"><span className="text-sm text-slate-600 dark:text-slate-400">1h Dedicated</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="rounded-2xl bg-primary p-8 md:p-12 text-center text-white relative overflow-hidden mb-12">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
              <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to secure your team?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">Start your 14-day free trial of the Professional plan today. No credit card required.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <button className="bg-white text-primary hover:bg-slate-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">Start Free Trial</button>
                <button className="bg-primary-dark border border-white/20 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors">Talk to Sales</button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 px-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                <div className="size-6 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">shield_lock</span>
                </div>
                <h2 className="text-lg font-bold">AI Shield</h2>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">
                Advanced NLP-driven phishing protection for the modern web. Secure your organization today.
              </p>
              <div className="flex gap-4 mt-2">
                <Link className="text-slate-400 hover:text-primary transition-colors" to='/panel'><span className="material-symbols-outlined">dataset</span></Link>
                <Link className="text-slate-400 hover:text-primary transition-colors" to='/panel'><span className="material-symbols-outlined">code</span></Link>
                <Link className="text-slate-400 hover:text-primary transition-colors" to='/panel'><span className="material-symbols-outlined">work</span></Link>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Product</h4>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" to='/inicio'>Features</Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" to='/panel'>Integrations</Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" to='/precios'>Pricing</Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" to='/panel'>Changelog</Link>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Company</h4>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" to='/panel'>About</Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" to='/panel'>Blog</Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" to='/panel'>Careers</Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" to='/panel'>Contact</Link>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Resources</h4>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" to='/panel'>Documentation</Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" to='/centro-ayuda'>Help Center</Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" to='/panel'>Community</Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" to='/panel'>Security</Link>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Legal</h4>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" to="/privacy-compliance">Privacy</Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm" to="/terms-of-service">Terms</Link>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-slate-100 dark:border-slate-800 text-center text-slate-400 text-sm">
            creada en 2026 Jonathan Jimenez Escobar
          </div>
        </footer>
      </div>
    </div>
  );
}
