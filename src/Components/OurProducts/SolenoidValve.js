import React from "react";
import "../OurProdcutStyle/GasPressureRegulator.css";

const SolenoidValve = () => {
  return (
    <>
      <div style={{ backgroundColor: "#ffbd2a" }} className="">
        <div className="container pt-5 pb-5">
          <div>
            <h1 className="text-center">Solenoid Valve</h1>
            <p className="text-center pe-5 ps-5">
              Leading Wholesaler of Brahma Gas Solenoid Valve from New Delhi.
            </p>
          </div>
        </div>
        <div
          className="  container-fluid row mb-5 pb-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: " center",
          }}
        >
          <div className="col-md-6">
            <div
              className="card d-flex"
              style={{
                flexDirection: "row",
                border: "none",
                backgroundColor: "white",
              }}
            >
              <div className="img-top " style={{ marginTop: "0%" }}>
                <img
                  src="http://starengineeringworks.org/productimages/ballvalve/solenoid.jpeg"
                  alt=".."
                  // style={{ width: "150px" }}
                  className="img-fluid"
                />
              </div>
              <div
                className="card-content p-3 py-2 m-2"
                style={{ border: "1px solid red" }}
              >
                <h5 className="text-center ">Brahma Gas Solenoid Valve</h5>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Model Name/Number</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">EG12SR</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Media</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">Gas</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Type</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">F/O</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Size</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">1/2 INCH</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Color</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">METALLIC</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Brand</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">Brahma</p>
                  </div>
                </div>

                <button
                  className="btn w-100 my-2 m-1 buttons text-dark"
                  style={{ backgroundColor: "#e25311" }}
                >
                  <a href="" style={{ color: "white", textDecoration: "none" }}>
                    YES ! I AM INTERSTED
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolenoidValve;
