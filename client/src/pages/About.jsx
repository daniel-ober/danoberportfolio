import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      {/* Mobile portrait (top only) */}
      <div className="about__portrait-mobile">
        <img src="/danober-portfolio.png" alt="Dan Ober" />
      </div>

      <div className="about__left fade-in-left">
        <h2 className="about-header">ABOUT DAN</h2>
        <div className="about-body">
          <p>
            I'm a full-stack developer and creative problem solver with a
            background in customer success, leadership, and technical solutions
            across industries like automotive, finance, HR, and entertainment.
          </p>
          <p>
            My experience leading cross-functional teams shaped how I approach
            collaboration, communication, and user-focused development. I thrive
            in environments that value empathy, iteration, and creativity.
          </p>
          <p>
            Beyond code, I’m a lifelong musician and builder. I recently
            launched <strong>Ober Artisan Drums</strong>, a handcrafted drum
            company that blends design, story, and technical infrastructure —
            from checkout systems to brand and media.
          </p>
          <p>
            Outside of work, I’m writing music, chasing ideas, or trying to beat
            my Rubik’s Cube time. I’m big on live music — whether it’s a local
            show, festival, or new artist to obsess over.
          </p>
          <p>
            I’m looking for a full-time role on a collaborative team where I can
            solve meaningful problems and build better experiences — for users
            and the people behind the product.
          </p>
          <p className="about-learn-more">
            Interested in learning more? <br />
            <Link to="/contact">Let’s connect</Link>
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
          </p>
        </div>
      </div>

      {/* Desktop portrait (right fixed) */}
      <div className="about__portrait-desktop">
        <img src="/danober-portfolio.png" alt="Dan Ober" />
      </div>
    </div>
  );
}