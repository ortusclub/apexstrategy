import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Image
              src="/images/APEX_Logo_WEBSITE.png"
              alt="Apex Strategy"
              width={140}
              height={50}
              className="h-12 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Apex Strategy unlocks opportunities in generating and securing
              actionable B2B leads through tailored outreach, precise research,
              and strategic appointment setting.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Navigation</h3>
            <nav className="mt-4 space-y-2">
              <Link
                href="#solutions"
                className="block text-sm text-gray-400 transition hover:text-white"
              >
                Solutions
              </Link>
              <Link
                href="#contact"
                className="block text-sm text-gray-400 transition hover:text-white"
              >
                Book a Meeting
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <div className="mt-4 space-y-2 text-sm text-gray-400">
              <p>
                <a
                  href="mailto:info@apexstrategy.io"
                  className="transition hover:text-white"
                >
                  info@apexstrategy.io
                </a>
              </p>
              <p>US: +1 415 969 7673</p>
              <p>SG: +65 31 389 004</p>
            </div>
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/company/apexstrategy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-white"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Apex Strategy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
