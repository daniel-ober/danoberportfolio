// src/config/disciplines.js

// Core discipline definitions used across the site:
// - Polyrhythmic Method page
// - Projects / Results cards
// - Timeline badges
// - Any legends / chips

export const DISCIPLINES = [
  {
    key: "web",
    chipLabel: "Web & Software",
    legendLabel: "Web & Software",
    color: "#3b82f6",
    // Point this at whatever asset you’re using on the Polyrhythmic Method cards
    iconSrc: "/media/disciplines/web.svg",
  },
  {
    key: "product",
    chipLabel: "Product & UX",
    legendLabel: "Product & UX Design",
    color: "#f97316",
    iconSrc: "/media/disciplines/product.svg",
  },
  {
    key: "problem",
    chipLabel: "Problem Solving",
    legendLabel: "Systems & Problem-Solving",
    color: "#a855f7",
    iconSrc: "/media/disciplines/problem.svg",
  },
  {
    key: "craft",
    chipLabel: "Craft & Making",
    legendLabel: "Craft & Making",
    color: "#facc15",
    iconSrc: "/media/disciplines/craft.svg",
  },
  {
    key: "story",
    chipLabel: "Story & Music",
    legendLabel: "Story, Music & Creative Life",
    color: "#ec4899",
    iconSrc: "/media/disciplines/story.svg",
  },
  {
    key: "ai",
    chipLabel: "AI & Systems",
    legendLabel: "AI & Systems",
    color: "#22c55e",
    iconSrc: "/media/disciplines/ai.svg",
  },
];

// Stable order used for blend keys and legends
export const DISCIPLINE_ORDER = DISCIPLINES.map((d) => d.key);