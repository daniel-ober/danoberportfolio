import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-copyright">
        © {currentYear} Dan Ober
      </div>
      <div className="footer-links">
        <a
          href="https://github.com/daniel-ober"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="social-github-logo"
            src="https://i.imgur.com/j9xJnr7.png"
            alt="github-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-ober/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="social-linkedin-logo"
            src="https://i.imgur.com/mJqNCev.png"
            alt="linkedin-icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;