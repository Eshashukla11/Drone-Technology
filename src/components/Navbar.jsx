import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  // setIsEnabled(true);
  console.log(isEnabled);

  return (
    <>
      <div className="navbar-wrap">
        <div className="img-wrap">
          <img src="/Drone_logo.png" alt="" />
        </div>
        <div className="nav-menu">
          <a href="/" className="nav-links">
            HOME
          </a>
          <a href="/about-us" className="nav-links">
            ABOUT US
          </a>
          <a href="/contact-us" className="nav-links">
            CONTACT US
          </a>
        </div>
        <div className="hamburger-menu">
          <GiHamburgerMenu
            onClick={() => setIsEnabled(!isEnabled)}
            className="hamburger-icon"
          />
        </div>
      </div>
      <div className={`hamburger-slidedown ${isEnabled ? "" : "hide"}`}>
        <a href="/" className="nav-links">
          HOME
        </a>
        <a href="/about-us" className="nav-links">
          ABOUT US
        </a>
        <a href="/contact-us" className="nav-links">
          CONTACT US
        </a>
      </div>
    </>
  );
};

export default Navbar;
