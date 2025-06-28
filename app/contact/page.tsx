import ContactHeroSection from '../../components/contact/ContactHeroSection';
import ContactFormSection from '../../components/contact/ContactFormSection';
import ContactInfoSection from '../../components/contact/ContactInfoSection';
import ContactIntroSection from 'components/contact/ContactIntroSection';
import Contact from 'components/contact/ContactIntroSection';

const ContactPage = () => {
  return (
    <div className="relative">
      <ContactHeroSection />
      <ContactIntroSection />
      <ContactFormSection />
      <ContactInfoSection />
    </div>
  );
};

export default ContactPage;
