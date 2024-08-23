import React from 'react'

function AboutUs() {
  return (
    <div className="aboutUS">
      {/* SECTION-1 ABOUT-US */}
      <div className="section-1-about-us">
        <div className="section-1-about-us-img">
          <img src="/img11.jpg" alt="" />
          <div className="about-us-text-overlay">
            <div className="overlay-container">
              <p className="overlay-about-us">ABOUT US</p>
            </div>
          </div>
        </div>
        <div className="section-1-about-us-container">
          <div className="section-1-about-us-wrap-1">
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
              <p className="section-2-para">
                We offer highly accurate and detailed GIS Surveying, Topographic
                Surveying, Drone Inspection, Drone Mapping, Powerline
                Monitoring, Smart City Surveying, Road Inspection and Surveying,
                Mine Surveying, Flood Assessment, Asset Monitoring, Solar
                Thermal Inspection, Security and Surveillance, Crop Health
                Monitoring, Volumetric Measurement, Drone 3D Mapping and
                Modelling, Aerial Photography and Videography, and much more.
              </p>
            </div>
          </div>
          <div className="section-1-about-us-wrap-2">
            <img className="img8" src="/img8.jpg" alt="" />
          </div>
        </div>
        <div className="section-1-about-us-wrapper">
          <div className="section-1-about-us-mission">
            <div className="section-1-our-mission">
              <h2 className="section-1-about-us-heading-1">OUR MISSION</h2>
            </div>
            <div className="section-1-mission-heading">
              <p className="section-1-about-us-para-1">
               At The Drone Technology, our mission is to provide
                innovative and cutting-edge drone solutions that enhance how
                businesses and individuals interact with drone. We strive to
                deliver exceptional customer service and satisfaction by
                developing intuitive, efficient, and reliable products.
              </p>
            </div>
          </div>
          <div className="section-1-about-us-vision">
            <div className="section-1-our-vision">
              <h2 className="section-1-about-us-heading-1">OUR VISION</h2>
            </div>
            <div className="section-1-vision-heading">
              <p className="section-1-about-us-para-1">
                Our vision is to be the leading provider of drone solutions that
                simplify and improve the lives of our customers. We aim to
                continuously grow and evolve, staying ahead of the curve in the
                ever-changing landscape of drone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs