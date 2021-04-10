import React from "react";
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="main-container">
      <h3>DANOBER</h3>
      <br/>
      <h1>Problem Solver.</h1>
      <h1>Creative Designer.</h1>
      <h1>Mission Driven.</h1>
      <p>
      Energetic and creative self-starter and entrepreneur seeking opportunity to expand personal and professional skills and contribute to a team-oriented environment. Excellent communication skills with proven abilities in fostering and retaining client relationships.
      <br/><br/>
      <Link to='/about'>Learn more</Link>
      </p>
    </div>
  );
}
