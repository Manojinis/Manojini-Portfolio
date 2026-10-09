import React from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Cpu, 
  Layers, 
  Terminal, 
  Radio, 
  GitBranch, 
  Sparkles 
} from 'lucide-react';

export const TechTicker: React.FC = () => {
  const techItems = [
    { name: 'TypeScript', category: 'Language', color: 'text-blue-500' },
    { name: 'React', category: 'Frontend', color: 'text-cyan-500' },
    { name: 'Bun Runtime', category: 'Backend', color: 'text-amber-500' },
    { name: 'Elysia.js', category: 'API Framework', color: 'text-purple-500' },
    { name: 'PHP & Laravel', category: 'Backend', color: 'text-indigo-500' },
    { name: 'PostgreSQL', category: 'Database', color: 'text-sky-500' },
    { name: 'Drizzle ORM', category: 'Type-Safe DB', color: 'text-emerald-500' },
    { name: 'GraphQL & Apollo', category: 'API Protocol', color: 'text-pink-500' },
    { name: 'Python & NLP', category: 'AI & Data', color: 'text-yellow-500' },
    { name: 'Deep Learning (CNN)', category: 'Vision', color: 'text-rose-500' },
    { name: 'MongoDB', category: 'NoSQL', color: 'text-emerald-400' },
    { name: 'Git & GitHub', category: 'Workflow', color: 'text-orange-500' },
    { name: 'RFID & IoT Hardware', category: 'Embedded', color: 'text-teal-500' }
  ];

  // Duplicate for continuous seamless marquee loop
  const duplicatedItems = [...techItems, ...techItems];

  return (
    <div className="py-6 border-y dark:border-slate-800/80 border-slate-200/80 dark:bg-slate-950/80 bg-white/80 backdrop-blur-md overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r dark:from-slate-950 from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l dark:from-slate-950 from-white to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee">
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-6 py-2 mx-2 rounded-2xl dark:bg-slate-900/90 bg-slate-100/90 border dark:border-slate-800 border-slate-300 shadow-sm shrink-0 hover:scale-105 transition-transform"
          >
            <span className={`w-2 h-2 rounded-full ${item.color.replace('text-', 'bg-')}`} />
            <span className="text-xs sm:text-sm font-bold dark:text-slate-100 text-slate-800">
              {item.name}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full dark:bg-slate-800 bg-slate-200 dark:text-slate-400 text-slate-600">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
