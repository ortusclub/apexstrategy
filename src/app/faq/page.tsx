import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { FAQS } from "@/content/faq";

const TITLE = "FAQs";
const DESCRIPTION =
  "How no win, no fee delegate acquisition works: pricing, campaign timelines, delegate qualification, country coverage and what happens if attendance targets are missed.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `${TITLE} | Apex Strategy`,
    description: DESCRIPTION,
    url: "/faq",
  },
  twitter: {
    title: `${TITLE} | Apex Strategy`,
    description: DESCRIPTION,
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQs", path: "/faq" },
];

export default function FaqPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <section className="pt-32 pb-16 hero-grid-bg">
          <div className="max-w-3xl mx-auto px-6">
            <Breadcrumbs crumbs={crumbs} />

            <div className="flex items-center gap-3 mt-8 mb-4">
              <span className="w-8 h-0.5 bg-accent" aria-hidden="true"></span>
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                Questions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Frequently asked questions
            </h1>

            <p className="text-text-light text-lg leading-relaxed">
              How our no win, no fee model works in practice — pricing,
              timelines, qualification and coverage.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-3xl mx-auto px-6">
            <FaqList />
          </div>
        </section>

        <CtaSection />
      </main>

      <Footer />

      <JsonLd data={[faqSchema(FAQS, "/faq"), breadcrumbSchema(crumbs)]} />
    </>
  );
}
