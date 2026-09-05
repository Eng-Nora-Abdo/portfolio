import React from 'react';
import { Mail, ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white text-slate-600 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">

      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-96 -translate-x-1/2 rounded-full bg-rose-500/5 blur-3xl dark:bg-rose-500/10" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

          {/* Brand */}
          <div className="text-center sm:text-left">

            <div className="mb-3 flex items-center justify-center gap-2.5 sm:justify-start">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-purple-600 text-white shadow-sm">
                <Code2 className="h-5 w-5" />
              </div>

              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                {personalInfo.displayName}
              </span>

            </div>

            <p className="max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Front-End Developer building responsive, modern, and
              user-friendly web experiences.
            </p>

          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 sm:justify-end">

            {/* GitHub */}
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-500 hover:bg-rose-500 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              <GithubIcon className="h-5 w-5" />
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-500 hover:bg-rose-500 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>

            {/* Email */}
            <a
              href={personalInfo.socialLinks.email}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-500 hover:bg-rose-500 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              <Mail className="h-5 w-5" />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-600"
            >
              <ArrowUp className="h-5 w-5" />
            </button>

          </div>

        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-slate-200 dark:bg-slate-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-slate-400 sm:flex-row sm:text-left dark:text-slate-500">

          <p>
            © {new Date().getFullYear()} {personalInfo.displayName}. All rights reserved.
          </p>

          <p>
            React.js · Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;