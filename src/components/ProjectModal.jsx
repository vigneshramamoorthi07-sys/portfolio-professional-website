import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Calendar, Layers, Tag } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-[#0e0e14] border border-white/10 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-neutral-300 hover:text-white transition-all backdrop-blur-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Image */}
        <div className="relative aspect-[16/8] overflow-hidden bg-[#161620]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14] via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-brand-red text-white text-[11px] font-mono uppercase font-bold tracking-wider">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-300 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
              Duration: {project.duration}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-brand-red tracking-wider font-bold">
              SYSTEM CAPABILITIES & ARCHITECTURE:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
              TECHNOLOGIES USED:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-neutral-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-neutral-400">
              Status: <span className="text-emerald-400">Project Complete / Academic</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-brand-red text-white text-xs font-mono uppercase tracking-wider font-bold shadow-lg shadow-brand-red/20 hover:brightness-110 transition-all"
              >
                Close View
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

