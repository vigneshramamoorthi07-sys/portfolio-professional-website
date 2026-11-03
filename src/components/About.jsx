import React from 'react';
import { GraduationCap, Briefcase, Code2, Sparkles, MapPin, Mail, Phone, Calendar, ArrowRight } from 'lucide-react';
import { PERSONAL_DETAILS, HIGHLIGHT_CARDS } from '../data/portfolioData';

const iconMap = {
  GraduationCap: GraduationCap,
  Briefcase: Briefcase,
  Code2: Code2,
  Sparkles: Sparkles,
};

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#09090c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-brand-red uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>Who I Am</span>
            </div>
            <h2 className="huge-title text-3xl sm:text-5xl text-white tracking-tight">
              ABOUT ME
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-mono">
            // Passionate web developer transforming concepts into clean, functional code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-2xl bg-[#121217] border border-white/10 space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-full pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <span className="text-brand-red">01.</span> Background & Journey
              </h3>

              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                I'm Vignesh, a Computer Science graduate from Hindusthan College of Arts and Science. I am passionate about web development and enjoy building interactive, responsive, and user-friendly websites.
              </p>

              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                I have hands-on experience with HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and SQL. During my six-month internship at Aimore Technologies, I gained practical exposure to web development and improved my technical and problem-solving abilities.
              </p>

              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                I am a quick learner, creative thinker, and team player who is eager to explore new technologies and contribute to real-world projects.
              </p>

              {/* Personal Quick Info Grid */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-neutral-300">
                  <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                  <span>Theni, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <Calendar className="w-4 h-4 text-brand-red shrink-0" />
                  <span>2023 CS Graduate</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300 sm:col-span-2">
                  <Mail className="w-4 h-4 text-brand-red shrink-0" />
                  <a href={`mailto:${PERSONAL_DETAILS.email}`} className="hover:text-brand-red transition-colors truncate">
                    {PERSONAL_DETAILS.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quote Banner (Inspired by Rayhan Aditya quote card in reference image) */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-red/20 via-brand-red/10 to-transparent border-l-4 border-brand-red border-y border-r border-white/5">
              <span className="text-3xl text-brand-red font-serif leading-none block mb-1">“</span>
              <p className="text-neutral-200 italic font-serif text-base sm:text-lg">
                Good design is not just how it looks, but how it works. Code should be clean, functional, and user-centered.
              </p>
              <div className="mt-3 flex items-center justify-between text-xs font-mono">
                <span className="signature-font text-xl text-brand-red">Vignesh</span>
                <span className="text-neutral-400 uppercase tracking-widest">Aspiring Web Developer</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Highlights requested */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HIGHLIGHT_CARDS.map((card, idx) => {
              const Icon = iconMap[card.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between group hover:border-brand-red/40 transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-red group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-300 mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase text-brand-red tracking-wider block mb-1">
                      {card.subtitle}
                    </span>
                    <h4 className="text-base font-bold text-white mb-2 font-display">
                      {card.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500 group-hover:text-brand-red transition-colors">
                    <span>HIGHLIGHT 0{idx + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

