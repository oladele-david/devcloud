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
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      examples: ["Authentication", "Security", "Load balancing", "User preferences"],
      required: true
    },
    {
      icon: BarChartIcon,
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: ["Google Analytics", "Page views", "User behavior", "Performance metrics"],
      required: false
    },
    {
      icon: SettingsIcon,
      title: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences.",
      examples: ["Language settings", "Theme preferences", "Form data", "Customization"],
      required: false
    },
    {
      icon: EyeIcon,
      title: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
      examples: ["Ad targeting", "Social media", "Retargeting", "Campaign tracking"],
      required: false
    }
  ];

  const cookieDetails = [
    {
      name: "_ga",
      purpose: "Google Analytics - Distinguishes unique users",
      duration: "2 years",
      type: "Analytics"
    },
    {
      name: "_gid",
      purpose: "Google Analytics - Distinguishes unique users",
      duration: "24 hours",
      type: "Analytics"
    },
    {
      name: "session_id",
      purpose: "Maintains user session state",
      duration: "Session",
      type: "Essential"
    },
    {
      name: "user_preferences",
      purpose: "Stores user interface preferences",
      duration: "1 year",
      type: "Functional"
    },
    {
      name: "_fbp",
      purpose: "Facebook Pixel - Tracks conversions",
      duration: "3 months",
      type: "Marketing"
    },
    {
      name: "cookie_consent",
      purpose: "Remembers cookie consent choice",
      duration: "1 year",
      type: "Essential"
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
            <HugeiconsIcon icon={CookieIcon} size={24} className="text-brand-accent sm:w-8 sm:h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">
            Cookie Policy
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Learn about how we use cookies and similar technologies to enhance your experience on our cloud optimization platform.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-500">
            <span>Last updated: January 15, 2025</span>
            <span>•</span>
            <span>Effective date: January 15, 2025</span>
            <span>•</span>
            <span>Version 1.5</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={containerRef} className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">What Are Cookies?</h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We use cookies and similar technologies to analyze site usage, improve performance, and personalize content. This policy explains what cookies we use, why we use them, and how you can control them.
              </p>
            </div>
          </div>

          {/* Cookie Types */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">Types of Cookies We Use</h2>
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
                          <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{cookie.title}</h3>
                          {cookie.required ? (
                            <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">Required</span>
                          ) : (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Optional</span>
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

          {/* Cookie Details Table */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">Specific Cookies We Use</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-900">Cookie Name</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-900">Purpose</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-900">Duration</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-slate-900">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {cookieDetails.map((cookie, index) => (
                      <tr key={index} className="hover:bg-slate-50">
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-mono text-slate-900">{cookie.name}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-600">{cookie.purpose}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-600">{cookie.duration}</td>
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

          {/* Cookie Management */}
          <div className="bg-gradient-to-r from-brand-accent/5 to-brand-accent/10 rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
              You have control over which cookies you accept. You can manage your preferences through your browser settings or our cookie consent banner.
            </p>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white rounded-lg p-4 sm:p-6">
                <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">Browser Settings</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">
                  Most browsers allow you to control cookies through their settings. You can block or delete cookies, but this may affect website functionality.
                </p>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={SettingsIcon} size={14} className="text-brand-accent sm:w-4 sm:h-4" />
                    <span>Chrome: Settings → Privacy and security → Cookies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={SettingsIcon} size={14} className="text-brand-accent sm:w-4 sm:h-4" />
                    <span>Firefox: Settings → Privacy & Security → Cookies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={SettingsIcon} size={14} className="text-brand-accent sm:w-4 sm:h-4" />
                    <span>Safari: Preferences → Privacy → Manage Website Data</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6">
                <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">Our Cookie Banner</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">
                  When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.
                </p>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={ShieldIcon} size={14} className="text-green-600 sm:w-4 sm:h-4" />
                    <span>Essential cookies are always enabled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={BarChartIcon} size={14} className="text-blue-600 sm:w-4 sm:h-4" />
                    <span>Analytics cookies are optional</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon icon={EyeIcon} size={14} className="text-brand-accent sm:w-4 sm:h-4" />
                    <span>Marketing cookies are optional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Third-Party Cookies</h2>
            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
              We may use third-party services that set their own cookies. These services help us analyze website usage and provide better functionality.
            </p>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6">
                <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">Google Analytics</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3">
                  We use Google Analytics to understand how visitors use our website. This helps us improve our services and user experience.
                </p>
                <a href="https://policies.google.com/privacy" className="text-brand-accent text-xs sm:text-sm hover:underline">
                  Google Privacy Policy →
                </a>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6">
                <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">Social Media</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3">
                  We may embed social media content that sets cookies. These are controlled by the respective social media platforms.
                </p>
                <a href="https://www.facebook.com/privacy/explanation" className="text-brand-accent text-xs sm:text-sm hover:underline">
                  Facebook Privacy Policy →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Questions About Cookies?</h2>
            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
              If you have any questions about our use of cookies or this Cookie Policy, please don't hesitate to contact us.
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
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
            </p>
            <div className="bg-slate-50 rounded-lg p-3 sm:p-4">
              <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Recent Updates</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-accent rounded-full"></span>
                  <span>January 15, 2025 - Added new analytics cookies</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-accent rounded-full"></span>
                  <span>December 1, 2024 - Updated third-party cookie information</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-accent rounded-full"></span>
                  <span>October 15, 2024 - Initial cookie policy published</span>
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
