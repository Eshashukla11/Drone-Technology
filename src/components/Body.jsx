import React, { useEffect, useState } from "react";
import { GiRailRoad } from "react-icons/gi";
import { GiPipes } from "react-icons/gi";
import { GiSolarPower } from "react-icons/gi";
import { FaRoad } from "react-icons/fa";
import { GiGoldMine } from "react-icons/gi";
import { GiWatchtower } from "react-icons/gi";
import { LiaIndustrySolid } from "react-icons/lia";
import { LiaBroadcastTowerSolid } from "react-icons/lia";
import { GiLightningDissipation } from "react-icons/gi";
import { GiPylon } from "react-icons/gi";
import { FaSitemap } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import { FaStarOfLife } from "react-icons/fa";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

function Body() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [texts, setTexts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetchImages();
    const localImages = ["/img9.png", "/img10.jpg", "img11.jpg"];
    const localTexts = [
      "Unlock New Horizons with Professional Drone Solutions",
      "Discover the Possibilities of Drone Technology Today",
      "Discover Our Services",
    ];
    setImages(localImages);
    setTexts(localTexts);
  }, []);

  const handleClick = (dir) => {
    console.log("curr index", index);
    //0
    const lastIdx = images.length - 1;
    if (dir === "left") {
      if (index === 0) {
        console.log("last idx", lastIdx);
        setIndex(lastIdx);
      } else {
        setIndex((idx) => idx - 1);
      }
    } else if (dir === "right") {
      if (lastIdx === index) {
        //8 === 8 -> index -> 0
        setIndex(0);
      } else {
        setIndex((idx) => idx + 1);
      }
    }
  };

  useEffect(() => {
    const tid = setInterval(() => {
      handleClick("right");
    }, 2000);

    return () => {
      clearInterval(tid);
    };
  }, [index]);
  return (
    <div className="main">
      {/* section-1 CAROUSEL*/}

      <div className="section-1-carousel">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <button className="left btn" onClick={() => handleClick("left")}>
              {"<"}
            </button>
            <div className="image-container">
              <img className="img" src={images[index]} alt="not-found" />
              <div className="text-overlay">
                <p className="overlay-text-carousel">{texts[index]}</p>
              </div>
            </div>
            <button onClick={() => handleClick("right")} className="right btn">
              {">"}
            </button>
          </>
        )}
      </div>

      {/* section-1 end */}

      {/* section-2 ABOUT US */}

      <div className="section-2-about-us">
        <div className="section-2-container-1">
          <div className="section-2-about-us-text">
            <h4 className="section-2-heading">
              ABOUT <span className="black">US</span>
            </h4>
          </div>
          <div className="section-2-about-us-text">
            <h2 className="section-2-sub-heading">
              WELCOME TO THE DRONE TECHNOLOGY - THE LEADING DRONE SERVICE
              PROVIDER
            </h2>
          </div>
          <div className="section-2-about-us-text">
            <p className="section-2-para">
              <span className="text-bold">THE DRONE TECHNOLOGY</span> stands
              today to provide comprehensive drone solutions across India and
              transform traditional industrial practices through highly
              efficient drones. We deliver aerial solutions by presenting
              excellent services with incredible speed and precision.
            </p>
          </div>
          {/* <button className="button">KNOW MORE ABOUT US</button> */}
          <Link to={"/about-us"} className="button">
            KNOW MORE ABOUT US
          </Link>
        </div>
        <div className="section-2-container-2">
          <img className="image" src="/img2.jpg" alt="drone" />
        </div>
      </div>

      {/* section-2 end */}

      {/* section-3 GIS MAPPING */}

      <div className="section-3-mapping">
        <div className="section-3-container-1">
          <img className="image" src="/img6.jpg" alt="map" />
        </div>
        <div className="section-3-container-2">
          <div className="section-3-about-us-text">
            <h1 className="section-3-heading">GIS</h1>
          </div>
          <div className="section-3-about-us-text">
            <h3 className="section-3-sub-heading">MAPPING</h3>
          </div>
          <div className="section-3-about-us-text">
            <p className="section-3-para">
              The Drone Technology provides numerous GIS services to its clients
              all over the world like visualization of geographic data, analysis
              of spatial relationships, and efficient data management. The GIS
              data conversions allow data from different sources to be merged in
              one common format, which allows for easy access, analysis and
              utilization.
            </p>
          </div>
        </div>
      </div>

      {/* section-3 end */}

      {/* section-4 */}

      <div className="section-4-corridor-mapping">
        <div className="section-4-container-1">
          <h2 className="section-4-heading">
            CORRIDOR MAPPING - ROAD, RAIL & WATER
          </h2>
          <div className="section-4-sub-heading-container">
            <p className="section-4-sub-heading">
              Our Drone Survey prioritizes quality and, thus, perpetually
              continues to achieve highly accurate topographic maps with
              Centimeter Level Accuracy at any given time. Decked with High-end
              Surveying Drone and a crew of skilled licensed Pilots, our clients
              obtain the deliverables faster, hence promoting more agile
              decision- Making.
            </p>
          </div>
          <div className="section-4-list">
            <div className="section-4-points">
              <IoMdArrowDropright className="right-arrow" />
              <p className="section-4-li">Highways- Exiting & Proposed</p>
            </div>
            <div className="section-4-points">
              <IoMdArrowDropright className="right-arrow" />
              <p className="section-4-li">Railway- Exiting & Proposed</p>
            </div>
            <div className="section-4-points">
              <IoMdArrowDropright className="right-arrow" />
              <p className="section-4-li">Metro- Exiting & Proposed</p>
            </div>
            <div className="section-4-points">
              <IoMdArrowDropright className="right-arrow" />
              <p className="section-4-li">Topographic Survey using Drone</p>
            </div>
            <div className="section-4-points">
              <IoMdArrowDropright className="right-arrow" />
              <p className="section-4-li">
                Topographic Survey using LiDAR Drone
              </p>
            </div>
          </div>
          <div className="section-4-text">
            <p className="section-4-text-point">Final Location Survey</p>
            <p className="section-4-text-point">Route Alignment Survey</p>
            <p className="section-4-text-point">Aerial Inspection</p>
          </div>
        </div>
        <div className="section-4-container-2">
          <img className="image" src="/img4.jpg" alt="" />
        </div>
      </div>
      {/* section-4 end */}

      {/* section-5 */}
      <div className="section-5-drone-monitoring">
        <div className="section-5-container-1">
          <img className="image" src="/img1.jpg" alt="" />
        </div>
        <div className="section-5-container-2">
          <h2 className="section-5-heading">DRONE MONITORING & INSPECTION</h2>
          <div className="section-5-para-container">
            <p className="section-5-para">
              We use high precision drones with infrared camera payloads to
              inspect the interior or exterior of your asset and report on its
              surface heat variations.
            </p>
          </div>
          <div className="section-5-wrapper">
            <div className="section-5-wrapper-list-1">
              <div className="section-5-points">
                <RxDotFilled className="right-arrow" />
                <p className="section-5-li">
                  Visual & thermal inspection of towers
                </p>
              </div>
              <div className="section-5-points">
                <RxDotFilled className="right-arrow" />
                <p className="section-5-li">Pylon body inspection</p>
              </div>
              <div className="section-5-points">
                <RxDotFilled className="right-arrow" />
                <p className="section-5-li">
                  Overhead cable tension compilance
                </p>
              </div>
              <div className="section-5-points">
                <RxDotFilled className="right-arrow" />
                <p className="section-5-li">
                  Structural installation monitoring
                </p>
              </div>
              <div className="section-5-points">
                <RxDotFilled className="right-arrow" />
                <p className="section-5-li">Post-storm damage analysis</p>
              </div>
            </div>
            <div className="section-5-wrapper-list-2">
              <div className="section-5-points">
                <FaStarOfLife className="star" />
                <p className="section-5-li">Mining & Plants Inspection</p>
              </div>
              <div className="section-5-points">
                <FaStarOfLife className="star" />
                <p className="section-5-li">Mining Area</p>
              </div>
              <div className="section-5-points">
                <FaStarOfLife className="star" />
                <p className="section-5-li">Solar Plant</p>
              </div>
              <div className="section-5-points">
                <FaStarOfLife className="star" />
                <p className="section-5-li">Ash Dyke Inspection</p>
              </div>
              <div className="section-5-points">
                <FaStarOfLife className="star" />
                <p className="section-5-li">Power Line & Asset Inspections </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section-5 end */}

      {/* section-6  */}

      <div className="section-6-featured-services">
        <p className="section-6-heading">FEATURED SERVICES</p>
        <div className="section-6-container">
          <div className="section-6-card-1">
            <FaSitemap className="card-icon" />
            <p className="section-6-card-heading">GIS Mapping</p>
          </div>
          <div className="section-6-card-1">
            <FaRoad className="card-icon" />
            <p className="section-6-card-heading">Road Inspection</p>
          </div>
          <div className="section-6-card-1">
            <GiPipes className="card-icon" />
            <p className="section-6-card-heading">Pipeline Inspection</p>
          </div>
          <div className="section-6-card-1">
            <GiSolarPower className="card-icon" />
            <p className="section-6-card-heading">Solar plant Inspection</p>
          </div>
          <div className="section-6-card-1">
            <GiGoldMine className="card-icon" />
            <p className="section-6-card-heading">Mine Survey</p>
          </div>
          <div className="section-6-card-1">
            <GiWatchtower className="card-icon" />
            <p className="section-6-card-heading">Powerline Monitoring</p>
          </div>
          <div className="section-6-card-1">
            <LiaIndustrySolid className="card-icon" />
            <p className="section-6-card-heading">Industrial Inspection</p>
          </div>
          <div className="section-6-card-1">
            <GiRailRoad className="card-icon" />
            <p className="section-6-card-heading">Railway Services</p>
          </div>
          <div className="section-6-card-1">
            <LiaBroadcastTowerSolid className="card-icon" />
            <p className="section-6-card-heading width">
              Visual & Thermal Inspection of Towers
            </p>
          </div>
          <div className="section-6-card-1">
            <GiLightningDissipation className="card-icon" />
            <p className="section-6-card-heading width">Disaster Management</p>
          </div>
          <div className="section-6-card-1">
            <GiPylon className="card-icon" />
            <p className="section-6-card-heading width">
              Pylon Body Inspection
            </p>
          </div>
        </div>
      </div>

      {/* section-6 end */}

      {/* section-7 */}
      <div className="section-7-projects">
        <div className="section-7-container-1">
          <img className="image" src="img3.jpg" alt="" />
        </div>
        <div className="section-7-container-2">
          <h2 className="section-7-heading">PROJECTS</h2>
          <div className="section-7-project-list">
            <div className="section-7-points">
              <TbArrowBadgeRightFilled className="right-filled" />
              <p className="section-7-li">
                Existing land use preparation using Drone Technology for 5 ULB'S
                in Amravati & Nagpur Division. Area 70 Sqkm.
              </p>
            </div>
            <div className="section-7-points">
              <TbArrowBadgeRightFilled className="right-filled" />
              <p className="section-7-li">
                Land Records and Revenue Department, Assam Govt - Drone Survey -
                2500 SQKM.
              </p>
            </div>
            <div className="section-7-points">
              <TbArrowBadgeRightFilled className="right-filled" />
              <p className="section-7-li">
                Resurvey for Land Records and Revenue Survey Andhra Pradesh Govt
                - 1700 SQKM.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section-7 end */}
    </div>
  );
}

export default Body;
