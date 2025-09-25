import React, { useEffect, useMemo, useRef } from 'react';
import './StickyStack.css';

type StickyItem = {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
};

type StickyStackProps = {
  items: StickyItem[];
};

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export const StickyStack: React.FC<StickyStackProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const setRef = (el: HTMLDivElement | null, i: number) => {
    if (el) itemsRef.current[i] = el;
  };

  useEffect(() => {
    const onScroll = () => {
      // Do not apply transforms to sticky elements; let CSS handle sticking/overlay
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [items.length]);

  const content = useMemo(() => items, [items]);

  return (
    <div ref={containerRef} className="sticky-stack">
      <div className="sticky-stack__spacer" />
      {content.map((it, idx) => (
        <div key={it.id} className="sticky-stack__item">
          <div ref={(el) => setRef(el, idx)} className="sticky-card">
            <div className={`sticky-grid ${it.reverse ? 'reverse' : ''}`}>
              <div className="p-3 sm:p-4 md:p-5 flex flex-col justify-center gap-3 md:gap-4">
                {it.eyebrow ? (
                  <span className="sticky-eyebrow inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider text-brand-accent border border-brand-accent/30 bg-brand-accent/5">
                    {it.eyebrow}
                  </span>
                ) : null}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{it.title}</h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">{it.description}</p>
              </div>
              <div className="sticky-media">
                <div className="sticky-media-box" style={{ backgroundImage: `url(${it.imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="sticky-stack__end" />
    </div>
  );
};

export default StickyStack;


