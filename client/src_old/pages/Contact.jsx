// src/pages/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later you can hook this up to Formspree, Netlify, Firebase, etc.
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <div className="contact__intro">
        <h1 className="contact__title">Let’s work together</h1>
        <p className="contact__subtitle">
          Whether you need a web app, technical workflow, 3D prototype,
          drum sessions, or help telling a story with sound and visuals,
          this is the best place to start.
        </p>
        <p className="contact__notes">
          Share a bit about what you’re working on. I’ll review and follow up
          with next steps, questions, or a time to talk.
        </p>
      </div>

      <div className="contact__layout">
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className="contact__field contact__field--split">
            <div>
              <label htmlFor="type">What are you looking for?</label>
              <select id="type" name="type" defaultValue="">
                <option value="" disabled>
                  Choose an option
                </option>
                <option value="web">Web / software project</option>
                <option value="tech">
                  Technical workflows / customer success
                </option>
                <option value="3d">3D design &amp; printing</option>
                <option value="music">Session drums / audio / mixing</option>
                <option value="scoring">Scoring / composition</option>
                <option value="photo">Photography / visual work</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div>
              <label htmlFor="timeline">Rough timeline</label>
              <select id="timeline" name="timeline" defaultValue="">
                <option value="" disabled>
                  Choose a timeframe
                </option>
                <option value="soon">As soon as possible</option>
                <option value="1-2months">Next 1–2 months</option>
                <option value="3plus">3+ months out</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="details">Tell me about the project</label>
            <textarea
              id="details"
              name="details"
              rows="5"
              placeholder="What are you trying to build, fix, or improve?"
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="how">How did you find my work?</label>
            <input
              id="how"
              name="how"
              type="text"
              placeholder="Referral, social media, search, etc."
            />
          </div>

          <button type="submit" className="contact__submit">
            Send message
          </button>

          {submitted && (
            <p className="contact__confirmation">
              Thanks for reaching out — I’ll get back to you as soon as I can.
            </p>
          )}
        </form>

        <aside className="contact__sidebar">
          <h2>Typical ways I help</h2>
          <ul>
            <li>Designing and building web apps or internal tools</li>
            <li>Untangling technical workflows and customer journeys</li>
            <li>Designing 3D jigs, fixtures, and small-batch prints</li>
            <li>Recording drum tracks or mixing existing sessions</li>
            <li>Writing music and cues for film, video, or podcasts</li>
            <li>Creating drum / product photography and visuals</li>
          </ul>

          <div className="contact__direct">
            <p>Prefer email?</p>
            <a href="mailto:danoberdev@gmail.com">danober.dev@gmail.com</a>
          </div>
        </aside>
      </div>
    </div>
  );
}