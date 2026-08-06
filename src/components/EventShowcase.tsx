import SectionHeading from "@/components/SectionHeading";
import { DELIVERED_EVENTS } from "@/content/events";

/**
 * Portfolio of delivered campaigns. Content — and the caveats attached to
 * it — live in @/content/events.
 */
export default function EventShowcase() {
  if (DELIVERED_EVENTS.length === 0) return null;

  return (
    <section className="py-24 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          eyebrow="Delivered campaigns"
          title="Events we've filled."
          intro="A selection of executive gatherings we have delivered delegates for."
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {DELIVERED_EVENTS.map((event) => (
            <article
              key={event.name}
              className="bg-bg-card border border-border rounded-2xl p-8 reveal hover:border-[rgba(146,212,205,0.2)] transition-colors flex flex-col"
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
        </div>
      </div>
    </section>
  );
}
