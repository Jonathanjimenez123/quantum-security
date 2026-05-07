import { auth } from '../firebase';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ModelManagementProps {
  onBack: () => void;
}

export default function ModelManagement({ onBack }: ModelManagementProps) {
  const [deploymentStrategy, setDeploymentStrategy] = useState('canary');

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display overflow-y-auto">
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-card-border px-8 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-slate-900 dark:text-white">
            <button onClick={onBack} className="flex items-center justify-center text-slate-500 hover:text-primary transition-colors mr-2">
              <span className="material-symbols-outlined text-2xl">arrow_back</span>
            </button>
            <div className="size-8 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">shield_lock</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">CyberGuard Admin</h2>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={onBack} className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors">Panel de Control</button>
            <Link className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" to='/informes'>Threat Logs</Link>
            <Link className="text-primary text-sm font-bold leading-normal border-b-2 border-primary pb-0.5" to='/panel'>Model Management</Link>
            <Link className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" to='/ajustes'>Configuración</Link>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
          <label className="hidden lg:flex flex-col min-w-40 h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input className="block w-full rounded-lg border-0 py-1.5 pl-10 text-slate-900 dark:text-white bg-slate-100 dark:bg-card-dark ring-1 ring-inset ring-slate-200 dark:ring-card-border placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" placeholder="Buscar modules..." />
            </div>
          </label>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-9 ring-2 ring-slate-200 dark:ring-card-border" data-alt="User profile picture" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
          </div>
        </div>
      </header>
      <div className="flex flex-1 h-full">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:flex w-64 flex-col border-r border-slate-200 dark:border-card-border bg-white dark:bg-background-dark py-6 px-4 gap-4 sticky top-[65px] h-[calc(100vh-65px)]">
          <div className="flex flex-col gap-1">
            <h3 className="px-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Engine Controls</h3>
            <button onClick={onBack} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-card-dark transition-colors group w-full text-left">
              <span className="material-symbols-outlined group-hover:text-primary">dashboard</span>
              <span className="text-sm font-medium">Resumen</span>
            </button>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-card-dark transition-colors group" to='/informes'>
              <span className="material-symbols-outlined group-hover:text-primary">security</span>
              <span className="text-sm font-medium">Live Threats</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-white" to='/entrenamiento-interactivo'>
              <span className="material-symbols-outlined fill-1">model_training</span>
              <span className="text-sm font-medium">Model Versioning</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-card-dark transition-colors group" to='/panel'>
              <span className="material-symbols-outlined group-hover:text-primary">checklist</span>
              <span className="text-sm font-medium">Whitelisting</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-card-dark transition-colors group" to='/ajustes'>
              <span className="material-symbols-outlined group-hover:text-primary">settings_suggest</span>
              <span className="text-sm font-medium">System Config</span>
            </Link>
          </div>
          <div className="mt-auto">
            <div className="rounded-lg bg-slate-100 dark:bg-card-dark p-4 border border-slate-200 dark:border-card-border">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-green-500">check_circle</span>
                <span className="text-sm font-semibold dark:text-white">System Healthy</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Last check: 2 mins ago</p>
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-10 max-w-[1600px] mx-auto w-full">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">AI Model Management</h1>
              <p className="text-slate-500 dark:text-slate-400 max-w-2xl">Manage deployment versions, review release candidates, and execute rollout strategies for the anti-phishing neural engine.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Engine Online</span>
            </div>
          </div>
          {/* Grid Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left Column: Current Status & Actions */}
            <div className="xl:col-span-2 flex flex-col gap-6">
              {/* Current Version Card */}
              <div className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-card-border p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-slate-400">deployed_code</span>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Current Deployment</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 dark:bg-background-dark/50 rounded-lg p-4 border border-slate-100 dark:border-card-border">
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Active Version</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-slate-900 dark:text-white">v4.2.0</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">LIVE</span>
                    </div>
                    <p className="text-xs text-primary mt-1 font-medium">NLP Optimized</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-background-dark/50 rounded-lg p-4 border border-slate-100 dark:border-card-border">
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Deployed On</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">Oct 12, 2026</p>
                    <p className="text-xs text-slate-500 mt-1">14:30 UTC by Admin</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-background-dark/50 rounded-lg p-4 border border-slate-100 dark:border-card-border">
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">False Positive Rate</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">0.04%</p>
                    <p className="text-xs text-green-500 mt-1 flex items-center">
                      <span className="material-symbols-outlined text-[14px] mr-1">trending_down</span>
                      -0.01% vs v4.1.0
                    </p>
                  </div>
                </div>
              </div>
              {/* Available Update Card */}
              <div className="bg-white dark:bg-card-dark rounded-xl border border-primary/30 dark:border-primary/40 p-0 shadow-lg shadow-primary/5 overflow-hidden ring-1 ring-primary/20">
                <div className="bg-primary/5 dark:bg-primary/10 px-6 py-4 border-b border-primary/20 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary text-white p-1.5 rounded flex items-center justify-center shadow-lg shadow-primary/30">
                      <span className="material-symbols-outlined text-lg">new_releases</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Update Available</h3>
                      <p className="text-xs text-primary font-semibold">Release Candidate</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-slate-900 dark:text-white">v4.3.0</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-lg">description</span> Release Notes
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">check_small</span>
                        <span><strong className="text-slate-900 dark:text-white">Enhanced Typosquatting Detection:</strong> New transformer layer added to identify subtle character replacements in URLs with 99.8% accuracy.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">check_small</span>
                        <span><strong className="text-slate-900 dark:text-white">Reduced False Positives:</strong> Calibrated thresholds for banking domains, reducing user friction by 15%.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">check_small</span>
                        <span><strong className="text-slate-900 dark:text-white">Latency Improvement:</strong> Inference time reduced to 45ms (previously 62ms).</span>
                      </li>
                    </ul>
                  </div>
                  <hr className="border-slate-200 dark:border-card-border mb-6" />
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Deployment Strategy</h4>
                      <div className="space-y-3">
                        <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${deploymentStrategy === 'canary' ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-card-border hover:bg-slate-50 dark:hover:bg-card-border/50'}`}>
                          <input checked={deploymentStrategy === 'canary'} onChange={() => setDeploymentStrategy('canary')} className="mt-1 text-primary focus:ring-primary border-slate-300 bg-transparent" name="strategy" type="radio" />
                          <div>
                            <span className="block text-sm font-bold text-slate-900 dark:text-white">Staged Rollout (Canary)</span>
                            <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1">Deploy to 10% of high-risk users first. Monitor for 2 hours before scaling.</span>
                          </div>
                        </label>
                        <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${deploymentStrategy === 'instant' ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-card-border hover:bg-slate-50 dark:hover:bg-card-border/50'}`}>
                          <input checked={deploymentStrategy === 'instant'} onChange={() => setDeploymentStrategy('instant')} className="mt-1 text-primary focus:ring-primary border-slate-300 bg-transparent" name="strategy" type="radio" />
                          <div>
                            <span className="block text-sm font-bold text-slate-900 dark:text-white">Instant Global Update</span>
                            <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1">Immediate propagation to all endpoints. Recommended only for critical security patches.</span>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col justify-end">
                      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-4">
                        <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-500 mb-1">
                          <span className="material-symbols-outlined text-lg">warning</span>
                          <span className="text-xs font-bold uppercase">Administrator Action Required</span>
                        </div>
                        <p className="text-xs text-yellow-700 dark:text-yellow-400/80">
                          This action will modify the active inference engine. Ensure all regression tests have passed before proceeding.
                        </p>
                      </div>
                      <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">rocket_launch</span>
                        Start Deployment Sequence
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: Visualizations & Metrics */}
            <div className="xl:col-span-1 flex flex-col gap-6">
              {/* Performance Preview */}
              <div className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-card-border p-6 shadow-sm h-full">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Model Health Preview</h3>
                <div className="space-y-6">
                  {/* Chart Placeholder 1 */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Projected Accuracy</span>
                      <span className="text-sm font-bold text-green-500">+1.2%</span>
                    </div>
                    <div className="relative h-32 w-full bg-slate-50 dark:bg-background-dark/50 rounded-lg border border-slate-100 dark:border-card-border overflow-hidden">
                      {/* Abstract Bar Chart Representation */}
                      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-2 h-full py-2 gap-1">
                        <div className="w-full bg-primary/20 rounded-t h-[40%]"></div>
                        <div className="w-full bg-primary/20 rounded-t h-[55%]"></div>
                        <div className="w-full bg-primary/30 rounded-t h-[45%]"></div>
                        <div className="w-full bg-primary/40 rounded-t h-[60%]"></div>
                        <div className="w-full bg-primary/60 rounded-t h-[75%]"></div>
                        <div className="w-full bg-primary rounded-t h-[85%] relative group">
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">v4.3.0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Metrics Comparison */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-background-dark/50 border border-slate-100 dark:border-card-border">
                      <div className="text-xs text-slate-500 mb-1">Precision</div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white">99.92%</div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: '99%' }}></div>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-background-dark/50 border border-slate-100 dark:border-card-border">
                      <div className="text-xs text-slate-500 mb-1">Recall</div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white">98.45%</div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-accent-cyan h-full rounded-full" style={{ width: '98%' }}></div>
                      </div>
                    </div>
                  </div>
                  {/* Rollout Timeline Preview */}
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-card-border">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Estimated Rollout Timeline</h4>
                    <div className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700 space-y-4">
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-white dark:ring-card-dark"></div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">00:00 - Initiation</p>
                        <p className="text-[10px] text-slate-500">Validation checks &amp; backup creation</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-white dark:ring-card-dark"></div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">00:15 - Canary Phase</p>
                        <p className="text-[10px] text-slate-500">10% user base update</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-white dark:ring-card-dark"></div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">02:15 - Global Scale</p>
                        <p className="text-[10px] text-slate-500">Remaining 90% rollout if healthy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sandbox Test Box */}
              <div className="bg-gradient-to-br from-card-dark to-background-dark rounded-xl border border-card-border p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-white">Quick Sandbox Test</h3>
                  <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded">v4.3.0 Preview</span>
                </div>
                <div className="flex gap-2">
                  <input className="flex-1 bg-background-dark border-card-border rounded text-sm text-white placeholder:text-slate-500 focus:ring-primary focus:border-primary" placeholder="Enter suspicious URL..." type="text" />
                  <button className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded transition-colors">
                    <span className="material-symbols-outlined text-lg">play_arrow</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Footer / System Logs snippet */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-card-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Recent System Events</h3>
              <Link className="text-xs text-primary hover:underline" to='/panel'>View All Logs</Link>
            </div>
            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-card-border">
              <table className="w-full text-left text-sm text-slate-500 dark:text-slate-400">
                <thead className="bg-slate-50 dark:bg-card-dark text-xs uppercase text-slate-700 dark:text-slate-300">
                  <tr>
                    <th className="px-6 py-3 font-medium" scope="col">Timestamp</th>
                    <th className="px-6 py-3 font-medium" scope="col">Event</th>
                    <th className="px-6 py-3 font-medium" scope="col">Usuario</th>
                    <th className="px-6 py-3 font-medium" scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-card-border bg-white dark:bg-background-dark">
                  <tr>
                    <td className="px-6 py-3 whitespace-nowrap">Oct 24, 10:42 AM</td>
                    <td className="px-6 py-3 whitespace-nowrap">Model v4.3.0 Uploaded</td>
                    <td className="px-6 py-3 whitespace-nowrap">System (CI/CD)</td>
                    <td className="px-6 py-3 whitespace-nowrap text-green-500">Success</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 whitespace-nowrap">Oct 24, 09:15 AM</td>
                    <td className="px-6 py-3 whitespace-nowrap">Regression Test Suite #402</td>
                    <td className="px-6 py-3 whitespace-nowrap">Automated Bot</td>
                    <td className="px-6 py-3 whitespace-nowrap text-green-500">Passed</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 whitespace-nowrap">Oct 23, 16:20 PM</td>
                    <td className="px-6 py-3 whitespace-nowrap">User Whitelist Update</td>
                    <td className="px-6 py-3 whitespace-nowrap">Admin User</td>
                    <td className="px-6 py-3 whitespace-nowrap text-slate-500">Completed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
