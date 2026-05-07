import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Outlet, NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { usePreferences } from '../contexts/PreferencesContext';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children?: React.ReactNode;
  onLogout?: () => void;
}

export default function Layout({ children, onLogout }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const { theme, setTheme, language, setLanguage } = usePreferences();
  
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showToolsMenu, setShowToolsMenu] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setShowToolsMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      if (onLogout) onLogout();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { id: 'dashboard', path: '/panel', label: language === 'en' ? 'SOC Board' : 'Panel SOC', icon: 'dashboard' },
    { id: 'scanner', path: '/escaner', label: language === 'en' ? 'AI Scanner' : 'Escáner IA', icon: 'document_scanner' },
    { id: 'history', path: '/informes', label: language === 'en' ? 'Telemetry' : 'Telemetría', icon: 'history' },
  ];

  const toolItems = [
    { id: 'playbooks', path: '/playbooks', label: language === 'en' ? 'SOAR Playbooks' : 'Playbooks SOAR', icon: 'account_tree' },
    { id: 'ai-analysis', path: '/analisis-ia', label: language === 'en' ? 'AI Threat Analysis' : 'Análisis de Amenazas IA', icon: 'psychology' },
    { id: 'safelist', path: '/sitios-confiables', label: language === 'en' ? 'Trusted Sites' : 'Sitios Confiables', icon: 'verified_user' },
    { id: 'threat-prediction', path: '/prediccion-amenazas', label: language === 'en' ? 'Threat Prediction' : 'Predicción Amenazas', icon: 'online_prediction' },
    { id: 'global-status', path: '/estado-global', label: language === 'en' ? 'Global AI Status' : 'Estado Global IA', icon: 'public' },
    { id: 'model-accuracy', path: '/precision-modelo', label: language === 'en' ? 'Model Accuracy' : 'Precisión del Modelo', icon: 'model_training' },
    { id: 'soc-wall', path: '/muro-soc', label: language === 'en' ? 'SOC Wall' : 'Muro SOC', icon: 'monitor_heart' },
    { id: 'command-center', path: '/command-center', label: language === 'en' ? 'Command Center' : 'Centro de Comando', icon: 'public' },
    { id: 'executive-dashboard', path: '/panel-ejecutivo', label: language === 'en' ? 'Executive Dashboard' : 'Panel Ejecutivo', icon: 'query_stats' },
    { id: 'data-topology', path: '/topologia-datos', label: language === 'en' ? 'Data Topology' : 'Topología de Datos', icon: 'schema' },
    { id: 'forensic-sandbox', path: '/sandbox-forense', label: language === 'en' ? 'Forensic Sandbox' : 'Sandbox Forense', icon: 'science' },
    { id: 'threat-intel', path: '/inteligencia-amenazas', label: language === 'en' ? 'Threat Intel' : 'Inteligencia de Amenazas', icon: 'radar' },
    { id: 'war-room', path: '/war-room', label: language === 'en' ? 'War Room' : 'Sala de Guerra', icon: 'meeting_room' },
    { id: 'quantum-shield', path: '/quantum-shield', label: language === 'en' ? 'Quantum Shield' : 'Escudo Cuántico', icon: 'security' },
    { id: 'soar-dashboard', path: '/soar-dashboard', label: language === 'en' ? 'SOAR Dashboard' : 'Panel SOAR', icon: 'auto_awesome' },
    { id: 'settings', path: '/ajustes', label: language === 'en' ? 'Settings' : 'Configuración', icon: 'settings' },
  ];

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden bg-[#0a0d14] text-slate-100 font-display">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between border-b border-white/5 px-4 md:px-8 py-3 bg-[#0F1423]/80 backdrop-blur-xl z-50 shrink-0 shadow-lg relative">
        {/* Glow effect at the bottom of the header */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

        <div className="flex items-center gap-10">
          {/* Logo */}
          <NavLink to='/panel' className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-400 rounded-xl size-10 shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)]">
              <span className="material-symbols-outlined text-[24px]">security</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <h1 className="text-white text-base font-bold leading-tight tracking-wide">AI Shield</h1>
              <p className="text-purple-400 text-[9px] font-bold leading-tight uppercase tracking-[0.2em]">Quantum Core</p>
            </div>
          </NavLink>

          {/* Main Nav Links */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (currentPath === '/' && item.id === 'dashboard');
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold tracking-wide transition-all ${
                    isActive 
                      ? 'bg-[#151B2B] text-purple-400 border border-purple-500/30 shadow-[0_0_15px_-5px_rgba(168,85,247,0.3)]' 
                      : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[18px] ${isActive ? 'filled-icon' : ''}`}>
                    {item.icon}
                  </span>
                  {item.label}
                </NavLink>
              );
            })}

            {/* Tools Dropdown */}
            <div className="relative ml-2" ref={toolsRef}>
              <button
                onClick={() => setShowToolsMenu(!showToolsMenu)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold tracking-wide transition-all ${
                  showToolsMenu || toolItems.some(item => currentPath === item.path)
                    ? 'bg-[#151B2B] text-blue-400 border border-blue-500/30 shadow-[0_0_15px_-5px_rgba(59,130,246,0.3)]'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">apps</span>
                {language === 'en' ? 'Core Subsystems' : 'Subsistemas'}
                <span className="material-symbols-outlined text-[16px] transition-transform duration-300" style={{ transform: showToolsMenu ? 'rotate(180deg)' : 'rotate(0deg)' }}>arrow_drop_down</span>
              </button>

              <AnimatePresence>
                {showToolsMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+8px)] left-0 w-64 bg-[#0F1423]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden"
                  >
                    <div className="grid grid-cols-1 max-h-[60vh] overflow-y-auto custom-scrollbar p-1">
                      {toolItems.map((item) => (
                        <NavLink
                          key={item.id}
                          to={item.path}
                          onClick={() => setShowToolsMenu(false)}
                          className={({ isActive }) => `flex items-center gap-3 px-4 py-2.5 text-xs font-bold transition-all rounded-lg m-1 ${
                            isActive ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'text-slate-300 hover:bg-white/5 hover:text-white border border-transparent'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          <button 
            onClick={toggleTheme}
            aria-label="Toggle theme" 
            className="size-10 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all bg-[#151B2B]"
          >
            <span className="material-symbols-outlined text-[20px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button 
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            aria-label="Toggle language" 
            className="size-10 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all font-bold text-[10px] uppercase tracking-widest bg-[#151B2B]"
          >
            {language}
          </button>

          <div className="h-6 w-px bg-white/10 mx-1 hidden sm:block"></div>

          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 hover:opacity-80 transition-all rounded-full p-1 border border-white/10 hover:border-purple-500/50 bg-[#151B2B]"
            >
              <div 
                className="size-8 rounded-full bg-cover bg-center border border-white/5 shadow-inner" 
                style={{backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")`}}
              />
            </button>

            <AnimatePresence>
              {showProfileMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[calc(100%+8px)] right-0 w-64 bg-[#0F1423]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden"
                >
                  <div className="px-5 py-4 border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                    <p className="text-sm font-bold text-white truncate">{auth.currentUser?.displayName || 'SOC Operator'}</p>
                    <p className="text-[10px] font-mono text-purple-400 truncate mt-1">ID: {auth.currentUser?.uid || 'GUEST'}</p>
                  </div>
                  <div className="p-2 space-y-1">
                    <NavLink to="/ajustes" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-bold text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[18px]">manage_accounts</span>
                      {language === 'en' ? 'System Configuration' : 'Configuración de Sistema'}
                    </NavLink>
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-bold text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">logout</span>
                      {language === 'en' ? 'Terminate Session' : 'Terminar Sesión'}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-transparent relative custom-scrollbar">
        {/* Ambient Glows */}
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
        <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
        
        <div className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 relative z-10">
          {children || <Outlet />}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0F1423]/90 backdrop-blur-xl border-t border-white/5 flex justify-around items-center h-16 px-2 z-50 pb-safe shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.5)]">
        {[...navItems, { id: 'tools', path: '/playbooks', label: 'SOAR', icon: 'account_tree' }].map((item) => {
          const isActive = currentPath === item.path || (currentPath === '/' && item.id === 'dashboard');
          return (
            <NavLink 
              key={item.id}
              to={item.path}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                isActive ? 'text-purple-400' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <div className={`flex flex-col items-center p-1 rounded-lg ${isActive ? 'bg-purple-500/10' : ''}`}>
                <span className={`material-symbols-outlined text-[20px] ${isActive ? 'filled-icon' : ''}`}>
                  {item.icon}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider truncate w-full text-center mt-1">
                  {item.label}
                </span>
              </div>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
