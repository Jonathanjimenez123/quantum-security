const fs = require('fs');

const appContent = fs.readFileSync('src/App.tsx', 'utf8');

// Extract imports
const importRegex = /^import\s+.*?;/gm;
const imports = appContent.match(importRegex).join('\n');

// Extract all the state variables to understand what components exist
const stateRegex = /const \[show([A-Za-z0-9_]+), setShow\1\] = useState\(.*?\);/g;
let match;
const components = [];
while ((match = stateRegex.exec(appContent)) !== null) {
  components.push(match[1]);
}

const dashboardPropsStr = components.map(comp => {
  const pathName = comp.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  return `onTrigger${comp}={() => navigate('/${pathName}')}`;
}).join('\n            ');

let routesStr = `
        {/* Main Layout Routes */}
        <Route path="/" element={<Layout onLogout={() => setIsAuthenticated(false)} />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard 
            ${dashboardPropsStr}
          />} />
          <Route path="scanner" element={<Scanner />} />
          <Route path="history" element={
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Threat History</h2>
                <button 
                  onClick={() => navigate('/incident-report')}
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">visibility</span>
                  View Sample Report
                </button>
              </div>
              <Logs />
            </div>
          } />
          <Route path="logs" element={<Logs />} />
          <Route path="settings" element={<Settings />} />
          <Route path="safelist" element={<SafeList />} />
          <Route path="insights" element={<Insights />} />
        </Route>

        {/* Full Screen Routes */}
`;

components.forEach(comp => {
  const pathName = comp.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  if (comp === 'LandingPage') {
    routesStr += `        <Route path="/landing-page" element={<LandingPage onBack={() => navigate(-1)} onSignIn={() => navigate('/login')} />} />\n`;
  } else if (comp === 'Registration') {
    routesStr += `        <Route path="/registration" element={<Registration onBack={() => navigate(-1)} onLogin={() => navigate('/login')} />} />\n`;
  } else if (comp === 'AccountRecovery') {
    routesStr += `        <Route path="/account-recovery" element={<AccountRecovery onBack={() => navigate(-1)} />} />\n`;
  } else if (comp === 'SignIn') {
    // handled separately
  } else if (comp === 'Onboarding') {
    // handled separately
  } else {
    routesStr += `        <Route path="/${pathName}" element={<${comp} onBack={() => navigate(-1)} onClose={() => navigate(-1)} onDismiss={() => navigate(-1)} onNext={() => navigate(-1)} onComplete={() => navigate(-1)} onRetake={() => navigate(-1)} onNextModule={() => navigate(-1)} onLeaderboard={() => navigate('/leaderboard')} onTraining={() => navigate('/security-awareness')} onReviewIncidents={() => navigate('/history')} onStartTraining={() => navigate('/interactive-training')} onStartSimulation={() => navigate('/phishing-simulation')} onSettings={() => navigate('/settings')} onDashboard={() => navigate('/dashboard')} onNewTicket={() => navigate('/support-ticket')} />} />\n`;
  }
});

const newAppContent = `import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
${imports}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/login" element={<SignIn onSignIn={() => setIsAuthenticated(true)} onHelpClick={() => navigate('/help-center')} onSignUpClick={() => navigate('/registration')} />} />
        <Route path="/onboarding" element={<Onboarding onComplete={() => { setHasCompletedOnboarding(true); navigate('/dashboard'); }} />} />
        
${routesStr}
      </Routes>
    </>
  );
}
`;

fs.writeFileSync('src/App.tsx', newAppContent);
console.log('App.tsx rewritten successfully');
