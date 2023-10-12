import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import Navigation from "../Components/Navigation"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import WhiteFrontMockup from "../Asset/T-shirt/White-Front.png";

import MenuW from "../Components/MenuWhite";

function WhiteFront({ setProductsitemOpen }) {
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
        <img id="MockupFront" src={WhiteFrontMockup} alt="Mockup" />
        <div className="Box3">
          <MenuW />
        </div>
      </div>
    </div>
    </>
  );
}

export default WhiteFront;
