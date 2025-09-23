import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StickyScrollReveal } from "@/components/services/StickyScrollReveal";
import { Process } from "@/components/services/Process";
import CTASection from "@/components/CTASection";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <StickyScrollReveal />
        <Process />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
