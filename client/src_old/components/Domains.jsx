import React from "react";
import "./Domains.css";

const DOMAINS = [
  {
    id: "solutions",
    category: "Technical Solutions",
    title: "Solutions Engineering",
    blurb:
      "Design and implement API-driven solutions that connect products, data, and teams.",
    highlights: [
      "SaaS & API integrations",
      "Pre- & post-sales collaboration",
      "Process mapping & diagnostics",
    ],
  },
  {
    id: "software",
    category: "Web & Software",
    title: "Full-Stack Development",
    blurb:
      "Web apps, portals, and internal tools that are stable, maintainable, and actually adopted.",
    highlights: ["React + Firebase", "Dashboards & portals", "Auth & data modeling"],
  },
  {
    id: "customer-success",
    category: "Customer Success",
    title: "Customer Success & Enablement",
    blurb:
      "Translate complex systems into simple, repeatable workflows for teams and clients.",
    highlights: ["Onboarding playbooks", "Success KPIs & health", "Product feedback loops"],
  },
  {
    id: "3d",
    category: "3D & Prototyping",
    title: "3D Design & Printing",
    blurb: "Custom parts and jigs — from parametric models to finished prints.",
    highlights: ["Fusion 360", "Functional jigs", "Rapid prototypes"],
  },
  {
    id: "drums-performance",
    category: "Music",
    title: "Session Drummer",
    blurb:
      "Live and remote drum tracking with feel, tone, and musicality at the center.",
    highlights: ["Rock / pop / CCM / indie", "Remote & in-studio sessions", "Click-locked grooves"],
  },
  {
    id: "audio-production",
    category: "Audio",
    title: "Recording, Mixing & Sound",
    blurb: "Capture, shape, and finalize tracks — from raw takes to polished mixes.",
    highlights: ["Tracking & editing", "Mixing & balance", "Sound design"],
  },
  {
    id: "scoring",
    category: "Film & Media",
    title: "Scoring & Composition",
    blurb:
      "Original music and thematic cues for film, video, podcasts, and branded content.",
    highlights: ["Theme development", "Atmospheres & underscoring", "Delivery-ready stems"],
  },
  {
    id: "photography",
    category: "Visual",
    title: "Photography",
    blurb:
      "Portraits, product, and brand storytelling with clean, consistent visual language.",
    highlights: ["Product & drums", "Artist portraits", "Brand assets"],
  },
  {
    id: "drum-craft",
    category: "Craft",
    title: "Drum Craftsman",
    blurb: "Handcrafted stave snares from raw lumber to finished instrument.",
    highlights: ["Shell design", "Custom finishes", "Player-first tuning"],
  },
];

export default function Domains() {
  return (
    <section id="domains" className="domains">
      <div className="domains__inner">
        <header className="domains__header">
          <h2 className="domains__title">Areas of Expertise</h2>
          <p className="domains__subtitle">
            I work across software, systems, sound, and visuals. These are the lanes where I’m most
            helpful to founders, teams, and artists.
          </p>
        </header>

        <div className="domains__grid">
          {DOMAINS.map((domain) => (
            <article key={domain.id} className="domain-card">
              <div className="domain-card__pill">{domain.category}</div>
              <h3 className="domain-card__title">{domain.title}</h3>
              <p className="domain-card__blurb">{domain.blurb}</p>
              <ul className="domain-card__highlights">
                {domain.highlights.map((item, idx) => (
                  <li key={idx} className="domain-card__highlight">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="domain-card__footer">
                <a href="/projects" className="domain-card__link">
                  View related work →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}