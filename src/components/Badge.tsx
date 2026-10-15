/**
 * Pill badge for short labels — event terms, series names, status.
 *
 * "accent" is the filled variant for the one label that should lead; "subtle"
 * is the default for everything that sits beside it.
 */
export default function Badge({
  children,
  tone = "subtle",
  size = "md",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "accent" | "subtle";
  /** "sm" for badges that sit in a row inside a card. */
  size?: "sm" | "md";
  className?: string;
}) {
  const toneClass =
    tone === "accent"
      ? "border-accent/30 bg-accent/10 text-accent"
      : "border-accent-secondary/15 bg-accent-secondary/[0.04] text-accent-secondary";
  const sizeClass =
    size === "sm"
      ? "px-2.5 py-0.5 text-[10px] tracking-[0.08em]"
      : "px-3 py-1 text-[11px] tracking-[0.12em]";

  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full border font-semibold uppercase ${sizeClass} ${toneClass} ${className}`}
    >
      {children}
    </span>
  );
}
