/**
 * Copy for the Delegate Acquisition landing page.
 *
 * Kept separate from the components so the wording can be edited without
 * touching markup. Written to describe outcomes rather than internal process,
 * and deliberately free of statistics the site cannot already evidence.
 */

/** Buyer outcomes, not operational activities. */
export const OUTCOMES = [
  "Targeted outreach to your highest-value accounts",
  "Direct engagement with C-suite, VP and Director-level decision-makers",
  "High-touch outreach across phone, email and LinkedIn",
  "End-to-end confirmation and attendance management",
  "Detailed attendee profiles before your event",
  "Only pay for confirmed delegates that meet your agreed criteria",
];

export type UseCase = { title: string; description: string };

/** Six cards, each a single sentence of roughly equal length. */
export const USE_CASES: UseCase[] = [
  {
    title: "Executive Dinners",
    description: "10–30 senior decision-makers where every seat matters.",
  },
  {
    title: "Roundtables",
    description:
      "Curated discussions designed for executive-level participation.",
  },
  {
    title: "Breakfast & Luncheons",
    description: "Invite-only networking and thought leadership events.",
  },
  {
    title: "Conferences",
    description: "B2B conferences requiring qualified delegates at scale.",
  },
  {
    title: "Summits",
    description: "Executive summits where audience quality drives success.",
  },
  {
    title: "Roadshows & Briefings",
    description: "Multi-city campaigns with consistent delegate acquisition.",
  },
];

/** Keys map to the icon set in @/components/icons via FAILURE_ICONS. */
export type FailureModeIcon =
  | "outreach"
  | "targeting"
  | "timing"
  | "followUp"
  | "data"
  | "attendance";

export type FailureMode = {
  icon: FailureModeIcon;
  problem: string;
  /** One line, shown collapsed. */
  summary: string;
  why: string;
  fix: string;
};

export const FAILURE_MODES: FailureMode[] = [
  {
    icon: "outreach",
    problem: "Generic Outreach",
    summary: "Templated invitations fail to engage senior executives.",
    why: "Senior executives receive hundreds of generic invitations. If a message feels automated, it is ignored before the event is even considered.",
    fix: "Every invitation is personalised to the individual's role, organisation and reason for attending. Our outreach is delivered by people — not automated sequences.",
  },
  {
    icon: "targeting",
    problem: "Poor Targeting",
    summary: "Keyword targeting fills the room with the wrong people.",
    why: "Campaigns built on job-title keywords pull in the wrong seniority and the wrong function. The room fills, but not with buyers.",
    fix: "We agree your ideal customer profile before outreach begins, then qualify every conversation against it.",
  },
  {
    icon: "timing",
    problem: "Launching Too Late",
    summary: "Senior calendars are set weeks in advance.",
    why: "A campaign starting a fortnight out is competing for time that has already been committed elsewhere.",
    fix: "We mobilise within days and run intensive short-notice campaigns — while being straight about what a compressed window delivers.",
  },
  {
    icon: "followUp",
    problem: "Weak Follow-up",
    summary: "Most confirmations come after several touches.",
    why: "A single unanswered email is read as a decline. Usually it is not one.",
    fix: "Sequenced follow-up across phone, email and LinkedIn — deliberate, not repeated until the prospect disengages.",
  },
  {
    icon: "data",
    problem: "Poor Data",
    summary: "Bought lists decay fast and quietly cap results.",
    why: "Wrong numbers and dead addresses burn the outreach window before the campaign has a chance.",
    fix: "Prospect records are built and verified for each campaign, so effort goes to people who are contactable and relevant.",
  },
  {
    icon: "attendance",
    problem: "Attendance Management",
    summary: "A confirmation is not attendance on the day.",
    why: "Without reminders, no-show rates climb — and the catering budget is already spent.",
    fix: "Confirmations are managed through to the event, with a structured reminder campaign in the final week.",
  },
];

export type CampaignStage = {
  /** Where the stage falls in a typical campaign. */
  when: string;
  title: string;
  description: string;
};

/**
 * Methodology and campaign timeline as one sequence: every stage of the
 * method, placed on the week it happens. Written as a typical seven-week
 * run — short-notice campaigns compress the same stages rather than
 * skipping any of them.
 */
export const CAMPAIGN_STAGES: CampaignStage[] = [
  {
    when: "Week 1",
    title: "ICP definition",
    description:
      "We agree exactly who counts as a qualified delegate before anything else happens: job titles, seniority, functions, industries, company size and geography. This definition becomes the standard every delegate is measured against, and the basis on which you are invoiced.",
  },
  {
    when: "Weeks 1–2",
    title: "Prospect research",
    description:
      "We build a targeted prospect list against that profile, working from named accounts where you have them and identifying comparable organisations where you do not. The list is built for your campaign rather than pulled from a static database.",
  },
  {
    when: "Week 2",
    title: "Data verification",
    description:
      "Contact records are verified before outreach begins — role and organisation confirmed, direct contact details validated. Effort is spent on reaching people, not on discovering that a record is three years out of date.",
  },
  {
    when: "Weeks 3–6",
    title: "Multi-channel outreach",
    description:
      "Outreach runs across phone, email and LinkedIn, conducted by people who can hold a conversation about the subject matter. Each approach is specific to the individual and the reason the session is relevant to them.",
  },
  {
    when: "Weeks 3–6",
    title: "Qualification",
    description:
      "Interest is not the same as fit. Every prospect who engages is qualified against the agreed criteria — confirming seniority, remit and relevance — before they are counted as a delegate.",
  },
  {
    when: "Weeks 4–7",
    title: "Confirmation",
    description:
      "Qualified delegates are formally confirmed and their details recorded. You see who has committed as the campaign progresses, rather than receiving a list at the end.",
  },
  {
    when: "Final week",
    title: "Reminder campaign",
    description:
      "In the run-up to the event we run a structured reminder programme across the confirmed list, addressing diary conflicts early rather than discovering them on the day.",
  },
  {
    when: "Event day",
    title: "Delegate delivery",
    description:
      "You receive detailed attendee profiles ahead of the event — who is attending, their role and their organisation — so your team can prepare properly for the conversations in the room.",
  },
];

export type FeePoint = { title: string; description: string };

export const NO_WIN_NO_FEE: FeePoint[] = [
  {
    title: "When you pay",
    description:
      "After delegates confirm — never before. There are no retainers, no setup fees and no charge for the research and outreach that produces them. If the campaign delivers nothing, it costs you nothing.",
  },
  {
    title: "How success is measured",
    description:
      "Against the attendee criteria agreed in writing at the start of the campaign. Not against activity, not against interest — against confirmed delegates who match the profile you signed off.",
  },
  {
    title: "What qualifies as a delegate",
    description:
      "An individual who meets every agreed criterion — seniority, job title, industry, company size, geography — and who has personally confirmed they will attend. Anyone outside that definition is not billable.",
  },
  {
    title: "Why this reduces your risk",
    description:
      "The commercial risk of the campaign sits with us rather than with you. Your budget is committed against delegates you can count, at a point where you already know the room will be full.",
  },
];
