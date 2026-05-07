import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, collection, query, where, getDocs, addDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';

interface ApiKey {
  id: string;
  name: string;
  permissions: string;
  lastUsed: string | null;
  createdAt: string;
}

export default function Settings() {
  const [sensitivityMode, setSensitivityMode] = useState('strict');
  const [globalSensitivity, setGlobalSensitivity] = useState(75);
  const [nlpEnabled, setNlpEnabled] = useState(true);
  const [nlpDepth, setNlpDepth] = useState(80);
  const [visualEnabled, setVisualEnabled] = useState(true);
  const [visualTolerance, setVisualTolerance] = useState(90);
  const [typoEnabled, setTypoEnabled] = useState(true);
  const [typoDistance, setTypoDistance] = useState(65);
  const [testUrl, setTestUrl] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  // API Key Management State
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [newKeyPermissions, setNewKeyPermissions] = useState('read-only');
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);

  useEffect(() => {
    const loadSettings = async () => {
      if (!auth.currentUser) return;
      try {
        const docRef = doc(db, 'settings', auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setSensitivityMode(data.sensitivityMode || 'strict');
          setGlobalSensitivity(data.globalSensitivity || 75);
          setNlpEnabled(data.nlpEnabled ?? true);
          setNlpDepth(data.nlpDepth || 80);
          setVisualEnabled(data.visualEnabled ?? true);
          setVisualTolerance(data.visualTolerance || 90);
          setTypoEnabled(data.typoEnabled ?? true);
          setTypoDistance(data.typoDistance || 65);
        }

        // Load API Keys
        const q = query(collection(db, 'apiKeys'), where('userId', '==', auth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        const keys: ApiKey[] = [];
        querySnapshot.forEach((doc) => {
          keys.push({ id: doc.id, ...doc.data() } as ApiKey);
        });
        setApiKeys(keys);
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, `settings/${auth.currentUser.uid}`);
      }
    };
    loadSettings();
  }, []);

  const handleSave = async () => {
    if (!auth.currentUser) return;
    setIsSaving(true);
    setSaveMessage('');
    try {
      await setDoc(doc(db, 'settings', auth.currentUser.uid), {
        userId: auth.currentUser.uid,
        sensitivityMode,
        globalSensitivity,
        nlpEnabled,
        nlpDepth,
        visualEnabled,
        visualTolerance,
        typoEnabled,
        typoDistance,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      setSaveMessage('Configuración guardada exitosamente.');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `settings/${auth.currentUser.uid}`);
      setSaveMessage('Error al guardar la configuración.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleRestore = () => {
    setSensitivityMode('strict');
    setGlobalSensitivity(75);
    setNlpEnabled(true);
    setNlpDepth(80);
    setVisualEnabled(true);
    setVisualTolerance(90);
    setTypoEnabled(true);
    setTypoDistance(65);
  };

  const handleGenerateKey = async () => {
    if (!auth.currentUser || !newKeyName.trim()) return;
    
    // Generate a random secure-looking key
    const newKey = `pg_live_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
    
    try {
      const docRef = await addDoc(collection(db, 'apiKeys'), {
        userId: auth.currentUser.uid,
        name: newKeyName.trim(),
        key: newKey, // In a real app, store a hash. Here we store it to match rules.
        permissions: newKeyPermissions,
        status: 'active',
        lastUsed: null,
        createdAt: new Date().toISOString()
      });
      
      setApiKeys([...apiKeys, {
        id: docRef.id,
        name: newKeyName.trim(),
        permissions: newKeyPermissions,
        lastUsed: null,
        createdAt: new Date().toISOString()
      }]);
      
      setGeneratedKey(newKey);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'apiKeys');
      setSaveMessage('Error al generar la clave API.');
    }
  };

  const handleRevokeKey = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'apiKeys', id));
      setApiKeys(apiKeys.filter(key => key.id !== id));
      setSaveMessage('Clave API revocada exitosamente.');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `apiKeys/${id}`);
      setSaveMessage('Error al revocar la clave API.');
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Sensibilidad del Modelo IA</h1>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base md:text-lg max-w-2xl">
          Configura qué tan agresivo será el motor anti-phishing al analizar contenido web. Una mayor sensibilidad aumenta la protección pero puede marcar sitios legítimos.
        </p>
      </div>

      {/* Global Settings Card */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-1">Nivel de Protección</h3>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Selecciona un ajuste predefinido o personalízalo abajo.</p>
          </div>
          {/* 3-Position Toggle */}
          <div className="flex bg-background-light dark:bg-background-dark p-1 rounded-lg border border-border-light dark:border-border-dark self-stretch md:self-auto">
            <label className="flex-1 md:flex-none cursor-pointer">
              <input 
                className="peer sr-only" 
                name="sensitivity_mode" 
                type="radio" 
                value="standard"
                checked={sensitivityMode === 'standard'}
                onChange={() => setSensitivityMode('standard')}
              />
              <div className="px-6 py-2 rounded-md text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-md text-center">
                Estándar
              </div>
            </label>
            <label className="flex-1 md:flex-none cursor-pointer">
              <input 
                className="peer sr-only" 
                name="sensitivity_mode" 
                type="radio" 
                value="strict"
                checked={sensitivityMode === 'strict'}
                onChange={() => setSensitivityMode('strict')}
              />
              <div className="px-6 py-2 rounded-md text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-md text-center">
                Estricto
              </div>
            </label>
            <label className="flex-1 md:flex-none cursor-pointer">
              <input 
                className="peer sr-only" 
                name="sensitivity_mode" 
                type="radio" 
                value="expert"
                checked={sensitivityMode === 'expert'}
                onChange={() => setSensitivityMode('expert')}
              />
              <div className="px-6 py-2 rounded-md text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-md text-center">
                Experto
              </div>
            </label>
          </div>
        </div>

        {/* Main Slider */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <label className="font-bold text-lg flex items-center gap-2" htmlFor="global-sensitivity">
              Umbral de Sensibilidad Global
              <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark text-base cursor-help" title="Nivel general de agresividad del motor de detección IA">info</span>
            </label>
            <span className="text-2xl font-black text-primary">{globalSensitivity}%</span>
          </div>
          <div className="relative h-12 flex items-center">
            <input 
              className="w-full z-10" 
              id="global-sensitivity" 
              max="100" 
              min="0" 
              type="range" 
              value={globalSensitivity}
              onChange={(e) => setGlobalSensitivity(Number(e.target.value))}
            />
            <div className="absolute w-full h-1 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full opacity-20"></div>
            <div className="absolute h-1 bg-gradient-to-r from-green-500 via-yellow-500 to-primary rounded-full top-1/2 -translate-y-1/2 pointer-events-none" style={{ width: `${globalSensitivity}%` }}></div>
          </div>
          <div className="flex justify-between text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wide">
            <span>Relajado</span>
            <span>Balanceado</span>
            <span>Altamente Paranoico</span>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* NLP Module */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors group">
          <div className="flex justify-between items-start">
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-500">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                className="sr-only peer" 
                type="checkbox" 
                checked={nlpEnabled}
                onChange={(e) => setNlpEnabled(e.target.checked)}
              />
              <div className="w-11 h-6 bg-border-light dark:bg-border-dark peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Detección de Urgencia (PNL)</h4>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">Analiza patrones de lenguaje en busca de urgencia fabricada, amenazas o solicitudes financieras.</p>
          </div>
          <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark">
            <div className="flex justify-between text-sm mb-2 font-medium">
              <span className="flex items-center gap-1.5">
                Profundidad de Análisis
                <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark text-[14px] cursor-help" title="Determina qué tan profundo analiza la IA el contexto semántico para detectar intenciones maliciosas.">info</span>
              </span>
              <span className="text-primary">{nlpDepth > 75 ? 'Alta' : nlpDepth > 40 ? 'Media' : 'Baja'}</span>
            </div>
            <input 
              className="w-full h-1.5 bg-border-light dark:bg-background-dark rounded-lg appearance-none cursor-pointer" 
              max="100" 
              min="0" 
              type="range" 
              value={nlpDepth}
              onChange={(e) => setNlpDepth(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Visual Fidelity Module */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors group">
          <div className="flex justify-between items-start">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-500">
              <span className="material-symbols-outlined">visibility</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                className="sr-only peer" 
                type="checkbox" 
                checked={visualEnabled}
                onChange={(e) => setVisualEnabled(e.target.checked)}
              />
              <div className="w-11 h-6 bg-border-light dark:bg-border-dark peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Verificación de Fidelidad Visual</h4>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">Compara el renderizado de la página contra interfaces bancarias y de inicio de sesión conocidas para detectar clones.</p>
          </div>
          <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark">
            <div className="flex justify-between text-sm mb-2 font-medium">
              <span className="flex items-center gap-1.5">
                Tolerancia de Coincidencia de Píxeles
                <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark text-[14px] cursor-help" title="Controla el margen de error permitido al comparar el diseño visual de una página con sitios legítimos conocidos.">info</span>
              </span>
              <span className="text-primary">{visualTolerance > 85 ? 'Estricta' : visualTolerance > 50 ? 'Moderada' : 'Holgada'}</span>
            </div>
            <input 
              className="w-full h-1.5 bg-border-light dark:bg-background-dark rounded-lg appearance-none cursor-pointer" 
              max="100" 
              min="0" 
              type="range" 
              value={visualTolerance}
              onChange={(e) => setVisualTolerance(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Typosquatting Module */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors group">
          <div className="flex justify-between items-start">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500">
              <span className="material-symbols-outlined">domain_verification</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                className="sr-only peer" 
                type="checkbox" 
                checked={typoEnabled}
                onChange={(e) => setTypoEnabled(e.target.checked)}
              />
              <div className="w-11 h-6 bg-border-light dark:bg-border-dark peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Escudo contra Typosquatting</h4>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">Escanea en busca de manipulaciones sutiles en nombres de dominio (ej. 'g0ogle.com' vs 'google.com').</p>
          </div>
          <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark">
            <div className="flex justify-between text-sm mb-2 font-medium">
              <span className="flex items-center gap-1.5">
                Distancia de Levenshtein
                <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark text-[14px] cursor-help" title="Número máximo de caracteres que pueden variar en un dominio para ser considerado un intento de suplantación (typosquatting).">info</span>
              </span>
              <span className="text-primary">{Math.max(1, Math.round((100 - typoDistance) / 20))} Caracteres</span>
            </div>
            <input 
              className="w-full h-1.5 bg-border-light dark:bg-background-dark rounded-lg appearance-none cursor-pointer" 
              max="100" 
              min="0" 
              type="range" 
              value={typoDistance}
              onChange={(e) => setTypoDistance(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      {/* Test Site Section */}
      <div className="bg-background-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-1">
        <div className="bg-white dark:bg-[#151921] rounded-lg p-5 md:p-8 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 w-full">
            <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">science</span>
              Simulación de Prueba
            </h3>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-4">Ingresa una URL para ver cómo la calificarían los ajustes actuales de IA.</p>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-text-secondary-light dark:text-text-secondary-dark material-symbols-outlined">link</span>
              <input 
                className="w-full pl-10 pr-32 py-3 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                placeholder="https://ejemplo-login-sospechoso.com" 
                type="text"
                value={testUrl}
                onChange={(e) => setTestUrl(e.target.value)}
              />
              <button className="absolute right-1 top-1 bottom-1 bg-primary hover:bg-blue-600 text-white font-bold text-sm px-4 rounded-md transition-colors">
                Analizar
              </button>
            </div>
          </div>
          
          {/* Result Preview (Static for design) */}
          <div className="w-full md:w-auto min-w-[280px]">
            <div className="bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-text-secondary-light dark:text-text-secondary-dark uppercase">Resultado Predicho</span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  Bloquear
                </span>
              </div>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-3xl font-black text-white">88<span className="text-lg text-text-secondary-light dark:text-text-secondary-dark">/100</span></span>
              </div>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Puntuación de Riesgo</p>
              <div className="w-full bg-border-light dark:bg-[#282e39] rounded-full h-1.5 mt-3">
                <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* API Key Management Section */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-1">Gestión de Claves API</h3>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Genera y administra claves API para integraciones externas.</p>
          </div>
          <button 
            onClick={() => setShowGenerateModal(true)}
            className="px-4 py-2 bg-primary hover:bg-blue-600 text-white text-sm font-bold rounded-lg transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            Generar Nueva Clave
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-light dark:border-border-dark text-sm text-text-secondary-light dark:text-text-secondary-dark">
                <th className="pb-3 font-medium">Nombre</th>
                <th className="pb-3 font-medium">Permisos</th>
                <th className="pb-3 font-medium">Último Uso</th>
                <th className="pb-3 font-medium text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {apiKeys.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-text-secondary-light dark:text-text-secondary-dark text-sm">
                    No hay claves API generadas.
                  </td>
                </tr>
              ) : (
                apiKeys.map(key => (
                  <tr key={key.id} className="border-b border-border-light dark:border-border-dark last:border-0">
                    <td className="py-4 font-medium text-text-primary-light dark:text-text-primary-dark">{key.name}</td>
                    <td className="py-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {key.permissions === 'read-only' ? 'Solo Lectura' : 'Acceso Total'}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                      {key.lastUsed ? new Date(key.lastUsed).toLocaleDateString() : 'Nunca'}
                    </td>
                    <td className="py-4 text-right">
                      <button 
                        onClick={() => handleRevokeKey(key.id)}
                        className="text-red-500 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                        title="Revocar Clave"
                      >
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end gap-4 pb-8 items-center">
        {saveMessage && (
          <span className={`text-sm font-medium ${saveMessage.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
            {saveMessage}
          </span>
        )}
        <button 
          onClick={handleRestore}
          className="px-6 py-2.5 rounded-lg border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark font-bold text-sm transition-colors"
        >
          Restaurar Valores
        </button>
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className="px-6 py-2.5 rounded-lg bg-primary hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors shadow-lg shadow-primary/20 flex items-center gap-2"
        >
          {isSaving ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
              Guardando...
            </>
          ) : (
            'Guardar Configuración'
          )}
        </button>
      </div>

      {/* Generate Key Modal */}
      {showGenerateModal && !generatedKey && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-2xl w-full max-w-md p-6">
            <h3 className="text-xl font-bold mb-4 text-text-primary-light dark:text-text-primary-dark">Generar Nueva Clave API</h3>
            <div className="flex flex-col gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Nombre de la clave</span>
                <input 
                  type="text" 
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  placeholder="Ej. Integración SIEM"
                  className="w-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors text-text-primary-light dark:text-text-primary-dark"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Permisos</span>
                <select 
                  value={newKeyPermissions}
                  onChange={(e) => setNewKeyPermissions(e.target.value)}
                  className="w-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors appearance-none text-text-primary-light dark:text-text-primary-dark"
                >
                  <option value="read-only">Solo Lectura (Recomendado)</option>
                  <option value="full-access">Acceso Total</option>
                </select>
              </label>
            </div>
            <div className="flex justify-end gap-3 mt-8">
              <button 
                onClick={() => { setShowGenerateModal(false); setNewKeyName(''); }}
                className="px-4 py-2 text-sm font-bold text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={handleGenerateKey}
                disabled={!newKeyName.trim()}
                className="px-4 py-2 bg-primary hover:bg-blue-600 text-white text-sm font-bold rounded-lg transition-colors disabled:opacity-50"
              >
                Generar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Display Generated Key Modal */}
      {generatedKey && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center gap-3 text-green-500 mb-4">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
              <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">Clave Generada</h3>
            </div>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-4">
              Por favor, copia esta clave ahora. <strong className="text-red-500">No podrás volver a verla</strong> una vez que cierres esta ventana.
            </p>
            <div className="relative mb-6">
              <input 
                type="text" 
                readOnly 
                value={generatedKey}
                className="w-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg pl-4 pr-12 py-3 text-sm font-mono text-text-primary-light dark:text-text-primary-dark"
              />
              <button 
                onClick={() => { navigator.clipboard.writeText(generatedKey); setSaveMessage('Clave copiada al portapapeles'); setTimeout(() => setSaveMessage(''), 3000); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors"
                title="Copiar"
              >
                <span className="material-symbols-outlined text-[20px]">content_copy</span>
              </button>
            </div>
            <div className="flex justify-end">
              <button 
                onClick={() => { setGeneratedKey(null); setShowGenerateModal(false); setNewKeyName(''); }}
                className="px-4 py-2 bg-primary hover:bg-blue-600 text-white text-sm font-bold rounded-lg transition-colors"
              >
                He copiado la clave
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
