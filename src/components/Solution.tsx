import Link from "next/link";
import {
  ArrowRightIcon,
  BriefingIcon,
  CheckIcon,
  DiningIcon,
  SportingIcon,
  SummitIcon,
} from "@/components/icons";
import { CTA_PRIMARY } from "@/lib/site";
import { OUTCOMES } from "@/content/delegate-acquisition";

export default function Solution() {
  // Shared with the Delegate Acquisition page so the promise stays identical
  // wherever a visitor lands.
  const features = OUTCOMES;

  const eventTypes = [
    { Icon: DiningIcon, title: "Executive Dinners", desc: "Intimate, high-level gatherings for senior decision-makers." },
    { Icon: BriefingIcon, title: "Breakfast & Lunch Briefings", desc: "Focused sessions that fit into busy executive schedules." },
    { Icon: SummitIcon, title: "Seminars & Summits", desc: "Larger-scale events requiring volume and quality." },
    { Icon: SportingIcon, title: "Sporting Occasions", desc: "Hospitality events that build relationships in relaxed settings." },
  ];

  return (
    <section id="solution" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-accent"></span>
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                Our core service
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We get{" "}
              <span className="text-accent">qualified decision-makers</span> to
              your event. Every time.
            </h2>
            <p className="text-text-light text-lg leading-relaxed mb-8">
              We fill executive events with qualified decision-makers through
              targeted, multi-channel outreach — on a genuine no win, no fee
              basis. Delegate acquisition is all we do.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-text-light">
                  <CheckIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center justify-center gap-2"
              >
                {CTA_PRIMARY} <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/delegate-acquisition"
                className="border border-[rgba(146,212,205,0.2)] hover:border-[rgba(146,212,205,0.4)] text-text-light hover:text-white px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center justify-center gap-2"
              >
                More on delegate acquisition <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right - Event type cards */}
          <div className="grid grid-cols-2 gap-4 reveal">
            {eventTypes.map((evt) => (
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
      </div>
    </section>
  );
}
