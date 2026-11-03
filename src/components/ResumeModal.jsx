import React from 'react';
import { X, FileDown, Printer, Mail, Phone, MapPin, CheckCircle, GraduationCap, Briefcase, Award } from 'lucide-react';
import { PERSONAL_DETAILS, SKILL_CATEGORIES, INTERNSHIP_EXPERIENCE, EDUCATION_LIST, PROJECTS, LANGUAGES } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl rounded-3xl bg-[#101017] border border-white/10 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#161622] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-brand-red" />
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Resume Preview • Vignesh_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="p-8 sm:p-12 text-neutral-800 bg-[#fdfdfd] max-h-[80vh] overflow-y-auto selection:bg-rose-200">
          
          {/* Resume Header */}
          <div className="border-b-2 border-neutral-900 pb-6 mb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight font-display uppercase">
              {PERSONAL_DETAILS.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-rose-600 font-mono tracking-wider uppercase mt-1">
              {PERSONAL_DETAILS.profession} • Computer Science Graduate
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-neutral-700 mt-4">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-neutral-900" />
                {PERSONAL_DETAILS.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-neutral-900" />
                {PERSONAL_DETAILS.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-900" />
                {PERSONAL_DETAILS.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
              {PERSONAL_DETAILS.shortBio}
            </p>
          </div>

          {/* Internship Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
              Internship Experience
            </h2>
            {INTERNSHIP_EXPERIENCE.map((exp, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-neutral-900 font-sans">
                    {exp.role} — <span className="font-semibold text-neutral-700">{exp.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-neutral-600">{exp.duration}</span>
                </div>
                <p className="text-xs text-neutral-700 mt-1 leading-relaxed">
                  {exp.summary}
                </p>
                <ul className="list-disc list-inside text-xs text-neutral-700 mt-1.5 space-y-0.5">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
              Academic & Technical Projects
            </h2>
            {PROJECTS.map((proj, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-neutral-900 font-sans">
                    {proj.title}
                  </h3>
                  <span className="text-xs font-mono text-neutral-600">{proj.duration}</span>
                </div>
                <p className="text-xs text-neutral-700 mt-0.5 leading-relaxed">
                  {proj.description}
                </p>
                <div className="text-[11px] font-sans text-neutral-800 mt-1">
                  <strong>Tech Stack:</strong> {proj.technologies.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_LIST.map((edu, i) => (
                <div key={i} className="flex justify-between items-start text-xs font-sans">
                  <div>
                    <h3 className="font-bold text-neutral-900">{edu.degree}</h3>
                    <p className="text-neutral-700">{edu.institution}{edu.university ? `, ${edu.university}` : ''}</p>
                    <p className="text-neutral-600 italic">{edu.details}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono text-neutral-700 block">{edu.year}</span>
                    <span className="font-bold text-rose-600">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Technical Skills & Tools
            </h2>
            <div className="grid grid-cols-2 gap-2 text-xs font-sans text-neutral-800">
              <div><strong>Web Development:</strong> HTML5, CSS3, JavaScript (ES6+)</div>
              <div><strong>Frameworks/Libraries:</strong> Bootstrap, Tailwind CSS, React.js</div>
              <div><strong>Databases:</strong> SQL, MySQL</div>
              <div><strong>Developer Tools:</strong> VS Code, Power BI, Excel, PowerPoint</div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Languages
            </h2>
            <p className="text-xs font-sans text-neutral-800">
              English, Tamil, Kannada
            </p>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-[#161622] border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-neutral-400 font-mono">
            Directly print or save as PDF via your browser's Print dialog.
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-red text-white text-xs font-mono uppercase font-bold tracking-wider hover:brightness-110 shadow-lg shadow-brand-red/25 transition-all"
            >
              <FileDown className="w-4 h-4" />
              Download / Save PDF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

