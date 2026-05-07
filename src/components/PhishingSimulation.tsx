import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface PhishingSimulationProps {
  onBack: () => void;
}

export default function PhishingSimulation({ onBack }: PhishingSimulationProps) {
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <div className="bg-gray-100 font-sans antialiased min-h-screen relative">
      {/* BEGIN: Security Overlay (Educational Extension Trigger) */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[9999] backdrop-blur-sm" data-purpose="phishing-alert-system" id="security-warning-overlay">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full border-t-8 border-[#d11a2a] overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4 text-[#d11a2a]">
                <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 15c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                <h2 className="text-3xl font-bold text-slate-900">¡Alerta de Phishing Detectada!</h2>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Nuestra extensión de seguridad ha marcado esta página como <span className="font-bold text-[#d11a2a] italic underline">potencialmente fraudulenta</span>. Aquí está el por qué:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="bg-red-100 text-red-700 font-bold px-2 py-1 rounded h-fit">1</span>
                  <div>
                    <strong className="block text-slate-900">Nombre de Dominio Sospechoso</strong>
                    <span className="text-sm text-gray-600">La URL es <code className="bg-gray-200 px-1 text-slate-800">chase-security-login.com</code> en lugar de la oficial <code className="bg-gray-200 px-1 text-slate-800">chase.com</code>.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-red-100 text-red-700 font-bold px-2 py-1 rounded h-fit">2</span>
                  <div>
                    <strong className="block text-slate-900">Tácticas de Presión Urgente</strong>
                    <span className="text-sm text-gray-600">El banner rojo crea una falsa sensación de urgencia para hacerte actuar sin pensar.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-red-100 text-red-700 font-bold px-2 py-1 rounded h-fit">3</span>
                  <div>
                    <strong className="block text-slate-900">Solicitudes de Información Excesivas</strong>
                    <span className="text-sm text-gray-600">Los bancos nunca pedirán tu SSN completo, PIN y Apellido de Soltera de tu Madre en una sola pantalla de inicio de sesión.</span>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowOverlay(false)}
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded font-semibold hover:bg-gray-300 transition w-full"
                >
                  Mostrarme el Sitio (Simulación)
                </button>
                <button 
                  onClick={onBack}
                  className="bg-[#117aca] text-white px-6 py-3 rounded font-semibold hover:bg-[#0b5996] transition w-full"
                >
                  Llevarme a un Lugar Seguro
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* END: Security Overlay */}

      {/* BEGIN: Mockup Browser Address Bar */}
      <div className="bg-gray-200 p-2 border-b border-gray-300 hidden md:block" data-purpose="browser-mockup">
        <div className="flex items-center bg-white rounded-full px-4 py-1 max-w-4xl mx-auto border border-gray-400">
          <svg className="h-4 w-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
          <span className="text-gray-800 text-sm">https://www.chase-security-login.com/auth/verify-account/session-92381</span>
        </div>
      </div>
      {/* END: Mockup Browser Address Bar */}

      {/* BEGIN: Navigation Header */}
      <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center -ml-3">
            {/* Mock Logo: Purposely slightly off to mimic a cloned site */}
            <div className="w-8 h-8 bg-[#117aca] rotate-45 mr-3"></div>
            <span className="text-2xl font-bold text-[#117aca] tracking-tight">CHASE</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-semibold text-gray-600">
            <Link className="hover:text-[#117aca]" to='/panel'>Personal</Link>
            <Link className="hover:text-[#117aca]" to='/panel'>Negocios</Link>
            <Link className="hover:text-[#117aca]" to='/panel'>Comercial</Link>
          </nav>
        </div>
      </header>
      {/* END: Navigation Header */}

      {/* BEGIN: Urgent Red Banner */}
      <div className="bg-[#d11a2a] text-white py-3 px-6 text-center animate-pulse" data-purpose="phishing-urgency-banner">
        <p className="text-sm md:text-base font-bold">
          URGENTE: Tu cuenta ha sido bloqueada temporalmente debido a actividad sospechosa. Verifica tu identidad ahora para evitar la suspensión permanente.
        </p>
      </div>
      {/* END: Urgent Red Banner */}

      {/* BEGIN: Main Login Content */}
      <main className="max-w-4xl mx-auto my-12 px-6">
        <div className="bg-white shadow-lg rounded-sm flex flex-col md:flex-row overflow-hidden border border-gray-200">
          {/* Form Section */}
          <section className="p-8 md:w-1/2 border-r border-gray-100" data-purpose="fraudulent-form-container">
            <h1 className="text-2xl font-normal text-gray-800 mb-6">Verifica tu Información</h1>
            <form action="#" className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* Standard Login Fields */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="username">Nombre de usuario</label>
                <input className="w-full border-gray-300 focus:border-[#117aca] focus:ring-1 focus:ring-[#117aca] rounded-sm py-3 text-slate-900 bg-white" id="username" placeholder="Ingresa tu nombre de usuario" type="text"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="password">Contraseña</label>
                <input className="w-full border-gray-300 focus:border-[#117aca] focus:ring-1 focus:ring-[#117aca] rounded-sm py-3 text-slate-900 bg-white" id="password" placeholder="Ingresa tu contraseña" type="password"/>
              </div>
              {/* Red Flag: Sensitive Fields */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-[#117aca] font-bold uppercase mb-4">Verificación de Seguridad Requerida</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="ssn">Número de Seguro Social Completo (SSN)</label>
                    <input className="w-full border-gray-300 focus:border-[#117aca] focus:ring-1 focus:ring-[#117aca] rounded-sm py-3 text-slate-900 bg-white" id="ssn" placeholder="XXX-XX-XXXX" type="text"/>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="pin">PIN de Cajero Automático</label>
                      <input className="w-full border-gray-300 focus:border-[#117aca] focus:ring-1 focus:ring-[#117aca] rounded-sm py-3 text-slate-900 bg-white" id="pin" maxLength={4} placeholder="****" type="password"/>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="dob">Fecha de Nacimiento</label>
                      <input className="w-full border-gray-300 focus:border-[#117aca] focus:ring-1 focus:ring-[#117aca] rounded-sm py-3 text-slate-900 bg-white" id="dob" placeholder="MM/DD/YYYY" type="text"/>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="maiden">Apellido de Soltera de la Madre</label>
                    <input className="w-full border-gray-300 focus:border-[#117aca] focus:ring-1 focus:ring-[#117aca] rounded-sm py-3 text-slate-900 bg-white" id="maiden" type="text"/>
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#117aca] hover:bg-[#0b5996] text-white font-bold py-4 rounded-sm transition mt-6" type="button">
                Verificar y Desbloquear Cuenta
              </button>
            </form>
            <p className="mt-6 text-xs text-gray-400 text-center">
              creada en 2026 Jonathan Jimenez Escobar
            </p>
          </section>
          
          {/* Sidebar Promo Section */}
          <section className="bg-gray-50 p-8 md:w-1/2 flex flex-col justify-center text-center">
            <div className="max-w-xs mx-auto">
              <h2 className="text-2xl font-light text-gray-700 mb-4">La banca hecha fácil.</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Administra tus finanzas de forma segura con nuestros protocolos de seguridad actualizados. Por favor, completa el proceso de verificación para continuar.
              </p>
              <div className="aspect-video bg-gray-200 rounded flex items-center justify-center mb-6">
                {/* Placeholder for a marketing image */}
                <svg className="h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                </svg>
              </div>
              <p className="text-xs text-gray-400 italic">
                "Me siento mucho más seguro ahora que he actualizado mis credenciales." <br/>- Usuario Verificado
              </p>
            </div>
          </section>
        </div>
      </main>
      {/* END: Main Login Content */}

      {/* BEGIN: Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-2">
              <h4 className="font-bold text-gray-800">Contáctanos</h4>
              <p className="text-sm text-gray-600">Servicio al Cliente</p>
              <p className="text-sm text-gray-600">Comentarios</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-gray-800">Recursos</h4>
              <p className="text-sm text-gray-600">Cajero/Sucursal</p>
              <p className="text-sm text-gray-600">App Móvil</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-gray-800">Privacidad</h4>
              <p className="text-sm text-gray-600">Centro de Privacidad</p>
              <p className="text-sm text-gray-600">Conceptos Básicos de Seguridad</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-gray-800">Legal</h4>
              <p className="text-sm text-gray-600">Términos de Uso</p>
              <p className="text-sm text-gray-600">Opciones de Anuncios</p>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>Chase-Security-Login.com | Miembro FDIC | Prestamista de Vivienda Equitativa</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </footer>
      {/* END: Footer */}
    </div>
  );
}
