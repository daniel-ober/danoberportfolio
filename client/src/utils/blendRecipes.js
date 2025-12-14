// client/src/utils/blendRecipes.js
// Blend recipes for EVERY combination of the 6 disciplines (2^6 = 64, incl. empty).
// Shape matches your current UI expectations:
// { title: string, paragraphs: [approach, optimize, notes], examples: string[] }

export const ORDER = ["web", "product", "problem", "craft", "story", "ai"];

export function makeKey(keys) {
  const arr = Array.isArray(keys) ? keys : [];
  return arr
    .slice()
    .sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b))
    .join("+");
}

function normalizeKeys(input) {
  if (Array.isArray(input)) return input.slice();
  if (typeof input === "string") return input.split("+").filter(Boolean);
  return [];
}

/**
 * Notes on content:
 * - paragraphs: [Approach, Optimize, Notes]
 * - examples: concrete proof bullets; keep these true + grounded
 */

export const BLEND_RECIPES = {
  // =========================
  // EMPTY
  // =========================
  "": {
    title: "Choose a Blend to See the Work",
    paragraphs: [
      "Toggle one or more disciplines. Each blend describes how I show up, how I decide, and how I ship.",
      "I optimize for clarity → reliability → outcomes: fewer seams, fewer surprises, more trust.",
      "This is intentionally specific: the point is to show how the mix changes the work.",
    ],
    examples: [],
  },

  // =========================
  // SINGLES (6)
  // =========================
  web: {
    title: "Engineering With an Opinion",
    paragraphs: [
      "I build systems-first: clear contracts, stable state, and debuggable flows.",
      "I optimize for simple data models, reliable auth, and tooling that keeps products operable day-to-day.",
      "I avoid brittle abstractions and hidden state that only the original author can maintain.",
    ],
    examples: [
      "Built and shipped the Ober Artisan Drums platform (React, Firebase, Stripe) with admin tooling and workflows.",
      "Implemented auth-gated portals/dashboards with Firestore-backed state and consistent update patterns.",
    ],
  },

  product: {
    title: "UX With a Spine",
    paragraphs: [
      "I design journeys that feel obvious in hindsight: expectations, states, and “what happens next?” are the real UI.",
      "I optimize for IA, microcopy, and flow decisions that reduce confusion and support burden.",
      "I avoid feature creep and pretty screens that collapse under real edge cases and real data.",
    ],
    examples: [
      "Designed the SoundLegend portal UX so users land on progress, scope, and media—not a generic dashboard.",
      "Shaped admin flows around real operations (statuses, phases, system history) so volume doesn’t break the experience.",
    ],
  },

  problem: {
    title: "The Systems Troubleshooter",
    paragraphs: [
      "I turn ambiguity into an executable plan: clarify goal, name constraints, find leverage, ship.",
      "I optimize for repeatable fixes: root-cause notes, playbooks, and guardrails that reduce the next five incidents.",
      "I avoid symptom-chasing and “hero debugging” without documentation or a durable system change.",
    ],
    examples: [
      "De-risked API/integration problems by tracing failures across systems and standardizing error-handling patterns (JLL).",
      "Improved support workflows through pattern-finding, trend awareness, and operational discipline (CarGurus).",
    ],
  },

  craft: {
    title: "The Maker in the Room",
    paragraphs: [
      "I’m grounded in physical reality: tolerances, repeatability, and a clear definition of done.",
      "I optimize for workflows that reduce rework: phases, checklists, QA habits, and tight feedback loops.",
      "I avoid process theater—every step has to pay rent in quality or speed.",
    ],
    examples: [
      "Designed a multi-phase drum build lifecycle and mirrored it in the portal with checklists, timers, and notes.",
      "Built shop-floor-friendly tooling so what happens on the bench is reflected online without guesswork.",
    ],
  },

  story: {
    title: "Making the Work Feel Human",
    paragraphs: [
      "I make systems legible: calm clarity that reduces anxiety and builds trust.",
      "I optimize for communication that matches reality—microcopy, docs, and updates that prevent confusion.",
      "I avoid vague status language, marketing fog, and “we’ll update soon” with no concrete next step.",
    ],
    examples: [
      "Wrote portal/product copy that makes projects feel like chapters—not tickets—so users know what to expect.",
      "Translated complex situations into plain-language narratives that stakeholders can act on.",
    ],
  },

  ai: {
    title: "AI as a Systems Amplifier",
    paragraphs: [
      "I use AI as an assistant, not an authority: speed with judgment, guardrails, and verification.",
      "I optimize for option exploration, stress-testing, and draft acceleration without losing taste or truth.",
      "I avoid outsourcing decisions to a model or shipping unverified claims as “facts.”",
    ],
    examples: [
      "Used AI to generate variants/outlines and pressure-test scenarios, then curated + implemented the human-chosen path.",
      "Built repeatable AI workflows (constraints, review steps) so outputs stay consistent and usable.",
    ],
  },

  // =========================
  // PAIRS (15)
  // =========================
  "web+product": {
    title: "From Spec to Shipping",
    paragraphs: [
      "Product decisions and engineering tradeoffs happen in the same conversation—UX intent matches system behavior.",
      "I optimize for journeys that map cleanly to implementation: fewer handoffs, fewer mismatches, faster iteration.",
      "I avoid overbuilding; scope stays tight and instrumented early so reality shows up fast.",
    ],
    examples: [
      "Designed and built the SoundLegend portal end-to-end (IA → React → Firestore schema → auth-gated routing).",
      "Built admin experiences around real workflow states instead of “pretty but fragile” UI.",
    ],
  },

  "web+problem": {
    title: "Refactoring the Mess",
    paragraphs: [
      "I trace real failure paths, name the contract that broke, and refactor toward operable simplicity.",
      "I optimize for stable state, durable utilities, and guardrails that reduce repeat debugging.",
      "I avoid one-off patches that create new hidden complexity or future surprises.",
    ],
    examples: [
      "Standardized status/system-history patterns so drag-and-drop boards don’t reshuffle items unexpectedly.",
      "Turned scattered Firestore writes into reusable patterns to reduce drift and bugs.",
    ],
  },

  "web+craft": {
    title: "Digital Tools for Physical Work",
    paragraphs: [
      "I build software that mirrors real phases, checklists, and constraints—so the system stays honest.",
      "I optimize for tooling that reduces status-check messages and makes work visible without extra overhead.",
      "I avoid building “perfect” software that ignores how work actually moves in the real world.",
    ],
    examples: [
      "Built step-locked workflows with checklists/timers so shop reality matches portal reality.",
      "Designed internal tools around physical build phases instead of generic dashboards.",
    ],
  },

  "web+story": {
    title: "Interfaces That Explain Themselves",
    paragraphs: [
      "Narrative is a system feature: states, errors, and progress feel human and reduce support load.",
      "I optimize for legible UI language and predictable behavior so users trust what they see.",
      "I avoid tone that overpromises—copy must match what the system can actually deliver.",
    ],
    examples: [
      "Built trust-forward portal copy and progress language that reduces “what’s happening?” messages.",
      "Created clear status and expectation patterns across customer + admin surfaces.",
    ],
  },

  "web+ai": {
    title: "AI-Backed Engineering",
    paragraphs: [
      "AI accelerates exploration, but implementation stays disciplined, testable, and reviewable.",
      "I optimize for faster iteration on architecture/options while keeping reliability and operability high.",
      "I avoid magical code paths—AI suggestions become explicit, maintainable systems.",
    ],
    examples: [
      "Used AI to pressure-test edge cases/refactor options, then manually validated and implemented the final path.",
      "Built repeatable utilities and patterns so “smart” doesn’t become “fragile.”",
    ],
  },

  "product+problem": {
    title: "Design That Solves the Right Problem",
    paragraphs: [
      "We design for the real constraint, not the loudest request—tradeoffs are explicit early.",
      "I optimize for scope that ships: small moves that unlock clarity and reduce support burden.",
      "I avoid roadmap drift caused by unclear goals and unspoken constraints.",
    ],
    examples: [
      "Reframed feature asks into smaller, shippable scopes that improved clarity without bloating surface area.",
      "Used operational reality as a constraint so UX decisions remain honest.",
    ],
  },

  "product+craft": {
    title: "UX You Can Hold",
    paragraphs: [
      "The experience is end-to-end: documentation, onboarding, and after-purchase reality matter as much as UI.",
      "I optimize for expectations that match physical constraints and operational timelines.",
      "I avoid promise gaps—what we say must match what the process can sustain.",
    ],
    examples: [
      "Aligned portal milestones with real build events so digital progress matches shop reality.",
      "Designed post-purchase/support flows around how humans actually use and maintain physical products.",
    ],
  },

  "product+story": {
    title: "Narrative-Driven Product",
    paragraphs: [
      "Voice becomes the spine: consistent intention across onboarding, microcopy, and flow decisions.",
      "I optimize for calm clarity that makes complex systems feel understandable.",
      "I avoid generic tone—every sentence should do a job and reduce friction.",
    ],
    examples: [
      "Created copy systems that made complex flows feel calm and legible without a manual.",
      "Built narrative structure into portals so users always know what’s next.",
    ],
  },

  "product+ai": {
    title: "Coherent Journeys with Acceleration",
    paragraphs: [
      "AI speeds up exploration of UX/copy variants, while human taste locks the final voice and structure.",
      "I optimize for faster discovery without losing clarity, commitments, or tone consistency.",
      "I avoid AI-flavored sameness by enforcing guardrails and a human final pass.",
    ],
    examples: [
      "Generated multiple variants for tooltips/sections, then edited into one cohesive tone and flow.",
      "Used AI for ideation + refinement while keeping final product decisions human-owned.",
    ],
  },

  "problem+craft": {
    title: "Constraint-Led Tolerances",
    paragraphs: [
      "Root-cause thinking meets physical reality: define done, sequence the work, remove bottlenecks.",
      "I optimize for repeatable process improvements that reduce rework and keep quality consistent.",
      "I avoid process theater—if it doesn’t improve quality, speed, or predictability, it doesn’t survive.",
    ],
    examples: [
      "Built a phased drum build workflow with checklists/timers so quality doesn’t rely on memory.",
      "Converted recurring operational friction into structured phases and durable habits.",
    ],
  },

  "problem+story": {
    title: "Clarity in the Chaos",
    paragraphs: [
      "I translate complexity into a narrative people can act on: what happened, why it matters, what we do next.",
      "I optimize for shared understanding that speeds decisions and reduces repeated questions.",
      "I avoid jargon and vague updates—clarity is the fastest path back to trust.",
    ],
    examples: [
      "Wrote incident-style summaries that made technical realities legible to non-engineers.",
      "Turned messy situations into options, constraints, and concrete next steps.",
    ],
  },

  "problem+ai": {
    title: "Pattern-Finding at Scale",
    paragraphs: [
      "AI helps surface patterns and edge cases; I decide what matters and convert it into an executable plan.",
      "I optimize for faster triage and hypothesis generation while keeping verification human-controlled.",
      "I avoid letting models “decide” outcomes—models suggest, humans decide, systems verify.",
    ],
    examples: [
      "Used AI-assisted clustering/summary to reduce noise, then prioritized fixes by impact and feasibility.",
      "Pressure-tested scenarios with AI, then validated against real constraints before shipping changes.",
    ],
  },

  "craft+story": {
    title: "Artifacts With a Story",
    paragraphs: [
      "The artifact carries a narrative: why it exists, how it was made, and what the maker cared about.",
      "I optimize for documentation and progress updates that build confidence and reduce uncertainty.",
      "I avoid vague “artisan” claims; I show steps, constraints, and receipts.",
    ],
    examples: [
      "Built portal patterns for build notes, progress, and media so each project reads like a chapter.",
      "Created repeatable media-capture and documentation habits tied to real build phases.",
    ],
  },

  "craft+ai": {
    title: "Smart Processes, Real Judgment",
    paragraphs: [
      "AI accelerates documentation and iteration, while hands-on judgment stays in charge of quality.",
      "I optimize for better checklists, clearer steps, and faster learning loops across builds.",
      "I avoid ‘AI says’ decisions in the shop—the bench decides.",
    ],
    examples: [
      "Drafted and refined process notes/checklists with AI, then validated them against real build sessions.",
      "Used AI for iteration ideas while keeping quality gates physical and explicit.",
    ],
  },

  "story+ai": {
    title: "Scaling Story Without Losing Voice",
    paragraphs: [
      "AI helps scale drafts; I keep final voice human, consistent, and truthful.",
      "I optimize for variant generation and first-pass structure while preserving brand tone.",
      "I avoid generic outputs by using constraints + a human rewrite pass every time.",
    ],
    examples: [
      "Built repeatable AI-assisted writing patterns (variants → selection → rewrite) that preserve voice.",
      "Used AI to accelerate drafts while keeping truth/commitments grounded in ops reality.",
    ],
  },

  // =========================
  // TRIPLES (20)
  // =========================
  "web+product+problem": {
    title: "Full-Stack Problem Solver",
    paragraphs: [
      "Architecture, UX, and constraints stay aligned—decisions are made with the whole system in view.",
      "I optimize for clean contracts, clear flows, and fixes that reduce repeat incidents.",
      "I avoid solving the wrong problem by naming constraints before building features.",
    ],
    examples: [
      "Unified complex admin workflow states into a system that stays stable as scope grows.",
      "Turned ambiguous requirements into shippable increments with explicit tradeoffs.",
    ],
  },

  "web+product+craft": {
    title: "Digital Front Door to Physical Craft",
    paragraphs: [
      "The portal mirrors the real build: phases, checklists, and reality-based expectations.",
      "I optimize for tools that reduce back-and-forth and keep progress visible without overhead.",
      "I avoid software that fights the shop—workflow has to match real hands and real time.",
    ],
    examples: [
      "Built build-tracking experiences where admin + customer views read from the same lifecycle data.",
      "Created step-locked progression tied to completion so quality gates stay consistent.",
    ],
  },

  "web+product+story": {
    title: "Story-First Product Experiences",
    paragraphs: [
      "UX, system behavior, and narrative are designed together—so the product explains itself through use.",
      "I optimize for calm, legible states and language that reduces confusion and increases trust.",
      "I avoid feature dumps; every surface must reinforce the same throughline.",
    ],
    examples: [
      "Built narrative-forward portal copy + flows so customers always know what’s next.",
      "Designed UI states that match backend truth to prevent trust-breaking moments.",
    ],
  },

  "web+product+ai": {
    title: "AI-Assisted Product Engineering",
    paragraphs: [
      "AI speeds exploration, product shapes intent, engineering makes it real and durable.",
      "I optimize for rapid iteration without sacrificing consistency, safety, or operability.",
      "I avoid shipping AI output directly; it becomes structured UI + verifiable behavior.",
    ],
    examples: [
      "Used AI to explore variants, then implemented chosen patterns as stable React/Firebase features.",
      "Created guardrails so content stays consistent across growing product surface area.",
    ],
  },

  "web+problem+craft": {
    title: "Tooling for the Shop Floor",
    paragraphs: [
      "I build tools that remove bottlenecks from real operations: phases, constraints, and visible progress.",
      "I optimize for repeatable workflows that reduce rework and eliminate guesswork.",
      "I avoid systems that rely on memory; if it matters, it’s tracked.",
    ],
    examples: [
      "Implemented step-locked workflows that enforce the critical path from prep to QC.",
      "Built tooling that reflects physical constraints instead of generic task boards.",
    ],
  },

  "web+problem+story": {
    title: "Debugging With Context",
    paragraphs: [
      "I debug like a detective and communicate like a translator—technical truth, human clarity.",
      "I optimize for explainable systems: logs, states, and narratives teams can repeat.",
      "I avoid opaque fixes that only the debugger understands.",
    ],
    examples: [
      "Wrote “what happened / why / what changed” notes alongside code fixes to prevent repeats.",
      "Standardized error-handling patterns so support doesn’t play whack-a-mole.",
    ],
  },

  "web+problem+ai": {
    title: "Systems Debugging With a Co-Analyst",
    paragraphs: [
      "AI helps scan patterns; I validate hypotheses, implement the fix, and tighten the contract.",
      "I optimize for faster triage while keeping root-cause ownership human-led.",
      "I avoid model-driven conclusions without verification against real logs and constraints.",
    ],
    examples: [
      "Used AI to cluster issues and propose hypotheses, then hardened Firestore writes/auth flows by hand.",
      "Pressure-tested edge cases quickly, then shipped durable guardrails.",
    ],
  },

  "web+craft+story": {
    title: "Portals for Living Artifacts",
    paragraphs: [
      "The system honors the artifact: progress, media, and notes turn work into a shareable story.",
      "I optimize for transparency that reduces anxiety and builds long-term trust.",
      "I avoid vague updates—each phase has concrete evidence and language.",
    ],
    examples: [
      "Built portal structure where each build phase has notes/media so the story stays attached to reality.",
      "Created progress language that reduces “status check” messaging.",
    ],
  },

  "web+craft+ai": {
    title: "Smart Shop-Floor Tooling",
    paragraphs: [
      "Software mirrors physical workflow; AI accelerates iteration on documentation and checklists.",
      "I optimize for continuous improvement loops without losing quality gates.",
      "I avoid AI-driven operations; AI assists, the process stays explicit and testable.",
    ],
    examples: [
      "Used AI to draft/refine process docs, then validated against real build sessions before adopting.",
      "Built repeatable checklists/timers that keep craft measurable and consistent.",
    ],
  },

  "web+story+ai": {
    title: "Dynamic Story-Driven Interfaces",
    paragraphs: [
      "UI language stays human while AI accelerates drafting—final voice stays consistent and truthful.",
      "I optimize for scalable content without turning the product into generic boilerplate.",
      "I avoid unguarded AI content; the system enforces tone, length, and truth constraints.",
    ],
    examples: [
      "Used AI to explore copy variants, then locked human-written versions informed by what resonated.",
      "Structured content so future automation can stay inside safe voice boundaries.",
    ],
  },

  "product+problem+craft": {
    title: "Designing Better Processes",
    paragraphs: [
      "We design the workflow, not just the interface—constraints and handoffs are the real product.",
      "I optimize for predictable operations: clear checkpoints, reduced rework, and aligned expectations.",
      "I avoid ‘feature solutions’ to process problems; fix the system first.",
    ],
    examples: [
      "Mapped real build work into named phases with clear ownership and portal representation.",
      "Turned recurring friction into checklist-driven habits that hold up under volume.",
    ],
  },

  "product+problem+story": {
    title: "Aligning People, Process, and Narrative",
    paragraphs: [
      "The story matches the system: what we promise is backed by how the work actually operates.",
      "I optimize for clarity that makes decisions easier across stakeholders.",
      "I avoid dueling narratives—one truthful storyline that the system can support.",
    ],
    examples: [
      "Translated KPI/ops reality into clear narratives leaders and customers could repeat.",
      "Built messaging and UX that reduced confusion instead of adding surface area.",
    ],
  },

  "product+problem+ai": {
    title: "Decision Support for Messy Roadmaps",
    paragraphs: [
      "AI accelerates option mapping; product/problem framing chooses the tradeoffs that matter.",
      "I optimize for faster convergence: fewer meetings, clearer decisions, better sequencing.",
      "I avoid AI deciding priorities—humans own commitments and ethics.",
    ],
    examples: [
      "Used AI to simulate pros/cons of rollout orders, then chose the path that minimized risk while showing value early.",
      "Clustered ideas fast, then curated into an executable roadmap.",
    ],
  },

  "product+craft+story": {
    title: "Experience Design, End to End",
    paragraphs: [
      "Discovery → purchase → build → delivery → legacy feels like one continuous experience.",
      "I optimize for expectations that match physical reality and communication that builds confidence.",
      "I avoid gaps where the marketing story and the real process disagree.",
    ],
    examples: [
      "Aligned portal milestones and messaging with real build events so customers always know what’s next.",
      "Designed documentation/care guidance that matches the actual artifact and use case.",
    ],
  },

  "product+craft+ai": {
    title: "Hybrid Journeys That Keep Improving",
    paragraphs: [
      "Product sets the journey, craft sets constraints, AI accelerates iteration on messaging and process docs.",
      "I optimize for faster learning loops while keeping quality gates explicit.",
      "I avoid AI replacing judgment—AI assists exploration, humans own the standard.",
    ],
    examples: [
      "Drafted milestone messaging variants with AI, then edited into the Ober voice and real constraints.",
      "Used AI to explore care-guide language, then kept only what helped on day one.",
    ],
  },

  "product+story+ai": {
    title: "Scaling Story Across the Surface Area",
    paragraphs: [
      "AI accelerates draft volume; product/story guardrails keep tone consistent and non-generic.",
      "I optimize for coherent messaging across pages, tooltips, and updates without losing taste.",
      "I avoid AI tone drift by enforcing constraints and a human final rewrite.",
    ],
    examples: [
      "Prototyped multiple angles quickly, then consolidated into one truthful messaging ladder.",
      "Used AI to brainstorm, then anchored everything back to a single throughline.",
    ],
  },

  "problem+craft+story": {
    title: "Meaningful Fixes, Memorable Results",
    paragraphs: [
      "Fix what’s broken in a way that improves how people feel about the process—clarity + repeatability.",
      "I optimize for fewer surprises: checkpoints, evidence, and communication tied to real work.",
      "I avoid patching symptoms; I change the system and make the change legible.",
    ],
    examples: [
      "Turned communication friction into phase-based updates with consistent language and artifacts.",
      "Built repeatable process checkpoints so quality doesn’t rely on “remembering.”",
    ],
  },

  "problem+craft+ai": {
    title: "Continuous Improvement Loops",
    paragraphs: [
      "AI surfaces patterns from notes/timing; craft and problem-solving convert them into better process.",
      "I optimize for small, high-leverage adjustments that reduce rework over time.",
      "I avoid chasing noise—patterns must map to real constraints before changing the workflow.",
    ],
    examples: [
      "Used summaries to identify recurring friction, then tightened checklists and sequencing accordingly.",
      "Turned scattered notes into a repeatable process update instead of tribal knowledge.",
    ],
  },

  "problem+story+ai": {
    title: "Data Into Narratives",
    paragraphs: [
      "AI helps condense noise into signal; I turn it into a narrative teams can execute.",
      "I optimize for shared understanding that leads to concrete system changes.",
      "I avoid summary-for-summary’s-sake; every narrative must produce an action.",
    ],
    examples: [
      "Condensed long threads into ‘what happened / why / what changed’ briefs that drove fixes.",
      "Turned scattered feedback into a phased plan rather than competing interpretations.",
    ],
  },

  "craft+story+ai": {
    title: "Documenting Craft at Scale",
    paragraphs: [
      "AI helps draft recaps; craft/story keep it honest, human, and specific to the real artifact.",
      "I optimize for documentation that doesn’t become a second full-time job.",
      "I avoid generic captions—every note should reflect the actual build and constraints.",
    ],
    examples: [
      "Used AI to draft build recap blurbs, then edited into the final story shown in the portal.",
      "Experimented with AI-assisted captions, keeping only those that sounded like a musician, not a bot.",
    ],
  },

  // =========================
  // QUADS (15)
  // =========================
  "web+product+problem+craft": {
    title: "Constraint-Led, Operable Products",
    paragraphs: [
      "UX, engineering, constraints, and real-world workflow stay aligned—so the product survives reality.",
      "I optimize for durable systems: clear contracts, repeatable process, and fewer operational surprises.",
      "I avoid shipping features that create invisible work for ops or future maintainers.",
    ],
    examples: [
      "Built lifecycle-driven admin tooling tied to real build phases and operational states.",
      "Created patterns (status/history/guardrails) that keep the system stable as scope grows.",
    ],
  },

  "web+product+problem+story": {
    title: "From Incident to Story",
    paragraphs: [
      "I ship reliable systems and communicate them clearly—technical truth + human clarity.",
      "I optimize for predictable behavior, legible states, and narratives that reduce confusion under stress.",
      "I avoid opacity: the system and the explanation must match.",
    ],
    examples: [
      "Designed systems with clear state changes and language users can trust.",
      "Created incident-style summaries and fixes that prevented repeats.",
    ],
  },

  "web+product+problem+ai": {
    title: "AI-Augmented Full-Stack Problem Solving",
    paragraphs: [
      "AI speeds exploration while product/engineering keep one coherent system model and decision spine.",
      "I optimize for faster convergence on the right implementation with better edge-case coverage.",
      "I avoid AI-driven commitments—humans own guarantees, safety, and tradeoffs.",
    ],
    examples: [
      "Used AI to explore data-model options and edge cases, then implemented the version that fit real constraints.",
      "Pressure-tested acceptance criteria quickly, then encoded into durable behavior.",
    ],
  },

  "web+product+craft+story": {
    title: "Digital, Physical, and Everything Between",
    paragraphs: [
      "The website, the artifact, and the story are treated as one product—no seams, no contradictions.",
      "I optimize for trust: visible progress, honest expectations, and a coherent voice across surfaces.",
      "I avoid disconnects where the portal says one thing and the shop reality says another.",
    ],
    examples: [
      "Built portals where phase notes/media keep the story tied to real work.",
      "Aligned milestones and messaging with the physical build lifecycle.",
    ],
  },

  "web+product+craft+ai": {
    title: "Systems for Real-World Production",
    paragraphs: [
      "Engineering + product map the workflow; craft defines constraints; AI accelerates iteration on docs and tooling.",
      "I optimize for better production tooling over time without losing quality gates.",
      "I avoid AI replacing operations—AI assists, the system stays explicit and verifiable.",
    ],
    examples: [
      "Explored timeline/process improvements with AI, then grounded changes in real bench constraints.",
      "Maintained repeatable checklists/steps so scaling doesn’t break consistency.",
    ],
  },

  "web+product+story+ai": {
    title: "Narrative Interfaces at Scale",
    paragraphs: [
      "AI helps keep content fresh; product/story guardrails keep tone consistent; engineering keeps truth enforceable.",
      "I optimize for scalable messaging without generic drift or trust-breaking promises.",
      "I avoid letting AI freestyle—constraints + human rewrite keep it real.",
    ],
    examples: [
      "Structured portal content so future automation can propose copy within guardrails.",
      "Used AI to explore variants, then locked a coherent voice across the product surface.",
    ],
  },

  "web+problem+craft+story": {
    title: "Resilient Systems With a Human Face",
    paragraphs: [
      "Real-world workflows stay operable, and communication stays calm—even when reality gets messy.",
      "I optimize for guardrails + transparency: fewer surprises, clearer checkpoints, better trust.",
      "I avoid hard ‘system says no’ moments without explanation and next steps.",
    ],
    examples: [
      "Built workflow guardrails that reflect real constraints and keep users informed.",
      "Created consistent phase updates tied to evidence (notes/media/checklists).",
    ],
  },

  "web+problem+craft+ai": {
    title: "Operational Intelligence for the Shop",
    paragraphs: [
      "AI surfaces friction patterns; engineering and craft convert them into better tooling and process.",
      "I optimize for measurable improvements: less rework, tighter sequencing, clearer gates.",
      "I avoid optimizing for dashboards instead of outcomes—the process change has to pay off.",
    ],
    examples: [
      "Used summaries/notes to spot recurring pain, then adjusted checklists and workflows accordingly.",
      "Strengthened systems with guardrails that reduced repeat debugging and repeat work.",
    ],
  },

  "web+problem+story+ai": {
    title: "Incidents Into Shared Understanding",
    paragraphs: [
      "AI helps condense noise; engineering makes the fix; story makes it legible to humans.",
      "I optimize for faster alignment across stakeholders and fewer repeat escalations.",
      "I avoid ‘summary only’ work—every narrative ends in a concrete system change.",
    ],
    examples: [
      "Condensed long threads into action briefs that drove code changes and process updates.",
      "Built explainable systems with clear states and trust-forward language.",
    ],
  },

  "web+craft+story+ai": {
    title: "Living Portals for Living Artifacts",
    paragraphs: [
      "Portals evolve as builds evolve: AI helps draft recaps, craft/story keep it honest and human.",
      "I optimize for ongoing documentation without turning updates into a second job.",
      "I avoid generic updates—everything stays tied to real phase data and evidence.",
    ],
    examples: [
      "Maintained evolving project pages with media/notes and consistent narrative structure.",
      "Used AI to propose captions/sectioning, then edited for tone and accuracy.",
    ],
  },

  "product+problem+craft+story": {
    title: "Orchestrating the Whole Experience",
    paragraphs: [
      "We design the whole ensemble: expectations, workflow, checkpoints, and the story users actually experience.",
      "I optimize for coherent journeys that match operational reality—no hidden work, no surprise gaps.",
      "I avoid disconnects where teams promise one thing and the process delivers another.",
    ],
    examples: [
      "Turned ‘we should offer a portal’ into a sequenced rollout plan mapped to ops and messaging.",
      "Aligned milestones and language with real production steps to reduce confusion and churn.",
    ],
  },

  "product+problem+craft+ai": {
    title: "Smarter Processes, Same Human Judgment",
    paragraphs: [
      "AI accelerates analysis; product/problem framing chooses the right constraint; craft sets the real gate.",
      "I optimize for continuous improvement without losing standards or taste.",
      "I avoid AI-driven operations; AI assists, humans own quality and commitments.",
    ],
    examples: [
      "Used AI to highlight where work gets stuck, then simplified checklists and responsibilities.",
      "Converted feedback into process changes that teams actually feel.",
    ],
  },

  "product+problem+story+ai": {
    title: "Strategic Storytelling With Teeth",
    paragraphs: [
      "AI helps draft scenarios; product/problem keep it honest; story makes it repeatable.",
      "I optimize for messaging that matches the roadmap and the constraints behind it.",
      "I avoid overpromising—truth beats hype every time.",
    ],
    examples: [
      "Drafted roadmap narratives quickly, then edited into one truthful throughline.",
      "Prototyped stakeholder narratives, then consolidated into one coherent plan.",
    ],
  },

  "product+craft+story+ai": {
    title: "Hybrid Experiences That Keep Improving",
    paragraphs: [
      "The website, the artifact, and the story stay in sync while AI accelerates iteration and drafting.",
      "I optimize for consistent voice and evolving content without generic drift.",
      "I avoid ‘more content’ without structure—guardrails keep it cohesive.",
    ],
    examples: [
      "Maintained consistent voice across expanding portal surfaces and product lines.",
      "Used AI to draft permutations, then edited into a coherent brand story.",
    ],
  },

  "problem+craft+story+ai": {
    title: "Resilient Hybrid Systems, Calm Communication",
    paragraphs: [
      "AI helps surface patterns; craft/problem solve the constraint; story keeps trust intact under pressure.",
      "I optimize for honest updates tied to real checkpoints—less anxiety, fewer escalations.",
      "I avoid vague ‘delay’ messaging—every update includes what changed and what’s next.",
    ],
    examples: [
      "Implemented guardrails and narratives around real-world constraints so users get context, not confusion.",
      "Turned friction into phase-based communication tied to actual work artifacts.",
    ],
  },

  // =========================
  // QUINTS (6)
  // =========================
  "web+product+problem+craft+story": {
    title: "Polyrhythmic Without the Robots",
    paragraphs: [
      "Everything is integrated: system behavior, UX intent, constraints, workflow, and narrative all match.",
      "I optimize for trust and operability—customers feel consistency, teams feel fewer fires.",
      "I avoid scattered ‘multi-discipline’ work by keeping one spine: clarity → reliability → outcomes.",
    ],
    examples: [
      "Built lifecycle-driven tooling where UX, backend truth, and phase narrative stay aligned.",
      "Reduced support burden through clear states, process checkpoints, and honest communication patterns.",
    ],
  },

  "web+product+problem+craft+ai": {
    title: "AI in the Loop of Product & Production",
    paragraphs: [
      "AI accelerates exploration; the system stays explicit; the workflow stays reality-based and operable.",
      "I optimize for faster learning loops across code + operations without compromising quality.",
      "I avoid AI-driven commitments—humans own guarantees, standards, and risk decisions.",
    ],
    examples: [
      "Used AI to map options and edge cases quickly, then shipped the durable, testable path.",
      "Improved production tooling by grounding changes in real constraints and repeatable checklists.",
    ],
  },

  "web+product+problem+story+ai": {
    title: "From Incident to Story to System",
    paragraphs: [
      "AI helps condense noise; product/engineering fix the system; story makes the change legible to humans.",
      "I optimize for faster alignment and fewer repeats: one truth, one narrative, one set of changes.",
      "I avoid summary-only work—every narrative results in a concrete system improvement.",
    ],
    examples: [
      "Turned complex threads into action briefs that drove code + UX + ops changes.",
      "Built explainable behavior and language so stakeholders can repeat the truth confidently.",
    ],
  },

  "web+product+craft+story+ai": {
    title: "Handbuilt Feel, Systems-Level Backbone",
    paragraphs: [
      "The experience feels personal and crafted while the system stays scalable and consistent underneath.",
      "I optimize for coherence across surfaces: UI, ops, and story evolve without breaking trust.",
      "I avoid generic drift—guardrails keep voice and behavior consistent as complexity grows.",
    ],
    examples: [
      "Kept portal storytelling tied to real phase data, media, and progress artifacts.",
      "Used AI to accelerate drafting while enforcing tone/truth constraints and a human final pass.",
    ],
  },

  "web+problem+craft+story+ai": {
    title: "Operational Intelligence With a Human Face",
    paragraphs: [
      "AI surfaces friction; systems fix it; craft grounds it; story keeps people calm and informed.",
      "I optimize for fewer surprises: better guardrails, clearer checkpoints, better communication.",
      "I avoid ‘smart’ that isn’t trustworthy—everything must be explainable and verifiable.",
    ],
    examples: [
      "Converted recurring operational pain into workflow changes backed by tooling and language.",
      "Built guardrails and narratives that reduce escalations and support churn.",
    ],
  },

  "product+problem+craft+story+ai": {
    title: "Directing the Whole Ensemble",
    paragraphs: [
      "AI is one player—not the conductor. The ensemble stays aligned on constraints, taste, and truth.",
      "I optimize for coherent roadmaps and experiences that operations can actually sustain.",
      "I avoid hype-led decisions—outcomes win when promises match capacity.",
    ],
    examples: [
      "Used AI to explore options, then anchored final decisions in craft, customer value, and operability.",
      "Paired roadmap narratives with concrete operational checkpoints and guardrails.",
    ],
  },

  // =========================
  // ALL SIX (1)
  // =========================
  "web+product+problem+craft+story+ai": {
    title: "The Full Polyrhythmic Stack",
    paragraphs: [
      "Engineering, UX, constraints, craft, narrative, and AI all lock together—integrated instead of layered.",
      "I optimize for systems that ship cleanly and stay trustworthy: operable, explainable, and human-friendly.",
      "I avoid scattered complexity—one coherent spine governs decisions, tradeoffs, and communication.",
    ],
    examples: [
      "Ober ecosystem work: e-commerce + portals + admin workflows + lifecycle tracking + narrative UX + AI-assisted drafting (human final pass).",
      "Built durable patterns (state, status, history, guardrails) so complex workflows remain predictable at scale.",
    ],
  },
};

// ------------------------------------------------------------
// Public API
// ------------------------------------------------------------
export function getBlendRecipe(keysOrKey) {
  const keys = normalizeKeys(keysOrKey);
  const k = makeKey(keys);
  return (
    BLEND_RECIPES[k] ||
    BLEND_RECIPES[""] || {
      title: "Choose a Blend",
      paragraphs: ["", "", ""],
      examples: [],
    }
  );
}