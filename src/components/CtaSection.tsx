import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { CTA_PRIMARY, CTA_SECONDARY } from "@/lib/site";

/**
 * The closing conversion block. Primary action is the contact form;
 * the secondary action points at the same place with different intent
 * wording, so there is only ever one destination to reason about.
 */
export default function CtaSection() {
  return (
    <section className="py-24 bg-bg-secondary cta-gradient-bg border-t border-border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Fill your executive event with qualified B2B decision-makers
        </h2>

        <p className="text-accent text-lg font-semibold mb-4">
          No win. No fee.
        </p>

        <p className="text-text-light text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          We source verified executives for conferences, summits, executive
          dinners and roundtables worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center justify-center gap-2"
          >
            {CTA_PRIMARY} <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <Link
            href="/#contact"
            className="border border-[rgba(146,212,205,0.2)] hover:border-[rgba(146,212,205,0.4)] text-text-light hover:text-white px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center justify-center"
          >
            {CTA_SECONDARY}
          </Link>
        </div>

        <p className="text-text-muted text-sm mt-8">
          Trusted by leading B2B event organisers.
        </p>
      </div>
    </section>
  );
}
