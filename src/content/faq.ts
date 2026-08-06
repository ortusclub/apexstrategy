/**
 * FAQ content.
 *
 * These answers are drafted from the commercial model already described on
 * the site (no win, no fee; short-notice delivery; 40+ countries). Anything
 * that would state a new commercial commitment is written to stay within
 * what the site already claims — see the notes returned with this work for
 * the two answers worth a second read before publishing.
 */

export type FaqItem = {
  question: string;
  /** Plain text — reused verbatim in FAQPage JSON-LD. */
  answer: string;
};

export const FAQS: FaqItem[] = [
  {
    question: "How does no win, no fee work?",
    answer:
      "You pay per confirmed delegate, not for the campaign. There are no retainers and no setup fees. We agree the attendee criteria with you up front — seniority, job title, industry, company size and geography — and you are only charged for delegates who meet those criteria and confirm their attendance. If we do not fill the seats, you do not pay.",
  },
  {
    question: "How quickly can a campaign launch?",
    answer:
      "Campaigns typically launch within a few days of the discovery call. Once the ideal customer profile is agreed we begin prospect research immediately, and outreach usually starts in the first week. We regularly work to short-notice briefs and have filled rooms in under two weeks.",
  },
  {
    question: "Which countries do you cover?",
    answer:
      "We have delivered events in more than 40 countries across EMEA, North America and Asia Pacific. Outreach is conducted in English by default; tell us if a campaign needs local-language coverage and we will confirm what is possible for that market before you commit.",
  },
  {
    question: "What industries do you specialise in?",
    answer:
      "Most of our work is enterprise technology — cybersecurity, cloud, data and AI, and enterprise software — alongside financial services and professional services. Our approach is built around defining an ideal customer profile rather than a fixed industry list, so we regularly run campaigns outside those sectors.",
  },
  {
    question: "How do you verify delegates?",
    answer:
      "Every prospect is checked against the agreed criteria before outreach begins, and again during the qualification conversation. We confirm job title, seniority, company and relevance to the event topic through direct contact — phone, email or LinkedIn — rather than relying on a purchased list. You receive detailed attendee profiles before the event so you know exactly who is coming.",
  },
  {
    question: "What happens if attendance targets are not reached?",
    answer:
      "You are only invoiced for the delegates who confirm and meet the agreed criteria, so an under-filled room costs you nothing beyond the delegates actually delivered. If a campaign is tracking behind target we will tell you early and discuss options — widening the profile, extending the outreach window, or adjusting the target — rather than letting you find out close to the event date.",
  },
  {
    question: "What counts as a confirmed delegate?",
    answer:
      "A confirmed delegate is an individual who meets the attendee criteria agreed at the start of the campaign and who has personally confirmed they will attend. We manage confirmations and run a reminder campaign in the run-up to the event to protect attendance on the day.",
  },
  {
    question: "What types of events do you work on?",
    answer:
      "Executive dinners, roundtables, breakfast and lunch briefings, seminars, summits, partner events and hospitality occasions. The format matters less than the audience — the common thread is that you need specific, senior people in the room.",
  },
];
