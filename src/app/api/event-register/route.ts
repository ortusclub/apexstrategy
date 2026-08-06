import { NextRequest, NextResponse } from "next/server";
import { clean, isEmail, sendNotification } from "@/lib/mail";
import { CONTACT_EMAIL } from "@/lib/site";

/**
 * Event registration handler.
 *
 * Validates the incoming submission and emails a formatted summary via
 * Resend. Env vars and fallback behaviour are documented in @/lib/mail.
 */

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

  const body = [
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
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  await sendNotification({
    tag: "event-register",
    to: CONTACT_EMAIL,
    subject,
    body,
    replyTo: `${fields.name} <${fields.email}>`,
  });

  return NextResponse.json({
    ok: true,
    message: `Thanks, ${fields.name}. Your request is in — we'll confirm by email within 1 business day.`,
  });
}
