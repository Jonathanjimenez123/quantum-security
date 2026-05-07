import React from 'react';

interface DataRetentionPolicySettingsProps {
  onBack: () => void;
}

export default function DataRetentionPolicySettings({ onBack }: DataRetentionPolicySettingsProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-row bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans antialiased overflow-x-hidden">
      {/* Sidebar Navigation */}
      <div className="hidden lg:flex flex-col w-72 border-r border-border-dark bg-background-dark h-screen sticky top-0">
        <div className="flex flex-col h-full p-4">
          {/* User Profile / Brand */}
          <div className="flex gap-3 mb-8">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg")',
              }}
            ></div>
            <div className="flex flex-col justify-center">
              <h1 className="text-white text-base font-bold leading-tight">SecureGuard AI</h1>
              <p className="text-text-secondary text-xs font-normal">Enterprise Admin</p>
            </div>
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 flex-1">
            <button
              onClick={onBack}
              className="flex items-center gap-3 px-3 py-2 text-text-secondary hover:text-white hover:bg-surface-dark rounded-lg transition-colors w-full text-left"
            >
              <span className="material-symbols-outlined">donut_large</span>
              <span className="text-sm font-medium">Panel de Control</span>
            </button>
            <button className="flex items-center gap-3 px-3 py-2 text-text-secondary hover:text-white hover:bg-surface-dark rounded-lg transition-colors w-full text-left">
              <span className="material-symbols-outlined">security</span>
              <span className="text-sm font-medium">Threat Intel</span>
            </button>
            {/* Active State */}
            <button className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 w-full text-left">
              <span className="material-symbols-outlined fill-1">settings</span>
              <span className="text-sm font-bold">Policy Settings</span>
            </button>
            <button className="flex items-center gap-3 px-3 py-2 text-text-secondary hover:text-white hover:bg-surface-dark rounded-lg transition-colors w-full text-left">
              <span className="material-symbols-outlined">group</span>
              <span className="text-sm font-medium">User Management</span>
            </button>
            <button className="flex items-center gap-3 px-3 py-2 text-text-secondary hover:text-white hover:bg-surface-dark rounded-lg transition-colors w-full text-left">
              <span className="material-symbols-outlined">description</span>
              <span className="text-sm font-medium">Audit Logs</span>
            </button>
          </nav>
          {/* Bottom Actions */}
          <div className="mt-auto pt-4 border-t border-border-dark">
            <button className="flex items-center gap-3 px-3 py-2 text-text-secondary hover:text-red-400 hover:bg-surface-dark rounded-lg transition-colors w-full text-left">
              <span className="material-symbols-outlined">logout</span>
              <span className="text-sm font-medium">Sign Out</span>
            </button>
          </div>
        </div>
      </div>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark">
        {/* Header */}
        <header className="h-16 border-b border-gray-200 dark:border-border-dark bg-white dark:bg-background-dark flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="lg:hidden p-2 text-text-secondary hover:text-primary transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h2 className="text-lg font-semibold text-slate-800 dark:text-white">Data Retention Policy</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-text-secondary hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-8 w-px bg-gray-200 dark:bg-border-dark"></div>
            <button className="text-sm font-medium text-primary hover:text-blue-400">Documentation</button>
          </div>
        </header>
        <div className="p-6 lg:p-10 max-w-7xl mx-auto w-full">
          {/* Intro Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">Lifecycle Management</h1>
            <p className="text-text-secondary max-w-3xl">
              Configure how long data is stored, archived, and deleted to comply with regulatory standards like GDPR, CCPA, and SOC2.
            </p>
          </div>
          {/* Stats / Compliance Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Compliance Status */}
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-border-dark shadow-sm flex flex-col justify-between">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <span className="material-symbols-outlined text-green-500">verified_user</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  Passing
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Compliance Status</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">SOC2 Compliant</h3>
                <p className="text-xs text-text-secondary mt-2">
                  Last audit check: <span className="text-slate-700 dark:text-slate-300">2 hours ago</span>
                </p>
              </div>
            </div>
            {/* Storage Usage */}
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-border-dark shadow-sm flex flex-col justify-between">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <span className="material-symbols-outlined text-primary">database</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                  Healthy
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Hot Storage Usage</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  1.2 TB <span className="text-base font-normal text-text-secondary">/ 5 TB</span>
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-3">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: '24%' }}></div>
                </div>
              </div>
            </div>
            {/* Projected Savings */}
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-border-dark shadow-sm flex flex-col justify-between">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <span className="material-symbols-outlined text-purple-500">savings</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">Est. Archival Savings</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  $450 <span className="text-sm font-normal text-text-secondary">/mo</span>
                </h3>
                <p className="text-xs text-text-secondary mt-2">By moving logs &gt;90 days to Cold Storage</p>
              </div>
            </div>
          </div>
          {/* Main Configuration Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-border-dark">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Retention Periods by Data Type</h3>
              <button className="text-sm font-medium text-primary hover:text-blue-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">history</span>
                View Policy History
              </button>
            </div>
            {/* Policy Item: Security Logs */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-border-dark p-6 transition-all hover:shadow-md">
              <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="material-symbols-outlined text-primary">shield</span>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Security Logs</h4>
                  </div>
                  <p className="text-sm text-text-secondary ml-9">
                    Raw logs of blocked phishing attempts, suspicious URL detections, and extension activity.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 min-w-[300px]">
                  <div className="w-full sm:w-auto flex-1">
                    <label className="block text-xs font-medium text-text-secondary mb-1">Retention Period</label>
                    <div className="relative">
                      <select className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5">
                        <option>30 Days</option>
                        <option>90 Days</option>
                        <option defaultValue="1 Year">1 Year</option>
                        <option>3 Years</option>
                        <option>Indefinite</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-4 sm:pt-0">
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-text-secondary mb-1">Archive to S3?</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Policy Item: Incident Reports */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-border-dark p-6 transition-all hover:shadow-md">
              <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="material-symbols-outlined text-orange-500">warning</span>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Incident Reports</h4>
                  </div>
                  <p className="text-sm text-text-secondary ml-9">
                    Detailed forensic data for confirmed security incidents and user-reported threats.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 min-w-[300px]">
                  <div className="w-full sm:w-auto flex-1">
                    <label className="block text-xs font-medium text-text-secondary mb-1">Retention Period</label>
                    <select className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5">
                      <option>1 Year</option>
                      <option>3 Years</option>
                      <option defaultValue="7 Years (Legal Hold)">7 Years (Legal Hold)</option>
                      <option>Indefinite</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-3 pt-4 sm:pt-0">
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-text-secondary mb-1">Archive to S3?</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Policy Item: Audit History */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-border-dark p-6 transition-all hover:shadow-md">
              <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="material-symbols-outlined text-purple-400">gavel</span>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Audit History</h4>
                  </div>
                  <p className="text-sm text-text-secondary ml-9">
                    Records of admin actions, policy changes, and user access logs.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 min-w-[300px]">
                  <div className="w-full sm:w-auto flex-1">
                    <label className="block text-xs font-medium text-text-secondary mb-1">Retention Period</label>
                    <select className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5">
                      <option defaultValue="1 Year">1 Year</option>
                      <option>2 Years</option>
                      <option>5 Years</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-3 pt-4 sm:pt-0">
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-text-secondary mb-1">Archive to S3?</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" type="checkbox" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Policy Item: Anonymized NLP Samples */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-border-dark p-6 transition-all hover:shadow-md">
              <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="material-symbols-outlined text-blue-400">psychology</span>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Anonymized NLP Samples</h4>
                  </div>
                  <p className="text-sm text-text-secondary ml-9">
                    Text samples used for improving AI detection models. All PII is stripped before storage.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 min-w-[300px]">
                  <div className="w-full sm:w-auto flex-1">
                    <label className="block text-xs font-medium text-text-secondary mb-1">Retention Period</label>
                    <select className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5">
                      <option>30 Days</option>
                      <option defaultValue="90 Days">90 Days</option>
                      <option>180 Days</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-3 pt-4 sm:pt-0">
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-text-secondary mb-1">Archive to S3?</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" type="checkbox" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Advanced Settings & Archiving Config */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Archiving Destination */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-border-dark p-6">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-text-secondary">cloud_upload</span>
                Cold Storage Configuration
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">Provider</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer border border-primary bg-primary/10 rounded-lg p-3 w-1/2 justify-center">
                      <input defaultChecked className="text-primary focus:ring-primary border-gray-300" name="provider" type="radio" />
                      <span className="text-sm font-semibold dark:text-white">AWS S3</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer border border-gray-200 dark:border-gray-600 rounded-lg p-3 w-1/2 justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                      <input className="text-primary focus:ring-primary border-gray-300" name="provider" type="radio" />
                      <span className="text-sm font-semibold dark:text-white">Azure Blob</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">Bucket URL</label>
                  <input
                    className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2"
                    type="text"
                    defaultValue="s3://secureguard-enterprise-logs-us-east-1"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <span className="material-symbols-outlined text-[16px] text-green-500">check_circle</span>
                  Connection verified successfully
                </div>
              </div>
            </div>
            {/* Deletion Settings */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-border-dark p-6">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-text-secondary">delete_forever</span>
                Permanent Deletion
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex items-center h-5">
                    <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" id="hard-delete" type="checkbox" />
                  </div>
                  <div className="text-sm">
                    <label className="font-medium text-slate-900 dark:text-white" htmlFor="hard-delete">
                      Hard delete expired data
                    </label>
                    <p className="text-text-secondary">If disabled, data past retention period is marked "soft deleted" for 30 days before purging.</p>
                  </div>
                </div>
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-sm text-red-400 font-medium mb-1">Warning Zone</p>
                  <p className="text-xs text-text-secondary mb-3">Irreversibly purge all logs older than 2 years immediately.</p>
                  <button className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded transition">
                    Purge Old Logs Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Floating Footer Actions */}
          <div className="sticky bottom-0 -mx-6 lg:-mx-10 px-6 lg:px-10 py-4 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-gray-200 dark:border-border-dark mt-10 flex items-center justify-between">
            <p className="text-sm text-text-secondary hidden sm:block">Changes will take effect immediately upon saving.</p>
            <div className="flex gap-3 ml-auto">
              <button
                onClick={onBack}
                className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-slate-700 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Cancel
              </button>
              <button className="px-5 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-blue-600 shadow-lg shadow-primary/20 transition flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">save</span>
                Save Lifecycle Policy
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
