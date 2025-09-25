import React from 'react';
import { useTranslation } from 'react-i18next';
import { HugeiconsIcon } from '@hugeicons/react';
import { BriefcaseIcon, Mail01Icon } from '@hugeicons/core-free-icons';

export const EmptyPositions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Icon */}
          <div className="mx-auto w-24 h-24 bg-brand-accent/10 rounded-full flex items-center justify-center mb-8">
            <HugeiconsIcon icon={BriefcaseIcon} size={48} className="text-brand-accent" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {t('careers.positions.empty.title', 'No Open Positions Right Now')}
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            {t('careers.positions.empty.description', 'We\'re not actively hiring at the moment, but we\'re always interested in connecting with talented individuals who share our passion for cloud technology and innovation.')}
          </p>

          {/* Call to Action */}
          <div className="bg-slate-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              {t('careers.positions.empty.cta.title', 'Stay Connected')}
            </h3>
            <p className="text-slate-600 mb-6">
              {t('careers.positions.empty.cta.description', 'Send us your resume and let us know what role you\'re interested in. We\'ll keep your information on file and reach out when we have matching opportunities.')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@devcloudpartners.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-accent text-white font-medium rounded-lg hover:bg-brand-accent/90 transition-colors"
              >
                <HugeiconsIcon icon={Mail01Icon} size={20} className="mr-2" />
                {t('careers.positions.empty.cta.email', 'Send Your Resume')}
              </a>
              
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-brand-accent text-brand-accent font-medium rounded-lg hover:bg-brand-accent/5 transition-colors"
              >
                {t('careers.positions.empty.cta.contact', 'Get in Touch')}
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              {t('careers.positions.empty.footer', 'Follow us on social media to stay updated on new opportunities and company news.')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
