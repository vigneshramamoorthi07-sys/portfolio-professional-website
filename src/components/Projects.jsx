import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, CheckCircle, Layers, Calendar, Filter, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filterOptions = ['ALL', 'HTML & CSS', 'BOOTSTRAP', 'MYSQL', 'JAVASCRIPT'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'ALL') return true;
    return proj.tags.some((t) => t.toUpperCase().includes(activeFilter.replace('&', '')));
  });

  return (
    <section id="projects" className="py-24 relative bg-[#09090c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Inspired by "SELECTED PROJECTS" in reference image) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-brand-red uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>Portfolio Works</span>
            </div>
            <h2 className="huge-title text-3xl sm:text-5xl text-white tracking-tight">
              SELECTED PROJECTS
            </h2>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span>SHOWING {filteredProjects.length} OF {PROJECTS.length} PROJECTS</span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeFilter === opt
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/25 font-bold'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Projects Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between hover:border-brand-red/40 transition-all duration-300"
            >
              <div>
                {/* Mockup Showcase Banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#15151c]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill on image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono uppercase text-brand-red border border-white/10">
                      PROJECT 0{idx + 1}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono uppercase text-white/80 border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-neutral-300 border border-white/10">
                    <Calendar className="w-3 h-3 text-brand-red" />
                    <span>{project.duration}</span>
                  </div>

                  {/* Quick View Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-5 py-2.5 rounded-full bg-brand-red text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:scale-105 transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Project Details</span>
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 space-y-5">
                  <div className="space-y-2">
                    <h3 
                      onClick={() => onSelectProject(project)}
                      className="text-2xl font-bold text-white font-display hover:text-brand-red transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-brand-red group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features Bullet List */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase text-brand-red tracking-wider block">
                      KEY ARCHITECTURE & FEATURES:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                      {project.keyFeatures.slice(0, 4).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons in footer of card */}
              <div className="px-7 py-4 bg-[#121217]/80 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-brand-red transition-colors"
                >
                  Learn More →
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 text-xs font-mono transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-red/10 hover:bg-brand-red/20 border border-brand-red/30 text-brand-red text-xs font-mono font-semibold transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Recruiter Notice (Honest representation note required by guidelines) */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between flex-wrap gap-3 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Academic & Portfolio Projects built with HTML, CSS, JavaScript, Bootstrap & MySQL.</span>
          </div>
          <span className="text-neutral-500">Source code structure & UI mockups ready for technical interview reviews.</span>
        </div>

      </div>
    </section>
  );
}

