// BlackFront.js
import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';

import { setUploadedImageFront, setImageStyleOptionFront } from '../Actions/actionsFront'; // แก้ชื่อ action creator ที่นี่
//import { storeFront, persistorFront } from '../Store/storeFront';
import { useNavigate } from 'react-router-dom';
import "./Style.css";
import Navigation from "../Components/Navigation1";
import Back from "../Asset/icon/Back.png";
import MenuW from "../Components/Black/MenuBlack";
import Upload from "../Upload/Upload1";
import FieldFull from "../Asset/T-shirt/Field-Full-White.png";
import "../Components/Products.css";

function BlackFront({ uploadedImageFront, setUploadedImageFront, setImageStyleOptionFront, onImageUpload }) {
  //const dispatch = useDispatch();
  const [showDropdown] = useState(true);
  const [imageStyleOption, setImageStyleOption] = useState("1");
  const [imageStyle, setImageStyle] = useState({
    width: "44%",
    paddingRight: "8px",
    objectPosition: "left 0px top 220px",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageUpload = (uploadedImageFront) => {
    console.log("Uploaded Image Front:", uploadedImageFront);
    setUploadedImageFront(uploadedImageFront, 0); // index 0 สำหรับ WhiteFront
  };

  const handleSaveImage = () => {
    // ทำการ dispatch action เพื่อบันทึกรูป
    setUploadedImageFront(uploadedImageFront);
    setImageStyleOptionFront(imageStyleOption);
    dispatch(setImageStyleOptionFront(imageStyleOption));
    //navigate('/Custom-Design/Main2'); ส่งรูปไปแสดงตาม path
    navigate('/T-shirt/Black-Back');
  };

  const handleImageStyleChange = (selectedOption) => {
    setImageStyleOption(selectedOption);
    setImageStyleOptionFront(selectedOption);
    
  };

  useEffect(() => {
    if (showDropdown) {
      switch (imageStyleOption) {
        case "1, default":
          setImageStyle({
            width: "44%",
            paddingLeft: "5px",
            objectPosition: "left 0px top 220px",
          });
          break;
        case "2":
          setImageStyle({
            width: "38%",
            paddingLeft: "5px",
            objectPosition: "left 0px top 220px",
          });
          break;
        case "3":
          setImageStyle({
            width: "30%",
            paddingLeft: "5px",
            objectPosition: "left 0px top 220px",
          });
          break;
        case "4":
          setImageStyle({
            width: "16%",
            paddingLeft: "5px",
            objectPosition: "left 0px top 220px",
          });
          break;
        case "5":
          setImageStyle({
            width: "12%",
            paddingLeft: "24%",
            objectPosition: "left 0px top 228px",
          });
          break;
        case "6":
          setImageStyle({
            width: "10%",
            paddingLeft: "24%",
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
      "คุณต้องการย้อนกลับ โดยรายการจะไม่ถูกบันทึกหรือไม่ ?"
    );
    if (confirmed) {
      navigate("/Shirt");
    }
  };

  return (
    <>
      <div className="container">
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
              <img id="MockupFront1" src="/T-Shirt-Black.png" alt="Mockup" />
              {uploadedImageFront ? (
                <img id="FieldUpload" src={uploadedImageFront} alt="FieldUpload" style={{ ...imageStyle }}/>

              ) : (
                <img
                  id="FieldDesign1"
                  src={FieldFull}
                  alt="FieldDesign"
                />
              )}
            </div>
              <div className="Box5">
                <MenuW />
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
              <Upload onUpload={handleImageUpload} index={0} />
                <button className='Btnsave' onClick={handleSaveImage}>บันทึกและถัดไป</button>
              </div>
            </div>
            <div className="Box4">
              <MenuW />
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
const mapStateToPropsFront = (state) => ({
  uploadedImageFront: (state.whiteFront && state.whiteFront.images && state.whiteFront.images[0]) || null,
  imageStyleOption: state.whiteFront ? state.whiteFront.imageStyleOption : null,
});

const mapDispatchToPropsFront = (dispatch) => ({
  setUploadedImageFront: (image) => dispatch(setUploadedImageFront(image, 0)),
  setImageStyleOptionFront: (imageStyleOption) => dispatch(setImageStyleOptionFront(imageStyleOption)), 
  getImageStyleOptionFront: () => dispatch({ type: "GET_IMAGE_STYLE_OPTION_FRONT" }),
});


export default connect(mapStateToPropsFront, mapDispatchToPropsFront)(BlackFront);