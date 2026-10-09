import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="dark:bg-slate-950 bg-slate-100 dark:border-t dark:border-slate-800/80 border-t border-slate-200 dark:text-slate-400 text-slate-600 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 dark:border-b dark:border-slate-900 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-blue-600 to-cyan-400 p-[2px] shadow-sm">
                <div className="w-full h-full dark:bg-slate-950 bg-white rounded-[10px] overflow-hidden flex items-center justify-center">
                  <img
                    src={PERSONAL_INFO.photoUrl}
                    alt="Manojini S"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <span className="font-bold text-lg dark:text-white text-slate-900 tracking-tight block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[11px] font-mono dark:text-cyan-400 text-cyan-600 block">
                  Full-Stack Developer
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 leading-relaxed max-w-sm">
              Full-Stack Developer passionate about architecting reliable web services, APIs, and exploring applied Natural Language Processing &amp; Artificial Intelligence.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-300 dark:text-slate-400 text-slate-600 hover:text-cyan-500 transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-300 dark:text-slate-400 text-slate-600 hover:text-cyan-500 transition-colors shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-300 dark:text-slate-400 text-slate-600 hover:text-cyan-500 transition-colors shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider dark:text-slate-200 text-slate-800 font-bold">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-cyan-500 transition-colors">About Background</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-500 transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-500 transition-colors">Work Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-500 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-500 transition-colors">Education &amp; Distinctions</a>
              </li>
              <li>
                <a href="#ai-nlp" className="hover:text-cyan-500 transition-colors">NLP &amp; AI Research</a>
              </li>
            </ul>
          </div>

          {/* Resources & Actions */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider dark:text-slate-200 text-slate-800 font-bold">
              Direct Actions
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={onOpenResume}
                className="w-full text-left px-3.5 py-2.5 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-300 hover:border-cyan-500 text-xs dark:text-slate-300 text-slate-800 transition-all flex items-center justify-between shadow-sm"
              >
                <span>Download Resume (PDF)</span>
                <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold">Verified</span>
              </button>

              <a
                href="#contact"
                className="w-full text-left px-3.5 py-2.5 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-300 hover:border-violet-500 text-xs dark:text-slate-300 text-slate-800 transition-all flex items-center justify-between shadow-sm"
              >
                <span>Initiate Recruiter Contact</span>
                <Sparkles className="w-3.5 h-3.5 text-violet-500" />
              </a>
            </div>

            <div className="pt-2 text-[11px] dark:text-slate-500 text-slate-500 font-mono">
              Kanniyakumari, Tamil Nadu, India • Open for Relocation / Remote
            </div>
          </div>

        </div>

        {/* Bottom Bar & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs dark:text-slate-400 text-slate-600">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript &amp; Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-300 dark:text-slate-400 text-slate-600 hover:text-black dark:hover:text-white transition-all shadow-sm"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-500" />
          </button>
        </div>

      </div>
    </footer>
  );
};
