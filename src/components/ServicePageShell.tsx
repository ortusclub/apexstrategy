import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { CTA_PRIMARY, SERVICES, type Service } from "@/lib/site";

/**
 * Shared chrome for the three service routes. Each page supplies only its
 * service record and an optional list of points, so the routes stay thin
 * and the markup stays in one place.
 */
export default function ServicePageShell({
  service,
  points,
}: {
  service: Service;
  points?: string[];
}) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: service.name, path: `/${service.slug}` },
  ];

  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <ScrollReveal />
      <Navbar />

      <main id="main-content">
        <article>
          <section className="pt-32 pb-16 hero-grid-bg">
            <div className="max-w-4xl mx-auto px-6">
              <Breadcrumbs crumbs={crumbs} />

              <div className="flex items-center gap-3 mt-8 mb-4">
                <span className="w-8 h-0.5 bg-accent"></span>
                <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                  Our services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                {service.title}
              </h1>

              <p className="text-text-light text-lg leading-relaxed max-w-2xl">
                {service.description}
              </p>

              {points && points.length > 0 && (
                <ul className="space-y-3 mt-10 max-w-2xl">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-text-light"
                    >
                      <CheckIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-10">
                <Link
                  href="/#contact"
                  className="bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-8 py-3.5 rounded-lg text-base transition-colors inline-flex items-center gap-2"
                >
                  {CTA_PRIMARY} <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          <section className="py-20 bg-bg-secondary">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Other services
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {others.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/${other.slug}`}
                    className="bg-bg-card border border-border rounded-2xl p-6 hover:border-[rgba(146,212,205,0.2)] transition-colors group"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {other.name}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">
                      {other.description}
                    </p>
                    <span className="text-accent group-hover:text-accent-hover font-medium text-sm inline-flex items-center gap-1.5 transition-colors">
                      Learn more <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />

      <JsonLd data={[serviceSchema(service), breadcrumbSchema(crumbs)]} />
    </>
  );
}
