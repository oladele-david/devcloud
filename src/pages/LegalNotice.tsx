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

  const sections = [
    {
      icon: CheckmarkCircle02Icon,
      title: "Company Information",
      content: "DevCloud Partners is a cloud optimization consultancy providing FinOps, DevOps, and cloud infrastructure services. We are committed to transparency and legal compliance in all our business operations."
    },
    {
      icon: UserGroupIcon,
      title: "Service Description",
      content: "We provide cloud optimization, DevOps consulting, and FinOps services to help businesses optimize their cloud infrastructure, reduce costs, and improve operational efficiency through our expert team and proven methodologies."
    },
    {
      icon: ShieldIcon,
      title: "Data Protection",
      content: "We are committed to protecting personal data in accordance with applicable data protection laws, including GDPR and CCPA. Our data processing activities are conducted lawfully and transparently."
    },
    {
      icon: Alert02Icon,
      title: "Limitation of Liability",
      content: "DevCloud Partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from our services."
    },
    {
      icon: JusticeScale01Icon,
      title: "Intellectual Property",
      content: "All content, trademarks, service marks, trade names, logos, and other intellectual property displayed on our platform are the property of DevCloud Partners or their respective owners. Users may not use, reproduce, or distribute any content without prior written permission."
    },
    {
      icon: File01Icon,
      title: "Governing Law",
      content: "This legal notice is governed by the laws of Spain. Any disputes arising from this notice or our services will be subject to the jurisdiction of the Spanish courts."
    }
  ];

  const keyPoints = [
    "This website is operated by DevCloud Partners",
    "All content is provided for informational purposes only",
    "We reserve the right to modify this notice at any time",
    "Users are responsible for compliance with applicable laws",
    "This notice is governed by Spanish law",
    "Contact us for any questions about this legal notice"
  ];

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
            Legal Notice
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
            This legal notice provides important information about our company, services, and legal obligations. Please read this notice carefully.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-500">
            <span>Last updated: January 15, 2025</span>
            <span>•</span>
            <span>Effective date: January 15, 2025</span>
            <span>•</span>
            <span>Version 1.0</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={containerRef} className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Legal Information</h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                This legal notice contains important information about DevCloud Partners, our services, and the terms under which we operate. By accessing our website or using our services, you acknowledge that you have read and understood this legal notice.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We reserve the right to update this legal notice at any time. Any changes will be posted on this page and will take effect immediately upon posting. We encourage you to review this notice periodically.
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

          {/* Key Points */}
          <div className="bg-gradient-to-r from-brand-accent/5 to-brand-accent/10 rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Important Information</h2>
            <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-brand-accent/20 rounded-full flex items-center justify-center mt-0.5">
                    <HugeiconsIcon icon={CheckmarkCircle02Icon} size={14} className="text-brand-accent sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-slate-700 text-sm sm:text-base">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Company Details */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">Company Details</h2>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} className="text-brand-accent sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Business Name</h3>
                <p className="text-xs sm:text-sm text-slate-600">DevCloud Partners</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <HugeiconsIcon icon={ShieldIcon} size={20} className="text-brand-accent sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Legal Status</h3>
                <p className="text-xs sm:text-sm text-slate-600">Consulting Services</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <HugeiconsIcon icon={UserGroupIcon} size={20} className="text-brand-accent sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Jurisdiction</h3>
                <p className="text-xs sm:text-sm text-slate-600">Spain</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Questions About This Legal Notice?</h2>
            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
              If you have any questions about this legal notice or our legal obligations, please contact us for clarification.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="mailto:legal@devcloudpartners.com" 
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-brand-accent text-white font-medium rounded-full hover:bg-brand-accent/90 transition-colors duration-300 text-sm sm:text-base"
              >
                Contact Legal Team
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
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Legal Notice Updates</h2>
            <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">
              We may update this legal notice from time to time. We will notify users of any material changes by posting the updated notice on this page.
            </p>
            <div className="bg-slate-50 rounded-lg p-3 sm:p-4">
              <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Recent Updates</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-accent rounded-full"></span>
                  <span>January 15, 2025 - Initial legal notice published</span>
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
