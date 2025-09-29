import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HugeiconsIcon } from '@hugeicons/react';
import { SecurityCheckIcon, DatabaseIcon, LockIcon, UserIcon, ShieldIcon, GlobeIcon } from '@hugeicons/core-free-icons';

export default function PrivacyPolicy() {
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
            <HugeiconsIcon icon={SecurityCheckIcon} size={24} className="text-brand-accent sm:w-8 sm:h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">
            {t('privacy.title')}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
            {t('privacy.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-500">
            <span>{t('privacy.lastUpdated')}</span>
            <span>•</span>
            <span>{t('privacy.effectiveDate')}</span>
            <span>•</span>
            <span>{t('privacy.version')}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={containerRef} className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 1. Data Controller */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              1. {t('privacy.dataController.title')}
            </h2>
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 lg:p-8">
              <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                {t('privacy.dataController.description')}
              </p>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Company Information:</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p><strong>Company name:</strong> {t('privacy.dataController.companyName')}</p>
                    <p><strong>CIF (Tax ID):</strong> {t('privacy.dataController.taxId')}</p>
                    <p><strong>Email:</strong> {t('privacy.dataController.email')}</p>
                    <p><strong>Telephone:</strong> {t('privacy.dataController.phone')}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Registered Address:</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>{t('privacy.dataController.address')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Scope of the Policy */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              2. {t('privacy.scope.title')}
            </h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {t('privacy.scope.text1')}
              </p>
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                <span dangerouslySetInnerHTML={{ __html: t('privacy.scope.text2') }} />
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {t('privacy.scope.text3')}
              </p>
            </div>
          </div>

          {/* 3. Processing Principles */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              3. {t('privacy.principles.title')}
            </h2>
            <div className="bg-blue-50 rounded-2xl p-4 sm:p-6 lg:p-8">
              <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                {t('privacy.principles.description')}
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Lawfulness, fairness, and transparency:</strong> {t('privacy.principles.lawfulness')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Purpose limitation:</strong> {t('privacy.principles.purposeLimitation')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Data minimization:</strong> {t('privacy.principles.dataMinimization')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Accuracy:</strong> {t('privacy.principles.accuracy')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Storage limitation:</strong> {t('privacy.principles.storageLimitation')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Integrity and confidentiality:</strong> {t('privacy.principles.integrity')}</span>
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4 pt-4 border-t border-blue-200 text-sm sm:text-base">
                {t('privacy.principles.processorNote')}
              </p>
            </div>
          </div>

          {/* 4. Purposes of Processing and Legal Bases */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              4. {t('privacy.purposes.title')}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
              {t('privacy.purposes.description')}
            </p>
            
            {/* 4.1 Data We Collect */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">4.1. {t('privacy.purposes.dataWeCollect')}</h3>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 mb-6">
                <ul className="space-y-3 text-sm text-slate-600">
                  {t('privacy.purposes.dataItems', { returnObjects: true }).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <HugeiconsIcon icon={UserIcon} size={16} className="text-green-600 mt-1 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item.replace('Cookie Policy', '<a href="/cookie-policy" class="text-brand-accent hover:underline">Cookie Policy</a>') }} />
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-green-200">
                  <p className="text-sm text-slate-600 mb-2">{t('privacy.purposes.dataNote')}</p>
                  <p className="text-sm text-slate-600 mb-2">{t('privacy.purposes.noSpecialData')}</p>
                  <p className="text-sm text-slate-600 mb-2">{t('privacy.purposes.userGuarantee')}</p>
                  <p className="text-sm text-slate-600">{t('privacy.purposes.thirdPartyData')}</p>
                </div>
              </div>
            </div>

            {/* 4.2 Processing Purposes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">4.2. {t('privacy.purposes.processingPurposes')}</h3>
              <div className="space-y-4">
                {t('privacy.purposes.purposesList', { returnObjects: true }).map((purpose: any, index: number) => (
                  <div key={index} className="border-l-4 border-brand-accent bg-brand-accent/5 pl-4 py-3">
                    <h4 className="font-semibold text-slate-900 mb-2">{String.fromCharCode(73 + index)}. {purpose.title}</h4>
                    <p className="text-sm text-slate-600">{purpose.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                <p className="text-sm text-slate-600">{t('privacy.purposes.legitimateInterestNote')}</p>
              </div>
            </div>
          </div>

          {/* 5. Data Disclosure */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              5. {t('privacy.disclosure.title')}
            </h2>
            <div className="bg-amber-50 rounded-2xl p-4 sm:p-6 lg:p-8">
              <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                {t('privacy.disclosure.description')}
              </p>
              <div className="space-y-4 text-sm text-slate-600">
                {t('privacy.disclosure.items', { returnObjects: true }).map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="font-bold">{String.fromCharCode(97 + index)}.</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mt-4 text-sm sm:text-base">
                {t('privacy.disclosure.additionalInfo')}
              </p>
            </div>
          </div>

          {/* 6. International Transfers */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              6. {t('privacy.transfers.title')}
            </h2>
            <div className="bg-blue-50 rounded-2xl p-4 sm:p-6 lg:p-8">
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {t('privacy.transfers.description')}
              </p>
            </div>
          </div>

          {/* 7. Data Retention */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              7. {t('privacy.retention.title')}
            </h2>
            <div className="prose prose-lg prose-slate max-w-none mb-6">
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {t('privacy.retention.description')}
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-4 sm:p-6 lg:p-8">
              <h3 className="font-semibold text-slate-900 mb-4">{t('privacy.retention.periodsTitle')}</h3>
              <div className="grid gap-4 text-sm text-slate-600">
                {t('privacy.retention.periods', { returnObjects: true }).map((period: string, index: number) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    {period}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 8. User Rights */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              8. {t('privacy.userRights.title')}
            </h2>
            <div className="bg-purple-50 rounded-2xl p-4 sm:p-6 lg:p-8">
              <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                {t('privacy.userRights.description')}
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                {t('privacy.userRights.rights', { returnObjects: true }).map((right: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <HugeiconsIcon icon={SecurityCheckIcon} size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                    <span>{right}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-purple-200">
                <p className="text-sm text-slate-600 mb-2">{t('privacy.userRights.exerciseRights')}</p>
                <p className="text-sm text-slate-600">{t('privacy.userRights.complaintInfo')}</p>
              </div>
            </div>
          </div>

          {/* 9. Security Measures */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              9. {t('privacy.security.title')}
            </h2>
            <div className="bg-green-50 rounded-2xl p-4 sm:p-6 lg:p-8">
              <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                {t('privacy.security.description')}
              </p>
              <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                {t('privacy.security.details')}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {t('privacy.security.review')}
              </p>
            </div>
          </div>

          {/* 10. Minors */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              10. {t('privacy.minors.title')}
            </h2>
            <div className="bg-amber-50 rounded-2xl p-4 sm:p-6 lg:p-8">
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {t('privacy.minors.description')}
              </p>
            </div>
          </div>

          {/* 11. Policy Changes */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              11. {t('privacy.changes.title')}
            </h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                {t('privacy.changes.description')}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {t('privacy.changes.effectiveDate')}
              </p>
            </div>
          </div>

          {/* Exercise Your Rights */}
          <div className="bg-gradient-to-r from-brand-accent/5 to-brand-accent/10 rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
              {t('privacy.contactRights.title')}
            </h2>
            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
              {t('privacy.contactRights.description')}
            </p>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{t('privacy.contactRights.emailContact')}</h3>
                <p className="text-sm text-slate-600">{t('privacy.dataController.email')}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{t('privacy.contactRights.postalAddress')}</h3>
                <p className="text-sm text-slate-600">{t('privacy.dataController.address')}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href={`mailto:${t('privacy.dataController.email')}`}
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-brand-accent text-white font-medium rounded-full hover:bg-brand-accent/90 transition-colors duration-300 text-sm sm:text-base"
              >
                {t('privacy.contactRights.contactGDPR')}
              </a>
              <a 
                href="https://www.aepd.es" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-slate-300 text-slate-700 font-medium rounded-full hover:bg-slate-50 transition-colors duration-300 text-sm sm:text-base"
              >
                {t('privacy.contactRights.dataProtectionAgency')}
              </a>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              {t('privacy.contactRights.complaintInfo')}
            </p>
          </div>

          {/* 11. Policy Changes */}
          <div className="border-t border-slate-200 pt-6 sm:pt-8">
            
            <div className="bg-slate-50 rounded-lg p-3 sm:p-4">
              <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{t('privacy.updates.title')}</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-accent rounded-full"></span>
                  <span>{t('privacy.updates.update1')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-accent rounded-full"></span>
                  <span>{t('privacy.updates.update2')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-accent rounded-full"></span>
                  <span>{t('privacy.updates.update3')}</span>
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
