"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Get a Quote
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Fill in the form below and we&apos;ll be in touch.
        </p>

        {submitted ? (
          <div className="mt-12 rounded-2xl bg-teal/5 p-8 text-center">
            <p className="text-lg font-semibold text-teal">
              Thank you! We&apos;ll be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-teal px-8 py-3 font-semibold text-white transition hover:bg-teal-dark"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
