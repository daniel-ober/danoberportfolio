import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__content">
        <h2 className="contact__heading">Let's Connect</h2>
        <p className="contact__text">
          Please fill out the form below or send an email to{" "}
          <a
            href="mailto:danober.dev@gmail.com"
            className="contact__email"
          >
            danober.dev@gmail.com
          </a>
        </p>

        <form
          className="contact__form"
          action="https://getform.io/f/0f287cad-2400-48da-8e33-20366c4a5093"
          method="POST"
        >
          <label htmlFor="name">Name:</label>
          <input
            required
            name="name"
            type="text"
            id="name"
            placeholder="Enter your name"
          />

          <label htmlFor="email">Email:</label>
          <input
            required
            name="email"
            type="email"
            id="email"
            placeholder="Enter your email"
          />

          <label htmlFor="phone">Phone (optional):</label>
          <input
            name="phone"
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            required
            name="message"
            id="message"
            placeholder="Enter your message"
            maxLength="4500"
          />

          <button type="submit" className="contact__submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}