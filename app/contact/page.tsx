import ContactHeroSection from '../../components/contact/ContactHeroSection';
import ContactFormSection from '../../components/contact/ContactFormSection';
import ContactInfoSection from '../../components/contact/ContactInfoSection';

const ContactPage = () => {
  return (
    <div className="relative">
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
    </div>
  );
};

export default ContactPage;
