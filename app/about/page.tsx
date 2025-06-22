import AboutHeroSection from '../../components/about/AboutHeroSection';
import OurStorySection from '../../components/about/OurStorySection';
import MissionSection from '../../components/about/MissionSection';
import TeamSection from '../../components/about/TeamSection';

const AboutPage = () => {
  return (
    <div className="relative">
      <AboutHeroSection />
      <OurStorySection />
      <MissionSection />
      <TeamSection />
    </div>
  );
};

export default AboutPage;
