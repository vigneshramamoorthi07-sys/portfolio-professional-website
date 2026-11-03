import React, { useState, useEffect } from 'react';
import { ArrowRight, Send, Github, Linkedin, Mail, Sparkles, Terminal, Code2, Globe } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';

const TYPED_TITLES = [
  "I'm a Web Developer",
  "I Build Responsive Websites",
  "I'm Passionate About Technology"
];

export default function Hero({ onOpenContact }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPED_TITLES[titleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === current) {
        // Pause at completion
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TYPED_TITLES.length);
      } else {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Massive Background Poster Wordmark like Reference Image ("PORTFOLIO") */}
      <div className="absolute top-10 left-0 right-0 overflow-hidden select-none pointer-events-none z-0 flex justify-center opacity-25">
        <span className="huge-title text-[15vw] sm:text-[18vw] leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-brand-red via-red-600/60 to-transparent">
          PORTFOLIO
        </span>
      </div>

      {/* Large Watermark Reference Portrait in Hero Background Center/Right */}
      <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full pointer-events-none z-0 overflow-hidden opacity-20 lg:opacity-35 flex items-center justify-end">
        <div className="relative w-[500px] sm:w-[650px] lg:w-[800px] h-full flex items-center justify-center">
          <img 
            src="/vignesh-profile.jpg" 
            alt="Vignesh Background" 
            className="w-full h-full object-cover object-top mask-image-radial mix-blend-screen contrast-125 filter"
            style={{
              maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 75%)'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top bar meta pill */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono uppercase tracking-widest text-neutral-400 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
            <span className="text-brand-red font-semibold">WEB DEVELOPER</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-300">CS GRADUATE</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-semibold tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HELLO, WORLD! WELCOME TO MY PORTFOLIO</span>
            </div>

            <div className="space-y-2">
              <span className="signature-font text-3xl sm:text-4xl text-neutral-300 block">
                Hello, I'm
              </span>
              <h1 className="huge-title text-5xl sm:text-7xl xl:text-8xl text-white tracking-tighter leading-none">
                VIGNESH
              </h1>
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-rose-400 to-purple-400 font-display">
                  {displayText}
                </span>
                <span className="inline-block w-0.5 h-7 ml-1 bg-brand-red animate-pulse"></span>
              </div>
            </div>

            {/* Subtitle / Description requested by user */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal">
              Motivated and detail-oriented Computer Science graduate with practical experience in web development. 
              Passionate about creating responsive, user-friendly web applications and continuously improving technical skills.
            </p>

            {/* Two Main Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-red to-brand-crimson shadow-xl shadow-brand-red/25 hover:shadow-brand-red/40 hover:scale-105 active:scale-95 transition-all border border-red-400/30"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-neutral-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20 active:scale-95 transition-all"
              >
                <Send className="w-4 h-4 text-brand-red" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Media Links with stylish pill style */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <span className="text-xs uppercase font-mono tracking-widest text-neutral-400">CONNECT:</span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_DETAILS.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 hover:border-brand-red/50 transition-all group"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={PERSONAL_DETAILS.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 hover:border-brand-red/50 transition-all group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={PERSONAL_DETAILS.socials.email}
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 hover:border-brand-red/50 transition-all group"
                  aria-label="Email Me"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase (Matching Reference Image portrait styling exactly) */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Glass Card Container */}
            <div className="relative mx-auto max-w-md rounded-3xl p-1 bg-gradient-to-b from-brand-red/40 via-white/10 to-transparent shadow-2xl">
              <div className="relative rounded-[22px] bg-[#0d0d12] overflow-hidden border border-white/10">
                
                {/* Visual Header / Terminal Bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#121217]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-brand-red" />
                    vignesh_dev.sh
                  </span>
                  <span className="text-[10px] text-brand-red font-mono font-bold">ACTIVE</span>
                </div>

                {/* Profile Graphic / Editorial Avatar Container with Vignesh's Photo */}
                <div className="relative aspect-[3/4] bg-gradient-to-b from-[#181820] to-[#0c0d12] overflow-hidden group">
                  
                  {/* Real Photo with moody red back-rim lighting matching reference */}
                  <img 
                    src="/vignesh-profile.jpg" 
                    alt="Vignesh - Aspiring Web Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-110"
                  />

                  {/* Gradient overlays for editorial text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-black/30 opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

                  {/* Red lighting glow ring */}
                  <div className="absolute -top-10 -right-10 w-44 h-44 bg-brand-red/30 rounded-full blur-3xl pointer-events-none" />

                  {/* Overlay text at bottom of photo card */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
                        Vignesh
                      </h4>
                      <p className="text-[10px] text-brand-red font-mono uppercase tracking-wider">
                        B.Sc Computer Science
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-brand-red/20 border border-brand-red/40 text-[10px] font-mono font-semibold text-white">
                      Class of 2023
                    </span>
                  </div>

                </div>

                {/* Metric Badge in Hero (Reference image inspired) */}
                <div className="p-4 bg-[#121217]/95 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                  <div className="border-r border-white/10 pr-2">
                    <span className="block text-lg font-extrabold text-white font-display">2023</span>
                    <span className="block text-[10px] font-mono text-neutral-400 uppercase">Graduation</span>
                  </div>
                  <div className="border-r border-white/10 px-2">
                    <span className="block text-lg font-extrabold text-brand-red font-display">6 Mos</span>
                    <span className="block text-[10px] font-mono text-neutral-400 uppercase">Internship</span>
                  </div>
                  <div className="pl-2">
                    <span className="block text-lg font-extrabold text-purple-400 font-display">2+</span>
                    <span className="block text-[10px] font-mono text-neutral-400 uppercase">Projects</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Highlight Stats Bar underneath Hero (Like reference image 3+ Years / 40+ Projects style) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-[#121217]/60 border border-white/10 backdrop-blur-xl">
          {PERSONAL_DETAILS.stats.map((st, i) => (
            <div key={i} className="flex items-center gap-4 px-3 py-2 border-r last:border-r-0 border-white/5">
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 font-display">
                {st.value}
              </div>
              <div>
                <span className="block text-[11px] font-bold tracking-wider text-brand-red uppercase font-mono">
                  {st.label}
                </span>
                <span className="block text-xs text-neutral-400">
                  {st.subtext}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
