/**
 * Aphinia CISO Executive Dinners — September 2026.
 *
 * Three invitation-only dinners co-hosted with Aphinia, a private community
 * for CISOs and senior cybersecurity executives.
 *
 * ⚠️ VENUE ADDRESSES ARE NOT PUBLISHED ⚠️
 *
 * Only `locality` (the area, e.g. "Scottsdale, Arizona") is public. The exact
 * venue and street address are shared with guests once a seat is confirmed,
 * so they are deliberately absent from this file — anything added here ships
 * to the browser.
 *
 * Each dinner's co-host is a real, named executive. Do not move a co-host
 * between dinners, and do not invent or substitute a LinkedIn URL.
 */

export type DinnerSlug =
  | "phoenix"
  | "greater-los-angeles"
  | "san-diego";

export type Dinner = {
  slug: DinnerSlug;
  /** Card and breadcrumb label. */
  city: string;
  /** <h1>, meta title and the label attached to each registration email. */
  title: string;
  /** Machine-readable date for <time datetime>. */
  dateISO: string;
  dateLabel: string;
  timeLabel: string;
  /** Public-facing area. Never the street address. */
  locality: string;
  evening: [string, string];
  conversation: [string, string];
  peers: [string, string];
  agenda: { time: string; what: string }[];
  coHost: {
    name: string;
    title: string;
    company: string;
    /** Existing profile URL — preserve exactly. */
    linkedin: string;
  };
};

/** Shown beneath the date on every dinner. */
export const INVITATION_TERMS = "By invitation · Complimentary · Limited seats";

/** Identical on all three dinners — the format does not change by city. */
const CONVERSATION: [string, string] = [
  "A candid discussion around the issues shaping the role of today's security leader — from evolving threats and emerging technologies to risk, resilience, leadership, and the realities of running a security programme.",
  "The conversation is intentionally open, allowing the group to explore the topics that matter most to the people around the table.",
];

const PEERS_DETAIL =
  "You'll meet people responsible for leading security across their organisations, each bringing a different perspective, experience, and set of challenges to the conversation.";

const EVENING_DETAIL =
  "There are no presentations or panels. Instead, the evening is built around an open discussion where leaders can compare experiences, challenge perspectives, and talk candidly about what is working — and what isn't.";

const AGENDA = [
  { time: "6:00 PM", what: "Cocktails and introductions" },
  { time: "7:00 PM", what: "Peer discussion around the table" },
  { time: "8:00 PM", what: "Dinner and open conversation" },
  { time: "9:00 PM", what: "Close" },
];

/** The Evening's opening line, which names the area the dinner is held in. */
function opening(place: string) {
  return `A private evening in ${place}, bringing together a select group of senior security leaders for three hours of honest, peer-to-peer conversation — away from presentations, panels, and the usual conference format.`;
}

export const DINNERS: Dinner[] = [
  {
    slug: "phoenix",
    city: "Phoenix",
    title: "CISO Executive Dinner — Phoenix",
    dateISO: "2026-09-21",
    dateLabel: "Monday, 21 September 2026",
    timeLabel: "6:00 PM – 9:00 PM MST",
    locality: "Scottsdale, Arizona",
    evening: [opening("Scottsdale"), EVENING_DETAIL],
    conversation: CONVERSATION,
    peers: [
      "A select group of CISOs, CSOs, and senior security leaders from across Phoenix and greater Arizona.",
      PEERS_DETAIL,
    ],
    agenda: AGENDA,
    coHost: {
      name: "Dina Mathers",
      title: "CISO",
      company: "Carvana",
      linkedin: "https://www.linkedin.com/in/dinamathers/",
    },
  },
  {
    slug: "greater-los-angeles",
    city: "Greater Los Angeles",
    title: "CISO Executive Dinner — Greater Los Angeles",
    dateISO: "2026-09-22",
    dateLabel: "Tuesday, 22 September 2026",
    timeLabel: "6:00 PM – 9:00 PM PST",
    locality: "Costa Mesa, California",
    evening: [opening("Costa Mesa"), EVENING_DETAIL],
    conversation: CONVERSATION,
    peers: [
      "A select group of CISOs, CSOs, and senior security leaders from across Greater Los Angeles and Southern California.",
      PEERS_DETAIL,
    ],
    agenda: AGENDA,
    coHost: {
      name: "Jeff Farinich",
      title: "CISO",
      company: "New American Funding",
      linkedin: "https://www.linkedin.com/in/jefffarinich/",
    },
  },
  {
    slug: "san-diego",
    city: "San Diego",
    title: "CISO Executive Dinner — San Diego",
    dateISO: "2026-09-23",
    dateLabel: "Wednesday, 23 September 2026",
    timeLabel: "6:00 PM – 9:00 PM PST",
    locality: "La Jolla, California",
    evening: [opening("La Jolla"), EVENING_DETAIL],
    conversation: CONVERSATION,
    peers: [
      "A select group of CISOs, CSOs, and senior security leaders from across San Diego and Southern California.",
      PEERS_DETAIL,
    ],
    agenda: AGENDA,
    coHost: {
      name: "Renana Friedlich",
      title: "CISO",
      company: "LPL Financial",
      linkedin: "https://www.linkedin.com/in/renana-friedlich/",
    },
  },
];

/** Aphinia, described once and reused by every dinner page. */
export const APHINIA_DESCRIPTION =
  "A private community for CISOs and senior cybersecurity executives — bringing together the people accountable for security across their organisations to meet their peers and speak openly.";

export function getDinner(slug: string): Dinner | undefined {
  return DINNERS.find((dinner) => dinner.slug === slug);
}

/**
 * Label attached to a registration email, so the team can tell which dinner a
 * seat request belongs to. Returns undefined for anything that is not one of
 * the three dinners; the API falls back to its own default in that case.
 */
export function dinnerEventLabel(slug: string): string | undefined {
  const dinner = getDinner(slug);
  return dinner
    ? `${dinner.title} — ${dinner.dateLabel} — ${dinner.locality}`
    : undefined;
}
