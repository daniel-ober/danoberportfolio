// src/components/StoryTimeline.jsx
import React, { useEffect, useRef } from "react";
import "./StoryTimeline.css";

// ---- 7 ERA SCENES ------------------------------------------

const SCENES = [
  {
    id: "era-1",
    eraLabel: "ERA 1 — FOUNDATIONS",
    title: "Foundations",
    lines: [
      "Your story begins with instinct, long before you had language for it.",
      "Curiosity wasn’t something you learned — it was something you ran on.",
      "Everything around you became a small experiment waiting for you to wake it up.",
    ],
  },
  {
    id: "era-2",
    eraLabel: "ERA 2 — LEARNING TO SEE",
    title: "Learning to See",
    lines: [
      "This is where you stopped just looking at things and started really seeing them.",
      "Light, shadow, depth, and detail became puzzles you couldn’t stop solving.",
      "You began noticing structure and form where others only saw surface.",
    ],
  },
  {
    id: "era-3",
    eraLabel: "ERA 3 — THE CALLING",
    title: "The Calling",
    lines: [
      "Somewhere between rhythm and repetition, you found your foundation.",
      "Drumming taught you timing, discipline, and the beauty of structured chaos.",
      "It was your first glimpse into how creativity and precision could live together.",
    ],
  },
  {
    id: "era-4",
    eraLabel: "ERA 4 — CRAFTING A VOICE",
    title: "Crafting a Voice",
    lines: [
      "Creation shifted the moment you started shaping sound instead of just hearing it.",
      "Recording and producing became another instrument — another way to think.",
      "This era sharpened your taste and gave your craft direction.",
    ],
  },
  {
    id: "era-5",
    eraLabel: "ERA 5 — THE MULTIDISCIPLINARY SHIFT",
    title: "The Multidisciplinary Shift",
    lines: [
      "Things changed the moment all your skills started talking to each other.",
      "Music, engineering, craft, and design finally shared the same table.",
      "You realized your advantage wasn’t choosing one path — it was weaving many.",
    ],
  },
  {
    id: "era-6",
    eraLabel: "ERA 6 — SYSTEMS & STORYTELLING",
    title: "Systems & Storytelling",
    lines: [
      "You began treating every project like a world — not just a task.",
      "Systems became the way you organized ideas; storytelling became the way you connected them.",
      "From here, your work stopped being output and started becoming identity.",
    ],
  },
  {
    id: "era-7",
    eraLabel: "ERA 7 — THE POLYRHYTHMIC CRAFTSMAN",
    title: "The Polyrhythmic Craftsman",
    lines: [
      "This is where everything you are finally clicks into place.",
      "The studio, the workshop, the printer, the code — all operating as one instrument.",
      "You didn’t become a generalist. You became a system of disciplines working in harmony.",
    ],
  },
];

// ---- SINGLE SCENE COMPONENT --------------------------------

function StoryScene({ scene }) {
  return (
    <section className="story-scene" data-scene-id={scene.id}>
      <div className="story-content">
        <div className="story-era-label">{scene.eraLabel}</div>
        <h2 className="story-era-title">{scene.title}</h2>
        {scene.lines.map((line, idx) => (
          <p key={idx} className="story-era-body">
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}

// ---- TIMELINE WRAPPER --------------------------------------

export default function StoryTimeline() {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const scenes = Array.from(root.querySelectorAll(".story-scene"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.35, // roughly when the scene is “in the middle” of view
      }
    );

    scenes.forEach((scene) => observer.observe(scene));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="story-timeline" ref={containerRef}>
      {SCENES.map((scene) => (
        <StoryScene key={scene.id} scene={scene} />
      ))}
    </div>
  );
}