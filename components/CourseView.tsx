import React, { useState } from 'react';
import { MODULES } from '../data/courseContent';

export const CourseView: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const toggleModule = (id: string) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">מסלול הלימוד</h2>
        <p className="text-slate-600">צעד אחר צעד, מאפס למדפיס מומחה</p>
      </div>

      {MODULES.map((module) => (
        <div key={module.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md">
          <button 
            onClick={() => toggleModule(module.id)}
            className="w-full flex items-center justify-between p-6 text-right focus:outline-none bg-slate-50 hover:bg-white transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                {module.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">{module.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{module.description}</p>
              </div>
            </div>
            <div className={`transform transition-transform duration-300 ${expandedModule === module.id ? 'rotate-180' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {expandedModule === module.id && (
            <div className="border-t border-slate-100 bg-white">
              {module.lessons.map((lesson, idx) => (
                <div key={lesson.id} className={`p-6 ${idx !== 0 ? 'border-t border-slate-50' : ''}`}>
                  <h4 className="text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                    <span className="text-sm bg-blue-50 px-2 py-0.5 rounded-full text-blue-600">שיעור {idx + 1}</span>
                    {lesson.title}
                  </h4>
                  <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-line">
                    {lesson.content}
                  </div>
                  {lesson.imageUrl && (
                    <div className="mt-4 rounded-lg overflow-hidden shadow-sm">
                      <img src={lesson.imageUrl} alt={lesson.title} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  {lesson.tags && (
                    <div className="flex gap-2 mt-4">
                      {lesson.tags.map(tag => (
                        <span key={tag} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">#{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};