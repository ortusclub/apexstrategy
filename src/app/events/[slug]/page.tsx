import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import RegisterForm from "@/components/event/RegisterForm";
import { breadcrumbSchema } from "@/lib/schema";
import {
  APHINIA_DESCRIPTION,
  DINNERS,
  INVITATION_TERMS,
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

  const description = `${dinner.dateLabel}, ${dinner.locality}. An invitation-only dinner for CISOs and senior security leaders, co-hosted with Aphinia. Three hours, one table, no presentations.`;
  const url = `/events/${dinner.slug}`;

  return {
    title: dinner.title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${dinner.title} | Apex Strategy`, description, url },
    twitter: { title: `${dinner.title} | Apex Strategy`, description },
  };
}

export default async function DinnerPage({ params }: Params) {
  const { slug } = await params;
  const dinner = getDinner(slug);
  if (!dinner) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Our Events", path: "/events" },
    { name: dinner.city, path: `/events/${dinner.slug}` },
  ];

  return (
    <>
      <ScrollReveal />
      <Navbar />

      <main id="main-content">
        {/*
         * Two columns from lg up: the evening's detail scrolls on the left
         * while the seat request stays in view on the right. Below lg the grid
         * collapses and the form returns to full width beneath the content.
         */}
        <div className="hero-grid-bg">
          <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 grid gap-12 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-14 lg:items-start">
            <div>
              <Breadcrumbs crumbs={crumbs} />

              <div className="flex items-center gap-3 mt-8 mb-4">
                <span className="w-8 h-0.5 bg-accent" aria-hidden="true"></span>
                <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                  Executive dinner
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                {dinner.title}
              </h1>

              <p className="text-text-light text-lg">
                <time dateTime={dinner.dateISO}>{dinner.dateLabel}</time>
                <span aria-hidden="true"> · </span>
                {dinner.timeLabel}
              </p>

              <p className="text-accent-secondary text-sm mt-2">
                {INVITATION_TERMS}
              </p>

              {/* On lg the form is already beside this, so the jump link only
                  earns its place on smaller screens. */}
              <a
                href="#register"
                className="lg:hidden bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center gap-2 mt-8"
              >
                Request your seat
              </a>

              <div className="flex flex-col gap-14 mt-16">
                <Block title="The Evening" paragraphs={dinner.evening} />
                <Block
                  title="The Conversation"
                  paragraphs={[...dinner.conversation, moderationLine(dinner)]}
                />

                <div className="reveal">
                  <SectionLabel>Agenda</SectionLabel>
                  <div className="flex flex-col gap-2 mt-5">
                    {dinner.agenda.map((row) => (
                      <div
                        key={row.time}
                        className="grid grid-cols-[6rem_1fr] gap-4 items-baseline bg-bg-card border border-border rounded-xl px-5 py-3.5"
                      >
                        <span className="text-accent font-semibold text-sm">
                          {row.time}
                        </span>
                        <span className="text-text-light text-sm">{row.what}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Block title="Your peers for the evening" paragraphs={dinner.peers} />

                <div className="reveal">
                  <SectionLabel>Location</SectionLabel>
                  <div className="bg-bg-card border border-border rounded-xl p-6 mt-5">
                    <p className="text-white font-semibold">{dinner.locality}</p>
                    <p className="text-text-light text-sm mt-1">
                      The venue is shared with guests once a seat is confirmed.
                    </p>

                    {/*
                     * Area-level map only. The query is the locality, never the
                     * venue or street address, and the zoom is held at city
                     * scale so nothing here narrows the evening to a building.
                     * Keyless embed — no Maps API key involved.
                     */}
                    <div className="mt-5 aspect-video w-full overflow-hidden rounded-lg border border-border">
                      <iframe
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(
                          dinner.locality,
                        )}&z=12&output=embed`}
                        title={`Map showing the ${dinner.locality} area`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="h-full w-full border-0"
                      />
                    </div>

                    <p className="text-text-muted text-xs mt-3">
                      Exact venue location provided upon confirmation
                    </p>
                  </div>
                </div>

                <div className="reveal">
                  <SectionLabel>Host</SectionLabel>
                  <p className="text-white font-semibold mt-5">Aphinia</p>
                  <p className="text-text-light leading-relaxed mt-2">
                    {APHINIA_DESCRIPTION}
                  </p>

                  <div className="bg-bg-card border border-border rounded-xl p-6 mt-6">
                    <p className="text-text-muted text-xs font-semibold tracking-[0.12em] uppercase">
                      Co-host
                    </p>
                    <p className="text-white font-semibold mt-1.5">
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
                    </p>
                    <p className="text-text-light text-sm mt-0.5">
                      {dinner.coHost.title}, {dinner.coHost.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*
             * Sticky below the fixed navbar. The max-height and its own scroll
             * are a safeguard: on a short viewport the card scrolls internally
             * rather than having its submit button clipped off the bottom.
             */}
            <div className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto">
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
              />
            </div>
          </div>
        </div>
      </main>

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
    <div className="reveal">
      <SectionLabel>{title}</SectionLabel>
      <div className="flex flex-col gap-4 mt-5">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-text-light leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
