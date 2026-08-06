import Link from "next/link";
import { ArrowRightIcon, CalendarIcon, DatabaseIcon } from "@/components/icons";
import { CTA_PRIMARY, getService } from "@/lib/site";

export default function OtherServices() {
  const services = [
    { Icon: DatabaseIcon, ...getService("data-services") },
    { Icon: CalendarIcon, ...getService("appointment-setting") },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-accent"></span>
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              Also from Apex Strategy
            </span>
            <span className="w-8 h-0.5 bg-accent"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Complementary services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.slug}
              className="bg-bg-card border border-border rounded-2xl p-8 reveal hover:border-[rgba(146,212,205,0.2)] transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-[rgba(0,208,132,0.1)] flex items-center justify-center mb-5">
                <s.Icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {s.name}
              </h3>
              <p className="text-text-light text-sm leading-relaxed mb-5">
                {s.description}
              </p>
              {/*
                These two are enquiry-led rather than self-serve: the card
                sends people to the contact form, not to a thin service page.
              */}
              <Link
                href="/#contact"
                className="text-accent hover:text-accent-hover font-medium text-sm inline-flex items-center gap-1.5 transition-colors rounded-sm"
              >
                {CTA_PRIMARY}
                <span className="sr-only"> about {s.name}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
