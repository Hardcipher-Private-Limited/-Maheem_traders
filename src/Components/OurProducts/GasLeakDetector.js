import React from "react";
import "../OurProdcutStyle/GasPressureRegulator.css";

const GasLeakDetector = () => {
  return (
    <>
      <div style={{ backgroundColor: "#ffbd2a" }} className="">
        <div className="container pt-5 pb-5">
          <div>
            <h1 className="text-center">Gas Leak Detector</h1>
            <p className="text-center pe-5 ps-5">
              Providing you the best range of LPG/PNG/CNG Gas Leak Detectors
              with effective & timely delivery.
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
              <div className="img-top " style={{ marginTop: "15%" }}>
                <img
                  src="http://starengineeringworks.org/productimages/ballvalve/gasleak.jpeg"
                  alt=".."
                  // style={{ width: "150px" }}
                  className="img-fluid"
                />
              </div>
              <div
                className="card-content p-3 py-2 m-2"
                style={{ border: "1px solid red" }}
              >
                <h5 className="text-center ">LPG/PNG/CNG Gas Leak Detectors</h5>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Detector Type</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">Fixed Multi Gas</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Model</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">GJ-0417</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Name of Gases Detected</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">LPG, PNG, CNG</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Material</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">FLAMEPROOF</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Certification</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">PESO, CMRI, BIS</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Color</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">YELLOW</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Brand</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">GAS JANITOR</p>
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

export default GasLeakDetector;
