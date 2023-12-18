import { useState, useEffect } from 'react';
import "./Index.css";
import Navigation from "../Components/Navigation";
import Back from "../Asset/icon/Back.png";
import LaserPatchMockup from "../LaserPatch/LaserPatchHover.png";
import Zone from "../LaserPatch/Zone.png";
import MenuW from "../Components/White/MenuWhite";
import Upload from "../Upload/Upload1";

import ImageSaveButton from "../Custom-Design/ImageSaveButton";

import "../Components/Products.css";

function LaserPatch({ setProductsitemOpen }) {
  
  const [uploadedImage, setUploadedImage] = useState(null);
  const [savedImage, setSavedImage] = useState(null);
  const [showDropdown] = useState(true);
  const [imageStyleOption, setImageStyleOption] = useState("1"); // เริ่มต้นด้วย A3
  const [imageStyle, setImageStyle] = useState({
    width: "54%", // ค่าเริ่มต้นสำหรับ A3

    objectPosition: "left 0px top 202px",
  });

  const handleImageUpload = (selectedImage) => {
    setUploadedImage(URL.createObjectURL(selectedImage));
  };

  const handleSaveImage = () => {
    setSavedImage(uploadedImage);
  
    // Pass uploadedImage to OtherPage
    window.location.href = `/Custom-Design/Main2?uploadedImage=${encodeURIComponent(uploadedImage)}`;
    // Alternatively, you can use React Router's history object to navigate and pass state
    // history.push("/Custom-Design/Main2", { uploadedImage });
  };
  

  const handleImageStyleChange = (selectedOption) => {
    setImageStyleOption(selectedOption);
  };

  useEffect(() => {
    if (showDropdown) {
      switch (imageStyleOption) {
        case "1, default":
          setImageStyle({
            width: "54%",
            objectPosition: "left 0px top 202px",
          });
          break;
        case "2":
          setImageStyle({
            width: "48%",

            objectPosition: "left 0px top 202px",
          });
          break;
        case "3":
          setImageStyle({
            width: "40%",

            objectPosition: "left 0px top 202px",
          });
          break;
        case "4":
          setImageStyle({
            width: "28%",

            objectPosition: "left 0px top 202px",
          });
          break;
        case "5":
          setImageStyle({
            width: "18%",
            paddingLeft: "24%",
            objectPosition: "left 0px top 212px",
          });
          break;
        case "6":
          setImageStyle({
            width: "14%",
            paddingLeft: "29%",
            objectPosition: "left 0px top 218px",
          });
          break;
        default:
          // กระทำเมื่อไม่มี case ไหนตรงกับ imageStyleOption
          break;
      }
    }
  }, [showDropdown, imageStyleOption]);

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
            </div>
            <div className="FieldCustom">
              <div className="CustomFront">
                <img id="MockupFront1" src={Zone} alt="Mockup" />
                {uploadedImage ? (
                  <img
                    id="FieldUpload"
                    src={uploadedImage}
                    alt="FieldUpload"
                    style={imageStyle}
                  />
                ) : (
                  <img id="FieldDesign" src={LaserPatchMockup} alt="FieldDesign" />
                )}
              </div>

              <div className="Box5">

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
        <ImageSaveButton onSave={handleSaveImage} savedImage={savedImage}/> 
      </div>
            </div>
            <div className="Box4">

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

export default LaserPatch;
