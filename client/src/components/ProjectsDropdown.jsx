import React from "react";
import { NavLink } from "react-router-dom";
import "./ProjectsDropdown.css";

export default function ProjectsDropdown() {
  return (
    <div className="dropdown__menu">
      {/* Web Projects */}
      <div className="dropdown__item">
        <span className="dropdown__label">Web Projects</span>
        <div className="submenu">
          <NavLink to="/projects/ober-artisan-drums">Ober Artisan Drums</NavLink>
          <NavLink to="/projects/sunday-driver">Sunday Driver</NavLink>
          <NavLink to="/projects/weathernest">Weathernest</NavLink>
          <NavLink to="/projects/artist-abc">Artist ABC</NavLink>
          <NavLink to="/projects/hot-chicken-heroes">Hot Chicken Heroes</NavLink>
        </div>
      </div>

      {/* 3D Design */}
      <div className="dropdown__item">
        <span className="dropdown__label">3D Design</span>
        <div className="submenu">
          <NavLink to="/projects/yeti-mug-holder">Yeti Mug Holder</NavLink>
          <NavLink to="/projects/stave-drum-jig">Stave Drum Jig</NavLink>
          <NavLink to="/projects/watch-band">Watch Band</NavLink>
          <NavLink to="/projects/acorn-necklace">Acorn Necklace</NavLink>
        </div>
      </div>

      {/* Music */}
      <div className="dropdown__item">
        <span className="dropdown__label">Music</span>
        <div className="submenu">
          <NavLink to="/projects/sound-production">Sound Production</NavLink>
          <NavLink to="/projects/drums-performance">Drums & Performance</NavLink>
          <NavLink to="/projects/scoring-composition">Scoring Composition</NavLink>
        </div>
      </div>
    </div>
  );
}