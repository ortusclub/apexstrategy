import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, LEGAL_NAME, LINKEDIN_URL } from "@/lib/site";

const NAV = [
  { href: "/delegate-acquisition", label: "Delegate Acquisition" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-block rounded-sm"
              aria-label="Apex Strategy — home"
            >
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

          <nav aria-label="Footer">
            <h2 className="text-white text-sm font-semibold mb-4">Navigate</h2>
            <ul className="flex flex-col gap-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-text-muted hover:text-accent text-sm transition-colors rounded-sm"
                  >
                    {item.label}
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
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent text-sm transition-colors rounded-sm inline-flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.4 21.5h5.16V9.75H2.4V21.5Zm7.74-11.75V21.5h5.16v-6.5c0-1.72.33-3.38 2.46-3.38 2.1 0 2.13 1.96 2.13 3.49v6.39h5.16v-7.42c0-4.47-.97-7.08-5.2-7.08a4.55 4.55 0 0 0-4.1 2.25h-.07V9.75h-4.54Z" />
                  </svg>
                  LinkedIn
                </a>
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
