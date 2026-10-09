import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Play, 
  Pause, 
  Award, 
  Code2, 
  Trophy, 
  Brain, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { JOURNEY_SLIDES, JourneySlide } from '../data/portfolioData';

export const JourneySlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<number | null>(null);

  const totalSlides = JOURNEY_SLIDES.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        nextSlide();
      }, 5500);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  const current = JOURNEY_SLIDES[currentIndex];

  const getThemeBadge = (color: JourneySlide['themeColor']) => {
    switch (color) {
      case 'cyan':
        return 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30';
      case 'violet':
        return 'bg-violet-500/15 text-violet-700 dark:text-violet-300 border-violet-500/30';
      case 'amber':
        return 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30';
      case 'emerald':
        return 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30';
      case 'rose':
        return 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30';
    }
  };

  return (
    <section className="py-20 relative overflow-hidden dark:bg-slate-950/70 bg-slate-100/70 border-t dark:border-slate-800/80 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold dark:bg-cyan-500/10 bg-cyan-100 dark:text-cyan-400 text-cyan-800 border dark:border-cyan-500/20 border-cyan-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Visual Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight">
            Journey &amp; Impact <span className="gradient-text">Slideshow</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base dark:text-slate-300 text-slate-600">
            Swipe through real-world software milestones, university distinctions, and engineering highlights.
          </p>
        </div>

        {/* Carousel Presentation Container */}
        <div 
          className="relative max-w-5xl mx-auto rounded-3xl dark:bg-slate-900/90 bg-white border dark:border-slate-800 border-slate-200/90 shadow-2xl overflow-hidden transition-all duration-300"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Animated Slide Progress Bar */}
          <div className="w-full h-1.5 dark:bg-slate-800 bg-slate-200 overflow-hidden">
            <div 
              key={currentIndex}
              className="h-full bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400 transition-all duration-5000 ease-linear"
              style={{ width: isPlaying ? '100%' : '50%' }}
            />
          </div>

          <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Photo Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group">
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-violet-600 via-blue-500 to-cyan-400 opacity-60 blur-lg group-hover:opacity-90 transition-all duration-500 animate-pulse-slow" />
                
                {/* Photo Frame */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden p-[4px] bg-gradient-to-tr from-violet-600 via-blue-500 to-cyan-400 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden dark:bg-slate-950 bg-slate-100 relative">
                    <img
                      src={current.photoUrl}
                      alt="Manojini S - Full-Stack Developer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="eager"
                    />
                    
                    {/* Bottom Gradient Overlay on Photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end items-center pb-4 text-center">
                      <span className="text-white font-bold text-base tracking-tight drop-shadow-md">
                        Manojini S
                      </span>
                      <span className="text-[11px] text-cyan-300 font-mono font-medium drop-shadow-md">
                        Full-Stack Developer
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Pill */}
                <div className="absolute -bottom-3 -right-3 dark:bg-slate-900 bg-white border dark:border-slate-700 border-slate-300 px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-2 text-xs font-bold dark:text-cyan-300 text-cyan-700 font-mono">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>{current.highlightMetric}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Slide Story Content */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
              
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getThemeBadge(current.themeColor)} font-mono`}>
                    {current.tag}
                  </span>
                  <span className="text-xs dark:text-slate-400 text-slate-500 font-mono">
                    Slide {currentIndex + 1} of {totalSlides}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold dark:text-white text-slate-900 tracking-tight leading-snug">
                  {current.title}
                </h3>
                
                <h4 className="text-sm sm:text-base font-semibold dark:text-cyan-300 text-cyan-700 mt-1">
                  {current.subtitle}
                </h4>

                <p className="mt-4 text-sm sm:text-base dark:text-slate-300 text-slate-700 leading-relaxed dark:bg-slate-950/60 bg-slate-50 p-5 rounded-2xl border dark:border-slate-800 border-slate-200">
                  {current.description}
                </p>
              </div>

              {/* Technologies / Focus Tags */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider dark:text-slate-400 text-slate-500 mb-2">
                  Key Focus &amp; Tools:
                </div>
                <div className="flex flex-wrap gap-2">
                  {current.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono dark:bg-slate-950 bg-slate-100 dark:text-slate-200 text-slate-800 border dark:border-slate-800 border-slate-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Slide Navigation Controls */}
              <div className="pt-4 border-t dark:border-slate-800 border-slate-200 flex items-center justify-between">
                
                {/* Dot Indicators */}
                <div className="flex items-center gap-2">
                  {JOURNEY_SLIDES.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentIndex(dotIdx)}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentIndex === dotIdx
                          ? 'w-8 bg-gradient-to-r from-violet-600 to-cyan-500'
                          : 'w-2.5 dark:bg-slate-700 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow Controls & Auto-play Pause Toggle */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                    className="p-2 rounded-xl dark:bg-slate-800 bg-slate-100 dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-black border dark:border-slate-700 border-slate-300 transition-colors"
                    title={isPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="p-2 rounded-xl dark:bg-slate-800 bg-slate-100 dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-black border dark:border-slate-700 border-slate-300 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="p-2 rounded-xl dark:bg-slate-800 bg-slate-100 dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-black border dark:border-slate-700 border-slate-300 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
