// src/pages/projects/ProjectDetailLayout.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ProjectDetailLayout.css";

export default function ProjectDetailLayout({
  eyebrow = "Case Study",
  title,
  role,
  stack,
  summary,
  children,
}) {
  return (
    <div className="pdl">
      <header className="pdl__hero">
        <p className="pdl__eyebrow">{eyebrow}</p>
        <h1 className="pdl__title">{title}</h1>

        {summary && <p className="pdl__subtitle">{summary}</p>}

        {(role || stack) && (
          <div className="pdl__meta">
            {role && (
              <div>
                <h2>Role</h2>
                <p>{role}</p>
              </div>
            )}
            {stack && (
              <div>
                <h2>Stack</h2>
                <p>{stack}</p>
              </div>
            )}
          </div>
        )}

        <div className="pdl__hero-links">
          <Link to="/projects" className="pdl__btn pdl__btn--ghost">
            ← Back to selected work
          </Link>
          <Link to="/contact" className="pdl__btn pdl__btn--primary">
            Talk about something similar →
          </Link>
        </div>
      </header>

      <section className="pdl__body">
        {children || (
          <p className="pdl__placeholder">
            Detailed write-up coming soon. For now, this page is a placeholder
            shell so the project routing is wired up across the site.
          </p>
        )}
      </section>
    </div>
  );
}