"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CTA_PRIMARY } from "@/lib/site";

const NAV_LINKS = [
  { href: "/delegate-acquisition", label: "Delegate Acquisition" },
  { href: "/#services", label: "Services" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu on Escape and return focus to the toggle,
  // so keyboard users are never stranded inside a dismissed menu.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href.startsWith("/#") ? false : pathname === href;

  const linkClass = (href: string) =>
    `transition-colors text-sm rounded-sm ${
      isActive(href)
        ? "text-accent font-medium"
        : "text-text-light hover:text-white"
    }`;

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 glass-nav border-b border-border transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 rounded-sm" aria-label="Apex Strategy — home">
          <Image
            src="/images/APEX_TransparentLogo2-White.png"
            alt="Apex Strategy"
            width={140}
            height={40}
            priority
            className={`transition-all duration-300 ${scrolled ? "h-8 w-auto" : "h-10 w-auto"}`}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass(link.href)}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            {CTA_PRIMARY}
          </Link>
        </div>

        {/* Mobile hamburger — 44px target to meet the WCAG touch-size guideline */}
        <button
          ref={toggleRef}
          type="button"
          className="md:hidden text-white -mr-2 p-2.5 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            {mobileOpen ? (
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden glass-nav border-t border-border px-6 py-2 flex flex-col"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${linkClass(link.href)} py-3`}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-5 py-3 my-3 rounded-lg text-sm transition-colors text-center"
            onClick={() => setMobileOpen(false)}
          >
            {CTA_PRIMARY}
          </Link>
        </div>
      )}
    </nav>
  );
}
