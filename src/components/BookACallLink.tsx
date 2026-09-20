import Link from "next/link";
import { BOOKING_IS_EXTERNAL, BOOKING_URL } from "@/lib/scheduler";

/**
 * Every "Book a Call" control on the site.
 *
 * Booking lives on Calendly, so this normally renders an anchor that opens a
 * new tab. If NEXT_PUBLIC_SCHEDULER_URL is missing it degrades to an in-app
 * link to the enquiry form instead — same button, same styling, never a dead
 * end. `className` is passed straight through, so each caller keeps whatever
 * button treatment it already had.
 */
export default function BookACallLink({
  className,
  onClick,
  children,
}: {
  className?: string;
  /** e.g. the navbar closing its mobile menu on the way out. */
  onClick?: () => void;
  children: React.ReactNode;
}) {
  if (!BOOKING_IS_EXTERNAL) {
    return (
      <Link href={BOOKING_URL} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
