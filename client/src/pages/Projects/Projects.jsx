// src/pages/Projects.js
import "./Projects.css";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { Monitor, Boxes, Puzzle, Hammer, Music2, Cpu, Star, X } from "lucide-react";

/* =========================================================
   DISCIPLINES — Ober Artisan neutral + elevated
   ========================================================= */
const DISCIPLINES = [
  { key: "web", label: "Web & Software", Icon: Monitor, color: "#d6c39f" },
  { key: "product", label: "Product & UX", Icon: Boxes, color: "#d6c39f" },
  { key: "problem", label: "Problem Solving", Icon: Puzzle, color: "#d6c39f" },
  { key: "craft", label: "Craft & Making", Icon: Hammer, color: "#d6c39f" },
  { key: "story", label: "Story & Music", Icon: Music2, color: "#d6c39f" },
  { key: "ai", label: "AI & Systems", Icon: Cpu, color: "#d6c39f" },
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
      "Designed a verification flow prioritizing anti-cloning concerns",
      "Built a simple verification UI backed by Firestore",
      "Applied security-first thinking to a physical product system",
    ],
    featured: false,
    disciplines: ["web", "problem", "ai", "craft"],
    enabled: false,
  },
  {
    id: "motionsynth",
    title: "MotionSynth Lab",
    meta: "React + Audio Engine • Systems thinking + UX iteration",
    bullets: [
      "Built complex UI workflows with tight feedback loops",
      "Iterated architecture and component boundaries",
      "Refined interaction design through real usage",
    ],
    featured: false,
    disciplines: ["web", "product", "problem", "story"],
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
    if (activeDisciplines.length)
      parts.push(`${activeDisciplines.length} discipline${activeDisciplines.length === 1 ? "" : "s"}`);
    if (!parts.length) return "Showing all";
    return `Filtered by ${parts.join(" + ")}`;
  }, [showFeaturedOnly, activeDisciplines]);

  const anyFilterOn = showFeaturedOnly || activeDisciplines.length > 0;

  return (
    <section className="proj page">
      <div className="proj__inner page__inner">

        {/* ---------------- HERO ---------------- */}
        <header className="proj__hero">
          <p className="proj__kicker">Projects</p>
          <h1 className="proj__title">Featured work & real systems.</h1>
          <p className="proj__subtitle">
            Work grounded in craft, clarity, and real outcomes — built the same
            way I build instruments: precision, intention, iteration.
          </p>

          <div className="proj__heroMeta">
            <span className="proj__heroMetaText">{activeCountLabel}</span>
            <span className="proj__heroMetaCount">{filteredProjects.length} shown</span>
          </div>
        </header>

        {/* ---------------- FILTERS ---------------- */}
        <section className="proj__filters">
          <div className="proj__filterBar">

            <button
              type="button"
              className={"proj__chip proj__chip--featured" + (showFeaturedOnly ? " is-on" : "")}
              onClick={() => setShowFeaturedOnly((v) => !v)}
            >
              <Star size={14} />
              Featured
            </button>

            <div className="proj__divider" />

            <div className="proj__chipRow">
              {DISCIPLINES.map((d) => {
                const on = activeDisciplines.includes(d.key);
                return (
                  <button
                    key={d.key}
                    type="button"
                    className={"proj__chip" + (on ? " is-on" : "")}
                    style={{ "--accent": d.color }}
                    onClick={() => toggleDiscipline(d.key)}
                  >
                    <d.Icon size={14} />
                    {d.label}
                  </button>
                );
              })}
            </div>

            {anyFilterOn && (
              <button className="proj__clear" onClick={clearFilters}>
                <X size={14} />
                Clear
              </button>
            )}
          </div>
        </section>

        {/* ---------------- GRID ---------------- */}
        <div className="proj__grid">
          {filteredProjects.map((p) => {
            const card = (
              <article
                className={
                  "proj__card" +
                  (p.featured ? " proj__card--featured" : "") +
                  (p.enabled ? "" : " proj__card--disabled")
                }
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
                    <span
                      className={
                        "proj__badge" +
                        (p.enabled ? " proj__badge--live" : " proj__badge--soon")
                      }
                    >
                      {p.enabled ? "Open project" : "Case study soon"}
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
                    <div className="proj__cardCta proj__cardCta--disabled">Not published yet</div>
                  )}
                </div>
              </article>
            );

            return p.enabled && p.to ? (
              <Link key={p.id} to={p.to} className="proj__cardLink">
                {card}
              </Link>
            ) : (
              <div key={p.id} className="proj__cardLink proj__cardLink--disabled">
                {card}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}