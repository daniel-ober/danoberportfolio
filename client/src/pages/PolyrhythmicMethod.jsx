import React, { useMemo, useState } from "react";
import "./PolyrhythmicMethod.css";

/* =========================================================
   DISCIPLINES (for the blend tool)
   ========================================================= */

const ICON_BASE = "/media/icons";

const DISCIPLINES = [
  {
    key: "web",
    label: "Web & Software",
    chipLabel: "Web & Software",
    legendLabel: "Web & Software",
    color: "#3b82f6",
    iconSrc: `${ICON_BASE}/computer.png`,
  },
  {
    key: "product",
    label: "Product & UX",
    chipLabel: "Product & UX",
    legendLabel: "Product & UX Design",
    color: "#f97316",
    iconSrc: `${ICON_BASE}/navigate.png`,
  },
  {
    key: "problem",
    label: "Problem Solving",
    chipLabel: "Problem Solving",
    legendLabel: "Technical Problem Solving",
    color: "#a855f7",
    iconSrc: `${ICON_BASE}/puzzle.png`,
  },
  {
    key: "craft",
    label: "Craft & Making",
    chipLabel: "Craft & Making",
    legendLabel: "Craft & Making",
    color: "#facc15",
    iconSrc: `${ICON_BASE}/wood.png`,
  },
  {
    key: "story",
    label: "Story & Music",
    chipLabel: "Story & Music",
    legendLabel: "Story, Music & Creative Life",
    color: "#ec4899",
    iconSrc: `${ICON_BASE}/microphone.png`,
  },
  {
    key: "ai",
    label: "AI & Systems",
    chipLabel: "AI & Systems",
    legendLabel: "AI & Systems",
    color: "#22c55e",
    iconSrc: `${ICON_BASE}/systems.png`,
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
    title: "Choose a Blend to See the Work",
    paragraphs: [
      `Start by toggling one or more disciplines on the left. As you add them, the blend shifts and the description updates to show the kind of work, outcomes, and collaboration style you can expect from me with that mix.`,
      `It’s a small demo of how I connect code, craft, systems, and story — tuned to the parts of my toolkit you’re most interested in.`,
    ],
    examples: [],
  },

  /* ============================
     SINGLES
     ============================ */

  web: {
    title: "Engineering With an Opinion",
    paragraphs: [
      `With just web & software selected, you’re seeing me primarily as an engineer: React, Firebase, auth flows, data models, and the plumbing that holds real products together.`,
    ],
    examples: [
      `Designed and launched the Ober Artisan Drums e-commerce platform (React, Firebase, Stripe) with custom checkout, inventory, and cart logic.`,
      `Built API-driven projects at General Assembly like Sunday Driver and Doberpop, wiring React front ends into Node/Rails backends and third-party APIs.`,
    ],
  },

  product: {
    title: "UX With a Point of View",
    paragraphs: [
      `With only product & UX in play, the work is about listening, mapping flows, and shaping interfaces that feel obvious in hindsight.`,
    ],
    examples: [
      `Shaped the SoundLegend portal UX so drummers land on progress, scope, and media instead of getting dropped into a generic dashboard.`,
      `Partnered with marketing and product at JumpCrew to turn campaign KPIs into simple performance stories and next-step recommendations for clients.`,
    ],
  },

  problem: {
    title: "The Systems Troubleshooter",
    paragraphs: [
      `When you select only problem solving, you’re asking me to be a pattern-maker and constraint mapper before anything else.`,
    ],
    examples: [
      `At JLL Technologies, debugged and de-risked API integrations for enterprise real-estate clients, turning recurring support issues into repeatable playbooks.`,
      `At CarGurus, used data analysis and trend spotting to improve support workflows and maintain 90%+ CSAT at scale.`,
    ],
  },

  craft: {
    title: "The Maker in the Room",
    paragraphs: [
      `On its own, craft & making is me in the shop: jigs, shells, finishes, fixtures, and processes that turn ideas into physical, repeatable reality.`,
    ],
    examples: [
      `Designed a ten-phase drum build lifecycle for Ober Artisan Drums, then mirrored it one-to-one in the project portal and internal tools.`,
      `Built and iterated physical jigs and fixtures (compression rigs, routing setups, veneer workflows) with documentation that future builds can follow.`,
    ],
  },

  story: {
    title: "Making the Work Feel Human",
    paragraphs: [
      `With only story & music selected, you’re asking for narrative, mood, and emotional clarity around the work.`,
    ],
    examples: [
      `Wrote the SoundLegend Series positioning (“Every drum tells a story…”) and built portal copy that makes each project feel like a chapter, not a ticket.`,
      `Helped translate performance data and customer insights into clear narratives for sales and leadership during CarGurus’ hyper-growth phase.`,
    ],
  },

  ai: {
    title: "AI & Systems as a Second Brain",
    paragraphs: [
      `With only AI & systems selected, the emphasis is on using models to extend my reach — not to replace human judgment.`,
    ],
    examples: [
      `Use AI to draft and refine technical enablement content, FAQ outlines, and internal guides, then tighten the details based on real customer questions.`,
      `Prototype AI-assisted workflows for Ober (project update drafts, prompt patterns for mockup descriptions) while keeping final decisions and voice human-owned.`,
    ],
  },

  /* ============================
     DOUBLES (all pairs)
     ============================ */

  "web+product": {
    title: "From Spec to Shipping",
    paragraphs: [
      `This blend is where product ideas stop living in decks and start living in code. UX decisions and engineering trade-offs happen in the same conversation.`,
    ],
    examples: [
      `Designed and built the SoundLegend customer portal from scratch: information architecture, wireframes, React implementation, and Firebase integration.`,
      `At JLL Technologies, turned loosely defined integration asks into scoped API flows and sample apps that product, sales, and engineering could all rally around.`,
    ],
  },

  "web+problem": {
    title: "Refactoring the Mess",
    paragraphs: [
      `Here the focus is taking something tangled — legacy code, mismatched APIs, brittle flows — and making it workable again.`,
    ],
    examples: [
      `Untangled a mix of one-off Firestore writes and inline business logic into reusable utilities and hooks that simplified order + project updates across the app.`,
      `At JLL, traced intermittent API failures across multiple partners, then standardized error-handling patterns so support no longer had to play “integration whack-a-mole.”`,
    ],
  },

  "web+craft": {
    title: "Digital Tools for Physical Work",
    paragraphs: [
      `This mix connects the workshop to the web. Think build portals, production trackers, and internal tools tuned for real hands-on workflows.`,
    ],
    examples: [
      `Built admin views that mirror the physical drum build: each step has checklists, timers, and notes so what happens in the shop is always reflected online.`,
      `Designed lightweight shop tooling to track wood selection, shell progress, and shipping prep — grounded in years of real “move the heavy stuff” work, from hay bales to landscaping equipment.`,
    ],
  },

  "web+story": {
    title: "Interactive Stories",
    paragraphs: [
      `With web plus story, we’re building experiences where the narrative is baked into the product itself — not bolted on at the end.`,
    ],
    examples: [
      `Implemented a “Legacy” view that ties video, photos, and write-ups into a timeline, so a drummer can literally scroll through the story of their instrument.`,
      `During GA, built projects like Doberpop and Artist ABC where the UI, search results, and copy all reinforced the story of who the product was for and how they’d use it.`,
    ],
  },

  "product+problem": {
    title: "Design That Solves the Right Problem",
    paragraphs: [
      `This blend is about making sure we’re designing for the real constraint, not just the loudest request.`,
    ],
    examples: [
      `Reframed “we need more portal features” into a smaller scope: show progress, show files, show expectations — which cut feature creep and made the first launch shippable.`,
      `At CarGurus, used KPI trends and call feedback to shift product asks from “we need more leads” to “we need cleaner lead routing and better expectations,” which actually moved renewal and upsell numbers.`,
    ],
  },

  "product+craft": {
    title: "UX You Can Hold",
    paragraphs: [
      `Here, the product thinking extends all the way into the physical world — packaging, unboxing, documentation, and how it feels to use the thing in real life.`,
    ],
    examples: [
      `Aligned portal milestones with real-world events (wood arrival, shell construction, tuning, delivery) so emails and UI copy match what’s actually happening in the shop.`,
      `Designed drum care guides and post-purchase flows so the first time someone opens the case, the experience of the physical object matches what the product promised online.`,
    ],
  },

  "product+story": {
    title: "Narrative-Driven Product",
    paragraphs: [
      `This pairing makes sure every interaction has a story behind it: who it’s for, what it unlocks, and how it fits into someone’s day.`,
    ],
    examples: [
      `Defined a simple messaging ladder for Ober (craft → story → legacy) and reused it across portal copy, email updates, and sales conversations.`,
      `At JumpCrew, turned dense campaign reporting into “here’s the story of what your ads did this month” narratives that made decisions easier for busy clients.`,
    ],
  },

  "problem+craft": {
    title: "Fixing Bottlenecks in the Shop",
    paragraphs: [
      `Here the focus is on process: jigs, fixtures, layouts, and workflows that remove friction from physical builds.`,
    ],
    examples: [
      `Turned a loose “remember to photograph builds” goal into a checklist baked into the build phases, so media capture happens as part of the process instead of as an afterthought.`,
      `Brought the same “flow of work” instincts from summers hauling hay and landscaping — planning paths, minimizing rework, and reducing unnecessary lifting — into how drum builds move through the shop.`,
    ],
  },

  "problem+story": {
    title: "Clarity in the Chaos",
    paragraphs: [
      `This mix turns complex situations into explanations people can actually follow — diagrams, narratives, and metaphors that stick.`,
    ],
    examples: [
      `Documented edge cases and failure modes for shipping, payment, and risk flows in plain language so non-engineers could help debug issues with confidence.`,
      `At Mercer, translated complex retirement and survivor-benefit rules into calm, step-by-step explanations for people calling on some of the hardest days of their lives — then fed those learnings back into clearer scripts and reference material.`,
    ],
  },

  "craft+story": {
    title: "Artifacts With a Story",
    paragraphs: [
      `With craft and story together, every object carries its own narrative — where it came from, how it was made, and who it’s for.`,
    ],
    examples: [
      `Built “SoundLegend Legacy” pages so each drum has a permanent home for its photos, specs, media, and owner notes.`,
      `Produced drum demos, photo sets, and written “build notes” that give each instrument a personality players can actually talk about with their own audiences.`,
    ],
  },

  "web+ai": {
    title: "AI-Backed Engineering",
    paragraphs: [
      `Web & software plus AI & systems is about shipping solid code while using models to speed up exploration and guardrail checks.`,
    ],
    examples: [
      `Used AI to propose refactors and test scenarios for complex project-timeline logic, then manually implemented and validated the final code paths.`,
      `Leaned on AI to generate scaffolding for small utilities and integration tests, freeing up time to focus on the tricky parts of auth and data modeling.`,
    ],
  },

  "product+ai": {
    title: "Faster Product Discovery, Still Human",
    paragraphs: [
      `Product & UX plus AI focuses on speeding up research, naming, and copy exploration without losing a human sense of taste.`,
    ],
    examples: [
      `Generated multiple onboarding-copy and tooltip variants with AI, then A/B tested tone and clarity with real users before locking in the final messaging.`,
      `Used AI to explore naming and microcopy around new SoundLegend features, then edited everything back into a single, cohesive voice.`,
    ],
  },

  "problem+ai": {
    title: "Pattern-Finding at Scale",
    paragraphs: [
      `Problem solving plus AI is about letting models surface patterns and edge cases, then deciding what actually matters.`,
    ],
    examples: [
      `Fed anonymized support notes and admin observations into AI to cluster recurring pain points, then used that map to prioritize new dashboard features.`,
      `Experimented with AI-assisted log summarization to spot integration issues faster, while still doing the final debugging and fix planning by hand.`,
    ],
  },

  "craft+ai": {
    title: "Smart Processes for Hands-On Work",
    paragraphs: [
      `Craft & making plus AI uses models to simulate, document, and refine physical workflows without replacing the hands-on judgment.`,
    ],
    examples: [
      `Drafted step-by-step jig instructions and safety notes with AI, then rewrote them in “shop language” after testing them against actual build sessions.`,
      `Explored AI-generated variants of build checklists, then picked and tuned the ones that actually matched how sawdust, glue, and shell dimensions behave in reality.`,
    ],
  },

  "story+ai": {
    title: "Scaling Story Without Losing Voice",
    paragraphs: [
      `Story and AI together aim to reach more people without sounding generic.`,
    ],
    examples: [
      `Built a lightweight AI-assisted workflow for project updates: models propose first-draft copy, I tune tone and details, then publish to the artist portal and email.`,
      `Use AI to generate “first pass” outlines for long-form launch stories, then rewrite them from scratch so they sound like a human who’s actually been in the room.`,
    ],
  },

  /* ============================
     TRIPLES
     ============================ */

  "web+product+problem": {
    title: "Full-Stack Problem Solver",
    paragraphs: [
      `This blend is for when you need someone to live at the intersection of architecture, UX, and constraints.`,
    ],
    examples: [
      `Designed and implemented the admin overview board that unifies orders, support, SoundLegend requests, and risk alerts into one drag-and-drop system.`,
      `At JLL, acted as the connective tissue between sales engineers, product, and customer IT teams to turn gnarly API requirements into deployable, maintainable integrations.`,
    ],
  },

  "web+product+craft": {
    title: "Digital Front Door to Physical Craft",
    paragraphs: [
      `Here, portals and tools are designed specifically around a physical process — like the lifecycle of a custom drum or a handcrafted product line.`,
    ],
    examples: [
      `Created a build-tracking experience where admin and customer views both read from the same lifecycle data, reducing “status check” messages.`,
      `Planned the overall Ober experience so someone can move from inspiration → spec exploration → purchase → build tracking → legacy story without ever feeling like they switched systems.`,
    ],
  },

  "web+product+story": {
    title: "Story-First Product Experiences",
    paragraphs: [
      `This mix creates interactive stories: the product explains itself through the way it’s built, not just through documentation.`,
    ],
    examples: [
      `Designed the “Polyrhythmic Method” page itself as a product story: interactive blend tool, narrative copy, and concrete examples instead of a static résumé paragraph.`,
      `During GA, built project UIs where the content, navigation, and microcopy all told the story of a specific user — from hot-chicken judges to weather nerds — not just a generic app.`,
    ],
  },

  "web+problem+craft": {
    title: "Tooling for the Shop Floor",
    paragraphs: [
      `Here the work is about building tools that remove bottlenecks from physical operations — inventory, scheduling, QC, or build tracking.`,
    ],
    examples: [
      `Built a step-locked workflow so future builders always follow the same critical path from wood prep to quality check, reducing missed steps.`,
      `Designed build views and QC checklists that reflect real constraints learned from years of literal heavy lifting — from farm work and landscaping to drum shells on the bench.`,
    ],
  },

  "web+problem+story": {
    title: "Debugging With Context",
    paragraphs: [
      `This blend is equal parts engineer, detective, and translator.`,
    ],
    examples: [
      `Instrumented project and order flows, then wrote narrative-style internal notes so future teammates understand why certain guardrails exist.`,
      `At JLL, paired API traces with plain-language “here’s what actually happened” summaries so customer IT teams and account managers could make decisions without wading through raw logs.`,
    ],
  },

  "web+craft+story": {
    title: "Portals for Living Artifacts",
    paragraphs: [
      `Here we’re creating digital homes for physical work — portals that follow an artifact from first sketch to final recording or delivery.`,
    ],
    examples: [
      `Built legacy pages that show each drum’s specs, photos, audio, and owner notes, turning a one-time purchase into an ongoing narrative.`,
      `Shot and edited product photos and drum demos, then wired them into the portal so artists have a shareable story instead of just a tracking number.`,
    ],
  },

  "product+problem+craft": {
    title: "Designing Better Processes",
    paragraphs: [
      `This blend reshapes how the work gets done — not just what the interface looks like.`,
    ],
    examples: [
      `Mapped the real-world drum build process, then simplified it into 10 named phases with clear ownership and portal representations.`,
      `Borrowed from years of customer-success playbooks to bring “case flow” discipline into the shop: fewer handoffs, clearer checkpoints, and tighter feedback loops.`,
    ],
  },

  "product+problem+story": {
    title: "Aligning People, Process, and Narrative",
    paragraphs: [
      `Here we’re making sure the story we tell about the product matches what it actually does and how teams operate behind the scenes.`,
    ],
    examples: [
      `Aligned marketing language about “lifecycle transparency” with actual portal features so every promise is backed by a visible artifact.`,
      `At CarGurus and JumpCrew, translated KPI dashboards into simple narratives leaders could repeat: what changed, why it mattered, and what we’d try next.`,
    ],
  },

  "product+craft+story": {
    title: "Experience Design, End to End",
    paragraphs: [
      `This blend treats the entire journey as one experience: discovery, purchase, build, delivery, and the story that lives on afterward.`,
    ],
    examples: [
      `Designed the experience from initial inquiry form → build proposal → portal onboarding → unboxing email, so the drummer always knows what’s next.`,
      `Shaped the SoundLegend “from first call to first gig” arc so the drum, portal, emails, and media all feel like one continuous launch story.`,
    ],
  },

  "problem+craft+story": {
    title: "Meaningful Fixes, Memorable Results",
    paragraphs: [
      `This mix focuses on fixing what’s broken in a way that also deepens the story — not just patching, but improving how people feel about the work.`,
    ],
    examples: [
      `Turned early friction around communication into a “project heartbeat” ritual: small, story-driven updates at key phases instead of sporadic long messages.`,
      `Drew on Mercer days talking with survivors and hardship callers to keep updates grounded, honest, and calm when projects hit real-world delays.`,
    ],
  },

  /* triples with AI */

  "web+product+ai": {
    title: "AI-Assisted Product Engineering",
    paragraphs: [
      `Web, product, and AI together focus on shipping real features quickly while keeping UX and quality high.`,
    ],
    examples: [
      `Used AI to quickly explore variants for portal navigation and onboarding text, then implemented the chosen patterns in React with Firebase-backed routing.`,
      `Let AI draft edge-case test ideas for complex flows, then curated and encoded the ones that actually mapped to real user behavior.`,
    ],
  },

  "web+problem+ai": {
    title: "Systems Debugging With a Co-Analyst",
    paragraphs: [
      `Here AI helps scan logs, spot patterns, and propose hypotheses, while I drive the actual debugging and fixes.`,
    ],
    examples: [
      `Pulled error logs and edge-case descriptions into AI to group issues, then used that map to prioritize which Firestore writes and auth flows to harden first.`,
      `Used AI-summarized ticket trends to flag where onboarding docs or runbooks needed updating before they turned into bigger outages.`,
    ],
  },

  "web+craft+ai": {
    title: "Smart Shop-Floor Tooling",
    paragraphs: [
      `Web, craft, and AI blend into tools that understand the physical build but can still adapt over time.`,
    ],
    examples: [
      `Prototyped AI-assisted checklists that propose next actions based on project phase, while keeping final control with the builder.`,
      `Experimented with AI-generated fixture ideas and sanding sequences, then pressure-tested them against what actually works in the shop.`,
    ],
  },

  "web+story+ai": {
    title: "Dynamic Story-Driven Interfaces",
    paragraphs: [
      `Here the UI, copy, and AI all work together so the experience feels like a guided story instead of a static dashboard.`,
    ],
    examples: [
      `Explored AI-generated “tour” copy for complex admin views, then locked in human-written versions informed by what resonated most.`,
      `Used AI to rough in long-form portal content and FAQ structures, then rewrote them to sound like a drummer explaining things to another drummer.`,
    ],
  },

  "product+problem+ai": {
    title: "Decision Support for Messy Roadmaps",
    paragraphs: [
      `Product, problem solving, and AI here focus on mapping trade-offs quickly and turning them into clear decisions.`,
    ],
    examples: [
      `Used AI to simulate pros/cons of different portal rollout orders, then chose a path that minimized risk while still showing clear user-facing value early.`,
      `Let AI suggest backlog clusters by theme and risk, then reshaped those into a roadmap the team could actually execute against.`,
    ],
  },

  "product+craft+ai": {
    title: "Designing Hybrid Physical–Digital Journeys",
    paragraphs: [
      `This blend uses AI to explore messaging and touchpoints across both the physical build and the digital portal.`,
    ],
    examples: [
      `Drafted multi-step email sequences for build milestones with AI, then edited them to match the Ober voice and real production constraints.`,
      `Explored AI-generated variations of care guides and setup tips, then pared them back to the handful of moves that actually help players on day one.`,
    ],
  },

  "product+story+ai": {
    title: "Scaling Story Across the Product Surface",
    paragraphs: [
      `Product, story, and AI here aim to reach more people without sounding generic.`,
    ],
    examples: [
      `Built a pattern where AI proposes newsletter and release-note drafts from project data, then I do the final shaping before anything ships.`,
      `Used AI to brainstorm campaign angles, then anchored everything back to a simple throughline: craft, story, and long-term trust.`,
    ],
  },

  "problem+craft+ai": {
    title: "Continuous Improvement Loops",
    paragraphs: [
      `Problem solving, craft, and AI together focus on learning from every build cycle.`,
    ],
    examples: [
      `Collected timing and note data from each drum build step, had AI summarize patterns, then used that to reorganize the order of certain phases.`,
      `Let AI digest scattered workshop notes into themes, then turned those into one-page process updates the future me will actually read.`,
    ],
  },

  "problem+story+ai": {
    title: "Data Into Narratives",
    paragraphs: [
      `This blend turns raw incidents and observations into stories teams can act on.`,
    ],
    examples: [
      `Summarized scattered admin feedback with AI, then wrote a narrative doc explaining root causes and a phased plan for dashboard improvements.`,
      `Used AI to condense long call or ticket histories into “here’s what this really feels like for the user” briefs for stakeholders.`,
    ],
  },

  "craft+story+ai": {
    title: "Documenting Craft at Scale",
    paragraphs: [
      `Craft, story, and AI work together to make sure each build is documented without becoming a full-time writing job.`,
    ],
    examples: [
      `Used AI to draft “build recap” blurbs from phase notes and photos, then edited them into the final story shown on each SoundLegend project page.`,
      `Experimented with AI-assisted captioning for drum photos and clips, then kept the ones that sounded like a musician, not a marketing bot.`,
    ],
  },

  /* ============================
     QUADS
     ============================ */

  "web+product+problem+craft": {
    title: "The Product-Minded Builder",
    paragraphs: [
      `Here you’re getting a builder who can design the system, shape the flows, debug the weirdness, and understand how it all lands in the physical world.`,
    ],
    examples: [
      `Designed and built the drum project workflow: a single source of truth that drives admin tools, customer views, and physical checklists in the shop.`,
      `Brought call-center and customer-success instincts into portal and shop tooling so the people doing the work spend more time helping humans and less time fighting systems.`,
    ],
  },

  "web+product+problem+story": {
    title: "From Incident to Story",
    paragraphs: [
      `This blend is built for complex, user-facing systems where reliability and narrative both matter.`,
    ],
    examples: [
      `Handled risk-notification flows end-to-end: schema design, admin UI, and clear explanations for artists when something needed extra review.`,
      `At CarGurus, turned messy outage and escalation stories into “what happened / what we learned / what we changed” narratives leaders could stand behind.`,
    ],
  },

  "web+product+craft+story": {
    title: "Digital, Physical, and Everything Between",
    paragraphs: [
      `Here the web experience, the physical artifact, and the surrounding story are treated as one product.`,
    ],
    examples: [
      `Launched new drum lines with matching portal experiences, photography, and copy so the website, instrument, and story all feel like one thing.`,
      `Planned the Ober “Legend Vault” concept so a drummer’s relationship with their instrument extends from checkout to the first gig and beyond.`,
    ],
  },

  "web+problem+craft+story": {
    title: "Resilient Systems With a Human Face",
    paragraphs: [
      `This blend balances reliability, physical reality, and the stories people tell about the work.`,
    ],
    examples: [
      `Added guardrails around risky orders and built narratives that explain what’s happening, rather than just blocking actions with opaque errors.`,
      `Leaned on Mercer experience handling hardship and survivor calls to keep even “the system said no” moments grounded and empathetic.`,
    ],
  },

  "product+problem+craft+story": {
    title: "Orchestrating the Whole Experience",
    paragraphs: [
      `Here the focus is orchestrating everything around the core product: expectations, processes, and the human experience at each step.`,
    ],
    examples: [
      `Turned a loose “we should offer a portal” idea into a sequenced rollout plan: messaging, features, operations, and follow-up all mapped together.`,
      `Brought leadership experience from managing 20+ reps at CarGurus into how Ober’s future ops can scale without losing the human touch.`,
    ],
  },

  /* quads with AI */

  "web+product+problem+ai": {
    title: "AI-Augmented Full-Stack Problem Solving",
    paragraphs: [
      `Here AI helps explore implementation options and edge cases while I keep one coherent mental model of the system.`,
    ],
    examples: [
      `Used AI to generate alternative API and data-model sketches, then chose and implemented the version that best fit Firestore and portal constraints.`,
      `Let AI pressure-test acceptance criteria and edge cases for complex admin features, then refined them into developer-ready tickets.`,
    ],
  },

  "web+product+craft+ai": {
    title: "Systems for Real-World Production",
    paragraphs: [
      `This blend uses AI to make digital tooling for physical builds smarter over time.`,
    ],
    examples: [
      `Explored AI-based suggestions for build timelines based on shell type and options, while keeping final scheduling judgment with the builder.`,
      `Used AI to summarize build retros so future portal changes track with what’s actually happening at the workbench, not just in Figma.`,
    ],
  },

  "web+product+story+ai": {
    title: "Narrative Interfaces at Scale",
    paragraphs: [
      `Web, product, story, and AI together make it possible to keep interfaces feeling personal even as content volume grows.`,
    ],
    examples: [
      `Structured portal content so future AI tools can safely propose copy within guardrails (tone, length, allowed claims) instead of free-styling.`,
      `Used AI to keep new pages and flows anchored in the same Ober tone, even as the surface area of the product expanded.`,
    ],
  },

  "web+problem+craft+ai": {
    title: "Operational Intelligence for the Shop",
    paragraphs: [
      `This blend turns build data into actionable insights for both software and physical workflows.`,
    ],
    examples: [
      `Used AI summaries of build notes to spot which phases most often caused rework, then adjusted both code and workflow to address them.`,
      `Let AI cluster QC issues and timing outliers, then turned those findings into small, high-leverage changes in process and tooling.`,
    ],
  },

  "web+problem+story+ai": {
    title: "Incidents Into Shared Understanding",
    paragraphs: [
      `Here AI helps turn noisy incidents into clearer stories and system changes.`,
    ],
    examples: [
      `Let AI help condense long error and feedback threads into “what happened / why it mattered / what we changed” briefs.`,
      `Used those briefs to align engineering, support, and leadership around the same narrative instead of three partial versions.`,
    ],
  },

  "web+craft+story+ai": {
    title: "Living Portals for Living Artifacts",
    paragraphs: [
      `Here we’re creating digital homes for physical work that stay up to date as builds progress.`,
    ],
    examples: [
      `Maintained legacy pages that evolve over time as new media and notes get added, without turning updates into a full-time job.`,
      `Used AI to propose sectioning and captions for build media, then edited for tone and accuracy.`,
    ],
  },

  "product+problem+craft+ai": {
    title: "Smarter Processes, Same Human Judgment",
    paragraphs: [
      `This blend uses AI to surface where processes creak, then fixes them in a way teams actually feel.`,
    ],
    examples: [
      `Used AI to highlight where builds tended to get stuck, then simplified checklists and responsibilities for those phases.`,
      `Summarized cross-team feedback into one plan instead of dueling narratives from shop, product, and ops.`,
    ],
  },

  "product+problem+story+ai": {
    title: "Strategic Storytelling With Teeth",
    paragraphs: [
      `Here AI helps explore scenarios and draft communication, and I ensure the narrative matches the real constraints and roadmap.`,
    ],
    examples: [
      `Drafted and refined roadmap narratives for portal evolution so artists know what’s coming and why, without overpromising.`,
      `Used AI to prototype different stakeholder narratives (exec, artist, ops), then consolidated them into one truthful story instead of three conflicting ones.`,
    ],
  },

  "product+craft+story+ai": {
    title: "Hybrid Experiences That Keep Improving",
    paragraphs: [
      `This blend keeps the website, the instrument, and the story in sync as the system grows.`,
    ],
    examples: [
      `Maintained a consistent Ober voice and experience across new drum lines and portal sections even as the surface area expanded.`,
      `Used AI to draft new permutations of portal content as offerings evolved, then edited everything back into one coherent brand story.`,
    ],
  },

  "problem+craft+story+ai": {
    title: "Resilient Hybrid Systems With a Human Face",
    paragraphs: [
      `Here AI, systems thinking, craft, and story work together to keep operations resilient and communication empathetic.`,
    ],
    examples: [
      `Implemented guardrails and narratives around shipping delays so artists see honest, context-rich updates instead of vague status changes.`,
      `Grounded those updates in the same calm, clear tone developed at Mercer when guiding people through high-stakes benefit decisions.`,
    ],
  },

  /* ============================
     QUINTS (5 disciplines)
     ============================ */

  "web+product+problem+craft+story": {
    title: "Polyrhythmic Without the Robots",
    paragraphs: [
      `Here everything but AI is in the mix: engineering, product, systems thinking, craft, and story.`,
    ],
    examples: [
      `Scoped and built the first versions of the Ober portal and workflows without AI, grounding every decision in what artists and the shop actually needed.`,
      `Used customer calls, shop notes, and metrics to iterate on the experience long before AI ever entered the picture.`,
    ],
  },

  "web+product+problem+craft+ai": {
    title: "AI in the Loop of Product & Production",
    paragraphs: [
      `This blend connects strategy, systems, physical work, and AI so improvements in one place show up everywhere.`,
    ],
    examples: [
      `Designed systems where learnings from completed projects feed into future portal defaults, build checklists, and communication templates.`,
      `Used AI to turn cross-functional feedback (artists, internal team, logistics) into concrete changes to both the software and the build process.`,
    ],
  },

  "web+product+problem+story+ai": {
    title: "From Incident to Story to System",
    paragraphs: [
      `Here AI helps translate complex events into stories and system changes that stick.`,
    ],
    examples: [
      `Turned a messy risk incident into an AI-assisted summary, then into code changes, new admin tooling, and a clear narrative for stakeholders.`,
      `Leaned on years of customer-facing experience to keep those narratives grounded in how incidents actually feel to the person on the other end of the screen or phone.`,
    ],
  },

  "web+product+craft+story+ai": {
    title: "Hybrid Experiences That Feel Handbuilt",
    paragraphs: [
      `This blend keeps the website, the instrument, and the story in sync as the system grows.`,
    ],
    examples: [
      `Maintained a consistent Ober voice and experience across new drum lines and portal sections even as the surface area expanded.`,
      `Used AI to draft new permutations of portal content as offerings evolved, then edited everything back into one coherent brand story.`,
    ],
  },

  "web+problem+craft+story+ai": {
    title: "Operational Intelligence With a Human Face",
    paragraphs: [
      `Here AI helps surface where operations need tightening, and the fixes come with stories people can actually follow.`,
    ],
    examples: [
      `Used AI to summarize build and support notes, then turned those into visible changes in workflows and checklists.`,
      `Paired every change with a simple “why we’re doing this” story so future teammates don’t undo it by accident.`,
    ],
  },

  "product+problem+craft+story+ai": {
    title: "Directing the Whole Ensemble",
    paragraphs: [
      `This blend treats AI as one more player in a cross-functional ensemble: helpful, fast, but not in charge.`,
    ],
    examples: [
      `Used AI-driven option exploration to support planning for future offerings (like cases and add-ons) while keeping the final product roadmap grounded in craft and customer value.`,
      `Paired roadmap narratives with concrete operational plans so what’s promised to customers is always backed by staffing, process, and tooling.`,
    ],
  },

  /* ============================
     ALL SIX
     ============================ */

  "web+product+problem+craft+story+ai": {
    title: "The Full Polyrhythmic Stack",
    paragraphs: [
      `This is the whole toolkit — engineering, product, systems thinking, physical craft, story, and AI — all pointed at one problem.`,
    ],
    examples: [
      `SoundLegend artist portal and legacy tools: custom drum lifecycles, NFC verification, admin dashboards, artist-facing progress and media, AI-assisted copy, and a story that follows each instrument from first board to final track.`,
      `Draws on the whole path — Mercer call floors, CarGurus leadership, JumpCrew client strategy, JLL API work, GA builds, and Ober in the shop — to show how I solve problems when all the rhythms are playing at once.`,
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
      radial-gradient(circle at 100% 0%, ${
        (c2 || c1 || base) + "33"
      }, transparent 55%),
      radial-gradient(circle at 0% 100%, ${
        (c3 || c2 || base) + "33"
      }, transparent 55%),
      radial-gradient(circle at 100% 100%, ${
        (c4 || c3 || base) + "33"
      }, transparent 55%),
      radial-gradient(circle at 50% 50%, ${base + "1f"}, #020617)
    `;

    const gradient = `linear-gradient(120deg, ${activeColors.join(", ")})`;

    return {
      background: bg,
      borderColor: "transparent",
      borderImageSource: gradient,
      borderImageSlice: 1,
      boxShadow: "0 20px 50px rgba(0,0,0,0.8), 0 0 0 1px rgba(15,23,42,0.8)",
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
          <strong>
            what to focus on, when to blend disciplines, and how much
          </strong>{" "}
          of each to bring into a project so the result feels clear, human, and
          shippable.
        </p>
      </section>

      {/* CORE DISCIPLINES */}
      <section className="pm-section">
        <header className="pm-section__header">
          <h2 className="pm-section__title">Core Diciplines</h2>
          <p className="pm-section__subtitle">
            Six disciplines I move between. Each one can stand alone, or lock in
            as part of a larger groove. AI weaves through them as a systems
            partner — a fast assistant, not a replacement.
          </p>
        </header>

        <div className="pm-grid pm-grid--disciplines">
          {/* Web & Software */}
          <article className="pm-card">
            <div className="pm-card__icon">
              <img
                src={`${ICON_BASE}/computer.png`}
                alt="Web & Software Engineering"
                className="pm-card__icon-img"
              />
            </div>
            <h3 className="pm-card__title">Web &amp; Software Engineering</h3>
            <p className="pm-card__body">
              React frontends, Firebase backends, auth flows, portals, and
              internal tools. I bias toward clear data models, simple APIs, and
              systems that stay flexible instead of brittle.
            </p>
          </article>

          {/* Product & UX */}
          <article className="pm-card">
            <div className="pm-card__icon">
              <img
                src={`${ICON_BASE}/navigate.png`}
                alt="Product & UX Design"
                className="pm-card__icon-img"
              />
            </div>
            <h3 className="pm-card__title">Product &amp; UX Design</h3>
            <p className="pm-card__body">
              I care more about flows than pixels. How someone discovers a
              feature, understands it quickly, and feels confident about what
              happens next — without needing a manual.
            </p>
          </article>

          {/* Technical Problem Solving */}
          <article className="pm-card">
            <div className="pm-card__icon">
              <img
                src={`${ICON_BASE}/puzzle.png`}
                alt="Technical Problem Solving"
                className="pm-card__icon-img"
              />
            </div>
            <h3 className="pm-card__title">Technical Problem Solving</h3>
            <p className="pm-card__body">
              Untangling messy constraints, mapping the real problem, and
              finding the smallest change that unlocks the most value. Then
              shipping and learning from reality.
            </p>
          </article>

          {/* Craft & Making */}
          <article className="pm-card">
            <div className="pm-card__icon">
              <img
                src={`${ICON_BASE}/wood.png`}
                alt="Craft & Making"
                className="pm-card__icon-img"
              />
            </div>
            <h3 className="pm-card__title">Craft &amp; Making</h3>
            <p className="pm-card__body">
              Building custom snares keeps me honest. Every drum moves from raw
              lumber to tuned instrument with a documented lifecycle, portal,
              media, and story. It&apos;s product thinking you can hold in your
              hands.
            </p>
          </article>

          {/* Story, Music & Creative Life */}
          <article className="pm-card">
            <div className="pm-card__icon">
              <img
                src={`${ICON_BASE}/microphone.png`}
                alt="Story, Music & Creative Life"
                className="pm-card__icon-img"
              />
            </div>
            <h3 className="pm-card__title">Story, Music &amp; Creative Life</h3>
            <p className="pm-card__body">
              Music, photography, and writing are how I process and share the
              work. They show up in tone, narrative, and the small details that
              make tools feel human instead of clinical.
            </p>
          </article>

          {/* AI & Systems */}
          <article className="pm-card pm-card--ai">
            <div className="pm-card__icon">
              <img
                src={`${ICON_BASE}/systems.png`}
                alt="AI & Systems"
                className="pm-card__icon-img"
              />
            </div>
            <h3 className="pm-card__title">AI &amp; Systems</h3>
            <p className="pm-card__body">
              I treat AI like a sharp assistant: great at exploring options,
              stress-testing ideas, and drafting. I keep a human hand on the
              structure, decisions, and final voice — especially where judgment,
              nuance, or ethics are involved.
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
            Some problems need one dedicated dicipline. Others need multiple
            working together. The method is mostly about knowing <em>which</em>{" "}
            you need and when.
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
              NFC tagging on physical drums.
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
              where brand, story, product, systems, and physical craft all
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
            Toggle the core rhythms to see how I’d typically show up in that mix
            — and the kinds of outputs you can expect at different blend levels,
            including when AI joins the groove.
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
                        style={{ borderColor: d.color }}
                        aria-label={d.legendLabel}
                        title={d.legendLabel}
                      >
                        <img
                          src={d.iconSrc}
                          alt={d.legendLabel}
                          className="pm-blend__icon-img"
                        />
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

              {activeRecipe.examples && activeRecipe.examples.length > 0 && (
                <>
                  <h4 className="pm-blend__practice-heading">
                    How this shows up in my work
                  </h4>
                  <ul className="pm-blend__practice-list">
                    {activeRecipe.examples.map((ex, idx) => (
                      <li key={idx}>{ex}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </aside>
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
              Full-stack features, portals, internal tools, and system design. I
              can drop in on an existing product, untangle the complexity, and
              ship improvements that feel obvious in hindsight.
            </p>
          </article>

          <article className="pm-cta">
            <h3 className="pm-cta__title">Hybrid &amp; Blended Projects</h3>
            <p className="pm-cta__body">
              Work that sits between worlds — physical/digital, artist/customer,
              story/system. This is where the polyrhythmic approach shines the
              most.
            </p>
          </article>

          <article className="pm-cta">
            <h3 className="pm-cta__title">Coaching &amp; Mentorship</h3>
            <p className="pm-cta__body">
              Helping engineers, creatives, and founders use this way of
              thinking in their own work: deciding when to focus, when to blend,
              and how to ship without burning out.
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
                  I use tools like this as an assistant — to explore options,
                  stress-test ideas, and move faster on the parts that benefit
                  from iteration: naming, draft copy, refactoring ideas, edge
                  cases, and “what if we tried it this way?” experiments.
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
                  clear about what parts are human-authored vs.
                  machine-assisted. My job is to bring judgment, taste, and
                  context — and to ultimately stand behind the work as mine.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}