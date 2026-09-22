/**
 * Hero carousel slides — the kinds of event Apex fills.
 *
 * ⚠️ THESE ARE NOT PHOTOGRAPHS OF APEX EVENTS ⚠️
 *
 * Apex does not host, produce or organise events; it supplies delegates for
 * events its clients run. These are licensed stock photographs chosen to show
 * the *formats* we fill. Alt text therefore describes the scene generically —
 * never "an Apex event", never a named client — so nothing here implies we
 * convened the room.
 *
 * Licensing — every image below is from Pexels (Pexels License) or Unsplash
 * (Unsplash License). Both are free for commercial use with no attribution
 * required, so no visible credit is added to the site. Only free Unsplash
 * photos are used, never Unsplash+. Frames with a readable third-party logo
 * or event name are avoided, so no slide implies a tie to a real event.
 * Source pages and photographers are recorded per slide so the provenance is
 * auditable from the repository alone.
 *
 * Adding a slide: drop a ~1600px-wide file in `public/images/events/`, append
 * an entry with its real pixel dimensions, and record the source and licence
 * in the same shape. The carousel renders whatever this array contains.
 * Replacing a photo: give the new file a new name. Optimised images are
 * cached by URL, so reusing a filename can keep serving the old picture.
 */

export type HeroSlide = {
  src: string;
  /** Describes what is in the frame — never the filename, client or "stock photo". */
  alt: string;
  width: number;
  height: number;
  /** The event format this frame stands for. Rendered as the slide caption. */
  caption: string;
  /** object-position, when centre crops the subject badly. */
  position?: string;
  /** Provenance — not rendered; kept so the licence trail lives with the asset. */
  credit: {
    photographer: string;
    source: string;
    license: string;
    /** Any processing applied to the original, for the audit trail. */
    note?: string;
  };
};

const PEXELS = "Pexels License — free for commercial use, no attribution required";
const UNSPLASH = "Unsplash License — free for commercial use, no attribution required";

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/images/events/summit-ballroom-plenary.jpg",
    alt: "A speaker at a lectern addressing a full hotel ballroom of delegates in business dress seated at round tables",
    width: 1600,
    height: 1200,
    caption: "Executive summits",
    credit: {
      photographer: "Andy Wang",
      source: "https://unsplash.com/photos/a-group-of-people-sitting-at-tables-5mwo_CgCXaA",
      license: UNSPLASH,
    },
  },
  {
    src: "/images/events/conference-auditorium.jpg",
    alt: "A speaker presenting from the stage to a full tiered auditorium at a conference",
    width: 1600,
    height: 1067,
    caption: "B2B conferences",
    credit: {
      photographer: "Marwen Larafa",
      source: "https://unsplash.com/photos/speaker-presenting-to-large-audience-in-auditorium-_96edJ8IVC4",
      license: UNSPLASH,
    },
  },
  {
    src: "/images/events/panel-discussion-stage.jpg",
    alt: "A speaker in a suit addressing the audience with a microphone beside three panellists seated on stage",
    width: 1600,
    height: 1067,
    caption: "Panel discussions",
    // The far-right panellist sits on the edge; a centre crop clips his face.
    position: "70% center",
    credit: {
      photographer: "Henri Mathieu-Saint-Laurent",
      source: "https://www.pexels.com/photo/man-wearing-suit-speaking-on-a-microphone-8349230/",
      license: PEXELS,
    },
  },
  {
    src: "/images/events/roundtable-dinner.jpg",
    alt: "Guests seated around a dinner table listening as one of the speakers talks into a microphone",
    width: 1600,
    height: 1067,
    caption: "Executive roundtables",
    credit: {
      photographer: "Riccardi Media",
      source: "https://unsplash.com/photos/panel-discussion-with-speakers-and-audience-at-a-table-3BwoM8zNYwo",
      license: UNSPLASH,
    },
  },
  {
    src: "/images/events/executive-briefing.jpg",
    alt: "Professionals in small groups talking over drinks and a tablet at a standing reception",
    width: 1600,
    height: 900,
    caption: "Executive briefings",
    credit: {
      photographer: "jimylloyd laumain",
      source: "https://unsplash.com/photos/a-group-of-people-standing-around-each-other-Tc1mBpMS-zs",
      license: UNSPLASH,
    },
  },
  {
    src: "/images/events/networking-reception.jpg",
    alt: "Executives in suits talking and smiling in small groups at a networking reception",
    width: 1600,
    height: 1200,
    caption: "Executive networking",
    credit: {
      photographer: "Jenean Newcomb",
      source: "https://unsplash.com/photos/man-in-black-suit-jacket-smiling-RzuxpXvwFbE",
      license: UNSPLASH,
      // Portrait original (1600x2400 at the downloaded size), pre-cropped to a
      // 4:3 band on the faces; object-cover alone would centre on the jackets.
      note: "Cropped from the portrait original to 1600x1200",
    },
  },
];
