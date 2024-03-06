//GreenRight.js
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { setUploadedImageRight, setImageStyleOptionRight } from '../Actions/actionsRight';
import { useNavigate } from 'react-router-dom';
import "./Style.css";

import Navigation from "../Components/Navigation3"; //เลือกสี
import Back from "../Asset/icon/Back.png";
//import WhiteRightMockup from "../Asset/T-shirt/White-Right.png";
import MenuWhiteRight from "../Components/Green/MenuGreenLeft";
import Upload from "../Upload/Upload1";
import FieldFull from "../Asset/T-shirt/Field-Arm-White.png"; 

function GreenRight({ uploadedImageRight, setUploadedImageRight, setImageStyleOptionRight }) {

  const [showDropdown] = useState(true);
  const [imageStyleOption, setImageStyleOption] = useState("1"); // เริ่มต้นด้วย A3
  const [imageStyle, setImageStyle] = useState({
    width: "16%", 
    paddingRight: "30px",
    objectPosition: "left 0px top 208px",
  });

  const navigate = useNavigate();

  const handleImageUpload = (uploadedImageRight) => {
    console.log("Uploaded Image Right:", uploadedImageRight);
    setUploadedImageRight(uploadedImageRight, 2); 
  };

  const handleSaveImage = () => {
    // ทำการ dispatch action เพื่อบันทึกรูป
    setUploadedImageRight(uploadedImageRight);
    setImageStyleOptionRight(imageStyleOption);
    navigate("/T-shirt/Green-Left");
  };

  const handleImageStyleChange = (selectedOption) => {
    setImageStyleOption(selectedOption);
    setImageStyleOptionRight(selectedOption);
  };

  useEffect(() => {
    if (showDropdown) {
      switch (imageStyleOption) {
        case "9":
          setImageStyle({
            width: "16%", 
            paddingRight: "30px",
            objectPosition: "left 0px top 208px",
          });
          break;
        case "10":
          setImageStyle({
            width: "12%",
            paddingRight: "30px",
            objectPosition: "left 0px top 218px",
          });
          break;
        case "11":
          setImageStyle({
            width: "10%",
            paddingRight: "30px",
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
      navigate("/T-shirt/Green-Back");
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
                <img id="MockupFront1" src="/shirt-Green-side.png" alt="Mockup" style={{ mixBlendMode: 'multiply', filter: 'contrast(1)' }}/>
                {uploadedImageRight ? (
                  <img
                    id="FieldUploadRight"
                    src={uploadedImageRight}
                    alt="FieldUpload"
                    style={imageStyle}
                  />
                ) : (
                  <img id="FieldDesignRight1" src={FieldFull} alt="FieldDesign" />
                )}
              </div>

              <div className="Box5">
                <MenuWhiteRight />
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
                <Upload onUpload={handleImageUpload} index={2} />
                <button className="Btnsave" onClick={handleSaveImage}>
                  บันทึกและถัดไป
                </button>
              </div>
            </div>
            <div className="Box4">
              <MenuWhiteRight />
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


const mapStateToPropsRight = (state) => ({
  uploadedImageRight: (state.whiteRight && state.whiteRight.images && state.whiteRight.images[2]) || null,
  imageStyleOptionRight: state.whiteRight ? state.whiteRight.imageStyleOption : null,
});

const mapDispatchToPropsRight = (dispatch) => ({
  setUploadedImageRight: (image) => dispatch(setUploadedImageRight(image, 2)),
  setImageStyleOptionRight: (imageStyleOption) => dispatch(setImageStyleOptionRight(imageStyleOption)), 
  setImageStyleOptionRightDispatch: (imageStyleOption) => dispatch({ type: "SET_IMAGE_STYLE_OPTION_RIGHT", imageStyleOption }),
});

export default connect(mapStateToPropsRight, mapDispatchToPropsRight)(GreenRight);