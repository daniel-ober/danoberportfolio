import React, { useEffect, useRef } from "react";
import { useScrollProgress } from "./useScrollProgress";
import { TIMELINE_SCENES, LAYER_KEYS } from "./timelineScenes";
import {
  Monitor,
  Boxes,
  Puzzle,
  Hammer,
  Music2,
  Cpu,
} from "lucide-react";
import "./TimelineRail.css";

/* -----------------------------------------------------------
   PARALLAX SETTINGS
----------------------------------------------------------- */

// Base speeds per semantic layer (relative parallax strength).
// These are multiplied by each layer's own `parallax` from timelineScenes.
const LAYER_SPEED = {
  outside: 0.0,
  outside_object: 0.15,
  wall: 0.12,
  wall_object: 0.22,
  desk: 0.25,
  desk_object: 0.35,
  misc_object_a: 0.5,
  misc_object_b: 0.4,
};

// Max horizontal shift in pixels at full parallax for a layer
const MAX_SHIFT_PX = 110;

/* -----------------------------------------------------------
   DISCIPLINES – aligned with PolyrhythmicMethod
   (keys, labels, colors match that component)
----------------------------------------------------------- */

const DISCIPLINE_CONFIG = [
  {
    key: "web",
    label: "Web & Software",
    color: "#3b82f6",
    Icon: Monitor,
  },
  {
    key: "product",
    label: "Product & UX",
    color: "#f97316",
    Icon: Boxes,
  },
  {
    key: "problem",
    label: "Problem Solving",
    color: "#a855f7",
    Icon: Puzzle,
  },
  {
    key: "craft",
    label: "Craft & Making",
    color: "#facc15",
    Icon: Hammer,
  },
  {
    key: "story",
    label: "Story & Music",
    color: "#ec4899",
    Icon: Music2,
  },
  {
    key: "ai",
    label: "AI & Systems",
    color: "#22c55e", // green, to match the chip palette
    Icon: Cpu,
  },
];

/* -----------------------------------------------------------
   STORY META – one entry per scene.
   Ids line up with TIMELINE_SCENES ids.
   `disciplines` uses the SAME keys as PolyrhythmicMethod.
----------------------------------------------------------- */

const STORY_SCENES = {
  "scene-01-maker-mind": {
    eraLabel: "ERA 1 — FOUNDATIONS",
    title: "Foundations",
    meta: "Stack: Curiosity • Play • Tinkering",
    lines: [
      "Your story begins with instinct, long before you had language for it.",
      "Curiosity wasn’t something you learned — it was something you ran on.",
      "Everything around you became a small experiment waiting for you to wake it up.",
    ],
    disciplines: ["craft", "story"],
  },
  "scene-02-young-artist": {
    eraLabel: "ERA 2 — SEEING IN LAYERS",
    title: "Seeing in Layers",
    meta: "Stack: Drawing • Light • Composition",
    lines: [
      "This is where you stopped just looking at things and started really seeing them.",
      "Light, shadow, depth, and detail became puzzles you couldn’t stop solving.",
      "You began noticing structure and form where others only saw surface.",
    ],
    disciplines: ["product", "craft", "story"],
  },
  "scene-03-musician-awakens": {
    eraLabel: "ERA 3 — THE CALLING",
    title: "The Calling",
    meta: "Stack: Rhythm • Discipline • Taste",
    lines: [
      "Somewhere between rhythm and repetition, you found your foundation.",
      "Drumming taught you timing, discipline, and the beauty of structured chaos.",
      "It was your first glimpse into how creativity and precision could live together.",
    ],
    disciplines: ["craft", "story", "problem"],
  },
  "scene-04-teenage-technologist": {
    eraLabel: "ERA 4 — CRAFTING A VOICE",
    title: "Crafting a Voice",
    meta: "Stack: Early Web • Recording • Hacking",
    lines: [
      "Creation shifted the moment you started shaping sound instead of just hearing it.",
      "Computers stopped being toys and became instruments for publishing, recording, and building.",
      "This era sharpened your taste and gave your craft direction.",
    ],
    disciplines: ["web", "product", "story", "problem"],
  },
  "scene-05-professional-creative": {
    eraLabel: "ERA 5 — THE MULTIDISCIPLINARY SHIFT",
    title: "The Multidisciplinary Shift",
    meta: "Stack: Client Work • Teams • Delivery",
    lines: [
      "Things changed the moment all your skills started talking to each other.",
      "Music, engineering, craft, and design finally shared the same table.",
      "You realized your advantage wasn’t choosing one path — it was weaving many.",
    ],
    disciplines: ["web", "product", "story", "problem", "craft"],
  },
  "scene-06-systems-thinker": {
    eraLabel: "ERA 6 — SYSTEMS & STORYTELLING",
    title: "Systems & Storytelling",
    meta: "Stack: React • Firebase • Narrative UX",
    lines: [
      "You began treating every project like a world — not just a task.",
      "Systems became the way you organized ideas; storytelling became the way you connected them.",
      "From here, your work stopped being output and started becoming identity.",
    ],
    disciplines: ["web", "product", "problem", "story", "ai"],
  },
  "scene-07-polymath-craftsman": {
    eraLabel: "ERA 7 — THE POLYRHYTHMIC CRAFTSMAN",
    title: "The Polyrhythmic Craftsman",
    meta: "Stack: Full-Stack • Instruments • Experiences",
    lines: [
      "This is where everything you are finally clicks into place.",
      "The studio, the workshop, the printer, the code — all operating as one instrument.",
      "You didn’t become a generalist. You became a system of disciplines working in harmony.",
    ],
    disciplines: ["web", "product", "problem", "craft", "story", "ai"],
  },
};

export function TimelineRail({ scenes = TIMELINE_SCENES }) {
  const viewportRef = useRef(null);

  const { progress } = useScrollProgress(viewportRef);
  const sceneCount = scenes.length || 1;
  const scrollUnits = sceneCount > 1 ? progress * (sceneCount - 1) : 0;
  const activeIndex = Math.round(scrollUnits);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        el.scrollBy({ left: el.clientWidth * 0.9, behavior: "smooth" });
      }
      if (e.key === "ArrowLeft") {
        el.scrollBy({ left: -el.clientWidth * 0.9, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollToScene = (index) => {
    const el = viewportRef.current;
    if (!el) return;
    const widthPerScene = el.clientWidth;
    el.scrollTo({ left: widthPerScene * index, behavior: "smooth" });
  };

  return (
    <div className="timeline-scroll">
      {/* ERA MINIMAP / RAIL */}
      <div className="timeline-era-rail">
        {scenes.map((scene, index) => {
          const story = STORY_SCENES[scene.id];
          const distance = Math.abs(scrollUnits - index);
          const activeStrength = Math.max(0, 1 - distance); // 0–1

          return (
            <button
              key={scene.id}
              type="button"
              className="timeline-era-pill"
              onClick={() => scrollToScene(index)}
              style={{ "--pill-strength": activeStrength }}
              data-active={index === activeIndex}
            >
              <span className="timeline-era-pill-index">
                E{index + 1}
              </span>
              <span className="timeline-era-pill-title">
                {story?.title || "Scene"}
              </span>
            </button>
          );
        })}
      </div>

      <div className="timeline-viewport" ref={viewportRef}>
        <div className="timeline-scenes-row">
          {scenes.map((scene, sceneIndex) => {
            // offset from this scene's center in "scene widths"
            const centerOffset = scrollUnits - sceneIndex;
            const centered = Math.max(-1, Math.min(1, centerOffset)); // clamp

            // Parallax layers – driven by centered offset
            const layerImages = LAYER_KEYS.map((layerKey) => {
              const raw = scene.layers?.[layerKey];
              if (!raw) return null;

              const layer = typeof raw === "string" ? { src: raw } : raw;
              if (!layer.src) return null;

              const baseSpeed = LAYER_SPEED[layerKey] ?? 0;
              const layerParallax = (layer.parallax ?? 1) * baseSpeed;

              const shiftX = centered * MAX_SHIFT_PX * layerParallax;

              const scale = layer.scale ?? 1;
              const offsetX = layer.offsetX ?? 0;
              const offsetY = layer.offsetY ?? 0;

              const transform = `
                translate3d(${shiftX + offsetX}px, ${offsetY}px, 0)
                scale(${scale})
              `;

              return (
                <img
                  key={`${scene.id}-${layerKey}`}
                  src={layer.src}
                  alt=""
                  className={`timeline-layer-img timeline-layer-img--${layerKey}`}
                  style={{ transform }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              );
            });

            const story = STORY_SCENES[scene.id];

            // Scroll-based strength for text
            const distance = Math.abs(centerOffset); // 0 at center, 1 at neighbor center
            const cutoff = 0.75; // how wide the "active" band is

            let strength = 0;
            if (distance < cutoff) {
              strength = 1 - distance / cutoff; // [0,1]
              strength = Math.pow(strength, 1.15);
            }

            const textOpacity = strength;
            const textTranslateY = 22 * (1 - strength); // 22px → 0

            // Scrim on nearest scene – darker but stable
            const isActive = sceneIndex === activeIndex;
            const scrimOpacity = isActive ? strength * 0.85 : 0;

            return (
              <div className="timeline-scene" key={scene.id}>
                {layerImages}

                {story && (
                  <div
                    className="timeline-scrim"
                    style={{ opacity: scrimOpacity }}
                  />
                )}

                {story && (
                  <div
                    className="timeline-story"
                    style={{
                      opacity: textOpacity,
                      transform: `translate(-50%, -50%) translateY(${textTranslateY}px)`,
                    }}
                  >
                    <div className="timeline-story-label">
                      {story.eraLabel}
                    </div>

                    <h2 className="timeline-story-title">
                      {story.title}
                    </h2>

                    {story.meta && (
                      <div className="timeline-story-meta">
                        {story.meta}
                      </div>
                    )}

                    {story.lines.map((line, idx) => {
                      const lineDelay = idx * 40; // ms
                      return (
                        <p
                          key={idx}
                          className="timeline-story-body"
                          style={{
                            opacity: textOpacity,
                            transform: `translateY(${
                              textTranslateY + idx * 4
                            }px)`,
                            transitionDelay: `${lineDelay}ms`,
                          }}
                        >
                          {line}
                        </p>
                      );
                    })}

                    {story.disciplines && (
                      <div className="timeline-disciplines">
                        {DISCIPLINE_CONFIG.map((disc) => {
                          const active = story.disciplines.includes(disc.key);
                          const Icon = disc.Icon;
                          return (
                            <div
                              key={disc.key}
                              className={`timeline-discipline-chip ${
                                active ? "is-active" : "is-muted"
                              }`}
                              style={
                                active
                                  ? { borderColor: disc.color + "80" }
                                  : undefined
                              }
                            >
                              <span
                                className="timeline-discipline-icon"
                                style={{
                                  borderColor: active
                                    ? disc.color + "cc"
                                    : "rgba(148,163,184,0.7)",
                                  background: active
                                    ? "rgba(15,23,42,0.96)"
                                    : "rgba(15,23,42,0.8)",
                                }}
                              >
                                {Icon && (
                                  <Icon
                                    size={14}
                                    aria-hidden="true"
                                    className="timeline-discipline-icon-img"
                                    style={{ color: disc.color }}
                                  />
                                )}
                              </span>
                              <span>{disc.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TimelineRail;