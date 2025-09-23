import { useTranslation } from "react-i18next";

export const ServicesCTA = () => {
	const { t } = useTranslation();
	return (
		<section className="py-12 md:py-16 lg:py-20">
			<div className="rounded-3xl bg-brand.dark text-white p-6 md:p-8 lg:p-10">
				<div className="max-w-3xl">
					<h3 className="font-display text-2xl md:text-3xl font-semibold mb-2">{t("services.cta_section.title")}</h3>
					<p className="text-white/80 mb-5">{t("services.cta_section.desc")}</p>
					<div className="flex flex-wrap gap-3">
						<button className="inline-flex items-center rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-accent-700">
							{t("services.cta_section.primary")}
						</button>
						<button className="inline-flex items-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20">
							{t("services.cta_section.secondary")}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
