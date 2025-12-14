import "./Introduction.css";
import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <section className="intro page">
      <div className="intro__inner page__inner">
        <header className="intro__hero">
          <p className="intro__kicker">Introduction</p>
          <h1 className="intro__title">Context — without the fluff.</h1>
          <p className="intro__subtitle">
            A quick orientation to how I think, how I build, and what I optimize for when
            real customers and real systems are involved.
          </p>

          <div className="intro__ctaRow">
            <Link className="btn btn--primary" to="/how-i-work">
              How I Work
            </Link>
            <Link className="btn btn--ghost" to="/projects">
              See Projects
            </Link>
          </div>
        </header>

        <div className="intro__grid">
          <section className="intro__card">
            <h2 className="h2">What I optimize for</h2>
            <ul className="intro__list">
              <li>Clarity over cleverness</li>
              <li>Reliability over “works on my machine”</li>
              <li>Outcomes over output</li>
              <li>Fast feedback loops with clean handoffs</li>
            </ul>
          </section>

          <section className="intro__card">
            <h2 className="h2">Where I’m strongest</h2>
            <p className="p">
              I’m at my best when I’m bridging product + engineering + customers:
              debugging edge cases, translating requirements, designing workflows, and
              making systems feel dependable.
            </p>
          </section>

          <section className="intro__card">
            <h2 className="h2">How to read this site</h2>
            <p className="p">
              Projects are written like short case studies:{" "}
              <span className="intro__pill">problem</span> →{" "}
              <span className="intro__pill">approach</span> →{" "}
              <span className="intro__pill">implementation</span> →{" "}
              <span className="intro__pill">result</span>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}