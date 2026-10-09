import React from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Sparkles,
  Info
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl dark:bg-slate-900 bg-white border dark:border-slate-700/80 border-slate-300 rounded-3xl shadow-2xl z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b dark:border-slate-800 border-slate-200 flex items-center justify-between dark:bg-slate-950/60 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-violet-600/15 text-violet-600 dark:text-violet-400 border border-violet-500/30">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold dark:text-white text-slate-900 tracking-tight flex items-center gap-2">
                <span>Resume Preview &amp; Download</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-mono font-semibold">
                  Verified PDF
                </span>
              </h3>
              <p className="text-xs dark:text-slate-400 text-slate-600">
                {PERSONAL_INFO.name} • {PERSONAL_INFO.title} • {PERSONAL_INFO.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Download Link */}
            <a
              href={PERSONAL_INFO.resumePath}
              download={PERSONAL_INFO.resumeFilename}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-md transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            {/* Open in New Window */}
            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl dark:bg-slate-800 bg-slate-100 dark:text-slate-300 text-slate-700 hover:text-black dark:hover:text-white transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl dark:bg-slate-800 bg-slate-100 dark:text-slate-400 text-slate-600 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 dark:text-slate-300 text-slate-700 text-sm">
          
          {/* Quick Notice Banner */}
          <div className="p-4 rounded-2xl dark:bg-cyan-950/30 bg-cyan-50 border dark:border-cyan-800/40 border-cyan-200 flex items-start gap-3 text-xs dark:text-cyan-200 text-cyan-800">
            <Info className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
            <div>
              <strong>Verified PDF Asset:</strong> Download the official resume (<code className="font-mono bg-cyan-100 dark:bg-cyan-950 px-1 py-0.5 rounded">/Manojini_S_Resume.pdf</code>) or explore the structured summary below.
            </div>
          </div>

          {/* Clean Resume Document Preview */}
          <div className="p-6 sm:p-8 rounded-2xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-200 space-y-6 shadow-inner font-sans">
            
            {/* Resume Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-6 border-b dark:border-slate-800 border-slate-200">
              <div className="w-20 h-20 rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-violet-600 to-cyan-400 shadow-md shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden dark:bg-slate-900 bg-slate-100 flex items-center justify-center">
                  <img
                    src={PERSONAL_INFO.photoUrl}
                    alt="Manojini S"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="text-center sm:text-left flex-1">
                <h2 className="text-2xl font-extrabold dark:text-white text-slate-900 tracking-wide">
                  MANOJINI S
                </h2>
                <div className="text-xs dark:text-slate-400 text-slate-600 font-mono mt-1 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <span>{PERSONAL_INFO.email}</span>
                  <span>•</span>
                  <span>{PERSONAL_INFO.phone}</span>
                  <span>•</span>
                  <span>{PERSONAL_INFO.location}</span>
                  <span>•</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold">github.com/Manojinis</span>
                </div>
                <p className="mt-2.5 text-xs dark:text-slate-300 text-slate-700 leading-relaxed">
                  MCA student and software developer with hands-on experience contributing to real-time healthcare applications, API-driven architectures, and database integrations. Proven track record leading Doctor Healix deployments with 500+ installations. Academic Topper with 9.66 MCA CGPA and 10th University Rank in B.Sc. CS.
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-mono mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Professional Experience</span>
              </h3>
              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="text-xs space-y-1">
                    <div className="flex flex-wrap justify-between items-baseline">
                      <span className="font-bold dark:text-white text-slate-900 text-sm">{exp.role}</span>
                      <span className="dark:text-slate-400 text-slate-500 font-mono text-[11px] font-semibold">{exp.period}</span>
                    </div>
                    <div className="dark:text-slate-400 text-slate-600 italic">
                      {exp.company} — {exp.location}
                    </div>
                    <ul className="list-disc list-inside space-y-1 dark:text-slate-300 text-slate-700 pt-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="leading-relaxed">{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="pt-4 border-t dark:border-slate-800 border-slate-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-mono mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education &amp; Qualifications</span>
              </h3>
              <div className="space-y-3">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="text-xs flex flex-wrap justify-between items-start">
                    <div>
                      <div className="font-bold dark:text-white text-slate-900">{edu.degree}</div>
                      <div className="dark:text-slate-400 text-slate-600">{edu.institution}</div>
                    </div>
                    <div className="text-right font-mono">
                      <div className="dark:text-cyan-300 text-cyan-700 font-bold">CGPA: {edu.cgpa}</div>
                      <div className="dark:text-slate-400 text-slate-500 text-[11px]">{edu.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Honors */}
            <div className="pt-4 border-t dark:border-slate-800 border-slate-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-300 font-mono mb-2 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Selected Achievements</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs dark:text-slate-300 text-slate-700">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span>Academic Topper — MCA (9.66 CGPA)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span>10th University Rank in B.Sc. Computer Science (9.04 CGPA)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span>Represented India as National-Level Kabaddi Athlete (2023)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span>Research Paper: "Artificial Intelligence and Chatbots"</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 sm:p-6 border-t dark:border-slate-800 border-slate-200 dark:bg-slate-950/60 bg-slate-50 flex items-center justify-between">
          <span className="text-xs dark:text-slate-400 text-slate-600 font-mono">
            Filename: {PERSONAL_INFO.resumeFilename}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl dark:bg-slate-800 bg-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 dark:text-slate-300 text-slate-800 text-xs font-semibold transition-colors"
            >
              Close
            </button>
            <a
              href={PERSONAL_INFO.resumePath}
              download={PERSONAL_INFO.resumeFilename}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-md transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
