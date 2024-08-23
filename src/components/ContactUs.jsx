import React, { useRef } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdPhoneIphone } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactUs = ({closeForm}) => {
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
    <div className="contactUS">
      {/* section */}
      <div className="section-1-about-us">
        <div className="section-1-about-us-img">
          <img src="/img11.jpg" alt="" />
          <div className="about-us-text-overlay">
            <div className="overlay-container">
              <p className="overlay-about-us">CONTACT US</p>
            </div>
          </div>
        </div>
        <div className="section-1-contact-us">
          <h3 className="section-1-contact-us-heading">Contact Us</h3>
          <div className="section-1-contact-us-wrapper">
            <div className="section-1-contact-us-card">
              <div className="section-1-contact-us-detail">
                <CiLocationOn className="contact-us-icon" />
                <p className="section-1-contact-us-text-heading">ADDRESS</p>
              </div>
              <p className="section-1-contact-us-sub-heading">
                NB ROAD, KAZMI BEGUM COLONY, PATNA
              </p>
            </div>
            <div className="section-1-contact-us-card">
              <div className="section-1-contact-us-detail">
                <MdPhoneIphone className="contact-us-icon" />
                <p className="section-1-contact-us-text-heading">PHONE</p>
              </div>
              <p className="section-1-contact-us-sub-heading">+91 8789047218</p>
            </div>
            <div className="section-1-contact-us-card">
              <div className="section-1-contact-us-detail">
                <FaRegFileAlt className="contact-us-icon" />
                <p className="section-1-contact-us-text-heading">EMAIL</p>
              </div>
              <p className="section-1-contact-us-sub-heading">
                syed@thedronetechnology.in
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section-2-contact-us */}
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
    </div>
  );
};

export default ContactUs;
