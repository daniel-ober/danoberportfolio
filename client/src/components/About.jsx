import React from "react";
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="about-container">
      <div className='about-left'>
      <p>I’m a full-stack web developer with a background in the auto, finance, HR, retail, entertainment, health and benefits industries. As a recent software engineer immersive graduate, I’m excited to combine my knowledge with the skills and experience from my previous career as a Manager of Customer Success.
      <p>My leadership skills have given me the ability to build strong teams with shared vision. I lead with empathy and an open mind when faced with challenges. The ability to lead projects in a cross-functional environment has taught me the value of team collaboration and working towards a single mission.</p>
      <p>In the next phase of my software engineering career, I want to be part of a smaller team whose vision it is to continuously improve the user experience. Ideally, I would love to work on a team that follows best practices like sandbox testing and pair programming, to help me learn and grow as a developer.</p>
      <br/>
      Interested in learning more? <Link to='/contact'>Let's connect.</Link>
      </p>
      </div>
      {/* <div className='about-right'>
        <img className='dan-ober'src='https://i.imgur.com/HTUD8gZ.png' alt='dan-ober'></img>
      </div> */}
    </div>
  );
}
