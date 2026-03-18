import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-teal pt-16">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Targeted B2B
            <br />
            Lead Generation
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Apex Strategy unlocks opportunities in generating and securing
            actionable B2B leads through tailored outreach, precise research,
            and strategic appointment setting.
          </p>
          <Link
            href="#contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-teal transition hover:bg-white/90"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
