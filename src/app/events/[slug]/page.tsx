import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import RegisterForm from "@/components/event/RegisterForm";
import EventSummaryBar from "@/components/event/EventSummaryBar";
import EventCountdown from "@/components/event/EventCountdown";
import Badge from "@/components/Badge";
import { CheckIcon, MapPinIcon } from "@/components/icons";
import { breadcrumbSchema } from "@/lib/schema";
import { LEGAL_LINKS } from "@/lib/site";
import {
  APHINIA_DESCRIPTION,
  DINNERS,
  INVITATION_BADGES,
  getDinner,
  moderationLine,
} from "@/content/dinners";

/** One static page per dinner — the set never changes at runtime. */
export function generateStaticParams() {
  return DINNERS.map((dinner) => ({ slug: dinner.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const dinner = getDinner(slug);
  if (!dinner) return {};

  const tail = dinner.speaker
    ? `Featuring ${dinner.speaker.name}, ${dinner.speaker.title} at ${dinner.speaker.company}.`
    : dinner.status === "upcoming"
      ? "Three hours, one table, one candid conversation."
      : "Three hours, one table, no presentations.";
  const description = `${dinner.dateLabel}, ${dinner.locality}. An invitation-only dinner for CISOs and senior security leaders, hosted by Aphinia with delegate acquisition by Apex Strategy. ${tail}`;
  const url = `/events/${dinner.slug}`;

  return {
    title: dinner.title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${dinner.title} | Apex Strategy`, description, url },
    twitter: { title: `${dinner.title} | Apex Strategy`, description },
  };
}

/**
 * Fallback banner for dinners without a city photograph (the September
 * dinners). From the licensed set credited in @/content/hero-slides.
 */
const DEFAULT_HERO_IMAGE = "/images/events/roundtable-dinner.jpg";

export default async function DinnerPage({ params }: Params) {
  const { slug } = await params;
  const dinner = getDinner(slug);
  if (!dinner) notFound();

  const isOpen = dinner.status === "upcoming";
  const moderation = moderationLine(dinner);
  /** "Bob's Steak & Chop House, Austin, TX" — or just the area when the
      venue is not published. */
  const place = dinner.venue
    ? `${dinner.venue.name}, ${dinner.locality}`
    : dinner.locality;
  const mapQuery = dinner.venue
    ? `${dinner.venue.name}, ${dinner.venue.address}`
    : dinner.locality;

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: dinner.city, path: `/events/${dinner.slug}` },
  ];

  return (
    <>
      <ScrollReveal />
      <Navbar />

      <main id="main-content">
        {/* Hero banner — photo, gradient overlay, then the title lockup
            anchored to the bottom edge. */}
        <section
          id="event-hero"
          className="relative isolate overflow-hidden border-b border-border"
        >
          <Image
            src={dinner.image?.src ?? DEFAULT_HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover opacity-55"
          />
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-t from-bg-primary via-bg-primary/75 to-bg-primary/35"
            aria-hidden="true"
          ></div>

          <div className="max-w-6xl mx-auto px-6 pt-28 pb-12 md:pb-16 min-h-[24rem] md:min-h-[28rem] flex flex-col justify-between gap-12">
            <Breadcrumbs crumbs={crumbs} />

            <div>
              <ul className="flex flex-wrap gap-2" aria-label="Terms">
                {isOpen ? (
                  INVITATION_BADGES.map((badge) => (
                    <li key={badge}>
                      <Badge className="bg-bg-primary/60 backdrop-blur-md">
                        {badge}
                      </Badge>
                    </li>
                  ))
                ) : (
                  <li>
                    <Badge className="bg-bg-primary/60 backdrop-blur-md">
                      This evening has taken place
                    </Badge>
                  </li>
                )}
              </ul>

              <p className="text-accent text-xs font-semibold tracking-widest uppercase mt-8">
                Executive dinner
              </p>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.08] mt-3 max-w-3xl">
                {dinner.title}
              </h1>

              <p className="text-lg mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
                <time dateTime={dinner.dateISO} className="text-text-light">
                  {dinner.dateLabel}
                </time>
                <span className="hidden sm:inline text-text-muted" aria-hidden="true">·</span>
                <span className="text-text-muted">{dinner.timeLabel}</span>
                <span className="hidden sm:inline text-text-muted" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5 text-text-muted">
                  <MapPinIcon className="w-4 h-4 shrink-0 text-accent" />
                  {place}
                </span>
              </p>

              {isOpen && <EventCountdown startsAt={dinner.startsAt} />}
            </div>
          </div>
        </section>

        {/*
         * Asymmetric two columns from lg up (roughly 65 / 35): the evening's
         * detail scrolls on the left while the seat request stays in view on
         * the right. Below lg the grid collapses and the form follows the
         * content, with a sticky bar pointing to it.
         */}
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-24 lg:pt-16 grid gap-12 lg:grid-cols-[minmax(0,65fr)_minmax(0,35fr)] lg:gap-14 lg:items-start">
          <div className="divide-y divide-border [&>*]:py-12 [&>*:first-child]:pt-0 [&>*:last-child]:pb-0">
            <Block title="The Evening" paragraphs={dinner.evening} />
            <Block
              title="The Conversation"
              paragraphs={
                moderation
                  ? [...dinner.conversation, moderation]
                  : dinner.conversation
              }
            />

            {dinner.takeaways && (
              <section className="reveal">
                <SectionLabel>What you&apos;ll take away</SectionLabel>
                <ul className="grid gap-3 sm:grid-cols-2 mt-6">
                  {dinner.takeaways.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-xl border border-border bg-bg-card/60 p-4 text-sm text-text-light leading-relaxed"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <CheckIcon className="w-3 h-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="reveal">
              <SectionLabel>Agenda</SectionLabel>
              {/* A vertical timeline: the rail runs through each time marker. */}
              <ol className="relative mt-6 ml-1.5 border-l border-border">
                {dinner.agenda.map((row) => (
                  <li key={row.time} className="relative pl-7 pb-6 last:pb-0">
                    <span
                      className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg-primary bg-accent"
                      aria-hidden="true"
                    ></span>
                    <p className="text-accent text-xs font-semibold tracking-widest uppercase">
                      {row.time}
                    </p>
                    <p className="text-text-light mt-1">{row.what}</p>
                  </li>
                ))}
              </ol>
            </section>

            <Block title="Your peers for the evening" paragraphs={dinner.peers} />

            {dinner.roster && (
              <section className="reveal">
                <SectionLabel>Leaders invited</SectionLabel>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
                  {dinner.roster.map((guest) => (
                    <li
                      key={`${guest.role}-${guest.company}`}
                      className="rounded-lg p-3.5 bg-bg-secondary/60 border border-border transition-colors hover:border-accent-secondary/25"
                    >
                      <p className="text-sm font-semibold text-white leading-snug">
                        {guest.role}
                      </p>
                      <p className="text-xs text-text-muted mt-0.5">
                        {guest.company}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="reveal">
              <SectionLabel>Location</SectionLabel>
              <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="p-6">
                  {dinner.venue ? (
                    <>
                      <p className="text-white font-semibold">
                        {dinner.venue.name}
                      </p>
                      <p className="text-text-muted text-sm mt-1">
                        {dinner.venue.address}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-white font-semibold">
                        {dinner.locality}
                      </p>
                      <p className="text-text-muted text-sm mt-1">
                        The venue is shared with guests once a seat is
                        confirmed.
                      </p>
                    </>
                  )}
                </div>

                {/*
                 * Without a published venue the map stays area-level: the
                 * query is the locality and the zoom is held at city scale
                 * so nothing narrows the evening to a building. With one,
                 * it points at the venue. Keyless embed — no Maps API key.
                 */}
                <div className="aspect-video w-full border-t border-white/10">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      mapQuery,
                    )}&z=${dinner.venue ? 15 : 12}&output=embed`}
                    title={
                      dinner.venue
                        ? `Map showing ${dinner.venue.name}`
                        : `Map showing the ${dinner.locality} area`
                    }
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                  />
                </div>

                {!dinner.venue && (
                  <p className="text-text-muted text-xs px-6 py-3 border-t border-white/10">
                    Exact venue location provided upon confirmation
                  </p>
                )}
              </div>
            </section>

            <section className="reveal">
              <SectionLabel>Host</SectionLabel>
              <p className="text-white text-lg font-semibold mt-6">Aphinia</p>
              <p className="text-text-light leading-relaxed mt-2">
                {APHINIA_DESCRIPTION}
              </p>

              {/* Apex runs the guest list, not the evening. Stated here,
                  beside the host, so the two roles are read together. */}
              <p className="text-text-muted text-sm leading-relaxed mt-4">
                Apex Strategy supports this dinner through delegate
                acquisition — we source, qualify and confirm the guest
                list. The evening itself is hosted by Aphinia.
              </p>

              {dinner.coHost && (
                <PersonCard
                  label="Co-host"
                  name={
                    <a
                      href={dinner.coHost.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors rounded-sm"
                    >
                      {dinner.coHost.name}
                      <span className="sr-only">
                        {" "}
                        — LinkedIn profile, opens in a new tab
                      </span>
                    </a>
                  }
                  initials={initials(dinner.coHost.name)}
                  title={dinner.coHost.title}
                  company={dinner.coHost.company}
                />
              )}

              {dinner.speaker && (
                <PersonCard
                  label="Featured speaker"
                  name={dinner.speaker.name}
                  initials={initials(dinner.speaker.name)}
                  title={dinner.speaker.title}
                  company={dinner.speaker.company}
                  bio={dinner.speaker.bio}
                />
              )}
            </section>
          </div>

          {/*
           * Sticky below the fixed navbar and the summary bar beneath it. The
           * max-height and its own scroll are a safeguard: on a short viewport
           * the card scrolls internally rather than having its submit button
           * clipped off the bottom.
           */}
          <aside className="lg:sticky lg:top-36 lg:max-h-[calc(100vh-10rem)] lg:overflow-y-auto">
            {isOpen ? (
              <RegisterForm
                eventId={dinner.slug}
                variant="card"
                stacked
                inlineValidation
                autoFocusOnView
                includeNotes={false}
                requirePhone
                heading="Request an Invitation"
                submitLabel="Request invitation →"
                confirmation={{
                  heading: "Request received",
                  body: "Thanks — our team will review your request and confirm your seat by email within one business day.",
                }}
                intro={null}
                disclosure={<PrivacyNotice />}
              />
            ) : (
              <div className="rounded-2xl border border-border bg-bg-card p-7 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.6)]">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Registration closed
                </h2>
                <p className="text-text-light text-sm leading-relaxed mt-3">
                  This dinner has taken place. See what&apos;s coming up next
                  and request a seat at an upcoming evening.
                </p>
                <Link
                  href="/events"
                  className="w-full bg-accent hover:bg-accent-hover text-bg-primary font-semibold py-3.5 rounded-lg text-sm transition-all hover:scale-[1.01] active:scale-[0.99] motion-reduce:transform-none inline-flex items-center justify-center gap-2 mt-6"
                >
                  View upcoming events
                </Link>
              </div>
            )}
          </aside>
        </div>
      </main>

      <EventSummaryBar
        heroId="event-hero"
        title={dinner.title}
        city={dinner.city}
        dateISO={dinner.dateISO}
        dateLabel={dinner.dateLabel}
        timeLabel={dinner.timeLabel}
        location={place}
        cta={
          isOpen
            ? { label: "Request Invitation", href: "#register" }
            : { label: "View upcoming events", href: "/events" }
        }
      />

      <Footer />

      <JsonLd data={[breadcrumbSchema(crumbs)]} />
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-8 h-0.5 bg-accent" aria-hidden="true"></span>
      <h2 className="text-accent text-xs font-semibold tracking-widest uppercase">
        {children}
      </h2>
    </div>
  );
}

function Block({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: readonly string[];
}) {
  return (
    <section className="reveal">
      <SectionLabel>{title}</SectionLabel>
      <div className="flex flex-col gap-4 mt-6">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-text-light leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

/** "Erik Hart" → "EH". Stands in for a portrait — none are published. */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/** Co-host and speaker showcase: monogram left, details stacked right. */
function PersonCard({
  label,
  name,
  initials,
  title,
  company,
  bio,
}: {
  label: string;
  name: React.ReactNode;
  initials: string;
  title: string;
  company: string;
  bio?: string;
}) {
  return (
    <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="flex gap-5">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-gradient-to-br from-accent/25 to-accent-deep/40 font-semibold tracking-wide text-white"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div className="min-w-0">
          <p className="text-text-muted text-xs font-semibold tracking-[0.12em] uppercase">
            {label}
          </p>
          <p className="text-white text-lg font-semibold mt-1">{name}</p>
          <div className="flex flex-wrap items-center gap-2 mt-1.5">
            <span className="text-text-light text-sm">
              {title}
              <span className="sr-only">,</span>
            </span>
            <span className="inline-flex items-center rounded-full border border-accent-secondary/15 bg-accent-secondary/[0.06] px-2.5 py-0.5 text-xs font-medium text-accent-secondary">
              {company}
            </span>
          </div>
          {bio && (
            <p className="text-text-light text-sm leading-relaxed mt-4">
              {bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Consent notice beneath the seat request button. Each legal phrase links
 * only once its page exists — see LEGAL_LINKS in @/lib/site.
 */
function PrivacyNotice() {
  return (
    <>
      By submitting this request, you consent to Apex Strategy and Aphinia
      storing your details to process your invitation and communicate event
      updates. We respect your privacy and will never share or sell your data.
      View our <LegalLink href={LEGAL_LINKS.privacy}>Privacy Policy</LegalLink>{" "}
      and <LegalLink href={LEGAL_LINKS.terms}>Terms of Service</LegalLink>.
    </>
  );
}

function LegalLink({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  if (!href) return <>{children}</>;
  return (
    <Link
      href={href}
      className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors rounded-sm"
    >
      {children}
    </Link>
  );
}
