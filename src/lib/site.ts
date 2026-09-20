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

/** Public-facing address — footer, mailto links, structured data. */
export const CONTACT_EMAIL = "info@apexstrategy.io";

/**
 * Everyone who should receive a copy of Contact form and CISO Roundtable
 * submissions. Dinner seat requests use their own list in the
 * event-registration route. Internal only: never rendered on the site.
 */
export const ENQUIRY_RECIPIENTS = [
  CONTACT_EMAIL,
  "antonio@ortusclub.com",
  "jhan@apexstrategy.io",
];

export const LINKEDIN_URL =
  "https://www.linkedin.com/company/apex-guesting-partner/";

/**
 * Two routes to a conversation, and only two. Booking is the primary action
 * for anyone ready to talk; the enquiry form is for anyone who would rather
 * send their event details first. Keeping the labels and paths in constants
 * stops the pair drifting apart between sections.
 *
 * Neither invites the visitor to an Apex event — we do not run events. Both
 * start a conversation about delegate acquisition for *their* event.
 */
export const CTA_PRIMARY = "Book a Call";
/**
 * Where Book a Call points is NOT here — it leaves the site for Calendly and
 * lives in @/lib/scheduler, driven by NEXT_PUBLIC_SCHEDULER_URL. Use
 * @/components/BookACallLink rather than building the link by hand.
 *
 * What stays here is the enquiry route, which is a page on this site.
 *
 * Relative on purpose: it resolves to https://apexstrategy.io/... in
 * production and still works against a local dev server.
 */

/**
 * The quieter alternative. Labelled with CONTACT_EMAIL wherever it appears,
 * but pointed at the enquiry form rather than a mailto: the form reaches the
 * same inbox and arrives with the event details already filled in.
 */
export const CTA_SECONDARY_PATH = "/contact#enquiry-form";

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
