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

export const CONTACT_EMAIL = "info@apexstrategy.io";

export const LINKEDIN_URL =
  "https://www.linkedin.com/company/apex-guesting-partner/";

/**
 * One primary call to action across the whole site, and one secondary.
 * Keeping these in constants stops the wording drifting between sections.
 */
export const CTA_PRIMARY = "Book a Call";
export const CTA_SECONDARY = "Request a Delegate Strategy";

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
  /**
   * Whether the route belongs in the sitemap and may be indexed.
   * Appointment Setting and Data Services are currently a paragraph each;
   * indexing them would put two thin pages into the site's SEO footprint.
   * Flip to true once each has real content.
   */
  indexable: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "delegate-acquisition",
    name: "Delegate Acquisition",
    title: "Delegate Acquisition",
    description:
      "We fill executive events with qualified decision-makers through targeted, multi-channel outreach — on a genuine no win, no fee basis.",
    indexable: true,
  },
  {
    slug: "appointment-setting",
    name: "Appointment Setting",
    title: "Appointment Setting",
    description:
      "Qualified meetings booked directly into your sales team's calendar. We handle the outreach, qualification, and scheduling so your team focuses on closing.",
    indexable: false,
  },
  {
    slug: "data-services",
    name: "Data Services",
    title: "Data Services",
    description:
      "Verified, targeted contact data for your campaigns. We build bespoke prospect lists matched to your ICP — complete with direct dials, verified emails, and key firmographic data.",
    indexable: false,
  },
];

export function getService(slug: ServiceSlug): Service {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service slug: ${slug}`);
  return service;
}
