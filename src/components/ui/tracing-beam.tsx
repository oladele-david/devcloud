"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  motion,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

type Phase = {
  id: string;
  title: string;
  duration?: string;
  summary?: string;
  activities?: string[];
  deliverables?: string[];
  focus?: string[];
};

export const TracingBeam = ({
  children,
  className,
  phases,
}: {
  children?: React.ReactNode;
  className?: string;
  phases?: Phase[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    const el = contentRef.current;
    const update = () => setSvgHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    },
  );

  const { t } = useTranslation();
  const hasPhases = Array.isArray(phases) && phases.length > 0;

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-4xl", className)}
    >
      <div className="absolute top-3 -left-4 md:-left-20 z-0 pointer-events-none">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="border-netural-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "#d2691e",
              borderColor: scrollYProgress.get() > 0 ? "white" : "#d2691e",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
         <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          className="ml-4 block"
          aria-hidden="true"
        >
           {/* keep the static baseline line (subtle grey) */}
           <motion.path
             d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
             fill="none"
             stroke="#9091A0"
             strokeOpacity="0.16"
             transition={{ duration: 10 }}
           />
           {/* scrolling beam in brand accent only */}
           <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
             transition={{ duration: 10 }}
           />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
               {/* Solid accent gradient fade only */}
               <stop stopColor="#d2691e" stopOpacity="0" />
               <stop stopColor="#d2691e" />
               <stop offset="1" stopColor="#d2691e" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef} className="relative z-10">
        {hasPhases ? (
          <div className="space-y-6 md:space-y-8">
            {phases!.map((p) => (
              <div key={p.id} className="rounded-2xl ring-1 ring-slate-200/70 bg-white p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-brand-primary">{p.title}</h3>
                    {p.duration ? (
                      <p className="mt-1 inline-flex items-center rounded-full border border-brand-accent/30 bg-brand-accent/10 px-2.5 py-0.5 text-xs font-medium text-brand-accent">{p.duration}</p>
                    ) : null}
                  </div>
                </div>
                {p.summary ? <p className="mt-3 text-slate-600">{p.summary}</p> : null}
                 <div className="mt-4 space-y-5">
                  {p.activities && p.activities.length ? (
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">{t('mvp_labels.activities', 'Key Activities')}</h4>
                      <ul className="mt-2 grid gap-x-4 gap-y-1 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))] text-sm text-slate-600 px-1">
                        {p.activities.map((a, i) => (<li key={i} className="list-disc list-inside pl-1 sm:pl-2 marker:text-slate-400">{a}</li>))}
                      </ul>
                    </div>
                  ) : null}
                  {p.deliverables && p.deliverables.length ? (
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">{t('mvp_labels.deliverables', 'Deliverables')}</h4>
                      <ul className="mt-2 grid gap-x-4 gap-y-1 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))] text-sm text-slate-600 px-1">
                        {p.deliverables.map((d, i) => (<li key={i} className="list-disc list-inside pl-1 sm:pl-2 marker:text-slate-400">{d}</li>))}
                      </ul>
                    </div>
                  ) : null}
                  {p.focus && p.focus.length ? (
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">{t('mvp_labels.focus', 'Key Focus Areas')}</h4>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {p.focus.map((f, i) => (
                          <span key={i} className="inline-flex items-center rounded-full border border-brand-primary/20 bg-brand-primary/5 px-2 py-0.5 text-xs text-brand-primary">{f}</span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        ) : (
          children
        )}
      </div>
    </motion.div>
  );
};
