import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import IncidentReportingModal from './IncidentReportingModal';
import jsPDF from 'jspdf';
import { toPng } from 'html-to-image';

interface PersonalSecurityProfileProps {
  onBack: () => void;
}

export default function PersonalSecurityProfile({ onBack }: PersonalSecurityProfileProps) {
  const [showIncidentModal, setShowIncidentModal] = useState(false);
  const [cultureScore, setCultureScore] = useState(85);
  const [threatsAvoided, setThreatsAvoided] = useState(142);
  const [modulesCompleted, setModulesCompleted] = useState(12);
  const [completedModulesData, setCompletedModulesData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const downloadCertificate = async (moduleName: string, date: string) => {
    if (!certificateRef.current) return;
    setIsDownloading(true);
    
    try {
      // Update the hidden certificate template with the specific module data
      const moduleNameEl = certificateRef.current.querySelector('#cert-module-name');
      const dateEl = certificateRef.current.querySelector('#cert-date');
      if (moduleNameEl) moduleNameEl.textContent = moduleName;
      if (dateEl) dateEl.textContent = date;

      const imgData = await toPng(certificateRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: '#ffffff'
      });
      
      const width = certificateRef.current.offsetWidth * 2;
      const height = certificateRef.current.offsetHeight * 2;

      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [width, height]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save(`Certificado_${moduleName.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error('Error generating certificate:', error);
      alert('Hubo un error al generar el certificado.');
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!auth.currentUser) return;
      
      setIsLoading(true);
      try {
        const userId = auth.currentUser.uid;
        
        // Fetch user culture score
        const userDoc = await getDoc(doc(db, 'users', userId));
        if (userDoc.exists() && userDoc.data().cultureScore !== undefined) {
          setCultureScore(userDoc.data().cultureScore);
        }
        
        // Fetch incidents reported by user
        const incidentsRef = collection(db, 'incidents');
        const incidentsQuery = query(incidentsRef, where('userId', '==', userId));
        const incidentsSnapshot = await getDocs(incidentsQuery);
        if (incidentsSnapshot.size > 0) {
          setThreatsAvoided(142 + incidentsSnapshot.size);
        }
        
        // Fetch completed training modules
        const progressRef = collection(db, 'training_progress');
        const progressQuery = query(progressRef, where('userId', '==', userId), where('status', '==', 'completed'));
        const progressSnapshot = await getDocs(progressQuery);
        if (progressSnapshot.size > 0) {
          setModulesCompleted(progressSnapshot.size);
          const modules = progressSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setCompletedModulesData(modules);
        }
        
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, 'users/incidents/training_progress');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, [showIncidentModal]); // Re-fetch when modal closes to update stats

  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] text-slate-900 dark:text-slate-100 font-['Inter',sans-serif] min-h-screen flex flex-col overflow-x-hidden">
      {showIncidentModal && (
        <IncidentReportingModal onClose={() => setShowIncidentModal(false)} />
      )}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        /* Custom scrollbar for webkit */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #101922; 
        }
        ::-webkit-scrollbar-thumb {
            background: #283039; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #3b4754; 
        }
      `}</style>

      {/* Navbar */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#283039] bg-[#f6f7f8] dark:bg-[#101922] px-10 py-3 w-full">
        <div className="flex items-center gap-4 cursor-pointer" onClick={onBack}>
          <div className="size-8 flex items-center justify-center text-[#137fec]">
            <span className="material-symbols-outlined text-3xl">shield_lock</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Security Shield</h2>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-9">
            <Link className="text-slate-600 dark:text-slate-300 hover:text-[#137fec] dark:hover:text-[#137fec] text-sm font-medium leading-normal transition-colors" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
            <Link className="text-slate-900 dark:text-white text-sm font-medium leading-normal" to='/perfil-usuario'>Profile</Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-[#137fec] dark:hover:text-[#137fec] text-sm font-medium leading-normal transition-colors" to='/entrenamiento-interactivo'>Training</Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-[#137fec] dark:hover:text-[#137fec] text-sm font-medium leading-normal transition-colors" to='/ajustes'>Configuración</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-slate-200 dark:bg-[#283039] hover:bg-slate-300 dark:hover:bg-[#3b4754] text-slate-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
              <span className="truncate">Cerrar Sesión</span>
            </button>
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-[#137fec]/20" data-alt="User profile picture of a smiling man" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 py-8 md:px-10 lg:px-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">My Security Profile</h1>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal max-w-2xl">Track your progress and achievements in keeping the organization safe. Your diligence protects everyone.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#137fec]/10 border border-[#137fec]/20">
            <span className="material-symbols-outlined text-[#137fec] text-sm">verified_user</span>
            <span className="text-[#137fec] text-sm font-bold">Verified Employee</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Main Stats & Activity */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Security Score Card */}
            <div className="rounded-xl bg-white dark:bg-[#1b2631] p-6 border border-slate-200 dark:border-[#283039] shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#137fec]">security</span>
                    Personal Security Score
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Updated in real-time based on your browsing habits.</p>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border border-yellow-500/30 text-sm font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-lg">military_tech</span>
                  Shield Level: Gold
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-end">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">{cultureScore}<span className="text-xl text-slate-400 font-medium">/100</span></span>
                  <span className="text-sm font-medium text-[#10b981] flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">trending_up</span>
                    Top 10%
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-[#283039] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#137fec] to-blue-400 rounded-full" style={{ width: `${cultureScore}%` }}></div>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Great job! You are {100 - cultureScore} points away from reaching Platinum status.</p>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-white dark:bg-[#1b2631] p-6 border border-slate-200 dark:border-[#283039] shadow-sm flex items-center gap-5">
                <div className="size-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 dark:text-green-400">
                  <span className="material-symbols-outlined text-2xl">shield</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{threatsAvoided}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Threats Avoided</div>
                </div>
              </div>
              <div className="rounded-xl bg-white dark:bg-[#1b2631] p-6 border border-slate-200 dark:border-[#283039] shadow-sm flex items-center gap-5">
                <div className="size-12 rounded-full bg-[#137fec]/20 flex items-center justify-center text-[#137fec]">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{modulesCompleted}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Modules Completed</div>
                </div>
              </div>
            </div>

            {/* Recent Activity Timeline */}
            <div className="rounded-xl bg-white dark:bg-[#1b2631] p-6 border border-slate-200 dark:border-[#283039] shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Recent Activity</h3>
              <div className="relative pl-4 border-l border-slate-200 dark:border-[#283039] space-y-8">
                {/* Item 1 */}
                <div className="relative">
                  <div className="absolute -left-[21px] top-0 size-3 rounded-full bg-[#137fec] ring-4 ring-white dark:ring-[#1b2631]"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-[#137fec] uppercase tracking-wider">Today</span>
                    <h4 className="text-base font-medium text-slate-900 dark:text-white">Safe Browsing Streak: 30 Days</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">You haven't clicked on any phishing simulation links for a month.</p>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="relative">
                  <div className="absolute -left-[21px] top-0 size-3 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-white dark:ring-[#1b2631]"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider">2 Days Ago</span>
                    <h4 className="text-base font-medium text-slate-900 dark:text-white">Completed: "Password Hygiene 101"</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Scored 100% on the quiz.</p>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="relative">
                  <div className="absolute -left-[21px] top-0 size-3 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-white dark:ring-[#1b2631]"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider">Last Week</span>
                    <h4 className="text-base font-medium text-slate-900 dark:text-white">Badge Earned: Quick Spotter</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Identified a suspicious email in under 30 seconds.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badges Gallery */}
            <div className="rounded-xl bg-white dark:bg-[#1b2631] p-6 border border-slate-200 dark:border-[#283039] shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Insignias y Logros</h3>
                <Link className="text-sm font-medium text-[#137fec] hover:underline" to='/panel'>Ver Todo</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {/* Badge 1 */}
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-50 dark:bg-[#101922] border border-slate-100 dark:border-[#283039] hover:border-[#137fec]/50 transition-colors group cursor-pointer">
                  <div className="size-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-3xl">psychology</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Experto PNL</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Desbloqueado 12 Oct</div>
                  </div>
                </div>
                {/* Badge 2 */}
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-50 dark:bg-[#101922] border border-slate-100 dark:border-[#283039] hover:border-[#137fec]/50 transition-colors group cursor-pointer">
                  <div className="size-16 rounded-full bg-gradient-to-br from-blue-400 to-[#137fec] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-3xl">phishing</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Pro Anti-Phish</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Desbloqueado 28 Sep</div>
                  </div>
                </div>
                {/* Badge 3 */}
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-50 dark:bg-[#101922] border border-slate-100 dark:border-[#283039] hover:border-[#137fec]/50 transition-colors group cursor-pointer">
                  <div className="size-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-3xl">lock_clock</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Maestro de Racha</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Desbloqueado 15 Ago</div>
                  </div>
                </div>
                {/* Badge 4 (Locked) */}
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-50 dark:bg-[#101922] border border-slate-100 dark:border-[#283039] opacity-60">
                  <div className="size-16 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-500">
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-3xl">workspace_premium</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Usuario Platino</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Bloqueado</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificates Section */}
            <div className="rounded-xl bg-white dark:bg-[#1b2631] p-6 border border-slate-200 dark:border-[#283039] shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Certificados de Aprendizaje</h3>
                <Link className="text-sm font-medium text-[#137fec] hover:underline" to='/panel'>Ver Todos</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {completedModulesData.length > 0 ? (
                  completedModulesData.map((module, index) => {
                    const dateStr = module.completedAt?.toDate ? module.completedAt.toDate().toLocaleDateString() : new Date().toLocaleDateString();
                    return (
                      <div key={module.id || index} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-[#101922] border border-slate-100 dark:border-[#283039] hover:border-[#137fec]/50 transition-colors group cursor-pointer" onClick={() => downloadCertificate(module.moduleId, dateStr)}>
                        <div className="size-12 rounded bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                          <span className="material-symbols-outlined text-2xl">workspace_premium</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">{module.moduleId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Emitido: {dateStr}</p>
                        </div>
                        <button 
                          className="text-slate-400 hover:text-[#137fec] transition-colors" 
                          title="Descargar Certificado"
                          disabled={isDownloading}
                        >
                          <span className="material-symbols-outlined">
                            {isDownloading ? 'hourglass_empty' : 'download'}
                          </span>
                        </button>
                      </div>
                    );
                  })
                ) : (
                  <div className="col-span-1 sm:col-span-2 text-center py-6 text-slate-500 dark:text-slate-400">
                    Aún no tienes certificados. ¡Completa un módulo para ganar uno!
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar & Next Steps */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Suggested Next Step */}
            <div className="rounded-xl bg-gradient-to-b from-[#137fec]/10 to-transparent dark:from-[#137fec]/20 dark:to-[#1b2631] p-6 border border-[#137fec]/20 dark:border-[#137fec]/30 relative overflow-hidden">
              {/* Abstract decoration */}
              <div className="absolute -top-10 -right-10 size-32 bg-[#137fec]/20 rounded-full blur-3xl"></div>
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[#137fec]">lightbulb</span>
                <span className="text-sm font-bold text-[#137fec] uppercase tracking-wide">Suggested Next Step</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Boost your score to 90</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">Complete the "Advanced Social Engineering" module to earn 5 points and unlock the Platinum Badge.</p>
              <div className="p-4 rounded-lg bg-white/50 dark:bg-[#101922] border border-slate-200 dark:border-[#283039] mb-6 flex gap-4">
                <div className="w-16 h-16 rounded bg-slate-200 dark:bg-slate-700 flex-shrink-0 bg-cover bg-center" data-alt="Abstract cyber security lock illustration" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">Social Engineering</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">15 min • Intermediate</span>
                </div>
              </div>
              <button className="w-full py-3 px-4 bg-[#137fec] hover:bg-blue-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#137fec]/20">
                Start Training
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            {/* Quick Stats / Mini Cards */}
            <div className="rounded-xl bg-white dark:bg-[#1b2631] p-6 border border-slate-200 dark:border-[#283039] shadow-sm">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Your Team Ranking</h3>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-black text-slate-900 dark:text-white">#4</span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">in Engineering Dept.</span>
                  <span className="text-xs text-green-500 font-medium">▲ Up 2 spots this week</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 text-center text-sm font-bold text-slate-400">1</div>
                  <div className="size-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold">JD</div>
                  <div className="flex-1 h-2 bg-slate-100 dark:bg-[#283039] rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-[98%]"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 text-center text-sm font-bold text-slate-400">2</div>
                  <div className="size-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-xs font-bold">AS</div>
                  <div className="flex-1 h-2 bg-slate-100 dark:bg-[#283039] rounded-full overflow-hidden">
                    <div className="h-full bg-pink-500 w-[92%]"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 text-center text-sm font-bold text-slate-400">3</div>
                  <div className="size-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">MK</div>
                  <div className="flex-1 h-2 bg-slate-100 dark:bg-[#283039] rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[88%]"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 -mx-2 bg-[#137fec]/5 rounded-lg border border-[#137fec]/10">
                  <div className="w-6 text-center text-sm font-bold text-[#137fec]">4</div>
                  <div className="size-8 rounded-full bg-[#137fec] text-white flex items-center justify-center text-xs font-bold">You</div>
                  <div className="flex-1 h-2 bg-slate-100 dark:bg-[#283039] rounded-full overflow-hidden">
                    <div className="h-full bg-[#137fec] w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="rounded-xl bg-white dark:bg-[#1b2631] p-6 border border-slate-200 dark:border-[#283039] shadow-sm">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Need Help?</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">If you suspect a security breach or have questions about a specific email.</p>
              <button 
                onClick={() => setShowIncidentModal(true)}
                className="w-full py-2.5 px-4 bg-slate-100 dark:bg-[#283039] hover:bg-slate-200 dark:hover:bg-[#3b4754] text-slate-900 dark:text-white font-medium rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">report</span>
                Report Incident
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Hidden Certificate Template */}
      <div 
        ref={certificateRef} 
        style={{ position: 'absolute', left: '-9999px', top: '-9999px', width: '1056px', height: '816px' }} 
        className="bg-white p-12 relative overflow-hidden text-slate-900 font-sans"
      >
        <div className="absolute inset-0 border-[16px] border-[#137fec]/10 pointer-events-none"></div>
        <div className="absolute inset-4 border-2 border-[#137fec]/20 pointer-events-none"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#137fec]/5 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-tl-full"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <div className="mb-8 text-[#137fec]">
            <span className="material-symbols-outlined" style={{ fontSize: '80px' }}>shield_with_heart</span>
          </div>
          
          <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-2 uppercase">Certificado de Finalización</h1>
          <p className="text-xl text-slate-500 font-medium tracking-widest uppercase mb-12">Academia de Seguridad AI</p>
          
          <p className="text-lg text-slate-600 mb-4">Se certifica que</p>
          <h2 className="text-4xl font-bold text-[#137fec] mb-4 border-b-2 border-[#137fec]/20 pb-2 px-12 inline-block">
            {auth.currentUser?.displayName || auth.currentUser?.email || 'Estudiante de Seguridad'}
          </h2>
          
          <p className="text-lg text-slate-600 mb-8 max-w-2xl">
            Ha completado con éxito el módulo de entrenamiento
            <br/>
            <strong className="text-2xl text-slate-800 mt-2 block" id="cert-module-name">Nombre del Módulo</strong>
          </p>
          
          <div className="flex items-center justify-center gap-16 mt-8">
            <div className="text-center">
              <div className="w-48 border-b-2 border-slate-300 mb-2"></div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Firma del Instructor</p>
            </div>
            
            <div className="size-32 rounded-full border-4 border-emerald-500/20 flex items-center justify-center relative">
              <div className="absolute inset-2 rounded-full border border-emerald-500/40 border-dashed"></div>
              <span className="material-symbols-outlined text-emerald-500" style={{ fontSize: '48px' }}>verified</span>
            </div>
            
            <div className="text-center">
              <div className="w-48 border-b-2 border-slate-300 mb-2 pb-1 text-lg font-medium text-slate-700" id="cert-date">
                Fecha
              </div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Fecha de Emisión</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
