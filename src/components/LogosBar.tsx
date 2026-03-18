import Image from "next/image";

const logos = [
  { name: "Dell", file: "Dell-logo-new-150x150.png" },
  { name: "Slack", file: "Slack-logo-150x150.png" },
  { name: "PayPal", file: "Paypal-logo-150x150.png" },
  { name: "Google Cloud", file: "Google-cloud-logo-150x150.png" },
  { name: "AWS", file: "Aws-logo-150x150.png" },
  { name: "Adobe", file: "Adobe-logo-150x150.png" },
  { name: "Dassault", file: "Dassault-logo-150x150.png" },
  { name: "KMC", file: "Kmc-logo-150x150.png" },
];

export default function LogosBar() {
  return (
    <section className="border-y border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <span className="text-text-muted text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
          Trusted By
        </span>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 flex-1">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={`/images/logos/${logo.file}`}
              alt={logo.name}
              width={80}
              height={80}
              className="h-8 w-auto grayscale opacity-40 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
