import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "./_components/Hero";
import LogosBar from "@/components/LogosBar";
import PainCards from "@/components/PainCards";
import Timeline from "./_components/Timeline";
import NoWinNoFee from "./_components/NoWinNoFee";
import Solution from "./_components/Solution";
import Testimonials from "@/components/Testimonials";
import EventShowcase from "@/components/EventShowcase";
import CtaSection from "./_components/CtaSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";


const description = "AI-first delegate acquisition for executive and B2B events. Intelligent prospecting, personalised outreach and expert campaign management, with a base campaign fee plus performance incentives.";

export const metadata: Metadata = {
  title: "AI-first B2B Delegate Acquisition",
  description,
  keywords: ["AI-first delegate acquisition", "B2B event attendance", "executive prospecting", "AI-powered guest acquisition"],
  alternates: { canonical: "/ai-first-hpage" },
  openGraph: { title: "The right executives. A smarter way to reach them.", description, url: "/ai-first-hpage" },
  twitter: { title: "AI-first delegate acquisition | Apex Strategy", description },
};

export default function AiFirstHomePage() {
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
      <Footer description="AI-first delegate acquisition for executive events. Powered by the Apex Precision Pipeline™." />
    </>
  );
}
