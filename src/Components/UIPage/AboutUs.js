import React from "react";
import "../UIStyle/About.css";

const AboutUs = () => {
  return (
    <>
      <div className="container_backGrounds">
        <div className="container">
          <div className="about_heading">
            <h1 className="text-center"> ABOUT US</h1>
          </div>
          <div className="d-flex">
            <div className="line"></div>
            <h6 className="lineH6">HOME</h6>
            <div className="line_vertical"></div>
            <h6 className="lineH6">PRODUCT</h6>
          </div>
        </div>
      </div>
      <div className="col-lg-12 row pt-5 pb-5">
        <div className="col-lg-6 leftHeading">
          <h1 className="stars ">WHO WE ARE</h1>
          <h6 className="pt-5 pr-5">
            With our expertise in this domain and our vendor’s firm support, we
            have secured a respectable position for ourselves in this domain.
          </h6>
          <p className="pt-4">
            Different factors for which we have attained appreciation from
            clients spread all across the nation are:
          </p>
          <div className="productRang">
            <p>☀ High-quality product range</p>
            <p>☀ High-quality product range</p>
            <p>☀ High-quality product range</p>
            <p>☀ High-quality product range</p>
          </div>
        </div>
        <div className="col-lg-6 Image_logo ">
          <div className="Imagess_postion">
            <img
              src="http://starengineeringworks.org/assets/img/gallery/project4.png"
              className="Image-logo"
            />
            <div className="Since">
              <span className="since-text">
                <h3>2018</h3>
                <p>SINCE</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
