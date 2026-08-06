/**
 * Single source of truth for site-wide constants.
 *
 * Everything here is derived from content that already existed in the
 * repository (the event page footer and the event-register API route).
 * No contact details, statistics, or claims have been invented.
 */

export const SITE_URL = "https://apexstrategy.io";

export const SITE_NAME = "Apex Strategy";

export const LEGAL_NAME = "Apex Guesting Limited";

export const CONTACT_EMAIL = "driton@apexstrategy.io";

export const SITE_DESCRIPTION =
  "Apex Strategy delivers qualified decision-makers to your events. No win, no fee. 12+ years, 40+ countries, 2,500+ events.";

/** Open Graph share image. Reuses the existing hero asset — no new artwork. */
export const OG_IMAGE = "/images/APEX-Strategy-Asset.webp";

export type ServiceSlug =
  | "delegate-acquisition"
  | "appointment-setting"
  | "data-services";

export type Service = {
  slug: ServiceSlug;
  /** Nav and breadcrumb label. */
  name: string;
  /** <h1> and JSON-LD service name. */
  title: string;
  /** Meta description and JSON-LD description. */
  description: string;
};

/**
 * The three service routes. Copy is lifted verbatim from the existing
 * homepage sections — nothing new has been written.
 */
export const SERVICES: Service[] = [
  {
    slug: "delegate-acquisition",
    name: "Delegate Acquisition",
    title: "Delegate Acquisition",
    description:
      "We get qualified decision-makers to your event. Every time. Targeted, multi-channel outreach to C-suite, VP and Director level attendees — on a no win, no fee basis.",
  },
  {
    slug: "appointment-setting",
    name: "Appointment Setting",
    title: "Appointment Setting",
    description:
      "Qualified meetings booked directly into your sales team's calendar. We handle the outreach, qualification, and scheduling so your team focuses on closing.",
  },
  {
    slug: "data-services",
    name: "Data Services",
    title: "Data Services",
    description:
      "Verified, targeted contact data for your campaigns. We build bespoke prospect lists matched to your ICP — complete with direct dials, verified emails, and key firmographic data.",
  },
];

export function getService(slug: ServiceSlug): Service {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service slug: ${slug}`);
  return service;
}
