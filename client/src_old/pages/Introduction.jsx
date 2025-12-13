// src/pages/Introduction.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Introduction.css";

import { Monitor, Boxes, Puzzle, Hammer, Music2, Cpu } from "lucide-react";

function InfoIcon({ label = "More info" }) {
  return (
    <span className="intro3-infoIcon" aria-hidden="true" title={label}>
      i
    </span>
  );
}

function Modal({ open, title, onClose, children }) {
  if (!open) return null;

  const onBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="intro3-modalBackdrop"
      role="dialog"
      aria-modal="true"
      onMouseDown={onBackdrop}
    >
      <div className="intro3-modal">
        <div className="intro3-modalHeader">
          <div className="intro3-modalTitle">{title}</div>
          <button
            className="intro3-modalClose"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="intro3-modalBody">{children}</div>
      </div>
    </div>
  );
}

function MetricRow({ k, v }) {
  return (
    <div className="intro3-metricRow">
      <div className="intro3-metricK">{k}</div>
      <div className="intro3-metricV">{v}</div>
    </div>
  );
}

export default function Introduction() {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null);
  const [activeDisciplineKey, setActiveDisciplineKey] = useState("web");

  // Lens recap lives here (tight). Full stacks + exhaustive lists move to Philosophy.
  const disciplines = useMemo(
    () => [
      {
        key: "web",
        color: "#3b82f6",
        Icon: Monitor,
        title: "Web & Software",
        subtitle: "Systems that stay understandable.",
        detailTitle: "Web & Software Engineering",
        lens:
          "I design and ship full-stack systems with clean models, clear routing, and dependable operations — so the platform stays understandable as it grows.",
        youGet: [
          "Durable architecture + readable components",
          "Role-based flows that match real-world operations",
          "Admin tooling that reduces support load",
        ],
        signals: [
          "Built a custom e-commerce platform + order thinking for Ober Artisan Drums",
          "Shipped portal + gated routes + attachments for SoundLegend",
          "Delivered multiple API-driven apps with clear async states",
        ],
        modalBody: (
          <>
            <div className="intro3-modalSection">In a nutshell</div>
            <ul>
              <li>Clean architecture, clear models, stable routing</li>
              <li>Production-minded UX: loading states, errors, and fallbacks</li>
              <li>Admin + ops tooling that keeps systems calm</li>
            </ul>

            <div className="intro3-modalRule" />

            <div className="intro3-modalSection">Proof (examples)</div>
            <ul>
              <li>Ober Artisan Drums: custom storefront + checkout + operations thinking</li>
              <li>SoundLegend: portal + gated access + attachments + progress UI</li>
              <li>WeatherNest: real-time API UI + responsive + minimal hierarchy</li>
            </ul>
          </>
        ),
      },

      {
        key: "product",
        color: "#f97316",
        Icon: Boxes,
        title: "Product & UX",
        subtitle: "Flow-first. Confidence over cleverness.",
        detailTitle: "Product & UX Design",
        lens:
          "I design flows that feel inevitable: users know what to do next, edge cases are handled, and the UI stays calm under real-world use.",
        youGet: [
          "Clear user journeys + strong information hierarchy",
          "Progressive disclosure (power without clutter)",
          "Dashboards + status schemas that mirror reality",
        ],
        signals: [
          "Designed ops workflows: New / In Progress / Completed lanes",
          "Built constraint-based UIs (builder-style) without confusion",
          "Copy + microcopy that reduces support and increases trust",
        ],
        modalBody: (
          <>
            <div className="intro3-modalSection">How I design</div>
            <ul>
              <li>Flow first: what does the user do next without thinking?</li>
              <li>Hierarchy: what matters now vs later</li>
              <li>Edge cases: design for reality, not demos</li>
              <li>Microcopy: tone + clarity that reduces support</li>
            </ul>

            <div className="intro3-modalRule" />

            <div className="intro3-modalSection">Typical outputs</div>
            <ul>
              <li>User journeys + IA maps</li>
              <li>Wireframes / interaction notes</li>
              <li>Status schemas + dashboard patterns</li>
              <li>Copy + onboarding language</li>
            </ul>
          </>
        ),
      },

      {
        key: "solve",
        color: "#a855f7",
        Icon: Puzzle,
        title: "Problem Solving",
        subtitle: "Find the real constraint. Fix the right thing.",
        detailTitle: "Technical Problem Solving",
        lens:
          "I chase the real constraint — then make the smallest change that prevents the issue from coming back (not just a patch).",
        youGet: [
          "Root-cause debugging with durable fixes",
          "Data integrity + state consistency under async",
          "Backward-compatible improvements without regressions",
        ],
        signals: [
          "Fixed status drift bugs by preventing accidental overwrites",
          "Normalized workflow step data for reliable persistence",
          "Designed systems with audit/history trails for accountability",
        ],
        modalBody: (
          <>
            <div className="intro3-modalSection">What I optimize for</div>
            <ul>
              <li>Smallest change that unlocks the most value</li>
              <li>Fix it once, prevent it forever</li>
              <li>Systems that are explainable to future humans</li>
            </ul>

            <div className="intro3-modalRule" />

            <div className="intro3-modalSection">Tools I lean on</div>
            <ul>
              <li>Logs + reproduction paths</li>
              <li>Checklists / runbooks for repeatability</li>
              <li>Clear status + history trails for accountability</li>
            </ul>
          </>
        ),
      },

      {
        key: "craft",
        color: "#facc15",
        Icon: Hammer,
        title: "Craft & Making",
        subtitle: "Physical feedback. Real tolerances. No shortcuts.",
        detailTitle: "Craft & Making",
        lens:
          "I bring physical craft discipline into digital work: process, repeatability, quality gates, and documentation that keeps the bar high.",
        youGet: [
          "Repeatable process + quality control mindset",
          "Documentation that makes the next build easier",
          "Systems that respect real constraints (time, tolerances, ops)",
        ],
        signals: [
          "Built Ober Artisan Drums end-to-end (product, process, media)",
          "Designed shop tooling workflows and repeatable build steps",
          "Craft-level attention applied to UI polish + system clarity",
        ],
        modalBody: (
          <>
            <div className="intro3-modalSection">What craft adds</div>
            <ul>
              <li>Real constraints (tolerances, time, repeatability)</li>
              <li>A bias toward clear process + quality gates</li>
              <li>Documentation that keeps quality consistent</li>
            </ul>

            <div className="intro3-modalRule" />

            <div className="intro3-modalSection">Examples</div>
            <ul>
              <li>Handcrafted snares built end-to-end</li>
              <li>Shop fixtures + workflows</li>
              <li>Media + product storytelling tied to craft</li>
            </ul>
          </>
        ),
      },

      {
        key: "story",
        color: "#ec4899",
        Icon: Music2,
        title: "Story & Music",
        subtitle: "Tone, pacing, and emotional through-lines.",
        detailTitle: "Story, Music & Creative Life",
        lens:
          "I use story, sound, and pacing to make products feel human — not just usable. The right narrative builds trust and momentum.",
        youGet: [
          "Cinematic pacing (reveal → tension → payoff)",
          "Copy that sounds like a person, not a template",
          "Media used to support clarity and trust",
        ],
        signals: [
          "Built TimelineRail: gesture-paced scenes + layered assets",
          "Wove story into product experiences without clutter",
          "Created educational build storytelling that deepens ownership",
        ],
        modalBody: (
          <>
            <div className="intro3-modalSection">How it shows up</div>
            <ul>
              <li>Products that feel guided, not confusing</li>
              <li>Copy that sounds like a person</li>
              <li>Media used to build trust and context</li>
            </ul>

            <div className="intro3-modalRule" />

            <div className="intro3-modalSection">Outputs</div>
            <ul>
              <li>Narrative outlines + page structure</li>
              <li>Microcopy + onboarding language</li>
              <li>Media selection + pacing guidance</li>
            </ul>
          </>
        ),
      },

      {
        key: "ai",
        color: "#22c55e",
        Icon: Cpu,
        title: "AI & Systems",
        subtitle: "A sharp assistant — not the author.",
        detailTitle: "AI & Systems",
        lens:
          "I use AI to accelerate options and polish — then apply human judgment to structure, correctness, and taste. Specs beat vibes.",
        youGet: [
          "Fast option generation + iteration loops",
          "Constraint-based specs for consistent outputs",
          "Human-in-the-loop review as the standard",
        ],
        signals: [
          "Built repeatable render rules for consistent drum mockups",
          "Used AI to accelerate UX copy and system structure (human-owned decisions)",
          "Spec-first workflows that keep output consistent",
        ],
        modalBody: (
          <>
            <div className="intro3-modalSection">How I use AI</div>
            <ul>
              <li>Generate options quickly, then choose intentionally</li>
              <li>Draft structure, then refine with human taste</li>
              <li>Write specs + constraints so outputs stay consistent</li>
            </ul>

            <div className="intro3-modalRule" />

            <div className="intro3-modalSection">Guardrails</div>
            <ul>
              <li>AI assists — it doesn’t decide</li>
              <li>Human review on structure, tone, and correctness</li>
              <li>Repeatable rules over “vibes” for consistency</li>
            </ul>
          </>
        ),
      },
    ],
    []
  );

  const highlights = useMemo(
    () => [
      { k: "10+ yrs", v: "Customer-facing technical work & leadership" },
      { k: "90%+ CSAT", v: "Sustained across high-change environments" },
      { k: "End-to-end", v: "Discovery → build → ship → support" },
      { k: "Platform work", v: "Auth, portals, workflows, admin systems" },
      { k: "Shipping bias", v: "Small slices, tight loops, real usage" },
      { k: "Craft bar", v: "Detail-oriented delivery (software + physical)" },
    ],
    []
  );

  const activeDiscipline = useMemo(
    () => disciplines.find((d) => d.key === activeDisciplineKey) || disciplines[0],
    [disciplines, activeDisciplineKey]
  );

  const openDisciplineModal = (d) => setActiveModal(d);
  const closeModal = () => setActiveModal(null);

  return (
    <main className="intro3-page">
      <div className="intro3-shell panel-shell">
        <div className="panel-shell__inner intro3-shellInner">
          <section className="intro3-hero">
            <div className="intro3-heroGrid">
              {/* LEFT */}
              <div className="intro3-heroCopy">
                <div className="kicker">DAN OBER · BUILDER / ENGINEER / CREATIVE</div>

                <h1 className="h1-main">
                  I build systems that live between
                  <br />
                  wood, code, sound, and story.
                </h1>

                <p className="text-body intro3-lede">
                  I’m a product-minded engineer and builder who ships real tools,
                  instruments, and experiences — from full-stack platforms to
                  physical objects with software inside them.
                </p>

                <p className="text-body intro3-sub">
                  Former Solutions Engineer + CS leader. Today I build end-to-end
                  work that feels human, holds up under pressure, and actually
                  gets used.
                </p>

                <div className="btn-row intro3-ctaRow">
                  <button className="btn-primary" onClick={() => navigate("/projects")}>
                    Explore the work
                  </button>

                  <button className="btn-ghost" onClick={() => navigate("/my-story")}>
                    Take the story tour →
                  </button>
                </div>

                {/* CORE DISCIPLINES */}
                <div className="intro3-disciplines">
                  <div className="intro3-discHead">
                    <div className="intro3-discKicker">CORE DISCIPLINES</div>

                    <div className="intro3-discTitleRow">
                      <div className="intro3-discTitle">How I show up</div>
                    </div>

                    <div className="intro3-discBlurb">
                      Tap a discipline for the quick lens recap. Full stacks + complete
                      project breakdowns live in <strong>Philosophy</strong>.
                    </div>
                  </div>

                  <div className="intro3-chipRow" role="list">
                    {disciplines.map((d) => {
                      const selected = d.key === activeDisciplineKey;
                      const Icon = d.Icon;

                      return (
                        <button
                          key={d.key}
                          type="button"
                          className={"intro3-chip" + (selected ? " intro3-chip--active" : "")}
                          onClick={() => setActiveDisciplineKey(d.key)}
                          style={
                            selected
                              ? {
                                  borderColor: d.color + "dd",
                                  boxShadow: `0 0 0 1px ${d.color}55, 0 10px 22px rgba(0,0,0,0.55)`,
                                }
                              : undefined
                          }
                        >
                          <span
                            className="intro3-chipBadge"
                            style={{ borderColor: d.color, color: d.color }}
                            aria-hidden="true"
                          >
                            <Icon size={16} />
                          </span>

                          <span className="intro3-chipText">
                            <span className="intro3-chipLabel">{d.title}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Lens Recap panel */}
                  <div className="intro3-discPreview">
                    <div className="intro3-discPreviewTop">
                      <div className="intro3-discPreviewTitle">
                        {activeDiscipline.detailTitle}
                      </div>

                      <div className="intro3-discPreviewActions">
                        <button
                          type="button"
                          className="intro3-discPreviewLink"
                          onClick={() => navigate("/philosophy")}
                          aria-label="Open Philosophy for full skills, tools, and projects"
                        >
                          Full details in Philosophy →
                        </button>

                        <button
                          type="button"
                          className="intro3-discPreviewOpen"
                          onClick={() => openDisciplineModal(activeDiscipline)}
                          aria-label={`Open lens details for ${activeDiscipline.detailTitle}`}
                        >
                          Open lens →
                        </button>
                      </div>
                    </div>

                    {activeDiscipline.subtitle && (
                      <div className="intro3-discPreviewSubtitle">
                        {activeDiscipline.subtitle}
                      </div>
                    )}

                    {activeDiscipline.lens && (
                      <div className="intro3-discPreviewText">{activeDiscipline.lens}</div>
                    )}

                    <div className="intro3-lensGrid">
                      <div className="intro3-lensCol">
                        <div className="intro3-discPreviewLabel">You get</div>
                        <ul className="intro3-lensList">
                          {(activeDiscipline.youGet || []).map((x) => (
                            <li key={x}>{x}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="intro3-lensCol">
                        <div className="intro3-discPreviewLabel">Signals</div>
                        <ul className="intro3-lensList">
                          {(activeDiscipline.signals || []).map((x) => (
                            <li key={x}>{x}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <aside className="intro3-heroSide">
                <div className="intro3-sidePanel">
                  <div className="intro3-profileTop">
                    <div className="intro3-portraitSurface">
                      <img
                        className="intro3-portrait"
                        src="/danober-bw.png"
                        alt="Dan Ober portrait"
                        loading="eager"
                      />
                    </div>

                    <div className="intro3-profileMeta">
                      <div className="intro3-profileName">DAN OBER</div>
                      <div className="intro3-profileTag">
                        Builder’s mindset. Product instincts. Human-centered execution.
                      </div>

                      <div className="intro3-availableBadge intro3-availableBadge--inline">
                        <span className="intro3-availableDot" />
                        Currently available
                      </div>
                    </div>
                  </div>

                  <div className="intro3-sideDivider" />

                  <div className="intro3-sideTitle">What you can expect</div>
                  <div className="intro3-sideText">
                    Thoughtful delivery, clear communication, and a craft-level sense of
                    quality — whether it’s a user flow, a system, or something physical.
                  </div>

                  <div className="intro3-metricsList">
                    {highlights.map((h) => (
                      <MetricRow key={`${h.k}-${h.v}`} k={h.k} v={h.v} />
                    ))}
                  </div>

                  <div className="intro3-sideFooter">
                    Open to: full-time, contract, and project-based work.
                    <br />
                    Also accepting select commissions (custom snares, portals, scoring / production).
                  </div>

                  <div className="intro3-availableActions">
                    <button className="btn-ghost" onClick={() => navigate("/contact")}>
                      Contact
                    </button>
                    <button className="btn-ghost" onClick={() => navigate("/projects")}>
                      View projects →
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <Modal
            open={!!activeModal}
            title={activeModal?.detailTitle || ""}
            onClose={closeModal}
          >
            {activeModal?.modalBody}
          </Modal>
        </div>
      </div>
    </main>
  );
}