// src/pages/projects/web/WeatherNest.js
import React from "react";
import ProjectDetailLayout from "../ProjectDetailLayout";
import "./WeatherNest.css";

export default function WeatherNest() {
  return (
    <ProjectDetailLayout
      eyebrow="Case Study · Web & Software"
      title="WeatherNest"
      role="Full-stack dev · Product design"
      stack="React · Weather API · Firebase"
      summary="A focused weather + planning dashboard that combines live conditions, short-range forecasts, and lightweight task tracking so people can quickly decide what to do with their day."
    >
      {/* OPTIONAL HERO IMAGE (add later at /public/media/weathernest-hero.png) */}
      <div className="pdetail__hero-media wn-hero">
        <div className="pdetail__hero-media-inner">
          <div className="wn-hero__thumb-placeholder">
            <span>WeatherNest dashboard mockup</span>
            <p>
              Current conditions · 48-hour outlook · “Today” task panel with
              weather hints
            </p>
          </div>
        </div>
      </div>

      {/* 1. From “what’s the weather?” to “should I do this today?” */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">
          From “what’s the weather?” to “should I do this today?”
        </h2>
        <p className="weathernest-notes">
          Most weather apps answer one question: <em>what’s it like outside?</em>{" "}
          WeatherNest goes a step further and focuses on{" "}
          <strong>decision-making</strong>. Instead of a wall of numbers, the
          main screen is tuned around a single question:
          <em>“Is today a good day for the things I had in mind?”</em>
        </p>
        <p className="weathernest-notes">
          The target user is someone who’s juggling errands, family plans, and
          outdoor time — they need a quick, calm read that blends{" "}
          <strong>conditions + plans</strong>, not a radar deep dive.
        </p>
      </section>

      {/* 2. Core dashboard layout */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Core dashboard layout</h2>

        <div className="pdetail__two-col">
          <div>
            <h3 className="pdetail__subheading">Left: conditions at a glance</h3>
            <p>
              The left column carries all the “weather brain” pieces — but pared
              down to what matters most for daily decisions.
            </p>
            <ul className="pdetail__list pdetail__list--compact">
              <li>Current temp, feels-like, and simple iconography.</li>
              <li>
                A 48-hour strip chart that highlights “comfortable windows” in
                soft color bands.
              </li>
              <li>
                Precipitation likelihood surfaced as clear language (“Low
                chance”, “Likely showers”) instead of only percentages.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="pdetail__subheading">Right: Today’s plan</h3>
            <p>
              The right column turns conditions into planning hints — a tiny
              task list with light weather awareness.
            </p>
            <ul className="pdetail__list pdetail__list--compact">
              <li>
                Tasks tagged as <em>indoor</em>, <em>outdoor</em>, or{" "}
                <em>flexible</em>.
              </li>
              <li>
                Subtle labels like “Best before 2pm (cooler + dry)” pulled from
                the forecast model.
              </li>
              <li>
                A “snooze to tomorrow” affordance when today looks rough
                (heavy rain, storms, etc.).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Data flow & architecture */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Data flow & architecture</h2>
        <ul className="pdetail__list">
          <li>
            <strong>React front-end</strong> renders the dashboard, manages
            selected location, and keeps the UI responsive as new data arrives.
          </li>
          <li>
            A dedicated{" "}
            <strong>weather adapter module
            </strong> wraps the third-party API and normalizes responses into a
            minimal internal shape:{" "}
            <code>{`{ now, next48Hours[], comfortBands[] }`}</code>.
          </li>
          <li>
            <strong>Firebase</strong> stores saved locations, basic user prefs
            (units, theme), and a small list of “today / this week” tasks per
            user.
          </li>
          <li>
            A thin <strong>caching layer</strong> prevents hammering the API:
            requests for the same location within a short window reuse the last
            response unless there’s a meaningful change.
          </li>
        </ul>
      </section>

      {/* 4. Interaction & visual design */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Interaction & visual design</h2>

        <div className="pdetail__two-col pdetail__two-col--stacked">
          <div>
            <h3 className="pdetail__subheading">Calm by default</h3>
            <p className="weathernest-notes">
              The interface avoids map noise and animated radar by default.
              Instead, it leans on <strong>soft gradients</strong>, clean type,
              and a tiny amount of motion only when conditions change.
            </p>
          </div>
          <div>
            <h3 className="pdetail__subheading">Microcopy & states</h3>
            <p className="weathernest-notes">
              Empty, loading, and error states are written as short, friendly
              messages (“Grabbing the latest forecast…”, “API looks stormy right
              now, trying again”). These reduce the sense that something is
              broken when the network or API hiccups.
            </p>
          </div>
        </div>

        <div className="wn-callout">
          WeatherNest is deliberately opinionated: it{" "}
          <strong>hides complexity</strong> unless the user asks for it, so the
          default experience feels like a calm dashboard instead of a weather
          control room.
        </div>
      </section>

      {/* 5. What I'd build next */}
      <section className="pdetail__section">
        <h2 className="pdetail__section-title">Future extensions</h2>
        <p className="weathernest-notes">
          The current scope keeps the app light, but there are a few natural
          next steps:
        </p>
        <ul className="pdetail__list">
          <li>
            <strong>“Weekend view”</strong> that compares the next 3–4 days
            side-by-side for planning trips.
          </li>
          <li>
            <strong>Contextual nudges</strong> like “Great window for a walk
            between 5–7pm” based on temperature + precipitation thresholds.
          </li>
          <li>
            <strong>Shareable day snapshot</strong> — export a simple card with
            today’s conditions and your plan to send to family or friends.
          </li>
        </ul>
      </section>
    </ProjectDetailLayout>
  );
}