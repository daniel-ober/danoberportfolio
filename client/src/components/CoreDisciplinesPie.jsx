import React, { useMemo, useState } from "react";
import "./CoreDisciplinesPie.css";

const CORE_DISCIPLINES = [
  {
    key: "web",
    label: "Web & Software Engineering",
    emoji: "💻",
    color: "#3b82f6",
    title: "Web & Software Engineering",
    body: `I like shipping real systems: React frontends, Firebase backends,
project portals, progress tracking, and internal tools. My bias is toward
clear data models, simple APIs, and features that are easy to extend later
instead of harder.`,
  },
  {
    key: "product",
    label: "Product & UX Design",
    emoji: "📐",
    color: "#a855f7",
    title: "Product & UX Design",
    body: `Good products feel obvious only after you’ve done the hard work of
listening. I care about flows, not just screens — how someone discovers
a feature, understands what it does, and knows what to do next without
thinking too hard.`,
  },
  {
    key: "problem",
    label: "Technical Problem Solving",
    emoji: "🧠",
    color: "#14b8a6",
    title: "Technical Problem Solving",
    body: `Whether it’s a tangled codebase or a messy real-world constraint,
I like breaking problems down into something we can reason about:
clarify the goal, map the constraints, find the smallest change that
unlocks the most value, then ship and iterate.`,
  },
  {
    key: "craft",
    label: "Craft & Making",
    emoji: "🛠️",
    color: "#eab308",
    title: "Craft & Making",
    body: `Building custom snares keeps me grounded in physical craft.
Each drum moves from raw lumber to tuned instrument with a documented
lifecycle, portal, media, and story. It’s product thinking applied to
something you can literally feel under your hands.`,
  },
  {
    key: "story",
    label: "Story, Music & Creative Life",
    emoji: "🎵",
    color: "#f97373",
    title: "Story, Music & Creative Life",
    body: `Music, photography, and writing are how I process and share the work.
They show up as launch stories, thoughtful documentation, and small
details that make tools feel human — the tone of an error message,
the way we celebrate a milestone, the story a customer tells later.`,
  },
];

/* =========================================================
   NAMED BLENDS (for playground-style cards)
   - keys: array of discipline keys
   - title: card title
   - body: array of paragraphs
   ========================================================= */

const BLEND_DEFINITIONS = [
  {
    keys: ["web", "product", "problem", "craft", "story"],
    title: "Experience design, end to end",
    body: [
      `This blend treats the entire journey as one experience: discovery, purchase, build, delivery, and the story that lives on afterward.`,
      `You can expect consistent details across web, packaging, portals, and follow-ups — the kind of polish that makes a one-time buyer feel like a long-term partner, backed by journey narratives, touchpoint inventories, and small scripts or prompts for each stage of the relationship.`,
    ],
  },
  // Add more specific blends here as you define them:
  // {
  //   keys: ["web", "product", "story"],
  //   title: "Launch storytelling for product teams",
  //   body: [...]
  // }
];

const BLEND_MAP = BLEND_DEFINITIONS.reduce((acc, blend) => {
  const id = blend.keys.slice().sort().join("|");
  acc[id] = blend;
  return acc;
}, {});

/* =========================================================
   POLAR HELPERS
   ========================================================= */

function polarToCartesian(cx, cy, r, angle) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function slicePath(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, endAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;

  return [
    `M ${cx} ${cy}`,
    `L ${start.x} ${start.y}`,
    `A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`,
    "Z",
  ].join(" ");
}

export default function CoreDisciplinesPie() {
  const [mode, setMode] = useState("single"); // 'single' | 'blend'
  const [activeKey, setActiveKey] = useState(CORE_DISCIPLINES[0].key);
  const [blendKeys, setBlendKeys] = useState([]);

  const slices = useMemo(() => {
    const cx = 100;
    const cy = 100;
    const radiusOuter = 90;
    const radiusInner = 46;
    const radiusIcon = (radiusOuter + radiusInner) / 2;
    const step = 360 / CORE_DISCIPLINES.length;

    return CORE_DISCIPLINES.map((disc, index) => {
      const startAngle = -90 + index * step;
      const endAngle = startAngle + step;
      const midAngle = (startAngle + endAngle) / 2;
      const iconPos = polarToCartesian(100, 100, radiusIcon, midAngle);

      return {
        key: disc.key,
        label: disc.label,
        color: disc.color,
        emoji: disc.emoji,
        d: slicePath(cx, cy, radiusOuter, startAngle, endAngle),
        iconX: iconPos.x,
        iconY: iconPos.y,
      };
    });
  }, []);

  const activeDisc =
    CORE_DISCIPLINES.find((d) => d.key === activeKey) || CORE_DISCIPLINES[0];

  const selectedInBlend = CORE_DISCIPLINES.filter((d) =>
    blendKeys.includes(d.key)
  );

  const sortedBlendId =
    blendKeys.length > 0 ? blendKeys.slice().sort().join("|") : null;
  const namedBlend = sortedBlendId ? BLEND_MAP[sortedBlendId] : null;

  /* ---------- center label ---------- */

  const centerLabel = (() => {
    if (mode === "single") return activeDisc.label;
    if (namedBlend) return namedBlend.title;
    if (blendKeys.length === 0) return "Choose a blend";
    if (blendKeys.length === 1) {
      const only = selectedInBlend[0];
      return only ? only.label : activeDisc.label;
    }
    return "Blended work model";
  })();

  /* ---------- interactions ---------- */

  const handleSliceClick = (key) => {
    if (mode === "single") {
      setActiveKey(key);
    } else {
      setBlendKeys((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
      );
    }
  };

  const handleLegendClick = (key) => {
    handleSliceClick(key);
  };

  const isSliceActive = (key) => {
    if (mode === "single") return key === activeKey;
    return blendKeys.includes(key);
  };

  const handleSelectAll = () => {
    setBlendKeys(CORE_DISCIPLINES.map((d) => d.key));
  };

  const handleClear = () => {
    setBlendKeys([]);
  };

  /* ---------- detail content ---------- */

  const renderDetailContent = () => {
    if (mode === "single") {
      return (
        <>
          <h3 className="cd-detail__title">{activeDisc.title}</h3>
          <p className="cd-detail__body">{activeDisc.body}</p>
        </>
      );
    }

    // Blend mode:
    if (blendKeys.length === 0) {
      return (
        <>
          <h3 className="cd-detail__title">Blend disciplines to see how I work</h3>
          <p className="cd-detail__body cd-detail__body--intro">
            Toggle slices on the wheel to create your own blend. This is closer
            to how real projects feel — Web, Product, Craft, and Story pulling
            together instead of sitting in separate lanes.
          </p>
        </>
      );
    }

    if (blendKeys.length === 1) {
      const solo = selectedInBlend[0];
      return (
        <>
          <h3 className="cd-detail__title">{solo.title}</h3>
          <p className="cd-detail__body">{solo.body}</p>
        </>
      );
    }

    if (namedBlend) {
      return (
        <div className="cd-blend-card">
          <div className="cd-blend-card__inner">
            <div className="cd-blend-card__title">
              {namedBlend.title.toUpperCase()}
            </div>

            <div className="cd-blend-card__icons">
              {selectedInBlend.map((disc) => (
                <span
                  key={disc.key}
                  className="cd-blend-card__icon"
                  style={{ borderColor: disc.color }}
                  aria-hidden="true"
                >
                  <span className="cd-blend-card__icon-inner">{disc.emoji}</span>
                </span>
              ))}
            </div>

            <div className="cd-blend-card__body">
              {namedBlend.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Generic custom blend fallback:
    return (
      <div className="cd-blend">
        <h3 className="cd-detail__title">How this blend shows up in work</h3>
        <p className="cd-detail__body cd-detail__body--intro">
          This combo is how I like to show up on cross-discipline projects:
          each slice contributes something different to the same outcome.
        </p>

        <div className="cd-blend__chips">
          {selectedInBlend.map((disc) => (
            <span key={disc.key} className="cd-blend__chip">
              <span
                className="cd-blend__chip-swatch"
                style={{ backgroundColor: disc.color }}
              />
              <span className="cd-blend__chip-emoji">{disc.emoji}</span>
              <span className="cd-blend__chip-text">{disc.label}</span>
            </span>
          ))}
        </div>

        <div className="cd-blend__list">
          {selectedInBlend.map((disc) => (
            <div key={disc.key} className="cd-blend__item">
              <h4 className="cd-blend__item-title">
                {disc.emoji} {disc.title}
              </h4>
              <p className="cd-blend__item-body">{disc.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="cd-section">
      <header className="cd-header">
        <p className="cd-kicker">Looking at each core discipline</p>
        <p className="cd-subtitle">
          Use the wheel as a standalone view of each discipline, or flip into
          blend mode to see how they work together on real projects.
        </p>
      </header>

      {/* Mode toggle */}
      <div className="cd-mode-toggle" aria-label="Toggle insight mode">
        <button
          type="button"
          className={
            "cd-mode-toggle__btn" +
            (mode === "single" ? " cd-mode-toggle__btn--active" : "")
          }
          onClick={() => setMode("single")}
        >
          <span className="cd-mode-toggle__icon">⬤</span>
          <span className="cd-mode-toggle__label">Single discipline</span>
        </button>
        <button
          type="button"
          className={
            "cd-mode-toggle__btn" +
            (mode === "blend" ? " cd-mode-toggle__btn--active" : "")
          }
          onClick={() => setMode("blend")}
        >
          <span className="cd-mode-toggle__icon">🎛️</span>
          <span className="cd-mode-toggle__label">Blended model</span>
        </button>
      </div>

      <div className="cd-pie-wrapper">
        <div className="cd-pie-shell">
          <div className="cd-pie-orbit">
            <svg
              className="cd-pie"
              viewBox="0 0 200 200"
              role="listbox"
              aria-label="Core disciplines"
            >
              <defs>
                <radialGradient id="cdPieGlow" cx="50%" cy="40%" r="70%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.16)" />
                  <stop offset="35%" stopColor="rgba(255,255,255,0.04)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0.85)" />
                </radialGradient>
              </defs>

              {slices.map((slice) => (
                <path
                  key={slice.key}
                  className={
                    "cd-pie__slice" +
                    (isSliceActive(slice.key)
                      ? " cd-pie__slice--active"
                      : "")
                  }
                  d={slice.d}
                  fill={slice.color}
                  onClick={() => handleSliceClick(slice.key)}
                  role="option"
                  aria-selected={isSliceActive(slice.key)}
                />
              ))}

              <circle
                cx="100"
                cy="100"
                r="90"
                fill="url(#cdPieGlow)"
                pointerEvents="none"
              />

              <circle className="cd-pie__inner" cx="100" cy="100" r="46" />

              {slices.map((slice) => (
                <text
                  key={`${slice.key}-icon`}
                  x={slice.iconX}
                  y={slice.iconY}
                  className={
                    "cd-pie__icon" +
                    (isSliceActive(slice.key)
                      ? " cd-pie__icon--active"
                      : "")
                  }
                  textAnchor="middle"
                  dominantBaseline="central"
                  onClick={() => handleSliceClick(slice.key)}
                >
                  {slice.emoji}
                </text>
              ))}

              <foreignObject
                x="55"
                y="67"
                width="90"
                height="70"
                pointerEvents="none"
              >
                <div className="cd-center">
                  <div className="cd-center__label">{centerLabel}</div>
                </div>
              </foreignObject>
            </svg>
          </div>

          <ul className="cd-legend">
            {CORE_DISCIPLINES.map((disc) => {
              const active = isSliceActive(disc.key);
              return (
                <li
                  key={disc.key}
                  className={
                    "cd-legend__item" +
                    (active ? " cd-legend__item--active" : "")
                  }
                >
                  <button
                    type="button"
                    onClick={() => handleLegendClick(disc.key)}
                    className="cd-legend__button"
                  >
                    <span
                      className="cd-legend__swatch"
                      style={{ backgroundColor: disc.color }}
                    />
                    <span className="cd-legend__emoji">{disc.emoji}</span>
                    <span className="cd-legend__text">{disc.label}</span>
                    {mode === "blend" && (
                      <span className="cd-legend__toggle-indicator">
                        {active ? "On" : "Off"}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {mode === "blend" && (
            <div className="cd-blend-controls">
              <button
                type="button"
                className="cd-blend-controls__btn cd-blend-controls__btn--primary"
                onClick={handleSelectAll}
              >
                Select all
              </button>
              <button
                type="button"
                className="cd-blend-controls__btn"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          )}
        </div>

        <div className="cd-detail">{renderDetailContent()}</div>
      </div>
    </section>
  );
}