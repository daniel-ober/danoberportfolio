import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <div className='nav-left'>
      <Link to='/'>DAN OBER</Link>
      </div>
      <div className='nav-right'>
        <Link to='/about'>ABOUT</Link>
        <Link to='/projects'>PROJECTS</Link>
        <Link to='/contact'>CONTACT</Link>
      </div>
    </div>
  );
}
