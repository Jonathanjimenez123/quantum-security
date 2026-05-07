import React from 'react';
import { Link } from 'react-router-dom';

interface TechnicalStyleGuideProps {
  onBack?: () => void;
}

export default function TechnicalStyleGuide({ onBack }: TechnicalStyleGuideProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased text-neutral-900 dark:text-neutral-50 min-h-screen flex flex-col">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/70 dark:bg-[#1e2430]/70 backdrop-blur-[12px] border-b border-white/50 dark:border-white/5 border-b-neutral-200 dark:border-b-neutral-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div 
                className="flex items-center gap-3 cursor-pointer"
                onClick={onBack}
              >
                <div className="size-8 text-primary">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h1 className="text-lg font-bold tracking-tight">AI Shield <span className="text-neutral-500 font-normal ml-2">Style Guide</span></h1>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#colors">Colors</a>
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#typography">Typography</a>
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#components">Components</a>
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#shadows">Effects</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[20px]">search</span>
                <input className="h-9 w-64 pl-10 pr-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 border-none text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-neutral-400" placeholder="Buscar components..." type="text" />
              </div>
              <button className="bg-primary hover:bg-primary-dark text-white h-9 px-4 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span>Download Kit</span>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-12 space-y-16">
          {/* Intro Section */}
          <section className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
              v2.4.0 Release
            </div>
            <h2 className="text-5xl font-black tracking-tight text-neutral-900 dark:text-white">Design System &amp; Style Guide</h2>
            <p className="text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Technical documentation and component library for AI Shield security extension.
              This guide ensures consistency across all developer tools and user-facing interfaces.
            </p>
          </section>

          {/* 1. Color Palette */}
          <section className="space-y-8 scroll-mt-24" id="colors">
            <div className="flex items-baseline justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <h3 className="text-2xl font-bold">1. Color Palette</h3>
              <span className="font-mono text-xs text-neutral-400">TOKENS: @color-</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Primary */}
              <div className="bg-surface dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-neutral-200 dark:border-neutral-800">
                <div className="h-24 rounded-lg bg-primary mb-4 flex items-end justify-end p-2">
                  <span className="material-symbols-outlined text-white/50 text-[48px]">security</span>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white">Security Blue</h4>
                    <p className="text-xs text-neutral-500">Primary Brand</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-neutral-100 dark:border-neutral-700 font-mono text-xs">
                  <span className="text-neutral-400">HEX</span>
                  <span className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded select-all">#195DE6</span>
                </div>
              </div>

              {/* Warning */}
              <div className="bg-surface dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-neutral-200 dark:border-neutral-800">
                <div className="h-24 rounded-lg bg-[#D32F2F] mb-4 flex items-end justify-end p-2">
                  <span className="material-symbols-outlined text-white/50 text-[48px]">warning</span>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white">Warning Red</h4>
                    <p className="text-xs text-neutral-500">Error &amp; Danger</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-neutral-100 dark:border-neutral-700 font-mono text-xs">
                  <span className="text-neutral-400">HEX</span>
                  <span className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded select-all">#D32F2F</span>
                </div>
              </div>

              {/* Success */}
              <div className="bg-surface dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-neutral-200 dark:border-neutral-800">
                <div className="h-24 rounded-lg bg-[#2E7D32] mb-4 flex items-end justify-end p-2">
                  <span className="material-symbols-outlined text-white/50 text-[48px]">check_circle</span>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white">Success Green</h4>
                    <p className="text-xs text-neutral-500">Verification &amp; Safe</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-neutral-100 dark:border-neutral-700 font-mono text-xs">
                  <span className="text-neutral-400">HEX</span>
                  <span className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded select-all">#2E7D32</span>
                </div>
              </div>

              {/* Dark Neutral */}
              <div className="bg-surface dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-neutral-200 dark:border-neutral-800">
                <div className="h-24 rounded-lg bg-[#111621] mb-4 flex items-end justify-end p-2 border border-neutral-800">
                  <span className="material-symbols-outlined text-white/20 text-[48px]">dark_mode</span>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white">Obsidian</h4>
                    <p className="text-xs text-neutral-500">App Background</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-neutral-100 dark:border-neutral-700 font-mono text-xs">
                  <span className="text-neutral-400">HEX</span>
                  <span className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded select-all">#111621</span>
                </div>
              </div>
            </div>

            {/* Neutral Scale */}
            <div className="bg-surface dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-800">
              <h4 className="font-semibold mb-4 text-sm uppercase text-neutral-500 tracking-wider">Neutral Scale</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2">
                <div className="space-y-2">
                  <div className="h-12 w-full rounded bg-neutral-50 border border-neutral-200"></div>
                  <div className="text-[10px] font-mono text-center text-neutral-400">50</div>
                </div>
                <div className="space-y-2">
                  <div className="h-12 w-full rounded bg-neutral-100 border border-neutral-200"></div>
                  <div className="text-[10px] font-mono text-center text-neutral-400">100</div>
                </div>
                <div className="space-y-2">
                  <div className="h-12 w-full rounded bg-neutral-200"></div>
                  <div className="text-[10px] font-mono text-center text-neutral-400">200</div>
                </div>
                <div className="space-y-2">
                  <div className="h-12 w-full rounded bg-neutral-300"></div>
                  <div className="text-[10px] font-mono text-center text-neutral-400">300</div>
                </div>
                <div className="space-y-2">
                  <div className="h-12 w-full rounded bg-neutral-400"></div>
                  <div className="text-[10px] font-mono text-center text-neutral-400">400</div>
                </div>
                <div className="space-y-2">
                  <div className="h-12 w-full rounded bg-neutral-500"></div>
                  <div className="text-[10px] font-mono text-center text-neutral-400">500</div>
                </div>
                <div className="space-y-2">
                  <div className="h-12 w-full rounded bg-neutral-600"></div>
                  <div className="text-[10px] font-mono text-center text-neutral-400">600</div>
                </div>
                <div className="space-y-2">
                  <div className="h-12 w-full rounded bg-neutral-700"></div>
                  <div className="text-[10px] font-mono text-center text-neutral-400">700</div>
                </div>
                <div className="space-y-2">
                  <div className="h-12 w-full rounded bg-neutral-800"></div>
                  <div className="text-[10px] font-mono text-center text-neutral-400">800</div>
                </div>
                <div className="space-y-2">
                  <div className="h-12 w-full rounded bg-neutral-900"></div>
                  <div className="text-[10px] font-mono text-center text-neutral-400">900</div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Typography */}
          <section className="space-y-8 scroll-mt-24" id="typography">
            <div className="flex items-baseline justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <h3 className="text-2xl font-bold">2. Typography</h3>
              <span className="font-mono text-xs text-neutral-400">TOKENS: @font-</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* UI Font */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-neutral-900 dark:text-white font-display">Inter</h4>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-mono">UI Standard</span>
                </div>
                <div className="bg-surface dark:bg-surface-dark rounded-xl p-8 border border-neutral-200 dark:border-neutral-800 space-y-6">
                  <p className="text-4xl font-black">Aa Bb Cc</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-neutral-400 font-mono mb-1">Display Large / Bold / 32px</p>
                      <p className="text-3xl font-bold">Secure your digital life</p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 font-mono mb-1">Heading / Semibold / 20px</p>
                      <p className="text-xl font-semibold">Authentication Required</p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 font-mono mb-1">Body / Regular / 16px</p>
                      <p className="text-base text-neutral-600 dark:text-neutral-300">
                        Our AI-driven shield analyzes threats in real-time, providing comprehensive protection without compromising performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Font */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-neutral-900 dark:text-white font-mono">JetBrains Mono</h4>
                  <span className="text-xs bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 px-2 py-1 rounded font-mono">Code &amp; Data</span>
                </div>
                <div className="bg-surface dark:bg-surface-dark rounded-xl p-8 border border-neutral-200 dark:border-neutral-800 space-y-6 font-mono">
                  <p className="text-4xl font-bold">Aa Bb Cc</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-neutral-400 font-sans mb-1">Code Snippet / 14px</p>
                      <div className="bg-neutral-900 text-neutral-300 p-3 rounded-lg text-sm">
                        <span className="text-primary">const</span> shield = <span className="text-[#2E7D32]">new</span> SecurityLayer();<br />
                        shield.<span className="text-[#195de6]">init</span>({'{'} level: <span className="text-orange-400">'MAX'</span> {'}'});
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 font-sans mb-1">Data Display / 12px</p>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="bg-neutral-50 dark:bg-neutral-800/50 p-2 rounded border border-neutral-200 dark:border-neutral-700">
                          <span className="text-neutral-400 block mb-1">IP ADDRESS</span>
                          192.168.1.42
                        </div>
                        <div className="bg-neutral-50 dark:bg-neutral-800/50 p-2 rounded border border-neutral-200 dark:border-neutral-700">
                          <span className="text-neutral-400 block mb-1">LATENCY</span>
                          <span className="text-[#2E7D32]">12ms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. UI Components */}
          <section className="space-y-8 scroll-mt-24" id="components">
            <div className="flex items-baseline justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <h3 className="text-2xl font-bold">3. UI Components</h3>
              <span className="font-mono text-xs text-neutral-400">LIBRARY: @components/</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Buttons */}
              <div className="space-y-4">
                <h4 className="font-semibold text-neutral-500 uppercase text-xs tracking-wider">Buttons &amp; Actions</h4>
                <div className="bg-surface dark:bg-surface-dark p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-neutral-400 font-mono">Primary</label>
                    <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-medium shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2">
                      <span>Run Analysis</span>
                      <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-neutral-400 font-mono">Secondary / Ghost</label>
                    <button className="bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 px-5 py-2.5 rounded-lg font-medium transition-all active:scale-95">
                      View Logs
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-neutral-400 font-mono">Danger</label>
                    <button className="bg-[#D32F2F]/10 hover:bg-[#D32F2F]/20 text-[#D32F2F] px-5 py-2.5 rounded-lg font-medium transition-all active:scale-95 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                      <span>Delete Rule</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Inputs */}
              <div className="space-y-4">
                <h4 className="font-semibold text-neutral-500 uppercase text-xs tracking-wider">Form Elements</h4>
                <div className="bg-surface dark:bg-surface-dark p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 flex flex-col gap-5">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">API Key</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-2.5 text-neutral-400 text-[20px]">key</span>
                      <input className="w-full pl-10 pr-4 py-2.5 bg-background-light dark:bg-background-dark border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-mono" placeholder="sk_live_..." type="text" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Environment</label>
                    <div className="relative">
                      <select className="w-full pl-4 pr-10 py-2.5 bg-background-light dark:bg-background-dark border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none cursor-pointer">
                        <option>Production</option>
                        <option>Staging</option>
                        <option>Development</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-2.5 text-neutral-400 pointer-events-none text-[20px]">expand_more</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 right-5 transition-all duration-300 border-primary" id="toggle" name="toggle" type="checkbox" />
                      <label className="toggle-label block overflow-hidden h-5 rounded-full bg-primary/30 cursor-pointer" htmlFor="toggle"></label>
                    </div>
                    <label className="text-sm font-medium text-neutral-900 dark:text-neutral-100" htmlFor="toggle">Auto-block threats</label>
                  </div>
                </div>
              </div>

              {/* Badges & Status */}
              <div className="space-y-4">
                <h4 className="font-semibold text-neutral-500 uppercase text-xs tracking-wider">Status Indicators</h4>
                <div className="bg-surface dark:bg-surface-dark p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 flex flex-col gap-6 justify-center">
                  <div className="space-y-2">
                    <p className="text-xs text-neutral-400 font-mono">Status Badges</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#2E7D32]/10 text-[#2E7D32] border border-[#2E7D32]/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span>
                        SECURE
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#D32F2F]/10 text-[#D32F2F] border border-[#D32F2F]/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] animate-pulse"></span>
                        CRITICAL
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
                        OFFLINE
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-neutral-400 font-mono">Security Score Card</p>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#195de6] to-[#104ab8] text-white shadow-lg shadow-primary/30 relative overflow-hidden">
                      <div className="relative z-10 flex justify-between items-end">
                        <div>
                          <p className="text-primary-light text-xs font-medium mb-1">SHIELD SCORE</p>
                          <p className="text-3xl font-bold font-mono">98<span className="text-lg opacity-70">/100</span></p>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                          <span className="material-symbols-outlined text-[20px]">verified_user</span>
                        </div>
                      </div>
                      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Shadows & Radii */}
          <section className="space-y-8 scroll-mt-24 pb-12" id="shadows">
            <div className="flex items-baseline justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <h3 className="text-2xl font-bold">4. Shadows, Radii &amp; Effects</h3>
              <span className="font-mono text-xs text-neutral-400">TOKENS: @effect-</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Glassmorphism */}
              <div className="relative p-8 rounded-2xl bg-neutral-100 dark:bg-[#0b0e14] overflow-hidden border border-neutral-200 dark:border-neutral-800 min-h-[300px] flex items-center justify-center" data-alt="Abstract gradient background with colorful circles to demonstrate glassmorphism effect">
                {/* Background Blobs */}
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/60 blur-[60px]"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#D32F2F]/40 blur-[60px]"></div>

                {/* Glass Card */}
                <div className="relative z-10 w-full max-w-sm bg-white/70 dark:bg-[#1e2430]/70 backdrop-blur-[12px] border border-white/50 dark:border-white/5 p-6 rounded-xl shadow-glass text-center">
                  <span className="material-symbols-outlined text-4xl mb-3 text-neutral-800 dark:text-white">blur_on</span>
                  <h4 className="text-lg font-bold mb-1 text-neutral-900 dark:text-white">Glassmorphism</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                    Used for overlays, sticky headers, and floating panels.
                  </p>
                  <div className="inline-block px-3 py-1 bg-white/50 dark:bg-black/20 rounded border border-white/20 text-xs font-mono">
                    backdrop-filter: blur(12px)
                  </div>
                </div>
              </div>

              {/* Border Radius & Shadows */}
              <div className="bg-surface dark:bg-surface-dark p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 flex flex-col justify-center gap-8">
                <div className="flex items-center gap-8">
                  <div className="w-24 h-24 bg-white dark:bg-neutral-800 shadow-sm rounded flex items-center justify-center text-xs text-neutral-400 border border-neutral-100 dark:border-neutral-700">
                    sm<br />shadow-sm
                  </div>
                  <div className="w-24 h-24 bg-white dark:bg-neutral-800 shadow-md rounded-lg flex items-center justify-center text-xs text-neutral-400 border border-neutral-100 dark:border-neutral-700">
                    lg<br />shadow-md
                  </div>
                  <div className="w-24 h-24 bg-white dark:bg-neutral-800 shadow-xl rounded-2xl flex items-center justify-center text-xs text-neutral-400 border border-neutral-100 dark:border-neutral-700">
                    2xl<br />shadow-xl
                  </div>
                </div>
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-neutral-900 dark:text-white">Usage Guidelines</h5>
                  <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1 list-disc list-inside">
                    <li><strong>rounded-lg (8px):</strong> Default for buttons, inputs, and small cards.</li>
                    <li><strong>rounded-xl (12px):</strong> Standard for content cards and dialogs.</li>
                    <li><strong>shadow-sm:</strong> Default state for interactive cards.</li>
                    <li><strong>shadow-lg + scale:</strong> Hover states for cards.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-surface dark:bg-surface-dark border-t border-neutral-200 dark:border-neutral-800 py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">creada en 2026 Jonathan Jimenez Escobar</p>
            <div className="flex items-center gap-6">
              <Link className="text-sm text-neutral-500 hover:text-primary" to='/panel'>Documentation</Link>
              <Link className="text-sm text-neutral-500 hover:text-primary" to='/panel'>Repository</Link>
              <Link className="text-sm text-neutral-500 hover:text-primary" to='/centro-ayuda'>Support</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
