import React from "react";
import { Link } from "react-router-dom";

const MenuW = () => {
  return (
    <nav className="MenuW">
      <h4 className="HeaderMenuWhite">Position</h4>
      <h4 className="HeaderMenuWhite">ตำแหน่งบนสินค้า</h4>
      <div className="Menu-icons">
        <Link to="/Shirt/DownFrontBlack">
          <div className="Btn1">หน้า</div>
        </Link>
        <Link to="/Shirt/DownBackBlack">
          <div className="Btn22">หลัง</div>
        </Link>
        <Link to="/T-shirt/DownRightBlack">
          <div className="Btn33">แขนขวา</div>
        </Link>
        <Link to="/T-shirt/DownLeftBlack">
          <div className="Btn44">แขนซ้าย</div>
        </Link>
      </div>
    </nav>

  );
};

export default MenuW;
