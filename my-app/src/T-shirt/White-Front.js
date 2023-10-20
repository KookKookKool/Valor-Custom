import React, { useState } from "react";
import "./Style.css";
import Navigation from "../Components/Navigation";
import Back from "../Asset/icon/Back.png";
import WhiteFrontMockup from "../Asset/T-shirt/White-Front.png";
import MenuW from "../Components/White/MenuWhite";
import Upload from "../Upload/Upload1";
import FieldFull from "../Asset/T-shirt/Field-Full-Black.png"; // นี่คือการ import 'FieldFull'

function WhiteFront({ setProductsitemOpen }) {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (selectedImage) => {
    setUploadedImage(URL.createObjectURL(selectedImage));
  };

  const handleGoBack = () => {
    const confirmed = window.confirm(
      "คุณต้องการย้อนกลับ โดยรายการจะไม่ถูกบันทึกหรือไม่ ?"
    );
    if (confirmed) {
      setProductsitemOpen(true);
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

          <div className="FieldCustom">
            <img id="MockupFront" src={WhiteFrontMockup} alt="Mockup" />
            {uploadedImage ? (
              <img id="FieldUpload" src={uploadedImage} alt="FieldDesign" />
            ) : (
              <img id="FielDesign" src={FieldFull} alt="FieldDesign" />
            )}

          <div className="BoxCustom">
          <Upload onUpload={handleImageUpload} />
          </div>
          </div>


        <div className="Box3">
          <MenuW />
        </div>
      </div>
              </div>
    </>
  );
}

export default WhiteFront;
