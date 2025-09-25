import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WorkCulture, SectionSeparator, EmptyPositions } from '@/components/careers';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Careers: React.FC = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const cultureRef = useRef<HTMLDivElement>(null);
  const positionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%"
          }
        }
      );

      // Work culture animation
      gsap.fromTo(cultureRef.current, 
        { opacity: 0, y: 60 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: cultureRef.current,
            start: "top 80%"
          }
        }
      );

      // Positions animation
      gsap.fromTo(positionsRef.current, 
        { opacity: 0, y: 60 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: positionsRef.current,
            start: "top 80%"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-4 sm:mb-6">
              {t('careers.hero.title', 'Join Our Team')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-6 sm:mb-8">
              {t('careers.hero.subtitle', 'Build the future of cloud technology with us')}
            </p>
            <p className="text-base sm:text-lg text-slate-500 max-w-3xl mx-auto">
              {t('careers.hero.description', 'We\'re looking for passionate individuals who want to make a real impact in the cloud industry. Join a team that values innovation, transparency, and genuine collaboration.')}
            </p>
          </div>
        </div>
      </section>

      {/* Separator */}
      <SectionSeparator />

      {/* Work Culture Section */}
      <div ref={cultureRef}>
        <WorkCulture />
      </div>

      {/* Separator */}
      <SectionSeparator />

      {/* Open Positions Section */}
      <div ref={positionsRef}>
        <EmptyPositions />
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
