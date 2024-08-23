import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineFileCopy } from "react-icons/md";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-section-container">
        <div className="footer-section-wrapper ">
          <div className="footer-section-img-wrap">
            <img src="/drone-technology.png" alt="" />
          </div>
          <p className="footer-section-item fixed">
            Welcome to The Drone Technology, a company that provides various
            types of Drone Services. Drones provide clear information
          </p>
        </div>
        {/* <div className="footer-section-wrapper about-us">
          <a href="" className="none bold">
            ABOUT US
          </a>
        </div> */}
        <div className="footer-section-wrapper contact-us">
          {/* <a href="/about-us" className="none bold">
            ABOUT US
          </a> */}
          <Link to={"about-us"} className="none bold">
            ABOUT US
          </Link>
          {/* <a href="/contact-us" className="none bold">CONTACT US</a> */}
          <Link to={"contact-us"} className="none bold">
            CONTACT US
          </Link>
          <div className="footer-section-services">
            <FaLocationDot className="icon" />
            <p className="footer-section-item">
              NB ROAD, KAZMI BEGUM COLONY, PATNA
            </p>
          </div>
          <div className="footer-section-services">
            <FaPhoneAlt className="icon" />
            <p className="footer-section-item">+91 8789047218</p>
          </div>
          <div className="footer-section-services">
            <MdOutlineMail className="icon" />
            <p className="footer-section-item">syed@thedronetechnology.in</p>
          </div>
        </div>
      </div>
      <div className="footer-section-menu">
        <p className="footer-section-item center">
          © Copyright 2024 THE DRONE TECHNOLOGY. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer