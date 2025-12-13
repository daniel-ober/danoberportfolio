// src/pages/projects/3d/StaveDrumCompressionJig.js
import React from "react";
import ProjectDetailLayout from "../ProjectDetailLayout";
import "./StaveDrumCompressionJig.css";

export default function StaveDrumCompressionJig() {
  return (
    <ProjectDetailLayout
      eyebrow="Case Study · 3D Design & Printing"
      title="Stave Drum CentraLock System"
      role="Fusion 360 · Functional jig design"
      stack="Fusion 360 · PETG printing · Shop tooling"
      summary="A precision centering and compression jig that locks a stave shell on-axis while truing and flattening both edges — ensuring each rotation stays honest before bearing edges are ever cut."
    >
      {/* HERO IMAGE ------------------------------------------------ */}
      <div className="pdetail__hero-media jig-hero">
        <div className="pdetail__hero-media-inner jig-hero__image-wrapper">
          <img
            src="/media/3d/stave-jig-hero.jpg"
            alt="CentraLock system holding a stave snare shell centered while truing the top and bottom edges"
            className="jig-hero__image"
          />
        </div>
      </div>

      {/* 1. Why this tool exists ---------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">
          Why the CentraLock exists: keeping the shell honest
        </h2>
        <p>
          The shaping of sound begins long before the first note — in how a
          stave shell finds its center, how it rotates, and how flat and true
          each edge becomes before any bearing edge ever touches a router bit.
        </p>
        <p>
          Traditional setups make it easy for a shell to drift slightly as you
          flatten and true its top and bottom surfaces. The CentraLock solves
          this by locking the shell perfectly on-axis, applying even pressure
          from both ends, and keeping every rotation consistent.
        </p>
      </section>

      {/* 2. Design goals ----------------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Design goals</h2>
        <div className="pdetail__two-col">
          <div>
            <h3 className="pdetail__subheading">Musical accuracy</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>True both edges from a consistent center point.</li>
              <li>Prevent shell drift during sanding and milling.</li>
              <li>Ensure the canvas is honest before cutting edges.</li>
            </ul>
          </div>
          <div>
            <h3 className="pdetail__subheading">Shop practicality</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>Quick load / unload between shells.</li>
              <li>Strong enough to support torque from star knobs.</li>
              <li>Compatible with multiple diameters via modular arms.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Architecture ------------------------------------------ */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">CentraLock architecture</h2>
        <p>
          The system is built around a central column, a 3D-printed hub with
          indexing arms, and top/bottom platens that reference the shell from
          both sides. Tightening the threaded rod compresses the shell evenly
          while locking it to a true center.
        </p>

        <div className="pdetail__two-col">
          <div>
            <h3 className="pdetail__subheading">Hub & arms</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>3D printed in PETG for strength and heat resistance.</li>
              <li>
                Parametric arm slots support different stave counts &
                diameters.
              </li>
              <li>
                Reinforced ribs eliminate flex under full compression load.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="pdetail__subheading">Top & bottom platens</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>Oversized MDF or ply disks with center-bore alignment.</li>
              <li>Reference marks to visually check for shell drift.</li>
              <li>Perfectly flat surfaces for accurate milling passes.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Iteration -------------------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Iteration & refinement</h2>
        <p>
          Early versions revealed flex in the arms and unclear seating feedback.
          After several adjustments, the final design:
        </p>
        <ul className="pdetail__list">
          <li>
            Adds chamfered contact points that self-center the shell as pressure
            increases.
          </li>
          <li>Thickens the hub and arm-root geometry for rigidity.</li>
          <li>Improves knob spacing for smooth tightening feedback.</li>
        </ul>
      </section>

      {/* 5. Workflow --------------------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">How it fits the drum build</h2>
        <ul className="pdetail__list">
          <li>
            <strong>1. Seat the shell</strong> between the top and bottom
            platens.
          </li>
          <li>
            <strong>2. Bring in the arms</strong> until each stave is indexed.
          </li>
          <li>
            <strong>3. Apply compression</strong> with the central threaded rod.
          </li>
          <li>
            <strong>4. True both edges</strong> knowing the centerline will not
            shift.
          </li>
        </ul>
      </section>

      {/* 6. Impact ---------------------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Impact on the final drum</h2>
        <p>
          The jig never appears in the final product — but the results do. The
          CentraLock increases repeatability, tightens the tuning window, and
          eliminates micro-variations that cause wobble or uneven head seating.
        </p>
      </section>
    </ProjectDetailLayout>
  );
}