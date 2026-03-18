import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import CaseStudies from "@/components/CaseStudies";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Solutions />
      <CaseStudies />
      <TrustedBy />
      <Testimonials />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </>
  );
}
