// WhitePreview.js
//import React, { useEffect, useState } from 'react'; 
import { connect } from 'react-redux';
import "../T-shirt/Style.css";
import Back from "../Asset/icon/Back.png";
import { useNavigate } from 'react-router-dom';


const WhitePreview = ({ whiteFront, whiteBack, whiteRight, whiteLeft }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    const confirmed = window.confirm(
      "คุณต้องการย้อนกลับ โดยรายการจะไม่ถูกบันทึกหรือไม่ ?"
    );
    if (confirmed) {
      navigate("/T-shirt/White-Left");
    }
  };

  const handleNext = () => {
    navigate("/Custom-Design/UserInfo");    
};

  const getImageStyle = (uploadedImage, imageStyleOption) => {
    let imageStyle = {};

    switch (imageStyleOption) {
      case "1, default":
        imageStyle = { width: "108px" };
        break;
      case "2":
        imageStyle = { width: "80px" };
        break;
      case "3":
        imageStyle = { width: "60px" };
        break;
      case "4":
        imageStyle = { width: "46px"};
        break;
      case "5":
        imageStyle = { width: "36px", paddingLeft: "44px"};
        break;
      case "6":
        imageStyle = { width: "32px", paddingLeft: "46px" };
        break;
      case "7":
        imageStyle = { width: "36px"};
        break;
      case "8":
        imageStyle = { width: "32px" };
        break;
      case "9":
        imageStyle = { width: "40px",top: "120px"};
        break;
      case "10":
        imageStyle = { width: "36px",top: "126px"};
        break;
      case "11":
        imageStyle = { width: "32px",top: "130px"};
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
        <div className="Frame2">
          <div>
            <h3 className="CenteredHeader">CUSTOM DESIGN</h3>
          </div>
          <div className="">
            <button id="" style={{ marginLeft:'5%' }}>
              <img src={Back} alt="Back" onClick={handleGoBack} />
            </button>
          </div>

         
         <div className='Layout' style={ { display: "flex", flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'column',alignItems: 'center'}}>
          <div className='MockupSum' style={{ display: "flex", flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center',gap: '80px'}}>
            <div className='SumMockup-Front' style={{ display: 'flex', justifyContent: 'center',position: 'relative' }}>
              <div className='SumCenter'>
              <div className='SumBtn'>
                <div className='SumBtn-Text'>หน้า</div>
              </div>
              <img src="/T-Shirt-White.png" alt="" style={{ width: "230px",   zIndex: 0 }} />
              <div className='SumBtn-Text' style={{ fontSize: "24px",marginTop: "10px"}}>100 -</div>
              </div>
              <img src={whiteFront.uploadedImage} alt="" style={{  position: "absolute" , width: "104px",top: "120px" ,   zIndex: 1  , ...getImageStyle(whiteFront.uploadedImage, whiteFront.imageStyleOption) }} />
            </div>

            <div className='SumMockup-Back' style={{ display: 'flex', justifyContent: 'center',position: 'relative'  }}>
            <div className='SumCenter'>
              <div className='SumBtn'>
                <div className='SumBtn-Text'>หลัง</div>
              </div>
            <img src="/T-Shirt-White-back.png" alt="" style={{ width: "230px",   zIndex: 0 }} />
            <div className='SumBtn-Text' style={{ fontSize: "24px",marginTop: "10px"}}>100 -</div>
            </div>
              <img src={whiteBack.uploadedImage} alt="" style={{  position: "absolute" , width: "104px",top: "108px" ,  zIndex: 1  , ...getImageStyle(whiteBack.uploadedImage, whiteBack.imageStyleOption) }} />
            </div>

            <div className='SumMockup-Right' style={{ display: 'flex', justifyContent: 'center',position: 'relative'  }}>
            <div className='SumCenter'>
              <div className='SumBtn'>
                <div className='SumBtn-Text'>แขนขวา</div>
              </div>
            <img src="/shirt-white-side.png" alt="" style={{ width: "230px",   zIndex: 0 }} />
            <div className='SumBtn-Text' style={{ fontSize: "24px",marginTop: "10px"}}>100 -</div>
            </div>
              <img src={whiteRight.uploadedImage} alt="" style={{ position: "absolute" , width: "48px", paddingRight: "20px", top: "120px" ,  zIndex: 1  , ...getImageStyle(whiteRight.uploadedImage, whiteRight.imageStyleOption) }} />
            </div>

            <div className='SumMockup-Left' style={{ display: 'flex', justifyContent: 'center',position: 'relative'  }}>
            <div className='SumCenter'>
              <div className='SumBtn'>
                <div className='SumBtn-Text'>แขนซ้าย</div>
              </div>
            <img src="/shirt-white-side.png" alt="" style={{ width: "230px",transform: 'scaleX(-1)',   zIndex: 0 }} />
            <div className='SumBtn-Text' style={{ fontSize: "24px",marginTop: "10px"}}>100 -</div>
              </div>
              <img src={whiteLeft.uploadedImage} alt="" style={{ position: "absolute" , width: "48px", paddingLeft: "20px", top: "120px",  zIndex: 1  , ...getImageStyle(whiteLeft.uploadedImage, whiteLeft.imageStyleOption)  }} />
            </div>
          </div>

          <div className='SumBtn-Text' style={{ fontSize: "24px",marginTop: "38px", marginBottom: "10px"}}>รวม 200 -</div>
          <button className='SamaryPrice' onClick={handleNext}>ชำระเงิน</button>
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

export default connect(mapStateToProps)(WhitePreview);
