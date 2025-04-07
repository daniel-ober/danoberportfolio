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
        "A handcrafted drum company built from scratch — including the custom e-commerce system, inventory + order management, and media-rich product experience. Designed for both storytelling and seamless checkout.",
      tech: "React.js, Firebase (Auth, Firestore, Functions), Stripe, Node.js, Express, Tailwind CSS, Cloud Storage, Deployment via Netlify + Google Cloud",
      site: "https://oberartisandrums.com/",
      code: "null",
      image: "https://i.imgur.com/lycxDAZ.png",
      imageId: "ober-artisan-drums",
    },
    {
      name: "Doberpop",
      logo: "https://i.imgur.com/1nzGA9M.png",
      description:
        "Doberpop is a gourmet popcorn e-commerce site offering over 40 flavors and a community recipe-sharing feature.",
      tech: "React.js, Ruby on Rails, PostgreSQL, CSS Flexbox",
      site: "https://doberpop.netlify.app/",
      code: "https://github.com/daniel-ober/doberpop",
      image: "https://i.imgur.com/FVo119M.png",
      imageId: "doberpop",
    },
    {
      name: "Sunday Driver",
      logo: "https://i.imgur.com/2KjLTZx.png",
      description:
        "Marketplace for vintage car lovers to list, browse, and connect directly via listings.",
      tech: "React.js, Express.js, MongoDB, Node.js, CSS Flexbox",
      site: "https://sundaydriver.netlify.app/",
      code: "https://github.com/arbayer4/car-app",
      image: "https://i.imgur.com/ICX5fh8.png",
      imageId: "sunday-driver",
    },
    {
      name: "WeatherNest",
      logo: "https://i.imgur.com/h742CMv.png",
      description:
        "Real-time weather updates powered by OpenWeather API with user-friendly UI.",
      tech: "React.js, HTML, CSS Flexbox, Ajax, OpenWeather API",
      site: "https://weathernest.netlify.app/",
      code: "https://github.com/daniel-ober/weather-app",
      image: "https://i.imgur.com/SUtrZVQ.png",
      imageId: "weathernest",
    },
    {
      name: "Hot Chicken Heroes",
      logo: "https://i.imgur.com/J71G0vi.png",
      description:
        "Score and rate hot chicken meals using a structured judging system inspired by competitive formats.",
      tech: "React.js, External API, CSS Flexbox, Postman",
      site: "https://hotchickenheroes.netlify.app/",
      code: "https://github.com/daniel-ober/hotchickenheroes",
      image: "https://i.imgur.com/ePl2IZ4.png",
      imageId: "hot-chicken-heroes",
    },
    {
      name: "Artist ABC",
      logo: "https://i.imgur.com/rj8TLht.png",
      description:
        "Discover new music artists through a randomized exploration experience based on your favorites.",
      tech: "JavaScript, HTML, CSS Flexbox, Ajax, AudioDB API",
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
                className={`project-logo-${project.imageId}`}
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
