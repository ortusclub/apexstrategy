import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import Badge from "@/components/Badge";
import {
  ArrowRightIcon,
  CalendarIcon,
  MapPinIcon,
} from "@/components/icons";
import { breadcrumbSchema } from "@/lib/schema";
import { DELIVERED_EVENTS, UPCOMING_EVENTS } from "@/content/events";
import { filledDinners, upcomingDinners } from "@/content/dinners";
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
const DELIVERED_VISIBLE = 6;

/**
 * Both sections run three across on desktop, two on tablet and one on
 * mobile. Upcoming cards are kept compact so the detail fits the narrower
 * column without awkward wraps.
 */
const UPCOMING_GRID = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6";
const PAST_GRID = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";

/** Every card shares this hover treatment: border and glow, no movement —
    `.reveal` already owns the transform. */
const CARD_HOVER =
  "transition-[border-color,box-shadow] duration-300 hover:border-accent/30 hover:shadow-[0_24px_48px_-28px_rgba(0,208,132,0.45)]";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
];

type UpcomingCard = {
  name: string;
  dateISO: string;
  /** "Tuesday, Oct 20, 2026 · 6:00 PM CDT" — date and start on one line. */
  when: string;
  /** City or area — never a street address. */
  place: string;
  type: string;
  /** Card blurb — two lines beside a speaker callout, four without one. */
  description: string;
  href?: string;
  /** One-line callout, e.g. "Erik Hart (CISO, Cushman & Wakefield)". */
  speaker?: string;
  /** Only the dinners carry the invitation badges. */
  badges?: readonly string[];
  /** City banner, when the dinner has one. */
  image?: { src: string; alt: string };
};

/** The two terms worth repeating on a compact card. */
const CARD_BADGES = ["Invitation-Only", "Complimentary"] as const;

/** "2026-10-20" → "Tuesday, Oct 20, 2026". Formatted in UTC so the date
    never slips a day with the server's timezone. */
function shortDate(dateISO: string): string {
  return new Date(`${dateISO}T12:00:00Z`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** "6:00 PM – 9:00 PM CDT" → "6:00 PM CDT": the start time and its zone. */
function startTime(timeLabel: string): string {
  const [start] = timeLabel.split("–").map((part) => part.trim());
  const zone = timeLabel.trim().split(/\s+/).pop();
  return zone && !start.endsWith(zone) ? `${start} ${zone}` : start;
}

/**
 * One "coming up" list, built from both sources: the upcoming Aphinia dinners,
 * which each have their own page, and anything listed in @/content/events.
 * Sorted by date so the next event is always first.
 */
const upcoming: UpcomingCard[] = [
  ...upcomingDinners().map((dinner) => ({
    name: dinner.title,
    dateISO: dinner.dateISO,
    when: `${shortDate(dinner.dateISO)} · ${startTime(dinner.timeLabel)}`,
    place: dinner.locality,
    type: "Executive dinner",
    description: dinner.summary,
    href: `/events/${dinner.slug}`,
    speaker: dinner.speaker
      ? `${dinner.speaker.name} (${dinner.speaker.title}, ${dinner.speaker.company})`
      : undefined,
    badges: CARD_BADGES,
    image: dinner.image,
  })),
  ...UPCOMING_EVENTS.map((event) => ({
    name: event.name,
    dateISO: event.dateISO,
    when: event.date,
    place: event.location,
    type: event.type,
    description: event.description,
    href: event.href,
  })),
].sort((a, b) => a.dateISO.localeCompare(b.dateISO));

type PastCard = {
  name: string;
  location: string;
  year: string;
  type: string;
  description: string;
  href?: string;
  host?: string;
};

/**
 * Filled dinners first, most recent first, then the delivered campaigns from
 * @/content/events in their own order.
 */
const past: PastCard[] = [
  ...filledDinners()
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
    .map((dinner) => ({
      name: dinner.title,
      location: dinner.locality,
      year: dinner.dateISO.slice(0, 4),
      type: "Executive dinner",
      description: dinner.recap ?? dinner.summary,
      href: `/events/${dinner.slug}`,
      host: "Aphinia",
    })),
  ...DELIVERED_EVENTS,
];

export default function EventsPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      <main id="main-content">
        <section className="pt-32 pb-20 hero-grid-bg">
          <div className="max-w-6xl mx-auto px-6">
            <Breadcrumbs crumbs={crumbs} />

            <div className="flex flex-wrap items-center gap-2 mt-10">
              <Badge tone="accent">Executive Series</Badge>
              <Badge>Invitation-only</Badge>
              <Badge>Complimentary</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mt-6 max-w-3xl">
              Events we&apos;re supporting
            </h1>

            <p className="text-text-light text-lg leading-relaxed max-w-2xl mt-6">
              Explore a selection of events Apex Strategy is currently
              supporting through targeted delegate acquisition. Each one is
              hosted by our client or partner — our role is filling the room.
            </p>
          </div>
        </section>

        {/* Upcoming — hidden entirely when there is nothing to show, so the
            page never advertises an empty calendar. */}
        {upcoming.length > 0 && (
          <section className="pb-20" aria-labelledby="upcoming-heading">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex flex-wrap items-end justify-between gap-6 border-t border-border pt-20">
                <SectionHeading
                  eyebrow="Upcoming events"
                  title={<span id="upcoming-heading">Open for registration.</span>}
                  intro="Invitation-only gatherings for senior IT and security leaders. The host runs the evening; we source and confirm the guest list."
                />
                <p className="text-text-muted text-sm whitespace-nowrap">
                  {upcoming.length} {upcoming.length === 1 ? "event" : "events"}
                </p>
              </div>

              <ExpandableGrid
                initialCount={UPCOMING_VISIBLE}
                moreLabel="View more events"
                className={`${UPCOMING_GRID} mt-12`}
              >
                {upcoming.map((event) => (
                  <article
                    key={event.name}
                    className={`reveal group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-card ${CARD_HOVER}`}
                  >
                    {/* Banner — the city photo with the location pinned to it.
                        Events without a photo still get the location badge. */}
                    <div
                      className={`relative w-full overflow-hidden ${
                        event.image ? "h-32" : "h-14 bg-bg-secondary"
                      }`}
                    >
                      {event.image && (
                        <>
                          <Image
                            src={event.image.src}
                            alt={event.image.alt}
                            fill
                            sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent"
                            aria-hidden="true"
                          ></div>
                        </>
                      )}
                      <span className="absolute bottom-2.5 left-3 inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-primary/80 px-2.5 py-1 text-xs font-medium text-text-light backdrop-blur-sm">
                        <MapPinIcon className="w-3.5 h-3.5 text-accent" />
                        {event.place}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col justify-between gap-4 p-4 sm:p-5 lg:p-4 xl:p-5">
                      <div>
                        <p className="text-accent text-[10px] font-semibold tracking-widest uppercase">
                          {event.type}
                        </p>
                        <h3 className="text-base sm:text-lg font-bold tracking-tight leading-snug text-white mt-1">
                          {event.name}
                        </h3>
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-text-muted">
                          <CalendarIcon className="w-3.5 h-3.5 shrink-0 text-accent" />
                          <time dateTime={event.dateISO}>{event.when}</time>
                        </p>

                        {/* Without a speaker callout the paragraph runs on
                            into the space the callout would take, so every
                            card keeps the same shape. The full copy is on
                            the event page. */}
                        <p
                          className={`mt-2.5 text-xs leading-relaxed text-text-muted ${
                            event.speaker ? "line-clamp-2" : "line-clamp-4"
                          }`}
                        >
                          {event.description}
                        </p>

                        {/* The full text is in the title tooltip when the
                            line is truncated. */}
                        {event.speaker && (
                          <Callout label="Featured Speaker" value={event.speaker} />
                        )}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-2 border-t border-border pt-3">
                        {/* Normal-case tags rather than the uppercase Badge:
                            narrow enough to share the row with the CTA in a
                            third-width card. */}
                        {event.badges && (
                          <ul className="flex flex-wrap gap-1.5" aria-label="Terms">
                            {event.badges.map((badge) => (
                              <li
                                key={badge}
                                className="whitespace-nowrap rounded border border-border bg-bg-secondary px-1.5 py-0.5 text-[10px] text-text-light"
                              >
                                {badge}
                              </li>
                            ))}
                          </ul>
                        )}
                        {event.href && (
                          <Link
                            href={event.href}
                            className="ml-auto text-accent hover:text-accent-hover text-xs font-semibold inline-flex items-center gap-1 rounded-sm transition-colors after:absolute after:inset-0 after:rounded-xl"
                          >
                            View event
                            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
                            <span className="sr-only"> — {event.name}</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </ExpandableGrid>
            </div>
          </section>
        )}

        {past.length > 0 && (
          <section
            className="py-20 bg-bg-secondary border-y border-border"
            aria-labelledby="past-heading"
          >
            <div className="max-w-6xl mx-auto px-6">
              <SectionHeading
                eyebrow="Past events"
                title={<span id="past-heading">Events we&apos;ve helped fill.</span>}
                intro="A selection of executive gatherings we have filled with qualified senior leaders."
              />

              <CollapsibleSection
                id="past-events"
                showLabel="Show past events"
                hideLabel="Hide past events"
              >
                <ExpandableGrid
                  initialCount={DELIVERED_VISIBLE}
                  moreLabel="View more past events"
                  className={`${PAST_GRID} pt-12`}
                >
                  {past.map((event) => (
                    <article
                      key={event.name}
                      className={`reveal relative flex h-full flex-col rounded-2xl border border-border bg-bg-primary/60 p-6 sm:p-8 ${CARD_HOVER}`}
                    >
                      <p className="text-accent text-xs font-semibold tracking-widest uppercase">
                        {event.type}
                      </p>

                      <h3 className="text-lg font-semibold tracking-tight leading-snug text-white mt-4 sm:min-h-[2lh]">
                        {event.name}
                      </h3>

                      {/* Narrower cards than upcoming, so plain lines rather
                          than label/value rows — nothing here wraps. */}
                      <div className="mt-4 text-sm">
                        <p className="text-text-light">
                          {event.location}
                          <span aria-hidden="true"> · </span>
                          {event.year}
                        </p>
                        {event.host && (
                          <p className="text-text-muted mt-1">
                            Hosted by {event.host}
                          </p>
                        )}
                      </div>

                      <p className="text-text-light text-sm leading-relaxed mt-5">
                        {event.description}
                      </p>

                      {event.href && (
                        <div className="mt-auto pt-6">
                          <div className="border-t border-border pt-5">
                            <Link
                              href={event.href}
                              className="text-accent hover:text-accent-hover text-sm font-semibold inline-flex items-center gap-2 rounded-sm transition-colors after:absolute after:inset-0 after:rounded-2xl"
                            >
                              View event
                              <ArrowRightIcon className="w-4 h-4" />
                              <span className="sr-only"> — {event.name}</span>
                            </Link>
                          </div>
                        </div>
                      )}
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

/** The one-line box under a card's description. */
function Callout({ label, value }: { label: string; value: string }) {
  return (
    <p
      className="mt-3 flex items-center gap-1.5 rounded-md border border-border bg-bg-primary/50 p-2 text-[11px] text-text-light"
      title={`${label}: ${value}`}
    >
      <span className="shrink-0 font-semibold text-accent">{label}:</span>
      <span className="truncate">{value}</span>
    </p>
  );
}
