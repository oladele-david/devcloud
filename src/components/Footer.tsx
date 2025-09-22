import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { HugeiconsIcon } from "@hugeicons/react"
import { Location01Icon, Mail01Icon } from "@hugeicons/core-free-icons"

const Footer = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

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
                <a href="#top" className="inline-flex" aria-label="Back to top">
                  <img src="/footer.svg" alt="DevCloud Partners Logo" className="h-8 w-auto" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                From the Canary Islands to the world
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <HugeiconsIcon icon={Location01Icon} size={16} />
                  <span>Canary Islands, Spain</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <HugeiconsIcon icon={Mail01Icon} size={16} />
                  <span>holla@devcloudpartners.com</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h3 className="text-base md:text-lg font-semibold">Services</h3>
              <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Cloud Cost Optimization</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">DevOps & Infrastructure</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Cloud Architecture</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Managed Services</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <h3 className="text-base md:text-lg font-semibold">Company</h3>
              <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">How We Work</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3 sm:col-span-2 lg:col-span-1">
              <h3 className="text-base md:text-lg font-semibold">Legal</h3>
              <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Copyright */}
        <div className="py-6 md:py-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm mb-1.5 md:mb-2">
            © 2025 DevCloud Partners. All rights reserved.
          </p>
          <p className="text-gray-500 text-[11px] md:text-xs">
            Powered By: QUEVEDO TECH GROUP S.L.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
