const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

const exclude = [
  'ErrorBoundary.tsx',
  'Layout.tsx',
  'PageDirectory.tsx',
  'DirectoryPortal.tsx',
  'AiAnalysisApiPayloadSchema.tsx',
  'SignIn.tsx',
  'Onboarding.tsx',
  'Registration.tsx',
  'LandingPage.tsx',
  'Dashboard.tsx',
  'SupportTicket.tsx' // Can it be root?
];

const pageComponents = files.filter(f => !exclude.includes(f)).map(f => f.replace('.tsx', ''));

let importsStr = `import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import SignIn from './components/SignIn';
import Onboarding from './components/Onboarding';
import Registration from './components/Registration';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

import DirectoryPortal from './components/DirectoryPortal';

// Generated Imports
${pageComponents.map(c => `import ${c} from './components/${c}';`).join('\n')}
`;

let routesStr = pageComponents.map(c => {
  const path = '/' + c.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
  return `          {/* @ts-ignore */}
          <Route path="${path}" element={<${c} onBack={() => navigate(-1)} />} />`;
}).join('\n');

let pagesArrayStr = `
  const directoryPages = [
    { name: 'Dashboard', category: 'General', onClick: () => navigate('/panel') },
${pageComponents.map(c => {
  const path = '/' + c.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
  const category = c.includes('Dashboard') ? 'Dashboards' :
                   c.includes('Setting') || c.includes('Policy') || c.includes('Pref') ? 'Settings' :
                   c.includes('Report') || c.includes('Log') || c.includes('Audit') || c.includes('Analytics') ? 'Reports & Logs' :
                   c.includes('Threat') || c.includes('Security') || c.includes('Incident') ? 'Security' :
                   c.includes('Training') || c.includes('Challenge') || c.includes('Simulation') ? 'Training' : 'Pages';
  return `    { name: '${c.replace(/([A-Z])/g, ' $1').trim()}', category: '${category}', onClick: () => navigate('${path}') },`;
}).join('\n')}
  ];
`;

const appTsxContent = `${importsStr}

const ProtectedRoute = ({ isAuthenticated, children }: { isAuthenticated: boolean, children: React.ReactNode }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  if (!isAuthReady) {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-background-dark">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

${pagesArrayStr}

  return (
    <ErrorBoundary>
      <div className="bg-cyber-grid min-h-screen w-full relative">
        <div className="absolute inset-0 bg-background-dark/90 pointer-events-none z-[-1]"></div>
        
        {/* Directory floating button for easy access */}
        <DirectoryPortal pages={directoryPages} />

        <Routes>
          <Route path="/login" element={
            isAuthenticated ? <Navigate to='/panel' replace /> : 
            <SignIn onSignIn={() => { setIsAuthenticated(true); navigate('/panel'); }} onHelpClick={() => navigate('/help-center')} onSignUpClick={() => navigate('/registration')} />
          } />
          
          <Route path="/registration" element={
             isAuthenticated ? <Navigate to='/panel' replace /> : <Registration />
          } />

          <Route path="/onboarding" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Onboarding onComplete={() => { setHasCompletedOnboarding(true); navigate('/panel'); }} /></ProtectedRoute>} />
          
          {/* Public Routes */}
          <Route path="/" element={
            isAuthenticated ? <Navigate to='/panel' replace /> : <LandingPage onBack={() => {}} onSignIn={() => navigate('/login')} />
          } />

          {/* Main Layout Routes */}
          <Route element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout onLogout={() => setIsAuthenticated(false)} />
            </ProtectedRoute>
          }>
            <Route path="/panel" element={<Dashboard />} />
            
            {/* Generated Page Routes (In alphabetical order, grouped generally) */}
${routesStr}
          </Route>

          <Route path="*" element={<Navigate to='/panel' replace />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}
`;

fs.writeFileSync(path.join(__dirname, 'src', 'App.tsx'), appTsxContent);
console.log('App.tsx successfully regenerated.');
