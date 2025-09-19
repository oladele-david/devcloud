import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const WhyChooseUsSection = () => {
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
      title: "Success-Based Model",
      description: "You pay from the value we generate—no risks, no hidden costs.",
      image: "/services/model.webp",
      size: "large" // This will be the main featured card
    },
    {
      title: "Technical Excellence",
      description: "Cloud, DevOps, and FinOps done right with leading partners.",
      image: "/services/cloud.png",
      size: "medium"
    },
    {
      title: "Radical Transparency",
      description: "Clear processes, verifiable metrics, and open communication.",
      image: "/services/transparency.png",
      size: "medium"
    },
    {
      title: "24/7 Support",
      description: "Always-on operations and support with clear SLAs.",
      image: "/services/support.png",
      size: "small"
    },
    {
      title: "Genuine Collaboration",
      description: "We embed with your team—shared risks, shared success.",
      image: "/services/collaboration.png",
      size: "small"
    },
    {
      title: "Local Impact, Global Reach",
      description: "Canary Islands talent, global delivery—building a true tech hub.",
      image: "/services/global.png",
      size: "small"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-primary text-sm font-medium mb-4">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display mb-6">
            The DevCloud Partners Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just provide cloud services - we become your strategic partner in digital transformation
          </p>
        </div>

        {/* Balanced 3x2 Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
                ? 'h-36 md:h-44'
                : (index === 1 ? 'h-28 md:h-32' : 'h-24 md:h-28');
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer h-96 ${spanClass}`.trim()}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${gradient}`} />
                  <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-brand-dark font-display">
                        {reason.title}
                      </h3>
                      <p className="text-base text-gray-700 leading-relaxed">
                        {reason.description}
                      </p>
                      <div className="w-10 h-1 bg-brand-accent rounded-full mt-2 transition-all duration-300 group-hover:w-16" />
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
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            Ready to experience the difference? Let's discuss how we can help optimize your cloud infrastructure 
            and transform your business with transparent, results-driven cloud solutions.
          </p>
          <button className="bg-brand-accent hover:bg-brand-accent-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            Start Your Cloud Journey
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
