import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/Features';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/About';
import ServicesSection from '../components/Service';
import ProcessSection from '../components/Process';
import TestimonialsSection from '../components/Testimonials';
import TechnologiesSection from '../components/Technologies';
import CTASection from '../components/CTA';

const HomePage = () => {
  return (
    <div className="relative">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      {/* <TechnologiesSection /> */}
      <CTASection />
    </div>
  );
};

export default HomePage;
