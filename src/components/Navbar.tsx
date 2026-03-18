"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 glass-nav border-b border-border transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <Image
            src="/images/APEX_TransparentLogo2-White.png"
            alt="Apex Strategy"
            width={140}
            height={40}
            className={`transition-all duration-300 ${scrolled ? "h-8 w-auto" : "h-10 w-auto"}`}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#solution"
            className="text-text-light hover:text-white transition-colors text-sm"
          >
            Delegate Acquisition
          </a>
          <a
            href="#process"
            className="text-text-light hover:text-white transition-colors text-sm"
          >
            How It Works
          </a>
          <a
            href="#services"
            className="text-text-light hover:text-white transition-colors text-sm"
          >
            Services
          </a>
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
        <div className="md:hidden glass-nav border-t border-border px-6 py-4 flex flex-col gap-4">
          <a
            href="#solution"
            className="text-text-light hover:text-white transition-colors text-sm"
            onClick={() => setMobileOpen(false)}
          >
            Delegate Acquisition
          </a>
          <a
            href="#process"
            className="text-text-light hover:text-white transition-colors text-sm"
            onClick={() => setMobileOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#services"
            className="text-text-light hover:text-white transition-colors text-sm"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-hover text-bg-primary font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
