import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";
import { getService } from "@/lib/site";

const service = getService("appointment-setting");

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

export default function AppointmentSettingPage() {
  return <ServicePageShell service={service} />;
}
