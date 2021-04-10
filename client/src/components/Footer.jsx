import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <NavLink className="footer-logo" to="/">
        FOOTER - DAN OBER
      </NavLink>
      <div className="footer-social">
        <a href="https://github.com/daniel-ober">Footer - My GitHub</a>
      </div>
    </footer>
  );
}

export default Footer;
