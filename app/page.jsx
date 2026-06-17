import Hero from "@/components/home/Hero";
import Marquee from "@/components/Marquee";
import Philosophy from "@/components/home/Philosophy";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutTeaser from "@/components/home/AboutTeaser";
import Praxis from "@/components/home/Praxis";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Philosophy />
      <ServicesPreview />
      <AboutTeaser />
      <Praxis />
      <ContactSection />
    </>
  );
}
