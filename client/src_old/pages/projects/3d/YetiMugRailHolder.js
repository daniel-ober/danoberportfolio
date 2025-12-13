// src/pages/projects/3d/YetiMugRailHolder.js
import React from "react";
import ProjectDetailLayout from "../ProjectDetailLayout";
import "./YetiMugRailHolder.css";

export default function YetiMugRailHolder() {
  return (
    <ProjectDetailLayout
      eyebrow="Case Study · 3D Design & Printing"
      title="Yeti Mug Rail Holder"
      role="First Fusion 360 project · Rapid prototyping"
      stack="Fusion 360 · PETG · Rubber-like filament"
      summary="A clip-on holder for a Yeti mug that started as a tiny quality-of-life idea and turned into my first real 3D design — mixing hard + flexible materials, custom geometry, and practical grip details."
    >
      {/* HERO IMAGE --------------------------------------------- */}
      <div className="pdetail__hero-media yeti-hero">
        <div className="pdetail__hero-media-inner yeti-hero__image-wrapper">
          <img
            src="/media/3d/yeti-mug-holder-hero.jpg"
            alt="Multi-part Yeti mug holder with PETG shell and rubber-like grip inserts"
            className="yeti-hero__image"
          />
        </div>
      </div>

      {/* 1. A “small” idea that became my 3D sandbox ------------ */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">
          A first 3D print that got out of hand (in a good way)
        </h2>
        <p>
          This wasn’t meant to be a “product.” I’d just started learning Fusion
          360 and wanted a simple problem to practice with:{" "}
          <strong>keep a Yeti mug close by on a rack or stand</strong> without
          risking spills.
        </p>
        <p>
          It became my third 3D print ever — and the first time I combined{" "}
          <strong>multiple parts, multiple materials, and real-world tolerances</strong>{" "}
          into one design that actually worked in the wild.
        </p>
      </section>

      {/* 2. What I set out to learn ----------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Learning goals, not just features</h2>

        <div className="pdetail__two-col">
          <div>
            <h3 className="pdetail__subheading">Fusion 360 fundamentals</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>Constrain sketches instead of “eyeballing” shapes.</li>
              <li>Use chamfers, fillets, and debossed details intentionally.</li>
              <li>Think parametric: wall thickness, clearances, and offsets.</li>
            </ul>
          </div>

          <div>
            <h3 className="pdetail__subheading">Print + material behavior</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>
                Mix a rigid outer shell (PETG) with rubber-like inserts for grip.
              </li>
              <li>
                Design parts that press-fit together without extra hardware.
              </li>
              <li>
                Understand how layer direction affects flex and durability.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Multi-part design ----------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">
          Multi-part construction: shell, liner, and grips
        </h2>
        <p>
          The holder is actually a small system, not a single print. Each part
          taught me something different about modeling and materials:
        </p>

        <div className="pdetail__two-col">
          <div>
            <h3 className="pdetail__subheading">Outer cradle</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>
                PETG body with a circular pocket sized to the Yeti’s profile.
              </li>
              <li>
                Chamfered top edge for easy “drop in” while you’re holding
                sticks.
              </li>
              <li>
                Debossed logo / design details to practice custom sketches and
                projected geometry.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="pdetail__subheading">Rubber liner + grip inserts</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>
                Thin, removable rubber-like liner between mug and holder to
                create a soft interface.
              </li>
              <li>
                Individually printed inner grip tiles that snap into cavities
                along the wall.
              </li>
              <li>
                Hand-sketched grip pattern translated into a repeatable sketch
                and extruded detail.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Iteration & “feel” tuning --------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">
          Iterating toward the right feel, not just the right shape
        </h2>
        <p>
          Because this lived on a drum rack, the success criteria weren’t just
          dimensional — they were <strong>tactile</strong>:
        </p>
        <ul className="pdetail__list">
          <li>
            Adjusted clearances so the mug slides in smoothly but “seats” with a
            gentle stop.
          </li>
          <li>
            Tweaked liner thickness until it cushioned the mug without feeling
            squishy or unstable.
          </li>
          <li>
            Reworked the grip pattern so it’s comfortable to grab with one hand
            while moving stands around.
          </li>
        </ul>
      </section>

      {/* 5. Print details & setup ------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Print details</h2>

        <div className="pdetail__two-col pdetail__two-col--stacked">
          <div>
            <h3 className="pdetail__subheading">Hard parts</h3>
            <p>
              The cradle prints in PETG with 0.2 mm layers and solid walls around
              the clamp / rail interface. Orientation is chosen so the highest
              stress sits along continuous fibers, not across layer lines.
            </p>
          </div>
          <div>
            <h3 className="pdetail__subheading">Flexible parts</h3>
            <p>
              The liner and grip tiles use a rubber-like filament, printed
              separately and press-fit. That let me iterate their texture and
              thickness without reprinting the entire holder.
            </p>
          </div>
        </div>
      </section>

      {/* 6. What this project unlocked -------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">What this taught me</h2>
        <p>
          This project was less about inventing the perfect mug holder and more
          about proving that{" "}
          <strong>
            I could go from a hand sketch to a functional, multi-part 3D print
            in a weekend
          </strong>
          .
        </p>
        <p>
          It gave me the confidence (and muscle memory) to move on to more
          demanding drum tooling — like the CentraLock system and other jigs
          that show up in the Ober Artisan shop.
        </p>
      </section>
    </ProjectDetailLayout>
  );
}