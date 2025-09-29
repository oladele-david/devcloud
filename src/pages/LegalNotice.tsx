import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HugeiconsIcon } from '@hugeicons/react';
import { File01Icon, JusticeScale01Icon, Alert02Icon, CheckmarkCircle02Icon, ShieldIcon, UserGroupIcon } from '@hugeicons/core-free-icons';

export default function LegalNotice() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && heroRef.current) {
      const tl = gsap.timeline();
      tl.from(heroRef.current, { opacity: 0, y: 30, duration: 0.8, ease: "power2.out" })
        .from(containerRef.current.children, { opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.4");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-brand-accent/5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-brand-accent/10 rounded-2xl mb-4 sm:mb-6">
            <HugeiconsIcon icon={JusticeScale01Icon} size={24} className="text-brand-accent sm:w-8 sm:h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">
            {t('legalNotice.title')}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
            {t('legalNotice.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-500">
            <span>{t('legalNotice.lastUpdated')}</span>
            <span>•</span>
            <span>{t('legalNotice.effectiveDate')}</span>
            <span>•</span>
            <span>{t('legalNotice.version')}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={containerRef} className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                <span dangerouslySetInnerHTML={{ __html: t('legalNotice.introduction') }} />
              </p>
            </div>
          </div>

          {/* 1. Website Ownership */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              1. {t('legalNotice.ownership.title')}
            </h2>
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 lg:p-8">
              <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                <span dangerouslySetInnerHTML={{ __html: t('legalNotice.ownership.description') }} />
              </p>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{t('legalNotice.ownership.companyInfo')}:</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p><strong>{t('legalNotice.ownership.taxId')}:</strong> {t('legalNotice.ownership.taxIdValue')}</p>
                    <p><strong>{t('legalNotice.ownership.email')}:</strong> {t('legalNotice.ownership.emailValue')}</p>
                    <p><strong>{t('legalNotice.ownership.phone')}:</strong> {t('legalNotice.ownership.phoneValue')}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{t('legalNotice.ownership.address')}:</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>{t('legalNotice.ownership.addressValue')}</p>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mt-4 text-sm sm:text-base">
                {t('legalNotice.ownership.purpose')}
              </p>
            </div>
          </div>

          {/* 2. Terms of Use */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              2. {t('legalNotice.termsOfUse.title')}
            </h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {t('legalNotice.termsOfUse.description1')}
              </p>
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {t('legalNotice.termsOfUse.description2')}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {t('legalNotice.termsOfUse.description3')}
              </p>
            </div>
          </div>

          {/* 3. Liability */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              3. {t('legalNotice.liability.title')}
            </h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {t('legalNotice.liability.intro1')}
              </p>
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {t('legalNotice.liability.intro2')}
              </p>
              
              <div className="bg-slate-50 rounded-lg p-4 sm:p-6 my-6">
                <h3 className="font-semibold text-slate-900 mb-4 text-sm sm:text-base">{t('legalNotice.liability.exclusionsTitle')}:</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {(t('legalNotice.liability.exclusions', { returnObjects: true }) as string[]).map((exclusion: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span>{exclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                <span dangerouslySetInnerHTML={{ __html: t('legalNotice.liability.disclaimer') }} />
              </p>
            </div>
          </div>

          {/* 4. Prohibited Scraping */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              4. {t('legalNotice.scraping.title')}
            </h2>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <HugeiconsIcon icon={Alert02Icon} size={20} className="text-red-600 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-red-900 mb-3 sm:mb-4">{t('legalNotice.scraping.warning')}</h3>
                  <p className="text-red-800 leading-relaxed mb-4 text-sm sm:text-base">
                    {t('legalNotice.scraping.description')}
                  </p>
                  <div className="space-y-2 text-sm text-red-700">
                    {(t('legalNotice.scraping.prohibited', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-red-800 leading-relaxed mt-4 text-sm sm:text-base">
                    {t('legalNotice.scraping.consequence')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Intellectual Property */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              5. {t('legalNotice.intellectualProperty.title')}
            </h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 lg:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                  <HugeiconsIcon icon={ShieldIcon} size={20} className="text-brand-accent sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                    {t('legalNotice.intellectualProperty.description1')}
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                    {t('legalNotice.intellectualProperty.description2')}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {t('legalNotice.intellectualProperty.description3')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Data Protection */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              6. {t('legalNotice.dataProtection.title')}
            </h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {t('legalNotice.dataProtection.description1')}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                <span dangerouslySetInnerHTML={{ __html: t('legalNotice.dataProtection.description2') }} />
              </p>
            </div>
          </div>

          {/* 7. Applicable Law and Jurisdiction */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              7. {t('legalNotice.applicableLaw.title')}
            </h2>
            <div className="bg-slate-50 rounded-lg p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <HugeiconsIcon icon={JusticeScale01Icon} size={20} className="text-blue-600 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {t('legalNotice.applicableLaw.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              {t('legalNotice.contact.title')}
            </h2>
            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
              {t('legalNotice.contact.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href={`mailto:${t('legalNotice.contact.email')}`}
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-brand-accent text-white font-medium rounded-full hover:bg-brand-accent/90 transition-colors duration-300 text-sm sm:text-base"
              >
                {t('legalNotice.contact.emailButton')}
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-slate-300 text-slate-700 font-medium rounded-full hover:bg-slate-50 transition-colors duration-300 text-sm sm:text-base"
              >
                {t('legalNotice.contact.generalContact')}
              </a>
            </div>
          </div>

          {/* Updates */}
          <div className="border-t border-slate-200 pt-6 sm:pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              {t('legalNotice.updates.title')}
            </h2>
            <div className="bg-slate-50 rounded-lg p-3 sm:p-4">
              <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{t('legalNotice.updates.recentTitle')}</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-accent rounded-full"></span>
                  <span>{t('legalNotice.updates.recent')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
