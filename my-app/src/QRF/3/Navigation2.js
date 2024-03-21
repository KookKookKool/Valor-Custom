import React, { useState } from "react";
import { Link } from "react-router-dom";
import Black from "../../Asset/icon/Black.png";
import Navy from "../../Asset/icon/Navi.png";
import Green from "../../Asset/icon/Green.png";



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
        <div className={`Icon ${selectedIcon === "White" ? "active" : ""}`}>
          <Link to="/Shirt/QRF3" onClick={() => handleIconClick("White")}>
            <img src={Black} alt="Blackicon" />
          </Link>
        </div>
        <div className={`Icon ${selectedIcon === "Green" ? "active" : ""}`}>
          <Link to="/Shirt/QRF3_2" onClick={() => handleIconClick("Green")}>
            <img src={Green} alt="GreenIcon" />
          </Link>
        </div>
        <div className={`Icon1 ${selectedIcon === "Navy" ? "active" : ""}`}>
          <Link to="/Shirt/QRF3_3" onClick={() => handleIconClick("Navy")}>
            <img src={Navy} alt="NavyIcon" />
          </Link>
        </div>
      </div>
    </nav>

    </>
  );
};

export default Navigation;
