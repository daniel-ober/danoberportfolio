import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SoundLegendPortalCaseStudy.css";

export default function SoundLegendPortalCaseStudy() {
  const location = useLocation();
  const navigate = useNavigate();

  // Update these paths to match wherever you drop the images in /public
  // Example: /public/media/projects/soundlegend/hero.png
  const screenshots = [
    {
      src: "/media/projects/soundlegend/portal-hero.png",
      caption: "Portal overview / dashboard (admin view)",
    },
    {
      src: "/media/projects/soundlegend/stage-details.png",
      caption: "Stage detail + checkpoints (workflow clarity)",
    },
    {
      src: "/media/projects/soundlegend/media-filters.png",
      caption: "Media library + filtering (by stage + type)",
    },
  ];

  // ✅ Make hash links actually scroll in an SPA
  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (!hash) return;

    // allow layout to paint first
    window.requestAnimationFrame(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [location.hash]);

  // Optional: if you want buttons to work even if the user is already on that hash,
  // force re-scroll by doing a manual scroll handler.
  const goToHash = (hash) => {
    // Update the URL hash (without leaving the route)
    navigate({ hash }, { replace: false });

    // Scroll immediately as well (covers edge cases)
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="slcs page">
      <div className="slcs__inner page__inner">
        {/* Top utility row */}
        <div className="slcs__topbar">
          <Link className="slcs__back" to="/projects">
            ← Back to Projects
          </Link>

          <div className="slcs__tags" aria-label="Tech and focus areas">
            <span className="slcs__tag">React</span>
            <span className="slcs__tag">Firebase</span>
            <span className="slcs__tag">Customer portal</span>
            <span className="slcs__tag">Admin tooling</span>
            <span className="slcs__tag">Permissions</span>
            <span className="slcs__tag">Media workflow</span>
          </div>
        </div>

        {/* Hero */}
        <header className="slcs__hero">
          <div className="slcs__heroLeft">
            <p className="slcs__kicker">Case Study</p>
            <h1 className="slcs__title">SoundLegend Portal</h1>
            <p className="slcs__subtitle">
              A customer-facing build portal + admin workflow that turns a high-touch
              custom process into a clear, trackable experience — without losing the craft.
            </p>

            <div className="slcs__ctaRow">
              {/* These now work */}
              <button
                type="button"
                className="slcs__btn slcs__btn--primary"
                onClick={() => goToHash("#screens")}
              >
                View screenshots
              </button>

              <button
                type="button"
                className="slcs__btn slcs__btn--ghost"
                onClick={() => goToHash("#architecture")}
              >
                Architecture notes
              </button>
            </div>

            <div className="slcs__callouts">
              <div className="slcs__callout">
                <div className="slcs__calloutLabel">Primary goal</div>
                <div className="slcs__calloutValue">Reduce ambiguity + increase trust</div>
              </div>
              <div className="slcs__callout">
                <div className="slcs__calloutLabel">Key challenge</div>
                <div className="slcs__calloutValue">Access control + structured workflow</div>
              </div>
              <div className="slcs__callout">
                <div className="slcs__calloutLabel">Outcome</div>
                <div className="slcs__calloutValue">A portal that “reads” like the build itself</div>
              </div>
            </div>
          </div>

          <aside className="slcs__heroRight" aria-label="Featured UI screenshot">
            <div className="slcs__featuredLabel">Featured UI</div>
            <div className="slcs__featuredFrame">
              {/* swap this for your preferred hero image */}
              <img
                className="slcs__featuredImg"
                src="/media/projects/soundlegend/portal-hero.png"
                alt="SoundLegend Portal UI preview"
                loading="lazy"
              />
            </div>
          </aside>
        </header>

        {/* Problem / Approach / Result */}
        <section className="slcs__tri">
          <article className="slcs__triCard">
            <div className="slcs__triKicker">The problem</div>
            <p className="slcs__triBody">
              Custom builds create a ton of “Where are we at?” questions. Customers want
              visibility and artifacts (photos, notes, milestones), and admins need a reliable
              internal system to keep the build moving.
            </p>
          </article>

          <article className="slcs__triCard">
            <div className="slcs__triKicker">The approach</div>
            <p className="slcs__triBody">
              Model the build as discrete stages with checkpoints, show progress publicly,
              and centralize all project media — with permissions that keep customer and admin
              views in sync (without duplicating logic).
            </p>
          </article>

          <article className="slcs__triCard">
            <div className="slcs__triKicker">The result</div>
            <p className="slcs__triBody">
              A structured portal experience: progress, scope, attachments/media, and admin-side
              tools for notes, uploads, and workflow state. It feels premium and reduces churn
              in communication.
            </p>
          </article>
        </section>

        {/* Context */}
        <section className="slcs__section">
          <p className="slcs__sectionKicker">Context</p>
          <h2 className="slcs__h2">Why this mattered</h2>

          <div className="slcs__twoCol">
            <div className="slcs__panel">
              <div className="slcs__panelTitle">User need</div>
              <ul className="slcs__ul">
                <li>Confidence that the build is real and progressing</li>
                <li>Clarity on what’s happening and what happens next</li>
                <li>Access to artifacts: photos, videos, docs, notes</li>
                <li>A premium experience that matches a premium product</li>
              </ul>
            </div>

            <div className="slcs__panel">
              <div className="slcs__panelTitle">Business need</div>
              <ul className="slcs__ul">
                <li>Reduce repeated status questions and manual updates</li>
                <li>Create a repeatable internal workflow for projects</li>
                <li>Keep customer data safe (role-based access)</li>
                <li>Make it easy to publish media at the right time</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Constraints */}
        <section className="slcs__section">
          <p className="slcs__sectionKicker">Constraints</p>
          <h2 className="slcs__h2">Real-world constraints I designed around</h2>

          <div className="slcs__cards3">
            <div className="slcs__panel">
              <div className="slcs__panelTitle">Permissions are non-negotiable</div>
              <p className="slcs__p">
                Customers should only see their project(s). Admins need broader access.
                The system had to be secure by default.
              </p>
            </div>

            <div className="slcs__panel">
              <div className="slcs__panelTitle">Workflow must be structured</div>
              <p className="slcs__p">
                “In progress” isn’t enough. The portal needs to reflect the actual build steps,
                so updates feel tangible (checkpoints, stage notes, targets).
              </p>
            </div>

            <div className="slcs__panel">
              <div className="slcs__panelTitle">Media has to stay organized</div>
              <p className="slcs__p">
                Photos/videos/docs grow fast. Filters by build stage + media type keep the portal
                usable over time.
              </p>
            </div>
          </div>
        </section>

        {/* What I built */}
        <section className="slcs__section">
          <p className="slcs__sectionKicker">Solution</p>
          <h2 className="slcs__h2">What I built</h2>

          <div className="slcs__twoCol">
            <div className="slcs__panel">
              <div className="slcs__panelTitle">Customer-facing portal</div>
              <ul className="slcs__ul">
                <li>Build progress + current step visibility</li>
                <li>Scope / build details presented clearly</li>
                <li>Attachments + media library with filters</li>
                <li>Consistent dark “premium” UI across modules</li>
              </ul>
            </div>

            <div className="slcs__panel">
              <div className="slcs__panelTitle">Admin workflow tooling</div>
              <ul className="slcs__ul">
                <li>Update stages + checkpoints as work happens</li>
                <li>Upload media and choose category/visibility</li>
                <li>Internal notes + history to preserve context</li>
                <li>Controls that prevent accidental data drift</li>
              </ul>
            </div>
          </div>

          <div className="slcs__northStar">
            <span className="slcs__star">★</span>
            <div>
              The north star: make the portal feel like the build itself — clear stages, real
              artifacts, and a steady sense of progress.
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="slcs__section" id="architecture">
          <p className="slcs__sectionKicker">Architecture</p>
          <h2 className="slcs__h2">Architecture & implementation notes</h2>

          <div className="slcs__twoCol">
            <div className="slcs__panel">
              <div className="slcs__panelTitle">Data model (high level)</div>
              <ul className="slcs__ul">
                <li>
                  <strong>projects</strong> collection: core build data, stage progress, targets
                </li>
                <li>
                  <strong>users</strong>: role flags (admin / SoundLegend), project access mapping
                </li>
                <li>
                  <strong>uploads</strong>: storage + Firestore metadata (category, stage, visibility)
                </li>
              </ul>
              <p className="slcs__p slcs__p--muted">
                I kept the model readable for non-engineers: stages and checkpoints map cleanly
                to real build steps.
              </p>
            </div>

            <div className="slcs__panel">
              <div className="slcs__panelTitle">Reliability choices</div>
              <ul className="slcs__ul">
                <li>Centralized status normalization to avoid UI drift</li>
                <li>Guardrails around writes (avoid overwriting manual statuses)</li>
                <li>Predictable UI states for admin vs customer views</li>
                <li>Modal preview patterns for media (no accidental navigation away)</li>
              </ul>
              <p className="slcs__p slcs__p--muted">
                The goal wasn’t “more features.” It was fewer failure modes.
              </p>
            </div>
          </div>
        </section>

        {/* Screens */}
        <section className="slcs__section" id="screens">
          <p className="slcs__sectionKicker">Screens</p>
          <h2 className="slcs__h2">Screenshots (selected)</h2>

          <p className="slcs__p slcs__p--muted">
            Drop your chosen screenshots into <code>/public/media/projects/soundlegend/</code> and
            keep filenames stable (or update the array at the top of this file).
          </p>

          <div className="slcs__shots">
            {screenshots.map((s) => (
              <figure key={s.src} className="slcs__shot">
                <div className="slcs__shotFrame">
                  <img className="slcs__shotImg" src={s.src} alt={s.caption} loading="lazy" />
                </div>
                <figcaption className="slcs__shotCap">{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="slcs__section">
          <p className="slcs__sectionKicker">Impact</p>
          <h2 className="slcs__h2">What this demonstrates (for a Solutions / Customer Engineer)</h2>

          <div className="slcs__cards3">
            <div className="slcs__panel">
              <div className="slcs__panelTitle">Customer empathy → system design</div>
              <p className="slcs__p">
                I translated “I want updates” into a structured experience: stages, artifacts, and
                a clean story of progress.
              </p>
            </div>

            <div className="slcs__panel">
              <div className="slcs__panelTitle">Clarity → communication</div>
              <p className="slcs__p">
                The UI communicates status without a meeting, sets expectations, and reduces
                back-and-forth in real life.
              </p>
            </div>

            <div className="slcs__panel">
              <div className="slcs__panelTitle">Operational reliability</div>
              <p className="slcs__p">
                Guardrails for status + permissions prevent accidental drift — the portal stays
                trustworthy as usage scales.
              </p>
            </div>
          </div>

          <div className="slcs__footerRow">
            <div className="slcs__next">
              <div className="slcs__nextKicker">Next case study</div>
              <div className="slcs__nextTitle">NFC Drum Authentication</div>
              <div className="slcs__nextMeta">
                Security-first verification UX using NTAG 424 DNA concepts + backend validation.
              </div>
            </div>

            <Link className="slcs__btn slcs__btn--ghost" to="/projects">
              Back to Projects
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}