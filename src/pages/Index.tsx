import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import PartnerSection from "@/components/PartnerSection"
import ServicesSection from "@/components/ServicesSection"
import WhyChooseUsSection from "@/components/WhyChooseUsSection"
import StatsSection from "@/components/StatsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PartnerSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
