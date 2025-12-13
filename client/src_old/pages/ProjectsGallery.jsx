// client/src/pages/ProjectsGallery.jsx
import React, { useState, useMemo } from "react";
import "./ProjectsGallery.css";
import DisciplineIconRow, {
  DisciplineLegend,
} from "../components/DisciplineIcons";

const FILTERS = [
  { id: "all", label: "All projects" },
  { id: "web", label: "Web & systems" },
  { id: "drums", label: "Drums & craft" },
  { id: "sound", label: "Sound & story" },
  { id: "experiments", label: "Experiments & R&D" },
];

const PROJECTS = [
  {
    id: "soundlegend-portal",
    title: "SoundLegend portal & legacy tools",
    year: "2022–2025",
    category: "drums",
    disciplines: ["web", "product", "problem", "craft", "story", "ai"],
    summary:
      "Custom drum lifecycle: 10-phase build workflow, artist portal, admin tools, and NFC-ready legacy pages for each instrument.",
    tags: ["Custom drums", "Lifecycle tracking", "Artist experience"],
    link: null,
    status: "In active use",
  },
  {
    id: "ober-admin",
    title: "Ober admin dashboards",
    year: "2023–2025",
    category: "web",
    disciplines: ["web", "product", "problem", "craft"],
    summary:
      "Overview for orders, SoundLegend requests, risk alerts, and project phases — all driven from a single Firestore model.",
    tags: ["Admin tools", "Drag-and-drop flows", "Project tracking"],
    link: null,
    status: "In active use",
  },
  {
    id: "nfc-verification",
    title: "NFC verification prototype",
    year: "2024–2025",
    category: "experiments",
    disciplines: ["web", "problem", "craft", "ai"],
    summary:
      "NTAG 424–powered verification flow for custom drums: tap to confirm authenticity and open the instrument’s story.",
    tags: ["NTAG 424", "Web NFC", "Secure tokens"],
    link: null,
    status: "R&D in progress",
  },
  {
    id: "motionsynth",
    title: "MotionSynth",
    year: "2023–2024",
    category: "sound",
    disciplines: ["web", "product", "story"],
    summary:
      "A browser-based synth lab for exploring polyrhythms: motion-controlled voices, ratios, and performable presets.",
    tags: ["Tone.js", "React", "Polyrhythms"],
    link: null,
    status: "Prototype",
  },
  {
    id: "custom-drum-builder",
    title: "Custom drum builder",
    year: "2024",
    category: "drums",
    disciplines: ["web", "product", "craft"],
    summary:
      "SoundLegend configurator: choose size, veneer, acrylic inlays, hardware finish, and book a consultation around a generated mockup.",
    tags: ["Configuration UI", "Stripe-ready", "Pre-sale tooling"],
    link: null,
    status: "In active use",
  },
  {
    id: "dan-portfolio",
    title: "This portfolio (danober.com)",
    year: "2024–2025",
    category: "web",
    disciplines: ["web", "product", "story"],
    summary:
      "Polyrhythmic portfolio: introduction, timeline scenes, discipline blend tool, and project gallery built as one continuous story.",
    tags: ["Story-first UX", "React", "Design system"],
    link: null,
    status: "Live",
  },
  {
    id: "hula-gift",
    title: "HulaGift QR experiences",
    year: "2023",
    category: "experiments",
    disciplines: ["web", "story"],
    summary:
      "Festival QR “gift” pages with personalized notes, photos, and scavenger-style hints tied to physical objects.",
    tags: ["QR codes", "One-off experiences"],
    link: null,
    status: "Occasional use",
  },
  {
    id: "hot-chicken-heroes",
    title: "Hot Chicken Heroes",
    year: "2021",
    category: "experiments",
    disciplines: ["web", "product", "story"],
    summary:
      "Tiny rating app for Nashville hot chicken spots, built as a playground for API work and opinionated UI copy.",
    tags: ["Side project", "API integration"],
    link: null,
    status: "Archived",
  },
  {
    id: "doberpop",
    title: "DoberPop small-batch popcorn",
    year: "2019–2020",
    category: "drums",
    disciplines: ["product", "craft", "story"],
    summary:
      "Popcorn brand experiment: flavors, packaging, logo, and a simple ordering / tracking workflow.",
    tags: ["Brand world", "Ops experiment"],
    link: null,
    status: "Paused",
  },
];

function TagRow({ tags }) {
  if (!tags?.length) return null;
  return (
    <div className="projects-tags">
      {tags.map((tag, idx) => (
        <span key={idx} className="projects-tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return PROJECTS;
    if (activeFilter === "web") {
      return PROJECTS.filter(
        (p) => p.category === "web" || p.disciplines.includes("web")
      );
    }
    if (activeFilter === "drums") {
      return PROJECTS.filter(
        (p) => p.category === "drums" || p.disciplines.includes("craft")
      );
    }
    if (activeFilter === "sound") {
      return PROJECTS.filter(
        (p) => p.category === "sound" || p.disciplines.includes("story")
      );
    }
    if (activeFilter === "experiments") {
      return PROJECTS.filter((p) => p.category === "experiments");
    }
    return PROJECTS;
  }, [activeFilter]);

  return (
    <main className="projects-page">
      {/* HERO */}
      <section className="projects-hero">
        <p className="projects-hero__eyebrow">Projects</p>
        <h1 className="projects-hero__title">Projects & experiments.</h1>
        <p className="projects-hero__body">
          This is the wider gallery: shipped tools, active systems, and
          experiments that fed into the bigger case studies on the Results page.
          Each card shows a different blend of disciplines from the Polyrhythmic
          Method — some clean single-discipline work, and some full-stack,
          polyrhythmic builds.
        </p>
      </section>

      {/* DISCIPLINE KEY */}
      <section className="projects-key">
        <div className="projects-key__label">Discipline key</div>
        <DisciplineLegend />
      </section>

      {/* FILTER BAR */}
      <section className="projects-filters">
        <div className="projects-filters__label">Filter by lane</div>
        <div className="projects-filters__chips">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={
                activeFilter === f.id
                  ? "projects-filter projects-filter--active"
                  : "projects-filter"
              }
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="projects-grid">
        {filteredProjects.map((p) => (
          <article key={p.id} className="projects-card">
            <header className="projects-card__header">
              <div className="projects-card__meta">
                <span className="projects-card__year">{p.year}</span>
                <span className="projects-card__status">{p.status}</span>
              </div>
              <h2 className="projects-card__title">{p.title}</h2>
              <DisciplineIconRow disciplines={p.disciplines} />
            </header>

            <p className="projects-card__summary">{p.summary}</p>

            <TagRow tags={p.tags} />

            <footer className="projects-card__footer">
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="projects-card__link"
                >
                  View project <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="projects-card__link projects-card__link--muted">
                  Full breakdown coming soon
                </span>
              )}
            </footer>
          </article>
        ))}
      </section>
    </main>
  );
}