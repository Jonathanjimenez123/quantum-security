import { auth } from '../firebase';
import React from 'react';
import { Link } from 'react-router-dom';

interface ReferralProgramProps {
  onBack: () => void;
}

export default function ReferralProgram({ onBack }: ReferralProgramProps) {
  return (
    <div className="bg-[#f6f6f8] dark:bg-[#101022] font-['Inter',sans-serif] text-[#111118] dark:text-white min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1c1c2e] px-10 py-3">
        <div className="flex items-center gap-4 cursor-pointer" onClick={onBack}>
          <div className="size-8 text-[#1313ec] flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">shield_lock</span>
          </div>
          <h2 className="text-[#111118] dark:text-white text-lg font-bold leading-tight tracking-tight">Anti-Phish AI</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8 items-center">
          <nav className="hidden md:flex items-center gap-9">
            <Link className="text-[#616189] hover:text-[#1313ec] dark:text-gray-400 dark:hover:text-[#1313ec] text-sm font-medium transition-colors" to='/panel' onClick={(e) => { e.preventDefault(); onBack(); }}>Panel de Control</Link>
            <Link className="text-[#616189] hover:text-[#1313ec] dark:text-gray-400 dark:hover:text-[#1313ec] text-sm font-medium transition-colors" to='/panel'>Protection</Link>
            <Link className="text-[#1313ec] font-bold text-sm leading-normal transition-colors" to='/panel'>Referrals</Link>
            <Link className="text-[#616189] hover:text-[#1313ec] dark:text-gray-400 dark:hover:text-[#1313ec] text-sm font-medium transition-colors" to='/ajustes'>Configuración</Link>
          </nav>
          <button className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-[#1313ec] hover:bg-blue-700 text-white text-sm font-bold transition-colors">
            <span className="truncate">Upgrade</span>
          </button>
          <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-gray-100 dark:ring-gray-700 cursor-pointer" data-alt="User profile picture placeholder" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-[1280px] mx-auto p-6 md:p-10">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Invite & Link */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-white dark:bg-[#1c1c2e] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-hidden">
              {/* Decorational Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1313ec]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#111118] dark:text-white mb-4 relative z-10">Spread the Security, <span className="text-[#1313ec]">Get Rewarded</span></h1>
              <p className="text-[#616189] dark:text-gray-400 text-lg mb-8 max-w-2xl relative z-10">
                Invite your colleagues to browse safely. Earn rewards for every successful installation and help build a phishing-free workspace.
              </p>
              <div className="flex flex-col md:flex-row gap-6 items-end relative z-10">
                <div className="flex-1 w-full">
                  <label className="block text-sm font-semibold text-[#111118] dark:text-gray-200 mb-2">Your Unique Referral Link</label>
                  <div className="flex w-full items-stretch rounded-xl shadow-sm">
                    <input className="flex-1 w-full rounded-l-xl border border-r-0 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-[#111118] dark:text-white px-4 py-3 text-base focus:ring-2 focus:ring-[#1313ec] focus:border-[#1313ec] outline-none" readOnly value="antiphish.ai/invite/u/alex-m-92" />
                    <button className="bg-white dark:bg-[#1c1c2e] border border-l-0 border-gray-200 dark:border-gray-700 text-[#1313ec] hover:text-blue-700 font-medium px-5 rounded-r-xl flex items-center gap-2 transition-colors group">
                      <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">content_copy</span>
                      Copy
                    </button>
                  </div>
                </div>
                {/* Social Share Icons */}
                <div className="flex gap-3">
                  <button className="size-12 rounded-xl bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-[#0077b5] flex items-center justify-center transition-colors" title="Share on LinkedIn">
                    <span className="material-symbols-outlined">work</span>
                  </button>
                  <button className="size-12 rounded-xl bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] flex items-center justify-center transition-colors" title="Share on Twitter">
                    <span className="material-symbols-outlined">flutter_dash</span>
                  </button>
                  <button className="size-12 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center transition-colors" title="Share via Email">
                    <span className="material-symbols-outlined">mail</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Tracker */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-[#1c1c2e] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center text-center">
                <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined">send</span>
                </div>
                <span className="text-3xl font-bold text-[#111118] dark:text-white">24</span>
                <span className="text-sm text-[#616189] dark:text-gray-400 mt-1">Invites Sent</span>
              </div>
              <div className="bg-white dark:bg-[#1c1c2e] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center text-center">
                <div className="size-12 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined">download_done</span>
                </div>
                <span className="text-3xl font-bold text-[#111118] dark:text-white">18</span>
                <span className="text-sm text-[#616189] dark:text-gray-400 mt-1">Extensions Installed</span>
              </div>
              <div className="bg-white dark:bg-[#1c1c2e] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center text-center">
                <div className="size-12 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined">military_tech</span>
                </div>
                <span className="text-3xl font-bold text-[#111118] dark:text-white">3</span>
                <span className="text-sm text-[#616189] dark:text-gray-400 mt-1">Badges Earned</span>
              </div>
            </div>
          </div>

          {/* Right Column: Leaderboard */}
          <div className="lg:col-span-4 h-full">
            <div className="bg-white dark:bg-[#1c1c2e] rounded-2xl p-6 h-full border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#111118] dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-yellow-500">trophy</span>
                  Top Referrers
                </h3>
                <span className="text-xs font-medium text-[#1313ec] bg-[#1313ec]/10 px-2 py-1 rounded">This Month</span>
              </div>
              <div className="flex flex-col gap-4 flex-1 overflow-y-auto pr-1">
                {/* Leaderboard Item 1 */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-transparent dark:from-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30">
                  <div className="font-bold text-yellow-600 dark:text-yellow-500 w-4 text-center">1</div>
                  <div className="size-10 rounded-full bg-gray-200 bg-cover bg-center" data-alt="Portrait of Sarah J" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#111118] dark:text-white truncate">Sarah Jenkins</p>
                    <p className="text-xs text-[#616189] dark:text-gray-400">42 Installs</p>
                  </div>
                  <span className="material-symbols-outlined text-yellow-500 text-lg">workspace_premium</span>
                </div>
                {/* Leaderboard Item 2 */}
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="font-bold text-gray-400 w-4 text-center">2</div>
                  <div className="size-10 rounded-full bg-gray-200 bg-cover bg-center" data-alt="Portrait of Mike R" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#111118] dark:text-white truncate">Mike Ross</p>
                    <p className="text-xs text-[#616189] dark:text-gray-400">38 Installs</p>
                  </div>
                </div>
                {/* Leaderboard Item 3 */}
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="font-bold text-gray-400 w-4 text-center">3</div>
                  <div className="size-10 rounded-full bg-gray-200 bg-cover bg-center" data-alt="Portrait of David K" style={{ backgroundImage: `url("${auth.currentUser?.photoURL || 'https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg'}")` }}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#111118] dark:text-white truncate">David Kim</p>
                    <p className="text-xs text-[#616189] dark:text-gray-400">31 Installs</p>
                  </div>
                </div>
                {/* You */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1313ec]/5 border border-[#1313ec]/20 mt-2">
                  <div className="font-bold text-[#1313ec] w-4 text-center">8</div>
                  <div className="size-10 rounded-full bg-[#1313ec] text-white flex items-center justify-center font-bold text-sm">AM</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#111118] dark:text-white truncate">You</p>
                    <p className="text-xs text-[#616189] dark:text-gray-400">18 Installs</p>
                  </div>
                  <span className="text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full">+2</span>
                </div>
              </div>
              <button className="w-full mt-4 text-sm text-[#1313ec] font-medium hover:underline text-center">View Full Leaderboard</button>
            </div>
          </div>
        </div>

        {/* Rewards Gallery */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#111118] dark:text-white">Unlock Rewards</h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-white dark:bg-[#1c1c2e] border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-[#1313ec]">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="p-2 rounded-lg bg-white dark:bg-[#1c1c2e] border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-[#1313ec]">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Reward Card 1 (Active) */}
            <div className="group relative bg-white dark:bg-[#1c1c2e] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all">
              <div className="h-32 bg-gradient-to-br from-blue-500 to-[#1313ec] p-6 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-5xl opacity-80">analytics</span>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#111118] dark:text-white">AI Insights Pro</h3>
                  <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold px-2 py-1 rounded">Unlocked</span>
                </div>
                <p className="text-sm text-[#616189] dark:text-gray-400 mb-4">Get 1 month of advanced threat analytics for free.</p>
                <button className="w-full py-2 rounded-lg bg-white border border-gray-200 dark:bg-[#1c1c2e] dark:border-gray-700 text-sm font-semibold text-[#111118] dark:text-white group-hover:bg-gray-50 dark:group-hover:bg-gray-800 transition-colors">
                  Claim Reward
                </button>
              </div>
            </div>
            {/* Reward Card 2 (In Progress) */}
            <div className="group relative bg-white dark:bg-[#1c1c2e] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all">
              <div className="h-32 bg-gradient-to-br from-purple-500 to-indigo-600 p-6 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-5xl opacity-80">verified</span>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#111118] dark:text-white">Security Guru Badge</h3>
                  <span className="text-[#1313ec] text-xs font-bold px-2 py-1">20/25 Installs</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 mb-4">
                  <div className="bg-[#1313ec] h-1.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="text-sm text-[#616189] dark:text-gray-400 mb-4">Exclusive profile badge visible to your organization.</p>
                <button className="w-full py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-semibold text-gray-400 cursor-not-allowed" disabled>
                  Locked
                </button>
              </div>
            </div>
            {/* Reward Card 3 (Locked) */}
            <div className="group relative bg-white dark:bg-[#1c1c2e] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all">
              <div className="h-32 bg-gray-100 dark:bg-gray-800 p-6 flex items-center justify-center relative">
                <span className="material-symbols-outlined text-gray-400 text-5xl">card_giftcard</span>
                <div className="absolute inset-0 bg-white/50 dark:bg-black/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-gray-500 text-3xl">lock</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#111118] dark:text-white text-opacity-60">Company Swag Pack</h3>
                  <span className="text-gray-400 text-xs font-bold px-2 py-1">50 Installs</span>
                </div>
                <p className="text-sm text-[#616189] dark:text-gray-400 mb-4">Official t-shirt, stickers, and security webcam cover.</p>
                <button className="w-full py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-semibold text-gray-400 cursor-not-allowed" disabled>
                  Locked
                </button>
              </div>
            </div>
            {/* Reward Card 4 (Locked) */}
            <div className="group relative bg-white dark:bg-[#1c1c2e] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all">
              <div className="h-32 bg-gray-100 dark:bg-gray-800 p-6 flex items-center justify-center relative">
                <span className="material-symbols-outlined text-gray-400 text-5xl">diamond</span>
                <div className="absolute inset-0 bg-white/50 dark:bg-black/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-gray-500 text-3xl">lock</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#111118] dark:text-white text-opacity-60">Premium For Life</h3>
                  <span className="text-gray-400 text-xs font-bold px-2 py-1">100 Installs</span>
                </div>
                <p className="text-sm text-[#616189] dark:text-gray-400 mb-4">Lifetime access to all premium security features.</p>
                <button className="w-full py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-semibold text-gray-400 cursor-not-allowed" disabled>
                  Locked
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
