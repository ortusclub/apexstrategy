const points = [
  "Identifying and reaching high-value prospects",
  "Building relationships with key stakeholders",
  "Delivering insights that support pipeline growth and revenue goals",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-6 leading-relaxed text-gray-600">
            Apex Strategy is your global B2B lead-generation partner. We act as
            an extension of your sales team. We build relationships with senior
            executives, deliver highly qualified leads, and provide actionable
            insights — so your reps can focus on what they do best: closing
            deals.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-center justify-center gap-3 text-gray-700"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
