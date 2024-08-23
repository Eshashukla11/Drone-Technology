import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdPhoneIphone } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";

const ContactUs = () => {
 
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
     
    </div>
  );
};

export default ContactUs;
