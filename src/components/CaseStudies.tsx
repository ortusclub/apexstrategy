"use client";

import ScrollReveal from "./ScrollReveal";

const caseStudies = [
  {
    company: "Teradata",
    title: "Teradata: Case Study",
  },
  {
    company: "Recurly",
    title: "Recurly: Case Study",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Case Studies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-gray-600">
            Discover transformative journeys that redefine the limits of
            possibility. Learn how to leverage B2B strategies by downloading our
            in-depth case studies below.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.company} delay={i * 150}>
              <div className="group rounded-2xl border border-gray-200 bg-white p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#00625a]">
                  {cs.title}
                </h3>
                <p className="mt-3 text-sm text-gray-500">
                  Learn how {cs.company} leveraged Apex Strategy to drive B2B
                  results.
                </p>
                <button className="mt-6 rounded-full bg-[#00625a] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#054a45] hover:scale-105 hover:shadow-lg">
                  Read More
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
