import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';

type Step = { t: string; s: string };

export const FlowCarousel: React.FC = () => {
  const { t } = useTranslation();
  const steps: Step[] = [
    { t: t('mvp.flow.step1.t', 'Initial Consultation'), s: t('mvp.flow.step1.s', 'Free assessment call') },
    { t: t('mvp.flow.step2.t', 'Detailed Assessment'), s: t('mvp.flow.step2.s', 'Comprehensive infrastructure review') },
    { t: t('mvp.flow.step3.t', 'Strategy Development'), s: t('mvp.flow.step3.s', 'Custom optimization plan') },
    { t: t('mvp.flow.step4.t', 'Implementation'), s: t('mvp.flow.step4.s', 'Phased execution with monitoring') },
    { t: t('mvp.flow.step5.t', 'Optimization'), s: t('mvp.flow.step5.s', 'Continuous improvement') },
  ];

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
      const clamped = Math.max(0, Math.min(idx, steps.length - 1));
      setActive(clamped);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [cardWidth, steps.length]);

  const scrollToIndex = (i: number) => {
    const el = viewportRef.current; if (!el) return; const clamped = Math.max(0, Math.min(i, steps.length - 1)); el.scrollTo({ left: clamped * cardWidth, behavior: 'smooth' }); setActive(clamped);
  };

  return (
    <div className="relative">
      {/* Bento grid 3x2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {steps.map((step, idx) => (
          <div key={idx} className="rounded-2xl border border-brand-primary/15 bg-white p-5 flex flex-col">
            <div className="flex items-center gap-2 text-brand-accent font-semibold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-brand-accent text-white text-sm">{idx + 1}</span>
              <span className="text-base md:text-lg">{step.t}</span>
            </div>
            <p className="mt-2 text-sm text-slate-600 flex-1">{step.s}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowCarousel;


