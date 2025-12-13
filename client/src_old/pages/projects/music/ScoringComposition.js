// src/pages/projects/music/ScoringComposition.js
import React from "react";
import ProjectDetailLayout from "../ProjectDetailLayout";
import "./ScoringComposition.css";

export default function ScoringComposition() {
  return (
    <ProjectDetailLayout
      eyebrow="Case Study · Music & Audio"
      title="Scoring & Composition"
      role="Composer · Arranger"
      stack="Hybrid orchestration · Thematic writing"
      summary="Original cues and themes for film, narrative content, and brand stories — blending acoustic instrumentation with hybrid textures."
    >
      {/* HERO IMAGE ------------------------------------------------ */}
      <div className="pdetail__hero-media score-hero">
        <div className="pdetail__hero-media-inner score-hero__image-wrapper">
          <img
            src="/media/music/scoring-composition.jpg"
            alt="Writing desk with scoring session, MIDI keyboard, and orchestral template on screen"
            className="score-hero__image"
          />
        </div>
      </div>

      {/* 1. What I write ----------------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">
          Music for stories, not just scenes
        </h2>
        <p>
          My scoring work focuses on <strong>theme-first writing</strong>.
          Instead of treating each cue as an isolated track, I like to build a
          small musical language — motifs, textures, and rhythms that can be
          stretched across an entire project.
        </p>
        <p>
          That could be a single interval on piano that keeps returning, a drum
          pattern that evolves with the character, or a sound-design element
          that glues different locations together.
        </p>
      </section>

      {/* 2. Palette & sound world -------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Palette & sound world</h2>

        <div className="pdetail__two-col">
          <div>
            <h3 className="pdetail__subheading">Hybrid orchestration</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>Strings, piano, and small ensemble writing.</li>
              <li>
                Organic percussion + processed drums for momentum without
                overpowering dialogue.
              </li>
              <li>
                Pads and synth beds to subtly shape emotion under the picture.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="pdetail__subheading">Textural layers</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>
                Bowed metals, reversed piano, and bass swells for tension cues.
              </li>
              <li>
                Harmonic delays and granular reverbs for dreamlike or memory
                sequences.
              </li>
              <li>
                Light motif treatments (rhythm, inversion, reharmonization) so
                themes feel familiar but never repetitive.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Workflow with directors & editors -------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">
          Workflow with directors & editors
        </h2>
        <ul className="pdetail__list">
          <li>
            <strong>Spotting & language:</strong> talk through arcs, emotional
            beats, and where we want music to lead vs follow.
          </li>
          <li>
            <strong>Sketches first:</strong> piano + simple mockups to confirm
            direction before fully scoring a reel.
          </li>
          <li>
            <strong>Iterative delivery:</strong> cue batches with clear version
            notes and easy timecode references for feedback.
          </li>
          <li>
            <strong>Mix-ready stems:</strong> rhythm, harmonic, melodic, and FX
            stems so editors and re-recording mixers have flexibility.
          </li>
        </ul>
      </section>

      {/* 4. Cue building & variation ----------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Building and bending themes</h2>
        <p>
          Once a main theme is locked, I like to build a small library of
          variations:
        </p>
        <ul className="pdetail__list">
          <li>Intimate piano-only version for quiet, internal moments.</li>
          <li>
            Larger, rhythm-driven version for title cards or key sequences.
          </li>
          <li>
            Harmonic or textural “shadow” versions for tension underscoring.
          </li>
          <li>
            Stripped-down rhythm or drone beds that extend the mood underneath
            dialogue.
          </li>
        </ul>
      </section>

      {/* 5. Deliverables ----------------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Deliverables</h2>
        <ul className="pdetail__list">
          <li>Full mix and stems in 24-bit at requested sample rate.</li>
          <li>Cue sheets and timings per cue for rights / publishing.</li>
          <li>Session archives for future revisions or additional seasons.</li>
        </ul>
      </section>
    </ProjectDetailLayout>
  );
}