import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home__left">
        <h2 className="home__headline">Builder. Designer. Collaborator.</h2>
        <h2 className="home__headline">
          Rooted in experience. Driven by curiosity.
        </h2>

        <p className="home__text">
          I'm a full-stack developer with a background in customer experience,
          problem solving, and creative brand-building. My work blends empathy,
          precision, and persistence — from code to concept.
          <br /><br />
          Most recently, I launched <strong>Ober Artisan Drums</strong>, a handcrafted
          drum company powered by custom tech, visual design, and story.
          <br /><br />
          Whether it’s building scalable platforms or handcrafted products, I care
          deeply about the process and the people behind it.
        </p>

        <Link to="/about" className="home__link">Learn more →</Link>
      </div>

      <div className="home__right">
        <img
          className="home__portrait"
          src="/danober-portfolio.png"
          alt="Dan Ober"
        />
      </div>
    </div>
  );
}