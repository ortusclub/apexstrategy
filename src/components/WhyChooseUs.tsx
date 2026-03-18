"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const points = [
  "Identifying and reaching high-value prospects",
  "Building relationships with key stakeholders",
  "Delivering insights that support pipeline growth and revenue goals",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <ScrollReveal direction="left">
            <Image
              src="/images/APEX-asset-01.webp"
              alt="Why Choose Apex Strategy"
              width={500}
              height={400}
              className="h-auto w-full max-w-md rounded-lg"
            />
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mt-6 leading-relaxed text-gray-600">
              Apex Strategy is your global B2B lead-generation partner. We act
              as an extension of your sales team. We build relationships with
              senior executives, deliver highly qualified leads, and provide
              actionable insights — so your reps can focus on what they do best:
              closing deals.
            </p>
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="group flex items-start gap-3 text-gray-700 transition-colors duration-300 hover:text-gray-900">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#00625a] transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
