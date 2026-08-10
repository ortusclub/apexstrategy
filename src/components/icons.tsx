/**
 * Outline icon set, drawn to match the stroke-2 / 24×24 style already used
 * elsewhere in the codebase. These replace the emoji that were previously
 * rendered as interface icons.
 *
 * Every icon is decorative: the adjacent heading always carries the meaning,
 * so each is hidden from assistive technology. `focusable="false"` keeps
 * legacy Edge/IE from putting them in the tab order.
 */

type IconProps = { className?: string };

function Svg({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

/* ---------- Event types (was 🍽️ ☕ 🎙️ ⛳) ---------- */

export function DiningIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7 3v5a2 2 0 1 0 4 0V3" />
      <path d="M9 10v11" />
      <path d="M16.5 3c-1.3 1.7-2 3.4-2 5.4 0 1.7.8 2.9 2 2.9" />
      <path d="M16.5 11.3V21" />
    </Svg>
  );
}

export function BriefingIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 9h12v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9Z" />
      <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M7 3v2.5" />
      <path d="M11 3v2.5" />
      <path d="M3 21h14" />
    </Svg>
  );
}

export function SummitIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 14a3 3 0 0 1-3-3V5a3 3 0 1 1 6 0v6a3 3 0 0 1-3 3Z" />
      <path d="M19 11a7 7 0 0 1-14 0" />
      <path d="M12 18v3" />
      <path d="M8 21h8" />
    </Svg>
  );
}

export function SportingIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6 21V3l11 4-11 4" />
      <path d="M4 21h13" />
    </Svg>
  );
}

/* ---------- Pain points (was ⏳ 👤 💸) ---------- */

export function ClockIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 8v4l3 3" />
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </Svg>
  );
}

export function SeniorityIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path d="M5.12 17.8A13.94 13.94 0 0 1 12 16c2.5 0 4.85.66 6.88 1.8" />
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </Svg>
  );
}

export function CostIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3 10h18" />
      <path d="M7 15h1" />
      <path d="M12 15h1" />
      <path d="M6 19h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Z" />
    </Svg>
  );
}

/* ---------- Timeline (was 📋 📉 🚨 🚀) ---------- */

export function ClipboardIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z" />
      <path d="M9 12h6" />
      <path d="M9 16h4" />
    </Svg>
  );
}

export function TrendingDownIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M13 17h8v-8" />
      <path d="M21 17l-8-8-4 4-6-6" />
    </Svg>
  );
}

export function AlertIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 9v3" />
      <path d="M12 16h.01" />
      <path d="M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3Z" />
    </Svg>
  );
}

export function TrendingUpIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M13 7h8v8" />
      <path d="M21 7l-8 8-4-4-6 6" />
    </Svg>
  );
}

/* ---------- Shared UI ---------- */

export function CheckIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 13l4 4L19 7" />
    </Svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M13 10V3L4 14h7v7l9-11h-7Z" />
    </Svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 12h16" />
      <path d="M14 6l6 6-6 6" />
    </Svg>
  );
}

export function DatabaseIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M20 7c0 2.21-3.58 4-8 4s-8-1.79-8-4 3.58-4 8-4 8 1.79 8 4Z" />
      <path d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7" />
      <path d="M20 12c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
    </Svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M8 7V3" />
      <path d="M16 7V3" />
      <path d="M7 11h10" />
      <path d="M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
    </Svg>
  );
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M9 12l2 2 4-4" />
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </Svg>
  );
}

/* ---------- Failure modes ---------- */

export function MailIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
      <path d="m3.5 7.5 8.5 6 8.5-6" />
    </Svg>
  );
}

export function TargetIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <path d="M12.5 11.5v.01" />
    </Svg>
  );
}

export function TimingIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M8 3v3" />
      <path d="M16 3v3" />
      <path d="M3 9h18" />
      <path d="M21 11V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h7" />
      <path d="M17.5 21a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M17.5 15.8v1.7l1.2 1" />
    </Svg>
  );
}

export function FollowUpIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3 12a9 9 0 0 1 15.3-6.4L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15.3 6.4L3 16" />
      <path d="M3 21v-5h5" />
    </Svg>
  );
}

export function DataIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3 8V6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8Z" />
      <path d="M8 13h8" />
    </Svg>
  );
}

export function AttendanceIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M9 12.5l2 2 4-4" />
      <path d="M12 3l7 3v5.5c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6l7-3Z" />
    </Svg>
  );
}

export function MinusIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 12h14" />
    </Svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3.06 11H5a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v2.95" />
      <path d="M8 3.94V5.5A2.5 2.5 0 0 0 10.5 8h.5a2 2 0 0 1 2 2 2 2 0 1 0 4 0 2 2 0 0 1 2-2h1.06" />
      <path d="M15 20.49V18a2 2 0 0 1 2-2h3.06" />
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </Svg>
  );
}

/* ---------- Carousel controls ---------- */

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M15 19 8 12l7-7" />
    </Svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="m9 5 7 7-7 7" />
    </Svg>
  );
}
