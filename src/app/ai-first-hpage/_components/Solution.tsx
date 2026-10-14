import Link from "next/link";
import {
  ArrowRightIcon,
  BriefingIcon,
  DiningIcon,
  SportingIcon,
  SummitIcon,
  TargetIcon,
  GlobeIcon,
  MailIcon,
  AttendanceIcon,
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
    Icon: TargetIcon,
    title: "Find the right people",
    summary: "AI-powered targeting connects your event with relevant senior decision-makers.",
  },
  {
    Icon: GlobeIcon,
    title: "Reach them intelligently",
    summary: "Coordinated outreach across email, LinkedIn and direct messaging.",
  },
  {
    Icon: MailIcon,
    title: "Make it personal",
    summary: "Tailored invitations and concierge-style follow-up turn interest into registrations.",
  },
  {
    Icon: AttendanceIcon,
    title: "Build your audience",
    summary: "We track progress and adapt your campaign around your attendance goals.",
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
              We combine AI-powered targeting with personal outreach to bring
              the right C-suite and VP-level guests to your event.
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
              Intelligent targeting. Personal invitations. Qualified guests.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {CAPABILITIES.map((capability) => (
              <article
                key={capability.title}
                className="bg-bg-card border border-border rounded-2xl p-6 reveal"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6" aria-hidden="true">
                  <capability.Icon className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {capability.title}
                </h4>
                <p className="text-text-light text-sm leading-relaxed">
                  {capability.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
