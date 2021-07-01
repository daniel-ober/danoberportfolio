import React from "react";

export default function Projects() {
  return (
    <div className="projects-main-container">
      <div className="projects-top-container">
        <h2 className="projects-header">PROJECTS</h2>
        <p>Skills used in creating projects</p>
        <div className="projects-stack-list">
          <img className='skills-icon' src='https://i.imgur.com/T1VVr36.png' alt='HTML5'></img>
          <img className='skills-icon' src='https://i.imgur.com/wOmpOKH.png' alt='CSS3'></img>
          <img className='skills-icon' src='https://i.imgur.com/EoMt8Y9.png' alt='JavaScript'></img>
          <img className='skills-icon' src='https://i.imgur.com/zLJ9IwI.png' alt='React.js'></img>
          <img className='skills-icon' src='https://i.imgur.com/o26KUiA.png' alt='Node.js'></img>
          <img className='skills-icon' src='https://i.imgur.com/XSEVtV2.png' alt='Ruby'></img>
          <img className='skills-icon' src='https://i.imgur.com/pD6WatH.png' alt='Ruby on Rails'></img>
          <img className='skills-icon' src='https://i.imgur.com/mV3pOhD.png' alt='Express'></img>
          <img className='skills-icon' src='https://i.imgur.com/IdwBY4V.png' alt='MongoDB'></img>
          <img className='skills-icon' src='https://i.imgur.com/AsV1gaU.png' alt='postgreSQL'></img>
          <img className='skills-icon' src='https://i.imgur.com/Qpt2kJO.png' alt='Postman'></img>
          <img className='skills-icon' src='https://i.imgur.com/5diFzsJ.png' alt='Postico'></img>
          {/* <li>CSS3</li>
          <li>Javascript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Ruby on Rails</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Postman</li>
          <li>Postico</li> */}
        </div>
        <br />
        <h3>Scroll down to view projects!</h3>
      </div>
      <div className="projects-bottom-container">
        <div className="project-container">
          <div className="project-screenshots-container">
            <img
              className="project-image"
              id="project-image-doberpop"
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
              makes Doberpop features over 40 popcorn flavors, while giving popcorn lovers
              the freedom to share their very own recipes and wildest flavor
              ideas with the rest of the community. <br />
              <br />
            </h3>
              <h4>
              Stack: React.js, Ruby on Rails, postgreSQL, CSS Flexbox
            </h4>
            <div className="project-screenshots-container-mobile">
              <img
                className="project-image"
                src="https://i.imgur.com/FVo119M.png"
                alt="doberpop-screens"
              ></img>
            </div>
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
          <div className="project-details-container">
            <img
              className="project-logo-sunday-driver"
              src="https://i.imgur.com/2KjLTZx.png"
              alt="sunday-driver-logo"
            ></img>
            <h3 className="project-description">
              Sunday Driver gives vintage car enthusiasts the ability to buy and
              sell vehicles from one another. Sellers can list their vehicle(s)
              for sale through a simple signup process. Car shoppers have the ability to view selling vehicles and
              contact the seller via email or phone.
            </h3>
            <h4>
              Stack: React.js, Express.js, MongoDB, Node, CSS Flexbox
            </h4>
            <div className="project-screenshots-container-mobile">
              <img
                className="project-image"
                src="https://i.imgur.com/ICX5fh8.png"
                alt="sunday-driver-screens"
              ></img>
            </div>
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
              id="project-image-sunday-driver"
              src="https://i.imgur.com/ICX5fh8.png"
              alt="sunday-driver-screens"
            ></img>
          </div>
        </div>
        <div className="project-container">
          <div className="project-screenshots-container">
            <img
              className="project-image"
              id="project-image-artist-abc"
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
            <h4>
              Stack: Javascript, HTML, CSS Flexbox, Ajax, External API (AudioDB)
            </h4>
            <div className="project-screenshots-container-mobile">
              <img
                className="project-image"
                src="https://i.imgur.com/1gHVjzS.png"
                alt="artist-abc-screens"
              ></img>
            </div>
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
            <h4>
              Stack: React.js, External API, CSS Flexbox, Postman API testing
            </h4>
            <div className="project-screenshots-container-mobile">
              <img
                className="project-image"
                src="https://i.imgur.com/ePl2IZ4.png"
                alt="hot-chicken-heroes-screens"
              ></img>
            </div>
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
              id="project-image-hot-chicken-heroes"
              src="https://i.imgur.com/ePl2IZ4.png"
              alt="hot-chicken-heroes-screens"
            ></img>
            <script scr=""></script>
          </div>
        </div>
      </div>
    </div>
  );
}
