import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { HugeiconsIcon } from '@hugeicons/react';
import { Mail01Icon, Call02Icon, Location01Icon, SentIcon } from '@hugeicons/core-free-icons';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { toast } from 'sonner';
import deploymentConfig from '@/config/deployment';

export default function Contact() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    location: '',
    budget: '',
    timeline: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const contactEndpoint = deploymentConfig.getContactEndpoint();
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is ok first
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Email service is not available. Please try again later or contact us directly.');
        }
        // Try to get error message from response
        let errorMessage = 'Failed to send message';
        try {
          const errorResult = await response.json();
          errorMessage = errorResult.error || errorMessage;
        } catch {
          // If JSON parsing fails, use status text
          errorMessage = response.statusText || errorMessage;
        }
        throw new Error(errorMessage);
      }

      const result = await response.json();

      if (result.success) {
        toast.success(t('contact.form.success') || 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          location: '',
          budget: '',
          timeline: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage = error instanceof Error ? error.message : 'Sorry, there was an error sending your message. Please try again.';
      toast.error(t('contact.form.error') || errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <div ref={imageRef} className="relative flex-1 hidden lg:block">
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
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                        {t('contact.form.firstName')} *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
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
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder={t('contact.form.lastNamePlaceholder')}
                        className="h-10 text-sm placeholder:text-xs sm:placeholder:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.form.emailPlaceholder')}
                        className="h-10 text-sm placeholder:text-xs sm:placeholder:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                        {t('contact.form.company')} *
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={t('contact.form.companyPlaceholder')}
                        className="h-10 text-sm placeholder:text-xs sm:placeholder:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                        {t('contact.form.phone')} *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t('contact.form.phonePlaceholder')}
                        className="h-10 text-sm placeholder:text-xs sm:placeholder:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                        {t('contact.form.location')} *
                      </label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder={t('contact.form.locationPlaceholder')}
                        className="h-10 text-sm placeholder:text-xs sm:placeholder:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="budget" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                        {t('contact.form.budget')} *
                      </label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                        required
                      >
                        <SelectTrigger className="h-10 text-sm">
                          <SelectValue placeholder={t('contact.form.budgetPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under €5,000</SelectItem>
                          <SelectItem value="5k-15k">€5,000 - €15,000</SelectItem>
                          <SelectItem value="15k-50k">€15,000 - €50,000</SelectItem>
                          <SelectItem value="50k-100k">€50,000 - €100,000</SelectItem>
                          <SelectItem value="over-100k">Over €100,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                        {t('contact.form.timeline')} *
                      </label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
                        required
                      >
                        <SelectTrigger className="h-10 text-sm">
                          <SelectValue placeholder={t('contact.form.timelinePlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="3-months">Within 3 months</SelectItem>
                          <SelectItem value="6-months">Within 6 months</SelectItem>
                          <SelectItem value="planning">Just planning</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                      {t('contact.form.service')} *
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                      required
                    >
                      <SelectTrigger className="h-10 text-sm">
                        <SelectValue placeholder={t('contact.form.servicePlaceholder')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="finops">Cloud Cost Optimization (FinOps)</SelectItem>
                        <SelectItem value="devops">DevOps & Cloud Infrastructure</SelectItem>
                        <SelectItem value="architecture">Cloud Architecture & Migration</SelectItem>
                        <SelectItem value="software-engineering">Software Engineering</SelectItem>
                        <SelectItem value="managed">Managed Cloud Services</SelectItem>
                        <SelectItem value="training">Training</SelectItem>
                        <SelectItem value="all">All Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows={10}
                      className="min-h-[120px] sm:min-h-[140px] resize-none text-sm placeholder:text-xs sm:placeholder:text-sm"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-10 bg-brand-accent hover:bg-brand-accent-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm sm:text-base"
                  >
                    <HugeiconsIcon icon={SentIcon} size={18} className="mr-2" />
                    {isSubmitting ? (t('contact.form.sending') || 'Sending...') : (t('contact.form.submit') || 'Send Message')}
                  </Button>
                </form>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
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
