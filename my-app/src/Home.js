import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Slider from "./Slider/Slider";
import Footer from "./Footer";
//import CTicon from "./Asset/icon/ValorCustom.png";

import Header from "./Header";

export default function Home() {
  return (
    <div className="MainAll">
      <Header />
      <Link to="/main">
      <div className="video-container">
        

          <video className="Video" autoPlay loop muted playsInline>
            <source src="/SQ1_2.mp4" type="video/mp4" />
          </video>
          {/* <img src={CTicon} alt="icon" className="image-overlay" />*/}

          <div className="centered-button">
            <button>CUSTOM DESIGN</button>
          </div>
        
      </div>
      </Link>
      
      <Link to="/main">
      <div className="centered-button2">
            <button>CUSTOM DESIGN</button>
          </div>
      </Link>
      <div className="Submain">
      <Slider />
      <Footer />
      </div>
    </div>
  );
}
