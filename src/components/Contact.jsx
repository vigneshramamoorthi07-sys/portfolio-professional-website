import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle, ArrowUpRight, Loader2 } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';

// Replace with your Google Apps Script Web App URL after deploying
const GOOGLE_SCRIPT_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxCuA6-BkU1wlecTD2bnRqwfR-Kxbt810hbj3zS5zVtGR1qI0hlVlWgQyMXVyXr4ywmPQ/exec";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = "Message must be at least 10 characters long";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // If placeholder is unchanged, gracefully use mailto fallback
    const isConfigured = GOOGLE_SCRIPT_WEB_APP_URL && !GOOGLE_SCRIPT_WEB_APP_URL.includes("YOUR_DEPLOYED_ID_HERE");

    if (isConfigured) {
      try {
        await fetch(GOOGLE_SCRIPT_WEB_APP_URL, {
          method: 'POST',
          mode: 'no-cors', // Standard for Google Apps Script Web App webhooks
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (err) {
        console.error("Submission error:", err);
        setIsSubmitting(false);
        setSubmitStatus('error');
      }
    } else {
      // Direct mailto client trigger as resilient fallback
      setTimeout(() => {
        const mailtoUrl = `mailto:${PERSONAL_DETAILS.email}?subject=${encodeURIComponent(
          `[Portfolio Inquiry] ${formData.subject}`
        )}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
        )}`;
        
        window.location.href = mailtoUrl;
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 500);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-brand-red uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>Get In Touch</span>
            </div>
            <h2 className="huge-title text-3xl sm:text-5xl text-white tracking-tight">
              LET'S WORK TOGETHER
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-mono">
            // Open for fresher web developer roles, internships, and collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white font-display">
                Have an Opportunity or Project in Mind?
              </h3>
              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                I'm always interested in learning new technologies, collaborating on exciting projects, and exploring opportunities to grow as a developer. Feel free to contact me!
              </p>
            </div>

            {/* Direct Contact List */}
            <div className="space-y-4">
              
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-[#121217] border border-white/10 hover:border-brand-red/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">Email Address</span>
                  <span className="text-sm font-semibold text-white group-hover:text-brand-red transition-colors truncate block">
                    {PERSONAL_DETAILS.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_DETAILS.phone.replace(/\s+/g, '')}`}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-[#121217] border border-white/10 hover:border-brand-red/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">Phone Number</span>
                  <span className="text-sm font-semibold text-white group-hover:text-brand-red transition-colors block">
                    {PERSONAL_DETAILS.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#121217] border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">Current Location</span>
                  <span className="text-sm font-semibold text-white block">
                    {PERSONAL_DETAILS.location}
                  </span>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-[#121217] border border-white/10 space-y-4">
              <span className="text-xs font-mono uppercase text-brand-red tracking-widest block">
                PROFESSIONAL PROFILES:
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_DETAILS.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 flex items-center justify-between group transition-all"
                >
                  <span className="text-xs font-bold text-neutral-200 group-hover:text-white flex items-center gap-2">
                    <Github className="w-4 h-4 text-brand-red" /> GitHub
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-brand-red group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href={PERSONAL_DETAILS.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 flex items-center justify-between group transition-all"
                >
                  <span className="text-xs font-bold text-neutral-200 group-hover:text-white flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-brand-red" /> LinkedIn
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-brand-red group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#121217] border border-white/10 shadow-2xl relative">
              <div className="mb-6 pb-4 border-b border-white/10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse"></span>
                  Get In Touch
                </h3>
                <p className="text-xs text-neutral-400 font-mono mt-1">
                  Fill in your details below to send a message directly to my inbox and dashboard.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-300 text-xs sm:text-sm animate-fadeIn">
                  <CheckCircle className="w-5 h-5 shrink-0 text-emerald-400" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-rose-300 text-xs sm:text-sm animate-fadeIn">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>There was an issue sending your message. Please reach out directly at {PERSONAL_DETAILS.email}.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#09090c] border text-white text-sm focus:outline-none transition-all ${
                        errors.name ? 'border-brand-red' : 'border-white/10 focus:border-brand-red'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-brand-red font-mono">{errors.name}</p>}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#09090c] border text-white text-sm focus:outline-none transition-all ${
                        errors.email ? 'border-brand-red' : 'border-white/10 focus:border-brand-red'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-brand-red font-mono">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block">
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Job Opportunity / Web Developer Role"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-[#09090c] border text-white text-sm focus:outline-none transition-all ${
                      errors.subject ? 'border-brand-red' : 'border-white/10 focus:border-brand-red'
                    }`}
                  />
                  {errors.subject && <p className="text-[11px] text-brand-red font-mono">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 block">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Hello Vignesh, we reviewed your portfolio and would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-[#09090c] border text-white text-sm focus:outline-none transition-all resize-none ${
                      errors.message ? 'border-brand-red' : 'border-white/10 focus:border-brand-red'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-brand-red font-mono">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-white font-bold text-xs uppercase tracking-widest bg-gradient-to-r from-brand-red to-brand-crimson hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-red/25 border border-red-500/30 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
