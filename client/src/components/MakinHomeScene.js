// src/components/MakinHomeScene.js
import React, { useState, useCallback, useEffect } from "react";
import "./MakinHomeScene.css";

/* =========================================================
   5 CORE DISCIPLINES (for reference + modal tags)
   ========================================================= */
// 1. Web & Software Engineering
// 2. Product & UX Design
// 3. Technical Problem Solving
// 4. Craft & Making (Ober Artisan Drums)
// 5. Story, Music & Creative Life

/* =========================================================
   HOTSPOT DEFINITIONS (WEB vs MOBILE)
   - All positions are in % of the image area.
   - You can tweak left/top/width/height any time.
   ========================================================= */

const WEB_HOTSPOTS = [
  {
    id: "feather",
    label: "Feather jacket · Photo & Video",
    layer: "dreamfeather",
    left: 10,
    top: 25,
    width: 14,
    height: 50,
  },
  {
    id: "monitor",
    label: "Computer monitor · Web & Software",
    layer: "web",
    left: 25,
    top: 28,
    width: 18,
    height: 20,
  },
  {
    id: "acoustic-guitar",
    label: "Acoustic guitar · Music & Audio",
    layer: "acoustic-guitar",
    left: 11.5,
    top: 32,
    width: 11.5,
    height: 44,
  },
  {
    id: "snare",
    label: "Custom snare drum · Craft & Making",
    layer: "drum",
    left: 18.5,
    top: 47,
    width: 15,
    height: 32,
  },
  {
    id: "camera",
    label: "Camera on the floor · Photo & Video",
    layer: "camera",
    left: 34,
    top: 66,
    width: 12,
    height: 18,
  },
  {
    id: "dog",
    label: "Studio dog · Story & Life",
    layer: "lucy", // 🐶 Lucy (dog)
    left: 43.5,
    top: 33,
    width: 18,
    height: 51,
  },
  {
    id: "orange-cat",
    label: "Studio kitten · Story & Life",
    layer: "sunny", // 🧡 Sunny (orange cat)
    left: 54,
    top: 60,
    width: 11,
    height: 25,
  },
  {
    id: "electric-guitar",
    label: "Electric guitar · Music & Audio",
    layer: "electric-guitar",
    left: 59,
    top: 36,
    width: 12,
    height: 37,
  },
  {
    id: "rubiks",
    label: "Rubik's cube in display · Problem Solving",
    layer: "rubiks",
    left: 73.5,
    top: 50,
    width: 15,
    height: 25,
  },
  {
    id: "printer",
    label: "3D printer · Craft & Making",
    layer: "3d",
    left: 72,
    top: 28,
    width: 18,
    height: 20,
  },
  {
    id: "top-cat",
    label: "Black & white cat on the printer · Story",
    layer: "freddie", // 🐈‍⬛ Freddie (black cat)
    left: 66,
    top: 15,
    width: 21,
    height: 20,
  },
  {
    id: "dan-chelsea",
    label: "Dan & Chelsea · Story & Life",
    layer: "danandchelsea",
    left: 55,
    top: 21,
    width: 16,
    height: 23,
  },
];

// For now mobile uses the same hotspot map.
// You can later tune the % separately if you export a different crop.
const MOBILE_HOTSPOTS = WEB_HOTSPOTS;

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

function getHotspots(variant) {
  return variant === "mobile" ? MOBILE_HOTSPOTS : WEB_HOTSPOTS;
}

/* =========================================================
   MODAL CONTENT PER HOTSPOT
   ========================================================= */

const HOTSPOT_DETAILS = {
  feather: {
    title: "Feather Jacket · Creative Direction",
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
    title: "The Monitor · Web & Software Engineering",
    disciplines: [
      "Web & Software Engineering",
      "Product & UX Design",
      "Technical Problem Solving",
    ],
    body: [
      `The monitor is where Ober Artisan Drums, the SoundLegend portal, and this portfolio live. 
      I design and ship full stacks: React front ends, Firebase backends, custom tooling for 
      artists, customers, and admins.`,
      `In practice that looks like: auth flows, portals, progress trackers, file uploads, secure 
      customer views, and custom business logic. Underneath the art there’s a very real system 
      that handles orders, projects, NFC verification, and artist experiences.`,
    ],
  },

  "acoustic-guitar": {
    title: "Acoustic Guitar · Musicality & Empathy",
    disciplines: [
      "Story, Music & Creative Life",
      "Product & UX Design",
    ],
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
    title: "Custom Snare Drum · Craft & Making",
    disciplines: [
      "Craft & Making (Ober Artisan Drums)",
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
    title: "Camera · Visual Systems & Documentation",
    disciplines: [
      "Product & UX Design",
      "Story, Music & Creative Life",
    ],
    body: [
      `The camera represents how I document work. I don’t just ship a feature or a drum and walk away — 
      I record the process, highlight the decisions, and give people a way to remember what went into it.`,
      `For teams this means clear demos, thoughtful screenshots, and narrative release notes — the kind 
      that help support, leadership, and future teammates understand not just what we built, but why.`,
    ],
  },

  dog: {
    title: "Lucy · Story & Life",
    disciplines: [
      "Story, Music & Creative Life",
    ],
    body: [
      `Lucy is the studio dog and the emotional center of the room. She’s there to remind me that 
      all of this — the code, the drums, the craft — is still about people, connection, and 
      the relationships around the work.`,
      `In teams I tend to be the person who cares about tone: how an error message feels, how a hard 
      conversation lands, and how we make sure the humans using our tools feel seen and not blamed.`,
    ],
  },

  "orange-cat": {
    title: "Sunny · Play & Curiosity",
    disciplines: [
      "Story, Music & Creative Life",
      "Technical Problem Solving",
    ],
    body: [
      `Sunny is the little spark of mischief in the scene — the reminder that curiosity matters. 
      Most of my favorite solutions started as “What if we just tried…?” moments that didn’t feel 
      big enough to be a project yet.`,
      `I like environments where it’s safe to follow that curiosity into prototypes, 
      tiny experiments, and “let’s just test it with one user” ideas.`,
    ],
  },

  "electric-guitar": {
    title: "Electric Guitar · Performance & Collaboration",
    disciplines: [
      "Story, Music & Creative Life",
      "Product & UX Design",
    ],
    body: [
      `The electric guitar is about performance under pressure. Live shows taught me how to stay present, 
      adapt, and deliver even when something goes sideways — a cable dies, a monitor cuts out, or the set 
      list changes mid-song.`,
      `On teams, that translates into handling deploy nights, debugging live issues, and keeping 
      customers calm while we quietly fix the real problem behind the scenes.`,
    ],
  },

  rubiks: {
    title: "Rubik’s Cube · Technical Problem Solving",
    disciplines: [
      "Technical Problem Solving",
      "Web & Software Engineering",
    ],
    body: [
      `The cube is my little altar to problem solving. I love breaking down messy, 
      real-world constraints into something we can actually reason about and solve.`,
      `In code this shows up as: refactors that simplify tangled logic, designing data models that 
      support the product roadmap, and building tools so future work gets easier instead of harder.`,
    ],
  },

  printer: {
    title: "3D Printer · Prototyping & Systems Thinking",
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
    title: "Freddie · Observation & Detail",
    disciplines: [
      "Product & UX Design",
      "Story, Music & Creative Life",
    ],
    body: [
      `Freddie is the quiet observer on top of the printer. In the studio he’s the one who sees everything 
      but never says much — which is pretty close to how I like to approach discovery and research.`,
      `Before I propose changes, I like to watch: how people actually use a tool, where they hesitate, 
      and where their body language changes. Then I reflect that back as clear, actionable design or 
      engineering work.`,
    ],
  },

  "dan-chelsea": {
    title: "Dan & Chelsea · Relationships & Resilience",
    disciplines: [
      "Story, Music & Creative Life",
    ],
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

/* =========================================================
   INFO MODAL COMPONENT
   ========================================================= */

function InfoModal({ open, onClose, title, disciplines, body }) {
  // lock scroll when modal is open
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
        <h2 className="mh-modal__title">{title}</h2>

        {disciplines && disciplines.length > 0 && (
          <div className="mh-modal__disciplines">
            {disciplines.map((d) => (
              <span key={d} className="mh-pill">
                {d}
              </span>
            ))}
          </div>
        )}

        {body && (
          <div className="mh-modal__body">
            {body.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        )}

        <div className="mh-modal__actions">
          <button
            type="button"
            className="mh-button mh-button--primary"
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
  const [activeHoverId, setActiveHoverId] = useState(null); // for highlight layer
  const [modalId, setModalId] = useState(null); // for info modal

  const hotspots = getHotspots(variant);
  const baseSrc = getBaseSrc(variant);

  const activeHotspot =
    hotspots.find((h) => h.id === activeHoverId) || null;
  const activeLayerSrc = activeHotspot
    ? getLayerSrc(activeHotspot.layer, variant)
    : null;

  const modalDetails = modalId ? HOTSPOT_DETAILS[modalId] : null;

  const handleActivateHover = useCallback((id) => {
    setActiveHoverId(id);
  }, []);

  const handleClearHover = useCallback(() => {
    setActiveHoverId(null);
  }, []);

  const handleOpenModal = useCallback(
    (id) => {
      setModalId(id);
      setActiveHoverId(id);
    },
    []
  );

  const handleCloseModal = useCallback(() => {
    setModalId(null);
  }, []);

  return (
    <div className={`mh-scene mh-scene--${variant}`}>
      <div className="mh-scene__stage">
        {/* Base grayscale image */}
        <img
          src={baseSrc}
          alt="Creative studio scene with dog, cats, drums, guitars, camera, and 3D printer."
          className="mh-scene__image mh-scene__image--base"
          draggable={false}
        />

        {/* Single color layer, fades in/out */}
        {activeLayerSrc && (
          <img
            src={activeLayerSrc}
            alt=""
            aria-hidden="true"
            className="mh-scene__image mh-scene__image--layer mh-scene__image--layer-visible"
            draggable={false}
          />
        )}

        {/* Hotspots */}
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
            onMouseEnter={() => handleActivateHover(spot.id)}
            onMouseLeave={handleClearHover}
            onFocus={() => handleActivateHover(spot.id)}
            onBlur={handleClearHover}
            onClick={() => handleOpenModal(spot.id)}
          >
            <span className="mh-hotspot__label">{spot.label}</span>
            <span className="mh-hotspot__sr-only">{spot.label}</span>
          </button>
        ))}
      </div>

      {/* Info Modal */}
      <InfoModal
        open={!!modalDetails}
        onClose={handleCloseModal}
        title={modalDetails?.title}
        disciplines={modalDetails?.disciplines || []}
        body={modalDetails?.body || []}
      />
    </div>
  );
}