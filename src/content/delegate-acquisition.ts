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
      "We define exactly who qualifies — including seniority, role, industry, company size and geography.",
  },
  {
    when: "Weeks 1–2",
    title: "Prospect research",
    description:
      "We build a targeted prospect list around your ideal delegate profile and named accounts.",
  },
  {
    when: "Week 2",
    title: "Data verification",
    description:
      "We verify roles, companies and contact details before outreach begins.",
  },
  {
    when: "Weeks 3–6",
    title: "Multi-channel outreach",
    description:
      "We engage prospects through phone, email and LinkedIn with relevant, personalised messaging.",
  },
  {
    when: "Weeks 3–6",
    title: "Qualification",
    description:
      "Every engaged prospect is checked against your agreed criteria before they count as a delegate.",
  },
  {
    when: "Weeks 4–7",
    title: "Confirmation",
    description:
      "Qualified delegates are formally confirmed and tracked throughout the campaign.",
  },
  {
    when: "Final week",
    title: "Reminder campaign",
    description:
      "We follow up with confirmed delegates to reduce drop-offs and maximise attendance.",
  },
  {
    when: "Event day",
    title: "Delegate delivery",
    description:
      "You receive attendee profiles ahead of the event, giving your team the context needed for better conversations.",
  },
];

export type FeePoint = { title: string; description: string };

export const NO_WIN_NO_FEE: FeePoint[] = [
  {
    title: "When You Pay",
    description:
      "Only after a qualified delegate confirms attendance. If we deliver nothing, you pay nothing.",
  },
  {
    title: "What Counts as a Delegate",
    description:
      "A confirmed attendee who meets your agreed criteria — including seniority, role, industry, company size, and geography.",
  },
  {
    title: "How Success Is Measured",
    description:
      "By qualified, confirmed delegates, not outreach activity, responses, or registrations.",
  },
  {
    title: "Why It Works",
    description:
      "Your budget is tied to real attendees, not promises. We take on the campaign risk so you don’t have to.",
  },
];
