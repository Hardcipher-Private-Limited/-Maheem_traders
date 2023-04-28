import React from "react";
import "../UIStyle/Home.css";
const Home = () => {
  return (
    <>
      <div className="container_backGround">
        <div className="container ">
          <div className="Headers">
            <h1 className="star">MAHEEM</h1>
            <h1 className="engineering"> TRADERS </h1>
          </div>
          <div className="header_text d-flex ">
            <hr
              style={{ color: "	#FF4500", width: "50px", borderWidth: "5px" }}
            />
            <span className="text_line ps-3">
              Wholesale Trader of a wide range of Shut-Off Valves, Gas Pressure
              Regulator, Gas Filter, etc.
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-12 row">
        <div className="col-lg-6  p-5 ">
          <h1 className="stars ">ABOUT US</h1>
          <h6 className="pt-5 pr-5">
            With our expertise in this domain and our vendor’s firm <br />
            support, we have secured a respectable position for <br />
            ourselves in this domain.
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
          <div className="pt-5">
            <button className="readmore pt-3 pb-3 ps-4 pe-4">READ MORE</button>
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

      {/* Our prodcut start  */}
      <div className="container pb-5" style={{ paddingTop: 90 }}>
        <h1 className="stars pb-5">OUR PRODUCTS</h1>
        <div className="col-lg-12 row colimn">
          <div className="col-lg-4">
            <div class="card cards shadow">
              <img
                class="card-img-top"
                src="http://starengineeringworks.org/pics/gs.jpg"
                alt="Card image cap"
                style={{ width: "21rem" }}
              />
              <div class="card-body cardbody">
                <h3 class="card-text">
                  <b>Gas Pressure Regulator Products</b>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card cards shadow">
              <img
                class="card-img-top"
                src="http://starengineeringworks.org/pics/gs.jpg"
                alt="Card image cap"
                style={{ width: "21rem" }}
              />
              <div class="card-body cardbody">
                <h3 class="card-text">
                  <b>Gas Pressure Regulator Products</b>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card cards shadow">
              <img
                class="card-img-top"
                src="http://starengineeringworks.org/pics/gs.jpg"
                alt="Card image cap"
                style={{ width: "21rem" }}
              />
              <div class="card-body cardbody">
                <h3 class="card-text">
                  <b>Gas Pressure Regulator Products</b>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 pt-4">
            <div class="card cards shadow">
              <img
                class="card-img-top"
                src="http://starengineeringworks.org/pics/gs.jpg"
                alt="Card image cap"
                style={{ width: "21rem" }}
              />
              <div class="card-body cardbody">
                <h3 class="card-text">
                  <b>Gas Pressure Regulator Products</b>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 pt-4">
            <div class="card cards shadow   ">
              <img
                class="card-img-top"
                src="http://starengineeringworks.org/pics/gs.jpg"
                alt="Card image cap"
                style={{ width: "21rem" }}
              />
              <div class="card-body cardbody">
                <h3 class="card-text">
                  <b>Gas Pressure Regulator Products</b>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 pt-4">
            <div class="card cards shadow">
              <img
                class="card-img-top"
                src="http://starengineeringworks.org/pics/gs.jpg"
                alt="Card image cap"
                style={{ width: "21rem" }}
              />
              <div class="card-body cardbody">
                <h3 class="card-text">
                  <b>Gas Pressure Regulator Products</b>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TESTIMONIAL start  */}
      <div className="TESTIMONIAL ">
        <div className="container margin">
          <h1 className="TESTIMONIAL_text">TESTIMONIAL</h1>
          <div className="col-lg-12 row pt-5">
            <div className="col-lg-1"></div>
            <div className="col-lg-11 ">
              <p className="text-white">
                They are ideal for hotels and restaurants, their services are
                rendered by a team of experts and execution within promised time
                frame also provide systematic installation.
              </p>
              <span className="text-white mt-5 d-flex ">
                <div class="vertical-line p-2"></div>
                Krish Verma
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Our Gallery start  */}
      <div className="container pb-5" style={{ paddingTop: 80 }}>
        <h1 className="stars pt-5 pb-5">OUR GALLERY</h1>
        <div className="col-lg-12 row colimns">
          <div className="col-lg-4">
            <div class="card cards shadow">
              <img
                class="card-img-top"
                src="http://starengineeringworks.org/gallery/1.webp"
                alt="Card image cap"
                style={{ width: "22rem" }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card cards shadow">
              <img
                class="card-img-top"
                src="http://starengineeringworks.org/gallery/1.webp"
                alt="Card image cap"
                style={{ width: "22rem" }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card cards shadow">
              <img
                class="card-img-top"
                src="http://starengineeringworks.org/gallery/1.webp"
                alt="Card image cap"
                style={{ width: "22rem" }}
              />
            </div>
          </div>
          <div className="col-lg-4 pt-4">
            <div class="card cards shadow">
              <img
                class="card-img-top"
                src="http://starengineeringworks.org/gallery/1.webp"
                alt="Card image cap"
                style={{ width: "22rem" }}
              />
            </div>
          </div>
          <div className="col-lg-4 pt-4">
            <div class="card cards shadow">
              <img
                class="card-img-top"
                src="http://starengineeringworks.org/gallery/1.webp"
                alt="Card image cap"
                style={{ width: "22rem" }}
              />
            </div>
          </div>
          <div className="col-lg-4 pt-4">
            <div class="card cards shadow">
              <img
                class="card-img-top"
                src="http://starengineeringworks.org/gallery/1.webp"
                alt="Card image cap"
                style={{ width: "22rem" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* STOCKIST OF start */}
      <div className="container pb-5 " style={{ paddingTop: 80 }}>
        <h1 className="stars pt-5 pb-5">STOCKIST OF</h1>
        <div className="col-lg-12 row colimns">
          <div className="col-lg-4">
            <div class="card-body cardbodyss">
              <h4 class="card-text">
                <b>VANAZ</b>
              </h4>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card-body cardbodyss">
              <h4 class="card-text">
                <b>Gas roducts</b>
              </h4>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card-body cardbodyss">
              <h4 class="card-text">
                <b>GaCIM VALVESs P</b>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 pt-4">
            <div class="card-body cardbodyss">
              <h4 class="card-text">
                <b>GasCIM VALVESs</b>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 pt-4">
            <div class="card-body cardbodyss">
              <h4 class="card-text">
                <b>Gas CIM VALVESs</b>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 pt-4">
            <div class="card-body cardbodyss">
              <h4 class="card-text">
                <b>GCIM VALVESr Products</b>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 pt-4">
            <div class="card-body cardbodyss">
              <h4 class="card-text">
                <b>GaCIM VALVESs</b>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 pt-4">
            <div class="card-body cardbodyss">
              <h4 class="card-text">
                <b>Gas CIM VALVES</b>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 pt-4">
            <div class="card-body cardbodyss">
              <h4 class="card-text">
                <b>GCIM VALVES</b>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 pt-4">
            <div class="card-body cardbodyss">
              <h4 class="card-text">
                <b>BRAHMA SOLENOID VALVES</b>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 pt-4">
            <div class="card-body cardbodyss">
              <h4 class="card-text">
                <b>BRAHMA SOLENOID VALVES</b>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 pt-4">
            <div class="card-body cardbodyss">
              <h4 class="card-text">
                <b>CIM VALVES</b>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
