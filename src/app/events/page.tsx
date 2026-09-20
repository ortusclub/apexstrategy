import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRightIcon } from "@/components/icons";
import { breadcrumbSchema } from "@/lib/schema";
import { DELIVERED_EVENTS, UPCOMING_EVENTS } from "@/content/events";
import { DINNERS, INVITATION_TERMS } from "@/content/dinners";
import ExpandableGrid from "@/components/ExpandableGrid";
import CollapsibleSection from "@/components/CollapsibleSection";

const TITLE = "Events We're Supporting";
const DESCRIPTION =
  "Client events Apex Strategy is supporting through targeted delegate acquisition — what's open for registration now, and a selection of events we have already helped fill.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/events" },
  openGraph: {
    title: `${TITLE} | Apex Strategy`,
    description: DESCRIPTION,
    url: "/events",
  },
  twitter: {
    title: `${TITLE} | Apex Strategy`,
    description: DESCRIPTION,
  },
};

/** How many cards each section shows before the "view more" control. */
const UPCOMING_VISIBLE = 6;
const DELIVERED_VISIBLE = 4;

/** Three across on desktop, two on tablet, one on mobile. */
const CARD_GRID = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
];

type UpcomingCard = {
  name: string;
  dateISO: string;
  dateLabel: string;
  /** City or area — never a street address. */
  place: string;
  type: string;
  description: string;
  href?: string;
  /** Whoever convenes the event. Never Apex — we are not the organiser. */
  host?: string;
  /** Only the dinners carry the invitation terms line. */
  terms?: string;
};

/**
 * One "coming up" list, built from both sources: the September dinners, which
 * each have their own page, and anything listed in @/content/events. Sorted by
 * date so the next event is always first.
 */
const upcoming: UpcomingCard[] = [
  ...DINNERS.map((dinner) => ({
    name: dinner.title,
    dateISO: dinner.dateISO,
    dateLabel: dinner.dateLabel,
    place: dinner.locality,
    type: "Executive dinner",
    description: dinner.summary,
    href: `/events/${dinner.slug}`,
    host: "Aphinia",
    terms: INVITATION_TERMS,
  })),
  ...UPCOMING_EVENTS.map((event) => ({
    name: event.name,
    dateISO: event.dateISO,
    dateLabel: event.date,
    place: event.location,
    type: event.type,
    description: event.description,
    href: event.href,
    host: event.host,
  })),
].sort((a, b) => a.dateISO.localeCompare(b.dateISO));

export default function EventsPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      <main id="main-content">
        <section className="pt-32 pb-16 hero-grid-bg">
          <div className="max-w-5xl mx-auto px-6">
            <Breadcrumbs crumbs={crumbs} />

            <div className="flex items-center gap-3 mt-8 mb-4">
              <span className="w-8 h-0.5 bg-accent" aria-hidden="true"></span>
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                Events
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Events we&apos;re supporting
            </h1>

            <p className="text-text-light text-lg leading-relaxed max-w-2xl">
              Explore a selection of events Apex Strategy is currently
              supporting through targeted delegate acquisition. Each one is
              hosted by our client or partner — our role is filling the room.
            </p>
          </div>
        </section>

        {/* Upcoming — hidden entirely when there is nothing to show, so the
            page never advertises an empty calendar. */}
        {upcoming.length > 0 && (
          <section className="pb-24">
            <div className="max-w-5xl mx-auto px-6">
              <SectionHeading
                eyebrow="Coming up"
                title="Open for registration."
                intro="Invitation-only gatherings for senior decision-makers. The host runs the evening; we source and confirm the guest list."
              />

              <ExpandableGrid
                initialCount={UPCOMING_VISIBLE}
                moreLabel="View more events"
                className={`${CARD_GRID} mt-14`}
              >
                {upcoming.map((event) => (
                  <article
                    key={event.name}
                    className="bg-bg-card border border-border rounded-2xl p-8 reveal hover:border-[rgba(146,212,205,0.2)] transition-colors flex flex-col h-full"
                  >
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
                      <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                        {event.type}
                      </span>
                      {event.host && (
                        <span className="text-text-muted text-xs tracking-wide">
                          Hosted by {event.host}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">
                      {event.name}
                    </h3>

                    <p className="text-text-muted text-sm mb-1">
                      <time dateTime={event.dateISO}>{event.dateLabel}</time>
                      <span aria-hidden="true"> · </span>
                      {event.place}
                    </p>

                    {event.terms && (
                      <p className="text-accent-secondary text-xs mb-4">
                        {event.terms}
                      </p>
                    )}

                    <p className={`text-text-light text-sm leading-relaxed${
                      event.terms ? "" : " mt-3"
                    }`}>
                      {event.description}
                    </p>

                    <p className="text-text-muted text-xs mt-4">
                      Delegate acquisition by Apex Strategy
                    </p>

                    {event.href && (
                      <Link
                        href={event.href}
                        className="text-accent hover:text-accent-hover text-sm font-semibold mt-auto pt-6 inline-flex items-center gap-2 rounded-sm transition-colors"
                      >
                        View details and register
                        <ArrowRightIcon className="w-4 h-4" />
                        <span className="sr-only"> — {event.name}</span>
                      </Link>
                    )}
                  </article>
                ))}
              </ExpandableGrid>
            </div>
          </section>
        )}

        {DELIVERED_EVENTS.length > 0 && (
          <section className="py-24 bg-bg-secondary border-t border-border">
            <div className="max-w-5xl mx-auto px-6">
              <SectionHeading
                eyebrow="Past campaigns"
                title="Events we've helped fill."
                intro="A selection of client events we have delivered qualified delegates for."
              />

              <CollapsibleSection
                id="past-events"
                showLabel="Show past events"
                hideLabel="Hide past events"
              >
                <ExpandableGrid
                  initialCount={DELIVERED_VISIBLE}
                  moreLabel="View more campaigns"
                  className={`${CARD_GRID} pt-14`}
                >
                  {DELIVERED_EVENTS.map((event) => (
                    <article
                      key={event.name}
                      className="bg-bg-card border border-border rounded-2xl p-8 reveal hover:border-[rgba(146,212,205,0.2)] transition-colors flex flex-col h-full"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                          {event.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2">
                        {event.name}
                      </h3>

                      <p className="text-text-muted text-sm mb-4">
                        {event.location}
                        <span aria-hidden="true"> · </span>
                        {event.year}
                      </p>

                      <p className="text-text-light text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </article>
                  ))}
                </ExpandableGrid>
              </CollapsibleSection>
            </div>
          </section>
        )}

        <CtaSection />
      </main>

      <Footer />

      <JsonLd data={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
