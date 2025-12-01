// src/components/MakinHomeScene.js
import React, { useState, useCallback, useEffect } from "react";
import "./MakinHomeScene.css";

/* =========================================================
   HOTSPOT DEFINITIONS (WEB vs MOBILE)
   ========================================================= */

const WEB_HOTSPOTS = [
  {
    id: "feather",
    label: "Feather Jacket",
    layer: "dreamfeather",
    left: 19,
    top: 3,
    width: 10,
    height: 36,
  },
  {
    id: "monitor",
    label: "Command Center",
    layer: "web",
    left: 27,
    top: 19,
    width: 13,
    height: 31.5,
  },
  {
    id: "acoustic-guitar",
    label: "Acoustic Guitar",
    layer: "acoustic-guitar",
    left: 15,
    top: 37,
    width: 10,
    height: 48,
  },
  {
    id: "snare",
    label: "Ober Artisan Snare",
    layer: "drum",
    left: 24,
    top: 57,
    width: 12,
    height: 30,
  },
  {
    id: "headphones",
    label: "Headphones",
    layer: "headphones",
    left: 66.5,
    top: 75,
    width: 8,
    height: 13,
  },
  {
    id: "midi-keyboard",
    label: "MIDI Keyboard",
    layer: "midi-keyboard",
    left: 33,
    top: 52,
    width: 12,
    height: 9,
  },
  {
    id: "camera",
    label: "Camera",
    layer: "camera",
    left: 35,
    top: 79,
    width: 8,
    height: 14,
  },
  {
    id: "dog",
    label: "Lucy",
    layer: "lucy",
    left: 44.5,
    top: 22,
    width: 11,
    height: 68,
  },
  {
    id: "orange-cat",
    label: "Sunny",
    layer: "sunny",
    left: 57,
    top: 75,
    width: 7.5,
    height: 23,
  },
  {
    id: "electric-guitar",
    label: "Electric Guitar",
    layer: "electric-guitar",
    left: 56.5,
    top: 22,
    width: 8,
    height: 57,
  },
  {
    id: "rubiks",
    label: "Rubik's Cube",
    layer: "rubiks",
    left: 68,
    top: 53,
    width: 11,
    height: 21,
  },
  {
    id: "printer",
    label: "3D Printer",
    layer: "3d",
    left: 65,
    top: 23,
    width: 17,
    height: 24,
  },
  {
    id: "top-cat",
    label: "Freddie",
    layer: "freddie",
    left: 68,
    top: 6,
    width: 11,
    height: 18,
  },
  {
    id: "dan-chelsea",
    label: "Dan & Chelsea",
    layer: "danandchelsea",
    left: 59.25,
    top: 4,
    width: 9,
    height: 18.75,
  },
];

/* ---------------------------------------------------------
   MOBILE HOTSPOTS
   --------------------------------------------------------- */

const MOBILE_HOTSPOTS = [
  {
    id: "feather",
    label: "Feather Jacket",
    layer: "dreamfeather",
    left: 8,
    top: 3,
    width: 30,
    height: 30,
  },
  {
    id: "monitor",
    label: "Command Center",
    layer: "web",
    left: 5,
    top: 30,
    width: 32,
    height: 17,
  },
  {
    id: "acoustic-guitar",
    label: "Acoustic Guitar",
    layer: "acoustic-guitar",
    left: 62,
    top: 48,
    width: 16,
    height: 30,
  },
  {
    id: "snare",
    label: "Ober Artisan Snare",
    layer: "drum",
    left: 8,
    top: 59,
    width: 28,
    height: 23,
  },
  {
    id: "headphones",
    label: "Headphones",
    layer: "headphones",
    left: 78,
    top: 89,
    width: 17,
    height: 11,
  },
  {
    id: "midi-keyboard",
    label: "MIDI Keyboard",
    layer: "midi-keyboard",
    left: 15,
    top: 48,
    width: 25,
    height: 8,
  },
  {
    id: "camera",
    label: "Camera",
    layer: "camera",
    left: 13,
    top: 82,
    width: 25,
    height: 12,
  },
  {
    id: "dog",
    label: "Lucy",
    layer: "lucy",
    left: 35,
    top: 28,
    width: 30,
    height: 60,
  },
  {
    id: "orange-cat",
    label: "Sunny",
    layer: "sunny",
    left: 59,
    top: 75,
    width: 20,
    height: 23,
  },
  {
    id: "electric-guitar",
    label: "Electric Guitar",
    layer: "electric-guitar",
    left: 73,
    top: 50,
    width: 20,
    height: 38,
  },
  {
    id: "rubiks",
    label: "Rubik's Cube",
    layer: "rubiks",
    left: 41,
    top: 85,
    width: 17,
    height: 14.5,
  },
  {
    id: "printer",
    label: "3D Printer",
    layer: "3d",
    left: 62,
    top: 30,
    width: 32,
    height: 20,
  },
  {
    id: "top-cat",
    label: "Freddie",
    layer: "freddie",
    left: 69,
    top: 2,
    width: 23,
    height: 29,
  },
  {
    id: "dan-chelsea",
    label: "Dan & Chelsea",
    layer: "danandchelsea",
    left: 42,
    top: 3,
    width: 26,
    height: 24,
  },
];

/* =========================================================
   IMAGE PATH HELPERS
   ========================================================= */

const BASE_ROOT = "/media/photo-layers";

function getSubfolder(variant) {
  return variant === "mobile" ? "mobile" : "web";
}

function getBaseSrc(variant) {
  const sub = getSubfolder(variant);
  return `${BASE_ROOT}/${sub}/blank.png`;
}

function getLayerSrc(layer, variant) {
  const sub = getSubfolder(variant);
  return `${BASE_ROOT}/${sub}/${layer}.png`;
}

function getFullColorSrc(variant) {
  const sub = getSubfolder(variant);
  return `${BASE_ROOT}/${sub}/full-color.png`;
}

function getHotspots(variant) {
  return variant === "mobile" ? MOBILE_HOTSPOTS : WEB_HOTSPOTS;
}

/* =========================================================
   MODAL CONTENT PER HOTSPOT
   ========================================================= */

const HOTSPOT_DETAILS = {
  feather: {
    title: "Feather Jacket",
    subtitle: "Creative Direction",
    emoji: "dreamfeather",
    disciplines: [
      "Story, Music & Creative Life",
      "Product & UX Design",
      "Technical Problem Solving",
    ],
    body: [
      `The feather jacket started as a prop and quietly turned into a design language. 
      It’s my playful “performance mode” signal — the same way a product team uses consistent iconography 
      or motion language to tell you what kind of moment you’re in.`,
      `It sits at the intersection of Story, Music & Creative Life and Product & UX Design: one small motif, 
      reused intentionally across photos, UI, and copy so the whole system feels like one coherent instrument.`,
    ],
  },
  monitor: {
    title: "Command Center",
    subtitle: "Web & Software Engineering",
    emoji: "web",
    disciplines: [
      "Web & Software Engineering",
      "Product & UX Design",
      "Technical Problem Solving",
    ],
    body: [
      `The command center is where Ober Artisan Drums, the SoundLegend portal, and this portfolio live. 
      It’s React frontends, Firebase backends, auth flows, portals, and internal tools all talking to each other.`,
      `Underneath the art there’s a very real system: clear data models, simple APIs, and a bias toward 
      shipping small, testable changes. This is Web & Software Engineering meeting Technical Problem Solving, 
      wrapped in Product & UX Design so it actually feels good to use.`,
    ],
  },
  "acoustic-guitar": {
    title: "Acoustic Guitar",
    subtitle: "Musicality & Empathy",
    emoji: "acoustic-guitar",
    disciplines: ["Story, Music & Creative Life", "Product & UX Design"],
    body: [
      `The acoustic guitar is where a lot of ideas start: sketching melodies, chasing chord shapes, and 
      listening for tension and release. It’s how I practice timing, dynamics, and space.`,
      `In product work, that maps straight into flows: when to ask for info, when to hold back, and how to 
      build to a satisfying “chorus” moment where the user knows exactly what just happened and why.`,
    ],
  },
  snare: {
    title: "Ober Artisan Snare",
    subtitle: "Craft & Making",
    emoji: "drum",
    disciplines: [
      "Craft & Making",
      "Technical Problem Solving",
      "Story, Music & Creative Life",
    ],
    body: [
      `Ober Artisan Drums is my long-running craft lab — custom snares that move from raw lumber to tuned 
      instrument with a full lifecycle, portal, and story.`,
      `Each build is product thinking you can hold: requirements, constraints, prototyping, QA, and support, all 
      documented in a way that also honors Story, Music & Creative Life. It keeps my Craft & Making and 
      Technical Problem Solving grounded in reality.`,
    ],
  },
  headphones: {
    title: "Studio Headphones",
    subtitle: "Active Listening & Mix Decisions",
    emoji: "headphones",
    disciplines: [
      "Story, Music & Creative Life",
      "Technical Problem Solving",
      "AI & Systems",
    ],
    body: [
      `The headphones are where everything gets honest. This is where Logic Pro sessions turn into real 
      mix decisions: EQ moves, compression, panning, and subtle automation that either serves the story 
      or gets in its way.`,
      `Active listening here is the same muscle I use in Technical Problem Solving and AI & Systems: 
      noticing what the system is actually doing, not what I hoped it was doing — then making the smallest 
      changes that unlock the most clarity for whoever’s “listening” on the other side.`,
    ],
  },
  "midi-keyboard": {
    title: "MIDI Keyboard",
    subtitle: "Blending Physical & Digital",
    emoji: "midi-keyboard",
    disciplines: [
      "Story, Music & Creative Life",
      "Web & Software Engineering",
      "AI & Systems",
    ],
    body: [
      `The MIDI keyboard is how I sketch scores, design soundscapes, and block out film cues — all inside 
      Logic Pro. It’s a physical interface driving a digital system, which is basically how I think about 
      most tools.`,
      `The same pattern shows up in Web & Software Engineering and AI & Systems: humans pressing a few 
      intuitive “keys,” and a lot of structured logic under the hood turning that into something powerful 
      and musical instead of overwhelming.`,
    ],
  },
  camera: {
    title: "Camera",
    subtitle: "Visual Systems & Documentation",
    emoji: "camera",
    disciplines: ["Product & UX Design", "Story, Music & Creative Life"],
    body: [
      `The camera is my documentation engine. I don’t just finish a drum or ship a feature and move on — 
      I capture the process, highlight decisions, and frame moments people will want to revisit later.`,
      `In product terms, this becomes clear release notes, narrative case studies, and visual walkthroughs 
      that help support, leadership, and future teammates understand not just what we built, but why it exists.`,
    ],
  },
  dog: {
    title: "Lucy Girl",
    subtitle: "Story & Life",
    emoji: "lucy",
    disciplines: ["Story, Music & Creative Life"],
    body: [
      `Lucy is the emotional center of the studio. She has zero opinions about React or rimshots — and that’s 
      the point. She keeps the space grounded in actual life, not just output.`,
      `On teams, I carry that same energy into how we talk to users and to each other: readable copy, kind 
      default tones, and feedback that remembers there’s a person on the other side of the screen.`,
    ],
  },
  "orange-cat": {
    title: "Sunny Cat",
    subtitle: "Play & Curiosity",
    emoji: "sunny",
    disciplines: ["Story, Music & Creative Life", "Technical Problem Solving"],
    body: [
      `Sunny is the little “what if” energy in the room — poking into corners, testing edges, and reminding 
      me that experiments don’t have to be big to be meaningful.`,
      `Most of my favorite product and engineering wins started this way: a small, curious prototype that 
      later turned into a core part of the system once we saw how real users reacted.`,
    ],
  },
  "electric-guitar": {
    title: "Electric Guitar",
    subtitle: "Performance & Collaboration",
    emoji: "electric-guitar",
    disciplines: ["Story, Music & Creative Life", "Product & UX Design"],
    body: [
      `The electric guitar lives in the higher-pressure moments: live sets, studio takes, and creative 
      decisions that happen in real time.`,
      `That same performance mindset shows up in deploy nights and debugging sessions. You keep your head, 
      listen to the band (or team), adapt on the fly, and still land the song — or the feature — in a way 
      the audience can trust.`,
    ],
  },
  rubiks: {
    title: "Rubik’s Cube",
    subtitle: "Technical Problem Solving",
    emoji: "rubiks",
    disciplines: ["Technical Problem Solving", "Web & Software Engineering"],
    body: [
      `The cube is my tiny shrine to constraints. Every side is a different color of requirement, and 
      the fun is in finding a sequence of moves that untangles the whole thing without ripping it apart.`,
      `In code, that looks like refactors that simplify logic, data models that support the roadmap, and 
      systems that are easier to extend next quarter than they were last quarter.`,
    ],
  },
  printer: {
    title: "3D Printer",
    subtitle: "Prototyping & Systems Thinking",
    emoji: "3d",
    disciplines: [
      "Web & Software Engineering",
      "Technical Problem Solving",
      "Craft & Making",
    ],
    body: [
      `The printer is how ideas turn into jigs, fixtures, and small parts that make complex work repeatable. 
      It’s rapid prototyping in literal plastic.`,
      `In software and AI & Systems, that’s internal tools, admin dashboards, and small utilities that 
      quietly save hours a week. I like building the scaffolding that lets teams move faster and safer.`,
    ],
  },
  "top-cat": {
    title: "Freddie",
    subtitle: "Observation & Detail",
    emoji: "freddie",
    disciplines: ["Product & UX Design", "Story, Music & Creative Life"],
    body: [
      `Freddie is the quiet observer perched above everything. He sees all the tiny movements and 
      rarely makes a sound.`,
      `That’s how I like to approach research and UX: watch first, notice where people hesitate or tense up, 
      and only then propose small, targeted changes that make the whole experience feel smoother.`,
    ],
  },
  "dan-chelsea": {
    title: "Wall Portrait",
    subtitle: "Foundation",
    emoji: "foundation",
    disciplines: ["Story, Music & Creative Life"],
    body: [
      `This frame is about the life around the work. Building a tech career and a boutique drum company 
      at the same time only works because of steady support, honest feedback, and people who know me 
      outside of any job title.`,
      `On teams, that shows up as long-term thinking: relationships over transactions, real conversations 
      over polite silence, and decisions that protect the humans behind the tools we’re shipping.`,
    ],
  },
};

/* 🔹 Collect all emoji keys so we can preload them */
const EMOJI_KEYS = Array.from(
  new Set(
    Object.values(HOTSPOT_DETAILS)
      .map((d) => d.emoji)
      .filter(Boolean)
  )
);

/* =========================================================
   INFO MODAL COMPONENT
   ========================================================= */

function InfoModal({ open, onClose, title, subtitle, body, emoji }) {
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous || "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="mh-modal-backdrop" onClick={onClose}>
      <div
        className="mh-modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mh-modal__header">
          <div className="mh-modal__header-text">
            <h2 className="mh-modal__title">{title}</h2>
          </div>
        </div>

        {emoji && (
          <div className="mh-modal__icon">
            <img src={`/media/emojis/${emoji}.png`} alt="" aria-hidden="true" />
          </div>
        )}

        {subtitle && <div className="mh-modal__subtitle">{subtitle}</div>}

        <div className="mh-modal__body">
          {body && body.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
        </div>

        <div className="mh-modal__actions">
          <button
            type="button"
            className="mh-button mh-button--ghost"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function MakinHomeScene({ variant = "desktop" }) {
  const [modalId, setModalId] = useState(null);
  const [checkedIds, setCheckedIds] = useState([]);

  const hotspots = getHotspots(variant);
  const baseSrc = getBaseSrc(variant);
  const fullColorSrc = getFullColorSrc(variant);

  const modalDetails = modalId ? HOTSPOT_DETAILS[modalId] : null;

  const allChecked =
    hotspots.length > 0 && checkedIds.length === hotspots.length;

  const handleHotspotClick = useCallback((id) => {
    setModalId(id);
  }, []);

  const handleCloseModal = useCallback(() => {
    if (!modalId) return;

    setCheckedIds((prev) => {
      if (prev.includes(modalId)) return prev;
      return [...prev, modalId];
    });

    setModalId(null);
  }, [modalId]);

  return (
    <div className={`mh-scene mh-scene--${variant}`}>
      {/* Hidden emoji preloader to avoid choppy modal icon load */}
      <div className="mh-emoji-preload" aria-hidden="true">
        {EMOJI_KEYS.map((key) => (
          <img key={key} src={`/media/emojis/${key}.png`} alt="" />
        ))}
      </div>

      <div className="mh-scene__stage">
        {/* Base grayscale image */}
        <img
          src={baseSrc}
          alt="Creative studio scene with dog, cats, drums, guitars, camera, and 3D printer."
          className="mh-scene__image mh-scene__image--base"
          draggable={false}
        />

        {/* Per-item color overlays: always rendered, fade in when checked */}
        {hotspots.map((spot) => {
          const src = getLayerSrc(spot.layer, variant);
          const visible = checkedIds.includes(spot.id);

          return (
            <img
              key={spot.id}
              src={src}
              alt=""
              aria-hidden="true"
              className={
                "mh-scene__image mh-scene__image--layer" +
                (visible ? " mh-scene__image--layer-visible" : "")
              }
              draggable={false}
            />
          );
        })}

        {/* Full-color "reward" image once everything is checked */}
        <img
          src={fullColorSrc}
          alt=""
          aria-hidden="true"
          className={
            "mh-scene__image mh-scene__image--full-color" +
            (allChecked ? " mh-scene__image--full-color-visible" : "")
          }
          draggable={false}
        />

        {/* Hotspots (clickable areas → open modal) */}
        {hotspots.map((spot) => (
          <button
            key={spot.id}
            type="button"
            className="mh-hotspot"
            style={{
              left: `${spot.left}%`,
              top: `${spot.top}%`,
              width: `${spot.width}%`,
              height: `${spot.height}%`,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleHotspotClick(spot.id);
            }}
          >
            <span className="mh-hotspot__sr-only">
              {HOTSPOT_DETAILS[spot.id]?.title || spot.label}
            </span>
          </button>
        ))}
      </div>

      {/* Checklist (shared for web + mobile views) */}
      <div className="mh-checklist">
        <div className="mh-checklist__header">
          <span className="mh-checklist__eyebrow">Hidden Story Checklist</span>
          <span className="mh-checklist__progress">
            {checkedIds.length}/{hotspots.length} unlocked
          </span>
        </div>
        {/* <p className="mh-checklist__hint">
          Find each item in the scene, tap it to open the story.
        </p> */}
        <ul className="mh-checklist__list">
          {hotspots.map((spot) => {
            const details = HOTSPOT_DETAILS[spot.id];
            const done = checkedIds.includes(spot.id);
            return (
              <li
                key={spot.id}
                className={
                  "mh-checklist__item" +
                  (done ? " mh-checklist__item--done" : "")
                }
              >
                <span className="mh-checklist__checkbox">
                  {done ? "✔" : ""}
                </span>
                <span className="mh-checklist__label">
                  {details?.title || spot.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Info Modal */}
      <InfoModal
        open={!!modalDetails}
        onClose={handleCloseModal}
        title={modalDetails?.title}
        subtitle={modalDetails?.subtitle}
        body={modalDetails?.body || []}
        emoji={modalDetails?.emoji}
      />
    </div>
  );
}