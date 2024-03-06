//whiteLeft.js
import React, { useState, useEffect } from "react";

import { connect } from 'react-redux';
import { setUploadedImageLeft, setImageStyleOptionLeft } from '../Actions/actionsLeft';
import { useNavigate } from 'react-router-dom';
import "./Style.css";

import Navigation from "../Components/Navigation"; //เลือกสี
import Back from "../Asset/icon/Back.png";
//import WhiteLeftMockup from "../Asset/T-shirt/White-Left.png";
import MenuWhiteLeft from "../Components/White/MenuWhiteLeft";
import Upload from "../Upload/Upload1";
import FieldFull from "../Asset/T-shirt/Field-Arm-Black.png"; 

function WhiteLeft({  uploadedImageLeft, setUploadedImageLeft, setImageStyleOptionLeft }) {

  const [showDropdown] = useState(true);
  const [imageStyleOption, setImageStyleOption] = useState("1"); // เริ่มต้นด้วย A3
  const [imageStyle, setImageStyle] = useState({
    width: "16%", 
    paddingLeft: "60px",
    objectPosition: "left 0px top 208px",
  });

  const navigate = useNavigate();

  const handleImageUpload = (uploadedImageLeft) => {
    console.log("Uploaded Image Left:", uploadedImageLeft);
    setUploadedImageLeft(uploadedImageLeft, 3); 
  };

  const handleSaveImage = () => {
    // ทำการ dispatch action เพื่อบันทึกรูป
    setUploadedImageLeft(uploadedImageLeft);
    setImageStyleOptionLeft(imageStyleOption);
    navigate("/Custom-Design/Preview-White");
  };

  const handleImageStyleChange = (selectedOption) => {
    setImageStyleOption(selectedOption);
    setImageStyleOptionLeft(selectedOption);
  };

  useEffect(() => {
    if (showDropdown) {
      switch (imageStyleOption) {
        case "9":
          setImageStyle({
            width: "16%", 
            paddingLeft: "60px",
            objectPosition: "left 0px top 208px",
          });
          break;
        case "10":
          setImageStyle({
            width: "12%",
            paddingLeft: "60px",
            objectPosition: "left 0px top 218px",
          });
          break;
        case "11":
          setImageStyle({
            width: "10%",
            paddingLeft: "60px",
            objectPosition: "left 0px top 228px",
          });
          break;
        default:

          break;
      }
    }
  }, [showDropdown, imageStyleOption]);

  const handleGoBack = () => {
    const confirmed = window.confirm(
      "คุณต้องการย้อนกลับ ?"
    );
    if (confirmed) {
      navigate("/T-shirt/White-Right");
    }
  };


  const DownrangePrice = () => {
    return 290;
  }

  //const A3Price = () => {
    //return 220;
  //}

  //const A4Price = () => {
    //return 160;
  //}

  //const A5Price = () => {
    //return 120;
  //}

  const A6Price = () => {
    return 100;
  }

  const A7Price = () => {
    return 80;
  }

  const A8Price = () => {
    return 50;
  }

  const calculateSelectedOptionPrice = () => {
    switch (imageStyleOption) {
      case "9":
        return A6Price();
      case "10":
        return A7Price();
      case "11":
        return A8Price();
      default:
        return 0;
    }
  };

  return (
    <>
      <div className="containerCSS">
        <img id="Logo" src={require("../logo.png")} alt="img" />
        <div className="Frame1">
          <div>
        <h3 className="CenteredHeader">T Shirt เสื้อยืด</h3>
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
                <img id="MockupFront1" src="/shirt-white-side.png" alt="Mockup" style={{ background: 'none', transform: 'scaleX(-1)' }} />
                {uploadedImageLeft ? (
                  <img
                    id="FieldUploadLeft"
                    src={uploadedImageLeft}
                    alt="FieldUpload"
                    style={imageStyle}
                  />
                ) : (
                  <img id="FieldDesignLeft" src={FieldFull} alt="FieldDesign" />
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
                      <option value="9">A6 / {A6Price()} บาท</option>
                      <option value="10">A7 / {A7Price()} บาท</option>
                      <option value="11">A8 / {A8Price()} บาท</option>
                    </select>
                  </div>
                )}
              </div>
              <div className="Box6">
              <h3 className="Price">ราคา: {DownrangePrice() + calculateSelectedOptionPrice()} บาท</h3>
              <Upload onUpload={handleImageUpload} index={3} />
                <button className="Btnsave" onClick={handleSaveImage}>
                  บันทึกและถัดไป
                </button>
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
                      <option value="9">A6 / {A6Price()} บาท</option>
                      <option value="10">A7 / {A7Price()} บาท</option>
                      <option value="11">A8 / {A8Price()} บาท</option>
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


const mapStateToPropsLeft = (state) => ({
  uploadedImageLeft: (state.whiteLeft && state.whiteLeft.images && state.whiteLeft.images[3]) || null,
  imageStyleOptionLeft: state.whiteLeft ? state.whiteLeft.imageStyleOption : null,
});

const mapDispatchToPropsLeft = (dispatch) => ({
  setUploadedImageLeft: (image) => dispatch(setUploadedImageLeft(image, 3)),
  setImageStyleOptionLeft: (imageStyleOption) => dispatch(setImageStyleOptionLeft(imageStyleOption)), 
  setImageStyleOptionLeftDispatch: (imageStyleOption) => dispatch({ type: "SET_IMAGE_STYLE_OPTION_LEFT", imageStyleOption }),
});

export default connect(mapStateToPropsLeft, mapDispatchToPropsLeft)(WhiteLeft);
