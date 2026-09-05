import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { certificatesData } from '../../data/portfolioData';

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Credentials"
          title="Certificates & Specialized Learning"
          subtitle="Validated certifications confirming front-end competencies, React framework development, and web standards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-400 to-purple-500 text-white flex items-center justify-center shadow-md">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-semibold px-3 py-1 rounded-full bg-rose-50 dark:bg-slate-800 border border-rose-100 dark:border-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-rose-500" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-3">
                  {cert.issuer}
                </p>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 transition-colors pt-4 border-t border-rose-100 dark:border-slate-800"
                >
                  Verify Credential
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 pt-4 border-t border-rose-100 dark:border-slate-800">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  Verified Completion
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
