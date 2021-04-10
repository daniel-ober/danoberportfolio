import React from "react";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Let's Connect.</h2>
      <p>
        Fill out the form below, or by emailing me at{" "}
        <a href="mailto:danielober84@gmail.com">danielober84@gmail.com</a>.
      </p>
      <form
        className="form-container"
        action="https://getform.io/f/0f287cad-2400-48da-8e33-20366c4a5093" 
        method="POST"
      >
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
        <textarea
          required
          name="message"
          type="text"
          placeholder="Enter your message"
        //   minLength="25"
          maxLength="4500"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
