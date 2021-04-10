import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-left">
        <NavLink to="/">DAN OBER</NavLink>
      </div>
      <div className="nav-right">
        <NavLink to="/about">ABOUT </NavLink>
        <NavLink to="/projects"> PROJECTS</NavLink>
        <NavLink to="/contact"> CONTACT</NavLink>
      </div>
    </div>
  );
}
