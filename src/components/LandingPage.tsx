import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

interface LandingPageProps {
  onBack?: () => void;
  onSignIn?: () => void;
}

export default function LandingPage({ onBack, onSignIn }: LandingPageProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0B0F19] text-slate-100 font-sans min-h-screen selection:bg-blue-500/30 overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-900/10 rounded-full blur-[150px] mix-blend-screen"></div>
        
        {/* Animated Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F19]/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={onBack}>
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-400/50 transition-colors">
                <span className="material-symbols-outlined text-blue-400 text-xl">shield_lock</span>
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">AI<span className="font-light text-blue-400">Shield</span></span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#features">Tecnología</a>
              <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#solutions">SIEM & SOAR</a>
              <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#architecture">Arquitectura</a>
            </div>
            
            <div className="flex items-center gap-4">
              <button onClick={onSignIn} className="hidden md:block text-sm font-bold text-slate-300 hover:text-white transition-colors">Developer Portal</button>
              <button 
                onClick={onSignIn} 
                className="relative overflow-hidden bg-white hover:bg-slate-100 text-[#0B0F19] px-6 py-2.5 rounded-lg text-sm font-bold transition-all hover:scale-105"
              >
                <span>Acceso al SOC</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="pt-40 pb-20 lg:pt-52 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 uppercase tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Quantum Core Engine v5.2 Activo
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.05]"
          >
            Protección de la capa <br className="hidden md:block" /> humana con <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Inteligencia Artificial.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl leading-relaxed"
          >
            AI Shield unifica el análisis de lenguaje natural (NLP) comportamental con capacidades avanzadas de SIEM y SOAR. Detectamos ingeniería social de día cero antes de que alcance la bandeja de entrada.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
          >
            <button onClick={onSignIn} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 uppercase tracking-wide">
              Entrar al Panel de Control
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
            <a href="#how-it-works" className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white border border-white/20 px-8 py-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 uppercase tracking-wide">
              Conoce la Arquitectura
            </a>
          </motion.div>
        </section>

        {/* Floating Dashboard Preview */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 mb-32 relative"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
          <div className="relative rounded-2xl border border-white/10 bg-[#0F1423] shadow-2xl overflow-hidden aspect-[16/9]">
            {/* Header Mock */}
            <div className="h-12 bg-[#151B2B] border-b border-white/5 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="ml-4 px-3 py-1 rounded bg-[#0B0F19] text-xs text-slate-500 font-mono flex items-center gap-2 border border-white/5">
                <span className="material-symbols-outlined text-[14px]">lock</span>
                ai-shield-core.local/soc
              </div>
            </div>
            {/* Image generated dynamically to act as realistic app preview */}
            <img src="https://lh3.googleusercontent.com/aida/ADBb0uiELWDjP-klfJqGxXR2f1t1FI_iK2D7U6FppKf7pV91p8Ql5U6R3r-pO3c6DnrkPRCs581s7MgfHIX9m5IClKkdgX55wojik0fJqEDEAOyCnosJj9w_fZlmOeKb_Ctjwrrx25vKJJwzFYUEz1kyfbWyKUVanJ2psDSW4F7yXdFKuqCIbNF__FMVJ43T0qNV7QaAj25BouwykItkwVvzT64iNYQt_UVJYBhP0sNvDDA4eo6yJO19cQKrjLWwAtclVgB7V-mtyxek3g" alt="AI Shield Dashboard Analytics" className="w-full h-full object-cover opacity-80 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"></div>
          </div>
        </motion.section>

        {/* Feature Grid */}
        <section id="features" className="py-24 border-y border-white/5 bg-[#0F1423]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  icon: "psychology", 
                  title: "Modelos NLP Defensivos", 
                  desc: "Analizamos la intención semántica y psicológica (urgencia, coerción) en milisegundos, superando filtros basados en firmas."
                },
                { 
                  icon: "hub", 
                  title: "Arquitectura SOAR", 
                  desc: "Automatiza respuestas a incidentes, bloqueando IPs y dominios maliciosos a través de integraciones nativas con Cloudflare y firewalls."
                },
                { 
                  icon: "policy", 
                  title: "Certificadora Cuántica", 
                  desc: "Framework preparado para criptografía Post-Cuántica (PQC), garantizando la integridad de los registros de auditoría forense a futuro."
                }
              ].map((f, i) => (
                <div key={i} className="p-8 rounded-2xl border border-white/5 bg-[#151B2B] hover:border-blue-500/30 transition-colors group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">{f.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Architecture */}
        <section id="how-it-works" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">La anatomía de una plataforma Zero-Trust</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Diseñado para arquitecturas empresariales, AI Shield no es solo un filtro. Es un Security Operations Center completo, integrado vía APIs y modelado sobre algoritmos de aprendizaje profundo para contrarrestar ataques organizados.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4 text-sm font-medium">
                  <div className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-emerald-400">check_circle</span> Prevención Zero-Day
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-emerald-400">check_circle</span> Telemetría Global
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-emerald-400">check_circle</span> Sandboxing Forense
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-emerald-400">check_circle</span> Integración CI/CD
                  </div>
                </div>
              </div>
              <div className="flex-1 relative w-full h-[400px]">
                <div className="absolute inset-0 bg-blue-500/10 border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center p-8 backdrop-blur-md">
                   {/* Decorative Cyber Layout */}
                   <div className="w-full h-full border border-blue-500/20 rounded-2xl relative p-6 flex flex-col justify-between">
                     <div className="flex justify-between items-center border-b border-white/5 pb-4">
                       <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Threat Data Flow</span>
                       <div className="flex gap-1">
                          <span className="w-2 h-2 rounded bg-red-400 animate-pulse"></span>
                          <span className="w-2 h-2 rounded bg-blue-400"></span>
                       </div>
                     </div>
                     <div className="flex items-center justify-between mt-auto h-2/3">
                        <div className="p-4 bg-slate-800/50 rounded-lg border border-white/10 flex flex-col items-center">
                           <span className="material-symbols-outlined text-slate-400">mail</span>
                           <span className="text-[10px] mt-2 text-slate-500">Ingress</span>
                        </div>
                        <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                        <div className="p-6 bg-blue-900/20 rounded-full border border-blue-500/50 flex flex-col items-center shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
                           <span className="material-symbols-outlined text-blue-400 text-3xl">psychology</span>
                        </div>
                        <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                        <div className="p-4 bg-slate-800/50 rounded-lg border border-red-500/30 flex flex-col items-center">
                           <span className="material-symbols-outlined text-red-500">gpp_bad</span>
                           <span className="text-[10px] mt-2 text-red-400">Quarantine</span>
                        </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 border-t border-white/5 relative">
          <div className="absolute inset-0 bg-blue-600/5"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Listo para revolucionar tu infraestructura de seguridad?</h2>
            <p className="text-slate-400 text-lg mb-10">
              Despliega la plataforma en minutos y obtén visibilidad instantánea 
              de las amenazas dirigidas a tu factor humano.
            </p>
            <button onClick={onSignIn} className="bg-white text-slate-900 hover:bg-slate-200 px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-white/10 uppercase tracking-wide">
              Iniciar Trial Gratuito
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[#080B12] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-white text-2xl">shield_lock</span>
                <span className="font-bold text-xl tracking-tight text-white">AI<span className="font-light text-slate-400">Shield</span></span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
                Seguridad de última generación para proteger empresas globales frente al riesgo humano mediante Inteligencia Artificial defensiva.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Plataforma</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link className="hover:text-white transition-colors" to='/panel'>Playbooks (SOAR)</Link></li>
                <li><Link className="hover:text-white transition-colors" to='/panel'>Quantum Core</Link></li>
                <li><Link className="hover:text-white transition-colors" to='/panel'>Auditoría Forense</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Desarrolladores</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link className="hover:text-white transition-colors" to="/apidocumentation">API Docs</Link></li>
                <li><Link className="hover:text-white transition-colors" to='/panel'>Webhooks Ingest</Link></li>
                <li><Link className="hover:text-white transition-colors" to='/panel'>Status</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link className="hover:text-white transition-colors" to="/privacy-compliance">Privacidad</Link></li>
                <li><Link className="hover:text-white transition-colors" to="/terms-of-service">Términos</Link></li>
                <li><Link className="hover:text-white transition-colors" to="/policy-manager">Políticas</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600">© 2026 Jonathan Jimenez Escobar. Proyecto de Grado - Ingeniería de Sistemas.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
