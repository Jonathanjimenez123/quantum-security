import React, { useState, useEffect, useMemo } from 'react';
import { collection, addDoc, deleteDoc, doc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import { motion, AnimatePresence } from 'motion/react';

interface SafelistItem {
  id: string;
  name: string;
  url: string;
  risk: string;
  addedBy: string;
  timestamp: string;
}

export default function SafeList() {
  const [safelist, setSafelist] = useState<SafelistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Add Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(collection(db, 'safelist'), orderBy('timestamp', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items: SafelistItem[] = [];
      snapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() } as SafelistItem);
      });
      setSafelist(items);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'safelist');
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAddSite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser || !newName.trim() || !newUrl.trim()) return;

    setIsAdding(true);
    try {
      // Basic domain extraction if user enters full URL
      let domain = newUrl.trim();
      try {
        if (!domain.startsWith('http')) {
          domain = 'https://' + domain;
        }
        const urlObj = new URL(domain);
        domain = urlObj.hostname;
      } catch (e) {
        // If parsing fails, use the raw input
        domain = newUrl.trim();
      }

      await addDoc(collection(db, 'safelist'), {
        name: newName.trim(),
        url: domain,
        risk: 'Seguro',
        addedBy: auth.currentUser.uid,
        timestamp: new Date().toISOString()
      });
      
      setIsAddModalOpen(false);
      setNewName('');
      setNewUrl('');
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'safelist');
    } finally {
      setIsAdding(false);
    }
  };

  const handleDeleteSite = async (id: string, name: string) => {
    if (!window.confirm(`¿Remover '${name}' de la lista de confianza?`)) return;
    
    try {
      await deleteDoc(doc(db, 'safelist', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `safelist/${id}`);
    }
  };

  const filteredList = useMemo(() => {
    return safelist.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.url.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [safelist, searchTerm]);

  const getRiskClasses = (risk: string) => {
    switch (risk) {
      case 'Seguro':
      case 'Safe':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Riesgo Bajo':
      case 'Low Risk':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto pb-10">
      
      {/* Top Action Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-4 gap-4">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold mb-3 uppercase tracking-widest shadow-[0_0_10px_-2px_rgba(16,185,129,0.3)]"
          >
            <span className="material-symbols-outlined text-[14px]">verified_user</span>
            Safelist Active
          </motion.div>
          <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            Sitios de Confianza
          </h2>
          <p className="text-sm text-slate-400 mt-1">Dominios globales excluidos del análisis forense profundo.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:w-64 group">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 group-focus-within:text-purple-400 transition-colors">
              <span className="material-symbols-outlined text-[18px]">search</span>
            </span>
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar en nodo local..."
              className="w-full bg-[#151B2B] border border-white/10 text-white rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-slate-600"
            />
          </div>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)]"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span className="text-xs font-bold tracking-wider uppercase">Registrar Dominio</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column: Stats & Import */}
        <div className="flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-[#0F1423] rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="size-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <span className="material-symbols-outlined">shield_locked</span>
              </div>
              <h3 className="text-sm font-bold text-white">Trust Metrics</h3>
            </div>
            <div className="space-y-4 relative z-10">
              <div>
                <div className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-1">Dominios Verificados</div>
                <div className="text-3xl font-bold text-white">{safelist.length}</div>
              </div>
              <div className="w-full h-px bg-white/5"></div>
              <div>
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
                  <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                  IA Override Bypassed
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bulk Import */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="bg-gradient-to-b from-[#151B2B] to-[#0F1423] rounded-2xl border border-dashed border-white/10 p-6 shadow-xl relative group hover:border-purple-500/30 transition-all text-center cursor-pointer">
            <div className="size-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-purple-400 group-hover:bg-purple-500/10 transition-colors mx-auto mb-4 border border-white/5">
              <span className="material-symbols-outlined text-[24px]">cloud_upload</span>
            </div>
            <h3 className="text-sm font-bold text-white mb-2">Importación Masiva</h3>
            <p className="text-xs text-slate-400 mb-4 px-2">Carga un CSV con dominios pre-aprobados para sincronización SOC.</p>
            <button className="px-4 py-2 rounded-lg bg-white/5 text-slate-300 text-xs font-bold uppercase tracking-widest border border-white/5 hover:bg-white/10 hover:text-white transition-all w-full">Seleccionar Archivo</button>
          </motion.div>
        </div>

        {/* Right Column: Table */}
        <div className="lg:col-span-3">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#0F1423] rounded-2xl border border-white/5 overflow-hidden shadow-2xl flex flex-col h-full min-h-[500px]">
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-[#151B2B]/50">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">table_rows</span>
                <h2 className="text-xs font-bold text-white tracking-[0.2em] uppercase">Registro de Nodos Confiables</h2>
              </div>
            </div>
            
            <div className="flex-1 overflow-x-auto relative">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead className="bg-[#060910]/50 text-[10px] font-bold uppercase tracking-widest text-slate-500 sticky top-0 z-10 backdrop-blur-sm">
                  <tr>
                    <th className="px-6 py-4 font-bold border-b border-white/5">Identidad Aprobada</th>
                    <th className="px-6 py-4 font-bold border-b border-white/5">Host / FQDN</th>
                    <th className="px-6 py-4 font-bold border-b border-white/5">Fecha de Ingreso</th>
                    <th className="px-6 py-4 font-bold border-b border-white/5 text-center">Clasificación</th>
                    <th className="px-6 py-4 font-bold border-b border-white/5 text-right flex-shrink-0">Terminar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center justify-center gap-3">
                          <div className="size-8 rounded-full border-2 border-slate-700 border-t-purple-500 animate-spin"></div>
                          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Estableciendo Enlace...</span>
                        </div>
                      </td>
                    </tr>
                  ) : filteredList.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-16 text-center">
                        <div className="inline-flex size-16 rounded-full bg-slate-900 border border-white/5 items-center justify-center text-slate-600 mb-4 shadow-inner">
                          <span className="material-symbols-outlined text-[32px]">folder_off</span>
                        </div>
                        <p className="text-sm font-bold text-white mb-1">Sin registros</p>
                        <p className="text-xs text-slate-500">No se encontraron dominios verificados en el índice actual.</p>
                      </td>
                    </tr>
                  ) : (
                    <AnimatePresence>
                      {filteredList.map((item, index) => (
                        <motion.tr 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ delay: Math.min(index * 0.05, 0.5) }}
                          key={item.id} 
                          className="group hover:bg-[#151B2B] transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="size-8 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 flex items-center justify-center text-slate-400 font-bold text-xs shadow-inner uppercase">
                                {item.name.charAt(0)}
                              </div>
                              <div className="font-bold text-sm text-white">{item.name}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-black/30 border border-white/5 text-[11px] font-mono text-slate-400 group-hover:text-slate-300 transition-colors">
                              <span className="material-symbols-outlined text-[10px]">link</span>
                              {item.url}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-xs font-mono text-slate-400">
                            {new Date(item.timestamp).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase border ${getRiskClasses(item.risk)}`}>
                              <span className="size-1.5 rounded-full bg-current opacity-70"></span>
                              {item.risk}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button 
                              onClick={() => handleDeleteSite(item.id, item.name)}
                              className="size-8 inline-flex items-center justify-center rounded-lg hover:bg-red-500/10 text-slate-600 hover:text-red-400 transition-colors" 
                              title="Eliminar de lista"
                            >
                              <span className="material-symbols-outlined text-[18px]">delete</span>
                            </button>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="px-6 py-3 border-t border-white/5 bg-[#060910]/50 flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              <span>{filteredList.length} Entradas Verificadas</span>
              <span>Secure Hash Sync: OK</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsAddModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-[#0F1423] border border-white/10 rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] pointer-events-none"></div>
              
              <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-[#151B2B]/80 backdrop-blur-md relative z-10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-purple-400">shield</span>
                  <h2 className="text-sm font-bold text-white uppercase tracking-wider">Añadir Dominio SOC</h2>
                </div>
                <button 
                  onClick={() => setIsAddModalOpen(false)}
                  className="size-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              
              <form onSubmit={handleAddSite} className="p-6 space-y-5 relative z-10 bg-[#0F1423]">
                <div>
                  <label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">Identidad (Nombre)</label>
                  <input 
                    type="text" 
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Ej. Servidor de Nómina"
                    className="w-full bg-[#060910] border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">FQDN o IP Autorizada</label>
                  <input 
                    type="text" 
                    required
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    placeholder="Ej. nomina.empresa.com"
                    className="w-full bg-[#060910] border border-white/10 text-white rounded-xl px-4 py-3 text-sm font-mono focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all placeholder:text-slate-600"
                  />
                  <p className="text-[10px] text-slate-500 mt-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">info</span>
                    El protocolo se omitirá (http/https). El host exacto será evaluado.
                  </p>
                </div>
                
                <div className="pt-4 flex justify-end gap-3 border-t border-white/5 mt-6">
                  <button 
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase text-slate-400 hover:text-white hover:bg-white/5 transition-colors border border-transparent"
                  >
                    Abortar
                  </button>
                  <button 
                    type="submit"
                    disabled={isAdding || !newName.trim() || !newUrl.trim()}
                    className="bg-purple-500/10 hover:bg-purple-500/20 disabled:opacity-50 border border-purple-500/30 text-purple-400 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)]"
                  >
                    {isAdding ? (
                      <>
                        <div className="animate-spin rounded-full h-3 w-3 border-2 border-transparent border-t-purple-400"></div>
                        Validando...
                      </>
                    ) : (
                      'Inyectar en Base'
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
