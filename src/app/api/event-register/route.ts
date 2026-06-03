import { NextRequest, NextResponse } from "next/server";

/**
 * Event registration handler.
 *
 * Validates the incoming submission and sends a formatted email to
 * driton@apexstrategy.io via Resend (https://resend.com).
 *
 * Required env vars (set in Vercel project settings):
 *   - RESEND_API_KEY      The transactional-email API key.
 *   - RESEND_FROM_EMAIL   Verified sender (e.g. notifications@apexstrategy.io).
 *
 * If RESEND_API_KEY is not configured, the route still returns success and
 * logs the payload server-side so submissions are never silently lost.
 */

const TO_EMAIL = "driton@apexstrategy.io";
const EVENT_LABEL = "CISO Roundtable — 30 June 2026 — Alexandria, VA";

type Payload = {
  name?: string;
  title?: string;
  company?: string;
  email?: string;
  phone?: string;
  notes?: string;
  website?: string; // honeypot
};

function clean(s: unknown): string {
  return typeof s === "string" ? s.trim() : "";
}

function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: NextRequest) {
  let payload: Payload = {};
  try {
    payload = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — bots fill this; silently discard
  if (clean(payload.website) !== "") {
    return NextResponse.json({ ok: true, message: "Thanks — we'll be in touch." });
  }

  const fields = {
    name: clean(payload.name),
    title: clean(payload.title),
    company: clean(payload.company),
    email: clean(payload.email),
    phone: clean(payload.phone),
    notes: clean(payload.notes),
  };

  for (const k of ["name", "title", "company", "email"] as const) {
    if (fields[k] === "") {
      return NextResponse.json(
        { ok: false, message: "Please fill in all required fields." },
        { status: 400 },
      );
    }
  }
  if (!isEmail(fields.email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const subject = `[Event RSVP] ${EVENT_LABEL} — ${fields.name} (${fields.company})`;

  const lines = [
    `New seat request for ${EVENT_LABEL}`,
    "─".repeat(60),
    "",
    `Name:    ${fields.name}`,
    `Title:   ${fields.title}`,
    `Company: ${fields.company}`,
    `Email:   ${fields.email}`,
    fields.phone ? `Phone:   ${fields.phone}` : null,
    "",
    fields.notes ? `Notes / dietary:\n${fields.notes}\n` : null,
    `— submitted ${new Date().toISOString()}`,
    `IP:        ${req.headers.get("x-forwarded-for") ?? "unknown"}`,
  ].filter(Boolean) as string[];

  const body = lines.join("\n");

  // Always log on the server (visible in Vercel logs)
  console.log("[event-register]", subject, "\n", body);

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: TO_EMAIL,
          reply_to: `${fields.name} <${fields.email}>`,
          subject,
          text: body,
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("[event-register] Resend error:", res.status, text);
      }
    } catch (err) {
      console.error("[event-register] Resend exception:", err);
    }
  } else {
    console.warn(
      "[event-register] RESEND_API_KEY not set — submission logged but no email sent.",
    );
  }

  return NextResponse.json({
    ok: true,
    message: `Thanks, ${fields.name}. Your request is in — we'll confirm by email within 1 business day.`,
  });
}
