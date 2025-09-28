import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';

type Member = {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
};

export const Team: React.FC = () => {
  const { t } = useTranslation();
  const members: Member[] = (t('team.members', { returnObjects: true }) as Member[]) || [];

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current; if (!track) return; const first = track.firstElementChild as HTMLElement | null; if (!first) return; const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '20'); setCardWidth(first.getBoundingClientRect().width + (isNaN(gap) ? 20 : gap));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const el = viewportRef.current; if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / cardWidth);
      const clamped = Math.max(0, Math.min(idx, members.length - 1));
      setActive(clamped);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [cardWidth, members.length]);

  const scrollToIndex = (i: number) => {
    const el = viewportRef.current; if (!el) return; const clamped = Math.max(0, Math.min(i, members.length - 1)); el.scrollTo({ left: clamped * cardWidth, behavior: 'smooth' }); setActive(clamped);
  };

  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-8 text-center">
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">{t('team.title', 'Our team')}</h2>
          <p className="mt-2 text-slate-600 max-w-3xl mx-auto">{t('team.description', 'Meet the people driving our mission and values.')}</p>
        </div>

        <div className="relative">
          {/* Arrows - Hidden on desktop since we only have 3 members */}
          <div className="hidden sm:hidden absolute -top-14 right-0 gap-3 z-10">
            <button onClick={() => scrollToIndex(active - 1)} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-brand-accent flex items-center justify-center transition-colors group">
              <HugeiconsIcon icon={ArrowLeft01Icon} size={18} className="text-gray-600 group-hover:text-white" />
              <span className="sr-only">Prev</span>
            </button>
            <button onClick={() => scrollToIndex(active + 1)} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-brand-accent flex items-center justify-center transition-colors group">
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} className="text-gray-600 group-hover:text-white" />
              <span className="sr-only">Next</span>
            </button>
          </div>

          <div ref={viewportRef} className="overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div ref={trackRef} className="flex gap-5 snap-x snap-mandatory scroll-smooth">
              {members.map((m, i) => (
                <div key={i} className="snap-center min-w-[280px] sm:min-w-[320px] rounded-3xl overflow-hidden relative">
                  <img src={m.image} alt={m.name} className="w-full h-96 object-cover" loading="lazy" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium drop-shadow-sm">{m.name}</p>
                      <p className="text-sm text-white/80 drop-shadow-sm">{m.role}</p>
                    </div>
                    {m.linkedin ? (
                      <a href={m.linkedin} target="_blank" rel="noreferrer" aria-label={`${m.name} LinkedIn`} className="pointer-events-auto inline-flex w-9 h-9 items-center justify-center rounded-full bg-white/90 hover:bg-white shadow">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-brand-accent"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764s1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.336-.027-3.056-1.862-3.056-1.865 0-2.151 1.455-2.151 2.958v5.702h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.562 2.845-1.562 3.043 0 3.606 2.004 3.606 4.611v5.584z"/></svg>
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile dots */}
          <div className="mt-4 flex justify-center gap-2 sm:hidden">
            {members.map((_, i) => (
              <button key={i} aria-label={`Go to member ${i + 1}`} onClick={() => scrollToIndex(i)} className={`h-1.5 rounded-full transition-all ${active === i ? 'w-6 bg-brand-accent' : 'w-2 bg-gray-300'}`} />
            ))}
          </div>
        </div>

        <p className="mt-6 sm:mt-8 text-slate-600 text-center max-w-3xl mx-auto">{t('team.hiring')}</p>
      </div>
    </section>
  );
};

export default Team;
