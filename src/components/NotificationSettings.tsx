import { auth } from '../firebase';
import React from 'react';

interface NotificationSettingsProps {
  onBack: () => void;
}

export default function NotificationSettings({ onBack }: NotificationSettingsProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased font-display">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-slate-900 border-r border-slate-800 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-white">shield_locked</span>
          </div>
          <div>
            <h1 className="text-white text-lg font-bold leading-none">PhishGuard</h1>
            <p className="text-slate-400 text-xs mt-1">Enterprise Security</p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <div onClick={onBack} className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-colors cursor-pointer">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Panel de Control</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-colors cursor-pointer">
            <span className="material-symbols-outlined">gpp_maybe</span>
            <span className="text-sm font-medium">Security Alerts</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-colors cursor-pointer">
            <span className="material-symbols-outlined">school</span>
            <span className="text-sm font-medium">Training</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-colors cursor-pointer">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-sm font-medium">Reports</span>
          </div>
          
          <div className="pt-4 pb-2">
            <p className="px-4 text-[10px] uppercase tracking-wider text-slate-500 font-bold">Preferences</p>
          </div>
          
          <div className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary border border-primary/20 rounded-lg transition-colors cursor-pointer">
            <span className="material-symbols-outlined">notifications</span>
            <span className="text-sm font-medium">Notifications</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-colors cursor-pointer">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Configuración</span>
          </div>
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <div className="flex items-center gap-3 mb-3">
              <img alt="Profile" className="w-8 h-8 rounded-full object-cover" data-alt="User profile picture of a professional man" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"}/>
              <div className="overflow-hidden">
                <p className="text-white text-xs font-semibold truncate">Alex Rivera</p>
                <p className="text-slate-500 text-[10px] truncate">Security Analyst</p>
              </div>
            </div>
            <button className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-white text-xs rounded-lg transition-colors">Cerrar Sesión</button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark custom-scrollbar">
        <div className="max-w-4xl mx-auto px-8 py-10">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Notification Settings</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Customize how you want to be alerted about security threats and system updates.</p>
          </div>

          {/* Global Do Not Disturb */}
          <section className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <span className="material-symbols-outlined">bedtime</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Do Not Disturb</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Silence all notifications during specific hours</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox"/>
                <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">Active From</label>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-primary" type="time" defaultValue="22:00"/>
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">Until</label>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-primary" type="time" defaultValue="07:00"/>
              </div>
            </div>
          </section>

          {/* Notification Categories */}
          <div className="space-y-6">
            {/* Security Alerts Section */}
            <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-primary/5">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-red-500">warning</span>
                  <h3 className="font-bold text-slate-900 dark:text-white">Security Alerts</h3>
                </div>
                <span className="px-2 py-1 rounded bg-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-wider">High Priority</span>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="max-w-[70%]">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Critical Phishing Detection</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Immediate notification when a highly targeted phishing campaign is detected against your domain.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Push</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox"/>
                        <div className="w-9 h-5 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Correo</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox"/>
                        <div className="w-9 h-5 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="max-w-[70%]">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Suspicious Login Attempts</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Alerts for unusual login locations or multiple failed attempts on your administrative account.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Push</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox"/>
                        <div className="w-9 h-5 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Email</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" type="checkbox"/>
                        <div className="w-9 h-5 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Training & Education */}
            <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">school</span>
                  <h3 className="font-bold text-slate-900 dark:text-white">Training &amp; Education</h3>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="max-w-[70%]">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">New Training Modules</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Get notified when new security awareness courses are assigned to your team.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox"/>
                        <div className="w-9 h-5 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox"/>
                        <div className="w-9 h-5 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="max-w-[70%]">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Team Progress Milestones</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Monthly summary of your team's course completion rates and phishing test performance.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" type="checkbox"/>
                        <div className="w-9 h-5 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox"/>
                        <div className="w-9 h-5 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System & Reports */}
            <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400">analytics</span>
                  <h3 className="font-bold text-slate-900 dark:text-white">System &amp; Reports</h3>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="max-w-[70%]">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Weekly Security Digest</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">A curated weekly overview of all threats blocked and training completed.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" type="checkbox"/>
                        <div className="w-9 h-5 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox"/>
                        <div className="w-9 h-5 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alert Sounds Selection */}
          <section className="mt-10 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Alert Sounds</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700/50">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400">music_note</span>
                  <span className="text-sm font-medium">Standard Ping</span>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-sm">play_arrow</span>
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="text-sm font-medium text-primary">Cyber Alarm (Active)</span>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
                  <span className="material-symbols-outlined text-sm">play_arrow</span>
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700/50">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400">music_note</span>
                  <span className="text-sm font-medium">Subtle Chime</span>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-sm">play_arrow</span>
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700/50">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400">music_note</span>
                  <span className="text-sm font-medium">Urgent Pulse</span>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-sm">play_arrow</span>
                </button>
              </div>
            </div>
          </section>

          {/* Save Footer */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-4">
            <button className="px-6 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              Reset Defaults
            </button>
            <button className="px-8 py-2.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
              Guardar Cambios
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
