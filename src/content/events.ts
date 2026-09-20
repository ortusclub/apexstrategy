/**
 * Delivered campaign showcase — client events Apex supplied delegates for.
 *
 * Apex did not host, produce or organise any event listed here. Descriptions
 * must stay framed around the delegate acquisition we delivered.
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
 * Upcoming events, newest first — rendered on the public /events page.
 *
 * ⚠️ PUBLIC LISTING — PRIVATE EVENTS DO NOT BELONG HERE ⚠️
 *
 * Anything in this array is advertised to every visitor and linked from the
 * site's navigation. An invitation-only event is not public just because its
 * page exists: `/event/security-leaders` is deliberately `noindex`, and
 * listing it here made it discoverable to anyone browsing the site, which is
 * why it was removed.
 *
 * Before adding an entry, confirm that the event is genuinely public and
 * that any partner named is content to be named. If an event is invitation
 * only, keep its page unlisted and share the URL directly with guests.
 *
 * The page renders whatever this array contains and hides the section
 * entirely when it is empty — the September dinners are listed separately
 * from @/content/dinners.
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
  /**
   * Whoever convenes the event — the client or partner hosting it. Never
   * Apex: we supply the delegates, we do not organise the event.
   */
  host?: string;
};

export const UPCOMING_EVENTS: UpcomingEvent[] = [];
