import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/UIPage/Home";
import Footer from "./Components/UIPage/Footer";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AboutUs from "./Components/UIPage/AboutUs";
import GasPressureRegulator from "./Components/OurProducts/GasPressureRegulator";
import GasFilter from "./Components/OurProducts/GasFilter";
import ShutOffValves from "./Components/OurProducts/Shut-OffValves";
import FlameArrestor from "./Components/OurProducts/FlameArrestor";
import BallValve from "./Components/OurProducts/BallValve";
import YStrainer from "./Components/OurProducts/YStrainer";
import GasPielineInstallation from "./Components/OurProducts/GasPielineInstallation";
import CuttingWheel from "./Components/OurProducts/CuttingWheel";
import SolenoidValve from "./Components/OurProducts/SolenoidValve";
import GasSolenoidValve from "./Components/OurProducts/GasSolenoidValve";
import GasLeakDetector from "./Components/OurProducts/GasLeakDetector";
import FireAlarmControlPanel from "./Components/OurProducts/FireAlarmControlPanel";
import NonReturnValve from "./Components/OurProducts/NonReturnValve";
import Contact from "./Components/UIPage/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/GasPressureRegulator"
            element={<GasPressureRegulator />}
          />
          <Route path="/gaSfiltter" element={<GasFilter />} />
          <Route path="/ShutOffValves" element={<ShutOffValves />} />
          <Route path="/FlameArrestor" element={<FlameArrestor />} />
          <Route path="/BallValve" element={<BallValve />} />
          <Route path="/YStrainer" element={<YStrainer />} />
          <Route
            path="/GasPielineInstallation"
            element={<GasPielineInstallation />}
          />
          <Route path="/CuttingWheel" element={<CuttingWheel />} />
          <Route path="/SolenoidValve" element={<SolenoidValve />} />
          <Route path="/GasSolenoidValve" element={<GasSolenoidValve />} />
          <Route path="/GasLeakDetector" element={<GasLeakDetector />} />
          <Route
            path="/FireAlarmControlPanel"
            element={<FireAlarmControlPanel />}
          />
          <Route path="/NonReturnValve" element={<NonReturnValve />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
