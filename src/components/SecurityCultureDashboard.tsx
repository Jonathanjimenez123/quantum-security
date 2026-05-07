import { auth } from '../firebase';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';

interface SecurityCultureDashboardProps {
  onBack?: () => void;
}

export default function SecurityCultureDashboard({ onBack }: SecurityCultureDashboardProps) {
  const [activeLearners, setActiveLearners] = useState(0);
  const [completionRate, setCompletionRate] = useState(0);
  const [cultureScore, setCultureScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setIsLoading(true);
      try {
        // Fetch users for culture score and active learners
        const usersRef = collection(db, 'users');
        const usersSnapshot = await getDocs(usersRef);
        
        let totalScore = 0;
        let validScores = 0;
        
        usersSnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.cultureScore !== undefined) {
            totalScore += data.cultureScore;
            validScores++;
          }
        });
        
        const avgScore = validScores > 0 ? Math.round(totalScore / validScores) : 84;
        setCultureScore(avgScore);
        setActiveLearners(usersSnapshot.size > 0 ? usersSnapshot.size : 1240);
        
        // Fetch training progress for completion rate
        const progressRef = collection(db, 'training_progress');
        const progressSnapshot = await getDocs(progressRef);
        
        let completed = 0;
        progressSnapshot.forEach((doc) => {
          if (doc.data().status === 'completed') {
            completed++;
          }
        });
        
        const totalModules = usersSnapshot.size * 5; // Assuming 5 modules per user
        const rate = totalModules > 0 ? Math.round((completed / totalModules) * 100) : 92;
        setCompletionRate(rate);
        
      } catch (error) {
        setCultureScore(84);
        setActiveLearners(1240);
        setCompletionRate(92);
        handleFirestoreError(error, OperationType.GET, 'users/training_progress');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f8f6f6] dark:bg-[#0f0906] text-slate-900 dark:text-slate-100 font-sans">
      <style>{`
        .neon-orange {
            text-shadow: 0 0 10px rgba(236, 91, 19, 0.5);
        }
        .neon-purple {
            text-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
        }
        .glow-border-orange {
            box-shadow: 0 0 15px rgba(236, 91, 19, 0.1);
        }
        .glow-border-purple {
            box-shadow: 0 0 15px rgba(168, 85, 247, 0.1);
        }
      `}</style>
      
      <header className="flex items-center justify-between border-b border-white/5 bg-[#0f0906]/80 backdrop-blur-md px-6 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-4 cursor-pointer" onClick={onBack}>
          <div className="size-8 text-[#ec5b13]">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-tight">AI Shield 2026</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-white/5 text-slate-400 hover:text-[#ec5b13] transition-colors border border-white/10">
            <span className="material-symbols-outlined text-[20px]">doorbell</span>
          </button>
          <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-white/5 text-slate-400 hover:text-[#ec5b13] transition-colors border border-white/10">
            <span className="material-symbols-outlined text-[20px]">shield</span>
          </button>
          <div className="h-10 w-10 rounded-full border-2 border-[#ec5b13]/50 bg-cover bg-center" data-alt="User profile avatar placeholder" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
        </div>
      </header>
      
      <main className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/5 bg-[#0f0906]/50 hidden md:flex flex-col p-4 gap-2">
          <div className="flex items-center gap-3 px-3 py-4 mb-4 border-b border-white/5">
            <div className="h-10 w-10 rounded-full">
              <img alt="Jonathan Jimenez Escobar" className="w-full h-full rounded-full object-cover" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-bold text-white truncate">Jonathan Jimenez Escobar</span>
              <span className="text-xs text-[#ec5b13]/70 font-semibold uppercase tracking-wider">Expert Lead</span>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            <button onClick={onBack} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#ec5b13] text-white shadow-lg shadow-[#ec5b13]/20 w-full text-left">
              <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>mobile_layout</span>
              <span className="font-medium">Dashboard</span>
            </button>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-[#ec5b13] transition-colors" to='/entrenamiento-interactivo'>
              <span className="material-symbols-outlined text-[20px]">file_open</span>
              <span className="font-medium">Training</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-[#ec5b13] transition-colors" to='/informes'>
              <span className="material-symbols-outlined text-[20px]">multiline_chart</span>
              <span className="font-medium">Threat Intel</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-[#a855f7] transition-colors" to='/panel'>
              <span className="material-symbols-outlined text-[20px]">trophy</span>
              <span className="font-medium">Leaderboard</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-[#ec5b13] transition-colors" to='/ajustes'>
              <span className="material-symbols-outlined text-[20px]">search_gear</span>
              <span className="font-medium">Settings</span>
            </Link>
          </nav>
        </aside>
        
        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Security Culture <span className="text-[#ec5b13]">2026</span></h1>
              <p className="text-[#ec5b13] text-lg mt-2 font-medium neon-orange">Expert Lead: Jonathan Jimenez Escobar</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 rounded-xl bg-[#ec5b13] text-white font-bold text-sm shadow-xl shadow-[#ec5b13]/20 hover:scale-105 transition-all">
                Generate Report
              </button>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-[#ec5b13]/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Culture Score</p>
                <span className="text-emerald-400 text-xs font-bold px-2 py-1 bg-emerald-400/10 rounded-full">+5%</span>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-5xl font-black text-white">{isLoading ? '...' : cultureScore}</p>
                <p className="text-slate-500 font-bold">/100</p>
              </div>
              <div className="mt-4 w-full bg-slate-800/50 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#ec5b13] to-[#a855f7] h-full" style={{ width: `${cultureScore}%` }}></div>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-[#a855f7]/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Completion Rate</p>
                <span className="text-emerald-400 text-xs font-bold px-2 py-1 bg-emerald-400/10 rounded-full">+2%</span>
              </div>
              <p className="text-5xl font-black text-white">{isLoading ? '...' : `${completionRate}%`}</p>
              <div className="mt-4 w-full bg-slate-800/50 h-2 rounded-full overflow-hidden">
                <div className="bg-[#a855f7] h-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" style={{ width: `${completionRate}%` }}></div>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-[#ec5b13]/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Active Learners</p>
                <span className="text-emerald-400 text-xs font-bold px-2 py-1 bg-emerald-400/10 rounded-full">+12%</span>
              </div>
              <p className="text-5xl font-black text-white">{isLoading ? '...' : activeLearners.toLocaleString()}</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter mt-2">Active in the last 24 hours</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Onboarding & Interactive Training */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ec5b13] neon-orange">rocket_launch</span>
                  Training Roadmap
                </h2>
                <button className="text-[#ec5b13] text-sm font-semibold hover:underline">View All</button>
              </div>
              
              <div className="space-y-4">
                {/* Onboarding Card */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ec5b13]/40 transition-all hover:bg-white/[0.07] group">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                      <span className="material-symbols-outlined">person_add</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold group-hover:text-[#ec5b13] transition-colors">New Employee Onboarding</h3>
                      <p className="text-slate-400 text-sm">Foundational AI security practices</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-black text-lg">65%</p>
                      <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Progress</p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-300 font-bold uppercase tracking-wider">Mandatory</span>
                    <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-300 font-bold uppercase tracking-wider">3 Modules Left</span>
                  </div>
                </div>
                
                {/* Interactive Training Card (Phishing) */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#a855f7]/40 transition-all hover:bg-white/[0.07] glow-border-purple">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-xl bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7] border border-[#a855f7]/20">
                      <span className="material-symbols-outlined">sports_esports</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold">Phishing Simulation 2.0</h3>
                      <p className="text-slate-400 text-sm">Interactive "Spot the Prompt Injection" game</p>
                    </div>
                    <button className="px-5 py-2 rounded-lg bg-[#a855f7] text-white text-xs font-black shadow-lg shadow-[#a855f7]/20 hover:scale-105 transition-all">
                      START
                    </button>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[16px] text-[#a855f7]">timer</span>
                      15 mins
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[16px] text-[#a855f7]">groups</span>
                      450 Participating
                    </div>
                  </div>
                </div>
                
                {/* Advanced Module */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 opacity-60 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-500">
                      <span className="material-symbols-outlined">biotech</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold">LLM Vulnerability Lab</h3>
                      <p className="text-slate-400 text-sm">Hands-on interactive testing environment</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-600">lock</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gamification & Leaderboard */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#a855f7] neon-purple">military_tech</span>
                  Security Gamification
                </h2>
                <button className="text-[#a855f7] text-sm font-semibold hover:underline">Full Leaderboard</button>
              </div>
              
              <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="flex border-b border-white/10 bg-white/5 p-4 font-black text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  <div className="w-12">Rank</div>
                  <div className="flex-1">Security Champion</div>
                  <div className="w-24 text-right">Shield XP</div>
                </div>
                <div className="divide-y divide-white/5">
                  <div className="flex items-center p-4 hover:bg-white/[0.03] transition-colors">
                    <div className="w-12 font-black text-[#ec5b13] text-xl italic">01</div>
                    <div className="flex-1 flex items-center gap-3">
                      <div className="size-10 rounded-full border-2 border-[#ec5b13]/30 p-0.5">
                        <div className="w-full h-full rounded-full bg-slate-700 bg-cover" data-alt="Security champion avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Sarah Jenkins</p>
                        <p className="text-[10px] text-[#ec5b13] font-bold uppercase tracking-wider">Engineering</p>
                      </div>
                    </div>
                    <div className="w-24 text-right font-mono font-black text-white text-lg neon-orange">12,450</div>
                  </div>
                  
                  <div className="flex items-center p-4 hover:bg-white/[0.03] transition-colors">
                    <div className="w-12 font-black text-slate-500 text-xl italic">02</div>
                    <div className="flex-1 flex items-center gap-3">
                      <div className="size-10 rounded-full border-2 border-white/5 p-0.5">
                        <div className="w-full h-full rounded-full bg-slate-700 bg-cover" data-alt="Security champion avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Marcus Thorne</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Marketing</p>
                      </div>
                    </div>
                    <div className="w-24 text-right font-mono font-black text-white text-lg">11,920</div>
                  </div>
                  
                  <div className="flex items-center p-4 hover:bg-white/[0.03] transition-colors">
                    <div className="w-12 font-black text-slate-500 text-xl italic">03</div>
                    <div className="flex-1 flex items-center gap-3">
                      <div className="size-10 rounded-full border-2 border-white/5 p-0.5">
                        <div className="w-full h-full rounded-full bg-slate-700 bg-cover" data-alt="Security champion avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Elena Rodriguez</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Design</p>
                      </div>
                    </div>
                    <div className="w-24 text-right font-mono font-black text-white text-lg">10,105</div>
                  </div>
                </div>
              </div>
              
              {/* Achievements / Badges */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#a855f7]/10 to-transparent border border-white/10 glow-border-purple">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs font-black text-white uppercase tracking-[0.2em]">User Achievements</h3>
                  <span className="text-[10px] font-bold text-[#a855f7] uppercase">4 / 12 Unlocked</span>
                </div>
                <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
                  <div className="flex flex-col items-center gap-2 group cursor-help shrink-0">
                    <div className="size-14 rounded-full bg-slate-900 border-2 border-[#ec5b13] flex items-center justify-center text-[#ec5b13] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(236,91,19,0.3)]">
                      <span className="material-symbols-outlined text-2xl">detector_status</span>
                    </div>
                    <span className="text-[9px] font-black text-center uppercase tracking-widest text-slate-300">Threat Hunter</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 group cursor-help shrink-0">
                    <div className="size-14 rounded-full bg-slate-900 border-2 border-white/10 flex items-center justify-center text-slate-600 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl">verified_user</span>
                    </div>
                    <span className="text-[9px] font-black text-center uppercase tracking-widest text-slate-600">MFA Master</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 group cursor-help shrink-0">
                    <div className="size-14 rounded-full bg-slate-900 border-2 border-[#a855f7] flex items-center justify-center text-[#a855f7] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                      <span className="material-symbols-outlined text-2xl">psychology</span>
                    </div>
                    <span className="text-[9px] font-black text-center uppercase tracking-widest text-slate-300">AI Ethics</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 group cursor-help shrink-0">
                    <div className="size-14 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                      <span className="material-symbols-outlined text-2xl">shield_with_heart</span>
                    </div>
                    <span className="text-[9px] font-black text-center uppercase tracking-widest text-slate-300">Guardian</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Threat Intelligence Snapshot */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Live Security Pulse</h2>
              <div className="flex items-center gap-2 text-emerald-400">
                <div className="size-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest">Systems Nominal</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">Reported Phish</p>
                <p className="text-2xl font-black text-white">24</p>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">Policy Breaches</p>
                <p className="text-2xl font-black text-[#ec5b13] neon-orange">02</p>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">Training Coverage</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-black text-white">98%</p>
                  <span className="material-symbols-outlined text-emerald-400 text-sm">trending_up</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">System Uptime</p>
                <p className="text-2xl font-black text-[#a855f7] neon-purple">99.9%</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
