/**
 * Delivered event showcase.
 *
 * ⚠️ CONFIRM BEFORE PUBLISHING ⚠️
 *
 * These entries make public claims about work delivered for named partners.
 * Only the two campaigns named in the brief are listed, and each is described
 * in terms of the service provided — no delegate counts, attendance figures
 * or outcome statistics have been invented.
 *
 * Every field marked below still needs sign-off from the client, and the two
 * partners named should agree to being referenced before this goes live:
 *   - location  — inferred from the campaign name, not confirmed
 *   - year      — not confirmed
 *   - partner   — needs permission to name publicly
 *
 * Add further events by appending to this array; the section renders whatever
 * it is given.
 */

export type DeliveredEvent = {
  name: string;
  /** CONFIRM: inferred, not verified. */
  location: string;
  /** CONFIRM: not verified. */
  year: string;
  type: string;
  description: string;
};

export const DELIVERED_EVENTS: DeliveredEvent[] = [
  {
    name: "IT Security Leaders Après Dinner",
    // CONFIRM: carried over from the previous "Aphinia at Fal.Con" entry,
    // which was a Las Vegas campaign. Renaming and re-dating this card to
    // 2026 may well have moved the venue with it — verify before publishing.
    location: "Las Vegas, United States",
    year: "2026",
    type: "Executive roundtable",
    description:
      "Delegate acquisition for a senior cybersecurity roundtable convened alongside a major industry conference, targeting CISOs and heads of security attending the wider event.",
  },
  {
    name: "AI Impact Brisbane",
    location: "Brisbane, Australia",
    year: "2025",
    type: "Executive briefing",
    description:
      "An executive briefing on enterprise AI adoption, with outreach focused on technology and data leaders across the Australian market.",
  },
];

/**
 * Upcoming events, newest first.
 *
 * ⚠️ CONFIRM BEFORE PUBLISHING ⚠️
 *
 * The single entry below is transcribed from the existing event page at
 * `/event/security-leaders` — nothing here has been invented. Two things
 * still need a decision before this list goes public:
 *
 *   1. That event page is deliberately `noindex` and invitation-only.
 *      Linking to it from a public Events page makes it discoverable to
 *      anyone browsing the site. Set `href` to undefined to list the event
 *      without linking to its registration page.
 *   2. Whether the partner (Aphinia) is happy to be named here as well as
 *      on the event page itself.
 *
 * Add further events by appending to this array; the page renders whatever
 * it is given, and hides the section entirely when the array is empty.
 */

export type UpcomingEvent = {
  name: string;
  /** Human-readable date, e.g. "30 June 2026". */
  date: string;
  /** Machine-readable date for <time datetime>, e.g. "2026-06-30". */
  dateISO: string;
  location: string;
  type: string;
  description: string;
  /** Registration page. Omit to list the event without a link. */
  href?: string;
  /** Co-host or partner, if the event is run with one. */
  partner?: string;
};

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    name: "Securing the Enterprise — A CISO Roundtable",
    date: "30 June 2026",
    dateISO: "2026-06-30",
    location: "Ada's on the River, Alexandria, VA",
    type: "Executive dinner",
    description:
      "An invitation-only executive dinner for North America's senior cybersecurity leaders, covering AI adoption and risk, communicating cyber risk to the board, and where to invest in the year ahead.",
    href: "/event/security-leaders",
    partner: "Aphinia",
  },
];
