import React from "react";
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="about-container">
      <h2>ABOUT</h2>
      <p>Energetic and creative self-starter and entrepreneur seeking opportunity to expand personal and professional skills and contribute to a team-oriented environment. Excellent communication skills with proven abilities in fostering and retaining client relationships.
        <br/><br/>
      Interested in learning more? <Link to='/contact'>Let's connect.</Link>
      </p>

    </div>
  );
}
