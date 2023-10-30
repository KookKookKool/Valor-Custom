import React from "react";

import "./Style.css";
import Navigation from "../Components/Navigation"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import WhiteLeftMockup from "../Asset/T-shirt/White-Left.png";

import MenuWhiteLeft from "../Components/White/MenuWhiteLeft";

function WhiteLeft({ setProductsitemOpen }) {
  const handleGoBack = () => {
    const confirmed = window.confirm(
      "คุณต้องการย้อนกลับ ?"
    );
    if (confirmed) {
      window.location.href = "/T-shirt/White-Right";
    }

  };

  return (
    <>
      <div className="container">
        <img id="Logo" src={require("../logo.png")} alt="img" />
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
            <img id="MockupLeft" src={WhiteLeftMockup} alt="Mockup" />
            <div className="Box3">
              <MenuWhiteLeft />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhiteLeft;
