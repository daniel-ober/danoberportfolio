// src/App.js
import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

// NAV
import NavBar from "./components/NavBar";

// PAGES
import Introduction from "./pages/Introduction";
import Home from "./pages/Home";
import MyStory from "./pages/MyStory";
import PolyrhythmicMethod from "./pages/PolyrhythmicMethod";
import ResultsOverview from "./pages/ResultsOverview";
import ProjectsGallery from "./pages/ProjectsGallery";
import Contact from "./pages/Contact";
import MakinHomeScene from "./components/MakinHomeScene";

function App() {
  const videoRef = useRef(null);

  // Ping-pong playback: forward → reverse → forward → reverse ...
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let reversing = false;
    let rafId = null;

    const cancelRaf = () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      rafId = null;
    };

    const stepReverse = () => {
      if (!video) return;

      if (!Number.isFinite(video.duration) || video.duration <= 0) {
        reversing = false;
        try {
          video.play();
        } catch (_) {}
        return;
      }

      const nextTime = Math.max(0, video.currentTime - 0.033);
      video.currentTime = nextTime;

      if (nextTime > 0) {
        rafId = requestAnimationFrame(stepReverse);
      } else {
        reversing = false;
        cancelRaf();
        try {
          video.play();
        } catch (_) {}
      }
    };

    const maybeStartReverse = () => {
      if (!video) return;
      if (reversing) return;

      const endThreshold = 0.06;
      if (
        Number.isFinite(video.duration) &&
        video.duration > 0 &&
        video.currentTime >= video.duration - endThreshold
      ) {
        reversing = true;
        try {
          video.pause();
        } catch (_) {}
        cancelRaf();
        rafId = requestAnimationFrame(stepReverse);
      }
    };

    const onTimeUpdate = () => {
      maybeStartReverse();
    };

    const onEnded = () => {
      if (!reversing) {
        reversing = true;
        try {
          video.pause();
        } catch (_) {}
        cancelRaf();
        rafId = requestAnimationFrame(stepReverse);
      }
    };

    const onLoadedData = () => {
      if (!reversing) {
        try {
          video.play();
        } catch (_) {}
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);
    video.addEventListener("loadeddata", onLoadedData);

    return () => {
      cancelRaf();
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("loadeddata", onLoadedData);
    };
  }, []);

  return (
    <Router>
      <div className="app-shell">
        {/* BACKGROUND VIDEO LAYER (ping-pong loop) */}
        <video
          ref={videoRef}
          className="app-shell__bg-video"
          autoPlay
          muted
          playsInline
          preload="auto"
        >
          <source src="/app-bg-videoc.mp4" type="video/mp4" />
        </video>

        {/* TINT / GRAIN OVERLAY */}
        <div className="app-shell__bg-overlay" />

        {/* FOREGROUND CONTENT */}
        <div className="app-shell__content">
          <NavBar />

          <main className="app-shell__main">
            <Routes>
              <Route path="/" element={<Introduction />} />

              {/* Optional legacy alias */}
              <Route path="/introduction" element={<Introduction />} />

              <Route path="/home" element={<Home />} />
              <Route path="/my-story" element={<MyStory />} />
              <Route path="/makin-home" element={<MakinHomeScene variant="desktop" />} />
              <Route path="/philosophy" element={<PolyrhythmicMethod />} />
              <Route path="/results" element={<ResultsOverview />} />
              <Route path="/projects" element={<ProjectsGallery />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;