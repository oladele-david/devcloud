import { useEffect, useRef, useState } from "react";

interface StatItem {
  label: string;
  suffix?: string;
  value: number;
  decimals?: number;
}

const useCountUp = (end: number, durationMs = 1200, decimals = 0) => {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const startTime = performance.now();
            const animate = (t: number) => {
              const elapsed = t - startTime;
              const progress = Math.min(1, elapsed / durationMs);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(parseFloat((end * eased).toFixed(decimals)));
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [end, durationMs, decimals]);

  return { ref, value } as const;
};

const StatCard = ({ item }: { item: StatItem }) => {
  const { ref, value } = useCountUp(item.value, 1300, item.decimals ?? 0);
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-brand-accent tracking-tight" ref={ref}>
        {value}
        {item.suffix || ""}
      </div>
      <div className="mt-2 text-sm md:text-base text-gray-700">{item.label}</div>
    </div>
  );
};

const StatsSection = () => {
  const stats: StatItem[] = [
    { value: 40, suffix: "%", label: "Average cost reduction", decimals: 0 },
    { value: 99.9, suffix: "%", label: "Uptime with SLA", decimals: 1 },
    { value: 50, suffix: "+", label: "Successful migrations", decimals: 0 },
    { value: 24, suffix: "/7", label: "Expert support", decimals: 0 },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">Proven Results</h3>
          <p className="text-gray-600 mt-2">Clear outcomes from efficiency to reliability.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <StatCard key={i} item={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
