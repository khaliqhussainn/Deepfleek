import AboutHeroSection from '../../components/about/AboutHeroSection';
import About from '../../components/about/OurStorySection';
import MissionSection from '../../components/about/MissionSection';
import ValuesSection from '../../components/about/Value';
import StatsSection from '../../components/about/Stats';
// import TimelineSection from '../../components/about/TimelineSection';
import TeamSection from '../../components/about/TeamSection';
// import CTASection from '../../components/about/CTASection';

const AboutPage = () => {
  return (
    <div className="relative">
      <AboutHeroSection />
      <About />
      <MissionSection />
      <StatsSection />
      {/* <TimelineSection /> */}
      <TeamSection />
      {/* <CTASection /> */}
    </div>
  );
};

export default AboutPage;