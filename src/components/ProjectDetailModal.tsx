import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Server, AlertCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ProjectItem } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl dark:bg-slate-900 bg-white border dark:border-slate-700/80 border-slate-300 rounded-3xl shadow-2xl z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="p-6 border-b dark:border-slate-800 border-slate-200 flex items-start justify-between dark:bg-slate-950/40 bg-slate-50">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/25">
                {project.category}
              </span>
              {project.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-500/25">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl dark:bg-slate-800 bg-slate-100 dark:text-slate-400 text-slate-600 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 dark:text-slate-300 text-slate-700 text-sm leading-relaxed">
          
          {/* Role Pill */}
          <div className="p-3.5 rounded-xl dark:bg-slate-950/60 bg-slate-50 border dark:border-slate-800 border-slate-200 flex items-center gap-2 text-xs">
            <span className="font-bold dark:text-white text-slate-900">My Role:</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{project.myRole}</span>
          </div>

          {/* Problem Statement */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-rose-600 dark:text-rose-300 font-mono flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              <span>Problem Statement</span>
            </h4>
            <p className="p-4 rounded-xl dark:bg-rose-950/15 bg-rose-50 border dark:border-rose-900/30 border-rose-200 dark:text-rose-100/90 text-rose-900 text-xs sm:text-sm">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-300 font-mono flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Engineered Solution</span>
            </h4>
            <p className="p-4 rounded-xl dark:bg-emerald-950/15 bg-emerald-50 border dark:border-emerald-900/30 border-emerald-200 dark:text-emerald-100/90 text-emerald-900 text-xs sm:text-sm">
              {project.solution}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-300 font-mono flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>Key Technical Highlights</span>
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {project.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 p-3 rounded-lg dark:bg-slate-950/50 bg-slate-50 border dark:border-slate-800/80 border-slate-200 text-xs dark:text-slate-200 text-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-violet-600 dark:text-violet-300 font-mono flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              <span>Technologies &amp; Architecture</span>
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg dark:bg-slate-950 bg-slate-100 dark:text-slate-200 text-slate-800 border dark:border-slate-800 border-slate-200 text-xs font-mono font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t dark:border-slate-800 border-slate-200 dark:bg-slate-950/60 bg-slate-50 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white text-xs font-semibold transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl dark:bg-slate-800 bg-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 dark:text-slate-200 text-slate-800 text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
