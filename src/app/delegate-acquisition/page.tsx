import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";
import { getService } from "@/lib/site";

const service = getService("delegate-acquisition");

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
  alternates: { canonical: `/${service.slug}` },
  openGraph: {
    title: `${service.title} | Apex Strategy`,
    description: service.description,
    url: `/${service.slug}`,
  },
  twitter: {
    title: `${service.title} | Apex Strategy`,
    description: service.description,
  },
};

/** Copy lifted verbatim from the homepage Solution section. */
const POINTS = [
  "Targeted outreach to named accounts & job titles",
  "Multi-channel approach: phone, email, LinkedIn",
  "Senior decision-makers: C-suite, VP, Director level",
  "Confirmation & reminder management included",
  "Detailed attendee profiles delivered before the event",
];

export default function DelegateAcquisitionPage() {
  return <ServicePageShell service={service} points={POINTS} />;
}
