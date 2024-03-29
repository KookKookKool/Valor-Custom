//whiteBack.js
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setUploadedImageBack, setImageStyleOptionBack } from "../Actions/actionsBack";
//import { storeBack, persistorBack } from '../Store/storeBack';
import { useNavigate } from "react-router-dom";

import "./Style.css";
import Navigation from "../Components/Navigation"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import WhiteBackMockup from "../Asset/T-shirt/White-Back.png";
import MenuWhiteBack from "../Components/White/MenuWhiteBack";
import Upload from "../Upload/Upload1";
import FieldFull from "../Asset/T-shirt/Field-Full-Black.png"; // นี่คือการ import 'FieldFull'

import "../Components/Products.css";

function WhiteBack({ uploadedImageBack, setUploadedImageBack, setImageStyleOptionBack }) {
  const [showDropdown] = useState(true);
  const [imageStyleOption, setImageStyleOption] = useState("1"); // เริ่มต้นด้วย A3
  const [imageStyle, setImageStyle] = useState({
    width: "54%", // ค่าเริ่มต้นสำหรับ A3

    objectPosition: "left 0px top 164px",
  });

  const navigate = useNavigate();

  const handleImageUpload = (uploadedImageBack) => {
    console.log("Uploaded Image Back:", uploadedImageBack);
    setUploadedImageBack(uploadedImageBack, 1); // index 1 สำหรับ WhiteBack
  };

  //const handleSaveImage = () => {
  //navigate(`/Custom-Design/Main2?uploadedImage=${encodeURIComponent(uploadedImageFront)}`);
  //};

  const handleSaveImage = () => {
    // ทำการ dispatch action เพื่อบันทึกรูป
    setUploadedImageBack(uploadedImageBack);
    setImageStyleOptionBack(imageStyleOption);
    navigate("/T-shirt/White-Right");
  };

  const handleImageStyleChange = (selectedOption) => {
    setImageStyleOption(selectedOption);
    setImageStyleOptionBack(selectedOption);
  };

  useEffect(() => {
    if (showDropdown) {
      switch (imageStyleOption) {
        case "1, default":
          setImageStyle({
            width: "54%",
            objectPosition: "left 0px top 164px",
          });
          break;
        case "2":
          setImageStyle({
            width: "48%",

            objectPosition: "left 0px top 174px",
          });
          break;
        case "3":
          setImageStyle({
            width: "40%",

            objectPosition: "left 0px top 168px",
          });
          break;
        case "4":
          setImageStyle({
            width: "28%",

            objectPosition: "left 0px top 158px",
          });
          break;
        case "5":
          setImageStyle({
            width: "18%",
            /*paddingLeft: "24%",*/
            objectPosition: "left 0px top 162px",
          });
          break;
        case "6":
          setImageStyle({
            width: "14%",
            /*paddingLeft: "29%",*/
            objectPosition: "left 0px top 168px",
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
      navigate("/T-shirt/White-Front");
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
                <img id="MockupFront1" src={WhiteBackMockup} alt="Mockup" />
                {uploadedImageBack ? (
                  <img
                    id="FieldUpload"
                    src={uploadedImageBack}
                    alt="FieldUpload"
                    style={{ ...imageStyle }}
                  />
                ) : (
                  <img id="FieldDesign" src={FieldFull} alt="FieldDesign" />
                )}
              </div>

              <div className="Box5">
                <MenuWhiteBack />
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
              <Upload onUpload={handleImageUpload} index={1} />
                <button className="Btnsave" onClick={handleSaveImage}>
                  บันทึกและถัดไป
                </button>
              </div>
            </div>
            <div className="Box4">
              <MenuWhiteBack />
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

const mapStateToPropsBack = (state) => ({
  uploadedImageBack: (state.whiteBack && state.whiteBack.images && state.whiteBack.images[1]) || null,
  imageStyleOptionBack: state.whiteBack ? state.whiteBack.imageStyleOption : null,
});

const mapDispatchToPropsBack = (dispatch) => ({
  setUploadedImageBack: (image) => dispatch(setUploadedImageBack(image, 1)),
  setImageStyleOptionBack: (imageStyleOption) => dispatch(setImageStyleOptionBack(imageStyleOption)), 
  setImageStyleOptionBackDispatch: (imageStyleOption) => dispatch({ type: "SET_IMAGE_STYLE_OPTION_BACK", imageStyleOption }),
});

export default connect(mapStateToPropsBack, mapDispatchToPropsBack)(WhiteBack);
