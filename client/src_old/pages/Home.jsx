// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const SNAPSHOTS = [
  {
    id: "drums",
    label: "Custom drums",
    line1: "Stave shells, jigs, torch, finish.",
    line2: "Heritage / Feuzon / SoundLegend.",
  },
  {
    id: "software",
    label: "Software & systems",
    line1: "Portals, dashboards, NFC verification,",
    line2: "and little tools that glue things together.",
  },
  {
    id: "audio",
    label: "Sound & story",
    line1: "Drums, albums, scores, teaser trailers,",
    line2: "and weird late-night experiments.",
  },
];

const LITTLE_THINGS = [
  "Built a portal where drum owners can follow their build like a story.",
  "Gave each drum an NFC tag that can prove it’s real when you tap it.",
  "Designed jigs and fixtures so the workshop feels like a tiny factory.",
  "Made a teaser for SoundLegend: logo, visuals, slogan, and score.",
  "Played 100+ shows with ChillSet, splitting time between the kit and the DAW.",
  "Started DoberPop: small-batch popcorn with its own flavors, brand, and app.",
  "Built Hot Chicken Heroes so friends could rate Nashville hot chicken spots.",
  "Got unreasonably into infinite mirrors and Raspberry Pi experiments.",
];

function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="home-page">
      {/* HERO: Who I am + what this place is */}
      <section
        className={`home-hero ${
          heroLoaded ? "home-hero--loaded" : "home-hero--init"
        }`}
      >
        <div className="home-hero__inner">
          <div className="home-hero__layout">
            {/* LEFT: COPY */}
            <div className="home-hero__copy">
              <div className="home-hero__tag">
                Portfolio · Workshop · Storyboard
              </div>

              <h1 className="home-hero__title">
                Hey, I&apos;m Dan.
                <span className="home-hero__title-accent">
                  I help half-formed ideas grow into real, touchable systems,
                  instruments, and experiences.
                </span>
              </h1>

              <p className="home-hero__body">
                Sometimes that means a <span>custom snare drum</span> with its
                own build portal and identity. Sometimes it&apos;s a{" "}
                <span>web app or admin dashboard</span> that quietly keeps a
                whole operation running. Sometimes it&apos;s a{" "}
                <span>score, teaser, or little brand world</span> built around
                something that didn&apos;t exist yet.
              </p>

              <p className="home-hero__puzzle-hint">
                This page is the &ldquo;who / why / what / how&rdquo; behind all
                of that — and a starting point if you&apos;re thinking about
                bringing me into your own build.
              </p>

              <div className="home-hero__keywords">
                <span>Craft</span>
                <span>Systems</span>
                <span>Story</span>
              </div>

              <div className="home-hero__buttons">
                <Link
                  to="/results"
                  className="home-hero__btn home-hero__btn--primary"
                >
                  Jump to the results
                </Link>
                <Link
                  to="/contact"
                  className="home-hero__btn home-hero__btn--ghost"
                >
                  Talk about a project →
                </Link>
              </div>
            </div>

            {/* RIGHT: VISUAL */}
            <div className="home-hero__visual">
              <div className="home-hero__visual-frame">
                <div
                  className="home-hero__visual-image"
                  style={{
                    backgroundImage: 'url("/media/home/home-hero-studio.jpg")',
                  }}
                />
                <div className="home-hero__visual-label">
                  <span className="home-hero__visual-pill">Custom drums</span>
                  <span className="home-hero__visual-pill">
                    Interactive systems
                  </span>
                  <span className="home-hero__visual-pill">
                    Story &amp; sound
                  </span>
                </div>
                <div className="home-hero__visual-caption">
                  One of the worlds I live in:
                  <br />
                  wood, light, code, and sound in the same frame.
                </div>
              </div>

              <div className="home-hero__postit">
                <p className="home-hero__postit-title">Recurring themes</p>
                <ul>
                  <li>Make it real, not hypothetical.</li>
                  <li>Bridge the digital and physical.</li>
                  <li>Make it feel like a story, not a spec.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SNAPSHOT STRIP: What I actually do */}
      <section className="home-strip">
        <div className="home-strip__label">What I work on</div>
        <div className="home-strip__cards">
          {SNAPSHOTS.map((snap) => (
            <article key={snap.id} className="home-strip-card">
              <h2 className="home-strip-card__label">{snap.label}</h2>
              <p className="home-strip-card__line">{snap.line1}</p>
              <p className="home-strip-card__line">{snap.line2}</p>
            </article>
          ))}
        </div>
      </section>

      {/* STORY BLOCK: Why this portfolio exists */}
      <section className="home-story">
        <div className="home-story__column home-story__column--main">
          <h2 className="home-story__title">Why this portfolio exists</h2>
          <p className="home-story__paragraph">
            This isn&apos;t meant to be a museum of polished screenshots.
            It&apos;s closer to a <span>workbench</span> — a look at how the
            parts fit together when I&apos;m building something real.
          </p>
          <ul className="home-story__list">
            <li>
              To show how a <span>drum line</span> can have its own portal,
              verification system, and story — not just a product page.
            </li>
            <li>
              To unpack how <span>systems and tools</span> (admin dashboards,
              portals, NFC tags) quietly make the visible stuff possible.
            </li>
            <li>
              To make the overlap between <span>code, craft, and sound</span>{" "}
              feel obvious instead of weird.
            </li>
            <li>
              And to give you a sense of whether my way of thinking would be
              useful on your team or project.
            </li>
          </ul>
        </div>

        <div className="home-story__column home-story__column--side">
          <div className="home-scribble-card">
            <p className="home-scribble-card__eyebrow">Who I am at work</p>
            <p className="home-scribble-card__text">
              I&apos;m happiest in the middle of a system: one hand in the code,
              one hand on something physical, and a notebook full of arrows
              between them.
            </p>
          </div>

          <div className="home-scribble-card home-scribble-card--light">
            <p className="home-scribble-card__eyebrow">How I tend to show up</p>
            <ul className="home-scribble-card__list">
              <li>Curious first, then opinionated.</li>
              <li>Comfortable owning the weird in-between work.</li>
              <li>
                Big on narrative: why this thing matters, not just what it is.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* LITTLE THINGS LIST: moments I’m proud of */}
      <section className="home-little-things">
        <header className="home-section-header">
          <h2 className="home-section-title">
            A few little things I&apos;m proud of
          </h2>
          <p className="home-section-subtitle">
            Not a full resume — just some moments where the experiments actually
            worked.
          </p>
        </header>

        <ul className="home-little-things__list">
          {LITTLE_THINGS.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* HOW WE CAN WORK TOGETHER */}
      <section className="home-collab">
        <header className="home-section-header">
          <h2 className="home-section-title">How we can work together</h2>
          <p className="home-section-subtitle">
            The short version: you bring a messy idea or a real constraint, I
            bring the mix of drums, systems, and story that gets it moving.
          </p>
        </header>

        <div className="home-collab__grid">
          <article className="home-collab-card">
            <h3>Product &amp; systems</h3>
            <p>
              You&apos;ve got workflows, customers, or internal chaos that needs
              a real tool — portal, dashboard, or verification flow — built with
              care for the humans using it.
            </p>
          </article>

          <article className="home-collab-card">
            <h3>Brand &amp; story</h3>
            <p>
              You have something worth talking about and need a narrative, a
              teaser, or a series of touchpoints that make it feel alive instead
              of like another landing page.
            </p>
          </article>

          <article className="home-collab-card">
            <h3>Drums &amp; sound</h3>
            <p>
              You&apos;re drawn to the drum side — custom builds, SoundLegend
              projects, or sound design around your product or campaign.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="home-cta__card">
          <h2 className="home-cta__title">
            If you like builders who treat everything like a puzzle, we&apos;ll
            probably get along.
          </h2>
          <p className="home-cta__subtitle">
            From here you can dig into case studies, poke at the philosophy, or
            just send a note about a project you&apos;re thinking through.
            I&apos;m always up for talking through ideas — even if they&apos;re
            still in the scribble stage.
          </p>
          <div className="home-cta__actions">
            <Link
              to="/results"
              className="home-cta__btn home-cta__btn--primary"
            >
              See the results
            </Link>
            <Link to="/contact" className="home-cta__btn home-cta__btn--ghost">
              Say hi
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
