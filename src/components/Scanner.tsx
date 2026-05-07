import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Loader2, Globe, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { analyzeContent, PhishingAnalysis, AiSettings } from '../services/gemini';
import { collection, addDoc, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

export default function Scanner() {
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<PhishingAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [expandedIndicators, setExpandedIndicators] = useState<number[]>([]);

  const toggleIndicator = (index: number) => {
    setExpandedIndicators(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !content) {
      setError('Por favor, ingresa tanto la URL como el contenido a analizar.');
      return;
    }

    setIsScanning(true);
    setError(null);
    setResult(null);

    try {
      let domain = url.trim();
      try {
        if (!domain.startsWith('http')) {
          domain = 'https://' + domain;
        }
        const urlObj = new URL(domain);
        domain = urlObj.hostname;
      } catch (e) {
        domain = url.trim();
      }

      if (auth.currentUser) {
        const q = query(collection(db, 'safelist'), where('url', '==', domain));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const analysis: PhishingAnalysis = {
            isPhishing: false,
            threatLevel: 'low',
            confidence: 1,
            indicators: [{ flag: 'Dominio en lista de confianza', severity: 'low', explanation: `El dominio ${domain} está marcado como seguro.` }],
            explanation: `El dominio ${domain} está marcado como seguro por un administrador.`,
            recommendation: 'Navegación segura confirmada.'
          };
          setResult(analysis);
          setIsScanning(false);
          return;
        }
      }

      let settings: AiSettings | undefined = undefined;
      try {
        const settingsDoc = await getDoc(doc(db, 'settings', 'ai'));
        if (settingsDoc.exists()) {
          settings = settingsDoc.data() as AiSettings;
        }
      } catch (e) {
        console.error("Failed to fetch AI settings", e);
      }

      const analysis = await analyzeContent(url, content, settings);
      setResult(analysis);

      if (auth.currentUser) {
        try {
          await addDoc(collection(db, 'scans'), {
            userId: auth.currentUser.uid,
            url,
            contentSnippet: content.substring(0, 200),
            isPhishing: analysis.isPhishing,
            threatLevel: analysis.threatLevel,
            confidence: analysis.confidence,
            indicators: analysis.indicators,
            explanation: analysis.explanation,
            recommendation: analysis.recommendation,
            timestamp: new Date().toISOString()
          });
        } catch (firestoreErr) {
          handleFirestoreError(firestoreErr, OperationType.CREATE, 'scans');
        }
      }
    } catch (err: any) {
      setError(err.message || 'Error durante el escaneo');
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-4 gap-4">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold mb-3 uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-[14px]">document_scanner</span>
            Quantum Forensics
          </motion.div>
          <h2 className="text-3xl font-bold text-white tracking-tight">AI Scanner Sandbox</h2>
          <p className="text-sm text-slate-400 mt-1">Deep learning analysis for zero-day phishing detection.</p>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#0F1423] border border-white/5 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-50"></div>
        
        <form onSubmit={handleScan} className="space-y-8 relative z-10">
          <div className="space-y-3">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              Target Vector (URL)
            </label>
            <div className="relative group">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://suspicious-endpoint.com/login"
                className="w-full pl-12 pr-4 py-4 bg-[#060910] border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all text-white font-mono text-sm placeholder-slate-600 shadow-inner"
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
              Payload Content (HTML/Text)
            </label>
            <div className="w-full bg-[#060910] border border-white/10 rounded-xl focus-within:ring-2 focus-within:ring-purple-500/50 focus-within:border-purple-500 transition-all overflow-hidden min-h-[250px] shadow-inner relative">
              <div className="absolute top-2 right-4 text-[10px] text-slate-600 font-mono">syntax: markup</div>
              <Editor
                value={content}
                onValueChange={setContent}
                highlight={code => Prism.highlight(code, Prism.languages.markup, 'markup')}
                padding={24}
                style={{
                  fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                  fontSize: 13,
                  minHeight: '250px',
                  color: '#e2e8f0',
                  backgroundColor: 'transparent',
                }}
                textareaClassName="focus:outline-none"
                placeholder="Paste the suspicious content, HTML structure, or raw email body..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isScanning}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-blue-500 disabled:opacity-50 transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isScanning ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center gap-3"
                >
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Ejecutando Análisis NLP...
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center gap-3"
                >
                  <Shield className="w-5 h-5" />
                  Deploy AI Scanner
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </form>
      </motion.div>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl flex items-center gap-3 shadow-lg"
          >
            <AlertTriangle size={18} />
            <p className="text-sm font-medium">{error}</p>
          </motion.div>
        )}

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-1 border rounded-2xl shadow-2xl relative overflow-hidden ${
              result.isPhishing ? 'bg-gradient-to-b from-red-500/20 to-[#0F1423] border-red-500/30' : 'bg-gradient-to-b from-emerald-500/20 to-[#0F1423] border-emerald-500/30'
            }`}
          >
            <div className="bg-[#0F1423] rounded-xl p-8">
              <div className="flex flex-col md:flex-row items-start justify-between mb-10 gap-4">
                <div className="flex items-center gap-5">
                  <div className={`p-4 rounded-xl ${result.isPhishing ? 'bg-red-500/20 text-red-500 shadow-[0_0_30px_-5px_rgba(239,68,68,0.4)]' : 'bg-emerald-500/20 text-emerald-500 shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]'}`}>
                    {result.isPhishing ? <ShieldAlert size={36} /> : <ShieldCheck size={36} />}
                  </div>
                  <div>
                    <h3 className={`text-3xl font-bold tracking-tight ${result.isPhishing ? 'text-red-400' : 'text-emerald-400'}`}>
                      {result.isPhishing ? 'Amenaza Interceptada' : 'Vector Seguro'}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs font-mono uppercase text-slate-500 tracking-widest">Confianza IA:</span>
                      <span className="text-sm font-bold text-white bg-white/10 px-2 py-0.5 rounded">{(result.confidence * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
                <div className={`px-5 py-2 rounded-lg border font-bold text-xs uppercase tracking-[0.2em] ${
                  result.threatLevel === 'critical' ? 'bg-red-500/10 border-red-500/30 text-red-500' :
                  result.threatLevel === 'high' ? 'bg-orange-500/10 border-orange-500/30 text-orange-500' :
                  'bg-emerald-500/10 border-emerald-500/30 text-emerald-500'
                }`}>
                  Nivel: {result.threatLevel}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-slate-400 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Dictamen Forense
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-300 bg-white/5 p-4 rounded-xl border border-white/5">{result.explanation}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-slate-400 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Plan de Acción MITRE
                    </h4>
                    <p className="text-sm font-medium text-white bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">{result.recommendation}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Indicadores de Compromiso (IoCs)
                  </h4>
                  <div className="space-y-2">
                    {result.indicators.map((indicator, i) => (
                      <div key={i} className="bg-[#060910] border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors">
                        <button 
                          onClick={() => toggleIndicator(i)}
                          className="w-full flex items-center justify-between p-4 text-left"
                        >
                          <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                            <AlertTriangle size={15} className={`flex-shrink-0 ${result.isPhishing ? 'text-orange-500' : 'text-blue-500'}`} />
                            {typeof indicator === 'string' ? indicator : indicator.flag}
                          </div>
                          {expandedIndicators.includes(i) ? <ChevronUp size={16} className="text-slate-500" /> : <ChevronDown size={16} className="text-slate-500" />}
                        </button>
                        <AnimatePresence>
                          {expandedIndicators.includes(i) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="p-4 pt-0 text-sm text-slate-400 border-t border-white/5 mt-2 bg-[#0A0E17]">
                                {typeof indicator === 'string' ? 'No hay explicación detallada disponible.' : indicator.explanation}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ShieldAlert({ size }: { size: number }) {
  return <AlertTriangle size={size} />;
}

function ShieldCheck({ size }: { size: number }) {
  return <CheckCircle size={size} />;
}
