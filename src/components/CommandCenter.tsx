import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { collection, query, orderBy, limit, onSnapshot, doc, updateDoc, addDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import { useToast } from '../contexts/ToastContext';

export default function CommandCenter({ onBack }: { onBack?: () => void }) {
  const [activeIncidents, setActiveIncidents] = useState<any[]>([]);
  const [activeNodesCount, setActiveNodesCount] = useState(1402);
  const [blockedToday, setBlockedToday] = useState('84.2K');
  const [isSimulating, setIsSimulating] = useState(false);
  const { addToast } = useToast();

  const handleResolveIncident = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    try {
      const incidentRef = doc(db, 'incidents', id);
      await updateDoc(incidentRef, {
        status: 'resolved',
        resolvedAt: new Date()
      });
      addToast('Incident resolved successfully', 'success');
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `incidents/${id}`);
      addToast('Failed to resolve incident', 'error');
    }
  };

  const simulateIncident = async () => {
    setIsSimulating(true);
    try {
      const types = ['phishing', 'malware', 'ransomware', 'ddos', 'brute_force'];
      const severities = ['low', 'medium', 'high', 'critical'];
      const titles = [
        'Suspicious Login Attempt',
        'Malware Payload Blocked',
        'Phishing Campaign Detected',
        'Unusual Outbound Traffic',
        'Ransomware Signature Found'
      ];
      
      const randomType = types[Math.floor(Math.random() * types.length)];
      const randomSeverity = severities[Math.floor(Math.random() * severities.length)];
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];

      await addDoc(collection(db, 'incidents'), {
        title: randomTitle,
        type: randomType,
        severity: randomSeverity,
        status: 'open',
        description: `Simulated ${randomType} attack from external IP.`,
        reportedAt: new Date(),
        source: 'AI Sentinel Simulation',
        userId: auth.currentUser?.uid || 'system'
      });
      addToast(`Simulated ${randomSeverity} incident injected`, 'warning');
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'incidents');
      addToast('Failed to simulate incident', 'error');
    } finally {
      setIsSimulating(false);
    }
  };

  useEffect(() => {
    if (!auth.currentUser) return;
    
    // In a real app, we'd check if user is admin. For this demo, we fetch their tenant's incidents.
    const q = query(
      collection(db, 'incidents'), 
      // where('userId', '==', auth.currentUser.uid), // Uncomment for strict tenant isolation
      orderBy('reportedAt', 'desc'), 
      limit(3)
    );
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const incidents: any[] = [];
      snapshot.forEach((doc) => {
        incidents.push({ id: doc.id, ...doc.data() });
      });
      
      if (incidents.length > 0) {
        setActiveIncidents(incidents);
        setActiveNodesCount(Math.floor(Math.random() * 500) + 1000); // Simulate dynamic nodes
      } else {
        setActiveIncidents([
          {
            id: 'INC-8924',
            title: 'Multiple Failed Login Attempts',
            description: 'Target: Auth Server Alpha | Source: 185.15.x.x',
            severity: 'critical',
            reportedAt: new Date()
          },
          {
            id: 'INC-8923',
            title: 'Unusual Outbound Traffic Spike',
            description: 'Target: External IP | Source: DB Cluster 02',
            severity: 'warning',
            reportedAt: new Date(Date.now() - 120000)
          },
          {
            id: 'SYS-1042',
            title: 'New Node Registered',
            description: 'Node ID: EU-WEST-4A | Status: Online',
            severity: 'info',
            reportedAt: new Date(Date.now() - 900000)
          }
        ]);
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'incidents');
    });

    return () => unsubscribe();
  }, []);

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case 'critical': return { color: 'text-red-500', bg: 'bg-red-500', border: 'border-red-500/30' };
      case 'high': return { color: 'text-orange-500', bg: 'bg-orange-500', border: 'border-orange-500/30' };
      case 'warning':
      case 'medium': return { color: 'text-yellow-500', bg: 'bg-yellow-500', border: 'border-yellow-500/30' };
      case 'info':
      case 'low': return { color: 'text-blue-500', bg: 'bg-blue-500', border: 'border-blue-500/30' };
      default: return { color: 'text-slate-500', bg: 'bg-slate-500', border: 'border-slate-500/30' };
    }
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Title', 'Type', 'Severity', 'Status', 'Reported At', 'Source'];
    const csvContent = [
      headers.join(','),
      ...activeIncidents.map(inc => {
        const dateStr = inc.reportedAt?.toDate ? inc.reportedAt.toDate().toISOString() : new Date().toISOString();
        return [
          inc.id, 
          `"${inc.title || ''}"`, 
          inc.type, 
          inc.severity, 
          inc.status, 
          dateStr,
          `"${inc.source || ''}"`
        ].join(',');
      })
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `quantum_intel_export_${new Date().toISOString()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    addToast('Report exported successfully', 'success');
  };

  return (
    <div className="flex flex-col gap-6 pb-10">
      
      {/* Top Action Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-4 gap-4">
        <div className="flex items-center gap-4">
          {onBack && (
            <button onClick={onBack} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors border border-white/5">
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
          )}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold mb-3 uppercase tracking-widest shadow-[0_0_10px_-2px_rgba(59,130,246,0.3)]"
            >
              <span className="material-symbols-outlined text-[14px] animate-pulse">settings_input_antenna</span>
              Uplink Active
            </motion.div>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              Global Command Center
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">v3.0</span>
            </h2>
            <p className="text-sm text-slate-400 mt-1">Real-time threat command and control topology.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={exportToCSV}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#151B2B] text-slate-300 border border-white/10 hover:border-white/20 hover:text-white transition-all shadow-xl"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            <span className="text-xs font-bold uppercase tracking-wider">Export</span>
          </button>
          <button 
            onClick={simulateIncident}
            disabled={isSimulating}
            className="flex items-center gap-2 px-6 py-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)] disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-sm">science</span>
            <span className="text-xs font-bold tracking-wider uppercase">Simulate Threat</span>
          </button>
        </div>
      </div>
      
      {/* System Status Banner */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 px-6 py-3 rounded-2xl bg-[#0F1423] border border-white/5 shadow-xl">
        <div className="flex items-center gap-6 divide-x divide-white/10">
          <div className="flex items-center gap-3 pr-6">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></div>
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">DEFCON 4</span>
          </div>
          <div className="flex items-center gap-3 px-6">
            <span className="material-symbols-outlined text-[16px] text-slate-500">memory</span>
            <span className="text-xs font-mono text-slate-300">CPU: <span className="text-white">24%</span></span>
          </div>
          <div className="flex items-center gap-3 px-6">
            <span className="material-symbols-outlined text-[16px] text-slate-500">dns</span>
            <span className="text-xs font-mono text-slate-300">NET: <span className="text-white">1.2TB/s</span></span>
          </div>
        </div>
      </motion.div>
      
      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* Left Column: Global Map & Active Threats */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Global Threat Map Container */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#0F1423] rounded-2xl border border-white/5 overflow-hidden relative flex flex-col h-[500px] shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-[#151B2B]/50 relative z-10">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-400">radar</span>
                <h2 className="text-xs font-bold text-white tracking-[0.2em] uppercase">Live Threat Topology</h2>
              </div>
              <div className="flex items-center gap-2 bg-[#060910] p-1 rounded-lg border border-white/5">
                <button className="px-4 py-1.5 rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] font-bold uppercase tracking-wider shadow-[0_0_10px_-2px_rgba(59,130,246,0.3)]">2D Map</button>
                <button className="px-4 py-1.5 rounded-md text-slate-500 hover:text-slate-300 text-[10px] font-bold uppercase tracking-wider transition-colors">3D Globe</button>
              </div>
            </div>
            
            {/* Map Visualization Area */}
            <div className="flex-1 relative bg-[#060910] overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida/ADBb0ugdeyEUGGtf0Hf8MpAjVRFEDeIHNFR2Z8yjahzqj9-DDuCp40RJoGmFjcCcxMyqVjBxE9PU_HtIPnO_0QrmK0z38sK1dfMe73EaSv0wNbooZUrIjUz6KP5yiZMAPn0sZX7c5atgzUu1TzExQSqyKOe0JHEPseeOkZW-Z6jPWpnZWa1Xf2xXgvIRo_hKQoEp5jK1TesZOMJVWkR-4tJYl-7iPQQCbQcR8b-bC-WgAITB0nzeE8pnoCgwSgcJyUTYEoTRRLlrOhZn')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'invert(1) sepia(1) hue-rotate(180deg) saturate(3) brightness(0.5)' }}></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMjIyMiIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgNjBoNjBWMGgtNjB6IiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-20 pointer-events-none"></div>
              
              {/* Threat Nodes */}
              <div className="absolute top-[30%] left-[20%] group">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-12 h-12 rounded-full border border-red-500/30 animate-ping"></div>
                  <div className="absolute w-8 h-8 rounded-full border border-red-500/60 animate-pulse"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] z-10"></div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 bg-[#151B2B]/95 backdrop-blur-md border border-red-500/30 rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-20 shadow-2xl scale-95 group-hover:scale-100 origin-bottom">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                      <div className="text-[9px] font-bold tracking-widest text-red-400 uppercase">Critical Threat</div>
                    </div>
                    <div className="text-sm text-white font-bold mb-1">DDoS Origin: Sector 7G</div>
                    <div className="text-[10px] font-mono text-slate-400">IP: 192.168.x.x</div>
                  </div>
                </div>
                <svg className="absolute top-1/2 left-1/2 w-64 h-32 pointer-events-none overflow-visible" style={{ transformOrigin: '0 0' }}>
                  <path className="animate-pulse" d="M0,0 Q100,-50 200,50" fill="none" stroke="rgba(239, 68, 68, 0.4)" strokeDasharray="4 4" strokeWidth="1.5"></path>
                  <circle cx="200" cy="50" fill="rgba(239, 68, 68, 0.8)" r="2"></circle>
                </svg>
              </div>
              
              <div className="absolute top-[45%] left-[60%] group">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-8 h-8 rounded-full border border-orange-500/30 animate-ping" style={{ animationDuration: '2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] z-10"></div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 bg-[#151B2B]/95 backdrop-blur-md border border-orange-500/30 rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-20 shadow-2xl scale-95 group-hover:scale-100 origin-bottom">
                    <div className="flex items-center gap-2 mb-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                       <div className="text-[9px] font-bold tracking-widest text-orange-400 uppercase">Elevated Risk</div>
                    </div>
                    <div className="text-sm text-white font-bold mb-1">Anomalous Exfiltration</div>
                    <div className="text-[10px] font-mono text-slate-400">AI Model: High Volume</div>
                  </div>
                </div>
              </div>
              
              {/* Map Overlay Stats */}
              <div className="absolute bottom-5 left-5 flex gap-4">
                <div className="bg-[#151B2B]/80 border border-white/5 rounded-xl p-3 backdrop-blur-md shadow-xl flex items-center gap-4">
                  <div className="size-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <span className="material-symbols-outlined">router</span>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold tracking-widest text-slate-500 uppercase">Active Nodes</div>
                    <div className="text-xl font-bold text-white tracking-tight">{activeNodesCount.toLocaleString()}</div>
                  </div>
                </div>
                <div className="bg-[#151B2B]/80 border border-white/5 rounded-xl p-3 backdrop-blur-md shadow-xl flex items-center gap-4">
                  <div className="size-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <span className="material-symbols-outlined">shield</span>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold tracking-widest text-slate-500 uppercase">Blocked Today</div>
                    <div className="text-xl font-bold text-white tracking-tight">{blockedToday}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Active Incidents Feed */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#0F1423] rounded-2xl border border-white/5 overflow-hidden flex-1 flex flex-col shadow-2xl relative">
            <div className="absolute top-0 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-[#151B2B]/50 relative z-10">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500 animate-pulse drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">emergency</span>
                <h2 className="text-xs font-bold text-white tracking-[0.2em] uppercase">Active Incidents</h2>
              </div>
              <span className="px-2.5 py-1 rounded bg-red-500/10 text-red-400 text-[10px] font-bold tracking-widest uppercase border border-red-500/20 flex items-center gap-1.5 shadow-[0_0_10px_-2px_rgba(239,68,68,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                {activeIncidents.filter(i => i.severity === 'critical').length} Critical
              </span>
            </div>
            
            <div className="p-4 flex-1 overflow-y-auto custom-scrollbar relative z-10">
              <div className="space-y-3">
                <AnimatePresence>
                  {activeIncidents.map((incident, i) => {
                    const styles = getSeverityStyles(incident.severity);
                    return (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ delay: i * 0.05 }}
                        key={incident.id} 
                        className={`group flex items-start gap-4 p-4 rounded-xl bg-[#060910] border ${styles.border} hover:bg-[#151B2B] transition-all cursor-pointer`}
                      >
                        <div className={`mt-1.5 w-2 h-2 rounded-full ${styles.bg} shadow-[0_0_10px_currentColor] shrink-0`}></div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1.5 gap-4">
                            <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${styles.color}`}>{incident.id}</span>
                            <span className="text-[10px] font-mono text-slate-500 shrink-0">
                              {incident.reportedAt?.toDate ? incident.reportedAt.toDate().toLocaleTimeString() : new Date(incident.reportedAt).toLocaleTimeString()}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-white mb-1 truncate">{incident.title}</h4>
                          <p className="text-xs text-slate-400 font-mono truncate">{incident.description || 'No description provided'}</p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 shrink-0 self-center">
                          <button 
                            onClick={(e) => handleResolveIncident(e, incident.id)}
                            className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 hover:shadow-[0_0_15px_-3px_rgba(16,185,129,0.5)] transition-all"
                            title="Resolve Incident"
                          >
                            <span className="material-symbols-outlined text-[18px]">check</span>
                          </button>
                        </div>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Right Column: System Metrics & Quick Actions */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* AI Analysis Module */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-[#0F1423] rounded-2xl border border-white/5 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px] pointer-events-none"></div>
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-[#151B2B]/50 relative z-10">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-purple-400">psychology</span>
                <h2 className="text-xs font-bold text-white tracking-[0.2em] uppercase">Core Engine</h2>
              </div>
              <span className="flex items-center gap-1.5 text-[9px] font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span> ACTIVE
              </span>
            </div>
            <div className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-4xl font-bold text-white tracking-tighter" style={{ textShadow: '0 0 20px rgba(168,85,247,0.3)' }}>99.8%</div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mt-2">Accuracy Rate</div>
                </div>
                <div className="size-16 rounded-2xl bg-[#060910] border border-white/5 flex items-center justify-center relative shadow-inner">
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-purple-500/50 animate-[spin_3s_linear_infinite]"></div>
                  <span className="material-symbols-outlined text-purple-400 text-[28px] drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">auto_awesome</span>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Pattern Rec</span>
                    <span className="text-[10px] font-mono font-bold text-purple-400">OPTIMAL</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#060910] border border-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-[95%] relative shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Predictive</span>
                    <span className="text-[10px] font-mono font-bold text-blue-400">PROCESSING</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#060910] border border-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[78%] relative shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                      <motion.div 
                        className="absolute inset-0 bg-white/30"
                        animate={{ translateX: ['-100%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full mt-8 py-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold tracking-widest uppercase hover:bg-purple-500/20 hover:border-purple-500/50 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_-3px_rgba(168,85,247,0.5)]">
                <span className="material-symbols-outlined text-[18px]">analytics</span>
                Run Deep Scan
              </button>
            </div>
          </motion.div>
          
          {/* Network Traffic */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-[#0F1423] rounded-2xl border border-white/5 overflow-hidden flex-1 shadow-2xl relative flex flex-col">
            <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3 bg-[#151B2B]/50 relative z-10">
              <span className="material-symbols-outlined text-blue-400">monitoring</span>
              <h2 className="text-xs font-bold text-white tracking-[0.2em] uppercase">Network I/O</h2>
            </div>
            <div className="p-6 flex flex-col h-full relative z-10">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#060910] border border-white/5 rounded-xl p-4 shadow-inner">
                  <div className="text-[9px] font-bold tracking-widest font-mono text-slate-500 mb-2 uppercase">Inbound</div>
                  <div className="text-2xl font-bold text-white tracking-tight flex items-baseline gap-1">4.2 <span className="text-[10px] text-slate-500 font-mono tracking-widest">GB/s</span></div>
                  <div className="text-[10px] font-bold text-emerald-400 mt-2 flex items-center gap-1 bg-emerald-500/10 px-1.5 py-0.5 rounded w-max border border-emerald-500/20">
                    <span className="material-symbols-outlined text-[14px]">trending_up</span> +12%
                  </div>
                </div>
                <div className="bg-[#060910] border border-white/5 rounded-xl p-4 shadow-inner">
                  <div className="text-[9px] font-bold tracking-widest font-mono text-slate-500 mb-2 uppercase">Outbound</div>
                  <div className="text-2xl font-bold text-white tracking-tight flex items-baseline gap-1">1.8 <span className="text-[10px] text-slate-500 font-mono tracking-widest">GB/s</span></div>
                  <div className="text-[10px] font-bold text-emerald-400 mt-2 flex items-center gap-1 bg-emerald-500/10 px-1.5 py-0.5 rounded w-max border border-emerald-500/20">
                    <span className="material-symbols-outlined text-[14px]">trending_down</span> -5%
                  </div>
                </div>
              </div>
              {/* Simulated Mini Chart */}
              <div className="flex-1 relative min-h-[120px] flex items-end gap-1.5 mt-auto">
                <div className="w-full bg-blue-500/10 hover:bg-blue-500/30 border-t-2 border-blue-500/20 transition-colors rounded-t-sm h-[40%]"></div>
                <div className="w-full bg-blue-500/10 hover:bg-blue-500/30 border-t-2 border-blue-500/20 transition-colors rounded-t-sm h-[60%]"></div>
                <div className="w-full bg-blue-500/10 hover:bg-blue-500/30 border-t-2 border-blue-500/20 transition-colors rounded-t-sm h-[30%]"></div>
                <div className="w-full bg-blue-500/10 hover:bg-blue-500/30 border-t-2 border-blue-500/20 transition-colors rounded-t-sm h-[80%]"></div>
                <div className="w-full bg-blue-500/10 hover:bg-blue-500/30 border-t-2 border-blue-500/20 transition-colors rounded-t-sm h-[50%]"></div>
                <div className="w-full bg-purple-500/30 hover:bg-purple-500/50 border-t-2 border-purple-500/50 transition-colors rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(168,85,247,0.3)]"></div>
                <div className="w-full bg-blue-500/10 hover:bg-blue-500/30 border-t-2 border-blue-500/20 transition-colors rounded-t-sm h-[45%]"></div>
                <div className="w-full bg-blue-500/10 hover:bg-blue-500/30 border-t-2 border-blue-500/20 transition-colors rounded-t-sm h-[65%]"></div>
                <div className="w-full bg-blue-500/10 hover:bg-blue-500/30 border-t-2 border-blue-500/20 transition-colors rounded-t-sm h-[35%]"></div>
                <div className="w-full bg-purple-500/50 border-t-2 border-purple-400 transition-colors rounded-t-sm h-[100%] shadow-[0_0_20px_rgba(168,85,247,0.5)]"></div>
                <div className="w-full bg-blue-500/10 hover:bg-blue-500/30 border-t-2 border-blue-500/20 transition-colors rounded-t-sm h-[55%]"></div>
                <div className="w-full bg-blue-500/10 hover:bg-blue-500/30 border-t-2 border-blue-500/20 transition-colors rounded-t-sm h-[40%]"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Terminal Overlay (Bottom) */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="w-full relative z-10 mt-6">
        <div className="bg-[#060910] rounded-xl border border-white/5 p-4 flex items-center gap-4 font-mono text-xs shadow-inner">
          <span className="text-purple-400 font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">terminal</span>
            root@quantum-core:~#
          </span>
          <motion.span 
            className="text-slate-300 tracking-wide"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            tail -f /var/log/syslog | grep "threat"
          </motion.span>
          <motion.span 
            className="w-2 h-4 bg-purple-400 inline-block align-middle"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
