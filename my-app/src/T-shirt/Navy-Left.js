import React from 'react';

import "./Style.css";
import Navigation from "../Components/Navigation"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import NavyLeftMockup from "../Asset/T-shirt/Navy-Left.png";

import MenuNavyLeft from "../Components/Navy/MenuNavyLeft";

function NavyLeft({ setProductsitemOpen }) {
  const handleGoBack = () => {
    const confirmed = window.confirm(
      "คุณต้องการย้อนกลับ โดยรายการจะไม่ถูกบันทึกหรือไม่ ?"
    );
    if (confirmed) {
      setProductsitemOpen(true); // ตั้งค่าเพื่อให้ ul แสดงผล                                                                               
      window.history.back();
    }
  };

  return (
    <>
      <div className="container">
      <img id="Logo" src={require('../logo.png')} alt="img" />
      <div className="Frame1">
      <h3 className="CenteredHeader">CUSTOM DESIGN</h3>
      <div className="Box">
        <div className="Box2">
          <button id="BntBack" onClick={handleGoBack}>
            <img src={Back} alt="Back" />
          </button>
          <div className="Box3">
            <Navigation />
          </div>
        </div>
        <img id="MockupLeft" src={NavyLeftMockup} alt="Mockup" />
        <div className="Box3">
          <MenuNavyLeft />
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default NavyLeft;
