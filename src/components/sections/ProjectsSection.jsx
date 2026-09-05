import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Users, User, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import SectionHeader from '../common/SectionHeader';
import { projectsData } from '../../data/portfolioData';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projectsData
    : filter === 'featured'
      ? projectsData.filter(p => p.featured)
      : projectsData.filter(p => p.isTeamProject);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Portfolio Projects"
          title="Featured Front-End Projects"
          subtitle="Explore practical applications showcasing responsive design, component architecture, and modern API integrations."
        />

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'featured', label: 'Featured Showcase' },
            { id: 'team', label: 'Team Collaborations' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                filter === btn.id
                  ? 'bg-rose-600 dark:bg-rose-600 text-white shadow-md shadow-rose-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-rose-100 dark:border-slate-800 hover:bg-rose-50 dark:hover:bg-slate-800 hover:text-rose-600 dark:hover:text-rose-400'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group ${
                  project.id === 'ammarha' ? 'md:col-span-2 lg:col-span-2 border-rose-300 dark:border-rose-800 bg-gradient-to-br from-white/90 via-rose-50/30 to-purple-50/20 dark:from-slate-900/90 dark:via-rose-950/20 dark:to-purple-950/20 shadow-xl' : ''
                }`}
              >
                <div>
                  {/* Thumbnail Image Container */}
                  <div className="relative overflow-hidden aspect-video w-full bg-slate-100 dark:bg-slate-800 border-b border-rose-100 dark:border-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';
                      }}
                    />

                    {/* Team or Solo Badge */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md shadow-sm ${
                        project.isTeamProject
                          ? 'bg-rose-900/80 text-rose-100 border border-rose-400/40'
                          : 'bg-slate-900/80 text-slate-100 border border-slate-700/40'
                      }`}>
                        {project.isTeamProject ? <Users className="w-3.5 h-3.5 text-rose-300" /> : <User className="w-3.5 h-3.5 text-purple-300" />}
                        {project.isTeamProject ? 'Team Project' : 'Solo Developer'}
                      </span>

                      {project.featured && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/90 text-amber-950 backdrop-blur-md">
                          <Sparkles className="w-3 h-3" /> Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Role Contribution Box if Team Project */}
                    {project.isTeamProject && (
                      <div className="mb-4 p-3 rounded-xl bg-rose-50/80 dark:bg-rose-950/40 border border-rose-200/70 dark:border-rose-900/40 text-xs text-rose-900 dark:text-rose-200 font-medium">
                        <strong className="text-rose-700 dark:text-rose-400 font-bold block mb-0.5">Front-End Contribution:</strong>
                        {project.contribution}
                      </div>
                    )}

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies Tag List */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-rose-50/80 dark:bg-slate-800 text-rose-700 dark:text-rose-300 border border-rose-100 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 flex items-center gap-3">
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-rose-600 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 dark:hover:bg-rose-500 transition-all shadow-sm"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4 text-rose-300 dark:text-rose-100" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm border border-rose-200 dark:border-slate-700 hover:bg-rose-50 dark:hover:bg-slate-700 transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                    Code
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
