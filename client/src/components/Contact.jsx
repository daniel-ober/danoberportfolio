import React from "react";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Let's Connect.</h2>
      <p>
        Fill out the form below, or by emailing me at{" "}
        <a href="mailto:danielober84@gmail.com">danielober84@gmail.com</a>.
      </p>
      <form className="form-container">
        <label>Name:</label>
        <input required name="name" type="text" placeholder="Enter your name" />
        <label>Email:</label>
        <input
          required
          name="email"
          type="email"
          placeholder="Enter your email address"
        />
        <label>Phone (optional):</label>
        <input name="phone" type="tel" placeholder="Enter your phone number" />
        <label>Message:</label>
        <input
          required
          name="message"
          type="text"
          placeholder="Enter your message"
          min="50"
          max="500"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
