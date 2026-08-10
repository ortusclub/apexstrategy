/**
 * Hero carousel slides — executive roundtable / networking scenes.
 *
 * ⚠️ ASSETS PENDING ⚠️
 *
 * The brief calls for a set of AI-generated executive networking scenes. This
 * repository has no image-generation workflow and no such assets, so only the
 * one real photograph that already ships with the site is listed below. The
 * carousel renders whatever this array contains: with a single slide it hides
 * its controls and behaves exactly like the previous static hero image, and it
 * becomes a working carousel the moment more slides are added.
 *
 * To add the generated images:
 *   1. Drop the files into `public/images/roundtables/`, using descriptive,
 *      hyphenated filenames (they are part of image SEO) — e.g.
 *      `executive-cybersecurity-roundtable.webp`.
 *   2. Append an entry here with real pixel dimensions and alt text that
 *      describes what is actually in the frame.
 *
 * Planned slides, from the brief — uncomment and correct the dimensions once
 * the corresponding file exists:
 *
 *   { src: "/images/roundtables/executive-cybersecurity-roundtable.webp",
 *     alt: "Senior cybersecurity executives in a private roundtable discussion
 *           around a conference table", width: 1600, height: 1200 },
 *   { src: "/images/roundtables/technology-executives-discussion.webp",
 *     alt: "Diverse technology executives in candid discussion around a
 *           premium conference table", width: 1600, height: 1200 },
 *   { src: "/images/roundtables/executive-dinner-networking.webp",
 *     alt: "Business leaders networking during an executive dinner in a
 *           private dining room", width: 1600, height: 1200 },
 *   { src: "/images/roundtables/senior-leaders-strategy-session.webp",
 *     alt: "A small group of senior business leaders in a strategic
 *           discussion", width: 1600, height: 1200 },
 *   { src: "/images/roundtables/boardroom-security-leaders.webp",
 *     alt: "Senior technology and security leaders networking in a modern
 *           boardroom", width: 1600, height: 1200 },
 */

export type RoundtableSlide = {
  src: string;
  /** Describes what is in the frame — never the filename or "stock photo". */
  alt: string;
  width: number;
  height: number;
};

export const ROUNDTABLE_SLIDES: RoundtableSlide[] = [
  {
    src: "/images/APEX-Strategy-Asset.webp",
    alt: "Senior executives seated together at an Apex Strategy executive dinner",
    width: 1920,
    height: 1920,
  },
];
