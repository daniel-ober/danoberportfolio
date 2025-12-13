// src/components/MainNav.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNav.css";

function MainNav() {
  return (
    <header className="main-nav">
      <div className="main-nav__inner">
        <NavLink to="/" className="main-nav__brand">
          <span className="main-nav__brand-mark" aria-hidden="true">
            do
          </span>
          <span className="main-nav__brand-text">Dan Ober</span>
        </NavLink>

        <nav className="main-nav__links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "main-nav__link main-nav__link--active"
                : "main-nav__link"
            }
          >
            Introduction
          </NavLink>

          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "main-nav__link main-nav__link--active"
                : "main-nav__link"
            }
          >
            Home
          </NavLink>

          {/* ⭐ NEW: My Story */}
          <NavLink
            to="/my-story"
            className={({ isActive }) =>
              isActive
                ? "main-nav__link main-nav__link--active"
                : "main-nav__link"
            }
          >
            My Story
          </NavLink>

          <NavLink
            to="/philosophy"
            className={({ isActive }) =>
              isActive
                ? "main-nav__link main-nav__link--active"
                : "main-nav__link"
            }
          >
            Philosophy
          </NavLink>

          <NavLink
            to="/results"
            className={({ isActive }) =>
              isActive
                ? "main-nav__link main-nav__link--active"
                : "main-nav__link"
            }
          >
            Results
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "main-nav__link main-nav__link--active"
                : "main-nav__link"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "main-nav__link main-nav__link--active"
                : "main-nav__link"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default MainNav;