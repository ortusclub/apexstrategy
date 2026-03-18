const clients = [
  "Dell",
  "Slack",
  "PayPal",
  "Google Cloud",
  "AWS",
  "Adobe",
  "KMC",
  "Dassault",
];

export default function TrustedBy() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Trusted By
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {clients.map((client) => (
            <div
              key={client}
              className="flex h-16 items-center justify-center rounded-lg bg-gray-50 px-6"
            >
              <span className="text-lg font-semibold text-gray-400">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
