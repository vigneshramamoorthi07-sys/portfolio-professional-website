import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown, Sparkles } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Detect current section
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo with Portrait */}
        <a 
          href="#home" 
          className="group flex items-center gap-3 text-white font-extrabold tracking-widest text-lg sm:text-xl font-display uppercase"
        >
          <div className="relative w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-brand-red to-brand-purple shadow-lg shadow-brand-red/30 group-hover:scale-105 transition-transform overflow-hidden">
            <img 
              src="/vignesh-profile.jpg" 
              alt="Vignesh Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="group-hover:text-brand-red transition-colors flex items-center gap-1.5">
            {PERSONAL_DETAILS.name}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#121217]/80 border border-white/5 px-4 py-1.5 rounded-full backdrop-blur-lg">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                  isActive 
                    ? 'text-white bg-white/10 shadow-inner' 
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-red rounded-full" />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-red to-brand-crimson rounded-full hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-brand-red/25 border border-red-500/30"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="sm:hidden p-2 text-xs font-bold text-white bg-brand-red rounded-full hover:opacity-90"
            title="Download Resume"
          >
            <FileDown className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0d12]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-3 transition-all animate-fadeIn">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all ${
                  isActive 
                    ? 'bg-brand-red/10 text-brand-red font-semibold border-l-4 border-brand-red' 
                    : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            );
          })}
          
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 flex items-center justify-center gap-2 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-brand-red to-brand-crimson shadow-lg shadow-brand-red/30"
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
