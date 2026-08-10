"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal"));
    if (elements.length === 0) return;

    // Reduced-motion users get the content immediately, no observer, no delay.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLElement;
          const siblings = el.parentElement?.querySelectorAll(".reveal");
          const index = siblings ? Array.from(siblings).indexOf(el) : 0;

          timers.push(
            setTimeout(() => el.classList.add("visible"), index * 60),
          );
          observer.unobserve(el);
        });
      },
      { threshold: 0.1 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      timers.forEach(clearTimeout);
      observer.disconnect();
    };
  }, []);

  return null;
}
