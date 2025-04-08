import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

export default function Projects() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      name: "Ober Artisan Drums",
      logo: "https://i.imgur.com/D0BniTO.png",
      description:
        "A handcrafted drum company built from scratch — featuring a custom e-commerce platform, full inventory and order tracking, and a media-rich product experience that blends storytelling with functionality.",
      tech: "React.js, Firebase, Stripe, Node.js, Cloud Functions",
      site: "https://oberartisandrums.com/",
      code: "null",
      image: "https://i.imgur.com/lycxDAZ.png",
    },
    {
      name: "Doberpop",
      logo: "https://i.imgur.com/1nzGA9M.png",
      description:
        "A gourmet popcorn brand with over 40 flavors — built with a fully functional e-commerce system and an interactive recipe-sharing feature that blends playful design with practical community tools.",
      tech: "React.js, Ruby on Rails, PostgreSQL, REST APIs, Netlify",
      site: "https://doberpop.netlify.app/",
      code: "https://github.com/daniel-ober/doberpop",
      image: "https://i.imgur.com/FVo119M.png",
    },
    {
      name: "Sunday Driver",
      logo: "https://i.imgur.com/2KjLTZx.png",
      description:
        "A classic car marketplace and community platform — built with real-time messaging, listing tools, and profile customization to support seamless buyer-seller interactions and enthusiast discovery.",
      tech: "React.js, Express.js, MongoDB, Node.js, REST APIs",
      site: "https://sundaydriver.netlify.app/",
      code: "https://github.com/arbayer4/car-app",
      image: "https://i.imgur.com/ICX5fh8.png",
    },
    {
      name: "WeatherNest",
      logo: "https://i.imgur.com/h742CMv.png",
      description:
        "A sleek weather app delivering real-time forecasts with geolocation and responsive UI — showcasing clean design, asynchronous API handling, and a minimalist experience for everyday daily use.",
      tech: "React.js, HTML, CSS Flexbox, OpenWeather API, Ajax",
      site: "https://weathernest.netlify.app/",
      code: "https://github.com/daniel-ober/weather-app",
      image: "https://i.imgur.com/SUtrZVQ.png",
    },
    {
      name: "Hot Chicken Heroes",
      logo: "https://i.imgur.com/J71G0vi.png",
      description:
        "A competitive scoring app built for hot chicken judges — with structured scorecards, real-time rankings, detailed analytics, and dashboard insights that combine data-driven evaluation with flavorful UX.",
      tech: "React.js, Custom APIs, Postman, CSS Flexbox, Netlify",
      site: "https://hotchickenheroes.netlify.app/",
      code: "https://github.com/daniel-ober/hotchickenheroes",
      image: "https://i.imgur.com/ePl2IZ4.png",
    },
  ];

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const width = containerRef.current.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  const scrollToIndex = (index) => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    containerRef.current.scrollTo({
      left: index * width,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const ref = containerRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (ref) {
        ref.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="projects-page-container">
      <div className="projects-header-section">
        <h2 className="projects-title">PROJECTS</h2>
        <p className="projects-subtitle">Swipe or click dots to explore</p>
      </div>

      <div className="carousel-dots">
        {projects.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${activeIndex === idx ? "active" : ""}`}
            onClick={() => scrollToIndex(idx)}
          />
        ))}
      </div>

      <div className="carousel-container" ref={containerRef}>
        {projects.map((project, index) => (
          <div className="carousel-slide" key={index}>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-buttons">
              <a href={project.site} target="_blank" rel="noreferrer">
                <button className="project-button">VIEW SITE</button>
              </a>
              {project.code !== "null" && (
                <a href={project.code} target="_blank" rel="noreferrer">
                  <button className="project-button">VIEW CODE</button>
                </a>
              )}
            </div>
            <h4 className="project-stack">Stack: {project.tech}</h4>
            <img className="project-image" src={project.image} alt="project" />
          </div>
        ))}
      </div>
    </div>
  );
}
