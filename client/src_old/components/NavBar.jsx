// src/components/NavBar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// FIX: Ensure this file sits alongside NavBar.css in src/components/
import "./NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  const navItems = [
    { to: "/", label: "Introduction" },
    { to: "/my-story", label: "My Story" },
    { to: "/philosophy", label: "Philosophy" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Logo / Brand */}
        <div className="navbar__brand">
          <Link to="/" className="navbar__logo" onClick={handleClose}>
            <span className="navbar__logo-main">DAN OBER</span>
            <span className="navbar__logo-sub">
              Builder · Engineer · Creative
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="navbar__nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "navbar__link navbar__link--active"
                  : "navbar__link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="navbar__toggle"
          type="button"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className={`navbar__bar navbar__bar--top ${isOpen ? "open" : ""}`} />
          <span className={`navbar__bar navbar__bar--middle ${isOpen ? "open" : ""}`} />
          <span className={`navbar__bar navbar__bar--bottom ${isOpen ? "open" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="navbar__mobile">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={handleClose}
              className={({ isActive }) =>
                isActive
                  ? "navbar__mobile-link navbar__mobile-link--active"
                  : "navbar__mobile-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}