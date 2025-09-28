import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HugeiconsIcon } from '@hugeicons/react';
import { SecurityCheckIcon, EyeIcon, DatabaseIcon, LockIcon, UserIcon, GlobeIcon } from '@hugeicons/core-free-icons';

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

  const sections = [
    {
      icon: DatabaseIcon,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes your name, email address, company information, and any other details you choose to provide."
    },
    {
      icon: EyeIcon,
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, communicate with you, process transactions, and ensure the security of our platform. We may also use your information for analytics and service optimization."
    },
    {
      icon: LockIcon,
      title: "Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits."
    },
    {
      icon: GlobeIcon,
      title: "Data Sharing",
      content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted service providers who assist us in operating our platform."
    },
    {
      icon: UserIcon,
      title: "Your Rights",
      content: "You have the right to access, update, or delete your personal information. You can also opt out of certain communications and request data portability. Contact us to exercise any of these rights."
    },
    {
      icon: SecurityCheckIcon,
      title: "Compliance",
      content: "We comply with applicable data protection laws, including GDPR and CCPA. We regularly review and update our practices to ensure continued compliance with evolving regulations."
    }
  ];

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
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use our cloud optimization services.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-500">
            <span>Last updated: January 15, 2025</span>
            <span>•</span>
            <span>Effective date: January 15, 2025</span>
            <span>•</span>
            <span>Version 2.1</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={containerRef} className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Introduction</h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                At DevCloud Partners, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our cloud optimization services.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>
          </div>

          {/* Key Sections */}
          <div className="grid gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {sections.map((section, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:border-brand-accent/20">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors duration-300">
                      <HugeiconsIcon icon={section.icon} size={20} className="text-brand-accent sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">{section.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{section.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-brand-accent/5 to-brand-accent/10 rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Questions About This Policy?</h2>
            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
              If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="mailto:privacy@devcloudpartners.com" 
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-brand-accent text-white font-medium rounded-full hover:bg-brand-accent/90 transition-colors duration-300 text-sm sm:text-base"
              >
                Contact Privacy Team
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-slate-300 text-slate-700 font-medium rounded-full hover:bg-slate-50 transition-colors duration-300 text-sm sm:text-base"
              >
                General Contact
              </a>
            </div>
          </div>

          {/* Updates */}
          <div className="border-t border-slate-200 pt-6 sm:pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Policy Updates</h2>
            <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <div className="bg-slate-50 rounded-lg p-3 sm:p-4">
              <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Recent Updates</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-accent rounded-full"></span>
                  <span>January 15, 2025 - Updated data retention policies</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-accent rounded-full"></span>
                  <span>December 1, 2024 - Added GDPR compliance section</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-accent rounded-full"></span>
                  <span>October 15, 2024 - Initial privacy policy published</span>
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
