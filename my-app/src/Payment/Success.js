import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Success = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    navigate("/Main");
  };

  return (
    <div>
      <div className="container">
        <img id="Logo" src={require("../logo.png")} alt="img" />
        <div className="Frame2" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <div>
            <h3 className="CenteredHeader">CHECKOUT</h3>
          </div>
          <div id="qrcode-container">
            <img src='./Success.png' alt="Success"
            />
          </div>
          <p>ขอบคุณที่ชำระเงิน สินค้ากำลังดำเนินการผลิตและจะทำการจัดส่งถึงมือลูกค้าอย่าเร็วที่สุด</p>
          <button className="PaymentBtn" onClick={handleNext} style={{ marginBottom: "2vh" }} >ตกลง</button>
        </div>
      </div>
    </div>
  );
}

export default Success;
