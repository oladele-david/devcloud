import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { HugeiconsIcon } from '@hugeicons/react';
import { Mail01Icon, Call02Icon, Location01Icon, SentIcon } from '@hugeicons/core-free-icons';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Contact() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Set initial states
    gsap.set([imageRef.current, formRef.current], {
      opacity: 0,
      y: 30
    });

    // Animate elements with stagger
    tl.to(containerRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
      .to(imageRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
      .to(formRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Contact Section */}
      <section className="py-8 pb-20 bg-white">
        <div ref={containerRef} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch" style={{ '--contact-height': '650px' } as React.CSSProperties}>
            
            {/* Left Section - Image */}
            <div ref={imageRef} className="relative flex-1">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img 
                  src="/contact.png" 
                  alt="DevCloud Partners Office" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h2 className="text-2xl font-bold mb-3">
                    {t('contact.hero.title')}
                  </h2>
                  <p className="text-base opacity-90 mb-4">
                    {t('contact.hero.subtitle')}
                  </p>
                  <p className="text-sm opacity-80">
                    {t('contact.hero.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div ref={formRef} className="flex flex-col flex-1">
              <div className="mb-4 sm:mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
                  {t('contact.form.title')}
                </h1>
                <p className="text-sm sm:text-base text-slate-600">
                  {t('contact.form.subtitle')}
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 flex-1 flex flex-col">
                <form className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                        {t('contact.form.firstName')} *
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder={t('contact.form.firstNamePlaceholder')}
                        className="h-10 text-sm placeholder:text-xs sm:placeholder:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                        {t('contact.form.lastName')} *
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder={t('contact.form.lastNamePlaceholder')}
                        className="h-10 text-sm placeholder:text-xs sm:placeholder:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('contact.form.emailPlaceholder')}
                      className="h-10 text-sm placeholder:text-xs sm:placeholder:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                      {t('contact.form.company')}
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder={t('contact.form.companyPlaceholder')}
                      className="h-10 text-sm placeholder:text-xs sm:placeholder:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <Textarea
                      id="message"
                      placeholder={t('contact.form.messagePlaceholder')}
                      className="min-h-[80px] sm:min-h-[100px] resize-none text-sm placeholder:text-xs sm:placeholder:text-sm"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-10 bg-brand-accent hover:bg-brand-accent-700 text-white font-semibold text-sm sm:text-base"
                  >
                    <HugeiconsIcon icon={SentIcon} size={18} className="mr-2" />
                    {t('contact.form.submit')}
                  </Button>
                </form>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <div className="flex items-center sm:flex-col sm:items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-0 sm:mb-2 bg-brand-accent/10 rounded-full flex items-center justify-center">
                        <HugeiconsIcon icon={Mail01Icon} size={14} className="text-brand-accent sm:size-4" />
                      </div>
                      <div className="text-left sm:text-center">
                        <h3 className="font-medium text-slate-900 text-xs mb-1">
                          {t('contact.info.email.title')}
                        </h3>
                        <p className="text-xs text-slate-600 break-all sm:text-center">
                          {t('contact.info.email.value')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center sm:flex-col sm:items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-0 sm:mb-2 bg-brand-accent/10 rounded-full flex items-center justify-center">
                        <HugeiconsIcon icon={Call02Icon} size={14} className="text-brand-accent sm:size-4" />
                      </div>
                      <div className="text-left sm:text-center">
                        <h3 className="font-medium text-slate-900 text-xs mb-1">
                          {t('contact.info.phone.title')}
                        </h3>
                        <p className="text-xs text-slate-600 sm:text-center">
                          {t('contact.info.phone.value')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center sm:flex-col sm:items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-0 sm:mb-2 bg-brand-accent/10 rounded-full flex items-center justify-center">
                        <HugeiconsIcon icon={Location01Icon} size={14} className="text-brand-accent sm:size-4" />
                      </div>
                      <div className="text-left sm:text-center">
                        <h3 className="font-medium text-slate-900 text-xs mb-1">
                          {t('contact.info.location.title')}
                        </h3>
                        <p className="text-xs text-slate-600 sm:text-center">
                          {t('contact.info.location.value')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
