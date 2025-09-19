import { TestimonialsSection as TestimonialsMarquee } from "@/components/ui/testimonials-with-marquee"

const TestimonialsSection = () => {
  const testimonials = [
    {
      author: {
        name: "María González",
        handle: "@mariag_tech",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "DevCloud Partners reduced our infrastructure costs by 45%. Their transparent, results-driven approach is exceptional.",
    },
    {
      author: {
        name: "Carlos Rodríguez",
        handle: "@carlos_devops",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "The cloud migration was flawless. Zero downtime and a team that truly understands business needs.",
    },
    {
      author: {
        name: "Ana Martínez",
        handle: "@ana_cloud",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Their success-based model gives us complete confidence. We only pay when we see real value in our systems.",
    },
    {
      author: {
        name: "Diego Fernández",
        handle: "@diego_finops",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "24/7 support and continuous optimization have transformed our operations. Highly recommended.",
    },
    {
      author: {
        name: "Laura Sánchez",
        handle: "@laura_architect",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "Their AWS and Azure expertise helped us design a robust, scalable architecture. Excellent collaboration.",
    },
    {
      author: {
        name: "Roberto Vega",
        handle: "@roberto_cio",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      text: "From the Canary Islands to the world. A local team with global vision that truly delivers results.",
    }
  ]

  return (
    <TestimonialsMarquee
      title="What our clients say"
      description="Companies that trust DevCloud Partners to optimize their cloud infrastructure"
      testimonials={testimonials}
      className="bg-white"
    />
  )
}

export default TestimonialsSection
