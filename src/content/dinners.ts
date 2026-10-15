/**
 * Aphinia CISO Executive Dinners.
 *
 * Invitation-only dinners hosted by Aphinia, a private community for CISOs and
 * senior cybersecurity executives. Apex supplies the delegates.
 *
 * `status` decides where a dinner appears: "upcoming" dinners are listed as
 * open for registration and their pages carry the seat request form; "filled"
 * dinners move to the past-campaigns section, and their pages stay live (so
 * existing links keep working) with the form replaced by a closed notice.
 *
 * ⚠️ VENUE ADDRESSES ⚠️
 *
 * `locality` (the area, e.g. "Scottsdale, AZ") is always public. `venue`
 * is optional and is published as-is when present — anything in this file
 * ships to the browser. The September dinners deliberately omit it; their
 * venues were shared only once a seat was confirmed. The October dinners list
 * their venues because the brief supplied them for publication.
 *
 * Each co-host and speaker is a real, named executive. Do not move one
 * between dinners, and do not invent or substitute a LinkedIn URL or any
 * biographical detail beyond their title and company.
 */

export type DinnerSlug =
  | "phoenix"
  | "greater-los-angeles"
  | "san-diego"
  | "chicago"
  | "austin"
  | "dallas"
  | "houston";

export type DinnerStatus = "upcoming" | "filled";

type Executive = {
  name: string;
  title: string;
  company: string;
};

export type Dinner = {
  slug: DinnerSlug;
  status: DinnerStatus;
  /** Card and breadcrumb label. */
  city: string;
  /** <h1>, meta title and the label attached to each registration email. */
  title: string;
  /** Machine-readable date for <time datetime>. */
  dateISO: string;
  /**
   * Start time with its UTC offset, for the countdown. Must agree with
   * `timeLabel` — e.g. 6:00 PM CDT is "…T18:00:00-05:00".
   */
  startsAt: string;
  dateLabel: string;
  timeLabel: string;
  /** Public-facing area, e.g. "Plano, TX". */
  locality: string;
  /** Published venue. Omit to keep the venue private until confirmation. */
  venue?: { name: string; address: string };
  /**
   * One-line blurb for the /events listing card. Deliberately separate from
   * `evening`, which is the detail page's own opening copy — editing one does
   * not silently rewrite the other.
   */
  summary: string;
  /**
   * One-line recap for the past-events card once the dinner is filled.
   * Describes the evening itself — no attendance figures.
   */
  recap?: string;
  evening: [string, string];
  conversation: [string, string];
  /**
   * Closing line of "The Conversation". Omit on a co-hosted dinner and it is
   * derived from the co-host — see `moderationLine`.
   */
  moderation?: string;
  /** "What you'll take away" — rendered only when present. */
  takeaways?: string[];
  peers: [string, string];
  /**
   * "Leaders invited" — role and organisation only, never names.
   * Rendered only when present.
   */
  roster?: { role: string; company: string }[];
  agenda: { time: string; what: string }[];
  /** Co-host who moderates the table (September format). */
  coHost?: Executive & {
    /** Existing profile URL — preserve exactly. */
    linkedin: string;
  };
  /** Featured speaker who opens the evening (October format). */
  speaker?: Executive & { bio: string };
  /**
   * City photograph for the hero banner and the listing card. Stored locally
   * in public/images/events/cities. Omit and the page falls back to the
   * generic dinner photograph.
   */
  image?: CityImage;
};

type CityImage = {
  src: string;
  /** Describes the photo; the banner itself treats it as decorative. */
  alt: string;
  credit: { source: string; license: string };
};

/**
 * Unsplash License — free for commercial use, no attribution required. (Not
 * CC0; Unsplash replaced CC0 with its own licence in 2017.) Photographer
 * names were not supplied with the brief — add them from each source page.
 */
const UNSPLASH = "Unsplash License — free for commercial use, no attribution required";

/** Terms on every upcoming dinner, rendered as badges. */
export const INVITATION_BADGES = [
  "Invitation-only",
  "Complimentary",
  "Limited seats",
] as const;

/** Shared by the three September dinners — the format did not change by city. */
const CONVERSATION: [string, string] = [
  "A candid discussion around the issues shaping the role of today's security leader — from evolving threats and emerging technologies to risk, resilience, leadership, and the realities of running a security programme.",
  "The conversation is intentionally open, allowing the group to explore the topics that matter most to the people around the table.",
];

const PEERS_DETAIL =
  "You'll meet people responsible for leading security across their organisations, each bringing a different perspective, experience, and set of challenges to the conversation.";

const EVENING_DETAIL =
  "There are no presentations or panels. Instead, the evening is built around an open discussion where leaders can compare experiences, challenge perspectives, and talk candidly about what is working — and what isn't.";

/** The standard running order — every dinner, past and upcoming, uses it. */
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
    status: "filled",
    city: "Phoenix",
    title: "CISO Executive Dinner — Phoenix",
    dateISO: "2026-09-21",
    startsAt: "2026-09-21T18:00:00-07:00",
    dateLabel: "Monday, 21 September 2026",
    timeLabel: "6:00 PM – 9:00 PM MST",
    locality: "Scottsdale, AZ",
    summary:
      "A Scottsdale evening built for connection — senior security leaders meeting peers who face the same pressures, in a room small enough for real relationships to form.",
    recap:
      "Senior security leaders from across Phoenix and greater Arizona met in Scottsdale for this invitation-only Aphinia dinner, with Dina Mathers, CISO at Carvana, co-hosting the conversation.",
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
    status: "filled",
    city: "Greater Los Angeles",
    title: "CISO Executive Dinner — Greater Los Angeles",
    dateISO: "2026-09-22",
    startsAt: "2026-09-22T18:00:00-07:00",
    dateLabel: "Tuesday, 22 September 2026",
    timeLabel: "6:00 PM – 9:00 PM PST",
    locality: "Costa Mesa, CA",
    summary:
      "Three hours in Costa Mesa where senior security leaders trade the insight that doesn't make it into conference talks — sharpened by people solving the same problems.",
    recap:
      "Co-hosted by Jeff Farinich, CISO at New American Funding, this Costa Mesa evening brought CISOs and senior security leaders from across Greater Los Angeles and Southern California together for a candid, invitation-only Aphinia dinner.",
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
    status: "filled",
    city: "San Diego",
    title: "CISO Executive Dinner — San Diego",
    dateISO: "2026-09-23",
    startsAt: "2026-09-23T18:00:00-07:00",
    dateLabel: "Wednesday, 23 September 2026",
    timeLabel: "6:00 PM – 9:00 PM PST",
    locality: "La Jolla, CA",
    summary:
      "A focused La Jolla evening for senior security leaders to walk away with something useful — perspective, ideas, and a few new answers worth taking back to the job.",
    recap:
      "La Jolla played host to this invitation-only Aphinia dinner, where CISOs and senior security leaders from across San Diego and Southern California gathered around one table with co-host Renana Friedlich, CISO at LPL Financial.",
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

  /*
   * October 2026 — each page carries its own copy. The format follows the
   * September dinners, but no two pages should share a paragraph.
   */
  {
    slug: "chicago",
    status: "upcoming",
    city: "Chicago",
    title: "IT & Security Leaders Exchange",
    dateISO: "2026-10-20",
    startsAt: "2026-10-20T18:00:00-05:00",
    dateLabel: "Tuesday, 20 October 2026",
    timeLabel: "6:00 PM – 9:00 PM CDT",
    locality: "Chicago, IL",
    venue: {
      name: "Gibsons Bar & Steakhouse",
      address: "Chicago, IL",
    },
    summary:
      "Erik Hart, CISO at Cushman & Wakefield, leads the insight at this Chicago evening, where senior security leaders compare how peers govern risk and build resilience across global operations.",
    evening: [
      "Gibsons in Chicago sets the scene for an invitation-only gathering of CISOs and senior security leaders, convened to compare notes on the decisions that define enterprise resilience.",
      "The format is deliberately intimate. Over a classic steakhouse dinner at a single table, leaders can test their thinking against peers carrying the same accountability — and leave with a sharper sense of where their own programme stands.",
    ],
    conversation: [
      "The discussion centres on enterprise risk resilience and security governance at global scale: how leaders hold a consistent risk posture across regions and business units, where governance models bend under pressure, and how resilience is measured in terms the business recognises.",
      "Expect frank exchange between peers — how others are structuring their teams, prioritising investment and reporting risk upward — and the kind of executive connections that continue long after the evening ends.",
    ],
    moderation:
      "Erik Hart, CISO at Cushman & Wakefield, opens the conversation with insights from leading security across a global enterprise, before the table takes it wherever matters most to the room.",
    takeaways: [
      "A clearer view of how peer organisations structure security governance across regions and business units",
      "Practical benchmarks for resilience planning, risk reporting and programme investment",
      "Erik Hart's perspective on sustaining a consistent risk posture across a global footprint",
      "Executive connections with Chicago-area security leaders facing the same pressures",
    ],
    peers: [
      "A curated group of CISOs, CSOs and heads of security from across Chicago and the wider Midwest, drawn from organisations with complex, multi-region operations.",
      "Every seat is held for a leader accountable for security strategy, so the conversation stays at the level of governance, risk and leadership rather than tooling.",
    ],
    roster: [
      { role: "Chief Information Security Officer", company: "Paylocity" },
      { role: "Global CISO", company: "Ingredion Incorporated" },
      { role: "SVP, Chief Information Security Officer", company: "Northern Trust Corporation" },
      { role: "Chief Information Security Officer", company: "The Kraft Heinz Company" },
      { role: "CISO", company: "Morningstar" },
      { role: "Vice President, Global InfoSec", company: "Bank of America" },
      { role: "CISO", company: "American Medical Association" },
      { role: "VP & Global CISO", company: "Perrigo Company plc" },
      { role: "Chief Information Security Officer", company: "Fitch Group, Inc." },
      { role: "SVP, Chief Information Security Officer", company: "ATI Physical Therapy" },
      { role: "Executive Director, Global InfoSec", company: "JLL" },
      { role: "Director of Information Security", company: "Kirkland & Ellis" },
    ],
    image: {
      src: "/images/events/cities/chicago.jpg",
      alt: "Aerial view of downtown Chicago's skyline along the Lake Michigan shoreline at dusk",
      credit: {
        source: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
        license: UNSPLASH,
      },
    },
    agenda: AGENDA,
    speaker: {
      name: "Erik Hart",
      title: "CISO",
      company: "Cushman & Wakefield",
      bio: "Erik Hart is Chief Information Security Officer at Cushman & Wakefield, the global commercial real estate services firm. He joins the Chicago Exchange to share his perspective on governing security and building resilience across a large, geographically distributed enterprise.",
    },
  },
  {
    slug: "austin",
    status: "upcoming",
    city: "Austin",
    title: "IT & Security Mastermind",
    dateISO: "2026-10-26",
    startsAt: "2026-10-26T18:00:00-05:00",
    dateLabel: "Monday, 26 October 2026",
    timeLabel: "6:00 PM – 9:00 PM CDT",
    locality: "Austin, TX",
    venue: {
      name: "Bob's Steak & Chop House",
      address: "301 Lavaca Street, Austin, TX 78701",
    },
    summary:
      "A mastermind-style evening in Austin's business district for security leaders navigating complex threat landscapes while balancing rapid innovation with a strong security posture.",
    evening: [
      "A private dinner in the heart of Austin's business district, gathering a select group of CISOs and senior security leaders for an evening of focused, candid exchange.",
      "Built as a mastermind rather than a meeting, the evening gives each leader room to bring a live challenge to the table and hear how peers in fast-moving organisations are tackling the same problem.",
    ],
    conversation: [
      "The conversation explores how security leaders are navigating an increasingly complex threat landscape — from identity-based attacks and third-party exposure to the new risks that arrive with AI adoption.",
      "At its core is a question every leader in a growth environment recognises: how to keep pace with rapid innovation without eroding security posture — and how to share strategy openly with peers making the same trade-offs.",
    ],
    moderation:
      "Aphinia facilitates the evening, keeping the table focused on the challenges leaders bring with them on the night.",
    takeaways: [
      "Peer perspective on the threat vectors commanding the most attention from security leaders right now",
      "Approaches for balancing rapid innovation with a resilient security posture",
      "High-level strategy from peers on where to focus security investment next",
      "A stronger network across Austin's security and technology leadership community",
    ],
    peers: [
      "A hand-selected group of CISOs, CSOs and senior security leaders from across Austin's business and technology community, spanning high-growth scale-ups and established enterprises alike.",
      "The mix is intentional: leaders at different stages of growth, each with a view on what has worked, what hasn't, and what they would do differently next time.",
    ],
    roster: [
      { role: "Chief Information Security Officer", company: "Capital Group" },
      { role: "CISO", company: "Customers Bank" },
      { role: "Global Chief Information Security Officer", company: "Gallagher" },
      { role: "CISO", company: "Manulife" },
      { role: "VP, Cybersecurity Strategy & Ops", company: "Northwestern Mutual" },
      { role: "Head of Cybersecurity and GRC", company: "Rain" },
      { role: "Vice President, Cybersecurity", company: "BECU" },
      { role: "CISO", company: "Rocket Companies" },
      { role: "CISO", company: "Stellar Bank" },
      { role: "CISO & Head of Tech Risk", company: "Webster Bank" },
      { role: "Managing Director & Head of Cyber IB", company: "BMO Capital Markets" },
      { role: "Executive Director, Information Security", company: "Wells Fargo" },
    ],
    image: {
      src: "/images/events/cities/austin.jpg",
      alt: "Downtown Austin skyline above Lady Bird Lake and the Congress Avenue bridge",
      credit: {
        source: "https://images.unsplash.com/photo-1557335200-a65f7f032602",
        license: UNSPLASH,
      },
    },
    agenda: AGENDA,
  },
  {
    slug: "dallas",
    status: "upcoming",
    city: "Dallas",
    title: "IT & Security Leaders Dinner",
    dateISO: "2026-10-27",
    startsAt: "2026-10-27T18:00:00-05:00",
    dateLabel: "Tuesday, 27 October 2026",
    timeLabel: "6:00 PM – 9:00 PM CDT",
    locality: "Plano, TX",
    venue: {
      name: "Bob's Steak & Chop House",
      address: "Plano, TX",
    },
    summary:
      "DFW's IT and security executives meet in Plano to explore scaling enterprise architecture, mitigating threats before they land, and collaborating across industries.",
    evening: [
      "Senior IT and security leaders from across Dallas–Fort Worth come together in Plano for an invitation-only dinner, built around strategic conversation at a shared table.",
      "The evening is designed for leaders who sit where technology and risk meet, offering a rare chance to step back from day-to-day delivery and compare how each is leading their organisation through change.",
    ],
    conversation: [
      "Discussion turns on scaling enterprise architecture without scaling risk alongside it — modernising platforms, consolidating environments and expanding in the cloud while building security into the design from the start.",
      "The table will also explore proactive threat mitigation — moving from reactive response to anticipating attacks — and the value of cross-industry collaboration, comparing how leaders in different sectors approach the same risks.",
    ],
    moderation:
      "Aphinia guides the discussion throughout, making sure every leader has space to contribute and the conversation stays anchored in real operating experience.",
    takeaways: [
      "Proven approaches to scaling enterprise architecture without widening the attack surface",
      "Practical steps peers are taking to shift from reactive response to proactive threat mitigation",
      "Cross-industry perspective on shared risks from leaders across DFW",
      "New relationships with senior technology and security executives across the region",
    ],
    peers: [
      "A select group of CIOs, CISOs, CSOs and senior IT and security leaders from across Dallas, Plano and the wider DFW region, drawn from a broad range of industries.",
      "Bringing infrastructure and security leaders to the same table is deliberate — the most valuable perspective often comes from the colleague who sees the same problem from the other side.",
    ],
    roster: [
      { role: "Global CISO", company: "Aimbridge Hospitality" },
      { role: "Chief Information Security Officer", company: "Beal Bank" },
      { role: "VP, Chief Information Security Officer", company: "CapMetro" },
      { role: "Chief Information Security Officer", company: "City of Arlington" },
      { role: "CISO & VP Engineering", company: "Collective Health" },
      { role: "VP & Chief Information Security Officer", company: "Fullsteam" },
      { role: "CISO", company: "GuideStone Financial Resources" },
      { role: "Chief Information Security Officer", company: "Infor" },
      { role: "VP Information Security | CISO", company: "Invitation Homes" },
      { role: "CTIO & CISO", company: "Kelsey-Seybold Clinic" },
      { role: "Chief Information Security Officer", company: "Origami Risk" },
      { role: "Chief Information Security Officer", company: "Rogers Corporation" },
    ],
    image: {
      src: "/images/events/cities/dallas.jpg",
      alt: "Dallas skyline at night with Reunion Tower lit in blue",
      credit: {
        source: "https://images.unsplash.com/photo-1580536793208-117fdb20ffc1",
        license: UNSPLASH,
      },
    },
    agenda: AGENDA,
  },
  {
    slug: "houston",
    status: "upcoming",
    city: "Houston",
    title: "IT & Security Roundtable",
    dateISO: "2026-10-28",
    startsAt: "2026-10-28T18:00:00-05:00",
    dateLabel: "Wednesday, 28 October 2026",
    timeLabel: "6:00 PM – 9:00 PM CDT",
    locality: "Houston, TX",
    venue: {
      name: "Steak 48",
      address: "4444 Westheimer Rd, Houston, TX 77027",
    },
    summary:
      "Board-level cyber alignment, critical infrastructure defence and strategic risk management take centre stage at this Houston roundtable — with practical guidance from Jerich Beason, CISO at Waste Management.",
    evening: [
      "An exclusive evening at Steak 48 in Houston, reserved for a small group of CISOs and senior security and technology leaders responsible for keeping essential operations running.",
      "The roundtable format keeps the group small and the conversation direct, giving leaders space to examine what has actually worked under pressure — and to take those lessons back to their own organisations.",
    ],
    conversation: [
      "The evening focuses on critical infrastructure defence and strategic risk management: securing operational technology alongside IT, managing exposure across complex supply chains, and preparing for incidents whose impact reaches well beyond the business.",
      "The table will also tackle board-level cyber alignment — translating technical risk into the language of directors, agreeing risk appetite with the board, and earning sustained investment.",
    ],
    moderation:
      "Jerich Beason, CISO at Waste Management, shares practical guidance from leading security in a critical infrastructure environment, setting the stage for an open exchange across the table.",
    takeaways: [
      "Practical approaches to defending critical infrastructure and operational environments",
      "Techniques for aligning the board on cyber risk, risk appetite and investment",
      "Practical guidance from Jerich Beason on strategic risk management at enterprise scale",
      "A trusted peer network among Houston's senior security and technology leaders",
    ],
    peers: [
      "A curated group of CISOs, CSOs and senior security and technology leaders from across Houston and the Gulf Coast, with a particular focus on organisations running critical operations.",
      "Seats are reserved for leaders who report on cyber risk at executive level, keeping the discussion grounded in decisions rather than theory.",
    ],
    roster: [
      { role: "Chief Information Security Officer", company: "ConocoPhillips" },
      { role: "VP & CISO", company: "Houston Methodist" },
      { role: "VP & Global CISO", company: "Medtronic" },
      { role: "Chief Information Security Officer", company: "AECOM" },
      { role: "Chief Information Security Officer", company: "Noble Corporation" },
      { role: "Chief Information Security Officer", company: "NOV" },
      { role: "VP Cybersecurity", company: "Port Houston" },
      { role: "Chief Information Security Officer", company: "Sectigo" },
      { role: "CISO", company: "Sempra Infrastructure" },
      { role: "Chief Information Security Officer", company: "TechnipFMC" },
      { role: "Chief Information Security Officer", company: "Weatherford" },
      { role: "Chief Information Security Officer", company: "Zones" },
    ],
    image: {
      src: "/images/events/cities/houston.jpg",
      alt: "Downtown Houston skyline and freeways lit up at night",
      credit: {
        source: "https://images.unsplash.com/photo-1692154600992-463fa9b27abd",
        license: UNSPLASH,
      },
    },
    agenda: AGENDA,
    speaker: {
      name: "Jerich Beason",
      title: "CISO",
      company: "Waste Management",
      bio: "Jerich Beason is Chief Information Security Officer at Waste Management, one of North America's largest environmental services companies. He joins the Houston roundtable to share how security leaders defend critical operations and keep the board aligned on cyber risk.",
    },
  },
];

export function upcomingDinners(): Dinner[] {
  return DINNERS.filter((dinner) => dinner.status === "upcoming");
}

export function filledDinners(): Dinner[] {
  return DINNERS.filter((dinner) => dinner.status === "filled");
}

/** Aphinia, described once and reused by every dinner page. */
export const APHINIA_DESCRIPTION =
  "A private community for CISOs and senior cybersecurity executives — bringing together the people accountable for security across their organisations to meet their peers and speak openly.";

/**
 * The closing line of "The Conversation", naming whoever leads that evening.
 * An explicit `moderation` line wins; otherwise it is derived from the
 * co-host so the two can never drift apart.
 */
export function moderationLine(dinner: Dinner): string | undefined {
  if (dinner.moderation) return dinner.moderation;
  if (!dinner.coHost) return undefined;
  return `The conversation is co-hosted and moderated by ${dinner.coHost.name}, ${dinner.coHost.title} at ${dinner.coHost.company}, ensuring the discussion stays grounded in the real challenges security leaders face.`;
}

export function getDinner(slug: string): Dinner | undefined {
  return DINNERS.find((dinner) => dinner.slug === slug);
}

/**
 * Label attached to a registration email, so the team can tell which dinner a
 * seat request belongs to. Returns undefined for anything that is not one of
 * the dinners; the API falls back to its own default in that case.
 */
export function dinnerEventLabel(slug: string): string | undefined {
  const dinner = getDinner(slug);
  return dinner
    ? `${dinner.title} — ${dinner.dateLabel} — ${dinner.locality}`
    : undefined;
}
