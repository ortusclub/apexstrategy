import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import EventShowcase from "@/components/EventShowcase";
import JsonLd from "@/components/JsonLd";
import LogosBar from "@/components/LogosBar";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { CTA_PRIMARY, getService } from "@/lib/site";
import {
  CAMPAIGN_TIMELINE,
  FAILURE_MODES,
  METHODOLOGY,
  NO_WIN_NO_FEE,
  OUTCOMES,
  PROCESS,
  USE_CASES,
} from "@/content/delegate-acquisition";

const service = getService("delegate-acquisition");

const TITLE = "Delegate Acquisition for Executive Events";
const DESCRIPTION =
  "We fill executive events with qualified decision-makers through targeted, multi-channel outreach — on a genuine no win, no fee basis. You pay only for confirmed delegates who meet your agreed criteria.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/${service.slug}` },
  openGraph: {
    title: `${TITLE} | Apex Strategy`,
    description: DESCRIPTION,
    url: `/${service.slug}`,
  },
  twitter: {
    title: `${TITLE} | Apex Strategy`,
    description: DESCRIPTION,
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: service.name, path: `/${service.slug}` },
];

/** Primary action, repeated at natural decision points down the page. */
function PrimaryCta({ label = CTA_PRIMARY }: { label?: string }) {
  return (
    <Link
      href="/#contact"
      className="bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center justify-center gap-2"
    >
      {label} <ArrowRightIcon className="w-4 h-4" />
    </Link>
  );
}

export default function DelegateAcquisitionPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      <main id="main-content">
        {/* HERO */}
        <section className="pt-32 pb-20 hero-grid-bg">
          <div className="max-w-4xl mx-auto px-6">
            <Breadcrumbs crumbs={crumbs} />

            <div className="flex items-center gap-3 mt-8 mb-5">
              <span className="w-8 h-0.5 bg-accent" aria-hidden="true"></span>
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                Our core service
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight mb-6">
              Delegate acquisition for{" "}
              <span className="gradient-text">executive events</span>
            </h1>

            <p className="text-text-light text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              We fill executive events with qualified decision-makers through
              targeted, multi-channel outreach — on a genuine no win, no fee
              basis.
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5 mb-10">
              {OUTCOMES.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 text-text-light"
                >
                  <CheckIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>

            <PrimaryCta />
          </div>
        </section>

        {/* TRUST — moved directly below the hero */}
        <LogosBar prominent />

        {/* WHO IT'S FOR */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeading
              eyebrow="Who this is for"
              title="Built for events where the guest list is the product."
              intro="If your event succeeds or fails on who is in the room, this is the problem we solve."
              align="center"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
              {USE_CASES.map((useCase) => (
                <div
                  key={useCase.title}
                  className="bg-bg-card border border-border rounded-2xl p-6 reveal hover:border-[rgba(146,212,205,0.2)] transition-colors"
                >
                  <h3 className="text-base font-semibold text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY IT FAILS */}
        <section className="py-24 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <SectionHeading
              eyebrow="Why campaigns fail"
              title="Why delegate acquisition usually goes wrong."
              intro="Six failure modes account for most under-filled rooms. Each one is avoidable."
            />

            <div className="flex flex-col gap-4 mt-14">
              {FAILURE_MODES.map((mode) => (
                <div
                  key={mode.problem}
                  className="bg-bg-card border border-border rounded-2xl p-7 reveal"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {mode.problem}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <p className="text-text-muted text-sm leading-relaxed">
                      {mode.why}
                    </p>
                    <div className="flex gap-3 md:border-l md:border-border md:pl-5">
                      <CheckIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-text-light text-sm leading-relaxed">
                        {mode.fix}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <SectionHeading
              eyebrow="Our methodology"
              title="How we build a room, stage by stage."
              intro="Eight stages, run the same way on every campaign. Nothing is left to a mass mailing."
            />

            <ol className="grid md:grid-cols-2 gap-5 mt-14">
              {METHODOLOGY.map((step, i) => (
                <li
                  key={step.title}
                  className="bg-bg-card border border-border rounded-2xl p-7 reveal"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="w-9 h-9 rounded-full bg-[rgba(0,208,132,0.1)] border border-[rgba(0,208,132,0.25)] flex items-center justify-center text-accent font-bold text-sm flex-shrink-0"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-12">
              <PrimaryCta />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <SectionHeading
              eyebrow="How it works"
              title="From first call to full room."
              intro="What working with us actually looks like, start to finish."
              align="center"
            />

            <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {PROCESS.map((step, i) => (
                <li
                  key={step.title}
                  className="bg-bg-card border border-border rounded-2xl p-7 reveal hover:border-[rgba(146,212,205,0.2)] transition-colors"
                >
                  <div
                    className="text-accent font-bold text-sm mb-3"
                    aria-hidden="true"
                  >
                    Step {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CAMPAIGN TIMELINE */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="reveal">
                <SectionHeading
                  eyebrow="Campaign timeline"
                  title="What a typical campaign looks like."
                  intro="An indicative seven-week run. Short-notice campaigns compress the same phases — we have filled rooms in under two weeks."
                />
              </div>

              <div className="relative reveal">
                <div
                  className="absolute left-5 top-2 bottom-2 w-0.5 timeline-line"
                  aria-hidden="true"
                ></div>

                <ol className="flex flex-col gap-9">
                  {CAMPAIGN_TIMELINE.map((phase, i) => (
                    <li key={phase.title} className="relative pl-14">
                      <div
                        className={`absolute left-3 top-1 w-5 h-5 rounded-full border-4 border-bg-primary ${
                          i === CAMPAIGN_TIMELINE.length - 1
                            ? "bg-accent"
                            : "bg-text-muted"
                        }`}
                        aria-hidden="true"
                      ></div>
                      <div className="text-xs text-accent font-semibold uppercase tracking-wider mb-1">
                        {phase.when}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {phase.title}
                      </h3>
                      <p className="text-text-light text-sm leading-relaxed">
                        {phase.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* NO WIN NO FEE */}
        <section className="py-24 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6">
            <div className="green-gradient-card rounded-2xl p-8 md:p-12">
              <SectionHeading
                eyebrow="Commercial model"
                title={
                  <>
                    No win, no fee.{" "}
                    <span className="text-accent">
                      The risk sits with us.
                    </span>
                  </>
                }
                intro="No retainers. No setup fees. You pay for confirmed delegates who meet the criteria you signed off — and nothing else."
              />

              <div className="grid md:grid-cols-2 gap-5 mt-12">
                {NO_WIN_NO_FEE.map((point) => (
                  <div
                    key={point.title}
                    className="bg-bg-primary/40 border border-border rounded-xl p-6"
                  >
                    <h3 className="font-semibold text-white mb-2">
                      {point.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <PrimaryCta />
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERED EVENTS */}
        <EventShowcase />

        {/* FAQ POINTER — full answers and FAQPage schema live on /faq */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <SectionHeading
              eyebrow="Questions"
              title="Still have questions?"
              intro="How pricing works, how fast we can launch, how delegates are verified, and what happens if targets are missed."
              align="center"
            />
            <div className="mt-10">
              <Link
                href="/faq"
                className="border border-[rgba(146,212,205,0.2)] hover:border-[rgba(146,212,205,0.4)] text-text-light hover:text-white px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center justify-center gap-2"
              >
                Read the FAQ <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>

      <Footer />

      <JsonLd data={[serviceSchema(service), breadcrumbSchema(crumbs)]} />
    </>
  );
}
