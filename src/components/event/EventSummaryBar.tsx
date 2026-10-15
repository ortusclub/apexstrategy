"use client";

import { useEffect, useState } from "react";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@/components/icons";

/**
 * Compact event summary that slides in beneath the fixed navbar once the hero
 * has scrolled out of view: title and city on the left, date / time /
 * location in the middle (lg up), and the call to action on the right.
 *
 * It sits *under* the navbar rather than at top-0 — the navbar is fixed at
 * the top and would otherwise cover it. The offsets match the navbar's
 * scrolled height (61px on mobile, 57px from md up), which is the only state
 * it can be in by the time the hero is gone.
 */
export default function EventSummaryBar({
  heroId,
  title,
  city,
  dateISO,
  dateLabel,
  timeLabel,
  location,
  cta,
}: {
  /** The hero element; the bar shows once its bottom passes the navbar. */
  heroId: string;
  title: string;
  city: string;
  dateISO: string;
  dateLabel: string;
  timeLabel: string;
  location: string;
  cta: { label: string; href: string };
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      // Trigger when the hero's bottom edge reaches the navbar, not the very
      // top of the viewport.
      { rootMargin: "-64px 0px 0px 0px" },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroId]);

  return (
    <div
      className={`fixed inset-x-0 top-[61px] md:top-[57px] z-40 border-b border-border bg-bg-primary/80 backdrop-blur-md shadow-lg shadow-black/20 transition-[transform,opacity] duration-300 motion-reduce:transition-none ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
      aria-hidden={!visible}
      inert={!visible}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-6">
        <div className="min-w-0 flex-1 lg:flex-none lg:max-w-xs">
          <p className="text-white text-sm font-semibold truncate">{title}</p>
          <p className="text-text-muted text-xs truncate">{city}</p>
        </div>

        <dl className="hidden lg:flex flex-1 items-center justify-center gap-5 text-xs text-text-light">
          <Detail icon={<CalendarIcon className="w-3.5 h-3.5" />} label="Date">
            <time dateTime={dateISO}>{dateLabel}</time>
          </Detail>
          <span className="h-4 w-px bg-border" aria-hidden="true"></span>
          <Detail icon={<ClockIcon className="w-3.5 h-3.5" />} label="Time">
            {timeLabel}
          </Detail>
          <span className="h-4 w-px bg-border" aria-hidden="true"></span>
          <Detail icon={<MapPinIcon className="w-3.5 h-3.5" />} label="Location">
            {location}
          </Detail>
        </dl>

        <a
          href={cta.href}
          className="shrink-0 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg-primary transition-all hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98] motion-reduce:transform-none"
        >
          {cta.label}
        </a>
      </div>
    </div>
  );
}

function Detail({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 whitespace-nowrap">
      <span className="text-accent">{icon}</span>
      <dt className="sr-only">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
