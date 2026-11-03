import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Database, 
  Wrench, 
  FileSpreadsheet, 
  BarChart3, 
  CheckCircle2, 
  MessageSquare, 
  Lightbulb, 
  Users, 
  Palette, 
  Award,
  Globe,
  SlidersHorizontal
} from 'lucide-react';
import { SKILL_CATEGORIES, SOFT_SKILLS, LANGUAGES, WORK_PROCESS } from '../data/portfolioData';

const softIconMap = {
  MessageSquare,
  Lightbulb,
  Users,
  Palette,
  Award
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', ...SKILL_CATEGORIES.map(c => c.title)];

  const filteredCategories = selectedCategory === 'ALL'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.title === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-brand-red uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>Technical Expertise</span>
            </div>
            <h2 className="huge-title text-3xl sm:text-5xl text-white tracking-tight">
              SKILLS & CAPABILITIES
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-mono">
            // Core technologies, modern developer tools, and workflow process
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs font-mono text-neutral-400 uppercase mr-2 flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/25 font-bold'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-brand-red/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <h3 className="text-base font-bold text-white font-display uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-red" />
                    {cat.title}
                  </h3>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {cat.skills.length} Techs
                  </span>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-neutral-200 font-semibold">{skill.name}</span>
                        <span className="text-brand-red text-[11px]">{skill.level}%</span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden border border-white/5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-red to-purple-600 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <span className="text-[10px] text-neutral-400 block">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 text-[10px] font-mono text-neutral-400 flex items-center justify-between">
                <span>PRACTICAL EXPOSURE</span>
                <span className="text-emerald-400">READY</span>
              </div>
            </div>
          ))}
        </div>

        {/* Work Process (01 Discover -> 02 Ideate -> 03 Design -> 04 Develop -> 05 Deliver from reference image!) */}
        <div className="mb-20 p-8 rounded-3xl bg-[#0e0e13] border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs font-mono text-brand-red uppercase tracking-widest block mb-1">
                EXECUTION PIPELINE
              </span>
              <h3 className="huge-title text-2xl sm:text-3xl text-white">
                WORK PROCESS
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              5-STEP DEVELOPMENT LIFECYCLE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {WORK_PROCESS.map((wp, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-red/30 transition-all relative group"
              >
                <span className="text-3xl font-black text-brand-red/40 group-hover:text-brand-red transition-colors font-display block mb-2">
                  {wp.step}
                </span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 font-display">
                  {wp.name}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {wp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills & Languages Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Soft Skills Section */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              Soft Skills & Professional Attributes
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {SOFT_SKILLS.map((item, idx) => {
                const Icon = softIconMap[item.icon] || Sparkles;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#121217] border border-white/5 hover:border-white/20 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1 font-display">
                      {item.name}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Languages Section */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display flex items-center gap-2">
              <Globe className="w-4 h-4 text-brand-red" />
              Languages Known
            </h3>

            <div className="p-6 rounded-2xl bg-[#121217] border border-white/10 space-y-4">
              <p className="text-xs text-neutral-400">
                Languages for technical collaboration, documentation, and stakeholder interaction:
              </p>
              
              <div className="space-y-3">
                {LANGUAGES.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between"
                  >
                    <span className="text-sm font-bold text-white font-display">{lang.name}</span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red">
                      {lang.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

