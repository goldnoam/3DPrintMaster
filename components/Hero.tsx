import React from 'react';

interface HeroProps {
  onNavigateToLearn: () => void;
  onNavigateToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToLearn, onNavigateToProjects }) => {
  return (
    <div className="text-center py-12 md:py-20 space-y-8 animate-fade-in">
      <div className="inline-block p-4 rounded-full bg-blue-50 mb-4 animate-bounce-slow">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
        להפוך רעיונות <br/>
        <span className="text-blue-600">למציאות</span>
      </h1>
      
      <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
        המדריך המלא ללימוד הדפסת תלת מימד בעברית. 
        מחומרי הגלם ועד המוצר המוגמר, כולל עזרה חכמה מבוססת AI.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <button 
          onClick={onNavigateToLearn}
          className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
          מסלול למידה ורקע
        </button>
        <button 
          onClick={onNavigateToProjects}
          className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          פרויקטים מעשיים
        </button>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20 text-right">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
          </div>
          <h3 className="text-lg font-bold mb-2">קורס מובנה</h3>
          <p className="text-slate-500 text-sm">תוכן מסודר מהבסיס עד למתקדם, כולל הסברים על חומרה ותוכנה.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          </div>
          <h3 className="text-lg font-bold mb-2">רעיונות לפרויקטים</h3>
          <p className="text-slate-500 text-sm">מאגר רעיונות לפרויקטים שימושיים לבית ולתחביב עם קישורים.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          </div>
          <h3 className="text-lg font-bold mb-2">AI Tutor</h3>
          <p className="text-slate-500 text-sm">נתקלתם בבעיה? המדפסת מזייפת? הצ'אט החכם שלנו כאן לעזור 24/7.</p>
        </div>
      </div>
    </div>
  );
};