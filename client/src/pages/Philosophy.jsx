// src/pages/Philosophy.jsx
import React from "react";
import "./Philosophy.css";

export default function Philosophy() {
  return (
    <div className="philo">
      <section className="philo__hero">
        <h1>Philosophy & Core Disciplines</h1>
        <p className="philo__lede">
          I build things at the overlap of code, craft, and story. These five
          disciplines are the thread that runs through my work — from Ober
          Artisan Drums to product engineering and everything in between.
        </p>
      </section>

      <section className="philo__grid">
        <article className="philo__card">
          <h2>01 · Web & Software Engineering</h2>
          <p>
            I like shipping real systems: React frontends, Firebase backends,
            auth flows, project portals, progress tracking, and internal tools.
            My bias is toward clear data models, simple APIs, and features that
            are easy to extend later instead of harder.
          </p>
        </article>

        <article className="philo__card">
          <h2>02 · Product & UX Design</h2>
          <p>
            Good products feel obvious only after you’ve done the hard work of
            listening. I care about flows, not just screens — how someone
            discovers a feature, understands what it does, and knows what to do
            next without thinking too hard.
          </p>
        </article>

        <article className="philo__card">
          <h2>03 · Technical Problem Solving</h2>
          <p>
            Whether it’s a tangled codebase or a messy real-world constraint, I
            like breaking problems down into something we can reason about:
            clarify the goal, map the constraints, find the smallest change that
            unlocks the most value, then ship and iterate.
          </p>
        </article>

        <article className="philo__card">
          <h2>04 · Craft & Making (Ober Artisan Drums)</h2>
          <p>
            Building custom snares keeps me grounded in physical craft. Each
            drum moves from raw lumber to tuned instrument with a documented
            lifecycle, portal, media, and story. It’s product thinking applied
            to something you can literally feel under your hands.
          </p>
        </article>

        <article className="philo__card">
          <h2>05 · Story, Music & Creative Life</h2>
          <p>
            Music, photography, and writing are how I process and share the
            work. They show up as launch stories, thoughtful documentation, and
            small details that make tools feel human — the tone of an error
            message, the way we celebrate a milestone, the story a customer
            tells later.
          </p>
        </article>
      </section>

      <section className="philo__closing">
        <p>
          When I join a team, I bring all of this with me: engineering you can
          trust, product instincts shaped by real users, and a maker&apos;s eye
          for the details that turn “just a feature” into part of someone’s
          story.
        </p>
      </section>
    </div>
  );
}