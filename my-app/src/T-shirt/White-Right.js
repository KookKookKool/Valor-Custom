import React from 'react';

import "./Style.css";
import Navigation from "../Components/Navigation"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import WhiteRightMockup from "../Asset/T-shirt/White-Right.png";
import MenuWhiteRight from "../Components/White/MenuWhiteRight";

function WhiteRight({ setProductsitemOpen }) {
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
        <img id="MockupRight" src={WhiteRightMockup} alt="Mockup" />
        <div className="Box3">
          <MenuWhiteRight />
        </div>
      </div>
    </div>
    </>
  );
}

export default WhiteRight;
