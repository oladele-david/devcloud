import { useTranslation } from "react-i18next";

export const Benefits = () => {
	const { t } = useTranslation();
	const items = t("services.benefits.items", { returnObjects: true }) as { title: string; desc: string }[];
	return (
		<section className="py-6 md:py-10 lg:py-12">
			<h3 className="font-display text-2xl md:text-3xl font-semibold text-brand.dark mb-6">{t("services.benefits.title")}</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{items.map((it, i) => (
					<div key={i} className="rounded-2xl bg-brand.light p-5">
						<h4 className="font-semibold text-brand.dark mb-1">{it.title}</h4>
						<p className="text-sm text-brand.secondary/80">{it.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
};
