import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  HomeIcon, 
  BookOpenIcon, 
  UserGroupIcon, 
  Globe02Icon, 
  Shield01Icon, 
  ZapIcon,
  ArrowLeft01Icon, 
  ArrowRight01Icon 
} from '@hugeicons/core-free-icons';

export const WorkCulture: React.FC = () => {
  const { t } = useTranslation();
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);
  
  const items = [
    { 
      title: t('careers.remote.title', 'Remote-First Environment'), 
      desc: t('careers.remote.desc', 'Work from anywhere with flexible schedules. True work-life balance without physical borders.'), 
      Icon: HomeIcon 
    },
    { 
      title: t('careers.learning.title', 'Continuous Learning'), 
      desc: t('careers.learning.desc', 'Invest in training, certifications, and professional growth. Master the latest in Cloud, DevOps, and FinOps.'), 
      Icon: BookOpenIcon 
    },
    { 
      title: t('careers.inclusive.title', 'Inclusive & Collaborative'), 
      desc: t('careers.inclusive.desc', 'Diverse ideas and experiences. Every voice matters in building solutions together.'), 
      Icon: UserGroupIcon 
    },
    { 
      title: t('careers.local.title', 'Local Talent, Global Reach'), 
      desc: t('careers.local.desc', 'Proud of our Canary Islands roots while connecting with international clients worldwide.'), 
      Icon: Globe02Icon 
    },
    { 
      title: t('careers.transparency.title', 'Transparency & Recognition'), 
      desc: t('careers.transparency.desc', 'Open communication, honest feedback, and celebration of achievements. See the real impact of your work.'), 
      Icon: Shield01Icon 
    },
    { 
      title: t('careers.innovation.title', 'Innovation & Impact'), 
      desc: t('careers.innovation.desc', 'Freedom to propose ideas, experiment, and leave your mark on transformative cloud solutions.'), 
      Icon: ZapIcon 
    },
  ];

  // Measure card width (including gap) to compute exact page steps
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current; 
      if (!track) return; 
      const first = track.firstElementChild as HTMLElement | null; 
      if (!first) return; 
      const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '20'); 
      setCardWidth(first.getBoundingClientRect().width + (isNaN(gap) ? 20 : gap));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Sync active index on scroll with clamping
  useEffect(() => {
    const el = viewportRef.current; 
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / cardWidth);
      const clamped = Math.max(0, Math.min(idx, items.length - 1));
      setActive(clamped);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [cardWidth, items.length]);

  const scrollToIndex = (i: number) => {
    const el = viewportRef.current; 
    if (!el) return; 
    const clamped = Math.max(0, Math.min(i, items.length - 1)); 
    el.scrollTo({ left: clamped * cardWidth, behavior: 'smooth' }); 
    setActive(clamped);
  };

  return (
    <section className="py-10 sm:py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
            {t('careers.culture.heading', 'Our Work Culture')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            {t('careers.culture.subheading', 'At DevCloud Partners, we believe that technology doesn\'t exist without the people who make it possible. Our work culture is the heartbeat of everything we do.')}
          </p>
        </div>

        <div className="relative">
          {/* Arrows */}
          <div className="hidden sm:flex absolute -top-14 right-0 gap-3 z-10">
            <button 
              onClick={() => scrollToIndex(active - 1)} 
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-brand-accent flex items-center justify-center transition-colors group"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} size={18} className="text-gray-600 group-hover:text-white" />
              <span className="sr-only">Prev</span>
            </button>
            <button 
              onClick={() => scrollToIndex(active + 1)} 
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-brand-accent flex items-center justify-center transition-colors group"
            >
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} className="text-gray-600 group-hover:text-white" />
              <span className="sr-only">Next</span>
            </button>
          </div>

          <div 
            ref={viewportRef} 
            className="overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <div
              ref={trackRef}
              className="flex gap-5 snap-x snap-mandatory scroll-smooth"
              id="work-culture-track"
            >
              {items.map((it, idx) => (
                <div 
                  key={idx} 
                  className={`snap-center min-w-[280px] sm:min-w-[320px] h-80 sm:h-96 rounded-3xl p-6 sm:p-8 ${
                    idx % 2 === 0 
                      ? 'bg-brand-accent text-white' 
                      : 'bg-brand-accent/15 ring-1 ring-brand-accent/20'
                  } relative overflow-hidden`}
                > 
                  <div className={`absolute top-5 left-5 rounded-xl ${
                    idx % 2 === 0 
                      ? 'text-white/50' 
                      : 'text-brand-accent'
                  } w-12 h-12 flex items-center justify-center`}>
                    <HugeiconsIcon icon={it.Icon} size={36} />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className={`text-xl font-semibold ${
                      idx % 2 === 0 
                        ? 'text-white' 
                        : 'text-brand-accent'
                    }`}>
                      {it.title}
                    </h3>
                    <p className={`${
                      idx % 2 === 0 
                        ? 'text-white/90' 
                        : 'text-brand-accent'
                    } mt-2`}>
                      {it.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile dots with click-to-snap */}
          <div className="mt-4 flex justify-center gap-2 sm:hidden">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to card ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  active === i 
                    ? 'w-6 bg-brand-accent' 
                    : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
