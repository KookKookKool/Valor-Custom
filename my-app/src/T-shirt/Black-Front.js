import React, { useState } from "react";
import "./Style.css";
import Navigation from "../Components/Navigation"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import BlackFrontMockup from "../Asset/T-shirt/Black-Front.png";

import MenuW from "../Components/MenuWhite";

function BlackFront({ setProductsitemOpen }) {
  const handleGoBack = () => {
    const confirmed = window.confirm(
      "คุณต้องการย้อนกลับ โดยรายการจะไม่ถูกบันทึกหรือไม่ ?"
    );
    if (confirmed) {
      setProductsitemOpen(true); // ตั้งค่าเพื่อให้ ul แสดงผล
      window.history.back();
    }
  };
  const [selectedIcon, setSelectedIcon] = useState("Black");

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
        <img id="MockupFront" src={BlackFrontMockup} alt="Mockup" />
        <div className="Box3">
          <MenuW />
        </div>
      </div>
    </div>
    </>
  );
}

export default BlackFront;
