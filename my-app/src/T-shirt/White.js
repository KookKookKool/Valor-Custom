import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import Navigation from "../Components/Navigation";

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
<button onClick={handleGoBack}>ย้อนกลับ</button>

<Navigation/>


      <h2>White T-shirt</h2>


    </div>
  );
}

export default White;
