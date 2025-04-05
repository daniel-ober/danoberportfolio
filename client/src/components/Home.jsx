import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-main-container">
      <h2 className="home-header">Builder. Designer. Collaborator.</h2>
      <h2 className="home-header">
        Rooted in experience. Driven by curiosity.
      </h2>
      <p className="home-body">
        I'm a full-stack developer with a background in customer experience,
        problem solving, and creative brand-building. My work blends empathy,
        precision, and persistence — from code to concept.
        <br />
        <br />
        Most recently, I launched <strong>Ober Artisan Drums</strong>, a
        handcrafted drum company powered by custom tech, visual design, and
        story.
        <br />
        <br />
        Whether it’s building scalable platforms or handcrafted products, I care
        deeply about the process and the people behind it.
        <br />
        <br />
        <Link to="/about">Learn more</Link>
      </p>
    </div>
  );
}
