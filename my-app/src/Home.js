import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import HorizontalImageGallery from "./Components/HorizontalImageGallery";


export default function Home() {
  return (
    <>
      <div className="video-container">
        <Link to="/main">
          <video className="Video" autoPlay loop muted playsInline>
            <source src="/SQ1_2.mp4" type="video/mp4" />
          </video>
        </Link>
      </div>

      <div className="MockupSlider"> 
      <HorizontalImageGallery/>

      </div>
    </>
  );
}
