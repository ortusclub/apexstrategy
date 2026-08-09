import Link from "next/link";
import {
  ArrowRightIcon,
  BriefingIcon,
  CalendarIcon,
  DatabaseIcon,
  DiningIcon,
  SportingIcon,
  SummitIcon,
} from "@/components/icons";
import { CTA_PRIMARY, getService } from "@/lib/site";

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

/** The two enquiry-led services, shown alongside the core offering. */
const SUPPORTING_SERVICES = [
  { Icon: DatabaseIcon, ...getService("data-services") },
  { Icon: CalendarIcon, ...getService("appointment-setting") },
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
                Our services
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              <span className="text-accent">Delegate Acquisition</span> for
              Executive Events
            </h2>
            <p className="text-text-light text-lg leading-relaxed mb-8">
              We fill executive events with qualified decision-makers through
              targeted, multi-channel outreach — on a genuine no win, no fee
              basis.
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
                href="/contact"
                className="border border-[rgba(146,212,205,0.2)] hover:border-[rgba(146,212,205,0.4)] text-text-light hover:text-white px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center justify-center gap-2"
              >
                {CTA_PRIMARY} <ArrowRightIcon className="w-4 h-4" />
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

        {/* Supporting services, folded in rather than given their own section */}
        <div className="mt-20 reveal">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-6">
            Alongside delegate acquisition
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {SUPPORTING_SERVICES.map((s) => (
              <div
                key={s.slug}
                className="bg-bg-card border border-border rounded-2xl p-7 hover:border-[rgba(146,212,205,0.2)] transition-colors flex flex-col"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,208,132,0.1)] flex items-center justify-center flex-shrink-0">
                    <s.Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{s.name}</h3>
                </div>
                <p className="text-text-light text-sm leading-relaxed mb-5">
                  {s.description}
                </p>
                <Link
                  href="/contact"
                  className="text-accent hover:text-accent-hover font-medium text-sm inline-flex items-center gap-1.5 transition-colors rounded-sm mt-auto"
                >
                  {CTA_PRIMARY}
                  <span className="sr-only"> about {s.name}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
