// src/pages/Home.js
import "./Home.css";
import { Link } from "react-router-dom";
import { Monitor, Boxes, Puzzle, Hammer, Music2, Cpu } from "lucide-react";

const META_DISCIPLINES = [
  {
    key: "web",
    label: "Web & Software",
    Icon: Monitor,
    hint: "Customer-facing systems",
    color: "#3b82f6",
    weight: "primary",
  },
  {
    key: "product",
    label: "Product & UX",
    Icon: Boxes,
    hint: "Workflows + integrations",
    color: "#f97316",
    weight: "primary",
  },
  {
    key: "problem",
    label: "Problem Solving",
    Icon: Puzzle,
    hint: "Debugging + reliability",
    color: "#a855f7",
    weight: "primary",
  },
  {
    key: "story",
    label: "Story & Music",
    Icon: Music2,
    hint: "Clear communication",
    color: "#ec4899",
    weight: "primary",
  },

  // Secondary (present, but visually quieter)
  {
    key: "craft",
    label: "Craft & Making",
    Icon: Hammer,
    hint: "Precision, process, repeatability",
    color: "#facc15",
    weight: "secondary",
  },
  {
    key: "ai",
    label: "AI & Systems",
    Icon: Cpu,
    hint: "Systems thinking + amplification",
    color: "#22c55e",
    weight: "secondary",
  },
];

export default function Home() {
  return (
    <section className="home page">
      <div className="home__inner page__inner">
        <header className="home__hero">
          <p className="home__kicker">Dan Ober</p>

          <h1 className="home__title">
            Solutions / Customer Engineer — bridging product, systems, and customers.
          </h1>

          <p className="home__subtitle">
            I work at the intersection of engineering, product, and customer experience — solving
            complex, real-world problems with clarity, reliability, and outcomes that stick.
          </p>

          <div className="home__ctaRow">
            <Link className="btn btn--primary" to="/projects">
              View Projects
            </Link>
            <Link className="btn btn--ghost" to="/philosophy">
              How I Work
            </Link>
          </div>

          {/* UPDATED: discipline icon pills (includes Craft + AI as secondary) */}
          <div className="home__meta" aria-label="Core disciplines">
            {META_DISCIPLINES.map((d) => (
              <span
                key={d.key}
                className={
                  "home__discPill" +
                  (d.weight === "secondary" ? " home__discPill--secondary" : "")
                }
                title={d.hint}
                style={{ "--accent": d.color }}
              >
                <span className="home__discIcon" aria-hidden="true">
                  <d.Icon size={16} />
                </span>
                <span className="home__discLabel">{d.label}</span>
              </span>
            ))}
          </div>
        </header>

        <section className="home__cred">
          <div className="home__credItem">
            <div className="home__credTitle">What I do</div>
            <div className="home__credBody">
              Diagnose issues, translate customer needs into technical solutions, and ship systems
              that work under real constraints.
            </div>
          </div>

          <div className="home__credItem">
            <div className="home__credTitle">How I show proof</div>
            <div className="home__credBody">
              Projects read like short case studies: problem → approach → implementation → result.
            </div>
          </div>

          <div className="home__credItem">
            <div className="home__credTitle">What you’ll notice</div>
            <div className="home__credBody">
              I care about details because reliability is trust — in products, systems, and teams.
            </div>
          </div>
        </section>

        <div className="home__grid">
          <section className="home__card">
            <h2 className="h2">Projects</h2>
            <p className="p">
              Case studies that demonstrate customer-driven engineering, reliability work, and
              shipped outcomes.
            </p>
            <Link className="link" to="/projects">
              View case studies →
            </Link>
          </section>

          <section className="home__card">
            <h2 className="h2">How I Work</h2>
            <p className="p">
              My operating system: how I translate ambiguity, communicate clearly, and deliver
              dependable solutions.
            </p>
            <Link className="link" to="/philosophy">
              Read my approach →
            </Link>
          </section>

          <section className="home__card home__card--muted">
            <h2 className="h2">Introduction</h2>
            <p className="p">
              Optional context: the narrative layer behind my work and the principles that shaped it.
            </p>
            <Link className="link" to="/introduction">
              Open the intro →
            </Link>
          </section>
        </div>

        <footer className="home__footer">
          <p className="home__footerText">
            Prefer a quick scan? Start with{" "}
            <Link className="inlineLink" to="/projects">
              Projects
            </Link>
            .
          </p>
        </footer>
      </div>
    </section>
  );
}