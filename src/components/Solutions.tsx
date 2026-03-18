"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const solutions = [
  {
    title: "Delegate Acquisition",
    description:
      "We bring your ICPs to your events, ensuring a relevant audience in attendance. Focus on your event; we'll handle the participants. No win, no fee.",
    detail:
      "Reaching the right decision-makers starts with targeting the right people. Through research and clear criteria, executives are selected based on how well they align with specific business goals.\n\nOutreach is crafted to feel personal and relevant, leading to real conversations, not just clicks. The result: stronger connections, better engagement, and a pipeline filled with the right names.",
    cta: "Build Real Executive Connections",
  },
  {
    title: "Data Services",
    description:
      "We gather valuable data from engagement campaigns, including email, phone, and social channels. This helps you understand your audience better and target future leads more effectively.",
    detail:
      "We gather verified contact details throughout each campaign, including business emails, direct dials, and social profiles, always in line with data protection laws.\n\nAt the end of each project, we share a clear report outlining who engaged, what was confirmed, and how prospects responded. This gives your team the insights needed to improve targeting and plan next steps with confidence.",
    cta: "Get Your Data Report",
  },
  {
    title: "Appointment Setting",
    description:
      "We connect you with your ICP by booking meetings with the right decision-makers. Think of us as an extension of your SDR team.",
    detail:
      "We help turn interest into action by arranging direct meetings between your team and qualified prospects.\n\nFrom scheduling to confirmations, every step is handled, so you can focus on closing, not chasing. Meetings are warm, well-timed, and built to move deals forward.",
    cta: "Start Real Conversations",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Our Solution
          </h2>
        </ScrollReveal>

        {/* Card grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {solutions.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 150}>
              <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#00625a]/20">
                <h3 className="text-xl font-bold text-[#00625a] transition-colors duration-300 group-hover:text-[#054a45]">
                  {s.title}
                </h3>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {s.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Detail sections */}
        <div className="mt-24 space-y-24">
          {solutions.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col items-center gap-12 md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <ScrollReveal direction={i % 2 === 0 ? "left" : "right"} className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  {s.title}
                </h3>
                <div className="mt-4 space-y-4 leading-relaxed text-gray-600">
                  {s.detail.split("\n\n").map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-6 inline-block rounded-full bg-[#00625a] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#054a45] hover:scale-105 hover:shadow-lg"
                >
                  {s.cta}
                </a>
              </ScrollReveal>
              <ScrollReveal direction={i % 2 === 0 ? "right" : "left"} delay={200} className="flex flex-1 items-center justify-center">
                <Image
                  src="/images/APEX-asset-01.webp"
                  alt={s.title}
                  width={500}
                  height={400}
                  className="h-auto w-full max-w-md rounded-lg"
                />
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
