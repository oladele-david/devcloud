import { HugeiconsIcon } from "@hugeicons/react"
import { MenuIcon, ArrowDown01Icon } from "@hugeicons/core-free-icons"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { useTranslation } from "react-i18next"

const Header = () => {
  const { t, i18n } = useTranslation()
  const headerRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    if (!mobileMenuRef.current) return
    if (mobileOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: '100%' },
        { x: 0, duration: 0.3, ease: 'power2.out' }
      )
    } else {
      gsap.to(mobileMenuRef.current, { x: '100%', duration: 0.25, ease: 'power2.in' })
    }
  }, [mobileOpen])

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
            <a href="#services" className="text-gray-700 hover:text-brand-primary transition-colors duration-200 font-medium">
              {t('nav.services')}
            </a>
            {/* About Us dropdown (hover with safe hover area) */}
            <div className="relative group">
              <button className="inline-flex items-center gap-1.5 text-gray-700 hover:text-brand-primary transition-colors duration-200 font-medium">
                {t('nav.about')}
                <HugeiconsIcon icon={ArrowDown01Icon} size={16} className="text-gray-400 group-hover:text-brand-primary transition-transform duration-200" />
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
                <HugeiconsIcon icon={ArrowDown01Icon} size={16} className="text-gray-400 group-hover:text-brand-primary transition-transform duration-200" />
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

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <button 
          className="fixed inset-0 bg-black/40 backdrop-blur-[1px] lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu overlay"
        />
      )}

      {/* Slide-in Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden z-[60]"
        style={{ transform: 'translateX(100%)' }}
        aria-hidden={!mobileOpen}
      >
        <div className="h-16 flex items-center justify-between px-5 border-b border-gray-100">
          <span className="font-semibold text-gray-900">Menu</span>
          <button
            className="p-2 text-gray-600 hover:text-brand-primary"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <nav className="p-5 space-y-2">
          {/* Services with slide-out submenu */}
          <div>
            <button
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-gray-800 hover:bg-gray-50"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-controls="mobile-services-submenu"
            >
              <span>Services</span>
              <span className={`transition-transform duration-200 ${servicesOpen ? 'rotate-90' : ''}`}>›</span>
            </button>
            <div
              id="mobile-services-submenu"
              className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="mt-1 ml-3 border-l border-gray-100">
                <a href="#services" className="block pl-4 pr-3 py-2 text-gray-700 hover:bg-gray-50 rounded-r-lg">Cloud Cost Optimization</a>
                <a href="#services" className="block pl-4 pr-3 py-2 text-gray-700 hover:bg-gray-50 rounded-r-lg">DevOps & Infrastructure</a>
                <a href="#services" className="block pl-4 pr-3 py-2 text-gray-700 hover:bg-gray-50 rounded-r-lg">Cloud Architecture</a>
                <a href="#services" className="block pl-4 pr-3 py-2 text-gray-700 hover:bg-gray-50 rounded-r-lg">Managed Services</a>
                <a href="#services" className="block pl-4 pr-3 py-2 text-gray-700 hover:bg-gray-50 rounded-r-lg">Software Engineering</a>
              </div>
            </div>
          </div>
          {/* About submenu for mobile (collapsible) */}
          <div>
            <button
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-gray-800 hover:bg-gray-50"
              onClick={() => setAboutOpen((v) => !v)}
              aria-expanded={aboutOpen}
              aria-controls="mobile-about-submenu"
            >
              <span>About Us</span>
              <span className={`transition-transform duration-200 ${aboutOpen ? 'rotate-90' : ''}`}>›</span>
            </button>
            <div
              id="mobile-about-submenu"
              className={`overflow-hidden transition-all duration-300 ${aboutOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="mt-1 ml-3 border-l border-gray-100">
                <a href="#about" className="block pl-4 pr-3 py-2 text-gray-700 hover:bg-gray-50 rounded-r-lg">{t('nav.ourStory')}</a>
                <a href="#methodology" className="block pl-4 pr-3 py-2 text-gray-700 hover:bg-gray-50 rounded-r-lg">{t('nav.methodology')}</a>
              </div>
            </div>
          </div>
          <a href="#" className="block px-3 py-3 rounded-lg text-gray-800 hover:bg-gray-50">Portfolio</a>
          {/* Resources (Blog, Careers) for mobile - collapsible */}
          <div className="ml-0">
            <button
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-gray-800 hover:bg-gray-50"
              onClick={() => setResourcesOpen((v) => !v)}
              aria-expanded={resourcesOpen}
              aria-controls="mobile-resources-submenu"
            >
              <span>Resources</span>
              <span className={`transition-transform duration-200 ${resourcesOpen ? 'rotate-90' : ''}`}>›</span>
            </button>
            <div
              id="mobile-resources-submenu"
              className={`overflow-hidden transition-all duration-300 ${resourcesOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="ml-3 border-l border-gray-100">
                <a href="#blog" className="block pl-4 pr-3 py-2 text-gray-700 hover:bg-gray-50 rounded-r-lg">{t('nav.blog')}</a>
                <a href="#careers" className="block pl-4 pr-3 py-2 text-gray-700 hover:bg-gray-50 rounded-r-lg">{t('nav.careers')}</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="px-5 pt-2 pb-6 border-t border-gray-100">
          <button className="w-full bg-brand-accent hover:bg-brand-accent-700 text-white px-5 py-3 rounded-full font-medium transition-colors duration-200">
            Contact
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

