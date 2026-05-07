import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DeliveryMasterDocumentProps {
  onBack?: () => void;
}

export default function DeliveryMasterDocument({ onBack }: DeliveryMasterDocumentProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary">
      {/* Top Navigation App Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-slate-950/80 backdrop-blur-xl rounded-none border-b border-white/5 shadow-[0_10px_30px_rgba(0,242,255,0.03)] tonal transitions via slate-900 surfaces">
        <div className="flex items-center gap-8 h-full">
          <span className="font-mono font-bold text-cyan-400 tracking-widest text-lg">QUANTUM SECURITY ARCHITECTURE</span>
          <div className="hidden md:flex h-full font-['Space_Grotesk'] tracking-tight">
            <a className="text-slate-500 hover:text-slate-300 hover:bg-cyan-400/10 transition-all duration-300 scale-95 active:opacity-80 flex items-center px-4 h-full border-b-2 border-transparent" href="#">Network</a>
            <a className="text-slate-500 hover:text-slate-300 hover:bg-cyan-400/10 transition-all duration-300 scale-95 active:opacity-80 flex items-center px-4 h-full border-b-2 border-transparent" href="#">Algorithms</a>
            <a className="text-slate-500 hover:text-slate-300 hover:bg-cyan-400/10 transition-all duration-300 scale-95 active:opacity-80 flex items-center px-4 h-full border-b-2 border-transparent" href="#">Vault</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <button className="text-slate-500 hover:text-cyan-400 transition-colors"><span className="material-symbols-outlined" data-icon="security">security</span></button>
            <button className="text-slate-500 hover:text-cyan-400 transition-colors"><span className="material-symbols-outlined" data-icon="terminal">terminal</span></button>
            <button onClick={() => onBack ? onBack() : navigate(-1)} className="text-slate-500 hover:text-cyan-400 transition-colors"><span className="material-symbols-outlined">close</span></button>
          </div>
          <button className="bg-cyan-400/10 text-cyan-400 font-mono text-xs px-4 py-2 border border-cyan-400/30 hover:bg-cyan-400 hover:text-slate-950 transition-all">SYSTEM AUTHORIZE</button>
          <img alt="Jonathan Jimenez Escobar - Scientific Lead" className="w-8 h-8 rounded-none border border-white/10" src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg" />
        </div>
      </nav>

      {/* Main Layout Container */}
      <div className="flex-1 mt-16 flex flex-col md:flex-row max-w-[1920px] mx-auto w-full">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-72 bg-surface-container-low border-r border-outline-variant/20 p-6 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
          <div className="mb-10">
            <h2 className="font-mono text-xs uppercase tracking-[0.1em] text-on-surface-variant mb-4">Project Metadata</h2>
            <div className="space-y-4 bg-surface-container-high p-4 border-l-2 border-primary">
              <div>
                <span className="block font-mono text-[10px] text-on-surface-variant uppercase">Version</span>
                <span className="font-mono text-sm text-primary">2026.FINAL</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-on-surface-variant uppercase">Status</span>
                <span className="font-mono text-sm text-tertiary">VALIDATED FOR JURY</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-on-surface-variant uppercase">Total Interfaces</span>
                <span className="font-mono text-sm text-on-surface">50+</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-on-surface-variant uppercase">Institution</span>
                <span className="font-mono text-sm text-on-surface">Ingeniería en Sistemas</span>
              </div>
            </div>
          </div>
          <div className="mt-auto space-y-4">
            <button className="w-full bg-primary-container text-on-primary-container font-mono text-xs py-3 uppercase hover:shadow-[0_0_15px_rgba(153,247,255,0.3)] transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">download</span>
              Download PDF
            </button>
            <button className="w-full bg-transparent border border-outline-variant/30 text-primary font-mono text-xs py-3 uppercase hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">inventory_2</span>
              View Source Inventory
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-12 lg:p-16 overflow-y-auto relative">
          {/* Decorative Particles */}
          <div className="absolute left-8 top-0 bottom-0 flex gap-4 opacity-30 pointer-events-none">
            <div className="w-[1px] bg-secondary-dim opacity-50 h-full"></div>
            <div className="w-[1px] bg-secondary-dim opacity-50 h-3/4 mt-32"></div>
            <div className="w-[1px] bg-secondary-dim opacity-50 h-1/2 mt-64"></div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            {/* Header */}
            <header className="mb-16 border-b border-outline-variant/20 pb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary/10 text-primary font-mono text-xs px-2 py-1 border border-primary/30">DOC_ID: 98309725</span>
                <span className="text-on-surface-variant font-mono text-xs">SYS_TIME: <span>10:42:01 UTC</span></span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-on-surface leading-tight mb-6">
                 AI SHIELD 2026 <br/>
                <span className="bg-gradient-to-r from-primary to-primary-fixed bg-clip-text text-transparent">DOCUMENTO MAESTRO DE ENTREGA</span>
              </h1>
              <div className="flex items-center gap-4 bg-surface-container-highest p-4 w-max pr-8">
                <img alt="Jonathan Jimenez Escobar" className="w-12 h-12 contrast-125 border border-primary/50" src="https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"/>
                <div>
                  <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">Lead Architect & Expert</p>
                  <p className="font-headline text-lg text-primary">Jonathan Jimenez Escobar</p>
                </div>
              </div>
            </header>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Vision */}
              <div className="bg-surface-container-low p-8 border-t border-primary/30 shadow-[0_20px_40px_rgba(0,242,255,0.06)] group hover:bg-surface-container transition-colors duration-500">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-headline text-2xl text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">visibility</span>
                    Project Vision
                  </h3>
                  <span className="font-mono text-xs text-secondary-dim opacity-50 group-hover:opacity-100 transition-opacity">SEC_01</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  El proyecto establece un marco arquitectónico avanzado para la ciberseguridad post-cuántica, integrando modelos de Inteligencia Artificial en tiempo real para la detección proactiva de amenazas.
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Diseñado para operar en entornos de alta entropía y redes de misión crítica, AI Shield v2026 representa un cambio de paradigma desde la respuesta reactiva hacia la mitigación predictiva orquestada.
                </p>
              </div>

              {/* Technical Pillars */}
              <div className="bg-surface-container-low p-8 border-t border-secondary/30 shadow-[0_20px_40px_rgba(0,242,255,0.06)] group hover:bg-surface-container transition-colors duration-500">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-headline text-2xl text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">memory</span>
                    Technical Pillars
                  </h3>
                  <span className="font-mono text-xs text-secondary-dim opacity-50 group-hover:opacity-100 transition-opacity">SEC_02</span>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">check_box_outline_blank</span>
                    <div>
                      <strong className="font-mono text-xs text-on-surface block mb-1">NLP Intent Detection</strong>
                      <span className="text-sm text-on-surface-variant">Análisis semántico profundo de payloads anómalos.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">check_box_outline_blank</span>
                    <div>
                      <strong className="font-mono text-xs text-on-surface block mb-1">SOAR Orchestration</strong>
                      <span className="text-sm text-on-surface-variant">Automatización de flujos de respuesta a incidentes.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">check_box_outline_blank</span>
                    <div>
                      <strong className="font-mono text-xs text-on-surface block mb-1">PQC Cryptography</strong>
                      <span className="text-sm text-on-surface-variant">Implementación de algoritmos resistentes a ataques cuánticos.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">check_box_outline_blank</span>
                    <div>
                      <strong className="font-mono text-xs text-on-surface block mb-1">Quantum Intelligence</strong>
                      <span className="text-sm text-on-surface-variant">Modelos predictivos basados en heurísticas cuánticas.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Prototype Component Inventory */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
                <h2 className="font-headline text-3xl text-on-surface px-4">Prototype Component Inventory</h2>
                <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {/* Module Card 1 */}
                <div className="bg-surface-container-low hover:bg-surface-container-high transition-colors p-6 flex flex-col group">
                  <span className="font-mono text-[10px] text-primary mb-2 opacity-70 group-hover:opacity-100">MOD_01</span>
                  <h4 className="font-headline text-lg mb-2">User Layer</h4>
                  <p className="text-xs text-on-surface-variant mt-auto">Interfaces de visualización y control para operadores SOC nivel 1 y 2.</p>
                </div>
                {/* Module Card 2 */}
                <div className="bg-surface-container-low hover:bg-surface-container-high transition-colors p-6 flex flex-col group">
                  <span className="font-mono text-[10px] text-primary mb-2 opacity-70 group-hover:opacity-100">MOD_02</span>
                  <h4 className="font-headline text-lg mb-2">SOC Core</h4>
                  <p className="text-xs text-on-surface-variant mt-auto">Motor central de agregación de logs y correlación de eventos (SIEM).</p>
                </div>
                {/* Module Card 3 */}
                <div className="bg-surface-container-low hover:bg-surface-container-high transition-colors p-6 flex flex-col group">
                  <span className="font-mono text-[10px] text-primary mb-2 opacity-70 group-hover:opacity-100">MOD_03</span>
                  <h4 className="font-headline text-lg mb-2">SOAR Module</h4>
                  <p className="text-xs text-on-surface-variant mt-auto">Playbooks automatizados y ejecución de mitigaciones activas.</p>
                </div>
                {/* Module Card 4 */}
                <div className="bg-surface-container-low hover:bg-surface-container-high transition-colors p-6 flex flex-col group md:col-span-2">
                  <span className="font-mono text-[10px] text-secondary mb-2 opacity-70 group-hover:opacity-100">MOD_04_CRITICAL</span>
                  <h4 className="font-headline text-lg mb-2">Quantum Infrastructure</h4>
                  <p className="text-xs text-on-surface-variant mt-auto">Entorno de ejecución aislado para el motor de criptografía post-cuántica. Alojado en clúster dedicado.</p>
                </div>
                {/* Module Card 5 */}
                <div className="bg-surface-container-low hover:bg-surface-container-high transition-colors p-6 flex flex-col group">
                  <span className="font-mono text-[10px] text-primary mb-2 opacity-70 group-hover:opacity-100">MOD_05</span>
                  <h4 className="font-headline text-lg mb-2">SaaS Ecosystem</h4>
                  <p className="text-xs text-on-surface-variant mt-auto">Integración con APIs externas y threat intelligence feeds.</p>
                </div>
              </div>
            </div>

            {/* Sustentation Guide */}
            <div className="bg-surface-container-highest p-8 border-l-4 border-tertiary mb-16 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
                <img alt="Abstract tech" className="w-96 h-96" src="https://lh3.googleusercontent.com/aida/ADBb0uhfVeMr7Xm6HfLOqJXuZyxdH6OOUZs6tMKlV_wa0gntgQi8g54izGMqzRbCa-T7I0wlxD33obbSx7SCsrG0svzSM-mzcPigBPL4yiEstajx0Bip_rFS74fUumLijBsk42B4SIcoGJepOEw2Jyiz6OOAGd-QxnHVLIhDBQ1cMd9v-KpDROn_mGkyNuQYLCRsrvD2cxkwFAhGR-C4rXfuJlMKufby43IlB74SApbKQtR5LKvc0ni3woscMrQoU0CC5VW08lT1NO89uw"/>
              </div>
              
              <h3 className="font-headline text-2xl text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary">gavel</span>
                Sustentation Guide for the Jury
              </h3>
              
              <p className="text-sm text-on-surface-variant mb-6 max-w-3xl">
                Para la evaluación técnica, los siguientes módulos han sido designados como puntos focales de revisión, demostrando la integración completa de los pilares de diseño.
              </p>
              
              <div className="flex flex-wrap gap-4 font-mono text-xs">
                <div className="flex items-center gap-2 bg-surface p-3 border border-outline-variant/20 hover:border-tertiary/50 transition-colors cursor-crosshair">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">code</span>
                  <span>SCREEN_64: Threat Matrix</span>
                </div>
                <div className="flex items-center gap-2 bg-surface p-3 border border-outline-variant/20 hover:border-tertiary/50 transition-colors cursor-crosshair">
                  <span class="material-symbols-outlined text-[16px] text-tertiary">code</span>
                  <span>SCREEN_89: Quantum Key Dist.</span>
                </div>
                <div className="flex items-center gap-2 bg-surface p-3 border border-outline-variant/20 hover:border-tertiary/50 transition-colors cursor-crosshair">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">code</span>
                  <span>SCREEN_204: SOAR Playbook</span>
                </div>
                <div className="flex items-center gap-2 bg-surface p-3 border border-outline-variant/20 hover:border-tertiary/50 transition-colors cursor-crosshair">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">code</span>
                  <span>SCREEN_158: NLP Analysis</span>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-24 pt-8 border-t border-outline-variant/10 text-center relative z-10">
            <p className="font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
              © 2026 AI Shield - Jonathan Jimenez Escobar. Todos los derechos reservados.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
