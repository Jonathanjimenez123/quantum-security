import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Search, 
  Bell, 
  Languages, 
  Image as ImageIcon, 
  LineChart, 
  Database, 
  Settings2, 
  Terminal, 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  RefreshCw, 
  Network, 
  Activity, 
  Sliders, 
  AlignLeft, 
  Globe,
  ArrowLeft
} from 'lucide-react';

interface AiModelHealthMonitorProps {
  onBack: () => void;
}

export default function AiModelHealthMonitor({ onBack }: AiModelHealthMonitorProps) {
  return (
    <div className="flex h-screen w-full flex-col bg-[#0a0705] text-slate-100 font-sans overflow-hidden">
      {/* Top Navigation */}
      <header className="flex items-center justify-between border-b border-[#ec5b13]/20 bg-[#1a1310] px-6 py-3 sticky top-0 z-50 shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 rounded-xl hover:bg-white/5 transition-colors text-slate-400 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#ec5b13]/10 text-[#ec5b13]">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold leading-tight tracking-tight text-white">AI Health Nexus</h2>
            <p className="text-xs text-slate-400">Production Monitor v4.2.0</p>
          </div>
        </div>
        
        <div className="flex flex-1 justify-center max-w-xl mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              className="w-full bg-[#0a0705] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-[#ec5b13] focus:outline-none text-white placeholder:text-slate-500" 
              placeholder="Buscar neural layers..." 
              type="text"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-xl hover:bg-[#0a0705] transition-colors relative text-slate-400 hover:text-white">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#39ff14] rounded-full border-2 border-[#1a1310]"></span>
          </button>
          <div className="h-8 w-[1px] bg-slate-800 mx-2"></div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-white">Admin Core</p>
              <p className="text-[10px] text-[#39ff14]">SYSTEM ONLINE</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#ec5b13]/20 border border-[#ec5b13]/40 flex items-center justify-center overflow-hidden">
              <img 
                alt="User Profile" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Side Navigation */}
        <aside className="w-64 border-r border-[#ec5b13]/10 bg-[#1a1310] hidden lg:flex flex-col p-4 gap-6 overflow-y-auto">
          <nav className="flex flex-col gap-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Engines</p>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#ec5b13] text-white shadow-lg shadow-[#ec5b13]/20" to='/panel'>
              <Languages className="w-4 h-4" />
              <span className="text-sm font-medium">NLP Engine</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#0a0705] transition-colors text-slate-400 hover:text-white" to='/panel'>
              <ImageIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Image Recognition</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#0a0705] transition-colors text-slate-400 hover:text-white" to='/panel'>
              <LineChart className="w-4 h-4" />
              <span className="text-sm font-medium">Drift Analysis</span>
            </Link>
          </nav>

          <nav className="flex flex-col gap-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Management</p>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#0a0705] transition-colors text-slate-400 hover:text-white" to='/entrenamiento-interactivo'>
              <Database className="w-4 h-4" />
              <span className="text-sm font-medium">Training Data</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#0a0705] transition-colors text-slate-400 hover:text-white" to='/ajustes'>
              <Settings2 className="w-4 h-4" />
              <span className="text-sm font-medium">Hyperparameters</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#0a0705] transition-colors text-slate-400 hover:text-white" to='/panel'>
              <Terminal className="w-4 h-4" />
              <span className="text-sm font-medium">Engine Logs</span>
            </Link>
          </nav>

          <div className="mt-auto bg-[#ec5b13]/5 rounded-2xl p-4 border border-[#ec5b13]/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-3 h-3 text-[#ec5b13]" />
              <span className="text-xs font-bold uppercase text-white">System Load</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-[#ec5b13] w-[65%]"></div>
            </div>
            <p className="text-[10px] text-slate-400 mt-2">GPU Clusters at 65.4% capacity</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#0a0705]/50">
          <div className="max-w-6xl mx-auto space-y-6">
            
            {/* Status Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white">NLP Engine Health</h1>
                <p className="text-slate-400">Real-time inference and accuracy metrics</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#39ff14]/10 border border-[#39ff14]/30 rounded-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39ff14] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39ff14]"></span>
                </span>
                <span className="text-xs font-bold text-[#39ff14] uppercase tracking-wider">Operational</span>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#1a1310] p-6 rounded-2xl border border-[#ec5b13]/10 shadow-[0_0_15px_rgba(0,243,255,0.1)]">
                <div className="flex justify-between items-start mb-4">
                  <CheckCircle className="w-5 h-5 text-[#00f3ff]" />
                  <span className="text-[10px] font-bold text-[#00f3ff] px-2 py-0.5 rounded bg-[#00f3ff]/10 uppercase tracking-tighter">Optimal</span>
                </div>
                <p className="text-sm text-slate-400">Confidence Score</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <h3 className="text-3xl font-bold text-slate-100">94.2%</h3>
                  <span className="text-[#39ff14] text-sm font-medium">↑ 1.2%</span>
                </div>
                <div className="mt-4 h-1 w-full bg-slate-800 rounded-full">
                  <div className="h-full bg-[#00f3ff] w-[94.2%]"></div>
                </div>
              </div>

              <div className="bg-[#1a1310] p-6 rounded-2xl border border-[#ec5b13]/10">
                <div className="flex justify-between items-start mb-4">
                  <AlertTriangle className="w-5 h-5 text-[#ec5b13]" />
                  <span className="text-[10px] font-bold text-[#ec5b13] px-2 py-0.5 rounded bg-[#ec5b13]/10 uppercase tracking-tighter">Stable</span>
                </div>
                <p className="text-sm text-slate-400">Drift Analysis</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <h3 className="text-3xl font-bold text-slate-100">0.05%</h3>
                  <span className="text-[#ec5b13] text-sm font-medium">Low</span>
                </div>
                <div className="flex gap-1 mt-4">
                  <div className="h-4 w-full bg-[#ec5b13]/20 rounded-sm"></div>
                  <div className="h-4 w-full bg-[#ec5b13]/40 rounded-sm"></div>
                  <div className="h-4 w-full bg-[#ec5b13]/10 rounded-sm"></div>
                  <div className="h-4 w-full bg-[#ec5b13]/10 rounded-sm"></div>
                  <div className="h-4 w-full bg-[#ec5b13]/5 rounded-sm"></div>
                </div>
              </div>

              <div className="bg-[#1a1310] p-6 rounded-2xl border border-[#ec5b13]/10 shadow-[0_0_15px_rgba(57,255,20,0.1)]">
                <div className="flex justify-between items-start mb-4">
                  <RefreshCw className="w-5 h-5 text-[#39ff14]" />
                  <span className="text-[10px] font-bold text-[#39ff14] px-2 py-0.5 rounded bg-[#39ff14]/10 uppercase tracking-tighter">Current</span>
                </div>
                <p className="text-sm text-slate-400">Retraining Status</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <h3 className="text-3xl font-bold text-slate-100">Healthy</h3>
                  <span className="text-slate-500 text-sm font-medium">2d ago</span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-slate-800 border-2 border-[#1a1310] flex items-center justify-center text-[8px] text-white">DS</div>
                    <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-[#1a1310] flex items-center justify-center text-[8px] text-white">ML</div>
                  </div>
                  <span className="text-[10px] text-slate-400">Last manual tuning by Core Team</span>
                </div>
              </div>
            </div>

            {/* Visualizations */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              
              {/* Radar Chart Representation */}
              <div className="bg-[#1a1310] p-6 rounded-2xl border border-[#ec5b13]/10">
                <h4 className="font-bold mb-6 flex items-center gap-2 text-white">
                  <Network className="w-5 h-5 text-[#00f3ff]" />
                  Neural Layer Performance
                </h4>
                <div className="relative h-64 w-full flex items-center justify-center">
                  <div 
                    className="absolute inset-0 rounded-full opacity-20"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(0, 243, 255, 0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  ></div>
                  <svg className="h-full w-auto overflow-visible" viewBox="0 0 100 100">
                    <polygon fill="rgba(0, 243, 255, 0.1)" points="50,10 90,40 75,90 25,90 10,40" stroke="#00f3ff" strokeWidth="0.5"></polygon>
                    <polygon fill="rgba(57, 255, 20, 0.15)" points="50,25 80,45 65,75 35,75 20,45" stroke="#39ff14" strokeWidth="0.5"></polygon>
                    
                    <circle cx="50" cy="10" fill="#00f3ff" r="1.5"></circle>
                    <circle cx="90" cy="40" fill="#00f3ff" r="1.5"></circle>
                    <circle cx="75" cy="90" fill="#00f3ff" r="1.5"></circle>
                    <circle cx="25" cy="90" fill="#00f3ff" r="1.5"></circle>
                    <circle cx="10" cy="40" fill="#00f3ff" r="1.5"></circle>
                  </svg>
                  
                  <div className="absolute top-0 text-[10px] font-bold uppercase text-slate-300">Accuracy</div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase translate-x-4 text-slate-300">Latency</div>
                  <div className="absolute bottom-0 right-1/4 text-[10px] font-bold uppercase text-slate-300">Recall</div>
                  <div className="absolute bottom-0 left-1/4 text-[10px] font-bold uppercase text-slate-300">Precision</div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase -translate-x-4 text-slate-300">F1 Score</div>
                </div>
                <div className="mt-6 flex justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00f3ff]"></span>
                    <span className="text-xs text-slate-400">Current Model</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#39ff14]"></span>
                    <span className="text-xs text-slate-400">Training Target</span>
                  </div>
                </div>
              </div>

              {/* Line Graph Representation */}
              <div className="bg-[#1a1310] p-6 rounded-2xl border border-[#ec5b13]/10">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold flex items-center gap-2 text-white">
                    <Activity className="w-5 h-5 text-[#ec5b13]" />
                    Training Evolution
                  </h4>
                  <select className="bg-[#0a0705] border border-[#ec5b13]/20 text-[10px] rounded-lg px-2 py-1 text-slate-300 outline-none">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                  </select>
                </div>
                <div className="h-64 flex items-end gap-1">
                  {[40, 45, 35, 50, 60, 55, 70, 75, 85, 80, 90, 95].map((height, i) => (
                    <div key={i} className="flex-1 bg-[#ec5b13]/20 hover:bg-[#ec5b13] transition-colors rounded-t-sm relative group" style={{ height: `${height}%` }}>
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 hidden group-hover:block bg-[#1a1310] border border-[#ec5b13]/40 px-2 py-1 text-[8px] rounded whitespace-nowrap z-10 text-white">
                        Val: {(height / 100).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-[10px] text-slate-500 font-bold">
                  <span>EPOCH 001</span>
                  <span>EPOCH 120</span>
                  <span>EPOCH 240 (CURRENT)</span>
                </div>
              </div>
            </div>

            {/* Engine Comparison / manual Tuning */}
            <div className="bg-[#1a1310] rounded-2xl border border-[#ec5b13]/10 overflow-hidden">
              <div className="p-6 border-b border-[#ec5b13]/10 flex justify-between items-center">
                <h4 className="font-bold text-white">Manual Tuning Required</h4>
                <button className="bg-[#ec5b13] text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-[#ec5b13]/90 transition-colors">
                  <Sliders className="w-4 h-4" />
                  Open Tuning Panel
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-[#0a0705]/30 text-slate-500 text-[10px] uppercase font-bold tracking-widest">
                    <tr>
                      <th className="px-6 py-4">Data Subset</th>
                      <th className="px-6 py-4">Current Accuracy</th>
                      <th className="px-6 py-4">Target</th>
                      <th className="px-6 py-4">System Tag</th>
                      <th className="px-6 py-4 text-right">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ec5b13]/5">
                    <tr className="hover:bg-[#ec5b13]/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-[#00f3ff]/20 flex items-center justify-center">
                            <AlignLeft className="w-4 h-4 text-[#00f3ff]" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">Medical Terminology</p>
                            <p className="text-[10px] text-slate-400">Subset ID: #4402</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-[#ec5b13]">78.2%</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-white">92.0%</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#ec5b13]/10 text-[#ec5b13] font-bold uppercase">Critical Drift</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-[#00f3ff] text-xs font-bold hover:underline">Re-train</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#ec5b13]/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-[#39ff14]/20 flex items-center justify-center">
                            <Globe className="w-4 h-4 text-[#39ff14]" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">Multi-lingual Nuance</p>
                            <p className="text-[10px] text-slate-400">Subset ID: #1092</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-[#39ff14]">91.5%</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-white">90.0%</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#39ff14]/10 text-[#39ff14] font-bold uppercase">Excellent</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 text-xs font-bold hover:text-white transition-colors">Maintain</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
