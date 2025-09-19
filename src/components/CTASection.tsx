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
    <section ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-accent rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-4 right-8 w-16 h-16 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-6 left-12 w-8 h-8 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 right-16 w-4 h-4 bg-white/10 rounded-full"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-6 relative z-10">
            Ready to Transform Your Cloud Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto relative z-10">
            Join the companies that trust DevCloud Partners for transparent, results-driven cloud solutions. 
            Let's discuss how we can optimize your infrastructure and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="bg-white text-brand-accent px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              Start Your Cloud Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:bg-white hover:text-brand-accent">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
