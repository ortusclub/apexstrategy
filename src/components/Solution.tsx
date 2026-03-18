export default function Solution() {
  const features = [
    "Targeted outreach to named accounts & job titles",
    "Multi-channel approach: phone, email, LinkedIn",
    "Senior decision-makers: C-suite, VP, Director level",
    "Confirmation & reminder management included",
    "Detailed attendee profiles delivered before the event",
  ];

  const eventTypes = [
    { icon: "\ud83c\udf7d\ufe0f", title: "Executive Dinners", desc: "Intimate, high-level gatherings for senior decision-makers." },
    { icon: "\u2615", title: "Breakfast & Lunch Briefings", desc: "Focused sessions that fit into busy executive schedules." },
    { icon: "\ud83c\udf99\ufe0f", title: "Seminars & Summits", desc: "Larger-scale events requiring volume and quality." },
    { icon: "\u26f3", title: "Sporting Occasions", desc: "Hospitality events that build relationships in relaxed settings." },
  ];

  return (
    <section id="solution" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-accent"></span>
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                Our core service
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We get{" "}
              <span className="text-accent">qualified decision-makers</span> to
              your event. Every time.
            </h2>
            <p className="text-text-light text-lg leading-relaxed mb-8">
              Delegate acquisition is all we do. We don&apos;t plan events, we
              don&apos;t run venues — we fill rooms with the people you actually
              want to meet.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-text-light">
                  <svg
                    className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center gap-2"
            >
              Get a Quote <span>&rarr;</span>
            </a>
          </div>

          {/* Right - Event type cards */}
          <div className="grid grid-cols-2 gap-4 reveal">
            {eventTypes.map((evt, i) => (
              <div
                key={i}
                className="bg-bg-card border border-border rounded-2xl p-6 hover:border-[rgba(146,212,205,0.2)] transition-colors"
              >
                <div className="text-3xl mb-3">{evt.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {evt.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {evt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
