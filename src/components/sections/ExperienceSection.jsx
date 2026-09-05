import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { experienceData } from '../../data/portfolioData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 md:py-16 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Experience"
          title="Experience & Training"
          subtitle="Hands-on experience, professional training, and continuous growth in front-end development."
        />

        {/* Compact Card Grid (2 Equal Cards on Desktop / Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          {experienceData.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-rose-100/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm hover:shadow-md hover:border-rose-200 dark:hover:border-slate-700 transition-all duration-200"
            >
              <div>
                {/* Type Badge & Date Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100/80 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200/60 dark:border-rose-900/50">
                    {item.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 shrink-0" />
                    {item.period}
                  </span>
                </div>

                {/* Job Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">
                  {item.role}
                </h3>

                {/* Organization & Location */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-rose-600 dark:text-rose-400 mb-4">
                  <span className="inline-flex items-center gap-1 font-semibold text-rose-700 dark:text-rose-300">
                    <Building2 className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 shrink-0" />
                    {item.organization}
                  </span>
                  <span className="text-slate-300 dark:text-slate-700 font-normal">•</span>
                  <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                    {item.location}
                  </span>
                </div>

                {/* Bullet Highlights */}
                <ul className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  {item.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
