import { auth } from '../firebase';
import React, { useState } from 'react';
import ReportFalsePositive from './ReportFalsePositive';

interface IncidentReportProps {
  onBack?: () => void;
}

export default function IncidentReport({ onBack }: IncidentReportProps) {
  const [showReportModal, setShowReportModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      {showReportModal && (
        <ReportFalsePositive 
          onClose={() => setShowReportModal(false)} 
          domain="paypa1.com" 
        />
      )}
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-dark dark:bg-background-dark bg-white px-10 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined text-[32px]">shield_lock</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">AI Phishing Guard</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <nav className="hidden md:flex items-center gap-9">
            <button onClick={onBack} className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal">Panel de Control</button>
            <button className="text-slate-900 dark:text-white text-sm font-medium leading-normal">Incidents</button>
            <button className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal">Configuración</button>
          </nav>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 cursor-pointer justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors">
              <span className="material-symbols-outlined text-[18px]">travel_explore</span>
              <span className="truncate">Scan URL</span>
            </button>
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-border-dark" data-alt="User profile avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-center p-4 md:px-10 py-8">
        <div className="flex flex-col max-w-[1200px] w-full gap-8">
          {/* Header Section */}
          <div className="flex flex-wrap justify-between items-end gap-4 border-b border-border-dark pb-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                {onBack && (
                  <button onClick={onBack} className="mr-2 text-slate-400 hover:text-white transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                  </button>
                )}
                <span className="bg-red-500/10 text-red-500 border border-red-500/20 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">Blocked</span>
                <p className="text-text-secondary text-sm font-medium">ID: #INC-8492-AX • Today, 10:42 AM</p>
              </div>
              <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Threat Analysis Report</h1>
              <p className="text-text-secondary text-lg font-normal">Detected: High Risk Phishing Attempt on <span className="text-slate-100 font-mono bg-surface-dark px-2 py-0.5 rounded border border-border-dark">paypa1.com</span></p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowReportModal(true)}
                className="flex items-center gap-2 h-10 px-4 rounded-lg bg-surface-dark border border-border-dark hover:bg-border-dark transition-colors text-white text-sm font-bold"
              >
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
                <span>Add to Safe List</span>
              </button>
              <button className="flex items-center gap-2 h-10 px-4 rounded-lg bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold shadow-lg shadow-blue-500/20">
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span>Export Report</span>
              </button>
            </div>
          </div>

          {/* Top Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Risk Score */}
            <div className="flex flex-col gap-1 rounded-xl p-6 bg-surface-dark border border-border-dark relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl text-red-500">warning</span>
              </div>
              <p className="text-text-secondary text-sm font-medium uppercase tracking-wider">Risk Score</p>
              <div className="flex items-baseline gap-2">
                <p className="text-white text-4xl font-bold">92<span className="text-xl text-text-secondary font-normal">/100</span></p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-2 w-full bg-border-dark rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[92%] rounded-full"></div>
                </div>
              </div>
              <p className="text-red-500 text-sm font-medium mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">error</span> Critical Level
              </p>
            </div>

            {/* Targeted Brand */}
            <div className="flex flex-col gap-1 rounded-xl p-6 bg-surface-dark border border-border-dark relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl text-primary">target</span>
              </div>
              <p className="text-text-secondary text-sm font-medium uppercase tracking-wider">Targeting Brand</p>
              <p className="text-white text-4xl font-bold">PayPal</p>
              <p className="text-text-secondary text-sm mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">join_inner</span> Visual Match: <span className="text-white font-bold">99%</span>
              </p>
            </div>

            {/* Detection Speed */}
            <div className="flex flex-col gap-1 rounded-xl p-6 bg-surface-dark border border-border-dark relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl text-green-500">speed</span>
              </div>
              <p className="text-text-secondary text-sm font-medium uppercase tracking-wider">Detection Time</p>
              <p className="text-white text-4xl font-bold">0.4s</p>
              <p className="text-green-500 text-sm font-medium mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">bolt</span> Real-time Block
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Analysis Column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">AI Detection Breakdown</h2>
                <button className="text-primary hover:text-blue-400 text-sm font-medium">View Full Logs</button>
              </div>

              {/* Analysis Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* NLP Analysis */}
                <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-500">
                      <span className="material-symbols-outlined">text_fields</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">NLP Analysis</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded bg-background-dark border border-border-dark">
                      <span className="material-symbols-outlined text-yellow-500 text-sm mt-0.5">warning</span>
                      <div>
                        <p className="text-white text-sm font-medium">Fake Urgency</p>
                        <p className="text-text-secondary text-xs">"Account suspended within 24h"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded bg-background-dark border border-border-dark">
                      <span className="material-symbols-outlined text-yellow-500 text-sm mt-0.5">warning</span>
                      <div>
                        <p className="text-white text-sm font-medium">Authority Mimicry</p>
                        <p className="text-text-secondary text-xs">Unauthorized use of official tone</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Analysis */}
                <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-purple-500/20 text-purple-500">
                      <span className="material-symbols-outlined">visibility</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">Visual &amp; Code</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded bg-background-dark border border-border-dark">
                      <span className="material-symbols-outlined text-red-500 text-sm mt-0.5">cancel</span>
                      <div>
                        <p className="text-white text-sm font-medium">Logo Mismatch</p>
                        <p className="text-text-secondary text-xs">Official logo pixel-mapped 98%</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded bg-background-dark border border-border-dark">
                      <span className="material-symbols-outlined text-red-500 text-sm mt-0.5">code_off</span>
                      <div>
                        <p className="text-white text-sm font-medium">Hidden Fields</p>
                        <p className="text-text-secondary text-xs">2 invisible input fields detected</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Domain Analysis */}
                <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors md:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-green-500/20 text-green-500">
                      <span className="material-symbols-outlined">dns</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">Domain Analysis</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2 p-4 rounded bg-background-dark border border-border-dark">
                      <p className="text-text-secondary text-xs font-bold uppercase">Detected URL</p>
                      <p className="text-white font-mono text-lg tracking-tight">https://secure-login.<span className="text-red-400 font-bold bg-red-400/10 px-1 rounded">paypa1</span>.com</p>
                    </div>
                    <div className="flex flex-col gap-2 p-4 rounded bg-background-dark border border-border-dark">
                      <p className="text-text-secondary text-xs font-bold uppercase">Legitimate URL</p>
                      <p className="text-white font-mono text-lg tracking-tight">https://www.<span className="text-green-400 font-bold bg-green-400/10 px-1 rounded">paypal</span>.com</p>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm mt-2"><span className="text-white font-medium">Typosquatting Detected:</span> Character substitution 'l' → '1' is a common evasion technique.</p>
                </div>
              </div>
            </div>

            {/* Sidebar Timeline */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-white">Incident Timeline</h2>
              <div className="flex flex-col gap-0 relative">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-border-dark z-0"></div>
                
                {/* Timeline Item 1 */}
                <div className="flex gap-4 relative z-10 pb-8">
                  <div className="size-10 rounded-full bg-surface-dark border-2 border-border-dark flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-sm">link</span>
                  </div>
                  <div className="flex flex-col pt-2">
                    <span className="text-xs text-text-secondary font-mono">10:42:01 AM</span>
                    <p className="text-white text-sm font-medium">User visited suspicious URL</p>
                  </div>
                </div>
                
                {/* Timeline Item 2 */}
                <div className="flex gap-4 relative z-10 pb-8">
                  <div className="size-10 rounded-full bg-surface-dark border-2 border-border-dark flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-blue-500 text-sm">psychology</span>
                  </div>
                  <div className="flex flex-col pt-2">
                    <span className="text-xs text-text-secondary font-mono">10:42:01.2 AM</span>
                    <p className="text-white text-sm font-medium">AI Engines Triggered (NLP, Visual)</p>
                  </div>
                </div>
                
                {/* Timeline Item 3 */}
                <div className="flex gap-4 relative z-10 pb-8">
                  <div className="size-10 rounded-full bg-surface-dark border-2 border-border-dark flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-red-500 text-sm">block</span>
                  </div>
                  <div className="flex flex-col pt-2">
                    <span className="text-xs text-text-secondary font-mono">10:42:01.4 AM</span>
                    <p className="text-white text-sm font-bold">Access Blocked Automatically</p>
                    <p className="text-text-secondary text-xs mt-1">Threshold exceeded (Score &gt; 85)</p>
                  </div>
                </div>
                
                {/* Timeline Item 4 */}
                <div className="flex gap-4 relative z-10">
                  <div className="size-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
                    <span className="material-symbols-outlined text-white text-sm">mail</span>
                  </div>
                  <div className="flex flex-col pt-2">
                    <span className="text-xs text-text-secondary font-mono">10:42:02 AM</span>
                    <p className="text-white text-sm font-medium">Alert sent to Admin</p>
                  </div>
                </div>
              </div>
              
              {/* Additional Metadata */}
              <div className="mt-4 p-4 rounded-xl bg-surface-dark border border-border-dark flex flex-col gap-3">
                <h3 className="text-white font-bold text-sm border-b border-border-dark pb-2">Technical Metadata</h3>
                <div className="flex justify-between">
                  <span className="text-text-secondary text-xs">IP Address</span>
                  <span className="text-white text-xs font-mono">192.168.0.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary text-xs">Server Location</span>
                  <span className="text-white text-xs">Russia (RU)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary text-xs">SSL Certificate</span>
                  <span className="text-red-400 text-xs">Self-signed (Invalid)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
