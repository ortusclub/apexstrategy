import { HERO_SLIDES, type HeroSlide } from "./hero-slides";

// Event-format photography, including licensed stock and a user-supplied dinner photo.
// Source and usage provenance are recorded per asset; no claim that Apex hosted these events.
const pexelsLicense = "Pexels License — free for commercial use, no attribution required";
export const AI_HERO_SLIDES: HeroSlide[] = [
  {
    src: "/images/events/conference-conversation-v2.jpg",
    alt: "Two business professionals in conversation, with one speaking into a microphone at a conference",
    width: 1600,
    height: 1067,
    caption: "Executive conversations",
    position: "45% center",
    credit: {
      photographer: "Henri Mathieu-Saint-Laurent",
      source: "https://www.pexels.com/photo/a-man-in-corporate-attire-talking-at-an-interview-8349429/",
      license: pexelsLicense,
    },
  },
  HERO_SLIDES[3],
  {
    src: "/images/events/executive-dinner-user-v1.png",
    alt: "Guests conversing across a long dining table in a warmly lit private restaurant room",
    width: 1052,
    height: 1202,
    caption: "Executive dinners",
    position: "center 75%",
    credit: {
      photographer: "Not specified (user-supplied photograph)",
      source: "User attachment: Screenshot 2026-10-14 at 14.33.25.png",
      license: "Supplied by the user for use on this website",
      note: "Original supplied image, unedited. CSS object-position favours the guests and table over the ceiling.",
    },
  },
  HERO_SLIDES[5],
];
