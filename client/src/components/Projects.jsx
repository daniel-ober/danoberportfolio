import React from "react";

export default function Projects() {
  return (
    <div className="projects-main-container">
      <div className="projects-top-container">
        <h2 className="projects-header">PROJECTS</h2>
        <p>Stacks and Tools used in creating projects</p>
        <ul className="projects-stack-list">
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
        <br />
        <h3>Scroll down to view projects!</h3>
      </div>
      <div className="projects-bottom-container">
        <div className="project-container">
          <div className="project-screenshots-container">
            <img
              className="project-image"
              src="https://i.imgur.com/FVo119M.png"
              alt="doberpop-screens"
            ></img>
          </div>
          <div className="project-details-container">
            <img
              className="project-logo-doberpop"
              src="https://i.imgur.com/1nzGA9M.png"
              alt="doberpop-logo"
            ></img>
            <h3 className="project-description">
              Doberpop is an upcoming Gourmet Popcorn E-commerce shop. What
              makes Doberpop so unique is the variety of flavors they have to
              offer, featuring over 40 flavors! Doberpop gives popcorn lovers
              the freedom to share their very own recipes and wildest flavor
              ideas with the rest of the community. <br />
              <br />
            </h3>
            <div className="project-buttons-container">
              <a
                href="https://doberpop.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="project-button">VIEW SITE</button>
              </a>
              <a
                href="https://github.com/daniel-ober/doberpop"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="project-button">VIEW CODE</button>
              </a>
            </div>
          </div>
        </div>
        <div className="project-container">
        <div className="project-screenshots-container-mobile">
            <img
              className="project-image"
              src="https://i.imgur.com/ICX5fh8.png"
              alt="sunday-driver-screens"
            ></img>
          </div>
          <div className="project-details-container">
            <img
              className="project-logo-sunday-driver"
              src="https://i.imgur.com/2KjLTZx.png"
              alt="sunday-driver-logo"
            ></img>
            <h3 className="project-description">
              Sunday Driver gives vintage car enthusiasts the ability to buy and
              sell vehicles from one another. Sellers can list their vehicle(s)
              for sale through a simple signup process, then providing a
              vehicle’s details such as the make, model, year, price, image,
              etc. Car shoppers have the ability to view selling vehicles and
              contact the seller via email or phone.
            </h3>
            <div className="project-buttons-container">
              <a
                href="https://sundaydriver.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="project-button">VIEW SITE</button>
              </a>
              <a
                href="https://github.com/arbayer4/car-app"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="project-button">VIEW CODE</button>
              </a>
            </div>
          </div>
          <div className="project-screenshots-container">
            <img
              className="project-image"
              src="https://i.imgur.com/ICX5fh8.png"
              alt="sunday-driver-screens"
            ></img>
          </div>
        </div>
        <div className="project-container">
          <div className="project-screenshots-container">
            <img
              className="project-image"
              src="https://i.imgur.com/1gHVjzS.png"
              alt="artist-abc-screens"
            ></img>
          </div>
          <div className="project-details-container">
            <img
              className="project-logo-artist-abc"
              src="https://i.imgur.com/rj8TLht.png"
              alt="artist-abc-logo"
            ></img>
            <h3 className="project-description">
              ARTIST ABC is a simple to use tool for music lovers to learn more
              about their favorite artists and discover new music artists via a
              randomizer algorithm based off the music they like (coming soon!).
            </h3>
            <div className="project-buttons-container">
              <a
                href="https://artist-abc.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="project-button">VIEW SITE</button>
              </a>
              <a
                href="https://github.com/daniel-ober/artist-abc"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="project-button">VIEW CODE</button>
              </a>
            </div>
          </div>
        </div>
        <div className="project-container">
        <div className="project-screenshots-container-mobile">
            <img
              className="project-image"
              src="https://i.imgur.com/ePl2IZ4.png"
              alt="hot-chicken-heroes-screens"
            ></img>
          </div>
          <div className="project-details-container">
            <img
              className="project-logo-hot-chicken-heroes"
              src="https://i.imgur.com/J71G0vi.png"
              alt="hot-chicken-heroes-logo"
            ></img>
            <h3 className="project-description">
              Hot Chicken Heroes gives hot chicken enthusiasts the ability to
              share their food scores/notes via a judging slip - similar to a
              scoring slip you'd see in the big leagues of competitive judging.
            </h3>
            <div className="project-buttons-container">
              <a
                href="https://hotchickenheroes.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="project-button">VIEW SITE</button>
              </a>
              <a
                href="https://github.com/daniel-ober/hotchickenheroes"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="project-button">VIEW CODE</button>
              </a>
            </div>
          </div>
          <div className="project-screenshots-container">
            <img
              className="project-image"
              src="https://i.imgur.com/ePl2IZ4.png"
              alt="hot-chicken-heroes-screens"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
