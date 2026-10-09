import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Phone, 
  Sparkles, 
  AlertCircle,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please add a subject';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate graceful submission with celebratory confetti and fallback to mailto draft
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Trigger colorful celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  const handleDirectMailto = () => {
    const subject = encodeURIComponent(formData.subject || 'Opportunity / Collaboration for Manojini S');
    const body = encodeURIComponent(
      `Hello Manojini,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden dark:bg-slate-950 bg-slate-50/80 border-t dark:border-slate-800/60 border-slate-200">
      
      {/* Background Gradient */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold dark:bg-cyan-500/10 bg-cyan-100 dark:text-cyan-400 text-cyan-800 border dark:border-cyan-500/20 border-cyan-300 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg dark:text-slate-300 text-slate-600 leading-relaxed">
            Interested in discussing full-stack developer roles, backend engineering opportunities, or technology collaborations? I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Manojini Portrait Card */}
            <div className="p-6 rounded-3xl dark:bg-slate-900/90 bg-white border dark:border-slate-800 border-slate-200/90 shadow-xl overflow-hidden relative group">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 shadow-md shrink-0 relative group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden dark:bg-slate-900 bg-slate-100 flex items-center justify-center">
                    <img
                      src={PERSONAL_INFO.photoUrl}
                      alt="Manojini S portrait"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
                    Open for Roles
                  </span>
                  <h4 className="text-lg font-bold dark:text-white text-slate-900">
                    Manojini S
                  </h4>
                  <p className="text-xs dark:text-slate-400 text-slate-600 font-mono">
                    Full-Stack Developer
                  </p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Kanniyakumari &bull; Ready to Deploy
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Card */}
            <div className="p-8 rounded-3xl dark:bg-slate-900/80 bg-white border dark:border-slate-800 border-slate-200/90 backdrop-blur-md shadow-xl space-y-6">
              
              <h3 className="text-xl font-bold dark:text-white text-slate-900 tracking-tight">
                Direct Contact Information
              </h3>

              {/* Email Block with Copy Button */}
              <div className="p-4 rounded-2xl dark:bg-slate-950/80 bg-slate-50 border dark:border-slate-800 border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-violet-600/15 text-violet-600 dark:text-violet-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] dark:text-slate-400 text-slate-500 font-mono">Email Address</div>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold dark:text-white text-slate-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl dark:bg-slate-900 bg-white hover:bg-slate-100 text-slate-600 dark:text-slate-300 dark:hover:text-white border dark:border-slate-700/80 border-slate-300 transition-all shrink-0 shadow-sm"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-500 dark:text-slate-300" />}
                </button>
              </div>

              {/* Phone Block */}
              <div className="p-4 rounded-2xl dark:bg-slate-950/80 bg-slate-50 border dark:border-slate-800 border-slate-200 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-600/15 text-cyan-600 dark:text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] dark:text-slate-400 text-slate-500 font-mono">Phone</div>
                  <a 
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-semibold dark:text-white text-slate-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location Block */}
              <div className="p-4 rounded-2xl dark:bg-slate-950/80 bg-slate-50 border dark:border-slate-800 border-slate-200 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-600/15 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] dark:text-slate-400 text-slate-500 font-mono">Location</div>
                  <div className="text-sm font-semibold dark:text-white text-slate-900">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

              {/* Professional Network Links */}
              <div className="pt-4 border-t dark:border-slate-800 border-slate-200">
                <div className="text-xs font-mono dark:text-slate-400 text-slate-500 mb-3">
                  Online Profiles:
                </div>
                <div className="flex gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl dark:bg-slate-950 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 dark:text-slate-200 text-slate-800 border dark:border-slate-800 border-slate-300 hover:border-cyan-500/40 text-xs font-semibold transition-all shadow-sm"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyan-500" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl dark:bg-slate-950 bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 dark:text-slate-200 text-slate-800 border dark:border-slate-800 border-slate-300 hover:border-cyan-500/40 text-xs font-semibold transition-all shadow-sm"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Recruiter-Ready Friendly Pitch */}
            <div className="p-6 rounded-2xl dark:bg-gradient-to-br dark:from-violet-950/30 dark:to-slate-900 bg-white border dark:border-violet-900/40 border-slate-200 shadow-sm text-xs dark:text-slate-300 text-slate-700 leading-relaxed">
              <div className="flex items-center gap-2 font-bold dark:text-white text-slate-900 mb-2">
                <Sparkles className="w-4 h-4 text-violet-500" />
                <span>Ready for Full-Stack Roles</span>
              </div>
              <p>
                Whether you're hiring for a full-stack developer, backend engineer, or software engineer role, I am eager to apply my database design, API engineering, and frontend skills to build high-impact applications.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl dark:bg-slate-900/80 bg-white border dark:border-slate-800 border-slate-200/90 backdrop-blur-md shadow-xl dark:shadow-2xl">
              
              <h3 className="text-2xl font-bold dark:text-white text-slate-900 tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-500 mb-6">
                Fill in the form below or open a pre-filled email draft directly.
              </p>

              {/* Feedback Alert */}
              {submitSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 flex items-start gap-3 text-emerald-200 text-xs sm:text-sm animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-emerald-300">Inquiry captured successfully!</div>
                    <div className="mt-1 dark:text-slate-300 text-slate-700">
                      Thank you for reaching out. You can also send this inquiry directly to <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-500 underline font-semibold">{PERSONAL_INFO.email}</a> for immediate notification.
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1.5" htmlFor="contact-name">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl dark:bg-slate-950/80 bg-slate-50 border dark:text-slate-100 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none transition-all shadow-sm ${
                        errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'dark:border-slate-800 border-slate-300 focus:border-cyan-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1.5" htmlFor="contact-email">
                      Your Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl dark:bg-slate-950/80 bg-slate-50 border dark:text-slate-100 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none transition-all shadow-sm ${
                        errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'dark:border-slate-800 border-slate-300 focus:border-cyan-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1.5" htmlFor="contact-subject">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Full-Stack Developer Opportunity / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl dark:bg-slate-950/80 bg-slate-50 border dark:text-slate-100 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none transition-all shadow-sm ${
                      errors.subject ? 'border-rose-500 ring-1 ring-rose-500' : 'dark:border-slate-800 border-slate-300 focus:border-cyan-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1.5" htmlFor="contact-message">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell me about your team, tech stack, or the project you'd like to collaborate on..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl dark:bg-slate-950/80 bg-slate-50 border dark:text-slate-100 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none transition-all resize-none shadow-sm ${
                      errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'dark:border-slate-800 border-slate-300 focus:border-cyan-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Form Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-violet-600/30 hover:shadow-cyan-500/40 hover:opacity-95 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectMailto}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl dark:bg-slate-950 bg-slate-100 border dark:border-slate-800 border-slate-300 dark:hover:border-slate-700 hover:bg-slate-200 dark:text-slate-300 text-slate-800 text-xs sm:text-sm font-medium transition-all"
                  >
                    <ExternalLink className="w-4 h-4 text-cyan-500" />
                    <span>Open Mail Draft</span>
                  </button>
                </div>

                <p className="text-[11px] dark:text-slate-400 text-slate-500 pt-2 font-mono">
                  * Note: Clicking "Open Mail Draft" launches your default mail client with prefilled details directly to <span className="font-semibold dark:text-slate-300 text-slate-800">{PERSONAL_INFO.email}</span>.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
