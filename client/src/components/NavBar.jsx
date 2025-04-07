import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Auto-close menu on route change
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

      <button className="navbar__toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        ☰
      </button>

      <nav className={`navbar__links ${isOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={`navbar__link ${location.pathname === "/" ? "active" : ""}`}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`navbar__link ${location.pathname === "/about" ? "active" : ""}`}
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={`navbar__link ${location.pathname === "/projects" ? "active" : ""}`}
          onClick={closeMenu}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={`navbar__link ${location.pathname === "/contact" ? "active" : ""}`}
          onClick={closeMenu}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}