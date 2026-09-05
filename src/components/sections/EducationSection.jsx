import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { educationData } from '../../data/portfolioData';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Academic Background"
          title="Education & Transition Story"
          subtitle="How my academic background complements my self-driven transition into modern front-end web engineering."
        />

        <div className="max-w-3xl mx-auto">
          {educationData.map((edu) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10 relative overflow-hidden"
            >
              {/* Background Accent Decorative Icon */}
              <GraduationCap className="absolute -right-6 -bottom-6 w-40 h-40 text-rose-100/50 dark:text-rose-950/20 pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-rose-600 dark:text-rose-400">{edu.degree}</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-rose-500" />
                  {edu.period}
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 pt-4 border-t border-rose-100 dark:border-slate-800">
                {edu.description}
              </p>

              <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 text-xs text-purple-900 dark:text-purple-200 font-medium">
                <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>Transition Note: Law studies cultivated analytical discipline, structured logic, and detail precision—qualities applied daily in coding front-end web interfaces.</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
