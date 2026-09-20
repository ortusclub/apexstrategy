import type { NextConfig } from "next";

/**
 * Booking moved off the site to Calendly, so /book-a-call no longer has a
 * page. Same source of truth as the rest of the app; if the variable is
 * unset the old path lands on the enquiry form instead of nowhere.
 */
const BOOKING_URL =
  process.env.NEXT_PUBLIC_SCHEDULER_URL?.trim() || "/contact#enquiry-form";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/event",
        destination: "/event/security-leaders",
        permanent: false,
      },
      {
        source: "/book-a-call",
        destination: BOOKING_URL,
        permanent: false, // 307
      },
    ];
  },
};

export default nextConfig;
