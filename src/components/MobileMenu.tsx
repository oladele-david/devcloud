import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  const { t } = useTranslation();
  const [aboutOpen, setAboutOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!panelRef.current) return;
    if (open) {
      gsap.fromTo(panelRef.current, { x: "100%" }, { x: 0, duration: 0.3, ease: "power2.out" });
    } else {
      gsap.to(panelRef.current, { x: "100%", duration: 0.25, ease: "power2.in" });
    }
  }, [open]);

  return (
    <>
      {open && (
        <button
          className="fixed inset-0 bg-black/40 backdrop-blur-[1px] lg:hidden"
          onClick={onClose}
          aria-label="Close menu overlay"
        />
      )}
      <div
        ref={panelRef}
        className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden z-[60]"
        style={{ transform: "translateX(100%)" }}
        aria-hidden={!open}
      >
        <div className="h-16 flex items-center justify-between px-5 border-b border-gray-100">
          <span className="font-semibold text-gray-900">Menu</span>
          <button className="p-2 text-gray-600 hover:text-brand-primary" onClick={onClose} aria-label="Close menu">
            ✕
          </button>
        </div>
        <nav className="p-5 space-y-2">
          <Link to="/" className="block px-3 py-3 rounded-lg text-gray-800 hover:bg-gray-50" onClick={onClose}>
            Home
          </Link>
          {/* Direct Services link (keep only this, no dropdown) */}
          <Link to="/services" className="block px-3 py-3 rounded-lg text-gray-800 hover:bg-gray-50" onClick={onClose}>
            {t("nav.services")}
          </Link>

          {/* Portfolio link */}
          <Link to="/portfolio" className="block px-3 py-3 rounded-lg text-gray-800 hover:bg-gray-50" onClick={onClose}>
            {t("nav.portfolio")}
          </Link>

          {/* About submenu for mobile (collapsible) */}
          <div>
            <button
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-gray-800 hover:bg-gray-50"
              onClick={() => setAboutOpen((v) => !v)}
              aria-expanded={aboutOpen}
              aria-controls="mobile-about-submenu"
            >
              <span>{t("nav.about")}</span>
              <span className={`transition-transform duration-200 ${aboutOpen ? "rotate-90" : ""}`}>›</span>
            </button>
            <div
              id="mobile-about-submenu"
              className={`${aboutOpen ? "block" : "hidden"}`}
            >
              <div className="mt-1 ml-3 border-l border-gray-100">
                <Link to="/about/story" className="block pl-4 pr-3 py-2 text-gray-700 hover:bg-gray-50 rounded-r-lg" onClick={onClose}>
                  {t("nav.ourStory")}
                </Link>
                <Link to="/about/methodology" className="block pl-4 pr-3 py-2 text-gray-700 hover:bg-gray-50 rounded-r-lg" onClick={onClose}>
                  {t("nav.methodology")}
                </Link>
              </div>
            </div>
          </div>

          {/* Resources submenu for mobile (collapsible) */}
          <div>
            <button
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-gray-800 hover:bg-gray-50"
              onClick={() => setResourcesOpen((v) => !v)}
              aria-expanded={resourcesOpen}
              aria-controls="mobile-resources-submenu"
            >
              <span>{t("nav.resources")}</span>
              <span className={`transition-transform duration-200 ${resourcesOpen ? "rotate-90" : ""}`}>›</span>
            </button>
            <div
              id="mobile-resources-submenu"
              className={`${resourcesOpen ? "block" : "hidden"}`}
            >
              <div className="mt-1 ml-3 border-l border-gray-100">
                {/* <Link to="/blog" className="block pl-4 pr-3 py-2 text-gray-700 hover:bg-gray-50 rounded-r-lg" onClick={onClose}>
                  {t("nav.blog")}
                </Link> */}
                <Link to="/careers" className="block pl-4 pr-3 py-2 text-gray-700 hover:bg-gray-50 rounded-r-lg" onClick={onClose}>
                  {t("nav.careers")}
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="px-5 pt-2 pb-6 border-t border-gray-100">
          <Link 
            to="/contact"
            className="block w-full bg-brand-accent hover:bg-brand-accent-700 text-white px-5 py-3 rounded-full font-medium transition-colors duration-200 text-center"
            onClick={onClose}
          >
            {t("cta.contact")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
