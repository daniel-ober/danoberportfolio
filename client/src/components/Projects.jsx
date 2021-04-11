import React from "react";

export default function Projects() {
  return (
    <div className="projects-container">
      <h2>PROJECTS</h2>
      <div className="sunday-driver-main-container">
        <div className="sunday-driver-container-left">
          <img
            className="project-logo-1"
            src="https://i.imgur.com/2KjLTZx.png"
            alt="sunday-driver-logo"
          ></img>
        </div>
        <div className="sunday-driver-container-right">
          <a href="https://sundaydriver.netlify.app/">
            <img
              className="project-image"
              src="https://i.imgur.com/ICX5fh8.png"
              alt="sunday-driver-screens"
            ></img>
          </a>
        </div>
      </div>
      <div className="doberpop-main-container">
        <div className="doberpop-container-left">
          <img
            className="project-logo-2"
            src="https://i.imgur.com/1nzGA9M.png"
            alt="doberpop-logo"
          ></img>
        </div>
        <div className="doberpop-container-right">
          <a href="https://doberpop.netlify.app/">
            <img
              className="project-image"
              src="https://i.imgur.com/FVo119M.png"
              alt="doberpop-screens"
            ></img>
          </a>
        </div>
      </div>
      <div className="artist-abc-main-container">
        <div className="abc-artist-container-left">
          <img
            className="project-logo-3"
            src="https://i.imgur.com/rj8TLht.png"
            alt="artist-abc-logo"
          ></img>
        </div>
        <div className="abc-artist-container-right">
          <a href="https://artist-abc.netlify.app/">
            <img
              className="project-image"
              src="https://i.imgur.com/1gHVjzS.png"
              alt="artist-abc-screens"
            ></img>
          </a>
        </div>
      </div>

      <h3>Hot Chicken Heroes</h3>
    </div>
  );
}
