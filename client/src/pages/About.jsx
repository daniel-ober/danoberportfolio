// src/components/About.js
import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      {/* Mobile portrait */}
      <div className="about__portrait-mobile">
        <img src="/danober-portfolio.png" alt="Dan Ober" />
      </div>

      <div className="about__left fade-in-left">
        <h2 className="about-eyebrow">ABOUT DAN</h2>
        <h1 className="about-title">
          Human-first builder of tools, stories, and drums.
        </h1>

        <div className="about-body">
          <p>
            I’m a builder at heart — part engineer, part designer, part
            problem-solver. My background spans full-stack web development,
            solutions engineering, customer success leadership, audio
            production, and hands-on craftsmanship.
          </p>

          <p>
            I’ve helped founders, teams, and artists ship tools and experiences
            that feel intentional. Most of my work sits at the intersection of
            system design, technical execution, and clear communication — the
            pieces you need when you actually want people to use what you ship.
          </p>

          <p>
            Outside of software, I run{" "}
            <strong>Ober Artisan Drums</strong>, a boutique stave-drum company
            where I design shells, build jigs, capture media, and manage the
            full digital ecosystem — from e-commerce and customer portals to
            production workflows and artist experiences.
          </p>

          <p>
            I’m also a lifelong musician and recording engineer, taking on
            remote sessions, scoring and composition work, and the occasional
            live / touring project when it aligns with the season I’m in.
          </p>

          <p>
            A lot of my work lives across a small set of disciplines — engineering,
            UX, problem solving, craft, and story. You’ll see those threads woven
            through the rest of this site and in my{" "}
            <Link to="/philosophy">philosophy &amp; core disciplines</Link>.
          </p>

          {/* How you like to work */}
          <section className="about-section">
            <h3 className="about-section-title">How I like to work</h3>
            <p>
              I do my best work in environments where we can move thoughtfully,
              not frantically — small teams, honest feedback, and clear
              ownership. I care a lot about reliability, documentation, and
              building systems that age well, whether that’s an internal tool, a
              public product, or a single custom drum.
            </p>
          </section>

          <p className="about-cta">
            If you’d like to talk through a project, role, or collaboration,{" "}
            <Link to="/contact">reach out to start a conversation</Link>.
          </p>

          <p className="about-resume">
            Download my resume{" "}
            <a
              href="https://drive.google.com/file/d/1_X5oLBBUVw1U6wJcZz-Dr_uUkTU72hnm/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>

      {/* Desktop portrait */}
      <div className="about__portrait-desktop">
        <img src="/danober-portfolio.png" alt="Dan Ober" />
      </div>
    </div>
  );
}