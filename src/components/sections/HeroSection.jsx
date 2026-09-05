import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { personalInfo } from '../../data/portfolioData';
import profilePhoto from '../../assets/1772643347242.jpg';

const HeroSection = () => {
  // Roles list from personalInfo with fallback to personalInfo.title
  const rolesList = useMemo(() => {
    if (personalInfo.roles && Array.isArray(personalInfo.roles) && personalInfo.roles.length > 0) {
      return personalInfo.roles;
    }
    return [personalInfo.title || 'Front-End Developer'];
  }, []);

  // Typewriter animation state using React hooks
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = rolesList[roleIndex % rolesList.length];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
      }, 90);
    }

    if (!isDeleting && currentText === currentRole) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, rolesList]);

  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center relative overflow-hidden"
    >
      {/* Decorative Ambient Pastel Background Blobs */}
      <div className="absolute top-1/4 left-5 w-72 h-72 sm:w-96 sm:h-96 bg-rose-200/50 dark:bg-rose-900/20 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse duration-10000"></div>
      <div className="absolute bottom-12 right-8 w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-purple-200/50 dark:bg-purple-900/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-100/40 dark:bg-indigo-950/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-badge text-rose-700 dark:text-rose-300 text-xs sm:text-sm font-semibold mb-6 shadow-xs border border-rose-200/80 dark:border-rose-900/40"
            >
              <Sparkles
                className="w-4 h-4 text-rose-500 dark:text-rose-400 animate-spin"
                style={{ animationDuration: '6s' }}
              />
              <span>Available for Front-End Roles & Internships</span>
            </motion.div>

            {/* Greeting & Animated Dynamic Name */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4"
            >
              Hi, I'm{' '}
              <motion.span
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="gradient-text inline-block drop-shadow-xs"
              >
                {personalInfo.firstName}
              </motion.span>
            </motion.h1>

            {/* Dynamic Typewriter Animated Job Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-200 mb-6 flex items-center min-h-[44px]"
            >
              <span className="w-7 sm:w-9 h-1 bg-rose-500 dark:bg-rose-400 rounded-full mr-3 shrink-0"></span>
              <span className="tracking-tight text-slate-800 dark:text-slate-100 font-extrabold">
                {currentText}
              </span>
              <span
                className="inline-block w-0.5 h-7 sm:h-8 bg-rose-500 dark:bg-rose-400 ml-1.5 animate-pulse align-middle"
                aria-hidden="true"
              />
            </motion.div>

            {/* Dynamic Short Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8"
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto"
            >
              {/* View My Work */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 dark:bg-rose-600 text-white font-semibold text-sm hover:bg-slate-800 dark:hover:bg-rose-500 transition-all shadow-md hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
              >
                View My Work
                <ArrowRight className="w-4 h-4 text-rose-300 dark:text-rose-100" />
              </a>

              {/* Download CV */}
              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-rose-200 dark:border-slate-800 hover:bg-rose-50/80 dark:hover:bg-slate-800 hover:border-rose-300 transition-all shadow-xs hover:shadow-md hover:-translate-y-1"
              >
                <Download className="w-4 h-4 text-rose-500 dark:text-rose-400" />
                Download CV
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-rose-100/70 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 font-semibold text-sm hover:bg-rose-200/80 dark:hover:bg-rose-900/60 hover:-translate-y-1 transition-all"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center gap-4 pt-4 border-t border-rose-100/80 dark:border-slate-800 w-full"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                Connect with me:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-rose-100 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-300 dark:hover:border-rose-800 hover:bg-rose-50 dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-xs"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-rose-100 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-300 dark:hover:border-rose-800 hover:bg-rose-50 dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-xs"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socialLinks.email}
                  aria-label="Send Email"
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-rose-100 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-300 dark:hover:border-rose-800 hover:bg-rose-50 dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-xs"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* RIGHT PHOTO COLUMN WITH FLOATING & ENTRANCE ANIMATION */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center relative z-10"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: 'easeInOut'
              }}
              className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-[25rem] md:h-[25rem] lg:w-[27rem] lg:h-[27rem]"
            >
              {/* Rotating Decorative Dashed Accent Ring */}
              <div
                className="absolute -inset-4 rounded-[2.5rem] border-2 border-dashed border-rose-300/60 dark:border-rose-700/40 pointer-events-none animate-spin"
                style={{ animationDuration: '30s' }}
              />

              {/* Ambient Soft Glow Backdrop */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-rose-400/40 via-purple-400/30 to-indigo-500/30 blur-2xl opacity-70 dark:opacity-40 pointer-events-none"></div>

              {/* Image Frame Container */}
              <div className="relative w-full h-full rounded-[2.2rem] p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-rose-200/80 dark:border-slate-800 shadow-2xl overflow-hidden group">
                <div className="relative w-full h-full rounded-[1.7rem] overflow-hidden bg-gradient-to-tr from-rose-100 to-purple-100 dark:from-slate-800 dark:to-slate-900">
                  <img
                    src={profilePhoto}
                    alt={personalInfo.displayName || personalInfo.name}
                    className="w-full h-full object-cover object-top rounded-[1.7rem] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
