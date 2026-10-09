import React from 'react';
import { 
  Brain, 
  MessageSquareCode, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Binary, 
  Workflow, 
  FileText,
  MapPin,
  Lightbulb
} from 'lucide-react';
import { RESEARCH_PRESENTATION } from '../data/portfolioData';

export const NlpAiSection: React.FC = () => {
  return (
    <section id="ai-nlp" className="py-24 relative overflow-hidden dark:bg-slate-950/90 bg-slate-50/70 border-t dark:border-slate-800/60 border-slate-200">
      
      {/* Background Violet/Cyan Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-violet-600/10 via-indigo-600/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold dark:bg-violet-500/10 bg-violet-100 dark:text-violet-400 text-violet-800 border dark:border-violet-500/20 border-violet-300 mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>Research &amp; Specialized Interest</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight">
            Natural Language Processing &amp; <span className="gradient-text">AI Exploration</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg dark:text-slate-300 text-slate-600 leading-relaxed">
            Exploring conversational architectures, language tokenization, and intelligent workflow automation grounded in academic research and project internships.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Research Presentation Showcase */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl dark:bg-slate-900/80 bg-white border dark:border-slate-800 border-slate-200/90 backdrop-blur-md shadow-xl dark:shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-700 dark:text-violet-300 border border-violet-500/30 font-mono">
                  Academic Paper Presentation
                </span>
                <span className="text-xs font-mono dark:text-cyan-400 text-cyan-700 flex items-center gap-1 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  Nagercoil, Tamil Nadu
                </span>
              </div>

              <h3 className="text-2xl font-bold dark:text-white text-slate-900 tracking-tight mb-2">
                "{RESEARCH_PRESENTATION.title}"
              </h3>
              
              <div className="text-xs sm:text-sm dark:text-cyan-300 text-cyan-700 font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-500" />
                <span>Presented at {RESEARCH_PRESENTATION.venue}</span>
              </div>

              <p className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed mb-6 dark:bg-slate-950/60 bg-slate-50 p-5 rounded-2xl border dark:border-slate-800/80 border-slate-200">
                {RESEARCH_PRESENTATION.abstract}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider dark:text-slate-400 text-slate-500 mb-3 flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5 text-violet-500" />
                  <span>Key Discussion &amp; Architectural Focus Areas:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {RESEARCH_PRESENTATION.keyTopics.map((topic, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 p-2.5 rounded-xl dark:bg-slate-950/50 bg-slate-50 border dark:border-slate-800/60 border-slate-200 text-xs dark:text-slate-200 text-slate-800 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Practical Application & Perspective */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real-time Project Internship Connection */}
            <div className="p-6 rounded-2xl dark:bg-slate-900/60 bg-white border dark:border-slate-800 border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400">
                  <Binary className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold dark:text-white text-slate-900">Hands-on NLP Internship</h4>
                  <p className="text-xs dark:text-slate-400 text-slate-500">Mavepizon Technologies (Aug 2025)</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                Applied theoretical language processing models to real data streams, handling tokenization, dataset normalization, and semantic query classification for enterprise systems.
              </p>
            </div>

            {/* Honest Perspective Note */}
            <div className="p-6 rounded-2xl dark:bg-gradient-to-br dark:from-indigo-950/30 dark:to-slate-900 bg-white border dark:border-indigo-900/40 border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-violet-500/15 text-violet-600 dark:text-violet-400">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold dark:text-white text-slate-900">Pragmatic Developer View</h4>
                  <p className="text-xs dark:text-slate-400 text-slate-500">Software Engineering + Intelligent APIs</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                Rather than treating AI as a buzzword, my primary interest lies in leveraging modern NLP algorithms and vision models (like my deep learning paddy leaf diagnostic project) into clean, dependable web software architectures that users can trust.
              </p>
            </div>

            {/* Quick Skills in AI/NLP */}
            <div className="p-5 rounded-2xl dark:bg-slate-900/60 bg-white border dark:border-slate-800 border-slate-200 flex flex-wrap gap-2 text-xs shadow-sm">
              <span className="px-2.5 py-1 rounded-lg dark:bg-slate-950 bg-slate-100 dark:text-slate-300 text-slate-800 border dark:border-slate-800 border-slate-200 font-mono">Text Preprocessing</span>
              <span className="px-2.5 py-1 rounded-lg dark:bg-slate-950 bg-slate-100 dark:text-slate-300 text-slate-800 border dark:border-slate-800 border-slate-200 font-mono">Tokenization</span>
              <span className="px-2.5 py-1 rounded-lg dark:bg-slate-950 bg-slate-100 dark:text-slate-300 text-slate-800 border dark:border-slate-800 border-slate-200 font-mono">Intent Classification</span>
              <span className="px-2.5 py-1 rounded-lg dark:bg-slate-950 bg-slate-100 dark:text-slate-300 text-slate-800 border dark:border-slate-800 border-slate-200 font-mono">CNN Computer Vision</span>
              <span className="px-2.5 py-1 rounded-lg dark:bg-slate-950 bg-slate-100 dark:text-slate-300 text-slate-800 border dark:border-slate-800 border-slate-200 font-mono">TensorFlow / Keras</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
