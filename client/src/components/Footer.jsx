import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__left">
        <span>© {currentYear} Dan Ober</span>
      </div>

      {/* <div className="footer__center">
        <nav className="footer__sitemap">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div> */}

      <div className="footer__right">
      <a
          href="https://www.linkedin.com/in/daniel-ober/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="footer__icon"
            src="https://i.imgur.com/uU5P9Ck.png"
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://github.com/daniel-ober"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="footer__icon"
            src="https://i.imgur.com/aoWzNEu.png"
            alt="GitHub"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;