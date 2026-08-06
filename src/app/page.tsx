import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogosBar from "@/components/LogosBar";
import PainCards from "@/components/PainCards";
import Timeline from "@/components/Timeline";
import NoWinNoFee from "@/components/NoWinNoFee";
import Solution from "@/components/Solution";
import Testimonials from "@/components/Testimonials";
import EventShowcase from "@/components/EventShowcase";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main id="main-content">
        <Hero />
        <LogosBar prominent />
        <PainCards />
        <Timeline />
        <NoWinNoFee />
        <Solution />
        <Testimonials />
        <EventShowcase />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
