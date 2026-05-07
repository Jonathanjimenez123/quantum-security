import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  ZoomableGroup
} from 'react-simple-maps';
import { motion } from 'motion/react';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface Node {
  id: string;
  name: string;
  coordinates: [number, number];
  status: 'active' | 'attacked';
  latency: string;
}

interface AttackLine {
  id: string;
  from: [number, number];
  to: [number, number];
  color: string;
}

const nodes: Node[] = [
  { id: 'lon', name: 'Londres', coordinates: [-0.1276, 51.5074], status: 'active', latency: '92ms' },
  { id: 'nyc', name: 'Nueva York', coordinates: [-74.006, 40.7128], status: 'active', latency: '45ms' },
  { id: 'sin', name: 'Singapur', coordinates: [103.8198, 1.3521], status: 'attacked', latency: 'Bajo Ataque' },
  { id: 'tok', name: 'Tokio', coordinates: [139.6917, 35.6895], status: 'active', latency: '120ms' },
  { id: 'syd', name: 'Sídney', coordinates: [151.2093, -33.8688], status: 'active', latency: '150ms' },
];

const initialLines: AttackLine[] = [
  { id: '1', from: [-74.006, 40.7128], to: [-0.1276, 51.5074], color: '#3b82f6' },
  { id: '2', from: [139.6917, 35.6895], to: [103.8198, 1.3521], color: '#ef4444' },
  { id: '3', from: [151.2093, -33.8688], to: [-74.006, 40.7128], color: '#a855f7' },
];

export default function GlobalThreatMap() {
  const [lines, setLines] = useState<AttackLine[]>(initialLines);
  const [tooltipContent, setTooltipContent] = useState('');
  const [position, setPosition] = useState({ coordinates: [0, 20], zoom: 1 });

  useEffect(() => {
    // Simulate real-time attacks
    const interval = setInterval(() => {
      const randomNode1 = nodes[Math.floor(Math.random() * nodes.length)];
      let randomNode2 = nodes[Math.floor(Math.random() * nodes.length)];
      while (randomNode1.id === randomNode2.id) {
        randomNode2 = nodes[Math.floor(Math.random() * nodes.length)];
      }

      const newLine: AttackLine = {
        id: Math.random().toString(),
        from: randomNode1.coordinates,
        to: randomNode2.coordinates,
        color: Math.random() > 0.6 ? '#ef4444' : Math.random() > 0.5 ? '#a855f7' : '#3b82f6',
      };

      setLines(prev => {
        const newLines = [...prev, newLine];
        if (newLines.length > 6) {
          newLines.shift();
        }
        return newLines;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  const handleMoveEnd = (position: any) => {
    setPosition(position);
  };

  return (
    <div className="relative w-full h-full bg-[#060910] rounded-2xl overflow-hidden border border-white/5 shadow-inner group">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMjIyMiIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgNjBoNjBWMGgtNjB6IiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-20 pointer-events-none"></div>
      
      <ComposableMap
        projectionConfig={{
          scale: 140,
        }}
        width={800}
        height={400}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates as [number, number]}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#0F1423"
                  stroke="#1a233a"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#1a233a", outline: "none", stroke: "#3b82f6", strokeWidth: 1 },
                    pressed: { fill: "#243254", outline: "none" },
                  }}
                  onMouseEnter={() => {
                    setTooltipContent(geo.properties.name);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                />
              ))
            }
          </Geographies>

          {lines.map((line) => (
            <Line
              key={line.id}
              from={line.from}
              to={line.to}
              stroke={line.color}
              strokeWidth={1.5}
              strokeLinecap="round"
              style={{
                strokeDasharray: "4 4",
                animation: "dash 20s linear infinite"
              }}
              className="opacity-70 drop-shadow-[0_0_8px_currentColor]"
            />
          ))}

          {nodes.map((node) => (
            <Marker key={node.id} coordinates={node.coordinates}>
              <circle
                r={node.status === 'attacked' ? 8 : 5}
                fill={node.status === 'attacked' ? '#ef4444' : '#3b82f6'}
                className={node.status === 'attacked' ? 'animate-ping opacity-70' : 'animate-pulse opacity-40'}
              />
              <circle
                r={node.status === 'attacked' ? 4 : 2}
                fill="#ffffff"
                className="drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
              />
              <text
                textAnchor="middle"
                y={15}
                style={{ fontFamily: "ui-monospace, monospace", fontSize: "6px", fill: "#94a3b8", fontWeight: "bold" }}
              >
                {node.id.toUpperCase()}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Embedded CSS for SVG line animation */}
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
      `}</style>

      {tooltipContent && (
        <motion.div 
          initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
          className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-[#0F1423]/90 backdrop-blur-md border border-blue-500/30 px-5 py-2 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.2)] text-white text-[11px] font-bold tracking-widest uppercase pointer-events-none z-10"
        >
          {tooltipContent}
        </motion.div>
      )}

      <div className="absolute left-6 bottom-6 space-y-4 pointer-events-none z-10">
        <div className="bg-[#0F1423]/90 backdrop-blur-md border border-white/5 p-5 rounded-2xl shadow-2xl w-64 pointer-events-auto transition-transform group-hover:scale-[1.01]">
          <h3 className="text-[10px] font-bold uppercase text-slate-500 mb-4 tracking-widest flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">router</span>
            Network Nodes
          </h3>
          <div className="flex flex-col gap-3" role="list">
            {nodes.map(node => (
              <div key={node.id} role="listitem" className="flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center">
                    <span className={`absolute w-3 h-3 rounded-full ${node.status === 'attacked' ? 'bg-red-500/40 animate-ping' : 'bg-emerald-500/40 animate-pulse'}`} aria-hidden="true"></span>
                    <span className={`relative w-1.5 h-1.5 rounded-full ${node.status === 'attacked' ? 'bg-red-500' : 'bg-emerald-500'}`} aria-hidden="true"></span>
                  </div>
                  <span className="text-slate-300">{node.name}</span>
                </span>
                <span className={`font-bold ${node.status === 'attacked' ? 'text-red-400 drop-shadow-[0_0_5px_rgba(239,68,68,0.6)] animate-pulse' : 'text-slate-500'}`}>
                  {node.latency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-6 bottom-6 flex flex-col gap-2 z-10" role="group" aria-label="Controles de zoom">
        <button onClick={handleZoomIn} aria-label="Acercar mapa" className="size-10 bg-[#0F1423]/90 backdrop-blur-md border border-white/10 flex items-center justify-center rounded-xl text-slate-400 hover:text-white hover:border-white/30 transition-all shadow-xl">
          <span className="material-symbols-outlined text-[20px]">add</span>
        </button>
        <button onClick={handleZoomOut} aria-label="Alejar mapa" className="size-10 bg-[#0F1423]/90 backdrop-blur-md border border-white/10 flex items-center justify-center rounded-xl text-slate-400 hover:text-white hover:border-white/30 transition-all shadow-xl">
          <span className="material-symbols-outlined text-[20px]">remove</span>
        </button>
      </div>
    </div>
  );
}
