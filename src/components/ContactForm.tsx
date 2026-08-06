"use client";

import { useId, useState } from "react";
import { CTA_PRIMARY } from "@/lib/site";

const FIELD_CLASS =
  "w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent transition-colors";

const LABEL_CLASS = "block text-text-light text-sm mb-1.5";

/**
 * `as` controls the heading level: h1 on the dedicated /contact page,
 * h2 when the section is embedded in a longer page.
 */
export default function ContactForm({
  as: Heading = "h2",
}: {
  as?: "h1" | "h2";
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const id = useId();

  const fieldId = (name: string) => `${id}-${name}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Guard against double submission from a fast second click or Enter press.
    if (submitting) return;

    setSubmitting(true);
    setError(null);

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; message?: string };

      if (!res.ok || !json.ok) {
        setError(json.message ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError(
        "We couldn't reach the server. Check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-bg-secondary cta-gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-accent"></span>
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                Let&apos;s talk
              </span>
            </div>
            <Heading className="text-3xl md:text-4xl font-bold mb-4">
              Fill your executive event with qualified B2B decision-makers
            </Heading>
            <p className="text-accent text-lg font-semibold mb-4">
              No win. No fee.
            </p>
            <p className="text-text-light text-lg leading-relaxed mb-10">
              We source verified executives for conferences, summits, executive
              dinners and roundtables worldwide. Tell us about your event and
              we&apos;ll come back within one business day — no obligation, no
              hard sell.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-accent text-2xl font-bold">12+</div>
                <div className="text-text-light text-xs mt-1">Years Experience</div>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-accent text-2xl font-bold">40+</div>
                <div className="text-text-light text-xs mt-1">Countries</div>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-accent text-2xl font-bold">2,500+</div>
                <div className="text-text-light text-xs mt-1">Events Delivered</div>
              </div>
            </div>

            <p className="text-text-muted text-sm mt-6">
              Trusted by leading B2B event organisers.
            </p>
          </div>

          {/* Right - Form */}
          <div className="reveal">
            {submitted ? (
              <div
                className="bg-bg-card border border-border rounded-2xl p-8 text-center"
                role="status"
              >
                <svg
                  className="w-12 h-12 text-accent mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Thanks for reaching out!
                </h3>
                <p className="text-text-light">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-bg-card border border-border rounded-2xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={LABEL_CLASS} htmlFor={fieldId("firstName")}>
                      First Name
                    </label>
                    <input
                      id={fieldId("firstName")}
                      name="firstName"
                      type="text"
                      required
                      autoComplete="given-name"
                      className={FIELD_CLASS}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className={LABEL_CLASS} htmlFor={fieldId("lastName")}>
                      Last Name
                    </label>
                    <input
                      id={fieldId("lastName")}
                      name="lastName"
                      type="text"
                      required
                      autoComplete="family-name"
                      className={FIELD_CLASS}
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className={LABEL_CLASS} htmlFor={fieldId("email")}>
                    Work Email
                  </label>
                  <input
                    id={fieldId("email")}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    className={FIELD_CLASS}
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className={LABEL_CLASS} htmlFor={fieldId("company")}>
                    Company
                  </label>
                  <input
                    id={fieldId("company")}
                    name="company"
                    type="text"
                    required
                    autoComplete="organization"
                    className={FIELD_CLASS}
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label className={LABEL_CLASS} htmlFor={fieldId("eventType")}>
                    Event Type
                  </label>
                  <select
                    id={fieldId("eventType")}
                    name="eventType"
                    required
                    defaultValue=""
                    className={`${FIELD_CLASS} appearance-none`}
                  >
                    <option value="">Select event type...</option>
                    <option value="executive-dinner">Executive Dinner</option>
                    <option value="breakfast-briefing">
                      Breakfast / Lunch Briefing
                    </option>
                    <option value="seminar-summit">Seminar / Summit</option>
                    <option value="sporting-occasion">Sporting Occasion</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className={LABEL_CLASS} htmlFor={fieldId("timeframe")}>
                    How soon is your event?
                  </label>
                  <select
                    id={fieldId("timeframe")}
                    name="timeframe"
                    required
                    defaultValue=""
                    className={`${FIELD_CLASS} appearance-none`}
                  >
                    <option value="">Select timeframe...</option>
                    <option value="asap">ASAP / Under 2 weeks</option>
                    <option value="2-4-weeks">2-4 weeks</option>
                    <option value="1-2-months">1-2 months</option>
                    <option value="3-plus-months">3+ months</option>
                    <option value="planning">Still planning</option>
                  </select>
                </div>

                <div>
                  <label className={LABEL_CLASS} htmlFor={fieldId("message")}>
                    Tell us more
                  </label>
                  <textarea
                    id={fieldId("message")}
                    name="message"
                    rows={4}
                    className={`${FIELD_CLASS} resize-none`}
                    placeholder="Tell us about your event, target audience, and how many delegates you need..."
                  ></textarea>
                </div>

                {/* Honeypot — hidden from people, irresistible to bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor={fieldId("website")}>
                    Website (leave blank)
                  </label>
                  <input
                    id={fieldId("website")}
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {error && (
                  <p
                    role="alert"
                    className="text-red-pain text-sm bg-[rgba(242,92,84,0.08)] border border-[rgba(242,92,84,0.25)] rounded-lg px-4 py-3"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-accent hover:bg-accent-hover text-bg-primary font-semibold py-3.5 rounded-lg text-base transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : CTA_PRIMARY}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
