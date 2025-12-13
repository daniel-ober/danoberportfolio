// src/components/DisciplineIcons.jsx
import React from "react";
import { DISCIPLINES } from "../config/disciplines";
import { Monitor, Boxes, Puzzle, Hammer, Music2, Cpu } from "lucide-react";
import "./DisciplineIcons.css"; // keep or adjust if you’re using a different CSS path

// Map discipline key -> lucide icon
const ICON_COMPONENTS = {
  web: Monitor,
  product: Boxes,
  problem: Puzzle,
  craft: Hammer,
  story: Music2,
  ai: Cpu,
};

function getDiscipline(key) {
  return DISCIPLINES.find((d) => d.key === key);
}

/**
 * Small row of discipline icons for a project / result card.
 *
 * Usage:
 *   <DisciplineIconRow disciplines={["web", "product", "craft"]} />
 *
 * Props:
 *   - disciplines: array of discipline keys
 *   - size: "sm" | "md" (optional, defaults to "md")
 */
export default function DisciplineIconRow({ disciplines = [], size = "md" }) {
  if (!disciplines.length) return null;

  return (
    <ul className={`disc-row disc-row--${size}`}>
      {disciplines.map((key) => {
        const d = getDiscipline(key);
        if (!d) return null;

        const Icon = ICON_COMPONENTS[key] || Monitor;

        return (
          <li key={key} className="disc-row__item">
            <span
              className="disc-row__badge"
              style={{ borderColor: d.color, color: d.color }}
              aria-label={d.legendLabel}
              title={d.legendLabel}
            >
              <Icon className="disc-row__icon" aria-hidden="true" />
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Legend row showing all disciplines with icon + label.
 *
 * Usage:
 *   <DisciplineLegend />
 */
export function DisciplineLegend() {
  return (
    <div className="disc-legend">
      <h3 className="disc-legend__title">Discipline key</h3>
      <ul className="disc-legend__list">
        {DISCIPLINES.map((d) => {
          const Icon = ICON_COMPONENTS[d.key] || Monitor;
          return (
            <li key={d.key} className="disc-legend__item">
              <span
                className="disc-legend__badge"
                style={{ borderColor: d.color, color: d.color }}
              >
                <Icon className="disc-legend__icon" aria-hidden="true" />
              </span>
              <span className="disc-legend__label">{d.legendLabel}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}