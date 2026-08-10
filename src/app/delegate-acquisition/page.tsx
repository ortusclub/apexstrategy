import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import LogosBar from "@/components/LogosBar";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import WhyCampaignsFail from "@/components/WhyCampaignsFail";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { CTA_PRIMARY, getService } from "@/lib/site";
import {
  CAMPAIGN_STAGES,
  NO_WIN_NO_FEE,
  OUTCOMES,
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
      href="/contact"
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
              eyebrow="Events we support"
              title="Built for Executive Events"
              intro="If your event depends on having the right people in the room, we can help."
              align="center"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
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
              eyebrow="Why delegate acquisition fails"
              title="The Six Reasons Events Struggle to Attract the Right Delegates"
              intro="The problem is rarely the event itself. It’s reaching, engaging, and converting the right decision-makers."
            />

            <WhyCampaignsFail />
          </div>
        </section>

        {/* METHODOLOGY × CAMPAIGN TIMELINE — one sequence, stage by week */}
        {/* #methodology is linked from the homepage hero — keep the id stable. */}
        <section id="methodology" className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
              <div className="reveal lg:sticky lg:top-28">
                <SectionHeading
                  eyebrow="Our methodology"
                  title="A clear process from target audience to confirmed delegates."
                  intro="Every campaign follows the same proven process. We adapt the timeline when needed, but never skip the steps that ensure delegate quality."
                />
                <div className="mt-10">
                  <PrimaryCta />
                </div>
              </div>

              <div className="relative reveal">
                <div
                  className="absolute left-5 top-2 bottom-2 w-0.5 timeline-line"
                  aria-hidden="true"
                ></div>

                <ol className="flex flex-col gap-9">
                  {CAMPAIGN_STAGES.map((stage, i) => (
                    <li key={stage.title} className="relative pl-14">
                      <div
                        className={`absolute left-3 top-1 w-5 h-5 rounded-full border-4 border-bg-primary ${
                          i === CAMPAIGN_STAGES.length - 1
                            ? "bg-accent"
                            : "bg-text-muted"
                        }`}
                        aria-hidden="true"
                      ></div>
                      <div className="text-xs text-accent font-semibold uppercase tracking-wider mb-1">
                        {stage.when}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-text-light text-sm leading-relaxed">
                        {stage.description}
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
                    No Win, No Fee.{" "}
                    <span className="text-accent">The Risk Is Ours.</span>
                  </>
                }
                intro="No retainers. No setup fees. You only pay for confirmed delegates who meet your agreed criteria."
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
