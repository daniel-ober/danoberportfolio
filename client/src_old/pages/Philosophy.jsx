// src/pages/Philosophy.jsx
import React, { useMemo, useState } from "react";
import "./Philosophy.css";
import CoreDisciplinesPie from "../components/CoreDisciplinesPie";
import { Monitor, Boxes, Puzzle, Hammer, Music2 } from "lucide-react";

/* =========================================================
   DISCIPLINES
   ========================================================= */

const DISCIPLINES = [
  {
    key: "web",
    label: "Web & Software",
    chipLabel: "Web & Software",
    legendLabel: "Web & Software",
    color: "#3b82f6",
    Icon: Monitor,
    detailTitle: "Web & Software Engineering",
    detailBody: `I ship real systems: React frontends, Firebase backends, auth flows, portals, dashboards, and internal tooling. I bias toward clean data models, boring-but-solid infrastructure, and code that stays flexible instead of becoming a fragile museum.`,
  },
  {
    key: "product",
    label: "Product & UX",
    chipLabel: "Product & UX",
    legendLabel: "Product & UX Design",
    color: "#f97316",
    Icon: Boxes,
    detailTitle: "Product & UX Design",
    detailBody: `Good UX is empathy with a map. I care about the full journey: how someone discovers a feature, understands it quickly, and feels confident about what happens next — without needing a manual or a support ticket.`,
  },
  {
    key: "problem",
    label: "Problem Solving",
    chipLabel: "Problem Solving",
    legendLabel: "Technical Problem Solving",
    color: "#a855f7",
    Icon: Puzzle,
    detailTitle: "Technical Problem Solving",
    detailBody: `My default move is structure: clarify the goal, list constraints, find the smallest high-leverage change, and ship. Whether it's a messy codebase or messy reality, I turn ambiguity into a plan people can execute.`,
  },
  {
    key: "craft",
    label: "Craft & Making",
    chipLabel: "Craft & Making",
    legendLabel: "Craft & Making",
    color: "#facc15",
    Icon: Hammer,
    detailTitle: "Craft & Making",
    detailBody: `Building custom drums keeps me honest. You can’t bluff your way through tolerances, tuning, or finish work. That mindset shows up in software: precision where it matters, repeatability where it helps, and respect for the real-world workflow.`,
  },
  {
    key: "story",
    label: "Story & Music",
    chipLabel: "Story & Music",
    legendLabel: "Story, Music & Creative Life",
    color: "#ec4899",
    Icon: Music2,
    detailTitle: "Story, Music & Creative Life",
    detailBody: `Story is the glue. It shows up as great microcopy, calm incident updates, launch narratives, and documentation people actually read. It’s also how I design trust: what we say, how we say it, and whether the experience matches the promise.`,
  },
];

const ORDER = DISCIPLINES.map((d) => d.key);

function makeKey(keys) {
  return keys
    .slice()
    .sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b))
    .join("+");
}

/* =========================================================
   BLEND RECIPES
   ========================================================= */

const BLEND_RECIPES = {
  "": {
    title: "Choose a Blend",
    subtitle: "Start simple. Then layer.",
    paragraphs: [
      `Toggle one or more disciplines on the left. As you add them, the blend shifts — and this panel updates to show how I tend to show up, what I ship, and how I collaborate in that mix.`,
      `It’s a small interactive demo of my larger philosophy: the best work happens when the seams disappear — the product feels coherent, the system is stable, and the human experience is deliberate.`,
    ],
  },

  /* ============================
     SINGLES
     ============================ */

  web: {
    title: "Engineering With an Opinion",
    subtitle: "Web & Software, in tight focus",
    paragraphs: [
      `This is me as a builder: data models, auth, APIs, UI architecture, performance, and reliability.`,
      `You can expect clean implementation, clear trade-offs, and code that doesn’t punish future changes — plus practical artifacts like runbooks, environment notes, and admin tooling so the system stays operable after launch.`,
    ],
  },

  product: {
    title: "UX With a Point of View",
    subtitle: "Product & UX, in tight focus",
    paragraphs: [
      `This is about flow, clarity, and reducing friction. Not just screens — the whole journey.`,
      `You can expect crisp problem framing, user stories that map cleanly to implementation, and design decisions that are grounded in real behavior — backed by wireframes, journey maps, and edge-case notes that keep teams aligned.`,
    ],
  },

  problem: {
    title: "The Systems Troubleshooter",
    subtitle: "Problem solving, in tight focus",
    paragraphs: [
      `This is my “make it make sense” mode: map constraints, find leverage, and ship the smallest move that unlocks the most value.`,
      `You can expect structured thinking, simplified diagrams, and decision-ready recommendations — often captured as playbooks, runbooks, and “here’s why this broke” write-ups that prevent repeat pain.`,
    ],
  },

  craft: {
    title: "The Maker in the Room",
    subtitle: "Craft & Making, in tight focus",
    paragraphs: [
      `This is shop brain: process, precision, repeatability, and respect for how work actually gets done.`,
      `You can expect practical build plans, thoughtful tolerances, and workflows that reduce rework — expressed as checklists, fixture ideas, and consistent “done means done” standards.`,
    ],
  },

  story: {
    title: "Making the Work Feel Human",
    subtitle: "Story & Music, in tight focus",
    paragraphs: [
      `This is about trust and tone: how the work is communicated, remembered, and carried forward.`,
      `You can expect launch stories, copy that sounds like a person, and narrative clarity during messy moments — delivered as onboarding language, product messaging, documentation, and updates people actually understand.`,
    ],
  },

  /* ============================
     PAIRS
     ============================ */

  "web+product": {
    title: "From Spec to Shipping",
    subtitle: "Web & Software × Product & UX",
    paragraphs: [
      `This is where product ideas stop living in decks and start living in code. UX decisions and engineering trade-offs happen in the same conversation.`,
      `You can expect pragmatic features that ship, clean translation from flows → components → tickets, and releases that tie directly to user value — not just “we built a thing.”`,
    ],
  },

  "web+problem": {
    title: "Refactoring the Mess",
    subtitle: "Web & Software × Problem Solving",
    paragraphs: [
      `This blend is for untangling complexity: legacy code, brittle flows, mismatched APIs, recurring bugs.`,
      `You can expect disciplined debugging, simplified architecture, and fixes that reduce future incidents — supported by before/after diagrams, migration plans, and operational docs.`,
    ],
  },

  "web+craft": {
    title: "Digital Tools for Physical Work",
    subtitle: "Web & Software × Craft & Making",
    paragraphs: [
      `This mix connects the shop floor to the product surface: portals, dashboards, lifecycle tracking, QA checklists.`,
      `You can expect tooling that reflects how work actually moves — fewer spreadsheets, more purpose-built UI, and systems that match reality instead of forcing reality to match the system.`,
    ],
  },

  "web+story": {
    title: "Interactive Stories",
    subtitle: "Web & Software × Story & Music",
    paragraphs: [
      `This blend builds experiences where narrative is baked into the product — not bolted on at the end.`,
      `You can expect story-driven UX flows, content models that scale, and microcopy libraries that keep voice consistent across the entire experience.`,
    ],
  },

  "product+problem": {
    title: "Design That Solves the Right Problem",
    subtitle: "Product & UX × Problem Solving",
    paragraphs: [
      `This is about cutting through noise: designing for the real constraint, not the loudest request.`,
      `You can expect clarified goals, prioritized use cases, and flows that quietly reduce support burden — delivered as problem briefs, journey maps, and iteration plans.`,
    ],
  },

  "product+craft": {
    title: "UX You Can Hold",
    subtitle: "Product & UX × Craft & Making",
    paragraphs: [
      `Here, product thinking extends into the physical world: packaging, documentation, unboxing, and the “what happens after purchase” experience.`,
      `You can expect coherence across touchpoints — portal, object, follow-up — supported by care guides, milestone flows, and experience-level consistency.`,
    ],
  },

  "product+story": {
    title: "Narrative-Driven Product",
    subtitle: "Product & UX × Story & Music",
    paragraphs: [
      `This pairing makes sure the experience has a spine: who it’s for, what it unlocks, and how it fits into someone’s day.`,
      `You can expect thoughtful onboarding, clear microcopy, and messaging that stays aligned across product, marketing, and support surfaces.`,
    ],
  },

  "problem+craft": {
    title: "Fixing Bottlenecks in the Shop",
    subtitle: "Problem Solving × Craft & Making",
    paragraphs: [
      `This blend removes friction from real workflows: jigs, process, sequencing, and measurable improvements.`,
      `You can expect small changes with big leverage — reduced rework, fewer missed steps, cleaner handoffs — captured as SOPs, layout tweaks, and experiment notes.`,
    ],
  },

  "problem+story": {
    title: "Clarity in the Chaos",
    subtitle: "Problem Solving × Story & Music",
    paragraphs: [
      `This mix turns complexity into explanations people can follow — without losing technical truth.`,
      `You can expect post-mortems that teach, status updates that calm, and stakeholder comms that translate “what happened” into shared understanding.`,
    ],
  },

  "craft+story": {
    title: "Artifacts With a Story",
    subtitle: "Craft & Making × Story & Music",
    paragraphs: [
      `With craft and story together, the work becomes a living artifact — documented, shareable, and human.`,
      `You can expect build journals, media sets, and narrative assets that turn a one-off purchase into a longer relationship and a story someone carries forward.`,
    ],
  },

  /* ============================
     TRIPLES
     ============================ */

  "web+product+problem": {
    title: "Full-Stack Problem Solver",
    subtitle: "Web × Product × Problem Solving",
    paragraphs: [
      `This is for complex, real-world systems: UX, architecture, constraints, and shipping all in one loop.`,
      `You can expect clean plans, scoped MVPs, and execution that stays aligned to user value — supported by diagrams, tickets that tell the whole story, and realistic rollouts.`,
    ],
  },

  "web+product+craft": {
    title: "Digital Front Door to Physical Craft",
    subtitle: "Web × Product × Craft",
    paragraphs: [
      `This blend is about building ecosystems that match a physical lifecycle: timelines, milestones, assets, and progress you can trust.`,
      `You can expect portals and internal tools that stay in sync with reality — one source of truth driving both customer experience and operational execution.`,
    ],
  },

  "web+product+story": {
    title: "Story-First Product Experiences",
    subtitle: "Web × Product × Story",
    paragraphs: [
      `Here, the product explains itself: narrative woven into UX, content wired into the interface, and messaging aligned with what’s actually happening.`,
      `You can expect launches that feel coherent — the UI, the words, and the behaviors all telling the same story.`,
    ],
  },

  "web+problem+craft": {
    title: "Tooling for Real Operations",
    subtitle: "Web × Problem Solving × Craft",
    paragraphs: [
      `This is where I build tools that remove bottlenecks: QC flows, scheduling helpers, build tracking, and operational guardrails.`,
      `You can expect software that respects physical constraints — plus training notes and configuration that keep it maintainable for non-technical users.`,
    ],
  },

  "web+problem+story": {
    title: "Debugging With Context",
    subtitle: "Web × Problem Solving × Story",
    paragraphs: [
      `Equal parts engineer, detective, and translator: fix the issue and explain it like a human.`,
      `You can expect incident write-ups, dashboards that communicate, and fixes that come with clarity — reducing anxiety instead of increasing it.`,
    ],
  },

  "web+craft+story": {
    title: "Portals for Living Artifacts",
    subtitle: "Web × Craft × Story",
    paragraphs: [
      `This is about giving physical work a digital home: from first sketch to final delivery (and beyond).`,
      `You can expect rich histories, media galleries, and story beats anchored in reliable systems — the kind of work that people share because it feels personal.`,
    ],
  },

  "product+problem+craft": {
    title: "Designing Better Processes",
    subtitle: "Product × Problem Solving × Craft",
    paragraphs: [
      `This blend reshapes how the work gets done — not just what the interface looks like.`,
      `You can expect clearer workflows, tighter definitions of done, and tools that match real movement through a day — expressed as SOPs, journey maps, and execution-ready backlogs.`,
    ],
  },

  "product+problem+story": {
    title: "Aligning People, Process, and Narrative",
    subtitle: "Product × Problem Solving × Story",
    paragraphs: [
      `This mix makes sure the story matches the reality — for customers and for teams.`,
      `You can expect roadmap clarity, honest messaging, and internal comms that keep everyone aligned when trade-offs show up.`,
    ],
  },

  "product+craft+story": {
    title: "Experience Design, End to End",
    subtitle: "Product × Craft × Story",
    paragraphs: [
      `The entire journey becomes one experience: discovery → purchase → build → delivery → long-term relationship.`,
      `You can expect cohesive details across web, packaging, portals, and follow-ups — the polish that makes a buyer feel like a partner.`,
    ],
  },

  "problem+craft+story": {
    title: "Meaningful Fixes, Memorable Results",
    subtitle: "Problem Solving × Craft × Story",
    paragraphs: [
      `Not just patching — improving how people feel about the work while also making the system stronger.`,
      `You can expect thoughtful changes that are documented, communicated, and celebrated — turning pain into learning and learning into shared confidence.`,
    ],
  },

  /* ============================
     QUADS
     ============================ */

  "web+product+problem+craft": {
    title: "The Product-Minded Builder",
    subtitle: "Web, Product, Problem Solving & Craft",
    paragraphs: [
      `This is a rare blend: design the system, shape the flows, debug the weirdness, and understand how it lands in the physical world.`,
      `You can expect cohesive tooling where “product” and “operations” support each other — working software, repeatable processes, and documentation that ties it together.`,
    ],
  },

  "web+product+problem+story": {
    title: "From Incident to Story",
    subtitle: "Web, Product, Problem Solving & Story",
    paragraphs: [
      `Built for complex user-facing systems where reliability and communication both matter.`,
      `You can expect strong engineering, UX that respects constraints, and clear stakeholder narrative — incident playbooks, customer-facing updates, and docs all telling one story.`,
    ],
  },

  "web+product+craft+story": {
    title: "Digital, Physical, and Everything Between",
    subtitle: "Web, Product, Craft & Story",
    paragraphs: [
      `Here the web experience, the physical artifact, and the surrounding story become one product.`,
      `You can expect cohesive launches and portals tied to real-world work — handcrafted feeling, system-level consistency, and a coherent narrative thread.`,
    ],
  },

  "web+problem+craft+story": {
    title: "Resilient Systems With a Human Face",
    subtitle: "Web, Problem Solving, Craft & Story",
    paragraphs: [
      `This blend balances reliability, physical reality, and the human experience around the work.`,
      `You can expect durable processes, strong troubleshooting, and communication that makes complex systems feel approachable — especially when things get messy.`,
    ],
  },

  "product+problem+craft+story": {
    title: "Orchestrating the Whole Experience",
    subtitle: "Product, Problem Solving, Craft & Story",
    paragraphs: [
      `This is end-to-end orchestration: expectations, workflows, and the lived experience of the customer and the team.`,
      `You can expect alignment — roadmaps, operations, and narrative working together — so the product promise matches what actually happens.`,
    ],
  },

  /* ============================
     ALL FIVE
     ============================ */

  "web+product+problem+craft+story": {
    title: "The Full Stack of Dan",
    subtitle: "All five disciplines together",
    paragraphs: [
      `This is the whole toolkit: engineering, product, systems thinking, physical craft, and story — all pointed at one problem.`,
      `You can expect me to move between strategy and implementation without losing the thread: shaping flows, designing models, building tools, refining details, and wrapping it in a narrative that feels honest — with deliverables people can use, support, and remember.`,
    ],
  },
};

/* =========================================================
   COMPONENT
   ========================================================= */

export default function Philosophy() {
  // start with nothing selected so we show the default recipe
  const [selectedKeys, setSelectedKeys] = useState([]);

  const activeKeys = selectedKeys;
  const activeBlendKey = makeKey(activeKeys);
  const activeRecipe = BLEND_RECIPES[activeBlendKey] || BLEND_RECIPES[""];

  const handleToggle = (key) => {
    setSelectedKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleSelectAll = () => setSelectedKeys(ORDER);
  const handleClear = () => setSelectedKeys([]);

  const activeColors = useMemo(
    () =>
      activeKeys
        .map((k) => DISCIPLINES.find((d) => d.key === k)?.color)
        .filter(Boolean),
    [activeKeys]
  );

  const blendStyles = useMemo(() => {
    if (!activeColors.length) return {};

    const [c1, c2, c3, c4] = activeColors;
    const base = c1 || "#f7b24a";

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

  return (
    <div className="philo">
      {/* HERO / INTRO */}
      <section className="philo__hero">
        <h1>Philosophy &amp; Core Disciplines</h1>
        <p className="philo__lede">
          My best work happens when the seams disappear — when engineering,
          product thinking, and communication all feel like one coherent
          experience. These five disciplines are the rhythms I blend to build
          systems people trust and stories people remember.
        </p>
      </section>

      {/* QUOTE */}
      <section className="philo__quote-block">
        <p className="philo__quote">
          “The goal isn’t just shipping. It’s shipping in a way that makes
          people feel taken care of — from first click to long-term trust.”
        </p>
        <p className="philo__quote-attrib">— Dan Ober</p>
      </section>

      {/* OPERATING PRINCIPLES (the “philosophy” glue) */}
      <section className="philo-principles">
        <header className="philo-principles__header">
          <h2>Operating Principles</h2>
          <p>
            This is what I optimize for — regardless of which disciplines are in
            play.
          </p>
        </header>

        <div className="philo-principles__grid">
          <article className="philo-principles__card">
            <h3>Make it operable</h3>
            <p>
              If a system can’t be supported, it isn’t finished. I ship with
              runbooks, admin tooling, and clear “how this works” artifacts.
            </p>
          </article>

          <article className="philo-principles__card">
            <h3>Respect the workflow</h3>
            <p>
              Tools should reflect how work actually happens. I build around
              real constraints — not idealized diagrams.
            </p>
          </article>

          <article className="philo-principles__card">
            <h3>Small moves, big leverage</h3>
            <p>
              I look for the smallest change that unlocks the most value, then
              iterate fast with real feedback.
            </p>
          </article>

          <article className="philo-principles__card">
            <h3>Coherence beats clever</h3>
            <p>
              Great products feel inevitable. I aim for clarity, consistency,
              and a voice that matches the behavior of the system.
            </p>
          </article>

          <article className="philo-principles__card">
            <h3>Story is a feature</h3>
            <p>
              The way we explain things is part of the product: onboarding,
              error states, updates, and how we handle hard moments.
            </p>
          </article>
        </div>
      </section>

      {/* INDIVIDUAL DISCIPLINES */}
      <section className="ph-section ph-section--disciplines">
        <CoreDisciplinesPie />
      </section>

      {/* PLAYGROUND */}
      <section className="philo-playground">
        <header className="philo-playground__header">
          <h2>Discipline Blend Playground</h2>
          <p>
            Toggle the disciplines I bring into a project. Each combination
            shifts how I work, what I ship, and how I collaborate — from
            API-driven platforms and internal tooling to craft-focused,
            customer-facing experiences.
          </p>
        </header>

        <div className="philo-playground__content">
          {/* Left: controls only */}
          <div className="philo-playground__visual">
            <div className="philo-playground__controls">
              <span className="philo-playground__controls-label">
                Blend disciplines:
              </span>

              <div className="philo-playground__chip-row">
                {DISCIPLINES.map((d) => {
                  const selected = selectedKeys.includes(d.key);

                  return (
                    <button
                      key={d.key}
                      type="button"
                      aria-pressed={selected}
                      className={
                        "philo-playground__chip" +
                        (selected ? " philo-playground__chip--active" : "")
                      }
                      style={
                        selected
                          ? {
                              borderColor: d.color + "dd",
                              boxShadow: `0 0 0 1px ${d.color}55, 0 8px 18px rgba(0,0,0,0.55)`,
                            }
                          : undefined
                      }
                      onClick={() => handleToggle(d.key)}
                    >
                      <span
                        className="philo-playground__chip-dot"
                        style={{ backgroundColor: d.color }}
                      />
                      {d.chipLabel}
                    </button>
                  );
                })}

                <button
                  type="button"
                  className="philo-playground__chip philo-playground__chip--utility"
                  onClick={handleSelectAll}
                >
                  Select all
                </button>
                <button
                  type="button"
                  className="philo-playground__chip philo-playground__chip--utility"
                  onClick={handleClear}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Right: textual outcome + active discipline icons */}
          <aside className="philo-playground__output" style={blendStyles}>
            <h3 className="philo-playground__output-title">
              {activeRecipe.title}
            </h3>

            {activeRecipe.subtitle && (
              <p className="philo-playground__output-subtitle">
                {activeRecipe.subtitle}
              </p>
            )}

            {activeKeys.length > 0 && (
              <ul className="philo-playground__active-icon-row">
                {activeKeys.map((key) => {
                  const d = DISCIPLINES.find((disc) => disc.key === key);
                  if (!d) return null;

                  return (
                    <li key={d.key} className="philo-playground__active-icon">
                      <span
                        className="philo-playground__active-icon-badge"
                        style={{
                          borderColor: d.color,
                          color: d.color,
                        }}
                        aria-label={d.legendLabel}
                        title={d.legendLabel}
                      >
                        <d.Icon size={16} />
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}

            <div className="philo-playground__output-body">
              {activeRecipe.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* CLOSING */}
      <section className="philo__closing">
        <p>
          When I join a team, I bring a builder’s mindset and a caretaker’s
          instincts: ship what matters, make it operable, and communicate in a
          way that keeps trust intact — especially when the work gets hard.
        </p>
      </section>
    </div>
  );
}