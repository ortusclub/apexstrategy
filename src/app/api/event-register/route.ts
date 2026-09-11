import { NextRequest, NextResponse } from "next/server";
import {
  clean,
  deliveryFailureMessage,
  isEmail,
  sendNotification,
} from "@/lib/mail";
import { CONTACT_EMAIL, ENQUIRY_RECIPIENTS } from "@/lib/site";
import { dinnerEventLabel, type DinnerSlug } from "@/content/dinners";

/**
 * Event registration handler.
 *
 * Validates the incoming submission and emails a formatted summary via
 * Resend. Env vars and fallback behaviour are documented in @/lib/mail.
 */

/**
 * Used when a submission does not name an event — which is every submission
 * from the CISO Roundtable page, the only form that existed before the
 * September dinners.
 */
const DEFAULT_EVENT_LABEL = "CISO Roundtable — 30 June 2026 — Alexandria, VA";

/**
 * Dinner seat requests go to the events team rather than the wider
 * ENQUIRY_RECIPIENTS list, which the roundtable form and the Contact form
 * still use.
 */
const DINNER_RECIPIENTS = [CONTACT_EMAIL, "jhan@apexstrategy.io"];

/**
 * San Diego seat requests also go to Christine. Typed as a DinnerSlug so that
 * renaming the slug in @/content/dinners breaks the build instead of silently
 * dropping her from the list.
 */
const SAN_DIEGO_SLUG: DinnerSlug = "san-diego";
const SAN_DIEGO_EXTRA_RECIPIENT = "christine@apexstrategy.io";

type Payload = {
  /** One of the dinner slugs in @/content/dinners. Absent on the roundtable form. */
  eventId?: string;
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

  // A dinner registration is only useful with a reachable number, and those
  // forms mark phone as required — so enforce it here too. Browser validation
  // is a convenience; this is the check that cannot be skipped. The roundtable
  // form, which does not send an eventId, keeps phone optional.
  const eventId = clean(payload.eventId);
  const dinnerLabel = dinnerEventLabel(eventId);

  const requiredFields = dinnerLabel
    ? (["name", "title", "company", "email", "phone"] as const)
    : (["name", "title", "company", "email"] as const);

  for (const k of requiredFields) {
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

  // An unrecognised eventId falls back to the default label rather than being
  // echoed into the email, so nothing user-supplied reaches the subject line.
  const eventLabel = dinnerLabel ?? DEFAULT_EVENT_LABEL;

  const subject = `[Event RSVP] ${eventLabel} — ${fields.name} (${fields.company})`;

  const body = [
    `New seat request for ${eventLabel}`,
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

  // Only a recognised dinner is re-routed; the roundtable form (no eventId)
  // and any unrecognised eventId keep going to ENQUIRY_RECIPIENTS.
  const recipients = !dinnerLabel
    ? ENQUIRY_RECIPIENTS
    : eventId === SAN_DIEGO_SLUG
      ? [...DINNER_RECIPIENTS, SAN_DIEGO_EXTRA_RECIPIENT]
      : DINNER_RECIPIENTS;

  const delivered = await sendNotification({
    tag: "event-register",
    to: recipients,
    subject,
    body,
    replyTo: `${fields.name} <${fields.email}>`,
  });

  if (!delivered) {
    return NextResponse.json(
      { ok: false, message: deliveryFailureMessage(CONTACT_EMAIL) },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: `Thanks, ${fields.name}. Your request is in — we'll confirm by email within 1 business day.`,
  });
}
