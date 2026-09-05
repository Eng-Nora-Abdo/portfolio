import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { certificatesData } from '../../data/portfolioData';

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-12 md:py-16 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Certificate"
          title="Certification"
          subtitle="Professional certification in modern front-end development."
        />

        <div className="max-w-3xl mx-auto">
          {certificatesData.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 border border-rose-100/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-rose-100/80 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 border border-rose-200/60 dark:border-rose-900/50">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
                    {cert.description}
                  </p>
                  {cert.credentialUrl && cert.credentialUrl !== '#' && (
                    <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline transition-colors"
                      >
                        Verify Credential
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
