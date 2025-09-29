import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HugeiconsIcon } from '@hugeicons/react';
import { CookieIcon, SettingsIcon, BarChartIcon, ShieldIcon, EyeIcon, Delete02Icon } from '@hugeicons/core-free-icons';

export default function CookiePolicy() {
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

  const cookieTypes = [
    {
      icon: ShieldIcon,
      title: t('cookiePolicy.types.essential.title'),
      description: t('cookiePolicy.types.essential.description'),
      examples: t('cookiePolicy.types.essential.examples', { returnObjects: true }) as string[],
      required: true
    },
    {
      icon: BarChartIcon,
      title: t('cookiePolicy.types.analytics.title'),
      description: t('cookiePolicy.types.analytics.description'),
      examples: t('cookiePolicy.types.analytics.examples', { returnObjects: true }) as string[],
      required: false
    },
    {
      icon: SettingsIcon,
      title: t('cookiePolicy.types.functional.title'),
      description: t('cookiePolicy.types.functional.description'),
      examples: t('cookiePolicy.types.functional.examples', { returnObjects: true }) as string[],
      required: false
    },
    {
      icon: EyeIcon,
      title: t('cookiePolicy.types.marketing.title'),
      description: t('cookiePolicy.types.marketing.description'),
      examples: t('cookiePolicy.types.marketing.examples', { returnObjects: true }) as string[],
      required: false
    }
  ];

  const cookieDetails = t('cookiePolicy.cookieDetails', { returnObjects: true }) as Array<{
    name: string;
    purpose: string;
    duration: string;
    type: string;
  }>;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-brand-accent/5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-brand-accent/10 rounded-2xl mb-4 sm:mb-6">
            <HugeiconsIcon icon={CookieIcon} size={24} className="text-brand-accent sm:w-8 sm:h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">
            {t('cookiePolicy.title')}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
            {t('cookiePolicy.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-500">
            <span>{t('cookiePolicy.lastUpdated')}</span>
            <span>•</span>
            <span>{t('cookiePolicy.effectiveDate')}</span>
            <span>•</span>
            <span>{t('cookiePolicy.version')}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={containerRef} className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 1. Introduction - What Are Cookies */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              1. {t('cookiePolicy.whatAreCookies.title')}
            </h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {t('cookiePolicy.whatAreCookies.description1')}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {t('cookiePolicy.whatAreCookies.description2')}
              </p>
            </div>
          </div>

          {/* 2. Legal Information */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              2. {t('cookiePolicy.legalInfo.title')}
            </h2>
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 lg:p-8">
              <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                <span dangerouslySetInnerHTML={{ __html: t('cookiePolicy.legalInfo.description') }} />
              </p>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{t('cookiePolicy.legalInfo.companyInfo')}:</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p><strong>{t('cookiePolicy.legalInfo.companyName')}:</strong> {t('cookiePolicy.legalInfo.companyNameValue')}</p>
                    <p><strong>{t('cookiePolicy.legalInfo.taxId')}:</strong> {t('cookiePolicy.legalInfo.taxIdValue')}</p>
                    <p><strong>{t('cookiePolicy.legalInfo.email')}:</strong> {t('cookiePolicy.legalInfo.emailValue')}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{t('cookiePolicy.legalInfo.address')}:</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>{t('cookiePolicy.legalInfo.addressValue')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Cookie Types */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">
              3. {t('cookiePolicy.typesUsed.title')}
            </h2>
            <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base">
              {t('cookiePolicy.typesUsed.description')}
            </p>
            
            {/* First-Party vs Third-Party */}
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6">
                <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">{t('cookiePolicy.typesUsed.firstParty.title')}</h3>
                <p className="text-xs sm:text-sm text-slate-600">{t('cookiePolicy.typesUsed.firstParty.description')}</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6">
                <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">{t('cookiePolicy.typesUsed.thirdParty.title')}</h3>
                <p className="text-xs sm:text-sm text-slate-600">{t('cookiePolicy.typesUsed.thirdParty.description')}</p>
              </div>
            </div>

            {/* By Duration */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{t('cookiePolicy.typesUsed.byDuration.title')}</h3>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-slate-50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{t('cookiePolicy.typesUsed.byDuration.session.title')}</h4>
                  <p className="text-xs sm:text-sm text-slate-600">{t('cookiePolicy.typesUsed.byDuration.session.description')}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{t('cookiePolicy.typesUsed.byDuration.persistent.title')}</h4>
                  <p className="text-xs sm:text-sm text-slate-600">{t('cookiePolicy.typesUsed.byDuration.persistent.description')}</p>
                </div>
              </div>
            </div>

            {/* By Purpose */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{t('cookiePolicy.typesUsed.byPurpose.title')}</h3>
              <div className="grid gap-4 sm:gap-6">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="group">
                    <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:border-brand-accent/20">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors duration-300">
                          <HugeiconsIcon icon={cookie.icon} size={20} className="text-brand-accent sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <h4 className="text-lg sm:text-xl font-semibold text-slate-900">{cookie.title}</h4>
                            {cookie.required ? (
                              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">{t('cookiePolicy.typesUsed.required')}</span>
                            ) : (
                              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">{t('cookiePolicy.typesUsed.optional')}</span>
                            )}
                          </div>
                          <p className="text-slate-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">{cookie.description}</p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {cookie.examples.map((example, idx) => (
                              <span key={idx} className="px-2 sm:px-3 py-1 bg-slate-100 text-slate-700 text-xs sm:text-sm rounded-full">
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Cookie Details Table */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">
              4. {t('cookiePolicy.cookieDetailsTable.title')}
            </h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-900">{t('cookiePolicy.cookieDetailsTable.headers.controller')}</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-900">{t('cookiePolicy.cookieDetailsTable.headers.category')}</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-900">{t('cookiePolicy.cookieDetailsTable.headers.functionality')}</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-900">{t('cookiePolicy.cookieDetailsTable.headers.ownership')}</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-900">{t('cookiePolicy.cookieDetailsTable.headers.duration')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {cookieDetails.map((cookie, index) => (
                      <tr key={index} className="hover:bg-slate-50">
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-mono text-slate-900">{cookie.name}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-600">{cookie.purpose}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-600">{cookie.duration}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-600">{cookie.type}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            cookie.type === 'Essential' ? 'bg-red-100 text-red-700' :
                            cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-700' :
                            cookie.type === 'Functional' ? 'bg-green-100 text-green-700' :
                            'bg-brand-accent/10 text-brand-accent'
                          }`}>
                            {cookie.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 5. Cookie Management */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              5. {t('cookiePolicy.management.title')}
            </h2>
            <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base">
              {t('cookiePolicy.management.description')}
            </p>
            
            <div className="bg-gradient-to-r from-brand-accent/5 to-brand-accent/10 rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white rounded-lg p-4 sm:p-6">
                  <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">{t('cookiePolicy.management.browser.title')}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">
                    {t('cookiePolicy.management.browser.description')}
                  </p>
                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                    {(t('cookiePolicy.management.browser.instructions', { returnObjects: true }) as string[]).map((instruction: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2">
                        <HugeiconsIcon icon={SettingsIcon} size={14} className="text-brand-accent sm:w-4 sm:h-4" />
                        <span>{instruction}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 sm:p-6">
                  <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">{t('cookiePolicy.management.banner.title')}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">
                    {t('cookiePolicy.management.banner.description')}
                  </p>
                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <HugeiconsIcon icon={ShieldIcon} size={14} className="text-green-600 sm:w-4 sm:h-4" />
                      <span>{t('cookiePolicy.management.banner.essential')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HugeiconsIcon icon={BarChartIcon} size={14} className="text-blue-600 sm:w-4 sm:h-4" />
                      <span>{t('cookiePolicy.management.banner.analytics')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HugeiconsIcon icon={EyeIcon} size={14} className="text-brand-accent sm:w-4 sm:h-4" />
                      <span>{t('cookiePolicy.management.banner.marketing')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Analytics Opt-out */}
            <div className="bg-slate-50 rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">{t('cookiePolicy.management.googleOptOut.title')}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">
                {t('cookiePolicy.management.googleOptOut.description')}
              </p>
              <a 
                href="https://tools.google.com/dlpage/gaoptout" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-accent text-xs sm:text-sm hover:underline"
              >
                {t('cookiePolicy.management.googleOptOut.link')} →
              </a>
            </div>
          </div>

          {/* 6. Third-Party Cookies */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              6. {t('cookiePolicy.thirdParty.title')}
            </h2>
            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
              {t('cookiePolicy.thirdParty.description')}
            </p>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6">
                <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">{t('cookiePolicy.thirdParty.analytics.title')}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3">
                  {t('cookiePolicy.thirdParty.analytics.description')}
                </p>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-accent text-xs sm:text-sm hover:underline">
                  {t('cookiePolicy.thirdParty.analytics.link')} →
                </a>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6">
                <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">{t('cookiePolicy.thirdParty.socialMedia.title')}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3">
                  {t('cookiePolicy.thirdParty.socialMedia.description')}
                </p>
                <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-brand-accent text-xs sm:text-sm hover:underline">
                  {t('cookiePolicy.thirdParty.socialMedia.link')} →
                </a>
              </div>
            </div>
          </div>

          {/* 7. International Transfers */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              7. {t('cookiePolicy.transfers.title')}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {t('cookiePolicy.transfers.description')}
            </p>
          </div>

          {/* 8. Contact Information */}
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              8. {t('cookiePolicy.contact.title')}
            </h2>
            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
              {t('cookiePolicy.contact.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href={`mailto:${t('cookiePolicy.contact.email')}`}
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-brand-accent text-white font-medium rounded-full hover:bg-brand-accent/90 transition-colors duration-300 text-sm sm:text-base"
              >
                {t('cookiePolicy.contact.emailButton')}
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-slate-300 text-slate-700 font-medium rounded-full hover:bg-slate-50 transition-colors duration-300 text-sm sm:text-base"
              >
                {t('cookiePolicy.contact.generalContact')}
              </a>
            </div>
          </div>

          {/* 9. Policy Updates */}
          <div className="border-t border-slate-200 pt-6 sm:pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              9. {t('cookiePolicy.updates.title')}
            </h2>
            <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">
              {t('cookiePolicy.updates.description')}
            </p>
            <div className="bg-slate-50 rounded-lg p-3 sm:p-4">
              <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{t('cookiePolicy.updates.recentTitle')}</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                {(t('cookiePolicy.updates.recent', { returnObjects: true }) as string[]).map((update: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-accent rounded-full"></span>
                    <span>{update}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
