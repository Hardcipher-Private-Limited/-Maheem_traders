import React from "react";
import "../OurProdcutStyle/GasPressureRegulator.css";

const NonReturnValve = () => {
  return (
    <>
      <div style={{ backgroundColor: "#ffbd2a" }} className="">
        <div className="container pt-5 pb-5">
          <div>
            <h1 className="text-center">Non Return Valve</h1>
            <p className="text-center pe-5 ps-5">
              Leading Wholesaler of NON RETURN VALVE from New Delhi.
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
                  src="http://starengineeringworks.org/productimages/ballvalve/nonreturn.jpeg"
                  alt=".."
                  // style={{ width: "150px" }}
                  className="img-fluid"
                />
              </div>
              <div
                className="card-content p-3 py-2 m-2"
                style={{ border: "1px solid red" }}
              >
                <h5 className="text-center ">NON RETURN VALVE</h5>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Valve Size</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">1/2"</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Design Type</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">For Manifold</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Media</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">LPG</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Material</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">brass</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Working Temperature</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">upto 60 degree c</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Brand</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext"> STD</p>
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

export default NonReturnValve;
