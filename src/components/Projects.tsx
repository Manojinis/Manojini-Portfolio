import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  ChevronRight, 
  Cpu, 
  Server, 
  Activity, 
  ShieldCheck, 
  Radio, 
  CloudRain, 
  Leaf, 
  BrainCircuit,
  Eye
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Full-Stack', 'AI & ML', 'Academic / IoT'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === 'All') return true;
    return proj.category === selectedCategory;
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'doctor-healix':
        return <Activity className="w-6 h-6 text-emerald-400" />;
      case 'smart-attendance-rfid':
        return <Radio className="w-6 h-6 text-cyan-400" />;
      case 'plant-disease-detection':
        return <Leaf className="w-6 h-6 text-lime-400" />;
      case 'rain-clothes-collector':
        return <CloudRain className="w-6 h-6 text-blue-400" />;
      case 'realtime-nlp-engine':
        return <BrainCircuit className="w-6 h-6 text-violet-400" />;
      default:
        return <Cpu className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getHeaderGradient = (id: string) => {
    switch (id) {
      case 'doctor-healix':
        return 'dark:from-emerald-950/70 dark:via-slate-900/90 dark:to-cyan-950/50 from-emerald-50 via-teal-50/60 to-cyan-50/70';
      case 'smart-attendance-rfid':
        return 'dark:from-cyan-950/70 dark:via-slate-900/90 dark:to-indigo-950/50 from-cyan-50 via-sky-50/60 to-indigo-50/70';
      case 'plant-disease-detection':
        return 'dark:from-lime-950/70 dark:via-slate-900/90 dark:to-emerald-950/50 from-lime-50 via-emerald-50/60 to-green-50/70';
      case 'rain-clothes-collector':
        return 'dark:from-blue-950/70 dark:via-slate-900/90 dark:to-slate-900 from-blue-50 via-sky-50/60 to-slate-100';
      case 'realtime-nlp-engine':
        return 'dark:from-violet-950/70 dark:via-slate-900/90 dark:to-purple-950/50 from-violet-50 via-purple-50/60 to-indigo-50/70';
      default:
        return 'dark:from-slate-900 dark:to-slate-950 from-slate-50 to-slate-100';
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden dark:bg-slate-950 bg-slate-100/60 border-t dark:border-slate-800/60 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold dark:bg-cyan-500/10 bg-cyan-100 dark:text-cyan-400 text-cyan-800 border dark:border-cyan-500/20 border-cyan-300 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight">
            Engineering <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg dark:text-slate-300 text-slate-600 leading-relaxed">
            Real-world enterprise solutions, hardware-interfacing IoT systems, and deep learning implementations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md shadow-violet-600/30'
                  : 'dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-300 dark:text-slate-400 text-slate-700 hover:text-black dark:hover:text-white dark:hover:bg-slate-800 hover:bg-slate-100 shadow-sm'
              }`}
            >
              {cat === 'All' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl dark:bg-slate-900/80 bg-white border dark:border-slate-800 border-slate-200/90 hover:border-cyan-500/50 backdrop-blur-md flex flex-col justify-between overflow-hidden shadow-lg dark:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Card Banner / Visual Header */}
              <div className={`p-6 bg-gradient-to-br ${getHeaderGradient(project.id)} border-b dark:border-slate-800/80 border-slate-200 relative`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl dark:bg-slate-950/80 bg-white/90 border dark:border-slate-700/60 border-slate-200 shadow-sm">
                    {getProjectIcon(project.id)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {project.badge && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-700 dark:text-violet-300 border border-violet-500/30 font-mono">
                        {project.badge}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold dark:text-white text-slate-900 tracking-tight group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs dark:text-slate-300 text-slate-600 mt-1 line-clamp-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Problem & Solution Snippet */}
                  <div className="space-y-3 mb-5 text-xs dark:text-slate-300 text-slate-700 leading-relaxed">
                    <div>
                      <span className="font-bold dark:text-slate-200 text-slate-900">Problem: </span>
                      <span className="dark:text-slate-400 text-slate-600">{project.problem.slice(0, 115)}...</span>
                    </div>
                    <div>
                      <span className="font-bold dark:text-emerald-400 text-emerald-700">Solution: </span>
                      <span className="dark:text-slate-400 text-slate-600">{project.solution.slice(0, 120)}...</span>
                    </div>
                  </div>

                  {/* Key Features Bullet List */}
                  <div className="space-y-1.5 mb-5">
                    <div className="text-[11px] font-mono uppercase tracking-wider dark:text-slate-500 text-slate-500">
                      Key Highlights
                    </div>
                    {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs dark:text-slate-300 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2 py-0.5 rounded-md dark:bg-slate-950 bg-slate-100 dark:text-slate-300 text-slate-800 border dark:border-slate-800 border-slate-200 font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-md dark:bg-slate-950 bg-slate-100 dark:text-slate-400 text-slate-600 border dark:border-slate-800 border-slate-200 font-mono">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Controls */}
                <div className="mt-6 pt-4 border-t dark:border-slate-800/80 border-slate-200 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl dark:bg-slate-950 bg-slate-100 border dark:border-slate-800 border-slate-200 dark:text-slate-400 text-slate-700 hover:text-black dark:hover:text-white transition-colors"
                        aria-label={`GitHub repo for ${project.title}`}
                        title="View on GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Deep Dive */}
        <ProjectDetailModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};
