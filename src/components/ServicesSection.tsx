import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { useTranslation } from "react-i18next"

const ServicesSection = () => {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTouching, setIsTouching] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef(0)
  const servicesRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      title: t('services.finops_title'),
      subtitle: t('services.finops_sub'),
      description: t('services.finops_desc'),
      image: "/services/cloud.png",
      badge: "FinOps"
    },
    {
      title: t('services.devops_title'),
      subtitle: t('services.devops_sub'),
      description: t('services.devops_desc'),
      image: "/services/devops.png",
      badge: "DevOps"
    },
    {
      title: t('services.arch_title'),
      subtitle: t('services.arch_sub'),
      description: t('services.arch_desc'),
      image: "/services/architecture.png",
      badge: "Architecture"
    },
    {
      title: t('services.mng_title'),
      subtitle: t('services.mng_sub'),
      description: t('services.mng_desc'),
      image: "/services/managed.png",
      badge: "Support"
    },
    {
      title: t('services.eng_title'),
      subtitle: t('services.eng_sub'),
      description: t('services.eng_desc'),
      image: "/services/technical.png",
      badge: "Engineering"
    }
  ]

  useEffect(() => {
    if (servicesRef.current) {
      gsap.fromTo(servicesRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true)
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }

  const onTouchEnd = () => {
    setIsTouching(false)
    if (Math.abs(touchDeltaX.current) > 40) {
      if (touchDeltaX.current < 0) nextSlide()
      else prevSlide()
    }
    touchStartX.current = null
    touchDeltaX.current = 0
  }

  return (
    <section ref={servicesRef} className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div>
            <p className="text-brand-primary text-xs md:text-sm font-medium mb-1.5 md:mb-2">{t('footer.services')}</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-display">
              {t('services.heading')}
            </h2>
          </div>
          
          {/* Navigation Controls */}
          <div className="hidden sm:flex space-x-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-brand-accent flex items-center justify-center transition-colors duration-200 group"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} size={20} className="text-gray-600 group-hover:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-brand-accent flex items-center justify-center transition-colors duration-200 group"
            >
              <HugeiconsIcon icon={ArrowRight01Icon} size={20} className="text-gray-600 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Services Cards */}
        <div ref={cardsRef} className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {services.map((service, index) => (
              <div key={index} className="w-full flex-shrink-0 px-1.5 sm:px-2">
                <div className="relative h-80 sm:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: 'cover'
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">
                    {/* Badge */}
                    <div className="self-end">
                      <span className="inline-flex items-center px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/90 text-gray-900 text-xs sm:text-sm font-medium">
                        {service.badge}
                      </span>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-base sm:text-lg font-medium">
                        {service.subtitle}
                      </p>
                      <p className="text-white/80 text-sm leading-relaxed max-w-md">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Swipe Dots */}
        <div className="mt-4 flex justify-center gap-2 sm:hidden">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === i ? 'w-6 bg-brand-accent' : 'w-2 bg-gray-300'
              }`}
              style={{ minWidth: currentSlide === i ? 24 : 8 }}
            />
          ))}
        </div>

        {/* Bottom Description */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            {t('services_bottom')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
