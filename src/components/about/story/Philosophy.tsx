import React from 'react';
import { useTranslation } from 'react-i18next';

export const Philosophy: React.FC = () => {
  const { t } = useTranslation();
  const cards = [
    {
      icon: '/philosophy/human.png',
      title: t('about.story.philosophy.human_title', 'Human-Centered Approach'),
      desc: t('about.story.philosophy.human_desc', 'We work side by side with our clients, embedding ourselves in their teams, listening to their needs and designing tailor-made solutions.'),
    },
    {
      icon: '/choose/collaboration.png',
      title: t('about.story.philosophy.transparent_title', 'Transparent Partnership'),
      desc: t('about.story.philosophy.transparent_desc', 'No risks or hidden costs: only clear, measurable and shared results. Our commitment is twofold: to our clients and to our team.'),
    },
    {
      icon: '/philosophy/bulb.png',
      title: t('about.story.philosophy.innovation_title', 'Innovation & Impact'),
      desc: t('about.story.philosophy.innovation_desc', 'In every project we aim for more than optimizing servers or invoices: we strive to build trust, drive innovation and create a lasting positive impact.'),
    },
  ];

  return (
    <section className="py-8 sm:py-9 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">{t('about.story.philosophy.heading', 'Our Philosophy')}</h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">{t('about.story.philosophy.subheading', 'Technology as a tool for growth')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div key={i} className="rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-sm p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden">
                <img src={c.icon} alt="" className="w-full h-full object-contain" loading="lazy" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
              <p className="text-slate-600">{c.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-slate-600 max-w-3xl mx-auto">{t('about.story.philosophy.footer', 'Our commitment is twofold: to our clients, helping them free up resources to innovate, and to our team, fostering local talent and building a technology hub from the Canary Islands to the world.')}</p>
      </div>
    </section>
  );
};


