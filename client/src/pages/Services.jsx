import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <div className="services">
      <header className="services__hero">
        <h1 className="services__title">What I Do</h1>
        <p className="services__subtitle">
          I help founders, teams, and artists build software, systems, sound, and visuals —
          combining engineering discipline with creative intuition.
        </p>
      </header>

      {/* TECHNICAL / ENGINEERING */}
      <section className="services__section">
        <h2 className="services__heading">Technical & Engineering</h2>
        <div className="services__cards">
          <article className="service-card">
            <h3>Software Engineering</h3>
            <p>
              Full-stack web applications, internal tools, customer portals, and system
              integrations aligned to real business needs.
            </p>
            <ul>
              <li>React + Firebase apps</li>
              <li>Authentication & user management</li>
              <li>API-driven workflows</li>
              <li>Admin dashboards & reporting</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Solutions Engineering & APIs</h3>
            <p>
              Bridge business requirements with technical execution — from discovery and design to
              implementation and enablement.
            </p>
            <ul>
              <li>Process mapping & solution design</li>
              <li>REST API integrations & testing</li>
              <li>Pre- and post-sales technical support</li>
              <li>Customer success tooling & playbooks</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>3D Design & Printing</h3>
            <p>
              Custom parts, jigs, and functional prototypes — from parametric design to finished
              prints.
            </p>
            <ul>
              <li>Fusion 360 modeling</li>
              <li>Functional jigs & fixtures</li>
              <li>Rapid prototyping</li>
              <li>Small-batch prints</li>
            </ul>
          </article>
        </div>
      </section>

      {/* MUSIC & AUDIO */}
      <section className="services__section">
        <h2 className="services__heading">Music & Audio</h2>
        <div className="services__cards">
          <article className="service-card">
            <h3>Session Drumming</h3>
            <p>
              Live and remote drum tracking with musicality, tone, and pocket as the priority —
              tailored to the song, not just the grid.
            </p>
            <ul>
              <li>Rock / pop / CCM / indie</li>
              <li>Click-locked grooves</li>
              <li>Remote multitrack recording</li>
              <li>Warm, mix-ready drum tones</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Recording & Mixing</h3>
            <p>
              Studio-quality drum recording, editing, sound design, and full mixdowns for singles,
              EPs, and content.
            </p>
            <ul>
              <li>Drum editing & quantizing</li>
              <li>Mixing & processing</li>
              <li>Sound design layers</li>
              <li>Master-ready stems</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Film Scoring & Composition</h3>
            <p>
              Original cues tailored to your story — cinematic, emotional, and production-ready.
            </p>
            <ul>
              <li>Thematic development</li>
              <li>Atmospheric scoring</li>
              <li>Hybrid orchestral textures</li>
              <li>Delivery-ready stems</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Live Performance & Touring</h3>
            <p>
              Available for shows, sessions, and touring gigs — bringing musicality, consistency,
              and stage-ready energy.
            </p>
            <ul>
              <li>One-off shows, fill-ins, or full runs</li>
              <li>In-ears + click-ready</li>
              <li>Quick study, chart-friendly</li>
              <li>Rock, pop, CCM, and adjacent styles</li>
            </ul>
          </article>
        </div>
      </section>

      {/* VISUAL & CRAFT */}
      <section className="services__section">
        <h2 className="services__heading">Visual Work & Craft</h2>
        <div className="services__cards">
          <article className="service-card">
            <h3>Photography</h3>
            <p>
              Portraits, product photography, and brand storytelling with a clean, cinematic look.
            </p>
            <ul>
              <li>Product shoots (drums, gear, tools)</li>
              <li>Artist & promo portraits</li>
              <li>Brand & campaign imagery</li>
            </ul>
          </article>

          <article className="service-card">
            <h3>Drum Craftsmanship</h3>
            <p>
              Fully handcrafted stave snare drums — from raw lumber to finished instrument, with a
              full digital experience behind it.
            </p>
            <ul>
              <li>Shell design & construction</li>
              <li>Veneers, finishes, and acrylic infill</li>
              <li>Hardware installation & setup</li>
              <li>Player-first tuning & documentation</li>
            </ul>
          </article>
        </div>
      </section>

      <footer className="services__footer">
        <p>Ready to collaborate?</p>
        <a href="/contact" className="services__cta">
          Get in touch →
        </a>
      </footer>
    </div>
  );
}