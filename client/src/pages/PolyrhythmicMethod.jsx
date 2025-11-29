// src/pages/PolyrhythmicMethod.jsx
import React, { useMemo, useState } from "react";
import "./PolyrhythmicMethod.css";

/* =========================================================
   DISCIPLINES (for the blend tool)
   ========================================================= */

const DISCIPLINES = [
  {
    key: "web",
    label: "Web & Software",
    chipLabel: "Web & Software",
    legendLabel: "Web & Software",
    color: "#3b82f6",
    iconChar: "💻",
  },
  {
    key: "product",
    label: "Product & UX",
    chipLabel: "Product & UX",
    legendLabel: "Product & UX Design",
    color: "#f97316",
    iconChar: "📐",
  },
  {
    key: "problem",
    label: "Problem Solving",
    chipLabel: "Problem Solving",
    legendLabel: "Technical Problem Solving",
    color: "#a855f7",
    iconChar: "🧠",
  },
  {
    key: "craft",
    label: "Craft & Making",
    chipLabel: "Craft & Making",
    legendLabel: "Craft & Making",
    color: "#facc15",
    iconChar: "🛠️",
  },
  {
    key: "story",
    label: "Story & Music",
    chipLabel: "Story & Music",
    legendLabel: "Story, Music & Creative Life",
    color: "#ec4899",
    iconChar: "🎵",
  },
  {
    key: "ai",
    label: "AI & Systems",
    chipLabel: "AI & Systems",
    legendLabel: "AI & Systems Thinking",
    color: "#22c55e",
    iconChar: "🤖",
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
   (title + paragraphs, now including AI as a full rhythm)
   ========================================================= */

const BLEND_RECIPES = {
  "": {
    title: "Choose a Blend to See the Work",
    paragraphs: [
      `Start by toggling one or more disciplines on the left. As you add them, the blend shifts and the description updates to show the kind of work, outcomes, and collaboration style you can expect from me with that mix.`,
      `It’s a small demo of how I connect code, craft, story, systems, and AI — tuned to the parts of my toolkit you’re most interested in.`,
    ],
  },

  /* ------------------------- SINGLES ------------------------- */

  web: {
    title: "Engineering With an Opinion",
    paragraphs: [
      `With just web & software selected, you’re seeing me primarily as an engineer: React, Firebase, auth flows, data models, and the plumbing that holds real products together.`,
      `You can expect reliable implementation, clear technical trade-offs, and code structured so future work doesn’t have to fight the past — plus practical artifacts like API contracts, environment checklists, and admin tools that make the system easier to support day to day.`,
    ],
  },
  product: {
    title: "UX With a Point of View",
    paragraphs: [
      `With only product & UX in play, the work is about listening, mapping flows, and shaping interfaces that feel obvious in hindsight.`,
      `You can expect customer-aware journeys, crisp user stories, and design decisions that aren’t just pretty — alongside concrete outputs like wireframes, flow maps, and “happy path vs edge case” notes that make it easier for engineers and stakeholders to stay aligned.`,
    ],
  },
  problem: {
    title: "The Systems Troubleshooter",
    paragraphs: [
      `When you select only problem solving, you’re asking me to be a pattern-maker and constraint mapper before anything else.`,
      `You can expect structured thinking, simplified diagrams, and a clear path from “this is a mess” to “here’s the next small, high-leverage move we should ship,” often captured as decision docs, runbooks, or playbooks that teams can reuse when similar issues show up later.`,
    ],
  },
  craft: {
    title: "The Maker in the Room",
    paragraphs: [
      `On its own, craft & making is me in the shop: jigs, shells, finishes, fixtures, and processes that turn ideas into physical, repeatable reality.`,
      `You can expect build plans, thoughtful trade-offs between precision and practicality, and an appreciation for how objects feel in the hand — expressed through process checklists, fixture designs, and repeatable workflows that make future builds smoother and more consistent.`,
    ],
  },
  story: {
    title: "Making the Work Feel Human",
    paragraphs: [
      `With only story & music selected, you’re asking for narrative, mood, and emotional clarity around the work.`,
      `You can expect launch stories, copy that actually sounds like people, and sound or visuals that help customers feel why the product matters — usually delivered as marketing copy, onboarding language, or narrative outlines that can be used across product, sales, and support surfaces.`,
    ],
  },
  ai: {
    title: "AI & Systems Rhythm",
    paragraphs: [
      `With only AI & systems selected, the focus is on designing feedback loops: how data flows, how tools talk to each other, and where AI can safely accelerate the work without taking over judgment.`,
      `You can expect structured prompts, evaluation loops, and small automations that help teams move faster while staying grounded in clear constraints and human-owned decisions.`,
    ],
  },

  /* --------------------------- PAIRS ------------------------- */

  "web+product": {
    title: "From Spec to Shipping",
    paragraphs: [
      `This blend is where product ideas stop living in decks and start living in code. UX decisions and engineering trade-offs happen in the same conversation.`,
      `You can expect pragmatic features that ship, a clean hand-off between design and implementation, and a codebase that still respects the original product intent — supported by UX specs that map cleanly to components and tickets that tell the whole story.`,
    ],
  },
  "web+problem": {
    title: "Refactoring the Mess",
    paragraphs: [
      `Here the focus is taking something tangled — legacy code, mismatched APIs, brittle flows — and making it workable again.`,
      `You can expect careful debugging, simplified architecture, and tooling that turns recurring pain points into one-time fixes, documented as before/after diagrams and migration plans.`,
    ],
  },
  "web+craft": {
    title: "Digital Tools for Physical Work",
    paragraphs: [
      `This mix connects the workshop to the web. Think build portals, production trackers, and internal tools tuned for real hands-on workflows.`,
      `You can expect systems that actually reflect how work happens on the floor: fewer spreadsheets, more purpose-built interfaces, and tangible outputs like production dashboards, build timelines, and QC checklists that live in a portal instead of in someone’s head.`,
    ],
  },
  "web+story": {
    title: "Interactive Stories",
    paragraphs: [
      `With web plus story, we’re building experiences where the narrative is baked into the product itself — not bolted on at the end.`,
      `You can expect interactive pages, portals, or tools that explain themselves and feel alive, along with narrative-driven UX flows and microcopy that keep the story consistent across the experience.`,
    ],
  },
  "product+problem": {
    title: "Design That Solves the Right Problem",
    paragraphs: [
      `This blend is about making sure we’re designing for the real constraint, not just the loudest request.`,
      `You can expect clarified goals, prioritised use cases, and flows that quietly reduce support tickets — often delivered as problem-framing docs, prioritized journey maps, and backlog plans that make it clear what we are and aren’t doing next.`,
    ],
  },
  "product+craft": {
    title: "UX You Can Hold",
    paragraphs: [
      `Here, the product thinking extends all the way into the physical world — packaging, unboxing, documentation, and how it feels to use the thing in real life.`,
      `You can expect experiences where the portal, the instrument, and the follow-up all feel like one continuous story, supported by unboxing flows, care guides, and portal touchpoints designed as one journey.`,
    ],
  },
  "product+story": {
    title: "Narrative-Driven Product",
    paragraphs: [
      `This pairing makes sure every interaction has a story behind it: who it’s for, what it unlocks, and how it fits into someone’s day.`,
      `You can expect clear microcopy, thoughtful onboarding, and surfaces that speak the same language, backed by messaging hierarchies and tone guidelines.`,
    ],
  },
  "problem+craft": {
    title: "Fixing Bottlenecks in the Shop",
    paragraphs: [
      `Here the focus is on process: jigs, fixtures, layouts, and workflows that remove friction from physical builds.`,
      `You can expect measured tweaks that save time, reduce error rates, and make the craft work feel more like a practiced performance than a scramble — captured as revised SOPs and layout diagrams.`,
    ],
  },
  "problem+story": {
    title: "Clarity in the Chaos",
    paragraphs: [
      `This mix turns complex situations into explanations people can actually follow — diagrams, narratives, and metaphors that stick.`,
      `You can expect clear write-ups, honest post-mortems, and communication that helps teams stay aligned when things are noisy.`,
    ],
  },
  "craft+story": {
    title: "Artifacts With a Story",
    paragraphs: [
      `With craft and story together, every object carries its own narrative — where it came from, how it was made, and who it’s for.`,
      `You can expect documented builds, legacy portals, and media that turn a one-off purchase into a longer-term relationship.`,
    ],
  },

  /* PAIRS WITH AI */

  "web+ai": {
    title: "Code, Systems & Smart Helpers",
    paragraphs: [
      `With web & software plus AI, we’re building systems that can observe themselves: logs, metrics, and assistants that sit close to the code instead of feeling bolted on.`,
      `You can expect guarded automations, AI-assisted debugging, and small copilots for admins or support — always wired to clear constraints and a data model we actually understand.`,
    ],
  },
  "product+ai": {
    title: "AI-Aware Product Design",
    paragraphs: [
      `Here, product & UX decisions are made with AI in mind from day one: where it should appear, how it should be constrained, and how to keep users in control.`,
      `You can expect flows that clearly signal what’s human vs machine, scoped assistants that solve specific problems, and UX that keeps AI from feeling like a mysterious black box.`,
    ],
  },
  "problem+ai": {
    title: "Pattern-Finding With Guardrails",
    paragraphs: [
      `Problem solving plus AI is about using models to explore options and spot patterns faster — not to hand them the steering wheel.`,
      `You can expect structured experiments, evaluation criteria, and write-ups that show what AI is good at in this context and where humans need to step in.`,
    ],
  },
  "craft+ai": {
    title: "Augmented Craft Work",
    paragraphs: [
      `With craft & making plus AI, we stay firmly in the physical world while using AI for planning, documentation, and “what if” scenarios.`,
      `You can expect smarter checklists, annotated build plans, and assistants that help capture the process — while the actual cuts, finishes, and tuning stay human-controlled.`,
    ],
  },
  "story+ai": {
    title: "Story, Edited by a Human",
    paragraphs: [
      `Story & music plus AI means using tools for expansion, variation, and remixing — then cutting it back down with taste and intent.`,
      `You can expect faster exploration of voice and framing, with final copy, narratives, and musical decisions still owned and signed off by me.`,
    ],
  },

  /* -------------------------- TRIPLES ------------------------ */

  "web+product+problem": {
    title: "Full-Stack Problem Solver",
    paragraphs: [
      `This blend is for when you need someone to live at the intersection of architecture, UX, and constraints.`,
      `You can expect well-reasoned technical plans, product decisions backed by trade-offs, and a path from “we’re stuck” to “here’s what we’re shipping next.”`,
    ],
  },
  "web+product+craft": {
    title: "Digital Front Door to Physical Craft",
    paragraphs: [
      `Here, portals and tools are designed specifically around a physical process — like the lifecycle of a custom drum or a handcrafted product line.`,
      `You can expect customer-facing and internal experiences that stay in sync with reality: build phases, timelines, media, and logistics all in one ecosystem.`,
    ],
  },
  "web+product+story": {
    title: "Story-First Product Experiences",
    paragraphs: [
      `This mix creates interactive stories: the product explains itself through the way it’s built, not just through documentation.`,
      `You can expect flows that feel narrative, content wired into the UI, and launches where messaging, product, and visuals line up.`,
    ],
  },
  "web+problem+craft": {
    title: "Tooling for the Shop Floor",
    paragraphs: [
      `Here the work is about building tools that remove bottlenecks from physical operations — inventory, scheduling, QC, or build tracking.`,
      `You can expect dashboards grounded in how the work is actually done, plus configuration and training material that make it easy for non-technical teammates to own the system.`,
    ],
  },
  "web+problem+story": {
    title: "Debugging With Context",
    paragraphs: [
      `This blend is equal parts engineer, detective, and translator.`,
      `You can expect clear incident write-ups, dashboards that tell a story, and code changes that come with human-readable explanations.`,
    ],
  },
  "web+craft+story": {
    title: "Portals for Living Artifacts",
    paragraphs: [
      `Here we’re creating digital homes for physical work — portals that follow an artifact from first sketch to final recording or delivery.`,
      `You can expect rich build histories, media, and storytelling around each artifact, all anchored in a reliable web experience.`,
    ],
  },
  "product+problem+craft": {
    title: "Designing Better Processes",
    paragraphs: [
      `This blend reshapes how the work gets done — not just what the interface looks like.`,
      `You can expect updated workflows, clearer responsibilities, and tools that feel built around how craftspeople actually move through a day.`,
    ],
  },
  "product+problem+story": {
    title: "Aligning People, Process, and Narrative",
    paragraphs: [
      `Here we’re making sure the story we tell about the product matches what it actually does and how teams operate behind the scenes.`,
      `You can expect tighter alignment between roadmaps, customer promises, and internal reality.`,
    ],
  },
  "product+craft+story": {
    title: "Experience Design, End to End",
    paragraphs: [
      `This blend treats the entire journey as one experience: discovery, purchase, build, delivery, and the story that lives on afterward.`,
      `You can expect consistent details across web, packaging, portals, and follow-ups.`,
    ],
  },
  "problem+craft+story": {
    title: "Meaningful Fixes, Memorable Results",
    paragraphs: [
      `This mix focuses on fixing what’s broken in a way that also deepens the story — not just patching, but improving how people feel about the work.`,
      `You can expect thoughtful changes that are documented, communicated, and celebrated so teams can see the arc from issue to insight.`,
    ],
  },

  /* TRIPLES WITH AI */

  "web+product+ai": {
    title: "AI-Native Product Features",
    paragraphs: [
      `Here, web, product, and AI come together to design features where AI isn’t a gimmick, it’s part of the core value.`,
      `You can expect scoped assistants, smart defaults, and guardrails baked into the UX and data model so the feature feels powerful but predictable.`,
    ],
  },
  "web+problem+ai": {
    title: "Observability & Assisted Ops",
    paragraphs: [
      `This blend uses AI to help watch the system while web and problem solving keep it understandable and fixable.`,
      `You can expect anomaly detection, triage helpers, and runbooks that explain both the automation and how to override it when you need to.`,
    ],
  },
  "web+craft+ai": {
    title: "Bridging Shop Floor and Cloud",
    paragraphs: [
      `Web, craft, and AI together mean the physical workflow and the digital system actually learn from each other.`,
      `You can expect build-tracking dashboards that surface patterns, suggestions for process tweaks, and documentation that evolves as the craft does.`,
    ],
  },
  "web+story+ai": {
    title: "Interactive, Adaptive Story Surfaces",
    paragraphs: [
      `Here we use AI to adapt story-driven experiences in small, controlled ways — while the core narrative stays human-shaped.`,
      `You can expect personalized copy or sequencing inside a fixed narrative frame, with clear boundaries on tone and claims.`,
    ],
  },
  "product+problem+ai": {
    title: "Decision Loops With AI in the Room",
    paragraphs: [
      `Product, problem solving, and AI together focus on tightening feedback: how we learn from users and systems, and what we do next.`,
      `You can expect instrumentation plans, experiment designs, and AI helpers that surface insights without making the decisions for us.`,
    ],
  },
  "product+craft+ai": {
    title: "AI-Aware Physical Experiences",
    paragraphs: [
      `This blend designs physical products and journeys that assume AI will be part of the support and storytelling layer.`,
      `You can expect care flows, onboarding, and portal experiences where AI helps explain the craft, not replace it.`,
    ],
  },
  "product+story+ai": {
    title: "Scaling Story Without Losing Voice",
    paragraphs: [
      `Product, story, and AI here aim to reach more people without sounding generic.`,
      `You can expect tightly defined voice guides, prompt patterns, and editorial passes that keep the personality intact while AI handles some of the volume.`,
    ],
  },
  "problem+craft+ai": {
    title: "Continuous Improvement in the Shop",
    paragraphs: [
      `Problem solving, craft, and AI focus on finding and smoothing the friction points in physical workflows.`,
      `You can expect small, measurable experiments, with AI helping analyze patterns in time, defects, or throughput while humans choose what to change.`,
    ],
  },
  "problem+story+ai": {
    title: "Making Complex Things Legible",
    paragraphs: [
      `This mix uses AI as a drafting tool to explore ways of explaining complex situations — with problem solving and story doing the editing.`,
      `You can expect faster iteration on diagrams, FAQs, and narratives, then a human pass that makes them honest and clear.`,
    ],
  },
  "craft+story+ai": {
    title: "Documented, Shareable Craft",
    paragraphs: [
      `Craft, story, and AI together focus on capturing the build in a way that’s easy to share and revisit.`,
      `You can expect semi-automated build logs, caption drafts, and story beats, all curated so the final artifact still feels handcrafted, not machine-generated.`,
    ],
  },

  /* --------------------------- QUADS ------------------------ */

  "web+product+problem+craft": {
    title: "The Product-Minded Builder",
    paragraphs: [
      `Here you’re getting a builder who can design the system, shape the flows, debug the weirdness, and understand how it all lands in the physical world.`,
      `You can expect cohesive tools and experiences where the line between “product” and “operations” is intentionally blurred in your favor.`,
    ],
  },
  "web+product+problem+story": {
    title: "From Incident to Story",
    paragraphs: [
      `This blend is built for complex, user-facing systems where reliability and narrative both matter.`,
      `You can expect strong engineering foundations, UX that respects constraints, and communication that keeps stakeholders informed without drowning them in detail.`,
    ],
  },
  "web+product+craft+story": {
    title: "Digital, Physical, and Everything Between",
    paragraphs: [
      `Here the web experience, the physical artifact, and the surrounding story are treated as one product.`,
      `You can expect portals tied directly to real-world builds and details that make the whole system feel handcrafted rather than stitched together.`,
    ],
  },
  "web+problem+craft+story": {
    title: "Resilient Systems With a Human Face",
    paragraphs: [
      `This blend balances reliability, physical reality, and the stories people tell about the work.`,
      `You can expect strong troubleshooting, durable processes, and communication that helps customers and teammates feel taken care of.`,
    ],
  },
  "product+problem+craft+story": {
    title: "Orchestrating the Whole Experience",
    paragraphs: [
      `Here the focus is orchestrating everything around the core product: expectations, processes, and the human experience at each step.`,
      `You can expect aligned roadmaps, smoother operations, and narratives that make sense to customers, leaders, and the people doing the hands-on work.`,
    ],
  },

  /* QUADS WITH AI */

  "web+product+problem+ai": {
    title: "AI in the Core Stack, Not as a Sticker",
    paragraphs: [
      `Web, product, problem solving, and AI together design systems where AI is part of the architecture, not an afterthought.`,
      `You can expect clear boundaries for what AI does, data models that support it, and UX that makes those boundaries visible to users and teams.`,
    ],
  },
  "web+product+craft+ai": {
    title: "Portals, Process, and Smart Support",
    paragraphs: [
      `This blend builds portals for physical work where AI helps with planning, status, and communication.`,
      `You can expect build timelines, checklists, and helper tools that stay grounded in the real constraints of the shop.`,
    ],
  },
  "web+product+story+ai": {
    title: "Adaptive Product Storytelling",
    paragraphs: [
      `Here, experiences adapt in small, meaningful ways using AI, while the core story and structure are designed up front.`,
      `You can expect personalized touches that still feel on-brand, backed by clear editorial rules and implementation details.`,
    ],
  },
  "web+problem+craft+ai": {
    title: "Operational Intelligence for Hands-On Work",
    paragraphs: [
      `Web, problem solving, craft, and AI work together to surface the right operational signals to the right people at the right time.`,
      `You can expect instrumentation, dashboards, and AI helpers that focus on real bottlenecks: time, material, and quality.`,
    ],
  },
  "web+problem+story+ai": {
    title: "Explaining the System as It Evolves",
    paragraphs: [
      `Here we use AI to help narrate what’s happening in complex systems — incidents, changes, trends — while engineering and story keep things accurate and human.`,
      `You can expect status updates, changelogs, and dashboards that feel like explanations, not just data dumps.`,
    ],
  },
  "web+craft+story+ai": {
    title: "Living Portals for Living Artifacts",
    paragraphs: [
      `This blend turns each physical build into a living, evolving digital story, with AI helping on the connective tissue.`,
      `You can expect rich project timelines, annotated media, and small automations that make it easy to keep the story up to date.`,
    ],
  },
  "product+problem+craft+ai": {
    title: "Designing Smarter, Smoother Operations",
    paragraphs: [
      `Product, problem solving, craft, and AI aim at the same thing: a smoother day for the people doing the work.`,
      `You can expect revised workflows, AI-assisted planning tools, and clear responsibilities that respect both people’s time and the realities of the shop.`,
    ],
  },
  "product+problem+story+ai": {
    title: "Strategy, Reality, and Narrative Aligned",
    paragraphs: [
      `This mix keeps what we say we’re doing, what we’re actually doing, and how we talk about it all in sync — with AI helping us see drift sooner.`,
      `You can expect planning docs, internal comms, and customer-facing narratives that are easier to keep aligned over time.`,
    ],
  },
  "product+craft+story+ai": {
    title: "End-to-End Journeys With Smart Support",
    paragraphs: [
      `Product, craft, story, and AI together design journeys where each stage can be supported, documented, and communicated without feeling robotic.`,
      `You can expect onboarding, build, and follow-up experiences that stay human while using AI to fill in details and surface the right next step.`,
    ],
  },
  "problem+craft+story+ai": {
    title: "Learning From Every Build",
    paragraphs: [
      `Problem solving, craft, story, and AI focus on turning each project into learning material for the next.`,
      `You can expect structured retros, pattern libraries, and build stories where AI does some of the organizing and humans do the meaning-making.`,
    ],
  },

  /* --------------------------- QUINTS ------------------------ */

  "web+product+problem+craft+ai": {
    title: "Systems That Respect the Shop",
    paragraphs: [
      `This blend uses all the technical and operational tools — plus AI — to support physical craft rather than fight it.`,
      `You can expect ecosystems where the portal, processes, and analytics make it easier to build great things instead of adding noise.`,
    ],
  },
  "web+product+problem+story+ai": {
    title: "Complex Systems, Clear Story",
    paragraphs: [
      `Here, the full digital stack lines up with a narrative that leaders, customers, and teams can actually follow — with AI helping keep the picture current.`,
      `You can expect strong foundations, thoughtful UX, clear comms, and assistants that help people stay oriented as the system evolves.`,
    ],
  },
  "web+product+craft+story+ai": {
    title: "Unified Product Across Web, Shop, and Story",
    paragraphs: [
      `This blend treats the entire ecosystem — digital surfaces, physical builds, and narrative — as one product, with AI helping connect the dots.`,
      `You can expect consistent details, shared data, and stories that are easy to keep up-to-date without burning out the humans involved.`,
    ],
  },
  "web+problem+craft+story+ai": {
    title: "Resilient, Explainable Operations",
    paragraphs: [
      `Here the focus is on resilience: making sure the system survives reality and that people understand what’s going on.`,
      `You can expect instrumentation, troubleshooting flows, and narrative patterns where AI assists but human ownership is obvious.`,
    ],
  },
  "product+problem+craft+story+ai": {
    title: "Orchestrating People, Process, and Signals",
    paragraphs: [
      `This blend pulls together product direction, real-world constraints, story, and AI to orchestrate the whole experience around a build or system.`,
      `You can expect aligned expectations, smoother handoffs, and communication that helps everyone see where they are in the journey.`,
    ],
  },

  /* -------------------------- ALL SIX ----------------------- */

  "web+product+problem+craft+story+ai": {
    title: "The Full Polyrhythmic Stack",
    paragraphs: [
      `This is everything at once: engineering, product, systems thinking, physical craft, story, and AI — all pointed at one problem.`,
      `You can expect me to move between strategy and implementation: sketching flows, shaping data models, designing AI’s role, building tools, tuning physical details, and wrapping everything in a narrative that feels honest, human, and sustainable to maintain.`,
    ],
  },
};

/* =========================================================
   COMPONENT
   ========================================================= */

export default function PolyrhythmicMethod() {
  // AI modal state
  const [aiModalOpen, setAiModalOpen] = useState(false);

  // Blend tool state
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
    const base = c1 || "#facc6b";

    const bg = `
      radial-gradient(circle at 0% 0%, ${(c1 || base) + "33"}, transparent 55%),
      radial-gradient(circle at 100% 0%, ${(c2 || c1 || base) + "33"}, transparent 55%),
      radial-gradient(circle at 0% 100%, ${(c3 || c2 || base) + "33"}, transparent 55%),
      radial-gradient(circle at 100% 100%, ${(c4 || c3 || base) + "33"}, transparent 55%),
      radial-gradient(circle at 50% 50%, ${base + "1f"}, #020617)
    `;

    const gradient = `linear-gradient(120deg, ${activeColors.join(", ")})`;

    return {
      background: bg,
      borderColor: "transparent",
      borderImageSource: gradient,
      borderImageSlice: 1,
      boxShadow:
        "0 20px 50px rgba(0,0,0,0.8), 0 0 0 1px rgba(15,23,42,0.8)",
    };
  }, [activeColors]);

  const closeAiModal = () => setAiModalOpen(false);

  return (
    <main className="pm-page">
      {/* HERO / INTRO */}
      <section className="pm-hero">
        <div className="pm-hero__eyebrow">My Approach</div>
        <h1 className="pm-hero__title">
          The <span>Polyrhythmic Method</span>
        </h1>
        <p className="pm-hero__tagline">
          A practical way to blend engineering, design, problem-solving, craft,
          story, and AI — without losing clarity.
        </p>
        <p className="pm-hero__body">
          As a drummer, I learned how to hold multiple rhythms at once without
          letting the song fall apart. As an engineer and builder, I work the
          same way. Each discipline is a rhythm. Some projects need only one.
          Others come alive when you layer two or three together with intent.
        </p>
        <p className="pm-hero__body">
          The Polyrhythmic Method is my way of naming that approach. It&apos;s
          the lens I use to decide{" "}
          <strong>what to focus on, when to blend disciplines, and how much</strong>{" "}
          of each to bring into a project so the result feels clear, human, and
          shippable.
        </p>
      </section>

      {/* CORE DISCIPLINES */}
      <section className="pm-section">
        <header className="pm-section__header">
          <h2 className="pm-section__title">The Core Rhythms</h2>
          <p className="pm-section__subtitle">
            Six disciplines I move between. Each one can stand alone, or lock in
            as part of a larger groove. AI is one of the rhythms — a systems
            layer that helps the others play tighter, not a replacement for
            human judgment.
          </p>
        </header>

        <div className="pm-grid pm-grid--disciplines">
          <article className="pm-card">
            <div className="pm-card__icon">🎧</div>
            <h3 className="pm-card__title">Web &amp; Software Engineering</h3>
            <p className="pm-card__body">
              React frontends, Firebase backends, auth flows, portals, and
              internal tools. I bias toward clear data models, simple APIs, and
              systems that stay flexible instead of brittle.
            </p>
          </article>

          <article className="pm-card">
            <div className="pm-card__icon">📐</div>
            <h3 className="pm-card__title">Product &amp; UX Design</h3>
            <p className="pm-card__body">
              I care more about flows than pixels. How someone discovers a
              feature, understands it quickly, and feels confident about what
              happens next — without needing a manual.
            </p>
          </article>

          <article className="pm-card">
            <div className="pm-card__icon">🧠</div>
            <h3 className="pm-card__title">Technical Problem Solving</h3>
            <p className="pm-card__body">
              Untangling messy constraints, mapping the real problem, and
              finding the smallest change that unlocks the most value. Then
              shipping and learning from reality.
            </p>
          </article>

          <article className="pm-card">
            <div className="pm-card__icon">🛠️</div>
            <h3 className="pm-card__title">Craft &amp; Making</h3>
            <p className="pm-card__body">
              Building custom snares keeps me honest. Every drum moves from raw
              lumber to tuned instrument with a documented lifecycle, portal,
              media, and story. It&apos;s product thinking you can hold in your
              hands.
            </p>
          </article>

          <article className="pm-card">
            <div className="pm-card__icon">🎵</div>
            <h3 className="pm-card__title">Story, Music &amp; Creative Life</h3>
            <p className="pm-card__body">
              Music, photography, and writing are how I process and share the
              work. They show up in tone, narrative, and the small details that
              make tools feel human instead of clinical.
            </p>
          </article>

          {/* AI as a sixth rhythm */}
          <article className="pm-card pm-card--ai">
            <div className="pm-card__icon">🤖</div>
            <h3 className="pm-card__title">AI &amp; Systems Rhythm</h3>
            <p className="pm-card__body">
              I use AI as part of the rhythm section: great at exploring
              options, stress-testing ideas, and speeding up iteration — while
              human judgment, ethics, and taste stay in charge of the final
              decisions.
            </p>
            <button
              type="button"
              className="pm-ai-card__cta"
              onClick={() => setAiModalOpen(true)}
            >
              How I use AI (and where I don&apos;t)
            </button>
          </article>
        </div>
      </section>

      {/* BLENDED MODES OVERVIEW */}
      <section className="pm-section">
        <header className="pm-section__header">
          <h2 className="pm-section__title">Focused vs. Blended Work</h2>
          <p className="pm-section__subtitle">
            Some problems need one clear pulse. Others need two, three, or more
            rhythms working together. The method is mostly about knowing{" "}
            <em>which</em> you need and when.
          </p>
        </header>

        <div className="pm-grid pm-grid--modes">
          <article className="pm-mode">
            <h3 className="pm-mode__label">Single Rhythm</h3>
            <p className="pm-mode__tag">One discipline in focus</p>
            <p className="pm-mode__body">
              Used when clarity matters most. Examples: hardening an auth flow,
              refactoring a component, debugging production issues, or
              fine-tuning the physical shell of a drum.
            </p>
          </article>

          <article className="pm-mode">
            <h3 className="pm-mode__label">Dual Blend</h3>
            <p className="pm-mode__tag">Two disciplines locked together</p>
            <p className="pm-mode__body">
              The most common mode. Engineering + UX for a new feature. Story +
              Product for onboarding and email flows. Craft + Engineering for
              NFC tagging on physical drums. AI can join either side when it
              actually helps.
            </p>
          </article>

          <article className="pm-mode">
            <h3 className="pm-mode__label">Tri-Blend</h3>
            <p className="pm-mode__tag">Three disciplines interlocking</p>
            <p className="pm-mode__body">
              Saved for complex work that still needs to feel simple. Think:
              building the SoundLegend portal, designing artist dashboards, or
              creating tools that serve both customers and internal teams.
            </p>
          </article>

          <article className="pm-mode pm-mode--highlight">
            <h3 className="pm-mode__label">Full Polyrhythm</h3>
            <p className="pm-mode__tag">
              All disciplines, one coherent experience
            </p>
            <p className="pm-mode__body">
              This is the “signature dish.” Used for full-stack initiatives
              where brand, story, product, systems, AI, and physical craft all
              matter — like launching a drum line with its own portal, NFC
              verification, media, and customer journey.
            </p>
          </article>
        </div>
      </section>

      {/* BLEND TOOL */}
      <section className="pm-section pm-section--blend">
        <header className="pm-section__header">
          <h2 className="pm-section__title">Polyrhythmic Blend Tool</h2>
          <p className="pm-section__subtitle">
            Toggle the core rhythms to see how I’d typically show up in that
            mix — and the kinds of outputs you can expect at different blend
            levels, including when AI joins the groove.
          </p>
        </header>

        <div className="pm-blend">
          {/* Left: controls */}
          <div className="pm-blend__controls">
            <span className="pm-blend__controls-label">
              Blend these disciplines:
            </span>
            <div className="pm-blend__chip-row">
              {DISCIPLINES.map((d) => {
                const selected = selectedKeys.includes(d.key);
                return (
                  <button
                    key={d.key}
                    type="button"
                    className={
                      "pm-blend__chip" +
                      (selected ? " pm-blend__chip--active" : "")
                    }
                    style={
                      selected
                        ? {
                            borderColor: d.color + "dd",
                            boxShadow: `0 0 0 1px ${d.color}55, 0 10px 22px rgba(15,23,42,0.9)`,
                          }
                        : undefined
                    }
                    onClick={() => handleToggle(d.key)}
                  >
                    <span
                      className="pm-blend__chip-dot"
                      style={{ backgroundColor: d.color }}
                    />
                    {d.chipLabel}
                  </button>
                );
              })}

              <button
                type="button"
                className="pm-blend__chip pm-blend__chip--utility"
                onClick={handleSelectAll}
              >
                Select all
              </button>
              <button
                type="button"
                className="pm-blend__chip pm-blend__chip--utility"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </div>

          {/* Right: output */}
          <aside className="pm-blend__output" style={blendStyles}>
            <h3 className="pm-blend__output-title">{activeRecipe.title}</h3>

            {activeKeys.length > 0 && (
              <ul className="pm-blend__icon-row">
                {activeKeys.map((key) => {
                  const d = DISCIPLINES.find((disc) => disc.key === key);
                  if (!d) return null;
                  return (
                    <li key={d.key} className="pm-blend__icon">
                      <span
                        className="pm-blend__icon-badge"
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

            <div className="pm-blend__body">
              {activeRecipe.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* HOW IT SHOWS UP IN REAL WORK */}
      <section className="pm-section">
        <header className="pm-section__header">
          <h2 className="pm-section__title">How This Shows Up in Practice</h2>
          <p className="pm-section__subtitle">
            A few examples of where the Polyrhythmic Method is already running
            under the hood.
          </p>
        </header>

        <div className="pm-grid pm-grid--examples">
          <article className="pm-example">
            <h3 className="pm-example__title">
              SoundLegend Artist Portal &amp; Legacy Tools
            </h3>
            <p className="pm-example__pill">
              🎧 Engineering · 📐 UX · 🧠 Problem Solving · 🛠️ Craft · 🎵 Story · 🤖
              AI
            </p>
            <p className="pm-example__body">
              Artist-facing portals that show build progress, handle file
              uploads, and tell the story of each drum — from raw lumber to
              final mix. NFC tags, admin dashboards, AI-assisted helpers, and
              media all pull from the same lifecycle.
            </p>
          </article>

          <article className="pm-example">
            <h3 className="pm-example__title">
              Admin Dashboards &amp; Internal Tools
            </h3>
            <p className="pm-example__pill">
              🎧 Engineering · 📐 UX · 🧠 Problem Solving · 🤖 AI
            </p>
            <p className="pm-example__body">
              Tools for managing orders, timelines, risk, and customer
              communication. Designed so future features plug in cleanly instead
              of fighting the existing data model, with AI used where it helps
              surface the right information faster.
            </p>
          </article>

          <article className="pm-example">
            <h3 className="pm-example__title">
              Custom Drum Builds &amp; Launch Stories
            </h3>
            <p className="pm-example__pill">
              🛠️ Craft · 🎵 Story · 📐 Product &amp; UX
            </p>
            <p className="pm-example__body">
              Each instrument is treated like a product launch: scoped,
              documented, photographed, and wrapped in a story that the drummer
              can actually share with their own audience — with AI occasionally
              helping explore options, not write the story for us.
            </p>
          </article>
        </div>
      </section>

      {/* CTA / HOW WE CAN WORK TOGETHER */}
      <section className="pm-section pm-section--cta">
        <header className="pm-section__header pm-section__header--center">
          <h2 className="pm-section__title">How This Helps You</h2>
          <p className="pm-section__subtitle">
            Whether you need hands-on build work, a second brain for complex
            decisions, or someone to help shape the experience end-to-end.
          </p>
        </header>

        <div className="pm-grid pm-grid--cta">
          <article className="pm-cta">
            <h3 className="pm-cta__title">Product &amp; Engineering Work</h3>
            <p className="pm-cta__body">
              Full-stack features, portals, internal tools, and system design.
              I can drop in on an existing product, untangle the complexity, and
              ship improvements that feel obvious in hindsight.
            </p>
          </article>

          <article className="pm-cta">
            <h3 className="pm-cta__title">Hybrid &amp; Blended Projects</h3>
            <p className="pm-cta__body">
              Work that sits between worlds — physical/digital, artist/customer,
              story/system. This is where the polyrhythmic approach shines the
              most, especially when AI is part of the picture.
            </p>
          </article>

          <article className="pm-cta">
            <h3 className="pm-cta__title">Coaching &amp; Mentorship</h3>
            <p className="pm-cta__body">
              Helping engineers, creatives, and founders use this way of
              thinking in their own work: deciding when to focus, when to blend,
              and how to ship without burning out — even as AI becomes part of
              their stack.
            </p>
          </article>
        </div>

        <p className="pm-footer-text">
          If you&apos;re working on something that needs more than one
          discipline in the room, that&apos;s usually where I do my best work.
        </p>
      </section>

      {/* AI MODAL */}
      {aiModalOpen && (
        <div className="pm-ai-modal-backdrop" onClick={closeAiModal}>
          <div
            className="pm-ai-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <header className="pm-ai-modal__header">
              <h2 className="pm-ai-modal__title">
                How I Use AI (And Where I Don&apos;t)
              </h2>
            <button
                type="button"
                className="pm-ai-modal__close"
                onClick={closeAiModal}
                aria-label="Close AI usage details"
              >
                ×
              </button>
            </header>

            <div className="pm-ai-modal__body">
              <div className="pm-ai-modal__section">
                <h3>Where AI shows up in my work</h3>
                <p>
                  I use tools like this as part of the band — to explore
                  options, stress-test ideas, and move faster on the parts that
                  benefit from iteration: naming, draft copy, refactoring ideas,
                  edge cases, and “what if we tried it this way?” experiments.
                </p>
                <ul>
                  <li>
                    Drafting and refining copy that I then edit, tighten, and
                    personalize.
                  </li>
                  <li>
                    Exploring design and architecture options before choosing a
                    direction.
                  </li>
                  <li>
                    Generating test data, small utilities, and boilerplate that
                    I still read and adjust by hand.
                  </li>
                  <li>
                    Summarizing existing context so I can stay oriented in
                    complex projects.
                  </li>
                </ul>
              </div>

              <div className="pm-ai-modal__section">
                <h3>Where I don&apos;t lean on it</h3>
                <p>
                  I don&apos;t ask AI to make final calls on product strategy,
                  architecture, hiring, or anything that deeply affects people.
                  I also don&apos;t trust it blindly with facts, numbers, or
                  sensitive decisions.
                </p>
                <ul>
                  <li>
                    Final product decisions, trade-offs, and commitments live
                    with humans.
                  </li>
                  <li>
                    I treat AI output as a draft to review, not a source of
                    truth.
                  </li>
                  <li>
                    Anything that touches privacy, ethics, or people&apos;s
                    livelihoods gets a much higher bar than “the model said it
                    was fine.”
                  </li>
                </ul>
              </div>

              <div className="pm-ai-modal__section">
                <h3>How I think about ownership &amp; credit</h3>
                <p>
                  When I use AI in a project, I&apos;m transparent about it and
                  clear about what parts are human-authored vs. machine-assisted.
                  My job is to bring judgment, taste, and context — and to
                  ultimately stand behind the work as mine.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}