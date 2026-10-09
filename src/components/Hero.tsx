import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  Database, 
  Cpu,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-violet-600/20 via-blue-500/15 to-cyan-400/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-slate-900/90 bg-white/95 border dark:border-slate-700/80 border-slate-300 shadow-sm mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold dark:text-slate-200 text-slate-800">
                Open to Full-Stack Developer &amp; Software Engineering Roles
              </span>
            </div>

            {/* Main Greeting and Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight dark:text-white text-slate-900 leading-tight sm:leading-none">
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>

            <div className="mt-3 text-2xl sm:text-3xl font-bold dark:text-slate-200 text-slate-800 flex items-center gap-2 flex-wrap">
              <span>Full-Stack Developer</span>
              <span className="text-slate-400 dark:text-slate-600 font-normal">|</span>
              <span className="dark:text-cyan-400 text-cyan-600 text-lg sm:text-xl font-mono font-medium">
                React • Bun/Elysia • PHP/Laravel
              </span>
            </div>

            {/* Concise Bio */}
            <p className="mt-5 text-base sm:text-lg dark:text-slate-300 text-slate-700 leading-relaxed max-w-2xl font-normal">
              I build practical, production-ready web applications, resilient backend architectures, and API-driven digital solutions. With proven experience engineering healthcare systems, managing relational &amp; NoSQL databases, and leading deployments with <strong className="dark:text-cyan-300 text-cyan-700 font-bold">500+ active installations</strong>, I bridge clean user experiences with dependable server logic.
            </p>

            <div className="mt-3 flex items-center gap-2 text-sm dark:text-slate-400 text-slate-600">
              <Sparkles className="w-4 h-4 text-violet-500 shrink-0" />
              <span>
                Actively exploring practical <strong className="dark:text-violet-300 text-violet-700 font-semibold">NLP &amp; AI workflows</strong>, supported by academic research on Conversational AI and real-time project internships.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-violet-600/30 hover:shadow-cyan-500/40 hover:opacity-95 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl dark:bg-slate-900/90 bg-white border dark:border-slate-700 border-slate-300 hover:border-cyan-500 dark:text-slate-200 text-slate-800 hover:text-cyan-600 dark:hover:text-white font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-500" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl dark:bg-slate-900/50 bg-slate-100 border dark:border-slate-800 border-slate-300 dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-black font-medium text-sm transition-all"
              >
                <span>Contact Me</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl dark:bg-slate-900/50 bg-slate-100 border dark:border-slate-800 border-slate-300 dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-black font-medium text-sm transition-all"
                aria-label="View Manojini's GitHub profile"
              >
                <GithubIcon className="w-4 h-4 dark:text-slate-300 text-slate-700" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Verified Social Links */}
            <div className="mt-8 flex items-center gap-4 dark:text-slate-400 text-slate-600 text-sm">
              <span className="font-mono text-xs uppercase tracking-wider dark:text-slate-500 text-slate-500">Connect:</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-300 dark:text-slate-300 text-slate-700 hover:text-cyan-500 transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-300 dark:text-slate-300 text-slate-700 hover:text-cyan-500 transition-colors shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-300 dark:text-slate-300 text-slate-700 hover:text-cyan-500 transition-colors shadow-sm"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <span className="text-xs dark:text-slate-500 text-slate-600 font-medium">
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Profile Card & Code Motif */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gradient Border */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-violet-500 via-blue-500/40 to-cyan-400 shadow-2xl shadow-violet-900/30">
                <div className="rounded-[22px] dark:bg-slate-950/90 bg-white/95 backdrop-blur-xl p-6 border dark:border-slate-800/80 border-slate-200 shadow-xl">
                  
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between pb-4 border-b dark:border-slate-800 border-slate-200 mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono dark:text-slate-400 text-slate-600">
                      <Terminal className="w-3.5 h-3.5 text-cyan-500" />
                      <span>developer.manojini.ts</span>
                    </div>
                    <span className="w-8" />
                  </div>

                  {/* Profile Image & Avatar Showcase */}
                  <div className="relative flex flex-col items-center text-center mb-6">
                    <div className="relative group">
                      <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[3px] shadow-xl shadow-violet-600/30 group-hover:shadow-cyan-400/40 transition-all duration-300">
                        <div className="w-full h-full rounded-full overflow-hidden dark:bg-slate-900 bg-slate-100 flex items-center justify-center relative">
                          <img
                            src={PERSONAL_INFO.photoUrl}
                            alt="Manojini S - Full-Stack Developer"
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>

                      {/* Small Active Badge */}
                      <div className="absolute bottom-0 right-1 dark:bg-slate-900 bg-white border dark:border-slate-700 border-slate-300 px-2.5 py-0.5 rounded-full flex items-center gap-1 text-[11px] text-emerald-500 font-semibold shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Ready to Build</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-xl font-bold dark:text-white text-slate-900 tracking-tight">Manojini S</h3>
                      <p className="text-xs dark:text-slate-400 text-slate-600 font-mono mt-0.5">MCA Graduate • Full-Stack Engineer</p>
                    </div>
                  </div>

                  {/* Code Snippet Box */}
                  <div className="bg-slate-950 rounded-xl p-4 font-mono text-xs text-slate-300 border border-slate-800 text-left space-y-1 shadow-inner">
                    <div className="text-slate-500">// Key Core Strengths</div>
                    <div>
                      <span className="text-purple-400">const</span> engineer = {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">languages:</span> <span className="text-emerald-300">['TypeScript', 'PHP', 'Python', 'Java']</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">runtimeStack:</span> <span className="text-emerald-300">['React', 'Bun/Elysia', 'Laravel']</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">databases:</span> <span className="text-emerald-300">['PostgreSQL', 'Drizzle ORM', 'MongoDB']</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">impact:</span> <span className="text-amber-300">'500+ Deployments (Doctor Healix)'</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">academics:</span> <span className="text-violet-300">'MCA Topper (9.66 CGPA)'</span>
                    </div>
                    <div>{'};'}</div>
                  </div>

                  {/* Highlights Bar */}
                  <div className="mt-4 pt-3 border-t dark:border-slate-800/80 border-slate-200 flex items-center justify-between text-xs dark:text-slate-400 text-slate-600">
                    <span className="flex items-center gap-1 dark:text-slate-300 text-slate-700 font-medium">
                      <GraduationCap className="w-3.5 h-3.5 text-cyan-500" />
                      RCET &amp; Anna Univ
                    </span>
                    <span className="flex items-center gap-1 text-amber-600 dark:text-amber-300 font-semibold">
                      ★ 10th Univ Rank
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono font-medium">
                      Ready to Deploy
                    </span>
                  </div>

                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -right-4 dark:bg-slate-900/90 bg-white/95 backdrop-blur-md border dark:border-slate-700/80 border-slate-200 rounded-xl p-2.5 shadow-xl flex items-center gap-2 text-xs font-semibold dark:text-slate-200 text-slate-800 animate-float hidden sm:flex">
                <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] dark:text-slate-400 text-slate-500">Frontend &amp; Backend</div>
                  <div className="text-xs dark:text-white text-slate-900">Full-Stack Flow</div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 dark:bg-slate-900/90 bg-white/95 backdrop-blur-md border dark:border-slate-700/80 border-slate-200 rounded-xl p-2.5 shadow-xl flex items-center gap-2 text-xs font-semibold dark:text-slate-200 text-slate-800 hidden sm:flex">
                <div className="p-1.5 rounded-lg bg-violet-500/20 text-violet-600 dark:text-violet-400">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] dark:text-slate-400 text-slate-500">Type-Safe DB</div>
                  <div className="text-xs dark:text-white text-slate-900">PostgreSQL &amp; Drizzle</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Verified Number Counters / Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div 
              key={i}
              className="p-5 rounded-2xl dark:bg-slate-900/60 bg-white/90 border dark:border-slate-800/80 border-slate-200/90 backdrop-blur-md hover:border-cyan-500/50 transition-all hover:-translate-y-1 group shadow-sm dark:shadow-none"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm dark:text-slate-400 text-slate-700 mt-1 font-semibold group-hover:text-cyan-600 dark:group-hover:text-slate-200 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
