import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Search, 
  Moon, 
  Globe, 
  ChevronRight, 
  Palette, 
  Users, 
  Clock, 
  BarChart3, 
  Filter, 
  Grid, 
  CheckCircle2, 
  Circle, 
  Plus, 
  TrendingUp, 
  Building2, 
  Terminal, 
  X, 
  PlayCircle 
} from 'lucide-react';

interface CampaignBuilderProps {
  onBack?: () => void;
}

export default function CampaignBuilder({ onBack }: CampaignBuilderProps) {
  return (
    <div className="flex flex-col h-full overflow-y-auto bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-border-dark px-6 md:px-10 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-50 shrink-0">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-primary cursor-pointer" onClick={onBack}>
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">AI Shield</h2>
          </div>
          <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-border-dark">
              <div className="text-slate-500 dark:text-slate-400 flex items-center justify-center pl-4">
                <Search className="w-5 h-5" />
              </div>
              <input 
                className="flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-500 text-sm font-normal px-3 outline-none" 
                placeholder="Buscar templates..." 
              />
            </div>
          </label>
        </div>
        <div className="flex flex-1 justify-end gap-4 md:gap-8">
          <nav className="hidden lg:flex items-center gap-6">
            <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to='/panel'>Campaigns</Link>
            <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to='/panel'>Templates</Link>
            <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to='/panel'>Targets</Link>
            <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to='/panel'>Analytics</Link>
          </nav>
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-slate-100 dark:bg-surface-dark text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-border-dark hover:bg-primary/10 transition-all">
              <Moon className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-slate-100 dark:bg-surface-dark text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-border-dark hover:bg-primary/10 transition-all">
              <Globe className="w-5 h-5" />
            </button>
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" 
              style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}
            ></div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6">
          <a className="text-primary text-sm font-medium hover:underline cursor-pointer" onClick={onBack}>Simulations</a>
          <ChevronRight className="text-slate-400 dark:text-slate-500 w-4 h-4" />
          <span className="text-slate-900 dark:text-slate-100 text-sm font-medium">Campaign Builder</span>
        </div>

        {/* Page Title */}
        <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Create New Simulation</h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Phishing awareness test for global corporate departments.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center rounded-xl h-11 px-6 bg-slate-100 dark:bg-surface-dark text-slate-700 dark:text-slate-200 text-sm font-bold border border-slate-200 dark:border-border-dark hover:bg-slate-200 dark:hover:bg-border-dark transition-all">
              Save Draft
            </button>
            <button className="flex items-center justify-center rounded-xl h-11 px-6 bg-primary text-white text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20">
              Launch Campaign
            </button>
          </div>
        </div>

        {/* Wizard Progress */}
        <div className="mb-10">
          <div className="flex border-b border-slate-200 dark:border-border-dark gap-8 overflow-x-auto no-scrollbar">
            <Link className="flex items-center gap-2 border-b-[3px] border-primary text-primary pb-4 px-2" to='/panel'>
              <Palette className="w-5 h-5" />
              <p className="text-sm font-bold tracking-wide">1. TEMPLATE GALLERY</p>
            </Link>
            <Link className="flex items-center gap-2 border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 pb-4 px-2 hover:text-slate-700 dark:hover:text-slate-200 transition-colors" to='/panel'>
              <Users className="w-5 h-5" />
              <p className="text-sm font-bold tracking-wide">2. TARGET AUDIENCE</p>
            </Link>
            <Link className="flex items-center gap-2 border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 pb-4 px-2 hover:text-slate-700 dark:hover:text-slate-200 transition-colors" to='/panel'>
              <Clock className="w-5 h-5" />
              <p className="text-sm font-bold tracking-wide">3. SCHEDULE &amp; CONFIG</p>
            </Link>
            <Link className="flex items-center gap-2 border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 pb-4 px-2 hover:text-slate-700 dark:hover:text-slate-200 transition-colors" to='/panel'>
              <BarChart3 className="w-5 h-5" />
              <p className="text-sm font-bold tracking-wide">4. ANALYTICS PREVIEW</p>
            </Link>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Template Selection */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-slate-900 dark:text-white text-xl font-bold">Recommended Templates</h2>
              <div className="flex gap-2">
                <button className="p-2 text-slate-500 hover:text-primary"><Filter className="w-5 h-5" /></button>
                <button className="p-2 text-slate-500 hover:text-primary"><Grid className="w-5 h-5" /></button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Template Card 1 */}
              <div className="group relative rounded-xl bg-slate-100 dark:bg-surface-dark border-2 border-primary overflow-hidden cursor-pointer hover:shadow-xl transition-all">
                <div className="aspect-video w-full bg-slate-200 dark:bg-border-dark relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10"></div>
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Mockup of a fake corporate login page for phishing" 
                    src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"}
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 right-3 z-20 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Active Choice</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Microsoft 365 Credential Harvest</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">High success rate for IT/Admin teams</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Difficulty: High</span>
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>

              {/* Template Card 2 */}
              <div className="group relative rounded-xl bg-slate-50 dark:bg-surface-dark/50 border border-slate-200 dark:border-border-dark overflow-hidden cursor-pointer hover:border-primary/50 transition-all">
                <div className="aspect-video w-full bg-slate-200 dark:bg-border-dark relative overflow-hidden">
                  <img 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
                    alt="Example of an urgent fake HR policy update email" 
                    src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Urgent HR Policy Update</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Best for general staff awareness</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Difficulty: Medium</span>
                    <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                  </div>
                </div>
              </div>

              {/* Template Card 3 */}
              <div className="group relative rounded-xl bg-slate-50 dark:bg-surface-dark/50 border border-slate-200 dark:border-border-dark overflow-hidden cursor-pointer hover:border-primary/50 transition-all">
                <div className="aspect-video w-full bg-slate-200 dark:bg-border-dark relative overflow-hidden">
                  <img 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
                    alt="Simulated invoice notification from a fake vendor" 
                    src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Unpaid Invoice Notification</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Target Finance &amp; Procurement</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Difficulty: Low</span>
                    <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                  </div>
                </div>
              </div>

              {/* Template Card 4 (Add Custom) */}
              <div className="group relative rounded-xl border-2 border-dashed border-slate-300 dark:border-border-dark flex flex-col items-center justify-center p-6 cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all aspect-video sm:aspect-auto">
                <div className="size-12 rounded-full bg-slate-200 dark:bg-surface-dark flex items-center justify-center text-slate-500 group-hover:bg-primary group-hover:text-white transition-all mb-3">
                  <Plus className="w-6 h-6" />
                </div>
                <span className="font-bold text-slate-900 dark:text-white">Create Custom</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Upload your own HTML</p>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Config & Preview */}
          <div className="space-y-6">
            {/* Quick Stats / Analytics Preview */}
            <div className="rounded-xl bg-surface-dark border border-border-dark p-6 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <TrendingUp className="w-24 h-24" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Predicted Outcomes</h3>
              <div className="space-y-5 relative z-10">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-medium">Predicted Click Rate</span>
                    <span className="text-xl font-black text-primary">24.8%</span>
                  </div>
                  <div className="w-full bg-border-dark rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '24.8%' }}></div>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-2 italic">Based on your recent 3 simulations</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-background-dark/50 rounded-lg border border-border-dark">
                    <span className="text-[10px] text-slate-500 block mb-1">EST. TARGETS</span>
                    <span className="text-lg font-bold">1,240</span>
                  </div>
                  <div className="p-3 bg-background-dark/50 rounded-lg border border-border-dark">
                    <span className="text-[10px] text-slate-500 block mb-1">AVG. RISK</span>
                    <span className="text-lg font-bold text-orange-400">High</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Summary */}
            <div className="rounded-xl bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900 dark:text-white">Target Selection</h3>
                <button className="text-primary text-xs font-bold hover:underline">Editar</button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-white dark:bg-background-dark border border-slate-200 dark:border-border-dark">
                  <div className="size-8 rounded bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold dark:text-white">Marketing Dept.</p>
                    <p className="text-[10px] text-slate-500">45 Employees</p>
                  </div>
                  <button className="text-slate-400 hover:text-red-500"><X className="w-4 h-4" /></button>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-white dark:bg-background-dark border border-slate-200 dark:border-border-dark">
                  <div className="size-8 rounded bg-green-500/10 text-green-500 flex items-center justify-center">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold dark:text-white">Engineering</p>
                    <p className="text-[10px] text-slate-500">128 Employees</p>
                  </div>
                  <button className="text-slate-400 hover:text-red-500"><X className="w-4 h-4" /></button>
                </div>
              </div>
              <button className="w-full mt-4 py-2 border-2 border-dashed border-slate-300 dark:border-border-dark rounded-lg text-slate-500 text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-border-dark transition-all">
                <Plus className="w-4 h-4" />
                Add Group
              </button>
            </div>

            {/* Training Outcome Preview */}
            <div className="rounded-xl bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark p-6 overflow-hidden">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4">Training Redirect</h3>
              <div className="relative aspect-video rounded-lg overflow-hidden mb-3 border border-slate-200 dark:border-border-dark">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Interactive training video screen for employees who click phishing links" 
                  src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <PlayCircle className="w-10 h-10 text-white" />
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Employees who fail will be automatically enrolled in <span className="text-primary font-bold">"Spotting Malicious URLs"</span> micro-course.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Meta */}
      <footer className="mt-12 border-t border-slate-200 dark:border-border-dark py-6 px-10 shrink-0">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-500">creada en 2026 Jonathan Jimenez Escobar</p>
          <div className="flex gap-6">
            <Link className="text-xs text-slate-500 hover:text-primary" to="/system-status">System Status</Link>
            <Link className="text-xs text-slate-500 hover:text-primary" to='/centro-ayuda'>Help Center</Link>
            <Link className="text-xs text-slate-500 hover:text-primary" to="/apidocumentation">API Docs</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
