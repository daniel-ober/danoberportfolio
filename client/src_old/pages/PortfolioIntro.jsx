// client/src/pages/PortfolioIntro.jsx
import React from "react";
import "./PortfolioIntro.css";

const ICON_BASE = "/media/icons";

const DISCIPLINES = [
  {
    key: "web",
    label: "Web & Software",
    color: "#3b82f6",
    iconSrc: `${ICON_BASE}/computer.png`,
    blurb: "React, Firebase, data models, and the plumbing that keeps products alive.",
  },
  {
    key: "product",
    label: "Product & UX",
    color: "#f97316",
    iconSrc: `${ICON_BASE}/navigate.png`,
    blurb: "Flows, trade-offs, and helping people understand what happens next.",
  },
  {
    key: "problem",
    label: "Problem Solving",
    color: "#a855f7",
    iconSrc: `${ICON_BASE}/puzzle.png`,
    blurb: "Constraints, debugging, and finding the smallest change with the biggest impact.",
  },
  {
    key: "craft",
    label: "Craft & Making",
    color: "#facc15",
    iconSrc: `${ICON_BASE}/wood.png`,
    blurb: "Physical builds and processes that turn ideas into instruments you can play.",
  },
  {
    key: "story",
    label: "Story & Music",
    color: "#ec4899",
    iconSrc: `${ICON_BASE}/microphone.png`,
    blurb: "Narrative, tone, and making tools feel human instead of clinical.",
  },
  {
    key: "ai",
    label: "AI & Systems",
    color: "#22c55e",
    iconSrc: `${ICON_BASE}/systems.png`,
    blurb: "Models as a second brain for exploration, not a replacement for judgment.",
  },
];

const SPOTLIGHT_PROJECTS = [
  {
    id: "soundlegend-portal",
    title: "SoundLegend Artist Portal",
    summary:
      "Custom drum builds tracked end-to-end: specs, media, progress, and legacy pages.",
    href: "/projects/soundlegend-portal", // update to your real route
    disciplines: ["web", "product", "craft", "story", "ai"],
  },
  {
    id: "admin-overview",
    title: "Ober Admin Overview Board",
    summary:
      "Drag-and-drop board unifying orders, support, SoundLegend requests, and risk alerts.",
    href: "/projects/admin-overview", // update to your real route
    disciplines: ["web", "product", "problem", "ai"],
  },
  {
    id: "nfc-verification",
    title: "NFC Drum Verification",
    summary:
      "Secure NTAG424-based verification flow that ties physical drums to digital identity.",
    href: "/projects/nfc-verification", // update to your real route
    disciplines: ["web", "problem", "craft", "ai"],
  },
];

function DisciplineChip({ label, color, compact = false }) {
  return (
    <span
      className={
        "pi-discipline-chip" + (compact ? " pi-discipline-chip--compact" : "")
      }
      style={{ borderColor: color + "80" }}
    >
      <span
        className="pi-discipline-chip__dot"
        style={{ backgroundColor: color }}
      />
      <span className="pi-discipline-chip__label">{label}</span>
    </span>
  );
}

function ProjectDisciplinesRow({ keys }) {
  const map = new Map(DISCIPLINES.map((d) => [d.key, d]));
  return (
    <div className="pi-project__disciplines">
      {keys.map((key) => {
        const d = map.get(key);
        if (!d) return null;
        return (
          <DisciplineChip
            key={key}
            label={d.label}
            color={d.color}
            compact={true}
          />
        );
      })}
    </div>
  );
}

export default function PortfolioIntro() {
  return (
    <main className="pi-page">
      {/* HERO */}
      <section className="pi-hero" aria-labelledby="pi-hero-title">
        <div className="pi-hero__copy">
          <p className="pi-hero__eyebrow">Daniel Ober · Hybrid Engineer & Builder</p>

          <h1 id="pi-hero-title" className="pi-hero__title">
            I design and build{" "}
            <span>hybrid systems</span> — web, instruments, and experiences.
          </h1>

          <p className="pi-hero__tagline">
            I work at the intersection of{" "}
            <strong>engineering, product, systems, craft, story, and AI</strong>.
            This portfolio is a guided tour through that stack: how the disciplines
            came online, how they blend, and where they show up in real projects.
          </p>

          <div className="pi-hero__cta-row">
            <a href="#overview" className="pi-hero__cta pi-hero__cta--primary">
              <span>Quick Overview</span>
              <span className="pi-hero__cta-hint">(for hiring managers)</span>
            </a>
            <a href="/story" className="pi-hero__cta pi-hero__cta--ghost">
              Take the Story Tour
            </a>
          </div>

          <div className="pi-hero__mini-nav">
            <span className="pi-hero__mini-nav-label">Jump to:</span>
            <a href="/story" className="pi-hero__mini-nav-link">
              My Story Timeline
            </a>
            <a href="/method" className="pi-hero__mini-nav-link">
              Polyrhythmic Method
            </a>
            <a href="/projects" className="pi-hero__mini-nav-link">
              Projects & Craft
            </a>
            <a href="/contact" className="pi-hero__mini-nav-link">
              Contact
            </a>
          </div>
        </div>

        {/* Discipline HUD */}
        <aside className="pi-hero__hud" aria-label="Core disciplines">
          <div className="pi-hero__hud-header">
            <p className="pi-hero__hud-label">Core Disciplines</p>
            <p className="pi-hero__hud-sub">
              The same six threads you&apos;ll see woven through the story,
              method, and projects.
            </p>
          </div>

          <div className="pi-hero__hud-grid">
            {DISCIPLINES.map((d) => (
              <article key={d.key} className="pi-hero__discipline-card">
                <div
                  className="pi-hero__discipline-icon"
                  style={{ borderColor: d.color + "80" }}
                >
                  <img
                    src={d.iconSrc}
                    alt={d.label}
                    className="pi-hero__discipline-img"
                  />
                </div>
                <h3 className="pi-hero__discipline-title">{d.label}</h3>
                <p className="pi-hero__discipline-body">{d.blurb}</p>
              </article>
            ))}
          </div>
        </aside>
      </section>

      {/* OVERVIEW / FOR HIRING MANAGERS */}
      <section id="overview" className="pi-section pi-section--overview">
        <header className="pi-section__header">
          <h2 className="pi-section__title">At a Glance</h2>
          <p className="pi-section__subtitle">
            The short version of who I am, what I&apos;ve built, and how I work
            — for folks skimming between tabs.
          </p>
        </header>

        <div className="pi-overview__grid">
          <article className="pi-overview__card">
            <h3 className="pi-overview__label">What I Do</h3>
            <p className="pi-overview__body">
              I&apos;m a <strong>product-minded engineer</strong> who can move
              between requirements, UX, data models, and physical constraints —
              and ship systems that feel cohesive from browser to workbench.
            </p>
          </article>

          <article className="pi-overview__card">
            <h3 className="pi-overview__label">Where I&apos;ve Been</h3>
            <ul className="pi-overview__list">
              <li>JLL Technologies – API + integrations-focused support/SE work.</li>
              <li>CarGurus – led a 20+ rep team through hyper-growth.</li>
              <li>JumpCrew – translating marketing metrics into client-ready stories.</li>
              <li>Ober Artisan Drums – founder, builder, full-stack product owner.</li>
            </ul>
          </article>

          <article className="pi-overview__card">
            <h3 className="pi-overview__label">How I Work</h3>
            <ul className="pi-overview__list">
              <li>Start with constraints and real-world use, not just the happy path.</li>
              <li>Keep one mental model of the system across code, people, and process.</li>
              <li>Bias for shipping something small, real, and learnable.</li>
              <li>
                Use AI as a fast assistant for exploration, while keeping human judgment on
                the hook for decisions.
              </li>
            </ul>
          </article>
        </div>

        <div className="pi-overview__footer">
          <p>
            If you&apos;re looking for someone who can own a slice of product end-to-end —
            from narrative to schema to shipped features — that&apos;s where I do my best
            work.
          </p>
        </div>
      </section>

      {/* SPOTLIGHT PROJECTS STRIP */}
      <section className="pi-section pi-section--spotlight">
        <header className="pi-section__header">
          <h2 className="pi-section__title">Spotlight Projects</h2>
          <p className="pi-section__subtitle">
            A few deep-dives where the polyrhythmic stack shows up clearly. The full
            projects gallery lives in the Projects section.
          </p>
        </header>

        <div className="pi-spotlight__row">
          {SPOTLIGHT_PROJECTS.map((proj) => (
            <article key={proj.id} className="pi-project">
              <div className="pi-project__header">
                <h3 className="pi-project__title">{proj.title}</h3>
              </div>
              <p className="pi-project__summary">{proj.summary}</p>

              <ProjectDisciplinesRow keys={proj.disciplines} />

              <a href={proj.href} className="pi-project__link">
                View project story →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CHOOSE YOUR TOUR */}
      <section className="pi-section pi-section--tours">
        <header className="pi-section__header pi-section__header--center">
          <h2 className="pi-section__title">Choose Your Tour</h2>
          <p className="pi-section__subtitle">
            Different visitors care about different layers. Pick the tour that fits what
            you&apos;re here to see.
          </p>
        </header>

        <div className="pi-tours__grid">
          <article className="pi-tour">
            <h3 className="pi-tour__title">My Story Timeline</h3>
            <p className="pi-tour__body">
              Scroll through the rooms and eras where each discipline came online. Built
              as a layered, parallax storyboard you can explore at your own pace.
            </p>
            <div className="pi-tour__disciplines">
              <ProjectDisciplinesRow keys={["craft", "story", "web"]} />
            </div>
            <a href="/story" className="pi-tour__link">
              Start the story tour →
            </a>
          </article>

          <article className="pi-tour">
            <h3 className="pi-tour__title">Polyrhythmic Discipline Method</h3>
            <p className="pi-tour__body">
              A hands-on way to see how I blend disciplines. Toggle different combinations
              to see the kind of work, outcomes, and collaboration style each mix unlocks.
            </p>
            <div className="pi-tour__disciplines">
              <ProjectDisciplinesRow
                keys={["web", "product", "problem", "craft", "story", "ai"]}
              />
            </div>
            <a href="/method" className="pi-tour__link">
              Explore the method →
            </a>
          </article>

          <article className="pi-tour">
            <h3 className="pi-tour__title">Projects &amp; Craft Gallery</h3>
            <p className="pi-tour__body">
              Dive into case studies across web, tools, and instruments: admin dashboards,
              portals, NFC flows, jigs, and builds — all tagged by discipline.
            </p>
            <div className="pi-tour__disciplines">
              <ProjectDisciplinesRow keys={["web", "product", "craft", "story"]} />
            </div>
            <a href="/projects" className="pi-tour__link">
              Browse projects →
            </a>
          </article>

          <article className="pi-tour">
            <h3 className="pi-tour__title">Work With Me</h3>
            <p className="pi-tour__body">
              Whether it&apos;s a full-time role, a hybrid project, or a weird idea that
              needs a builder who lives between disciplines, this is where we start the
              conversation.
            </p>
            <div className="pi-tour__disciplines">
              <ProjectDisciplinesRow
                keys={["web", "product", "problem", "craft", "story", "ai"]}
              />
            </div>
            <a href="/contact" className="pi-tour__link">
              Open the contact form →
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}