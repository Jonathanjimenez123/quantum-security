import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Search,
  Sun,
  Languages,
  FlaskConical,
  Plus,
  AlertTriangle,
  Database,
  PauseCircle,
  Edit2,
  Trash2,
  Play,
  Zap,
  CheckCircle2,
  Timer,
  ShieldCheck,
  ArrowLeft
} from 'lucide-react';

interface PolicyManagerProps {
  onBack?: () => void;
}

export default function PolicyManager({ onBack }: PolicyManagerProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#f8f6f6] dark:bg-[#1a120e] text-slate-900 dark:text-slate-100 transition-colors duration-200 font-sans">
      <style dangerouslySetInnerHTML={{ __html: `
        .rule-card-gradient {
            background: linear-gradient(135deg, rgba(236, 91, 19, 0.05) 0%, rgba(26, 18, 14, 0) 100%);
        }
      `}} />
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-3 bg-white dark:bg-[#1a120e]/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-[#ec5b13]">
            {onBack && (
              <button onClick={onBack} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors mr-2">
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div className="size-8 flex items-center justify-center bg-[#ec5b13]/10 rounded-lg">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">AI Shield</h2>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link className="text-slate-600 dark:text-slate-400 hover:text-[#ec5b13] dark:hover:text-[#ec5b13] text-sm font-medium transition-colors" to="/policy-manager">Policies</Link>
            <Link className="text-slate-600 dark:text-slate-400 hover:text-[#ec5b13] dark:hover:text-[#ec5b13] text-sm font-medium transition-colors" to='/panel'>Incidents</Link>
            <Link className="text-slate-600 dark:text-slate-400 hover:text-[#ec5b13] dark:hover:text-[#ec5b13] text-sm font-medium transition-colors" to='/panel'>Assets</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input className="bg-slate-100 dark:bg-slate-800 border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-[#ec5b13] w-64" placeholder="Buscar rules..." />
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 transition-colors">
              <Sun className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 transition-colors">
              <Languages className="w-5 h-5" />
            </button>
            <div className="size-10 rounded-full bg-[#ec5b13]/20 border-2 border-[#ec5b13]/40 overflow-hidden ml-2">
              <img alt="Profile" data-alt="User profile avatar portrait" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <nav className="flex gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-[#ec5b13]">
              <span>Automation</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-400">Policy Manager</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">SOAR Policy Manager</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Configure advanced <span className="text-[#ec5b13] font-semibold">IFTTT</span> security playbooks. Orchestrate automated responses based on real-time AI risk assessment.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-5 py-3 rounded-xl font-bold transition-all">
              <FlaskConical className="w-5 h-5" />
              <span>Test Rule</span>
            </button>
            <button className="flex items-center gap-2 bg-[#ec5b13] hover:bg-[#ec5b13]/90 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-[#ec5b13]/20 transition-all">
              <Plus className="w-5 h-5" />
              <span>Create New Policy</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 gap-8 overflow-x-auto">
          <button className="pb-4 px-2 border-b-2 border-[#ec5b13] text-[#ec5b13] font-bold whitespace-nowrap">Active Policies (12)</button>
          <button className="pb-4 px-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium whitespace-nowrap transition-colors">Drafts (4)</button>
          <button className="pb-4 px-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium whitespace-nowrap transition-colors">Simulations (2)</button>
          <button className="pb-4 px-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium whitespace-nowrap transition-colors">Archive</button>
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 rule-card-gradient hover:border-[#ec5b13]/50 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500/10 text-red-500 rounded-lg">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">High Risk AI Detection</h3>
                  <p className="text-xs text-slate-500">Last triggered: 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex size-2 rounded-full bg-green-500"></span>
                <span className="text-xs font-bold uppercase text-green-500">Active</span>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 text-xs font-bold text-slate-400 uppercase">If</div>
                <div className="flex-1 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">Risk Score &gt; 85</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">Dept: Finance</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">Time: 10PM - 6AM</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 text-xs font-bold text-[#ec5b13] uppercase">Then</div>
                <div className="flex-1 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#ec5b13]/10 text-[#ec5b13] border border-[#ec5b13]/20 rounded-full text-xs font-bold">Block Access</span>
                  <span className="px-3 py-1 bg-[#ec5b13]/10 text-[#ec5b13] border border-[#ec5b13]/20 rounded-full text-xs font-bold">Force 2FA</span>
                  <span className="px-3 py-1 bg-[#ec5b13]/10 text-[#ec5b13] border border-[#ec5b13]/20 rounded-full text-xs font-bold">Notify Slack</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex -space-x-2">
                <img alt="admin" className="size-8 rounded-full border-2 border-white dark:border-slate-900" data-alt="Small avatar of policy admin 1" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
                <img alt="admin" className="size-8 rounded-full border-2 border-white dark:border-slate-900" data-alt="Small avatar of policy admin 2" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-slate-400 hover:text-[#ec5b13] transition-colors"><Edit2 className="w-5 h-5" /></button>
                <button className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 className="w-5 h-5" /></button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 rule-card-gradient hover:border-[#ec5b13]/50 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Data Leak Prevention</h3>
                  <p className="text-xs text-slate-500">Last triggered: 1 day ago</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex size-2 rounded-full bg-green-500"></span>
                <span className="text-xs font-bold uppercase text-green-500">Active</span>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 text-xs font-bold text-slate-400 uppercase">If</div>
                <div className="flex-1 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">PII Detected</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">Platform: OpenAI</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 text-xs font-bold text-[#ec5b13] uppercase">Then</div>
                <div className="flex-1 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#ec5b13]/10 text-[#ec5b13] border border-[#ec5b13]/20 rounded-full text-xs font-bold">Redact Data</span>
                  <span className="px-3 py-1 bg-[#ec5b13]/10 text-[#ec5b13] border border-[#ec5b13]/20 rounded-full text-xs font-bold">Log Event</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex -space-x-2">
                <img alt="admin" className="size-8 rounded-full border-2 border-white dark:border-slate-900" data-alt="Small avatar of policy admin 3" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-slate-400 hover:text-[#ec5b13] transition-colors"><Edit2 className="w-5 h-5" /></button>
                <button className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 className="w-5 h-5" /></button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 opacity-70 group">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-500/10 text-slate-500 rounded-lg">
                  <PauseCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Engineering Lab Access</h3>
                  <p className="text-xs text-slate-500">Paused by admin</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex size-2 rounded-full bg-slate-400"></span>
                <span className="text-xs font-bold uppercase text-slate-400">Paused</span>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 text-xs font-bold text-slate-400 uppercase">If</div>
                <div className="flex-1 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">New Model Pull</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">Size &gt; 50GB</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 text-xs font-bold text-[#ec5b13] uppercase">Then</div>
                <div className="flex-1 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#ec5b13]/10 text-[#ec5b13] border border-[#ec5b13]/20 rounded-full text-xs font-bold">Approval Required</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex -space-x-2">
                <img alt="admin" className="size-8 rounded-full border-2 border-white dark:border-slate-900" data-alt="Small avatar of policy admin 4" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-slate-400 hover:text-[#ec5b13] transition-colors"><Play className="w-5 h-5" /></button>
                <button className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 className="w-5 h-5" /></button>
              </div>
            </div>
          </div>

          {/* Create New Card Placeholder */}
          <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col items-center justify-center p-8 hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-all cursor-pointer group">
            <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-[#ec5b13] group-hover:bg-[#ec5b13]/10 transition-all mb-4">
              <Plus className="w-8 h-8" />
            </div>
            <p className="font-bold text-slate-900 dark:text-white">Add New Rule</p>
            <p className="text-sm text-slate-500">Select from templates or start blank</p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center gap-4">
            <div className="size-10 rounded-lg bg-[#ec5b13]/10 text-[#ec5b13] flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Actions Today</p>
              <p className="text-xl font-black">1,248</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center gap-4">
            <div className="size-10 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Success Rate</p>
              <p className="text-xl font-black">99.8%</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center gap-4">
            <div className="size-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center">
              <Timer className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Avg Response</p>
              <p className="text-xl font-black">140ms</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center gap-4">
            <div className="size-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Active Shield</p>
              <p className="text-xl font-black">4 Zones</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 px-6 py-6 bg-white dark:bg-[#1a120e]/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            creada en 2026 Jonathan Jimenez Escobar
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <Link className="hover:text-[#ec5b13] transition-colors" to='/panel'>Documentation</Link>
            <Link className="hover:text-[#ec5b13] transition-colors" to="/apidocumentation">API Reference</Link>
            <Link className="hover:text-[#ec5b13] transition-colors" to='/centro-ayuda'>Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
