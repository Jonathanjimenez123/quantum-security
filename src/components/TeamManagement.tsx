import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface TeamManagementProps {
  onBack: () => void;
}

export default function TeamManagement({ onBack }: TeamManagementProps) {
  return (
    <div className="bg-background-light text-slate-900 antialiased min-h-screen flex flex-col font-body">
      {/* Header / Nav */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined">shield_lock</span>
              </div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900">Anti-Phishing Admin</h1>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              <Link className="px-3 py-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors rounded-lg hover:bg-blue-50" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
              <Link className="px-3 py-2 text-sm font-medium text-primary bg-blue-50 rounded-lg transition-colors" to='/panel'>Team</Link>
              <Link className="px-3 py-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors rounded-lg hover:bg-blue-50" to='/panel'>Security Logs</Link>
              <Link className="px-3 py-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors rounded-lg hover:bg-blue-50" to='/panel'>Billing</Link>
              <Link className="px-3 py-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors rounded-lg hover:bg-blue-50" to='/ajustes'>Configuración</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">search</span>
              <input className="pl-10 pr-4 py-2 bg-slate-100 border-transparent focus:bg-white focus:border-primary focus:ring-0 rounded-lg text-sm w-64 transition-all" placeholder="Buscar members..." type="text" />
            </div>
            <button className="relative size-10 rounded-full overflow-hidden border border-slate-200 hover:border-primary transition-colors">
              <div className="w-full h-full bg-cover bg-center" data-alt="User profile avatar" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 py-8">
        {/* Page Header & Stats */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Team Management</h2>
            <p className="text-slate-500 text-base max-w-2xl">Manage access, configure roles, and monitor license usage for your organization's security.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-900 font-medium text-sm transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[20px]">file_upload</span>
              Bulk Import
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-blue-700 rounded-lg text-white font-medium text-sm transition-colors shadow-md shadow-primary/20">
              <span className="material-symbols-outlined text-[20px]">person_add</span>
              Invite Member
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Total Members</p>
              <p className="text-3xl font-bold text-slate-900">850</p>
              <div className="flex items-center gap-1 mt-2 text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full w-fit">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                +12% this month
              </div>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
              <span className="material-symbols-outlined">group</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Available Licenses</p>
              <p className="text-3xl font-bold text-slate-900">150</p>
              <div className="flex items-center gap-1 mt-2 text-xs font-medium text-slate-500">
                / 1000 Total Purchased
              </div>
            </div>
            <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Pending Invites</p>
              <p className="text-3xl font-bold text-slate-900">12</p>
              <div className="flex items-center gap-1 mt-2 text-xs font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full w-fit">
                Action required
              </div>
            </div>
            <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
              <span className="material-symbols-outlined">mail</span>
            </div>
          </div>
        </div>

        {/* Content Layout: Table & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          {/* Main Table Section */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            {/* Table Toolbar */}
            <div className="p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 text-sm font-medium text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors">All Members</button>
                <button className="px-3 py-1.5 text-sm font-medium text-slate-500 hover:bg-slate-100 rounded-md transition-colors">Admins</button>
                <button className="px-3 py-1.5 text-sm font-medium text-slate-500 hover:bg-slate-100 rounded-md transition-colors">Suspended</button>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
                <button className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/3 min-w-[250px]">Member Name / Email</th>
                    <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/6">Rol</th>
                    <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/6">Estado</th>
                    <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/6">Last Activity</th>
                    <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/6 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {/* Row 1 */}
                  <tr className="group hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">SJ</div>
                        <div>
                          <p className="font-medium text-slate-900 text-sm">Sarah Jenkins</p>
                          <p className="text-slate-500 text-xs">sarah.jenkins@corp.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <select className="bg-transparent border-none text-xs font-medium text-slate-900 rounded-md py-1 pr-8 pl-2 focus:ring-1 focus:ring-primary cursor-pointer hover:bg-slate-100" defaultValue="owner">
                        <option value="owner">Owner</option>
                        <option value="admin">Admin</option>
                        <option value="analyst">Analyst</option>
                        <option value="user">Usuario</option>
                      </select>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-slate-500">
                      Just now
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="text-slate-400 hover:text-primary p-1 rounded transition-colors">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="group hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <img alt="Mike Ross" className="size-10 rounded-full object-cover" data-alt="Profile picture of Mike Ross" src={auth.currentUser?.photoURL || "https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg"} />
                        <div>
                          <p className="font-medium text-slate-900 text-sm">Mike Ross</p>
                          <p className="text-slate-500 text-xs">mike.ross@corp.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <select className="bg-transparent border-none text-xs font-medium text-slate-900 rounded-md py-1 pr-8 pl-2 focus:ring-1 focus:ring-primary cursor-pointer hover:bg-slate-100" defaultValue="admin">
                        <option value="owner">Owner</option>
                        <option value="admin">Admin</option>
                        <option value="analyst">Analyst</option>
                        <option value="user">User</option>
                      </select>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-slate-500">
                      2 hours ago
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-slate-400 hover:text-primary" title="Edit">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button className="text-slate-400 hover:text-red-600" title="Remove">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="group hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm">TS</div>
                        <div>
                          <p className="font-medium text-slate-900 text-sm">Tech Support</p>
                          <p className="text-slate-500 text-xs">support@corp.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <select className="bg-transparent border-none text-xs font-medium text-slate-900 rounded-md py-1 pr-8 pl-2 focus:ring-1 focus:ring-primary cursor-pointer hover:bg-slate-100" defaultValue="analyst">
                        <option value="owner">Owner</option>
                        <option value="admin">Admin</option>
                        <option value="analyst">Analyst</option>
                        <option value="user">User</option>
                      </select>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Inactive
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-slate-500">
                      5 days ago
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-slate-400 hover:text-primary" title="Edit">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button className="text-slate-400 hover:text-primary" title="Reset 2FA">
                          <span className="material-symbols-outlined text-[18px]">lock_reset</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="group hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm">NH</div>
                        <div>
                          <p className="font-medium text-slate-900 text-sm">New Hire</p>
                          <p className="text-slate-500 text-xs">new.hire@corp.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <select className="bg-transparent border-none text-xs font-medium text-slate-900 rounded-md py-1 pr-8 pl-2 focus:ring-1 focus:ring-primary cursor-pointer hover:bg-slate-100" defaultValue="user">
                        <option value="owner">Owner</option>
                        <option value="admin">Admin</option>
                        <option value="analyst">Analyst</option>
                        <option value="user">User</option>
                      </select>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        Pending
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-slate-500">
                      Never
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="text-primary text-xs font-semibold hover:text-blue-700 transition-colors">
                        Resend Invite
                      </button>
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="group hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm">OA</div>
                        <div>
                          <p className="font-medium text-slate-900 text-sm">Old Account</p>
                          <p className="text-slate-500 text-xs">old.account@corp.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <select className="bg-transparent border-none text-xs font-medium text-slate-900 rounded-md py-1 pr-8 pl-2 focus:ring-1 focus:ring-primary cursor-pointer hover:bg-slate-100" defaultValue="user">
                        <option value="owner">Owner</option>
                        <option value="admin">Admin</option>
                        <option value="analyst">Analyst</option>
                        <option value="user">User</option>
                      </select>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Suspended
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-slate-500">
                      30 days ago
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="text-slate-400 hover:text-primary p-1 rounded transition-colors">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="bg-white border-t border-slate-200 px-4 py-3 flex items-center justify-between mt-auto">
              <p className="text-xs text-slate-500">Showing <span className="font-medium text-slate-900">1</span> to <span className="font-medium text-slate-900">5</span> of <span className="font-medium text-slate-900">850</span> results</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm border border-slate-200 rounded hover:bg-slate-50 text-slate-500 disabled:opacity-50" disabled>Anterior</button>
                <button className="px-3 py-1 text-sm border border-slate-200 rounded hover:bg-slate-50 text-slate-900">Siguiente</button>
              </div>
            </div>
          </div>

          {/* Sidebar: Role Permissions */}
          <aside className="flex flex-col gap-6">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-4 text-slate-900">
                <span className="material-symbols-outlined text-primary">admin_panel_settings</span>
                <h3 className="text-lg font-bold">Role Permissions</h3>
              </div>
              <div className="space-y-4">
                <div className="relative pl-4 border-l-2 border-primary">
                  <h4 className="text-sm font-bold text-slate-900">Owner</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">Full access to all settings, billing, team management, and workspace deletion.</p>
                </div>
                <div className="relative pl-4 border-l-2 border-primary/40">
                  <h4 className="text-sm font-bold text-slate-900">Admin</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">Can manage team members, view security logs, and configure security policies. No billing access.</p>
                </div>
                <div className="relative pl-4 border-l-2 border-primary/20">
                  <h4 className="text-sm font-bold text-slate-900">Analyst</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">View-only access to threat logs, incident reports, and analytics. Cannot change configurations.</p>
                </div>
                <div className="relative pl-4 border-l-2 border-gray-200">
                  <h4 className="text-sm font-bold text-slate-900">User</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">Basic protection enabled via extension. No access to the admin dashboard.</p>
                </div>
              </div>
              <button className="mt-6 w-full py-2 px-4 border border-slate-200 text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">settings</span>
                Configure Roles
              </button>
            </div>

            {/* Quick Help */}
            <div className="bg-primary text-white rounded-xl shadow-md p-6 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2">Need help?</h3>
                <p className="text-sm text-blue-100 mb-4">Check our documentation for advanced team configuration and SSO setup.</p>
                <Link className="inline-block text-xs font-bold bg-white text-primary px-3 py-2 rounded shadow hover:bg-blue-50 transition-colors" to="/apidocumentation">View Docs</Link>
              </div>
              {/* Abstract Background Pattern */}
              <div className="absolute -right-4 -bottom-8 opacity-20 text-white" data-alt="Abstract decorative icon">
                <span className="material-symbols-outlined" style={{ fontSize: '120px' }}>contact_support</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
