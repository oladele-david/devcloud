import { useState, useRef, useEffect } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Add01Icon, Remove01Icon } from "@hugeicons/core-free-icons"
import { gsap } from "gsap"
import { useTranslation } from "react-i18next"

const FAQSection = () => {
  const { t } = useTranslation()
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

  const faqs = (t('faq.qas', { returnObjects: true }) as Array<{ q: string; a: string }>).map((qa) => ({ question: qa.q, answer: qa.a }))

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Left Column - Title and Support */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-5xl font-bold text-gray-900 font-display mb-2.5 md:mb-4">
                {t('faq.title')}
              </h2>
              <p className="text-sm md:text-xl text-gray-600">
                {t('faq.subtitle')}
              </p>
            </div>
            
            <div className="pt-8">
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for? <br /> Contact our{" "}
                <a 
                  href="#contact" 
                  className="font-semibold text-brand-accent hover:text-brand-accent-700 transition-colors duration-200"
                >
                  {t('faq.support')}
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
                  className="w-full py-4 md:py-6 text-left flex items-center justify-between group hover:text-brand-primary transition-colors duration-200"
                >
                  <span className="text-base md:text-lg font-medium pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <HugeiconsIcon 
                      icon={openIndex === index ? Remove01Icon : Add01Icon} 
                      size={20} 
                      className="text-brand-accent group-hover:text-brand-accent-700 transition-colors duration-200"
                    />
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-out ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-5 md:pb-6 pr-8 md:pr-12">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
