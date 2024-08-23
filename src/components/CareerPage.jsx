import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const CareerPage = ({ closeForm }) => {
  const [MessageSent, setMessageSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_r1nucfb", "template_xzlxswt", form.current, {
        publicKey: "Yl1bTvOMZIGy68fGd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessageSent(true);
          form.current.reset(); // Reset the form fields
          setTimeout(() => setMessageSent(false), 2000); // Change MessageSent state back to false after 5 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="section-2-contact-us">
      <div className="contact-form-wrapper">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <p className="contact-form-title">Let's Connect</p>
          <input
            className="contact-form-input name"
            type="text"
            name="from_name"
            placeholder="Your Name"
          />

          <input
            className="contact-form-input email"
            type="email"
            name="from_email"
            placeholder="Your Email"
          />

          <input
            className="contact-form-input contact"
            type="text"
            name="from_contact"
            placeholder="Your Contact"
          />

          <textarea
            className="contact-form-input message"
            name="message"
            placeholder="Message(if any)"
          />

          <input type="hidden" name="to_name" value="Quadratech" />
          <input
            className="contact-form-input send"
            type="submit"
            value="SEND"
          />
          {MessageSent && (
            <p className="message-sent">
              Thank you for your message! We will get back to you soon.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CareerPage