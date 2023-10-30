import React, { useState } from "react";

import "./Style.css";
import Navigation from "../Components/Navigation"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import NavyFrontMockup from "../Asset/T-shirt/Navy-Front.png";
import Upload from "../Upload/Upload1";
import FieldFull from "../Asset/T-shirt/Field-Full-White.png"; 

import MenuW from "../Components/Navy/MenuNavy";

function NavyFront({ setProductsitemOpen }) {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (selectedImage) => {
    setUploadedImage(URL.createObjectURL(selectedImage));
  };

  const handleGoBack = () => {
   window.confirm(
      "คุณต้องการย้อนกลับ โดยรายการจะไม่ถูกบันทึกหรือไม่ ?"
    );
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
              <img id="MockupFront" src={NavyFrontMockup} alt="Mockup" />
              {uploadedImage ? (
                <img id="FieldUpload" src={uploadedImage} alt="FieldUpload" />
              ) : (
                <img id="FieldDesign" src={FieldFull} alt="FieldDesign" />
              )}
            </div>
            <Upload onUpload={handleImageUpload} />
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

export default NavyFront;
