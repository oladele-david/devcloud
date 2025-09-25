import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyStack from '../components/about/story/StickyStack';
import { Philosophy } from '../components/about/story/Philosophy';
import { Values } from '../components/about/story/Values';
import { MissionVision } from '../components/about/story/MissionVision';
import Team from '../components/about/story/Team';

const Section: React.FC<{
  eyebrow?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean;
}> = ({ eyebrow, title, description, imageSrc, imageAlt, reverse }) => (
  <div className="rounded-3xl bg-white ring-1 ring-slate-200/60 shadow-sm overflow-hidden">
    <div className={`grid md:grid-cols-2 items-stretch` + (reverse ? ' md:[&>div:first-child]:order-2' : '')}>
      <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center gap-3 md:gap-4">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">{eyebrow}</p>
        ) : null}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{title}</h3>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">{description}</p>
      </div>
      <div className="relative">
        <div className="h-full w-full">
          <img src={imageSrc} alt={imageAlt || title} className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
);

const AboutStory: React.FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    // Register plugin safely (types don't expose gsap.ScrollTrigger directly)
    const g = gsap as unknown as { ScrollTrigger?: typeof ScrollTrigger; registerPlugin: (...args: unknown[]) => void };
    if (!g.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }
    const elements = gsap.utils.toArray<HTMLElement>('.animate-on-scroll');
    elements.forEach((el, idx) => {
      gsap.fromTo(el, { autoAlpha: 0, y: 60, scale: 0.98 }, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        delay: idx * 0.05,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'bottom 50%',
          scrub: false,
          toggleActions: 'play none none reverse',
        }
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  type Section = { eyebrow?: string; title: string; description: string; imageSrc: string; reverse?: boolean };
  const raw = t('about.story.sections', { returnObjects: true }) as unknown;
  const normalized: Section[] | undefined = Array.isArray(raw)
    ? (raw as Section[])
    : raw && typeof raw === 'object'
    ? Object.values(raw as Record<string, Section>)
    : undefined;
  const items = (normalized)?.map((s: Section) => ({
    eyebrow: s.eyebrow,
    title: s.title,
    description: s.description,
    imageSrc: s.imageSrc,
    reverse: s.reverse,
  })) || [
    {
      eyebrow: 'Founded in 2025',
      title: 'How DevCloud Partners came to be',
      description:
        'DevCloud Partners was born in 2025 with a simple but powerful conviction: the cloud should be a driver of growth, not a financial burden.',
      imageSrc: '/team/team1.jpg',
      reverse: false,
    },
    {
      eyebrow: 'Identifying the Problem',
      title: 'Cloud investments without expected efficiency',
      description:
        'After years working in DevOps, FinOps and technology consulting, we saw firsthand how many companies invested heavily in the cloud without achieving the efficiency they expected. Rising bills, oversized infrastructures and a lack of transparency had become the norm.',
      imageSrc: '/team/team2.jpg',
      reverse: true,
    },
    {
      eyebrow: 'Building the Solution',
      title: 'Transparent, results-driven, and human',
      description:
        "That's why we decided to build something different: a transparent, results-driven and deeply human service, born in the Canary Islands with a global vision. We want to show that from the islands we can deliver world-class cloud solutions, creating real value for businesses and opportunities for people.",
      imageSrc: '/team/team3.jpg',
      reverse: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1 pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 sm:mb-6 md:mb-8 text-center animate-on-scroll">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">{t('about.story.title', 'Our Story')}</h1>
            <p className="mt-1.5 text-slate-600 max-w-2xl mx-auto">{t('about.story.subtitle', 'How DevCloud Partners came to be')}</p>
          </div>

          <div className="animate-on-scroll">
          <StickyStack items={items.map((it, idx) => ({
            id: `${idx}-${it.title}`,
            eyebrow: it.eyebrow,
            title: it.title,
            description: it.description,
            imageSrc: idx === 0 ? '/story/founded.png' : idx === 1 ? '/story/problem.png' : idx === 2 ? '/story/solution.png' : it.imageSrc,
            reverse: it.reverse,
          }))} />
          </div>
          <div className="animate-on-scroll">
            <Philosophy />
          </div>
          <div className="animate-on-scroll">
            <Values />
          </div>
          <div className="my-10 sm:my-12 md:my-14 animate-on-scroll">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          </div>
          <div className="animate-on-scroll">
            <MissionVision />
          </div>
          <div className="animate-on-scroll">
            <Team />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutStory;


