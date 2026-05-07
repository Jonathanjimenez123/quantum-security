import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';

interface IncidentReportingModalProps {
  onClose: () => void;
}

export default function IncidentReportingModal({ onClose }: IncidentReportingModalProps) {
  const [type, setType] = useState('phishing');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) {
      setError('You must be logged in to report an incident.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await addDoc(collection(db, 'incidents'), {
        userId: auth.currentUser.uid,
        type,
        description,
        status: 'open',
        reportedAt: serverTimestamp(),
      });
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, 'incidents');
      setError('Failed to submit report. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-[#1b2631] rounded-xl shadow-2xl w-full max-w-md border border-slate-200 dark:border-[#283039] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-[#283039]">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-red-500">report</span>
            Report Security Incident
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {success ? (
          <div className="p-8 text-center flex flex-col items-center gap-4">
            <div className="size-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Report Submitted</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Thank you for reporting. Our security team will investigate immediately.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                {error}
              </div>
            )}
            
            <div className="flex flex-col gap-2">
              <label htmlFor="type" className="text-sm font-medium text-slate-700 dark:text-slate-300">Incident Type</label>
              <select 
                id="type" 
                value={type} 
                onChange={(e) => setType(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-[#101922] border border-slate-200 dark:border-[#283039] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#137fec]/50"
              >
                <option value="phishing">Phishing Email/Link</option>
                <option value="malware">Suspected Malware/Virus</option>
                <option value="unauthorized_access">Unauthorized Access</option>
                <option value="data_leak">Potential Data Leak</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
              <textarea 
                id="description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={4}
                placeholder="Please describe what happened, including any relevant URLs or details..."
                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-[#101922] border border-slate-200 dark:border-[#283039] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#137fec]/50 resize-none"
              ></textarea>
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button 
                type="button" 
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#283039] transition-colors"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button 
                type="submit"
                disabled={isSubmitting || !description.trim()}
                className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-bold transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="material-symbols-outlined animate-spin text-sm">refresh</span>
                ) : (
                  <span className="material-symbols-outlined text-sm">send</span>
                )}
                Submit Report
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
