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

/**
 * Client logo wall.
 *
 * `prominent` is the trust-first treatment used directly below the hero:
 * larger marks, higher contrast and a supporting statement. The compact
 * variant is the original single-row strip.
 */
export default function LogosBar({
  prominent = false,
}: {
  prominent?: boolean;
}) {
  if (!prominent) {
    return (
      <section className="border-y border-border py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <h2 className="text-text-muted text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
            Trusted By
          </h2>
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

  return (
    <section className="border-y border-border py-14" aria-labelledby="trusted-by">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2
            id="trusted-by"
            className="text-accent text-xs font-semibold tracking-widest uppercase mb-3"
          >
            Trusted By
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Trusted by leading B2B event organisers and technology companies.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={`/images/logos/${logo.file}`}
              alt={logo.name}
              width={150}
              height={150}
              className="h-12 md:h-14 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
