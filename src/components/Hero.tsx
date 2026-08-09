import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import { ArrowRightIcon, BoltIcon, CheckIcon } from "@/components/icons";
import { ROUNDTABLE_SLIDES } from "@/content/roundtables";
import { CTA_PRIMARY } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden hero-grid-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          {/* Left column */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-0.5 bg-accent"></span>
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                B2B delegate acquisition
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6">
              Struggling to get the{" "}
              <span className="gradient-text">right people</span> in the room?
            </h1>

            <p className="text-text-light text-lg leading-relaxed mb-8 max-w-xl">
              You&apos;ve planned the event. Booked the venue. Set the agenda.
              But the RSVPs aren&apos;t coming in — or worse, the wrong people
              are confirming. Sound familiar? Most of our clients come to us
              after trying it themselves first. We&apos;re used to that.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="flex items-center gap-2 bg-[rgba(0,208,132,0.1)] border border-[rgba(0,208,132,0.25)] rounded-full px-4 py-2 text-sm">
                <CheckIcon className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-accent-secondary">
                  No win, no fee — you only pay for confirmed attendees
                </span>
              </div>
              <div className="flex items-center gap-2 bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.25)] rounded-full px-4 py-2 text-sm">
                <BoltIcon className="w-4 h-4 text-orange-urgent flex-shrink-0" />
                <span className="text-orange-urgent">
                  Short notice? We deliver in days, not months
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center justify-center gap-2"
              >
                {CTA_PRIMARY} <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/delegate-acquisition#methodology"
                className="border border-[rgba(146,212,205,0.2)] hover:border-[rgba(146,212,205,0.4)] text-text-light hover:text-white px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center justify-center"
              >
                See How We Fill Events
              </Link>
            </div>
          </div>

          {/* Right column — roundtable carousel */}
          <div className="animate-slide-up-delay-2 relative">
            <HeroCarousel slides={ROUNDTABLE_SLIDES}>
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
