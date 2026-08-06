import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, LEGAL_NAME, SERVICES } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block rounded-sm" aria-label="Apex Strategy — home">
              <Image
                src="/images/APEX_TransparentLogo2-White.png"
                alt="Apex Strategy"
                width={120}
                height={35}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-text-muted text-sm mt-4 max-w-xs leading-relaxed">
              B2B delegate acquisition for executive events. No win, no fee.
            </p>
          </div>

          <nav aria-label="Services">
            <h2 className="text-white text-sm font-semibold mb-4">Services</h2>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-text-muted hover:text-accent text-sm transition-colors rounded-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-white text-sm font-semibold mb-4">Contact</h2>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-text-muted hover:text-accent text-sm transition-colors rounded-sm break-all"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-text-muted hover:text-accent text-sm transition-colors rounded-sm"
                >
                  Get a quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-text-muted text-sm mt-10 pt-6 border-t border-border">
          &copy; {new Date().getFullYear()} {LEGAL_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
