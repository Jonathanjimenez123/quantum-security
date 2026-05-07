import React, { useState, useEffect } from 'react';
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
import AIAccuracyDashboard from './components/AIAccuracyDashboard';
import AIAssistant from './components/AIAssistant';
import AIGlobalStatus from './components/AIGlobalStatus';
import AISecurityOperationsDashboard from './components/AISecurityOperationsDashboard';
import AIThreatAnalysis from './components/AIThreatAnalysis';
import AIThreatPredictionDashboard from './components/AIThreatPredictionDashboard';
import APIDocumentation from './components/APIDocumentation';
import AccessRequestApproval from './components/AccessRequestApproval';
import AccountActivityAuditLog from './components/AccountActivityAuditLog';
import AccountRecovery from './components/AccountRecovery';
import ActiveIntegrationsHealth from './components/ActiveIntegrationsHealth';
import ActiveSessions from './components/ActiveSessions';
import AdminAnalytics from './components/AdminAnalytics';
import AiModelHealthMonitor from './components/AiModelHealthMonitor';
import AlertSchedules from './components/AlertSchedules';
import ApiIntegration from './components/ApiIntegration';
import ApiKeyManagement from './components/ApiKeyManagement';
import AutomatedReportExportSettings from './components/AutomatedReportExportSettings';
import BillingPortal from './components/BillingPortal';
import BrowserVulnerabilityMonitor from './components/BrowserVulnerabilityMonitor';
import CampaignBuilder from './components/CampaignBuilder';
import ChallengeResults from './components/ChallengeResults';
import CommandCenter from './components/CommandCenter';
import Compliance from './components/Compliance';
import ConflictingExtensionsAlerts from './components/ConflictingExtensionsAlerts';
import CorporateIdentityMonitoring from './components/CorporateIdentityMonitoring';
import CustomPlaybookBuilder from './components/CustomPlaybookBuilder';
import DarkWebMonitoringDashboard from './components/DarkWebMonitoringDashboard';
import DataFlowArchitecture from './components/DataFlowArchitecture';
import DataRetentionPolicySettings from './components/DataRetentionPolicySettings';
import DataTopologyMap from './components/DataTopologyMap';
import DebuggingConsole from './components/DebuggingConsole';
import DepartmentalSecurityTraining from './components/DepartmentalSecurityTraining';
import PqcAnomalyDetector from './components/PqcAnomalyDetector';
import SoarOrchestrator from './components/SoarOrchestrator';
import DeveloperTerminal from './components/DeveloperTerminal';
import SourceCodeHub from './components/SourceCodeHub';
import QuantumSourceCodeView from './components/QuantumSourceCodeView';
import DeliveryMasterDocument from './components/DeliveryMasterDocument';
import DeliveryMasterSourceCode from './components/DeliveryMasterSourceCode';
import SoarAutomationModule from './components/SoarAutomationModule';
import ExecutiveDashboard from './components/ExecutiveDashboard';
import ExecutiveSummary from './components/ExecutiveSummary';
import ExtensionMonitor from './components/ExtensionMonitor';
import ExtensionPopup from './components/ExtensionPopup';
import FeedbackPortal from './components/FeedbackPortal';
import ForensicAudit from './components/ForensicAudit';
import ForensicSandbox from './components/ForensicSandbox';
import GeographicAccessAlerts from './components/GeographicAccessAlerts';
import GlobalCommand from './components/GlobalCommand';
import GlobalThreatIntelDashboard from './components/GlobalThreatIntelDashboard';
import GlobalThreatMap from './components/GlobalThreatMap';
import HelpCenter from './components/HelpCenter';
import IAMSettings from './components/IAMSettings';
import IncidentReport from './components/IncidentReport';
import IncidentReportingModal from './components/IncidentReportingModal';
import Insights from './components/Insights';
import IntegrationExamples from './components/IntegrationExamples';
import IntegrationSettings from './components/IntegrationSettings';
import InteractiveChallenge from './components/InteractiveChallenge';
import InteractiveTraining from './components/InteractiveTraining';
import InteractiveTrainingModule from './components/InteractiveTrainingModule';
import LanguageLocalization from './components/LanguageLocalization';
import Leaderboard from './components/Leaderboard';
import LoadingAndOfflineStates from './components/LoadingAndOfflineStates';
import LocalCacheOptimization from './components/LocalCacheOptimization';
import Logs from './components/Logs';
import MasterDashboardStructure from './components/MasterDashboardStructure';
import MobileDashboard from './components/MobileDashboard';
import ModelManagement from './components/ModelManagement';
import MonthlyReport from './components/MonthlyReport';
import NotificationPreferences from './components/NotificationPreferences';
import NotificationSettings from './components/NotificationSettings';
import OfflineRecoveryTokensManagement from './components/OfflineRecoveryTokensManagement';
import OnboardingStep2 from './components/OnboardingStep2';
import OnboardingStep3 from './components/OnboardingStep3';
import OpenSourceLicenses from './components/OpenSourceLicenses';
import PQCManagementCenter from './components/PQCManagementCenter';
import PermissionsRequest from './components/PermissionsRequest';
import PersonalSecurityProfile from './components/PersonalSecurityProfile';
import PhishingSimulation from './components/PhishingSimulation';
import PhishingWarning from './components/PhishingWarning';
import PolicyManager from './components/PolicyManager';
import PostMortemReport from './components/PostMortemReport';
import Pricing from './components/Pricing';
import PrivacyCompliance from './components/PrivacyCompliance';
import QuantumShieldDashboard from './components/QuantumShieldDashboard';
import QuarantineDashboard from './components/QuarantineDashboard';
import ReferralProgram from './components/ReferralProgram';
import ReportFalsePositive from './components/ReportFalsePositive';
import RoiAnalytics from './components/RoiAnalytics';
import SafeList from './components/SafeList';
import Scanner from './components/Scanner';
import SecurityAlertInterface from './components/SecurityAlertInterface';
import SecurityAwareness from './components/SecurityAwareness';
import SecurityCultureDashboard from './components/SecurityCultureDashboard';
import SecurityIncidentWarRoom from './components/SecurityIncidentWarRoom';
import SentimentAnalysisDashboard from './components/SentimentAnalysisDashboard';
import ServiceTermination from './components/ServiceTermination';
import Settings from './components/Settings';
import SoarAutomationDashboard from './components/SoarAutomationDashboard';
import SoarIncidentResponse from './components/SoarIncidentResponse';
import SoarPlaybookEditor from './components/SoarPlaybookEditor';
import SoarPlaybookImport from './components/SoarPlaybookImport';
import SoarPlaybookLogs from './components/SoarPlaybookLogs';
import SoarPlaybookTemplates from './components/SoarPlaybookTemplates';
import SoarVersionComparison from './components/SoarVersionComparison';
import SocMonitoringWall from './components/SocMonitoringWall';
import SummaryReport from './components/SummaryReport';
import SupportChat from './components/SupportChat';
import SupportTicketHistory from './components/SupportTicketHistory';
import SystemAuditLog from './components/SystemAuditLog';
import SystemStatus from './components/SystemStatus';
import TeamAndCredits from './components/TeamAndCredits';
import TeamManagement from './components/TeamManagement';
import TechnicalFAQ from './components/TechnicalFAQ';
import TechnicalManual from './components/TechnicalManual';
import TechnicalStyleGuide from './components/TechnicalStyleGuide';
import TechnicalWhitepaper from './components/TechnicalWhitepaper';
import TermsOfService from './components/TermsOfService';
import ThreatAlert from './components/ThreatAlert';
import ThreatHistoryDashboard from './components/ThreatHistoryDashboard';
import TrainingChallenge from './components/TrainingChallenge';
import TrainingFeedback from './components/TrainingFeedback';
import TrainingModule from './components/TrainingModule';
import UserMonthlyProtectionSummary from './components/UserMonthlyProtectionSummary';
import UserProfile from './components/UserProfile';
import WarningScreen from './components/WarningScreen';
import WebhookManagement from './components/WebhookManagement';


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


  const directoryPages = [
    { name: 'Dashboard', category: 'General', onClick: () => navigate('/panel') },
    { name: 'A I Accuracy Dashboard', category: 'Dashboards', onClick: () => navigate('/a-i-accuracy-dashboard') },
    { name: 'A I Assistant', category: 'Pages', onClick: () => navigate('/a-i-assistant') },
    { name: 'A I Global Status', category: 'Pages', onClick: () => navigate('/a-i-global-status') },
    { name: 'A I Security Operations Dashboard', category: 'Dashboards', onClick: () => navigate('/a-i-security-operations-dashboard') },
    { name: 'A I Threat Analysis', category: 'Security', onClick: () => navigate('/a-i-threat-analysis') },
    { name: 'A I Threat Prediction Dashboard', category: 'Dashboards', onClick: () => navigate('/a-i-threat-prediction-dashboard') },
    { name: 'A P I Documentation', category: 'Pages', onClick: () => navigate('/a-p-i-documentation') },
    { name: 'Access Request Approval', category: 'Pages', onClick: () => navigate('/access-request-approval') },
    { name: 'Account Activity Audit Log', category: 'Reports & Logs', onClick: () => navigate('/account-activity-audit-log') },
    { name: 'Account Recovery', category: 'Pages', onClick: () => navigate('/account-recovery') },
    { name: 'Active Integrations Health', category: 'Pages', onClick: () => navigate('/active-integrations-health') },
    { name: 'Active Sessions', category: 'Pages', onClick: () => navigate('/active-sessions') },
    { name: 'Admin Analytics', category: 'Reports & Logs', onClick: () => navigate('/admin-analytics') },
    { name: 'Ai Model Health Monitor', category: 'Pages', onClick: () => navigate('/ai-model-health-monitor') },
    { name: 'Alert Schedules', category: 'Pages', onClick: () => navigate('/alert-schedules') },
    { name: 'Api Integration', category: 'Pages', onClick: () => navigate('/api-integration') },
    { name: 'Api Key Management', category: 'Pages', onClick: () => navigate('/api-key-management') },
    { name: 'Automated Report Export Settings', category: 'Settings', onClick: () => navigate('/automated-report-export-settings') },
    { name: 'Billing Portal', category: 'Pages', onClick: () => navigate('/billing-portal') },
    { name: 'Browser Vulnerability Monitor', category: 'Pages', onClick: () => navigate('/browser-vulnerability-monitor') },
    { name: 'Campaign Builder', category: 'Pages', onClick: () => navigate('/campaign-builder') },
    { name: 'Challenge Results', category: 'Training', onClick: () => navigate('/challenge-results') },
    { name: 'Command Center', category: 'Pages', onClick: () => navigate('/command-center') },
    { name: 'Compliance', category: 'Pages', onClick: () => navigate('/compliance') },
    { name: 'Conflicting Extensions Alerts', category: 'Pages', onClick: () => navigate('/conflicting-extensions-alerts') },
    { name: 'Corporate Identity Monitoring', category: 'Pages', onClick: () => navigate('/corporate-identity-monitoring') },
    { name: 'Custom Playbook Builder', category: 'Pages', onClick: () => navigate('/custom-playbook-builder') },
    { name: 'Dark Web Monitoring Dashboard', category: 'Dashboards', onClick: () => navigate('/dark-web-monitoring-dashboard') },
    { name: 'Data Flow Architecture', category: 'Pages', onClick: () => navigate('/data-flow-architecture') },
    { name: 'Data Retention Policy Settings', category: 'Settings', onClick: () => navigate('/data-retention-policy-settings') },
    { name: 'Data Topology Map', category: 'Pages', onClick: () => navigate('/data-topology-map') },
    { name: 'Debugging Console', category: 'Pages', onClick: () => navigate('/debugging-console') },
    { name: 'Departmental Security Training', category: 'Security', onClick: () => navigate('/departmental-security-training') },
    { name: 'Developer Terminal', category: 'Pages', onClick: () => navigate('/developer-terminal') },
    { name: 'Source Code Hub', category: 'Pages', onClick: () => navigate('/source-code-hub') },
    { name: 'PQC Anomaly Detector', category: 'Pages', onClick: () => navigate('/pqc-anomaly-detector') },
    { name: 'SOAR Orchestrator', category: 'Pages', onClick: () => navigate('/soar-orchestrator') },
    { name: 'Quantum Source Code View', category: 'Pages', onClick: () => navigate('/quantum-source-code-view') },
    { name: 'Delivery Master Document', category: 'Pages', onClick: () => navigate('/delivery-master-document') },
    { name: 'Delivery Master Source Code', category: 'Pages', onClick: () => navigate('/delivery-master-source-code') },
    { name: 'Soar Automation Module', category: 'Pages', onClick: () => navigate('/soar-automation-module') },
    { name: 'Executive Dashboard', category: 'Dashboards', onClick: () => navigate('/executive-dashboard') },
    { name: 'Executive Summary', category: 'Pages', onClick: () => navigate('/executive-summary') },
    { name: 'Extension Monitor', category: 'Pages', onClick: () => navigate('/extension-monitor') },
    { name: 'Extension Popup', category: 'Pages', onClick: () => navigate('/extension-popup') },
    { name: 'Feedback Portal', category: 'Pages', onClick: () => navigate('/feedback-portal') },
    { name: 'Forensic Audit', category: 'Reports & Logs', onClick: () => navigate('/forensic-audit') },
    { name: 'Forensic Sandbox', category: 'Pages', onClick: () => navigate('/forensic-sandbox') },
    { name: 'Geographic Access Alerts', category: 'Pages', onClick: () => navigate('/geographic-access-alerts') },
    { name: 'Global Command', category: 'Pages', onClick: () => navigate('/global-command') },
    { name: 'Global Threat Intel Dashboard', category: 'Dashboards', onClick: () => navigate('/global-threat-intel-dashboard') },
    { name: 'Global Threat Map', category: 'Security', onClick: () => navigate('/global-threat-map') },
    { name: 'Help Center', category: 'Pages', onClick: () => navigate('/help-center') },
    { name: 'I A M Settings', category: 'Settings', onClick: () => navigate('/i-a-m-settings') },
    { name: 'Incident Report', category: 'Reports & Logs', onClick: () => navigate('/incident-report') },
    { name: 'Incident Reporting Modal', category: 'Reports & Logs', onClick: () => navigate('/incident-reporting-modal') },
    { name: 'Insights', category: 'Pages', onClick: () => navigate('/insights') },
    { name: 'Integration Examples', category: 'Pages', onClick: () => navigate('/integration-examples') },
    { name: 'Integration Settings', category: 'Settings', onClick: () => navigate('/integration-settings') },
    { name: 'Interactive Challenge', category: 'Training', onClick: () => navigate('/interactive-challenge') },
    { name: 'Interactive Training', category: 'Training', onClick: () => navigate('/interactive-training') },
    { name: 'Interactive Training Module', category: 'Training', onClick: () => navigate('/interactive-training-module') },
    { name: 'Language Localization', category: 'Pages', onClick: () => navigate('/language-localization') },
    { name: 'Leaderboard', category: 'Pages', onClick: () => navigate('/leaderboard') },
    { name: 'Loading And Offline States', category: 'Pages', onClick: () => navigate('/loading-and-offline-states') },
    { name: 'Local Cache Optimization', category: 'Pages', onClick: () => navigate('/local-cache-optimization') },
    { name: 'Logs', category: 'Reports & Logs', onClick: () => navigate('/logs') },
    { name: 'Master Dashboard Structure', category: 'Dashboards', onClick: () => navigate('/master-dashboard-structure') },
    { name: 'Mobile Dashboard', category: 'Dashboards', onClick: () => navigate('/mobile-dashboard') },
    { name: 'Model Management', category: 'Pages', onClick: () => navigate('/model-management') },
    { name: 'Monthly Report', category: 'Reports & Logs', onClick: () => navigate('/monthly-report') },
    { name: 'Notification Preferences', category: 'Settings', onClick: () => navigate('/notification-preferences') },
    { name: 'Notification Settings', category: 'Settings', onClick: () => navigate('/notification-settings') },
    { name: 'Offline Recovery Tokens Management', category: 'Pages', onClick: () => navigate('/offline-recovery-tokens-management') },
    { name: 'Onboarding Step2', category: 'Pages', onClick: () => navigate('/onboarding-step2') },
    { name: 'Onboarding Step3', category: 'Pages', onClick: () => navigate('/onboarding-step3') },
    { name: 'Open Source Licenses', category: 'Pages', onClick: () => navigate('/open-source-licenses') },
    { name: 'P Q C Management Center', category: 'Pages', onClick: () => navigate('/p-q-c-management-center') },
    { name: 'Permissions Request', category: 'Pages', onClick: () => navigate('/permissions-request') },
    { name: 'Personal Security Profile', category: 'Security', onClick: () => navigate('/personal-security-profile') },
    { name: 'Phishing Simulation', category: 'Training', onClick: () => navigate('/phishing-simulation') },
    { name: 'Phishing Warning', category: 'Pages', onClick: () => navigate('/phishing-warning') },
    { name: 'Policy Manager', category: 'Settings', onClick: () => navigate('/policy-manager') },
    { name: 'Post Mortem Report', category: 'Reports & Logs', onClick: () => navigate('/post-mortem-report') },
    { name: 'Pricing', category: 'Pages', onClick: () => navigate('/pricing') },
    { name: 'Privacy Compliance', category: 'Pages', onClick: () => navigate('/privacy-compliance') },
    { name: 'Quantum Shield Dashboard', category: 'Dashboards', onClick: () => navigate('/quantum-shield-dashboard') },
    { name: 'Quarantine Dashboard', category: 'Dashboards', onClick: () => navigate('/quarantine-dashboard') },
    { name: 'Referral Program', category: 'Pages', onClick: () => navigate('/referral-program') },
    { name: 'Report False Positive', category: 'Reports & Logs', onClick: () => navigate('/report-false-positive') },
    { name: 'Roi Analytics', category: 'Reports & Logs', onClick: () => navigate('/roi-analytics') },
    { name: 'Safe List', category: 'Pages', onClick: () => navigate('/safe-list') },
    { name: 'Scanner', category: 'Pages', onClick: () => navigate('/scanner') },
    { name: 'Security Alert Interface', category: 'Security', onClick: () => navigate('/security-alert-interface') },
    { name: 'Security Awareness', category: 'Security', onClick: () => navigate('/security-awareness') },
    { name: 'Security Culture Dashboard', category: 'Dashboards', onClick: () => navigate('/security-culture-dashboard') },
    { name: 'Security Incident War Room', category: 'Security', onClick: () => navigate('/security-incident-war-room') },
    { name: 'Sentiment Analysis Dashboard', category: 'Dashboards', onClick: () => navigate('/sentiment-analysis-dashboard') },
    { name: 'Service Termination', category: 'Pages', onClick: () => navigate('/service-termination') },
    { name: 'Settings', category: 'Settings', onClick: () => navigate('/settings') },
    { name: 'Soar Automation Dashboard', category: 'Dashboards', onClick: () => navigate('/soar-automation-dashboard') },
    { name: 'Soar Incident Response', category: 'Security', onClick: () => navigate('/soar-incident-response') },
    { name: 'Soar Playbook Editor', category: 'Pages', onClick: () => navigate('/soar-playbook-editor') },
    { name: 'Soar Playbook Import', category: 'Pages', onClick: () => navigate('/soar-playbook-import') },
    { name: 'Soar Playbook Logs', category: 'Reports & Logs', onClick: () => navigate('/soar-playbook-logs') },
    { name: 'Soar Playbook Templates', category: 'Pages', onClick: () => navigate('/soar-playbook-templates') },
    { name: 'Soar Version Comparison', category: 'Pages', onClick: () => navigate('/soar-version-comparison') },
    { name: 'Soc Monitoring Wall', category: 'Pages', onClick: () => navigate('/soc-monitoring-wall') },
    { name: 'Summary Report', category: 'Reports & Logs', onClick: () => navigate('/summary-report') },
    { name: 'Support Chat', category: 'Pages', onClick: () => navigate('/support-chat') },
    { name: 'Support Ticket History', category: 'Pages', onClick: () => navigate('/support-ticket-history') },
    { name: 'System Audit Log', category: 'Reports & Logs', onClick: () => navigate('/system-audit-log') },
    { name: 'System Status', category: 'Pages', onClick: () => navigate('/system-status') },
    { name: 'Team And Credits', category: 'Pages', onClick: () => navigate('/team-and-credits') },
    { name: 'Team Management', category: 'Pages', onClick: () => navigate('/team-management') },
    { name: 'Technical F A Q', category: 'Pages', onClick: () => navigate('/technical-f-a-q') },
    { name: 'Technical Manual', category: 'Pages', onClick: () => navigate('/technical-manual') },
    { name: 'Technical Style Guide', category: 'Pages', onClick: () => navigate('/technical-style-guide') },
    { name: 'Technical Whitepaper', category: 'Pages', onClick: () => navigate('/technical-whitepaper') },
    { name: 'Terms Of Service', category: 'Pages', onClick: () => navigate('/terms-of-service') },
    { name: 'Threat Alert', category: 'Security', onClick: () => navigate('/threat-alert') },
    { name: 'Threat History Dashboard', category: 'Dashboards', onClick: () => navigate('/threat-history-dashboard') },
    { name: 'Training Challenge', category: 'Training', onClick: () => navigate('/training-challenge') },
    { name: 'Training Feedback', category: 'Training', onClick: () => navigate('/training-feedback') },
    { name: 'Training Module', category: 'Training', onClick: () => navigate('/training-module') },
    { name: 'User Monthly Protection Summary', category: 'Pages', onClick: () => navigate('/user-monthly-protection-summary') },
    { name: 'User Profile', category: 'Pages', onClick: () => navigate('/user-profile') },
    { name: 'Warning Screen', category: 'Pages', onClick: () => navigate('/warning-screen') },
    { name: 'Webhook Management', category: 'Pages', onClick: () => navigate('/webhook-management') },
  ];


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
          {/* @ts-ignore */}
          <Route path="/a-i-accuracy-dashboard" element={<AIAccuracyDashboard onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/a-i-assistant" element={<AIAssistant onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/a-i-global-status" element={<AIGlobalStatus onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/a-i-security-operations-dashboard" element={<AISecurityOperationsDashboard onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/a-i-threat-analysis" element={<AIThreatAnalysis onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/a-i-threat-prediction-dashboard" element={<AIThreatPredictionDashboard onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/a-p-i-documentation" element={<APIDocumentation onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/access-request-approval" element={<AccessRequestApproval onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/account-activity-audit-log" element={<AccountActivityAuditLog onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/account-recovery" element={<AccountRecovery onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/active-integrations-health" element={<ActiveIntegrationsHealth onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/active-sessions" element={<ActiveSessions onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/admin-analytics" element={<AdminAnalytics onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/ai-model-health-monitor" element={<AiModelHealthMonitor onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/alert-schedules" element={<AlertSchedules onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/api-integration" element={<ApiIntegration onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/api-key-management" element={<ApiKeyManagement onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/automated-report-export-settings" element={<AutomatedReportExportSettings onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/billing-portal" element={<BillingPortal onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/browser-vulnerability-monitor" element={<BrowserVulnerabilityMonitor onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/campaign-builder" element={<CampaignBuilder onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/challenge-results" element={<ChallengeResults onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/command-center" element={<CommandCenter onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/compliance" element={<Compliance onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/conflicting-extensions-alerts" element={<ConflictingExtensionsAlerts onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/corporate-identity-monitoring" element={<CorporateIdentityMonitoring onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/custom-playbook-builder" element={<CustomPlaybookBuilder onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/dark-web-monitoring-dashboard" element={<DarkWebMonitoringDashboard onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/data-flow-architecture" element={<DataFlowArchitecture onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/data-retention-policy-settings" element={<DataRetentionPolicySettings onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/data-topology-map" element={<DataTopologyMap onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/debugging-console" element={<DebuggingConsole onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/departmental-security-training" element={<DepartmentalSecurityTraining onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/developer-terminal" element={<DeveloperTerminal onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/source-code-hub" element={<SourceCodeHub onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/pqc-anomaly-detector" element={<PqcAnomalyDetector onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/soar-orchestrator" element={<SoarOrchestrator onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/quantum-source-code-view" element={<QuantumSourceCodeView onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/delivery-master-document" element={<DeliveryMasterDocument onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/delivery-master-source-code" element={<DeliveryMasterSourceCode onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/soar-automation-module" element={<SoarAutomationModule onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/executive-dashboard" element={<ExecutiveDashboard onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/executive-summary" element={<ExecutiveSummary onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/extension-monitor" element={<ExtensionMonitor onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/extension-popup" element={<ExtensionPopup onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/feedback-portal" element={<FeedbackPortal onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/forensic-audit" element={<ForensicAudit onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/forensic-sandbox" element={<ForensicSandbox onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/geographic-access-alerts" element={<GeographicAccessAlerts onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/global-command" element={<GlobalCommand onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/global-threat-intel-dashboard" element={<GlobalThreatIntelDashboard onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/global-threat-map" element={<GlobalThreatMap onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/help-center" element={<HelpCenter onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/i-a-m-settings" element={<IAMSettings onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/incident-report" element={<IncidentReport onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/incident-reporting-modal" element={<IncidentReportingModal onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/insights" element={<Insights onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/integration-examples" element={<IntegrationExamples onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/integration-settings" element={<IntegrationSettings onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/interactive-challenge" element={<InteractiveChallenge onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/interactive-training" element={<InteractiveTraining onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/interactive-training-module" element={<InteractiveTrainingModule onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/language-localization" element={<LanguageLocalization onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/leaderboard" element={<Leaderboard onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/loading-and-offline-states" element={<LoadingAndOfflineStates onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/local-cache-optimization" element={<LocalCacheOptimization onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/logs" element={<Logs onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/master-dashboard-structure" element={<MasterDashboardStructure onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/mobile-dashboard" element={<MobileDashboard onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/model-management" element={<ModelManagement onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/monthly-report" element={<MonthlyReport onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/notification-preferences" element={<NotificationPreferences onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/notification-settings" element={<NotificationSettings onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/offline-recovery-tokens-management" element={<OfflineRecoveryTokensManagement onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/onboarding-step2" element={<OnboardingStep2 onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/onboarding-step3" element={<OnboardingStep3 onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/open-source-licenses" element={<OpenSourceLicenses onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/p-q-c-management-center" element={<PQCManagementCenter onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/permissions-request" element={<PermissionsRequest onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/personal-security-profile" element={<PersonalSecurityProfile onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/phishing-simulation" element={<PhishingSimulation onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/phishing-warning" element={<PhishingWarning onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/policy-manager" element={<PolicyManager onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/post-mortem-report" element={<PostMortemReport onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/pricing" element={<Pricing onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/privacy-compliance" element={<PrivacyCompliance onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/quantum-shield-dashboard" element={<QuantumShieldDashboard onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/quarantine-dashboard" element={<QuarantineDashboard onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/referral-program" element={<ReferralProgram onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/report-false-positive" element={<ReportFalsePositive onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/roi-analytics" element={<RoiAnalytics onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/safe-list" element={<SafeList onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/scanner" element={<Scanner onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/security-alert-interface" element={<SecurityAlertInterface onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/security-awareness" element={<SecurityAwareness onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/security-culture-dashboard" element={<SecurityCultureDashboard onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/security-incident-war-room" element={<SecurityIncidentWarRoom onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/sentiment-analysis-dashboard" element={<SentimentAnalysisDashboard onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/service-termination" element={<ServiceTermination onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/settings" element={<Settings onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/soar-automation-dashboard" element={<SoarAutomationDashboard onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/soar-incident-response" element={<SoarIncidentResponse onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/soar-playbook-editor" element={<SoarPlaybookEditor onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/soar-playbook-import" element={<SoarPlaybookImport onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/soar-playbook-logs" element={<SoarPlaybookLogs onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/soar-playbook-templates" element={<SoarPlaybookTemplates onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/soar-version-comparison" element={<SoarVersionComparison onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/soc-monitoring-wall" element={<SocMonitoringWall onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/summary-report" element={<SummaryReport onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/support-chat" element={<SupportChat onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/support-ticket-history" element={<SupportTicketHistory onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/system-audit-log" element={<SystemAuditLog onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/system-status" element={<SystemStatus onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/team-and-credits" element={<TeamAndCredits onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/team-management" element={<TeamManagement onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/technical-f-a-q" element={<TechnicalFAQ onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/technical-manual" element={<TechnicalManual onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/technical-style-guide" element={<TechnicalStyleGuide onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/technical-whitepaper" element={<TechnicalWhitepaper onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/terms-of-service" element={<TermsOfService onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/threat-alert" element={<ThreatAlert onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/threat-history-dashboard" element={<ThreatHistoryDashboard onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/training-challenge" element={<TrainingChallenge onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/training-feedback" element={<TrainingFeedback onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/training-module" element={<TrainingModule onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/user-monthly-protection-summary" element={<UserMonthlyProtectionSummary onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/user-profile" element={<UserProfile onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/warning-screen" element={<WarningScreen onBack={() => navigate(-1)} />} />
          {/* @ts-ignore */}
          <Route path="/webhook-management" element={<WebhookManagement onBack={() => navigate(-1)} />} />
          </Route>

          <Route path="*" element={<Navigate to='/panel' replace />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}
