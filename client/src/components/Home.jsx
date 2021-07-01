import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-main-container">
      <h2 className='home-header'>Mission Driven.</h2>
      <h2 className='home-header'>Creative Designer.</h2>
      <h2 className='home-header'>Problem Solver.</h2>
      <p className='home-body'>
        Energetic and creative self-starter seeking opportunity
        to expand personal and professional skills. Having built my career around customer success and account management, I bring an empathetic, user-focused, and cross-collaborative perspective to my work as a web developer. Some of my more technical skills include HTML5, CSS3, Javascript, React.js, Node.js, Ruby on Rails, Express, MongoDB, RESTful API, and more.
        <br />
        <br />
        <Link to="/about">Learn more</Link>
      </p>
    </div>
  );
}
