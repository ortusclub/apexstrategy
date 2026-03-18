"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#00625a] pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
        <ScrollReveal direction="left">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Targeted B2B
            <br />
            Lead Generation
          </h1>
          <Link
            href="#contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-lg font-semibold text-[#00625a] transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-lg"
          >
            Get a Quote
          </Link>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={200}>
          <div className="flex items-center justify-center">
            <Image
              src="/images/APEX-Strategy-Asset.webp"
              alt="Apex Strategy B2B Lead Generation"
              width={600}
              height={500}
              className="h-auto w-full max-w-lg"
              priority
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
