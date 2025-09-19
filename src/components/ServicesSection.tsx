import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const servicesRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      title: "Cloud Cost Optimization",
      subtitle: "FinOps Excellence",
      description: "Reduce and control cloud spending with our comprehensive FinOps service",
      image: "/services/cloud.png",
      badge: "FinOps"
    },
    {
      title: "DevOps & Infrastructure",
      subtitle: "Automated Operations",
      description: "Manage your cloud infrastructure with reliable automation and CI/CD",
      image: "/services/devops.png",
      badge: "DevOps"
    },
    {
      title: "Cloud Architecture",
      subtitle: "Migration & Design",
      description: "Design and execute robust cloud architectures and seamless migrations",
      image: "/services/architecture.png",
      badge: "Architecture"
    },
    {
      title: "Managed Services",
      subtitle: "24/7 Support",
      description: "Comprehensive operations and continuous support with agreed SLAs",
      image: "/services/managed.png",
      badge: "Support"
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

  return (
    <section ref={servicesRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-brand-primary text-sm font-medium mb-2">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display">
              Comprehensive Cloud Solutions
            </h2>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex space-x-3">
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
          >
            {services.map((service, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: 'cover'
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-8">
                    {/* Badge */}
                    <div className="self-end">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-gray-900 text-sm font-medium">
                        {service.badge}
                      </span>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-white transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-lg font-medium">
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

        {/* Bottom Description */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            We provide end-to-end cloud solutions that optimize costs, enhance performance, and ensure reliability. 
            Our success-based model means you only pay for the value we deliver, with transparent reporting and 
            measurable results across all our services.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
