// client/src/pages/ProjectsIndex.jsx
import React, { useMemo, useState } from "react";
import { DISCIPLINES } from "../config/disciplines";
import "./ProjectsIndex.css";

/**
 * Temporary project data.
 * You can replace/extend this with real content later,
 * keeping the same shape + disciplineKeys.
 */
const PROJECTS = [
  {
    id: "soundlegend-portal",
    name: "SoundLegend Artist Portal",
    role: "Full-stack builder (solo)",
    summary:
      "Custom drum lifecycle portal: admin tools, customer progress view, media vault, and NFC-backed authenticity flow.",
    disciplines: ["web", "product", "problem", "craft", "story", "ai"],
    spotlight: true,
    era: "The Polymath Craftsman",
    links: {
      caseStudy: null,
      live: null,
      code: null,
    },
    tags: ["React", "Firebase", "Stripe", "NFC", "Admin tools"],
  },
  {
    id: "ober-store",
    name: "Ober Artisan Storefront",
    role: "Engineer, product, photographer",
    summary:
      "E-commerce storefront for custom snare lines, built around story-driven product pages instead of generic SKU grids.",
    disciplines: ["web", "product", "story"],
    spotlight: true,
    era: "Building a World Around One Instrument",
    links: {
      caseStudy: null,
      live: "https://oberartisandrums.com",
      code: null,
    },
    tags: ["React", "Firebase", "Stripe", "Content design"],
  },
  {
    id: "admin-workflow",
    name: "Drum Build Admin Workflow",
    role: "Systems designer & engineer",
    summary:
      "Drag-and-drop admin board for orders, SoundLegend requests, and risk alerts tied to a ten-phase drum build lifecycle.",
    disciplines: ["web", "product", "problem", "ai"],
    spotlight: true,
    era: "Reshaping Operations",
    links: {
      caseStudy: null,
      live: null,
      code: null,
    },
    tags: ["React", "Firestore", "DnD", "Status systems"],
  },
  {
    id: "stave-tooling",
    name: "Stave Shell Tooling & Jigs",
    role: "Maker & process designer",
    summary:
      "Compression rigs, router sleds, and repeatable processes for handbuilt stave shells — documented like software.",
    disciplines: ["craft", "problem", "story"],
    spotlight: false,
    era: "The Maker Season",
    links: {
      caseStudy: null,
      live: null,
      code: null,
    },
    tags: ["Jigs", "CAD/Fusion", "Process docs"],
  },
  {
    id: "motionsynth",
    name: "MotionSynth Lab",
    role: "Engineer, sound designer",
    summary:
      "A browser-based polyrhythmic synth playground tying ratios, motion, and sound design into an interactive lab.",
    disciplines: ["web", "product", "story", "ai"],
    spotlight: false,
    era: "Polyrhythmic Experiments",
    links: {
      caseStudy: null,
      live: null,
      code: null,
    },
    tags: ["Tone.js", "React", "Audio UX"],
  },
  {
    id: "legacy-vault",
    name: "Legacy Vault Concept",
    role: "Product strategist & storyteller",
    summary:
      "A long-view concept where each instrument has a living page: specs, media, owner notes, and future updates over time.",
    disciplines: ["product", "story", "craft"],
    spotlight: false,
    era: "Designing for 10+ Years",
    links: {
      caseStudy: null,
      live: null,
      code: null,
    },
    tags: ["Product thinking", "Narrative UX"],
  },
];

export default function ProjectsIndex() {
  const [activeDiscipline, setActiveDiscipline] = useState("all");

  const activeDisciplineObj =
    activeDiscipline === "all"
      ? null
      : DISCIPLINES.find((d) => d.key === activeDiscipline) || null;

  const filteredProjects = useMemo(() => {
    if (activeDiscipline === "all") return PROJECTS;
    return PROJECTS.filter((p) =>
      p.disciplines.includes(activeDiscipline)
    );
  }, [activeDiscipline]);

  const spotlightProjects = filteredProjects.filter((p) => p.spotlight);
  const nonSpotlightProjects = filteredProjects.filter((p) => !p.spotlight);

  return (
    <main className="projects-page">
      {/* HERO */}
      <section className="projects-hero">
        <div className="projects-hero__eyebrow">The Work</div>
        <h1 className="projects-hero__title">
          Projects Across the <span>Polyrhythmic Stack</span>
        </h1>
        <p className="projects-hero__body">
          This isn&apos;t a random pile of projects. Each one sits at a
          different intersection of engineering, product, systems, craft, story,
          and AI. Use the discipline filter to see the work through the lens
          you care about most.
        </p>
      </section>

      {/* DISCIPLINE FILTER BAR */}
      <section className="projects-filter">
        <header className="projects-filter__header">
          <h2 className="projects-filter__title">View by discipline</h2>
          <p className="projects-filter__subtitle">
            Toggle a discipline to see where that rhythm leads the work. You can
            start with your world — then notice how the others quietly support
            it.
          </p>
        </header>

        <div className="projects-filter__chips">
          <button
            type="button"
            className={
              "projects-chip" +
              (activeDiscipline === "all"
                ? " projects-chip--active"
                : "")
            }
            onClick={() => setActiveDiscipline("all")}
          >
            <span className="projects-chip__dot projects-chip__dot--all" />
            All disciplines
          </button>

          {DISCIPLINES.map((d) => {
            const selected = activeDiscipline === d.key;
            return (
              <button
                key={d.key}
                type="button"
                className={
                  "projects-chip" +
                  (selected ? " projects-chip--active" : "")
                }
                style={
                  selected
                    ? {
                        borderColor: d.color + "dd",
                        boxShadow: `0 0 0 1px ${d.color}55, 0 12px 30px rgba(15,23,42,0.95)`,
                      }
                    : undefined
                }
                onClick={() => setActiveDiscipline(d.key)}
              >
                <span
                  className="projects-chip__dot"
                  style={{ backgroundColor: d.color }}
                />
                {d.chipLabel}
              </button>
            );
          })}
        </div>

        {activeDisciplineObj && (
          <div className="projects-filter__legend">
            <div
              className="projects-filter__legend-pill"
              style={{ borderColor: activeDisciplineObj.color }}
            >
              <img
                src={activeDisciplineObj.iconSrc}
                alt={activeDisciplineObj.legendLabel}
                className="projects-filter__legend-icon"
              />
              <div className="projects-filter__legend-text">
                <span className="projects-filter__legend-label">
                  {activeDisciplineObj.legendLabel}
                </span>
                <span className="projects-filter__legend-hint">
                  Showing projects where this discipline plays a leading role.
                </span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* SPOTLIGHT RAIL */}
      {spotlightProjects.length > 0 && (
        <section className="projects-section projects-section--spotlight">
          <header className="projects-section__header">
            <h2 className="projects-section__title">
              Spotlight Projects
            </h2>
            <p className="projects-section__subtitle">
              These are the clearest examples of how I blend disciplines on
              real problems. They&apos;re a good place to start if you&apos;re
              skimming.
            </p>
          </header>

          <div className="projects-spotlight-grid">
            {spotlightProjects.map((p) => (
              <article key={p.id} className="project-card project-card--spotlight">
                <div className="project-card__header">
                  <div className="project-card__eyebrow">
                    {p.era || "Project"}
                  </div>
                  <h3 className="project-card__title">{p.name}</h3>
                  <p className="project-card__role">{p.role}</p>
                </div>

                <p className="project-card__summary">{p.summary}</p>

                <div className="project-card__disciplines">
                  {p.disciplines.map((key) => {
                    const d = DISCIPLINES.find((disc) => disc.key === key);
                    if (!d) return null;
                    return (
                      <span
                        key={d.key}
                        className="project-card__discipline-pill"
                        style={{ borderColor: d.color }}
                        title={d.legendLabel}
                      >
                        <span
                          className="project-card__discipline-dot"
                          style={{ backgroundColor: d.color }}
                        />
                        {d.chipLabel}
                      </span>
                    );
                  })}
                </div>

                {p.tags && p.tags.length > 0 && (
                  <ul className="project-card__tags">
                    {p.tags.map((tag) => (
                      <li key={tag} className="project-card__tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                {(p.links.caseStudy ||
                  p.links.live ||
                  p.links.code) && (
                  <div className="project-card__links">
                    {p.links.caseStudy && (
                      <a
                        href={p.links.caseStudy}
                        className="project-card__link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Case study
                      </a>
                    )}
                    {p.links.live && (
                      <a
                        href={p.links.live}
                        className="project-card__link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live site
                      </a>
                    )}
                    {p.links.code && (
                      <a
                        href={p.links.code}
                        className="project-card__link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Code
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ALL PROJECTS */}
      <section className="projects-section">
        <header className="projects-section__header">
          <h2 className="projects-section__title">
            All Projects &amp; Crafts
          </h2>
          <p className="projects-section__subtitle">
            A broader view of the work: software builds, shop tooling, audio
            experiments, and long-view concepts. Each card shows which
            disciplines are doing the heavy lifting.
          </p>
        </header>

        <div className="projects-grid">
          {nonSpotlightProjects.length === 0 && (
            <p className="projects-empty">
              No additional projects match this discipline filter yet. Try
              switching to a different discipline or back to{" "}
              <button
                type="button"
                className="projects-empty__reset"
                onClick={() => setActiveDiscipline("all")}
              >
                all disciplines
              </button>
              .
            </p>
          )}

          {nonSpotlightProjects.map((p) => (
            <article key={p.id} className="project-card">
              <div className="project-card__header">
                {p.era && (
                  <div className="project-card__eyebrow">{p.era}</div>
                )}
                <h3 className="project-card__title">{p.name}</h3>
                <p className="project-card__role">{p.role}</p>
              </div>

              <p className="project-card__summary">{p.summary}</p>

              <div className="project-card__disciplines">
                {p.disciplines.map((key) => {
                  const d = DISCIPLINES.find((disc) => disc.key === key);
                  if (!d) return null;
                  return (
                    <span
                      key={d.key}
                      className="project-card__discipline-pill"
                      style={{ borderColor: d.color }}
                      title={d.legendLabel}
                    >
                      <span
                        className="project-card__discipline-dot"
                        style={{ backgroundColor: d.color }}
                      />
                      {d.chipLabel}
                    </span>
                  );
                })}
              </div>

              {p.tags && p.tags.length > 0 && (
                <ul className="project-card__tags">
                  {p.tags.map((tag) => (
                    <li key={tag} className="project-card__tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}

              {(p.links.caseStudy ||
                p.links.live ||
                p.links.code) && (
                <div className="project-card__links">
                  {p.links.caseStudy && (
                    <a
                      href={p.links.caseStudy}
                      className="project-card__link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Case study
                    </a>
                  )}
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      className="project-card__link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live site
                    </a>
                  )}
                  {p.links.code && (
                    <a
                      href={p.links.code}
                      className="project-card__link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}