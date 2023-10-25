import React, { useRef } from "react";
import "./HorizontalImageGallery.css";
import img1 from "../Asset/Mockup/1.png";
import img2 from "../Asset/Mockup/2.png";

import img4 from "../Asset/Mockup/4.png";
import img5 from "../Asset/Mockup/5.png";
import img7 from "../Asset/Mockup/7.png";
import img8 from "../Asset/Mockup/8.png";

const images = [img1, img2, img4, img5, img8];

const HorizontalImageGallery = () => {
  const galleryRef = useRef(null);



  return (
    <div className="gallery" ref={galleryRef}>
      {images.map((image, index) => (
        <div key={index} className="image">
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default HorizontalImageGallery;
