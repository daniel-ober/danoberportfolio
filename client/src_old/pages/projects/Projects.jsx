import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

/* ============================================================
   DISCIPLINE LABELS (5 CORE DISCIPLINES)
   ============================================================ */

const DISCIPLINE_LABELS = {
  web: "Web & Software Engineering",
  product: "Product & UX Design",
  problem: "Technical Problem Solving",
  craft: "Craft & Making (Ober Artisan Drums)",
  story: "Story, Music & Creative Life",
};

/* ============================================================
   PROJECT DATA
   - Each project can belong to multiple disciplines.
   ============================================================ */

const PROJECTS = [
  /* ===================== WEB & SOFTWARE HEAVY ===================== */
  {
    id: "ober-artisan-drums",
    title: "Ober Artisan Drums",
    disciplines: ["web", "product", "craft", "story"],
    role: "Solutions engineering · Full-stack dev · Product UX",
    summary:
      "Customer portal and admin suite for a boutique drum company: e-commerce, order flows, build tracking, project timelines, and SoundLegend artist access.",
    tags: ["React", "Firebase", "Stripe", "Admin dashboards"],
    detailPath: "/projects/ober-artisan-drums",
  },
  {
    id: "weathernest",
    title: "WeatherNest",
    disciplines: ["web", "product"],
    role: "Front-end dev · Product UX",
    summary:
      "A focused weather experience built around ‘should I go outside?’ — surfacing the right metrics, alerts, and time windows instead of raw data overload.",
    tags: ["React", "API integration", "UX"],
    detailPath: "/projects/weathernest",
  },
  {
    id: "ez-synth",
    title: "EZ-Synth",
    disciplines: ["web", "product", "story"],
    role: "Front-end dev · Interaction design",
    summary:
      "Browser-based mini synthesizer that favors playability over deep menus — single-screen interface for quick sound ideas and experiments.",
    tags: ["React", "Web Audio API"],
    detailPath: "/projects/ez-synth",
  },

  /* ===================== 3D / JIGS → CRAFT + PROBLEM SOLVING ====== */
  {
    id: "stave-drum-compression-jig",
    title: "Stave Drum CentraLock System",
    disciplines: ["craft", "problem"],
    role: "Fusion 360 · Functional jig design",
    summary:
      "A centering and compression jig that locks stave shells on-axis while truing and flattening both edges — built for repeatable, musical shells.",
    tags: ["Fusion 360", "PETG", "Shop tooling"],
    detailPath: "/projects/stave-drum-compression-jig",
  },
  {
    id: "yeti-mug-rail-holder",
    title: "Yeti Mug Rail Holder",
    disciplines: ["craft", "problem"],
    role: "Problem-solving design",
    summary:
      "Clip-on rail mount for a Yeti mug using multi-part prints and flexible inserts — my first real-world 3D design experiment that stuck.",
    tags: ["Rapid prototype", "PETG", "TPU insert"],
    detailPath: "/projects/yeti-mug-rail-holder",
  },
  {
    id: "acorn-necklace",
    title: "Acorn Necklace Pendant",
    disciplines: ["craft", "story"],
    role: "Concept · Print-ready model",
    summary:
      "Small-form decorative pendant designed for resin printing, exploring organic forms, clean geometry, and support-friendly shapes.",
    tags: ["Resin print", "Organic modeling"],
    detailPath: null, // case study not built yet
  },

  /* ===================== MUSIC & AUDIO → STORY LANE =============== */
  {
    id: "remote-session-drums",
    title: "Remote Session Drums",
    disciplines: ["story"],
    role: "Session drummer · Producer",
    summary:
      "Multi-track drum recordings for artists and producers — focused on feel, tone, and mix-friendly capture across rock, pop, and CCM.",
    tags: ["Rock / Pop / CCM", "Session work"],
    detailPath: "/projects/remote-session-drums",
  },
  {
    id: "sound-production-mixing",
    title: "Sound Production & Mixing",
    disciplines: ["story"],
    role: "Recording · Mixing · Sound design",
    summary:
      "From raw takes to polished mixes: drum capture, editing, sound design layers, and delivery-ready stems tailored for release.",
    tags: ["Mixing", "Sound design"],
    detailPath: "/projects/sound-production-mixing",
  },
  {
    id: "scoring-composition",
    title: "Scoring & Composition",
    disciplines: ["story"],
    role: "Composer · Arranger",
    summary:
      "Original cues and themes for film, narrative content, and brand stories — blending acoustic instrumentation with hybrid textures.",
    tags: ["Cinematic", "Thematic writing"],
    detailPath: "/projects/scoring-composition",
  },

  /* ===================== PHOTO / DRUM CRAFT ======================= */
  {
    id: "drum-product-photography",
    title: "Drum & Product Photography",
    disciplines: ["story", "product"],
    role: "Photographer · Retoucher",
    summary:
      "High-contrast, detail-forward imagery of handcrafted drums and studio gear for marketing, socials, and artist campaigns.",
    tags: ["Product", "Portraits"],
    detailPath: "/projects/drum-product-photography",
  },
  {
    id: "custom-stave-snare-builds",
    title: "Custom Stave Snare Builds",
    disciplines: ["craft", "story", "problem"],
    role: "Drum craftsman · Product designer",
    summary:
      "Hand-built SoundLegend and Heritage series snares — from raw lumber selection to shell design, finishes, tuning, and documentation.",
    tags: ["Shell design", "Finishing", "Tuning"],
    detailPath: "/projects/custom-stave-snare-builds",
  },
];

/* ============================================================
   FOCUS AREAS (5 CORE LANES + ALL)
   ============================================================ */

const FOCUS_AREAS = [
  {
    key: "all",
    label: "All disciplines",
    blurb:
      "A mix of engineering, product design, problem solving, craft, and music. Most of my favorite work lives at the overlap.",
    skills: [
      "Connecting engineering and user experience",
      "Owning projects end-to-end",
      "Balancing constraints with creativity",
      "Translating between technical and non-technical",
    ],
  },
  {
    key: "web",
    label: "Web & Software Engineering",
    blurb:
      "Portals, internal tools, and small apps that support real workflows — not just static sites.",
    skills: [
      "React SPAs & component systems",
      "Firebase (Auth, Firestore, Storage, Functions)",
      "Stripe checkout & webhooks",
      "Admin dashboards & internal tools",
      "Debugging and system reliability",
    ],
  },
  {
    key: "product",
    label: "Product & UX Design",
    blurb:
      "Shaping flows, information architecture, and interfaces so tools feel intuitive and purposeful.",
    skills: [
      "User flows & journey mapping",
      "Information architecture",
      "Interaction design & microcopy",
      "Case-study style documentation",
    ],
  },
  {
    key: "problem",
    label: "Technical Problem Solving",
    blurb:
      "Taking messy, real-world constraints and turning them into solvable systems, jigs, or code.",
    skills: [
      "System design & refactors",
      "Status & data modeling",
      "Tooling and automation",
      "Physical jigs for repeatability",
    ],
  },
  {
    key: "craft",
    label: "Craft & Making (Ober Artisan Drums)",
    blurb:
      "Hands-on drum building, tooling, and physical systems that I then mirror digitally in the portal.",
    skills: [
      "Stave shell construction & geometry",
      "Shop jigs & fixtures",
      "Finishing, voicing, and tuning",
      "Documenting builds for customers",
    ],
  },
  {
    key: "story",
    label: "Story, Music & Creative Life",
    blurb:
      "Drumming, scoring, photography, and narrative work that keeps everything anchored to real humans.",
    skills: [
      "Session drumming & production",
      "Scoring & composition",
      "Product & artist photography",
      "Story-first approach to features",
    ],
  },
];

export default function Projects() {
  // Default focus = web to highlight engineering/tech work
  const [activeFocus, setActiveFocus] = useState("web");

  const activeFocusMeta =
    FOCUS_AREAS.find((f) => f.key === activeFocus) || FOCUS_AREAS[0];

  const visibleProjects = useMemo(() => {
    if (activeFocus === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.disciplines.includes(activeFocus));
  }, [activeFocus]);

  return (
    <div className="projects">
      {/* HERO ---------------------------------------------------- */}
      <header className="projects__hero">
        <h1 className="projects__title">Work</h1>
        <p className="projects__subtitle">
          I build systems, tools, and experiences across five core disciplines:
          web/software engineering, product &amp; UX, technical problem
          solving, craft, and creative work. This page groups the projects I’m
          most proud of so you can see how those lanes connect.
        </p>

        <div className="projects__openness">
          <div>
            <h2>Open to</h2>
            <p>
              Full-time roles (solutions / software / web) · Hybrid or remote ·
              Select freelance and collaboration work.
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
          {visibleProjects.map((project) => {
            const primaryDisciplineKey = project.disciplines[0];
            const primaryDisciplineLabel =
              DISCIPLINE_LABELS[primaryDisciplineKey] || "";

            return (
              <article key={project.id} className="project-card">
                {primaryDisciplineLabel && (
                  <div className="project-card__eyebrow">
                    {primaryDisciplineLabel}
                  </div>
                )}
                <h2 className="project-card__title">{project.title}</h2>
                <p className="project-card__role">{project.role}</p>
                <p className="project-card__summary">{project.summary}</p>

                {project.tags && project.tags.length > 0 && (
                  <ul className="project-card__tags">
                    {project.tags.map((tag, idx) => (
                      <li key={idx} className="project-card__tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

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
            );
          })}
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