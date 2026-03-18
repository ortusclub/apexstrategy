const testimonials = [
  {
    quote:
      "Apex Strategy brought us the right target audience, the right level of people, and engage them in the right level of discussions so that we learn and therefore discover what we don't know before the discussion.",
    name: "Daniel Ng",
    company: "Neo4j",
  },
  {
    quote:
      "The Apex team is capable of securing attendees. They were able to help us with not only the audience acquisition, but also with the follow-ups to get to those critical one-on-one meetings.",
    name: "Sheri Bannister",
    company: "Avanade",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-teal py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="text-white">
              <p className="text-lg leading-relaxed text-white/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-white/70">{t.company}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
