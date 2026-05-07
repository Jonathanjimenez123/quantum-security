import { auth } from '../firebase';
import React, { useState } from 'react';
import OnboardingStep2 from './OnboardingStep2';
import OnboardingStep3 from './OnboardingStep3';

interface OnboardingProps {
  onComplete: () => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(1);

  if (step === 2) {
    return <OnboardingStep2 onNext={() => setStep(3)} onSkip={() => setStep(3)} />;
  }

  if (step === 3) {
    return <OnboardingStep3 onComplete={onComplete} />;
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="relative flex w-full max-w-5xl h-[800px] overflow-hidden rounded-xl bg-white dark:bg-[#151c2b] shadow-2xl border border-slate-200 dark:border-slate-800">
        
        {/* Left Side: Visual/Illustration */}
        <div className="hidden lg:flex w-1/2 relative bg-primary/10 items-center justify-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background-light/10 dark:from-background-dark/10 to-transparent"></div>
          
          {/* Illustration Container */}
          <div className="relative w-full h-full flex items-center justify-center p-12">
            <div 
              className="w-full h-full bg-contain bg-center bg-no-repeat transform scale-90 hover:scale-95 transition-transform duration-700 ease-in-out" 
              data-alt="Digital neural network nodes connecting in blue space" 
              style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}
            ></div>
            
            {/* Overlay Graphic for 'Magnifying Glass' Effect (Simulated with CSS) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-primary/30 backdrop-blur-sm bg-white/5 shadow-[0_0_40px_rgba(19,91,236,0.2)] flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-6xl opacity-80">search_check</span>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between p-8 md:p-12 lg:p-16 relative">
          {/* Top Navigation / Branding */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl">shield_lock</span>
              </div>
              <span className="font-bold text-lg tracking-tight">SecureNet AI</span>
            </div>
            <button onClick={onComplete} className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Skip</button>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col gap-6 mt-12 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 self-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">Real-time Analysis</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Welcome to the Future of <span className="text-primary">Web Security</span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              Our advanced Natural Language Processing engine works silently in the background. It analyzes website content in real-time to protect you from sophisticated phishing attacks before they happen.
            </p>

            {/* Feature Highlights (Mini) */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-primary mt-0.5">psychology</span>
                <div>
                  <p className="font-bold text-sm">Smart NLP</p>
                  <p className="text-xs text-slate-500">Reads context like a human</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-primary mt-0.5">bolt</span>
                <div>
                  <p className="font-bold text-sm">Zero Latency</p>
                  <p className="text-xs text-slate-500">Instant threat detection</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Area */}
          <div className="flex flex-col gap-8">
            {/* Progress Indicators */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <div className="h-2 w-8 rounded-full bg-primary transition-all duration-300"></div>
                <div className="h-2 w-2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                <div className="h-2 w-2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
              </div>
              <span className="text-sm font-medium text-slate-400">Step 1 of 3</span>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={() => setStep(2)}
                className="group flex-1 h-14 bg-primary hover:bg-blue-600 text-white rounded-xl font-bold text-base transition-all shadow-[0_4px_14px_0_rgba(19,91,236,0.39)] hover:shadow-[0_6px_20px_rgba(19,91,236,0.23)] flex items-center justify-center gap-2"
              >
                <span>Comenzar</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-xl">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
