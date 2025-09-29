import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const TestimonialsSection = () => {
  const { t } = useTranslation()
  const marqueeRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (marqueeRef.current) {
      const marquee = marqueeRef.current
      const marqueeContent = marquee.querySelector('.marquee-content') as HTMLElement
      
      if (marqueeContent) {
        // Duplicate content for seamless loop
        marqueeContent.innerHTML += marqueeContent.innerHTML
        
        // GSAP animation for smooth infinite scroll
        const isMobile = window.matchMedia('(max-width: 640px)').matches
        const duration = isMobile ? 15 : 25
        gsap.to(marqueeContent, {
          x: '-50%',
          duration,
          ease: 'none',
          repeat: -1
        })
      }
    }
  }, [])
  
  const testimonials = [
    {
      author: {
        name: "María González",
        handle: "@mariag_tech",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: t('testimonials.items.0.text'),
    },
    {
      author: {
        name: "Carlos Rodríguez",
        handle: "@carlos_devops",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: t('testimonials.items.1.text'),
    },
    {
      author: {
        name: "Ana Martínez",
        handle: "@ana_cloud",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: t('testimonials.items.2.text'),
    },
    {
      author: {
        name: "Diego Fernández",
        handle: "@diego_finops",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: t('testimonials.items.3.text'),
    },
    {
      author: {
        name: "Ismael Martín – Cloudima",
        handle: "@cloudima_ai",
        avatar: "/partners/cloudima-cl.png"
      },
      text: t('testimonials.items.4.text'),
    },
    {
      author: {
        name: "Laura Sánchez",
        handle: "@laura_architect",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: t('testimonials.items.5.text'),
    },
    
  ]

  return (
    <section className={cn("bg-white py-12 sm:py-24 md:py-32")}> 
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {t('testimonials.title')}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-slate-500 sm:text-xl">
            {t('testimonials.desc')}
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="group flex flex-col gap-6">
            <div 
              ref={marqueeRef}
              className="overflow-hidden relative"
            >
              <div className="marquee-content flex shrink-0 items-stretch gap-4">
                {testimonials.map((testimonial, i) => (
                <div
                  key={`testimonial-${i}`}
                  className="flex-shrink-0 w-[280px] sm:w-[320px]"
                >
                  <div className="bg-white border border-slate-200 rounded-xl p-4 h-full">
                    {/* Author - Top Left */}
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={testimonial.author.avatar}
                        alt={testimonial.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-slate-900 text-sm">
                          {testimonial.author.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          {testimonial.author.handle}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Text - Below, Left Aligned */}
                    <div className="text-slate-700 text-sm leading-relaxed text-left">
                      {testimonial.text}
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-white sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-white sm:block" />
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection