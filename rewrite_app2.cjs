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

// Read Dashboard.tsx to get the exact prop names
const dashboardContent = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');
const dashboardPropsMatch = dashboardContent.match(/interface DashboardProps \{([\s\S]*?)\}/);
const dashboardPropsList = dashboardPropsMatch ? dashboardPropsMatch[1].split('\n').map(line => line.trim()).filter(line => line.startsWith('onTrigger')) : [];
const validDashboardProps = dashboardPropsList.map(line => line.split('?')[0]);

const dashboardPropsStr = validDashboardProps.map(prop => {
  const compName = prop.replace('onTrigger', '');
  const pathName = compName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  return `${prop}={() => navigate('/${pathName}')}`;
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
  } else if (comp === 'WarningScreen') {
    routesStr += `        <Route path="/warning-screen" element={<WarningScreen onDismiss={() => navigate(-1)} />} />\n`;
  } else if (comp === 'IncidentReport') {
    routesStr += `        <Route path="/incident-report" element={<IncidentReport onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'HelpCenter') {
    routesStr += `        <Route path="/help-center" element={<HelpCenter onClose={() => navigate(-1)} onNewTicket={() => navigate('/support-ticket')} />} />\n`;
  } else if (comp === 'InteractiveTraining') {
    routesStr += `        <Route path="/interactive-training" element={<InteractiveTraining onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'PhishingSimulation') {
    routesStr += `        <Route path="/phishing-simulation" element={<PhishingSimulation onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'SummaryReport') {
    routesStr += `        <Route path="/summary-report" element={<SummaryReport onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'MonthlyReport') {
    routesStr += `        <Route path="/monthly-report" element={<MonthlyReport onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'Leaderboard') {
    routesStr += `        <Route path="/leaderboard" element={<Leaderboard onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'TrainingModule') {
    routesStr += `        <Route path="/training-module" element={<TrainingModule onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'TrainingChallenge') {
    routesStr += `        <Route path="/training-challenge" element={<TrainingChallenge onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'ChallengeResults') {
    routesStr += `        <Route path="/challenge-results" element={<ChallengeResults onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'UserProfile') {
    routesStr += `        <Route path="/user-profile" element={<UserProfile onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'NotificationSettings') {
    routesStr += `        <Route path="/notification-settings" element={<NotificationSettings onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'ForensicSandbox') {
    routesStr += `        <Route path="/forensic-sandbox" element={<ForensicSandbox onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'SystemStatus') {
    routesStr += `        <Route path="/system-status" element={<SystemStatus onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'GlobalCommand') {
    routesStr += `        <Route path="/global-command" element={<GlobalCommand onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'ForensicAudit') {
    routesStr += `        <Route path="/forensic-audit" element={<ForensicAudit onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'AdminAnalytics') {
    routesStr += `        <Route path="/admin-analytics" element={<AdminAnalytics onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'ApiIntegration') {
    routesStr += `        <Route path="/api-integration" element={<ApiIntegration onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'AIGlobalStatus') {
    routesStr += `        <Route path="/aiglobal-status" element={<AIGlobalStatus onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'AIAssistant') {
    routesStr += `        <Route path="/aiassistant" element={<AIAssistant onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'InteractiveChallenge') {
    routesStr += `        <Route path="/interactive-challenge" element={<InteractiveChallenge onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'TrainingFeedback') {
    routesStr += `        <Route path="/training-feedback" element={<TrainingFeedback onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'MobileDashboard') {
    routesStr += `        <Route path="/mobile-dashboard" element={<MobileDashboard onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'SecurityIncidentWarRoom') {
    routesStr += `        <Route path="/security-incident-war-room" element={<SecurityIncidentWarRoom onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'PrivacyCompliance') {
    routesStr += `        <Route path="/privacy-compliance" element={<PrivacyCompliance onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'PostMortemReport') {
    routesStr += `        <Route path="/post-mortem-report" element={<PostMortemReport onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'Pricing') {
    routesStr += `        <Route path="/pricing" element={<Pricing onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'SupportChat') {
    routesStr += `        <Route path="/support-chat" element={<SupportChat onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'RoiAnalytics') {
    routesStr += `        <Route path="/roi-analytics" element={<RoiAnalytics onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'BillingPortal') {
    routesStr += `        <Route path="/billing-portal" element={<BillingPortal onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'TeamManagement') {
    routesStr += `        <Route path="/team-management" element={<TeamManagement onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'SocMonitoringWall') {
    routesStr += `        <Route path="/soc-monitoring-wall" element={<SocMonitoringWall onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'IntegrationSettings') {
    routesStr += `        <Route path="/integration-settings" element={<IntegrationSettings onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'SecurityAlertInterface') {
    routesStr += `        <Route path="/security-alert-interface" element={<SecurityAlertInterface onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'AccessRequestApproval') {
    routesStr += `        <Route path="/access-request-approval" element={<AccessRequestApproval onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'AlertSchedules') {
    routesStr += `        <Route path="/alert-schedules" element={<AlertSchedules onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'ActiveIntegrationsHealth') {
    routesStr += `        <Route path="/active-integrations-health" element={<ActiveIntegrationsHealth onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'PersonalSecurityProfile') {
    routesStr += `        <Route path="/personal-security-profile" element={<PersonalSecurityProfile onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'DataTopologyMap') {
    routesStr += `        <Route path="/data-topology-map" element={<DataTopologyMap onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'SystemAuditLog') {
    routesStr += `        <Route path="/system-audit-log" element={<SystemAuditLog onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'ReferralProgram') {
    routesStr += `        <Route path="/referral-program" element={<ReferralProgram onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'GeographicAccessAlerts') {
    routesStr += `        <Route path="/geographic-access-alerts" element={<GeographicAccessAlerts onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'NotificationPreferences') {
    routesStr += `        <Route path="/notification-preferences" element={<NotificationPreferences onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'TermsOfService') {
    routesStr += `        <Route path="/terms-of-service" element={<TermsOfService onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'DepartmentalSecurityTraining') {
    routesStr += `        <Route path="/departmental-security-training" element={<DepartmentalSecurityTraining onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'ServiceTermination') {
    routesStr += `        <Route path="/service-termination" element={<ServiceTermination onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'OpenSourceLicenses') {
    routesStr += `        <Route path="/open-source-licenses" element={<OpenSourceLicenses onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'Compliance') {
    routesStr += `        <Route path="/compliance" element={<Compliance onBack={() => navigate(-1)} />} />\n`;
  } else if (comp === 'TechnicalFAQ') {
    routesStr += `        <Route path="/technical-faq" element={<TechnicalFAQ onBack={() => navigate(-1)} />} />\n`;
  } else if (comp === 'ModelManagement') {
    routesStr += `        <Route path="/model-management" element={<ModelManagement onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'ExtensionMonitor') {
    routesStr += `        <Route path="/extension-monitor" element={<ExtensionMonitor onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'FeedbackPortal') {
    routesStr += `        <Route path="/feedback-portal" element={<FeedbackPortal onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'CorporateIdentityMonitoring') {
    routesStr += `        <Route path="/corporate-identity-monitoring" element={<CorporateIdentityMonitoring onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'SupportTicket') {
    routesStr += `        <Route path="/support-ticket" element={<SupportTicket onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'SupportTicketHistory') {
    routesStr += `        <Route path="/support-ticket-history" element={<SupportTicketHistory onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'AIAccuracyDashboard') {
    routesStr += `        <Route path="/aiaccuracy-dashboard" element={<AIAccuracyDashboard onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'LanguageLocalization') {
    routesStr += `        <Route path="/language-localization" element={<LanguageLocalization onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'AISecurityOperationsDashboard') {
    routesStr += `        <Route path="/aisecurity-operations-dashboard" element={<AISecurityOperationsDashboard onBack={() => navigate(-1)} />} />\n`;
  } else if (comp === 'TechnicalWhitepaper') {
    routesStr += `        <Route path="/technical-whitepaper" element={<TechnicalWhitepaper onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'AutomatedReportExportSettings') {
    routesStr += `        <Route path="/automated-report-export-settings" element={<AutomatedReportExportSettings onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'ActiveSessions') {
    routesStr += `        <Route path="/active-sessions" element={<ActiveSessions onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'BrowserVulnerabilityMonitor') {
    routesStr += `        <Route path="/browser-vulnerability-monitor" element={<BrowserVulnerabilityMonitor onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'DataRetentionPolicySettings') {
    routesStr += `        <Route path="/data-retention-policy-settings" element={<DataRetentionPolicySettings onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'ApiKeyManagement') {
    routesStr += `        <Route path="/api-key-management" element={<ApiKeyManagement onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'UserMonthlyProtectionSummary') {
    routesStr += `        <Route path="/user-monthly-protection-summary" element={<UserMonthlyProtectionSummary onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'OfflineRecoveryTokensManagement') {
    routesStr += `        <Route path="/offline-recovery-tokens-management" element={<OfflineRecoveryTokensManagement onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'AccountActivityAuditLog') {
    routesStr += `        <Route path="/account-activity-audit-log" element={<AccountActivityAuditLog onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'AiAnalysisApiPayloadSchema') {
    routesStr += `        <Route path="/ai-analysis-api-payload-schema" element={<AiAnalysisApiPayloadSchema onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'TechnicalStyleGuide') {
    routesStr += `        <Route path="/technical-style-guide" element={<TechnicalStyleGuide onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'DataFlowArchitecture') {
    routesStr += `        <Route path="/data-flow-architecture" element={<DataFlowArchitecture onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'TeamAndCredits') {
    routesStr += `        <Route path="/team-and-credits" element={<TeamAndCredits onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'AiModelHealthMonitor') {
    routesStr += `        <Route path="/ai-model-health-monitor" element={<AiModelHealthMonitor onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'QuarantineDashboard') {
    routesStr += `        <Route path="/quarantine-dashboard" element={<QuarantineDashboard onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'TechnicalManual') {
    routesStr += `        <Route path="/technical-manual" element={<TechnicalManual onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'IntegrationExamples') {
    routesStr += `        <Route path="/integration-examples" element={<IntegrationExamples onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'PolicyManager') {
    routesStr += `        <Route path="/policy-manager" element={<PolicyManager onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'CampaignBuilder') {
    routesStr += `        <Route path="/campaign-builder" element={<CampaignBuilder onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'PhishingWarning') {
    routesStr += `        <Route path="/phishing-warning" element={<PhishingWarning onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'IAMSettings') {
    routesStr += `        <Route path="/iam-settings" element={<IAMSettings onClose={() => navigate(-1)} />} />\n`;
  } else if (comp === 'ThreatAlert') {
    routesStr += `        <Route path="/threat-alert" element={<ThreatAlert onDismiss={() => navigate(-1)} />} />\n`;
  } else if (comp === 'APIDocumentation') {
    routesStr += `        <Route path="/api-documentation" element={<APIDocumentation onBack={() => navigate(-1)} />} />\n`;
  } else if (comp === 'DirectoryPortal') {
    routesStr += `        <Route path="/directory-portal" element={<DirectoryPortal onBack={() => navigate(-1)} />} />\n`;
  } else if (comp === 'MasterDashboardStructure') {
    routesStr += `        <Route path="/master-dashboard-structure" element={<MasterDashboardStructure onBack={() => navigate(-1)} />} />\n`;
  } else if (comp === 'QuantumShieldDashboard') {
    routesStr += `        <Route path="/quantum-shield-dashboard" element={<QuantumShieldDashboard onBack={() => navigate(-1)} />} />\n`;
  } else {
    routesStr += `        <Route path="/${pathName}" element={<${comp} />} />\n`;
  }
});

const newAppContent = `import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
${imports.replace(/^import React.*?\n/gm, '')}

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
