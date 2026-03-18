export default function Timeline() {
  const steps = [
    {
      icon: "\ud83d\udccb",
      time: "8 weeks out",
      title: "You start outreach yourself",
      desc: "Internal teams send emails, make calls, and tap into networks. Early signs look promising.",
      dotColor: "bg-text-muted",
    },
    {
      icon: "\ud83d\udcc9",
      time: "4 weeks out",
      title: "Momentum stalls",
      desc: "Responses dry up. The people saying yes aren\u2019t the right seniority. Your team is stretched thin.",
      dotColor: "bg-text-muted",
    },
    {
      icon: "\ud83d\udea8",
      time: "2 weeks out",
      title: "Panic sets in",
      desc: "Empty seats are looking likely. Senior leadership is asking questions. You need a solution fast.",
      dotColor: "bg-red-pain",
    },
    {
      icon: "\ud83d\ude80",
      time: "This is where we come in",
      title: "You call Apex Strategy",
      desc: "We mobilise immediately. Targeted outreach to qualified decision-makers. Seats fill. Event succeeds.",
      dotColor: "bg-accent",
    },
  ];

  return (
    <section id="timeline" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-accent"></span>
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                Sound familiar?
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Most of our clients tried it themselves first.
            </h2>
            <p className="text-text-light text-lg leading-relaxed">
              There&apos;s a pattern we see again and again. Events teams start
              strong, but delegate acquisition is a specialist skill. Here&apos;s
              how it usually goes...
            </p>
          </div>

          {/* Right - Timeline */}
          <div className="relative reveal">
            {/* Timeline line */}
            <div className="absolute left-5 top-2 bottom-2 w-0.5 timeline-line"></div>

            <div className="flex flex-col gap-10">
              {steps.map((step, i) => (
                <div key={i} className="relative pl-14">
                  {/* Dot */}
                  <div
                    className={`absolute left-3 top-1 w-5 h-5 rounded-full ${step.dotColor} border-4 border-bg-primary`}
                  ></div>

                  <div className="text-xs text-text-muted font-medium uppercase tracking-wider mb-1">
                    {step.icon} {step.time}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
