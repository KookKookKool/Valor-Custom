import React, { useState, useEffect } from "react";

import "./Style.css";
import Navigation from "../Components/Navigation1"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import BlackBackMockup from "../Asset/T-shirt/Black-Back.png";
import Upload from "../Upload/Upload1";
import FieldFull from "../Asset/T-shirt/Field-Full-White.png"; // นี่คือการ import 'FieldFull'
import MenuB from "../Components/Black/MenuBlackBack";
import ImageSaveButton from "../Custom-Design/ImageSaveButton";

function BlackBack({ setProductsitemOpen }) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [savedImage, setSavedImage] = useState(null);

  const [showDropdown] = useState(true);
  const [imageStyleOption, setImageStyleOption] = useState("1"); // เริ่มต้นด้วย A3
  const [imageStyle, setImageStyle] = useState({
    width: "54%", // ค่าเริ่มต้นสำหรับ A3
    paddingLeft: "5px",
    objectPosition: "left 0px top 164px",
  });

  const handleImageStyleChange = (selectedOption) => {
    setImageStyleOption(selectedOption);
  };

  useEffect(() => {
    if (showDropdown) {
      switch (imageStyleOption) {
        case "1, default":
          setImageStyle({
            width: "54%",
            paddingLeft: "5px",
            objectPosition: "left 0px top 164px",
          });
          break;
        case "2":
          setImageStyle({
            width: "48%",
            paddingLeft: "5px",
            objectPosition: "left 0px top 164px",
          });
          break;
        case "3":
          setImageStyle({
            width: "40%",
            paddingLeft: "5px",
            objectPosition: "left 0px top 168px",
          });
          break;
        case "4":
          setImageStyle({
            width: "28%",
            paddingLeft: "5px",
            objectPosition: "left 0px top 162px",
          });
          break;
        case "5":
          setImageStyle({
            width: "18%",
            paddingLeft: "8px",
            objectPosition: "left 0px top 164px",
          });
          break;
        case "6":
          setImageStyle({
            width: "14%",
            paddingLeft: "8px",
            objectPosition: "left 0px top 167px",
          });
          break;
        default:
          // กระทำเมื่อไม่มี case ไหนตรงกับ imageStyleOption
          break;
      }
    }
  }, [showDropdown, imageStyleOption]);

  const handleImageUpload = (selectedImage) => {
    setUploadedImage(URL.createObjectURL(selectedImage));
  };

  const handleSaveImage = () => {
    setSavedImage(uploadedImage);
  };

  const handleGoBack = () => {
    const confirmed = window.confirm(
      "คุณต้องการย้อนกลับ ?"
    );
    if (confirmed) {
      window.location.href = "/T-shirt/Black-Front";
    }
  };

  return (
    <>
      <div className="container">
        <img id="Logo" src={require("../logo.png")} alt="img" />
        <div className="Frame1">
          <div>
        <h3 className="CenteredHeader">CUSTOM DESIGN</h3>
        </div>
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
                <img id="MockupFront1" src={BlackBackMockup} alt="Mockup" />
                {uploadedImage ? (
                  <img
                    id="FieldUploadB1"
                    src={uploadedImage}
                    alt="FieldUpload"
                    style={imageStyle}
                  />
                ) : (
                  <img id="FieldDesignBack1" src={FieldFull} alt="FieldDesign" />
                )}
              </div>

              <div className="Box5">
                <MenuB />
                {showDropdown && (
                  <div className="dropdown">
                    <label>ขนาด:</label>
                    <select
                      value={imageStyleOption}
                      onChange={(e) => handleImageStyleChange(e.target.value)}
                    >
                      <option value="1, default">A3</option>
                      <option value="2">A4</option>
                      <option value="3">A5</option>
                      <option value="4">A6</option>
                      <option value="5">A7</option>
                      <option value="6">A8</option>
                    </select>
                  </div>
                )}
              </div>
              <div className="Box6">
                <Upload onUpload={handleImageUpload} />
                <ImageSaveButton
                  onSave={handleSaveImage}
                  savedImage={savedImage}
                />
              </div>
            </div>
            <div className="Box4">
              <MenuB />
              {showDropdown && (
                <div className="dropdown">
                  <label>ขนาด:</label>
                  <select
                    value={imageStyleOption}
                    onChange={(e) => handleImageStyleChange(e.target.value)}
                  >
                    <option value="1, default">A3</option>
                    <option value="2">A4</option>
                    <option value="3">A5</option>
                    <option value="4">A6</option>
                    <option value="5">A7</option>
                    <option value="6">A8</option>
                  </select>
                </div>
                
              )}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}


export default BlackBack;
