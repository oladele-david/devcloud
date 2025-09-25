import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const MissionVision: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {/* About column */}
          <div className="md:col-span-1 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">{t('mv.lead.title', 'How We Deliver')}</h2>
              <p className="mt-2 text-slate-600">
                {t('mv.lead.body', 'Outcomes first: assess, design, implement, operate. We align on goals, build the right platform, and keep improving — balancing speed, reliability and cost.')}
              </p>
            </div>
            <div className="mt-4">
              <Link to="/about/methodology" className="inline-flex items-center px-4 py-2 rounded-full bg-brand-accent text-white hover:opacity-90">{t('mv.lead.cta', 'See Our Methodology')}</Link>
            </div>
          </div>

          {/* Vision card */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white ring-1 ring-brand-accent/20">
            <div className="flex items-center gap-3">
              <img src="/m&v/vision.png" alt="Vision" className="w-10 h-10 rounded-xl object-contain bg-brand-accent/10" />
              <h3 className="text-2xl sm:text-3xl font-semibold text-brand-primary">{t('mv.vision.title', 'Vision')}</h3>
            </div>
            <p className="mt-3 text-slate-600">
              {t('mv.vision.body', 'Lead in cloud efficiency by delivering innovative, sustainable and cost‑effective solutions that set a new standard for transparency and reliability.')}
            </p>
          </div>

          {/* Mission card */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white ring-1 ring-brand-accent/20">
            <div className="flex items-center gap-3">
              <img src="/m&v/mission.png" alt="Mission" className="w-10 h-10 rounded-xl object-contain bg-brand-accent/10" />
              <h3 className="text-2xl sm:text-3xl font-semibold text-brand-primary">{t('mv.mission.title', 'Mission')}</h3>
            </div>
            <p className="mt-3 text-slate-600">
              {t('mv.mission.body', 'Leverage our expertise, resources and technology to design, operate and optimize cloud platforms that exceed expectations on cost, performance and uptime — enabling customers to focus on innovation.')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


