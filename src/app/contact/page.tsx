import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { breadcrumbSchema } from "@/lib/schema";

const TITLE = "Contact Us";
const DESCRIPTION =
  "Tell us about your event and we'll show you how we can fill it with qualified decision-makers. No win, no fee — we reply within one business day.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${TITLE} | Apex Strategy`,
    description: DESCRIPTION,
    url: "/contact",
  },
  twitter: {
    title: `${TITLE} | Apex Strategy`,
    description: DESCRIPTION,
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: TITLE, path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      <main id="main-content">
        <div className="pt-32 max-w-7xl mx-auto px-6">
          <Breadcrumbs crumbs={crumbs} />
        </div>

        <ContactForm as="h1" />
      </main>

      <Footer />

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
