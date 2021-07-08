import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-main-container">
      <div className="about-left">
        <h2 className="about-header">ABOUT DAN</h2>
        <div className="about-body">
          <img
            className="dan-ober-about-mobile-image"
            src="https://i.imgur.com/HTUD8gZ.png"
            alt="dan-ober"
          ></img>
          <p>
            I’m a full-stack web developer with a background in the auto,
            finance, HR, retail, and entertainment industries. I’m excited to
            combine my technical knowledge with the skills and experience from my previous
            career as a Leader of Customer Success.
          </p>
          <p>
            My leadership skills have given me the ability to build strong teams
            with a shared vision. I lead with empathy and an open mind when faced
            with challenges. The ability to lead projects in a cross-functional
            environment has taught me the value of team collaboration and
            working towards a single mission.
          </p>
          <p>
            When I'm not coding, I'm either working on projects around the house or enjoying the outdoors - grilling, kayaking, hiking, or camping. You're also likely to find me in my music studio writing, recording, editing, or practiing. I'm a drummer at heart, but also play guitar, bass,
            piano, turntables, harmonica, and vocals. I'm also a competitive Rubik's
            cube solver and try to keep one nearby the work desk for those times I need a quick mental break or mental challenege. Last fun fact... I'm a KCBS Certified BBQ Judge. I love food.
          </p>
          <p>
            In the next phase of my software engineering career, I want to be
            part of a smaller team whose vision it is to continuously improve
            the user experience. Ideally, I would love to work on a team that
            follows best practices like sandbox testing and pair programming, to
            allow me to learn and grow as a developer.
          </p>
          <p className="about-learn-more">
            Interested in learning more?{" "}
            <br/>
            <Link to="/contact">Let's Connect</Link>
          </p>
          <p className="about-resume">
        Download my resume{" "}
        <a
          href="https://drive.google.com/file/d/1o0shw2MGMk5ULvzVHkpuRFOku3mHBVCC/view?usp=sharing"
          rel="noopener noreferrer"
          target="_blank"
          download
        >
          here
        </a>
      </p>
        </div>
      </div>
    </div>
  );
}