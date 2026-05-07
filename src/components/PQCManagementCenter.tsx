import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PQCManagementCenter() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0c0e12] text-[#f8f9fe] font-sans selection:bg-[#99f7ff]/30 min-h-screen">
      <style>{`
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .quantum-glow {
            box-shadow: 0 0 20px rgba(153, 247, 255, 0.05);
        }
        .asymmetric-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 2rem;
        }
        ::-webkit-scrollbar {
            width: 4px;
        }
        ::-webkit-scrollbar-track {
            background: #0c0e12;
        }
        ::-webkit-scrollbar-thumb {
            background: #46484c;
        }
      `}</style>
      
      {/* TopNavBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,242,255,0.03)] font-display tracking-tight">
        <div className="flex items-center gap-6">
          <span className="font-mono font-bold text-cyan-400 tracking-widest">QUANTUM SECURITY ARCHITECTURE</span>
          <nav className="hidden md:flex gap-8 ml-8">
            <a className="text-slate-500 hover:text-slate-300 transition-all duration-300" href="#">Network</a>
            <a className="text-cyan-400 border-b-2 border-cyan-400 pb-1" href="#">Algorithms</a>
            <a className="text-slate-500 hover:text-slate-300 transition-all duration-300" href="#">Vault</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-[#1c2025] px-4 py-1.5 border border-[#46484c]/20">
            <span className="material-symbols-outlined text-[#a9abb0] text-sm mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-xs font-mono w-48 text-[#99f7ff] outline-none" placeholder="SECURE QUERY..." type="text"/>
          </div>
          <div className="flex gap-4 items-center">
            <span className="material-symbols-outlined text-slate-500 hover:text-cyan-400 cursor-pointer transition-colors">security</span>
            <span className="material-symbols-outlined text-slate-500 hover:text-cyan-400 cursor-pointer transition-colors">terminal</span>
            <button className="bg-[#00f1fe] text-[#00555a] px-4 py-2 font-mono text-xs font-bold tracking-widest scale-95 active:opacity-80 transition-all">SYSTEM AUTHORIZE</button>
          </div>
        </div>
      </header>

      {/* SideNavBar */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 flex flex-col justify-between py-6 bg-slate-950 border-r border-white/5 font-mono text-xs uppercase tracking-widest z-40">
        <div className="flex flex-col">
          <div className="px-6 mb-8 flex items-center gap-4">
            <div className="w-10 h-10 border border-[#99f7ff]/30 p-0.5">
              <img className="w-full h-full object-cover" alt="Jonathan Jimenez Escobar" src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"/>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-[#a9abb0]">LEAD ARCHITECT</span>
              <span className="text-[#99f7ff] font-bold">J. JIMENEZ ESCOBAR</span>
            </div>
          </div>
          <div className="flex flex-col">
            <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300 transition-colors duration-150" href="#">
              <span className="material-symbols-outlined">insights</span>
              <span>Entropy Monitor</span>
            </a>
            <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300 transition-colors duration-150" href="#">
              <span className="material-symbols-outlined">verified</span>
              <span>Hybrid Certs</span>
            </a>
            <a className="bg-slate-900 text-cyan-400 border-r-2 border-cyan-400 flex items-center gap-4 px-6 py-4" href="#">
              <span className="material-symbols-outlined">hub</span>
              <span>PQC Algorithms</span>
            </a>
            <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300 transition-colors duration-150" href="#">
              <span className="material-symbols-outlined">vpn_key</span>
              <span>Key Management</span>
            </a>
            <a className="text-slate-500 flex items-center gap-4 px-6 py-4 hover:bg-slate-900/50 hover:text-cyan-300 transition-colors duration-150" href="#">
              <span className="material-symbols-outlined">settings_ethernet</span>
              <span>System Logs</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="px-6 mb-6">
            <button className="w-full border border-[#ff9f4d] text-[#ff9f4d] py-3 text-[10px] hover:bg-[#ff9f4d]/10 transition-all font-bold">INITIATE OVERRIDE</button>
          </div>
          <a className="text-slate-500 flex items-center gap-4 px-6 py-3 hover:text-white transition-colors" href="#">
            <span className="material-symbols-outlined">biotech</span>
            <span>Diagnostics</span>
          </a>
          <a className="text-slate-500 flex items-center gap-4 px-6 py-3 hover:text-white transition-colors" href="#">
            <span className="material-symbols-outlined">support_agent</span>
            <span>Help</span>
          </a>
          <button onClick={() => navigate('/panel')} className="text-slate-500 flex items-center gap-4 px-6 py-3 hover:text-white transition-colors mt-4">
            <span className="material-symbols-outlined">arrow_back</span>
            <span>Back to Panel</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 mt-16 p-8 min-h-screen">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-[#f8f9fe] mb-2">PQC MANAGEMENT CENTER</h1>
            <p className="font-mono text-xs text-[#a9abb0] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#99f7ff] animate-pulse"></span>
              CORE STATUS: OPTIMAL | QUANTUM COHERENCE: 99.992% | YEAR: 2026.04.12
            </p>
          </div>
          <div className="text-right font-mono text-[10px] text-[#a9abb0] leading-relaxed">
            LOC: SECTOR_G7 // CRYPTO_NODE: 0x88AF<br/>
            AUTH: J_JIMENEZ_ESCOBAR_ADMIN
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Quantum Entropy Monitoring (QRNG) */}
          <div className="col-span-12 lg:col-span-8 bg-[#111417] border-l-4 border-[#99f7ff] p-6 quantum-glow">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#99f7ff]">waves</span>
                <h2 className="font-display font-bold text-lg tracking-wide uppercase">Quantum Entropy & Qubit Stability</h2>
              </div>
              <div className="flex gap-4">
                <div className="text-right">
                  <p className="text-[10px] text-[#a9abb0] font-mono">STABILITY</p>
                  <p className="text-[#99f7ff] font-mono text-lg">99.998%</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-[#a9abb0] font-mono">BIT_RATE</p>
                  <p className="text-[#ac89ff] font-mono text-lg">4.2 Gbps</p>
                </div>
              </div>
            </div>
            {/* Simulated Waveform Visualizer */}
            <div className="h-48 flex items-end justify-between gap-1 mb-6">
              {/* Dynamic Bars Placeholder */}
              <div className="w-full h-full flex items-end gap-0.5 opacity-60">
                <div className="bg-[#99f7ff]/20 w-full" style={{ height: '40%' }}></div>
                <div className="bg-[#99f7ff]/30 w-full" style={{ height: '60%' }}></div>
                <div className="bg-[#99f7ff]/40 w-full" style={{ height: '35%' }}></div>
                <div className="bg-[#99f7ff]/20 w-full" style={{ height: '80%' }}></div>
                <div className="bg-[#00f1fe] w-full" style={{ height: '95%' }}></div>
                <div className="bg-[#99f7ff]/50 w-full" style={{ height: '55%' }}></div>
                <div className="bg-[#ac89ff]/40 w-full" style={{ height: '70%' }}></div>
                <div className="bg-[#99f7ff]/20 w-full" style={{ height: '40%' }}></div>
                <div className="bg-[#99f7ff]/30 w-full" style={{ height: '90%' }}></div>
                <div className="bg-[#99f7ff]/40 w-full" style={{ height: '25%' }}></div>
                <div className="bg-[#00f1fe] w-full" style={{ height: '65%' }}></div>
                <div className="bg-[#99f7ff]/20 w-full" style={{ height: '50%' }}></div>
                <div className="bg-[#ac89ff]/30 w-full" style={{ height: '75%' }}></div>
                <div className="bg-[#99f7ff]/40 w-full" style={{ height: '30%' }}></div>
                <div className="bg-[#99f7ff]/60 w-full" style={{ height: '85%' }}></div>
                <div className="bg-[#99f7ff]/20 w-full" style={{ height: '45%' }}></div>
                <div className="bg-[#99f7ff]/30 w-full" style={{ height: '95%' }}></div>
                <div className="bg-[#99f7ff]/40 w-full" style={{ height: '20%' }}></div>
                <div className="bg-[#00f1fe] w-full" style={{ height: '70%' }}></div>
                <div className="bg-[#99f7ff]/20 w-full" style={{ height: '55%' }}></div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 border-t border-[#46484c]/20 pt-6">
              <div>
                <p className="text-[10px] font-mono text-[#a9abb0]">OBSERVER_STATE</p>
                <p className="font-mono text-xs text-[#99f7ff]">NON_COLLAPSED</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-[#a9abb0]">QRNG_ENGINE</p>
                <p className="font-mono text-xs text-[#f8f9fe]">PHOTONIC_S2_REV4</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-[#a9abb0]">TEMP_K</p>
                <p className="font-mono text-xs text-[#f8f9fe]">0.015 K</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-mono text-[#a9abb0]">ACTIVE_QUBITS</p>
                <p className="font-mono text-xs text-[#ac89ff]">2,048 (HYBRID)</p>
              </div>
            </div>
          </div>

          {/* Health Status Panel */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-[#1c2025] p-6 border border-[#46484c]/10">
              <h3 className="font-display font-bold text-sm tracking-widest mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#99f7ff]"></span> QUANTUM HEALTH
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[10px] font-mono mb-1.5">
                    <span className="text-[#a9abb0]">KEY_DENSITY</span>
                    <span className="text-[#99f7ff]">89%</span>
                  </div>
                  <div className="h-1 bg-[#22262b]">
                    <div className="h-full bg-[#99f7ff]" style={{ width: '89%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-mono mb-1.5">
                    <span className="text-[#a9abb0]">TRANSITION_LATENCY</span>
                    <span className="text-[#ac89ff]">1.2ms</span>
                  </div>
                  <div className="h-1 bg-[#22262b]">
                    <div className="h-full bg-[#ac89ff]" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-mono mb-1.5">
                    <span className="text-[#a9abb0]">ENTROPY_POOL</span>
                    <span className="text-[#ff9f4d]">CRITICAL_READY</span>
                  </div>
                  <div className="h-1 bg-[#22262b]">
                    <div className="h-full bg-[#ff9f4d]" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert Authorization Module */}
            <div className="bg-[#1c2025] p-4 flex gap-4 items-center border border-[#99f7ff]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-1 bg-[#99f7ff]/10">
                <span className="material-symbols-outlined text-[10px] text-[#99f7ff]">verified_user</span>
              </div>
              <div className="w-12 h-12 border border-[#99f7ff]/40 p-0.5">
                <img className="w-full h-full object-cover" alt="Jonathan Jimenez Escobar" src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"/>
              </div>
              <div>
                <p className="text-[10px] text-[#99f7ff] font-mono uppercase tracking-tighter">Authorized Lead</p>
                <p className="font-display font-bold text-xs">J. Jimenez Escobar</p>
                <p className="text-[9px] text-[#a9abb0] font-mono mt-1">ID: ARCH_PQ_9921_0</p>
              </div>
              <button className="ml-auto text-[#99f7ff] hover:text-[#00f1fe] transition-colors">
                <span className="material-symbols-outlined">shield_with_heart</span>
              </button>
            </div>
          </div>

          {/* PQC Algorithm Inventory */}
          <div className="col-span-12 bg-[#171a1e] p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#ac89ff]">hub</span>
                <h2 className="font-display font-bold text-lg tracking-wide uppercase">PQC Algorithm Inventory & Health</h2>
              </div>
              <span className="text-[10px] font-mono bg-[#7000ff]/20 text-[#874cff] px-3 py-1 border border-[#ac89ff]/20">NIST POST-QUANTUM COMPLIANT</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Algorithm Card */}
              <div className="bg-[#1c2025] p-5 border-l-2 border-[#99f7ff]/40 group hover:border-[#99f7ff] transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-mono font-bold text-[#f8f9fe]">CRYSTALS-Dilithium</h4>
                  <span className="text-[10px] font-mono text-[#99f7ff] bg-[#99f7ff]/10 px-2 py-0.5">ACTIVE</span>
                </div>
                <p className="text-xs text-[#a9abb0] leading-relaxed mb-4">Lattice-based digital signature scheme. Primary standard for high-security transactions.</p>
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-[9px] font-mono text-[#a9abb0] uppercase">Key Strength</p>
                    <p className="text-xs font-mono">5120-bit (Level 5)</p>
                  </div>
                  <span className="material-symbols-outlined text-[#00e2ee] opacity-30 group-hover:opacity-100 transition-opacity">fingerprint</span>
                </div>
              </div>
              {/* Algorithm Card */}
              <div className="bg-[#1c2025] p-5 border-l-2 border-[#ac89ff]/40 group hover:border-[#ac89ff] transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-mono font-bold text-[#f8f9fe]">CRYSTALS-Kyber</h4>
                  <span className="text-[10px] font-mono text-[#ac89ff] bg-[#ac89ff]/10 px-2 py-0.5">ACTIVE</span>
                </div>
                <p className="text-xs text-[#a9abb0] leading-relaxed mb-4">Key-encapsulation mechanism (KEM). Designed for ultra-low latency exchange.</p>
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-[9px] font-mono text-[#a9abb0] uppercase">Coherence</p>
                    <p className="text-xs font-mono">99.8% Optimized</p>
                  </div>
                  <span className="material-symbols-outlined text-[#ac89ff] opacity-30 group-hover:opacity-100 transition-opacity">key_visualizer</span>
                </div>
              </div>
              {/* Algorithm Card */}
              <div className="bg-[#1c2025] p-5 border-l-2 border-[#ff9f4d]/40 group hover:border-[#ff9f4d] transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-mono font-bold text-[#f8f9fe]">SPHINCS+</h4>
                  <span className="text-[10px] font-mono text-[#ff9f4d] bg-[#ff9f4d]/10 px-2 py-0.5">STANDBY</span>
                </div>
                <p className="text-xs text-[#a9abb0] leading-relaxed mb-4">Hash-based signature scheme. Backup primitive for long-term data persistence.</p>
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-[9px] font-mono text-[#a9abb0] uppercase">Integrity</p>
                    <p className="text-xs font-mono">Quantum-Immune</p>
                  </div>
                  <span className="material-symbols-outlined text-[#ff9f4d] opacity-30 group-hover:opacity-100 transition-opacity">architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hybrid Certificate Migration Table */}
          <div className="col-span-12 lg:col-span-9 bg-[#111417] p-8 border border-[#46484c]/10">
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-display font-bold text-lg tracking-wide uppercase flex items-center gap-3">
                <span className="material-symbols-outlined text-[#99f7ff]">verified</span>
                Hybrid Certificate Vault (PQC Transition)
              </h2>
              <button className="text-[10px] font-mono text-[#a9abb0] border border-[#46484c]/30 px-4 py-2 hover:bg-[#22262b] transition-all">EXPORT_LEDGER</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="text-[#a9abb0] border-b border-[#46484c]/20">
                    <th className="pb-4 font-normal">ENTITY_ID</th>
                    <th className="pb-4 font-normal">LEGACY_PRIMITIVE</th>
                    <th className="pb-4 font-normal">PQC_PRIMITIVE</th>
                    <th className="pb-4 font-normal">MIGRATION_STATUS</th>
                    <th className="pb-4 font-normal text-right">MIGRATION_DATE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#46484c]/10">
                  <tr className="group hover:bg-[#99f7ff]/5 transition-colors">
                    <td className="py-4 text-[#99f7ff] font-bold">NODE_ALPHA_01</td>
                    <td className="py-4 text-[#a9abb0]">RSA-4096</td>
                    <td className="py-4">Dilithium-L3</td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#99f7ff] rounded-full"></span>
                        SECURED
                      </span>
                    </td>
                    <td className="py-4 text-right opacity-60">2026.02.14</td>
                  </tr>
                  <tr className="group hover:bg-[#99f7ff]/5 transition-colors">
                    <td className="py-4 text-[#99f7ff] font-bold">VAULT_STORAGE_S2</td>
                    <td className="py-4 text-[#a9abb0]">ECC-P384</td>
                    <td className="py-4">Kyber-1024</td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#99f7ff] rounded-full"></span>
                        SECURED
                      </span>
                    </td>
                    <td className="py-4 text-right opacity-60">2026.03.20</td>
                  </tr>
                  <tr className="group hover:bg-[#99f7ff]/5 transition-colors">
                    <td className="py-4 text-[#99f7ff] font-bold">EXT_GATEWAY_HQ</td>
                    <td className="py-4 text-[#a9abb0]">RSA-2048</td>
                    <td className="py-4">Dilithium-L2</td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#ac89ff] animate-pulse rounded-full"></span>
                        MIGRATING (42%)
                      </span>
                    </td>
                    <td className="py-4 text-right opacity-60">2026.04.12</td>
                  </tr>
                  <tr className="group hover:bg-[#99f7ff]/5 transition-colors">
                    <td className="py-4 text-[#99f7ff] font-bold">CLIENT_RELAY_PROX</td>
                    <td className="py-4 text-[#a9abb0]">ECC-P256</td>
                    <td className="py-4">Kyber-512</td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#ff9f4d] rounded-full"></span>
                        PENDING
                      </span>
                    </td>
                    <td className="py-4 text-right opacity-60">2026.05.01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quantum Network Audit Logs */}
          <div className="col-span-12 lg:col-span-3 bg-[#1c2025] p-6 flex flex-col border-r-4 border-[#ac89ff] shadow-lg">
            <h3 className="font-display font-bold text-sm tracking-widest mb-6 flex items-center gap-2 uppercase">
              <span className="material-symbols-outlined text-[#ac89ff]">settings_ethernet</span>
              Audit Logs
            </h3>
            <div className="flex-1 space-y-4 overflow-y-auto pr-2 max-h-[400px]">
              <div className="border-b border-[#46484c]/10 pb-3">
                <div className="flex justify-between text-[9px] font-mono text-[#a9abb0] mb-1">
                  <span>14:22:01.002</span>
                  <span className="text-[#99f7ff]">INFO</span>
                </div>
                <p className="text-[11px] font-mono leading-tight">QKD_LINK_ESTABLISHED: NODE_01 -&gt; NODE_04</p>
              </div>
              <div className="border-b border-[#46484c]/10 pb-3">
                <div className="flex justify-between text-[9px] font-mono text-[#a9abb0] mb-1">
                  <span>14:20:45.922</span>
                  <span className="text-[#ac89ff]">SYS</span>
                </div>
                <p className="text-[11px] font-mono leading-tight">ALGO_SWAP: CRYSTALS_KYBER_768_REV_C</p>
              </div>
              <div className="border-b border-[#46484c]/10 pb-3">
                <div className="flex justify-between text-[9px] font-mono text-[#a9abb0] mb-1">
                  <span>14:18:12.441</span>
                  <span className="text-[#ff9f4d]">WARN</span>
                </div>
                <p className="text-[11px] font-mono leading-tight text-[#ff9f4d]">LATENCY_SPIKE: Q_BRIDGE_CENTRAL_02 (4.5ms)</p>
              </div>
              <div className="border-b border-[#46484c]/10 pb-3">
                <div className="flex justify-between text-[9px] font-mono text-[#a9abb0] mb-1">
                  <span>14:15:30.112</span>
                  <span className="text-[#99f7ff]">INFO</span>
                </div>
                <p className="text-[11px] font-mono leading-tight">CERT_ROTATION: VAULT_S2_HYBRID_GEN_4</p>
              </div>
              <div className="border-b border-[#46484c]/10 pb-3">
                <div className="flex justify-between text-[9px] font-mono text-[#a9abb0] mb-1">
                  <span>14:10:05.556</span>
                  <span className="text-[#99f7ff]">INFO</span>
                </div>
                <p className="text-[11px] font-mono leading-tight">ENTROPY_RESEED: SUCCESSFUL_QRNG_SYNC</p>
              </div>
            </div>
            <button className="mt-6 w-full py-2 bg-[#22262b] text-[10px] font-mono hover:text-[#ac89ff] transition-colors">
              VIEW ALL SYSTEM LOGS
            </button>
          </div>
        </div>
      </main>

      {/* Footer Decorator */}
      <footer className="ml-64 p-8 pt-0 border-t border-[#46484c]/5">
        <div className="flex justify-between items-center py-6">
          <div className="flex gap-12">
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-[#a9abb0] uppercase">Quantum Engine</p>
              <p className="text-xs font-display font-medium">OSIRIS-V4 CORE</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-[#a9abb0] uppercase">Encryption Level</p>
              <p className="text-xs font-display font-medium">PQC-RESISTANT L5</p>
            </div>
          </div>
          <p className="text-[10px] font-mono text-[#a9abb0]">
            © 2026 QUANTUM SECURITY ARCHITECTURE | JONATHAN JIMENEZ ESCOBAR LEAD
          </p>
        </div>
      </footer>
    </div>
  );
}
