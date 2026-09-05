import React from 'react';
import { motion } from 'framer-motion';
import { Layout, GraduationCap, Lightbulb, Users, Check } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { whyWorkWithMe } from '../../data/portfolioData';

const iconMap = {
  Layout: Layout,
  GraduationCap: GraduationCap,
  Lightbulb: Lightbulb,
  Users: Users
};

const WhyMeSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Value Proposition"
          title="Why Work With Me?"
          subtitle="Core technical and behavioral strengths that make me a valuable front-end engineering asset for your team."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyWorkWithMe.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Layout;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-100 to-purple-100 dark:from-slate-800 dark:to-slate-800 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 pt-4 border-t border-rose-100 dark:border-slate-800">
                  <Check className="w-4 h-4 text-rose-500 dark:text-rose-400" />
                  Recruiter Focused Advantage
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
