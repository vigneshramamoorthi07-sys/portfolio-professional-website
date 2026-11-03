import React from 'react';
import { Briefcase, Calendar, MapPin, Wrench, CheckCircle2 } from 'lucide-react';
import { INTERNSHIP_EXPERIENCE } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-brand-red uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="huge-title text-3xl sm:text-5xl text-white tracking-tight">
              INTERNSHIP EXPERIENCE
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-mono">
            // Practical industry training & modern web developer foundations
          </p>
        </div>

        {/* Modern Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-8 w-0.5 bg-gradient-to-b from-brand-red via-brand-purple to-transparent opacity-60" />

          {INTERNSHIP_EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative pl-12 md:pl-20 mb-12 group">
              
              {/* Timeline Marker Pulse */}
              <div className="absolute left-1.5 md:left-5.5 top-1.5 w-6 h-6 rounded-full bg-[#08080a] border-2 border-brand-red flex items-center justify-center -translate-x-1/2 group-hover:scale-125 transition-transform">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden group-hover:border-brand-red/30 transition-all">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-red/5 rounded-bl-full pointer-events-none" />

                {/* Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-mono uppercase tracking-wider font-semibold inline-block mb-2">
                      Industrial Internship
                    </span>
                    <h3 className="text-2xl font-bold text-white font-display">
                      {exp.position || exp.role}
                    </h3>
                    <p className="text-lg text-neutral-300 font-semibold font-display mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-neutral-400 space-y-1">
                    <span className="flex items-center gap-1.5 text-white font-semibold">
                      <Calendar className="w-4 h-4 text-brand-red" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Primary Description */}
                <p className="text-neutral-300 leading-relaxed text-sm sm:text-base mb-6">
                  {exp.summary}
                </p>

                {/* Core Responsibilities */}
                <div className="space-y-3 mb-6">
                  <span className="text-xs font-mono uppercase text-brand-red tracking-wider block">
                    KEY TAKEAWAYS & WORKFLOW EXPOSURE:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Used Badge Section */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <Wrench className="w-4 h-4 text-brand-red" />
                    <span className="uppercase">Primary Tool Used:</span>
                    <span className="px-3 py-1 rounded-md bg-white/10 text-white font-bold border border-white/10">
                      Visual Studio Code
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tools.filter(t => t !== "Visual Studio Code").map(t => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-neutral-400 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

