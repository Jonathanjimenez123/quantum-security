import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface AIThreatAnalysisProps {
  onBack?: () => void;
}

interface Indicator {
  id: number;
  name: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  score: number;
  description: string;
  explanation: string;
}

export default function AIThreatAnalysis({ onBack }: AIThreatAnalysisProps) {
  const [selectedIndicator, setSelectedIndicator] = useState<number | null>(null);
  const [urlToAnalyze, setUrlToAnalyze] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [indicators, setIndicators] = useState<Indicator[]>([]);
  const [overallConfidence, setOverallConfidence] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!urlToAnalyze.trim()) return;
    
    setIsAnalyzing(true);
    setError(null);
    setSelectedIndicator(null);
    setIndicators([]);
    setOverallConfidence(null);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: urlToAnalyze, content: "Please analyze the URL structure and domain reputation." })
      });
      
      if (!response.ok) {
        throw new Error('Failed to analyze URL');
      }
      
      const result = await response.json();
      
      const parsedIndicators = (result.indicators || []).map((ind: string, index: number) => ({
        id: index + 1,
        name: `Indicator ${index + 1}`,
        severity: result.threatLevel === 'critical' ? 'Critical' : result.threatLevel === 'high' ? 'High' : 'Medium',
        score: result.confidence ? Math.round(result.confidence * 100) : 50,
        description: ind,
        explanation: result.explanation || 'No detailed explanation provided.'
      }));
      
      setIndicators(parsedIndicators);
      setOverallConfidence(result.confidence ? Math.round(result.confidence * 100) : 50);
      
      if (parsedIndicators.length > 0) {
        setSelectedIndicator(parsedIndicators[0].id);
      }
    } catch (err) {
      console.error("Error analyzing URL:", err);
      setError("An error occurred while analyzing the URL. Please check your connection and try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-4 gap-4">
        <div className="flex items-center gap-4">
          {onBack && (
            <button onClick={onBack} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors border border-white/5">
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
          )}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold mb-3 uppercase tracking-widest"
            >
              <span className="material-symbols-outlined text-[14px]">psychology</span>
              GenAI Engine
            </motion.div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Threat Analysis Engine</h2>
            <p className="text-sm text-slate-400 mt-1">Deep learning evaluation of structural & semantic risks.</p>
          </div>
        </div>
        {overallConfidence !== null && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-4 bg-[#0F1423] px-5 py-3 rounded-2xl border border-white/5 shadow-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Net Risk Score</span>
            <span className={`text-3xl font-bold ${overallConfidence > 75 ? 'text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]' : overallConfidence > 40 ? 'text-orange-500' : 'text-emerald-500'}`}>
              {overallConfidence}%
            </span>
          </motion.div>
        )}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#0F1423] border border-white/5 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          Input Vector
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <div className="relative flex-1 group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 material-symbols-outlined group-focus-within:text-purple-400 transition-colors">link</span>
            <input 
              type="text" 
              value={urlToAnalyze}
              onChange={(e) => setUrlToAnalyze(e.target.value)}
              placeholder="Inject URL matrix (e.g., https://suspicious.local)"
              className="w-full bg-[#060910] border border-white/10 text-white rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 outline-none transition-all font-mono text-sm placeholder-slate-600 shadow-inner"
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
            />
          </div>
          <button 
            onClick={handleAnalyze}
            disabled={isAnalyzing || !urlToAnalyze.trim()}
            className="bg-purple-600/90 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)]"
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white"></div>
                Processing...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">search</span>
                Analyze
              </>
            )}
          </button>
        </div>
        {error && (
          <p className="text-red-400 text-sm mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/20">{error}</p>
        )}
      </motion.div>

      {indicators.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2 space-y-6">
            <div className="bg-[#0F1423] border border-white/5 rounded-2xl p-6 max-h-[600px] flex flex-col shadow-2xl relative overflow-hidden">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Extracted Sub-Vectors
              </h2>
              <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar relative z-10 flex-1">
                {indicators.map((indicator) => (
                  <motion.div 
                    key={indicator.id}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${selectedIndicator === indicator.id ? 'bg-[#151B2B] border-purple-500 shadow-[0_0_15px_-3px_rgba(168,85,247,0.2)]' : 'bg-[#060910] border-white/5 hover:border-white/10 hover:bg-[#151B2B]/50'}`}
                    onClick={() => setSelectedIndicator(indicator.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className={`material-symbols-outlined text-[18px] ${indicator.severity === 'Critical' ? 'text-red-500' : indicator.severity === 'High' ? 'text-orange-500' : indicator.severity === 'Medium' ? 'text-yellow-500' : 'text-blue-500'}`}>
                          {indicator.severity === 'Critical' ? 'dangerous' : indicator.severity === 'High' ? 'warning' : 'info'}
                        </span>
                        <h3 className="text-sm font-bold text-white tracking-wide">{indicator.name}</h3>
                      </div>
                      <div className="bg-white/5 px-2 py-0.5 rounded text-xs font-mono font-bold text-slate-300">
                        {indicator.score}%
                      </div>
                    </div>
                    <div className="w-full bg-[#060910] h-1 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        className={`h-full ${indicator.score > 80 ? 'bg-red-500' : indicator.score > 50 ? 'bg-orange-500' : 'bg-blue-500'}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${indicator.score}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-3 space-y-6">
            <div className="bg-[#0F1423] border border-white/5 rounded-2xl p-8 h-full shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-purple-400">auto_awesome</span>
                GenAI Reasoning Context
              </h2>
              <AnimatePresence mode="wait">
                {selectedIndicator ? (
                  <motion.div 
                    key={`ind-${selectedIndicator}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="bg-[#060910] p-6 rounded-xl border border-white/5 relative">
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Identified Pattern</h3>
                      <p className="text-base text-slate-300 leading-relaxed font-medium">
                        {indicators.find(i => i.id === selectedIndicator)?.description}
                      </p>
                    </div>
                    <div className="bg-purple-500/10 p-6 border border-purple-500/20 rounded-xl relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-3">Forensic Explanation</h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {indicators.find(i => i.id === selectedIndicator)?.explanation}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <div className="size-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-3xl text-slate-600">touch_app</span>
                    </div>
                    <p className="text-slate-400 text-sm font-medium">Select a sub-vector to view the AI's detailed reasoning trace.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
