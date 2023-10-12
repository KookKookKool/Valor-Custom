import React from "react";
import { Link } from "react-router-dom";
import "./MenuWhite.css"; // สร้างไฟล์ CSS สำหรับสไตล์ Navigation2

const MenuW = () => {
  return (
    <nav className="MenuW">
      <h4 className="HeaderMenuWhite">MENU</h4>

      <div className="Menu-icons">
        <Link to="/">
          <div className="Btn">หน้า</div>
        </Link>
        <Link to="/">
          <div className="Btn">หลัง</div>
        </Link>
        <Link to="/">
          <div className="Btn">แขนขวา</div>
        </Link>
        <Link to="/">
          <div className="Btn">แขนซ้าย</div>
        </Link>
      </div>

    </nav>

  );
};

export default MenuW;
