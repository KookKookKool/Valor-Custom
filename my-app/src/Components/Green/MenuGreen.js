import React from "react";
import { Link } from "react-router-dom";
import "./MenuGreen.css"; // สร้างไฟล์ CSS สำหรับสไตล์ Navigation2

const MenuW = () => {
  return (
    <nav className="MenuW">
      <h4 className="HeaderMenuWhite">Position</h4>
      <h4 className="HeaderMenuWhite">ตำแหน่งบนสินค้า</h4>
      <div className="Menu-icons">
        <Link to="/T-shirt/Green-Front">
          <div className="Btn1">หน้า</div>
        </Link>
        <Link to="/T-shirt/Green-Back">
          <div className="Btn22">หลัง</div>
        </Link>
        <Link to="/T-shirt/Green-Right">
          <div className="Btn33">แขนขวา</div>
        </Link>
        <Link to="/T-shirt/Green-Left">
          <div className="Btn44">แขนซ้าย</div>
        </Link>
      </div>

    </nav>

  );
};

export default MenuW;
