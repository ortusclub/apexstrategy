import { FAQS } from "@/content/faq";

/**
 * Built on native <details>/<summary>: keyboard operable, screen-reader
 * friendly and expandable with no JavaScript at all — which also keeps the
 * answers in the initial HTML for crawlers.
 */
export default function FaqList({ items = FAQS }: { items?: typeof FAQS }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group bg-bg-card border border-border rounded-2xl px-6 open:border-[rgba(0,208,132,0.25)] transition-colors"
        >
          <summary className="flex items-start justify-between gap-4 cursor-pointer list-none py-5 marker:content-['']">
            {/*
              A heading inside <summary> is valid, and gives the questions a
              place in the document outline instead of leaving them as
              anonymous disclosure widgets.
            */}
            <h2 className="text-white font-semibold text-base">
              {item.question}
            </h2>
            <svg
              className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 transition-transform group-open:rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p className="text-text-light text-[0.95rem] leading-relaxed pb-6 pr-9">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
