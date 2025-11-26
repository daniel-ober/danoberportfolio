// src/components/NavBar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__brand">
          <Link to="/" className="navbar__logo" onClick={handleClose}>
            <span className="navbar__logo-main">DAN OBER</span>
            <span className="navbar__logo-sub">Builder · Engineer · Creative</span>
          </Link>
        </div>

        {/* Desktop links */}
        <nav className="navbar__nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="navbar__toggle"
          type="button"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className={isOpen ? "navbar__bar navbar__bar--top open" : "navbar__bar navbar__bar--top"} />
          <span className={isOpen ? "navbar__bar navbar__bar--middle open" : "navbar__bar navbar__bar--middle"} />
          <span className={isOpen ? "navbar__bar navbar__bar--bottom open" : "navbar__bar navbar__bar--bottom"} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <nav className="navbar__mobile">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "navbar__mobile-link navbar__mobile-link--active"
                  : "navbar__mobile-link"
              }
              onClick={handleClose}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}