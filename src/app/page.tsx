import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import MenuSection from "@/components/sections/menu-section";
import GallerySection from "@/components/sections/gallery-section";
import LocationSection from "@/components/sections/location-section";
import ReviewsSection from "@/components/sections/reviews-section";
import ContactSection from "@/components/sections/contact-section";
import WhatsAppButton from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <LocationSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
