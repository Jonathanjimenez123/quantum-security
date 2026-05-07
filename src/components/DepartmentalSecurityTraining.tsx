import React from 'react';
import { Link } from 'react-router-dom';

interface DepartmentalSecurityTrainingProps {
  onBack: () => void;
}

export default function DepartmentalSecurityTraining({ onBack }: DepartmentalSecurityTrainingProps) {
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] text-slate-900 dark:text-[#f8fafc] font-['Manrope',sans-serif] min-h-screen flex flex-col overflow-x-hidden">
      <style>{`
        /* Custom scrollbar for dark theme */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #101922; 
        }
        ::-webkit-scrollbar-thumb {
            background: #252e3a; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #334155; 
        }
      `}</style>
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 dark:border-[#252e3a] bg-[#f6f7f8]/95 dark:bg-[#101922]/95 backdrop-blur-sm px-6 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
            <div className="size-8 text-[#137fec]">
              <span className="material-symbols-outlined !text-[32px]">shield_lock</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-tight">Análisis de Entrenamiento de Seguridad</h2>
          </div>
          <div className="hidden md:flex relative w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#94a3b8]">
              <span className="material-symbols-outlined !text-[20px]">search</span>
            </div>
            <input className="block w-full rounded-lg border-0 py-2 pl-10 pr-4 bg-slate-100 dark:bg-[#1c2632] text-sm text-slate-900 dark:text-white placeholder-[#94a3b8] focus:ring-2 focus:ring-[#137fec] focus:bg-white dark:focus:bg-[#252e3a] transition-colors" placeholder="Buscar departamentos..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-6">
            <Link className="text-sm font-medium hover:text-[#137fec] transition-colors" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
            <Link className="text-sm font-medium text-[#94a3b8] hover:text-[#137fec] transition-colors" to='/entrenamiento-interactivo'>Módulos de Entrenamiento</Link>
            <Link className="text-sm font-medium text-[#94a3b8] hover:text-[#137fec] transition-colors" to='/reporte-incidente'>Informes</Link>
            <Link className="text-sm font-medium text-[#94a3b8] hover:text-[#137fec] transition-colors" to='/ajustes'>Configuración</Link>
          </nav>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-[#94a3b8] hover:text-white transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-[#252e3a] mx-1"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold leading-none">Alex Morgan</p>
                <p className="text-xs text-[#94a3b8] mt-1">CISO</p>
              </div>
              <div className="size-9 rounded-full bg-[#252e3a] overflow-hidden border border-[#252e3a]">
                <img alt="Profile" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6 lg:p-10 max-w-[1600px] mx-auto w-full">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Resumen Departamental</h1>
            <p className="text-[#94a3b8] text-base max-w-2xl">Análisis en tiempo real sobre el rendimiento de la simulación de phishing y el entrenamiento de concientización sobre seguridad en toda la organización.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1c2632] hover:bg-[#252e3a] border border-[#252e3a] px-4 py-2.5 text-sm font-medium text-white transition-all shadow-sm">
              <span className="material-symbols-outlined !text-[18px]">calendar_today</span>
              <span>Últimos 30 Días</span>
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#137fec] hover:bg-[#137fec]/90 px-4 py-2.5 text-sm font-bold text-white transition-all shadow-lg shadow-[#137fec]/20">
              <span className="material-symbols-outlined !text-[20px]">download</span>
              <span>Descargar Informe</span>
            </button>
          </div>
        </div>

        {/* Top Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="rounded-xl border border-[#252e3a] bg-[#1c2632] p-5 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-[#137fec]/10 rounded-lg text-[#137fec]">
                <span className="material-symbols-outlined">group</span>
              </div>
              <span className="inline-flex items-center rounded-full bg-[#10b981]/10 px-2 py-1 text-xs font-medium text-[#10b981]">
                +5% vs mes ant
              </span>
            </div>
            <h3 className="text-[#94a3b8] text-sm font-medium">Tasa Promedio de Finalización</h3>
            <p className="text-2xl font-bold mt-1">82%</p>
          </div>
          <div className="rounded-xl border border-[#252e3a] bg-[#1c2632] p-5 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-[#ef4444]/10 rounded-lg text-[#ef4444]">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <span className="inline-flex items-center rounded-full bg-[#ef4444]/10 px-2 py-1 text-xs font-medium text-[#ef4444]">
                +2% vs mes ant
              </span>
            </div>
            <h3 className="text-[#94a3b8] text-sm font-medium">Tasa de Clics de Phishing</h3>
            <p className="text-2xl font-bold mt-1">4.2%</p>
          </div>
          <div className="rounded-xl border border-[#252e3a] bg-[#1c2632] p-5 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-[#f59e0b]/10 rounded-lg text-[#f59e0b]">
                <span className="material-symbols-outlined">timer</span>
              </div>
              <span className="inline-flex items-center rounded-full bg-[#10b981]/10 px-2 py-1 text-xs font-medium text-[#10b981]">
                -12m vs mes ant
              </span>
            </div>
            <h3 className="text-[#94a3b8] text-sm font-medium">Tiempo Promedio de Reporte</h3>
            <p className="text-2xl font-bold mt-1">14m 30s</p>
          </div>
          <div className="rounded-xl border border-[#252e3a] bg-[#1c2632] p-5 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-[#137fec]/10 rounded-lg text-[#137fec]">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <span className="inline-flex items-center rounded-full bg-[#10b981]/10 px-2 py-1 text-xs font-medium text-[#10b981]">
                +12% vs mes ant
              </span>
            </div>
            <h3 className="text-[#94a3b8] text-sm font-medium">Velocidad de Entrenamiento</h3>
            <p className="text-2xl font-bold mt-1">Alta</p>
          </div>
        </div>

        {/* Main Content Area: Charts & Leaderboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Left Column: Completion & Skill Proficiency */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Completion Rate Chart */}
            <div className="rounded-xl border border-[#252e3a] bg-[#1c2632] p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Tasa de Finalización por Departamento</h3>
                <div className="flex gap-2">
                  <span className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                    <span className="size-2 rounded-full bg-[#137fec]"></span> Actual
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                    <span className="size-2 rounded-full bg-[#252e3a]"></span> Objetivo
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                {/* Chart Bar Item */}
                <div className="group">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-[#94a3b8] group-hover:text-white transition-colors">Ingeniería</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <div className="h-2.5 w-full bg-[#252e3a] rounded-full overflow-hidden">
                    <div className="h-full bg-[#137fec] rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                {/* Chart Bar Item */}
                <div className="group">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-[#94a3b8] group-hover:text-white transition-colors">Finanzas</span>
                    <span className="font-bold">88%</span>
                  </div>
                  <div className="h-2.5 w-full bg-[#252e3a] rounded-full overflow-hidden">
                    <div className="h-full bg-[#137fec]/80 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                {/* Chart Bar Item */}
                <div className="group">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-[#94a3b8] group-hover:text-white transition-colors">RRHH</span>
                    <span className="font-bold">82%</span>
                  </div>
                  <div className="h-2.5 w-full bg-[#252e3a] rounded-full overflow-hidden">
                    <div className="h-full bg-[#137fec]/70 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
                {/* Chart Bar Item */}
                <div className="group">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-[#94a3b8] group-hover:text-white transition-colors">Ventas</span>
                    <span className="font-bold">74%</span>
                  </div>
                  <div className="h-2.5 w-full bg-[#252e3a] rounded-full overflow-hidden">
                    <div className="h-full bg-[#f59e0b] rounded-full" style={{ width: '74%' }}></div>
                  </div>
                </div>
                {/* Chart Bar Item */}
                <div className="group">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-[#94a3b8] group-hover:text-white transition-colors">Marketing</span>
                    <span className="font-bold">71%</span>
                  </div>
                  <div className="h-2.5 w-full bg-[#252e3a] rounded-full overflow-hidden">
                    <div className="h-full bg-[#f59e0b] rounded-full" style={{ width: '71%' }}></div>
                  </div>
                </div>
                {/* Chart Bar Item */}
                <div className="group">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-[#94a3b8] group-hover:text-white transition-colors">Legal</span>
                    <span className="font-bold">65%</span>
                  </div>
                  <div className="h-2.5 w-full bg-[#252e3a] rounded-full overflow-hidden">
                    <div className="h-full bg-[#ef4444] rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skill Proficiency & Training Velocity Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Training Velocity Chart */}
              <div className="rounded-xl border border-[#252e3a] bg-[#1c2632] p-6 shadow-sm flex flex-col">
                <h3 className="text-lg font-bold mb-4">Velocidad de Entrenamiento</h3>
                <div className="flex-1 min-h-[160px] relative">
                  {/* SVG Chart Simulation */}
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                    <defs>
                      <linearGradient id="velocityGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#137fec', stopOpacity: 0.3 }}></stop>
                        <stop offset="100%" style={{ stopColor: '#137fec', stopOpacity: 0 }}></stop>
                      </linearGradient>
                    </defs>
                    <path d="M0,40 C10,40 10,30 20,32 C30,34 30,25 40,20 C50,15 50,22 60,18 C70,14 70,10 80,12 C90,14 90,5 100,2 V50 H0 Z" fill="url(#velocityGradient)"></path>
                    <path d="M0,40 C10,40 10,30 20,32 C30,34 30,25 40,20 C50,15 50,22 60,18 C70,14 70,10 80,12 C90,14 90,5 100,2" fill="none" stroke="#137fec" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                  </svg>
                </div>
                <div className="flex justify-between text-xs text-[#94a3b8] mt-2">
                  <span>Jul</span><span>Ago</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dic</span>
                </div>
              </div>

              {/* Skill Proficiency Cards (Simulating Radar Data) */}
              <div className="rounded-xl border border-[#252e3a] bg-[#1c2632] p-6 shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Competencia de Habilidades</h3>
                  <button className="text-[#137fec] text-sm font-medium hover:underline">Ver Detalles</button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-[#101922]/50 border border-[#252e3a]">
                    <div className="bg-[#137fec]/20 p-2 rounded text-[#137fec]">
                      <span className="material-symbols-outlined !text-[20px]">phishing</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-white">Detección de Phishing</span>
                        <span className="text-[#10b981] font-bold">92%</span>
                      </div>
                      <div className="w-full bg-[#252e3a] rounded-full h-1.5">
                        <div className="bg-[#10b981] h-1.5 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-[#101922]/50 border border-[#252e3a]">
                    <div className="bg-[#137fec]/20 p-2 rounded text-[#137fec]">
                      <span className="material-symbols-outlined !text-[20px]">password</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-white">Seguridad de Contraseñas</span>
                        <span className="text-[#f59e0b] font-bold">78%</span>
                      </div>
                      <div className="w-full bg-[#252e3a] rounded-full h-1.5">
                        <div className="bg-[#f59e0b] h-1.5 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-[#101922]/50 border border-[#252e3a]">
                    <div className="bg-[#137fec]/20 p-2 rounded text-[#137fec]">
                      <span className="material-symbols-outlined !text-[20px]">psychology</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-white">Ingeniería Social</span>
                        <span className="text-[#137fec] font-bold">85%</span>
                      </div>
                      <div className="w-full bg-[#252e3a] rounded-full h-1.5">
                        <div className="bg-[#137fec] h-1.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Risk Leaderboard */}
          <div className="lg:col-span-4 flex flex-col h-full">
            <div className="rounded-xl border border-[#252e3a] bg-[#1c2632] shadow-sm flex flex-col h-full overflow-hidden">
              <div className="p-6 border-b border-[#252e3a]">
                <h3 className="text-lg font-bold">Tabla de Clasificación de Riesgo</h3>
                <p className="text-[#94a3b8] text-sm">Basado en métricas de entrenamiento e incidentes</p>
              </div>
              <div className="flex-1 overflow-y-auto p-0">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#252e3a]/30 sticky top-0 backdrop-blur-sm">
                    <tr>
                      <th className="p-4 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">Depto</th>
                      <th className="p-4 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider text-right">Puntuación de Riesgo</th>
                      <th className="p-4 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider text-right">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#252e3a]">
                    {/* Row 1 */}
                    <tr className="hover:bg-[#252e3a]/20 transition-colors">
                      <td className="p-4 text-sm font-medium text-white">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                          Ingeniería
                        </div>
                      </td>
                      <td className="p-4 text-sm font-bold text-white text-right">98</td>
                      <td className="p-4 text-right">
                        <span className="inline-flex items-center rounded bg-[#10b981]/10 px-2 py-1 text-xs font-medium text-[#10b981] border border-[#10b981]/20">Seguro</span>
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="hover:bg-[#252e3a]/20 transition-colors">
                      <td className="p-4 text-sm font-medium text-white">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                          Producto
                        </div>
                      </td>
                      <td className="p-4 text-sm font-bold text-white text-right">92</td>
                      <td className="p-4 text-right">
                        <span className="inline-flex items-center rounded bg-[#10b981]/10 px-2 py-1 text-xs font-medium text-[#10b981] border border-[#10b981]/20">Seguro</span>
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="hover:bg-[#252e3a]/20 transition-colors">
                      <td className="p-4 text-sm font-medium text-white">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
                          Finanzas
                        </div>
                      </td>
                      <td className="p-4 text-sm font-bold text-white text-right">84</td>
                      <td className="p-4 text-right">
                        <span className="inline-flex items-center rounded bg-[#f59e0b]/10 px-2 py-1 text-xs font-medium text-[#f59e0b] border border-[#f59e0b]/20">Moderado</span>
                      </td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="hover:bg-[#252e3a]/20 transition-colors">
                      <td className="p-4 text-sm font-medium text-white">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
                          RRHH
                        </div>
                      </td>
                      <td className="p-4 text-sm font-bold text-white text-right">79</td>
                      <td className="p-4 text-right">
                        <span className="inline-flex items-center rounded bg-[#f59e0b]/10 px-2 py-1 text-xs font-medium text-[#f59e0b] border border-[#f59e0b]/20">Moderado</span>
                      </td>
                    </tr>
                    {/* Row 5 */}
                    <tr className="hover:bg-[#252e3a]/20 transition-colors">
                      <td className="p-4 text-sm font-medium text-white">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]"></span>
                          Ventas
                        </div>
                      </td>
                      <td className="p-4 text-sm font-bold text-white text-right">62</td>
                      <td className="p-4 text-right">
                        <span className="inline-flex items-center rounded bg-[#ef4444]/10 px-2 py-1 text-xs font-medium text-[#ef4444] border border-[#ef4444]/20">En Riesgo</span>
                      </td>
                    </tr>
                    {/* Row 6 */}
                    <tr className="hover:bg-[#252e3a]/20 transition-colors">
                      <td className="p-4 text-sm font-medium text-white">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]"></span>
                          Marketing
                        </div>
                      </td>
                      <td className="p-4 text-sm font-bold text-white text-right">58</td>
                      <td className="p-4 text-right">
                        <span className="inline-flex items-center rounded bg-[#ef4444]/10 px-2 py-1 text-xs font-medium text-[#ef4444] border border-[#ef4444]/20">En Riesgo</span>
                      </td>
                    </tr>
                    {/* Row 7 */}
                    <tr className="hover:bg-[#252e3a]/20 transition-colors">
                      <td className="p-4 text-sm font-medium text-white">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]"></span>
                          Legal
                        </div>
                      </td>
                      <td className="p-4 text-sm font-bold text-white text-right">54</td>
                      <td className="p-4 text-right">
                        <span className="inline-flex items-center rounded bg-[#ef4444]/10 px-2 py-1 text-xs font-medium text-[#ef4444] border border-[#ef4444]/20">En Riesgo</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-[#252e3a] bg-[#252e3a]/10">
                <button className="w-full text-center text-sm font-medium text-[#137fec] hover:text-[#137fec]/80 transition-colors">Ver Tabla Completa</button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown Table */}
        <div className="rounded-xl border border-[#252e3a] bg-[#1c2632] shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[#252e3a] flex justify-between items-center">
            <h3 className="text-lg font-bold">Incidentes Recientes y Brechas de Entrenamiento</h3>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-[#252e3a] rounded-lg text-[#94a3b8] hover:text-white transition-colors">
                <span className="material-symbols-outlined !text-[20px]">filter_list</span>
              </button>
              <button className="p-2 hover:bg-[#252e3a] rounded-lg text-[#94a3b8] hover:text-white transition-colors">
                <span className="material-symbols-outlined !text-[20px]">more_vert</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#252e3a]/30">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">Departamento</th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">Factores de Riesgo</th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">Módulos Pendientes</th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">Próxima Simulación</th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#94a3b8] uppercase tracking-wider text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#252e3a]">
                <tr className="hover:bg-[#252e3a]/10 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-white">Ventas</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <span className="inline-flex items-center rounded bg-[#252e3a] px-2 py-1 text-xs font-medium text-[#94a3b8] border border-[#252e3a]">Phishing</span>
                      <span className="inline-flex items-center rounded bg-[#252e3a] px-2 py-1 text-xs font-medium text-[#94a3b8] border border-[#252e3a]">Compartir Externo</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#94a3b8]">42 usuarios (201 módulos)</td>
                  <td className="px-6 py-4 text-sm text-[#94a3b8]">24 Oct, 2026</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-medium text-[#137fec] hover:text-[#137fec]/80">Recordar a Todos</button>
                  </td>
                </tr>
                <tr className="hover:bg-[#252e3a]/10 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-white">Marketing</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <span className="inline-flex items-center rounded bg-[#252e3a] px-2 py-1 text-xs font-medium text-[#94a3b8] border border-[#252e3a]">Redes Sociales</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#94a3b8]">15 usuarios (45 módulos)</td>
                  <td className="px-6 py-4 text-sm text-[#94a3b8]">25 Oct, 2026</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-medium text-[#137fec] hover:text-[#137fec]/80">Recordar a Todos</button>
                  </td>
                </tr>
                <tr className="hover:bg-[#252e3a]/10 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-white">Finanzas</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <span className="inline-flex items-center rounded bg-[#252e3a] px-2 py-1 text-xs font-medium text-[#94a3b8] border border-[#252e3a]">BEC</span>
                      <span className="inline-flex items-center rounded bg-[#252e3a] px-2 py-1 text-xs font-medium text-[#94a3b8] border border-[#252e3a]">Transferencia Bancaria</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#94a3b8]">8 usuarios (12 módulos)</td>
                  <td className="px-6 py-4 text-sm text-[#94a3b8]">26 Oct, 2026</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-medium text-[#137fec] hover:text-[#137fec]/80">Recordar a Todos</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
