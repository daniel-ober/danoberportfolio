// src/pages/projects/3d/AcornNecklacePendant.js
import React from "react";
import ProjectDetailLayout from "../ProjectDetailLayout";

export default function AcornNecklacePendant() {
  return (
    <ProjectDetailLayout
      eyebrow="Case Study · 3D Design & Printing"
      title="Acorn Necklace Pendant"
      role="Concept · Print-ready model"
      stack="Organic sculpting · Resin printing"
      summary="Small-form decorative pendant designed for resin printing with organic curves
and clean, support-friendly geometry."
    >
      <p>
        This shell will later cover the sculpting approach, how the internal
        structure was hollowed for resin, and the decisions that keep supports
        minimal while preserving detail.
      </p>
    </ProjectDetailLayout>
  );
}