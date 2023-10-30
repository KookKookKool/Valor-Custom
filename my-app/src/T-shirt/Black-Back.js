import React from "react";

import "./Style.css";
import Navigation from "../Components/Navigation1"; //เลือกสี
import Back from "../Asset/icon/Back.png";
import BlackBackMockup from "../Asset/T-shirt/Black-Back.png";

import MenuB from "../Components/Black/MenuBlackBack";

function BlackBack({ setProductsitemOpen }) {
  const handleGoBack = () => {
    const confirmed = window.confirm(
      "คุณต้องการย้อนกลับ ?"
    );
    if (confirmed) {
      window.location.href = "/T-shirt/Black-Front";
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
            <img id="MockupFront" src={BlackBackMockup} alt="Mockup" />
            <div className="Box3">
              <MenuB />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default BlackBack;
