import "./Projects.css";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { Monitor, Boxes, Puzzle, Hammer, Music2, Cpu, Star, X } from "lucide-react";

/* =========================================================
   DISCIPLINES (shared mental model w/ Philosophy)
   ========================================================= */

const DISCIPLINES = [
  { key: "web", label: "Web & Software", Icon: Monitor, color: "#3b82f6" },
  { key: "product", label: "Product & UX", Icon: Boxes, color: "#f97316" },
  { key: "problem", label: "Problem Solving", Icon: Puzzle, color: "#a855f7" },
  { key: "craft", label: "Craft & Making", Icon: Hammer, color: "#facc15" },
  { key: "story", label: "Story & Music", Icon: Music2, color: "#ec4899" },
  { key: "ai", label: "AI & Systems", Icon: Cpu, color: "#22c55e" },
];

/* =========================================================
   PROJECT DATA
   ========================================================= */

const PROJECTS = [
  {
    id: "soundlegend-portal",
    title: "SoundLegend Portal",
    meta: "React + Firebase • Customer-facing workflow + admin tools",
    bullets: [
      "Designed a customer portal to reduce ambiguity and improve transparency",
      "Built admin-side tooling for status updates, notes, and attachments",
      "Focused on reliability, permissions, and clear UX",
    ],
    featured: true,
    disciplines: ["web", "product", "problem", "story", "ai"],
    to: "/projects/soundlegend-portal",
    enabled: true,
  },
  {
    id: "nfc-auth",
    title: "NFC Drum Authentication",
    meta: "NTAG 424 DNA • Security + verification UX",
    bullets: [
      "Designed a verification flow that prioritizes anti-cloning concerns",
      "Built a simple verification UX backed by Firestore",
      "Applied security-first thinking to a physical product system",
    ],
    featured: false,
    disciplines: ["web", "problem", "ai", "craft"],
    to: null,
    enabled: false,
  },
  {
    id: "motionsynth",
    title: "MotionSynth Lab",
    meta: "React + Audio Engine • Systems thinking + UX iteration",
    bullets: [
      "Built complex UI workflows with tight feedback loops",
      "Iterated on architecture and component boundaries",
      "Refined interaction design through real usage",
    ],
    featured: false,
    disciplines: ["web", "product", "problem", "story"],
    to: null,
    enabled: false,
  },
];

export default function Projects() {
  const [activeDisciplines, setActiveDisciplines] = useState([]);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(true);

  const toggleDiscipline = (key) => {
    setActiveDisciplines((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const clearFilters = () => {
    setActiveDisciplines([]);
    setShowFeaturedOnly(false);
  };

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (showFeaturedOnly && !p.featured) return false;
      if (activeDisciplines.length === 0) return true;
      return activeDisciplines.every((d) => p.disciplines.includes(d));
    });
  }, [activeDisciplines, showFeaturedOnly]);

  const activeCountLabel = useMemo(() => {
    const parts = [];
    if (showFeaturedOnly) parts.push("Featured");
    if (activeDisciplines.length) parts.push(`${activeDisciplines.length} discipline${activeDisciplines.length === 1 ? "" : "s"}`);
    if (!parts.length) return "Showing all";
    return `Filtered by ${parts.join(" + ")}`;
  }, [showFeaturedOnly, activeDisciplines]);

  const anyFilterOn = showFeaturedOnly || activeDisciplines.length > 0;

  return (
    <section className="proj page">
      <div className="proj__inner page__inner">
        {/* HERO */}
        <header className="proj__hero">
          <p className="proj__kicker">Projects</p>
          <h1 className="proj__title">Featured work & real systems.</h1>
          <p className="proj__subtitle">
            Not screenshots — writeups that reflect real work: problem → approach → implementation → result.
          </p>

          <div className="proj__heroMeta">
            <span className="proj__heroMetaText">{activeCountLabel}</span>
            <span className="proj__heroMetaCount">
              {filteredProjects.length} shown
            </span>
          </div>
        </header>

        {/* FILTER BAR */}
        <section className="proj__filters" aria-label="Project filters">
          <div className="proj__filterBar">
            <button
              type="button"
              className={"proj__chip proj__chip--featured" + (showFeaturedOnly ? " is-on" : "")}
              onClick={() => setShowFeaturedOnly((v) => !v)}
              aria-pressed={showFeaturedOnly}
              title="Show only featured projects"
            >
              <Star size={14} />
              Featured
            </button>

            <div className="proj__divider" aria-hidden="true" />

            <div className="proj__chipRow" aria-label="Filter by discipline">
              {DISCIPLINES.map((d) => {
                const on = activeDisciplines.includes(d.key);
                return (
                  <button
                    key={d.key}
                    type="button"
                    className={"proj__chip" + (on ? " is-on" : "")}
                    style={{ "--accent": d.color }}
                    onClick={() => toggleDiscipline(d.key)}
                    aria-pressed={on}
                    title={`Filter by ${d.label}`}
                  >
                    <d.Icon size={14} />
                    {d.label}
                  </button>
                );
              })}
            </div>

            {anyFilterOn && (
              <button type="button" className="proj__clear" onClick={clearFilters}>
                <X size={14} />
                Clear
              </button>
            )}
          </div>
        </section>

        {/* PROJECT GRID */}
        <div className="proj__grid">
          {filteredProjects.map((p) => {
            const CardBody = (
              <article
                className={
                  "proj__card" +
                  (p.enabled ? "" : " proj__card--disabled") +
                  (p.featured ? " proj__card--featured" : "")
                }
                aria-disabled={!p.enabled}
              >
                <div className="proj__cardTop">
                  <h2 className="proj__cardTitle">{p.title}</h2>

                  <div className="proj__badges">
                    {p.featured && (
                      <span className="proj__badge proj__badge--featured">
                        <Star size={12} />
                        Featured
                      </span>
                    )}
                    <span className={"proj__badge" + (p.enabled ? " proj__badge--live" : " proj__badge--soon")}>
                      {p.enabled ? "Open project" : "Coming next"}
                    </span>
                  </div>
                </div>

                <p className="proj__meta">{p.meta}</p>

                <ul className="proj__list">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="proj__cardFoot">
                  {p.enabled ? (
                    <div className="proj__cardCta">Open project →</div>
                  ) : (
                    <div className="proj__cardCta proj__cardCta--disabled">Case study in progress</div>
                  )}
                </div>
              </article>
            );

            return p.enabled && p.to ? (
              <Link
                key={p.id}
                to={p.to}
                className="proj__cardLink"
                aria-label={`Open ${p.title}`}
              >
                {CardBody}
              </Link>
            ) : (
              <div key={p.id} className="proj__cardLink proj__cardLink--disabled">
                {CardBody}
              </div>
            );
          })}

          {filteredProjects.length === 0 && (
            <div className="proj__empty">
              <div className="proj__emptyTitle">No matches for this blend.</div>
              <div className="proj__emptyBody">
                Try removing a discipline — or turn off Featured to broaden results.
              </div>
              <button type="button" className="proj__emptyBtn" onClick={clearFilters}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}