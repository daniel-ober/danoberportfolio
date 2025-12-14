// src/app/routes.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";

import AppShell from "./layout/AppShell";

// Pages
import Home from "../pages/Home/Home";
import Introduction from "../pages/Introduction/Introduction";
import Philosophy from "../pages/Philosophy/Philosophy";
import HowIWork from "../pages/HowIWork/HowIWork";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";

// Case Study
import SoundLegendPortalCaseStudy from "../pages/Projects/SoundLegendPortalCaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppShell>
        <Home />
      </AppShell>
    ),
  },

  {
    path: "/introduction",
    element: (
      <AppShell>
        <Introduction />
      </AppShell>
    ),
  },

  // Philosophy = Polyrhythmic Discipline Method (worldview)
  {
    path: "/philosophy",
    element: (
      <AppShell>
        <Philosophy />
      </AppShell>
    ),
  },

  // How I Work = operating system (execution)
  {
    path: "/how-i-work",
    element: (
      <AppShell>
        <HowIWork />
      </AppShell>
    ),
  },

  {
    path: "/projects",
    element: (
      <AppShell>
        <Projects />
      </AppShell>
    ),
  },

  {
    path: "/projects/soundlegend-portal",
    element: (
      <AppShell>
        <SoundLegendPortalCaseStudy />
      </AppShell>
    ),
  },

  {
    path: "/contact",
    element: (
      <AppShell>
        <Contact />
      </AppShell>
    ),
  },
]);