import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import OffersSection from "@/components/OffersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OffersSection />
      <TestimonialsSection />
      <WhyUsSection />
      <ContactSection />
      <FloatingButtons />
      <Footer />
    </div>
  );
};

export default Index;
