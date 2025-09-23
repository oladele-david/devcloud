import { HugeiconsIcon } from "@hugeicons/react";
import { StrategyIcon, ArrowDown01Icon, MenuIcon } from "@hugeicons/core-free-icons";
import { useTranslation } from "react-i18next";

const iconMap = [StrategyIcon, ArrowDown01Icon, MenuIcon, ArrowDown01Icon];

export const Features = () => {
	const { t } = useTranslation();
	const items = t("services.features.items", { returnObjects: true }) as { title: string; desc: string }[];
	return (
		<section className="py-12 md:py-16 lg:py-20">
			<h3 className="font-display text-2xl md:text-3xl font-semibold text-brand.dark mb-6">{t("services.features.title")}</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
				{items.map((it, i) => (
					<div key={i} className="rounded-2xl border border-gray-100 p-5 hover:shadow-sm transition-shadow">
						<div className="flex items-start gap-3">
							<div className="shrink-0 rounded-xl bg-brand-accent/10 p-2 text-brand-accent">
								<HugeiconsIcon icon={iconMap[i % iconMap.length]} size={20} />
							</div>
							<div>
								<h4 className="font-semibold text-brand.dark mb-1">{it.title}</h4>
								<p className="text-sm text-brand.secondary/80">{it.desc}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
