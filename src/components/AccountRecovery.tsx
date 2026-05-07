import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface AccountRecoveryProps {
  onBack: () => void;
}

export default function AccountRecovery({ onBack }: AccountRecoveryProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 px-10 py-4 bg-white dark:bg-slate-900 sticky top-0 z-50">
        <div className="flex items-center gap-3 text-slate-900 dark:text-white cursor-pointer" onClick={onBack}>
          <div className="size-8 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">shield_lock</span>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight">SecurityShield</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Home</Link>
            <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" to='/inicio'>Features</Link>
            <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" to='/centro-ayuda'>Support</Link>
            <Link className="text-primary hover:text-primary-hover font-semibold text-sm leading-normal" to="/login">Login</Link>
          </nav>
          <button className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary-hover transition-colors text-white text-sm font-bold leading-normal tracking-wide shadow-md shadow-blue-500/20">
            <span className="truncate">Get Extension</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
          <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-blue-100 dark:bg-blue-900 blur-3xl"></div>
          <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] rounded-full bg-indigo-50 dark:bg-indigo-950 blur-3xl"></div>
        </div>

        <div className="w-full max-w-[960px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Side: Context/Marketing */}
          <div className="hidden lg:flex flex-col gap-6 pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 w-fit">
              <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
              <span className="text-primary text-xs font-bold uppercase tracking-wide">Bank-grade Security</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
              Secure Account <br /><span className="text-primary">Recovery</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              Regain access to your account safely. We use multi-factor verification to ensure only you can reset your credentials.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden" data-alt="User avatar 1">
                  <img alt="User" className="w-full h-full object-cover" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden" data-alt="User avatar 2">
                  <img alt="User" className="w-full h-full object-cover" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden" data-alt="User avatar 3">
                  <img alt="User" className="w-full h-full object-cover" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-400 text-sm">
                  <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                  <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                  <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                  <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                  <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Trusted by 50k+ users</span>
              </div>
            </div>
          </div>

          {/* Right Side: The Recovery Flow (Stacked Visuals representing steps) */}
          <div className="flex flex-col gap-8 w-full">
            {/* STEP 1: Forgot Password */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">lock_reset</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Forgot Password?</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Step 1 of 3</p>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-normal">
                  Enter the email address associated with your account and we'll send you a recovery link.
                </p>
                <div className="space-y-5">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Email Address</span>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <span className="material-symbols-outlined text-[20px]">mail</span>
                      </span>
                      <input className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" placeholder="name@company.com" type="email" defaultValue="user@example.com" />
                    </div>
                  </label>
                  <button className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-4 rounded-lg shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group">
                    Send Recovery Link
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
              <div className="px-8 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center">
                <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary flex items-center gap-2 transition-colors" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  Volver al Inicio de Sesión
                </Link>
              </div>
            </div>

            {/* Divider / Connector Visual */}
            <div className="relative flex items-center justify-center py-2 opacity-50">
              <div className="h-8 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
            </div>

            {/* STEP 2: 2FA Verification */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden relative">
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800">
                <div className="h-full bg-primary w-2/3 rounded-r-full"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">security</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">2FA Verification</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Step 2 of 3</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-900/50">
                    <span className="material-symbols-outlined text-[16px]">timer</span>
                    <span className="text-xs font-bold font-mono">02:45</span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-normal">
                  Enter the 6-digit code from your authenticator app or sent via SMS to <span className="font-medium text-slate-900 dark:text-white">***-***-8924</span>.
                </p>
                <div className="space-y-6">
                  <div className="flex justify-between gap-2 md:gap-4">
                    {/* OTP Inputs */}
                    <input className="w-full h-12 md:h-14 text-center text-2xl font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" type="number" defaultValue="8" />
                    <input autoFocus className="w-full h-12 md:h-14 text-center text-2xl font-bold rounded-lg border border-primary dark:border-primary bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none ring-2 ring-primary/20 shadow-lg shadow-blue-500/10 transition-all" type="number" />
                    <input className="w-full h-12 md:h-14 text-center text-2xl font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" type="number" />
                    <div className="flex items-center justify-center text-slate-300">-</div>
                    <input className="w-full h-12 md:h-14 text-center text-2xl font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" type="number" />
                    <input className="w-full h-12 md:h-14 text-center text-2xl font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" type="number" />
                    <input className="w-full h-12 md:h-14 text-center text-2xl font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" type="number" />
                  </div>
                  <button className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-4 rounded-lg shadow-md shadow-blue-500/20 transition-all">
                    Verify Code
                  </button>
                  <div className="flex items-center justify-between text-sm">
                    <Link className="text-slate-500 hover:text-primary transition-colors" to='/panel'>Resend Code</Link>
                    <Link className="text-primary hover:text-primary-hover font-medium underline underline-offset-2" to='/panel'>Use Backup Code</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider / Connector Visual */}
            <div className="relative flex items-center justify-center py-2 opacity-50">
              <div className="h-8 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
            </div>

            {/* STEP 3: Reset Password */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden relative">
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800">
                <div className="h-full bg-green-500 w-full rounded-r-full"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400">
                      <span className="material-symbols-outlined">check_circle</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Reset Password</h3>
                      <p className="text-sm text-green-600 dark:text-green-400 font-medium">Verified Successfully</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">New Password</span>
                    <div className="relative">
                      <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" placeholder="••••••••••••" type="password" defaultValue="MyNewPassword123!" />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    </div>
                  </label>
                  {/* Strength Meter */}
                  <div className="space-y-2">
                    <div className="flex gap-1 h-1">
                      <div className="flex-1 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 text-right">Strong password</p>
                  </div>
                  <label className="block">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Confirm Password</span>
                    <div className="relative">
                      <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" placeholder="••••••••••••" type="password" />
                    </div>
                  </label>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md shadow-green-500/20 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">save</span>
                    Save New Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>creada en 2026 Jonathan Jimenez Escobar</p>
        <div className="flex justify-center gap-6 mt-3">
          <Link className="hover:text-primary" to="/privacy-compliance">Privacy Policy</Link>
          <Link className="hover:text-primary" to="/terms-of-service">Terms of Service</Link>
          <Link className="hover:text-primary" to='/centro-ayuda'>Contact Support</Link>
        </div>
      </footer>
    </div>
  );
}
