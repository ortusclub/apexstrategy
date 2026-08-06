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

export const USE_CASES: UseCase[] = [
  {
    title: "Executive dinners",
    description:
      "Ten to thirty senior guests around one table, where a single wrong seat is obvious to everyone in the room.",
  },
  {
    title: "Roundtables",
    description:
      "Peer-level discussion that only works when every participant carries comparable seniority and scope.",
  },
  {
    title: "CIO and technology events",
    description:
      "Audiences of enterprise technology leaders who are heavily targeted and rarely respond to generic invitations.",
  },
  {
    title: "Security events",
    description:
      "CISO and head-of-security audiences, where credibility of the invitation matters as much as the topic.",
  },
  {
    title: "AI and data events",
    description:
      "Fast-moving subject matter where the right audience shifts between technical, commercial and strategic owners.",
  },
  {
    title: "Breakfast and lunch briefings",
    description:
      "Short-format sessions that have to justify a senior calendar slot before anyone commits.",
  },
  {
    title: "Summits and seminars",
    description:
      "Larger programmes where volume cannot come at the cost of seniority or relevance.",
  },
  {
    title: "Partner and hospitality events",
    description:
      "Relationship-building formats where the guest list defines the commercial value of the day.",
  },
];

export type FailureMode = { problem: string; why: string; fix: string };

export const FAILURE_MODES: FailureMode[] = [
  {
    problem: "Generic outreach",
    why: "A templated invitation reads as a mass mailing to precisely the people who receive the most of them. Senior executives filter it out before the value of the event registers.",
    fix: "Every approach references the individual's role, organisation and the reason the session is relevant to them — which is why our outreach is conducted by people, not by an automated sequence.",
  },
  {
    problem: "Poor targeting",
    why: "Campaigns built on job-title keywords alone pull in the wrong seniority and the wrong function. The room fills, but not with buyers.",
    fix: "We define the ideal customer profile with you before any outreach begins — titles, seniority, industry, company size and geography — and qualify against it on every conversation.",
  },
  {
    problem: "Launching too late",
    why: "Senior calendars are set weeks ahead. A campaign that starts a fortnight out is competing for time that has already been committed elsewhere.",
    fix: "We can mobilise within days and run intensive short-notice campaigns, while being straight with you about what a compressed window realistically delivers.",
  },
  {
    problem: "No structured follow-up",
    why: "Most confirmations come after several touches. A single unanswered email is read as a decline when it usually is not one.",
    fix: "Multi-channel follow-up across phone, email and LinkedIn, sequenced deliberately rather than repeated until the prospect disengages.",
  },
  {
    problem: "Low-quality data",
    why: "Bought lists decay quickly. Wrong numbers and dead addresses waste the outreach window and quietly cap the result.",
    fix: "Prospect records are built and verified for each campaign, so outreach effort goes to people who are actually contactable and actually relevant.",
  },
  {
    problem: "No attendance management",
    why: "A confirmation eight weeks out is not attendance on the day. Without reminders, no-show rates climb and the catering budget is already spent.",
    fix: "Confirmations are managed through to the event, with a structured reminder campaign in the final week to protect attendance on the day.",
  },
];

export type MethodologyStep = { title: string; description: string };

export const METHODOLOGY: MethodologyStep[] = [
  {
    title: "ICP definition",
    description:
      "We agree exactly who counts as a qualified delegate before anything else happens: job titles, seniority, functions, industries, company size and geography. This definition becomes the standard every delegate is measured against, and the basis on which you are invoiced.",
  },
  {
    title: "Prospect research",
    description:
      "We build a targeted prospect list against that profile, working from named accounts where you have them and identifying comparable organisations where you do not. The list is built for your campaign rather than pulled from a static database.",
  },
  {
    title: "Data verification",
    description:
      "Contact records are verified before outreach begins — role and organisation confirmed, direct contact details validated. Effort is spent on reaching people, not on discovering that a record is three years out of date.",
  },
  {
    title: "Multi-channel outreach",
    description:
      "Outreach runs across phone, email and LinkedIn, conducted by people who can hold a conversation about the subject matter. Each approach is specific to the individual and the reason the session is relevant to them.",
  },
  {
    title: "Qualification",
    description:
      "Interest is not the same as fit. Every prospect who engages is qualified against the agreed criteria — confirming seniority, remit and relevance — before they are counted as a delegate.",
  },
  {
    title: "Confirmation",
    description:
      "Qualified delegates are formally confirmed and their details recorded. You see who has committed as the campaign progresses, rather than receiving a list at the end.",
  },
  {
    title: "Reminder campaign",
    description:
      "In the run-up to the event we run a structured reminder programme across the confirmed list, addressing diary conflicts early rather than discovering them on the day.",
  },
  {
    title: "Delegate delivery",
    description:
      "You receive detailed attendee profiles ahead of the event — who is attending, their role and their organisation — so your team can prepare properly for the conversations in the room.",
  },
];

export type ProcessStep = { title: string; description: string };

export const PROCESS: ProcessStep[] = [
  {
    title: "Discovery call",
    description:
      "We establish the event, the audience you need in the room, the target number and the date. Thirty minutes is usually enough to tell you whether we can help.",
  },
  {
    title: "ICP definition",
    description:
      "We agree the attendee criteria in writing. This is the standard delegates are qualified against and the basis for what you pay.",
  },
  {
    title: "Prospect research",
    description:
      "We build and verify a prospect list against the agreed profile, covering named accounts and comparable organisations.",
  },
  {
    title: "Outreach campaign",
    description:
      "Multi-channel outreach begins across phone, email and LinkedIn, with each approach specific to the individual.",
  },
  {
    title: "Qualification",
    description:
      "Interested prospects are qualified against the agreed criteria before they count towards your target.",
  },
  {
    title: "Confirmation",
    description:
      "Qualified delegates confirm attendance, and we manage the confirmed list through to the event.",
  },
  {
    title: "Delegate delivery",
    description:
      "You receive full attendee profiles before the event, and a reminder campaign protects attendance on the day.",
  },
];

export type TimelinePhase = { when: string; title: string; description: string };

/**
 * Indicative shape of a campaign. Written as a typical seven-week run;
 * short-notice campaigns compress the same phases.
 */
export const CAMPAIGN_TIMELINE: TimelinePhase[] = [
  {
    when: "Week 1",
    title: "Planning",
    description:
      "Discovery call, ICP agreed in writing, target number and criteria confirmed.",
  },
  {
    when: "Week 2",
    title: "Prospect building",
    description:
      "Targeted prospect list built and contact data verified against the agreed profile.",
  },
  {
    when: "Weeks 3–6",
    title: "Outreach",
    description:
      "Multi-channel outreach across phone, email and LinkedIn, with structured follow-up.",
  },
  {
    when: "Weeks 4–7",
    title: "Confirmations",
    description:
      "Qualified delegates confirm attendance and profiles are shared with you as they land.",
  },
  {
    when: "Final week",
    title: "Reminder campaign",
    description:
      "Structured reminders across the confirmed list, resolving diary conflicts before the day.",
  },
  {
    when: "Event day",
    title: "Delegate attendance",
    description:
      "Your delegates attend, with full profiles already in your team's hands.",
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
