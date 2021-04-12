import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
      {/* <NavLink className="footer-logo" to="/">
        DAN<strong>OBER</strong>
      </NavLink> */}
      <div className="footer-social">
        <a href="https://github.com/daniel-ober" rel="noopener noreferrer" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/daniel-ober/" rel="noopener noreferrer" target="_blank">Linkedin</a>
      </div>
    </div>
  );
}

export default Footer;
