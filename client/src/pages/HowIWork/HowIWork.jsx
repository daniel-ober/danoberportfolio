import "./HowIWork.css";
import { Link } from "react-router-dom";

export default function HowIWork() {
  return (
    <section className="hiw page">
      <div className="hiw__inner page__inner">
        <header className="hiw__hero">
          <p className="hiw__kicker">How I Work</p>
          <h1 className="hiw__title">Clarity → reliability → outcomes.</h1>
          <p className="hiw__subtitle">
            My operating system for customer-facing engineering: reduce ambiguity, make
            the system observable, fix root causes, and leave things easier to maintain.
          </p>

          <div className="hiw__ctaRow">
            <Link className="btn btn--primary" to="/projects">
              View Projects
            </Link>
            <Link className="btn btn--ghost" to="/contact">
              Contact
            </Link>
          </div>
        </header>

        <div className="hiw__stack">
          <section className="hiw__block">
            <h2 className="h2">1) Diagnose with signal</h2>
            <p className="p">
              I start by making the problem measurable: logs, repro steps, inputs/outputs,
              constraints, and the “definition of fixed.”
            </p>
            <div className="hiw__tags">
              <span className="hiw__tag">Repro</span>
              <span className="hiw__tag">Telemetry</span>
              <span className="hiw__tag">Edge cases</span>
              <span className="hiw__tag">Risk</span>
            </div>
          </section>

          <section className="hiw__block">
            <h2 className="h2">2) Translate to an actionable plan</h2>
            <p className="p">
              I turn “customer language” into implementation detail: data models, API
              contracts, integration points, failure modes, and success criteria.
            </p>
            <div className="hiw__tags">
              <span className="hiw__tag">Requirements</span>
              <span className="hiw__tag">Interfaces</span>
              <span className="hiw__tag">Workflows</span>
              <span className="hiw__tag">Docs</span>
            </div>
          </section>

          <section className="hiw__block">
            <h2 className="h2">3) Fix root causes, not symptoms</h2>
            <p className="p">
              If a fix doesn’t reduce future incidents, it’s not done. I prefer small,
              testable changes with clean rollback paths.
            </p>
            <div className="hiw__tags">
              <span className="hiw__tag">Stability</span>
              <span className="hiw__tag">Regression-proof</span>
              <span className="hiw__tag">Guardrails</span>
              <span className="hiw__tag">Rollback</span>
            </div>
          </section>

          <section className="hiw__block">
            <h2 className="h2">4) Communicate like a teammate</h2>
            <p className="p">
              Clear updates, no drama: what’s happening, what I tried, what I’m doing next,
              and what I need from others.
            </p>
            <div className="hiw__tags">
              <span className="hiw__tag">Status updates</span>
              <span className="hiw__tag">Stakeholders</span>
              <span className="hiw__tag">Handoffs</span>
              <span className="hiw__tag">Follow-through</span>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}