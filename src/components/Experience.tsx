import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  Users,
  Layers,
  ChevronRight
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden dark:bg-slate-950/80 bg-slate-50/70 border-t dark:border-slate-800/60 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold dark:bg-violet-500/10 bg-violet-100 dark:text-violet-400 text-violet-800 border dark:border-violet-500/20 border-violet-300 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg dark:text-slate-300 text-slate-600 leading-relaxed">
            Real-world software engineering across production healthcare systems, language processing, and backend service integrations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Track Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-500 to-indigo-600 -translate-x-1/2 opacity-40" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Central Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center p-1 border-2 ${
                      exp.isCurrent 
                        ? 'dark:bg-slate-950 bg-white border-cyan-400 shadow-lg shadow-cyan-500/30 ring-4 ring-cyan-500/10'
                        : 'dark:bg-slate-950 bg-white border-violet-500 shadow-md'
                    }`}>
                      <div className={`w-2.5 h-2.5 rounded-full ${
                        exp.isCurrent ? 'bg-cyan-400 animate-ping' : 'bg-violet-400'
                      }`} />
                    </div>
                  </div>

                  {/* Spacer for Desktop Alternation */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Experience Card */}
                  <div className="pl-12 md:pl-0 md:w-1/2 w-full">
                    <div className={`p-6 sm:p-7 rounded-2xl dark:bg-slate-900/80 bg-white border dark:border-slate-800 border-slate-200/90 backdrop-blur-md hover:border-cyan-500/50 shadow-lg dark:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                      isEven ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-500/25">
                            {exp.type}
                          </span>
                          {exp.isCurrent && (
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Current Role
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-mono dark:text-cyan-300 text-cyan-700 font-semibold">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 tracking-tight">
                        {exp.role}
                      </h3>
                      
                      <div className="text-sm font-semibold dark:text-slate-300 text-slate-700 flex items-center gap-1.5 mt-1">
                        <span>{exp.company}</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs dark:text-slate-400 text-slate-500 mt-1 mb-4">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2.5 text-xs sm:text-sm dark:text-slate-300 text-slate-700 mb-5">
                        {exp.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies Pill Group */}
                      <div className="pt-4 border-t dark:border-slate-800/80 border-slate-200">
                        <div className="text-[11px] font-mono dark:text-slate-400 text-slate-500 mb-2">
                          Technologies Utilized:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech, tIdx) => (
                            <span 
                              key={tIdx}
                              className="text-[11px] px-2 py-0.5 rounded-md dark:bg-slate-950/80 bg-slate-100 dark:text-slate-300 text-slate-800 border dark:border-slate-800 border-slate-200 font-medium font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
