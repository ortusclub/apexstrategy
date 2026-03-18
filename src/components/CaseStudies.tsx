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
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Case Studies
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Discover transformative journeys that redefine the limits of
          possibility. Learn how to leverage B2B strategies by downloading our
          in-depth case studies below.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {caseStudies.map((cs) => (
            <div
              key={cs.company}
              className="rounded-2xl border border-gray-100 bg-white p-8 transition hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900">{cs.title}</h3>
              <button className="mt-4 text-sm font-semibold text-teal transition hover:text-teal-dark">
                Read More &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
