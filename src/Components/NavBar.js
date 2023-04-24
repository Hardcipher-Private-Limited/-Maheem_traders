import React, { useState, useEffect } from "react";
// import SideNav from "./SideNav";
import "./UIStyle/NavBar.css";
import { Navigate, useNavigate } from "react-router-dom";
const NavBar = () => {
  const Navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  function handleHome() {
    Navigate("/");
  }
  function handleAbout() {
    Navigate("/about");
  }
  function handleContact() {
    Navigate("/contact");
  }

  function handleGasPressureRegulator() {
    Navigate("/GasPressureRegulator");
  }
  function handleGaSFiltter() {
    Navigate("/gaSfiltter");
  }
  function handleShutOffValves() {
    Navigate("/ShutOffValves");
  }
  function handleFlameArrestor() {
    Navigate("/FlameArrestor");
  }
  function handleBallValve() {
    Navigate("/BallValve");
  }
  function handleYStrainer() {
    Navigate("/YStrainer");
  }
  function handleGasPielineInstallation() {
    Navigate("/GasPielineInstallation");
  }
  function handleCuttingWheel() {
    Navigate("/CuttingWheel");
  }
  function handleSolenoidValve() {
    Navigate("/SolenoidValve");
  }
  function handleGasSolenoidValve() {
    Navigate("/GasSolenoidValve");
  }
  function handleGasLeakDetector() {
    Navigate("/GasLeakDetector");
  }
  function handleFireAlarmControlPanel() {
    Navigate("/FireAlarmControlPanel");
  }
  function handleNonReturnValve() {
    Navigate("/NonReturnValve");
  }
  return (
    <>
      <div className="header-transparent  header-area">
        <div className="main-header d-none d-lg-block">
          <div className="header-top">
            <nav className="navbar navbar-expand-sm bg-dark text-white">
              <div className="container">
                <div style={{}} className="first_nav">
                  <a className="">+91- 8010206416</a>
                  <a className="p-4"> INFO@STARENGINEERINGWORKS.ORG</a>
                  <a> Mon - Sat 10:00 - 18:00, Sunday - CLOSED</a>
                </div>
                <div className="social_medai">
                  <img src="./Images/twitter.png" alt="." className="pr-4" />
                  <img src="./Images/twitter.png" alt="." />
                  <img src="./Images/twitter.png" alt="." />
                  <img src="./Images/twitter.png" alt="." />
                </div>
              </div>
            </nav>
          </div>
          <div className="header-bottom  header-sticky">
            <nav
              class="navbar navbar-expand-sm  navbar-light  nav_bar shadow p-3 "
              style={{ backgroundColor: "#191970" }}
            >
              <div class="container ">
                <a class="navbar-brand " href="#"></a>

                <div
                  class="collapse navbar-collapse  form-inline d-flex flex-row justify-content-between  "
                  id="navbarScroll"
                >
                  <ul
                    class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll  "
                    style={{ "--bs-scroll-height": "100px" }}
                  >
                    <li class="nav-item fontWight ">
                      <span>
                        <img
                          src="http://starengineeringworks.org/pics/s.png"
                          style={{ width: "15%" }}
                        />
                      </span>
                      Maheem traders
                    </li>
                  </ul>
                  <div className="d-flex justify-content-between ">
                    <form class="d-flex navBarLast">
                      <div class="" type="submit" onClick={handleHome}>
                        Home
                      </div>
                    </form>
                    <form class="d-flex navBarLast pl-2 ">
                      <div class="" type="submit" onClick={handleAbout}>
                        About Us
                      </div>
                    </form>
                    <form class="d-flex navBarLast pl-2 ">
                      <div class="dropdown">
                        <button class="dropbtn"> Our Products</button>
                        <div class="dropdown-content">
                          <a href="#" onClick={handleGasPressureRegulator}>
                            Gas Pressure Regulator
                          </a>
                          <a href="#" onClick={handleGaSFiltter}>
                            Gas Filtter
                          </a>
                          <a href="#" onClick={handleShutOffValves}>
                            Shut-Off Valves
                          </a>
                          <a href="#" onClick={handleFlameArrestor}>
                            Flame Arrestor
                          </a>
                          <a href="#" onClick={handleBallValve}>
                            Ball Valve
                          </a>
                          <a href="#" onClick={handleYStrainer}>
                            YStrainer
                          </a>
                          <a href="#" onClick={handleGasPielineInstallation}>
                            Gas Pieline Installation Service
                          </a>
                          <a href="#" onClick={handleCuttingWheel}>
                            Cutting Wheel
                          </a>
                          <a href="#" onClick={handleSolenoidValve}>
                            Solenoid Valve
                          </a>
                          <a href="#" onClick={handleGasSolenoidValve}>
                            Gas Solenoid Valve
                          </a>
                          <a href="#" onClick={handleGasLeakDetector}>
                            Gas Leak Detector
                          </a>
                          <a href="#" onClick={handleFireAlarmControlPanel}>
                            Fire Alarm Control Panel
                          </a>
                          <a href="#" onClick={handleNonReturnValve}>
                            Non Return Valve
                          </a>
                        </div>
                      </div>
                    </form>
                    <form class="d-flex navBarLast  ">
                      <div class="" type="submit" onClick={handleContact}>
                        Contact Us
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
