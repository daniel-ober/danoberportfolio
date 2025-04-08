import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/" onClick={closeMenu}>
          <span className="navbar__logo--highlight">DAN</span>
          <span>OBER</span>
        </Link>
      </div>

      <button
        className={`navbar__toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <div className="bar top" />
        <div className="bar middle" />
        <div className="bar bottom" />
      </button>

      <nav className={`navbar__links ${isOpen ? "open" : ""}`}>
        {["/", "/about", "/projects", "/contact"].map((path) => {
          const label = path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
          return (
            <Link
              key={path}
              to={path}
              className={`navbar__link ${location.pathname === path ? "active" : ""}`}
              onClick={closeMenu}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}