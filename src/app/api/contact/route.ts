import { NextRequest, NextResponse } from "next/server";
import {
  clean,
  deliveryFailureMessage,
  isEmail,
  sendNotification,
} from "@/lib/mail";
import { CONTACT_EMAIL, ENQUIRY_RECIPIENTS } from "@/lib/site";

/**
 * Delegate-acquisition enquiry handler — the "Submit an Enquiry" route.
 *
 * Mirrors the event-register route: validate, drop honeypot hits, then email
 * the enquiry through Resend and log it server-side either way.
 *
 * Every field on the form is required except Event Details, which is where
 * the audience, headcount and location arrive as free text — someone still
 * scoping an event should never be blocked for not knowing them yet.
 */

const EVENT_TYPES: Record<string, string> = {
  "executive-dinner": "Executive Dinner",
  "breakfast-briefing": "Breakfast / Lunch Briefing",
  "seminar-summit": "Seminar / Summit",
  "sporting-occasion": "Sporting Occasion",
  other: "Other",
};

const TIMEFRAMES: Record<string, string> = {
  asap: "ASAP / Under 2 weeks",
  "2-4-weeks": "2-4 weeks",
  "1-2-months": "1-2 months",
  "3-plus-months": "3+ months",
  planning: "Still planning",
};

type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  eventType?: string;
  timeframe?: string;
  message?: string;
  website?: string; // honeypot
};

export async function POST(req: NextRequest) {
  let payload: Payload = {};
  try {
    payload = (await req.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot — bots fill this; silently discard
  if (clean(payload.website) !== "") {
    return NextResponse.json({ ok: true, message: "Thanks — we'll be in touch." });
  }

  const fields = {
    firstName: clean(payload.firstName),
    lastName: clean(payload.lastName),
    email: clean(payload.email),
    phone: clean(payload.phone),
    company: clean(payload.company),
    eventType: clean(payload.eventType),
    timeframe: clean(payload.timeframe),
    message: clean(payload.message),
  };

  for (const k of [
    "firstName",
    "lastName",
    "email",
    "phone",
    "company",
    "eventType",
    "timeframe",
  ] as const) {
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

  const name = `${fields.firstName} ${fields.lastName}`;
  const eventType = EVENT_TYPES[fields.eventType] ?? fields.eventType;
  const timeframe = TIMEFRAMES[fields.timeframe] ?? fields.timeframe;

  const subject = `[Delegate acquisition enquiry] ${name} — ${fields.company} — ${eventType}`;

  const body = [
    "New delegate-acquisition enquiry from apexstrategy.io",
    "─".repeat(60),
    "",
    "CONTACT",
    `Name:       ${name}`,
    `Email:      ${fields.email}`,
    `Phone:      ${fields.phone}`,
    `Company:    ${fields.company}`,
    "",
    "EVENT",
    `Event type: ${eventType}`,
    `Timeline:   ${timeframe}`,
    "",
    fields.message
      ? `Event details:\n${fields.message}\n`
      : "Event details: none given\n",
    `— submitted ${new Date().toISOString()}`,
    `IP:         ${req.headers.get("x-forwarded-for") ?? "unknown"}`,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  const delivered = await sendNotification({
    tag: "contact",
    to: ENQUIRY_RECIPIENTS,
    subject,
    body,
    replyTo: `${name} <${fields.email}>`,
  });

  if (!delivered) {
    return NextResponse.json(
      { ok: false, message: deliveryFailureMessage(CONTACT_EMAIL) },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: `Thanks, ${fields.firstName}. We'll get back to you within 24 hours.`,
  });
}
