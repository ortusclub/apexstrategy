import { HERO_SLIDES, type HeroSlide } from "./hero-slides";

// Licensed illustrative event-format photography; these are not Apex client events.
// Original files downloaded at 1600px wide, without content edits.
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
    src: "/images/events/executive-conversation-v2.jpg",
    alt: "Three professionals in suits having a focused conversation in a warmly lit meeting space",
    width: 1600,
    height: 1068,
    caption: "Focused executive discussions",
    credit: {
      photographer: "August de Richelieu",
      source: "https://www.pexels.com/photo/formal-business-meeting-4427923/",
      license: pexelsLicense,
    },
  },
  HERO_SLIDES[5],
];
