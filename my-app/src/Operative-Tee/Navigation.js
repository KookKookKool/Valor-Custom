import React, { useState } from "react";
import { Link } from "react-router-dom";
import Black from "../Asset/icon/Black.png";
import Grey from "../Asset/icon/Grey.png";

//import Crimson from "../Asset/icon/Crimson.png";


const Navigation = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);


  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };


  return (
    <>
    <nav className="navigation">
      <h4 className="HeaderNavi">COLORS - สี</h4>
      <div className="Menu-iconsWhite">
        <div className={`Icon1 ${selectedIcon === "White" ? "active" : ""}`}>
          <Link to="/T-shirt/Operative" onClick={() => handleIconClick("White")}>
            <img src={Black} alt="WhiteIcon" />
          </Link>
        </div>
        <div className={`Icon ${selectedIcon === "Green" ? "active" : ""}`}>
          <Link to="/T-shirt/OperativeGrey" onClick={() => handleIconClick("Grey")}>
            <img src={Grey} alt="GreenIcon" />
          </Link>
        </div>
      </div>
    </nav>

    </>
  );
};

export default Navigation;
