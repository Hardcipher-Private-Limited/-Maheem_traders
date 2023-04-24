import React from "react";
import "../OurProdcutStyle/GasPressureRegulator.css";

const GasPielineInstallation = () => {
  return (
    <>
      <div style={{ backgroundColor: "#ffbd2a" }} className="">
        <div className="container pt-5 pb-5">
          <div>
            <h1 className="text-center">Gas Pieline Installation Service</h1>
            <p className="text-center pe-5 ps-5">
              Providing you the best range of Gas Pieline Installation Service
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
              <div className="img-top " style={{ marginTop: "20%" }}>
                <img
                  src="http://starengineeringworks.org/pics/pipeline.jpg"
                  alt=".."
                  // style={{ width: "150px" }}
                  className="img-fluid"
                />
              </div>
              <div
                className="card-content p-3 py-2 m-2"
                style={{ border: "1px solid red" }}
              >
                <h5 className="text-center ">
                  Gas Pieline Installation Service
                </h5>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Industry Type</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">Commercial and Industrial</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Type Of Pipeline</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">MS Pipeline (LOT & VOT)</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Installation Method</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">Welding</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Pipeline Length</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">As Per Client Requirement</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Site Location</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">Pan India</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Size Of Pipe</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">1/2" - 6"</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Type Of Gas</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">LPG</p>
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

export default GasPielineInstallation;
