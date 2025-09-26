import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InteractiveSelector from '@/components/portfolio/InteractiveSelector';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import SectionSeparator from '@/components/methodology/SectionSeparator';
import IndustriesBento from '@/components/portfolio/IndustriesBento';


const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Header />

			{/* Interactive Portfolio Selector - compact top spacing */}
			<InteractiveSelector compact />

			{/* Stats Section with separators */}
			<SectionSeparator />
			<StatsSection />
			<SectionSeparator />

			{/* Industries (Bento) */}
			<IndustriesBento />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Portfolio;
