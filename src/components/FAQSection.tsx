import { useState, useRef, useEffect } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Add01Icon, Remove01Icon } from "@hugeicons/core-free-icons"
import { gsap } from "gsap"

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
    }
  }, [])

  const faqs = [
    {
      question: "How long does a typical cloud migration take?",
      answer: "Most migrations take 2-6 weeks depending on complexity. We provide detailed timelines during our initial assessment and keep you updated throughout the process."
    },
    {
      question: "What cloud providers do you work with?",
      answer: "We're certified partners with AWS, Microsoft Azure, Google Cloud, and DigitalOcean. We choose the best platform for your specific needs and budget."
    },
    {
      question: "How do you ensure zero downtime during migration?",
      answer: "We use proven migration strategies including blue-green deployments, rolling updates, and comprehensive testing to ensure seamless transitions with no business disruption."
    },
    {
      question: "What is your success-based pricing model?",
      answer: "We only charge a percentage of the cost savings we generate for you. If we don't save you money, you don't pay us. This aligns our success with yours."
    },
    {
      question: "Do you provide 24/7 support after migration?",
      answer: "Yes, we offer comprehensive 24/7 monitoring, incident response, and ongoing optimization to ensure your cloud infrastructure runs smoothly around the clock."
    },
    {
      question: "Can you help with existing cloud cost optimization?",
      answer: "Absolutely. We audit your current cloud spend, identify waste, and implement optimizations that typically reduce costs by 30-50% without affecting performance."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Title and Support */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display mb-4">
                FAQs
              </h2>
              <p className="text-xl text-gray-600">
                Your questions answered.
              </p>
            </div>
            
            <div className="pt-8">
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for? <br /> Contact our{" "}
                <a 
                  href="#contact" 
                  className="font-semibold text-brand-accent hover:text-brand-accent-700 transition-colors duration-200"
                >
                  customer support team
                </a>
              </p>
            </div>
          </div>

          {/* Right Column - FAQ List */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 text-left flex items-center justify-between group hover:text-brand-primary transition-colors duration-200"
                >
                  <span className="text-lg font-medium pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <HugeiconsIcon 
                      icon={openIndex === index ? Remove01Icon : Add01Icon} 
                      size={20} 
                      className="text-brand-accent group-hover:text-brand-accent-700 transition-colors duration-200"
                    />
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="pb-6 pr-12">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
