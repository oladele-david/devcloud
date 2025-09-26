import React from 'react';
import { useTranslation } from 'react-i18next';

type IndustryCard = {
  key: string;
  title: string;
  description: string;
  image: string;
  span?: string; // tailwind col/row spans for bento effects
};

const industries: IndustryCard[] = [
  {
    key: 'ecommerce',
    title: 'portfolio.industries.items.ecommerce.title',
    description:
      'portfolio.industries.items.ecommerce.description',
    image: '/portfolio/ecommerce.png',
    span: 'md:col-span-2',
  },
  {
    key: 'saas',
    title: 'portfolio.industries.items.saas.title',
    description:
      'portfolio.industries.items.saas.description',
    image: '/portfolio/saas.png',
  },
  {
    key: 'financial',
    title: 'portfolio.industries.items.financial.title',
    description:
      'portfolio.industries.items.financial.description',
    image: '/portfolio/financial.png',
  },
  {
    key: 'media',
    title: 'portfolio.industries.items.media.title',
    description:
      'portfolio.industries.items.media.description',
    image: '/portfolio/media.png',
    span: 'md:row-span-2',
  },
  {
    key: 'manufacturing',
    title: 'portfolio.industries.items.manufacturing.title',
    description:
      'portfolio.industries.items.manufacturing.description',
    image: '/portfolio/manufacturing.png',
  },
  {
    key: 'healthcare',
    title: 'portfolio.industries.items.healthcare.title',
    description:
      'portfolio.industries.items.healthcare.description',
    image: '/portfolio/healthcare.png',
  },
];

const IndustriesBento: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
            {t('portfolio.industries.title', 'Industries We Serve')}
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            {t(
              'portfolio.industries.subtitle',
              'We partner across sectors to deliver reliable platforms that balance speed, reliability, and cost.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {industries.map((card, index) => {
            const spanClass = (index === 0 || index === 5) ? 'md:col-span-2' : '';
            const iconSize = (index === 0 || index === 5) ? 'h-28 sm:h-32 md:h-44' : 'h-20 sm:h-24 md:h-28';
            return (
              <article
                key={card.key}
                className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer h-72 sm:h-80 md:h-96 ${spanClass} ${card.span || ''}`.trim()}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-brand-secondary-100" />
                <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-dark font-display">
                      {t(card.title, {
                        defaultValue: (
                          card.key === 'ecommerce' ? 'E-commerce & Retail' :
                          card.key === 'saas' ? 'SaaS & Technology' :
                          card.key === 'financial' ? 'Financial Services' :
                          card.key === 'media' ? 'Media & Entertainment' :
                          card.key === 'manufacturing' ? 'Manufacturing' :
                          'Healthcare & Life Sciences'
                        )
                      })}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-md">
                      {t(card.description, {
                        defaultValue: (
                          card.key === 'ecommerce'
                            ? 'High-conversion storefronts and scalable platforms, optimized for traffic peaks, secure payments, and fast global delivery.'
                            : card.key === 'saas'
                            ? 'Modern CI/CD, multi-tenant architectures, and usage-based cost control so your teams ship faster with confidence.'
                            : card.key === 'financial'
                            ? 'Compliance-first cloud with robust security baselines, auditability, and resilient services for always-on operations.'
                            : card.key === 'media'
                            ? 'Streaming-ready delivery, CDN optimization, and pipelines tuned for rich media at global scale.'
                            : card.key === 'manufacturing'
                            ? 'Reliable platforms for supply chain visibility, analytics, and IoT workloads that scale with production needs.'
                            : 'Privacy-by-design systems, secure data pipelines, and dependable uptime for patient-centric experiences.'
                        )
                      })}
                    </p>
                    <div className="w-8 sm:w-10 h-1 bg-brand-accent rounded-full mt-2 transition-all duration-300 group-hover:w-16" />
                  </div>
                  <div className="mt-6 w-full flex justify-center items-end">
                    <img src={card.image} alt={card.title} className={`${iconSize} object-contain`} loading="lazy" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesBento;


