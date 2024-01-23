// Main2.js
import React, { useEffect, useState } from 'react'; 
import { connect } from 'react-redux';
import "../T-shirt/Style.css";
import Back from "../Asset/icon/Back.png";
import { useNavigate } from 'react-router-dom';

import whiteFrontMockup from "../Asset/T-shirt/White-Front.png";
import whiteBackMockup from "../Asset/T-shirt/White-Back.png";
import whiteRightMockup from "../Asset/T-shirt/White-Right.png";
import whiteLeftMockup from "../Asset/T-shirt/White-Left.png";

const Main2 = ({ whiteFront, whiteBack, whiteRight, whiteLeft }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    const confirmed = window.confirm(
      "คุณต้องการย้อนกลับ โดยรายการจะไม่ถูกบันทึกหรือไม่ ?"
    );
    if (confirmed) {
      navigate("/Main");
    }
  }

  const getImageStyle = (uploadedImage, imageStyleOption) => {
    let imageStyle = {};

    switch (imageStyleOption) {
      case "1, default":
        imageStyle = { width: "114px" };
        break;
      case "2":
        imageStyle = { width: "80px" };
        break;
      case "3":
        imageStyle = { width: "60px" };
        break;
      case "4":
        imageStyle = { width: "50px" };
        break;
      case "5":
        imageStyle = { width: "40px", paddingLeft: "24%" };
        break;
      case "6":
        imageStyle = { width: "30px", paddingLeft: "29%" };
        break;
      default:
        break;
    }

    return uploadedImage ? { ...imageStyle, position: "absolute" } : imageStyle;
  };

  return (
    <div>
      <div className="container">
        <img id="Logo" src={require("../logo.png")} alt="img" />
        <div className="Frame1">
          <div>
            <h3 className="CenteredHeader">CUSTOM DESIGN</h3>
          </div>
          <div className="">
            <button id="" style={{ marginLeft:'5%' }}>
              <img src={Back} alt="Back" onClick={handleGoBack} />
            </button>
          </div>

          <div className='MockupSum' style={{ display: "flex", flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
            <div className='SumMockup-Front' style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={whiteFront.uploadedImage} alt="" style={{ width: "150px", ...getImageStyle(whiteFront.uploadedImage, whiteFront.imageStyleOption) }} />
              <img src={whiteFrontMockup} alt="" style={{ width: "186px" }} />
            </div>

            <div className='SumMockup-Back' style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={whiteBack.uploadedImage} alt="" style={{ width: "150px", ...getImageStyle(whiteBack.uploadedImage, whiteBack.imageStyleOption) }} />
              <img src={whiteBackMockup} alt="" style={{ width: "186px" }} />
            </div>

            <div className='SumMockup-Right' style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={whiteRight.uploadedImage} alt="" style={{ width: "150px", ...getImageStyle(whiteRight.uploadedImage, whiteRight.imageStyleOption) }} />
              <img src={whiteRightMockup} alt="" style={{ width: "186px" }} />
            </div>

            <div className='SumMockup-Left' style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={whiteLeft.uploadedImage} alt="" style={{ width: "150px", ...getImageStyle(whiteLeft.uploadedImage, whiteLeft.imageStyleOption) }} />
              <img src={whiteLeftMockup} alt="" style={{ width: "186px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  whiteFront: {
    uploadedImage: (state.whiteFront && state.whiteFront.images && state.whiteFront.images[0]) || null,
    imageStyleOption: state.whiteFront ? state.whiteFront.imageStyleOption : null,
  },
  whiteBack: {
    uploadedImage: (state.whiteBack && state.whiteBack.images && state.whiteBack.images[1]) || null,
    imageStyleOption: state.whiteBack ? state.whiteBack.imageStyleOption : null,
  },
  whiteRight: {
    uploadedImage: (state.whiteRight && state.whiteRight.images && state.whiteRight.images[2]) || null,
    imageStyleOption: state.whiteRight ? state.whiteRight.imageStyleOption : null,
  },
  whiteLeft: {
    uploadedImage: (state.whiteLeft && state.whiteLeft.images && state.whiteLeft.images[3]) || null,
    imageStyleOption: state.whiteLeft ? state.whiteLeft.imageStyleOption : null,
  },
});

export default connect(mapStateToProps)(Main2);
