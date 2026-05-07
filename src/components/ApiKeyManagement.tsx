import { auth, db } from '../firebase';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, where, onSnapshot, addDoc, updateDoc, doc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import { motion, AnimatePresence } from 'motion/react';

interface ApiKeyManagementProps {
  onBack?: () => void;
}

interface ApiKey {
  id: string;
  name: string;
  key: string;
  permissions: string;
  status: 'active' | 'revoked';
  createdAt: string;
  lastUsed?: string;
}

export default function ApiKeyManagement({ onBack }: ApiKeyManagementProps) {
  const [showModal, setShowModal] = useState(false);
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [newKeyName, setNewKeyName] = useState('');
  const [newKeyPermissions, setNewKeyPermissions] = useState('Read Only');
  const [loading, setLoading] = useState(true);
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);

  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, 'apiKeys'),
      where('userId', '==', auth.currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const keys: ApiKey[] = [];
      snapshot.forEach((doc) => {
        keys.push({ id: doc.id, ...doc.data() } as ApiKey);
      });
      // Sort by creation date descending
      keys.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setApiKeys(keys);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'apiKeys');
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const generateApiKey = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = 'sk_live_';
    for (let i = 0; i < 32; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleCreateKey = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser || !newKeyName) return;

    try {
      const key = generateApiKey();
      const newKey = {
        userId: auth.currentUser.uid,
        name: newKeyName,
        key: key,
        permissions: newKeyPermissions,
        status: 'active',
        createdAt: new Date().toISOString()
      };

      await addDoc(collection(db, 'apiKeys'), newKey);
      setGeneratedKey(key);
      setNewKeyName('');
      setNewKeyPermissions('Read Only');
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'apiKeys');
    }
  };

  const handleRevokeKey = async (keyId: string) => {
    try {
      await updateDoc(doc(db, 'apiKeys', keyId), {
        status: 'revoked'
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `apiKeys/${keyId}`);
    }
  };

  const activeKeysCount = apiKeys.filter(k => k.status === 'active').length;
  const revokedKeysCount = apiKeys.filter(k => k.status === 'revoked').length;

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
              <button onClick={onBack} className="text-[#64748b] hover:text-[#195de6] text-sm font-medium transition-colors">Panel de Control</button>
              <Link className="text-[#195de6] text-sm font-medium" to="/apidocumentation">API Keys</Link>
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

        <main className="flex-1 px-4 py-8 md:px-8 lg:px-12 max-w-7xl mx-auto w-full">
          {/* Page Title & Primary Action */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#0f172a] dark:text-white text-3xl font-black tracking-tight">API Key Management</h1>
              <p className="text-[#64748b] text-base max-w-2xl">Manage secure access tokens for your integrations. Rotate keys periodically to maintain security standards.</p>
            </div>
            <div className="flex gap-3">
              <Link 
                to="/webhook-management"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white dark:bg-[#1a202c] border border-gray-200 dark:border-gray-700 px-5 text-sm font-bold text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                <span className="material-symbols-outlined text-lg">webhook</span>
                Webhooks
              </Link>
              <button 
                onClick={() => setShowModal(true)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#195de6] px-5 text-sm font-bold text-white shadow-lg shadow-[#195de6]/20 hover:bg-blue-700 transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-lg">add</span>
                Generate New API Key
              </button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-xl border border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-[#1a202c] p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[#64748b] text-sm font-medium">Active Keys</p>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <span className="material-symbols-outlined text-lg">check_circle</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-[#0f172a] dark:text-white text-3xl font-bold">{activeKeysCount}</p>
                <span className="text-green-600 text-sm font-medium flex items-center">
                  <span className="material-symbols-outlined text-sm mr-0.5">trending_up</span>
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-[#1a202c] p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[#64748b] text-sm font-medium">Revoked Keys</p>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <span className="material-symbols-outlined text-lg">block</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-[#0f172a] dark:text-white text-3xl font-bold">{revokedKeysCount}</p>
                <span className="text-[#64748b] text-sm font-medium">Total history</span>
              </div>
            </div>
            <div className="rounded-xl border border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-[#1a202c] p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[#64748b] text-sm font-medium">Total Requests (24h)</p>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-[#195de6]">
                  <span className="material-symbols-outlined text-lg">show_chart</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-[#0f172a] dark:text-white text-3xl font-bold">0</p>
                <span className="text-green-600 text-sm font-medium flex items-center">
                </span>
              </div>
            </div>
          </div>

          {/* API Keys Table */}
          <div className="rounded-xl border border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-[#1a202c] shadow-sm overflow-hidden mb-8">
            <div className="border-b border-[#e2e8f0] dark:border-[#2d3748] px-6 py-4 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/50">
              <h3 className="text-base font-semibold text-[#0f172a] dark:text-white">Active Keys</h3>
              <div className="flex items-center gap-2">
                <button className="p-2 text-[#64748b] hover:text-[#195de6] rounded hover:bg-[#195de6]/5 transition-colors">
                  <span className="material-symbols-outlined text-xl">filter_list</span>
                </button>
                <button className="p-2 text-[#64748b] hover:text-[#195de6] rounded hover:bg-[#195de6]/5 transition-colors">
                  <span className="material-symbols-outlined text-xl">download</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 dark:bg-gray-800/50 border-b border-[#e2e8f0] dark:border-[#2d3748]">
                    <th className="px-6 py-3 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Key Name</th>
                    <th className="px-6 py-3 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Token Preview</th>
                    <th className="px-6 py-3 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Created</th>
                    <th className="px-6 py-3 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Last Used</th>
                    <th className="px-6 py-3 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Permissions</th>
                    <th className="px-6 py-3 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-3 text-xs font-semibold text-[#64748b] uppercase tracking-wider text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e2e8f0] dark:divide-[#2d3748]">
                  <AnimatePresence mode="wait">
                    {loading ? (
                      <motion.tr key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <td colSpan={7} className="px-6 py-8 text-center text-[#64748b]">
                          <div className="flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined animate-spin">refresh</span>
                            Cargando claves...
                          </div>
                        </td>
                      </motion.tr>
                    ) : apiKeys.length === 0 ? (
                      <motion.tr key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <td colSpan={7} className="px-6 py-8 text-center text-[#64748b]">No hay claves API generadas.</td>
                      </motion.tr>
                    ) : (
                      apiKeys.map((apiKey, index) => (
                        <motion.tr 
                          key={apiKey.id} 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`group hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${apiKey.status === 'revoked' ? 'opacity-60' : ''}`}
                        >
                          <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`h-8 w-8 rounded flex items-center justify-center ${apiKey.status === 'active' ? 'bg-[#195de6]/10 text-[#195de6]' : 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500'}`}>
                              <span className="material-symbols-outlined text-lg">api</span>
                            </div>
                            <span className={`font-medium text-sm ${apiKey.status === 'active' ? 'text-[#0f172a] dark:text-white' : 'text-gray-400 dark:text-gray-500 line-through'}`}>{apiKey.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-[#64748b] dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                              {apiKey.key.substring(0, 12)}...
                            </code>
                            <button 
                              className="text-[#64748b] hover:text-[#195de6]" 
                              title="Copy ID"
                              onClick={() => navigator.clipboard.writeText(apiKey.key)}
                            >
                              <span className="material-symbols-outlined text-sm">content_copy</span>
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#64748b]">
                          {new Date(apiKey.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-sm text-[#64748b]">-</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-400 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/20">
                            {apiKey.permissions}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {apiKey.status === 'active' ? (
                            <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20 dark:ring-green-400/20">
                              <span className="mr-1 h-1.5 w-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
                              Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center rounded-full bg-red-50 dark:bg-red-900/30 px-2 py-1 text-xs font-medium text-red-700 dark:text-red-400 ring-1 ring-inset ring-red-600/20 dark:ring-red-400/20">
                              Revoked
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-right">
                          {apiKey.status === 'active' && (
                            <button 
                              onClick={() => handleRevokeKey(apiKey.id)}
                              className="text-red-500 hover:text-red-700 text-sm font-medium"
                            >
                              Revocar
                            </button>
                          )}
                        </td>
                      </motion.tr>
                    ))
                  )}
                </AnimatePresence>
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="border-t border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-[#1a202c] px-6 py-4 flex items-center justify-between">
              <span className="text-sm text-[#64748b]">Showing <span className="font-medium text-[#0f172a] dark:text-white">1-4</span> of <span className="font-medium text-[#0f172a] dark:text-white">16</span> keys</span>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 text-sm text-[#64748b] hover:text-[#0f172a] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded disabled:opacity-50" disabled>Anterior</button>
                <button className="px-3 py-1 text-sm text-[#64748b] hover:text-[#0f172a] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Siguiente</button>
              </div>
            </div>
          </div>

          {/* Usage Limits & Quotas Section */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="flex-1 rounded-xl border border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-[#1a202c] p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#0f172a] dark:text-white">Global Rate Limits</h3>
                <button className="text-[#195de6] text-sm font-medium hover:underline">Edit Policy</button>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-[#0f172a] dark:text-white">Requests per minute (RPM)</span>
                    <span className="text-sm text-[#64748b]">2,400 / 5,000</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-[#195de6] h-2 rounded-full" style={{ width: '48%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-[#0f172a] dark:text-white">Requests per day (RPD)</span>
                    <span className="text-sm text-[#64748b]">850k / 1M</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-[#0f172a] dark:text-white">Concurrent Connections</span>
                    <span className="text-sm text-[#64748b]">45 / 100</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl border border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-[#1a202c] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#0f172a] dark:text-white mb-4">Security Recommendations</h3>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800/30">
                  <span className="material-symbols-outlined text-orange-600 dark:text-orange-400 mt-1">warning</span>
                  <div>
                    <h4 className="text-sm font-bold text-orange-900 dark:text-orange-300">Rotate Old Keys</h4>
                    <p className="text-sm text-orange-800 dark:text-orange-200/70 mt-1">Production App key is older than 90 days. Consider rotating it to maintain security compliance.</p>
                    <button className="mt-2 text-xs font-bold text-orange-900 dark:text-orange-400 underline">View details</button>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 mt-1">verified_user</span>
                  <div>
                    <h4 className="text-sm font-bold text-blue-900 dark:text-blue-300">IP Whitelisting Enabled</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200/70 mt-1">Your keys are currently restricted to 4 IP ranges. This is a good security practice.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Generated Key Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
          <div className="w-full max-w-lg transform overflow-hidden rounded-xl bg-white dark:bg-[#1a202c] p-6 text-left align-middle shadow-2xl transition-all border border-gray-100 dark:border-[#2d3748]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <span className="material-symbols-outlined">key</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                    {generatedKey ? 'API Key Generated' : 'Create New API Key'}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {generatedKey ? 'Success! Here is your new secret key.' : 'Enter details for your new API key.'}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => { setShowModal(false); setGeneratedKey(null); }}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {generatedKey ? (
              <>
                <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800/30 rounded-lg p-4 flex gap-3">
                  <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-500 text-xl shrink-0">info</span>
                  <p className="text-sm text-yellow-800 dark:text-yellow-200/80">
                    Please copy this key and save it somewhere safe. For security reasons, <strong>we will not show it to you again.</strong>
                  </p>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Secret Key</label>
                  <div className="flex rounded-md shadow-sm">
                    <input 
                      className="block w-full rounded-l-md border-y border-l border-gray-300 dark:border-gray-600 py-2 pl-3 text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 focus:border-[#195de6] focus:ring-[#195de6] font-mono" 
                      readOnly 
                      type="text" 
                      value={generatedKey} 
                    />
                    <button 
                      className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 bg-white dark:bg-gray-800" 
                      type="button"
                      onClick={() => navigator.clipboard.writeText(generatedKey)}
                    >
                      <span className="material-symbols-outlined text-lg">content_copy</span>
                      Copy
                    </button>
                  </div>
                </div>
                <div className="mt-8 flex justify-end gap-3">
                  <button 
                    onClick={() => { setShowModal(false); setGeneratedKey(null); }}
                    className="inline-flex justify-center rounded-lg bg-[#195de6] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#195de6] w-full sm:w-auto" 
                    type="button"
                  >
                    Done
                  </button>
                </div>
              </>
            ) : (
              <form onSubmit={handleCreateKey} className="mt-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] dark:text-white mb-1">Key Name</label>
                    <input 
                      type="text" 
                      required
                      value={newKeyName}
                      onChange={(e) => setNewKeyName(e.target.value)}
                      placeholder="e.g., Production Backend"
                      className="w-full rounded-lg border border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-[#111621] px-4 py-2 text-sm text-[#0f172a] dark:text-white focus:border-[#195de6] focus:ring-1 focus:ring-[#195de6] outline-none"
                    />
                    <p className="text-xs text-[#64748b] mt-1">A descriptive name to identify this key later.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] dark:text-white mb-1">Permissions</label>
                    <select 
                      value={newKeyPermissions}
                      onChange={(e) => setNewKeyPermissions(e.target.value)}
                      className="w-full rounded-lg border border-[#e2e8f0] dark:border-[#2d3748] bg-white dark:bg-[#111621] px-4 py-2 text-sm text-[#0f172a] dark:text-white focus:border-[#195de6] focus:ring-1 focus:ring-[#195de6] outline-none"
                    >
                      <option value="Read Only">Read Only</option>
                      <option value="Write Only">Write Only</option>
                      <option value="Full Access">Full Access</option>
                    </select>
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
                    className="px-4 py-2 bg-[#195de6] text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Generate Key
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
