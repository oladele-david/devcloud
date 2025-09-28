import Toaster from "./components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./i18n";
import Services from "./pages/Services";
import AboutStory from "./pages/AboutStory";
import AboutMethodology from "./pages/AboutMethodology";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Portfolio from "./pages/Portfolio";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LegalNotice from "./pages/LegalNotice";
import CookiePolicy from "./pages/CookiePolicy";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import { CookieConsent } from "./components/cookies";
import { useCookieConsent } from "./hooks/useCookieConsent";

const queryClient = new QueryClient();

const AppContent = () => {
  const { hasConsent, acceptCookies, rejectCookies } = useCookieConsent();

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about/story" element={<AboutStory />} />
          <Route path="/about/methodology" element={<AboutMethodology />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BackToTop />
      </BrowserRouter>
      
      {/* Cookie Consent Banner */}
      {hasConsent === null && (
        <CookieConsent
          onAccept={acceptCookies}
          onReject={rejectCookies}
        />
      )}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
