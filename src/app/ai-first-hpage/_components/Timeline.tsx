import {
  AlertIcon,
  ClipboardIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from "@/components/icons";

export default function Timeline() {
  const steps = [
    {
      Icon: ClipboardIcon,
      time: "01 · Signal intelligence",
      title: "Find the executives who fit",
      desc: "Combine business context and audience signals with your priority accounts, roles and seniority criteria to focus on the people who matter.",
      dotColor: "bg-text-muted",
    },
    {
      Icon: TrendingDownIcon,
      time: "02 · Dynamic personalisation",
      title: "Make the invitation relevant",
      desc: "Match each invitation to the executive’s role, organisation and business priorities. Give them a clear reason to join the conversation.",
      dotColor: "bg-text-muted",
    },
    {
      Icon: AlertIcon,
      time: "03 · Coordinated engagement",
      title: "Build a conversation, not a mailing list",
      desc: "Coordinate outreach and follow-ups across channels, with suppression and exclusion rules that protect your existing relationships and brand.",
      dotColor: "bg-red-pain",
    },
    {
      Icon: TrendingUpIcon,
      time: "04 · Qualified attendance",
      title: "Turn interest into the right room",
      desc: "Qualify guests against the agreed brief, manage confirmations and support attendance. Review progress against your campaign target at every stage.",
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
                The Apex Precision Pipeline™
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI-first acquisition. Built around your audience.
            </h2>
            <p className="text-text-light text-lg leading-relaxed">
              Our approach brings audience intelligence and executive conversation
              workflows together in one coordinated acquisition system.
              You see the audience criteria, campaign progress and qualified
              guests. We manage the complexity behind them.
            </p>
          </div>

          {/* Right - Timeline */}
          <div className="relative reveal">
            {/* Timeline line */}
            <div className="absolute left-5 top-2 bottom-2 w-0.5 timeline-line"></div>

            <div className="flex flex-col gap-10">
              {steps.map((step) => (
                <div key={step.title} className="relative pl-14">
                  {/* Dot */}
                  <div
                    className={`absolute left-3 top-1 w-5 h-5 rounded-full ${step.dotColor} border-4 border-bg-primary`}
                  ></div>

                  <div className="flex items-center gap-2 text-xs text-text-muted font-medium uppercase tracking-wider mb-1">
                    <step.Icon className="w-4 h-4 flex-shrink-0" />
                    <span>{step.time}</span>
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
