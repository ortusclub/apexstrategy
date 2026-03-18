export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Apex Strategy filled our executive dinner in Singapore with 28 qualified CIOs in just 10 days. We\u2019d been trying for 6 weeks ourselves and had 4 confirmations. They completely transformed our event.",
      name: "Daniel Ng",
      role: "Regional Marketing Director, Enterprise SaaS",
    },
    {
      quote:
        "We were two weeks out from our flagship summit with 40% of seats unfilled. Apex delivered 35 senior decision-makers in 11 days. The quality was exceptional \u2014 every attendee matched our ICP perfectly.",
      name: "Sheri Bannister",
      role: "Head of Events, Global Technology Company",
    },
  ];

  return (
    <section className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-accent"></span>
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              What clients say
            </span>
            <span className="w-8 h-0.5 bg-accent"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            The proof is in the attendance.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-bg-card border border-border rounded-2xl p-8 reveal"
            >
              <div className="text-accent text-4xl mb-4">&ldquo;</div>
              <p className="text-text-light leading-relaxed mb-6 italic">
                {t.quote}
              </p>
              <div>
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-text-muted text-sm">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
