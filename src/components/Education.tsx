import React from 'react';
import { 
  GraduationCap, 
  Trophy, 
  Award, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Medal,
  BookOpen,
  Star
} from 'lucide-react';
import { EDUCATION, ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden dark:bg-slate-900/40 bg-slate-50/70 border-t dark:border-slate-800/60 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold dark:bg-violet-500/10 bg-violet-100 dark:text-violet-400 text-violet-800 border dark:border-violet-500/20 border-violet-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Excellence &amp; Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight">
            Education &amp; <span className="gradient-text">Achievements</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg dark:text-slate-300 text-slate-600 leading-relaxed">
            Consistently leading through high academic discipline, university rankings, and national athletic accomplishments.
          </p>
        </div>

        {/* Education Degree Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="p-8 rounded-3xl dark:bg-slate-950/80 bg-white border dark:border-slate-800/90 border-slate-200/90 hover:border-cyan-500/50 backdrop-blur-md shadow-lg dark:shadow-xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-violet-600/10 via-cyan-500/5 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 rounded-2xl dark:bg-slate-900 bg-slate-100 border dark:border-slate-800 border-slate-200 text-cyan-600 dark:text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                {edu.badge && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-violet-600/20 to-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 font-mono shadow-sm">
                    ★ {edu.badge}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold dark:text-white text-slate-900 tracking-tight">
                {edu.degree}
              </h3>
              
              <div className="text-sm font-semibold dark:text-slate-300 text-slate-700 mt-1">
                {edu.institution}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs dark:text-slate-400 text-slate-500 mt-2 mb-6 font-medium">
                <div className="flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-1 font-mono dark:text-cyan-300 text-cyan-700 font-bold dark:bg-cyan-950/40 bg-cyan-100 px-2 py-0.5 rounded border dark:border-cyan-800/50 border-cyan-300">
                  CGPA: {edu.cgpa}
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t dark:border-slate-800/80 border-slate-200">
                {edu.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm dark:text-slate-300 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Verified Honors & Achievements Badges Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-amber-500" />
            <h3 className="text-xl font-bold dark:text-white text-slate-900 tracking-tight">Verified Honors &amp; Distinctions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl dark:bg-slate-950/70 bg-white border dark:border-slate-800/90 border-slate-200/90 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md dark:bg-slate-900 bg-amber-50 dark:text-amber-300 text-amber-800 border dark:border-slate-800 border-amber-200 font-bold">
                      {item.metric}
                    </span>
                    <span className="text-[11px] dark:text-slate-400 text-slate-500 font-mono">
                      {item.year}
                    </span>
                  </div>

                  <h4 className="text-base font-bold dark:text-white text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <div className="text-xs dark:text-slate-400 text-slate-500 mb-3 font-medium">
                    {item.organization}
                  </div>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t dark:border-slate-900 border-slate-100 flex items-center justify-between text-[11px] dark:text-slate-400 text-slate-500 font-mono">
                  <span>Category: {item.category}</span>
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Specialized Courses */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-cyan-500" />
            <h3 className="text-xl font-bold dark:text-white text-slate-900 tracking-tight">Certifications &amp; Technical Courses</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {CERTIFICATIONS.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="p-4 rounded-xl dark:bg-slate-950/60 bg-white border dark:border-slate-800/80 border-slate-200 text-center flex flex-col justify-between shadow-sm"
              >
                <div className="text-xs font-semibold dark:text-slate-200 text-slate-800 mb-2">
                  {cert.name}
                </div>
                <div className="text-[10px] dark:text-slate-400 text-slate-500 font-mono pt-2 border-t dark:border-slate-900 border-slate-100">
                  {cert.issuer} • {cert.year}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
