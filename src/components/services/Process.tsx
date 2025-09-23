import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";

export const Process = () => {
	const { t } = useTranslation();
	const rootRef = useRef<HTMLDivElement | null>(null);
	const trackRef = useRef<HTMLDivElement | null>(null);
	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		if (!rootRef.current) return;
		const cards = rootRef.current.querySelectorAll("[data-anim='card']");
		const stats = rootRef.current.querySelectorAll("[data-anim='stat']");
		gsap.set(cards, { opacity: 0, y: 16 });
		gsap.to(cards, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" });
		gsap.set(stats, { opacity: 0, y: 10 });
		gsap.to(stats, { opacity: 1, y: 0, duration: 0.4, delay: 0.2, stagger: 0.08, ease: "power2.out" });
	}, []);

	const steps = t("services.process.steps", { returnObjects: true }) as { title: string; desc: string }[];
	const images = ["/work/assess.png", "/work/design.png", "/work/implement.png", "/work/operate.png"];

	// Mobile scroll index sync using child offsets to account for gap and width
	useEffect(() => {
		const el = trackRef.current;
		if (!el) return;
		const onScroll = () => {
			const children = Array.from(el.children) as HTMLElement[];
			if (children.length < 2) return setActiveSlide(0);
			const step = children[1].offsetLeft - children[0].offsetLeft; // includes gap
			const idx = Math.round(el.scrollLeft / (step || children[0].offsetWidth));
			setActiveSlide(Math.max(0, Math.min(idx, children.length - 1)));
		};
		el.addEventListener("scroll", onScroll, { passive: true });
		return () => el.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<section ref={rootRef} className="py-10 md:py-14 lg:py-16">
			<div className="mb-6">
				<h3 className="font-display text-3xl md:text-4xl font-semibold text-brand.dark">{t("services.process.title")}</h3>
				<p className="text-brand.secondary/80 mt-1 text-sm md:text-base max-w-2xl">{t("services.sticky.subtitle")}</p>
			</div>

			{/* Mobile horizontal scroll */}
			<div
				ref={trackRef}
				className="flex gap-3 overflow-x-auto snap-x snap-mandatory lg:hidden pl-5 pr-4 -mr-4"
				style={{ scrollbarWidth: "none" as any }}
			>
				{steps.slice(0, 4).map((s, i) => (
					<div
						key={i}
						data-anim="card"
						className={`relative shrink-0 w-[85%] snap-start rounded-2xl p-4 text-white overflow-hidden ${
							i === 0 ? "bg-brand-primary" : i === 1 ? "bg-brand-accent" : i === 2 ? "bg-brand-secondary" : "bg-brand-dark"
						}`}
					>
						{/* top-left 3D icon */}
						<img src={images[i]} alt={s.title} className="pointer-events-none absolute left-3 top-3 h-10 w-auto object-contain opacity-95" />
						<h4 className="mt-12 text-base font-semibold mb-1">{s.title}</h4>
						<p className="text-white/85 text-sm leading-relaxed pr-2 max-w-[32ch]">{s.desc}</p>
					</div>
				))}
			</div>
			{/* Dots */}
			<div className="lg:hidden flex justify-center gap-2 mt-3">
				{steps.slice(0, 4).map((_, i) => (
					<button
						key={i}
						aria-label={`Go to slide ${i + 1}`}
						className={`h-1.5 w-6 rounded-full ${i === activeSlide ? "bg-brand-accent" : "bg-brand-accent/30"}`}
						onClick={() => {
							const el = trackRef.current;
							if (!el) return;
							const child = el.children[i] as HTMLElement | undefined;
							if (child) el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
						}}
					/>
				))}
			</div>

			{/* Desktop grid */}
			<div className="hidden lg:grid grid-cols-4 gap-6 mt-6">
				{steps.slice(0, 4).map((s, i) => (
					<div
						key={i}
						data-anim="card"
						className={`relative rounded-3xl p-5 text-white overflow-hidden ${
							i === 0 ? "bg-brand-primary" : i === 1 ? "bg-brand-accent" : i === 2 ? "bg-brand-secondary" : "bg-brand-dark"
						}`}
					>
						<img src={images[i]} alt={s.title} className="pointer-events-none absolute left-3 top-3 h-12 w-auto object-contain opacity-95" />
						<h4 className="mt-14 text-lg font-semibold mb-1">{s.title}</h4>
						<p className="text-white/85 text-sm leading-relaxed pr-2 md:pr-3 lg:pr-4">{s.desc}</p>
					</div>
				))}
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
				<div data-anim="stat" className="text-center">
					<p className="text-3xl md:text-4xl font-extrabold text-brand.dark">35%+</p>
					<p className="text-xs md:text-sm text-brand.secondary/80">{t("services.process.stats.a")}</p>
				</div>
				<div data-anim="stat" className="text-center">
					<p className="text-3xl md:text-4xl font-extrabold text-brand.dark">200+</p>
					<p className="text-xs md:text-sm text-brand.secondary/80">{t("services.process.stats.b")}</p>
				</div>
				<div data-anim="stat" className="text-center">
					<p className="text-3xl md:text-4xl font-extrabold text-brand.dark">99.95%</p>
					<p className="text-xs md:text-sm text-brand.secondary/80">{t("services.process.stats.c")}</p>
				</div>
				<div data-anim="stat" className="text-center">
					<p className="text-3xl md:text-4xl font-extrabold text-brand.dark">4</p>
					<p className="text-xs md:text-sm text-brand.secondary/80">{t("services.process.stats.d")}</p>
				</div>
			</div>
		</section>
	);
};
