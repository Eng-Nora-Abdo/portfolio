import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { experienceData } from '../../data/portfolioData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Practical Background"
          title="Experience & Professional Training"
          subtitle="A summary of software development programs and teaching experiences that sharpened my technical and interpersonal capabilities."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Central Bar */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-rose-300 via-purple-300 to-indigo-300 dark:from-rose-800 dark:via-purple-800 dark:to-indigo-800 rounded-full"></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-rose-400 dark:border-rose-600 text-rose-600 dark:text-rose-400 items-center justify-center shadow-md z-10">
                    <Briefcase className="w-4 h-4" />
                  </div>

                  {/* Card Container */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 text-left">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-100/80 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">
                          {item.type}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-rose-400" />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-1">
                        {item.role}
                      </h3>

                      <h4 className="text-sm font-bold text-rose-600 dark:text-rose-400 mb-4 flex items-center gap-2">
                        {item.organization}
                        <span className="text-slate-400 dark:text-slate-500 font-normal">| {item.location}</span>
                      </h4>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2.5 pt-3 border-t border-rose-100 dark:border-slate-800">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
