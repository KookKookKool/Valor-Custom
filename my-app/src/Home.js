import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Slider from "./Slider/Slider";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="video-container">
        <Link to="/main">
          <video className="Video" autoPlay loop muted playsInline>
            <source src="/SQ1_2.mp4" type="video/mp4" />
          </video>
          <div className="centered-button">
            <button>CUSTOM DESIGN</button>
          </div>
        </Link>
      </div>
      <Slider />
      <Footer />
    </>
  );
}
