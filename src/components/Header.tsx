import { HugeiconsIcon } from "@hugeicons/react"
import { MenuIcon } from "@hugeicons/core-free-icons"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)

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
    <header className="bg-white/95 backdrop-blur-sm0 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/logo.svg"
              alt="DevCloud Partners Logo"
              className="h-8 w-auto mr-3"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-brand-primary transition-colors duration-200 font-medium">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-brand-primary transition-colors duration-200 font-medium">
              Methodology
            </a>
            <a href="#" className="text-gray-700 hover:text-brand-primary transition-colors duration-200 font-medium">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-brand-primary transition-colors duration-200 font-medium">
              Portfolio
            </a>
            <a href="#" className="text-gray-700 hover:text-brand-primary transition-colors duration-200 font-medium">
              Resources
            </a>
            <a href="#" className="text-gray-700 hover:text-brand-primary transition-colors duration-200 font-medium">
              Careers
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            <button className="bg-brand-primary hover:bg-brand-primary-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
              Contact
            </button>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-600 hover:text-brand-primary transition-colors duration-200">
              <HugeiconsIcon icon={MenuIcon} size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
