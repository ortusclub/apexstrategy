import Image from "next/image";

/**
 * Client marks, as vector wherever the brand publishes one.
 *
 * `h` is the rendered height in px at the `md` breakpoint. It is not uniform
 * on purpose: a long wordmark like Dell Technologies and a stacked mark like
 * AWS carry very different optical weight at the same height. Heights are
 * derived from each mark's aspect ratio so the row reads as evenly weighted
 * while every logo keeps its own proportions. `w`/`h` on the Image are the
 * asset's intrinsic size — only the ratio matters for a vector.
 */
const logos = [
  { name: "Dell Technologies", file: "dell.svg", w: 72, h: 9.2, height: 28 },
  { name: "Slack", file: "slack.svg", w: 498, h: 127, height: 38 },
  { name: "PayPal", file: "paypal.svg", w: 124, h: 33, height: 38 },
  { name: "Google Cloud", file: "google-cloud.svg", w: 181, h: 28, height: 30 },
  { name: "Amazon Web Services", file: "aws.svg", w: 304, h: 182, height: 54 },
  { name: "Adobe", file: "adobe.svg", w: 949, h: 239.3, height: 38 },
  { name: "Dassault Systèmes", file: "dassault.svg", w: 452.7, h: 136.8, height: 48 },
  { name: "Zendesk", file: "zendesk.svg", w: 370, h: 59, height: 28 },
  { name: "KMC Solutions", file: "kmc.png", w: 929, h: 334, height: 44 },
];

/**
 * Shared row so the wall is identical wherever it appears.
 *
 * Marks are flattened to a single white (`brightness-0 invert`) so the
 * brand-colour originals, several of which are near-black, stay legible on
 * the dark background and read at one even brightness. Hover restores the
 * original brand colours.
 */
function LogoRow({ scale = 1 }: { scale?: number }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 md:gap-x-16">
      {logos.map((logo) => (
        <Image
          key={logo.name}
          src={`/images/logos/${logo.file}`}
          alt={logo.name}
          width={logo.w}
          height={logo.h}
          unoptimized={logo.file.endsWith(".svg")}
          style={{ "--logo-h": `${logo.height * scale}px` } as React.CSSProperties}
          className="h-[calc(var(--logo-h)*0.78)] md:h-[var(--logo-h)] w-auto brightness-0 invert opacity-90 transition duration-300 hover:brightness-100 hover:invert-0 hover:opacity-100 hover:scale-105"
        />
      ))}
    </div>
  );
}

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
      <section className="border-y border-border py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <h2 className="text-text-muted text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
            Trusted by
          </h2>
          <div className="flex-1">
            <LogoRow scale={0.7} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-y border-border py-16" aria-labelledby="trusted-by">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            id="trusted-by"
            className="text-accent text-xs font-semibold tracking-widest uppercase mb-3"
          >
            Trusted by
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Trusted by leading B2B event organisers and technology companies.
          </p>
        </div>

        <LogoRow />
      </div>
    </section>
  );
}
