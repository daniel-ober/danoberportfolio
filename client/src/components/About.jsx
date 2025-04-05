import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-main-container">
      <div className="about-left">
        <h2 className="about-header">ABOUT DAN</h2>
        <div className="about-body">
          <img
            className="dan-ober-about-mobile-image"
            src="/danober-portfolio.png"
            alt="dan-ober"
          />
          <p>
            I'm a full-stack web developer and creative problem solver with a
            background in customer success, leadership, and technical solutions
            across industries like automotive, finance, HR, and entertainment.
          </p>
          <p>
            My prior experience leading cross-functional teams shaped how I
            approach collaboration, communication, and user-focused development.
            I thrive in environments that prioritize empathy, iteration, and
            creative thinking.
          </p>
          <p>
            Beyond code, I’m a lifelong musician and builder. I recently
            launched <strong>Ober Artisan Drums</strong>, a handcrafted drum
            company that blends product design, storytelling, and technical
            infrastructure — from custom-built checkout systems to brand
            development, media, and logistics.
          </p>
          <p>
            When I’m not building, you’ll find me writing music, chasing new
            ideas, or trying to beat my fastest Rubik’s Cube solve. I’m also big
            on live music — whether it’s catching a local show, hitting a
            festival, or digging for new artists to obsess over.
          </p>
          <p>
            I'm seeking a full-time opportunity on a collaborative team where I
            can grow, solve meaningful problems, and keep building toward better
            experiences — for users and for people behind the product.
          </p>
          <p className="about-learn-more">
            Interested in learning more? <br />
            <Link to="/contact">Let’s connect</Link>
          </p>
          <p className="about-resume">
            Download my resume{" "}
            <a
              href="https://drive.google.com/file/d/10sePbHSwLsn3435jSuLmhhQ-4BsAM8NN/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
              download
            >
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
