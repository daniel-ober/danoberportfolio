// src/components/HeroWorkshops.jsx
import React, { useEffect, useState } from "react";
import "./HeroWorkshops.css";

const SCENES = [
  {
    id: "software",
    label: "Software workshop",
    badge: "Scene I · Systems",
    bgImage: "/media/home/scene-software.jpg",
    lines: [
      "Some ideas start as sticky notes and scribbles.",
      "Mine usually end up as working systems.",
    ],
    highlightWords: ["ideas", "systems"],
  },
  {
    id: "woodshop",
    label: "Woodshop",
    badge: "Scene II · Craft",
    bgImage: "/media/home/scene-woodshop.jpg",
    lines: [
      "I learned to trust the process carving sound out of lumber.",
      "Every drum is a product experiment you can actually hit.",
    ],
    highlightWords: ["process", "sound", "experiment"],
  },
  // ...music, photo, 3D scenes
];

function HeroWorkshops() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % (SCENES.length + 1)); // last state = final title card
    }, 6000); // 6 seconds per scene
    return () => clearInterval(interval);
  }, []);

  const atTitleCard = index === SCENES.length;
  const currentScene = SCENES[index] || SCENES[SCENES.length - 1];

  return (
    <section className="hero-reel">
      <div className="hero-reel__band">
        {/* background scene */}
        <div
          className={`hero-reel__scene ${
            atTitleCard ? "hero-reel__scene--title" : ""
          }`}
          style={{ backgroundImage: `url(${currentScene.bgImage})` }}
        >
          {!atTitleCard && (
            <>
              <div className="hero-reel__badge">{currentScene.badge}</div>
              <div className="hero-reel__caption">
                {currentScene.lines.map((line, i) => (
                  <p key={i} className={`hero-reel__line hero-reel__line--${i}`}>
                    {line}
                  </p>
                ))}
              </div>
            </>
          )}

          {atTitleCard && (
            <div className="hero-reel__titlecard">
              <p className="hero-reel__titlecard-tag">
                Ideas → Worlds · Drums · Systems · Story
              </p>
              <h1 className="hero-reel__titlecard-title">
                Hey, I’m Dan.
                <span>
                  I love taking challenging ideas and turning them into real,
                  elevated, touchable things.
                </span>
              </h1>
            </div>
          )}

          {/* film overlay */}
          <div className="hero-reel__grain" />
        </div>

        {/* small progress dots */}
        <div className="hero-reel__progress">
          {SCENES.map((scene, i) => {
            const active = index === i || (atTitleCard && i === SCENES.length - 1);
            return (
              <span
                key={scene.id}
                className={`hero-reel__dot ${active ? "hero-reel__dot--active" : ""}`}
              />
            );
          })}
          <span
            className={`hero-reel__dot hero-reel__dot--title ${
              atTitleCard ? "hero-reel__dot--active" : ""
            }`}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroWorkshops;