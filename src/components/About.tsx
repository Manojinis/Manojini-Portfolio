import React from 'react';
import { 
  CheckCircle2, 
  Terminal, 
  Sparkles, 
  GraduationCap, 
  Trophy, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Activity,
  HeartHandshake,
  MapPin,
  Award
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden dark:bg-slate-950/60 bg-slate-50/80 border-t dark:border-slate-800/60 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold dark:bg-violet-500/10 bg-violet-100 dark:text-violet-400 text-violet-800 border dark:border-violet-500/20 border-violet-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile &amp; Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight">
            About <span className="gradient-text">Manojini S</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg dark:text-slate-300 text-slate-600 leading-relaxed">
            Curious by nature, disciplined in execution. Here is a closer look at my engineering journey, problem-solving values, and background.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6 dark:text-slate-300 text-slate-700 leading-relaxed text-base">
            <div className="p-7 rounded-2xl dark:bg-slate-900/70 bg-white border dark:border-slate-800/80 border-slate-200/90 backdrop-blur-md shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
              
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-500" />
                <span>Full-Stack Development with a Practical Purpose</span>
              </h3>

              <p className="mb-4">
                I believe that software should be robust under the hood and straightforward for the person using it. During my work as a Software Developer and Team Lead on <strong>Doctor Healix</strong> at Edmond Remedies, I had the opportunity to build features spanning doctors' consultation dashboards, pharmacy inventories, lab testing systems, and billing workflows. Taking code from local tests to a live deployment used across <strong className="dark:text-cyan-300 text-cyan-700">500+ installations</strong> taught me the true value of careful database design, type safety, and methodical debugging.
              </p>

              <p className="mb-4">
                My everyday stack includes modern tools like <strong>TypeScript, React, Bun, Elysia, PHP, PostgreSQL, and Drizzle ORM</strong>. I enjoy untangling complex API logic and optimizing database operations just as much as polishing frontend components for intuitive usability.
              </p>

              <p>
                Beyond standard web development, I hold an active curiosity for <strong>Natural Language Processing (NLP)</strong> and applied machine learning. Whether exploring semantic tokenization during my internship at Mavepizon Technologies or presenting research on Conversational AI at Noorul Islam College, I focus on how emerging intelligence can be applied responsibly to solve everyday operational bottlenecks.
              </p>
            </div>

            {/* Core Values / Work Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl dark:bg-slate-900/50 bg-white border dark:border-slate-800 border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-violet-500/15 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold dark:text-white text-slate-900">Full-Stack Cohesion</h4>
                <p className="text-xs dark:text-slate-400 text-slate-600 mt-1">Understanding how database schemas directly influence frontend state.</p>
              </div>

              <div className="p-4 rounded-xl dark:bg-slate-900/50 bg-white border dark:border-slate-800 border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold dark:text-white text-slate-900">Resilient Quality</h4>
                <p className="text-xs dark:text-slate-400 text-slate-600 mt-1">Testing edge cases early, verifying data contracts, and clean error handling.</p>
              </div>

              <div className="p-4 rounded-xl dark:bg-slate-900/50 bg-white border dark:border-slate-800 border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold dark:text-white text-slate-900">Team Player</h4>
                <p className="text-xs dark:text-slate-400 text-slate-600 mt-1">Clear communication, humble listening, and steady sprint coordination.</p>
              </div>
            </div>

          </div>

          {/* Right Highlights: Photo Spotlight & Distinctive Credentials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Portrait Spotlight Card */}
            <div className="p-6 rounded-3xl dark:bg-slate-900/80 bg-white border dark:border-slate-800 border-slate-200/90 shadow-xl overflow-hidden relative group">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                
                {/* Photo frame */}
                <div className="w-28 h-28 rounded-full overflow-hidden p-[2.5px] bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 shadow-lg shrink-0 relative group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden dark:bg-slate-900 bg-slate-100 flex items-center justify-center">
                    <img
                      src={PERSONAL_INFO.photoUrl}
                      alt="Manojini S portrait"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
                    Full-Stack Engineer
                  </span>
                  <h4 className="text-lg font-bold dark:text-white text-slate-900">
                    Manojini S
                  </h4>
                  <p className="text-xs dark:text-slate-400 text-slate-600">
                    Kanniyakumari, Tamil Nadu, India
                  </p>
                  <p className="text-xs dark:text-slate-300 text-slate-700 italic pt-1">
                    "Consistent curiosity, athletic discipline, and dependable code."
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Rigor Card */}
            <div className="p-6 rounded-2xl dark:bg-gradient-to-br dark:from-slate-900 dark:to-indigo-950/40 bg-white border dark:border-slate-800 border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold dark:text-white text-slate-900">Academic Excellence</h4>
                  <p className="text-xs dark:text-slate-400 text-slate-500">Verified University Distinctions</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-start justify-between p-3 rounded-xl dark:bg-slate-950/60 bg-slate-50 border dark:border-slate-800/80 border-slate-200">
                  <div>
                    <div className="font-semibold dark:text-slate-200 text-slate-800">MCA Academic Topper</div>
                    <div className="text-xs dark:text-slate-400 text-slate-500">Rohini College of Engineering &amp; Technology</div>
                  </div>
                  <span className="font-mono dark:text-cyan-400 text-cyan-700 font-bold dark:bg-cyan-950/50 bg-cyan-100 px-2 py-0.5 rounded text-xs border dark:border-cyan-800/40 border-cyan-300">
                    9.66 CGPA
                  </span>
                </div>

                <div className="flex items-start justify-between p-3 rounded-xl dark:bg-slate-950/60 bg-slate-50 border dark:border-slate-800/80 border-slate-200">
                  <div>
                    <div className="font-semibold dark:text-slate-200 text-slate-800">10th University Rank in UG Major</div>
                    <div className="text-xs dark:text-slate-400 text-slate-500">B.Sc. Computer Science, Sav Sahaya Thai College</div>
                  </div>
                  <span className="font-mono dark:text-indigo-400 text-indigo-700 font-bold dark:bg-indigo-950/50 bg-indigo-100 px-2 py-0.5 rounded text-xs border dark:border-indigo-800/40 border-indigo-300">
                    9.04 CGPA
                  </span>
                </div>
              </div>
            </div>

            {/* Athletic Resilience & Sports Background */}
            <div className="p-6 rounded-2xl dark:bg-gradient-to-br dark:from-slate-900 dark:to-violet-950/40 bg-white border dark:border-slate-800 border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold dark:text-white text-slate-900">Athletic Mindset</h4>
                  <p className="text-xs dark:text-slate-400 text-slate-500">National-Level Kabaddi Athlete (2023)</p>
                </div>
              </div>

              <p className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                Competing at the National level in Kabaddi taught me rapid tactical adaptability, composure under immense pressure, and unyielding dedication to my squad. In software engineering, these same principles guide how I navigate production bugs, support teammates, and stay determined through complex technical challenges.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
