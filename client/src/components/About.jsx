import React from "react";
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="about-container">
      <div className='about-left'>
      <h2>ABOUT</h2>
      <p>Energetic and creative self-starter and entrepreneur seeking opportunity to expand personal and professional skills and contribute to a team-oriented environment. Excellent communication skills with proven abilities in fostering and retaining client relationships.
        <br/><br/>
      Interested in learning more? <Link to='/contact'>Let's connect.</Link>
      </p>
      </div>
      <div className='about-right'>
        <img className='dan-ober'src='https://i.imgur.com/HTUD8gZ.png' alt='dan-ober'></img>
      </div>
    </div>
  );
}
