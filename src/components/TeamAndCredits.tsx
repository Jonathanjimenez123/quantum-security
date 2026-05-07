import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, Code, GraduationCap } from 'lucide-react';

interface TeamAndCreditsProps {
  onBack?: () => void;
}

export default function TeamAndCredits({ onBack }: TeamAndCreditsProps) {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-slate-50 dark:bg-[#111621] text-slate-900 dark:text-slate-100 font-sans">
      <div className="layout-container flex h-full grow flex-col">
        {/* Navbar */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#292e38] bg-slate-50/95 dark:bg-[#111621]/95 backdrop-blur-sm px-6 py-4 md:px-10">
          <div 
            className="flex items-center gap-4 text-slate-900 dark:text-white cursor-pointer"
            onClick={onBack}
          >
            <div className="size-8 text-blue-600 flex items-center justify-center">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">AI Shield</h2>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-600 transition-colors" to='/panel'>Home</Link>
              <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-600 transition-colors" to='/inicio'>Features</Link>
              <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-600 transition-colors" to='/precios'>Pricing</Link>
              <Link className="text-blue-600 text-sm font-bold leading-normal" to='/panel'>Team</Link>
              <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-600 transition-colors" to='/panel'>Contact</Link>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Install Extension</span>
            </button>
          </div>
          <button className="md:hidden text-slate-900 dark:text-white">
            <Menu className="w-6 h-6" />
          </button>
        </header>
        
        <main className="flex-1">
          {/* Hero Section */}
          <div className="relative w-full">
            <div 
              className="w-full flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-8 text-center relative" 
              style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#111621]/90 via-[#111621]/80 to-[#111621]"></div>
              <div className="relative z-10 flex flex-col gap-4 max-w-4xl">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                  Building a safer web through Artificial Intelligence
                </h1>
                <p className="text-slate-200 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
                  Meet the minds behind AI Shield dedicated to real-time anti-phishing protection and securing your digital footprint.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-base font-bold tracking-[0.015em]">
                    Join Our Mission
                  </button>
                  <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 transition-colors text-white text-base font-bold tracking-[0.015em] backdrop-blur-sm border border-white/10">
                    View Open Roles
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Team Grid Section */}
          <div className="flex justify-center w-full bg-slate-50 dark:bg-[#111621] py-16 px-4 md:px-10">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
              <div className="flex flex-col gap-2 mb-10 px-4">
                <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Core Team</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">The experts engineering the future of browser security.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {/* Team Member 1 */}
                <div className="group flex flex-col gap-0 bg-white dark:bg-[#1a202c] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-600/50 dark:hover:border-blue-600/50 transition-all shadow-sm hover:shadow-md">
                  <div 
                    className="w-full aspect-[4/5] bg-center bg-cover relative overflow-hidden" 
                    style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                      <Link className="text-white hover:text-blue-400 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md" to='/panel'>
                        <span className="text-sm font-bold">Connect on LinkedIn</span>
                      </Link>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-1">
                    <p className="text-blue-600 text-xs font-bold uppercase tracking-wider">Founder & AI Architect</p>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-normal">Alex Mercer</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-relaxed mt-1">Leading AI integration and architecture strategy with 15+ years in ML.</p>
                  </div>
                </div>
                
                {/* Team Member 2 */}
                <div className="group flex flex-col gap-0 bg-white dark:bg-[#1a202c] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-600/50 dark:hover:border-blue-600/50 transition-all shadow-sm hover:shadow-md">
                  <div 
                    className="w-full aspect-[4/5] bg-center bg-cover relative overflow-hidden" 
                    style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                      <Link className="text-white hover:text-blue-400 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md" to='/panel'>
                        <span className="text-sm font-bold">Connect on LinkedIn</span>
                      </Link>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-1">
                    <p className="text-blue-600 text-xs font-bold uppercase tracking-wider">Lead Cybersecurity</p>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-normal">Sarah Chen</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-relaxed mt-1">Expert in threat detection and network security protocols.</p>
                  </div>
                </div>
                
                {/* Team Member 3 */}
                <div className="group flex flex-col gap-0 bg-white dark:bg-[#1a202c] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-600/50 dark:hover:border-blue-600/50 transition-all shadow-sm hover:shadow-md">
                  <div 
                    className="w-full aspect-[4/5] bg-center bg-cover relative overflow-hidden" 
                    style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                      <Link className="text-white hover:text-blue-400 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md" to='/panel'>
                        <span className="text-sm font-bold">Connect on LinkedIn</span>
                      </Link>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-1">
                    <p className="text-blue-600 text-xs font-bold uppercase tracking-wider">Head of UX/UI Design</p>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-normal">Jordan Rivera</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-relaxed mt-1">Crafting intuitive and secure user experiences that build trust.</p>
                  </div>
                </div>
                
                {/* Team Member 4 */}
                <div className="group flex flex-col gap-0 bg-white dark:bg-[#1a202c] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-600/50 dark:hover:border-blue-600/50 transition-all shadow-sm hover:shadow-md">
                  <div 
                    className="w-full aspect-[4/5] bg-center bg-cover relative overflow-hidden" 
                    style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                      <Link className="text-white hover:text-blue-400 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md" to='/panel'>
                        <span className="text-sm font-bold">Connect on LinkedIn</span>
                      </Link>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-1">
                    <p className="text-blue-600 text-xs font-bold uppercase tracking-wider">Backend Specialist</p>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-normal">Emily Zhang</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-relaxed mt-1">Ensuring robust server-side performance and data integrity.</p>
                  </div>
                </div>
              </div>

              {/* Special Thanks Section */}
              <div className="mt-16 px-4">
                <h3 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-6">Special Thanks & Advisors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Advisors List */}
                  <div className="bg-slate-100 dark:bg-[#1a202c] rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-4">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                      <h4 className="text-slate-900 dark:text-white text-lg font-bold">Scientific Advisors</h4>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                        <div 
                          className="h-10 w-10 rounded-full bg-slate-300 dark:bg-slate-700 bg-center bg-cover" 
                          style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}
                        ></div>
                        <div>
                          <p className="text-slate-900 dark:text-white font-medium">Dr. Alan Roberts</p>
                          <p className="text-slate-500 dark:text-slate-400 text-xs">Professor of CS, Stanford</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4">
                        <div 
                          className="h-10 w-10 rounded-full bg-slate-300 dark:bg-slate-700 bg-center bg-cover" 
                          style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}
                        ></div>
                        <div>
                          <p className="text-slate-900 dark:text-white font-medium">Maria Garcia</p>
                          <p className="text-slate-500 dark:text-slate-400 text-xs">Former CISO, TechGlobal</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Open Source Credits */}
                  <div className="bg-slate-100 dark:bg-[#1a202c] rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-4">
                      <Code className="w-6 h-6 text-blue-600" />
                      <h4 className="text-slate-900 dark:text-white text-lg font-bold">Open Source Contributions</h4>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">AI Shield is built on the shoulders of giants. We proudly support and contribute to:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700">TensorFlow JS</span>
                      <span className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700">React</span>
                      <span className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700">Tailwind CSS</span>
                      <span className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700">Vite</span>
                      <span className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700">PostgreSQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-white dark:bg-[#0b0e14] py-12 px-10 border-t border-slate-200 dark:border-[#292e38]">
          <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                <Shield className="w-6 h-6 text-blue-600" />
                <span className="text-lg font-bold">AI Shield</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">Protecting your digital life with advanced AI-driven security. Real-time protection for the modern web.</p>
            </div>
            <div className="flex gap-16">
              <div className="flex flex-col gap-4">
                <h4 className="text-slate-900 dark:text-white font-bold text-sm">Product</h4>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-600 text-sm" to='/inicio'>Features</Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-600 text-sm" to='/panel'>Security</Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-600 text-sm" to='/precios'>Pricing</Link>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-slate-900 dark:text-white font-bold text-sm">Company</h4>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-600 text-sm" to='/panel'>About Us</Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-600 text-sm" to='/panel'>Careers</Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-600 text-sm" to='/panel'>Contact</Link>
              </div>
            </div>
          </div>
          <div className="max-w-[960px] mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-[#292e38] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <p>creada en 2026 Jonathan Jimenez Escobar</p>
            <div className="flex gap-6">
              <Link className="hover:text-slate-900 dark:hover:text-white" to="/privacy-compliance">Privacy Policy</Link>
              <Link className="hover:text-slate-900 dark:hover:text-white" to="/terms-of-service">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
