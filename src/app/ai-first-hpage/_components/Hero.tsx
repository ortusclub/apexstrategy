import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import { ArrowRightIcon, BoltIcon, CheckIcon } from "@/components/icons";
import { HERO_SLIDES } from "@/content/hero-slides";
import { CTA_PRIMARY } from "@/lib/site";
import BookACallLink from "@/components/BookACallLink";

export default function Hero() {
  return (
    <section id="apex-acquisition" className="relative py-20 overflow-hidden hero-grid-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          {/* Left column */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-0.5 bg-accent"></span>
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                AI-first B2B delegate acquisition
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6">
              Get the <span className="gradient-text">right people</span>{" "}
              in the room. With AI-powered precision.
            </h2>

            <p className="text-text-light text-lg leading-relaxed mb-8 max-w-xl">
              You&apos;ve planned the event. We find the people who belong there.
              Our proprietary Apex Precision Pipeline™ combines audience intelligence,
              personalised invitations and expert campaign management to
              connect your event with the right senior decision-makers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="flex items-center gap-2 bg-[rgba(0,208,132,0.1)] border border-[rgba(0,208,132,0.25)] rounded-full px-4 py-2 text-sm">
                <CheckIcon className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-accent-secondary">
                  AI-powered targeting. Performance-aligned pricing.
                </span>
              </div>
              <div className="flex items-center gap-2 bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.25)] rounded-full px-4 py-2 text-sm">
                <BoltIcon className="w-4 h-4 text-orange-urgent flex-shrink-0" />
                <span className="text-orange-urgent">
                  Executive-level invitations, delivered at scale
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <BookACallLink
                className="bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center justify-center gap-2"
              >
                {CTA_PRIMARY} <ArrowRightIcon className="w-4 h-4" />
              </BookACallLink>
              <Link
                href="#timeline"
                className="border border-[rgba(146,212,205,0.2)] hover:border-[rgba(146,212,205,0.4)] text-text-light hover:text-white px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center justify-center"
              >
                See How We Fill Events
              </Link>
            </div>

            <p className="text-text-muted text-sm mt-6">
              Trusted by leading B2B event organisers.
            </p>
          </div>

          {/* Right column — the event formats we fill, not events we run */}
          <div className="animate-slide-up-delay-2 relative">
            <HeroCarousel
              slides={HERO_SLIDES}
              label="The kinds of executive event we fill with qualified delegates"
            >
              {/* Bottom gradient overlay — must not swallow drag gestures */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary/90 to-transparent pointer-events-none"></div>

              {/* Floating stat boxes */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-3 pointer-events-none">
                <div className="flex-1 bg-bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 text-center">
                  <div className="text-accent text-xl font-bold">12+</div>
                  <div className="text-text-muted text-xs">Years</div>
                </div>
                <div className="flex-1 bg-bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 text-center">
                  <div className="text-accent text-xl font-bold">40+</div>
                  <div className="text-text-muted text-xs">Countries</div>
                </div>
                <div className="flex-1 bg-bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 text-center">
                  <div className="text-accent text-xl font-bold">2,500+</div>
                  <div className="text-text-muted text-xs">Events</div>
                </div>
              </div>
            </HeroCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
