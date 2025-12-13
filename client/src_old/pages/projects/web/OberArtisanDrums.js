// src/pages/projects/web/OberArtisanDrums.js
import React from "react";
import { Link } from "react-router-dom";
import "./OberArtisanDrums.css";

export default function OberArtisanDrums() {
  return (
    <div className="oad">
      {/* HERO / SUMMARY ----------------------------------------- */}
      <header className="oad__hero">
        <p className="oad__eyebrow">Case Study · Web & Software · Craft</p>
        <h1 className="oad__title">Ober Artisan Drums</h1>
        <p className="oad__subtitle">
          Full-stack customer + admin portal for a boutique drum company —
          connecting e-commerce, build tracking, artist access, and handcrafted
          instruments into one system that I run the business on every day.
        </p>

        <div className="oad__meta">
          <div>
            <h2>Role</h2>
            <p>
              Founder · Full-stack engineer · Product designer · Customer
              success lead
            </p>
          </div>
          <div>
            <h2>Stack</h2>
            <p>React · Firebase (Auth, Firestore, Storage, Functions) · Stripe</p>
          </div>
          <div>
            <h2>Focus</h2>
            <p>
              Solutions engineering, API integrations, customer/artist
              experience, and operational tooling — from checkout through final
              drum delivery.
            </p>
          </div>
        </div>

        <div className="oad__hero-links">
          <Link to="/projects" className="oad__btn oad__btn--ghost">
            ← Back to selected work
          </Link>
          <a href="/contact" className="oad__btn oad__btn--primary">
            Talk about something similar →
          </a>
        </div>
      </header>

      {/* QUICK OVERVIEW ----------------------------------------- */}
      <section className="oad__section oad__section--overview">
        <div className="oad__section-left">
          <h2>Overview</h2>
          <p>
            Ober Artisan Drums is a Nashville-based custom snare company. I
            built the full digital backbone: storefront, checkout, admin tools,
            and a premium portal for SoundLegend artists to follow their drum
            builds from timber to tuned instrument.
          </p>
          <p>
            The system ties together e-commerce, project management, build
            workflows, media delivery, and risk monitoring — giving both
            customers and internal users a clear read on where each drum is in
            its lifecycle at any moment.
          </p>
        </div>

        <div className="oad__section-right">
          <h3>Highlights</h3>
          <ul className="oad__bullets">
            <li>Multi-role portal (customer, SoundLegend artist, admin).</li>
            <li>
              10-phase build roadmap with checklists, timers, and progress
              tracking per drum.
            </li>
            <li>
              Admin overview board for orders, submissions, inquiries, and risk
              alerts.
            </li>
            <li>
              File management for proposals, mockups, and media — with
              customer-visible toggles.
            </li>
            <li>
              Stripe-powered checkout and payment flows wired into order +
              project creation.
            </li>
          </ul>
        </div>
      </section>

      {/* MEDIA & SCREENS ---------------------------------------- */}
      <section className="oad__section" id="media">
        <header className="oad__section-header">
          <h2>Media & Screens</h2>
          <p>
            A selection of screens, diagrams, and photos that show how the
            digital system and the physical drums work together — from purchase
            to finished instrument.
          </p>
        </header>

        <div className="oad__media-grid">
          {/* 1. Architecture Diagram */}
          <article className="oad-media-card">
            <div className="oad-media-card__label">Architecture</div>
            <div className="oad-media-card__image-wrapper">
              <img
                src="/media/ober-artisan-drums/ober-architecture-placeholder.png"
                alt="High-level architecture diagram for Ober Artisan Drums"
                className="oad-media-card__image"
              />
            </div>
            <h3 className="oad-media-card__title">
              System architecture — from checkout to drum build.
            </h3>
            <p className="oad-media-card__text">
              High-level map of how React, Firebase Auth, Firestore, Cloud
              Functions, Storage, and Stripe connect. This is the diagram I use
              when walking technical stakeholders through the platform.
            </p>
            <ul className="oad-media-card__tags">
              <li>React SPA</li>
              <li>Firebase</li>
              <li>Stripe webhooks</li>
              <li>Role-based access</li>
            </ul>
          </article>

          {/* 2. Admin Overview / Kanban */}
          <article className="oad-media-card">
            <div className="oad-media-card__label">Admin Portal</div>
            <div className="oad-media-card__image-wrapper">
              <img
                src="/media/ober-artisan-drums/ober-admin-overview.png"
                alt="Admin overview board with orders, SoundLegend submissions, and risk alerts"
                className="oad-media-card__image"
              />
            </div>
            <h3 className="oad-media-card__title">
              Admin overview — one board for all active work.
            </h3>
            <p className="oad-media-card__text">
              Drag-and-drop board that surfaces orders, SoundLegend requests,
              support inquiries, and risk alerts in one place. Status changes
              write back to Firestore and update badges across the rest of the
              app in real time.
            </p>
            <ul className="oad-media-card__tags">
              <li>Kanban</li>
              <li>Realtime Firestore</li>
              <li>Status normalization</li>
            </ul>
          </article>

          {/* 3. Project Workflow / Manage Project Modal */}
          <article className="oad-media-card">
            <div className="oad-media-card__label">Build Workflow</div>
            <div className="oad-media-card__image-wrapper">
              <img
                src="/media/ober-artisan-drums/ober-manage-project-workflow.png"
                alt="Manage project modal showing 10-phase drum build workflow"
                className="oad-media-card__image"
              />
            </div>
            <h3 className="oad-media-card__title">
              10-phase build workflow with checklists and timers.
            </h3>
            <p className="oad-media-card__text">
              Each drum moves through a 10-step master build process. Steps are
              locked until the previous phase is complete. Checklists, timers,
              and artisan notes are synced to Firestore, creating a detailed
              audit trail for every instrument.
            </p>
            <ul className="oad-media-card__tags">
              <li>Workflow design</li>
              <li>Progress tracking</li>
              <li>Operational tooling</li>
            </ul>
          </article>

          {/* 4. SoundLegend Customer Portal */}
          <article className="oad-media-card">
            <div className="oad-media-card__label">Customer Portal</div>
            <div className="oad-media-card__image-wrapper">
              <img
                src="/media/ober-artisan-drums/ober-soundlegend-portal.png"
                alt="SoundLegend customer portal showing progress timeline and build details"
                className="oad-media-card__image"
              />
            </div>
            <h3 className="oad-media-card__title">
              SoundLegend portal — the build through the drummer’s eyes.
            </h3>
            <p className="oad-media-card__text">
              A dedicated portal where SoundLegend artists can follow their
              custom drum in real time: progress timeline, scope of work, files,
              and media. It turns what is usually a silent production phase into
              a guided experience.
            </p>
            <ul className="oad-media-card__tags">
              <li>Customer experience</li>
              <li>Role-based UI</li>
              <li>Progress visualization</li>
            </ul>
          </article>

          {/* 5. Files & Attachments */}
          <article className="oad-media-card">
            <div className="oad-media-card__label">Files & Media</div>
            <div className="oad-media-card__image-wrapper">
              <img
                src="/media/ober-artisan-drums/ober-attachments.png"
                alt="Attachments view with build proposal and mockup files"
                className="oad-media-card__image"
              />
            </div>
            <h3 className="oad-media-card__title">
              Proposals, mockups, and media — organized by build stage.
            </h3>
            <p className="oad-media-card__text">
              Admins can upload PDFs, images, and media into categories like
              Build Proposal, Wood Selection, and Final Mockups. Each file can
              be toggled visible/hidden for the customer, giving internal teams
              flexibility without cluttering the artist’s view.
            </p>
            <ul className="oad-media-card__tags">
              <li>Firestore + Storage</li>
              <li>Preview & permissions</li>
            </ul>
          </article>

          {/* 6. Stripe Checkout → Project Creation */}
          <article className="oad-media-card">
            <div className="oad-media-card__label">Commerce Flow</div>
            <div className="oad-media-card__image-wrapper">
              <img
                src="/media/ober-artisan-drums/ober-stripe-checkout.png"
                alt="Stripe checkout page and resulting project record"
                className="oad-media-card__image"
              />
            </div>
            <h3 className="oad-media-card__title">
              From Stripe checkout to tracked project.
            </h3>
            <p className="oad-media-card__text">
              When a customer completes checkout, Stripe webhooks trigger Cloud
              Functions that create order and project records in Firestore, seed
              the 10-phase workflow, and notify the admin dashboard.
            </p>
            <ul className="oad-media-card__tags">
              <li>Stripe webhooks</li>
              <li>Cloud Functions</li>
              <li>Automation</li>
            </ul>
          </article>

          {/* 7. Firestore Data Model */}
          <article className="oad-media-card">
            <div className="oad-media-card__label">Data Model</div>
            <div className="oad-media-card__image-wrapper">
              <img
                src="/media/ober-artisan-drums/ober-firestore-structure.png"
                alt="Firestore collections and project document structure"
                className="oad-media-card__image"
              />
            </div>
            <h3 className="oad-media-card__title">
              Firestore structure — mapping drums to data.
            </h3>
            <p className="oad-media-card__text">
              Collections for users, orders, projects, and risk events, with
              attachments stored as subcollections. Each project document keeps
              a normalized lifecycle object so progress can be calculated from a
              single source of truth.
            </p>
            <ul className="oad-media-card__tags">
              <li>Schema design</li>
              <li>Status modeling</li>
              <li>Lifecycle tracking</li>
            </ul>
          </article>

          {/* 8. Craft & Shop Imagery */}
          <article className="oad-media-card">
            <div className="oad-media-card__label">Craft & Sound</div>
            <div className="oad-media-card__image-wrapper">
              <img
                src="/media/ober-artisan-drums/ober-drum-build-photo.png"
                alt="Handcrafted stave snare drum in the Ober Artisan workshop"
                className="oad-media-card__image"
              />
            </div>
            <h3 className="oad-media-card__title">
              The physical side — from raw lumber to tuned drum.
            </h3>
            <p className="oad-media-card__text">
              Photos from the shop — veneer selection, shell construction, torch
              tuning, and final studio shots. They tie the software back to the
              actual instruments these workflows produce.
            </p>
            <ul className="oad-media-card__tags">
              <li>Drum craftsmanship</li>
              <li>Product photography</li>
              <li>Brand storytelling</li>
            </ul>
          </article>
        </div>
      </section>

      {/* CALL TO ACTION ----------------------------------------- */}
      <section className="oad__section oad__section--cta">
        <div className="oad__cta-inner">
          <h2>Have something similar in mind?</h2>
          <p>
            I love projects that mix systems, product, and real-world craft —
            whether that’s a SaaS tool, an internal platform, or a
            customer-facing experience.
          </p>
          <Link to="/contact" className="oad__btn oad__btn--primary">
            Start a conversation →
          </Link>
        </div>
      </section>
    </div>
  );
}