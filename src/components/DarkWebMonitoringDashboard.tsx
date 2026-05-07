import React, { useState } from 'react';

export default function DarkWebMonitoringDashboard({ onBack }: { onBack?: () => void }) {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background-dark text-slate-200 p-8 font-display">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          {onBack && (
            <button onClick={onBack} className="p-2 rounded-lg hover:bg-surface-dark transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          )}
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="material-symbols-outlined text-purple-500 text-4xl">travel_explore</span>
              Monitoreo de Dark Web
            </h1>
            <p className="text-slate-400">Vigilancia continua de credenciales comprometidas y menciones de la marca en foros clandestinos.</p>
          </div>
          <div className="ml-auto">
            <button 
              onClick={handleScan}
              disabled={isScanning}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              {isScanning ? (
                <>
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  Escaneando...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">search</span>
                  Escanear Ahora
                </>
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface-dark p-6 rounded-xl border border-border-dark flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">
              <span className="material-symbols-outlined">key</span>
            </div>
            <div>
              <div className="text-sm text-slate-400">Credenciales Expuestas</div>
              <div className="text-2xl font-bold text-white">3</div>
            </div>
          </div>
          <div className="bg-surface-dark p-6 rounded-xl border border-border-dark flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <span className="material-symbols-outlined">domain</span>
            </div>
            <div>
              <div className="text-sm text-slate-400">Menciones de Dominio</div>
              <div className="text-2xl font-bold text-white">12</div>
            </div>
          </div>
          <div className="bg-surface-dark p-6 rounded-xl border border-border-dark flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <div>
              <div className="text-sm text-slate-400">Estado del Monitoreo</div>
              <div className="text-2xl font-bold text-white">Activo</div>
            </div>
          </div>
        </div>

        <div className="bg-surface-dark rounded-xl border border-border-dark overflow-hidden">
          <div className="p-6 border-b border-border-dark">
            <h2 className="text-xl font-bold text-white">Alertas Recientes</h2>
          </div>
          <div className="divide-y divide-border-dark">
            {/* Alert 1 */}
            <div className="p-6 hover:bg-background-dark/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">password</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Credencial Comprometida Encontrada</h3>
                    <p className="text-sm text-slate-400 mb-2">Se ha encontrado una contraseña asociada al correo <span className="text-slate-200 font-mono">j.doe@empresa.com</span> en una filtración reciente (Breach Compilation 2026).</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded border border-red-500/20">Alta Severidad</span>
                      <span className="px-2 py-1 bg-background-dark text-slate-400 text-xs rounded border border-border-dark">Hace 2 horas</span>
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-surface-dark border border-border-dark rounded-lg text-sm font-bold hover:bg-border-dark transition-colors">
                  Forzar Reseteo de Contraseña
                </button>
              </div>
            </div>

            {/* Alert 2 */}
            <div className="p-6 hover:bg-background-dark/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">forum</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Mención en Foro Clandestino</h3>
                    <p className="text-sm text-slate-400 mb-2">El dominio <span className="text-slate-200 font-mono">empresa.com</span> fue mencionado en un foro de la Dark Web en relación con la venta de accesos VPN.</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded border border-orange-500/20">Severidad Media</span>
                      <span className="px-2 py-1 bg-background-dark text-slate-400 text-xs rounded border border-border-dark">Hace 1 día</span>
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-surface-dark border border-border-dark rounded-lg text-sm font-bold hover:bg-border-dark transition-colors">
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
