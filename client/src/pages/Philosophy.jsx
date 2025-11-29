// src/pages/Philosophy.jsx
import React, { useMemo, useState } from "react";
import "./Philosophy.css";
import CoreDisciplinesPie from "../components/CoreDisciplinesPie";


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
    iconChar: "💻",
    detailTitle: "Web & Software Engineering",
    detailBody: `I like shipping real systems: React frontends, Firebase backends, auth flows, project portals, progress tracking, and internal tools. My bias is toward clear data models, simple APIs, and features that are easy to extend later instead of harder.`,
  },
  {
    key: "product",
    label: "Product & UX",
    chipLabel: "Product & UX",
    legendLabel: "Product & UX Design",
    color: "#f97316",
    iconChar: "📐",
    detailTitle: "Product & UX Design",
    detailBody: `Good products feel obvious only after you’ve done the hard work of listening. I care about flows, not just screens — how someone discovers a feature, understands what it does, and knows what to do next without thinking too hard.`,
  },
  {
    key: "problem",
    label: "Problem Solving",
    chipLabel: "Problem Solving",
    legendLabel: "Technical Problem Solving",
    color: "#a855f7",
    iconChar: "🧠",
    detailTitle: "Technical Problem Solving",
    detailBody: `Whether it’s a tangled codebase or a messy real-world constraint, I like breaking problems down into something we can reason about: clarify the goal, map the constraints, find the smallest change that unlocks the most value, then ship and iterate.`,
  },
  {
    key: "craft",
    label: "Craft & Making",
    chipLabel: "Craft & Making",
    legendLabel: "Craft & Making",
    color: "#facc15",
    iconChar: "🛠️",
    detailTitle: "Craft & Making",
    detailBody: `Building custom snares keeps me grounded in physical craft. Each drum moves from raw lumber to tuned instrument with a documented lifecycle, portal, media, and story. It’s product thinking applied to something you can literally feel under your hands.`,
  },
  {
    key: "story",
    label: "Story & Music",
    chipLabel: "Story & Music",
    legendLabel: "Story, Music & Creative Life",
    color: "#ec4899",
    iconChar: "🎵",
    detailTitle: "Story, Music & Creative Life",
    detailBody: `Music, photography, and writing are how I process and share the work. They show up as launch stories, thoughtful documentation, and small details that make tools feel human — the tone of an error message, the way we celebrate a milestone, the story a customer tells later.`,
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
  // none selected
  "": {
    title: "Choose a Blend to See the Work",
    subtitle: "No disciplines selected yet",
    paragraphs: [
      `Start by toggling one or more disciplines above. As you add them, the blend shifts and the description on the right updates to show the kind of work, outcomes, and collaboration style you can expect from me with that particular mix.`,
      `Think of this as a small demo of how I connect code, craft, and story — tailored to the parts of my toolkit you’re most interested in.`,
    ],
  },

  // singles
  web: {
    title: "Engineering With an Opinion",
    subtitle: "Web & Software on its own",
    paragraphs: [
      `With just web & software selected, you’re seeing me primarily as an engineer: React, Firebase, auth flows, data models, and the plumbing that holds real products together.`,
      `You can expect reliable implementation, clear technical trade-offs, and code that’s structured so future work doesn’t have to fight the past — plus practical artifacts like API contracts, environment checklists, and admin tools that make the system easier to support day to day.`,
    ],
  },
  product: {
    title: "UX With a Point of View",
    subtitle: "Product & UX on its own",
    paragraphs: [
      `With only product & UX in play, the work is about listening, mapping flows, and shaping interfaces that feel obvious in hindsight.`,
      `You can expect customer-aware journeys, crisp user stories, and design decisions that aren’t just pretty — alongside concrete outputs like wireframes, flow maps, and “happy path vs edge case” notes that make it easier for engineers and stakeholders to stay aligned.`,
    ],
  },
  problem: {
    title: "The Systems Troubleshooter",
    subtitle: "Problem solving on its own",
    paragraphs: [
      `When you select only problem solving, you’re asking me to be a pattern-maker and constraint mapper before anything else.`,
      `You can expect structured thinking, simplified diagrams, and a clear path from “this is a mess” to “here’s the next small, high-leverage move we should ship,” often captured as decision docs, runbooks, or playbooks that teams can reuse when similar issues show up later.`,
    ],
  },
  craft: {
    title: "The Maker in the Room",
    subtitle: "Craft & Making on its own",
    paragraphs: [
      `On its own, craft & making is me in the shop: jigs, shells, finishes, fixtures, and processes that turn ideas into physical, repeatable reality.`,
      `You can expect build plans, thoughtful trade-offs between precision and practicality, and an appreciation for how objects feel in the hand — expressed through process checklists, fixture designs, and repeatable workflows that make future builds smoother and more consistent.`,
    ],
  },
  story: {
    title: "Making the Work Feel Human",
    subtitle: "Story & Music on its own",
    paragraphs: [
      `With only story & music selected, you’re asking for narrative, mood, and emotional clarity around the work.`,
      `You can expect launch stories, copy that actually sounds like people, and sound or visuals that help customers feel why the product matters — usually delivered as marketing copy, onboarding language, or narrative outlines that can be used across product, sales, and support surfaces.`,
    ],
  },

  // pairs
  "web+product": {
    title: "From Spec to Shipping",
    subtitle: "Web & Software × Product & UX",
    paragraphs: [
      `This blend is where product ideas stop living in decks and start living in code. UX decisions and engineering trade-offs happen in the same conversation.`,
      `You can expect pragmatic features that ship, a clean hand-off between design and implementation, and a codebase that still respects the original product intent — supported by UX specs that map cleanly to components, tickets that tell the whole story, and release notes that tie back to user value.`,
    ],
  },
  "web+problem": {
    title: "Refactoring the Mess",
    subtitle: "Web & Software × Problem Solving",
    paragraphs: [
      `Here the focus is taking something tangled — legacy code, mismatched APIs, brittle flows — and making it workable again.`,
      `You can expect careful debugging, simplified architecture, and tooling that turns recurring pain points into one-time fixes, typically documented as before/after diagrams, migration plans, and “how to operate this system without breaking it” guides for engineers and support teams.`,
    ],
  },
  "web+craft": {
    title: "Digital Tools for Physical Work",
    subtitle: "Web & Software × Craft & Making",
    paragraphs: [
      `This mix connects the workshop to the web. Think build portals, production trackers, and internal tools tuned for real hands-on workflows.`,
      `You can expect systems that actually reflect how work happens on the floor: fewer spreadsheets, more purpose-built interfaces, and tangible outputs like production dashboards, build timelines, and QC checklists that live in a portal instead of in someone’s head.`,
    ],
  },
  "web+story": {
    title: "Interactive Stories",
    subtitle: "Web & Software × Story & Music",
    paragraphs: [
      `With web plus story, we’re building experiences where the narrative is baked into the product itself — not bolted on at the end.`,
      `You can expect interactive pages, portals, or tools that explain themselves and feel alive, along with artifacts like narrative-driven UX flows, content models, and microcopy libraries that keep the story consistent across the whole experience.`,
    ],
  },
  "product+problem": {
    title: "Design That Solves the Right Problem",
    subtitle: "Product & UX × Problem Solving",
    paragraphs: [
      `This blend is about making sure we’re designing for the real constraint, not just the loudest request.`,
      `You can expect clarified goals, prioritised use cases, and flows that quietly reduce support tickets — often delivered as problem-framing docs, prioritized journey maps, and backlog plans that make it clear what we are and aren’t doing in the next few iterations.`,
    ],
  },
  "product+craft": {
    title: "UX You Can Hold",
    subtitle: "Product & UX × Craft & Making",
    paragraphs: [
      `Here, the product thinking extends all the way into the physical world — packaging, unboxing, documentation, and how it feels to use the thing in real life.`,
      `You can expect experiences where the portal, the instrument, and the follow-up all feel like one continuous story, supported by unboxing flows, care guides, and portal touchpoints that are designed as one coherent journey rather than separate deliverables.`,
    ],
  },
  "product+story": {
    title: "Narrative-Driven Product",
    subtitle: "Product & UX × Story & Music",
    paragraphs: [
      `This pairing makes sure every interaction has a story behind it: who it’s for, what it unlocks, and how it fits into someone’s day.`,
      `You can expect clear microcopy, thoughtful onboarding, and marketing or product surfaces that speak the same language, backed by messaging hierarchies, tone guidelines, and user stories that tie concrete features to real-world outcomes.`,
    ],
  },
  "problem+craft": {
    title: "Fixing Bottlenecks in the Shop",
    subtitle: "Problem Solving × Craft & Making",
    paragraphs: [
      `Here the focus is on process: jigs, fixtures, layouts, and workflows that remove friction from physical builds.`,
      `You can expect measured tweaks that save time, reduce error rates, and make the craft work feel more like a practiced performance than a scramble — captured as revised SOPs, layout diagrams, and small experiments with clear metrics for what “better” means.`,
    ],
  },
  "problem+story": {
    title: "Clarity in the Chaos",
    subtitle: "Problem Solving × Story & Music",
    paragraphs: [
      `This mix turns complex situations into explanations people can actually follow — diagrams, narratives, and metaphors that stick.`,
      `You can expect clear write-ups, honest post-mortems, and communication that helps teams stay aligned when things are noisy, often in the form of incident reports, status updates, and stakeholder summaries that translate technical detail into shared understanding.`,
    ],
  },
  "craft+story": {
    title: "Artifacts With a Story",
    subtitle: "Craft & Making × Story & Music",
    paragraphs: [
      `With craft and story together, every object carries its own narrative — where it came from, how it was made, and who it’s for.`,
      `You can expect documented builds, legacy portals, and media that turn a one-off purchase into a longer-term relationship, including build journals, photo and video sets, and copy that helps the owner tell the story forward.`,
    ],
  },

  // triples
  "web+product+problem": {
    title: "Full-Stack Problem Solver",
    subtitle: "Web & Software × Product & UX × Problem Solving",
    paragraphs: [
      `This blend is for when you need someone to live at the intersection of architecture, UX, and constraints.`,
      `You can expect well-reasoned technical plans, product decisions backed by trade-offs, and a path from “we’re stuck” to “here’s what we’re shipping next,” often delivered as architecture sketches, scoped MVPs, and implementation plans that slot cleanly into an existing roadmap.`,
    ],
  },
  "web+product+craft": {
    title: "Digital Front Door to Physical Craft",
    subtitle: "Web & Software × Product & UX × Craft & Making",
    paragraphs: [
      `Here, portals and tools are designed specifically around a physical process — like the lifecycle of a custom drum or a handcrafted product line.`,
      `You can expect customer-facing and internal experiences that stay in sync with reality: build phases, timelines, media, and logistics all in one ecosystem, surfaced through dashboards, customer portals, and admin views that share the same underlying source of truth.`,
    ],
  },
  "web+product+story": {
    title: "Story-First Product Experiences",
    subtitle: "Web & Software × Product & UX × Story & Music",
    paragraphs: [
      `This mix creates interactive stories: the product explains itself through the way it’s built, not just through documentation.`,
      `You can expect flows that feel narrative, content that’s wired into the UI, and launches where the messaging, product, and visuals all line up — supported by launch plans, content calendars, and UX copy that are written with the implementation details in mind.`,
    ],
  },
  "web+problem+craft": {
    title: "Tooling for the Shop Floor",
    subtitle: "Web & Software × Problem Solving × Craft & Making",
    paragraphs: [
      `Here the work is about building tools that remove bottlenecks from physical operations — inventory, scheduling, QC, or build tracking.`,
      `You can expect dashboards and helpers that are grounded in how the work is actually done, not how it looks on a whiteboard, plus configuration and training material that make it easy for non-technical teammates to own the system after it launches.`,
    ],
  },
  "web+problem+story": {
    title: "Debugging With Context",
    subtitle: "Web & Software × Problem Solving × Story & Music",
    paragraphs: [
      `This blend is equal parts engineer, detective, and translator. We fix issues and explain them in a way that non-engineers can understand.`,
      `You can expect clear incident write-ups, dashboards that tell a story, and code changes that come with human-readable explanations — the kind of documentation and status updates that reduce anxiety instead of increasing it.`,
    ],
  },
  "web+craft+story": {
    title: "Portals for Living Artifacts",
    subtitle: "Web & Software × Craft & Making × Story & Music",
    paragraphs: [
      `Here we’re creating digital homes for physical work — like portals that follow an artifact from first sketch to final recording or delivery.`,
      `You can expect rich build histories, media, and storytelling around each artifact, all anchored in a reliable web experience, with concrete outputs such as project timelines, media galleries, and “story beats” that are easy to share with customers or collaborators.`,
    ],
  },
  "product+problem+craft": {
    title: "Designing Better Processes",
    subtitle: "Product & UX × Problem Solving × Craft & Making",
    paragraphs: [
      `This blend reshapes how the work gets done — not just what the interface looks like.`,
      `You can expect updated workflows, clearer responsibilities, and tools that feel built around how craftspeople actually move through a day, captured as journey maps, revised SOPs, and feature backlogs that line up with real-world constraints in the shop.`,
    ],
  },
  "product+problem+story": {
    title: "Aligning People, Process, and Narrative",
    subtitle: "Product & UX × Problem Solving × Story & Music",
    paragraphs: [
      `Here we’re making sure the story we tell about the product matches what it actually does and how teams operate behind the scenes.`,
      `You can expect tighter alignment between roadmaps, customer promises, and internal reality — with outputs like narrative-aligned OKRs, roadmap briefs, and internal comms that keep everyone on the same page when priorities shift.`,
    ],
  },
  "product+craft+story": {
    title: "Experience Design, End to End",
    subtitle: "Product & UX × Craft & Making × Story & Music",
    paragraphs: [
      `This blend treats the entire journey as one experience: discovery, purchase, build, delivery, and the story that lives on afterward.`,
      `You can expect consistent details across web, packaging, portals, and follow-ups — the kind of polish that makes a one-time buyer feel like a long-term partner, backed by journey narratives, touchpoint inventories, and small scripts or prompts for each stage of the relationship.`,
    ],
  },
  "problem+craft+story": {
    title: "Meaningful Fixes, Memorable Results",
    subtitle: "Problem Solving × Craft & Making × Story & Music",
    paragraphs: [
      `This mix focuses on fixing what’s broken in a way that also deepens the story — not just patching, but improving how people feel about the work.`,
      `You can expect thoughtful changes that are documented, communicated, and celebrated so teams can see the arc from issue to insight, often in the form of case studies, internal write-ups, and small rituals that mark “we learned something here.”`,
    ],
  },

  // quads
  "web+product+problem+craft": {
    title: "The Product-Minded Builder",
    subtitle: "Web, Product, Problem Solving & Craft",
    paragraphs: [
      `Here you’re getting a builder who can design the system, shape the flows, debug the weirdness, and understand how it all lands in the physical world.`,
      `You can expect cohesive tools and experiences where the line between “product” and “operations” is intentionally blurred in your favor — delivered as working software, process updates, and documentation that tie together business goals, technical design, and day-to-day use.`,
    ],
  },
  "web+product+problem+story": {
    title: "From Incident to Story",
    subtitle: "Web, Product, Problem Solving & Story",
    paragraphs: [
      `This blend is built for complex, user-facing systems where reliability and narrative both matter.`,
      `You can expect strong engineering foundations, UX that respects constraints, and communication that keeps stakeholders informed without drowning them in detail, supported by incident playbooks, customer-facing updates, and technical docs that all tell the same clear story.`,
    ],
  },
  "web+product+craft+story": {
    title: "Digital, Physical, and Everything Between",
    subtitle: "Web, Product, Craft & Story",
    paragraphs: [
      `Here the web experience, the physical artifact, and the surrounding story are treated as one product.`,
      `You can expect cohesive launches, portals tied directly to real-world builds, and details that make the whole system feel handcrafted rather than assembled from mismatched parts — with tangible outputs like integrated roadmaps, design systems, and content plans that span both digital and physical touchpoints.`,
    ],
  },
  "web+problem+craft+story": {
    title: "Resilient Systems With a Human Face",
    subtitle: "Web, Problem Solving, Craft & Story",
    paragraphs: [
      `This blend balances reliability, physical reality, and the stories people tell about the work.`,
      `You can expect strong troubleshooting, durable processes, and communication that helps customers and teammates feel taken care of even when things get complicated, often expressed as resilience playbooks, support tooling, and narrative updates that make complex systems feel approachable.`,
    ],
  },
  "product+problem+craft+story": {
    title: "Orchestrating the Whole Experience",
    subtitle: "Product, Problem Solving, Craft & Story",
    paragraphs: [
      `Here the focus is orchestrating everything around the core product: expectations, processes, and the human experience at each step.`,
      `You can expect aligned roadmaps, smoother operations, and narratives that make sense to customers, leaders, and the people doing the hands-on work — brought to life through cross-functional planning docs, facilitation, and storytelling that keeps everyone rowing in the same direction.`,
    ],
  },

  // all five
  "web+product+problem+craft+story": {
    title: "The Full Stack of Dan",
    subtitle: "All five disciplines together",
    paragraphs: [
      `This is the whole toolkit: engineering, product, systems thinking, physical craft, and story — all pointed at one problem.`,
      `You can expect me to move comfortably between strategy and implementation: sketching flows, shaping data models, building tools, tuning physical details, and wrapping everything in a narrative that feels honest and human, with deliverables that range from working software and refined processes to documentation, media, and stories people actually remember.`,
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

  const isActive = (key) => activeKeys.includes(key);
  const isSelected = (key) => selectedKeys.includes(key);

  const handleToggle = (key) => {
    setSelectedKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleSelectAll = () => {
    setSelectedKeys(ORDER);
  };

  const handleClear = () => {
    setSelectedKeys([]);
  };

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
      boxShadow:
        "0 18px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,0,0,0.4)",
    };
  }, [activeColors]);

  return (
    <div className="philo">
      {/* HERO / INTRO */}
      <section className="philo__hero">
        <h1>Philosophy &amp; Core Disciplines</h1>
        <p className="philo__lede">
          I do my best work where code, craft, and story stop being separate
          skills and start behaving like one instrument. These five disciplines
          are the threads I pull together — for portals and internal tools,
          custom drums, and the narratives that hold it all together.
        </p>
      </section>

      {/* QUOTE */}
      <section className="philo__quote-block">
        <p className="philo__quote">
          “My favorite projects are the ones where a customer can’t tell where
          the engineering ends and the story begins — they just feel taken care
          of from the first click to the last note.”
        </p>
        <p className="philo__quote-attrib">— Dan Ober</p>
      </section>

      {/* INDIVIDUAL DISCIPLINES */}
<section className="ph-section ph-section--disciplines">
  <CoreDisciplinesPie />
</section>

      {/* PLAYGROUND */}
      <section className="philo-playground">
        <header className="philo-playground__header">
          <h2>Core Discipline Playground</h2>
          <p>
            Toggle the disciplines I bring into a project to see how I blend
            them in different settings — from API-driven SaaS tools and internal
            portals to artisan drum builds and customer-facing experiences.
          </p>
          <p>
            Each combination highlights (1) how I tend to show up in that mix,
            (2) the kind of output you can expect — roadmaps, dashboards,
            portals, playbooks, or narrative assets — and (3) concrete examples
            drawn from past roles as a full-stack product builder, API solutions
            engineer, software engineering fellow, and customer-success leader.
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
                  const selected = isSelected(d.key);
                  return (
                    <button
                      key={d.key}
                      type="button"
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
                        {d.iconChar}
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
          When I join a team, I bring these blends with me: engineering you can
          trust, product instincts shaped by real users, and a maker’s eye for
          the details that turn “just a feature” into part of someone’s story.
        </p>
      </section>
    </div>
  );
}