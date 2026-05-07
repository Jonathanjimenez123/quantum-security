const fs = require('fs');

const appContent = fs.readFileSync('src/App.tsx', 'utf8');

// Extract imports
const importRegex = /^import\s+.*?;/gm;
const imports = appContent.match(importRegex).join('\n');

// Extract all components from imports
const componentRegex = /import\s+\{?\s*([A-Za-z0-9_]+)\s*\}?\s+from\s+['"]\.\/components\/[A-Za-z0-9_]+['"];/g;
let match;
const components = [];
while ((match = componentRegex.exec(appContent)) !== null) {
  components.push(match[1]);
}

// Read Dashboard.tsx to get the exact prop names
const dashboardContent = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');
const dashboardPropsMatch = dashboardContent.match(/interface DashboardProps \{([\s\S]*?)\}/);
const dashboardPropsList = dashboardPropsMatch ? dashboardPropsMatch[1].split('\n').map(line => line.trim()).filter(line => line.startsWith('onTrigger')) : [];
const validDashboardProps = dashboardPropsList.map(line => line.split('?')[0].split(':')[0].trim());

const dashboardPropsStr = validDashboardProps.map(prop => {
  const compName = prop.replace('onTrigger', '');
  const pathName = compName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  return `${prop}={() => navigate('/${pathName}')}`;
}).join('\n            ');

// Generate routes
let routesStr = `
        {/* Main Layout Routes */}
        <Route path="/" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Layout onLogout={() => setIsAuthenticated(false)} />
          </ProtectedRoute>
        }>
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

const layoutComponents = ['Layout', 'Dashboard', 'Scanner', 'Logs', 'Settings', 'SafeList', 'Insights'];
const fullScreenComponents = components.filter(c => !layoutComponents.includes(c));

fullScreenComponents.forEach(comp => {
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
    // Determine props by reading the component file if possible, or just pass common ones
    let propsStr = '';
    try {
      const compContent = fs.readFileSync(`src/components/${comp}.tsx`, 'utf8');
      const interfaceMatch = compContent.match(new RegExp(`interface\\s+${comp}Props\\s*\\{([\\s\\S]*?)\\}`, 'i')) || compContent.match(/interface\s+\w+Props\s*\{([\s\S]*?)\}/i);
      
      if (interfaceMatch) {
        const propsBlock = interfaceMatch[1];
        if (/onBack\s*\??:/.test(propsBlock)) propsStr += ' onBack={() => navigate(-1)}';
        if (/onClose\s*\??:/.test(propsBlock)) propsStr += ' onClose={() => navigate(-1)}';
        if (/onDismiss\s*\??:/.test(propsBlock)) propsStr += ' onDismiss={() => navigate(-1)}';
        if (/onNext\s*\??:/.test(propsBlock)) propsStr += ' onNext={() => navigate(-1)}';
        if (/onExit\s*\??:/.test(propsBlock)) propsStr += ' onExit={() => navigate(-1)}';
        if (/onDashboard\s*\??:/.test(propsBlock)) propsStr += ' onDashboard={() => navigate("/dashboard")}';
        if (/onSettings\s*\??:/.test(propsBlock)) propsStr += ' onSettings={() => navigate("/settings")}';
        if (/onReviewIncidents\s*\??:/.test(propsBlock)) propsStr += ' onReviewIncidents={() => navigate("/incidents")}';
        if (/onStartTraining\s*\??:/.test(propsBlock)) propsStr += ' onStartTraining={() => navigate("/training")}';
        if (/onStartSimulation\s*\??:/.test(propsBlock)) propsStr += ' onStartSimulation={() => navigate("/simulation")}';
        if (/onNewTicket\s*\??:/.test(propsBlock)) propsStr += ' onNewTicket={() => navigate("/support/new")}';
        if (/onComplete\s*\??:/.test(propsBlock)) propsStr += ' onComplete={() => navigate(-1)}';
        if (/pages\s*\??:/.test(propsBlock)) propsStr += ' pages={[]}'; // For DirectoryPortal
      } else {
        // Fallback if no interface found but we still want to try
        if (compContent.includes('onBack')) propsStr += ' onBack={() => navigate(-1)}';
        if (compContent.includes('onClose')) propsStr += ' onClose={() => navigate(-1)}';
      }
    } catch (e) {
      // ignore
    }
    
    // Protect all these routes except public ones
    const publicRoutes = ['TermsOfService', 'PrivacyCompliance', 'OpenSourceLicenses', 'TechnicalFAQ'];
    if (publicRoutes.includes(comp)) {
      routesStr += `        <Route path="/${pathName}" element={<${comp}${propsStr} />} />\n`;
    } else {
      routesStr += `        <Route path="/${pathName}" element={<ProtectedRoute isAuthenticated={isAuthenticated}><${comp}${propsStr} /></ProtectedRoute>} />\n`;
    }
  }
});

const newAppContent = `import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
${imports.replace(/^import React.*?\n/gm, '').replace(/^import \{ Routes.*?\n/gm, '')}

const ProtectedRoute = ({ isAuthenticated, children }: { isAuthenticated: boolean, children: React.ReactNode }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>\${children}</>;
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/login" element={<SignIn onSignIn={() => setIsAuthenticated(true)} onHelpClick={() => navigate('/help-center')} onSignUpClick={() => navigate('/registration')} />} />
        <Route path="/onboarding" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Onboarding onComplete={() => { setHasCompletedOnboarding(true); navigate('/dashboard'); }} /></ProtectedRoute>} />
        
${routesStr}
      </Routes>
    </>
  );
}
`;

fs.writeFileSync('src/App.tsx', newAppContent);
console.log('App.tsx rewritten successfully with full screen routes and ProtectedRoute');
