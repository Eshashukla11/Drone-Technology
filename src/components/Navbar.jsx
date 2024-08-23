import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from "react-router-dom"
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
          <Link to={"/"} className="nav-links">
            HOME
          </Link>
          <Link to={"/about-us"} className="nav-links">
            ABOUT US
          </Link>
          <Link to={"/contact-us"} className="nav-links">
            CONTACT US
          </Link>
        </div>
        <div className="hamburger-menu">
          <GiHamburgerMenu
            onClick={() => setIsEnabled(!isEnabled)}
            className="hamburger-icon"
          />
        </div>
      </div>
      <div className={`hamburger-slidedown ${isEnabled ? "" : "hide"}`}>
        <Link to={"/"} className="nav-links">
          HOME
        </Link>
        <Link to={"/about-us"} className="nav-links">
          ABOUT US
        </Link>
        <Link to={"/contact-us"} className="nav-links">
          CONTACT US
        </Link>
      </div>
    </>
  );
};

export default Navbar;
