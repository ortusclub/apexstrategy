import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogosBar from "@/components/LogosBar";
import Timeline from "@/components/Timeline";
import NoWinNoFee from "@/components/NoWinNoFee";
import PainCards from "@/components/PainCards";
import Solution from "@/components/Solution";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import OtherServices from "@/components/OtherServices";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <LogosBar />
      <Timeline />
      <NoWinNoFee />
      <PainCards />
      <Solution />
      <Process />
      <Testimonials />
      <OtherServices />
      <ContactForm />
      <Footer />
    </>
  );
}
