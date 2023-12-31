import React, { useState } from "react";
import { Link } from "react-router-dom";
import White from "../Asset/icon/White.png";
import Black from "../Asset/icon/Black.png";
import Navy from "../Asset/icon/Navi.png";
import Green from "../Asset/icon/Green.png";


import "./Navigation.css";

const Navigation = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);


  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };


  return (
    <>
    <nav className="navigation">
      <h4 className="HeaderNavi">COLORS</h4>

      <div className="Menu-iconsWhite">
        <div className={`Icon ${selectedIcon === "White" ? "active" : ""}`}>
          <Link to="../T-shirt/White-Front" onClick={() => handleIconClick("White")}>
            <img src={White} alt="WhiteIcon" />
          </Link>
        </div>
        <div className={`Icon1 ${selectedIcon === "Black" ? "active" : ""}`}>
          <Link to="../T-shirt/Black-Front" onClick={() => handleIconClick("Black")}>
            <img src={Black} alt="BlackIcon" />
          </Link>
        </div>
        <div className={`Icon ${selectedIcon === "Navy" ? "active" : ""}`}>
          <Link to="../T-shirt/Navy-Front" onClick={() => handleIconClick("Navy")}>
            <img src={Navy} alt="NavyIcon" />
          </Link>
        </div>
        <div className={`Icon ${selectedIcon === "Green" ? "active" : ""}`}>
          <Link to="../T-shirt/Green-Front" onClick={() => handleIconClick("Green")}>
            <img src={Green} alt="GreenIcon" />
          </Link>
        </div>
      </div>
    </nav>

    </>
  );
};

export default Navigation;
