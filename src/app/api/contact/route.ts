import { NextRequest, NextResponse } from "next/server";
import { clean, isEmail, sendNotification } from "@/lib/mail";
import { CONTACT_EMAIL } from "@/lib/site";

/**
 * Homepage "Get a Quote" handler.
 *
 * Mirrors the event-register route: validate, drop honeypot hits, then email
 * the enquiry through Resend and log it server-side either way.
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
    company: clean(payload.company),
    eventType: clean(payload.eventType),
    timeframe: clean(payload.timeframe),
    message: clean(payload.message),
  };

  for (const k of [
    "firstName",
    "lastName",
    "email",
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

  const subject = `[Website enquiry] ${name} — ${fields.company} — ${eventType}`;

  const body = [
    "New enquiry from the apexstrategy.io contact form",
    "─".repeat(60),
    "",
    `Name:       ${name}`,
    `Email:      ${fields.email}`,
    `Company:    ${fields.company}`,
    `Event type: ${eventType}`,
    `Timeframe:  ${timeframe}`,
    "",
    fields.message ? `Message:\n${fields.message}\n` : null,
    `— submitted ${new Date().toISOString()}`,
    `IP:         ${req.headers.get("x-forwarded-for") ?? "unknown"}`,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  await sendNotification({
    tag: "contact",
    to: CONTACT_EMAIL,
    subject,
    body,
    replyTo: `${name} <${fields.email}>`,
  });

  return NextResponse.json({
    ok: true,
    message: `Thanks, ${fields.firstName}. We'll be in touch within 24 hours.`,
  });
}
