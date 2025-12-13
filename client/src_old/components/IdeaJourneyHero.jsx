// src/components/IdeaJourneyHero.jsx
import React, { useState, useEffect } from "react";
import "./IdeaJourneyHero.css";

const CHAPTERS = [
  {
    id: "quiet-beginnings",
    title: "Quiet Beginnings",
    workspaceHint: "The room before the tools wake up.",
    body: (
      <>
        There’s always a{" "}
        <span className="idea-hero__em">quiet moment before anything starts</span>. No
        tools running, no screens awake, just a room and a feeling that something
        wants to exist. Most of my ideas don’t arrive with trumpets; they show up as a{" "}
        <span className="idea-hero__em">tiny pull in the chest</span>, a{" "}
        <span className="idea-hero__em">“what if?”</span> that refuses to leave. I’ve
        learned to pay attention to that feeling. It’s usually{" "}
        <span className="idea-hero__em">the beginning of a new world</span> trying to tap
        on the glass.
      </>
    ),
  },
  {
    id: "pull-of-curiosity",
    title: "The Pull of Curiosity",
    workspaceHint: "Notebooks, margins, arrows everywhere.",
    body: (
      <>
        Curiosity never shows up politely. It spreads out across pages, napkins, and
        margins—arrows, half-sentences, circles around things I don’t fully understand
        yet. I love this part: when{" "}
        <span className="idea-hero__em">
          nothing is organized, but everything feels possible
        </span>
        . I’m not thinking about constraints yet. I’m just{" "}
        <span className="idea-hero__em">chasing the shape of an idea</span>, seeing how
        far it’s willing to go if I don’t tell it{" "}
        <span className="idea-hero__em">“no” too early</span>.
      </>
    ),
  },
  {
    id: "moment-of-clarity",
    title: "The Moment of Clarity",
    workspaceHint: "Blueprints on a screen.",
    body: (
      <>
        Eventually, the chaos starts to line up. Boxes on a screen, flows between them,
        a rough architecture that says,{" "}
        <span className="idea-hero__em">“This could actually work.”</span> This is where
        I switch from dreaming to designing. I start asking harder questions: Who is
        this really for? What happens first? What must never break? The idea stops
        being a fantasy and{" "}
        <span className="idea-hero__em">starts becoming a system</span>—something you
        can point at, test, and build on.
      </>
    ),
  },
  {
    id: "giving-idea-a-voice",
    title: "Giving the Idea a Voice",
    workspaceHint: "Sound, rhythm, light, pacing.",
    body: (
      <>
        Once I know what something is, I want to know{" "}
        <span className="idea-hero__em">how it feels</span>. That’s where sound,
        rhythm, and story come in. I think in pacing: how someone first encounters an
        idea, the beat where it surprises them,{" "}
        <span className="idea-hero__em">the moment it lands in their memory</span>.
        Whether it’s a drum pattern, a score, or a simple animation, I’m always trying
        to <span className="idea-hero__em">give the work a voice</span>—a tone that
        quietly says, <span className="idea-hero__em">
          “This was made with care. This is for you.”
        </span>
      </>
    ),
  },
  {
    id: "testing-reality",
    title: "Testing It Against Reality",
    workspaceHint: "Real tools, real resistance.",
    body: (
      <>
        Ideas are brave until they meet reality. Wood splits, code breaks, timing
        drifts, hardware does something it definitely wasn’t supposed to do. I’ve
        learned not to take that personally.{" "}
        <span className="idea-hero__em">This is the part where the work talks back.</span>{" "}
        I listen, adjust, re-cut, refactor, and try again. There’s something deeply
        honest about this stage: no pitch deck, no theory—just whether the thing{" "}
        <span className="idea-hero__em">actually holds up</span> when you put real
        weight on it.
      </>
    ),
  },
  {
    id: "precision-iteration",
    title: "Precision & Iteration",
    workspaceHint: "Shaving away what it doesn’t need.",
    body: (
      <>
        Once something stands on its own, I start{" "}
        <span className="idea-hero__em">
          shaving away everything it doesn’t need
        </span>
        . A cleaner signal path. A better joint. A smarter flow. This is where tiny
        decisions add up to{" "}
        <span className="idea-hero__em">big differences</span> in how something feels
        to use, hear, or hold. I’m patient here.{" "}
        <span className="idea-hero__em">I’d rather quietly iterate until it clicks</span>{" "}
        than rush something out that isn’t ready. The goal isn’t perfection—it’s{" "}
        <span className="idea-hero__em">honesty</span>. It should feel like what it
        claims to be.
      </>
    ),
  },
  {
    id: "return-home",
    title: "Return Home",
    workspaceHint: "Back to the ‘why’.",
    body: (
      <>
        Every project eventually finds its way back to the same question:{" "}
        <span className="idea-hero__em">Why does this matter to anyone?</span> For me,
        the answer usually lives close to home—people I care about, stories that
        shaped me, the feeling of{" "}
        <span className="idea-hero__em">being seen and understood</span> by something
        someone else built. That’s what I’m chasing when I’m in these different
        worlds—<span className="idea-hero__em">code, wood, sound, light</span>. I’m not
        just trying to ship features or finish drums. I’m trying to build{" "}
        <span className="idea-hero__em">
          things that feel alive enough to stay with you
        </span>{" "}
        after you put them down.
      </>
    ),
  },
];

function IdeaJourneyHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // kick in the initial cinematic fade
    const t = setTimeout(() => setHasMounted(true), 40);
    return () => clearTimeout(t);
  }, []);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % CHAPTERS.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? CHAPTERS.length - 1 : prev - 1
    );
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const activeChapter = CHAPTERS[activeIndex];

  return (
    <section
      className={`idea-hero ${
        hasMounted ? "idea-hero--ready" : "idea-hero--init"
      }`}
    >
      {/* BACKDROP LAYERS */}
      <div className="idea-hero__backdrop">
        <div className="idea-hero__gradient" />
        <div className="idea-hero__vignette" />
        <div className="idea-hero__noise" />
      </div>

      {/* MAIN CONTENT */}
      <div className="idea-hero__inner">
        <header className="idea-hero__header">
          <div className="idea-hero__eyebrow">
            A journey through the workshops in my head
          </div>
          <h1 className="idea-hero__title">
            The moment an idea
            <span className="idea-hero__title-accent">
              decides it wants to be real.
            </span>
          </h1>
        </header>

        <div className="idea-hero__frame">
          {/* LEFT: STORY */}
          <article
            key={activeChapter.id}
            className="idea-hero__chapter idea-hero__chapter--active"
          >
            <div className="idea-hero__chapter-label">
              Chapter {activeIndex + 1} · {activeChapter.title}
            </div>
            <div className="idea-hero__chapter-body">{activeChapter.body}</div>

            <div className="idea-hero__chapter-meta">
              <span className="idea-hero__workspace-hint">
                {activeChapter.workspaceHint}
              </span>
            </div>
          </article>

          {/* RIGHT: ABSTRACT “WORKSPACE” PANEL (no real media yet, just vibes) */}
          <div className="idea-hero__panel">
            <div className="idea-hero__panel-orbit" />
            <div className="idea-hero__panel-ring idea-hero__panel-ring--one" />
            <div className="idea-hero__panel-ring idea-hero__panel-ring--two" />
            <div className="idea-hero__panel-ring idea-hero__panel-ring--three" />
            <div className="idea-hero__panel-label">
              <span>Scene {activeIndex + 1}</span>
              <span className="idea-hero__panel-label-divider">·</span>
              <span>{activeChapter.title}</span>
            </div>
          </div>
        </div>

        {/* CONTROLS */}
        <footer className="idea-hero__footer">
          <div className="idea-hero__controls">
            <button
              type="button"
              className="idea-hero__nav-btn"
              onClick={goPrev}
            >
              ← Back
            </button>
            <button
              type="button"
              className="idea-hero__nav-btn idea-hero__nav-btn--primary"
              onClick={goNext}
            >
              Next chapter →
            </button>
          </div>

          <div className="idea-hero__progress">
            <div className="idea-hero__progress-label">
              {activeIndex + 1} / {CHAPTERS.length}
            </div>
            <div className="idea-hero__progress-dots">
              {CHAPTERS.map((chapter, index) => (
                <button
                  key={chapter.id}
                  type="button"
                  className={`idea-hero__dot ${
                    index === activeIndex ? "is-active" : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to chapter ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default IdeaJourneyHero;