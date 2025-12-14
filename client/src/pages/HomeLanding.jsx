// src/pages/HomeLanding.js
import React, { useEffect, useMemo, useState } from "react";
import "./HomeLanding.css";

export default function HomeLanding() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fade hero as you scroll down the first ~420px
  const heroOpacity = useMemo(() => {
    const t = Math.min(Math.max(scrollY / 420, 0), 1);
    return 1 - t;
  }, [scrollY]);

  // Slightly increase vignette as you scroll (keeps text readable)
  const vignetteOpacity = useMemo(() => {
    const t = Math.min(Math.max(scrollY / 600, 0), 1);
    return 0.28 + t * 0.18; // 0.28 → 0.46
  }, [scrollY]);

  return (
    <div className="homeLanding">
      {/* Scene backdrop */}
      <div
        className="homeLanding__scene"
        style={{
          backgroundImage: "url(/media/portfolio/scenes/intro.png)",
        }}
        aria-hidden="true"
      />

      {/* Readability overlays */}
      <div
        className="homeLanding__vignette"
        style={{ opacity: vignetteOpacity }}
        aria-hidden="true"
      />
      <div className="homeLanding__grain" aria-hidden="true" />

      {/* Foreground hero */}
      <div className="homeLanding__content" style={{ opacity: heroOpacity }}>
        <div className="homeLanding__kicker">DAN OBER</div>

        <h1 className="homeLanding__headline">
          I build systems,
          <br />
          instruments, and stories —
          <br />
          sometimes all at once.
        </h1>

        <div className="homeLanding__sub">
          Builder · Engineer · Creative
        </div>

        <div className="homeLanding__hint">Scroll</div>
      </div>

      {/* Next section placeholder so scrolling is real */}
      <section className="homeLanding__next">
        <div className="homeLanding__nextInner">
          <h2>Story</h2>
          <p>
            This is where Era 1 will begin (next step).
          </p>
        </div>
      </section>
    </div>
  );
}