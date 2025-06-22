import AboutHeroSection from '../../components/about/AboutHeroSection';
import About from '../../components/about/OurStorySection';
import MissionSection from '../../components/about/MissionSection';

const AboutPage = () => {
  return (
    <div className="relative">
      <AboutHeroSection />
      <About />
      <MissionSection />
      {/* <TimelineSection /> */}
      {/* <CTASection /> */}
    </div>
  );
};

export default AboutPage;