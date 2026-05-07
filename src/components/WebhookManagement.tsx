import { auth, db } from '../firebase';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, query, where, onSnapshot, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import { motion, AnimatePresence } from 'motion/react';

interface Webhook {
  id: string;
  name: string;
  url: string;
  events: string[];
  status: 'active' | 'inactive';
  createdAt: string;
}

export default function WebhookManagement() {
  const navigate = useNavigate();
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newUrl, setNewUrl] = useState('');
  const [newName, setNewName] = useState('');
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);

  const availableEvents = [
    'phishing_detected',
    'status_changed',
    'api_key_revoked',
    'new_device_login'
  ];

  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, 'webhooks'),
      where('userId', '==', auth.currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const hooks: Webhook[] = [];
      snapshot.forEach((doc) => {
        hooks.push({ id: doc.id, ...doc.data() } as Webhook);
      });
      hooks.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setWebhooks(hooks);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'webhooks');
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAddWebhook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser || !newUrl || !newName || selectedEvents.length === 0) return;

    try {
      const newWebhook = {
        userId: auth.currentUser.uid,
        name: newName,
        url: newUrl,
        events: selectedEvents,
        status: 'active',
        createdAt: new Date().toISOString()
      };

      await addDoc(collection(db, 'webhooks'), newWebhook);
      setShowModal(false);
      setNewUrl('');
      setNewName('');
      setSelectedEvents([]);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'webhooks');
    }
  };

  const handleToggleStatus = async (webhookId: string, currentStatus: string) => {
    try {
      await updateDoc(doc(db, 'webhooks', webhookId), {
        status: currentStatus === 'active' ? 'inactive' : 'active'
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `webhooks/${webhookId}`);
    }
  };

  const handleDeleteWebhook = async (webhookId: string) => {
    if (!window.confirm('Are you sure you want to delete this webhook?')) return;
    try {
      await deleteDoc(doc(db, 'webhooks', webhookId));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `webhooks/${webhookId}`);
    }
  };

  const toggleEventSelection = (event: string) => {
    setSelectedEvents(prev => 
      prev.includes(event) 
        ? prev.filter(e => e !== event)
        : [...prev, event]
    );
  };

  return (
    <div className="bg-[#f8faff] dark:bg-[#111621] font-sans min-h-screen flex flex-col text-slate-900 dark:text-slate-100">
      <div className="relative flex h-full w-full flex-col group/design-root overflow-x-hidden">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-[#1a202c] px-8 py-4 sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-[#0f172a] dark:text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#195de6]/10 text-[#195de6]">
                <span className="material-symbols-outlined">shield</span>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-tight">Anti-Phishing Security</h2>
            </div>
            <div className="relative hidden md:flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-[#64748b] text-xl">search</span>
              <input
                className="h-10 w-64 rounded-lg bg-[#f8faff] dark:bg-[#111621] border-none pl-10 pr-4 text-sm text-[#0f172a] dark:text-white placeholder-[#64748b] focus:ring-2 focus:ring-[#195de6]/50"
                placeholder="Buscar resources..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-6">
              <button onClick={() => navigate(-1)} className="text-[#64748b] hover:text-[#195de6] text-sm font-medium transition-colors">Atrás</button>
              <Link className="text-[#195de6] text-sm font-medium" to="/webhook-management">Webhooks</Link>
              <Link className="text-[#64748b] hover:text-[#195de6] text-sm font-medium transition-colors" to='/panel'>Logs</Link>
              <Link className="text-[#64748b] hover:text-[#195de6] text-sm font-medium transition-colors" to='/ajustes'>Configuración</Link>
            </nav>
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex h-9 items-center gap-2 rounded-lg border border-[#e2e8f0] dark:border-[#2d3748] px-3 text-sm font-medium text-[#0f172a] dark:text-white hover:bg-[#f8faff] dark:hover:bg-[#111621] transition-colors">
                <span className="material-symbols-outlined text-lg">description</span>
                Docs
              </button>
              <button className="h-9 w-9 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white" data-alt="User Avatar">
                <img
                  alt="User Profile"
                  className="h-full w-full object-cover"
                  src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"}
                />
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-8 md:px-8 lg:px-12 max-w-5xl mx-auto w-full">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-black tracking-tight mb-2">Webhooks</h1>
              <p className="text-[#64748b] max-w-2xl">Configure URLs to receive real-time notifications for security events.</p>
            </div>
            <div className="flex gap-3">
              <Link 
                to="/api-key-management"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white dark:bg-[#1a202c] border border-gray-200 dark:border-gray-700 px-5 text-sm font-bold text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                <span className="material-symbols-outlined text-lg">api</span>
                API Keys
              </Link>
              <button 
                onClick={() => setShowModal(true)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#195de6] px-5 text-sm font-bold text-white shadow-lg shadow-[#195de6]/20 hover:bg-blue-700 transition-all"
              >
                <span className="material-symbols-outlined text-lg">add</span>
                Add Webhook
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-[#1a202c] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 dark:bg-gray-800/50 border-b border-[#e2e8f0] dark:border-[#2d3748]">
                    <th className="px-6 py-3 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-xs font-semibold text-[#64748b] uppercase tracking-wider">URL</th>
                    <th className="px-6 py-3 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Events</th>
                    <th className="px-6 py-3 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Created</th>
                    <th className="px-6 py-3 text-xs font-semibold text-[#64748b] uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e2e8f0] dark:divide-[#2d3748]">
                  <AnimatePresence mode="wait">
                    {loading ? (
                      <motion.tr key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <td colSpan={6} className="px-6 py-8 text-center text-[#64748b]">
                          <div className="flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined animate-spin">refresh</span>
                            Loading webhooks...
                          </div>
                        </td>
                      </motion.tr>
                    ) : webhooks.length === 0 ? (
                      <motion.tr key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <td colSpan={6} className="px-6 py-8 text-center text-[#64748b]">No webhooks configured.</td>
                      </motion.tr>
                    ) : (
                      webhooks.map((webhook, index) => (
                        <motion.tr 
                          key={webhook.id} 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="group hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="font-medium text-sm">{webhook.name}</div>
                          </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-[#64748b] truncate max-w-[200px]" title={webhook.url}>{webhook.url}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {webhook.events.map(event => (
                              <span key={event} className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50">
                                {event}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <button 
                            onClick={() => handleToggleStatus(webhook.id, webhook.status)}
                            className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset transition-colors ${
                              webhook.status === 'active' 
                                ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 ring-green-600/20 dark:ring-green-400/20 hover:bg-green-100 dark:hover:bg-green-900/50' 
                                : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 ring-gray-500/10 dark:ring-gray-400/20 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                          >
                            {webhook.status === 'active' ? 'Active' : 'Inactive'}
                          </button>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#64748b]">
                          {new Date(webhook.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button 
                            onClick={() => handleDeleteWebhook(webhook.id)}
                            className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                            title="Delete Webhook"
                          >
                            <span className="material-symbols-outlined text-sm">delete</span>
                          </button>
                        </td>
                      </motion.tr>
                    ))
                  )}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Add Webhook Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/50 backdrop-blur-sm p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0" 
              onClick={() => setShowModal(false)} 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-md transform overflow-hidden rounded-xl bg-white dark:bg-[#1a202c] p-6 text-left align-middle shadow-2xl transition-all border border-gray-100 dark:border-[#2d3748] relative"
            >
              <div className="flex items-start justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Add Webhook</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <form onSubmit={handleAddWebhook}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] dark:text-white mb-1">Name</label>
                  <input 
                    type="text" 
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g., Slack Alerts"
                    className="w-full rounded-lg border border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-[#111621] px-4 py-2 text-sm text-[#0f172a] dark:text-white focus:border-[#195de6] focus:ring-1 focus:ring-[#195de6] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] dark:text-white mb-1">Payload URL</label>
                  <input 
                    type="url" 
                    required
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    placeholder="https://example.com/webhook"
                    className="w-full rounded-lg border border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-[#111621] px-4 py-2 text-sm text-[#0f172a] dark:text-white focus:border-[#195de6] focus:ring-1 focus:ring-[#195de6] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] dark:text-white mb-2">Events to send</label>
                  <div className="space-y-2 max-h-48 overflow-y-auto p-1">
                    {availableEvents.map(event => (
                      <label key={event} className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
                        <input 
                          type="checkbox" 
                          checked={selectedEvents.includes(event)}
                          onChange={() => toggleEventSelection(event)}
                          className="rounded border-gray-300 text-[#195de6] focus:ring-[#195de6]"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-mono">{event}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm font-medium text-[#64748b] hover:text-[#0f172a] dark:hover:text-white"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={!newUrl || !newName || selectedEvents.length === 0}
                  className="px-4 py-2 bg-[#195de6] text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add Webhook
                </button>
              </div>
            </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
