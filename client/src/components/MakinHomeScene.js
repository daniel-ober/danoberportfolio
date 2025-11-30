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
    left: 13,
    top: 3,
    width: 14,
    height: 36,
  },
  {
    id: "monitor",
    label: "Command Center",
    layer: "web",
    left: 25,
    top: 19,
    width: 15,
    height: 31.5,
  },
  {
    id: "acoustic-guitar",
    label: "Acoustic Guitar",
    layer: "acoustic-guitar",
    left: 12,
    top: 37,
    width: 10,
    height: 48,
  },
  {
    id: "snare",
    label: "Ober Artisan Snare",
    layer: "drum",
    left: 21,
    top: 57,
    width: 14,
    height: 30,
  },
  {
    id: "camera",
    label: "Camera",
    layer: "camera",
    left: 33.5,
    top: 79,
    width: 8.75,
    height: 14,
  },
  {
    id: "dog",
    label: "Lucy",
    layer: "lucy",
    left: 43,
    top: 22,
    width: 14,
    height: 68,
  },
  {
    id: "orange-cat",
    label: "Sunny",
    layer: "sunny",
    left: 58,
    top: 75,
    width: 10,
    height: 23,
  },
  {
    id: "electric-guitar",
    label: "Electric Guitar",
    layer: "electric-guitar",
    left: 56.5,
    top: 22,
    width: 10,
    height: 57,
  },
  {
    id: "rubiks",
    label: "Rubik's Cube",
    layer: "rubiks",
    left: 70,
    top: 53,
    width: 12,
    height: 22,
  },
  {
    id: "printer",
    label: "3D Printer",
    layer: "3d",
    left: 67,
    top: 23,
    width: 17.75,
    height: 24,
  },
  {
    id: "top-cat",
    label: "Freddie",
    layer: "freddie",
    left: 70,
    top: 6,
    width: 11,
    height: 18,
  },
  {
    id: "dan-chelsea",
    label: "Dan & Chelsea",
    layer: "danandchelsea",
    left: 60.25,
    top: 4,
    width: 9,
    height: 18.5,
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
    height: 28,
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
    left: 72,
    top: 45,
    width: 20,
    height: 45,
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
      I use it in photos, video frames, and illustration as a visual cue for “performance mode” — 
      the same way a product team uses consistent iconography or motion language.`,
      `For teams, this is how I like to work: build a small, distinctive element and let it 
      carry through systems — from visuals to copy to experience. It’s branding, but also 
      information architecture for the emotions you want people to feel.`,
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
      I design and ship full stacks: React front ends, Firebase backends, custom tooling for 
      artists, customers, and admins.`,
      `In practice that looks like: auth flows, portals, progress trackers, file uploads, secure 
      customer views, and custom business logic. Underneath the art there’s a very real system 
      that handles orders, projects, NFC verification, and artist experiences.`,
    ],
  },
  "acoustic-guitar": {
    title: "Acoustic Guitar",
    subtitle: "Musicality & Empathy",
    emoji: "acoustic-guitar",
    disciplines: ["Story, Music & Creative Life", "Product & UX Design"],
    body: [
      `Music has always been how I listen first and speak second. Playing and writing music forces me 
      to think in phrases, tension and release, and dynamics — exactly how I like to design flows 
      and interfaces.`,
      `When I’m collaborating with teams, that same musical mindset shows up as empathy for timing: 
      when to lead, when to accompany, when to leave space, and how to bring everything back to a 
      strong, memorable chorus.`,
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
      `Ober Artisan Drums is my long-running passion project — a boutique snare company where I design, 
      build, document, and ship one-of-a-kind drums from raw lumber to finished instrument.`,
      `Every shell has a build portal, a lifecycle, audio analysis, and a story. It’s equal parts 
      woodworking, acoustics, UX design, and support. I treat each drum like a product launch with 
      a customer at the center.`,
    ],
  },
  camera: {
    title: "Camera",
    subtitle: "Visual Systems & Documentation",
    emoji: "camera",
    disciplines: ["Product & UX Design", "Story, Music & Creative Life"],
    body: [
      `The camera represents how I document work. I don’t just ship a feature or a drum and walk away — 
      I record the process, highlight the decisions, and give people a way to remember what went into it.`,
      `For teams this means clear demos, thoughtful screenshots, and narrative release notes — the kind 
      that help support, leadership, and future teammates understand not just what we built, but why.`,
    ],
  },
  dog: {
    title: "Lucy Girl",
    subtitle: "Story & Life",
    emoji: "lucy",
    disciplines: ["Story, Music & Creative Life"],
    body: [
      `Lucy is the studio dog and the emotional center of the room. She’s there to remind me that 
      all of this — the code, the drums, the craft — is still about people, connection, and 
      the relationships around the work.`,
      `In teams I tend to be the person who cares about tone: how an error message feels, how a hard 
      conversation lands, and how we make sure the humans using our tools feel seen and not blamed.`,
    ],
  },
  "orange-cat": {
    title: "Sunny Cat",
    subtitle: "Curiosity",
    emoji: "sunny",
    disciplines: ["Story, Music & Creative Life", "Technical Problem Solving"],
    body: [
      `Sunny is the little spark of mischief in the scene — the reminder that curiosity matters. 
      Most of my favorite solutions started as “What if we just tried…?” moments that didn’t feel 
      big enough to be a project yet.`,
      `I like environments where it’s safe to follow that curiosity into prototypes, 
      tiny experiments, and “let’s just test it with one user” ideas.`,
    ],
  },
  "electric-guitar": {
    title: "Electric Guitar",
    subtitle: "Performance & Collaboration",
    emoji: "electric-guitar",
    disciplines: ["Story, Music & Creative Life", "Product & UX Design"],
    body: [
      `The electric guitar is about performance under pressure. Live shows taught me how to stay present, 
      adapt, and deliver even when something goes sideways — a cable dies, a monitor cuts out, or the set 
      list changes mid-song.`,
      `On teams, that translates into handling deploy nights, debugging live issues, and keeping 
      customers calm while we quietly fix the real problem behind the scenes.`,
    ],
  },
  rubiks: {
    title: "Rubik’s Cube (In A Cube)",
    subtitle: "Technical Problem Solving",
    emoji: "rubiks",
    disciplines: ["Technical Problem Solving", "Web & Software Engineering"],
    body: [
      `The cube is my little altar to problem solving. I love breaking down messy, 
      real-world constraints into something we can actually reason about and solve.`,
      `In code this shows up as: refactors that simplify tangled logic, designing data models that 
      support the product roadmap, and building tools so future work gets easier instead of harder.`,
    ],
  },
  printer: {
    title: "3D Printer",
    subtitle: "Prototyping & Systems Thinking",
    emoji: "3d",
    disciplines: [
      "Web & Software Engineering",
      "Technical Problem Solving",
      "Craft & Making (Ober Artisan Drums)",
    ],
    body: [
      `The printer stands for rapid prototyping. In the drum shop that’s jigs, fixtures, and small 
      3D-printed parts that make complex processes repeatable.`,
      `In software it’s internal tools, admin dashboards, and one-off utilities that unlock bigger ideas. 
      I like building the scaffolding that lets teams move faster and safer.`,
    ],
  },
  "top-cat": {
    title: "Freddie",
    subtitle: "Observation & Detail",
    emoji: "freddie",
    disciplines: ["Product & UX Design", "Story, Music & Creative Life"],
    body: [
      `Freddie is the quiet observer on top of the printer. In the studio he’s the one who sees everything 
      but never says much — which is pretty close to how I like to approach discovery and research.`,
      `Before I propose changes, I like to watch: how people actually use a tool, where they hesitate, 
      and where their body language changes. Then I reflect that back as clear, actionable design or 
      engineering work.`,
    ],
  },
  "dan-chelsea": {
    title: "Wall Portrait",
    subtitle: "Foundation",
    emoji: "foundation",
    disciplines: ["Story, Music & Creative Life"],
    body: [
      `This frame is about the life outside the work. Building a career in tech and a boutique drum 
      business at the same time has only been possible because of real support and honest feedback 
      from the people closest to me.`,
      `In a team setting, I carry that same energy into how I collaborate: straightforward, caring, and 
      willing to have real conversations instead of polite silence. I care a lot about trust and 
      long-term relationships.`,
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

  // when modal closes, mark that hotspot as "checked" for the checklist
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

        {/* Hotspots (clickable areas only → open modal directly) */}
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
        <p className="mh-checklist__hint">
          Find each item in the scene, tap it to open the story.
        </p>
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