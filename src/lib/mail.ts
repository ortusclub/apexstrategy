/**
 * Shared helpers for the form-handling API routes.
 *
 * Required env vars (set in Vercel project settings):
 *   - RESEND_API_KEY      The transactional-email API key.
 *   - RESEND_FROM_EMAIL   Verified sender (e.g. notifications@apexstrategy.io).
 *
 * The payload is always logged server-side, but sendNotification reports
 * whether the email actually went out so the routes can tell the visitor to
 * email us directly rather than thanking them for a message nobody received.
 */

export function clean(s: unknown): string {
  return typeof s === "string" ? s.trim() : "";
}

export function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

type Notification = {
  /** Log prefix, e.g. "contact" — also used to tag error output. */
  tag: string;
  /** One address, or several to copy in on the same email. */
  to: string | string[];
  subject: string;
  body: string;
  replyTo?: string;
};

/**
 * Sends the notification and returns true only if the provider accepted it.
 * A false return means the enquiry exists nowhere but the server log.
 */
export async function sendNotification({
  tag,
  to,
  subject,
  body,
  replyTo,
}: Notification): Promise<boolean> {
  // Always log on the server (visible in Vercel logs)
  console.log(`[${tag}]`, subject, "\n", body);

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error(
      `[${tag}] RESEND_API_KEY / RESEND_FROM_EMAIL not set — submission logged but NO EMAIL SENT.`,
    );
    return false;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to,
        reply_to: replyTo,
        subject,
        text: body,
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error(`[${tag}] Resend error:`, res.status, text);
      return false;
    }
    return true;
  } catch (err) {
    console.error(`[${tag}] Resend exception:`, err);
    return false;
  }
}

/**
 * Response body for a submission that validated but could not be delivered.
 * The visitor gets a working fallback instead of a false confirmation.
 */
export function deliveryFailureMessage(contactEmail: string): string {
  return `We couldn't send your enquiry just now. Please email us directly at ${contactEmail} and we'll pick it up straight away.`;
}
