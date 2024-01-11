import React from 'react';

import "./Style.css";
import Navigation from "../Components/Navigation"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import WhiteBackMockup from "../Asset/T-shirt/White-Back.png";

import MenuWhiteBack from "../Components/White/MenuWhiteBack";

function WhiteBack({ setProductsitemOpen }) {
  const handleGoBack = () => {
    const confirmed = window.confirm(
      "คุณต้องการย้อนกลับ โดยรายการจะไม่ถูกบันทึกหรือไม่ ?"
    );
    if (confirmed) {
      setProductsitemOpen(true); // ตั้งค่าเพื่อให้ ul แสดงผล                                                                               
      window.history.back();
    }
  };

  return (
    <>
    <div className="Layout">
      <div className="Box">
        <div className="Box2">
          <button id="BntBack" onClick={handleGoBack}>
            <img src={Back} alt="Back" />
          </button>
          <div className="Box3">
            <Navigation />
          </div>
        </div>
        <img id="MockupBack" src={WhiteBackMockup} alt="Mockup" />
        <div className="Box3">
          <MenuWhiteBack />
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
  setImageStyleOptionBack: (imageStyleOption) => dispatch({ type: "SET_IMAGE_STYLE_OPTION_BACK", imageStyleOption }),
});

export default connect(mapStateToPropsBack, mapDispatchToPropsBack)(WhiteBack);
