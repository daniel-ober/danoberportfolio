import React from "react";
// import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-copyright'>Copyright &copy; 2021, Dan Ober</div>
      <div className='footer-links'>
        <a href="https://github.com/daniel-ober" rel="noopener noreferrer" target="_blank"><img src='https://i.imgur.com/j9xJnr7.png' alt='linkedin-icon'></img></a>
        <a href="https://www.linkedin.com/in/daniel-ober/" rel="noopener noreferrer" target="_blank"><img src='https://i.imgur.com/mJqNCev.png' alt='github-icon'></img></a>
        </div>
    </div>
  );
}

export default Footer;
