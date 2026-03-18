"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const clients = [
  { name: "Dell", file: "Dell-logo-new-150x150.png" },
  { name: "Slack", file: "Slack-logo-150x150.png" },
  { name: "PayPal", file: "Paypal-logo-150x150.png" },
  { name: "KMC", file: "Kmc-logo-150x150.png" },
  { name: "Google Cloud", file: "Google-cloud-logo-150x150.png" },
  { name: "Dassault", file: "Dassault-logo-150x150.png" },
  { name: "AWS", file: "Aws-logo-150x150.png" },
  { name: "Adobe", file: "Adobe-logo-150x150.png" },
  { name: "Zendesk", file: "Client-Logos-PNG-4-150x150.png" },
];

export default function TrustedBy() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Trusted By
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-10 md:gap-14">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={`/images/logos/${client.file}`}
                  alt={client.name}
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain grayscale transition-all duration-300 hover:grayscale-0 md:h-20 md:w-20"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
