// src/config/makinHomeHotspots.mobile.js
import { MAKIN_HOME_BUCKETS as BUCKETS } from "./makinHomeBuckets";

export const MAKIN_HOME_HOTSPOTS_MOBILE = [
  // STORY / LIFE
  {
    id: "dog",
    label: "Studio dog",
    ariaLabel: "Learn about Dan, Chelsea, and the Ober story",
    bucketId: BUCKETS.story.id,
    description:
      "The heart of the studio. Tap to learn about the people and story behind Ober Artisan.",
    primaryAction: { type: "route", to: BUCKETS.story.primaryRoute },
  },

  // CRAFT & MAKING
  {
    id: "drum",
    label: "Custom snare drum",
    ariaLabel: "Explore custom drum building and Ober drum series",
    bucketId: BUCKETS.craft.id,
    description:
      "Hand-built stave snares and the systems that track each build from lumber to stage.",
    primaryAction: { type: "route", to: BUCKETS.craft.primaryRoute },
  },

  {
    id: "printer",
    label: "3D printer",
    ariaLabel: "See 3D design and jig work for the drum shop",
    bucketId: BUCKETS.craft.id,
    description:
      "Jigs, fixtures, and 3D-printed parts that make the drum building process repeatable.",
    primaryAction: { type: "route", to: BUCKETS.craft.primaryRoute },
  },

  // WEB / SOFTWARE
  {
    id: "monitor",
    label: "Computer monitor",
    ariaLabel: "View web and software projects built in this studio",
    bucketId: BUCKETS.software.id,
    description:
      "Artist portals, internal tools, and full-stack apps powering the Ober ecosystem.",
    primaryAction: { type: "route", to: BUCKETS.software.primaryRoute },
  },

  {
    id: "rubiks-cube",
    label: "Rubik’s cube in glass case",
    ariaLabel: "Learn about problem solving and technical systems",
    bucketId: BUCKETS.software.id,
    description:
      "Systems thinking, debugging, and solution engineering work behind the scenes.",
    primaryAction: { type: "route", to: BUCKETS.software.primaryRoute },
  },

  // MEDIA / PHOTO / VIDEO
  {
    id: "camera-front",
    label: "Camera on the floor",
    ariaLabel: "Explore photography and media work",
    bucketId: BUCKETS.media.id,
    description:
      "Product, artist, and behind-the-scenes images that show the work in motion.",
    primaryAction: { type: "route", to: BUCKETS.media.primaryRoute },
  },

  {
    id: "feather-jacket",
    label: "Feather jacket",
    ariaLabel: "See performance, festivals, and lifestyle visuals",
    bucketId: BUCKETS.media.id,
    description:
      "Festival sets, performance work, and visual storytelling that bleed into product design.",
    primaryAction: { type: "route", to: BUCKETS.media.primaryRoute },
  },

  // MUSIC / AUDIO
  {
    id: "guitar",
    label: "Electric & acoustic guitars",
    ariaLabel: "See music, sessions, and scoring work",
    bucketId: BUCKETS.audio.id,
    description:
      "Session drums, writing, and scoring work that happens in the same space as the builds.",
    primaryAction: { type: "route", to: BUCKETS.audio.primaryRoute },
  },
];