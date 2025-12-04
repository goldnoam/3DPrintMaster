import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { CourseView } from './components/CourseView';
import { ChatTutor } from './components/ChatTutor';
import { Tab } from './types';

// Enhanced Projects View with Filtering
const ProjectsView: React.FC<{ onNavigateToTutor: () => void }> = ({ onNavigateToTutor }) => {
    const [filter, setFilter] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<string>('default');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Simulate loading effect
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500); // 500ms fake loading time
        return () => clearTimeout(timer);
    }, [filter, searchQuery, sortOrder]);

    const categories = [
        { id: 'all', label: 'הכל' },
        { id: 'home', label: 'לבית' },
        { id: 'gadgets', label: 'גאדג\'טים' },
        { id: 'toys', label: 'צעצועים' },
        { id: 'educational', label: 'חינוך' },
        { id: 'parts', label: 'חלקים ותיקונים' },
        { id: 'art', label: 'אומנות ועיצוב' },
    ];

    const projects = [
        { 
            id: 1, 
            title: 'מעמד לטלפון', 
            category: 'home', 
            difficulty: 'קל',
            desc: 'מעמד יציב לטלפון שלא דורש תמיכות בהדפסה.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Phone+Stand',
            link: 'https://www.printables.com/search/models?q=simple%20phone%20stand'
        },
        { 
            id: 2, 
            title: 'תמנון גמיש', 
            category: 'toys', 
            difficulty: 'בינוני',
            desc: 'צעצוע מפרקי מודפס בחתיכה אחת (Print-in-Place).', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Flexible+Octopus',
            link: 'https://www.printables.com/search/models?q=cute%20mini%20octopus'
        },
        { 
            id: 3, 
            title: 'ידית למגירה', 
            category: 'parts', 
            difficulty: 'קל',
            desc: 'ידית חזקה ומעוצבת, מתאימה לברגים סטנדרטיים.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Drawer+Handle',
            link: 'https://www.printables.com/search/models?q=drawer%20handle'
        },
        { 
            id: 4, 
            title: 'אגרטל ספירלה', 
            category: 'art', 
            difficulty: 'קל',
            desc: 'עיצוב מרהיב המותאם להדפסה במצב Vase Mode.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Spiral+Vase',
            link: 'https://www.printables.com/search/models?q=spiral%20vase'
        },
        { 
            id: 5, 
            title: 'קליפסים לכבלים', 
            category: 'home', 
            difficulty: 'קל',
            desc: 'פתרון מעולה לארגון שולחן העבודה.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Cable+Clips',
            link: 'https://www.printables.com/search/models?q=cable%20organizer'
        },
        { 
            id: 6, 
            title: 'גלגל שיניים', 
            category: 'parts', 
            difficulty: 'קשה',
            desc: 'גלגל שיניים פרמטרי להחלפה במכשירים אלקטרוניים.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Gear',
            link: 'https://www.printables.com/search/models?q=parametric%20gear'
        },
        { 
            id: 7, 
            title: 'ליטופן תמונה', 
            category: 'art', 
            difficulty: 'בינוני',
            desc: 'תמונה שהופכת לגלויה רק כשמאירים עליה מאחור.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Lithophane',
            link: 'https://www.printables.com/search/models?q=lithophane'
        },
        { 
            id: 8, 
            title: 'משרוקית הישרדות', 
            category: 'toys', 
            difficulty: 'קל',
            desc: 'משרוקית חזקה במיוחד לטיולים.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Whistle',
            link: 'https://www.printables.com/search/models?q=emergency%20whistle'
        },
        { 
            id: 9, 
            title: 'סוחט משחת שיניים', 
            category: 'home', 
            difficulty: 'קל',
            desc: 'כלי שימושי לניצול כל טיפת משחת שיניים.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Toothpaste+Squeezer',
            link: 'https://www.printables.com/search/models?q=toothpaste%20squeezer'
        },
        { 
            id: 10, 
            title: 'מחזיק דפים לספר', 
            category: 'home', 
            difficulty: 'קל',
            desc: 'פטנט פשוט שמאפשר להחזיק ספר פתוח ביד אחת.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Book+Holder',
            link: 'https://www.printables.com/search/models?q=book%20page%20holder'
        },
        { 
            id: 11, 
            title: 'אסימון לעגלת קניות', 
            category: 'parts', 
            difficulty: 'קל',
            desc: 'מחזיק מפתחות עם אסימון שמתאים לעגלות סופר.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Cart+Token',
            link: 'https://www.printables.com/search/models?q=shopping%20cart%20token'
        },
        { 
            id: 12, 
            title: 'קוביית כיול', 
            category: 'parts', 
            difficulty: 'קל',
            desc: 'המודל הראשון שצריך להדפיס כדי לבדוק דיוק.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Calibration+Cube',
            link: 'https://www.printables.com/search/models?q=calibration%20cube'
        },
        { 
            id: 13, 
            title: 'מחזיק מפתחות מעוצב', 
            category: 'art', 
            difficulty: 'קל',
            desc: 'פרויקט פשוט ומהיר, ניתן להוסיף שם בסלייסר.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Keychain',
            link: 'https://www.printables.com/search/models?q=keychain'
        },
        { 
            id: 14, 
            title: 'תחתית לכוס (Coaster)', 
            category: 'home', 
            difficulty: 'קל',
            desc: 'מגן על השולחן, הזדמנות טובה ללמוד החלפת צבע.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Coaster',
            link: 'https://www.printables.com/search/models?q=coaster'
        },
        { 
            id: 15, 
            title: 'סימניה לספר', 
            category: 'home', 
            difficulty: 'קל',
            desc: 'הדפסה דקה ומהירה, מתנה מעולה לקוראים.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Bookmark',
            link: 'https://www.printables.com/search/models?q=bookmark'
        },
        { 
            id: 16, 
            title: 'קופסה למטבעות', 
            category: 'home', 
            difficulty: 'קל',
            desc: 'ארגונית קטנה למטבעות ברכב או בבית.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Coin+Holder',
            link: 'https://www.printables.com/search/models?q=coin%20holder'
        },
        { 
            id: 17, 
            title: 'עציץ גיאומטרי', 
            category: 'art', 
            difficulty: 'קל',
            desc: 'עציץ בעיצוב מודרני לצמחים קטנים (סוקולנטים).', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Geometric+Planter',
            link: 'https://www.printables.com/search/models?q=geometric%20planter'
        },
        { 
            id: 18, 
            title: 'ספינר חשבוני', 
            category: 'educational', 
            difficulty: 'קל',
            desc: 'כלי לימודי מהנה לתרגול פעולות חשבון בסיסיות.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Math+Spinner',
            link: 'https://www.printables.com/search/models?q=math%20spinner'
        },
        { 
            id: 19, 
            title: 'מעמד לאוזניות', 
            category: 'gadgets', 
            difficulty: 'בינוני',
            desc: 'מעמד שולחני להנחת אוזניות קשת.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Headphone+Stand',
            link: 'https://www.printables.com/search/models?q=headphone%20stand'
        },
        { 
            id: 20, 
            title: 'מודל DNA', 
            category: 'educational', 
            difficulty: 'בינוני',
            desc: 'מודל מדעי להרכבה הממחיש את מבנה ה-DNA.', 
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=DNA+Model',
            link: 'https://www.printables.com/search/models?q=dna%20model'
        },
        {
            id: 21,
            title: 'מעמד ללפטופ',
            category: 'gadgets',
            difficulty: 'קל',
            desc: 'זוג רגליות להגבהת המחשב הנייד לזרימת אוויר טובה יותר.',
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Laptop+Stand',
            link: 'https://www.printables.com/search/models?q=laptop%20stand%20simple'
        },
        {
            id: 22,
            title: 'ארגונית לשולחן',
            category: 'home',
            difficulty: 'קל',
            desc: 'קופסה מחולקת לעטים, עפרונות וציוד משרדי.',
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Desk+Organizer',
            link: 'https://www.printables.com/search/models?q=desk%20organizer'
        },
        {
            id: 23,
            title: 'מתלה לקיר (Wall Hook)',
            category: 'home',
            difficulty: 'קל',
            desc: 'וו תלייה חזק למגבות או מעילים, ניתן להדבקה.',
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Wall+Hook',
            link: 'https://www.printables.com/search/models?q=wall%20hook'
        },
        {
            id: 24,
            title: 'קופסה עם מכסה',
            category: 'home',
            difficulty: 'בינוני',
            desc: 'קופסה עם מכסה מוברג או נצמד, שימושי לאחסון.',
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Box+with+Lid',
            link: 'https://www.printables.com/search/models?q=box%20with%20lid'
        },
        {
            id: 25,
            title: 'מגן כבל (Cable Saver)',
            category: 'gadgets',
            difficulty: 'קל',
            desc: 'שומר על קצוות הכבלים של הטלפון משבירה.',
            img: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Cable+Protector',
            link: 'https://www.printables.com/search/models?q=cable%20saver'
        }
    ];

    const getDifficultyValue = (diff: string) => {
        switch(diff) {
            case 'קל': return 1;
            case 'בינוני': return 2;
            case 'קשה': return 3;
            default: return 0;
        }
    };

    const getDifficultyTooltip = (diff: string) => {
        switch(diff) {
            case 'קל': return 'מתאים למתחילים, לרוב ללא תמיכות, זמן הדפסה קצר.';
            case 'בינוני': return 'דורש דיוק וכיול טוב, עשוי לדרוש תמיכות או הגדרות מיוחדות.';
            case 'קשה': return 'גיאומטריה מורכבת, חומרים מיוחדים או מנגנונים עדינים.';
            default: return '';
        }
    };

    const handleShare = (project: any) => {
        if (navigator.share) {
            navigator.share({
                title: project.title,
                text: `בדוק את הפרויקט ${project.title} ב-3D Master!`,
                url: project.link,
            })
            .catch((error) => console.log('Error sharing', error));
        } else {
            navigator.clipboard.writeText(project.link);
            alert('הקישור הועתק ללוח!');
        }
    };

    let filteredProjects = projects.filter(p => {
        const matchesCategory = filter === 'all' || p.category === filter;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              p.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Sorting Logic
    filteredProjects = filteredProjects.sort((a, b) => {
        if (sortOrder === 'easy') {
            return getDifficultyValue(a.difficulty) - getDifficultyValue(b.difficulty);
        }
        if (sortOrder === 'hard') {
            return getDifficultyValue(b.difficulty) - getDifficultyValue(a.difficulty);
        }
        if (sortOrder === 'alpha') {
            return a.title.localeCompare(b.title, 'he');
        }
        return 0; // Default ID sort
    });

    const getDifficultyColor = (diff: string) => {
        switch(diff) {
            case 'קל': return 'bg-green-100 text-green-700';
            case 'בינוני': return 'bg-yellow-100 text-yellow-700';
            case 'קשה': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold text-slate-800">מאגר פרויקטים</h2>
                
                {/* Search Bar */}
                <div className="max-w-md mx-auto relative">
                    <input
                        type="text"
                        placeholder="חפש פרויקט (לדוגמה: מעמד, צעצוע...)"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 pr-12 pl-10 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all text-slate-800 placeholder-slate-400"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400 absolute top-3.5 right-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {searchQuery && (
                        <button 
                            onClick={() => setSearchQuery('')}
                            className="absolute top-3.5 left-4 text-slate-400 hover:text-slate-600 transition-colors"
                            aria-label="נקה חיפוש"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Filters and Sorting Container */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    filter === cat.id 
                                    ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-blue-300'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
                        <span className="text-sm text-slate-500 whitespace-nowrap">מיון לפי:</span>
                        <select 
                            value={sortOrder} 
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="bg-transparent text-sm font-bold text-slate-700 focus:outline-none cursor-pointer"
                        >
                            <option value="default">מומלץ</option>
                            <option value="easy">קל לקשה</option>
                            <option value="hard">קשה לקל</option>
                            <option value="alpha">א-ת (לפי שם)</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {isLoading ? (
                    // Skeleton Loader
                    Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-[340px] animate-pulse">
                            <div className="h-48 bg-slate-200"></div>
                            <div className="p-5 flex flex-col gap-3">
                                <div className="h-4 bg-slate-200 rounded w-1/4"></div>
                                <div className="h-6 bg-slate-200 rounded w-3/4"></div>
                                <div className="h-4 bg-slate-200 rounded w-full"></div>
                                <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                                <div className="h-10 bg-slate-200 rounded mt-auto"></div>
                            </div>
                        </div>
                    ))
                ) : (
                    filteredProjects.map((p) => (
                        <div key={p.id} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col relative hover:-translate-y-1">
                            <div className="relative h-48 overflow-hidden bg-slate-100">
                                 <img src={p.img} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                 
                                 {/* Share Button */}
                                 <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleShare(p);
                                    }}
                                    className="absolute top-2 left-2 bg-white/90 p-2 rounded-full shadow-md text-slate-600 hover:text-blue-600 transition-colors z-20 opacity-0 group-hover:opacity-100"
                                    title="שתף פרויקט"
                                 >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                 </button>

                                 <div className="absolute top-2 right-2 flex gap-2 z-10">
                                    <div className="group/tooltip relative">
                                        <span className={`cursor-help px-2 py-1 rounded-md text-xs font-bold shadow-sm ${getDifficultyColor(p.difficulty)}`}>
                                            {p.difficulty}
                                        </span>
                                        <div className="invisible group-hover/tooltip:visible opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 absolute right-0 top-full mt-2 w-48 bg-slate-800 text-white text-xs rounded p-2 shadow-lg z-20 pointer-events-none">
                                            {getDifficultyTooltip(p.difficulty)}
                                            {/* Little triangle arrow */}
                                            <div className="absolute -top-1 right-3 w-2 h-2 bg-slate-800 transform rotate-45"></div>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <div className="mb-2">
                                    <span className="text-xs text-slate-400 font-medium">{categories.find(c => c.id === p.category)?.label}</span>
                                    <h3 className="font-bold text-lg text-slate-800">{p.title}</h3>
                                </div>
                                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-grow">{p.desc}</p>
                                <a 
                                    href={p.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-full py-2 px-4 bg-slate-50 text-blue-600 text-sm font-bold rounded-lg border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors text-center block"
                                >
                                    הורד קובץ להדפסה
                                </a>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {!isLoading && filteredProjects.length === 0 && (
                <div className="text-center py-16 bg-white rounded-xl border border-dashed border-slate-300">
                    <p className="text-slate-500 text-lg">לא נמצאו פרויקטים התואמים את החיפוש.</p>
                </div>
            )}

            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl p-8 text-center mt-12 text-white shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-20 transform -skew-y-12 scale-150"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3">לא מצאת את מה שחיפשת?</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        העוזר האישי החכם שלנו יכול לייצר עבורך רעיונות מותאמים אישית לפרויקטים, כולל הוראות הדפסה מדויקות, על בסיס התחביבים שלך.
                    </p>
                    <button 
                        onClick={onNavigateToTutor}
                        className="bg-white text-blue-700 px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-50 transition-colors"
                    >
                        בקש רעיון מה-AI &larr;
                    </button>
                </div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.HOME:
        return (
            <Hero 
                onNavigateToLearn={() => setActiveTab(Tab.LEARN)} 
                onNavigateToProjects={() => setActiveTab(Tab.PROJECTS)} 
            />
        );
      case Tab.LEARN:
        return <CourseView />;
      case Tab.PROJECTS:
        return <ProjectsView onNavigateToTutor={() => setActiveTab(Tab.TUTOR)} />;
      case Tab.TUTOR:
        return (
            <div className="max-w-3xl mx-auto">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">העוזר האישי שלך</h2>
                    <p className="text-slate-500 text-lg">נתקעת עם הדפסה? צריך המלצה? אני כאן לעזור.</p>
                </div>
                <ChatTutor />
            </div>
        );
      default:
        return (
            <Hero 
                onNavigateToLearn={() => setActiveTab(Tab.LEARN)} 
                onNavigateToProjects={() => setActiveTab(Tab.PROJECTS)} 
            />
        );
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;