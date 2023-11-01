import React, { useState } from "react";

import "./Style.css";
import Navigation from "../Components/Navigation"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import WhiteBackMockup from "../Asset/T-shirt/White-Back.png";

import MenuWhiteBack from "../Components/White/MenuWhiteBack";

import Upload from "../Upload/Upload1";
import FieldFull from "../Asset/T-shirt/Field-Full-Black.png"; // นี่คือการ import 'FieldFull'

import ImageSaveButton from "../Custom-Design/ImageSaveButton";

function WhiteBack({ setProductsitemOpen }) {

  const [uploadedImage, setUploadedImage] = useState(null);
  const [savedImage, setSavedImage] = useState(null);

  const handleImageUpload = (selectedImage) => {
    setUploadedImage(URL.createObjectURL(selectedImage));
  };

  const handleSaveImage = () => {
    setSavedImage(uploadedImage);
    // บันทึกรูปภาพที่อัพโหลดเข้าสู่ savedImage state
  };

  const handleGoBack = () => {
    const confirmed = window.confirm(
      "คุณต้องการย้อนกลับ ?"
    );
    if (confirmed) {
      window.location.href = "/T-shirt/White-Front";
    }
  };


  return (
    <>
      <div className="container">
        <img id="Logo" src={require("../logo.png")} alt="img" />
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
              <img id="MockupBack" src={WhiteBackMockup} alt="Mockup" />
              {uploadedImage ? (
                <img id="FieldUpload" src={uploadedImage} alt="FieldUpload" />
              ) : (
                <img id="FieldDesign2" src={FieldFull} alt="FieldDesign2" />
              )}
            </div>
            <Upload onUpload={handleImageUpload} />
            {/* เรียกใช้ปุ่มเพื่อบันทึกค่า จาก SRC WhiteFrontMockup กับ uploadedImage */}
            <ImageSaveButton onSave={handleSaveImage} savedImage={savedImage} />
          </div>
 
            <div className="Box3">
              <MenuWhiteBack />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhiteBack;
