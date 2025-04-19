import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import CollaborationSection from "@/components/CollaborationSection";
import QualitySection from "@/components/QualitySection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "../components/FAQSection";
import ProductShowcase from "../components/ProductShowcase";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <ProductShowcase />
      {/* Hiding CollaborationSection for now */}
      {false && <CollaborationSection />}
      <QualitySection />
      <TimelineSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
