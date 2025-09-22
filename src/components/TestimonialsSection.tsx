import { TestimonialsSection as TestimonialsMarquee } from "@/components/ui/testimonials-with-marquee"
import { useTranslation } from "react-i18next"

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

  return (
    <TestimonialsMarquee
      title={t('testimonials.title')}
      description={t('testimonials.desc')}
      testimonials={testimonials}
      className="bg-white"
    />
  )
}

export default TestimonialsSection
