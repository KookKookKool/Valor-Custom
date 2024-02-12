import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';

const Payment = () => {
  const [countdown, setCountdown] = useState(900); // 15 minutes in seconds
  const [ setQRCodeImage ] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const handleSaveQRCode = () => {
    const qrCodeElement = document.getElementById('qrcode-container');

    if (qrCodeElement) {
      html2canvas(qrCodeElement).then(canvas => {
        // ดึงข้อมูลรูปภาพในรูปแบบ base64
        const imageData = canvas.toDataURL('image/png');

        // สร้างลิงค์สำหรับดาวน์โหลดหรือแสดงรูปภาพ
        const link = document.createElement('a');
        link.href = imageData;
        link.download = 'qrcode.png';
        link.click();

        // สามารถเก็บข้อมูลรูปภาพไว้เพื่อแสดงใน UI หรือทำตามที่คุณต้องการ
        setQRCodeImage(imageData);
      });
    }
  };

  const handleNext = () => {
    navigate("/Payment-Success");
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
            <QRCode
              bgColor='#ffffff'
              fgColor='#000000'
              value='No set'
            />
          </div>
          <p>โปรดชำระเงินภายในเวลา : {formatTime(countdown)}</p>
          <h3>รวม 600 บาท</h3>
          <button className="PaymentBtn" onClick={handleSaveQRCode}>บันทึกรูปภาพ</button>
          <button className="PaymentBtn" onClick={handleNext} style={{ marginBottom: "2vh" }} >ชำระเงินสำเร็จ</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
