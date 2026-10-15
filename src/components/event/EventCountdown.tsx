"use client";

import { useSyncExternalStore } from "react";

type Remaining = { days: number; hours: number; minutes: number; seconds: number };

function remaining(target: number, now: number): Remaining | null {
  const ms = target - now;
  if (ms <= 0) return null;
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

/**
 * A shared one-second clock. Subscribing starts an interval; the snapshot is
 * the current second, so React re-renders once per tick and never mid-second.
 * The server snapshot is null — there is no "now" worth rendering at build
 * time, which is what keeps the static markup stable.
 */
function subscribe(onTick: () => void) {
  const timer = setInterval(onTick, 1000);
  return () => clearInterval(timer);
}
const nowSecond = () => Math.floor(Date.now() / 1000);
const serverSecond = () => null;

/**
 * Live countdown to the start of an event.
 *
 * Before hydration it renders the same box with "--" placeholders, so the
 * hero does not shift when the numbers arrive and server and client markup
 * agree. Once the start time passes, the component removes itself.
 *
 * The ticking digits are hidden from assistive technology — a screen reader
 * announcing every second would be unusable. The label carries the meaning
 * instead, updated at most once a minute.
 */
export default function EventCountdown({
  startsAt,
}: {
  /** ISO timestamp with offset, e.g. "2026-10-26T18:00:00-05:00". */
  startsAt: string;
}) {
  const target = new Date(startsAt).getTime();
  const second = useSyncExternalStore(subscribe, nowSecond, serverSecond);
  const mounted = second !== null;
  const left = mounted ? remaining(target, second * 1000) : null;

  // Started (or the date is invalid): nothing to count down to.
  if (mounted && !left) return null;

  const units: { value?: number; label: string }[] = [
    { value: left?.days, label: "Days" },
    { value: left?.hours, label: "Hrs" },
    { value: left?.minutes, label: "Min" },
    { value: left?.seconds, label: "Sec" },
  ];

  const summary = left
    ? `Event starts in ${left.days} days, ${left.hours} hours and ${left.minutes} minutes`
    : "Event countdown";

  return (
    <div
      role="timer"
      aria-label={summary}
      className="mt-6 inline-flex flex-wrap items-center gap-x-4 gap-y-3 rounded-xl border border-border bg-bg-primary/70 p-3 pl-4 backdrop-blur-sm"
    >
      <span className="text-accent text-xs font-semibold tracking-widest uppercase">
        Event starts in
      </span>
      <div className="flex gap-2" aria-hidden="true">
        {units.map((unit, i) => (
          <div
            key={unit.label}
            className="min-w-[3.25rem] rounded-lg border border-border bg-bg-secondary px-2.5 py-1.5 text-center"
          >
            <span
              className={`block text-lg font-bold leading-none tabular-nums ${
                i === 0 ? "text-accent" : "text-white"
              }`}
            >
              {unit.value === undefined
                ? "--"
                : i === 0
                  ? unit.value
                  : String(unit.value).padStart(2, "0")}
            </span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.12em] text-text-muted">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
