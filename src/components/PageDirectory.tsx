import React, { useState } from 'react';

interface Page {
  name: string;
  category: string;
  onClick: () => void;
}

interface PageDirectoryProps {
  isOpen: boolean;
  onClose: () => void;
  pages: Page[];
}

export default function PageDirectory({ isOpen, onClose, pages }: PageDirectoryProps) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredPages = pages.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const categories = Array.from(new Set(filteredPages.map(p => p.category))).sort();

  return (
    <div className="fixed inset-0 z-[100] bg-background-dark/95 backdrop-blur-md flex flex-col overflow-hidden font-display text-slate-100">
      <div className="flex items-center justify-between p-6 border-b border-border-dark bg-background-dark/80 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-primary/20 text-primary rounded-lg">
            <span className="material-symbols-outlined">explore</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Component Directory</h2>
            <p className="text-sm text-slate-400">Explore all available pages and components in the application</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input 
              type="text" 
              placeholder="Buscar pages..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-surface-dark border border-border-dark text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-64 pl-10 p-2.5 outline-none"
            />
          </div>
          <button onClick={onClose} className="p-2.5 rounded-lg bg-surface-dark border border-border-dark text-slate-400 hover:text-white hover:bg-border-dark transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
        <div className="max-w-7xl mx-auto space-y-10">
          {categories.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <span className="material-symbols-outlined text-4xl mb-2">search_off</span>
              <p>No pages found matching "{searchTerm}"</p>
            </div>
          ) : (
            categories.map(category => (
              <div key={category} className="space-y-4">
                <h3 className="text-lg font-bold text-primary border-b border-border-dark pb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">folder</span>
                  {category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredPages.filter(p => p.category === category).map(page => (
                    <button
                      key={page.name}
                      onClick={() => {
                        page.onClick();
                        onClose();
                      }}
                      className="flex items-center justify-between p-4 rounded-xl bg-surface-dark border border-border-dark hover:border-primary/50 hover:bg-border-dark transition-all text-left group"
                    >
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white">{page.name}</span>
                      <span className="material-symbols-outlined text-slate-500 group-hover:text-primary text-[18px]">arrow_forward</span>
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
