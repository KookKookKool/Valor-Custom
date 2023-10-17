import React from 'react';

import "./Style.css";
import Navigation from "../Components/Navigation"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import GreenFrontMockup from "../Asset/T-shirt/Green-Front.png";
import MenuB from "../Components/Green/MenuGreen";

function GreenFront({ setProductsitemOpen }) {
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
        <img id="MockupFront" src={GreenFrontMockup} alt="Mockup" />
        <div className="Box3">
          <MenuB />
        </div>
      </div>
    </div>
    </>
  );
}

export default GreenFront;
