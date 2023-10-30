import React from "react";

import "./Style.css";
import Navigation from "../Components/Navigation"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import WhiteBackMockup from "../Asset/T-shirt/White-Back.png";

import MenuWhiteBack from "../Components/White/MenuWhiteBack";

function WhiteBack({ setProductsitemOpen }) {

  const handleGoBack = () => {
    const confirmed = window.confirm(
      "คุณต้องการย้อนกลับ ?"
    );
    if (confirmed) {
      window.location.href = "/T-shirt/White-Front";
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
            <img id="MockupBack" src={WhiteBackMockup} alt="Mockup" />
            <div className="Box3">
              <MenuWhiteBack />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhiteBack;
