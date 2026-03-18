"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-teal">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-wide text-white">
          APEX
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#solutions"
            className="text-sm font-medium text-white/90 transition hover:text-white"
          >
            Solutions
          </Link>
          <Link
            href="#contact"
            className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-teal transition hover:bg-white/90"
          >
            Book a Meeting
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="border-t border-white/20 px-6 pb-4 md:hidden">
          <Link
            href="#solutions"
            className="block py-2 text-sm text-white/90"
            onClick={() => setMenuOpen(false)}
          >
            Solutions
          </Link>
          <Link
            href="#contact"
            className="mt-2 inline-block rounded-full bg-white px-6 py-2 text-sm font-semibold text-teal"
            onClick={() => setMenuOpen(false)}
          >
            Book a Meeting
          </Link>
        </nav>
      )}
    </header>
  );
}
