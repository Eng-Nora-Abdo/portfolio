import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import SectionHeader from '../common/SectionHeader';
import { personalInfo } from '../../data/portfolioData';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (status) setStatus('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject =
      formData.subject.trim() || 'Portfolio Contact Message';

    const body = `Hello Nora,

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    const mailtoLink = `mailto:norabdoo16272@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setStatus(
      'Your email app has been opened. Please review and send the message.'
    );
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20 relative bg-slate-50/50 dark:bg-slate-950/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Get In Touch"
          title="Let's Connect"
          subtitle="Have a question, opportunity, or project in mind? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 glass-card rounded-2xl p-5 sm:p-6"
          >
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
              Get In Touch
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Feel free to reach out for job opportunities, internships,
              collaborations, or front-end development projects.
            </p>

            <div className="space-y-3">
              {/* Email */}
              <a
                href="mailto:norabdoo16272@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-rose-100 dark:border-slate-800 hover:border-rose-300 dark:hover:border-rose-800 hover:bg-rose-50/60 dark:hover:bg-slate-800 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4.5 h-4.5" />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                    Email
                  </p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+201022603220"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-rose-100 dark:border-slate-800 hover:border-rose-300 dark:hover:border-rose-800 hover:bg-rose-50/60 dark:hover:bg-slate-800 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4.5 h-4.5" />
                </div>

                <div>
                  <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                    Phone
                  </p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-rose-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>

                <div>
                  <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                    Location
                  </p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-5 pt-5 border-t border-rose-100 dark:border-slate-800">
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://linkedin.com/in/nora-abdo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-slate-800 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/Eng-Nora-Abdo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-slate-800 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-slate-900 dark:text-slate-100" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 glass-card rounded-2xl p-5 sm:p-6"
          >
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">
              Send Me a Message
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 mb-5">
              Fill in the form and your email app will open with the message
              prepared.
            </p>

            {status && (
              <div className="mb-5 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                {status}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Your Name *
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-rose-100 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Your Email *
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-rose-100 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job opportunity / Collaboration"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-rose-100 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
                >
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-rose-100 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all resize-none"
                />

              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-rose-500 via-rose-600 to-purple-600 text-white font-bold text-sm shadow-md shadow-rose-500/20 hover:shadow-lg hover:shadow-rose-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;