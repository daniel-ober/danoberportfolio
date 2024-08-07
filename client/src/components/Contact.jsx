import React from "react";

export default function Contact() {
  return (
    <div className="contact-main-container">
      <h2 className='contact-header'>LET'S CONNECT</h2>
      <p className="contact-callout">
        Please fill out the form below or send an email to {" "}
        <a href="mailto:danober.dev@gmail.com" className='my-email-address'>danober.dev@gmail.com</a>
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
        <button className="submit-button" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
