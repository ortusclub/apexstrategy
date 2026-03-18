"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("revealed");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const directionClass =
    direction === "left"
      ? "translate-x-[-2em]"
      : direction === "right"
        ? "translate-x-[2em]"
        : "translate-y-[2em]";

  return (
    <div
      ref={ref}
      className={`opacity-0 ${directionClass} transition-all duration-1000 ease-in-out [&.revealed]:opacity-100 [&.revealed]:translate-x-0 [&.revealed]:translate-y-0 ${className}`}
    >
      {children}
    </div>
  );
}
