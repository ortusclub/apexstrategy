/**
 * The eyebrow + heading lockup used at the top of most sections.
 * Extracted because it was repeated, near-identically, in six components.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Heading = "h2",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : undefined}>
      <div
        className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}
      >
        <span className="w-8 h-0.5 bg-accent" aria-hidden="true"></span>
        <span className="text-accent text-xs font-semibold tracking-widest uppercase">
          {eyebrow}
        </span>
        {centered && (
          <span className="w-8 h-0.5 bg-accent" aria-hidden="true"></span>
        )}
      </div>

      <Heading className="text-3xl md:text-4xl font-bold">{title}</Heading>

      {intro && (
        <p
          className={`text-text-light text-lg leading-relaxed mt-4 ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
