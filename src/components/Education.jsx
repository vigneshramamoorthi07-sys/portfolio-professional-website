import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#09090c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-brand-red uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>Academic Foundations</span>
            </div>
            <h2 className="huge-title text-3xl sm:text-5xl text-white tracking-tight">
              EDUCATION
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-mono">
            // Academic milestones in computer science and mathematics
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_LIST.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between hover:border-brand-red/40 transition-all relative group"
            >
              <div>
                {/* Level badge & timeline */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <span className="px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[11px] font-mono uppercase font-semibold">
                    {edu.level}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                    <Calendar className="w-3.5 h-3.5 text-brand-red" />
                    <span>{edu.year}</span>
                  </div>
                </div>

                {/* Degree & College */}
                <h3 className="text-xl font-bold text-white mb-2 font-display">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-neutral-300 mb-1">
                  {edu.institution}
                </p>
                {edu.university && (
                  <p className="text-xs text-neutral-400 mb-4 font-mono">
                    {edu.university}
                  </p>
                )}

                {/* Academic Score Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white mb-5">
                  <Award className="w-4 h-4 text-brand-red" />
                  <span>Performance: <strong className="text-brand-red">{edu.score}</strong></span>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {edu.details}
                </p>
              </div>

              {/* Location Footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-red" />
                  {edu.location}
                </span>
                <span className="text-neutral-400 font-bold">COMPLETED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

