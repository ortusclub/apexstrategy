"use client";

import ScrollReveal from "./ScrollReveal";

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
    <section className="bg-[#00625a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 200}>
              <blockquote className="group text-white transition-all duration-300 hover:translate-x-1">
                <svg className="mb-4 h-8 w-8 text-white/40 transition-colors duration-300 group-hover:text-white/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg leading-relaxed text-white/90 transition-colors duration-300 group-hover:text-white">
                  {t.quote}
                </p>
                <footer className="mt-6">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-white/60">{t.company}</p>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
