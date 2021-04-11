import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
      <NavLink className="footer-logo" to="/">
        DANOBER
      </NavLink>
      <div className="footer-social">
        <a href="https://github.com/daniel-ober">GitHub</a>
        <a href="https://www.linkedin.com/in/daniel-ober/">Linkedin</a>
      </div>
    </div>
  );
}

export default Footer;
