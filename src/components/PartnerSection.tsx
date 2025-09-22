import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const PartnerSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (marqueeRef.current) {
      // Create infinite scroll animation
      const marquee = marqueeRef.current
      const marqueeContent = marquee.querySelector('.marquee-content') as HTMLElement
      
      if (marqueeContent) {
        // Duplicate content for seamless loop
        marqueeContent.innerHTML += marqueeContent.innerHTML
        
        // GSAP animation for smooth infinite scroll
        const isMobile = window.matchMedia('(max-width: 640px)').matches
        const duration = isMobile ? 10 : 20
        gsap.to(marqueeContent, {
          x: '-50%',
          duration,
          ease: 'none',
          repeat: -1
        })
      }
    }
  }, [])

  const partners = [
    { name: "Altia", logo: "/partners/altia.png", hasImage: true },
    { name: "Capgemini", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksfIUMWXLzN3-CNkPntGjwumTALEJUTTJ9g&s", hasImage: true },
    { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1280px-Microsoft_Azure_Logo.svg.png", hasImage: true },
    { name: "O Geko Cloud", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG40aEUSn1lau3zEzNMfC8J1bxONulIjzFjQ&s", hasImage: true },
    { name: "BABEL", logo: "/partners/babel.png", hasImage: true },
    { name: "AWS", logo: "/partners/aws.png", hasImage: true },
    { name: "Claranet Cloud Platform", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgArpWfzsRsP9RbGGJsuwHMgSGiDA81w6haw&s", hasImage: true },
    { name: "Stackscale Grupo Aire", logo: "/partners/stackscale.png", hasImage: true },
    { name: "SARENET", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDMEdhQwIesvJjzWNziHKQaDaS8Ha4nK6sw&s", hasImage: true }
  ]

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1.5 md:mb-2 font-display">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            We partner with the world's leading technology companies
          </p>
        </div>

        {/* Marquee Container */}
        <div 
          ref={marqueeRef}
          className="overflow-hidden relative"
          style={{ height: '64px' }}
        >
          <div className="marquee-content flex items-center gap-8 md:gap-12 h-full">
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-12 md:h-16 w-28 md:w-32 group cursor-pointer"
              >
                <div className="w-20 md:w-24 h-10 md:h-12 flex items-center justify-center transition-all duration-300">
                  {partner.hasImage ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-8 md:max-h-10 max-w-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `<span class="text-gray-400 text-xs font-medium text-center px-2 group-hover:text-brand-primary transition-colors duration-300">${partner.name}</span>`
                        }
                      }}
                    />
                  ) : (
                    <span className="text-gray-400 text-xs md:text-sm font-medium text-center px-2 group-hover:text-brand-primary transition-colors duration-300">
                      {partner.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerSection
