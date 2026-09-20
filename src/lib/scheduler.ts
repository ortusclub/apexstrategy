/**
 * Where "Book a Call" points, defined once.
 *
 * The booking page is Calendly's, not ours: every Book a Call control links
 * straight out to it rather than to a page on this site. Set the URL in
 * `.env.local` for development and in the hosting provider's environment
 * variables for production:
 *
 *   NEXT_PUBLIC_SCHEDULER_URL=https://calendly.com/jhan-apexstrategy/30min
 *
 * That is the visitor-facing link from Calendly's "Copy link" — a public
 * booking page, so no API key is involved and no secret belongs here.
 *
 * If the variable is ever missing, booking falls back to the enquiry form so
 * no button is dead. `BOOKING_IS_EXTERNAL` says which of the two is in play;
 * @/components/BookACallLink uses it to decide between a new-tab anchor and
 * an in-app link.
 */

/** Used when NEXT_PUBLIC_SCHEDULER_URL is not set. Never a dead link. */
export const BOOKING_FALLBACK_PATH = "/contact#enquiry-form";

const configured = process.env.NEXT_PUBLIC_SCHEDULER_URL?.trim();

export const BOOKING_URL = configured || BOOKING_FALLBACK_PATH;

/** True when BOOKING_URL leaves the site, and so wants a new tab. */
export const BOOKING_IS_EXTERNAL = /^https?:\/\//i.test(BOOKING_URL);
