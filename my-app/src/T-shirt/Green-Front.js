import React, { useState, useEffect } from "react";

import "./Style.css";
import Navigation from "../Components/Navigation3"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import GreenFrontMockup from "../Asset/T-shirt/Green-Front.png";
import MenuB from "../Components/Green/MenuGreen";
import Upload from "../Upload/Upload1";
import FieldFull from "../Asset/T-shirt/Field-Full-White.png"; 
import ImageSaveButton from "../Custom-Design/ImageSaveButton";

function GreenFront({ setProductsitemOpen }) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [savedImage, setSavedImage] = useState(null);

  const [showDropdown] = useState(true);
  const [imageStyleOption, setImageStyleOption] = useState("1"); // เริ่มต้นด้วย A3
  const [imageStyle, setImageStyle] = useState({
    width: "52%", // ค่าเริ่มต้นสำหรับ A3
    paddingLeft: "3px",
    objectPosition: "left 0px top 202px",
  });

  const handleImageStyleChange = (selectedOption) => {
    setImageStyleOption(selectedOption);
  };

  useEffect(() => {
    if (showDropdown) {
      switch (imageStyleOption) {
        case "1, default":
          setImageStyle({
            width: "52%",
            paddingLeft: "3px",
            objectPosition: "left 0px top 202px",
          });
          break;
        case "2":
          setImageStyle({
            width: "46%",
            paddingLeft: "3px",
            objectPosition: "left 0px top 202px",
          });
          break;
        case "3":
          setImageStyle({
            width: "38%",
            paddingLeft: "3px",
            objectPosition: "left 0px top 202px",
          });
          break;
        case "4":
          setImageStyle({
            width: "26%",
            paddingLeft: "3px",
            objectPosition: "left 0px top 202px",
          });
          break;
        case "5":
          setImageStyle({
            width: "16%",
            paddingLeft: "26%",
            objectPosition: "left 0px top 212px",
          });
          break;
        case "6":
          setImageStyle({
            width: "12%",
            paddingLeft: "31%",
            objectPosition: "left 0px top 218px",
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
              <img id="MockupFront3" src={GreenFrontMockup} alt="Mockup" />
              {uploadedImage ? (
                  <img
                    id="FieldUpload2"
                    src={uploadedImage}
                    alt="FieldUpload2"
                    style={imageStyle}
                  />
                ) : (
                  <img id="FieldDesign3" src={FieldFull} alt="FieldDesign" />
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

export default GreenFront;
