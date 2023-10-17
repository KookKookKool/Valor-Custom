import React from 'react';

import "./Style.css";
import Navigation from "../Components/Navigation"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import GreenLeftMockup from "../Asset/T-shirt/Green-Left.png";

import MenuGreenLeft from "../Components/Green/MenuGreenLeft";

function GreenLeft({ setProductsitemOpen }) {
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
    <div className="Layout">
      <div className="Box">
        <div className="Box2">
          <button id="BntBack" onClick={handleGoBack}>
            <img src={Back} alt="Back" />
          </button>
          <div className="Box3">
            <Navigation />
          </div>
        </div>
        <img id="MockupLeft" src={GreenLeftMockup} alt="Mockup" />
        <div className="Box3">
          <MenuGreenLeft />
        </div>
      </div>
    </div>
    </>
  );
}

export default GreenLeft;
