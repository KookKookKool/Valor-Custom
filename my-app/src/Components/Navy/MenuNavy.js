import React from "react";
import { Link } from "react-router-dom";
import "./MenuNavy.css"; // สร้างไฟล์ CSS สำหรับสไตล์ Navigation2

const MenuW = () => {
  return (
    <nav className="MenuW">
      <h4 className="HeaderMenuWhite">Position</h4>
      <h4 className="HeaderMenuWhite">ตำแหน่งบนสินค้า</h4>
      <div className="Menu-icons">
        <Link to="/T-shirt/Navy-Front">
          <div className="Btn1">หน้า</div>
        </Link>
        <Link to="/T-shirt/Navy-Back">
          <div className="Btn22">หลัง</div>
        </Link>
        <Link to="/T-shirt/Navy-Right">
          <div className="Btn33">แขนขวา</div>
        </Link>
        <Link to="/T-shirt/Navy-Left">
          <div className="Btn44">แขนซ้าย</div>
        </Link>
      </div>

    </nav>

  );
};

export default MenuW;
