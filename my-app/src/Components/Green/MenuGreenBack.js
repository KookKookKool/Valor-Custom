import React from "react";
import { Link } from "react-router-dom";

import "./MenuGreenBack.css";

const MenuW = () => {
  return ( 
    <nav className="MenuW">
      <h4 className="HeaderMenuWhite">MENU</h4>

      <div className="Menu-icons">
        <Link to="/T-shirt/White-Front">
          <div className="Btn11">หน้า</div>
        </Link>
        <Link to="/T-shirt/White-Back">
          <div className="Btn2">หลัง</div>
        </Link>
        <Link to="/T-shirt/White-Right">
          <div className="Btn33">แขนขวา</div>
        </Link>
        <Link to="/T-shirt/White-Left">
          <div className="Btn44">แขนซ้าย</div>
        </Link>
      </div>

    </nav>

  );
};

export default MenuW;
