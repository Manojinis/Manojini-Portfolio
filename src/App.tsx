import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechTicker } from './components/TechTicker';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { JourneySlideshow } from './components/JourneySlideshow';
import { Education } from './components/Education';
import { NlpAiSection } from './components/NlpAiSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    // Check saved preference or default to dark
    const savedTheme = localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);

    if (nextTheme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  };

  return (
    <div className={`min-h-screen text-slate-100 transition-colors duration-300 relative ${
      theme === 'dark' ? 'bg-slate-950 bg-mesh-dark' : 'bg-slate-50 text-slate-900 bg-mesh-light'
    }`}>
      {/* Navigation */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenResume={() => setResumeModalOpen(true)} 
      />

      {/* Main Sections */}
      <main>
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        
        {/* Animated Tech Stack Marquee Ticker */}
        <TechTicker />
        
        <About />
        <Skills />
        <Experience />
        <Projects />
        
        {/* Interactive Photo & Journey Slideshow Showcase */}
        <JourneySlideshow />
        
        <Education />
        <NlpAiSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Interactive Resume Modal */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />
    </div>
  );
};

export default App;
