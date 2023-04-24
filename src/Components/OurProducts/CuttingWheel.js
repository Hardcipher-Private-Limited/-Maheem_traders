import React from "react";
import "../OurProdcutStyle/GasPressureRegulator.css";

const CuttingWheel = () => {
  return (
    <>
      <div style={{ backgroundColor: "#ffbd2a" }} className="">
        <div className="container pt-5 pb-5">
          <div>
            <h1 className="text-center">Cutting Wheel</h1>
            <p className="text-center pe-5 ps-5">
              We are a leading Wholesaler of Metal Cutting Wheel from New Delhi,
              India.
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
                  src="http://starengineeringworks.org/productimages/ballvalve/wheel.jpeg"
                  alt=".."
                  // style={{ width: "150px" }}
                  className="img-fluid"
                />
              </div>
              <div
                className="card-content p-3 py-2 m-2"
                style={{ border: "1px solid red" }}
              >
                <h5 className="text-center ">Metal Cutting Wheel</h5>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Diameter</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">14 inch</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Brand</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">WOLCUT</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">
                      Usage/
                      <br />
                      Application
                    </h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">CUTTING</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Color</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">Green</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Thickness</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">2.8MM</p>
                  </div>
                </div>
                <div className="row items">
                  <div className="col-6">
                    <h6 className="itemTilte">Speed</h6>
                  </div>
                  <div className="col-6">
                    <p className="itemtext">Max 4400 RPM</p>
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

export default CuttingWheel;
