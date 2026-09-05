import React from 'react';
import { motion } from 'framer-motion';
import {
  FileCode, Palette, Code2, Atom, Wind, Layout,
  GitBranch, Laptop, Cpu,
  Smartphone, Globe, Navigation, Zap, CheckCircle2
} from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import SectionHeader from '../common/SectionHeader';
import { skillCategories } from '../../data/portfolioData';

// Map icon strings to actual Lucide & SVG icons safely
const iconMap = {
  FileCode: FileCode,
  Palette: Palette,
  JsSquare: Code2,
  Atom: Atom,
  Wind: Wind,
  Layout: Layout,
  GitBranch: GitBranch,
  Github: GithubIcon,
  Laptop: Laptop,
  Cpu: Cpu,
  Smartphone: Smartphone,
  Globe: Globe,
  Navigation: Navigation,
  Zap: Zap
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Technical Skills"
          title="Tools & Technologies I Work With"
          subtitle="Organized into key operational categories to provide recruiters with a clear view of my front-end capabilities."
        />

        <div className="space-y-12">
          {skillCategories.map((categoryGroup, groupIdx) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.15 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-8 rounded-full bg-gradient-to-b from-rose-400 to-purple-500"></div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {categoryGroup.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {categoryGroup.description}
                  </p>
                </div>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {categoryGroup.skills.map((skill) => {
                  const IconComp = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col items-center text-center group cursor-default"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-slate-800 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3 group-hover:bg-gradient-to-tr group-hover:from-rose-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 shadow-xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-rose-400" />
                        {skill.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
