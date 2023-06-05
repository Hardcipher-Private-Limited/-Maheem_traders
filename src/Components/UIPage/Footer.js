import React from "react";
import "../UIStyle/Footer.css";

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#070b11", paddingBottom: 130 }}>
        <div className="container">
          <div className="col-lg-12 row">
            <div className="col-lg-4 pt-5 text-white">
              <div className="FooterHeading">
                <h3>Maheem traders</h3>
                <p>
                  Established as a Proprietor firm in the year 2018 at Azadpur
                  (Delhi, India), we “Maheem traders ” are a leading Wholesale
                  Trader of a wide range of Shut-Off Valves, Gas Pressure
                  Regulator, Gas Filter, etc.
                </p>
              </div>
            </div>

            <div className="col-lg-4 pt-5">
              <div className="FooterHeading">
                <h3>Quick Links</h3>
                <span>Home</span>
                <span>About</span>
                <span>Products</span>
                <span>Contact Us</span>
              </div>
            </div>
            <div className="col-lg-4 pt-5 text-white">
              <div className="FooterHeading">
                <h3>Contact</h3>
                <p>D-130 azadpur colony , 110033 Delhi, India</p>
                <span>Phone: +91- 8010206416</span>
                <span>info@maheemtraders.com</span>
              </div>
            </div>
          </div>
          <div className="FooterHeading pt-5">
            <p>Copyright ©2023 All rights reserved |</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
