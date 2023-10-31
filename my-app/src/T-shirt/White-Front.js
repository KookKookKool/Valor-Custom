import React, { useState } from "react";
import "./Style.css";
import Navigation from "../Components/Navigation";
import Back from "../Asset/icon/Back.png";
import WhiteFrontMockup from "../Asset/T-shirt/White-Front.png";
import MenuW from "../Components/White/MenuWhite";
import Upload from "../Upload/Upload1";
import FieldFull from "../Asset/T-shirt/Field-Full-Black.png";

import Code2 from "../Custom-Design/BntUpload";

import "../Components/Products.css";

function WhiteFront({ setProductsitemOpen }) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [dataFromCode2, setDataFromCode2] = useState(""); // สร้าง state เพื่อเก็บข้อมูลจาก Code2

  const handleImageUpload = (selectedImage) => {
    setUploadedImage(URL.createObjectURL(selectedImage));
  };

  const handleDataFromCode2 = (data) => {
    // รับข้อมูลจาก Code2
    setDataFromCode2(data);
  };

  const handleGoBack = () => {
    const confirmed = window.confirm(
      "คุณต้องการย้อนกลับ โดยรายการจะไม่ถูกบันทึกหรือไม่ ?"
    );
    if (confirmed) {
      window.location.href = "/Main";
    }
  };

  return (
    <>
      <div className="container">
        <img id="Logo" src={require('../logo.png')} alt="img" />
        <div className="Frame1">
          <h3 className="CenteredHeader">CUSTOM DESIGN</h3>
          <div className="Box">
            <div className="Box2">
              <button id="BntBack" onClick={handleGoBack}>
                <img src={Back} alt="Back" />
              </button>
              <div className="Box3">
                <Navigation />
              </div>
            </div>
            <div className="FieldCustom">
              <div className="CustomFront">
                <img id="MockupFront" src={WhiteFrontMockup} alt="Mockup" />
                {uploadedImage ? (
                  <img id="FieldUpload" src={uploadedImage} alt="FieldUpload" />
                ) : (
                  <img id="FieldDesign" src={FieldFull} alt="FieldDesign" />
                )}
              </div>
              <Upload onUpload={handleImageUpload} />

              {/* เรียกใช้ Code2 เพื่อรับค่า */}
              <Code2 onDataReceived={handleDataFromCode2} />
            </div>

            <div className="Box3">
              <MenuW />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhiteFront;
