import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import Navigation from "../Components/Navigation";
import Back from "../Asset/icon/Back.png";

function White({ setProductsitemOpen }) {
  const handleGoBack = () => {
    const confirmed = window.confirm("คุณต้องการย้อนกลับ โดยรายการจะไม่ถูกบันทึกหรือไม่ ?");
    if (confirmed) {
      setProductsitemOpen(true); // ตั้งค่าเพื่อให้ ul แสดงผล
      window.history.back();
    }
  };

  return (
    <div>
      <button id="Bnt1" onClick={handleGoBack}>
        <img src={Back} alt="Back" />
      </button>

<Navigation/>


      <h2>White T-shirt</h2>


    </div>
  );
}

export default White;
