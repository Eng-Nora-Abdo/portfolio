import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ tag, title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}
    >
      {tag && (
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase gradient-badge text-rose-700 dark:text-rose-300 shadow-xs mb-3">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4 transition-colors">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed transition-colors">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};

export default SectionHeader;
