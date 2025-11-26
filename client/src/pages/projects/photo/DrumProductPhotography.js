// src/pages/projects/photo/DrumProductPhotography.js
import React from "react";
import ProjectDetailLayout from "../ProjectDetailLayout";
import "./DrumProductPhotography.css";

export default function DrumProductPhotography() {
  return (
    <ProjectDetailLayout
      eyebrow="Case Study · Photography"
      title="Drum & Product Photography"
      role="Photographer · Retoucher"
      stack="Studio lighting · Location shoots · Retouching"
      summary="High-contrast, detail-forward photography for handcrafted drums and studio gear — built to show texture, hardware, and personality in a way that feels true to how the instruments play."
    >
      {/* HERO IMAGE ------------------------------------------------ */}
      <div className="pdetail__hero-media photo-hero">
        <div className="pdetail__hero-media-inner photo-hero__image-wrapper">
          <img
            src="/media/photo/drum-product-photography.jpg"
            alt="Studio-style drum product shot with controlled lighting and detailed hardware"
            className="photo-hero__image"
          />
        </div>
      </div>

      {/* 1. What I shoot ----------------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">
          Showing how the drums *feel*, not just how they look
        </h2>
        <p>
          These shoots focus on <strong>texture, depth, and intent</strong>.
          Your eye should land on the wood grain, the way light wraps around the
          shell, and the small details that make a drum feel “played in” even
          when it’s brand new.
        </p>
        <p>
          Most of the work here is for Ober Artisan Drums, but the same
          approach applies to other products: tell a story in a single frame and
          make it easy for artists, buyers, or partners to imagine the gear in
          their own space.
        </p>
      </section>

      {/* 2. Lighting & capture ----------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Lighting & capture approach</h2>

        <div className="pdetail__two-col">
          <div>
            <h3 className="pdetail__subheading">Highlighting texture & hardware</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>Directional soft light to reveal shell grain and acrylic infills.</li>
              <li>Accent lights for lugs, hoops, and badges without harsh speculars.</li>
              <li>Careful flagging to keep reflections controlled on glossy finishes.</li>
            </ul>
          </div>

          <div>
            <h3 className="pdetail__subheading">Flexible setups</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>Collapsible background + stand kit for quick location shoots.</li>
              <li>Overhead rig for flat lays of parts, veneers, and in-progress builds.</li>
              <li>
                Tethered capture whenever possible for live review of focus,
                reflections, and composition.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Shot design & composition ---------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Shot design for real-world use</h2>
        <p>
          Every photo is planned with a destination in mind — homepage hero,
          detail gallery, social crop, or documentation in the build portal.
        </p>
        <ul className="pdetail__list">
          <li>
            <strong>Hero frames:</strong> wide space for typography and overlays
            on web or print.
          </li>
          <li>
            <strong>Detail macros:</strong> close-ups of veneers, badges, and
            hardware for carousels and case studies.
          </li>
          <li>
            <strong>Process shots:</strong> in-shop images that connect finished
            drums to the craft behind them.
          </li>
        </ul>
      </section>

      {/* 4. Editing & delivery ----------------------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Editing & delivery</h2>
        <div className="pdetail__two-col pdetail__two-col--stacked">
          <div>
            <h3 className="pdetail__subheading">Retouching philosophy</h3>
            <p>
              Clean enough for product, honest enough for craft. Dust, smudges,
              and distractions go away; the grain, patina, and hand-made
              details stay.
            </p>
          </div>
          <div>
            <h3 className="pdetail__subheading">File sets</h3>
            <ul className="pdetail__list pdetail__list--compact">
              <li>Web-optimized JPEGs for site and portal use.</li>
              <li>High-resolution masters for print and marketing.</li>
              <li>
                Optional transparent PNG cutouts for compositing or
                marketplace listings.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Role in the Ober Artisan system ---------------------- */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">
          Where these photos show up in the product ecosystem
        </h2>
        <ul className="pdetail__list">
          <li>
            Hero images and galleries on the Ober Artisan marketing site and
            product pages.
          </li>
          <li>
            Visual anchors inside the SoundLegend artist portal and project
            detail views.
          </li>
          <li>
            Social and email campaigns that highlight individual drums and build
            stories.
          </li>
        </ul>
      </section>
    </ProjectDetailLayout>
  );
}