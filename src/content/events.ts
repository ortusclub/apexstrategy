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
