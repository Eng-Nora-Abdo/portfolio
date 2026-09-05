import React from 'react';
import { Mail, ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-16 relative overflow-hidden transition-colors border-t border-slate-800 dark:border-slate-900">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-rose-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800 dark:border-slate-850">

          {/* Left Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-500 to-purple-600 flex items-center justify-center text-white font-bold">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                {personalInfo.displayName || "Nora Abdo"}
              </span>
            </div>
            <p className="text-xs text-rose-400 font-semibold uppercase tracking-wider mb-2">
              {personalInfo.subtitle || "FRONT-END DEVELOPER"}
            </p>
            <p className="text-sm text-slate-400 max-w-sm">
              Building responsive, intuitive, and modern web applications with passion and precision.
            </p>
          </div>

          {/* Center Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-rose-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-rose-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-rose-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-rose-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-rose-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-rose-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-rose-400 transition-colors">Contact</a>
          </div>

          {/* Right Social & Back To Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-900 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all border border-slate-700 dark:border-slate-800"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-900 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all border border-slate-700 dark:border-slate-800"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socialLinks.email}
              className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-900 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all border border-slate-700 dark:border-slate-800"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center hover:bg-rose-600 transition-all shadow-md ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {personalInfo.displayName || "Nora Abdo"}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with React.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
