import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08080a] text-neutral-100 flex flex-col font-sans selection:bg-brand-red selection:text-white relative">
      
      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenContact={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />
        
        <About />
        
        <Skills />
        
        <Projects onSelectProject={(proj) => setSelectedProject(proj)} />
        
        <Experience />
        
        <Education />
        
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Resume Download / Preview Modal */}
      {resumeOpen && (
        <ResumeModal 
          onClose={() => setResumeOpen(false)} 
        />
      )}

    </div>
  );
}

