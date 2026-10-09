import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  Cpu, 
  Sparkles, 
  Check, 
  Layers,
  Search
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = ['All', 'Programming Languages', 'Frontend Development', 'Backend Development', 'Databases & ORM', 'Developer Tools & DevOps', 'Specialized Domains'];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-violet-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-rose-400" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeCategory !== 'All' && cat.category !== activeCategory) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const hasSkill = cat.skills.some(s => s.name.toLowerCase().includes(q) || (s.tag && s.tag.toLowerCase().includes(q)));
      const hasCatName = cat.category.toLowerCase().includes(q);
      return hasSkill || hasCatName;
    }
    return true;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden dark:bg-slate-900/40 bg-slate-50/50 border-t dark:border-slate-800/60 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold dark:bg-cyan-500/10 bg-cyan-100 dark:text-cyan-400 text-cyan-800 border dark:border-cyan-500/20 border-cyan-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg dark:text-slate-300 text-slate-600 leading-relaxed">
            Technologies and frameworks grounded in real application development, verified coursework, and academic research.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 w-full md:w-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeCategory === tab
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md shadow-violet-600/20'
                    : 'dark:bg-slate-900/80 bg-white dark:text-slate-300 text-slate-700 hover:text-black dark:hover:text-white dark:hover:bg-slate-800 hover:bg-slate-100 border dark:border-slate-800 border-slate-300 shadow-sm'
                }`}
              >
                {tab === 'All' ? 'All Skills' : tab.replace(' Development', '').replace(' Tools & DevOps', '')}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 dark:text-slate-400 text-slate-500" />
            <input
              type="text"
              placeholder="Search skill (e.g. Bun, React, PHP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg dark:bg-slate-900/90 bg-white border dark:border-slate-800 border-slate-300 dark:text-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl dark:bg-slate-950/70 bg-white border dark:border-slate-800/90 border-slate-200/90 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between shadow-md dark:shadow-xl"
            >
              <div>
                {/* Card Title */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl dark:bg-slate-900 bg-slate-100 border dark:border-slate-800 border-slate-200 group-hover:border-cyan-500/40 transition-colors">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold dark:text-white text-slate-900 tracking-tight">
                        {cat.category}
                      </h3>
                      <span className="text-[11px] dark:text-slate-400 text-slate-500 font-mono">
                        {cat.skills.length} core competencies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl dark:bg-slate-900/90 bg-slate-50 border dark:border-slate-800/80 border-slate-200 hover:border-cyan-400 dark:text-slate-200 text-slate-800 text-xs transition-colors group/item"
                    >
                      <span className="font-medium">{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md dark:bg-slate-800 bg-slate-200 dark:text-cyan-300 text-cyan-800 font-mono border dark:border-slate-700/60 border-slate-300">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Badge footer */}
              <div className="mt-6 pt-4 border-t dark:border-slate-900 border-slate-100 flex items-center justify-between text-[11px] dark:text-slate-400 text-slate-500 font-mono">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <Check className="w-3 h-3" />
                  <span>Resume Verified</span>
                </span>
                <span className="dark:text-slate-400 text-slate-500">Production &amp; Academic</span>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary Banner */}
        <div className="mt-12 p-6 rounded-2xl dark:bg-gradient-to-r dark:from-violet-950/30 dark:via-slate-900/60 dark:to-cyan-950/30 bg-gradient-to-r from-violet-100/60 via-white to-cyan-100/60 border dark:border-slate-800 border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 text-sm dark:text-slate-300 text-slate-700 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold dark:text-white text-slate-900">Full-Stack Versatility &amp; Clean Architecture</div>
              <div className="text-xs dark:text-slate-400 text-slate-600">
                Experienced in building scalable microservices with Bun/Elysia &amp; PHP, type-safe database schemas with Drizzle ORM, and responsive user interfaces in React.
              </div>
            </div>
          </div>
          <a
            href="#projects"
            className="px-4 py-2 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-700 border-slate-300 hover:border-cyan-400 dark:text-slate-200 text-slate-800 dark:hover:text-white hover:text-cyan-600 text-xs font-semibold whitespace-nowrap transition-all shadow-sm"
          >
            See in Action &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
