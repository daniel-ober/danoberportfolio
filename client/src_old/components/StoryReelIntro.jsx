// src/components/StoryReelIntro.jsx
import React, { useState, useEffect, useCallback } from "react";
import "./StoryReelIntro.css";

const SCENES = [
  {
    id: "home-base-1",
    label: "Home base",
    tag: "Opening frame",
    bgImage: "/media/home/scene-home-base.jpg",
    lines: [
      "I build things so home can feel calmer, freer, and more creative.",
      "Every experiment—drums, code, or something in between—starts here."
    ],
  },
  {
    id: "idea-desk",
    label: "Idea desk",
    tag: "Notepad · Pencil · Coffee",
    bgImage: "/media/home/scene-idea-desk.jpg",
    lines: [
      "Most projects start as scribbles: arrows, underlines, bad drawings.",
      "This is where constraints turn into possibilities instead of dead ends."
    ],
  },
  {
    id: "software",
    label: "Engineering desk",
    tag: "Software · Systems · Portals",
    bgImage: "/media/home/scene-software-desk.jpg",
    lines: [
      "Here, ideas become systems: auth flows, dashboards, little tools that glue everything together.",
      "I like shipping things that feel human, not just technically correct."
    ],
  },
  {
    id: "studio",
    label: "Music & photo studio",
    tag: "Sound · Story · Documentation",
    bgImage: "/media/home/scene-studio.jpg",
    lines: [
      "In the studio, everything gets a voice: drums, guitars, synths, and the stories behind them.",
      "It’s also where I document the work so the process feels like a narrative, not a black box."
    ],
  },
  {
    id: "woodshop",
    label: "Woodshop · Garage",
    tag: "Drums · Jigs · Experiments",
    bgImage: "/media/home/scene-woodshop.jpg",
    lines: [
      "Out here, the sawdust and burn marks tell you if the idea holds up in the real world.",
      "Stave shells, jigs, fixtures—this is where SoundLegend and the other drum lines were born."
    ],
  },
  {
    id: "prototyping",
    label: "3D & prototyping",
    tag: "Fusion 360 · 3D printer",
    bgImage: "/media/home/scene-3d-proto.jpg",
    lines: [
      "Some ideas only make sense once you can hold them.",
      "I use 3D design and printing to bridge the gap between sketch and tool."
    ],
  },
  {
    id: "home-base-2",
    label: "Home base (again)",
    tag: "Why it matters",
    bgImage: "/media/home/scene-home-base-night.jpg",
    lines: [
      "Everything loops back here: to the people, the quiet, the reasons this all matters.",
      "If we work together, the thing we build should feel like it belongs in your version of home base too."
    ],
  },
];

function StoryReelIntro() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeScene = SCENES[activeIndex];

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SCENES.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === 0 ? SCENES.length - 1 : prev - 1
    );
  }, []);

  // Optional autoplay – slow drift through scenes.
  // You can comment this out if you want manual-only control.
  useEffect(() => {
    const interval = setInterval(goNext, 14000); // 14 seconds per scene
    return () => clearInterval(interval);
  }, [goNext]);

  return (
    <section className="story-reel">
      <div className="story-reel__band">
        {/* BACKGROUND SCENE */}
        <div
          className="story-reel__scene"
          style={{
            backgroundImage: activeScene.bgImage
              ? `url(${activeScene.bgImage})`
              : "none",
          }}
        >
          {/* film-ish grain overlay */}
          <div className="story-reel__grain" />

          {/* CONTENT */}
          <div className="story-reel__content">
            <div className="story-reel__badge">
              {activeScene.tag || "Scene"}
            </div>

            <div className="story-reel__caption">
              {activeScene.lines.map((line, idx) => (
                <p
                  key={idx}
                  className={`story-reel__line story-reel__line--${idx}`}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="story-reel__footer">
              <div className="story-reel__label">
                {activeScene.label}
              </div>

              <div className="story-reel__controls">
                <button
                  type="button"
                  className="story-reel__control story-reel__control--prev"
                  onClick={goPrev}
                >
                  ← Back
                </button>
                <button
                  type="button"
                  className="story-reel__control story-reel__control--next"
                  onClick={goNext}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>

          {/* PROGRESS DOTS */}
          <div className="story-reel__progress">
            {SCENES.map((scene, idx) => (
              <button
                key={scene.id}
                type="button"
                className={
                  "story-reel__dot" +
                  (idx === activeIndex
                    ? " story-reel__dot--active"
                    : "")
                }
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to scene: ${scene.label}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoryReelIntro;