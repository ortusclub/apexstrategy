"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

type FieldName = "name" | "email" | "company" | "title" | "phone" | "notes";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Everything the visitor must fill in, with the message shown when they don't. */
const REQUIRED: Partial<Record<FieldName, string>> = {
  name: "Please enter your full name.",
  email: "Please enter your work email.",
  company: "Please enter your company.",
  title: "Please enter your job title.",
};

const PHONE_REQUIRED = "Please enter a phone number.";

function validateField(
  name: FieldName,
  value: string,
  required: Partial<Record<FieldName, string>>,
): string | undefined {
  const trimmed = value.trim();
  if (required[name] && trimmed === "") return required[name];
  if (name === "email" && trimmed !== "" && !EMAIL_RE.test(trimmed)) {
    return "Please enter a valid email address.";
  }
  return undefined;
}

/**
 * Seat request form.
 *
 * Defaults reproduce the original behaviour exactly — its own full-width
 * section, paired fields, validation on submit only — so the CISO Roundtable
 * page, which was the only caller before the September dinners, is unchanged.
 * The dinner pages opt into the sticky-column treatment via props.
 *
 * - `eventId`         tags the submission so the email names the right dinner
 * - `variant: "card"` drops the outer section, for embedding in a column
 * - `stacked`         one full-width field per row instead of paired
 * - `inlineValidation` validates on blur as well as on submit
 * - `autoFocusOnView` focuses the first field once the card scrolls into
 *                     view, desktop only, and never while the visitor is
 *                     already typing somewhere else
 * - `requirePhone`    makes the phone field mandatory too
 * - `submitLabel`     button copy
 * - `includeNotes`    renders the dietary/notes textarea
 * - `confirmation`    replaces the whole card body once the API confirms the
 *                     submission, instead of echoing the API's own message
 */
export default function RegisterForm({
  eventId,
  heading = "Request your seat",
  intro = "A quick 30 seconds. We'll confirm by email within one business day.",
  variant = "section",
  stacked = false,
  inlineValidation = false,
  autoFocusOnView = false,
  includeNotes = true,
  requirePhone = false,
  submitLabel = "Request seat →",
  confirmation,
}: {
  eventId?: string;
  heading?: string;
  /** Pass null to render no intro line at all. */
  intro?: string | null;
  variant?: "section" | "card";
  stacked?: boolean;
  inlineValidation?: boolean;
  autoFocusOnView?: boolean;
  includeNotes?: boolean;
  requirePhone?: boolean;
  submitLabel?: string;
  confirmation?: { heading: string; body: string };
} = {}) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const required: Partial<Record<FieldName, string>> = requirePhone
    ? { ...REQUIRED, phone: PHONE_REQUIRED }
    : REQUIRED;
  const cardRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Desktop only: focus the first field the first time the card is on screen.
  // Skipped entirely if the visitor has already put focus somewhere, so this
  // can never yank the cursor out from under someone mid-sentence.
  useEffect(() => {
    if (!autoFocusOnView) return;
    if (typeof window === "undefined" || !window.matchMedia) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const active = document.activeElement;
          if (!active || active === document.body) {
            firstFieldRef.current?.focus({ preventScroll: true });
          }
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [autoFocusOnView]);

  function onBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (!inlineValidation) return;
    const name = e.target.name as FieldName;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, e.target.value, required),
    }));
  }

  /** Clear a field's error as soon as the visitor fixes it. */
  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (!inlineValidation) return;
    const name = e.target.name as FieldName;
    setErrors((prev) => {
      if (!prev[name]) return prev;
      if (validateField(name, e.target.value, required)) return prev;
      return { ...prev, [name]: undefined };
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (inlineValidation) {
      const data = new FormData(form);
      const found: Partial<Record<FieldName, string>> = {};
      for (const name of Object.keys(required) as FieldName[]) {
        const message = validateField(name, String(data.get(name) ?? ""), required);
        if (message) found[name] = message;
      }
      if (Object.keys(found).length > 0) {
        setErrors(found);
        const firstBad = (Object.keys(required) as FieldName[]).find((n) => found[n]);
        if (firstBad) {
          form.querySelector<HTMLInputElement>(`[name="${firstBad}"]`)?.focus();
        }
        return;
      }
    } else if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus({ kind: "submitting" });

    const data = new FormData(form);
    const payload = {
      ...Object.fromEntries(data.entries()),
      ...(eventId ? { eventId } : {}),
    };

    try {
      const r = await fetch("/api/event-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await r.json()) as { ok?: boolean; message?: string };
      if (r.ok && body.ok) {
        setStatus({
          kind: "success",
          message:
            body.message ??
            "Thanks — your request is in. We'll confirm by email within one business day.",
        });
      } else {
        setStatus({
          kind: "error",
          message: body.message ?? "Something went wrong — please try again.",
        });
      }
    } catch {
      setStatus({
        kind: "error",
        message:
          `Network error — please try again, or email ${CONTACT_EMAIL} directly.`,
      });
    }
  }

  const sent = status.kind === "success";
  /** On success the card becomes the confirmation: no fields, no intro. */
  const confirmed = sent && confirmation !== undefined;
  const showIntro = !confirmed && Boolean(intro);

  const nameField = (
    <Field
      id="name"
      label="Full name"
      name="name"
      type="text"
      required
      autoComplete="name"
      error={errors.name}
      onBlur={onBlur}
      onChange={onChange}
      inputRef={firstFieldRef}
    />
  );
  const emailField = (
    <Field
      id="email"
      label="Work email"
      name="email"
      type="email"
      required
      autoComplete="email"
      error={errors.email}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
  const companyField = (
    <Field
      id="company"
      label="Company"
      name="company"
      type="text"
      required
      autoComplete="organization"
      error={errors.company}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
  const titleField = (
    <Field
      id="title"
      label="Job title"
      name="title"
      type="text"
      required
      placeholder="e.g. CISO"
      autoComplete="organization-title"
      error={errors.title}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
  const phoneField = (
    <Field
      id="phone"
      label="Phone"
      optional={requirePhone ? undefined : "for last-minute coordination"}
      name="phone"
      type="tel"
      required={requirePhone}
      autoComplete="tel"
      error={errors.phone}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
  const notesField = !includeNotes ? null : (
    <div>
      <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-[0.12em] text-text-muted mb-2">
        Dietary requirements or notes{" "}
        <span className="text-text-muted/70 normal-case font-normal tracking-normal">(optional)</span>
      </label>
      <textarea
        id="notes"
        name="notes"
        rows={2}
        placeholder="Vegetarian, gluten-free, allergies, accessibility…"
        className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 text-text-white placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-[rgba(0,208,132,0.15)] resize-y min-h-[80px]"
      />
    </div>
  );

  const card = (
    <div
      ref={cardRef}
      className={
        variant === "card"
          ? "bg-bg-card border border-border rounded-2xl p-7"
          : "max-w-2xl mx-auto bg-bg-card border border-border rounded-2xl p-10 md:p-12"
      }
    >
      <h2
        className={`${
          variant === "card"
            ? "text-2xl font-bold tracking-tight"
            : "text-3xl md:text-4xl font-bold tracking-tight"
        } ${
          // Without an intro line the heading carries the gap the intro used
          // to leave, so the form never crowds the heading.
          showIntro ? "mb-3" : variant === "card" ? "mb-7" : "mb-8"
        }`}
      >
        {confirmed ? confirmation.heading : heading}
      </h2>

      {showIntro && (
        <p className={variant === "card" ? "text-text-light text-sm mb-7" : "text-text-light mb-8"}>
          {intro}
        </p>
      )}

      {confirmed ? (
        <p role="status" className="text-text-light leading-relaxed">
          {confirmation.body}
        </p>
      ) : sent ? (
        <p role="status" className="text-accent text-lg font-semibold leading-relaxed">
          {status.message}
        </p>
      ) : (
        <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
          {stacked ? (
            <>
              {nameField}
              {emailField}
              {companyField}
              {titleField}
              {phoneField}
              {notesField}
            </>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                {nameField}
                {titleField}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {companyField}
                {emailField}
              </div>
              {phoneField}
              {notesField}
            </>
          )}

          {/* Honeypot */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="absolute -left-[9999px] w-px h-px opacity-0 pointer-events-none"
            aria-hidden="true"
          />
          <div className="flex items-center gap-4 flex-wrap mt-2">
            <button
              type="submit"
              disabled={status.kind === "submitting"}
              className="bg-accent hover:bg-accent-hover disabled:opacity-60 text-bg-primary font-semibold px-8 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              {status.kind === "submitting" ? "Submitting…" : submitLabel}
            </button>
            {status.kind === "error" && (
              <p role="alert" className="text-[#f87171] text-sm">
                {status.message}
              </p>
            )}
          </div>
        </form>
      )}
    </div>
  );

  if (variant === "card") {
    return <div id="register">{card}</div>;
  }

  return (
    <section id="register" className="py-24 bg-bg-primary cta-gradient-bg border-y border-border">
      <div className="max-w-5xl mx-auto px-6">{card}</div>
    </section>
  );
}

function Field({
  id,
  label,
  name,
  type,
  required,
  placeholder,
  autoComplete,
  optional,
  error,
  onBlur,
  onChange,
  inputRef,
}: {
  id: string;
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  optional?: string;
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.Ref<HTMLInputElement>;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-[0.12em] text-text-muted mb-2">
        {label}
        {optional && (
          <span className="text-text-muted/70 normal-case font-normal tracking-normal">
            {" "}
            (optional, {optional})
          </span>
        )}
      </label>
      <input
        id={id}
        ref={inputRef}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onBlur={onBlur}
        onChange={onChange}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full bg-bg-secondary border rounded-lg px-4 py-3 text-text-white placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-[rgba(0,208,132,0.15)] ${
          error ? "border-[#f87171] focus:border-[#f87171]" : "border-border focus:border-accent"
        }`}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-[#f87171] text-xs mt-1.5">
          {error}
        </p>
      )}
    </div>
  );
}
