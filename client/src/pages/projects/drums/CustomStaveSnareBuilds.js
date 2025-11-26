// src/pages/projects/drums/CustomStaveSnareBuilds.js
import React from "react";
import ProjectDetailLayout from "../ProjectDetailLayout";
import "./CustomStaveSnareBuilds.css";

export default function CustomStaveSnareBuilds() {
  return (
    <ProjectDetailLayout
      eyebrow="Case Study · Drum Craft"
      title="Custom Stave Snare Builds"
      role="Drum craftsman · Product designer"
      stack="Stave construction · Finishing · Tuning"
      summary="Hand-built SoundLegend and Heritage series snares — from raw lumber selection to shell design, finishing, tuning, and documentation."
    >
      {/* HERO MEDIA ---------------------------------------------- */}
      <div className="pdetail__hero-media drum-hero">
        <div className="pdetail__hero-media-inner drum-hero__placeholder">
          <span>SoundLegend & Heritage series lineup</span>
          <p>
            Future hero image of finished snares: veneers, acrylic infills,
            hardware finishes, and shop environment.
          </p>
        </div>
      </div>

      {/* 1. What these builds are -------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Turning raw lumber into a voice</h2>
        <p>
          Each build starts as <strong>rough boards and a conversation</strong>.
          The goal isn’t just a pretty shell — it’s a drum that lines up with
          how the player hits, how they like a snare to sit in a mix, and what
          inspires them to keep playing.
        </p>
        <p>
          The SoundLegend series leans into premium veneers, acrylic infills,
          and deep documentation. Heritage focuses on classic woods and
          workhorse reliability. Both share the same attention to shell
          geometry, edge work, and tuning.
        </p>
      </section>

      {/* 2. Build stages ----------------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Core stages of a stave build</h2>

        <div className="pdetail__two-col">
          <div>
            <h3 className="pdetail__subheading">1. Wood & geometry</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>Species selection based on feel, articulation, and weight.</li>
              <li>
                Stave layout and joinery tuned to the target diameter and depth.
              </li>
              <li>
                CentraLock and custom jigs keep shells centered during glue-up,
                truing, and milling.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="pdetail__subheading">2. Exterior & interior work</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>Veneer work and acrylic infills for SoundLegend builds.</li>
              <li>
                Interior torch-tuning and smoothing to control overtones and
                response.
              </li>
              <li>
                Finish schedule (oil, poly, or hybrid) matched to how the drum
                will be used.
              </li>
            </ul>
          </div>
        </div>

        <div className="pdetail__two-col pdetail__two-col--stacked">
          <div>
            <h3 className="pdetail__subheading">3. Bearing edges & snare beds</h3>
            <p>
              Edges are cut after the shell is fully trued, not before.
              Different profiles are used for Heritage vs. SoundLegend, but the
              throughline is a clean, repeatable seat that doesn’t fight the
              heads.
            </p>
          </div>
          <div>
            <h3 className="pdetail__subheading">4. Hardware & final assembly</h3>
            <p>
              Lug spacing, hoop choice, and snare systems are matched to the
              build’s intent — from studio workhorse to character piece. Each
              drum is assembled, tuned, and test-driven before any photos or
              documentation are finalized.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Sound & testing -------------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Sound testing & tuning window</h2>
        <p>
          Every drum is tuned through a range of tensions to find its{" "}
          <strong>“happy window”</strong> — where the shell, heads, and hardware
          all cooperate. That window informs:
        </p>
        <ul className="pdetail__list">
          <li>Recommended starting pitches for top and bottom heads.</li>
          <li>
            How the drum behaves under rimshot-heavy playing vs. soft brush
            work.
          </li>
          <li>Where it naturally wants to sit in a typical rock/pop mix.</li>
        </ul>
      </section>

      {/* 4. Documentation & portal ------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">
          Documentation in the SoundLegend portal
        </h2>
        <p>
          These builds tie directly into the Ober Artisan digital system:
        </p>
        <ul className="pdetail__list">
          <li>
            A <strong>10-phase roadmap</strong> that logs progress from Discovery
            & Design through final QA.
          </li>
          <li>
            File sections for build proposals, veneers, mockups, and media tied
            to each drum’s project.
          </li>
          <li>
            Photos, notes, and timeline entries that give the artist a clear
            sense of how their drum came to life.
          </li>
        </ul>
      </section>

      {/* 5. What this enables ------------------------------------ */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">
          What these builds make possible
        </h2>
        <p>
          The combination of <strong>hands-on craft</strong> and{" "}
          <strong>systems thinking</strong> means each snare isn’t just a one-off;
          it’s part of a repeatable process. That process:
        </p>
        <ul className="pdetail__list">
          <li>
            Gives players confidence that their drum will behave predictably
            session after session.
          </li>
          <li>
            Makes it easier to support, maintain, or recreate a favorite build
            in the future.
          </li>
          <li>
            Keeps the story of each instrument — from wood choice to final
            recording — intact and accessible.
          </li>
        </ul>
      </section>
    </ProjectDetailLayout>
  );
}