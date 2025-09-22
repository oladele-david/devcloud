import { useRef, useEffect } from "react"
import { gsap } from "gsap"

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

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
          {/* Background decorative elements */}
          <div className="absolute top-3 right-6 w-10 h-10 md:w-16 md:h-16 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-5 left-8 w-6 h-6 md:w-8 md:h-8 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 right-10 w-3 h-3 md:w-4 md:h-4 bg-white/10 rounded-full"></div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-white font-display mb-3 md:mb-6 relative z-10">
            Ready to Transform Your Cloud Infrastructure?
          </h2>
          <p className="text-sm md:text-lg text-white/90 mb-5 md:mb-8 max-w-3xl mx-auto relative z-10">
            Join the companies that trust DevCloud Partners for transparent, results-driven cloud solutions. 
            Let's discuss how we can optimize your infrastructure and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 md:gap-4 justify-center relative z-10">
            <button className="bg-white text-brand-accent px-5 md:px-8 py-2.5 md:py-4 rounded-full text-sm md:text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              Start Your Cloud Journey
            </button>
            <button className="border-2 border-white text-white px-5 md:px-8 py-2.5 md:py-4 rounded-full text-sm md:text-lg font-semibold transition-all duration-200 hover:bg-white hover:text-brand-accent">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
