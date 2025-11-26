// src/pages/projects/web/EZSynth.js
import React from "react";
import ProjectDetailLayout from "../ProjectDetailLayout";
import "./EZSynth.css";

export default function EZSynth() {
  return (
    <ProjectDetailLayout
      eyebrow="Case Study · Web & Software"
      title="EZ-Synth"
      role="Front-end dev · Interaction design"
      stack="React · Web Audio API"
      summary="A browser-based mini synthesizer focused on playability over deep menus — designed so non-technical musicians can experiment with sound design in seconds."
    >
      {/* OPTIONAL HERO IMAGE (add file later at /public/media/ezsynth-hero.png) */}
      <div className="pdetail__hero-media ez-hero">
        <div className="pdetail__hero-media-inner">
          <div className="ez-hero__thumb-placeholder">
            <span>EZ-Synth interface mockup</span>
            <p>Single-screen synth · QWERTY keyboard · Live parameter knobs</p>
          </div>
        </div>
      </div>

      {/* 1. Why build this? ------------------------------------ */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Why build a web synth?</h2>
        <p>
          Most soft synths are powerful but intimidating. I wanted something
          closer to a <strong>“scratch pad for sound ideas”</strong> — open a
          browser, hit a few keys, twist a couple knobs, and record a rough
          idea.
        </p>
        <p>
          EZ-Synth is a single-screen interface built on the Web Audio API,
          inspired by small hardware synths: limited but fun, opinionated but
          hard to break.
        </p>
      </section>

      {/* 2. Core experience ------------------------------------ */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Core playing experience</h2>

        <div className="pdetail__two-col">
          <div>
            <h3 className="pdetail__subheading">QWERTY keyboard layout</h3>
            <p>
              Map the computer keyboard to a single octave with easy access to
              sharps and flats. Visual feedback highlights which keys are
              playing and which notes are held.
            </p>
            <ul className="pdetail__list pdetail__list--compact">
              <li>Velocity simulated via press duration</li>
              <li>Configurable transpose (+/− octaves)</li>
              <li>Optional MIDI keyboard support (roadmap)</li>
            </ul>
          </div>

          <div>
            <h3 className="pdetail__subheading">Immediate sound shaping</h3>
            <p>
              Four main macro controls: <em>Tone</em>, <em>Shape</em>,{" "}
              <em>Movement</em>, and <em>Space</em>. Each macro adjusts multiple
              synth parameters under the hood so users don’t have to understand
              ADSR or filter slopes to get a result.
            </p>
            <ul className="pdetail__list pdetail__list--compact">
              <li>Web Audio oscillators with blended waveforms</li>
              <li>Envelope + low-pass filter tied to macro knobs</li>
              <li>Tempo-sync’d delay for rhythmic echoes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Architecture & tech -------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Architecture & technical notes</h2>
        <ul className="pdetail__list">
          <li>
            <strong>React front-end</strong> manages UI state (knobs, toggles,
            presets) and drives a small synth engine module.
          </li>
          <li>
            <strong>Web Audio engine</strong> built as a standalone class that
            exposes high-level methods like <code>noteOn</code>,{" "}
            <code>noteOff</code>, and <code>setMacro("tone", value)</code>.
          </li>
          <li>
            <strong>Preset system</strong> stores a tiny JSON object for each
            patch; switching presets smoothly ramps parameters to avoid clicks.
          </li>
          <li>
            <strong>Performance-oriented rendering</strong>: requestAnimationFrame
            loop only updates minimal meter/oscilloscope data to keep UI
            responsive while playing chords.
          </li>
        </ul>
      </section>

      {/* 4. UX details ---------------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Interaction & UX details</h2>
        <div className="pdetail__two-col pdetail__two-col--stacked">
          <div>
            <h3 className="pdetail__subheading">Knob design</h3>
            <p>
              Knobs respond to vertical drag, with snap-back animation and
              double-click to reset. Numerical values are hidden by default to
              keep the focus on listening, not “dialing in exact numbers.”
            </p>
          </div>
          <div>
            <h3 className="pdetail__subheading">Visual feedback</h3>
            <p>
              A small oscilloscope strip and level meter give just enough visual
              confirmation without turning the interface into a plugin clone.
            </p>
          </div>
        </div>
      </section>

      {/* 5. What I'd extend next ------------------------------ */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Future extensions</h2>
        <p>
          EZ-Synth is intentionally scoped, but there are a few features I’d
          explore next:
        </p>
        <ul className="pdetail__list">
          <li>Simple in-browser recorder that exports 16-bit WAV riffs.</li>
          <li>
            “Idea mode” that records the last 60 seconds of playing so you never
            lose a riff.
          </li>
          <li>
            Preset sharing via small JSON blobs that users can paste and import.
          </li>
        </ul>
      </section>
    </ProjectDetailLayout>
  );
}