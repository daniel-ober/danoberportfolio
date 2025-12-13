import React from "react";
import { TimelineRail } from "./TimelineRail";
import { TIMELINE_SCENES } from "./timelineScenes";

import "./MyStory.css";

function MyStory() {
  return (
    <div className="my-story-page">
      <header className="my-story-hero">
        <div className="my-story-hero__inner">
          <div className="my-story-hero__copy">
            <p className="my-story-eyebrow">Portfolio timeline</p>
            <h1 className="my-story-title">My story in scenes.</h1>
            <p className="my-story-subtitle">
              Instead of a flat résumé, this is the sequence of rooms, eras, and
              experiments that shaped how I work: from bedroom drum kits and
              fan pages to full-stack products, custom snares, and NFC-backed
              instruments.
            </p>
            <p className="my-story-subtitle my-story-subtitle--muted">
              Scroll through the timeline to see how the disciplines layer:
              web &amp; software, product &amp; UX, craft &amp; making, story
              &amp; music, problem solving, and AI &amp; systems. The same
              ingredients show up in different ratios as the work evolves.
            </p>
          </div>

          <aside className="my-story-hero__meta">
            <div className="my-story-pill">What you&apos;ll see</div>
            <ul className="my-story-meta-list">
              <li>
                <span className="my-story-meta-label">Eras</span>
                <span className="my-story-meta-value">
                  Early tinkering → leadership → full-stack builder.
                </span>
              </li>
              <li>
                <span className="my-story-meta-label">Threads</span>
                <span className="my-story-meta-value">
                  Drums, web apps, sound design, and tools that tie them
                  together.
                </span>
              </li>
              <li>
                <span className="my-story-meta-label">Lens</span>
                <span className="my-story-meta-value">
                  The same polyrhythmic discipline method behind my current
                  work.
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </header>

      <section className="my-story-timeline-section">
        <div className="my-story-timeline-shell">
          <div className="my-story-timeline-header">
            <p className="my-story-timeline-eyebrow">How to move through it</p>
            <p className="my-story-timeline-text">
              Swipe or scroll horizontally to track along the film strip. Each
              scene is a composite: background art, a specific era, and a short
              narrative about what changed in how I think and build.
            </p>
          </div>

          <div className="my-story-timeline-card">
            <TimelineRail scenes={TIMELINE_SCENES} />
          </div>
        </div>
      </section>

      <section className="my-story-footer-spacer">
        <p>
          The timeline isn&apos;t finished. Every new product, drum, or system
          becomes another scene — another rhythm in the larger pattern I&apos;m
          building toward.
        </p>
      </section>
    </div>
  );
}

export default MyStory;