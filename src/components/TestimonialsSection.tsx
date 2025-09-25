import { useTranslation } from "react-i18next"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { cn } from "@/lib/utils"

const TestimonialsSection = () => {
  const { t } = useTranslation()
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
      text: t('testimonials.items.0.text'),
    },
    {
      author: {
        name: "Ana Martínez",
        handle: "@ana_cloud",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: t('testimonials.items.1.text'),
    },
    {
      author: {
        name: "Diego Fernández",
        handle: "@diego_finops",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: t('testimonials.items.2.text'),
    },
    {
      author: {
        name: "Laura Sánchez",
        handle: "@laura_architect",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: t('testimonials.items.3.text'),
    },
    {
      author: {
        name: "Roberto Vega",
        handle: "@roberto_cio",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      text: t('testimonials.items.4.text'),
    }
  ]

  // Build two lanes for infinite loop effect, duplicating content per lane
  const lane = testimonials.concat(testimonials)

  return (
    <section className={cn("bg-white py-12 sm:py-24 md:py-32")}> 
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">{t('testimonials.title')}</h2>
          <p className="text-md max-w-[600px] font-medium text-slate-500 sm:text-xl">{t('testimonials.desc')}</p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="group flex flex-col gap-6">
            <div
              className="flex shrink-0 items-stretch gap-12 animate-marquee group-hover:[animation-play-state:paused]"
              style={{ animationDuration: '12s' }}
            >
              {lane.map((card, i) => (
                <TestimonialCard key={`lane1-${i}`} {...card} className="w-[560px] sm:w-[580px]" />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-white sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-white sm:block" />
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
