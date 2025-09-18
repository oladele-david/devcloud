import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import PartnerSection from "@/components/PartnerSection"
import ServicesSection from "@/components/ServicesSection"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PartnerSection />
      <ServicesSection />
    </div>
  );
};

export default Index;
