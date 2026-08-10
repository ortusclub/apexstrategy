"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

export default function RegisterForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus({ kind: "submitting" });

    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

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

  return (
    <section id="register" className="py-24 bg-bg-primary cta-gradient-bg border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-bg-card border border-border rounded-2xl p-10 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Request your seat
          </h2>
          <p className="text-text-light mb-8">
            A quick 30 seconds. We&apos;ll confirm by email within one business day.
          </p>

          {sent ? (
            <p
              role="status"
              className="text-accent text-lg font-semibold leading-relaxed"
            >
              {status.message}
            </p>
          ) : (
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field id="name" label="Full name" name="name" type="text" required autoComplete="name" />
                <Field id="title" label="Job title" name="title" type="text" required placeholder="e.g. CISO" autoComplete="organization-title" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field id="company" label="Company" name="company" type="text" required autoComplete="organization" />
                <Field id="email" label="Work email" name="email" type="email" required autoComplete="email" />
              </div>
              <Field
                id="phone"
                label="Phone"
                optional="for last-minute coordination"
                name="phone"
                type="tel"
                autoComplete="tel"
              />
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
                  {status.kind === "submitting" ? "Submitting…" : "Request seat →"}
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
      </div>
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
}: {
  id: string;
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  optional?: string;
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
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 text-text-white placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-[rgba(0,208,132,0.15)]"
      />
    </div>
  );
}
