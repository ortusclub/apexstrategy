export default function Process() {
  const steps = [
    {
      num: 1,
      title: "Define Your ICP",
      desc: "We work with you to define the ideal customer profile — job titles, industries, company size, geography.",
    },
    {
      num: 2,
      title: "Research & Build",
      desc: "Our team builds a targeted prospect list using verified data sources and our proprietary database.",
    },
    {
      num: 3,
      title: "Outreach & Secure",
      desc: "Multi-channel outreach — phone, email, LinkedIn — to engage and secure confirmed attendees.",
    },
    {
      num: 4,
      title: "Confirm & Deliver",
      desc: "We manage confirmations, send reminders, and deliver detailed attendee profiles before the event.",
    },
  ];

  return (
    <section id="process" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-accent"></span>
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              How it works
            </span>
            <span className="w-8 h-0.5 bg-accent"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            From brief to full room — even at short notice
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-bg-card border border-border rounded-2xl p-8 text-center reveal hover:border-[rgba(146,212,205,0.2)] transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[rgba(0,208,132,0.1)] border border-[rgba(0,208,132,0.25)] flex items-center justify-center mx-auto mb-5">
                <span className="text-accent font-bold text-lg">
                  {step.num}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
