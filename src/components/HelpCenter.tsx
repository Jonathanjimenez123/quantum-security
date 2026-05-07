import React from 'react';
import { Link } from 'react-router-dom';

interface HelpCenterProps {
  onBack: () => void;
  onLogin?: () => void;
  isAuthenticated?: boolean;
}

export default function HelpCenter({ onBack, onLogin, isAuthenticated }: HelpCenterProps) {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-text-main font-sans selection:bg-primary/30">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-surface-border px-10 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
        <div className="flex items-center gap-4 cursor-pointer" onClick={onBack}>
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_543)">
                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
                <path clipRule="evenodd" d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z" fill="currentColor" fillRule="evenodd"></path>
              </g>
              <defs>
                <clipPath id="clip0_6_543"><rect fill="white" height="48" width="48"></rect></clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">AI Shield</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <nav className="hidden md:flex items-center gap-9">
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" to='/panel'>Inicio</Link>
            <Link className="text-primary dark:text-white text-sm font-medium transition-colors" to="/apidocumentation">Documentación</Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" to='/panel'>Comunidad</Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" to='/centro-ayuda'>Soporte</Link>
          </nav>
          {!isAuthenticated && (
            <button 
              onClick={onLogin}
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary-hover text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-primary/20"
            >
              <span className="truncate">Iniciar Sesión</span>
            </button>
          )}
        </div>
      </header>
      
      <main className="flex-grow">
        {/* Hero Search Section */}
        <div className="relative bg-surface-dark py-16 md:py-24 border-b border-surface-border">
          <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida/ADBb0ugdeyEUGGtf0Hf8MpAjVRFEDeIHNFR2Z8yjahzqj9-DDuCp40RJoGmFjcCcxMyqVjBxE9PU_HtIPnO_0QrmK0z38sK1dfMe73EaSv0wNbooZUrIjUz6KP5yiZMAPn0sZX7c5atgzUu1TzExQSqyKOe0JHEPseeOkZW-Z6jPWpnZWa1Xf2xXgvIRo_hKQoEp5jK1TesZOMJVWkR-4tJYl-7iPQQCbQcR8b-bC-WgAITB0nzeE8pnoCgwSgcJyUTYEoTRRLlrOhZn')] bg-cover bg-center opacity-10 mix-blend-overlay" data-alt="Abstract blue digital network background pattern"></div>
          <div className="relative z-10 px-4 flex flex-col items-center justify-center gap-6 text-center max-w-4xl mx-auto">
            <div className="space-y-2">
              <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
                ¿Cómo podemos ayudarte hoy?
              </h1>
              <p className="text-text-muted text-lg font-normal max-w-2xl mx-auto">
                Busca en nuestra base de conocimientos respuestas sobre la protección anti-phishing de AI Shield.
              </p>
            </div>
            <div className="w-full max-w-xl relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-text-muted">search</span>
              </div>
              <input className="w-full h-14 pl-12 pr-32 rounded-xl bg-background-dark/50 border border-surface-border text-white placeholder-text-muted focus:ring-2 focus:ring-primary focus:border-primary transition-all text-base shadow-xl backdrop-blur-sm" placeholder="Busca artículos, códigos de error o temas..." type="text"/>
              <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary-hover text-white px-6 rounded-lg font-bold text-sm transition-colors shadow-md">
                Buscar
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-text-muted">
              <span>Populares:</span>
              <Link className="text-primary hover:underline" to='/panel'>Falsos Positivos</Link>,
              <Link className="text-primary hover:underline" to='/panel'>Instalación</Link>,
              <Link className="text-primary hover:underline" to="/apidocumentation">Claves API</Link>
            </div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column: Categories & Articles */}
            <div className="flex-1 min-w-0">
              {/* Categories Grid */}
              <div className="mb-12">
                <h2 className="text-slate-900 dark:text-white text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">category</span>
                  Explorar por Categoría
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Card 1 */}
                  <Link className="group flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-surface-border bg-white dark:bg-surface-dark p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all" to='/ajustes'>
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                    </div>
                    <div>
                      <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1">Primeros Pasos</h3>
                      <p className="text-slate-500 dark:text-text-muted text-sm">Guías de instalación y configuración inicial.</p>
                    </div>
                  </Link>
                  {/* Card 2 */}
                  <Link className="group flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-surface-border bg-white dark:bg-surface-dark p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all" to='/panel'>
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-3xl">memory</span>
                    </div>
                    <div>
                      <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1">Explicación de la IA</h3>
                      <p className="text-slate-500 dark:text-text-muted text-sm">Entendiendo nuestro motor PNL y modelos de detección.</p>
                    </div>
                  </Link>
                  {/* Card 3 */}
                  <Link className="group flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-surface-border bg-white dark:bg-surface-dark p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all" to='/ajustes'>
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-3xl">notifications_active</span>
                    </div>
                    <div>
                      <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1">Gestión de Alertas</h3>
                      <p className="text-slate-500 dark:text-text-muted text-sm">Personalización de umbrales y ajustes de notificaciones.</p>
                    </div>
                  </Link>
                  {/* Card 4 */}
                  <Link className="group flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-surface-border bg-white dark:bg-surface-dark p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all" to='/ajustes'>
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-3xl">domain</span>
                    </div>
                    <div>
                      <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1">Integración Empresarial</h3>
                      <p className="text-slate-500 dark:text-text-muted text-sm">Configuración SSO, acceso API y despliegue de flota.</p>
                    </div>
                  </Link>
                  {/* Card 5 */}
                  <Link className="group flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-surface-border bg-white dark:bg-surface-dark p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all" to='/panel'>
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-3xl">build</span>
                    </div>
                    <div>
                      <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1">Solución de Problemas</h3>
                      <p className="text-slate-500 dark:text-text-muted text-sm">Problemas comunes, registros de error y soluciones rápidas.</p>
                    </div>
                  </Link>
                </div>
              </div>
              
              {/* Featured Articles */}
              <div>
                <h2 className="text-slate-900 dark:text-white text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">star</span>
                  Artículos Destacados
                </h2>
                <div className="flex flex-col gap-4">
                  <article className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 dark:border-surface-border bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-surface-border/50 transition-colors cursor-pointer">
                    <div className="mt-1 text-primary">
                      <span className="material-symbols-outlined">article</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">¿Cómo detecta el motor PNL la urgencia falsa?</h3>
                      <p className="text-slate-500 dark:text-text-muted text-sm line-clamp-2">Aprende sobre los marcadores lingüísticos y el análisis semántico utilizado por nuestra IA para identificar tácticas de alta presión comúnmente usadas en intentos de phishing.</p>
                      <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                        <span>Actualizado hace 2 días</span>
                        <span>•</span>
                        <span>5 min de lectura</span>
                      </div>
                    </div>
                    <div className="self-center">
                      <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                    </div>
                  </article>
                  <article className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 dark:border-surface-border bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-surface-border/50 transition-colors cursor-pointer">
                    <div className="mt-1 text-primary">
                      <span className="material-symbols-outlined">article</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">Lista blanca de dominios internos para Empresas</h3>
                      <p className="text-slate-500 dark:text-text-muted text-sm line-clamp-2">Una guía paso a paso para administradores sobre cómo incluir en la lista blanca herramientas y dominios internos para evitar falsos positivos dentro de la red de su organización.</p>
                      <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                        <span>Actualizado hace 1 semana</span>
                        <span>•</span>
                        <span>3 min de lectura</span>
                      </div>
                    </div>
                    <div className="self-center">
                      <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                    </div>
                  </article>
                  <article className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 dark:border-surface-border bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-surface-border/50 transition-colors cursor-pointer">
                    <div className="mt-1 text-primary">
                      <span className="material-symbols-outlined">article</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">Resolución de conflictos con extensiones del navegador</h3>
                      <p className="text-slate-500 dark:text-text-muted text-sm line-clamp-2">Pasos para solucionar problemas cuando AI Shield interactúa inesperadamente con otras extensiones de seguridad o bloqueadores de anuncios instalados en Chrome o Edge.</p>
                      <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                        <span>Actualizado hace 3 semanas</span>
                        <span>•</span>
                        <span>7 min de lectura</span>
                      </div>
                    </div>
                    <div className="self-center">
                      <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            
            {/* Right Column: Sidebar */}
            <aside className="w-full lg:w-80 shrink-0 space-y-6">
              {/* Quick Support Card */}
              <div className="rounded-xl border border-slate-200 dark:border-surface-border bg-white dark:bg-surface-dark p-6 sticky top-24">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Soporte Rápido</h3>
                <div className="flex flex-col gap-3">
                  <button className="flex items-center gap-3 w-full p-3 rounded-lg bg-slate-50 dark:bg-background-dark hover:bg-slate-100 dark:hover:bg-surface-border transition-colors text-left group">
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-2 rounded-md">
                      <span className="material-symbols-outlined text-xl">chat</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Chat en Vivo</div>
                      <div className="text-xs text-slate-500 dark:text-text-muted">Disponible 9am - 5pm EST</div>
                    </div>
                  </button>
                  <button className="flex items-center gap-3 w-full p-3 rounded-lg bg-slate-50 dark:bg-background-dark hover:bg-slate-100 dark:hover:bg-surface-border transition-colors text-left group">
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-2 rounded-md">
                      <span className="material-symbols-outlined text-xl">confirmation_number</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Abrir un Ticket</div>
                      <div className="text-xs text-slate-500 dark:text-text-muted">Obtén ayuda por correo</div>
                    </div>
                  </button>
                  <button className="flex items-center gap-3 w-full p-3 rounded-lg bg-slate-50 dark:bg-background-dark hover:bg-slate-100 dark:hover:bg-surface-border transition-colors text-left group">
                    <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 p-2 rounded-md">
                      <span className="material-symbols-outlined text-xl">forum</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Foro de la Comunidad</div>
                      <div className="text-xs text-slate-500 dark:text-text-muted">Explora discusiones de usuarios</div>
                    </div>
                  </button>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-surface-border">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Estado del Sistema</h4>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm text-slate-600 dark:text-text-muted">Todos los sistemas operativos</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-12 border-t border-slate-200 dark:border-surface-border bg-white dark:bg-background-dark py-10 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-500 dark:text-text-muted text-sm">
              creada en 2026 Jonathan Jimenez Escobar
            </div>
            <div className="flex gap-6">
              <Link className="text-slate-500 dark:text-text-muted hover:text-primary text-sm" to="/privacy-compliance">Política de Privacidad</Link>
              <Link className="text-slate-500 dark:text-text-muted hover:text-primary text-sm" to="/terms-of-service">Términos de Servicio</Link>
              <Link className="text-slate-500 dark:text-text-muted hover:text-primary text-sm" to='/ajustes'>Configuración de Cookies</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
