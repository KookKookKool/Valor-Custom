import React from "react";
import { Link } from "react-router-dom";

import White from "../Asset/icon/White.png";
import Black from "../Asset/icon/Black.png";
import Navy from "../Asset/icon/Navi.png";
import Green from "../Asset/icon/Green.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
   
    <nav className="navigation">
    <h4 className="HeaderNavi">COLORS</h4>

    <div className="Menu-iconsWhite">
    <div className="Icon">
      <Link to="/">
        <img src={White} alt="WhiteIcon" />
      </Link>
    </div>
    <div className="Icon">
      <Link to="/">
        <img src={Black} alt="BlackIcon" />
      </Link>
    </div>
    <div className="Icon">
      <Link to="/">
        <img src={Navy} alt="NavyIcon" />
      </Link>
    </div>
    <div className="Icon">
      <Link to="/">
        <img src={Green} alt="GreenIcon" />
      </Link>
      </div>
    </div>
    </nav>

    </>

  );
};

export default Navigation;
