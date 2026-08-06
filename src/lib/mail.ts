/**
 * Shared helpers for the form-handling API routes.
 *
 * Required env vars (set in Vercel project settings):
 *   - RESEND_API_KEY      The transactional-email API key.
 *   - RESEND_FROM_EMAIL   Verified sender (e.g. notifications@apexstrategy.io).
 *
 * If RESEND_API_KEY is not configured the payload is still logged server-side,
 * so submissions are never silently lost.
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
  to: string;
  subject: string;
  body: string;
  replyTo?: string;
};

export async function sendNotification({
  tag,
  to,
  subject,
  body,
  replyTo,
}: Notification): Promise<void> {
  // Always log on the server (visible in Vercel logs)
  console.log(`[${tag}]`, subject, "\n", body);

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.warn(
      `[${tag}] RESEND_API_KEY not set — submission logged but no email sent.`,
    );
    return;
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
    }
  } catch (err) {
    console.error(`[${tag}] Resend exception:`, err);
  }
}
