export default function OtherServices() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Data Services",
      desc: "Verified, targeted contact data for your campaigns. We build bespoke prospect lists matched to your ICP — complete with direct dials, verified emails, and key firmographic data.",
      link: "#contact",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Appointment Setting",
      desc: "Qualified meetings booked directly into your sales team\u2019s calendar. We handle the outreach, qualification, and scheduling so your team focuses on closing.",
      link: "#contact",
    },
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
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-bg-card border border-border rounded-2xl p-8 reveal hover:border-[rgba(146,212,205,0.2)] transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-[rgba(0,208,132,0.1)] flex items-center justify-center mb-5">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {s.title}
              </h3>
              <p className="text-text-light text-sm leading-relaxed mb-5">
                {s.desc}
              </p>
              <a
                href={s.link}
                className="text-accent hover:text-accent-hover font-medium text-sm inline-flex items-center gap-1 transition-colors"
              >
                Learn more <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
