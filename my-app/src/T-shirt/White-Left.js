import React, { useState, useEffect } from "react";

import "./Style.css";
import Navigation from "../Components/Navigation"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import WhiteLeftMockup from "../Asset/T-shirt/White-Left.png";
import MenuWhiteLeft from "../Components/White/MenuWhiteLeft";
import Upload from "../Upload/Upload1";
import FieldFull from "../Asset/T-shirt/Field-Arm-Black.png"; 

import ImageSaveButton from "../Custom-Design/ImageSaveButton";

function WhiteLeft({ setProductsitemOpen }) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [savedImage, setSavedImage] = useState(null);

  const [showDropdown] = useState(true);
  const [imageStyleOption, setImageStyleOption] = useState("1"); // เริ่มต้นด้วย A3
  const [imageStyle, setImageStyle] = useState({
    width: "25%", 
    paddingLeft: "8px",
    objectPosition: "left 0px top 210px",
  });

  const handleImageStyleChange = (selectedOption) => {
    setImageStyleOption(selectedOption);
  };

  useEffect(() => {
    if (showDropdown) {
      switch (imageStyleOption) {
        case "1":
          setImageStyle({
            width: "25%", 
            paddingLeft: "8px",
            objectPosition: "left 0px top 210px",
          });
          break;
        case "2":
          setImageStyle({
            width: "18%",
            paddingLeft: "8px",
            objectPosition: "left 0px top 230px",
          });
          break;
        case "3":
          setImageStyle({
            width: "14%",
            paddingLeft: "8px",
            objectPosition: "left 0px top 240px",
          });
          break;
        default:

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
      window.location.href = "/T-shirt/White-Back";
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
                <img id="MockupFront1" src={WhiteLeftMockup} alt="Mockup" />
                {uploadedImage ? (
                  <img
                    id="FieldUploadLeft"
                    src={uploadedImage}
                    alt="FieldUpload"
                    style={imageStyle}
                  />
                ) : (
                  <img id="FieldDesignRight" src={FieldFull} alt="FieldDesign" />
                )}
              </div>

              <div className="Box5">
                <MenuWhiteLeft />
                {showDropdown && (
                  <div className="dropdown">
                    <label>ขนาด:</label>
                    <select
                      value={imageStyleOption}
                      onChange={(e) => handleImageStyleChange(e.target.value)}
                    >
                    <option value="1">A6</option>
                    <option value="2">A7</option>
                    <option value="3">A8</option>
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
              <MenuWhiteLeft />
              {showDropdown && (
                <div className="dropdown">
                  <label>ขนาด:</label>
                  <select
                    value={imageStyleOption}
                    onChange={(e) => handleImageStyleChange(e.target.value)}
                  >
                    <option value="1">A6</option>
                    <option value="2">A7</option>
                    <option value="3">A8</option>
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


export default WhiteLeft;
