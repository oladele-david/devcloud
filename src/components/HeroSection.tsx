import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, CloudIcon, ServerStackIcon } from "@hugeicons/core-free-icons"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

const HeroSection = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    // Set initial states
    gsap.set([badgeRef.current, titleRef.current, subtitleRef.current, buttonsRef.current], {
      opacity: 0,
      y: 20
    })

    // Animate elements with stagger
    tl.to(containerRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
      .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.4")
      .to(titleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
      .to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.1")
  }, [])

  return (
    <section className="relative h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] overflow-hidden flex items-center bg-white">
      {/* Image Container with Rounded Edges and Overlay for Contrast */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-[calc(100%-24px)] md:w-[calc(100%-40px)] h-[calc(100%-24px)] md:h-[calc(100%-40px)] mx-auto my-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
          {/* Placeholder for background image - you can replace this with actual image */}
          <img 
            src="/bg.jpeg" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
          {/* Overlay is now only over the image, not the whole hero */}
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        </div>
      </div>

      {/* Main Content Container with Rounded Edges */}
      <div className="relative z-10 w-full">
        <div className="w-[calc(100%-40px)] md:w-[calc(100%-120px)] max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div ref={containerRef} className="text-center">
            {/* Company Badge */}
            <div ref={badgeRef} className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 text-white text-xs md:text-sm font-medium mb-5 md:mb-8">
              <HugeiconsIcon icon={CloudIcon} size={16} className="mr-2" />
              {t('hero.badge')}
            </div>
            
            {/* Main Headline */}
            <h1 ref={titleRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4 md:mb-6 leading-snug font-display">
              {t('hero.title_line1')} {" "}
              <br />
              <span className="text-brand-accent">{t('hero.title_growth')}</span>
              {t('hero.title_line2')}
              <span className="text-white">{t('hero.title_burden')}</span>
            </h1>
            
            {/* Subheadline */}
            <p ref={subtitleRef} className="text-sm sm:text-base md:text-lg text-white/90 mb-5 md:mb-6 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            {/* CTA Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-brand-primary hover:bg-brand-primary-700 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold transition-colors duration-200 flex items-center justify-center group"
              >
                <HugeiconsIcon icon={ServerStackIcon} size={16} className="mr-2" />
                {t('hero.cta_primary')}
                <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="border-2 border-white text-white hover:bg-white/10 px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                <HugeiconsIcon icon={CloudIcon} size={16} className="mr-2" />
                {t('hero.cta_secondary')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
