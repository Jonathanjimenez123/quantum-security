import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SoarPlaybookLogsProps {
  onBack: () => void;
}

export default function SoarPlaybookLogs({ onBack }: SoarPlaybookLogsProps) {
  const [expandedLog, setExpandedLog] = useState<string | null>(null);

  const logs = [
    { 
      id: 'PB-1042', 
      name: 'Phishing Containment', 
      trigger: 'High Confidence Phishing Alert', 
      status: 'Success', 
      time: '2026-04-03 14:20:05 UTC', 
      duration: '45s',
      details: {
        parameters: { target_email: 'user@example.com', threat_score: 95, source_ip: '192.168.1.50' },
        actions: [
          { startTime: '14:20:06.102', endTime: '14:20:08.450', action: 'Quarantine Email', status: 'Success' },
          { startTime: '14:20:08.500', endTime: '14:20:10.120', action: 'Block Sender IP', status: 'Success' },
          { startTime: '14:20:10.150', endTime: '14:20:45.000', action: 'Notify Security Team', status: 'Success' }
        ]
      }
    },
    { 
      id: 'PB-1041', 
      name: 'Suspicious Login Lockdown', 
      trigger: 'Impossible Travel Alert', 
      status: 'Failed', 
      time: '2026-04-03 13:15:22 UTC', 
      duration: '12s',
      details: {
        parameters: { user_id: 'USR-889', location_1: 'New York', location_2: 'Tokyo', time_diff: '5 mins' },
        actions: [
          { startTime: '13:15:23.050', endTime: '13:15:24.100', action: 'Revoke Active Sessions', status: 'Success' },
          { startTime: '13:15:24.150', endTime: '13:15:34.000', action: 'Lock Active Directory Account', status: 'Failed - API Timeout' }
        ]
      }
    },
    { 
      id: 'PB-1040', 
      name: 'Malware Sandbox Analysis', 
      trigger: 'Unknown File Download', 
      status: 'Success', 
      time: '2026-04-03 11:05:10 UTC', 
      duration: '2m 10s',
      details: {
        parameters: { file_hash: 'a1b2c3d4e5f6', file_name: 'invoice_urgent.exe', endpoint: 'WS-042' },
        actions: [
          { startTime: '11:05:12.000', endTime: '11:05:15.500', action: 'Isolate Endpoint', status: 'Success' },
          { startTime: '11:05:15.600', endTime: '11:06:00.200', action: 'Submit to Cuckoo Sandbox', status: 'Success' },
          { startTime: '11:06:00.300', endTime: '11:07:20.000', action: 'Retrieve Analysis Report', status: 'Success' }
        ]
      }
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedLog(expandedLog === id ? null : id);
  };

  return (
    <div className="bg-background-dark min-h-screen font-display text-slate-200 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 rounded-lg bg-surface-dark border border-border-dark hover:bg-border-dark transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white">Historial de Ejecución de Playbooks</h1>
              <p className="text-slate-400">Logs detallados de las automatizaciones SOAR.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-surface-dark border border-border-dark hover:bg-border-dark text-slate-400"><span className="material-symbols-outlined">filter_list</span></button>
            <button className="p-2 rounded-lg bg-surface-dark border border-border-dark hover:bg-border-dark text-slate-400"><span className="material-symbols-outlined">download</span></button>
          </div>
        </div>

        <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background-dark/50 border-b border-border-dark">
                <th className="p-4 font-bold text-slate-300">ID Ejecución</th>
                <th className="p-4 font-bold text-slate-300">Playbook</th>
                <th className="p-4 font-bold text-slate-300">Trigger</th>
                <th className="p-4 font-bold text-slate-300">Estado</th>
                <th className="p-4 font-bold text-slate-300">Tiempo</th>
                <th className="p-4 font-bold text-slate-300">Duración</th>
                <th className="p-4 font-bold text-slate-300">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <React.Fragment key={log.id}>
                  <tr className="border-b border-border-dark hover:bg-white/5 transition-colors">
                    <td className="p-4 font-mono text-sm text-slate-400">{log.id}</td>
                    <td className="p-4 font-bold text-white">{log.name}</td>
                    <td className="p-4 text-sm text-slate-400">{log.trigger}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${
                        log.status === 'Success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        <span className="material-symbols-outlined text-[14px]">
                          {log.status === 'Success' ? 'check_circle' : 'error'}
                        </span>
                        {log.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-400">{log.time}</td>
                    <td className="p-4 text-sm text-slate-400">{log.duration}</td>
                    <td className="p-4">
                      <button 
                        onClick={() => toggleExpand(log.id)}
                        className="text-primary hover:text-primary/80 font-bold text-sm flex items-center gap-1"
                      >
                        {expandedLog === log.id ? 'Hide Details' : 'View Details'}
                        <span className="material-symbols-outlined text-sm">
                          {expandedLog === log.id ? 'expand_less' : 'expand_more'}
                        </span>
                      </button>
                    </td>
                  </tr>
                  <AnimatePresence>
                    {expandedLog === log.id && (
                      <motion.tr 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-slate-900/50 border-b border-border-dark"
                      >
                        <td colSpan={7} className="p-0">
                          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm text-sky-400">data_object</span>
                                Execution Parameters
                              </h4>
                              <div className="bg-background-dark p-4 rounded-lg border border-border-dark font-mono text-xs text-slate-400">
                                {Object.entries(log.details.parameters).map(([key, value]) => (
                                  <div key={key} className="mb-1">
                                    <span className="text-sky-400">{key}:</span> {value}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm text-emerald-400">list_alt</span>
                                Action Log
                              </h4>
                              <div className="space-y-3">
                                {log.details.actions.map((action, index) => (
                                  <div key={index} className="flex items-start gap-3">
                                    <div className="text-xs font-mono text-slate-500 mt-0.5 flex flex-col">
                                      <span>{action.startTime}</span>
                                      <span className="text-slate-600">to {action.endTime}</span>
                                    </div>
                                    <div>
                                      <div className="text-sm text-slate-200">{action.action}</div>
                                      <div className={`text-xs ${action.status.includes('Failed') ? 'text-red-400' : 'text-emerald-400'}`}>
                                        {action.status}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </td>
                      </motion.tr>
                    )}
                  </AnimatePresence>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
