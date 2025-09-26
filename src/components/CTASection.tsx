import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-accent rounded-2xl md:rounded-3xl p-6 md:p-12 text-center relative overflow-hidden">
          
          <h2 className="text-2xl md:text-4xl font-bold text-white font-display mb-3 md:mb-6 relative z-10">
            {t('cta_section.title')}
          </h2>
          <p className="text-sm md:text-lg text-white/90 mb-5 md:mb-8 max-w-3xl mx-auto relative z-10">
            {t('cta_section.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 md:gap-4 justify-center relative z-10">
            <Link to="/contact" className="bg-white text-brand-accent px-5 md:px-8 py-2.5 md:py-4 rounded-full text-sm md:text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              {t('cta_section.primary')}
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-5 md:px-8 py-2.5 md:py-4 rounded-full text-sm md:text-lg font-semibold transition-all duration-200 hover:bg-white hover:text-brand-accent">
              {t('cta_section.secondary')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
