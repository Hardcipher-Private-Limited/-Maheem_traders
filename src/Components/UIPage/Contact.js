import React from "react";
import "../UIStyle/About.css";

const Contact = () => {
  return (
    <>
      <div className="container_backGrounds ">
        <div className="container">
          <div className="about_heading">
            <h1 className="text-center"> CONTACT</h1>
          </div>
          <div className="d-flex">
            <div className="line"></div>
            <h6 className="lineH6">HOME</h6>
            <div className="line_vertical"></div>
            <h6 className="lineH6">CONTACT</h6>
          </div>
        </div>
      </div>
      <div className="container row mb-5">
        <div className="col-lg-8">
          <div>
            <h2>Get in Touch</h2>
          </div>
          <textarea
            typeof="text"
            className="form-control"
            style={{ height: "100px" }}
            placeholder="Enter Message"
          />
          <div className="d-flex pe-4 mt-4" style={{ gap: "25px" }}>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control p-2 "
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                placeholder="Email"
                className="form-control p-2"
              />
            </div>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter sumbject"
              className="form-control p-2"
            />
          </div>
          <div className="mt-4">
            <button className="coloss pt-4 pb-4 pe-5 ps-5">SEND</button>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-3 mt-5 ">
          <div>
            <h5>Delhi, India.</h5>
            <p className="text-muted">D-130 azadpur colony , 110033</p>
          </div>
          <div>
            <h5>+91- 8010206416</h5>
            <p className="text-muted">Mon to Fri 9am to 6pm</p>
          </div>
          <div>
            <h5>info@maheemtraders.com</h5>
            <p className="text-muted">Send us your query anytime!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
