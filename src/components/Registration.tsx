import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface RegistrationProps {
  onBack?: () => void;
  onLogin?: () => void;
}

export default function Registration({ onBack, onLogin }: RegistrationProps) {
  const [accountType, setAccountType] = useState<'personal' | 'enterprise'>('personal');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-10 py-4 bg-white/50 dark:bg-[#101622]/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4 text-slate-900 dark:text-white cursor-pointer" onClick={onBack}>
          <div className="size-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">security</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">PhishGuard AI</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8 hidden md:flex">
          <div className="flex items-center gap-9">
            <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors" to='/inicio'>Features</Link>
            <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors" to='/panel'>Enterprise</Link>
            <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors" to='/precios'>Pricing</Link>
            <button onClick={onLogin} className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors">Login</button>
          </div>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-primary/20">
            <span className="truncate">Comenzar</span>
          </button>
        </div>
        <div className="md:hidden text-slate-900 dark:text-white">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="flex-1 flex flex-col lg:flex-row h-full">
        {/* Left Side: Feature Highlight */}
        <div className="flex-1 lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center relative overflow-hidden bg-slate-900 dark:bg-[#101622]">
          {/* Abstract Background Pattern */}
          <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary via-slate-900 to-slate-900"></div>
          <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-primary/20 blur-[100px]"></div>
          
          <div className="relative z-10 flex flex-col gap-8 max-w-xl">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span>Trusted by 50,000+ Users</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Real-time NLP analysis of every link you click.
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              Our advanced AI engine scans URLs in milliseconds to block phishing attempts before they load. Secure your browsing experience instantly.
            </p>
            
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div>
                  <h3 className="font-bold text-white">Zero-Day Protection</h3>
                  <p className="text-sm text-slate-400">Blocks never-before-seen threats instantly</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <span className="material-symbols-outlined">speed</span>
                </div>
                <div>
                  <h3 className="font-bold text-white">Latency-Free Browsing</h3>
                  <p className="text-sm text-slate-400">Analysis happens in under 50ms</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="flex-1 lg:w-1/2 flex items-center justify-center p-6 lg:p-20 bg-background-light dark:bg-[#0d121c]">
          <div className="w-full max-w-[480px] flex flex-col gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Create your Security Account</h2>
              <p className="text-slate-500 dark:text-slate-400">Join the secure browsing network today.</p>
            </div>

            {/* Account Type Toggle */}
            <div className="bg-slate-200 dark:bg-slate-800 p-1 rounded-lg flex relative">
              <label className="flex-1 cursor-pointer">
                <input 
                  type="radio" 
                  name="account_type" 
                  value="personal" 
                  className="peer sr-only" 
                  checked={accountType === 'personal'}
                  onChange={() => setAccountType('personal')}
                />
                <div className="flex items-center justify-center py-2.5 rounded-md text-sm font-medium text-slate-500 dark:text-slate-400 transition-all peer-checked:bg-white dark:peer-checked:bg-[#1c2333] peer-checked:text-slate-900 dark:peer-checked:text-white peer-checked:shadow-sm">
                  <span className="material-symbols-outlined mr-2 text-[18px]">person</span>
                  Personal Use
                </div>
              </label>
              <label className="flex-1 cursor-pointer">
                <input 
                  type="radio" 
                  name="account_type" 
                  value="enterprise" 
                  className="peer sr-only"
                  checked={accountType === 'enterprise'}
                  onChange={() => setAccountType('enterprise')}
                />
                <div className="flex items-center justify-center py-2.5 rounded-md text-sm font-medium text-slate-500 dark:text-slate-400 transition-all peer-checked:bg-white dark:peer-checked:bg-[#1c2333] peer-checked:text-slate-900 dark:peer-checked:text-white peer-checked:shadow-sm">
                  <span className="material-symbols-outlined mr-2 text-[18px]">business</span>
                  Enterprise Use
                </div>
              </label>
            </div>

            {/* Form Fields */}
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                    <span className="material-symbols-outlined text-[20px]">badge</span>
                  </span>
                  <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    className="w-full rounded-lg bg-white dark:bg-[#1c2333] border border-slate-300 dark:border-slate-700 px-4 pl-11 py-3 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Work Email</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </span>
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    className="w-full rounded-lg bg-white dark:bg-[#1c2333] border border-slate-300 dark:border-slate-700 px-4 pl-11 py-3 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Contraseña</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                    <span className="material-symbols-outlined text-[20px]">lock</span>
                  </span>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Create a strong password" 
                    className="w-full rounded-lg bg-white dark:bg-[#1c2333] border border-slate-300 dark:border-slate-700 px-4 pl-11 py-3 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  />
                  <span 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer hover:text-primary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? "visibility" : "visibility_off"}
                    </span>
                  </span>
                </div>
                {/* Password Strength Meter */}
                <div className="flex gap-1 mt-1">
                  <div className="h-1 flex-1 rounded-full bg-red-500"></div>
                  <div className="h-1 flex-1 rounded-full bg-red-500"></div>
                  <div className="h-1 flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <div className="h-1 flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                </div>
                <span className="text-xs text-red-500 font-medium">Weak password</span>
              </div>

              <div className="flex items-start gap-3 mt-2">
                <div className="flex items-center h-5">
                  <input 
                    id="terms" 
                    type="checkbox" 
                    className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-[#1c2333] text-primary focus:ring-primary focus:ring-offset-0" 
                  />
                </div>
                <label htmlFor="terms" className="text-sm text-slate-600 dark:text-slate-400">
                  I agree to the <Link to="/policy-manager" className="text-primary hover:text-primary/80 font-medium">Security Policy</Link> and <Link to="/privacy-compliance" className="text-primary hover:text-primary/80 font-medium">Privacy Terms</Link>.
                </label>
              </div>

              <button 
                type="submit" 
                className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary py-3.5 px-4 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all transform active:scale-[0.98]"
              >
                Get Started
                <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
              </button>
            </form>

            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
              Already have an account?{' '}
              <button onClick={onLogin} className="font-medium text-primary hover:text-primary/80">Log in</button>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
