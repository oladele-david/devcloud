import { HugeiconsIcon } from "@hugeicons/react"
import { MenuIcon, ArrowDown01Icon } from "@hugeicons/core-free-icons"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { useTranslation } from "react-i18next"
import MobileMenu from "./MobileMenu"

const Header = () => {
  const { t, i18n } = useTranslation()
  const headerRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, 
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="bg-white/95 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center" aria-label="Go to home">
            <img
              src="/logo.svg"
              alt="DevCloud Partners Logo"
              className="h-8 w-auto mr-3"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="/services" className="text-gray-700 hover:text-brand-primary transition-colors duration-200 font-medium">
              {t('nav.services')}
            </a>
            {/* About Us dropdown (hover with safe hover area) */}
            <div className="relative group">
              <button className="inline-flex items-center gap-1.5 text-gray-700 hover:text-brand-primary transition-colors duration-200 font-medium">
                {t('nav.about')}
                <HugeiconsIcon icon={ArrowDown01Icon} size={16} className="text-gray-400 group-hover:text-brand-primary transition-transform duration-200 group-hover:rotate-180" />
              </button>
              {/* Use top-full and padding-top to avoid hover gap */}
              <div className="pointer-events-none absolute left-0 top-full pt-3 w-56 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="rounded-xl border border-gray-100 bg-white shadow-xl p-2">
                  <a href="#about" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">{t('nav.ourStory')}</a>
                  <a href="#methodology" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">{t('nav.methodology')}</a>
                </div>
              </div>
            </div>
            <a href="#" className="text-gray-700 hover:text-brand-primary transition-colors duration-200 font-medium">
              {t('nav.portfolio')}
            </a>
            {/* Resources dropdown (Blog, Careers) */}
            <div className="relative group">
              <button className="inline-flex items-center gap-1.5 text-gray-700 hover:text-brand-primary transition-colors duration-200 font-medium">
                {t('nav.resources')}
                <HugeiconsIcon icon={ArrowDown01Icon} size={16} className="text-gray-400 group-hover:text-brand-primary transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="pointer-events-none absolute left-0 top-full pt-3 w-56 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="rounded-xl border border-gray-100 bg-white shadow-xl p-2">
                  <a href="#blog" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">{t('nav.blog')}</a>
                  <a href="#careers" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">{t('nav.careers')}</a>
                </div>
              </div>
            </div>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            <button className="hidden sm:inline-flex bg-brand-accent hover:bg-brand-accent-700 text-white px-5 py-2 rounded-full font-medium transition-colors duration-200">
              {t('cta.contact')}
            </button>
            {/* Language toggle */}
            <div className="flex items-center">
              <button
                className="px-2 py-1 rounded-full text-xs font-semibold border border-gray-300 text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  const next = i18n.language.startsWith('es') ? 'en' : 'es'
                  i18n.changeLanguage(next)
                  if ((window as any).switchLang) { (window as any).switchLang(next) }
                }}
                aria-label="Toggle language"
              >
                {i18n.language.startsWith('es') ? t('lang.en') : t('lang.es')}
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 text-gray-600 hover:text-brand-primary transition-colors duration-200"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <HugeiconsIcon icon={MenuIcon} size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu as separate component */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}

export default Header

