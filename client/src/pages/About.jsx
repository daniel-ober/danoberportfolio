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
        <h2 className="about-header">ABOUT DAN</h2>

        <div className="about-body">
          <p>
            I’m a builder at heart — part engineer, part creative, and part problem-solver. My
            background spans full-stack software engineering, solutions engineering, customer
            success leadership, audio production, and hands-on craftsmanship.
          </p>

          <p>
            I’ve helped founders, teams, and artists ship tools and experiences that feel
            intentional. Much of my work blends system design, technical execution, and clear
            communication — the core ingredients for products people actually use.
          </p>

          <p>
            I’ve led and supported teams in Customer Success and API solutions, building playbooks,
            KPIs, and enablement resources that keep both customers and internal teams aligned. I’m
            comfortable switching between technical deep dives, roadmap conversations, and coaching
            sessions.
          </p>

          <p>
            Outside software, I run <strong>Ober Artisan Drums</strong>, a handcrafted stave-drum
            company where I design shells, build jigs, create media, and manage the full digital
            ecosystem — from e-commerce and customer portals to production workflows and artist
            experiences.
          </p>

          <p>
            I’m also a lifelong musician and recording engineer. I take on remote sessions, scoring
            and composition work, and I’m open to live performance and touring opportunities when
            the right project comes along.
          </p>

          <p>
            When I’m not building something, I’m writing music, exploring new tools, or working on
            the next idea that keeps me up at night.
          </p>

          <p className="about-cta">
            Want to connect or collaborate? <Link to="/contact">Let’s talk.</Link>
          </p>

          <p className="about-resume">
            Download my resume{" "}
            <a
              href="https://drive.google.com/file/d/1_X5oLBBUVw1U6wJcZz-Dr_uUkTU72hnm/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
              download
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