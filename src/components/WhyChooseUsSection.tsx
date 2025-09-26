import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const WhyChooseUsSection = () => {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
    }
  }, [])

  const reasons = [
    {
      title: t('why_items.success.title'),
      description: t('why_items.success.desc'),
      image: "/choose/model.webp",
      size: "large" // This will be the main featured card
    },
    {
      title: t('why_items.tech.title'),
      description: t('why_items.tech.desc'),
      image: "/choose/cloud.png",
      size: "medium"
    },
    {
      title: t('why_items.transparency.title'),
      description: t('why_items.transparency.desc'),
      image: "/choose/transparency.png",
      size: "medium"
    },
    {
      title: t('why_items.support.title'),
      description: t('why_items.support.desc'),
      image: "/choose/support.png",
      size: "small"
    },
    {
      title: t('why_items.collaboration.title'),
      description: t('why_items.collaboration.desc'),
      image: "/choose/collaboration.png",
      size: "small"
    },
    {
      title: t('why_items.global.title'),
      description: t('why_items.global.desc'),
      image: "/choose/global.png",
      size: "small"
    }
  ]

  return (
    <section ref={sectionRef} className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-primary text-sm font-medium mb-4">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display mb-6">
            {t('why.heading')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just provide cloud services - we become your strategic partner in digital transformation
          </p>
        </div>

        {/* Balanced Grid */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {reasons.map((reason, index) => {
              const bgClasses = [
                "from-white via-white to-brand-secondary-100",
                "from-white via-white to-brand-secondary-100",
                "from-white via-white to-brand-secondary-100",
                "from-white via-white to-brand-secondary-100",
                "from-white via-white to-brand-secondary-100",
                "from-white via-white to-brand-secondary-100",
              ];
              const gradient = bgClasses[index % bgClasses.length];
              const spanClass = (index === 0 || index === 5) ? 'md:col-span-2' : '';
              const iconSize = (index === 0 || index === 5)
                ? 'h-28 sm:h-32 md:h-44'
                : (index === 1 ? 'h-24 sm:h-28 md:h-32' : 'h-20 sm:h-24 md:h-28');
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer h-72 sm:h-80 md:h-96 ${spanClass}`.trim()}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${gradient}`} />
                  <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-6">
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-dark font-display">
                        {reason.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {reason.description}
                      </p>
                      <div className="w-8 sm:w-10 h-1 bg-brand-accent rounded-full mt-2 transition-all duration-300 group-hover:w-16" />
                    </div>
                    <div className="mt-6 w-full flex justify-center items-end">
                      <img src={reason.image} alt={reason.title} className={`${iconSize} object-contain`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-600 text-base md:text-lg mb-6 max-w-3xl mx-auto">
            {t('why.ready')}
          </p>
          <Link
            to="/contact"
            className="bg-brand-accent hover:bg-brand-accent-700 text-white px-6 py-3 rounded-full text-base md:text-sm font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            {t('why.start')}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
