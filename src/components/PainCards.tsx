export default function PainCards() {
  const cards = [
    {
      icon: "\u23f3",
      title: "Months of outreach, uncertain results",
      desc: "Your team spends weeks sending emails and making calls. Response rates are low, and you can\u2019t predict who\u2019ll actually show up.",
    },
    {
      icon: "\ud83d\udc64",
      title: "Wrong seniority, wrong fit",
      desc: "You need C-suite and VP-level attendees. Instead, you\u2019re getting junior staff who can\u2019t make purchasing decisions.",
    },
    {
      icon: "\ud83d\udcb8",
      title: "Expensive no-shows",
      desc: "People confirm, then don\u2019t turn up. You\u2019ve paid for catering, venue, and travel \u2014 for half-empty tables.",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-accent"></span>
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              The reality
            </span>
            <span className="w-8 h-0.5 bg-accent"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Getting qualified guests is the hardest part of any event.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="pain-card bg-bg-card border border-border rounded-2xl p-8 reveal"
            >
              <div className="text-4xl mb-5">{card.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
