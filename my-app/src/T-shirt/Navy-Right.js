import React from 'react';

import "./Style.css";
import Navigation from "../Components/Navigation"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import NavyRightMockup from "../Asset/T-shirt/Navy-Right.png";
import MenuNavyRight from "../Components/Navy/MenuNavyRight";

function NavyRight({ setProductsitemOpen }) {
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
        <img id="MockupRight" src={NavyRightMockup} alt="Mockup" />
        <div className="Box3">
          <MenuNavyRight />
        </div>
      </div>
    </div>
    </>
  );
}

export default NavyRight;
