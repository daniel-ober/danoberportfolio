// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* --------------------- Layout & Core Pages --------------------- */
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/projects/Projects";

/* ----- Polyrhythmic Method (replaces Philosophy tab) ----- */
import PolyrhythmicMethod from "./pages/PolyrhythmicMethod";

/* --------------------- Web & Software --------------------- */
import OberArtisanDrums from "./pages/projects/web/OberArtisanDrums";
import WeatherNest from "./pages/projects/web/WeatherNest";
import EZSynth from "./pages/projects/web/EZSynth";

/* --------------------- 3D Design & Printing --------------------- */
import StaveDrumCompressionJig from "./pages/projects/3d/StaveDrumCompressionJig";
import YetiMugRailHolder from "./pages/projects/3d/YetiMugRailHolder";
import AcornNecklacePendant from "./pages/projects/3d/AcornNecklacePendant";

/* --------------------- Music & Audio --------------------- */
import RemoteSessionDrums from "./pages/projects/music/RemoteSessionDrums";
import SoundProductionMixing from "./pages/projects/music/SoundProductionMixing";
import ScoringComposition from "./pages/projects/music/ScoringComposition";

/* --------------------- Photography --------------------- */
import DrumProductPhotography from "./pages/projects/photo/DrumProductPhotography";

/* --------------------- Drum Craft --------------------- */
import CustomStaveSnareBuilds from "./pages/projects/drums/CustomStaveSnareBuilds";

/* --------------------- Styles --------------------- */
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* ---------- Core pages ---------- */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* ---------- Polyrhythmic Method ---------- */}
          <Route path="/method" element={<PolyrhythmicMethod />} />

          {/* ---------- Web & Software ---------- */}
          <Route
            path="/projects/ober-artisan-drums"
            element={<OberArtisanDrums />}
          />
          <Route path="/projects/weathernest" element={<WeatherNest />} />
          <Route path="/projects/ez-synth" element={<EZSynth />} />

          {/* ---------- 3D Design & Printing ---------- */}
          <Route
            path="/projects/stave-drum-compression-jig"
            element={<StaveDrumCompressionJig />}
          />
          <Route
            path="/projects/yeti-mug-rail-holder"
            element={<YetiMugRailHolder />}
          />
          <Route
            path="/projects/acorn-necklace-pendant"
            element={<AcornNecklacePendant />}
          />

          {/* ---------- Music & Audio ---------- */}
          <Route
            path="/projects/remote-session-drums"
            element={<RemoteSessionDrums />}
          />
          <Route
            path="/projects/sound-production-mixing"
            element={<SoundProductionMixing />}
          />
          <Route
            path="/projects/scoring-and-composition"
            element={<ScoringComposition />}
          />

          {/* ---------- Photography ---------- */}
          <Route
            path="/projects/drum-product-photography"
            element={<DrumProductPhotography />}
          />

          {/* ---------- Drum Craft ---------- */}
          <Route
            path="/projects/custom-stave-snare-builds"
            element={<CustomStaveSnareBuilds />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;