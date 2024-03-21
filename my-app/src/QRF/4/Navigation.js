import React, { useState } from "react";
import { Link } from "react-router-dom";
import White from "../../Asset/icon/White.png";
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
        <div className={`Icon1 ${selectedIcon === "Navy" ? "active" : ""}`}>
          <Link to="/Shirt/QRF4" onClick={() => handleIconClick("Crimson")}>
            <img src={White} alt="WhiteIcon" />
          </Link>
        </div>
        <div className={`Icon ${selectedIcon === "Green" ? "active" : ""}`}>
          <Link to="/Shirt/QRF4_2" onClick={() => handleIconClick("Green")}>
            <img src={Green} alt="GreenIcon" />
          </Link>
        </div>
      </div>
    </nav>

    </>
  );
};

export default Navigation;
