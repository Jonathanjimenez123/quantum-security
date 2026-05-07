import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PageDirectory from './PageDirectory';

interface Page {
  name: string;
  category: string;
  onClick: () => void;
}

interface DirectoryPortalProps {
  pages: Page[];
}

export default function DirectoryPortal({ pages }: DirectoryPortalProps) {
  const [showDirectory, setShowDirectory] = useState(false);

  return createPortal(
    <>
      <PageDirectory isOpen={showDirectory} onClose={() => setShowDirectory(false)} pages={pages} />
      <button 
        onClick={() => setShowDirectory(true)} 
        className="fixed bottom-6 right-6 z-[9999] bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors flex items-center justify-center group"
      >
        <span className="material-symbols-outlined">explore</span>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap group-hover:ml-2 font-medium">
          Component Directory
        </span>
      </button>
    </>,
    document.body
  );
}
