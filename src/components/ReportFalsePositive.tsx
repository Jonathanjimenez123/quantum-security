import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';

interface ReportFalsePositiveProps {
  onClose: () => void;
  domain?: string;
}

export default function ReportFalsePositive({ onClose, domain = 'example-bank-login.com' }: ReportFalsePositiveProps) {
  const [category, setCategory] = useState('');
  const [reasoning, setReasoning] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!auth.currentUser) {
      alert('Debes iniciar sesión para reportar.');
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'incidents'), {
        title: `Falso Positivo: ${domain}`,
        description: `Categoría: ${category}\nRazonamiento: ${reasoning}`,
        severity: 'low',
        status: 'open',
        reportedBy: auth.currentUser.uid,
        createdAt: new Date().toISOString()
      });
      alert('Reporte enviado con éxito.');
      onClose();
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'incidents');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 font-display">
      {/* Main Container / Modal Window */}
      <div className="w-full max-w-[560px] bg-white dark:bg-[#1c2333] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header Section */}
        <div className="px-8 pt-8 pb-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-orange-500 text-3xl">shield_question</span>
            <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">Reportar un Falso Positivo</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-1">
            Estás reportando: <span className="font-mono text-primary font-medium bg-primary/10 px-2 py-0.5 rounded">{domain}</span>
          </p>
        </div>

        {/* Form Content */}
        <div className="px-8 py-2 flex flex-col gap-6">
          {/* Category Select */}
          <div className="flex flex-col gap-2">
            <label className="text-slate-900 dark:text-slate-200 text-sm font-semibold">Categoría del Sitio</label>
            <div className="relative">
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full appearance-none rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#141925] text-slate-900 dark:text-slate-100 px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              >
                <option disabled value="">Selecciona una categoría...</option>
                <option value="internal">Herramienta de Negocios Interna</option>
                <option value="finance">Finanzas Personales / Banca</option>
                <option value="shopping">Comercio Electrónico / Compras</option>
                <option value="social">Redes Sociales</option>
                <option value="other">Otro</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-xl">expand_more</span>
              </div>
            </div>
          </div>

          {/* Reasoning Textarea */}
          <div className="flex flex-col gap-2">
            <label className="text-slate-900 dark:text-slate-200 text-sm font-semibold">Razonamiento</label>
            <textarea 
              value={reasoning}
              onChange={(e) => setReasoning(e.target.value)}
              className="w-full min-h-[120px] rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#141925] text-slate-900 dark:text-slate-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none placeholder-slate-400 dark:placeholder-slate-500 transition-all" 
              placeholder="¿Por qué crees que este sitio es seguro? Por favor, proporciona cualquier detalle que pueda ayudar a nuestro equipo a revisarlo rápidamente."
            ></textarea>
          </div>

          {/* Data Sharing Disclosure */}
          <div className="bg-primary/5 dark:bg-primary/10 border border-primary/10 rounded-lg p-4">
            <h4 className="text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">info</span>
              Qué se compartirá
            </h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  <span className="material-symbols-outlined text-sm">screenshot_monitor</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 dark:text-slate-200 text-sm font-medium">Captura de pantalla de la página</span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs">Se usa para verificar visualmente el contenido del sitio.</span>
                </div>
              </div>
              <div className="w-full h-px bg-slate-200 dark:bg-slate-700/50 my-1"></div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  <span className="material-symbols-outlined text-sm">code</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 dark:text-slate-200 text-sm font-medium">Estructura HTML anonimizada</span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs">Nos ayuda a mejorar nuestros algoritmos de detección.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 dark:bg-[#141925] px-8 py-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting || !category || !reasoning}
            className="w-full bg-primary hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3.5 px-6 rounded-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all"
          >
            {isSubmitting ? (
              <span className="material-symbols-outlined animate-spin">refresh</span>
            ) : (
              <span className="material-symbols-outlined">verified_user</span>
            )}
            Enviar Reporte y Añadir a Lista Blanca Temporal
          </button>
          <button 
            onClick={onClose}
            disabled={isSubmitting}
            className="w-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm py-2 transition-colors disabled:opacity-50"
          >
            Cancelar
          </button>
          <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-2">
            Tu reporte ayuda a hacer internet más seguro para todos. 
            <Link className="underline hover:text-primary ml-1" to="/privacy-compliance">Lee nuestra Política de Privacidad</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
