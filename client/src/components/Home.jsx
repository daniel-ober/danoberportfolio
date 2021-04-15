import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-main-container">
      <h2 className='home-header'>Mission Driven.</h2>
      <h2 className='home-header'>Creative Designer.</h2>
      <h2 className='home-header'>Problem Solver.</h2>
      <p className='home-body'>
        Energetic and creative self-starter and entrepreneur seeking opportunity
        to expand personal and professional skills and contribute to a
        team-oriented environment. Excellent communication skills with proven
        abilities in fostering and retaining client relationships.
        <br />
        <br />
        <Link to="/about">Learn more</Link>
      </p>
    </div>
  );
}
