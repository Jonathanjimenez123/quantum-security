import React from 'react';
import { Link } from 'react-router-dom';

interface TechnicalWhitepaperProps {
  onBack: () => void;
}

export default function TechnicalWhitepaper({ onBack }: TechnicalWhitepaperProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col font-sans">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm px-6 lg:px-10 py-3">
        <div className="flex items-center gap-4 cursor-pointer" onClick={onBack}>
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined text-3xl">shield</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight font-display">AI Shield</h2>
        </div>
        <div className="hidden md:flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-6 lg:gap-9">
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal" to='/panel'>Home</Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal" to='/inicio'>Features</Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal" to='/precios'>Pricing</Link>
            <Link className="text-slate-900 dark:text-white font-semibold text-sm leading-normal" to='/panel'>Whitepaper</Link>
          </nav>
          <div className="flex gap-3">
            <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold shadow-sm ring-1 ring-primary/50">
              <span className="material-symbols-outlined text-[18px] mr-2">download</span>
              <span>Download PDF</span>
            </button>
            <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 text-sm font-bold">
              <span className="material-symbols-outlined text-[18px] mr-2">share</span>
              <span>Share</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex mb-8 text-sm">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a className="inline-flex items-center text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white cursor-pointer" onClick={onBack}>
                <span className="material-symbols-outlined text-lg mr-1">home</span>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                <Link className="ml-1 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white md:ml-2" to='/panel'>Resources</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                <span className="ml-1 text-slate-900 font-medium dark:text-white md:ml-2">Technical Whitepaper</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar: Table of Contents */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Contents</h3>
                <nav className="flex flex-col gap-1">
                  <a className="group flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm border-l-2 border-primary" href="#abstract">
                    <span className="material-symbols-outlined text-[20px]">description</span>
                    Abstract
                  </a>
                  <a className="group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-primary transition-all text-sm border-l-2 border-transparent" href="#nlp">
                    <span className="material-symbols-outlined text-[20px] group-hover:text-primary">memory</span>
                    NLP Architecture
                  </a>
                  <a className="group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-primary transition-all text-sm border-l-2 border-transparent" href="#training">
                    <span className="material-symbols-outlined text-[20px] group-hover:text-primary">model_training</span>
                    Model Training
                  </a>
                  <a className="group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-primary transition-all text-sm border-l-2 border-transparent" href="#inference">
                    <span className="material-symbols-outlined text-[20px] group-hover:text-primary">speed</span>
                    Performance
                  </a>
                  <a className="group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-primary transition-all text-sm border-l-2 border-transparent" href="#security">
                    <span className="material-symbols-outlined text-[20px] group-hover:text-primary">verified_user</span>
                    Security Audits
                  </a>
                </nav>
              </div>
              <div className="mt-8 p-5 bg-slate-900 dark:bg-primary/20 rounded-xl text-white dark:text-primary-content">
                <h4 className="font-display font-bold text-lg mb-2 text-white dark:text-white">Need enterprise protection?</h4>
                <p className="text-sm text-slate-300 dark:text-slate-200 mb-4 opacity-90">Get a custom demo of our AI Shield architecture for your organization.</p>
                <button className="w-full py-2 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded shadow-sm">Contact Sales</button>
              </div>
            </div>
          </aside>

          {/* Main Document Content */}
          <article className="flex-1 min-w-0 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-8 lg:p-12">
            {/* Document Header */}
            <header className="border-b border-slate-200 dark:border-slate-700 pb-8 mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded tracking-wider">Whitepaper</span>
                <span className="text-slate-500 text-xs font-medium">October 2026</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                Real-time AI Anti-phishing Architecture
              </h1>
              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-white">Version 2.0</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>Dr. Elena Rostova, Lead AI Research</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>Markus Chen, Security Engineering</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 transition-colors" title="Print Document">
                    <span className="material-symbols-outlined text-lg">print</span>
                  </button>
                  <button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 transition-colors" title="Copy Link">
                    <span className="material-symbols-outlined text-lg">link</span>
                  </button>
                </div>
              </div>
            </header>

            {/* Abstract Section */}
            <section className="mb-12" id="abstract">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                Abstract
              </h2>
              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed font-serif text-lg">
                <p className="mb-4">
                  Traditional blacklist-based phishing detection methods are becoming increasingly obsolete in the face of procedurally generated phishing campaigns. This paper introduces <strong>AI Shield v2.0</strong>, a client-side browser extension leveraging a distilled BERT-based architecture for real-time semantic analysis of web content.
                </p>
                <p>
                  By processing the DOM structure, visual rendering, and textual content locally on the user's device, AI Shield achieves a 99.4% detection rate against zero-day phishing attacks while preserving user privacy by eliminating the need to send browsing data to the cloud.
                </p>
              </div>
            </section>

            {/* NLP Architecture Section */}
            <section className="mb-12" id="nlp">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">hub</span>
                NLP Architecture
              </h2>
              <div className="mb-8 p-1 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                {/* Diagram Placeholder */}
                <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded flex items-center justify-center relative overflow-hidden" data-alt="Technical diagram showing NLP processing pipeline with input layers and output classification">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0b95da 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  {/* Simple CSS Diagram Representation */}
                  <div className="flex items-center gap-4 z-10">
                    <div className="bg-white dark:bg-slate-700 p-4 rounded shadow-lg border border-slate-200 dark:border-slate-600 text-center w-32">
                      <span className="material-symbols-outlined text-primary mb-2">html</span>
                      <div className="text-xs font-bold dark:text-white">DOM Input</div>
                    </div>
                    <span className="material-symbols-outlined text-slate-400">arrow_forward</span>
                    <div className="bg-white dark:bg-slate-700 p-4 rounded shadow-lg border-2 border-primary dark:border-primary text-center w-40">
                      <span className="material-symbols-outlined text-primary mb-2">neurology</span>
                      <div className="text-xs font-bold dark:text-white">DistilBERT Model</div>
                      <div className="text-[10px] text-slate-500 mt-1">Quantized (int8)</div>
                    </div>
                    <span className="material-symbols-outlined text-slate-400">arrow_forward</span>
                    <div className="bg-white dark:bg-slate-700 p-4 rounded shadow-lg border border-slate-200 dark:border-slate-600 text-center w-32">
                      <span className="material-symbols-outlined text-green-500 mb-2">check_circle</span>
                      <div className="text-xs font-bold dark:text-white">Verdict</div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-slate-500 italic mt-2 pb-2">Figure 1: Client-side Inference Pipeline</p>
              </div>
              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed font-serif text-lg">
                <p className="mb-4">
                  The core of AI Shield is a highly optimized transformer model. Unlike cloud-based solutions, our architecture utilizes WebAssembly (WASM) and WebGL to run inference directly within the browser sandbox. This required significant optimization techniques including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-primary">
                  <li><strong>Knowledge Distillation:</strong> Reducing parameter count by 60% while retaining 98% of the teacher model's accuracy.</li>
                  <li><strong>Quantization:</strong> Converting 32-bit floating point weights to 8-bit integers, reducing memory footprint to under 45MB.</li>
                  <li><strong>Lazy Loading:</strong> The model is only loaded into memory when heuristic triggers detect suspicious activity.</li>
                </ul>
              </div>
            </section>

            {/* Model Training Section */}
            <section className="mb-12" id="training">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">school</span>
                Model Training Methodology
              </h2>
              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed font-serif text-lg mb-6">
                <p>
                  Our training dataset comprises over 15 million labeled URLs, including 4 million verified phishing sites sourced from global threat intelligence feeds. To ensure robustness against adversarial attacks, we employ Generative Adversarial Networks (GANs) to synthesize challenging phishing examples during the training phase.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-sm uppercase tracking-wide">Data Sources</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">PhishTank &amp; OpenPhish</span>
                      <span className="text-sm font-bold text-primary">45%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Proprietary Honeypots</span>
                      <span className="text-sm font-bold text-primary">30%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Synthetic Adversarial Data</span>
                      <span className="text-sm font-bold text-primary">25%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-700 flex flex-col justify-center">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-sm uppercase tracking-wide">Key Metric: False Positive Rate</h3>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-bold text-slate-900 dark:text-white font-display">0.02%</span>
                    <span className="text-sm text-green-600 font-bold mb-2">↓ 0.01% from v1.0</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Achieved through reinforcement learning with human feedback (RLHF) during the fine-tuning stage.</p>
                </div>
              </div>
            </section>

            {/* Performance Section */}
            <section className="mb-12" id="inference">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">bolt</span>
                Real-time Inference Performance
              </h2>
              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed font-serif text-lg mb-6">
                <p>
                  Minimizing latency is critical for user experience. AI Shield v2.0 introduces a tiered analysis system. A lightweight heuristic model (0.5ms) runs first, and only escalates to the deep learning model (45ms) if specific risk indicators are met.
                </p>
              </div>
              <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-bold">
                    <tr>
                      <th className="px-6 py-4">Hardware Profile</th>
                      <th className="px-6 py-4">Average Latency (ms)</th>
                      <th className="px-6 py-4">Memory Usage (MB)</th>
                      <th className="px-6 py-4">Throughput (Req/s)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800">
                    <tr>
                      <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Apple M2 MacBook Air</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">32ms</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">42MB</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">120</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Intel i7 (10th Gen) Desktop</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">45ms</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">48MB</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">95</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Low-end Chromebook (Celeron)</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">110ms</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">55MB</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Security Audits Section */}
            <section className="mb-12" id="security">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                Security Audits &amp; Compliance
              </h2>
              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed font-serif text-lg mb-6">
                <p>
                  AI Shield undergoes rigorous third-party penetration testing quarterly. Our architecture is designed with a "privacy-first" approach, ensuring compliance with major data protection regulations.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700 text-center flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-slate-400 mb-2">gpp_good</span>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">SOC 2 Type II</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700 text-center flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-slate-400 mb-2">policy</span>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">GDPR Compliant</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700 text-center flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-slate-400 mb-2">health_and_safety</span>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">HIPAA Ready</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700 text-center flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-slate-400 mb-2">verified</span>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">ISO 27001</span>
                </div>
              </div>
            </section>

            {/* References Footer */}
            <footer className="border-t border-slate-200 dark:border-slate-700 pt-8 mt-16">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">References</h3>
              <ol className="list-decimal pl-5 space-y-2 text-xs text-slate-500 dark:text-slate-400 font-serif">
                <li>Vaswani, A., et al. "Attention Is All You Need." NeurIPS, 2017.</li>
                <li>Sanh, V., et al. "DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter." arXiv preprint, 2019.</li>
                <li>Google Threat Analysis Group. "Phishing landscape 2026 report."</li>
              </ol>
            </footer>
          </article>
        </div>
      </main>

      <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="size-6 text-primary opacity-80">
              <span className="material-symbols-outlined text-2xl">shield</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm">creada en 2026 Jonathan Jimenez Escobar</p>
          </div>
          <div className="flex gap-6">
            <Link className="text-slate-500 hover:text-primary dark:text-slate-400 text-sm" to="/privacy-compliance">Privacy Policy</Link>
            <Link className="text-slate-500 hover:text-primary dark:text-slate-400 text-sm" to="/terms-of-service">Terms of Service</Link>
            <Link className="text-slate-500 hover:text-primary dark:text-slate-400 text-sm" to='/panel'>Security</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
