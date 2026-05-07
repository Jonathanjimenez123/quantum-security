import React, { useState, useEffect, useMemo } from 'react';
import { collection, query, orderBy, onSnapshot, where } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import { motion, AnimatePresence } from 'motion/react';

interface ScanLog {
  id: string;
  url: string;
  isPhishing: boolean;
  threatLevel: string;
  confidence: number;
  timestamp: any;
}

export default function Logs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All Threats');
  const [aiRiskFilter, setAiRiskFilter] = useState('All');
  const [logs, setLogs] = useState<ScanLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    if (!auth.currentUser) {
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, 'scans'),
      where('userId', '==', auth.currentUser.uid),
      orderBy('timestamp', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newLogs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ScanLog[];
      setLogs(newLogs);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'scans');
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth.currentUser]);

  const filteredLogs = useMemo(() => {
    return logs.filter(log => {
      const matchesSearch = log.url.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesFilter = true;
      if (filterType === 'Phishing') {
        matchesFilter = log.isPhishing;
      } else if (filterType === 'Safe') {
        matchesFilter = !log.isPhishing;
      } else if (filterType === 'Critical') {
        matchesFilter = log.threatLevel === 'critical';
      }

      let matchesAiRisk = true;
      if (aiRiskFilter !== 'All') {
        matchesAiRisk = log.threatLevel === aiRiskFilter;
      }

      return matchesSearch && matchesFilter && matchesAiRisk;
    });
  }, [logs, searchTerm, filterType, aiRiskFilter]);

  const paginatedLogs = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredLogs.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredLogs, currentPage]);

  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterType, aiRiskFilter]);

  return (
    <div className="flex flex-col gap-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-4 gap-4">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold mb-3 uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-[14px]">history</span>
            Telemetry Network
          </motion.div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Threat Telemetry Hub</h2>
          <p className="text-sm text-slate-400 mt-1">Global interception records and forensic data logs.</p>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#0F1423] border border-white/5 rounded-2xl p-6 shadow-2xl space-y-6">
        
        {/* Control Bar */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-between">
          <div className="relative flex-1 max-w-md group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg group-focus-within:text-blue-400 transition-colors">search</span>
            <input 
              type="text" 
              placeholder="Query URLs..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-[#060910] border border-white/10 text-white font-mono text-sm rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 w-full outline-none transition-all shadow-inner"
            />
          </div>
          
          <div className="flex gap-4">
            <div className="relative">
              <select 
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="appearance-none bg-[#060910] border border-white/10 text-slate-300 font-medium font-mono text-sm rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 block w-full pl-5 pr-12 py-3 outline-none transition-all cursor-pointer shadow-inner"
              >
                <option>All Threats</option>
                <option>Phishing</option>
                <option>Safe</option>
                <option>Critical</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <span className="material-symbols-outlined text-sm">filter_list</span>
              </div>
            </div>
            
            <div className="relative">
              <select 
                value={aiRiskFilter}
                onChange={(e) => setAiRiskFilter(e.target.value)}
                className="appearance-none bg-[#060910] border border-white/10 text-slate-300 font-medium font-mono text-sm rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 block w-full pl-5 pr-12 py-3 outline-none transition-all cursor-pointer shadow-inner"
              >
                <option value="All">AI Risk: All</option>
                <option value="low">AI Risk: Low</option>
                <option value="medium">AI Risk: Medium</option>
                <option value="high">AI Risk: High</option>
                <option value="critical">AI Risk: Critical</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <span className="material-symbols-outlined text-sm">tune</span>
              </div>
            </div>
            
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold uppercase tracking-wider rounded-xl px-6 py-3 flex items-center justify-center gap-2 transition-all shadow-lg hidden md:flex">
              <span className="material-symbols-outlined text-[18px]">download</span>
              CSV
            </button>
          </div>
        </div>

        {/* Data Grid */}
        <div className="border border-white/5 rounded-xl overflow-hidden bg-[#0A0E17]">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-white/5">
                  <th className="px-6 py-4">Target Matrix</th>
                  <th className="px-6 py-4">Detection Payload</th>
                  <th className="px-6 py-4">AI Threat Index</th>
                  <th className="px-6 py-4">Result</th>
                  <th className="px-6 py-4">Timestamp (UTC)</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-2 border-white/20 border-t-blue-500"></div>
                        <span className="text-slate-400 text-sm font-medium animate-pulse">Syncing Telemetry...</span>
                      </div>
                    </td>
                  </tr>
                ) : filteredLogs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-4xl text-slate-600">search_off</span>
                        <span className="text-slate-400 text-sm font-medium">No vectors matched your query.</span>
                      </div>
                    </td>
                  </tr>
                ) : paginatedLogs.map((log, i) => (
                  <motion.tr 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={log.id} 
                    className="border-b border-white/5 hover:bg-[#151B2B] transition-colors group"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className={`size-10 rounded-lg flex items-center justify-center font-mono text-sm font-bold border ${
                          log.isPhishing ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        }`}>
                          {log.url.replace(/^https?:\/\//, '').charAt(0).toUpperCase()}
                        </div>
                        <span className="font-mono text-sm text-slate-300 truncate max-w-[220px]" title={log.url}>
                          {log.url}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex items-center gap-1.5 py-1 px-3 rounded text-[10px] uppercase tracking-widest font-bold border ${
                        log.isPhishing 
                          ? 'bg-red-500/10 text-red-500 border-red-500/20 shadow-[0_0_10px_-2px_rgba(239,68,68,0.2)]'
                          : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20 shadow-[0_0_10px_-2px_rgba(16,185,129,0.2)]'
                      }`}>
                        {log.isPhishing ? 'Malicious' : 'Safe Vector'}
                      </span>
                    </td>
                    <td className="px-6 py-5 w-48">
                      <div className="flex items-center gap-3">
                        <span className={`material-symbols-outlined text-[18px] ${
                          log.threatLevel === 'critical' ? 'text-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]' :
                          log.threatLevel === 'high' ? 'text-orange-500' :
                          log.threatLevel === 'medium' ? 'text-yellow-500' :
                          'text-emerald-500'
                        }`} title={log.threatLevel}>
                          {log.threatLevel === 'critical' ? 'warning' :
                           log.threatLevel === 'high' ? 'error' :
                           log.threatLevel === 'medium' ? 'info' : 'check_circle'}
                        </span>
                        <div className="flex-1">
                          <div className="w-full bg-[#060910] rounded-full h-1.5 border border-white/5 mb-1 overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${log.confidence * 100}%` }}
                              className={`h-full ${
                              log.threatLevel === 'critical' ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]' :
                              log.threatLevel === 'high' ? 'bg-orange-500' :
                              log.threatLevel === 'medium' ? 'bg-yellow-500' :
                              'bg-emerald-500'
                            }`}></motion.div>
                          </div>
                          <span className="text-[10px] font-mono font-bold text-slate-400">{(log.confidence * 100).toFixed(0)}/100</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-slate-300 flex items-center gap-2 text-sm font-medium">
                        <span className={`material-symbols-outlined text-[16px] ${log.isPhishing ? 'text-red-500' : 'text-emerald-500'}`}>
                          {log.isPhishing ? 'block' : 'verified'}
                        </span>
                        {log.isPhishing ? 'Intercepted' : 'Allowed'}
                      </span>
                    </td>
                    <td className="px-6 py-5 font-mono text-[11px] text-slate-400">
                      {log.timestamp?.toDate 
                        ? log.timestamp.toDate().toISOString().replace('T', ' ').substring(0, 19)
                        : log.timestamp 
                          ? new Date(log.timestamp).toISOString().replace('T', ' ').substring(0, 19)
                          : 'N/A'}
                    </td>
                    <td className="px-6 py-5 text-center">
                      <button className="text-slate-500 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                        <span className="material-symbols-outlined text-[18px]">read_more</span>
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-white/5 bg-[#0A0E17]">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                Showing <span className="font-bold text-white">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-bold text-white">{Math.min(currentPage * itemsPerPage, filteredLogs.length)}</span> of <span className="font-bold text-white">{filteredLogs.length}</span> nodes
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="size-8 rounded-lg bg-[#060910] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">navigate_before</span>
                </button>
                <div className="text-[11px] font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  <span className="text-white font-bold">{currentPage}</span> / {totalPages}
                </div>
                <button 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="size-8 rounded-lg bg-[#060910] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">navigate_next</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
