import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download, ExternalLink, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'AI & NLP', href: '#ai-nlp' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'ai-nlp', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'dark:bg-slate-950/90 bg-white/90 backdrop-blur-md dark:border-b dark:border-slate-800/80 border-b border-slate-200 shadow-md shadow-black/5 dark:shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-blue-600 to-cyan-400 p-[2px] shadow-md shadow-violet-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full dark:bg-slate-950 bg-white rounded-[10px] overflow-hidden flex items-center justify-center">
                <img 
                  src={PERSONAL_INFO.photoUrl} 
                  alt="Manojini S" 
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight dark:text-slate-100 text-slate-900 flex items-center gap-1.5">
                {PERSONAL_INFO.name}
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Available for Opportunities" />
              </span>
              <span className="text-xs dark:text-slate-400 text-slate-500 font-mono tracking-wider">
                Full-Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full dark:bg-slate-900/60 bg-slate-100/90 dark:border dark:border-slate-800/80 border border-slate-200 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-sm shadow-cyan-500/20'
                      : 'dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-black dark:hover:bg-slate-800/60 hover:bg-slate-200/80'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2.5 rounded-xl dark:bg-slate-900/80 bg-white border dark:border-slate-800 border-slate-300 dark:text-slate-300 text-slate-700 hover:text-cyan-500 dark:hover:border-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shadow-sm"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Quick Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-700/80 border-slate-300 dark:text-slate-200 text-slate-800 hover:text-cyan-600 dark:hover:text-white dark:hover:border-cyan-500/50 hover:border-cyan-400 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Download className="w-3.5 h-3.5 text-cyan-500" />
              <span>Resume</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 text-white shadow-md shadow-violet-600/20 hover:shadow-cyan-500/30 hover:opacity-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-5 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg bg-slate-900 border border-slate-700 text-slate-200"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>View &amp; Download Resume</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 text-white"
              >
                <Sparkles className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
