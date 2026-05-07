import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot, where } from 'firebase/firestore';
import { db, auth } from '../firebase';
import GlobalThreatMap from './GlobalThreatMap';
import { motion } from 'motion/react';

interface ScanData {
  id: string;
  url: string;
  isPhishing: boolean;
  confidence: number;
  timestamp: any;
}

export default function Dashboard() {
  const [totalScans, setTotalScans] = useState(0);
  const [threatsNeutralized, setThreatsNeutralized] = useState(0);
  const [averageConfidence, setAverageConfidence] = useState(0);
  const [recentScans, setRecentScans] = useState<ScanData[]>([]);

  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, 'scans'),
      where('userId', '==', auth.currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const scans = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ScanData));
      
      setTotalScans(scans.length);
      
      const threats = scans.filter(scan => scan.isPhishing).length;
      setThreatsNeutralized(threats);

      if (scans.length > 0) {
        const totalConfidence = scans.reduce((acc, scan) => acc + (scan.confidence || 0), 0);
        setAverageConfidence((totalConfidence / scans.length) * 100);
      } else {
        setAverageConfidence(0);
      }

      // Sort in memory to avoid needing a composite index immediately
      const sortedScans = [...scans].sort((a, b) => {
        const timeA = new Date(a.timestamp).getTime() || 0;
        const timeB = new Date(b.timestamp).getTime() || 0;
        return timeB - timeA;
      });
      
      setRecentScans(sortedScans.slice(0, 5));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col gap-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-4 gap-4">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold mb-3 uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            SOC Dashboard
          </motion.div>
          <h2 className="text-3xl font-bold text-white tracking-tight">System Overview</h2>
          <p className="text-sm text-slate-400 mt-1">Real-time threat intelligence and Quantum Core metrics.</p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-6 rounded-2xl bg-[#0F1423] border border-blue-500/10 shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent z-0 pointer-events-none"></div>
          <div className="absolute -right-6 -top-6 text-blue-500/5 group-hover:text-blue-500/10 transition-colors z-0" aria-hidden="true">
            <span className="material-symbols-outlined text-[120px]">verified_user</span>
          </div>
          <div className="relative z-10 flex flex-col gap-2">
            <h3 className="text-slate-400 text-xs font-mono uppercase tracking-widest">Threats Neutralized</h3>
            <p className="text-4xl font-bold text-white">{threatsNeutralized}</p>
            <div className="flex items-center gap-2 mt-4">
              <span className="flex items-center text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span> Active Shield
              </span>
            </div>
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-6 rounded-2xl bg-[#0F1423] border border-white/5 shadow-lg relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 text-white/5 group-hover:text-white/10 transition-colors z-0" aria-hidden="true">
            <span className="material-symbols-outlined text-[120px]">document_scanner</span>
          </div>
          <div className="relative z-10 flex flex-col gap-2">
            <h3 className="text-slate-400 text-xs font-mono uppercase tracking-widest">Total Scans</h3>
            <p className="text-4xl font-bold text-white">{totalScans}</p>
            <div className="flex items-center gap-2 mt-4">
              <span className="flex items-center text-slate-300 text-xs font-bold bg-white/5 px-2 py-1 rounded border border-white/10">
                <span className="material-symbols-outlined text-[14px] mr-1">history</span> All Time
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-6 rounded-2xl bg-[#0F1423] border border-purple-500/10 shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent z-0 pointer-events-none"></div>
          <div className="absolute -right-6 -top-6 text-purple-500/5 group-hover:text-purple-500/10 transition-colors z-0" aria-hidden="true">
            <span className="material-symbols-outlined text-[120px]">psychology</span>
          </div>
          <div className="relative z-10 flex flex-col gap-2">
            <h3 className="text-slate-400 text-xs font-mono uppercase tracking-widest">Avg AI Confidence</h3>
            <p className="text-4xl font-bold text-white">{averageConfidence.toFixed(1)}%</p>
            <div className="flex items-center gap-2 mt-4">
              <span className="flex items-center text-purple-400 text-xs font-bold bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">
                <span className="material-symbols-outlined text-[14px] mr-1">model_training</span> Learning Model
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Global Threat Map */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="lg:col-span-2 flex flex-col min-h-[450px] rounded-2xl bg-[#0F1423] border border-white/5 relative overflow-hidden shadow-2xl">
          <div className="p-5 flex items-center justify-between relative z-10 border-b border-white/5 bg-[#0F1423]/90 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-400 text-[20px]">public</span>
              </div>
              <div>
                <h2 className="text-sm font-bold text-white tracking-wide">Topology & Global Threat Map</h2>
                <p className="text-xs text-slate-500 mt-0.5">Live visualization of attack vectors across endpoints</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Live Sync
              </span>
            </div>
          </div>
          <div className="flex-1 relative bg-[#060910]">
            <GlobalThreatMap />
          </div>
        </motion.div>

        {/* Recent Scans */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex flex-col rounded-2xl bg-[#0F1423] border border-white/5 overflow-hidden shadow-2xl">
          <div className="p-5 border-b border-white/5 bg-[#0F1423]/90 backdrop-blur-md flex items-center gap-3">
            <div className="size-10 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">history</span>
            </div>
            <div>
              <h2 className="text-sm font-bold text-white tracking-wide">Recent Telemetry</h2>
              <p className="text-xs text-slate-500 mt-0.5">Latest analyzed URLs</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-3">
            <div className="space-y-2">
              {recentScans.length > 0 ? (
                recentScans.map((scan) => (
                  <div key={scan.id} className={`group p-4 border rounded-xl transition-colors ${scan.isPhishing ? 'bg-red-500/5 border-red-500/10 hover:border-red-500/30' : 'bg-[#151B2B] border-white/5 hover:border-white/10'}`}>
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined text-[18px] ${scan.isPhishing ? 'text-red-400' : 'text-emerald-400'}`}>
                        {scan.isPhishing ? 'gpp_bad' : 'verified'}
                      </span>
                      <p className="text-sm font-mono text-slate-300 truncate" title={scan.url}>{scan.url}</p>
                    </div>
                    <div className="flex items-center justify-between mt-3 pl-8">
                      <p className={`text-[10px] font-bold uppercase tracking-wider ${scan.isPhishing ? 'text-red-400' : 'text-emerald-400'}`}>
                        {scan.isPhishing ? 'Threat Intercepted' : 'Cleared'}
                      </p>
                      <p className="text-[10px] text-slate-500 font-mono">
                        {new Date(scan.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-12 opacity-50">
                  <span className="material-symbols-outlined text-4xl mb-3 text-slate-600">travel_explore</span>
                  <p className="text-sm font-medium text-white">No telemetry data</p>
                  <p className="text-xs text-slate-500 mt-1">Visit the AI Scanner to deploy an analysis.</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
