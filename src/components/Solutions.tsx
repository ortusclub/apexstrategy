const solutions = [
  {
    title: "Delegate Acquisition",
    description:
      "We bring your ICPs to your events, ensuring a relevant audience in attendance. Focus on your event; we'll handle the participants. No win, no fee.",
    detail:
      "Reaching the right decision-makers starts with targeting the right people. Through research and clear criteria, executives are selected based on how well they align with specific business goals. Outreach is crafted to feel personal and relevant, leading to real conversations, not just clicks. The result: stronger connections, better engagement, and a pipeline filled with the right names.",
    cta: "Build Real Executive Connections",
  },
  {
    title: "Data Services",
    description:
      "We gather valuable data from engagement campaigns, including email, phone, and social channels. This helps you understand your audience better and target future leads more effectively.",
    detail:
      "We gather verified contact details throughout each campaign, including business emails, direct dials, and social profiles, always in line with data protection laws. At the end of each project, we share a clear report outlining who engaged, what was confirmed, and how prospects responded. This gives your team the insights needed to improve targeting and plan next steps with confidence.",
    cta: "Get Your Data Report",
  },
  {
    title: "Appointment Setting",
    description:
      "We connect you with your ICP by booking meetings with the right decision-makers. Think of us as an extension of your SDR team.",
    detail:
      "We help turn interest into action by arranging direct meetings between your team and qualified prospects. From scheduling to confirmations, every step is handled, so you can focus on closing, not chasing. Meetings are warm, well-timed, and built to move deals forward.",
    cta: "Start Real Conversations",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Our Solution
        </h2>

        {/* Card grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-8 transition hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-teal">{s.title}</h3>
              <p className="mt-4 text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Detail sections */}
        <div className="mt-24 space-y-20">
          {solutions.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col items-center gap-12 md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {s.detail}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-block rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-dark"
                >
                  {s.cta}
                </a>
              </div>
              <div className="flex h-64 w-full flex-1 items-center justify-center rounded-2xl bg-teal/5">
                <span className="text-6xl text-teal/30">0{i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
