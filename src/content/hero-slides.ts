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
 * Licensing — every image below is from Pexels under the Pexels License:
 * free for commercial use, no attribution required, no visible credit added
 * to the site. Source pages and photographers are recorded per slide so the
 * provenance is auditable from the repository alone.
 *
 * Adding a slide: drop a ~1600px-wide file in `public/images/events/`, append
 * an entry with its real pixel dimensions, and record the source and licence
 * in the same shape. The carousel renders whatever this array contains.
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

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/images/events/executive-dinner.jpg",
    alt: "Around twenty guests in conversation along a long candlelit banquet table at a private dinner",
    width: 1600,
    height: 1200,
    caption: "Executive dinners",
    credit: {
      photographer: "furkanfdemir",
      source: "https://www.pexels.com/photo/people-having-a-formal-dinner-10821303/",
      license: PEXELS,
      // Portrait original (4000x6000), pre-cropped to a 4:3 band on the
      // seated guests — object-cover alone would have centred on the ceiling.
      note: "Cropped from the portrait original to 1600x1200",
    },
  },
  {
    src: "/images/events/executive-summit.jpg",
    alt: "A large audience filling an auditorium for a keynote session at a business summit",
    width: 1600,
    height: 1068,
    caption: "Executive summits",
    credit: {
      photographer: "BBSO",
      source: "https://www.pexels.com/photo/gathering-during-event-20733081/",
      license: PEXELS,
    },
  },
  {
    src: "/images/events/b2b-conference.jpg",
    alt: "Delegates in business dress seated in rows through a session at a B2B conference",
    width: 1600,
    height: 1066,
    caption: "B2B conferences",
    credit: {
      photographer: "Loveleen Cherub",
      source: "https://www.pexels.com/photo/view-of-people-sitting-at-the-conference-26202153/",
      license: PEXELS,
    },
  },
  {
    src: "/images/events/executive-roundtable.jpg",
    alt: "Senior executives in focused discussion over documents around a boardroom table",
    width: 1600,
    height: 1066,
    caption: "Executive roundtables",
    credit: {
      photographer: "Vlada Karpovich",
      source:
        "https://www.pexels.com/photo/elderly-man-and-woman-discussing-business-in-a-meeting-7433853/",
      license: PEXELS,
    },
  },
  {
    src: "/images/events/executive-networking.jpg",
    alt: "Delegates standing in several conversation groups across a conference room during a networking break",
    width: 1600,
    height: 1068,
    caption: "Executive networking",
    credit: {
      photographer: "Pavel Danilyuk",
      source: "https://www.pexels.com/photo/groups-of-people-talking-in-the-office-8761555/",
      license: PEXELS,
    },
  },
];
