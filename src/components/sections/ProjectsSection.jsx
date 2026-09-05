import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Users, User, Sparkles } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import SectionHeader from '../common/SectionHeader';
import { projectsData } from '../../data/portfolioData';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Portfolio Projects"
          title="Featured Front-End Work"
          subtitle="A selection of responsive web applications built with modern front-end technologies."
        />

        {/* 3-Column Grid on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {projectsData.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group border border-rose-100/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md"
            >
              <div>
                {/* Compact Image Header */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';
                    }}
                  />

                  {/* Overlay Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold backdrop-blur-md shadow-xs ${
                        project.isTeamProject
                          ? 'bg-rose-950/80 text-rose-100 border border-rose-400/30'
                          : 'bg-slate-950/80 text-slate-100 border border-slate-700/40'
                      }`}
                    >
                      {project.isTeamProject ? (
                        <Users className="w-3 h-3 text-rose-300" />
                      ) : (
                        <User className="w-3 h-3 text-purple-300" />
                      )}
                      {project.isTeamProject ? 'Team Project' : 'Solo Project'}
                    </span>

                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-400/95 text-amber-950 shadow-xs">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Compact My Role */}
                  <div className="mb-4 p-2.5 rounded-xl bg-rose-50/70 dark:bg-slate-800/60 border border-rose-100/70 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-rose-600 dark:text-rose-400 block mb-0.5">
                      My Role
                    </span>
                    <span className="line-clamp-2">{project.contribution}</span>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Compact Action Buttons */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 flex items-center gap-2.5">
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-rose-600 text-white font-semibold text-xs hover:bg-rose-600 dark:hover:bg-rose-500 transition-all shadow-xs"
                >
                  Live Demo
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-slate-700 hover:border-rose-300 hover:text-rose-600 dark:hover:text-rose-400 transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
