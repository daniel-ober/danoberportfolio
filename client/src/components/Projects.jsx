import React from "react";

export default function Projects() {
  return (
    <div className="projects-main-container">
      <h2>PROJECTS</h2>
      <p>test test test</p>
      <ul className="stack-list">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Ruby on Rails</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Visual Studio Code</li>
        <li>Git</li>
        <li>Postman</li>
        <li>Postico</li>
      </ul>
      <div className="project-container-a">
        <div className="doberpop-container-left">
          <a
            href="https://doberpop.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="project-image"
              src="https://i.imgur.com/FVo119M.png"
              alt="doberpop-screens"
            ></img>
          </a>
        </div>
        <div className="doberpop-container-right">
          <img
            className="project-logo-doberpop"
            src="https://i.imgur.com/1nzGA9M.png"
            alt="doberpop-logo"
          ></img>
          <h3>
            Doberpop is an upcoming Gourmet Popcorn E-commerce shop. What makes
            Doberpop so unique is the variety of flavors they have to offer,
            featuring over 40 flavors! Doberpop gives popcorn lovers the freedom
            to share their very own recipes and wildest flavor ideas with the
            rest of the community. <br />
            <br />
            More info coming soon...
          </h3>
        </div>
      </div>
      <div className="project-container-b">
        <div className="sunday-driver-container-left">
          <img
            className="project-logo-sunday-driver"
            src="https://i.imgur.com/2KjLTZx.png"
            alt="sunday-driver-logo"
          ></img>
          <h3>
            Sunday Driver gives vintage car enthusiasts the ability to buy and
            sell vehicles from one another. Sellers can list their vehicle(s)
            for sale through a simple signup process, then providing a vehicle’s
            details such as the make, model, year, price, image, etc. Car
            shoppers have the ability to view selling vehicles and contact the
            seller via email or phone.
          </h3>
        </div>
        <div className="sunday-driver-container-right">
          <a
            href="https://sundaydriver.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="project-image"
              src="https://i.imgur.com/ICX5fh8.png"
              alt="sunday-driver-screens"
            ></img>
          </a>
        </div>
      </div>
      <div className="project-container-a">
        <div className="abc-artist-container-left">
          <a
            href="https://artist-abc.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="project-image"
              src="https://i.imgur.com/1gHVjzS.png"
              alt="artist-abc-screens"
            ></img>
          </a>
        </div>
        <div className="artist-abc-container-right">
          <img
            className="project-logo-artist-abc"
            src="https://i.imgur.com/rj8TLht.png"
            alt="artist-abc-logo"
          ></img>
          <h3>
            ARTIST ABC is a simple to use tool for music lovers to learn more
            about their favorite artists and discover new music artists via a
            randomizer algorithm based off the music they like (coming soon!).
          </h3>
        </div>
      </div>
      <div className="project-container-b">
        <div className="hot-chicken-heroes-container-left">
          <img
            className="project-logo-hot-chicken-heroes"
            src="https://i.imgur.com/b76cn41.png"
            alt="hot-chicken-heroes-logo"
          ></img>
          <h3>
            Hot Chicken Heroes gives hot chicken enthusiasts the ability to
            share their food scores/notes via a judging slip - similar to a
            scoring slip you'd see in the big leagues of competitive judging.
          </h3>
        </div>
        <div className="hot-chicken-heroes-container-right">
          <a
            href="https://hotchickenheroes.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="project-image"
              src="https://i.imgur.com/ePl2IZ4.png"
              alt="hot-chicken-heroes-screens"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
