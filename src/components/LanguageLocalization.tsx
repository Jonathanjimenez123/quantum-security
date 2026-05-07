import React, { useState } from 'react';
import { usePreferences } from '../contexts/PreferencesContext';

interface LanguageLocalizationProps {
  onBack?: () => void;
}

export default function LanguageLocalization({ onBack }: LanguageLocalizationProps) {
  const { theme, setTheme } = usePreferences();
  const [language, setLanguage] = useState('en-US');
  const [region, setRegion] = useState('United States (English)');
  const [nlpDialect, setNlpDialect] = useState('North American English (General)');
  const [dateFormat, setDateFormat] = useState('MM/DD/YYYY (12h)');
  const [currency, setCurrency] = useState('USD ($)');
  const [autoSyncTimezone, setAutoSyncTimezone] = useState(true);

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900 p-6 md:p-10">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page Header */}
        <div>
          {onBack && (
            <button
              onClick={onBack}
              className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Volver al Panel
            </button>
          )}
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Idioma y Localización</h1>
          <p className="text-slate-500 dark:text-slate-400">Administre el idioma de su interfaz, los formatos regionales y los matices lingüísticos de IA para una detección de seguridad óptima.</p>
        </div>

        {/* Interface Language Section */}
        <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden mb-8">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-indigo-500">palette</span>
              Apariencia
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Personalice cómo se ve Security Shield AI en su dispositivo.</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <button 
                onClick={() => setTheme('light')}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${theme === 'light' ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10' : 'border-slate-200 dark:border-slate-700 hover:border-indigo-500/50'}`}
              >
                <span className={`material-symbols-outlined text-3xl mb-2 ${theme === 'light' ? 'text-indigo-500' : 'text-slate-500'}`}>light_mode</span>
                <span className={`text-sm ${theme === 'light' ? 'font-semibold text-slate-900 dark:text-white' : 'font-medium text-slate-500'}`}>Modo Claro</span>
              </button>
              <button 
                onClick={() => setTheme('dark')}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all group ${theme === 'dark' ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10' : 'border-slate-200 dark:border-slate-700 hover:border-indigo-500/50'}`}
              >
                <span className={`material-symbols-outlined text-3xl mb-2 transition-colors ${theme === 'dark' ? 'text-indigo-500' : 'text-slate-500 group-hover:text-indigo-500'}`}>dark_mode</span>
                <span className={`text-sm transition-colors ${theme === 'dark' ? 'font-semibold text-slate-900 dark:text-white' : 'font-medium text-slate-500 group-hover:text-indigo-500'}`}>Modo Oscuro</span>
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-indigo-500">translate</span>
              Idioma de la Interfaz
            </h3>
          </div>
          <div className="p-6">
            <div className="max-w-md">
              <label className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-2">Idioma de Visualización</label>
              <div className="relative">
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full h-12 pl-4 pr-10 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none appearance-none transition-shadow cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 border-2" 
                  name="interface_language"
                >
                  <option value="en-US">English (United States)</option>
                  <option value="es-ES">Español (España)</option>
                  <option value="fr-FR">Français (France)</option>
                  <option value="de-DE">Deutsch (Deutschland)</option>
                  <option value="ja-JP">日本語 (Japan)</option>
                  <option value="zh-CN">简体中文 (China)</option>
                  <option value="pt-BR">Português (Brasil)</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-500">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Esto cambiará el idioma del panel de control y las alertas de seguridad.
              </p>
            </div>
          </div>
        </section>

        {/* Region & Nuances Section */}
        <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center flex-wrap gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-indigo-500">public</span>
                Región y Matices de IA
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Ajuste la detección para frases regionales y estafas.</p>
            </div>
            <button className="text-sm text-indigo-500 font-medium hover:text-indigo-600 flex items-center gap-1">
              <span className="material-symbols-outlined text-base">my_location</span>
              Detectar Ubicación Automáticamente
            </button>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Settings */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-2">Formato Regional</label>
                <div className="relative">
                  <select 
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full h-12 pl-4 pr-10 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none appearance-none transition-shadow border-2"
                  >
                    <option>United States (English)</option>
                    <option>United Kingdom (English)</option>
                    <option>Canada (English)</option>
                    <option>Australia (English)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-500">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-2">Matices Regionales de PLN</label>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-900/50 mb-3">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-indigo-500 mt-0.5">psychology</span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Ajuste de Dialecto Activo</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">El modelo de IA se adapta a la jerga local y a los patrones de fraseo para detectar mejor los ataques de ingeniería social específicos de su región.</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <select 
                    value={nlpDialect}
                    onChange={(e) => setNlpDialect(e.target.value)}
                    className="w-full h-12 pl-4 pr-10 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none appearance-none transition-shadow border-2"
                  >
                    <option>North American English (General)</option>
                    <option>Southern US English</option>
                    <option>British English (Received Pronunciation)</option>
                    <option>Australian English</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-500">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Map Visualization */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-1 flex flex-col items-center justify-center relative overflow-hidden min-h-[240px]">
              {/* Abstract Map Background */}
              <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg relative z-10 max-w-[200px] text-center border border-slate-100 dark:border-slate-700">
                <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-3 text-indigo-500">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Región Actual</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Estados Unidos</p>
                <div className="mt-2 text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full inline-block font-medium">
                  PLN Activo
                </div>
              </div>
              {/* Location Dot Pulse */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-indigo-500/10 rounded-full animate-[ping_3s_linear_infinite]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-indigo-500/20 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Formatting Preferences */}
        <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-indigo-500">settings_applications</span>
              Preferencias de Formato
            </h3>
          </div>
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {/* Date & Time */}
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined">calendar_month</span>
                </div>
                <div>
                  <h4 className="text-base font-medium text-slate-900 dark:text-white">Formato de Fecha y Hora</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Usado para registros de incidentes y marcas de tiempo de informes.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative min-w-[180px]">
                  <select 
                    value={dateFormat}
                    onChange={(e) => setDateFormat(e.target.value)}
                    className="w-full h-10 pl-3 pr-8 text-sm rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none appearance-none border-2"
                  >
                    <option>MM/DD/YYYY (12h)</option>
                    <option>DD/MM/YYYY (24h)</option>
                    <option>YYYY-MM-DD (ISO)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-slate-500">
                    <span className="material-symbols-outlined text-sm">expand_more</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Currency */}
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined">attach_money</span>
                </div>
                <div>
                  <h4 className="text-base font-medium text-slate-900 dark:text-white">Visualización de Moneda</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Para cálculos de ROI y estimaciones de facturación.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative min-w-[180px]">
                  <select 
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full h-10 pl-3 pr-8 text-sm rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none appearance-none border-2"
                  >
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                    <option>JPY (¥)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-slate-500">
                    <span className="material-symbols-outlined text-sm">expand_more</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Zone */}
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h4 className="text-base font-medium text-slate-900 dark:text-white">Zona Horaria</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Sincroniza el tiempo de los incidentes con sus operaciones locales.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <label className="inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={autoSyncTimezone}
                    onChange={(e) => setAutoSyncTimezone(e.target.checked)}
                  />
                  <div className="relative w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500/50 dark:peer-focus:ring-indigo-500/80 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-indigo-500"></div>
                  <span className="ms-3 text-sm font-medium text-slate-900 dark:text-slate-300">Sincronización Automática</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-end gap-3 pt-4 pb-10">
          <button className="px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            Descartar Cambios
          </button>
          <button className="px-6 py-2.5 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 shadow-sm shadow-indigo-500/20 transition-all transform active:scale-95">
            Guardar Preferencias
          </button>
        </div>
      </div>
    </div>
  );
}
