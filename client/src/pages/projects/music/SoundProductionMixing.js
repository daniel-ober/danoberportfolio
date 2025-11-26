// src/pages/projects/music/SoundProductionMixing.js
import React from "react";
import ProjectDetailLayout from "../ProjectDetailLayout";
import "./SoundProductionMixing.css";

export default function SoundProductionMixing() {
  return (
    <ProjectDetailLayout
      eyebrow="Case Study · Music & Audio"
      title="Sound Production & Mixing"
      role="Recording · Mixing · Sound design"
      stack="Logic Pro · Apollo Console · Hybrid outboard · In-the-box finesse"
      summary="From raw takes to polished mixes: drum capture, editing, sound design layers, and delivery-ready stems tailored for release."
    >
      {/* HERO IMAGE ------------------------------------------------ */}
      <div className="pdetail__hero-media spm-hero">
        <div className="pdetail__hero-media-inner spm-hero__image-wrapper">
          <img
            src="/media/music/sound-production-mixing.jpg"
            alt="Mixing workstation with drum session on screen and studio outboard gear"
            className="spm-hero__image"
          />
        </div>
      </div>

      {/* 1. What this work covers -------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">
          From raw tracks to release-ready mixes
        </h2>
        <p>
          Most of my production work starts with drums and expands outward:
          bass, guitars, keys, and additional sound design. The goal is always
          the same — <strong>emotion first, clarity and translation second</strong>.
        </p>
        <p>
          I lean on hybrid workflow: clean capture, thoughtful editing, and a
          mix of tasteful analog-style color with precise in-the-box control.
        </p>
      </section>

      {/* 2. Production & editing pipeline ------------------------ */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">
          Production & editing pipeline
        </h2>

        <div className="pdetail__two-col">
          <div>
            <h3 className="pdetail__subheading">Session prep</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>Import and organize tracks with clear naming and color coding.</li>
              <li>
                Clean up noise, clicks, and problem areas before any tone
                decisions.
              </li>
              <li>
                Align multi-mic sources (kick, snare, OH, rooms) for phase
                coherence.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="pdetail__subheading">Editing & feel</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>Timing edits that respect the original groove and push/pull.</li>
              <li>Sample support only where needed to reinforce intent.</li>
              <li>
                Vocal and instrument comping focused on emotion over perfection.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Mixing approach -------------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Mixing approach</h2>

        <div className="pdetail__two-col">
          <div>
            <h3 className="pdetail__subheading">Macro moves</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>Top-down bus processing for glue before micro-EQ tweaks.</li>
              <li>
                Clear hierarchy: drums and vocal as anchors, everything else
                supporting.
              </li>
              <li>
                Broad-stroke EQ and compression to establish tone and density
                quickly.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="pdetail__subheading">Details & ear candy</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>
                Automation passes for choruses, fills, and emotional moments.
              </li>
              <li>
                Subtle sound design (reversed swells, filtered delays, tuned
                percussion) to connect sections.
              </li>
              <li>
                Parallel processing on drums, vocals, and mix bus for impact
                without sacrificing dynamics.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Deliverables ----------------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Deliverables for artists</h2>
        <ul className="pdetail__list">
          <li>24-bit mix print at requested sample rate (and MP3/streaming ref).</li>
          <li>
            Instrumental / TV mix, a cappella, and stems on request for sync or
            live use.
          </li>
          <li>
            Session documentation: tempo map, mix notes, and recall screenshots.
          </li>
          <li>
            Optional alternate master versions (slightly different limiting for
            streaming vs live playback).
          </li>
        </ul>
      </section>

      {/* 5. Where this fits in my work --------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">
          How this ties into everything else I do
        </h2>
        <p>
          Building drums from raw lumber made me obsessive about{" "}
          <strong>how sound starts</strong> — head choice, tuning, room,
          playing. Mixing is where all of that intention is framed for the
          listener. I like working with artists and producers who care about
          feel and storytelling as much as they care about LUFS readings.
        </p>
      </section>
    </ProjectDetailLayout>
  );
}