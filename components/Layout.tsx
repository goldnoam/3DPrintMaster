import React from 'react';
import { Tab } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab(Tab.HOME)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
            <h1 className="text-xl font-bold tracking-wider">3D Master</h1>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <button 
              onClick={() => setActiveTab(Tab.HOME)}
              className={`hover:text-blue-200 transition ${activeTab === Tab.HOME ? 'font-bold underline underline-offset-4' : ''}`}
            >
              ראשי
            </button>
            <button 
              onClick={() => setActiveTab(Tab.LEARN)}
              className={`hover:text-blue-200 transition ${activeTab === Tab.LEARN ? 'font-bold underline underline-offset-4' : ''}`}
            >
              קורס
            </button>
            <button 
              onClick={() => setActiveTab(Tab.PROJECTS)}
              className={`hover:text-blue-200 transition ${activeTab === Tab.PROJECTS ? 'font-bold underline underline-offset-4' : ''}`}
            >
              פרויקטים
            </button>
            <button 
              onClick={() => setActiveTab(Tab.TUTOR)}
              className={`hover:text-blue-200 transition ${activeTab === Tab.TUTOR ? 'font-bold underline underline-offset-4' : ''}`}
            >
              מומחה AI
            </button>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
             {/* Simple logic for mobile nav would go here, using bottom bar instead for simplicity in this demo */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6 pb-24 md:pb-6">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 flex justify-around py-3 pb-safe">
         <button onClick={() => setActiveTab(Tab.HOME)} className={`flex flex-col items-center ${activeTab === Tab.HOME ? 'text-blue-600' : 'text-gray-500'}`}>
           <span className="text-xs mt-1">ראשי</span>
         </button>
         <button onClick={() => setActiveTab(Tab.LEARN)} className={`flex flex-col items-center ${activeTab === Tab.LEARN ? 'text-blue-600' : 'text-gray-500'}`}>
           <span className="text-xs mt-1">למידה</span>
         </button>
         <button onClick={() => setActiveTab(Tab.TUTOR)} className={`flex flex-col items-center ${activeTab === Tab.TUTOR ? 'text-blue-600' : 'text-gray-500'}`}>
           <span className="text-xs mt-1 font-bold">שאל מומחה</span>
         </button>
      </div>
    </div>
  );
};