import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  ReactFlowProvider,
  Panel
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { AlertTriangle, Clock, Route, ShieldAlert, ShieldBan, Mail, Plus, Play, Save, CheckCircle, XCircle, Terminal, ChevronRight } from 'lucide-react';

interface CustomPlaybookBuilderProps {
  onBack?: () => void;
}

interface ExecutionLog {
  id: string;
  nodeId: string;
  nodeLabel: string;
  nodeType: string;
  startTime: string;
  endTime: string | null;
  status: 'pending' | 'running' | 'success' | 'failed';
  parameters: any;
  message?: string;
}

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Phishing Detected' },
    position: { x: 250, y: 25 },
    style: { background: '#1e293b', color: '#fff', border: '1px solid #6366f1', borderRadius: '8px', padding: '10px' }
  },
];

const initialEdges: Edge[] = [];

let id = 0;
const getId = () => `dndnode_${id++}`;

function PlaybookBuilderContent({ onBack }: CustomPlaybookBuilderProps) {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [executionLogs, setExecutionLogs] = useState<ExecutionLog[]>([]);
  const [showLogs, setShowLogs] = useState(false);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#6366f1' } } as Edge, eds)),
    [setEdges],
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      if (!reactFlowInstance) return;

      const type = event.dataTransfer.getData('application/reactflow');
      const label = event.dataTransfer.getData('application/label');
      const color = event.dataTransfer.getData('application/color');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      
      const newNode: Node = {
        id: getId(),
        type: type === 'input' ? 'input' : type === 'output' ? 'output' : 'default',
        position,
        data: { label: `${label}` },
        style: { background: '#1e293b', color: '#fff', border: `1px solid ${color}`, borderRadius: '8px', padding: '10px' }
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes],
  );

  const onDragStart = (event: React.DragEvent, nodeType: string, label: string, color: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/label', label);
    event.dataTransfer.setData('application/color', color);
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleExecute = async () => {
    if (nodes.length < 2) {
      setError('Playbook must have at least one action connected to a trigger.');
      return;
    }

    setIsExecuting(true);
    setError(null);
    setShowConfirmation(false);
    setExecutionLogs([]);
    setShowLogs(true);

    // Simulate execution step by step
    const newLogs: ExecutionLog[] = [];
    
    // Sort nodes to simulate a flow (very basic topological sort simulation for UI purposes)
    const sortedNodes = [...nodes].sort((a, b) => a.position.y - b.position.y);

    for (const node of sortedNodes) {
      const logId = Math.random().toString(36).substr(2, 9);
      const startTime = new Date().toISOString();
      
      const newLog: ExecutionLog = {
        id: logId,
        nodeId: node.id,
        nodeLabel: node.data.label as string,
        nodeType: node.type || 'default',
        startTime,
        endTime: null,
        status: 'running',
        parameters: { 
          position: node.position,
          type: node.type,
          ...node.data
        }
      };
      
      newLogs.push(newLog);
      setExecutionLogs([...newLogs]);
      
      // Simulate processing time for each node
      await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1000));
      
      const isSuccess = Math.random() > 0.1; // 90% success rate
      
      const updatedLog = {
        ...newLog,
        endTime: new Date().toISOString(),
        status: isSuccess ? 'success' as const : 'failed' as const,
        message: isSuccess ? 'Execution completed successfully' : 'Failed to execute node action'
      };
      
      const logIndex = newLogs.findIndex(l => l.id === logId);
      newLogs[logIndex] = updatedLog;
      setExecutionLogs([...newLogs]);

      if (!isSuccess) {
        setError(`Execution failed at node: ${node.data.label}`);
        break;
      }
    }

    setIsExecuting(false);
    if (!newLogs.some(l => l.status === 'failed')) {
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-[#0f172a] text-slate-200 rounded-xl overflow-hidden border border-slate-800">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900 shrink-0">
        <div className="flex items-center gap-4">
          {onBack && (
            <button onClick={onBack} className="p-2 rounded-lg hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          )}
          <div>
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-indigo-400">account_tree</span>
              Custom Playbook Builder
            </h1>
            <p className="text-xs text-slate-400">Design automated response workflows</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          {showConfirmation && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-lg border border-emerald-400/20"
            >
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Playbook Executed</span>
            </motion.div>
          )}
          <button
            onClick={() => setShowLogs(!showLogs)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold transition-colors border ${showLogs ? 'bg-slate-800 text-white border-slate-700' : 'bg-transparent text-slate-400 border-transparent hover:bg-slate-800 hover:text-white'}`}
          >
            <Terminal className="w-4 h-4" />
            Logs
          </button>
          <button 
            onClick={handleExecute}
            disabled={isExecuting}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isExecuting ? (
              <>
                <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
                Executing...
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Run Playbook
              </>
            )}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold transition-colors border border-slate-700">
            <Save className="w-4 h-4" />
            Save
          </button>
        </div>
      </div>

      {/* Error Banner */}
      {error && (
        <div className="bg-red-500/10 border-b border-red-500/20 p-4 flex items-start gap-3 shrink-0">
          <XCircle className="w-5 h-5 text-red-400 mt-0.5" />
          <div className="flex-1">
            <h3 className="text-sm font-bold text-red-400">Execution Failed</h3>
            <p className="text-sm text-red-300/80 mt-1">{error}</p>
          </div>
          <button onClick={() => setError(null)} className="text-red-400 hover:text-red-300">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      )}

      <div className="flex-1 flex overflow-hidden relative">
        {/* Sidebar */}
        <div className="w-64 border-r border-slate-800 bg-slate-900 p-4 flex flex-col gap-6 overflow-y-auto shrink-0">
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Triggers</h3>
            <div className="space-y-2">
              <div 
                className="p-3 rounded-lg border border-slate-700 bg-slate-800 flex items-center gap-3 cursor-grab hover:border-indigo-500 transition-colors"
                onDragStart={(event) => onDragStart(event, 'input', 'Threat Detected', '#6366f1')}
                draggable
              >
                <AlertTriangle className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-medium">Threat Detected</span>
              </div>
              <div 
                className="p-3 rounded-lg border border-slate-700 bg-slate-800 flex items-center gap-3 cursor-grab hover:border-indigo-500 transition-colors"
                onDragStart={(event) => onDragStart(event, 'input', 'Scheduled Time', '#6366f1')}
                draggable
              >
                <Clock className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-medium">Scheduled Time</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Conditions</h3>
            <div className="space-y-2">
              <div 
                className="p-3 rounded-lg border border-slate-700 bg-slate-800 flex items-center gap-3 cursor-grab hover:border-amber-500 transition-colors"
                onDragStart={(event) => onDragStart(event, 'default', 'Check Severity', '#f59e0b')}
                draggable
              >
                <Route className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium">Check Severity</span>
              </div>
              <div 
                className="p-3 rounded-lg border border-slate-700 bg-slate-800 flex items-center gap-3 cursor-grab hover:border-amber-500 transition-colors"
                onDragStart={(event) => onDragStart(event, 'default', 'User Role is Admin', '#f59e0b')}
                draggable
              >
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium">User Role is Admin</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Actions</h3>
            <div className="space-y-2">
              <div 
                className="p-3 rounded-lg border border-slate-700 bg-slate-800 flex items-center gap-3 cursor-grab hover:border-emerald-500 transition-colors"
                onDragStart={(event) => onDragStart(event, 'output', 'Block IP/Domain', '#10b981')}
                draggable
              >
                <ShieldBan className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium">Block IP/Domain</span>
              </div>
              <div 
                className="p-3 rounded-lg border border-slate-700 bg-slate-800 flex items-center gap-3 cursor-grab hover:border-emerald-500 transition-colors"
                onDragStart={(event) => onDragStart(event, 'output', 'Send Notification', '#10b981')}
                draggable
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium">Send Notification</span>
              </div>
            </div>
          </div>
          
          <div className="mt-auto pt-4 border-t border-slate-800">
            <p className="text-xs text-slate-500 text-center">Drag and drop nodes to the canvas</p>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 relative" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
            colorMode="dark"
          >
            <Controls />
            <MiniMap 
              nodeStrokeColor={(n) => {
                if (n.type === 'input') return '#6366f1';
                if (n.type === 'output') return '#10b981';
                return '#f59e0b';
              }}
              nodeColor={(n) => {
                return '#1e293b';
              }}
              maskColor="rgba(15, 23, 42, 0.8)"
              style={{ backgroundColor: '#0f172a' }}
            />
            <Background gap={16} size={1} color="#334155" />
          </ReactFlow>
        </div>

        {/* Execution Logs Panel */}
        <AnimatePresence>
          {showLogs && (
            <motion.div 
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="absolute top-0 right-0 bottom-0 w-80 bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col z-10"
            >
              <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  Execution Logs
                </h3>
                <button onClick={() => setShowLogs(false)} className="text-slate-400 hover:text-white">
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {executionLogs.length === 0 ? (
                  <div className="text-center text-slate-500 text-sm mt-10">
                    No logs available. Run the playbook to generate logs.
                  </div>
                ) : (
                  executionLogs.map((log) => (
                    <div key={log.id} className="bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {log.status === 'running' && <span className="material-symbols-outlined animate-spin text-indigo-400 text-[16px]">progress_activity</span>}
                          {log.status === 'success' && <CheckCircle className="w-4 h-4 text-emerald-400" />}
                          {log.status === 'failed' && <XCircle className="w-4 h-4 text-red-400" />}
                          <span className="font-bold text-slate-200">{log.nodeLabel}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono">
                          {new Date(log.startTime).toLocaleTimeString()}
                        </span>
                      </div>
                      <div className="pl-6 space-y-1">
                        <p className="text-xs text-slate-400">Type: <span className="text-slate-300">{log.nodeType}</span></p>
                        {log.endTime && (
                          <p className="text-xs text-slate-400">Duration: <span className="text-slate-300">
                            {new Date(log.endTime).getTime() - new Date(log.startTime).getTime()}ms
                          </span></p>
                        )}
                        {log.message && (
                          <p className={`text-xs mt-2 ${log.status === 'failed' ? 'text-red-400' : 'text-emerald-400'}`}>
                            {log.message}
                          </p>
                        )}
                        <details className="mt-2 text-xs">
                          <summary className="text-slate-500 cursor-pointer hover:text-slate-300 flex items-center">
                            <ChevronRight className="w-3 h-3 mr-1" /> Parameters
                          </summary>
                          <pre className="mt-2 p-2 bg-slate-900 rounded border border-slate-800 text-[10px] text-slate-400 overflow-x-auto">
                            {JSON.stringify(log.parameters, null, 2)}
                          </pre>
                        </details>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function CustomPlaybookBuilder(props: CustomPlaybookBuilderProps) {
  return (
    <ReactFlowProvider>
      <PlaybookBuilderContent {...props} />
    </ReactFlowProvider>
  );
}
