import Link from "next/link";
import {
  ArrowRightIcon,
  BriefingIcon,
  DiningIcon,
  SportingIcon,
  SummitIcon,
} from "@/components/icons";
import { CTA_SECONDARY_PATH } from "@/lib/site";

const EVENT_TYPES = [
  {
    Icon: DiningIcon,
    title: "Executive Dinners",
    desc: "Intimate, high-level gatherings for senior decision-makers.",
  },
  {
    Icon: BriefingIcon,
    title: "Breakfast & Lunch Briefings",
    desc: "Focused sessions that fit into busy executive schedules.",
  },
  {
    Icon: SummitIcon,
    title: "Seminars & Summits",
    desc: "Larger-scale events requiring volume and quality.",
  },
  {
    Icon: SportingIcon,
    title: "Sporting Occasions",
    desc: "Hospitality events that build relationships in relaxed settings.",
  },
];

const CAPABILITIES = [
  {
    title: "Multi-signal data intelligence",
    summary: "Find the executives with a reason to be in the room.",
    points: [
      "Map relevant signals such as leadership changes, funding, hiring and regulatory shifts to your event’s themes.",
      "Combine company and contact data with current public intelligence to enrich and verify executive profiles.",
      "Bring targeting context and engagement history together for a coordinated campaign.",
    ],
  },
  {
    title: "Coordinated multi-channel outreach",
    summary: "Reach decision-makers through a connected invitation journey.",
    points: [
      "Sequence email, LinkedIn and direct messaging so each touchpoint builds on the last.",
      "Adapt channel mix and follow-up timing to engagement, reducing repetitive outreach.",
      "Apply agreed exclusions, suppression lists and opt-out preferences across campaign channels.",
    ],
  },
  {
    title: "Personalised, concierge-level engagement",
    summary: "Make every invitation relevant and every next step easy.",
    points: [
      "Tailor invitations to each executive’s role, company priorities, public initiatives and industry.",
      "Use AI-assisted conversations to answer event questions and support follow-up in an executive-level tone.",
      "Streamline scheduling and registration confirmation to turn interest into confirmed guests.",
    ],
  },
  {
    title: "Intelligent attendance management",
    summary: "Keep acquisition aligned with your audience goals and capacity.",
    points: [
      "Identify relevant look-alike accounts and roles when the original brief is narrow, with your approval before expanding.",
      "Monitor registration pace against targets and adapt campaign activity within agreed limits.",
      "Route additional interest into waitlists or agreed one-to-one sales follow-up, with your attendee cap kept in view.",
    ],
  },
];

export default function Solution() {
  return (
    <section id="services" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-accent" aria-hidden="true"></span>
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                What we do
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              <span className="text-accent">AI-first Acquisition</span> for
              Executive Events
            </h2>
            <p className="text-text-light text-lg leading-relaxed mb-8">
              Reach C-suite and VP-level leaders in enterprise technology and
              professional services. Precise account and role targeting.
              Invitations that feel personal. A coordinated campaign that
              scales around your event, with approved audience expansion
              when your initial brief is too narrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/delegate-acquisition"
                className="bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center justify-center gap-2"
              >
                More on delegate acquisition{" "}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href={CTA_SECONDARY_PATH}
                className="border border-[rgba(146,212,205,0.2)] hover:border-[rgba(146,212,205,0.4)] text-text-light hover:text-white px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact Us <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right - Event type cards */}
          <div className="grid grid-cols-2 gap-4 reveal">
            {EVENT_TYPES.map((evt) => (
              <div
                key={evt.title}
                className="bg-bg-card border border-border rounded-2xl p-6 hover:border-[rgba(146,212,205,0.2)] transition-colors"
              >
                <evt.Icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="text-base font-semibold text-white mb-2">
                  {evt.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {evt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <div className="max-w-3xl mb-8 reveal">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Powered by the Apex Precision Pipeline™
            </h3>
            <p className="text-text-light text-lg leading-relaxed">
              Our AI-first orchestration brings together executive intent,
              enriched data and coordinated outreach to deliver personalised,
              concierge-level engagement at scale.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {CAPABILITIES.map((capability, index) => (
              <article
                key={capability.title}
                className="bg-bg-card border border-border rounded-2xl p-6 md:p-8 reveal"
              >
                <span className="text-accent text-sm font-semibold tracking-widest" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="text-xl font-semibold text-white mt-3 mb-3">
                  {capability.title}
                </h4>
                <p className="text-text-light leading-relaxed mb-5">
                  {capability.summary}
                </p>
                <ul className="list-disc pl-5 space-y-3 text-sm text-text-muted leading-relaxed marker:text-accent">
                  {capability.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
