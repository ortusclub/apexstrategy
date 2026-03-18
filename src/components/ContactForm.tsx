"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop worrying about who&apos;s coming.
            </h2>
            <p className="text-text-light text-lg leading-relaxed mb-10">
              Tell us about your event and we&apos;ll show you how we can help.
              No obligation, no hard sell — just a conversation about filling
              your room with the right people.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-accent text-2xl font-bold">12+</div>
                <div className="text-text-muted text-xs mt-1">Years Experience</div>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-accent text-2xl font-bold">40+</div>
                <div className="text-text-muted text-xs mt-1">Countries</div>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-accent text-2xl font-bold">2,500+</div>
                <div className="text-text-muted text-xs mt-1">Events Delivered</div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="reveal">
            {submitted ? (
              <div className="bg-bg-card border border-border rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">&#10003;</div>
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-light text-sm mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-text-light text-sm mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text-light text-sm mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-text-light text-sm mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label className="block text-text-light text-sm mb-1.5">
                    Event Type
                  </label>
                  <select
                    required
                    className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
                  >
                    <option value="">Select event type...</option>
                    <option value="executive-dinner">Executive Dinner</option>
                    <option value="breakfast-briefing">
                      Breakfast / Lunch Briefing
                    </option>
                    <option value="seminar-summit">Seminar / Summit</option>
                    <option value="sporting-occasion">
                      Sporting Occasion
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-text-light text-sm mb-1.5">
                    How soon is your event?
                  </label>
                  <select
                    required
                    className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
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
                  <label className="block text-text-light text-sm mb-1.5">
                    Tell us more
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-white text-sm placeholder-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your event, target audience, and how many delegates you need..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-bg-primary font-semibold py-3.5 rounded-lg text-base transition-colors"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
