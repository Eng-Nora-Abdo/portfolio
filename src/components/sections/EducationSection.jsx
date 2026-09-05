import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { educationData } from '../../data/portfolioData';

const EducationSection = () => {
  return (
    <section id="education" className="py-12 md:py-16 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Education"
          title="Education"
          subtitle="Bachelor's degree and academic background."
        />

        <div className="max-w-3xl mx-auto">
          {educationData.map((edu) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 border border-rose-100/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start md:items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-100/80 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 border border-rose-200/60 dark:border-rose-900/50">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-rose-600 dark:text-rose-400">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50">
                    <Calendar className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50">
                    <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    {edu.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-100/80 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-semibold border border-rose-200/60 dark:border-rose-900/50">
                    <Award className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    Overall Grade: {edu.grade}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
