import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { HugeiconsIcon } from "@hugeicons/react"
import { Location01Icon, Mail01Icon } from "@hugeicons/core-free-icons"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const Footer = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
    }
  }, [])

  return (
    <footer ref={sectionRef} className="bg-gray-800 text-white rounded-t-2xl md:rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Company Info */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <Link to="/" className="inline-flex" aria-label="Back to top">
                  <img src="/footer.svg" alt="DevCloud Partners Logo" className="h-8 w-auto" />
                </Link>
              </div>
              <p className="text-gray-400 text-sm">
                {t('footer.tagline')}
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <HugeiconsIcon icon={Location01Icon} size={16} />
                  <span>{t('footer.location')}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <HugeiconsIcon icon={Mail01Icon} size={16} />
                  <span>
                    <a href="mailto:holla@devcloudpartners.com" className="hover:text-white transition-colors duration-200">
                      {t('footer.email')}
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h3 className="text-base md:text-lg font-semibold">{t('footer.services.title')}</h3>
              <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-sm">
                <li>
                  <Link to="/services#finops" className="hover:text-white transition-colors duration-200">
                    {t('footer.services.optimization')}
                  </Link>
                </li>
                <li>
                  <Link to="/services#devops" className="hover:text-white transition-colors duration-200">
                    {t('footer.services.devops')}
                  </Link>
                </li>
                <li>
                  <Link to="/services#architecture" className="hover:text-white transition-colors duration-200">
                    {t('footer.services.architecture')}
                  </Link>
                </li>
                <li>
                  <Link to="/services#managed" className="hover:text-white transition-colors duration-200">
                    {t('footer.services.managed')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <h3 className="text-base md:text-lg font-semibold">{t('footer.company.title')}</h3>
              <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-sm">
                <li>
                  <Link to="/about/story" className="hover:text-white transition-colors duration-200">
                    {t('footer.company.about')}
                  </Link>
                </li>
                <li>
                  <Link to="/about/methodology" className="hover:text-white transition-colors duration-200">
                    {t('footer.company.methodology')}
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:text-white transition-colors duration-200">
                    {t('footer.company.portfolio')}
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-white transition-colors duration-200">
                    {t('footer.company.careers')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3 sm:col-span-2 lg:col-span-1">
              <h3 className="text-base md:text-lg font-semibold">{t('footer.legal.title')}</h3>
              <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-sm">
                <li>
                  <Link to="/privacy-policy" className="hover:text-white transition-colors duration-200">
                    {t('footer.legal.privacy')}
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="hover:text-white transition-colors duration-200">
                    {t('footer.legal.cookies')}
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white transition-colors duration-200">
                    {t('footer.legal.terms')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Copyright */}
        <div className="py-6 md:py-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm mb-1.5 md:mb-2">
            {t('footer.copyright')}
          </p>
          <p className="text-gray-500 text-[11px] md:text-xs">
            {t('footer.poweredBy')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
