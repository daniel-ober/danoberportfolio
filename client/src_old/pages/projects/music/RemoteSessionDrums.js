// src/pages/projects/music/RemoteSessionDrums.js
import React from "react";
import ProjectDetailLayout from "../ProjectDetailLayout";
import "./RemoteSessionDrums.css";

export default function RemoteSessionDrums() {
  return (
    <ProjectDetailLayout
      eyebrow="Case Study · Music & Audio"
      title="Remote Session Drums"
      role="Drummer · Engineer · Producer"
      stack="Logic Pro · Apollo Console · Audix i5 / SM57 · Custom Ober snares"
      summary="Remote drum sessions delivered from a controlled studio space — combining boutique handcrafted snares with clean engineering so artists and producers get mix-ready stems without flying anyone in."
    >
      {/* HERO IMAGE ------------------------------------------------ */}
      <div className="pdetail__hero-media rmd-hero">
        <div className="pdetail__hero-media-inner rmd-hero__image-wrapper">
          <img
            src="/media/music/remote-session-drums.jpg"
            alt="Remote drum recording setup with Ober Artisan snare and studio mics"
            className="rmd-hero__image"
          />
        </div>
      </div>

      {/* 1. Overview --------------------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">
          A modern drum session without the travel
        </h2>
        <p>
          Artists used to book a room, fly in a drummer, and hope the tones and
          feel came together in a tight window. I built a remote workflow that
          removes the logistics while keeping the human side of a real session
          player.
        </p>
        <p>
          Every song gets a tailored kit choice, snare selection, and mic setup
          based on the reference tracks and the producer’s mix goals.
        </p>
      </section>

      {/* 2. Recording process ------------------------------------ */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Recording process</h2>

        <div className="pdetail__two-col">
          <div>
            <h3 className="pdetail__subheading">Engineering & signal chain</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>Ober Artisan snares (Heritage, Feuzon, SoundLegend)</li>
              <li>Audix i5 top, SM57 bottom, dedicated kick & OH mics</li>
              <li>Apollo Console with 1073 + 1176 style processing</li>
              <li>Phase-consistent multi-mic layout tuned for rock/pop/CCM</li>
            </ul>
          </div>

          <div>
            <h3 className="pdetail__subheading">Session flow</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>Pre-session call or notes around feel, references, and form.</li>
              <li>2–4 full takes per song plus targeted punch-ins.</li>
              <li>Optional alternate groove/chorus variations for the producer.</li>
              <li>Quick MP3 rough mix for approval before delivering stems.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Deliverables ----------------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">What clients receive</h2>
        <ul className="pdetail__list">
          <li>
            Cleanly labeled multitrack stems (Kick In/Out, Snare Top/Bottom, OH
            L/R, Room, Toms as needed).
          </li>
          <li>
            A consolidated stereo “drum bus” print with tasteful processing for
            quick mockups.
          </li>
          <li>
            Session notes including kit, snare choice, tuning, and mic layout.
          </li>
          <li>
            Optional MIDI transcription for editors who want extra precision.
          </li>
        </ul>
      </section>

      {/* 4. Why people rebook ----------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Why artists rebook sessions</h2>
        <p>
          Hand-building drums made me picky about tone and decay. That mindset
          carries into every session — from snare selection to how ghost notes
          sit inside the pocket. The goal isn’t just “good drums,” it’s{" "}
          <strong>drums that feel like the record you imagined.</strong>
        </p>
      </section>
    </ProjectDetailLayout>
  );
}