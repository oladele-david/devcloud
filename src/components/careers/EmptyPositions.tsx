import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HugeiconsIcon } from '@hugeicons/react';
import { Mail01Icon, LinkedinIcon, TwitterIcon, GithubIcon } from '@hugeicons/core-free-icons';

const EmptyPositions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Image */}
          <div className="mx-auto w-32 h-32 mb-8">
            <img 
              src="/brief-case.png" 
              alt="Briefcase" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            {t('careers.positions.empty.title', 'No Open Positions Right Now')}
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {t('careers.positions.empty.description', 'We\'re not actively hiring at the moment, but we\'re always interested in connecting with talented individuals who share our passion for cloud technology and innovation.')}
          </p>

          {/* Call to Action */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">
              {t('careers.positions.empty.cta.title', 'Stay Connected')}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">
              {t('careers.positions.empty.cta.description', 'Send us your resume and let us know what role you\'re interested in. We\'ll keep your information on file and reach out when we have matching opportunities.')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hr@devcloudpartners.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-accent text-white font-medium rounded-full hover:bg-brand-accent/90 transition-colors"
              >
                <HugeiconsIcon icon={Mail01Icon} size={20} className="mr-2" />
                {t('careers.positions.empty.cta.email', 'Send Your Resume')}
              </a>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-brand-accent text-brand-accent font-medium rounded-full hover:bg-brand-accent/5 transition-colors"
              >
                {t('careers.positions.empty.cta.contact', 'Get in Touch')}
              </Link>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6">
              {t('careers.positions.empty.footer', 'Follow us on social media to stay updated on new opportunities and company news.')}
            </p>
            
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/company/devcloud-partner/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 hover:bg-brand-accent/10 rounded-full flex items-center justify-center transition-colors group"
              >
                <HugeiconsIcon icon={LinkedinIcon} size={20} className="text-slate-600 group-hover:text-brand-accent" />
              </a>
              
              <a
                href="https://twitter.com/devcloudpartners"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 hover:bg-brand-accent/10 rounded-full flex items-center justify-center transition-colors group"
              >
                <HugeiconsIcon icon={TwitterIcon} size={20} className="text-slate-600 group-hover:text-brand-accent" />
              </a>
              
              <a
                href="https://github.com/devcloudpartners"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 hover:bg-brand-accent/10 rounded-full flex items-center justify-center transition-colors group"
              >
                <HugeiconsIcon icon={GithubIcon} size={20} className="text-slate-600 group-hover:text-brand-accent" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmptyPositions;
