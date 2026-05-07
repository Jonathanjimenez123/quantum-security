import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { motion } from 'motion/react';
import { ShieldAlert, Calendar, Link as LinkIcon, AlertTriangle, ArrowLeft, Search, Filter, ChevronRight, ShieldCheck } from 'lucide-react';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';

interface ScanData {
  id: string;
  url: string;
  isPhishing: boolean;
  threatLevel: string;
  confidence: number;
  indicators: string[];
  timestamp: string;
}

interface ThreatHistoryDashboardProps {
  onBack?: () => void;
}

export default function ThreatHistoryDashboard({ onBack }: ThreatHistoryDashboardProps) {
  const [scans, setScans] = useState<ScanData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'phishing' | 'safe'>('all');

  useEffect(() => {
    const fetchHistory = async () => {
      if (!auth.currentUser) return;
      
      try {
        setLoading(true);
        // Fetching all scans for the user. In a real app with many records, 
        // you'd paginate this or use a composite index for where + orderBy
        const q = query(
          collection(db, 'scans'), 
          where('userId', '==', auth.currentUser.uid)
        );
        
        const querySnapshot = await getDocs(q);
        const scansData: ScanData[] = [];
        
        querySnapshot.forEach((doc) => {
          scansData.push({ id: doc.id, ...doc.data() } as ScanData);
        });

        // Sort in memory (newest first)
        scansData.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        
        setScans(scansData);
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, 'scans');
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const filteredScans = scans.filter(scan => {
    const matchesSearch = scan.url.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = 
      filter === 'all' ? true : 
      filter === 'phishing' ? scan.isPhishing : 
      !scan.isPhishing;
      
    return matchesSearch && matchesFilter;
  });

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-border-dark bg-surface-dark px-6 py-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {onBack && (
              <button 
                onClick={onBack}
                className="p-2 rounded-lg hover:bg-background-dark text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <div>
              <h1 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldAlert className="text-primary" size={24} />
                Historial de Amenazas
              </h1>
              <p className="text-xs text-slate-400">Registro de análisis y detecciones de la IA</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full p-6 space-y-6">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-surface-dark p-4 rounded-xl border border-border-dark">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Buscar por URL..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background-dark border border-border-dark rounded-lg text-sm text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="text-slate-500" size={18} />
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="bg-background-dark border border-border-dark rounded-lg px-3 py-2 text-sm text-white focus:ring-2 focus:ring-primary outline-none"
            >
              <option value="all">Todos los escaneos</option>
              <option value="phishing">Solo Amenazas</option>
              <option value="safe">Sitios Seguros</option>
            </select>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-background-dark/50 border-b border-border-dark text-xs uppercase tracking-wider text-slate-400">
                  <th className="p-4 font-medium">Estado</th>
                  <th className="p-4 font-medium">URL Analizada</th>
                  <th className="p-4 font-medium">Nivel de Riesgo</th>
                  <th className="p-4 font-medium">Fecha y Hora</th>
                  <th className="p-4 font-medium text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-dark">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-slate-500">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                        <p>Cargando historial...</p>
                      </div>
                    </td>
                  </tr>
                ) : filteredScans.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-slate-500">
                      <ShieldCheck size={48} className="mx-auto mb-3 text-slate-600" />
                      <p className="text-lg font-medium text-slate-300">No se encontraron registros</p>
                      <p className="text-sm">No hay escaneos que coincidan con los filtros actuales.</p>
                    </td>
                  </tr>
                ) : (
                  filteredScans.map((scan, index) => (
                    <motion.tr 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={scan.id} 
                      className="hover:bg-background-dark/50 transition-colors group"
                    >
                      <td className="p-4">
                        {scan.isPhishing ? (
                          <div className="flex items-center gap-2 text-red-500 bg-red-500/10 px-2 py-1 rounded w-max">
                            <AlertTriangle size={16} />
                            <span className="text-xs font-bold uppercase">Peligro</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded w-max">
                            <ShieldCheck size={16} />
                            <span className="text-xs font-bold uppercase">Seguro</span>
                          </div>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 max-w-[300px] sm:max-w-[400px]">
                          <LinkIcon size={14} className="text-slate-500 shrink-0" />
                          <span className="text-sm text-slate-200 truncate" title={scan.url}>{scan.url}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        {scan.isPhishing ? (
                          <div className="flex flex-col">
                            <span className={`text-xs font-bold uppercase ${
                              scan.threatLevel === 'critical' ? 'text-red-500' : 'text-orange-500'
                            }`}>
                              {scan.threatLevel}
                            </span>
                            <span className="text-[10px] text-slate-500">Confianza: {(scan.confidence * 100).toFixed(0)}%</span>
                          </div>
                        ) : (
                          <span className="text-xs text-slate-500">-</span>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Calendar size={14} />
                          {formatDate(scan.timestamp)}
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <button className="p-2 rounded-lg bg-background-dark text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                          <ChevronRight size={18} />
                        </button>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
