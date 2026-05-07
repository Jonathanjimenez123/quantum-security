import React, { useState, useEffect } from 'react';

interface InteractiveTrainingModuleProps {
  onBack: () => void;
}

interface Signal {
  id: string;
  type: string;
  text: string;
  aiExplanation: string;
  points: number;
}

interface Scenario {
  id: number;
  title: string;
  type: 'email' | 'website' | 'sms' | 'whatsapp';
  description: string;
  signals: Signal[];
  renderContent: (
    onDiscover: (signalId: string) => void,
    discovered: string[],
    showHints: boolean
  ) => React.ReactNode;
}

const scenarios: Scenario[] = [
  {
    id: 1,
    title: 'Alerta de Seguridad Urgente',
    type: 'email',
    description: 'Revisa este correo electrónico y haz clic en los elementos que consideres sospechosos.',
    signals: [
      {
        id: 's1-sender',
        type: 'Remitente Falso',
        text: 'security@paypal-support-update.com',
        aiExplanation: 'El dominio "paypal-support-update.com" es un intento de Typosquatting. Los correos oficiales de PayPal siempre provienen de "@paypal.com".',
        points: 100,
      },
      {
        id: 's1-urgency',
        type: 'Sentido de Urgencia',
        text: 'Su cuenta será suspendida en 24 horas',
        aiExplanation: 'Los atacantes usan un falso sentido de urgencia para forzarte a actuar rápidamente sin pensar o verificar la información.',
        points: 50,
      },
      {
        id: 's1-link',
        type: 'Enlace Malicioso',
        text: 'Verificar mi cuenta ahora',
        aiExplanation: 'El enlace real apunta a "http://bit.ly/sec-update-99", un acortador de URLs que oculta el destino real, una táctica común en phishing.',
        points: 100,
      }
    ],
    renderContent: (onDiscover, discovered, showHints) => {
      const isDiscovered = (id: string) => discovered.includes(id);
      const getClasses = (id: string) => {
        if (isDiscovered(id)) return 'bg-red-500/20 border-red-500 text-red-400 border-2 rounded px-1 cursor-default';
        if (showHints) return 'animate-pulse border-2 border-yellow-500/50 rounded px-1 cursor-pointer hover:bg-yellow-500/10';
        return 'cursor-pointer hover:bg-white/5 rounded px-1 border-2 border-transparent';
      };

      return (
        <div className="bg-white text-slate-900 rounded-lg shadow-xl overflow-hidden border border-slate-200">
          {/* Email Header */}
          <div className="border-b border-slate-200 p-4 bg-slate-50">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="text-sm text-slate-500">De:</div>
                <div 
                  className={`font-bold ${getClasses('s1-sender')}`}
                  onClick={() => !isDiscovered('s1-sender') && onDiscover('s1-sender')}
                >
                  PayPal Security &lt;security@paypal-support-update.com&gt;
                </div>
              </div>
              <div className="text-sm text-slate-400">10:42 AM</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Para:</div>
              <div className="text-sm">usuario@empresa.com</div>
            </div>
            <div className="mt-3 text-lg font-bold">
              ACCIÓN REQUERIDA: Actividad inusual detectada
            </div>
          </div>
          {/* Email Body */}
          <div className="p-6 space-y-4">
            <p>Estimado cliente,</p>
            <p>Hemos detectado múltiples intentos de inicio de sesión fallidos en su cuenta desde una ubicación no reconocida.</p>
            <p>
              Por motivos de seguridad,{' '}
              <span 
                className={`font-bold ${getClasses('s1-urgency')}`}
                onClick={() => !isDiscovered('s1-urgency') && onDiscover('s1-urgency')}
              >
                su cuenta será suspendida en 24 horas
              </span>{' '}
              si no confirma su identidad inmediatamente.
            </p>
            <div className="text-center pt-4 pb-2">
              <button 
                className={`bg-blue-600 text-white font-bold py-3 px-6 rounded-full ${getClasses('s1-link')}`}
                onClick={() => !isDiscovered('s1-link') && onDiscover('s1-link')}
                title="http://bit.ly/sec-update-99"
              >
                Verificar mi cuenta ahora
              </button>
            </div>
            <p>Gracias por su cooperación.</p>
            <p className="text-sm text-slate-500">El equipo de seguridad.</p>
          </div>
        </div>
      );
    }
  },
  {
    id: 2,
    title: 'Portal de Inicio de Sesión Falso',
    type: 'website',
    description: 'Analiza este sitio web corporativo simulado. Encuentra las señales de que es una página falsa.',
    signals: [
      {
        id: 's2-url',
        type: 'URL Sospechosa',
        text: 'http://login.microsoft-online-secure.net',
        aiExplanation: 'El dominio utiliza palabras clave confiables ("microsoft", "online", "secure") pero no es el dominio oficial (microsoft.com). Además, no usa HTTPS.',
        points: 100,
      },
      {
        id: 's2-typo',
        type: 'Errores Ortográficos',
        text: 'Inicie seción',
        aiExplanation: 'Los sitios de phishing a menudo contienen errores ortográficos o gramaticales ("seción" en lugar de "sesión") debido a traducciones automáticas o falta de revisión.',
        points: 50,
      }
    ],
    renderContent: (onDiscover, discovered, showHints) => {
      const isDiscovered = (id: string) => discovered.includes(id);
      const getClasses = (id: string) => {
        if (isDiscovered(id)) return 'bg-red-500/20 border-red-500 text-red-500 border-2 rounded px-1 cursor-default';
        if (showHints) return 'animate-pulse border-2 border-yellow-500/50 rounded px-1 cursor-pointer hover:bg-yellow-500/10';
        return 'cursor-pointer hover:bg-black/5 rounded px-1 border-2 border-transparent';
      };

      return (
        <div className="bg-white text-slate-900 rounded-lg shadow-xl overflow-hidden border border-slate-200 flex flex-col h-[500px]">
          {/* Browser Chrome */}
          <div className="bg-slate-200 border-b border-slate-300 p-2 flex items-center gap-2">
            <div className="flex gap-1.5 px-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 bg-white rounded-md px-3 py-1 text-sm text-slate-600 flex items-center gap-2 border border-slate-300 shadow-inner">
              <span className="material-symbols-outlined text-[16px] text-red-500">no_encryption</span>
              <span 
                className={getClasses('s2-url')}
                onClick={() => !isDiscovered('s2-url') && onDiscover('s2-url')}
              >
                http://login.microsoft-online-secure.net/auth/login
              </span>
            </div>
          </div>
          {/* Web Content */}
          <div className="flex-1 bg-slate-50 flex items-center justify-center p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200 w-full max-w-md">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-center mb-6">
                <span 
                  className={getClasses('s2-typo')}
                  onClick={() => !isDiscovered('s2-typo') && onDiscover('s2-typo')}
                >
                  Inicie seción
                </span>
              </h2>
              <div className="space-y-4">
                <div>
                  <input type="email" placeholder="Correo electrónico, teléfono o Skype" className="w-full border-b border-slate-400 py-2 outline-none focus:border-blue-600" disabled />
                </div>
                <div className="pt-4">
                  <p className="text-sm text-blue-600 hover:underline cursor-pointer">¿No tiene acceso a su cuenta?</p>
                </div>
                <div className="flex justify-end pt-4">
                  <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700" disabled>Siguiente</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  },
  {
    id: 3,
    title: 'Mensaje SMS Fraudulento (Smishing)',
    type: 'sms', // using website type for generic rendering container
    description: 'Analiza este mensaje de texto (SMS). Encuentra las señales de que es un intento de smishing.',
    signals: [
      {
        id: 's3-sender',
        type: 'Remitente Desconocido',
        text: '+1 (555) 019-8372',
        aiExplanation: 'Los bancos y servicios legítimos suelen usar números cortos (short codes) o un nombre de remitente verificado, no números de teléfono móvil estándar.',
        points: 50,
      },
      {
        id: 's3-urgency',
        type: 'Alerta de Seguridad Falsa',
        text: 'Su tarjeta ha sido bloqueada',
        aiExplanation: 'Crear pánico sobre el bloqueo de una tarjeta es una táctica clásica para que la víctima actúe sin pensar.',
        points: 50,
      },
      {
        id: 's3-link',
        type: 'Enlace Sospechoso',
        text: 'http://banco-seguro-update.info/login',
        aiExplanation: 'El enlace no pertenece al dominio oficial del banco y usa una extensión poco común (.info) a menudo asociada con spam.',
        points: 100,
      }
    ],
    renderContent: (onDiscover, discovered, showHints) => {
      const isDiscovered = (id: string) => discovered.includes(id);
      const getClasses = (id: string) => {
        if (isDiscovered(id)) return 'bg-red-500/20 border-red-500 text-red-500 border-2 rounded px-1 cursor-default';
        if (showHints) return 'animate-pulse border-2 border-yellow-500/50 rounded px-1 cursor-pointer hover:bg-yellow-500/10';
        return 'cursor-pointer hover:bg-black/5 rounded px-1 border-2 border-transparent';
      };

      return (
        <div className="flex justify-center items-center h-[500px]">
          <div className="w-[300px] h-[500px] bg-white rounded-[2rem] shadow-2xl border-8 border-slate-800 overflow-hidden flex flex-col relative">
            <div className="bg-slate-100 p-4 border-b border-slate-200 text-center">
              <div 
                className={`text-sm font-bold text-slate-800 inline-block ${getClasses('s3-sender')}`}
                onClick={() => !isDiscovered('s3-sender') && onDiscover('s3-sender')}
              >
                +1 (555) 019-8372
              </div>
            </div>
            <div className="flex-1 bg-slate-50 p-4 flex flex-col justify-end">
              <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-bl-none max-w-[85%] self-start shadow-sm text-sm space-y-2">
                <p>
                  <span 
                    className={`font-bold ${getClasses('s3-urgency')}`}
                    onClick={() => !isDiscovered('s3-urgency') && onDiscover('s3-urgency')}
                  >
                    Su tarjeta ha sido bloqueada
                  </span> por seguridad debido a un cargo inusual.
                </p>
                <p>
                  Verifique su identidad inmediatamente para restaurar el acceso:
                </p>
                <p 
                  className={`underline break-all ${getClasses('s3-link')}`}
                  onClick={() => !isDiscovered('s3-link') && onDiscover('s3-link')}
                >
                  http://banco-seguro-update.info/login
                </p>
              </div>
              <div className="text-xs text-slate-400 mt-2 ml-1">14:32</div>
            </div>
          </div>
        </div>
      );
    }
  },
  {
    id: 4,
    title: 'Mensaje de WhatsApp Engañoso',
    type: 'whatsapp',
    description: 'Analiza este mensaje de WhatsApp. Identifica las tácticas de ingeniería social.',
    signals: [
      {
        id: 's4-offer',
        type: 'Oferta Demasiado Buena',
        text: '¡Has sido seleccionado para trabajar desde casa ganando $500 al día!',
        aiExplanation: 'Las ofertas de trabajo no solicitadas con salarios irreales son casi siempre estafas diseñadas para robar datos o dinero (phishing/fraude de tarifa anticipada).',
        points: 100,
      },
      {
        id: 's4-action',
        type: 'Solicitud de Acción Inusual',
        text: 'Responde "INFO" a este número',
        aiExplanation: 'Pedir que respondas a un número desconocido o hagas clic en un enlace de WhatsApp puede confirmar que tu número está activo para futuras estafas.',
        points: 50,
      }
    ],
    renderContent: (onDiscover, discovered, showHints) => {
      const isDiscovered = (id: string) => discovered.includes(id);
      const getClasses = (id: string) => {
        if (isDiscovered(id)) return 'bg-red-500/20 border-red-500 text-red-500 border-2 rounded px-1 cursor-default';
        if (showHints) return 'animate-pulse border-2 border-yellow-500/50 rounded px-1 cursor-pointer hover:bg-yellow-500/10';
        return 'cursor-pointer hover:bg-black/5 rounded px-1 border-2 border-transparent';
      };

      return (
        <div className="flex justify-center items-center h-[500px]">
          <div className="w-[300px] h-[500px] bg-[#efeae2] rounded-[2rem] shadow-2xl border-8 border-slate-800 overflow-hidden flex flex-col relative">
            <div className="bg-[#075e54] p-3 flex items-center gap-3 text-white">
              <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center text-slate-500">
                <span className="material-symbols-outlined text-xl">person</span>
              </div>
              <div>
                <div className="font-bold text-sm">+44 7911 123456</div>
                <div className="text-xs opacity-80">en línea</div>
              </div>
            </div>
            <div className="flex-1 p-4 flex flex-col justify-start mt-4">
              <div className="bg-white text-slate-800 p-3 rounded-lg shadow-sm text-sm space-y-2 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-white" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
                <p className="text-red-500 font-bold text-xs mb-1">~ Reclutador Global</p>
                <p>
                  Hola, somos una agencia internacional.
                </p>
                <p 
                  className={`font-bold ${getClasses('s4-offer')}`}
                  onClick={() => !isDiscovered('s4-offer') && onDiscover('s4-offer')}
                >
                  ¡Has sido seleccionado para trabajar desde casa ganando $500 al día!
                </p>
                <p>
                  Solo necesitas tu teléfono móvil.
                </p>
                <p 
                  className={`font-bold text-blue-600 ${getClasses('s4-action')}`}
                  onClick={() => !isDiscovered('s4-action') && onDiscover('s4-action')}
                >
                  Responde "INFO" a este número
                </p>
                <p>para comenzar hoy mismo.</p>
                <div className="text-[10px] text-slate-400 text-right mt-1">10:15 AM</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
];

export default function InteractiveTrainingModule({ onBack }: InteractiveTrainingModuleProps) {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [discoveredSignals, setDiscoveredSignals] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [showHints, setShowHints] = useState(false);
  const [activeAnalysis, setActiveAnalysis] = useState<Signal | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  const scenario = scenarios[currentScenarioIndex];
  const progress = (discoveredSignals.length / scenario.signals.length) * 100;
  const isScenarioComplete = discoveredSignals.length === scenario.signals.length;

  const handleDiscover = (signalId: string) => {
    if (!discoveredSignals.includes(signalId)) {
      const signal = scenario.signals.find(s => s.id === signalId);
      if (signal) {
        setDiscoveredSignals(prev => [...prev, signalId]);
        setScore(prev => prev + signal.points);
        setActiveAnalysis(signal);
        setShowHints(false);
        
        // Simulate AI typing effect
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 1500);
      }
    }
  };

  const handleNextScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setDiscoveredSignals([]);
      setActiveAnalysis(null);
      setShowHints(false);
    } else {
      // End of training
      alert(`¡Entrenamiento completado! Puntuación final: ${score}`);
      onBack();
    }
  };

  return (
    <div className="bg-background-dark min-h-screen font-display text-slate-200 flex flex-col">
      {/* Header */}
      <div className="bg-surface-dark border-b border-border-dark p-4 shrink-0 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 rounded-lg hover:bg-border-dark transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-xl font-bold text-white">Simulador de Amenazas</h1>
            <p className="text-sm text-slate-400">Módulo de Capacitación Interactiva</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Puntuación</div>
            <div className="text-2xl font-bold text-primary">{score} <span className="text-sm text-slate-500">pts</span></div>
          </div>
          <div className="w-32">
            <div className="flex justify-between text-xs mb-1">
              <span>Progreso</span>
              <span>{discoveredSignals.length}/{scenario.signals.length}</span>
            </div>
            <div className="h-2 bg-background-dark rounded-full overflow-hidden border border-border-dark">
              <div 
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Simulation Area */}
        <div className="flex-1 p-8 overflow-y-auto relative">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Escenario {currentScenarioIndex + 1}: {scenario.title}
                </h2>
                <p className="text-slate-400">{scenario.description}</p>
              </div>
              <button 
                onClick={() => setShowHints(true)}
                className="px-4 py-2 bg-surface-dark border border-border-dark rounded-lg text-sm font-bold hover:bg-border-dark transition-colors flex items-center gap-2"
                disabled={isScenarioComplete}
              >
                <span className="material-symbols-outlined text-yellow-500">lightbulb</span>
                Pedir Pista IA
              </button>
            </div>

            {/* The actual mockup */}
            <div className="relative">
              {scenario.renderContent(handleDiscover, discoveredSignals, showHints)}
              
              {isScenarioComplete && (
                <div className="absolute inset-0 bg-background-dark/80 backdrop-blur-sm flex items-center justify-center rounded-lg z-10 animate-in fade-in duration-500">
                  <div className="bg-surface-dark p-8 rounded-2xl border border-border-dark text-center max-w-md shadow-2xl">
                    <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="material-symbols-outlined text-4xl">check_circle</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">¡Escenario Superado!</h3>
                    <p className="text-slate-400 mb-6">Has identificado correctamente todas las señales de peligro en esta simulación.</p>
                    <button 
                      onClick={handleNextScenario}
                      className="w-full py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors"
                    >
                      {currentScenarioIndex < scenarios.length - 1 ? 'Siguiente Escenario' : 'Finalizar Entrenamiento'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* AI Analysis Sidebar */}
        <div className="w-96 bg-surface-dark border-l border-border-dark flex flex-col">
          <div className="p-4 border-b border-border-dark bg-background-dark/50 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">smart_toy</span>
            </div>
            <h3 className="font-bold text-white">Análisis PhishGuard IA</h3>
          </div>
          
          <div className="flex-1 p-6 overflow-y-auto">
            {!activeAnalysis ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-slate-500 space-y-4">
                <span className="material-symbols-outlined text-6xl opacity-20">manage_search</span>
                <p>Haz clic en los elementos sospechosos del escenario para que la IA los analice.</p>
              </div>
            ) : (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-bold border border-red-500/20">
                  <span className="material-symbols-outlined text-[16px]">warning</span>
                  {activeAnalysis.type} Detectado
                </div>
                
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Elemento Seleccionado</h4>
                  <div className="p-3 bg-background-dark rounded-lg border border-border-dark font-mono text-sm text-slate-300 break-all">
                    {activeAnalysis.text}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Explicación de la IA</h4>
                  {isTyping ? (
                    <div className="flex gap-1 items-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  ) : (
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-slate-300 leading-relaxed text-sm">
                      {activeAnalysis.aiExplanation}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-border-dark flex justify-between items-center">
                  <span className="text-sm text-slate-400">Puntos obtenidos</span>
                  <span className="text-lg font-bold text-green-400">+{activeAnalysis.points}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
