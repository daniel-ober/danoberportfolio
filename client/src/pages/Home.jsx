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
          I build software and physical products that blend function, story, and
          thoughtful design. From full-stack web apps to custom-built instruments,
          I care about the details that make ideas resonate.
          <br /><br />
          My work bridges the technical and the tactile — with a focus on clean
          experiences, strong architecture, and meaningful impact.
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