export default function NoWinNoFee() {
  const points = [
    {
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Pay only for confirmed attendees",
      desc: "No retainers, no setup fees. You pay per qualified delegate who confirms attendance.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "We work at short notice",
      desc: "Days, not months. We\u2019ve filled rooms in under two weeks — even for niche industries.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "12 years, 40+ countries, 2,500+ events",
      desc: "A proven track record across industries, geographies, and event formats.",
    },
  ];

  return (
    <section className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="green-gradient-card rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
            {/* Left */}
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                No win, no fee.{" "}
                <span className="text-accent">Zero risk, full commitment.</span>
              </h2>
              <p className="text-text-light leading-relaxed">
                We&apos;re so confident in our ability to deliver that we only
                charge for results. If we don&apos;t fill the seats, you don&apos;t
                pay. Simple.
              </p>
            </div>

            {/* Right - 3 point cards */}
            <div className="flex flex-col gap-4 reveal">
              {points.map((point, i) => (
                <div
                  key={i}
                  className="bg-bg-primary/40 border border-border rounded-xl p-5 flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(0,208,132,0.1)] flex items-center justify-center">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {point.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
