// client/src/components/DisciplineIcons.jsx
import React from "react";
import { Monitor, Boxes, Puzzle, Hammer, Music2, Cpu } from "lucide-react";
import "./DisciplineIcons.css";

export const DISCIPLINES = [
  {
    key: "web",
    label: "Web & Software",
    chipLabel: "Web & Software",
    legendLabel: "Web & Software",
    color: "#3b82f6",
    Icon: Monitor,
  },
  {
    key: "product",
    label: "Product & UX",
    chipLabel: "Product & UX",
    legendLabel: "Product & UX Design",
    color: "#f97316",
    Icon: Boxes,
  },
  {
    key: "problem",
    label: "Problem Solving",
    chipLabel: "Problem Solving",
    legendLabel: "Technical Problem Solving",
    color: "#a855f7",
    Icon: Puzzle,
  },
  {
    key: "craft",
    label: "Craft & Making",
    chipLabel: "Craft & Making",
    legendLabel: "Craft & Making",
    color: "#facc15",
    Icon: Hammer,
  },
  {
    key: "story",
    label: "Story & Music",
    chipLabel: "Story & Music",
    legendLabel: "Story, Music & Creative Life",
    color: "#ec4899",
    Icon: Music2,
  },
  {
    key: "ai",
    label: "AI & Systems",
    chipLabel: "AI & Systems",
    legendLabel: "AI & Systems",
    color: "#2dd4bf",
    Icon: Cpu,
  },
];

// convenient lookup by key for cards, blend tool, etc.
export const DISCIPLINE_CONFIG = DISCIPLINES.reduce((acc, d) => {
  acc[d.key] = d;
  return acc;
}, {});

/**
 * Big legend row for Projects page “Discipline key”
 */
export function DisciplineLegend() {
  return (
    <div className="discipline-legend">
      {DISCIPLINES.map(({ key, legendLabel, Icon }) => (
        <div key={key} className="discipline-pill">
          <span className={`discipline-pill__icon discipline-icon--${key}`}>
            <Icon size={18} strokeWidth={2.2} />
          </span>
          <span className="discipline-pill__label">{legendLabel}</span>
        </div>
      ))}
    </div>
  );
}

/**
 * Compact icon row on each project card
 *
 * Usage: <DisciplineIconRow disciplines={['web','product','craft']} />
 */
export function DisciplineIconRow({ disciplines }) {
  if (!disciplines || disciplines.length === 0) return null;

  return (
    <div className="discipline-row">
      {disciplines.map((key) => {
        const config = DISCIPLINE_CONFIG[key];
        if (!config) return null;

        const { label, Icon } = config;

        return (
          <div key={key} className="discipline-row__item">
            <span className={`discipline-row__icon discipline-icon--${key}`}>
              <Icon size={15} strokeWidth={2.2} />
            </span>
            <span className="discipline-row__label">{label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default DisciplineIconRow;