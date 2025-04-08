import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

export default function Projects() {
  const containerRef = useRef(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const projects = [
    {
      name: "Ober Artisan Drums",
      logo: "https://i.imgur.com/D0BniTO.png",
      description:
        "A handcrafted drum company built from scratch — featuring a custom e-commerce platform, full inventory and order tracking, and a media-rich product experience that blends storytelling with functionality.",
      tech: "React.js, Firebase, Firestore, Stripe, Node.js, Cloud Functions, Google Cloud",
      site: "https://oberartisandrums.com/",
      code: "null",
      image: "https://i.imgur.com/lycxDAZ.png",
      imageId: "ober-artisan-drums",
    },
    {
      name: "Doberpop",
      logo: "https://i.imgur.com/1nzGA9M.png",
      description:
        "A gourmet popcorn site offering over 40 flavors — complete with full e-commerce functionality and a community recipe-sharing feature designed for fans and snack lovers.",
      tech: "React.js, Ruby on Rails, PostgreSQL, REST APIs, CSS Flexbox, Netlify",
      site: "https://doberpop.netlify.app/",
      code: "https://github.com/daniel-ober/doberpop",
      image: "https://i.imgur.com/FVo119M.png",
      imageId: "doberpop",
    },
    {
      name: "Sunday Driver",
      logo: "https://i.imgur.com/2KjLTZx.png",
      description:
        "A community platform and marketplace for vintage car lovers to list, browse, and connect — featuring searchable listings, real-time user messaging, and custom profile pages.",
      tech: "React.js, Express.js, MongoDB, Node.js, REST APIs, CSS Flexbox",
      site: "https://sundaydriver.netlify.app/",
      code: "https://github.com/arbayer4/car-app",
      image: "https://i.imgur.com/ICX5fh8.png",
      imageId: "sunday-driver",
    },
    {
      name: "WeatherNest",
      logo: "https://i.imgur.com/h742CMv.png",
      description:
        "Real-time weather app with a clean UI and API-driven forecasts, built to demonstrate asynchronous data handling and geolocation features.",
      tech: "React.js, HTML, CSS Flexbox, OpenWeather API, Ajax",
      site: "https://weathernest.netlify.app/",
      code: "https://github.com/daniel-ober/weather-app",
      image: "https://i.imgur.com/SUtrZVQ.png",
      imageId: "weathernest",
    },
    {
      name: "Hot Chicken Heroes",
      logo: "https://i.imgur.com/J71G0vi.png",
      description:
        "A judging and scoring app for hot chicken competitions, featuring structured scorecards, cumulative rankings, and comparison dashboards inspired by competitive tasting formats.",
      tech: "React.js, Custom APIs, Postman, CSS Flexbox, Netlify",
      site: "https://hotchickenheroes.netlify.app/",
      code: "https://github.com/daniel-ober/hotchickenheroes",
      image: "https://i.imgur.com/ePl2IZ4.png",
      imageId: "hot-chicken-heroes",
    },
    {
      name: "Artist ABC",
      logo: "https://i.imgur.com/rj8TLht.png",
      description:
        "A playful music discovery tool that recommends new artists based on your favorites using randomized queries and artist metadata from the AudioDB API.",
      tech: "JavaScript, HTML5, CSS Flexbox, Ajax, AudioDB API",
      site: "https://artist-abc.netlify.app/",
      code: "https://github.com/daniel-ober/artist-abc",
      image: "https://i.imgur.com/1gHVjzS.png",
      imageId: "artist-abc",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveProjectIndex(index);
          }
        });
      },
      {
        rootMargin: "-50% 0px",
        threshold: 0.01,
      }
    );

    const containers =
      containerRef.current?.querySelectorAll(".project-container") || [];
    containers.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-main-container">
      <div className="projects-top-container">
        <h2 className="projects-header">PROJECTS</h2>
        <p className="projects-subtitle">Technologies I use regularly</p>
        <div className="projects-stack-list">
          {[
            ["HTML5", "https://i.imgur.com/T1VVr36.png"],
            ["CSS3", "https://i.imgur.com/wOmpOKH.png"],
            ["JavaScript", "https://i.imgur.com/EoMt8Y9.png"],
            ["React.js", "https://i.imgur.com/zLJ9IwI.png"],
            ["Firebase", "https://i.imgur.com/zxMYyr6.png"],
            ["Node.js", "https://i.imgur.com/o26KUiA.png"],
            ["Express", "https://i.imgur.com/MuU6UQh.png"],
            ["MongoDB", "https://i.imgur.com/IdwBY4V.png"],
            ["PostgreSQL", "https://i.imgur.com/AsV1gaU.png"],
            ["Ruby on Rails", "https://i.imgur.com/pD6WatH.png"],
            ["Ruby", "https://i.imgur.com/XSEVtV2.png"],
            ["Postman", "https://i.imgur.com/Qpt2kJO.png"],
            ["Postico", "https://i.imgur.com/5diFzsJ.png"],
          ].map(([alt, src]) => (
            <img className="skills-icon" key={alt} src={src} alt={alt} />
          ))}
        </div>
        <h5 className="projects-scroll-note">Scroll down to view projects</h5>
      </div>

      <div className="projects-bottom-container" ref={containerRef}>
        {projects.map((project, index) => (
          <div
            className={`project-container ${
              activeProjectIndex === index ? "active-project" : ""
            }`}
            data-index={index}
            key={project.name}
          >
            <div className="project-screenshots-container">
              <img
                className="project-image"
                id={`project-image-${project.imageId}`}
                src={project.image}
                alt={`${project.name.toLowerCase()}-screens`}
              />
            </div>
            <div className="project-details-container">
              <img
                className={`project-logo`}
                src={project.logo}
                alt={`${project.name.toLowerCase()}-logo`}
              />
              <h3 className="project-description">{project.description}</h3>
              <h4>Stack: {project.tech}</h4>
              <div className="project-screenshots-container-mobile">
                <img
                  className="project-image"
                  src={project.image}
                  alt={`${project.name.toLowerCase()}-screens`}
                />
              </div>
              <div className="project-buttons-container">
                <a
                  href={project.site}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="project-button">VIEW SITE</button>
                </a>
                {project.code !== "null" && (
                  <a
                    href={project.code}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button className="project-button">VIEW CODE</button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
