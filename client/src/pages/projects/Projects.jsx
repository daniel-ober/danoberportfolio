// src/pages/projects/Projects.jsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

/* ============================================================
   PROJECT DATA
   ============================================================ */

const PROJECTS = [
  /* ===================== WEB & SOFTWARE ===================== */
  {
    id: "ober-artisan-drums",
    title: "Ober Artisan Drums",
    category: "web",
    categoryLabel: "Web & Software",
    role: "Solutions engineering · Full-stack dev · Product UX",
    summary:
      "Customer portal and admin suite for a boutique drum company: e-commerce, order flows, build tracking, project timelines, and SoundLegend artist access.",
    tags: ["React", "Firebase", "Stripe", "Admin dashboards"],
    detailPath: "/projects/ober-artisan-drums",
  },
  {
    id: "weathernest",
    title: "WeatherNest",
    category: "web",
    categoryLabel: "Web & Software",
    role: "Front-end dev · Product UX",
    summary:
      "A focused weather experience built around ‘should I go outside?’ — surfacing the right metrics, alerts, and time windows instead of raw data overload.",
    tags: ["React", "API integration", "UX"],
    detailPath: "/projects/weathernest",
  },
  {
    id: "ez-synth",
    title: "EZ-Synth",
    category: "web",
    categoryLabel: "Web & Software",
    role: "Front-end dev · Interaction design",
    summary:
      "Browser-based mini synthesizer that favors playability over deep menus — single-screen interface for quick sound ideas and experiments.",
    tags: ["React", "Web Audio API"],
    detailPath: "/projects/ez-synth",
  },

  /* ===================== 3D DESIGN & PRINTING ===================== */
  {
    id: "stave-drum-compression-jig",
    title: "Stave Drum CentraLock System",
    category: "3d",
    categoryLabel: "3D Design & Printing",
    role: "Fusion 360 · Functional jig design",
    summary:
      "A centering and compression jig that locks stave shells on-axis while truing and flattening both edges — built for repeatable, musical shells.",
    tags: ["Fusion 360", "PETG", "Shop tooling"],
    detailPath: "/projects/stave-drum-compression-jig",
  },
  {
    id: "yeti-mug-rail-holder",
    title: "Yeti Mug Rail Holder",
    category: "3d",
    categoryLabel: "3D Design & Printing",
    role: "Problem-solving design",
    summary:
      "Clip-on rail mount for a Yeti mug using multi-part prints and flexible inserts — my first real-world 3D design experiment that stuck.",
    tags: ["Rapid prototype", "PETG", "TPU insert"],
    detailPath: "/projects/yeti-mug-rail-holder",
  },
  {
    id: "acorn-necklace",
    title: "Acorn Necklace Pendant",
    category: "3d",
    categoryLabel: "3D Design & Printing",
    role: "Concept · Print-ready model",
    summary:
      "Small-form decorative pendant designed for resin printing, exploring organic forms, clean geometry, and support-friendly shapes.",
    tags: ["Resin print", "Organic modeling"],
    detailPath: null, // case study not built yet
  },

  /* ===================== MUSIC & AUDIO ===================== */
  {
    id: "remote-session-drums",
    title: "Remote Session Drums",
    category: "music",
    categoryLabel: "Music & Audio",
    role: "Session drummer · Producer",
    summary:
      "Multi-track drum recordings for artists and producers — focused on feel, tone, and mix-friendly capture across rock, pop, and CCM.",
    tags: ["Rock / Pop / CCM", "Session work"],
    detailPath: "/projects/remote-session-drums",
  },
  {
    id: "sound-production-mixing",
    title: "Sound Production & Mixing",
    category: "music",
    categoryLabel: "Music & Audio",
    role: "Recording · Mixing · Sound design",
    summary:
      "From raw takes to polished mixes: drum capture, editing, sound design layers, and delivery-ready stems tailored for release.",
    tags: ["Mixing", "Sound design"],
    detailPath: "/projects/sound-production-mixing",
  },
  {
    id: "scoring-composition",
    title: "Scoring & Composition",
    category: "music",
    categoryLabel: "Music & Audio",
    role: "Composer · Arranger",
    summary:
      "Original cues and themes for film, narrative content, and brand stories — blending acoustic instrumentation with hybrid textures.",
    tags: ["Cinematic", "Thematic writing"],
    detailPath: "/projects/scoring-composition",
  },

  /* ===================== PHOTOGRAPHY & CRAFT ===================== */
  {
    id: "drum-product-photography",
    title: "Drum & Product Photography",
    category: "photo",
    categoryLabel: "Photography",
    role: "Photographer · Retoucher",
    summary:
      "High-contrast, detail-forward imagery of handcrafted drums and studio gear for marketing, socials, and artist campaigns.",
    tags: ["Product", "Portraits"],
    detailPath: "/projects/drum-product-photography",
  },
  {
    id: "custom-stave-snare-builds",
    title: "Custom Stave Snare Builds",
    category: "drums",
    categoryLabel: "Drum Craft",
    role: "Drum craftsman · Product designer",
    summary:
      "Hand-built SoundLegend and Heritage series snares — from raw lumber selection to shell design, finishes, tuning, and documentation.",
    tags: ["Shell design", "Finishing", "Tuning"],
    detailPath: "/projects/custom-stave-snare-builds",
  },
];

/* ============================================================
   FOCUS AREAS
   ============================================================ */

const FOCUS_AREAS = [
  {
    key: "all",
    label: "All work",
    blurb:
      "A mix of software, systems, 3D design, drum craft, and audio. Most of my favorite projects sit at the intersection of these disciplines.",
    skills: [
      "Full-stack web apps",
      "Customer & admin portals",
      "Music & audio production",
      "3D jigs & shop tooling",
      "Drum design & documentation",
    ],
  },
  {
    key: "web",
    label: "Web & Software",
    blurb:
      "I design and build portals, internal tools, and small apps that support real workflows — not just static sites.",
    skills: [
      "React SPAs & component systems",
      "Firebase (Auth, Firestore, Storage, Functions)",
      "Stripe checkout & webhooks",
      "Admin dashboards & internal tools",
      "System architecture & debugging",
    ],
  },
  {
    key: "3d",
    label: "3D Design & Printing",
    blurb:
      "Functional parts that make the drum shop more accurate, repeatable, and pleasant to work in.",
    skills: [
      "Fusion 360 parametric modeling",
      "PETG & TPU printing for real load",
      "Shop jigs & fixtures",
      "Multi-part assemblies & inserts",
    ],
  },
  {
    key: "music",
    label: "Music & Audio",
    blurb:
      "Session drumming, production, and scoring — with an emphasis on pocket, tone, and storytelling.",
    skills: [
      "Remote drum sessions",
      "Drum recording & editing",
      "Hybrid mix workflows",
      "Film / cue scoring",
      "Sound design layers",
    ],
  },
  {
    key: "photo",
    label: "Photography",
    blurb:
      "Product and drum photography that shows the detail, texture, and personality of each build.",
    skills: [
      "Product & detail shots",
      "Artist portraits",
      "Brand-consistent color & contrast",
    ],
  },
  {
    key: "drums",
    label: "Drum Craft",
    blurb:
      "Custom stave snares built from raw lumber — documented end-to-end in the same systems I design.",
    skills: [
      "Stave shell construction",
      "Edge work & snare beds",
      "Torch-tuning & voicing",
      "Finish work & protection",
      "Legacy-style documentation",
    ],
  },
];

export default function Projects() {
  const [activeFocus, setActiveFocus] = useState("all");

  const activeFocusMeta =
    FOCUS_AREAS.find((f) => f.key === activeFocus) || FOCUS_AREAS[0];

  const visibleProjects = useMemo(() => {
    if (activeFocus === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeFocus);
  }, [activeFocus]);

  return (
    <div className="projects">
      {/* HERO ---------------------------------------------------- */}
      <header className="projects__hero">
        <h1 className="projects__title">Work</h1>
        <p className="projects__subtitle">
          I build systems, tools, and experiences across web/software, drum
          craft, audio, and 3D design. This page groups that work by focus area
          so you can see both the skills and where they’ve been used.
        </p>

        <div className="projects__openness">
          <div>
            <h2>Open to</h2>
            <p>
              Full-time roles (solutions / software / web) · Hybrid or remote ·
              Select freelance collaborations.
            </p>
          </div>
        </div>
      </header>

      {/* FOCUS TABS --------------------------------------------- */}
      <div className="projects__filters">
        {FOCUS_AREAS.map((focus) => (
          <button
            key={focus.key}
            type="button"
            className={
              activeFocus === focus.key
                ? "projects__filter projects__filter--active"
                : "projects__filter"
            }
            onClick={() => setActiveFocus(focus.key)}
          >
            {focus.label}
          </button>
        ))}
      </div>

      {/* LAYOUT: FOCUS PANEL + PROJECT GRID ---------------------- */}
      <section className="projects__layout">
        <aside className="projects__focus-panel">
          <div className="projects__focus-panel-inner">
            <h2 className="projects__focus-title">
              {activeFocusMeta.label}
            </h2>
            <p className="projects__focus-blurb">{activeFocusMeta.blurb}</p>

            {activeFocusMeta.skills && (
              <>
                <h3 className="projects__focus-subtitle">Focus & skills</h3>
                <ul className="projects__focus-list">
                  {activeFocusMeta.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </aside>

        <div className="projects__grid">
          {visibleProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__eyebrow">
                {project.categoryLabel}
              </div>
              <h2 className="project-card__title">{project.title}</h2>
              <p className="project-card__role">{project.role}</p>
              <p className="project-card__summary">{project.summary}</p>

              <ul className="project-card__tags">
                {project.tags.map((tag, idx) => (
                  <li key={idx} className="project-card__tag">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="project-card__footer">
                {project.detailPath ? (
                  <Link
                    to={project.detailPath}
                    className="project-card__link"
                  >
                    View case study →
                  </Link>
                ) : (
                  <span className="project-card__status">
                    Case study coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER -------------------------------------------------- */}
      <footer className="projects__footer">
        <p>
          Need something similar to one of these projects, or a blend of a few?{" "}
          <a href="/contact">Let’s talk.</a>
        </p>
      </footer>
    </div>
  );
}