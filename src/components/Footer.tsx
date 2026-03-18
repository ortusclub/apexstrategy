import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-wide text-white"
            >
              APEX
            </Link>
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
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Apex Strategy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
