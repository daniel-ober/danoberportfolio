// src/pages/Philosophy.jsx
import React, { useMemo, useState } from "react";
import "./Philosophy.css";
import { Link } from "react-router-dom";
import { Monitor, Boxes, Puzzle, Hammer, Music2, Cpu } from "lucide-react";

// ✅ Only import the generator
import { getBlendRecipe } from "../../utils/blendRecipes";

/* =========================================================
   CORE DISCIPLINES (the 6 rhythms)
   ========================================================= */

const DISCIPLINES = [
  {
    key: "web",
    label: "Web & Software",
    chipLabel: "Web & Software",
    legendLabel: "Web & Software",
    color: "#3b82f6",
    Icon: Monitor,
    detailTitle: "Web & Software",
    detailBody:
      "I ship real systems: React frontends, Firebase backends, auth flows, portals, dashboards, and internal tooling. I bias toward clean data models, boring-but-solid infrastructure, and code that stays flexible instead of brittle.",
  },
  {
    key: "product",
    label: "Product & UX",
    chipLabel: "Product & UX",
    legendLabel: "Product & UX",
    color: "#f97316",
    Icon: Boxes,
    detailTitle: "Product & UX",
    detailBody:
      "Good UX is empathy with a map. I care about journeys: how someone discovers a feature, understands it quickly, and feels confident about what happens next — without needing a manual or a support ticket.",
  },
  {
    key: "problem",
    label: "Problem Solving",
    chipLabel: "Problem Solving",
    legendLabel: "Problem Solving",
    color: "#a855f7",
    Icon: Puzzle,
    detailTitle: "Problem Solving",
    detailBody:
      "My default move is structure: clarify the goal, list constraints, find the smallest high-leverage change, and ship. Whether it’s a messy codebase or messy reality, I turn ambiguity into a plan people can execute.",
  },
  {
    key: "craft",
    label: "Craft & Making",
    chipLabel: "Craft & Making",
    legendLabel: "Craft & Making",
    color: "#facc15",
    Icon: Hammer,
    detailTitle: "Craft & Making",
    detailBody:
      "Building custom drums keeps me honest. You can’t bluff your way through tolerances, tuning, or finish work. That mindset shows up in software: precision where it matters, repeatability where it helps, and respect for real-world workflow.",
  },
  {
    key: "story",
    label: "Story & Music",
    chipLabel: "Story & Music",
    legendLabel: "Story & Music",
    color: "#ec4899",
    Icon: Music2,
    detailTitle: "Story & Music",
    detailBody:
      "Story is the glue. It shows up as microcopy, calm incident updates, launch narratives, and documentation people actually read. It’s also how I design trust: what we say, how we say it, and whether the experience matches the promise.",
  },
  {
    key: "ai",
    label: "AI & Systems",
    chipLabel: "AI & Systems",
    legendLabel: "AI & Systems",
    color: "#22c55e",
    Icon: Cpu,
    detailTitle: "AI & Systems",
    detailBody:
      "I treat AI as a systems amplifier: great for exploring options, stress-testing ideas, and accelerating drafts. I keep a human hand on structure, decisions, and final voice — especially where judgment, nuance, or ethics matter.",
  },
];

const ORDER = DISCIPLINES.map((d) => d.key);

function makeKey(keys) {
  return (keys || [])
    .slice()
    .sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b))
    .join("+");
}

/* =========================================================
   COMPONENT
   ========================================================= */

export default function Philosophy() {
  const [selectedKeys, setSelectedKeys] = useState([]);

  // Pull blend output from utils (covers EVERY combo)
  const activeRecipe = useMemo(() => getBlendRecipe(selectedKeys), [selectedKeys]);

  const handleToggle = (key) => {
    setSelectedKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleSelectAll = () => setSelectedKeys(ORDER);
  const handleClear = () => setSelectedKeys([]);

  const activeColors = useMemo(
    () =>
      selectedKeys
        .map((k) => DISCIPLINES.find((d) => d.key === k)?.color)
        .filter(Boolean),
    [selectedKeys]
  );

  const blendStyles = useMemo(() => {
    if (!activeColors.length) return {};
    const [c1, c2, c3, c4] = activeColors;
    const base = c1 || "#8c5aff";

    const bg = `
      radial-gradient(circle at 0% 0%, ${(c1 || base) + "33"}, transparent 55%),
      radial-gradient(circle at 100% 0%, ${(c2 || c1 || base) + "33"}, transparent 55%),
      radial-gradient(circle at 0% 100%, ${(c3 || c2 || base) + "33"}, transparent 55%),
      radial-gradient(circle at 100% 100%, ${(c4 || c3 || base) + "33"}, transparent 55%),
      radial-gradient(circle at 50% 50%, ${base + "1f"}, #09080b)
    `;

    const gradient = `linear-gradient(120deg, ${activeColors.join(", ")})`;

    return {
      background: bg,
      borderColor: "transparent",
      borderImageSource: gradient,
      borderImageSlice: 1,
      boxShadow: "0 18px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,0,0,0.4)",
    };
  }, [activeColors]);

  const activeDiscs = selectedKeys
    .map((k) => DISCIPLINES.find((d) => d.key === k))
    .filter(Boolean);

  const beatLabels = ["Approach", "Optimize", "Notes"];

  return (
    <section className="phil page">
      <div className="phil__inner page__inner">
        {/* HERO */}
        <header className="phil__hero">
          <p className="phil__kicker">Philosophy</p>
          <h1 className="phil__title">The Polyrhythmic Discipline Method.</h1>
          <p className="phil__subtitle">
            A practical way I blend engineering, product thinking, customer empathy, craft,
            story, and AI — without losing clarity.
          </p>

          <div className="phil__ctaRow">
            <Link className="btn btn--primary" to="/projects">
              See it in Projects
            </Link>
            <Link className="btn btn--ghost" to="/how-i-work">
              How I Work
            </Link>
          </div>

          {/* ✅ UPDATED: less redundant, aligned with Focus/Switch/Integrate */}
          <div className="phil__heroPills">
            <span className="phil__pill">Focus when depth matters</span>
            <span className="phil__pill">Switch when work is broad</span>
            <span className="phil__pill">Integrate when coherence matters</span>
          </div>
        </header>

        {/* ✅ UPDATED: replace “quick principles” with unified Modes of Work */}
        <section className="phil__section">
          <div className="phil__sectionHead">
            <p className="phil__sectionKicker">Modes of work</p>
            <h2 className="phil__sectionTitle">
              How I choose how to apply disciplines — not just which ones.
            </h2>
            <p className="phil__sectionSub">
              Sometimes the best move is depth. Other times it’s range. And sometimes the win is
              true integration, where the seams disappear.
            </p>
          </div>

          <div className="phil__grid">
            {/* Focus (single) */}
            <section className="phil__card">
              <h2 className="h2">Single-discipline · Focus</h2>
              <p className="p">
                Sometimes the best move is depth: debug the failure, fix the contract, ship the patch.
                No theatrics.
              </p>
            </section>

            {/* Switch (multi) */}
            <section className="phil__card">
              <h2 className="h2">Multi-discipline · Switch</h2>
              <p className="p">
                Range. Switching hats at the right moment: engineer → product → communicator. Useful
                when work is diverse, but not necessarily integrated.
              </p>

              <div className="phil__miniGrid">
                <div className="phil__miniCard">
                  <div className="phil__miniLabel">Feels like</div>
                  <div className="phil__miniValue">Toolbox</div>
                </div>
                <div className="phil__miniCard">
                  <div className="phil__miniLabel">Risk</div>
                  <div className="phil__miniValue">Handoffs / seams</div>
                </div>
                <div className="phil__miniCard">
                  <div className="phil__miniLabel">Win</div>
                  <div className="phil__miniValue">Speed + coverage</div>
                </div>
              </div>
            </section>

            {/* Integrate (polyrhythmic) */}
            <section className="phil__card">
              <h2 className="h2">Polyrhythmic · Integrate</h2>
              <p className="p">
                Integration. The disciplines blend so the product feels coherent: UX matches system
                behavior, reliability is visible, and the story aligns with reality.
              </p>

              <div className="phil__miniGrid">
                <div className="phil__miniCard">
                  <div className="phil__miniLabel">Feels like</div>
                  <div className="phil__miniValue">Ensemble</div>
                </div>
                <div className="phil__miniCard">
                  <div className="phil__miniLabel">Risk</div>
                  <div className="phil__miniValue">Over-complexity</div>
                </div>
                <div className="phil__miniCard">
                  <div className="phil__miniLabel">Win</div>
                  <div className="phil__miniValue">Coherence + trust</div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* METHOD EXPLAINER (kept, but tightened to avoid repeating the same content) */}
        <section className="phil__section">
          <div className="phil__sectionHead">
            <p className="phil__sectionKicker">The idea</p>
            <h2 className="phil__sectionTitle">Rhythm is my metaphor for how work behaves.</h2>
            <p className="phil__sectionSub">
              In drumming, a single groove can carry a whole song. But when you layer rhythms intentionally,
              you get motion — without chaos. That’s how I approach projects: sometimes we focus; sometimes
              we switch; and sometimes we integrate so the work feels like one coherent system.
            </p>
          </div>
        </section>

        {/* BLEND TOOL */}
        <section className="phil__section">
          <div className="phil__sectionHead">
            <p className="phil__sectionKicker">Go inside the mind</p>
            <h2 className="phil__sectionTitle">Polyrhythmic Blend Tool</h2>
            <p className="phil__sectionSub">
              Select the disciplines you want “in the room.” This panel updates with the kind of work
              you can expect: how I approach, what I ship, and proof/examples.
            </p>
          </div>

          <div className="phil__tool">
            {/* LEFT: controls (Core disciplines + toggles, unified) */}
            <div className="phil__toolLeft">
              <div className="phil__toolHeader">
                <div className="phil__toolTitleRow">
                  <h3 className="phil__toolTitle">Choose disciplines</h3>
                  <span className="phil__toolBadge">
                    {selectedKeys.length ? `${selectedKeys.length} selected` : "none selected"}
                  </span>
                </div>
                <p className="phil__toolSub">
                  These are the six rhythms. Click to add/remove them — the output updates live.
                </p>
              </div>

              {/* Unified cards-as-toggles */}
              <div className="phil__pickGrid" role="list">
                {DISCIPLINES.map((d) => {
                  const on = selectedKeys.includes(d.key);
                  return (
                    <button
                      key={d.key}
                      type="button"
                      className={"phil__pickCard" + (on ? " is-on" : "")}
                      onClick={() => handleToggle(d.key)}
                      aria-pressed={on}
                      style={{ "--accent": d.color }}
                    >
                      <div className="phil__pickTop">
                        <div className="phil__pickIcon">
                          <d.Icon size={18} />
                        </div>

                        {/* Only show the discipline name ONCE */}
                        <div className="phil__pickTitle">{d.label}</div>

                        {/* Keep the key pill, but make it the ONLY secondary label */}
                        <div className="phil__pickKey">{d.key.toUpperCase()}</div>
                      </div>

                      <div className="phil__pickDesc">{d.detailBody}</div>

                      <div className="phil__pickMeta">
                        <span className="phil__pickState">{on ? "On" : "Off"}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="phil__toolCtas">
                <button type="button" className="phil__btn" onClick={handleSelectAll}>
                  Select all
                </button>
                <button type="button" className="phil__btn" onClick={handleClear}>
                  Clear
                </button>
                <Link className="btn btn--ghost" to="/projects">
                  View case studies
                </Link>
              </div>
            </div>

            {/* RIGHT: output */}
            <aside className="phil__toolRight" style={blendStyles}>
              <div className="phil__exampleHead">
                <div>
                  <div className="phil__exampleKicker">Blend output</div>
                  <div className="phil__exampleTitle">{activeRecipe?.title}</div>
                </div>

                {activeDiscs.length > 0 && (
                  <ul className="phil__activeIcons" aria-label="Selected disciplines">
                    {activeDiscs.map((d) => (
                      <li key={d.key} className="phil__activeIcon">
                        <span
                          className="phil__activeIconBadge"
                          title={d.legendLabel}
                          aria-label={d.legendLabel}
                          style={{ borderColor: d.color, color: d.color }}
                        >
                          <d.Icon size={16} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {activeRecipe?.subtitle && <p className="phil__outputSub">{activeRecipe.subtitle}</p>}

              <div className="phil__beats">
                {(activeRecipe?.paragraphs || []).map((t, idx) => (
                  <div className="phil__beat" key={idx}>
                    <div className="phil__beatLabel">{beatLabels[idx] || "Notes"}</div>
                    <div className="phil__beatText">{t}</div>
                  </div>
                ))}
              </div>

              {activeRecipe?.examples && activeRecipe.examples.length > 0 && (
                <div className="phil__toolNote">
                  <strong>Proof / examples:</strong>
                  <ul className="phil__proofList">
                    {activeRecipe.examples.map((ex, idx) => (
                      <li key={idx}>{ex}</li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="phil__footer">
          <div>
            <div className="phil__footerKicker">Working together</div>
            <div className="phil__footerTitle">
              If your project needs more than one discipline in the room…
            </div>
            <div className="phil__footerDesc">
              …that’s usually where I do my best work. I bring a builder’s mindset and a caretaker’s
              instincts: ship what matters, make it operable, and keep trust intact.
            </div>
          </div>

          <div className="phil__ctaRow">
            <Link className="btn btn--primary" to="/projects">
              Explore Projects
            </Link>
            <Link className="btn btn--ghost" to="/contact">
              Contact
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}