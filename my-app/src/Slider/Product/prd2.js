import React from "react";
import "./prd.css";
import M1 from '../../Asset/Mockup/2.png';

function prd1() {
  return (
    <div>
      <div className="cardPrd">
        <div className="image">
        <img src={M1} alt="" />
        </div>
        <div className="detailsPrd">
          <div className="center">
            <h1>
              ชื่อรุ่น
              <br />
              <span>ทีมที่สั่งผลิต</span>
            </h1>
            <p>
             คำอธิบายเช่น เนื้อผ้า หรือ สรรพคุณของสินค้า
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default prd1;
