import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import { Save, Loader2, Bot, ShieldAlert, Globe, ShieldCheck } from 'lucide-react';

interface AiSettings {
  modelName: string;
  strictnessLevel: 'low' | 'medium' | 'high';
  language: 'es' | 'en';
  autoBlock: boolean;
  updatedAt: string;
  updatedBy: string;
}

const DEFAULT_SETTINGS: AiSettings = {
  modelName: 'gemini-3.1-pro-preview',
  strictnessLevel: 'medium',
  language: 'es',
  autoBlock: false,
  updatedAt: new Date().toISOString(),
  updatedBy: ''
};

export default function Insights() {
  const [settings, setSettings] = useState<AiSettings>(DEFAULT_SETTINGS);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    const docRef = doc(db, 'settings', 'ai');
    
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setSettings(docSnap.data() as AiSettings);
      }
      setIsLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'settings/ai');
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSave = async () => {
    if (!auth.currentUser) return;
    
    setIsSaving(true);
    setSaveMessage(null);

    try {
      const newSettings: AiSettings = {
        ...settings,
        updatedAt: new Date().toISOString(),
        updatedBy: auth.currentUser.uid
      };

      await setDoc(doc(db, 'settings', 'ai'), newSettings);
      setSaveMessage({ type: 'success', text: 'Configuración guardada exitosamente.' });
      
      setTimeout(() => setSaveMessage(null), 3000);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'settings/ai');
      setSaveMessage({ type: 'error', text: 'Error al guardar la configuración.' });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-8 w-full max-w-4xl mx-auto">
      {/* Top Section */}
      <div className="flex flex-col gap-1 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">Configuración del Modelo IA</h1>
        <p className="text-slate-500 dark:text-slate-400 text-base">Ajusta los parámetros del motor de detección y análisis de lenguaje natural.</p>
      </div>

      <div className="bg-surface-dark border border-border-dark rounded-2xl p-8 shadow-sm space-y-8">
        
        {/* Model Selection */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b border-border-dark pb-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <Bot size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Modelo Principal</h3>
              <p className="text-sm text-slate-400">Selecciona el modelo de IA que procesará los análisis.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <label className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${settings.modelName === 'gemini-3.1-pro-preview' ? 'border-primary bg-primary/5' : 'border-border-dark bg-background-dark hover:border-slate-600'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white">Gemini 3.1 Pro</span>
                <input 
                  type="radio" 
                  name="modelName" 
                  value="gemini-3.1-pro-preview" 
                  checked={settings.modelName === 'gemini-3.1-pro-preview'}
                  onChange={(e) => setSettings({...settings, modelName: e.target.value})}
                  className="w-4 h-4 text-primary bg-background-dark border-border-dark focus:ring-primary"
                />
              </div>
              <p className="text-xs text-slate-400">Máxima precisión y razonamiento complejo. Ideal para análisis profundo de código y texto ofuscado.</p>
            </label>

            <label className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${settings.modelName === 'gemini-3-flash-preview' ? 'border-primary bg-primary/5' : 'border-border-dark bg-background-dark hover:border-slate-600'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white">Gemini 3 Flash</span>
                <input 
                  type="radio" 
                  name="modelName" 
                  value="gemini-3-flash-preview" 
                  checked={settings.modelName === 'gemini-3-flash-preview'}
                  onChange={(e) => setSettings({...settings, modelName: e.target.value})}
                  className="w-4 h-4 text-primary bg-background-dark border-border-dark focus:ring-primary"
                />
              </div>
              <p className="text-xs text-slate-400">Alta velocidad y menor latencia. Recomendado para escaneos rápidos y análisis en tiempo real.</p>
            </label>
          </div>
        </div>

        {/* Strictness Level */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-3 border-b border-border-dark pb-4">
            <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
              <ShieldAlert size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Nivel de Severidad</h3>
              <p className="text-sm text-slate-400">Define qué tan estricta será la IA al clasificar una amenaza.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {(['low', 'medium', 'high'] as const).map((level) => (
              <label key={level} className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${settings.strictnessLevel === level ? 'border-primary bg-primary/5' : 'border-border-dark bg-background-dark hover:border-slate-600'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white capitalize">{level === 'low' ? 'Bajo' : level === 'medium' ? 'Medio' : 'Alto'}</span>
                  <input 
                    type="radio" 
                    name="strictnessLevel" 
                    value={level} 
                    checked={settings.strictnessLevel === level}
                    onChange={(e) => setSettings({...settings, strictnessLevel: e.target.value as any})}
                    className="w-4 h-4 text-primary bg-background-dark border-border-dark focus:ring-primary"
                  />
                </div>
                <p className="text-xs text-slate-400">
                  {level === 'low' && 'Menos falsos positivos. Solo bloquea amenazas evidentes.'}
                  {level === 'medium' && 'Balance ideal entre seguridad y accesibilidad.'}
                  {level === 'high' && 'Máxima seguridad. Puede bloquear sitios legítimos sospechosos.'}
                </p>
              </label>
            ))}
          </div>
        </div>

        {/* Language & Auto-Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-border-dark pb-4">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-500">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Idioma de Análisis</h3>
                <p className="text-sm text-slate-400">Idioma de los reportes generados.</p>
              </div>
            </div>
            <div className="pt-2">
              <select 
                value={settings.language}
                onChange={(e) => setSettings({...settings, language: e.target.value as any})}
                className="w-full p-3 bg-background-dark border border-border-dark rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white"
              >
                <option value="es">Español</option>
                <option value="en">Inglés</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-border-dark pb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Bloqueo Automático</h3>
                <p className="text-sm text-slate-400">Acción ante amenazas críticas.</p>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between p-4 bg-background-dark border border-border-dark rounded-xl">
              <span className="text-sm font-medium text-white">Bloquear automáticamente sitios de alto riesgo</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={settings.autoBlock}
                  onChange={(e) => setSettings({...settings, autoBlock: e.target.checked})}
                />
                <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-8 border-t border-border-dark flex items-center justify-between">
          <div>
            {saveMessage && (
              <p className={`text-sm font-bold ${saveMessage.type === 'success' ? 'text-emerald-500' : 'text-red-500'}`}>
                {saveMessage.text}
              </p>
            )}
          </div>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-6 py-3 bg-primary text-white rounded-xl font-bold uppercase tracking-widest hover:bg-primary/90 disabled:opacity-50 transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
          >
            {isSaving ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Guardando...
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                Guardar Configuración
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
