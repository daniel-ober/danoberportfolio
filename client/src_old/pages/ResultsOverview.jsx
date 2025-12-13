import React from "react";
import { Link } from "react-router-dom";
import "./ResultsOverview.css";

const DISCIPLINE_LABELS = {
  web: "Web & Software",
  product: "Product & UX",
  problem: "Systems & Problem-Solving",
  craft: "Craft & Making",
  story: "Story & Sound",
  ai: "AI & Systems",
};

const CASE_STUDIES = [
  {
    id: "soundlegend-portal",
    label: "Flagship",
    title: "SoundLegend artist portal & legacy system",
    timeframe: "2022–2025",
    disciplines: ["web", "product", "problem", "craft", "story", "ai"],
    blurb:
      "Built a full life-cycle system around custom snare drums: customer portal, admin tools, NFC verification, and artist-facing legacy pages.",
    bullets: [
      "Designed a 10-phase build workflow and mirrored it 1:1 in the portal so the physical and digital timelines stay in sync.",
      "Implemented admin dashboards for orders, support, SoundLegend requests, and risk alerts with drag-and-drop status flows.",
      "Prototyped NFC verification and legacy storytelling pages so each drum has a scannable, permanent home on the web.",
    ],
    outcome:
      "Result: a small, end-to-end product ecosystem where one builder can manage instruments, artists, and operations in one place.",
    ctaLabel: "See how the system fits together",
    ctaTo: "/projects", // later this could point to a dedicated case-study route
  },
  {
    id: "ober-admin-tools",
    label: "Systems",
    title: "Admin tools for a tiny, high-leverage workshop",
    timeframe: "2023–2025",
    disciplines: ["web", "product", "problem", "craft"],
    blurb:
      "Internal tools that make a one-person shop feel like a tiny production team instead of a pile of sticky notes.",
    bullets: [
      "Built project overview and step-tracking modals with timers, notes, and checklists for each phase of a drum build.",
      "Centralized orders, inquiries, and risk alerts into one overview board instead of three separate spreadsheets.",
      "Connected all of it to the same Firestore model used by the customer portal, so updates never have to be double-entered.",
    ],
    outcome:
      "Result: fewer missed details, clearer hand-offs (even when it’s just me), and a workflow that’s ready for future collaborators.",
    ctaLabel: "Peek into the admin views",
    ctaTo: "/projects",
  },
  {
    id: "nfc-verification",
    label: "R&D",
    title: "NFC verification for physical instruments",
    timeframe: "2024–2025",
    disciplines: ["web", "problem", "craft", "ai"],
    blurb:
      "An experiment in treating each drum like a verifiable artifact: tap to confirm it’s real, and open its story.",
    bullets: [
      "Prototyped a verification flow using NTAG 424 DNA chips, Web NFC, and Firebase as the verification backend.",
      "Designed `/verify` interactions that feel simple for drummers, while keeping the cryptography and token checks behind the scenes.",
      "Explored how the same infrastructure can power ‘Legacy’ pages and future owner stories without exposing sensitive data.",
    ],
    outcome:
      "Result: a path to anti-cloning, tap-to-verify instruments that feel magical to use and boringly solid under the hood.",
    ctaLabel: "Read the verification story",
    ctaTo: "/projects",
  },
  {
    id: "motionsynth",
    label: "Play",
    title: "MotionSynth: a polyrhythmic synth lab",
    timeframe: "2023–2024",
    disciplines: ["web", "product", "story"],
    blurb:
      "A browser-based synth playground for exploring polyrhythms: motion-driven voices, editable ratios, and performable presets.",
    bullets: [
      "Designed a preset system where each ‘voice’ combines an engine patch, rhythm ratio, and mixer settings into one shareable unit.",
      "Implemented a clean React/Tone.js architecture so multiple voices can be layered without the UI or audio collapsing.",
      "Shaped the interface to feel like a lab bench: clear, explorable sections instead of a single wall of knobs.",
    ],
    outcome:
      "Result: a working proof-of-concept that ties my drumming brain directly into a software instrument — and into the Polyrhythmic Method.",
    ctaLabel: "See how it works in the browser",
    ctaTo: "/projects",
  },
];

function DisciplinePills({ keys }) {
  if (!keys?.length) return null;
  return (
    <div className="results-discipline-pills">
      {keys.map((key) => (
        <span key={key} className={`results-pill results-pill--${key}`}>
          {DISCIPLINE_LABELS[key] || key}
        </span>
      ))}
    </div>
  );
}

export default function ResultsOverview() {
  return (
    <main className="results-page">
      {/* HERO / INTRO */}
      <section className="results-hero">
        <p className="results-hero__eyebrow">Results</p>
        <h1 className="results-hero__title">What this work has turned into.</h1>
        <p className="results-hero__body">
          This page is a short tour of the systems, instruments, and tools
          I&apos;ve actually shipped — not just ideas on a whiteboard. Each one
          shows a different mix of disciplines from the Polyrhythmic Method:
          sometimes a clean single-discipline lane, sometimes a full stack of
          craft, systems, story, and AI.
        </p>
        <p className="results-hero__body">
          If you&apos;re skimming, start with SoundLegend. It&apos;s the clearest
          example of what happens when you point the whole toolkit at one
          problem and keep iterating.
        </p>
      </section>

      {/* CASE STUDY GRID */}
      <section className="results-grid">
        {CASE_STUDIES.map((cs) => (
          <article key={cs.id} className="results-card">
            <header className="results-card__header">
              <div className="results-card__meta">
                <span className="results-card__badge">{cs.label}</span>
                <span className="results-card__timeframe">{cs.timeframe}</span>
              </div>
              <h2 className="results-card__title">{cs.title}</h2>
              <DisciplinePills keys={cs.disciplines} />
            </header>

            <p className="results-card__blurb">{cs.blurb}</p>

            <ul className="results-card__bullets">
              {cs.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>

            <p className="results-card__outcome">{cs.outcome}</p>

            <footer className="results-card__footer">
              <Link to={cs.ctaTo} className="results-card__cta">
                {cs.ctaLabel}
              </Link>
            </footer>
          </article>
        ))}
      </section>

      {/* CTA TO PROJECT GALLERY / CONTACT */}
      <section className="results-footer-cta">
        <div className="results-footer-cta__card">
          <h2>Want the fuller picture?</h2>
          <p>
            The project gallery digs into more experiments, prototypes, and
            side-quests. Or, if you already know you have a specific problem in
            mind, we can skip straight to talking about it.
          </p>
          <div className="results-footer-cta__actions">
            <Link to="/projects" className="results-footer-cta__btn">
              Browse the project gallery
            </Link>
            <Link
              to="/contact"
              className="results-footer-cta__btn results-footer-cta__btn--ghost"
            >
              Talk about a project →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}