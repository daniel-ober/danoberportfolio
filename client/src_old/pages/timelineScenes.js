// Semantic layer keys – these must match what TimelineRail expects.
export const LAYER_KEYS = [
  "outside",
  "outside_object",
  "wall",
  "wall_object",
  "desk",
  "desk_object",
  "misc_object_a",
  "misc_object_b",
];

/**
 * Default visual + parallax "feel" per layer.
 *
 * These apply to *every* scene by default, so you get a consistent
 * depth stack without having to tweak each scene by hand.
 */
const DEFAULT_LAYER_CONFIG = {
  // Furthest back – barely moves, almost like a painted backdrop
  outside: {
    scale: 1.02,
    parallax: 0.25, // very slow – dreamy distance
  },
  outside_object: {
    scale: 1.04,
    parallax: 0.4, // still gentle, adds a hint of depth
  },

  // Mid-background wall
  wall: {
    scale: 1.08,
    parallax: 1.2, // main “room” motion
  },

  // Hero wall object – soft but noticeable depth pop
  wall_object: {
    scale: 1.2,
    parallax: 1.6, // moves a bit more than the wall
  },

  // Desk plane – slightly closer than the wall
  desk: {
    scale: 1.1,
    parallax: 1.7,
  },

  // Desk object(s) – closer to the camera
  desk_object: {
    scale: 1.12,
    parallax: 2.0,
  },

  // Misc foreground / accent objects – “closest” layer
  misc_object_a: {
    scale: 1.14,
    parallax: 2.2,
  },
  misc_object_b: {
    scale: 1.13,
    parallax: 1.9,
  },
};

/**
 * Helper to build a scene using the folder structure:
 *   /public/media/timeline/scene{n}/{layer}.png
 */
function makeScene(sceneNumber, id, overrides = {}) {
  const base = `/media/timeline/scene${sceneNumber}`;

  const layers = {};
  LAYER_KEYS.forEach((key) => {
    const defaultLayer = DEFAULT_LAYER_CONFIG[key] || {};
    const overrideLayer = overrides[key] || {};

    layers[key] = {
      // always present
      src: `${base}/${key}.png`,

      // gentle global defaults for a dreamy feel
      scale: 1.0,
      offsetX: 0,
      offsetY: 0,
      parallax: 1.2, // semantic defaults will usually override

      // semantic defaults, then per-scene overrides
      ...defaultLayer,
      ...overrideLayer,
    };
  });

  return {
    id,
    layers,
  };
}

/**
 * MAIN SCENE LIST
 */
export const TIMELINE_SCENES = [
  makeScene(1, "scene-01-maker-mind", {
    desk_object: { offsetY: 4 },
  }),
  makeScene(2, "scene-02-young-artist"),
  makeScene(3, "scene-03-musician-awakens"),
  makeScene(4, "scene-04-teenage-technologist"),
  makeScene(5, "scene-05-professional-creative"),
  makeScene(6, "scene-06-systems-thinker"),
  makeScene(7, "scene-07-polymath-craftsman", {
    misc_object_b: { scale: 1.08, offsetX: 4 },
  }),
];