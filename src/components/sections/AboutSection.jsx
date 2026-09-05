
import React from 'react';
import { motion } from 'framer-motion';
import {
  FolderCode,
  Code2,
  Sparkles,
  CheckCircle2,
  UserCheck,
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { personalInfo, statsData } from '../../data/portfolioData';

const iconMap = {
  FolderCode,
  Code2,
  Sparkles,
  CheckCircle2,
};

const AboutSection = () => {
  return (
    <section id="about" className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          tag="About Me"
          title="Building Clean & User-Friendly Web Experiences"
          subtitle="Front-End Developer passionate about creating responsive and modern web interfaces."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>

              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-rose-100/80 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
                  <UserCheck className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Professional Summary
                  </h3>

                  <p className="text-[11px] text-rose-500 dark:text-rose-400 font-semibold uppercase tracking-wider">
                    Front-End Developer
                  </p>
                </div>
              </div>

              {/* Short Bio */}
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.fullBio}
              </p>

            </div>

            {/* Quick Info */}
            <div className="mt-6 pt-4 border-t border-rose-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400">

              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                {personalInfo.location}
              </span>

              <span>
                Available for Hire / Internship
              </span>

            </div>

          </motion.div>

          {/* Statistics */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">

            {statsData.map((stat, idx) => {

              const IconComponent = iconMap[stat.icon] || Code2;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between min-h-[150px]"
                >

                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-100 to-purple-100 dark:from-slate-800 dark:to-slate-800 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                      {stat.value}
                    </h4>

                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
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

export default AboutSection;