import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-left">
        <h2 className="about-header">WHO IS DAN?</h2>
        <div className="about-body">
          <p>
            I’m a full-stack web developer with a background in the auto,
            finance, HR, retail, entertainment, health and benefits industries.
            As a recent software engineer immersive graduate, I’m excited to
            combine my knowledge with the skills and experience from my previous
            career as a Manager of Customer Success.
          </p>
          <p>
            My leadership skills have given me the ability to build strong teams
            with shared vision. I lead with empathy and an open mind when faced
            with challenges. The ability to lead projects in a cross-functional
            environment has taught me the value of team collaboration and
            working towards a single mission.
          </p>
          <p>
            When I'm not coding, I usually listening to, playing, writing, or
            recording music. I'm a drummer at heart, but also play guitar, bass,
            piano, turntables, harmonica, and vocals. I'm a competitive Rubik's
            cube solver and try to get in a couple cube solves a day to keep
            things fresh - my quickest solve is 0:57 seconds using F2L
            algorithms. I enjoy the outdoors - grilling, kayaking, hiking, and
            camping. Last fun fact: I'm a KCBS Certified BBQ Judge... I love
            food.
          </p>
          <p>
            In the next phase of my software engineering career, I want to be
            part of a smaller team whose vision it is to continuously improve
            the user experience. Ideally, I would love to work on a team that
            follows best practices like sandbox testing and pair programming, to
            help me learn and grow as a developer.
          </p>
          <p className='learn-more-container'>
            Interested in learning more?{" "}
            <Link to="/contact">Let's connect.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
