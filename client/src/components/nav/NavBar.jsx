import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/philosophy", label: "Philosophy" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <div className="nav__brand">Dan Ober</div>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                "nav__link" + (isActive ? " nav__link--active" : "")
              }
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
