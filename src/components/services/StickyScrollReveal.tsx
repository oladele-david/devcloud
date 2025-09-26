import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";

export type StickyItem = {
	id: "finops" | "devops" | "architecture" | "managed" | "software";
	titleKey: string;
	descKey: string;
	image?: string;
};

export const StickyScrollReveal = () => {
	const { t } = useTranslation();
	const items: StickyItem[] = useMemo(
		() => [
			{ id: "finops", titleKey: "services.finops_title", descKey: "services.finops_desc", image: "/services/cloud.png" },
			{ id: "devops", titleKey: "services.devops_title", descKey: "services.devops_desc", image: "/services/devops.png" },
			{ id: "architecture", titleKey: "services.arch_title", descKey: "services.arch_desc", image: "/services/architecture.png" },
			{ id: "managed", titleKey: "services.mng_title", descKey: "services.mng_desc", image: "/services/managed.png" },
			{ id: "software", titleKey: "services.eng_title", descKey: "services.eng_desc", image: "/services/engineering.png" },
		],
		[t]
	);

	const [active, setActive] = useState(0);
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const idxAttr = entry.target.getAttribute("data-index");
					if (!idxAttr) return;
					const index = parseInt(idxAttr, 10);
					if (entry.isIntersecting) {
						setActive(index);
					}
				});
			},
			{ root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0.01 }
		);

		panelsRef.current.forEach((el) => {
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);

	// GSAP fade-in for panels
	useEffect(() => {
		if (!sectionRef.current) return;
		const elements = gsap.utils.toArray<HTMLElement>(sectionRef.current.querySelectorAll("[data-anim='panel']"));
		gsap.set(elements, { opacity: 0, y: 12 });
		gsap.to(elements, { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "power2.out" });
	}, []);

	const toDetailKey = (id: StickyItem["id"]) => {
		if (id === "architecture") return "arch";
		if (id === "managed") return "mng";
		if (id === "software") return "eng";
		return id; // finops/devops
	};

	return (
		<section ref={sectionRef} className="relative">
			<div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
				{/* Sticky left column */}
				<div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
					<div className="space-y-3">
						<span className="inline-block rounded-full bg-brand.accent/10 text-brand.accent px-3 py-1 text-xs font-medium">
							{t("services.sticky.badge")}
						</span>
						<h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-brand.dark">
							{t("services.sticky.title")}
						</h2>
						<p className="text-base md:text-lg text-brand.secondary/80">
							{t("services.sticky.subtitle")}
						</p>
						<div className="hidden lg:flex gap-2 pt-1">
							{items.map((_, i) => (
								<button
									key={i}
									aria-label={`Go to section ${i + 1}`}
									className={`h-1.5 w-6 rounded-full transition-colors ${i === active ? "bg-brand-accent" : "bg-brand-accent/30"}`}
									onClick={() => {
										panelsRef.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
									}}
								/>
							))}
						</div>
					</div>
				</div>

				{/* Right scroll column */}
				<div className="lg:col-span-7 space-y-0">
					{items.map((item, i) => {
						const detailKey = toDetailKey(item.id);
						const features = t(`services.detail.${detailKey}.features`, { returnObjects: true }) as string[];
						const benefits = t(`services.detail.${detailKey}.benefits`, { returnObjects: true }) as string[];
						return (
							<div key={item.id} className="py-8 border-t first:border-t-0 border-gray-100">
								<div
									ref={(el) => (panelsRef.current[i] = el)}
									data-index={i}
									data-anim="panel"
									className="group grid grid-cols-1 gap-5 md:grid-cols-5"
								>
									<div className="md:col-span-3 order-2 md:order-1 space-y-4">
										<div>
											<h3 className="font-display text-2xl md:text-3xl font-semibold text-brand.dark mb-2">{t(item.titleKey)}</h3>
											<p className="text-brand.secondary/80 text-sm md:text-base">{t(item.descKey)}</p>
										</div>
										{/* Features */}
										<div>
											<h4 className="text-sm font-semibold text-brand.dark mb-2">{t("services.features.title")}</h4>
											<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
												{features.map((f, idx) => (
													<li key={idx} className="text-sm text-brand.secondary/80 before:content-['▸'] before:mr-2 before:text-brand-accent">{f}</li>
												))}
											</ul>
										</div>
										{/* Technologies */}
										<div>
											<h4 className="text-sm font-semibold text-brand.dark mb-2">{t("services.technologies.title")}</h4>
											<div className="flex flex-wrap gap-2">
												{benefits.map((tech, idx) => (
													<span key={idx} className="inline-flex items-center rounded-full bg-brand-accent/10 text-brand-accent px-3 py-1 text-xs font-medium">{tech}</span>
												))}
											</div>
										</div>
									</div>
									<div className="md:col-span-2 order-1 md:order-2">
										<div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand.light">
											{item.image ? (
												<img src={item.image} alt={t(item.titleKey)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
											) : (
												<div className="absolute inset-0 grid place-items-center text-brand.secondary/60">{t("services.sticky.placeholder")}</div>
											)}
											<div className={`pointer-events-none absolute inset-0 ring-1 transition-opacity ${i === active ? "ring-brand-accent/50" : "ring-transparent"}`} />
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
