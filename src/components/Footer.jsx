import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#050507] border-t border-white/10 text-neutral-400">
      
      {/* Top Banner / Catchy Brand Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/5">
          
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-red to-brand-purple flex items-center justify-center text-white font-black text-base shadow-lg shadow-brand-red/20">
                V
              </span>
              <div>
                <h3 className="text-xl font-bold text-white font-display uppercase tracking-widest">
                  VIGNESH
                </h3>
                <p className="text-xs text-brand-red font-mono uppercase tracking-widest">
                  Aspiring Web Developer
                </p>
              </div>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm">
              Computer Science graduate dedicated to building clean, accessible, and high-performance web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-wider">
            <a href="#home" className="hover:text-brand-red transition-colors">Home</a>
            <a href="#about" className="hover:text-brand-red transition-colors">About</a>
            <a href="#skills" className="hover:text-brand-red transition-colors">Skills</a>
            <a href="#projects" className="hover:text-brand-red transition-colors">Projects</a>
            <a href="#experience" className="hover:text-brand-red transition-colors">Experience</a>
            <a href="#education" className="hover:text-brand-red transition-colors">Education</a>
            <a href="#contact" className="hover:text-brand-red transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <div className="md:col-span-2 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-brand-red hover:text-white border border-white/10 text-xs font-mono uppercase tracking-wider text-neutral-300 transition-all group shadow"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom copyright and social handles */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-neutral-500">
            © 2026 Vignesh. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_DETAILS.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 hover:text-white hover:bg-white/10 text-neutral-400 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DETAILS.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 hover:text-white hover:bg-white/10 text-neutral-400 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_DETAILS.email}`}
              className="p-2 rounded-full bg-white/5 hover:text-white hover:bg-white/10 text-neutral-400 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

    </footer>
  );
}

