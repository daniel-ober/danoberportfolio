import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* Mobile portrait */}
      <div className="home__portrait-mobile">
        <img src="/danober-portfolio.png" alt="Dan Ober" />
      </div>

      <div className="home__left fade-in-left">
        <h2 className="home__headline">Builder + Designer</h2>
        <h2 className="home__headline__sub">
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

      {/* Desktop portrait */}
      <div className="home__portrait-desktop">
        <img src="/danober-portfolio.png" alt="Dan Ober" />
      </div>
    </div>
  );
}